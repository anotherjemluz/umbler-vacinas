(function(a){function e(e){for(var o,i,n=e[0],c=e[1],d=e[2],m=0,p=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&p.push(t[i][0]),t[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(a[o]=c[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var a,e=0;e<r.length;e++){for(var s=r[e],o=!0,n=1;n<s.length;n++){var c=s[n];0!==t[c]&&(o=!1)}o&&(r.splice(e--,1),a=i(i.s=s[0]))}return a}var o={},t={app:0},r=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=a,i.c=o,i.d=function(a,e,s){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:s})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var o in a)i.d(s,o,function(e){return a[e]}.bind(null,o));return s},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(a,e,s){a.exports=s("56d7")},"04c9":function(a,e,s){},4322:function(a,e,s){"use strict";var o=s("5506"),t=s.n(o);t.a},5506:function(a,e,s){},"56d7":function(a,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),t=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{attrs:{id:"app"},on:{scroll:function(e){return a.setProgress()}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:a.showStart,expression:"showStart"}],staticClass:"start"},[o("h1",{on:{click:a.boraVacinar}},[a._v("Bora Vacinar?")]),o("img",{staticClass:"dr_img",attrs:{src:s("8149")}})]),o("Nav",{directives:[{name:"show",rawName:"v-show",value:a.showContent,expression:"showContent"}]}),o("div",{directives:[{name:"show",rawName:"v-show",value:a.showIdade,expression:"showIdade"}],staticClass:"pIdade"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.userIdade,expression:"userIdade"}],attrs:{type:"text",placeholder:"Qual a sua idade?",required:""},domProps:{value:a.userIdade},on:{input:function(e){e.target.composing||(a.userIdade=e.target.value)}}}),o("h1",{on:{click:a.pIdade}},[a._v("Próximo")]),o("img",{staticClass:"dr_input_img",attrs:{src:s("8149")}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:a.showEstado,expression:"showEstado"}],staticClass:"pEstado"},[o("select",{attrs:{id:"estado",name:"estado"}},[o("option",{attrs:{value:"selecione"}},[a._v("Selecione seu Estado")]),a._l(a.estados,(function(e){return o("option",{attrs:{value:"esttado.sigla"}},[a._v(a._s(e.nome))])}))],2),o("h1",{on:{click:a.pEstado}},[a._v("Próximo")]),o("img",{staticClass:"dr_input_img",attrs:{src:s("8149")}})]),o("Home",{directives:[{name:"show",rawName:"v-show",value:a.showContent,expression:"showContent"}]}),o("footer",{directives:[{name:"show",rawName:"v-show",value:a.showContent,expression:"showContent"}]})],1)},r=[],i=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"navigation"},[a._m(0),s("svg",{staticClass:"progress_svg",attrs:{width:"599",height:"17",viewBox:"0 0 599 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("rect",{attrs:{id:"fundo",y:"-17",x:"-567",width:"565",height:"17",rx:"8.5",fill:"white"}}),s("rect",{attrs:{id:"complete",y:"-17",x:"-567",width:"565",height:"17",rx:"8.5",fill:"#60B9B0"}}),s("rect",{attrs:{x:"1.5",y:"1.5",width:"566",height:"14",rx:"7",stroke:"black","stroke-width":"3"}}),s("path",{attrs:{d:"M539 7L539 14",stroke:"black"}}),s("path",{attrs:{d:"M545 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M550 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M555 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M561 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M512 7L512 14",stroke:"black"}}),s("path",{attrs:{d:"M518 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M523 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M528 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M534 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M485 7L485 14",stroke:"black"}}),s("path",{attrs:{d:"M491 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M496 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M501 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M507 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M458 7L458 14",stroke:"black"}}),s("path",{attrs:{d:"M464 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M469 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M474 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M480 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M431 7L431 14",stroke:"black"}}),s("path",{attrs:{d:"M437 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M442 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M447 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M453 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M404 7L404 14",stroke:"black"}}),s("path",{attrs:{d:"M410 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M415 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M420 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M426 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M377 7L377 14",stroke:"black"}}),s("path",{attrs:{d:"M383 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M388 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M393 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M399 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M350 7L350 14",stroke:"black"}}),s("path",{attrs:{d:"M356 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M361 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M366 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M372 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M323 7L323 14",stroke:"black"}}),s("path",{attrs:{d:"M329 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M334 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M339 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M345 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M296 7L296 14",stroke:"black"}}),s("path",{attrs:{d:"M302 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M307 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M312 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M318 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M269 7L269 14",stroke:"black"}}),s("path",{attrs:{d:"M275 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M280 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M285 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M291 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M242 7L242 14",stroke:"black"}}),s("path",{attrs:{d:"M248 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M253 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M258 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M264 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M215 7L215 14",stroke:"black"}}),s("path",{attrs:{d:"M221 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M226 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M231 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M237 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M188 7L188 14",stroke:"black"}}),s("path",{attrs:{d:"M194 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M199 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M204 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M210 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M161 7L161 14",stroke:"black"}}),s("path",{attrs:{d:"M167 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M172 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M177 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M183 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M134 7L134 14",stroke:"black"}}),s("path",{attrs:{d:"M140 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M145 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M150 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M156 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M107 7L107 14",stroke:"black"}}),s("path",{attrs:{d:"M113 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M118 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M123 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M129 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M80 7L80 14",stroke:"black"}}),s("path",{attrs:{d:"M86 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M91 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M96 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M102 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M53 7L53 14",stroke:"black"}}),s("path",{attrs:{d:"M59 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M64 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M69 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M75 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M26 7L26 14",stroke:"black"}}),s("path",{attrs:{d:"M32 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M37 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M42 11.4546V14",stroke:"black"}}),s("path",{attrs:{d:"M48 11.4546V14",stroke:"black"}}),s("mask",{attrs:{id:"path-104-inside-1",fill:"white"}},[s("rect",{attrs:{x:"566",y:"4",width:"9",height:"9",rx:"2"}})]),s("rect",{attrs:{x:"566",y:"4",width:"9",height:"9",rx:"2",fill:"#D6E239",stroke:"black","stroke-width":"6",mask:"url(#path-104-inside-1)"}}),s("rect",{attrs:{x:"573",y:"7",width:"26",height:"3",rx:"1.5",fill:"black"}})])])},n=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"nav"},[s("a",{attrs:{href:"#historia"}},[a._v("Hístoria ")]),s("a",{attrs:{href:"#mitos"}},[a._v("Mitos")]),s("a",{attrs:{href:"#carteira"}},[a._v("Carteira")])])}],c={name:"Nav",data:function(){return{}},methods:{}},d=c,l=(s("d79f"),s("2877")),m=Object(l["a"])(d,i,n,!1,null,null,null),p=m.exports,u=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"home"},[s("Inicio"),s("Historia"),s("Mitos"),s("Vacinacao"),s("Carteira")],1)},v=[],h=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{attrs:{id:"inicio"}},[s("p",[a._v(a._s(a.msg))])])},f=[],k={name:"Inicio",props:["msg"]},b=k,g=(s("4322"),Object(l["a"])(b,h,f,!1,null,"2f31ef73",null)),_=g.exports,M=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{attrs:{id:"historia"}},[s("h1",[a._v("Hístoria das vacinas")]),s("div",{staticClass:"evento_grid"},a._l(a.cronologia,(function(e,o){return s("div",{staticClass:"evento"},[s("h2",[a._v(a._s(e.ano))]),s("p",[a._v(a._s(e.descricao))])])})),0)])},C=[],V=s("5cdb"),w={name:"Historia",data:function(){return{cronologia:V}},methods:{hideJapas:function(){for(var a=document.getElementsByTagName("span"),e=a.length-1;e>=0;--e)a[e].remove()}},mounted:function(){this.hideJapas()}},I=w,x=(s("6244"),Object(l["a"])(I,M,C,!1,null,"3b4252f0",null)),P=x.exports,E=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{attrs:{id:"mitos"}},[a._m(0),a._l(a.mitos,(function(e,o){return s("div",{staticClass:"janela",attrs:{id:e.id},on:{click:function(e){return a.fecharJanela(o)}}},[s("div",{staticClass:"barra_pesquisa"},[a.mobile?s("h4",{staticClass:"mobile-slice"},[a._v(a._s(e.manchete.slice(0,20)+"..."))]):a._e(),a.mobile?a._e():s("h4",{staticClass:"desktop-slice"},[a._v(a._s(e.manchete.slice(0,40)+"..."))]),a._m(1,!0)]),s("div",{staticClass:"conteudo"},[s("h3",[a._v(a._s(e.manchete))]),s("p",[a._v(a._s(e.resposta))])])])}))],2)},S=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("h1",[a._v("Mitos sobre "),s("br"),a._v(" vacinas")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"dots"},[s("div",{staticClass:"dot green"}),s("div",{staticClass:"dot yellow"}),s("div",{staticClass:"dot red"})])}],O=(s("99af"),s("c768")),A={name:"Mitos",data:function(){return{mitos:O,mobile:!1}},methods:{fecharJanela:function(a){a++,console.log(a),document.getElementById(a).style.display="none"}},mounted:function(){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(console.log(a),a<901){this.mobile=!0;for(var e=0;e<this.mitos.length;e++){var s=e;s++;var o="".concat(240+10*s,"px auto 0px auto");document.getElementById(s).style.margin=o}}else{this.mobile=!1;for(var t=0;t<this.mitos.length;t++){var r=t;r++;var i="".concat(300+10*r,"px 0px 0px  ").concat(200+20*r,"px ");document.getElementById(r).style.margin=i}}}},q=A,R=(s("f5d4"),Object(l["a"])(q,E,S,!1,null,null,null)),y=R.exports,j=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div")},N=[],D={name:"Vacinacao"},L=D,B=Object(l["a"])(L,j,N,!1,null,null,null),H=B.exports,T=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{attrs:{id:"carteira"}},[s("h1",[a._v("Carteira: Vacinas recomendadas para a sua idade.")]),s("div",{staticClass:"vacinas_grid"},[a._l(a.vacinas,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:a.userIdade<10&&"Criança"===e.classificacao,expression:'userIdade < 10 && vacina.classificacao === "Criança"'}],staticClass:"vacina"},[s("h2",[a._v(a._s(e.nome))]),s("p",[a._v(a._s(e.doses))]),s("p",[a._v(a._s(e.descricao))]),s("p",[s("strong",[a._v("Protege contra:")]),a._v(" "+a._s(e.protecaoContra))]),s("p",[s("strong",[a._v("Classificação")]),a._v(" "+a._s(e.classificacao))]),s("p",[s("strong",[a._v(" Oferta:")]),a._v(" "+a._s(e.oferta))]),s("p",[s("strong",[a._v("Contra indicação:")]),a._v(" "+a._s(e.contraIndicacao?""+e.contraIndicacao:"nenhuma"))])])})),a._l(a.vacinas,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:a.userIdade=a.userIdade<20&&"Adolescente"===e.classificacao,expression:'userIdade = 10 && userIdade < 20 && vacina.classificacao === "Adolescente"'}],staticClass:"vacina"},[s("h2",[a._v(a._s(e.nome))]),s("p",[a._v(a._s(e.doses))]),s("p",[a._v(a._s(e.descricao))]),s("p",[s("strong",[a._v("Protege contra:")]),a._v(" "+a._s(e.protecaoContra))]),s("p",[s("strong",[a._v("Classificação")]),a._v(" "+a._s(e.classificacao))]),s("p",[s("strong",[a._v(" Oferta:")]),a._v(" "+a._s(e.oferta))]),s("p",[s("strong",[a._v("Contra indicação:")]),a._v(" "+a._s(e.contraIndicacao?""+e.contraIndicacao:"nenhuma"))])])})),a._l(a.vacinas,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:a.userIdade=a.userIdade<60&&"Adulto"===e.classificacao,expression:'userIdade = 20 && userIdade < 60 && vacina.classificacao === "Adulto"'}],staticClass:"vacina"},[s("h2",[a._v(a._s(e.nome))]),s("p",[a._v(a._s(e.doses))]),s("p",[a._v(a._s(e.descricao))]),s("p",[s("strong",[a._v("Protege contra:")]),a._v(" "+a._s(e.protecaoContra))]),s("p",[s("strong",[a._v("Classificação")]),a._v(" "+a._s(e.classificacao))]),s("p",[s("strong",[a._v(" Oferta:")]),a._v(" "+a._s(e.oferta))]),s("p",[s("strong",[a._v("Contra indicação:")]),a._v(" "+a._s(e.contraIndicacao?""+e.contraIndicacao:"nenhuma"))])])})),a._l(a.vacinas,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:"Gestantes"===e.classificacao,expression:'vacina.classificacao === "Gestantes"'}],staticClass:"vacina"},[s("h2",[a._v("Outras vacinas:")]),s("h2",[a._v(a._s(e.nome))]),s("p",[a._v(a._s(e.doses))]),s("p",[a._v(a._s(e.descricao))]),s("p",[s("strong",[a._v("Protege contra:")]),a._v(" "+a._s(e.protecaoContra))]),s("p",[s("strong",[a._v("Classificação")]),a._v(" "+a._s(e.classificacao))]),s("p",[s("strong",[a._v(" Oferta:")]),a._v(" "+a._s(e.oferta))]),s("p",[s("strong",[a._v("Contra indicação:")]),a._v(" "+a._s(e.contraIndicacao?""+e.contraIndicacao:"nenhuma"))])])}))],2)])},z=[],J=s("9053"),$=s("2f62"),G={name:"Carteira",computed:Object($["b"])(["userIdade"]),data:function(){return{vacinas:J}}},F=G,U=(s("e19e"),Object(l["a"])(F,T,z,!1,null,null,null)),Y=U.exports,W=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div")},Q=[],X={name:"Sobre"},K=X,Z=Object(l["a"])(K,W,Q,!1,null,null,null),aa=Z.exports,ea={name:"home",components:{Inicio:_,Historia:P,Mitos:y,Vacinacao:H,Carteira:Y,Sobre:aa}},sa=ea,oa=Object(l["a"])(sa,u,v,!1,null,null,null),ta=oa.exports,ra=s("c7a4"),ia={components:{Home:ta,Nav:p},data:function(){return{userIdade:null,userEstado:null,showStart:!0,showIdade:!1,showEstado:!1,showContent:!1,scrolled:!1,pInicio:92,pHistoria:77,pMitos:57,pVacinacao:41,pCarteira:19,estados:ra,object:{name:"Object Name"}}},methods:{boraVacinar:function(){this.showStart=!this.showStart,this.showIdade=!this.showIdade},pIdade:function(){this.userIdade&&(this.$store.commit("setUserIdade",this.userIdade),this.showIdade=!this.showIdade,this.showContent=!this.showContent)},pEstado:function(){this.showEstado=!this.showEstado,this.showContent=!this.showContent},handleScroll:function(){if(this.scrolled=window.scrollY>0,window.scrollY>0){var a=window.scrollY/(document.documentElement.scrollHeight/100),e="".concat(100-(a+10),"%"),s=document.getElementById("complete");s.setAttribute("width",e)}}},created:function(){window.addEventListener("scroll",this.handleScroll)}},na=ia,ca=(s("5c0b"),Object(l["a"])(na,t,r,!1,null,null,null)),da=ca.exports;o["default"].use($["a"]);var la=new $["a"].Store({state:{userIdade:null,faixaEtaria:null},mutations:{setUserIdade:function(a,e){a.userIdade=e},setFaixaEtaria:function(a,e){a.faixaEtaria=e}},actions:{},modules:{}}),ma=s("f5af"),pa=s.n(ma),ua=s("5f5b");o["default"].config.productionTip=!1,pa.a.init(),o["default"].use(ua["a"]),new o["default"]({store:la,render:function(a){return a(da)}}).$mount("#app")},"5c0b":function(a,e,s){"use strict";var o=s("9c0c"),t=s.n(o);t.a},"5cdb":function(a){a.exports=JSON.parse('[{"ano":1749,"descricao":"Ao perceber que sobreviventes da varíola não se contaminavam de novo, despertou a ideia de se auto-provocar a doença de forma mais branda para evitar contaminações futuras. Acredita-se que essa prática tenha surgido inicialmente na Ásia. O inglês Edward Jenner descobriu a vacina após observar pessoas que ordenhavam vacas com a doença varíola bovina (uma versão mais leve da varíola humana). Essas pessoas ao terem contato com o vírus humano tinham a doença de forma menos agressiva. Então, ele recolheu o líquido criado nas vacas pela doença e colocou em arranhões de um garoto. Analisou-se que o garoto teve pequenas reações mas logo ficou bom. Semanas depois, o garoto entrou em contato com o vírus humano e não contraiu a doença."},{"ano":1800,"descricao":"O processo ficou conhecido mundialmente e em pouco tempo, apesar de ter tido resistência, passou a ser adotado mundialmente. Em 1800, a Marinha britânica adotou a utilização da vacina. "},{"ano":1804,"descricao":"á no Brasil, a vacina chegou em 1804, trazida pelo marquês de Barbacena."},{"ano":1904,"descricao":"Em 1904, aconteceu um motim conhecido como A Revolta da Vacina, na cidade do Rio de Janeiro, então capital do Brasil. A população ficou revoltada por causa de uma lei que obrigava a vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lideradas pelo médico Oswaldo Cruz."},{"ano":"Hoje","descricao":"Nos dias de hoje, mesmo depois de todas as informações disponíveis sobre os benefícios das vacinas, muitas notícias falsas circulam afirmando os malefícios das vacinas. E baseado nisso, muitas pessoas adotaram o movimento antivacina, que incentiva pessoas a não se vacinarem. Isso ocorre em diversos lugares do mundo. Neste ano, a Organização Mundial da Saúde (OMS) classificou os movimentos antivacina como uma ameaça mundial."}]')},6244:function(a,e,s){"use strict";var o=s("c87f"),t=s.n(o);t.a},8149:function(a,e,s){a.exports=s.p+"img/dr.b20ed8d9.svg"},9053:function(a){a.exports=JSON.parse('[{"doses":"Dose única","protecaoContra":"Tuberculose","classificacao":"Criança","nome":"BCG","descricao":"Deverá ser aplicada o mais precocemente possível, de preferência ainda na maternidade.","oferta":"Rede pública e privada","contraIndicacao":"Em casos de histórico familiar, suspeita de imunodeficiência ou recém-nascidos cujas mães fizeram uso de biológicos durante a gestação, a vacinação poderá ser postergada ou contraindicada."},{"doses":"10 doses: ao nascer, 3 na adolescência, 3 na vida adulta e 3 na vida idosa","protecaoContra":"Hepatite B","classificacao":"Criança","nome":"Hepatite B","descricao":"Primeira dose ao nascer, segunda dose aos 2 meses, terceira dose aos 6 meses.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"3 doses","protecaoContra":"Meningite, Tétano, Difteria, Coqueluche e Hepatite B","classificacao":"Criança","nome":"Pentavalente","descricao":"Primeira dose aos 2 meses, segunda dose aos 4 meses, terceira dose aos 6 meses. Reforço entre 15 e 18 meses. Segundo reforço entre 4 e 5 anos.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"2 doses: 15 meses e 4 anos","protecaoContra":"Difteria, Tétano e Coqueluche","classificacao":"Criança","nome":"Tríplice bacteriana","descricao":"Primeira dose aos 2 meses, segunda dose aos 4 meses, terceira dose aos 6 meses. Reforço entre 15 e 18 meses. Segundo reforço entre 4 e 5 anos.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"2 doses: 2 e 4 meses","protecaoContra":"Rotavírus Humano","classificacao":"Criança","nome":"Rotavírus","descricao":"Duas ou três doses, dependendo da vacina utilizada (monovalente ou pentavalente) entre 2 e 8 meses.","oferta":"Rede pública e privada","contraIndicacao":"Contraindicada para pessoas com mais de 4 anos de idade"},{"doses":"3 doses: 2, 4 e 6 meses","protecaoContra":"Poliomielite","classificacao":"Criança","nome":"Poliomielite injetável (VIP)","descricao":"Primeira dose aos 2 meses, segunda dose aos 4 meses, terceira dose aos 6 meses. Reforço entre 15 e 18 meses e entre 4 e 5 anos.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"2 doses: 15 meses e 4 anos","protecaoContra":"Poliomielite","classificacao":"Criança","nome":"Poliomielite Oral","descricao":"Dose única aos 12 meses.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"3 doses: 2, 4 e 12 meses","protecaoContra":"Pneumonia","classificacao":"Criança","nome":"Pneumocócica 10V","descricao":"Duas ou três doses, dependendo da vacina utilizada (VPC10 OU VPC13) entre 2 e 6 meses de vida. Reforço entre 12 e 15 meses.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"3 doses: 3, 5 e 12 meses, e vida adolescente","protecaoContra":"Meningite","classificacao":"Criança","nome":"Meningocócicas conjugadas","descricao":"Primeira dose aos 3 meses, segunda dose aos 5 meses. Reforço entre 15 e 16 meses. Segundo reforço entre 5 e 6 anos.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"2 doses: aos 5 anos de idade e na vida idosa","protecaoContra":"Determinadas pneumonias e meningites","classificacao":"Criança","nome":"Pneumocócica 23V","descricao":"Primeira dose aos 3 meses, segunda dose aos 5 meses. Reforço entre 15 e 16 meses.","oferta":"Não disponível na rede pública, apenas rede privada","contraIndicacao":null},{"doses":"Uma ou duas doses anuais","protecaoContra":"Gripe","classificacao":"Criança","nome":"Influenza","descricao":"Dose anual. Duas doses na vacinação antes dos 9 anos de idade; Uma dose anual para a população idosa. Disponível na rede pública.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"Dose única","protecaoContra":"Febre Amarela","classificacao":"Criança","nome":"Febre amarela","descricao":"Dose única aos 12 meses.","oferta":"Rede pública e privada","contraIndicacao":"A vacina contra a Febre Amarela dvee ser aplicada apenas nos Estados onde existe endemia da doença. Pessoas que viajem para estas regiões são obrigatoriamente vacinadas."},{"doses":"Dose única aos 15 meses","protecaoContra":"Hepatite A","classificacao":"Criança","nome":"Hepatite A","descricao":"As vacinas pneumocócicas 10V, Meningocócica C, hepatite A e tetraviral são aplicadas caso não haja aplicação anterior.","oferta":"Rede pública e privada","contraIndicacao":null},{"doses":"12 meses","protecaoContra":"Sarampo, Caxumba e Rubéola","classificacao":"Adolescente","nome":"Tríplice Viral","descricao":"Pessoas com a vacinação antiviral completa não precisam de reforço durante a adolescência.","contraIndicacao":"Pessoas com sarampo e quadros de imunodepressão não podem tomar esta vacina."},{"doses":"15 meses","protecaoContra":"Sarampo, caxumba, rubéola e catapora","classificacao":"Criança","nome":"Tetra Viral","descricao":"Inclui a proteção contra a catapora.","contraIndicacao":"Pessoas com sarampo e quadros de imunodepressão não podem tomar esta vacina."},{"doses":"4 anos","protecaoContra":"Catapora","classificacao":"Criança","nome":"Varicela","descricao":"Vacina contra a catapora.","contraIndicacao":"Pessoas com sarampo e quadros de imunodepressão não podem tomar esta vacina."},{"doses":"2 doses para meninas entre 9 a 14 anos, e 2 doses para meninos entre 11 e 14 anos","protecaoContra":"Papiloma Vírus Humano (HPV)","classificacao":"Adolescente","nome":"HPV","descricao":"Três doses para soropositivos entre 9 e 10 anos. Situações fora das previstas esyão disponíveis apenas na rede privada.","contraIndicacao":null},{"doses":"A cada 10 anos, começando a partir dos 7 anos de idade","protecaoContra":"Tétano e Difteria","classificacao":"Adulto","nome":"Dupla Adulto","descricao":"Reforço para proteção contra tétano e difteria.","contraIndicacao":null},{"doses":"Dose única para gestantes","protecaoContra":"Difteria, Tétano, Coqueluche e Meningite","classificacao":"Gestantes","nome":"dTpa","descricao":"Recomendada pela OMS em vários países. No Brasil, apenas as gestantes tem obrigatoriedade durante o pré-natal.","contraIndicacao":null}]')},"9c0c":function(a,e,s){},a3ee:function(a,e,s){},c768:function(a){a.exports=JSON.parse('[{"id":1,"manchete":"Vacinas causam mais doenças do que previnem?","resposta":"Todas as vacinas são testadas de forma rigorosa e só são liberadas quando se tem certeza de sua eficácia e segurança."},{"id":2,"manchete":"Se a vacina já está erradicada em nosso país, ela nunca mais vai aparecer, então não preciso mais me vacinar?","resposta":"Com a vacinação, alguns agentes infecciosos se tornaram raros, não significando que estão extintos. Há um fluxo intenso de pessoas viajando entre países o que pode acarretar em contaminação, caso não esteja imune, fazendo ressurgir a doença"},{"id":3,"manchete":"Vacinas são um instrumento de controle da indústria farmacêutica?","resposta":"Além de muitas vacinas serem disponibilizadas gratuitamente pelos postos de saúde, muitas doenças foram comprovadamente controladas graças à vacinação."},{"id":4,"manchete":"Não quero vacinar meu filho e isso é uma decisão minha, certo?","resposta":"Errado! A vacina é um direito assegurado pelo Estatuto da Criança e do Adolescente. Pais podem responder criminalmente pela recusa e, em casos extremos, até perder o poder familiar. "},{"id":5,"manchete":"Se a doença não é grave eu não preciso me vacinar?","resposta":"Doenças infecciosas são potencialmente graves com registro de hospitalizações, sequelas ou óbitos. A vacinação é de extrema importância para evitar graves consequências."},{"id":6,"manchete":"Se existem outras formas de prevenção da doença, eu não preciso me vacinar?","resposta":"Básicos hábitos de higiene e uma vida saudável são de muito importantes para evitar a propagação de doenças, mas não substituem a vacinação."},{"id":7,"manchete":"A vacina da gripe não evita ninguém de ficar gripado, então ela não é eficiente?","resposta":"Cada organismo reage de forma diferente a uma doença, podendo ter consequências mais graves, por isso, mesmo a gripe, que parece ser inofensiva, deve ser prevenida por vacinação. Além disso, o virus da gripe é um dos mais mutáveis, isso interfere na forma como nosso corpo o reconhece e se defende, como se o virus adotasse um disfarce de tempos em tempos. É por isso inclusive que as vacinas da gripe devem ser renovadas com mais frequência que as demais."},{"id":8,"manchete":"Vacina causa autismo?","resposta":"Não. Em 1998, um trabalho científico foi apresentado relacionando o autismo com a vacina tríplice viral. Posteriormente, o próprio autor do artigo provou que havia cometido erros metodológicos na revista em que o estudo tinha sido publicado. Mas, ainda hoje, esse erro é propagado."},{"id":9,"manchete":"Vacina tem mercúrio, isso está nos matando aos poucos?","resposta":"Para evitar proliferação de fungos e bactérias nos frascos, algumas vacinas possuem timerosal (composto com mercúrio) que é usado como conservante. Essa substância é usada em quantidade muito pequena, sendo comprovadamente não tóxica e é expelida pelo próprio corpo. "},{"id":10,"manchete":"Vacinas provocam efeitos colaterais que são mais perigosos que a própria doença?","resposta":"As vacinas, assim como os medicamentos, podem conter algumas reações adversas, mas são comumente pouco preocupantes e somem rápido. Efeitos colaterais mais graves ocasionados por vacinas são muito raros, entretanto, complicações em decorrência de certas doenças são bastante comuns."}]')},c7a4:function(a){a.exports=JSON.parse('[{"sigla":"AC","nome":"Acre"},{"sigla":"AL","nome":"Alagoas"},{"sigla":"AP","nome":"Amapá"},{"sigla":"AM","nome":"Amazonas"},{"sigla":"BA","nome":"Bahia"},{"sigla":"CE","nome":"Ceará"},{"sigla":"DF","nome":"Distrito Federal"},{"sigla":"ES","nome":"Espírito Santo"},{"sigla":"GO","nome":"Goiás"},{"sigla":"MA","nome":"Maranhão"},{"sigla":"MT","nome":"Mato Grosso"},{"sigla":"MS","nome":"Mato Grosso do Sul"},{"sigla":"MG","nome":"Minas Gerais"},{"sigla":"PA","nome":"Pará"},{"sigla":"PB","nome":"Paraíba"},{"sigla":"PR","nome":"Paraná"},{"sigla":"PE","nome":"Pernambuco"},{"sigla":"PI","nome":"Piauí"},{"sigla":"RJ","nome":"Rio de Janeiro"},{"sigla":"RN","nome":"Rio Grande do Norte"},{"sigla":"RS","nome":"Rio Grande do Sul"},{"sigla":"RO","nome":"Rondônia"},{"sigla":"RR","nome":"Roraima"},{"sigla":"SC","nome":"Santa Catarina"},{"sigla":"SP","nome":"São Paulo"},{"sigla":"SE","nome":"Sergipe"},{"sigla":"TO","nome":"Tocantins"},{"sigla":"EX","nome":"Estrangeiro"}]')},c87f:function(a,e,s){},d79f:function(a,e,s){"use strict";var o=s("a3ee"),t=s.n(o);t.a},e19e:function(a,e,s){"use strict";var o=s("04c9"),t=s.n(o);t.a},ef5f:function(a,e,s){},f5d4:function(a,e,s){"use strict";var o=s("ef5f"),t=s.n(o);t.a}});
//# sourceMappingURL=app.4da0ac00.js.map