(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51567836"],{"2f01":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){function e(){}return e.prototype.getFechaActual=function(){var e=new Date,t=new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString(),n=t.substr(0,10);return n},e.prototype.getHoraActual=function(){var e=(new Date).toLocaleTimeString("es-PE");return e},e}()},a9a1:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={key:1,class:"o-hacer-encuesta-container"},u={class:"a-title a-title--center"},c=Object(a["h"])("div",{class:"a-divider"},null,-1),i=Object(a["h"])("br",null,null,-1),l={key:0,class:"a-box-no-data"},o=Object(a["h"])("p",null,"Esta encuesta aún no tiene preguntas",-1),s=[o],b=Object(a["h"])("br",null,null,-1),g={class:"u-align-end"},p=["disabled"],d=["disabled"],v=Object(a["h"])("br",null,null,-1),j={class:"u-align-end"},O={key:0,class:"o-button-group"},h=["disabled"],m={key:1,class:"o-button-group"},f=["disabled"],P=Object(a["h"])("br",null,null,-1),y={class:"u-align-end"},k={class:"o-button-group"},A=["disabled"],C=Object(a["h"])("div",{class:"m-card-pregunta-critica"},[Object(a["h"])("div",{class:"m-card-pregunta-critica__title"},[Object(a["i"])(" Queremos cuidarte, usa estos "),Object(a["h"])("br"),Object(a["i"])(" servicios, son para ti y son gratuitos ")]),Object(a["h"])("ul",{class:"m-card-pregunta-critica__list"},[Object(a["h"])("li",null,"Centro emergencia mujer (CEM)"),Object(a["h"])("li",null,"Línea 100"),Object(a["h"])("li",null,"Servicio de atención urgente")])],-1);function E(e,t,n,o,E,I){var F=Object(a["B"])("Loading"),_=Object(a["B"])("PreguntaSimple"),S=Object(a["B"])("TablePreguntaRango"),z=Object(a["B"])("SimpleModal");return Object(a["v"])(),Object(a["g"])("div",null,[-1==e.paginas?(Object(a["v"])(),Object(a["e"])(F,{key:0,message:e.messageLoading},null,8,["message"])):(Object(a["v"])(),Object(a["g"])("div",r,[Object(a["h"])("div",u,Object(a["F"])(e.encuesta.nombreEncuesta),1),c,i,0===e.preguntas.length?(Object(a["v"])(),Object(a["g"])("div",l,s)):Object(a["f"])("",!0),1===e.currentPage?(Object(a["v"])(),Object(a["g"])(a["a"],{key:1},[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(e.preguntasSimplePage1,(function(e,t){return Object(a["v"])(),Object(a["e"])(_,{key:t,pregunta:e},null,8,["pregunta"])})),128)),e.preguntasRangoPage1.length>0?(Object(a["v"])(),Object(a["e"])(S,{key:0,preguntas:e.preguntasRangoPage1,onPressPreguntaCritica:t[0]||(t[0]=function(t){return e.modalMessageIsVisible=!0})},null,8,["preguntas"])):Object(a["f"])("",!0),b,Object(a["h"])("div",g,[e.preguntasSimplePage2.length>0||e.preguntasRangoPage2.length>0?(Object(a["v"])(),Object(a["g"])("button",{key:0,type:"button",class:Object(a["p"])(e.pagina1PorFinalizar?"a-btn a-btn--muted-primary":"a-btn a-btn--primary"),disabled:e.pagina1PorFinalizar,onClick:t[1]||(t[1]=function(t){return e.changePage(2)})}," Página siguiente ",10,p)):(Object(a["v"])(),Object(a["g"])("button",{key:1,type:"button",class:Object(a["p"])(e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar,onClick:t[2]||(t[2]=function(t){return e.desarrollarEncuesta()})}," Guardar encuesta ",10,d))])],64)):Object(a["f"])("",!0),2===e.currentPage?(Object(a["v"])(),Object(a["g"])(a["a"],{key:2},[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(e.preguntasSimplePage2,(function(e,t){return Object(a["v"])(),Object(a["e"])(_,{key:t,pregunta:e},null,8,["pregunta"])})),128)),e.preguntasRangoPage2.length>0?(Object(a["v"])(),Object(a["e"])(S,{key:0,preguntas:e.preguntasRangoPage2,onPressPreguntaCritica:t[3]||(t[3]=function(t){return e.modalMessageIsVisible=!0})},null,8,["preguntas"])):Object(a["f"])("",!0),v,Object(a["h"])("div",j,[e.preguntasSimplePage3.length>0||e.preguntasRangoPage3.length>0?(Object(a["v"])(),Object(a["g"])("div",O,[Object(a["h"])("button",{type:"button",class:"a-btn a-btn--primary",onClick:t[4]||(t[4]=function(t){return e.changePage(1)})}," Página anterior "),Object(a["h"])("button",{type:"button",class:Object(a["p"])(e.pagina2PorFinalizar?"a-btn a-btn--muted-primary":"a-btn a-btn--primary"),disabled:e.pagina2PorFinalizar,onClick:t[5]||(t[5]=function(t){return e.changePage(3)})}," Página siguiente ",10,h)])):(Object(a["v"])(),Object(a["g"])("div",m,[Object(a["h"])("button",{type:"button",class:"a-btn a-btn--primary",onClick:t[6]||(t[6]=function(t){return e.changePage(1)})}," Página anterior "),Object(a["h"])("button",{type:"button",class:Object(a["p"])(e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar,onClick:t[7]||(t[7]=function(t){return e.desarrollarEncuesta()})}," Guardar encuesta ",10,f)]))])],64)):Object(a["f"])("",!0),3===e.currentPage?(Object(a["v"])(),Object(a["g"])(a["a"],{key:3},[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(e.preguntasSimplePage3,(function(e,t){return Object(a["v"])(),Object(a["e"])(_,{key:t,pregunta:e},null,8,["pregunta"])})),128)),e.preguntasRangoPage3.length>0?(Object(a["v"])(),Object(a["e"])(S,{key:0,preguntas:e.preguntasRangoPage3,onPressPreguntaCritica:t[8]||(t[8]=function(t){return e.modalMessageIsVisible=!0})},null,8,["preguntas"])):Object(a["f"])("",!0),P,Object(a["h"])("div",y,[Object(a["h"])("div",k,[Object(a["h"])("button",{type:"button",class:"a-btn a-btn--primary",onClick:t[9]||(t[9]=function(t){return e.changePage(2)})}," Página anterior "),Object(a["h"])("button",{type:"button",class:Object(a["p"])(e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar?"a-btn a-btn--muted":"a-btn a-btn--success"),disabled:e.buttonGuardarEncuestaIsDisabled||e.encuestaPorFinalizar,onClick:t[10]||(t[10]=function(t){return e.desarrollarEncuesta()})}," Guardar encuesta ",10,A)])])],64)):Object(a["f"])("",!0),Object(a["j"])(z,{isVisible:e.modalMessageIsVisible,onCloseModal:t[11]||(t[11]=function(t){return e.modalMessageIsVisible=!1})},{body:Object(a["O"])((function(){return[C]})),_:1},8,["isVisible"])]))])}var I=n("9ab4"),F={class:"o-pregunta-encuesta"},_={class:"o-pregunta-encuesta__pregunta"},S={class:"a-radio--only"},z=Object(a["h"])("label",null,null,-1),R={class:"o-pregunta-encuesta__alternativa__text"},w={class:"a-radio--only"},V=Object(a["h"])("label",null,null,-1),D={class:"o-pregunta-encuesta__alternativa__text"},U={class:"a-radio--only"},G=Object(a["h"])("label",null,null,-1),M={class:"o-pregunta-encuesta__alternativa__text"};function N(e,t,n,r,u,c){return Object(a["v"])(),Object(a["g"])("div",F,[Object(a["h"])("div",_,Object(a["F"])(e.pregunta.tituloPregunta),1),Object(a["h"])("div",null,[Object(a["h"])("div",{class:"o-pregunta-encuesta__alternativa",onClick:t[1]||(t[1]=function(t){return e.pregunta.setNumeroAlternativa(1)})},[Object(a["h"])("div",S,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"1","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.pregunta.numeroAlternativa=t})},null,512),[[a["J"],e.pregunta.numeroAlternativa]]),z]),Object(a["h"])("div",R,Object(a["F"])(e.pregunta.alternativa1),1)]),Object(a["h"])("div",{class:"o-pregunta-encuesta__alternativa",onClick:t[3]||(t[3]=function(t){return e.pregunta.setNumeroAlternativa(2)})},[Object(a["h"])("div",w,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"2","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.pregunta.numeroAlternativa=t})},null,512),[[a["J"],e.pregunta.numeroAlternativa]]),V]),Object(a["h"])("div",D,Object(a["F"])(e.pregunta.alternativa2),1)]),Object(a["h"])("div",{class:"o-pregunta-encuesta__alternativa",onClick:t[5]||(t[5]=function(t){return e.pregunta.setNumeroAlternativa(3)})},[Object(a["h"])("div",U,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"3","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.pregunta.numeroAlternativa=t})},null,512),[[a["J"],e.pregunta.numeroAlternativa]]),G]),Object(a["h"])("div",M,Object(a["F"])(e.pregunta.alternativa3),1)])])])}var J=n("3610"),x=Object(a["k"])({props:{pregunta:{type:J["a"],default:{}}},setup:function(e){return{}}}),T=n("6b0d"),H=n.n(T);const L=H()(x,[["render",N]]);var B=L,q={class:"m-table-preguntas-rango"},Q=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"Pregunta"),Object(a["h"])("th",null,"Nunca"),Object(a["h"])("th",null,"A veces"),Object(a["h"])("th",null,"Con frecuencia"),Object(a["h"])("th",null,"Con mucha frecuencia")])],-1),K={class:"o-pregunta-encuesta__pregunta"},W=["onClick"],X={class:"a-radio--only"},Y=["onUpdate:modelValue"],Z=Object(a["h"])("label",null,null,-1),$=["onClick"],ee={class:"a-radio--only"},te=["onUpdate:modelValue"],ne=Object(a["h"])("label",null,null,-1),ae=["onClick"],re={class:"a-radio--only"},ue=["onUpdate:modelValue"],ce=Object(a["h"])("label",null,null,-1),ie=["onClick"],le={class:"a-radio--only"},oe=["onUpdate:modelValue"],se=Object(a["h"])("label",null,null,-1);function be(e,t,n,r,u,c){return Object(a["v"])(),Object(a["g"])("div",q,[Object(a["h"])("table",null,[Q,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(e.preguntas,(function(t,n){return Object(a["v"])(),Object(a["g"])("tr",{key:n},[Object(a["h"])("td",null,[Object(a["h"])("span",K,Object(a["F"])(t.tituloPregunta),1)]),Object(a["h"])("td",{onClick:function(n){return e.setNumeroAlternativa(t,1)}},[Object(a["h"])("div",X,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"1","onUpdate:modelValue":function(e){return t.numeroAlternativa=e}},null,8,Y),[[a["J"],t.numeroAlternativa]]),Z])],8,W),Object(a["h"])("td",{onClick:function(n){return e.setNumeroAlternativa(t,2)}},[Object(a["h"])("div",ee,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"2","onUpdate:modelValue":function(e){return t.numeroAlternativa=e}},null,8,te),[[a["J"],t.numeroAlternativa]]),ne])],8,$),Object(a["h"])("td",{onClick:function(n){return e.setNumeroAlternativa(t,3)}},[Object(a["h"])("div",re,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"3","onUpdate:modelValue":function(e){return t.numeroAlternativa=e}},null,8,ue),[[a["J"],t.numeroAlternativa]]),ce])],8,ae),Object(a["h"])("td",{onClick:function(n){return e.setNumeroAlternativa(t,4)}},[Object(a["h"])("div",le,[Object(a["P"])(Object(a["h"])("input",{type:"radio",value:"4","onUpdate:modelValue":function(e){return t.numeroAlternativa=e}},null,8,oe),[[a["J"],t.numeroAlternativa]]),se])],8,ie)])})),128))])])])}var ge=Object(a["k"])({props:{preguntas:{type:Array,default:function(){}}},emits:["pressPreguntaCritica"],setup:function(e,t){var n=t.emit;function a(e,t){e.setNumeroAlternativa(t),1===e.indicadorCritico&&t>2&&n("pressPreguntaCritica")}return{setNumeroAlternativa:a}}});const pe=H()(ge,[["render",be]]);var de=pe,ve=n("d2f5"),je=n("3a5e"),Oe=n("6c02"),he=n("f356"),me=n("a504"),fe=n("c693"),Pe=n("c476"),ye=n("c8c8"),ke=n("8655"),Ae=n("0331"),Ce=function(){function e(){this.api=new ye["a"],this.serviceResponse=new ke["a"],this.errorHandler=new Ae["a"]}return e.prototype.desarrollar=function(e){return Object(I["a"])(this,void 0,Promise,(function(){var e;return Object(I["b"])(this,(function(t){try{return e={data:null,responseCode:0},this.serviceResponse.data=e["data"],this.serviceResponse.responseCode=e["responseCode"],[2,this.serviceResponse]}catch(n){n.response?this.errorHandler.handlerErrorResponse(n.response.status):n.request&&this.errorHandler.handlerErrorRequest()}return[2,this.serviceResponse]}))}))},e}(),Ee=n("2f01"),Ie=function(){function e(){this.numeroPregunta="",this.numeroAlternativa=""}return e}(),Fe=Object(a["k"])({components:{PreguntaSimple:B,TablePreguntaRango:de,Loading:je["a"],SimpleModal:ve["a"]},setup:function(){var e=this;Object(a["t"])((function(){return Object(I["a"])(e,void 0,void 0,(function(){return Object(I["b"])(this,(function(e){switch(e.label){case 0:return r.value=String(t.params.nombreEncuesta),[4,w()];case 1:return e.sent(),[4,V()];case 2:return e.sent(),[2]}}))}))}));var t=Object(Oe["c"])(),n=Object(Oe["d"])(),r=Object(a["y"])(""),u=new he["a"],c=new fe["a"],i=new Ce,l=new Ee["a"],o=Object(a["y"])("Cargando..."),s=Object(a["y"])({}),b=Object(a["y"])([]),g=Object(a["y"])(-1),p=Object(a["y"])([]),d=Object(a["y"])([]),v=Object(a["y"])([]),j=Object(a["y"])([]),O=Object(a["y"])([]),h=Object(a["y"])([]),m=Object(a["y"])([]),f=Object(a["y"])(0),P=Object(a["c"])((function(){return d.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),y=Object(a["c"])((function(){return O.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),k=Object(a["c"])((function(){return v.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),A=Object(a["c"])((function(){return h.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),C=Object(a["c"])((function(){return j.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),E=Object(a["c"])((function(){return m.value.map((function(e){return e.numeroAlternativa>0})).includes(!1)})),F=Object(a["y"])(!1),_=Object(a["y"])(!1),S=Object(a["c"])((function(){return P.value||y.value||k.value||A.value||C.value||E.value})),z=Object(a["c"])((function(){return P.value||y.value})),R=Object(a["c"])((function(){return k.value||A.value}));function w(){return Object(I["a"])(this,void 0,Promise,(function(){var e,t,n,a,c;return Object(I["b"])(this,(function(i){switch(i.label){case 0:return e=r.value.split("-").join(" ").toUpperCase(),t={nombreEncuesta:e,limit:"1",pag:"1"},[4,u.obtenerParaEncuestado(t)];case 1:return n=i.sent(),n.exito()&&(a=n.data["encuestas"][0],c=new me["a"],c.idEncuesta=a["idEncuesta"],c.nombreEncuesta=a["nombreEncuesta"],s.value=c),[2]}}))}))}function V(){return Object(I["a"])(this,void 0,Promise,(function(){var e,t,n;return Object(I["b"])(this,(function(a){switch(a.label){case 0:return e={idEncuesta:String(s.value.idEncuesta),limit:"100",pag:"1"},[4,c.listarParaEncuestado(e)];case 1:return t=a.sent(),t.exito()&&(b.value=[],n=t.data["preguntas"],n.forEach((function(e){var t=new J["a"];t.idEncuesta=e["idEncuesta"],t.numeroPregunta=e["numeroPregunta"],t.tipoPreguntaId=e["tipoPreguntaId"],t.tipoPreguntaDescripcion=e["tipoPreguntaDescripcion"],t.tituloPregunta=e["tituloPregunta"],t.indicadorCritico=e["indicadorCritico"],t.pagina=e["pagina"],t.alternativa1=e["alternativa1"],t.alternativa2=e["alternativa2"],t.alternativa3=e["alternativa3"],t.alternativa4=e["alternativa4"],b.value.push(t)})),g.value=t.data["paginas"],f.value=b.value.length>0?1:0,D()),[2]}}))}))}function D(){d.value=b.value.filter((function(e){return 1===e.pagina&&e.tipoPreguntaId===Pe["b"]})),v.value=b.value.filter((function(e){return 2===e.pagina&&e.tipoPreguntaId===Pe["b"]})),j.value=b.value.filter((function(e){return 3===e.pagina&&e.tipoPreguntaId===Pe["b"]})),O.value=b.value.filter((function(e){return 1===e.pagina&&e.tipoPreguntaId===Pe["a"]})),h.value=b.value.filter((function(e){return 2===e.pagina&&e.tipoPreguntaId===Pe["a"]})),m.value=b.value.filter((function(e){return 3===e.pagina&&e.tipoPreguntaId===Pe["a"]}))}function U(){return Object(I["a"])(this,void 0,Promise,(function(){var e,t,a;return Object(I["b"])(this,(function(r){switch(r.label){case 0:return F.value=!0,G(d.value),G(v.value),G(j.value),G(O.value),G(h.value),G(m.value),e=[],p.value.forEach((function(t){var n={numeroPregunta:t.numeroPregunta,numeroAlternativa:t.numeroAlternativa};e.push(n)})),t={encuestaIniciadaId:String(localStorage.getItem("encuestaIniciadaId")),fechaHoraFin:l.getFechaActual()+" "+l.getHoraActual(),preguntas:e},[4,i.desarrollar(t)];case 1:return a=r.sent(),a.exito()&&(localStorage.removeItem("encuestaIniciadaId"),o.value="Guardando encuesta...",g.value=-1,setTimeout((function(){n.push({name:"CulminarEncuesta"})}),2e3)),a.errorResponse()&&(F.value=!1),[2]}}))}))}function G(e){e.forEach((function(e){var t=new Ie;t.numeroPregunta=String(e.numeroPregunta),t.numeroAlternativa=String(e.numeroAlternativa),p.value.push(t)}))}function M(e){var t=g.value;g.value=-1,setTimeout((function(){f.value=e,g.value=t}),500)}return{encuesta:s,paginas:g,currentPage:f,preguntas:b,preguntasSimplePage1:d,preguntasSimplePage2:v,preguntasSimplePage3:j,preguntasRangoPage1:O,preguntasRangoPage2:h,preguntasRangoPage3:m,desarrollarEncuesta:U,changePage:M,preguntasSimplePage1PorFinalizar:P,preguntasRangoPage1PorFinalizar:y,preguntasSimplePage2PorFinalizar:k,preguntasRangoPage2PorFinalizar:A,preguntasSimplePage3PorFinalizar:C,preguntasRangoPage3PorFinalizar:E,encuestaPorFinalizar:S,buttonGuardarEncuestaIsDisabled:F,pagina1PorFinalizar:z,pagina2PorFinalizar:R,modalMessageIsVisible:_,messageLoading:o}}});const _e=H()(Fe,[["render",E]]);t["default"]=_e}}]);
//# sourceMappingURL=chunk-51567836.56db9e78.js.map