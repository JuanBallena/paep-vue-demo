<template>
    <div class="m-paginator">
        <div class="m-paginator__pages">
            <button 
                type="button"
                :class="currentPageIsFirstPage ? 'a-page a-page--muted' : 'a-page a-page--default'"
                :disabled="currentPageIsFirstPage"
                @click="prevPage()"
            >
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
                type="button"
                :class="activePage(page) ? 'a-page a-page--active' : 'a-page a-page--default'" 
                v-for="(page, index) in pagesVisibles" :key="index"
                @click="onChangePage(page)"
            >
                {{ page }}
            </button>
            <button
                type="button"
                :class="currentPageIsLastPage ? 'a-page a-page--muted' : 'a-page a-page--default'"
                :disabled="currentPageIsLastPage"
                @click="nextPage()"
            >
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
    </div>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({

    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        pages: {
            type: Number,
            default: 10
        },
        pagesVisible: {
            type: Number,
            default: 5
        }
    },

    emits: ['onChangePage','prevPage','nextPage'],

    setup(props, {emit}) {

        const currentPageIsFirstPage = computed(() => props.currentPage == 1);
        const currentPageIsLastPage = computed(() => props.currentPage == props.pages);

        const pagesVisibles = computed(() => {

            const gruposPaginas: number[][] = obtenerGruposPaginas();

            for (let index = 0; index < gruposPaginas.length; index++) 
            {
                if (gruposPaginas[index].includes(props.currentPage))
                {
                    return gruposPaginas[index];
                }
            }
        });

        function obtenerGruposPaginas(): number[][]
        {
            var paginas: number[] = [];
            var gruposPaginas: number[][] = [];

            for (let i = 1; i < props.pages + 1; i++)
            {
                paginas.push(i);

                if ((i) % props.pagesVisible == 0)
                {
                    gruposPaginas.push(paginas);
                    paginas = [];
                }

                if (i == props.pages)
                {
                    gruposPaginas.push(paginas);
                }
            }
            // console.log(gruposPaginas);
            return gruposPaginas;
        }

        function onChangePage(page: number) {
            emit('onChangePage', page);
        }

        function activePage(page: number): boolean {
            return props.currentPage === page;
        }

        function prevPage() {
            emit('prevPage');
        }

        function nextPage() {
            emit('nextPage');
        }

        return {
            currentPageIsFirstPage,
            currentPageIsLastPage,
            onChangePage,
            activePage,
            pagesVisibles,
            prevPage,
            nextPage
        }
    },
})
</script>
