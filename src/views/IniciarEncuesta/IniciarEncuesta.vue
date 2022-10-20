<template>
    <div class="g-login u-align-center">
        <div class="g-login__img-container">
            <img src="/img/fondo-login-encuestado.jpeg" alt="">
        </div>

        <div class="g-login__form-container">
            <div class="g-login__form">
                <div class="g-login__title">Ingresar datos</div>
                <br>
                <div class="u-text-danger">* Campos obligatorios</div>
                <br>
                <form action="">
                    <label>Nombre o apodo</label>
                    <input type="text"
                        v-model="nombre"
                        placeholder="" />
                    <br>

                    <label>Edad</label><span class="u-text-danger">*</span>
                    <input type="text"
                        v-model="edad"
                        placeholder=""
                        @keypress="soloNumeros" />
                    <br>

                    <label>Centro Educativo</label><span class="u-text-danger">*</span>
                    <input type="text"
                        v-model="centroEducativo"
                        placeholder=""
                        @keypress="soloNumeros" />
                    <br>

                    <label>Género</label><span class="u-text-danger">*</span>
                    <div class="m-radios">
                        <div class="a-radio">
                            <input type="radio" id="masculino" :value="idGeneroMasculino" v-model="idGenero">
                            <label for="masculino">Masculino</label>
                        </div>
                        <div class="a-radio">
                            <input type="radio" id="femenino" :value="idGeneroFemenino" v-model="idGenero">
                            <label for="femenino">Femenino</label>
                        </div>
                        <div class="a-radio">
                            <input type="radio" id="otro" :value="idGeneroOtro" v-model="idGenero">
                            <label for="otro">Otro</label>
                        </div>
                    </div>
                    <br>

                    <label>Distrito</label><span class="u-text-danger">*</span>
                    <br>
                    <select class="" name="" id="" v-model="idDistrito">
                        <option value="0" disabled>Seleccione distrito</option>
                        <option v-for="(distrito, index) in distritos"
                            :key="index"
                            :value="distrito.idDistrito">
                            {{ distrito.nombre }}
                        </option>
                    </select>

                    <div class="g-login__button-container">
                        <button
                            :class="buttonLoginIsDisabled || buttonIsDisabled 
                                ? 'g-login__button-container__button--disabled' 
                                : 'g-login__button-container__button'"
                            :disabled="buttonLoginIsDisabled || buttonIsDisabled"
                            type="button" 
                            @click="login()"
                        >
                            Iniciar encuesta
                        </button>
                    </div>             
                </form>              
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ObtenerEncuestaService } from '@/services/encuesta/ObtenerEncuestaService';
import { RegistrarVisitaEncuestaService } from '@/services/encuesta/RegistrarVisitaEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { Distrito } from '@/types/Distrito';
import { computed, defineComponent, onMounted, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ListarDistritoService } from '../../services/distrito/ListarDistritoService';
import { IniciarEncuestaService } from '../../services/encuesta/IniciarEncuestaService';
import { Datetime } from '../../types/Datetime';
import { Validator } from '../../types/Validator';
import * as Genero from'@/definition/Genero';

export default defineComponent({
    setup() {

        onMounted(async () => {
            nombreEncuesta.value = String(route.params.nombreEncuesta);
            
            await obtenerEncuesta();
            await listarDistritos();
            await registrarVisitaEncuesta();
        });

        const route = useRoute();
        const router = useRouter();
        const datetime: Datetime = new Datetime();
        const validator: Validator = new Validator();
        const listarDistritoService: ListarDistritoService = new ListarDistritoService();
        const obtenerEncuestaService: ObtenerEncuestaService = new ObtenerEncuestaService();
        const registrarVisitaEncuestaService: RegistrarVisitaEncuestaService = new RegistrarVisitaEncuestaService();
        const iniciarEncuestaService: IniciarEncuestaService = new IniciarEncuestaService();
        
        const nombreEncuesta: Ref<string> = ref("");
        const nombre: Ref<string> = ref("Anónimo");
        const edad: Ref<string> = ref("23");
        const centroEducativo: Ref<string> = ref("1");
        const idGenero: Ref<number> = ref(1);
        const idDistrito: Ref<number> = ref(1);
        const idEncuesta: Ref<number> = ref(2);
        const buttonLoginIsDisabled: Ref<boolean> = ref(false);

        const idGeneroMasculino: number = Genero.MASCULINO;
        const idGeneroFemenino: number = Genero.FEMENINO;
        const idGeneroOtro: number = Genero.OTRO;

        const distritos: Ref<Distrito[]> = ref([]);

        const buttonIsDisabled = computed(() => 
            edad.value == "" ||
            centroEducativo.value == "" ||
            idGenero.value == 0 ||
            idDistrito.value == 0
        );

        function soloNumeros(event: any): void
        {
            validator.soloNumeros(event);
        }

        async function listarDistritos(): Promise<void> 
        {
            const serviceResponse: ServiceResponse = await listarDistritoService.listar();

            if (serviceResponse.exito())
            {
                const array: any[] = serviceResponse.data['distritos'];

                array.forEach((item: any) => {

                    const distrito = new Distrito();
                    distrito.idDistrito = item['idDistrito'];
                    distrito.nombre = item['nombre'];

                    distritos.value.push(distrito);
                });
            }
        }

        async function obtenerEncuesta(): Promise<void>
        {
            
            const nombreEncuestaReplace = nombreEncuesta.value.split('-').join(' ').toUpperCase();

            const params = {
                nombreEncuesta: nombreEncuestaReplace,
                limit : "1",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await obtenerEncuestaService.obtenerParaEncuestado(params);

            if (serviceResponse.data['encuestas'].length === 0)
            {
                router.push({ name: 'NotFoundPage'});
            }

            if (serviceResponse.exito()) 
            {
                const item: any = serviceResponse.data['encuestas'][0];
                idEncuesta.value = item['idEncuesta'];
            } 

            if (serviceResponse.errorResponse())
            {
                router.push({ name: 'NotFoundPage'});
            }
        }

        async function registrarVisitaEncuesta(): Promise<void>
        {
            const params = {
                encuestaId: String(idEncuesta.value)
            }

            const serviceResponse: ServiceResponse = await registrarVisitaEncuestaService.registrarVisita(params);
        }

        async function login(): Promise<void> {

            buttonLoginIsDisabled.value = true;

            const params = {                
                encuestaId: String(idEncuesta.value),
                encuestado: nombre.value || 'NO INDICADO',
                edad: edad.value,
                centroEducativo: centroEducativo.value,
                generoId: String(idGenero.value),
                distritoId: String(idDistrito.value),
                fechaHoraInicio: datetime.getFechaActual() + ' ' + datetime.getHoraActual()
            }

            const serviceResponse: ServiceResponse = await iniciarEncuestaService.iniciar(params);

            if (serviceResponse.exito())
            {
                localStorage.setItem('encuestaIniciadaId', serviceResponse.data['encuestaIniciadaId']);
                router.push({ name: 'HacerEncuesta' , params: { nombreEncuesta: nombreEncuesta.value }});
            }

            if (serviceResponse.errorResponse())
            {
                buttonLoginIsDisabled.value = false;
            }
        }

        return {
            nombre,
            edad,
            centroEducativo,
            idGenero,
            idDistrito,
            login,
            distritos,
            buttonIsDisabled,
            buttonLoginIsDisabled,
            idGeneroMasculino,
            idGeneroFemenino,
            idGeneroOtro,
            soloNumeros
        }
    },
})
</script>
