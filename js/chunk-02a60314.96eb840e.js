(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02a60314"],{"0331":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("6917"),o=n("afbc"),i=n("7a23"),s=function(){function e(){this.usuarioLogueado=new r["a"],this.showModal=Object(i["n"])("showModal",(function(e){}))}return e.prototype.handlerErrorRequest=function(){},e.prototype.handlerErrorResponse=function(e){403===e&&(this.showModal("Su sesión en el sistema ha expirado"),this.usuarioLogueado.logout(),o["a"].push({name:"Home"}))},e}()},"2f01":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){}return e.prototype.getFechaActual=function(){var e=new Date,t=new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString(),n=t.substr(0,10);return n},e.prototype.getHoraActual=function(){var e=(new Date).toLocaleTimeString("es-PE");return e},e}()},"5ccd":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){}return e.prototype.soloNumeros=function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&e.preventDefault()},e.prototype.charactersConstrainNombreEncuesta=function(e){var t=e.keyCode?e.keyCode:e.which,n=[32,225,233,237,243,250];n.includes(t)||t>47&&t<58||t>64&&t<91||t>96&&t<123||e.preventDefault()},e}()},7508:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"g-login u-align-center"},i=Object(r["h"])("div",{class:"g-login__img-container"},[Object(r["h"])("img",{src:"/img/fondo-login-encuestado.jpeg",alt:""})],-1),s={class:"g-login__form-container"},a={class:"g-login__form"},u=Object(r["h"])("div",{class:"g-login__title"},"Ingresar datos",-1),c=Object(r["h"])("br",null,null,-1),l=Object(r["h"])("div",{class:"u-text-danger"},"* Campos obligatorios",-1),d=Object(r["h"])("br",null,null,-1),b={action:""},p=Object(r["h"])("label",null,"Nombre o apodo",-1),h=Object(r["h"])("br",null,null,-1),O=Object(r["h"])("label",null,"Edad",-1),E=Object(r["h"])("span",{class:"u-text-danger"},"*",-1),f=Object(r["h"])("br",null,null,-1),v=Object(r["h"])("label",null,"Centro Educativo",-1),_=Object(r["h"])("span",{class:"u-text-danger"},"*",-1),m=Object(r["h"])("br",null,null,-1),g=Object(r["h"])("label",null,"Género",-1),j=Object(r["h"])("span",{class:"u-text-danger"},"*",-1),R={class:"m-radios"},D={class:"a-radio"},A=["value"],I=Object(r["h"])("label",{for:"masculino"},"Masculino",-1),C={class:"a-radio"},N=["value"],S=Object(r["h"])("label",{for:"femenino"},"Femenino",-1),P={class:"a-radio"},y=["value"],T=Object(r["h"])("label",{for:"otro"},"Otro",-1),U=Object(r["h"])("br",null,null,-1),w=Object(r["h"])("label",null,"Distrito",-1),L=Object(r["h"])("span",{class:"u-text-danger"},"*",-1),G=Object(r["h"])("br",null,null,-1),M=Object(r["h"])("option",{value:"0",disabled:""},"Seleccione distrito",-1),H=["value"],x={class:"g-login__button-container"},V=["disabled"];function k(e,t,n,k,F,q){return Object(r["v"])(),Object(r["g"])("div",o,[i,Object(r["h"])("div",s,[Object(r["h"])("div",a,[u,c,l,d,Object(r["h"])("form",b,[p,Object(r["P"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.nombre=t}),placeholder:""},null,512),[[r["L"],e.nombre]]),h,O,E,Object(r["P"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.edad=t}),placeholder:"",onKeypress:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.soloNumeros&&e.soloNumeros.apply(e,t)})},null,544),[[r["L"],e.edad]]),f,v,_,Object(r["P"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.centroEducativo=t}),placeholder:"",onKeypress:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.soloNumeros&&e.soloNumeros.apply(e,t)})},null,544),[[r["L"],e.centroEducativo]]),m,g,j,Object(r["h"])("div",R,[Object(r["h"])("div",D,[Object(r["P"])(Object(r["h"])("input",{type:"radio",id:"masculino",value:e.idGeneroMasculino,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.idGenero=t})},null,8,A),[[r["J"],e.idGenero]]),I]),Object(r["h"])("div",C,[Object(r["P"])(Object(r["h"])("input",{type:"radio",id:"femenino",value:e.idGeneroFemenino,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.idGenero=t})},null,8,N),[[r["J"],e.idGenero]]),S]),Object(r["h"])("div",P,[Object(r["P"])(Object(r["h"])("input",{type:"radio",id:"otro",value:e.idGeneroOtro,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.idGenero=t})},null,8,y),[[r["J"],e.idGenero]]),T])]),U,w,L,G,Object(r["P"])(Object(r["h"])("select",{class:"",name:"",id:"","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.idDistrito=t})},[M,(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(e.distritos,(function(e,t){return Object(r["v"])(),Object(r["g"])("option",{key:t,value:e.idDistrito},Object(r["F"])(e.nombre),9,H)})),128))],512),[[r["K"],e.idDistrito]]),Object(r["h"])("div",x,[Object(r["h"])("button",{class:Object(r["p"])(e.buttonLoginIsDisabled||e.buttonIsDisabled?"g-login__button-container__button--disabled":"g-login__button-container__button"),disabled:e.buttonLoginIsDisabled||e.buttonIsDisabled,type:"button",onClick:t[9]||(t[9]=function(t){return e.login()})}," Iniciar encuesta ",10,V)])])])])])}var F=n("9ab4"),q=n("f356"),J=n("c8c8"),X=n("0331"),B=n("8655"),z=function(){function e(){this.api=new J["a"],this.serviceResponse=new B["a"],this.errorHandler=new X["a"]}return e.prototype.registrarVisita=function(e){return Object(F["a"])(this,void 0,Promise,(function(){var e;return Object(F["b"])(this,(function(t){try{return e={data:null,responseCode:0},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),Q=function(){function e(){this.idDistrito=0,this.nombre=""}return e}(),K=n("6c02"),Y=function(){function e(){this.api=new J["a"],this.serviceResponse=new B["a"],this.errorHandler=new X["a"]}return e.prototype.listar=function(){return Object(F["a"])(this,void 0,Promise,(function(){var e;return Object(F["b"])(this,(function(t){try{return e={data:{distritos:[{idDistrito:1,nombre:"Ancón"},{idDistrito:30,nombre:"Ate"},{idDistrito:25,nombre:"Barranco"},{idDistrito:12,nombre:"Breña"},{idDistrito:3,nombre:"Callao"},{idDistrito:4,nombre:"Carabayllo"},{idDistrito:28,nombre:"Chorrillos"},{idDistrito:8,nombre:"Comas"},{idDistrito:14,nombre:"El Agustino"},{idDistrito:9,nombre:"Independencia"},{idDistrito:17,nombre:"Jesús María"},{idDistrito:31,nombre:"La Molina"},{idDistrito:20,nombre:"La Victoria"},{idDistrito:11,nombre:"Lima"},{idDistrito:19,nombre:"Lince"},{idDistrito:7,nombre:"Los Olivos"},{idDistrito:35,nombre:"Lurín"},{idDistrito:18,nombre:"Magdalena del Mar"},{idDistrito:23,nombre:"Miraflores"},{idDistrito:16,nombre:"Pueblo Libre"},{idDistrito:5,nombre:"Puente Piedra"},{idDistrito:13,nombre:"Rímac"},{idDistrito:26,nombre:"San Borja"},{idDistrito:22,nombre:"San Isidro"},{idDistrito:10,nombre:"San Juan de Lurigancho"},{idDistrito:32,nombre:"San Juan de Miraflores"},{idDistrito:21,nombre:"San Luis"},{idDistrito:6,nombre:"San Martin de Porres"},{idDistrito:15,nombre:"San Miguel"},{idDistrito:29,nombre:"Santa Anita"},{idDistrito:27,nombre:"Santiago de Surco"},{idDistrito:24,nombre:"Surquillo"},{idDistrito:2,nombre:"Ventanilla"},{idDistrito:34,nombre:"Villa El Salvador"},{idDistrito:33,nombre:"Villa María del Triunfo"}]},responseCode:0,responseMessage:"ÉXITO"},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],this.serviceResponse.responseMessage=e["responseMessage"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),Z=function(){function e(){this.api=new J["a"],this.serviceResponse=new B["a"],this.errorHandler=new X["a"]}return e.prototype.iniciar=function(e){return Object(F["a"])(this,void 0,Promise,(function(){var e;return Object(F["b"])(this,(function(t){try{return e={data:{encuestaIniciadaId:2},responseCode:0,responseMessage:"null"},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],this.serviceResponse.responseMessage=e["responseMessage"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),$=n("2f01"),W=n("5ccd"),ee=7,te=8,ne=11,re=Object(r["k"])({setup:function(){var e=this;Object(r["t"])((function(){return Object(F["a"])(e,void 0,void 0,(function(){return Object(F["b"])(this,(function(e){switch(e.label){case 0:return l.value=String(t.params.nombreEncuesta),[4,A()];case 1:return e.sent(),[4,D()];case 2:return e.sent(),[4,I()];case 3:return e.sent(),[2]}}))}))}));var t=Object(K["c"])(),n=Object(K["d"])(),o=new $["a"],i=new W["a"],s=new Y,a=new q["a"],u=new z,c=new Z,l=Object(r["y"])(""),d=Object(r["y"])("Anónimo"),b=Object(r["y"])("23"),p=Object(r["y"])("1"),h=Object(r["y"])(1),O=Object(r["y"])(1),E=Object(r["y"])(2),f=Object(r["y"])(!1),v=ee,_=te,m=ne,g=Object(r["y"])([]),j=Object(r["c"])((function(){return""==b.value||""==p.value||0==h.value||0==O.value}));function R(e){i.soloNumeros(e)}function D(){return Object(F["a"])(this,void 0,Promise,(function(){var e,t;return Object(F["b"])(this,(function(n){switch(n.label){case 0:return[4,s.listar()];case 1:return e=n.sent(),e.exito()&&(t=e.data["distritos"],t.forEach((function(e){var t=new Q;t.idDistrito=e["idDistrito"],t.nombre=e["nombre"],g.value.push(t)}))),[2]}}))}))}function A(){return Object(F["a"])(this,void 0,Promise,(function(){var e,t,r,o;return Object(F["b"])(this,(function(i){switch(i.label){case 0:return e=l.value.split("-").join(" ").toUpperCase(),t={nombreEncuesta:e,limit:"1",pag:"1"},[4,a.obtenerParaEncuestado(t)];case 1:return r=i.sent(),0===r.data["encuestas"].length&&n.push({name:"NotFoundPage"}),r.exito()&&(o=r.data["encuestas"][0],E.value=o["idEncuesta"]),r.errorResponse()&&n.push({name:"NotFoundPage"}),[2]}}))}))}function I(){return Object(F["a"])(this,void 0,Promise,(function(){var e;return Object(F["b"])(this,(function(t){switch(t.label){case 0:return e={encuestaId:String(E.value)},[4,u.registrarVisita(e)];case 1:return t.sent(),[2]}}))}))}function C(){return Object(F["a"])(this,void 0,Promise,(function(){var e,t;return Object(F["b"])(this,(function(r){switch(r.label){case 0:return f.value=!0,e={encuestaId:String(E.value),encuestado:d.value||"NO INDICADO",edad:b.value,centroEducativo:p.value,generoId:String(h.value),distritoId:String(O.value),fechaHoraInicio:o.getFechaActual()+" "+o.getHoraActual()},[4,c.iniciar(e)];case 1:return t=r.sent(),t.exito()&&(localStorage.setItem("encuestaIniciadaId",t.data["encuestaIniciadaId"]),n.push({name:"HacerEncuesta",params:{nombreEncuesta:l.value}})),t.errorResponse()&&(f.value=!1),[2]}}))}))}return{nombre:d,edad:b,centroEducativo:p,idGenero:h,idDistrito:O,login:C,distritos:g,buttonIsDisabled:j,buttonLoginIsDisabled:f,idGeneroMasculino:v,idGeneroFemenino:_,idGeneroOtro:m,soloNumeros:R}}}),oe=n("6b0d"),ie=n.n(oe);const se=ie()(re,[["render",k]]);t["default"]=se},8655:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=0,o=-1,i=(new Map([[-2,"FALTAN_DATOS_DE_ENTRADA"],[1,"PSICOLOGO_TIENE_IDENTIFICAR_INCORRECTO"],[2,"ENCUESTA_EXISTENTE"],[3,"ENCUESTA_NO_EXISTE"],[4,"ENCUESTA_NO_SE_PUEDE_ELIMINAR_PORQUE_HA_INICIADO"],[5,"PSICOLOGO_YA_CUENTA_CON_DICHA_ENCUESTA"],[6,"PAGINA_SOLO_ENTRE_1_Y_3"],[7,"PREGUNTA_TIENE_TIPO_INVALIDO"],[8,"PREGUNTA_NO_EXISTE"],[9,"PREGUNTA_NO_SE_PUEDE_MODIFICAR_PORQUE_ENCUESTA_HA_INICIADO"],[10,"PREGUNTA_NO_SE_PUEDE_AGREGAR_PORQUE_ENCUESTA_HA_INICIADO"],[11,"ALTERNATIVA_NO_SE_PUEDE_MODIFICAR_PORQUE_ENCUESTA_HA_INICIADO"],[12,"ALTERNATIVA_NO_EXISTE"],[13,"ENCUESTA_SOLO_PUEDE_SER_ELIMINADA_POR_PSICOLOGO_CREADOR"],[14,"PSICOLOGO_NO_PUEDE_DUPLICAR_ENCUESTA"],[15,"ENCUESTA_SOLO_PUEDE_SER_COMPARTIDA_POR_PSICOLOGO_CREADOR"],[16,"PSICOLOGO_NO_PUEDE_CREAR_PREGUNTAS_EN_DICHA_ENCUESTA"],[17,"PREGUNTA_EXISTENTE_EN_DICHA_ENCUESTA"],[18,"ALTERNATIVA_NO_SE_PUEDE_REPETIR"],[19,"PSICOLOGO_NO_PUEDE_mMODIFICAR_PREGUNTAS_EN_DICHA_ENCUESTA"],[51,"CREDENCIALES_INCORRECTAS"]]),n("6c02")),s=function(){function e(){this.router=Object(i["d"])(),this.data=null,this.responseCode=-999,this.responseMessage=""}return e.prototype.exito=function(){return this.errorGeneral()?(this.router.push({name:"ErrorGeneral"}),!1):this.responseCode===r},e.prototype.errorGeneral=function(){return this.responseCode===o},e.prototype.errorResponse=function(){return this.responseCode!==r},e}()},"9ab4":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));function r(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(s,a)}u((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},c8c8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6917"),o=n("7a23"),i=function(){function e(){this.baseUrl="",this.usuarioLogueado=new r["a"],this.baseUrl=Object(o["n"])("$baseUrlApi","")}return e.prototype.getBaseUrl=function(){return this.baseUrl},e.prototype.getAuthorization=function(){var e=this.usuarioLogueado.token,t={headers:{Authorization:"Bearer "+e}};return t},e}()},f356:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("9ab4"),o=n("c8c8"),i=n("8655"),s=n("0331"),a=function(){function e(){this.api=new o["a"],this.serviceResponse=new i["a"],this.errorHandler=new s["a"]}return e.prototype.obtener=function(e){return Object(r["a"])(this,void 0,Promise,(function(){var e;return Object(r["b"])(this,(function(t){try{return e={data:{encuestas:[{idEncuesta:2,nombreEncuesta:"ENCUESTA 2",idPsicologo:3,idEstadoEncuesta:3,visitas:0,usuarioPsicologo:"psicologo2",idRol:2,rolDescripcion:"PSICOLOGO",nombrePsicologo:"MARCO JUAREZ SANTOS"}]},responseCode:0,responseMessage:"ÉXITO"},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],this.serviceResponse.responseMessage=e["responseMessage"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e.prototype.obtenerParaEncuestado=function(e){return Object(r["a"])(this,void 0,Promise,(function(){var e;return Object(r["b"])(this,(function(t){try{return e={data:{encuestas:[{idEncuesta:2,nombreEncuesta:"ENCUESTA 2",idPsicologo:3,idEstadoEncuesta:3,visitas:0,usuarioPsicologo:"psicologo2",idRol:2,rolDescripcion:"PSICOLOGO",nombrePsicologo:"MARCO JUAREZ SANTOS"}]},responseCode:0,responseMessage:"ÉXITO"},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],this.serviceResponse.responseMessage=e["responseMessage"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}()}}]);
//# sourceMappingURL=chunk-02a60314.96eb840e.js.map