(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733d79f0"],{3409:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("afbc"),r=a("9498"),i=function(){function e(){}return e.prototype.redirectToPrincipal=function(e){switch(e){case r["a"]:n["a"].push({name:"Usuarios"});break;case r["b"]:n["a"].push({name:"MisEncuestas"});break;default:break}},e}()},3597:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={key:1,class:"g-dashboard"},i={class:"g-dashboard__sidebar"},u=Object(n["h"])("div",{class:"a-title--sm u-color-success"}," Páginas de encuesta ",-1),c={class:"m-menu"},l=["onClick"],s=Object(n["h"])("i",{class:"fas fa-file-alt"},null,-1),o=Object(n["h"])("i",{class:"fa fa-plus"},null,-1),b={class:"g-dashboard__main"},d={key:1,class:"o-encuesta-container"},v={class:"a-title a-title--center"},p=Object(n["h"])("div",{class:"a-divider"},null,-1),g=Object(n["h"])("br",null,null,-1),O=Object(n["h"])("br",null,null,-1);function j(e,t,a,j,f,h){var m=Object(n["B"])("Loading"),P=Object(n["B"])("PreguntaSimple"),y=Object(n["B"])("PreguntaRango"),C=Object(n["B"])("ModalCrearPregunta");return Object(n["v"])(),Object(n["g"])("div",null,[-1==e.paginasEncuesta?(Object(n["v"])(),Object(n["e"])(m,{key:0})):(Object(n["v"])(),Object(n["g"])("div",r,[Object(n["h"])("div",i,[u,Object(n["h"])("ul",c,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(e.paginasEncuesta,(function(t){return Object(n["v"])(),Object(n["g"])("li",{key:t},[Object(n["h"])("a",{onClick:function(a){return e.onChangePage(t)},class:Object(n["p"])(e.activePage(t)?"a-link-menu--active":"")},[s,Object(n["i"])(" Página "+Object(n["F"])(t),1)],10,l)])})),128))]),e.encuesta.encuestaNoEstaCerrada()?(Object(n["v"])(),Object(n["g"])(n["a"],{key:0},[e.anadirPaginaIsVisible?(Object(n["v"])(),Object(n["g"])("div",{key:0,class:"a-text-action",onClick:t[0]||(t[0]=function(t){return e.paginasEncuesta++})},[o,Object(n["i"])(" Añadir página ")])):Object(n["f"])("",!0)],64)):Object(n["f"])("",!0)]),Object(n["h"])("div",b,[e.successPreguntas?(Object(n["v"])(),Object(n["g"])("div",d,[Object(n["h"])("div",v,Object(n["F"])(e.encuesta.nombreEncuesta),1),p,g,(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(e.preguntasPage,(function(a,r){return Object(n["v"])(),Object(n["g"])(n["a"],{key:r},[a.esTipoSimple()?(Object(n["v"])(),Object(n["e"])(P,{key:0,index:e.numeroPreguntaTemporal+r,pregunta:a,encuestaNoEstaCerrada:e.encuesta.encuestaNoEstaCerrada(),onSuccessEditarPregunta:t[1]||(t[1]=function(t){return e.listarPreguntas()}),onSuccessEliminarPregunta:t[2]||(t[2]=function(t){return e.postEliminarPregunta()})},null,8,["index","pregunta","encuestaNoEstaCerrada"])):Object(n["f"])("",!0),a.esTipoRango()?(Object(n["v"])(),Object(n["e"])(y,{key:1,index:e.numeroPreguntaTemporal+r,pregunta:a,encuestaNoEstaCerrada:e.encuesta.encuestaNoEstaCerrada(),onSuccessEditarPregunta:t[3]||(t[3]=function(t){return e.listarPreguntas()}),onSuccessEliminarPregunta:t[4]||(t[4]=function(t){return e.postEliminarPregunta()})},null,8,["index","pregunta","encuestaNoEstaCerrada"])):Object(n["f"])("",!0),O],64)})),128)),e.encuesta.encuestaNoEstaCerrada()?(Object(n["v"])(),Object(n["e"])(C,{key:0,onSuccessCrearPregunta:t[5]||(t[5]=function(t){return e.listarPreguntas()})})):Object(n["f"])("",!0)])):(Object(n["v"])(),Object(n["e"])(m,{key:0}))])]))])}var f=a("9ab4"),h=a("3a5e"),m={class:"a-title--sm"},P={key:0,class:"a-icon"},y={key:1,class:"a-icon"},C={class:"u-align-between"},E=Object(n["h"])("label",null,"Alternativas",-1),I={class:"a-chip a-chip--success"},x=["value"],k=["value"],S=["value"],w=Object(n["h"])("div",{class:"a-title--sm"},"Editar pregunta simple",-1),M=Object(n["h"])("label",null,"Título de la pregunta",-1),R=Object(n["h"])("br",null,null,-1),V=Object(n["h"])("label",null,"Alternativas",-1),B={class:"o-button-container u-align-end"},N=["disabled"];function D(e,t,a,r,i,u){var c=Object(n["B"])("Alert"),l=Object(n["B"])("SimpleModal"),s=Object(n["B"])("ConfirmModal");return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("div",m,[Object(n["i"])(Object(n["F"])(e.index)+". "+Object(n["F"])(e.pregunta.tituloPregunta)+" ",1),e.encuestaNoEstaCerrada?(Object(n["v"])(),Object(n["g"])("span",P,[Object(n["h"])("i",{class:"fas fa-pen",onClick:t[0]||(t[0]=function(t){return e.openModal()})})])):Object(n["f"])("",!0),e.encuestaNoEstaCerrada?(Object(n["v"])(),Object(n["g"])("span",y,[Object(n["h"])("i",{class:"fa fa-trash",onClick:t[1]||(t[1]=function(t){return e.modalEliminarPreguntaSimpleIsVisible=!0})})])):Object(n["f"])("",!0)]),Object(n["h"])("div",C,[E,Object(n["h"])("span",I,Object(n["F"])(e.pregunta.tipoPreguntaDescripcion),1)]),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa1,readonly:""},null,8,x),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa2,readonly:""},null,8,k),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa3,readonly:""},null,8,S),Object(n["j"])(l,{isVisible:e.modalEditarPreguntaSimpleIsVisible,onCloseModal:t[12]||(t[12]=function(t){return e.closeModal()})},{header:Object(n["O"])((function(){return[w,e.errorEditarPregunta?(Object(n["v"])(),Object(n["e"])(c,{key:0,message:e.errorEditarPregunta},null,8,["message"])):Object(n["f"])("",!0)]})),body:Object(n["O"])((function(){return[M,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.titulo=t}),class:"a-text-field",onKeyup:t[3]||(t[3]=function(t){return e.errorEditarPregunta=""}),placeholder:"Escriba una pregunta"},null,544),[[n["L"],e.titulo]]),R,V,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.alternativa1=t}),class:"a-text-field",onKeyup:t[5]||(t[5]=function(t){return e.errorEditarPregunta=""}),placeholder:"Escriba primera alternativa"},null,544),[[n["L"],e.alternativa1]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.alternativa2=t}),class:"a-text-field",onKeyup:t[7]||(t[7]=function(t){return e.errorEditarPregunta=""}),placeholder:"Escriba segunda alternativa"},null,544),[[n["L"],e.alternativa2]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.alternativa3=t}),class:"a-text-field",onKeyup:t[9]||(t[9]=function(t){return e.errorEditarPregunta=""}),placeholder:"Escriba tercera alternativa"},null,544),[[n["L"],e.alternativa3]]),Object(n["h"])("div",B,[Object(n["h"])("button",{class:"a-btn a-btn--default",onClick:t[10]||(t[10]=function(t){return e.closeModal()})}," Cerrar "),Object(n["h"])("button",{type:"button",class:Object(n["p"])(e.modificarButtonIsDisabled||e.buttonIsDisabled?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.modificarButtonIsDisabled||e.buttonIsDisabled,onClick:t[11]||(t[11]=function(t){return e.editarPregunta()})}," Modificar ",10,N)])]})),_:1},8,["isVisible"]),Object(n["j"])(s,{descripcion:"¿Está seguro de eliminar esta pregunta?",isVisible:e.modalEliminarPreguntaSimpleIsVisible,confirmButtonIsDisabled:e.confirmButtonIsDisabled,onCloseModal:t[13]||(t[13]=function(t){return e.modalEliminarPreguntaSimpleIsVisible=!1}),onConfirmar:t[14]||(t[14]=function(t){return e.eliminarPregunta()})},null,8,["isVisible","confirmButtonIsDisabled"])])}var U=a("d2f5"),A=a("98ab"),_=a("da16"),F=a("c8c8"),L=a("0331"),T=a("8655"),q=function(){function e(){this.api=new F["a"],this.serviceResponse=new T["a"],this.errorHandler=new L["a"]}return e.prototype.modificar=function(e){return Object(f["a"])(this,void 0,Promise,(function(){var e;return Object(f["b"])(this,(function(t){try{return e={data:null,responseCode:0},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],[2,this.serviceResponse]}catch(a){a.response?this.errorHandler.handlerErrorResponse(a.response.status):a.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),H=a("3610"),K=a("6917"),z=function(){function e(){this.api=new F["a"],this.serviceResponse=new T["a"],this.errorHandler=new L["a"]}return e.prototype.eliminar=function(e){return Object(f["a"])(this,void 0,Promise,(function(){var e;return Object(f["b"])(this,(function(t){try{return e={data:null,responseCode:0},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],[2,this.serviceResponse]}catch(a){a.response?this.errorHandler.handlerErrorResponse(a.response.status):a.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),G=Object(n["k"])({components:{SimpleModal:U["a"],Alert:A["a"],ConfirmModal:_["a"]},props:{pregunta:{type:H["a"],default:{}},index:{type:Number,default:0},encuestaNoEstaCerrada:{type:Boolean,default:!0}},emits:["successEditarPregunta","successEliminarPregunta"],setup:function(e,t){var a=t.emit,r=new q,i=new z,u=Object(n["y"])(!1),c=Object(n["y"])(!1),l=new K["a"],s=Object(n["y"])(!1),o=Object(n["y"])(!1),b=Object(n["y"])(""),d=Object(n["y"])(""),v=Object(n["y"])(""),p=Object(n["y"])(""),g=Object(n["y"])(""),O=Object(n["n"])("showSuccessNotification",(function(e){})),j=Object(n["n"])("showErrorNotification",(function(e){})),h=Object(n["n"])("currentPage",Object(n["y"])(0)),m=Object(n["n"])("preguntasPage1",Object(n["y"])([])),P=Object(n["n"])("preguntasPage2",Object(n["y"])([])),y=Object(n["n"])("preguntasPage3",Object(n["y"])([])),C=Object(n["c"])((function(){return""==d.value||""==v.value||""==p.value||""==g.value}));function E(){d.value=e.pregunta.tituloPregunta,v.value=e.pregunta.alternativa1,p.value=e.pregunta.alternativa2,g.value=e.pregunta.alternativa3,u.value=!0}function I(){u.value=!1,k()}function x(){return Object(f["a"])(this,void 0,Promise,(function(){var t,n;return Object(f["b"])(this,(function(i){switch(i.label){case 0:return s.value=!0,t={encuestaId:String(e.pregunta.idEncuesta),tipoPreguntaId:String(e.pregunta.tipoPreguntaId),numeroPregunta:String(e.pregunta.numeroPregunta),titulo:d.value,indicadorCritico:"0",alternativa1:v.value,alternativa2:p.value,alternativa3:g.value,psicologoModificadorId:String(l.usuarioId)},[4,r.modificar(t)];case 1:return n=i.sent(),n.exito()&&(u.value=!1,k(),O("Pregunta simple se modificó correctamente"),a("successEditarPregunta")),n.errorResponse()&&(b.value=n.responseMessage,s.value=!1),[2]}}))}))}function k(){s.value=!1,b.value=""}function S(){return Object(f["a"])(this,void 0,Promise,(function(){var t,n;return Object(f["b"])(this,(function(r){switch(r.label){case 0:return o.value=!0,1===h.value&&1===m.value.length&&P.value.length>0?(c.value=!1,o.value=!1,j("No se puede eliminar porque la página 2 tiene preguntas"),[2]):2===h.value&&1===P.value.length&&y.value.length>0?(c.value=!1,o.value=!1,j("No se puede eliminar porque la página 3 tiene preguntas"),[2]):(t={encuestaId:String(e.pregunta.idEncuesta),numeroPregunta:String(e.pregunta.numeroPregunta),psicologoEliminadorId:String(l.usuarioId)},[4,i.eliminar(t)]);case 1:return n=r.sent(),n.exito()&&(o.value=!1,c.value=!1,O("Pregunta simple se eliminó correctamente"),a("successEliminarPregunta")),n.errorResponse()&&(o.value=!1,c.value=!1,j(n.responseMessage)),[2]}}))}))}return{modalEditarPreguntaSimpleIsVisible:u,openModal:E,closeModal:I,titulo:d,alternativa1:v,alternativa2:p,alternativa3:g,modificarButtonIsDisabled:s,editarPregunta:x,errorEditarPregunta:b,buttonIsDisabled:C,confirmButtonIsDisabled:o,modalEliminarPreguntaSimpleIsVisible:c,eliminarPregunta:S}}}),$=a("6b0d"),J=a.n($);const X=J()(G,[["render",D]]);var Q=X,W={class:"a-title--sm"},Y={key:0,class:"a-icon"},Z={key:1,class:"a-icon"},ee={class:"u-align-between"},te=Object(n["h"])("label",null,"Alternativas",-1),ae={class:"a-chip a-chip--primary"},ne={key:0,class:"a-chip a-chip--danger"},re=["value"],ie=["value"],ue=["value"],ce=["value"],le=Object(n["h"])("div",{class:"a-title--sm"},"Editar pregunta rango",-1),se=Object(n["h"])("label",null,"Título de la pregunta",-1),oe={class:"a-checkbox"},be={class:"a-checkbox__icon"},de=Object(n["h"])("label",null,"Alternativas (por defecto)",-1),ve={class:"o-button-container u-align-end"},pe=["disabled"];function ge(e,t,a,r,i,u){var c=Object(n["B"])("Alert"),l=Object(n["B"])("SimpleModal"),s=Object(n["B"])("ConfirmModal");return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("div",W,[Object(n["i"])(Object(n["F"])(e.index)+". "+Object(n["F"])(e.pregunta.tituloPregunta)+" ",1),e.encuestaNoEstaCerrada?(Object(n["v"])(),Object(n["g"])("span",Y,[Object(n["h"])("i",{class:"fas fa-pen",onClick:t[0]||(t[0]=function(t){return e.openModal()})})])):Object(n["f"])("",!0),e.encuestaNoEstaCerrada?(Object(n["v"])(),Object(n["g"])("span",Z,[Object(n["h"])("i",{class:"fa fa-trash",onClick:t[1]||(t[1]=function(t){return e.modalEliminarPreguntaRangoIsVisible=!0})})])):Object(n["f"])("",!0)]),Object(n["h"])("div",ee,[te,Object(n["h"])("div",null,[Object(n["h"])("span",ae,Object(n["F"])(e.pregunta.tipoPreguntaDescripcion),1),1==e.pregunta.indicadorCritico?(Object(n["v"])(),Object(n["g"])("span",ne," CRITICA ")):Object(n["f"])("",!0)])]),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa1,readonly:""},null,8,re),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa2,readonly:""},null,8,ie),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa3,readonly:""},null,8,ue),Object(n["h"])("input",{type:"text",class:"a-text-field",value:e.pregunta.alternativa4,readonly:""},null,8,ce),Object(n["j"])(l,{isVisible:e.modalEditarPreguntaRangoIsVisible,onCloseModal:t[12]||(t[12]=function(t){return e.closeModal()})},{header:Object(n["O"])((function(){return[le,e.errorEditarPregunta?(Object(n["v"])(),Object(n["e"])(c,{key:0,message:e.errorEditarPregunta},null,8,["message"])):Object(n["f"])("",!0)]})),body:Object(n["O"])((function(){return[se,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.titulo=t}),class:"a-text-field",onKeyup:t[3]||(t[3]=function(t){return e.errorEditarPregunta=""}),placeholder:"Escriba una pregunta"},null,544),[[n["L"],e.titulo]]),Object(n["h"])("div",oe,[Object(n["h"])("div",be,[Object(n["h"])("i",{onClick:t[4]||(t[4]=function(t){return e.onChangeCheckbox()}),class:Object(n["p"])(e.checkboxPreguntaCritica?"far fa-check-square":"far fa-square")},null,2)]),Object(n["h"])("div",{class:"a-checkbox__text",onClick:t[5]||(t[5]=function(t){return e.onChangeCheckbox()})}," Pregunta crítica ")]),de,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.alternativa1=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba primera alternativa",readonly:""},null,512),[[n["L"],e.alternativa1]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.alternativa2=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba segunda alternativa",readonly:""},null,512),[[n["L"],e.alternativa2]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.alternativa3=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba tercera alternativa",readonly:""},null,512),[[n["L"],e.alternativa3]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.alternativa4=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba cuarta alternativa",readonly:""},null,512),[[n["L"],e.alternativa4]]),Object(n["h"])("div",ve,[Object(n["h"])("button",{class:"a-btn a-btn--default",onClick:t[10]||(t[10]=function(t){return e.closeModal()})}," Cerrar "),Object(n["h"])("button",{type:"button",class:Object(n["p"])(e.modificarButtonIsDisabled||e.buttonIsDisabled?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.modificarButtonIsDisabled||e.buttonIsDisabled,onClick:t[11]||(t[11]=function(t){return e.editarPregunta()})}," Guardar ",10,pe)])]})),_:1},8,["isVisible"]),Object(n["j"])(s,{descripcion:"¿Está seguro de eliminar esta pregunta?",isVisible:e.modalEliminarPreguntaRangoIsVisible,confirmButtonIsDisabled:e.confirmButtonIsDisabled,onCloseModal:t[13]||(t[13]=function(t){return e.modalEliminarPreguntaRangoIsVisible=!1}),onConfirmar:t[14]||(t[14]=function(t){return e.eliminarPregunta()})},null,8,["isVisible","confirmButtonIsDisabled"])])}var Oe=Object(n["k"])({components:{SimpleModal:U["a"],Alert:A["a"],ConfirmModal:_["a"]},props:{pregunta:{type:H["a"],default:{}},index:{type:Number,default:0},encuestaNoEstaCerrada:{type:Boolean,default:!0}},emits:["successEditarPregunta","successEliminarPregunta"],setup:function(e,t){var a=t.emit,r=new z,i=new q,u=Object(n["y"])(!1),c=Object(n["y"])(!1),l=new K["a"],s=Object(n["y"])(!1),o=Object(n["y"])(!1),b=Object(n["y"])(""),d=Object(n["y"])(""),v=Object(n["y"])(0),p=Object(n["y"])("NUNCA"),g=Object(n["y"])("A VECES"),O=Object(n["y"])("CON FRECUENCIA"),j=Object(n["y"])("CON MUCHA FRECUENCIA"),h=Object(n["n"])("showSuccessNotification",(function(e){})),m=Object(n["n"])("showErrorNotification",(function(e){})),P=Object(n["n"])("currentPage",Object(n["y"])(0)),y=Object(n["n"])("preguntasPage1",Object(n["y"])([])),C=Object(n["n"])("preguntasPage2",Object(n["y"])([])),E=Object(n["n"])("preguntasPage3",Object(n["y"])([])),I=Object(n["y"])(!1),x=Object(n["c"])((function(){return""==d.value}));function k(){d.value=e.pregunta.tituloPregunta,v.value=e.pregunta.indicadorCritico,I.value=0!==e.pregunta.indicadorCritico,u.value=!0}function S(){u.value=!1,M()}function w(){return Object(f["a"])(this,void 0,Promise,(function(){var t,n;return Object(f["b"])(this,(function(r){switch(r.label){case 0:return s.value=!0,t={encuestaId:String(e.pregunta.idEncuesta),tipoPreguntaId:String(e.pregunta.tipoPreguntaId),numeroPregunta:String(e.pregunta.numeroPregunta),titulo:d.value,indicadorCritico:String(v.value),psicologoModificadorId:String(l.usuarioId)},[4,i.modificar(t)];case 1:return n=r.sent(),n.exito()&&(u.value=!1,M(),h("Pregunta de rango se modificó correctamente"),a("successEditarPregunta")),n.errorResponse()&&(b.value=n.responseMessage,s.value=!1),[2]}}))}))}function M(){s.value=!1,b.value=""}function R(){return Object(f["a"])(this,void 0,Promise,(function(){var t,n;return Object(f["b"])(this,(function(i){switch(i.label){case 0:return o.value=!0,1===P.value&&1===y.value.length&&C.value.length>0?(c.value=!1,o.value=!1,m("No se puede eliminar porque la página 2 tiene preguntas"),[2]):2===P.value&&1===C.value.length&&E.value.length>0?(c.value=!1,o.value=!1,m("No se puede eliminar porque la página 3 tiene preguntas"),[2]):(t={encuestaId:String(e.pregunta.idEncuesta),numeroPregunta:String(e.pregunta.numeroPregunta),psicologoEliminadorId:String(l.usuarioId)},[4,r.eliminar(t)]);case 1:return n=i.sent(),n.exito()&&(o.value=!1,c.value=!1,h("Pregunta de rango se eliminó correctamente"),a("successEliminarPregunta")),n.errorResponse()&&(o.value=!1,c.value=!1,m(n.responseMessage)),[2]}}))}))}function V(){I.value=!I.value,v.value=I.value?1:0}return{modalEditarPreguntaRangoIsVisible:u,openModal:k,closeModal:S,titulo:d,alternativa1:p,alternativa2:g,alternativa3:O,alternativa4:j,modificarButtonIsDisabled:s,editarPregunta:w,errorEditarPregunta:b,buttonIsDisabled:x,modalEliminarPreguntaRangoIsVisible:c,confirmButtonIsDisabled:o,eliminarPregunta:R,indicadorCritico:v,onChangeCheckbox:V,checkboxPreguntaCritica:I}}});const je=J()(Oe,[["render",ge]]);var fe=je,he={class:"a-dotted-line"},me=Object(n["h"])("div",{class:"a-title--sm"},"Crear nueva pregunta",-1),Pe={class:"m-tabs"},ye=Object(n["h"])("i",{class:"fas fa-list"},null,-1),Ce=Object(n["h"])("i",{class:"fas fa-sort-amount-up-alt"},null,-1);function Ee(e,t,a,r,i,u){var c=Object(n["B"])("PreguntaSimpleForm"),l=Object(n["B"])("PreguntaRangoForm"),s=Object(n["B"])("SimpleModal");return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("div",he,[Object(n["h"])("i",{class:"fas fa-plus-circle","aria-hidden":"true",onClick:t[0]||(t[0]=function(t){return e.openModal()})})]),Object(n["j"])(s,{isVisible:e.modalCrearPreguntaIsVisible,onCloseModal:t[7]||(t[7]=function(t){return e.modalCrearPreguntaIsVisible=!1})},{header:Object(n["O"])((function(){return[me,Object(n["h"])("ul",Pe,[Object(n["h"])("li",{class:Object(n["p"])(e.getClassNameTab(1)),onClick:t[1]||(t[1]=function(t){return e.showPreguntaSimpleForm()})},[ye,Object(n["i"])(" Simple ")],2),Object(n["h"])("li",{class:Object(n["p"])(e.getClassNameTab(2)),onClick:t[2]||(t[2]=function(t){return e.showPreguntaRangoForm()})},[Ce,Object(n["i"])(" Rango ")],2)])]})),body:Object(n["O"])((function(){return[Object(n["P"])(Object(n["j"])(c,{onCloseModal:t[3]||(t[3]=function(t){return e.modalCrearPreguntaIsVisible=!1}),onSuccessCrearPregunta:t[4]||(t[4]=function(t){return e.successCrearPregunta()})},null,512),[[n["M"],e.preguntaSimpleFormIsVisible]]),Object(n["P"])(Object(n["j"])(l,{onCloseModal:t[5]||(t[5]=function(t){return e.modalCrearPreguntaIsVisible=!1}),onSuccessCrearPregunta:t[6]||(t[6]=function(t){return e.successCrearPregunta()})},null,512),[[n["M"],!e.preguntaSimpleFormIsVisible]])]})),_:1},8,["isVisible"])])}var Ie=Object(n["h"])("label",null,"Título de la pregunta",-1),xe=Object(n["h"])("br",null,null,-1),ke=Object(n["h"])("label",null,"Alternativas",-1),Se={class:"o-button-container u-align-end"},we=["disabled"];function Me(e,t,a,r,i,u){var c=Object(n["B"])("Alert");return Object(n["v"])(),Object(n["g"])("div",null,[e.errorCrearPregunta?(Object(n["v"])(),Object(n["e"])(c,{key:0,message:e.errorCrearPregunta},null,8,["message"])):Object(n["f"])("",!0),Ie,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.titulo=t}),class:"a-text-field","on:Keyup":t[1]||(t[1]=function(t){return e.errorCrearPregunta=""}),placeholder:"Escriba una pregunta"},null,544),[[n["L"],e.titulo]]),xe,ke,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.alternativa1=t}),class:"a-text-field","on:Keyup":t[3]||(t[3]=function(t){return e.errorCrearPregunta=""}),placeholder:"Escriba primera alternativa"},null,544),[[n["L"],e.alternativa1]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.alternativa2=t}),class:"a-text-field","on:Keyup":t[5]||(t[5]=function(t){return e.errorCrearPregunta=""}),placeholder:"Escriba segunda alternativa"},null,544),[[n["L"],e.alternativa2]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.alternativa3=t}),class:"a-text-field","on:Keyup":t[7]||(t[7]=function(t){return e.errorCrearPregunta=""}),placeholder:"Escriba tercera alternativa"},null,544),[[n["L"],e.alternativa3]]),Object(n["h"])("div",Se,[Object(n["h"])("button",{class:"a-btn a-btn--default",onClick:t[8]||(t[8]=function(t){return e.closeModal()})}," Cerrar "),Object(n["h"])("button",{type:"button",class:Object(n["p"])(e.crearButtonIsDisabled||e.buttonIsDisabled?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.crearButtonIsDisabled||e.buttonIsDisabled,onClick:t[9]||(t[9]=function(t){return e.crearPregunta()})}," Guardar ",10,we)])])}var Re=function(){function e(){this.api=new F["a"],this.serviceResponse=new T["a"],this.errorHandler=new L["a"]}return e.prototype.crear=function(e){return Object(f["a"])(this,void 0,Promise,(function(){var e;return Object(f["b"])(this,(function(t){try{return e={data:null,responseCode:0},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],[2,this.serviceResponse]}catch(a){a.response?this.errorHandler.handlerErrorResponse(a.response.status):a.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),Ve=a("c476"),Be=a("6c02"),Ne=Object(n["k"])({components:{Alert:A["a"]},emits:["closeModal","successCrearPregunta"],setup:function(e,t){var a=t.emit;Object(n["t"])((function(){return p.value=String(r.params.id)}));var r=Object(Be["c"])(),i=new Re,u=new K["a"],c=Object(n["y"])(!1),l=Object(n["y"])(""),s=Object(n["y"])(""),o=Object(n["y"])(""),b=Object(n["y"])(""),d=Object(n["y"])(""),v=Object(n["n"])("currentPage",Object(n["y"])(0)),p=Object(n["y"])(""),g=Object(n["n"])("showSuccessNotification",(function(e){})),O=Object(n["c"])((function(){return""==s.value||""==o.value||""==b.value||""==d.value}));function j(){return Object(f["a"])(this,void 0,Promise,(function(){var e,t;return Object(f["b"])(this,(function(n){switch(n.label){case 0:return c.value=!0,e={encuestaId:p.value,pagina:String(v.value),tipoPreguntaId:String(Ve["b"]),titulo:s.value,indicadorCritico:"0",alternativa1:o.value,alternativa2:b.value,alternativa3:d.value,psicologoCreadorId:String(u.usuarioId)},[4,i.crear(e)];case 1:return t=n.sent(),t.exito()&&(h(),g("Pregunta simple se registró correctamente"),a("successCrearPregunta")),t.errorResponse()&&(c.value=!1,l.value=t.responseMessage),[2]}}))}))}function h(){c.value=!1,s.value="",o.value="",b.value="",d.value=""}function m(){h(),a("closeModal")}return{titulo:s,alternativa1:o,alternativa2:b,alternativa3:d,crearPregunta:j,closeModal:m,crearButtonIsDisabled:c,errorCrearPregunta:l,buttonIsDisabled:O}}});const De=J()(Ne,[["render",Me]]);var Ue=De,Ae=Object(n["h"])("label",null,"Título de la pregunta",-1),_e={class:"a-checkbox"},Fe={class:"a-checkbox__icon"},Le=Object(n["h"])("label",null,"Alternativas (por defecto)",-1),Te={class:"o-button-container u-align-end"},qe=["disabled"];function He(e,t,a,r,i,u){var c=Object(n["B"])("Alert");return Object(n["v"])(),Object(n["g"])("div",null,[e.errorCrearPregunta?(Object(n["v"])(),Object(n["e"])(c,{key:0,message:e.errorCrearPregunta},null,8,["message"])):Object(n["f"])("",!0),Ae,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.titulo=t}),class:"a-text-field",onKeyup:t[1]||(t[1]=function(t){return e.errorCrearPregunta=""}),placeholder:"Escriba una pregunta"},null,544),[[n["L"],e.titulo]]),Object(n["h"])("div",_e,[Object(n["h"])("div",Fe,[Object(n["h"])("i",{onClick:t[2]||(t[2]=function(t){return e.onChangeCheckbox()}),class:Object(n["p"])(e.checkboxPreguntaCritica?"far fa-check-square":"far fa-square")},null,2)]),Object(n["h"])("div",{class:"a-checkbox__text",onClick:t[3]||(t[3]=function(t){return e.onChangeCheckbox()})}," Pregunta crítica ")]),Le,Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.alternativa1=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba primera alternativa",readonly:""},null,512),[[n["L"],e.alternativa1]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.alternativa2=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba segunda alternativa",readonly:""},null,512),[[n["L"],e.alternativa2]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.alternativa3=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba tercera alternativa",readonly:""},null,512),[[n["L"],e.alternativa3]]),Object(n["P"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.alternativa4=t}),class:"a-text-field u-bg-color-accent u-color-muted",placeholder:"Escriba cuarta alternativa",readonly:""},null,512),[[n["L"],e.alternativa4]]),Object(n["h"])("div",Te,[Object(n["h"])("button",{class:"a-btn a-btn--default",onClick:t[8]||(t[8]=function(t){return e.closeModal()})}," Cerrar "),Object(n["h"])("button",{type:"button",class:Object(n["p"])(e.crearButtonIsDisabled||e.buttonIsDisabled?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.crearButtonIsDisabled||e.buttonIsDisabled,onClick:t[9]||(t[9]=function(t){return e.crearPregunta()})}," Guardar ",10,qe)])])}var Ke=Object(n["k"])({components:{Alert:A["a"]},emits:["closeModal","successCrearPregunta"],setup:function(e,t){var a=t.emit;Object(n["t"])((function(){return j.value=String(r.params.id)}));var r=Object(Be["c"])(),i=new Re,u=new K["a"],c=Object(n["y"])(!1),l=Object(n["y"])(""),s=Object(n["y"])(""),o=Object(n["y"])(0),b=Object(n["y"])("NUNCA"),d=Object(n["y"])("A VECES"),v=Object(n["y"])("CON FRECUENCIA"),p=Object(n["y"])("CON MUCHA FRECUENCIA"),g=Object(n["n"])("currentPage",Object(n["y"])(0)),O=Object(n["y"])(!1),j=Object(n["y"])(""),h=Object(n["n"])("showSuccessNotification",(function(e){})),m=Object(n["c"])((function(){return""==s.value}));function P(){return Object(f["a"])(this,void 0,Promise,(function(){var e,t;return Object(f["b"])(this,(function(n){switch(n.label){case 0:return c.value=!0,e={encuestaId:j.value,pagina:String(g.value),indicadorCritico:String(o.value),tipoPreguntaId:String(Ve["a"]),titulo:s.value,psicologoCreadorId:String(u.usuarioId)},[4,i.crear(e)];case 1:return t=n.sent(),t.exito()&&(y(),h("Pregunta de rango se registró correctamente"),a("successCrearPregunta")),t.errorResponse()&&(c.value=!1,l.value=t.responseMessage),[2]}}))}))}function y(){c.value=!1,s.value="",b.value="",d.value="",v.value=""}function C(){y(),a("closeModal")}function E(){O.value=!O.value,o.value=O.value?1:0}return{titulo:s,alternativa1:b,alternativa2:d,alternativa3:v,alternativa4:p,crearPregunta:P,closeModal:C,crearButtonIsDisabled:c,errorCrearPregunta:l,buttonIsDisabled:m,checkboxPreguntaCritica:O,onChangeCheckbox:E}}});const ze=J()(Ke,[["render",He]]);var Ge=ze,$e=Object(n["k"])({components:{SimpleModal:U["a"],PreguntaSimpleForm:Ue,PreguntaRangoForm:Ge},emits:["successCrearPregunta"],setup:function(e,t){var a=t.emit,r=Object(n["y"])(!1),i=Object(n["y"])(1),u=1,c=2,l=Object(n["c"])((function(){return 1==i.value}));function s(){i.value=u,r.value=!0}function o(){i.value=u}function b(){i.value=c}function d(e){return e==i.value?"m-tabs__tab m-tabs__tab--active":"m-tabs__tab"}function v(){r.value=!1,a("successCrearPregunta")}return{modalCrearPreguntaIsVisible:r,openModal:s,preguntaSimpleFormIsVisible:l,getClassNameTab:d,showPreguntaSimpleForm:o,showPreguntaRangoForm:b,successCrearPregunta:v}}});const Je=J()($e,[["render",Ee]]);var Xe=Je,Qe=a("f356"),We=a("c693"),Ye=a("a504"),Ze=a("38d0"),et=a("3409"),tt=Object(n["k"])({components:{Loading:h["a"],ModalCrearPregunta:Xe,PreguntaSimple:Q,PreguntaRango:fe},setup:function(){var e=this,t=new et["a"],a=new Ze["a"],r=Object(Be["c"])(),i=new Qe["a"],u=new We["a"],c=new K["a"],l=Object(n["y"])(1),s=Object(n["y"])({}),o=Object(n["y"])([]),b=Object(n["y"])([]),d=Object(n["y"])([]),v=Object(n["y"])([]),p=Object(n["y"])([]),g=Object(n["y"])(-1),O=Object(n["y"])(1),j=Object(n["y"])(!1);Object(n["w"])("currentPage",O),Object(n["w"])("preguntasPage1",d),Object(n["w"])("preguntasPage2",v),Object(n["w"])("preguntasPage3",p);var h=Object(n["y"])("");function m(){return Object(f["a"])(this,void 0,Promise,(function(){var e,t,a,n,r;return Object(f["b"])(this,(function(u){switch(u.label){case 0:return e={idEncuesta:h.value,idPsicologo:String(c.usuarioId),limit:"1",pag:"1"},[4,i.obtener(e)];case 1:return t=u.sent(),t.exito()&&(a=t.data["encuestas"][0],n=new Ye["a"],n.idEncuesta=a["idEncuesta"],n.idEstadoEncuesta=a["idEstadoEncuesta"],n.idPsicologo=a["idPsicologo"],n.idRol=a["idRol"],n.nombreEncuesta=a["nombreEncuesta"],n.nombrePsicologo=a["nombrePsicologo"],n.rolDescripcion=a["rolDescripcion"],n.visitas=a["visitas"],s.value=n,r=s.value.nombreEncuesta.split(" ").join("-").toLowerCase(),0===c.idEncuesta&&(c.setIdEncuesta(s.value.idEncuesta),c.setNombreEncuesta(r))),[2]}}))}))}function P(){return Object(f["a"])(this,void 0,Promise,(function(){var e,t,a,n,r,i,c;return Object(f["b"])(this,(function(l){switch(l.label){case 0:return e={idEncuesta:h.value,limit:"100",pag:"1"},[4,u.listar(e)];case 1:return t=l.sent(),t.exito()&&(o.value=[],a=t.data["preguntas"],n=0,r=0,i=0,c=0,a.forEach((function(e){var t=new H["a"];t.idEncuesta=e["idEncuesta"],t.numeroPregunta=e["numeroPregunta"],t.tipoPreguntaId=e["tipoPreguntaId"],t.tipoPreguntaDescripcion=e["tipoPreguntaDescripcion"],t.tituloPregunta=e["tituloPregunta"],t.indicadorCritico=e["indicadorCritico"],t.pagina=e["pagina"],t.alternativa1=e["alternativa1"],t.alternativa2=e["alternativa2"],t.alternativa3=e["alternativa3"],t.alternativa4=e["alternativa4"],o.value.push(t),1==e["pagina"]&&n++,2==e["pagina"]&&r++,3==e["pagina"]&&i++})),n>0&&c++,r>0&&c++,i>0&&c++,g.value=0===c?1:c,y(),C(O.value)),j.value=!0,[2]}}))}))}function y(){d.value=o.value.filter((function(e){return 1===e.pagina})),v.value=o.value.filter((function(e){return 2===e.pagina})),p.value=o.value.filter((function(e){return 3===e.pagina}))}function C(e){1===e&&(b.value=d.value,l.value=1),2===e&&(b.value=v.value,l.value=d.value.length+1),3===e&&(b.value=p.value,l.value=d.value.length+v.value.length+1)}function E(e){if(e!=O.value){if(1==e&&0==d.value.length)return O.value=e,void C(e);if(2==e&&0==v.value.length)return O.value=e,void C(e);if(3==e&&0==p.value.length)return O.value=e,void C(e);j.value=!1,O.value=e,C(e),setTimeout((function(){j.value=!0}),500)}}function I(e){return O.value==e}function x(){return Object(f["a"])(this,void 0,Promise,(function(){return Object(f["b"])(this,(function(e){switch(e.label){case 0:return 3!==O.value?[3,2]:(p.value.length-1==0&&(O.value=2),[4,P()]);case 1:return e.sent(),[2];case 2:return 2!==O.value?[3,4]:(v.value.length-1==0&&(O.value=1),[4,P()]);case 3:return e.sent(),[2];case 4:return[4,P()];case 5:return e.sent(),[2]}}))}))}Object(n["t"])((function(){return Object(f["a"])(e,void 0,void 0,(function(){var e,n;return Object(f["b"])(this,(function(i){switch(i.label){case 0:return h.value=String(r.params.id),e={encuestaId:String(r.params.id),psicologoId:String(c.usuarioId)},[4,a.validar(e)];case 1:return n=i.sent(),n?[4,m()]:(t.redirectToPrincipal(c.rolId),[2]);case 2:return i.sent(),[4,P()];case 3:return i.sent(),[2]}}))}))}));var k=Object(n["c"])((function(){return 1===O.value?d.value.length>0&&1===g.value||v.value.length>0&&2===g.value:2===O.value&&(v.value.length>0&&2===g.value)}));return{encuesta:s,preguntasPage:b,paginasEncuesta:g,onChangePage:E,activePage:I,listarPreguntas:P,anadirPaginaIsVisible:k,numeroPreguntaTemporal:l,successPreguntas:j,postEliminarPregunta:x}}});const at=J()(tt,[["render",j]]);t["default"]=at},"38d0":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("9ab4"),r=a("c8c8"),i=a("0331"),u=a("8655"),c=function(){function e(){this.api=new r["a"],this.serviceResponse=new u["a"],this.errorHandler=new i["a"]}return e.prototype.validar=function(e){return Object(n["a"])(this,void 0,Promise,(function(){var e;return Object(n["b"])(this,(function(t){try{if(e={data:{autorizado:!0},responseCode:0,responseMessage:"ÉXITO"},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],this.serviceResponse.responseMessage=e["responseMessage"],this.serviceResponse.exito())return[2,this.serviceResponse.data["autorizado"]]}catch(a){a.response?this.errorHandler.handlerErrorResponse(a.response.status):a.request&&this.errorHandler.handlerErrorRequest()}return[2,!1]}))}))},e}()},da16:function(e,t,a){"use strict";var n=a("7a23"),r={key:0,class:"m-simple-modal"},i={class:"m-simple-modal__body m-simple-modal--md"},u=Object(n["h"])("div",{class:"a-title--sm"},"Confirmar",-1),c=Object(n["h"])("br",null,null,-1),l={class:"u-align-end"},s=["disabled"];function o(e,t,a,o,b,d){return Object(n["v"])(),Object(n["e"])(n["b"],{name:"slide-fade"},{default:Object(n["O"])((function(){return[e.isVisible?(Object(n["v"])(),Object(n["g"])("div",r,[Object(n["h"])("div",i,[Object(n["h"])("i",{class:"m-simple-modal__close fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("closeModal")})}),u,Object(n["h"])("div",null,[Object(n["h"])("label",null,Object(n["F"])(e.descripcion),1)]),c,Object(n["h"])("div",l,[Object(n["h"])("div",null,[Object(n["h"])("button",{class:"a-btn a-btn--default",onClick:t[1]||(t[1]=function(t){return e.$emit("closeModal")})},"Cancelar")]),Object(n["h"])("div",null,[Object(n["h"])("button",{class:Object(n["p"])(e.confirmButtonIsDisabled?"a-btn a-btn--muted":"a-btn a-btn--success"),onClick:t[2]||(t[2]=function(t){return e.$emit("confirmar")}),disabled:e.confirmButtonIsDisabled}," Continuar ",10,s)])])])])):Object(n["f"])("",!0)]})),_:1})}var b=Object(n["k"])({props:{isVisible:{type:Boolean,default:!1},descripcion:{type:String,default:"Está seguro de continuar con esta acción?"},confirmButtonIsDisabled:{type:Boolean,default:!1}},emits:["closeModal","confirmar"]}),d=a("6b0d"),v=a.n(d);const p=v()(b,[["render",o]]);t["a"]=p}}]);
//# sourceMappingURL=chunk-733d79f0.ed447809.js.map