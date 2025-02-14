(()=>{"use strict";var e={112:function(e,s,n){var r=n(893),i=n(294),a=n(745);let l=()=>{let[e,s]=(0,i.useState)(()=>"dark"===localStorage.getItem("theme"));return(0,i.useEffect)(()=>{document.body.className=e?"dark-mode":"light-mode"},[e]),(0,r.jsx)("nav",{className:"navbar navbar-default navbar-fixed-top",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"navbar-header",children:[(0,r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-menu",children:[(0,r.jsx)("span",{className:"icon-bar"}),(0,r.jsx)("span",{className:"icon-bar"}),(0,r.jsx)("span",{className:"icon-bar"})]}),(0,r.jsxs)("a",{className:"navbar-brand",href:"#",children:[(0,r.jsx)("span",{className:"montserrat-font",children:"Baller"})," ",(0,r.jsx)("span",{className:"fustat-font",children:"LOS"})]})]}),(0,r.jsx)("div",{className:"icon-container",id:"navbar-menu",children:(0,r.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#about",children:[(0,r.jsx)("i",{className:"bi bi-people h3"})," Wir"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#game",children:[(0,r.jsx)("i",{className:"bi bi-dice-6 h3"})," Spiel"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#contact",children:[(0,r.jsx)("i",{className:"bi bi-envelope h3"})," Kontakt"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{children:[(0,r.jsx)("i",{className:"bi bi-translate h3"})," \xdcbersetzer"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{onClick:()=>{let n=!e;s(n),localStorage.setItem("theme",n?"dark":"light")},style:{cursor:"pointer"},children:[(0,r.jsx)("i",{className:`bi ${e?"bi-moon":"bi-sun"} h3`})," Modus"]})})]})})]})})},t=n.p+"static/image/Logo.d4c09df1.png",c=n.p+"static/image/Gruppe.6ea68873.jpg",d=n.p+"static/image/Spiel.a9a63cf1.jpg",h=n.p+"static/image/Drucker.94cf0985.png",o=()=>(0,r.jsxs)("footer",{className:"footer-container",children:[(0,r.jsxs)("nav",{className:"mb-3",children:[(0,r.jsxs)("a",{href:"#",className:"footer-text",children:[(0,r.jsx)("i",{className:"bi bi-shield"})," Datenschutz"]}),(0,r.jsxs)("a",{href:"#",className:"footer-text",children:[(0,r.jsx)("i",{className:"bi bi-journal-text"})," Impressum"]}),(0,r.jsxs)("a",{href:"#",className:"footer-text",children:[(0,r.jsx)("i",{className:"bi bi-geo-alt"})," Ort"]}),(0,r.jsxs)("a",{href:"#",className:"footer-text",children:[(0,r.jsx)("i",{className:"bi bi-telephone"})," Nummer"]}),(0,r.jsxs)("a",{href:"https://www.instagram.com/bbs1lg/",className:"footer-text",children:[(0,r.jsx)("i",{className:"bi bi-instagram"})," Instagram"]})]}),(0,r.jsx)("hr",{className:"footer-border"}),(0,r.jsx)("p",{className:"footer-text-bottom",children:"\xa9 2024 "})]});async function m(e,s){console.log("Sending mail...");try{let n=await fetch("http://localhost:3000/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(n.ok){let e=await n.json();console.log("E-Mail wurde erfolgreich gesendet!",e),s({type:"success",text:"E-Mail erfolgreich gesendet!"})}else{let e=await n.json();console.error("Fehler beim Senden der E-Mail:",e),s({type:"error",text:"Fehler beim Senden der E-Mail."})}}catch(e){console.error("Fehler beim Senden der E-Mail:",e),s({type:"error",text:"Netzwerkfehler, bitte versuchen Sie es sp\xe4ter erneut."})}}let u=()=>{let[e,s]=(0,i.useState)({first_name:"",last_name:"",user_email:"",message:""}),[n,a]=(0,i.useState)(null),[l,t]=(0,i.useState)(!1),c=n=>{s({...e,[n.target.name]:n.target.value})},d=async n=>{n.preventDefault(),l||(t(!0),await m(e,a),t(!1),s({first_name:"",last_name:"",user_email:"",message:""}))};return(0,r.jsx)("div",{className:"contact-container",children:(0,r.jsxs)("form",{onSubmit:d,id:"contact-form",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsxs)("div",{className:"input-field",children:[(0,r.jsx)("i",{className:"bi bi-person-circle h3"}),(0,r.jsx)("input",{className:"input",type:"text",name:"first_name",placeholder:"Vorname *",required:!0,value:e.first_name,onChange:c})]}),(0,r.jsxs)("div",{className:"input-field",children:[(0,r.jsx)("i",{className:"bi bi-person-circle h3"}),(0,r.jsx)("input",{className:"input",type:"text",name:"last_name",placeholder:"Nachname *",required:!0,value:e.last_name,onChange:c})]})]}),(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsxs)("div",{className:"input-field",children:[(0,r.jsx)("i",{className:"bi bi-envelope h3"}),(0,r.jsx)("input",{className:"input",type:"email",name:"user_email",placeholder:"E-Mail *",required:!0,value:e.user_email,onChange:c})]}),(0,r.jsxs)("div",{className:"input-field",children:[(0,r.jsx)("i",{className:"bi bi-pencil h3"}),(0,r.jsx)("input",{className:"input",type:"text",name:"message",placeholder:"Betreff",required:!0,value:e.message,onChange:c})]})]}),(0,r.jsx)("div",{className:"input-group",children:(0,r.jsxs)("div",{className:"input-field textarea",children:[(0,r.jsx)("i",{className:"bi bi-chat-left-text h3"}),(0,r.jsx)("textarea",{className:"message",name:"message",placeholder:"Nachricht *",required:!0,value:e.message,onChange:c})]})}),(0,r.jsxs)("p",{className:"hint",children:[(0,r.jsx)("strong",{children:"Hinweis:"})," Felder mit * m\xfcssen ausgef\xfcllt werden."]}),n&&(0,r.jsx)("div",{className:`message-container ${n.type}`,children:n.text}),(0,r.jsx)("button",{type:"submit",className:"custom-btn",disabled:l,children:l?"Senden...":"Senden"})]})})},x=document.getElementById("root");x&&a.createRoot(x).render((0,r.jsx)(i.StrictMode,{children:(0,r.jsx)(()=>((0,i.useEffect)(()=>{document.title="Baller LOS"},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"headline-container",children:(0,r.jsxs)("div",{className:"text-container",children:[(0,r.jsxs)("h1",{className:"title",children:["Ein Sch\xfclerunternehmen der BBS 1 L\xfcneburg mit ",(0,r.jsx)("em",{children:"Meerwert"})]}),(0,r.jsx)("p",{className:"subtitle",children:"Spielend Wasser Sch\xfctzen"})]})}),(0,r.jsxs)("section",{id:"about",children:[(0,r.jsx)("div",{className:"small-container",children:(0,r.jsx)("img",{src:t,alt:"Bild"})}),(0,r.jsxs)("div",{className:"frame",children:[(0,r.jsx)("h2",{children:"\xdcber uns"}),(0,r.jsxs)("p",{children:["Moin, wir sind die HA24B! Das ist unsere Sch\xfclerfirma ",(0,r.jsx)("strong",{children:"„Baller los“"}),", was so viel wie „mit voller Kraft loslegen“ bedeutet – und das machen wir. Wir sind ",(0,r.jsx)("strong",{children:"24 Sch\xfclerinnen und Sch\xfcler"})," im Alter von 15 bis 18 Jahren. Diese Sch\xfclerfirma haben wir im Rahmen der einj\xe4hrigen Berufsfachschule Wirtschaft an der ",(0,r.jsx)("strong",{children:"BBS I L\xfcneburg"})," gegr\xfcndet."]}),(0,r.jsxs)("p",{children:["Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den ",(0,r.jsx)("strong",{children:"Umweltschutz"}),", besonders bei den Gew\xe4ssern, aufmerksam machen. Daher ist es selbstverst\xe4ndlich, dass wir unser Spiel so ",(0,r.jsx)("strong",{children:"umweltfreundlich"})," und hochwertig wie m\xf6glich produzieren. Wir nutzen einen ",(0,r.jsx)("strong",{children:"3D-Drucker"})," mit recyclef\xe4higem und sogar Recycling-Filament, um unsere Figuren selbst herstellen zu k\xf6nnen. Auch die anderen Materialien wie Spielbrett und Verpackung sind recyclef\xe4hig oder bestehen aus Recyclingmaterial."]}),(0,r.jsxs)("p",{children:["Zus\xe4tzlich untersuchen wir die ",(0,r.jsx)("strong",{children:"Verschmutzung der Ilmenau"})," (dieser Fluss flie\xdft durch L\xfcneburg), indem wir Plastikm\xfcll einsammeln und z\xe4hlen. F\xfcr diese Website kooperieren wir mit dem L\xfcneburger IT-Unternehmen ",(0,r.jsx)("strong",{children:"„webnetz“"})," und den ",(0,r.jsx)("strong",{children:"Auszubildenden zum Fachinformatiker im 3. Lehrjahr"})," aus der Klasse IT22B von unserer Schule."]})]}),(0,r.jsxs)("div",{className:"frame",children:[(0,r.jsx)("h2",{children:"Das Team"}),(0,r.jsxs)("p",{children:[" Wir sind die ",(0,r.jsx)("strong",{children:"HA24B"})," – eine Sch\xfclerfirma der ",(0,r.jsx)("strong",{children:"BBS 1 L\xfcneburg"}),", bestehend aus ",(0,r.jsx)("strong",{children:"24 Sch\xfclerinnen und Sch\xfclern"})," im Alter von 16 bis 19 Jahren. Im Rahmen der einj\xe4hrigen Berufsfachschule Wirtschaft haben wir ein innovatives und nachhaltiges Spiel entwickelt."]}),(0,r.jsxs)("p",{children:[" Unser Fokus liegt auf ",(0,r.jsx)("strong",{children:"Umweltbewusstsein"}),", insbesondere auf dem ",(0,r.jsx)("strong",{children:"Schutz unserer Gew\xe4sser"}),". Daher werden alle Spielfiguren und der W\xfcrfel mit ",(0,r.jsx)("strong",{children:"recycelbarem Material"})," in ",(0,r.jsx)("strong",{children:"3D"})," gedruckt, ebenso wie das Spielbrett und die Verpackung, die aus Recyclingmaterialien bestehen. "]})," ",(0,r.jsxs)("p",{children:[" Zus\xe4tzlich engagieren wir uns in der Untersuchung der ",(0,r.jsx)("strong",{children:"Wasserverschmutzung der Illmenau"}),". F\xfcr die Gestaltung unserer Website arbeiten wir eng mit dem L\xfcneburger IT-Unternehmen ",(0,r.jsx)("strong",{children:"„webnetz“"})," zusammen, unterst\xfctzt von den Auszubildenden der Klasse ",(0,r.jsx)("strong",{children:"IT22B"})," unserer Schule."]}),(0,r.jsx)("p",{children:" Wir sind stolz darauf, ein Projekt zu pr\xe4sentieren, das sowohl kreatives Denken als auch Verantwortung f\xfcr unsere Umwelt vereint. "}),(0,r.jsx)("a",{href:"https://www.instagram.com/bbs1lg/",className:"footer-text",children:(0,r.jsx)("i",{className:"bi bi-instagram h1"})})]}),(0,r.jsx)("div",{className:"small-container",children:(0,r.jsx)("img",{src:c,alt:"Bild"})})]}),(0,r.jsxs)("section",{id:"game",children:[(0,r.jsx)("div",{className:"small-container",children:(0,r.jsx)("img",{src:d,alt:"Bild"})}),(0,r.jsx)("div",{className:"frame",children:(0,r.jsx)("h2",{children:"Das Brettspiel"})}),(0,r.jsx)("div",{className:"frame",children:(0,r.jsx)("h2",{children:"Weiteres"})}),(0,r.jsx)("div",{className:"small-container",children:(0,r.jsx)("img",{src:h,alt:"Bild"})})]}),(0,r.jsx)("section",{id:"contact",children:(0,r.jsx)(u,{})}),(0,r.jsx)(o,{})]})),{})}))}},s={};function n(r){var i=s[r];if(void 0!==i)return i.exports;var a=s[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},(()=>{var e=[];n.O=function(s,r,i,a){if(r){a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,i,a];return}for(var t=1/0,l=0;l<e.length;l++){for(var r=e[l][0],i=e[l][1],a=e[l][2],c=!0,d=0;d<r.length;d++)(!1&a||t>=a)&&Object.keys(n.O).every(function(e){return n.O[e](r[d])})?r.splice(d--,1):(c=!1,a<t&&(t=a));if(c){e.splice(l--,1);var h=i();void 0!==h&&(s=h)}}return s}})(),n.p="/",n.rv=function(){return"1.2.2"},(()=>{var e={723:0,980:0};n.O.j=function(s){return 0===e[s]};var s=function(s,r){var i,a,l=r[0],t=r[1],c=r[2],d=0;if(l.some(function(s){return 0!==e[s]})){for(i in t)n.o(t,i)&&(n.m[i]=t[i]);if(c)var h=c(n)}for(s&&s(r);d<l.length;d++)a=l[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(h)},r=self.webpackChunkballer_los=self.webpackChunkballer_los||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.2.2";var r=n.O(void 0,["361","723"],function(){return n(112)});r=n.O(r)})();