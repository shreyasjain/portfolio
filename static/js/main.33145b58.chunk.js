(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},65:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),i=c.n(a),n=c(8),o=c.n(n),r=(c(52),c(26),c(109)),l=c(110),j=c(38),d=c.n(j),h=(c(53),c(16)),m=c.n(h);var p=function(){return m()(document).ready((function(){m()("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;m()("html, body").animate({scrollTop:m()(t).offset().top},500,(function(){window.location.hash=t}))}}))})),Object(s.jsx)("div",{children:Object(s.jsxs)(r.a,{fixed:"top",expand:"lg",children:[Object(s.jsx)(r.a.Brand,{href:"#home",children:Object(s.jsx)(d.a,{})}),Object(s.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(l.a,{className:"mr-auto",children:[Object(s.jsx)(l.a.Link,{href:"#home",children:"Home"}),Object(s.jsx)(l.a.Link,{href:"#experience",children:"Services"}),Object(s.jsx)(l.a.Link,{href:"#projects",children:"Projects"}),Object(s.jsx)(l.a.Link,{href:"#about",children:"About"}),Object(s.jsx)(l.a.Link,{href:"#contact",children:"Connect"})]})})]})})},b=(c(65),c.p+"static/media/dp.885a4b35.jpg"),x=c(40),u=c.n(x);var O=function(){Object(a.useEffect)((function(){u.a.get("https://5ffeb221a4a0dd001701ae6f.mockapi.io/home").then((function(e){return console.log(e)})).catch((function(e){return console.log(e.message)}))}),[]),Object(a.useEffect)((function(){for(var t=document.getElementsByClassName("typewrite"),c=0;c<t.length;c++){var s=t[c].getAttribute("data-type"),a=t[c].getAttribute("data-period");s&&e(t[c],JSON.parse(s),a)}}),[]);var e=function(e,c,s){var a={};a.toRotate=c,a.el=e,a.loopNum=0,a.period=parseInt(s,10)||2e3,a.txt="",t(a),a.isDeleting=!1},t=function e(t){var c=t.loopNum%t.toRotate.length,s=t.toRotate[c];t.isDeleting?t.txt=s.substring(0,t.txt.length-1):t.txt=s.substring(0,t.txt.length+1),t.el.innerHTML='<span class="wrap">'+t.txt+"</span>";var a=200-100*Math.random();t.isDeleting&&(a/=2),t.isDeleting||t.txt!==s?t.isDeleting&&""===t.txt&&(t.isDeleting=!1,t.loopNum++,a=500):(a=t.period,t.isDeleting=t),setTimeout((function(){e(t)}),a)};return Object(s.jsxs)("div",{id:"home",children:[Object(s.jsx)(p,{}),Object(s.jsx)("div",{className:"custom-container home-container",children:Object(s.jsxs)("div",{className:"home-texts",children:[Object(s.jsx)("div",{className:"home-dp",children:Object(s.jsx)("img",{height:"100px",width:"100px",src:b})}),Object(s.jsxs)("div",{className:"home-texts-col-1",children:[Object(s.jsx)("div",{className:"home-main-heading",children:Object(s.jsx)("h1",{children:"Hi, I'm Shreyas Jain"})}),Object(s.jsx)("div",{className:"home-text-effect",children:Object(s.jsxs)("h1",{children:["I am a",Object(s.jsx)("a",{href:"",class:"typewrite","data-period":"2000","data-type":'[" developer"," problem-solver"," geek"," blogger"," believer"]',children:Object(s.jsx)("span",{class:"wrap"})})]})}),Object(s.jsx)("div",{className:"resume-button",children:Object(s.jsx)("button",{children:"Get Resume"})})]})]})}),Object(s.jsx)("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');"})]})};var g=c.p+"static/media/mypic.90251d85.jpg",f=c(106),v=c(107),N=c(108);c(84);var y=function(){return Object(s.jsxs)("div",{id:"about",className:"custom-container",children:[Object(s.jsx)("h1",{className:"page-main-heading",children:"#ABOUT"}),Object(s.jsx)(f.a,{children:Object(s.jsxs)(v.a,{children:[Object(s.jsxs)(N.a,{sm:8,className:"about-col-1 about-text",children:[Object(s.jsx)("p",{children:"Hi"}),Object(s.jsx)("p",{children:"I am Shreyas Jain. I am a full-stack developer proficient in varied range of latest technologies including React.js, etc. I have 2years of experience as a frontend developer and decent experience as a backend developer too. I am a problem solver and always eager to do challenging tasks."}),Object(s.jsx)("p",{children:"If you still find my tech-stack a bit small, I am flexible to switch between new technologies. For more information, kindly contact me directly. Links provided below."}),Object(s.jsx)("p",{children:"Thanks"})]}),Object(s.jsx)(N.a,{sm:4,className:"about-col-2 image-column",children:Object(s.jsx)("img",{src:g})})]})})]})};c(85),c(86),c.p;var k=function(e){return Object(s.jsxs)("div",{className:"service-card-container",children:[Object(s.jsx)("img",{src:e.imageLink,width:"100%"}),Object(s.jsx)("p",{children:e.title})]})};var w=function(){return Object(s.jsxs)("div",{id:"experience",className:"custom-container",children:[Object(s.jsx)("h1",{className:"page-main-heading",children:"#SERVICES"}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{className:"services-content",children:[Object(s.jsx)(k,{title:"HTML5",imageLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"}),Object(s.jsx)(k,{title:"CSS3",imageLink:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"}),Object(s.jsx)(k,{title:"JAVASCTIPT",imageLink:"https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"}),Object(s.jsx)(k,{title:"REACT.JS",imageLink:"https://lh3.googleusercontent.com/proxy/xN3N_RDZiot94mVSM0LEv78nlfOx1wvOR2pnAmk0O_cx0Q1pKHASKcGD2xXpkQGUQlKOysJmI3buTvcl2BWOVM9PfZVNAcPFyy_5AQ7J7R47UE0=s0-d"}),Object(s.jsx)(k,{title:"JAVA",imageLink:"https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"}),Object(s.jsx)(k,{title:"SPRING",imageLink:"https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png"}),Object(s.jsx)(k,{title:"SQL",imageLink:"https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png"}),Object(s.jsx)(k,{title:"FIREBASE",imageLink:"https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"}),Object(s.jsx)(k,{title:"GIT",imageLink:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"})]})})]})},L=(c(87),c(41)),C=c.n(L),I=c(42),T=c.n(I),S=c(43),A=c.n(S),D=c(44),E=c.n(D),R=c(45),B=c.n(R);var P=function(){return Object(s.jsxs)("div",{id:"contact",className:"custom-container",children:[Object(s.jsx)("h1",{className:"page-main-heading",children:"#CONNECT"}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{className:"contact-section",children:[Object(s.jsxs)("div",{className:"contact-description",children:[Object(s.jsx)("p",{children:"Believe me, I am way more than my portfolio says about me. So why not connect once?"}),Object(s.jsx)("p",{children:"Here are links to my social media handles. I'll be happy to connect.."})]}),Object(s.jsxs)("div",{className:"social-media-links",children:[Object(s.jsx)("a",{className:"social-media-link social-media-link--facebook",href:"http://www.facebook.com/jainshreyas333",children:Object(s.jsx)("span",{className:"social-media-icon",children:Object(s.jsx)(C.a,{})})}),Object(s.jsx)("a",{className:"social-media-link social-media-link--twitter",href:"http://www.twitter.com/shreyasjain4all",children:Object(s.jsx)("span",{className:"social-media-icon",children:Object(s.jsx)(T.a,{})})}),Object(s.jsx)("a",{className:"social-media-link social-media-link--instagram",href:"http://www.instagram.com/shreyasjain9",children:Object(s.jsx)("span",{className:"social-media-icon",children:Object(s.jsx)(A.a,{})})}),Object(s.jsx)("a",{className:"social-media-link social-media-link--linkedin",href:"www.linkedin.com/shreyasjain4all",children:Object(s.jsx)("span",{className:"social-media-icon",children:Object(s.jsx)(E.a,{})})}),Object(s.jsx)("a",{className:"social-media-link social-media-link--youtube",href:"http://www.quora.com/sayyesindia",children:Object(s.jsx)("span",{className:"social-media-icon",children:Object(s.jsx)(B.a,{})})})]}),Object(s.jsxs)("div",{className:"contact-description other-contact-details",children:[Object(s.jsx)("h6",{children:Object(s.jsx)("strong",{children:"Other Contact Details:"})}),Object(s.jsx)("p",{children:"Phone: +91-9649344770"}),Object(s.jsx)("p",{children:"Email: shreyasjain4all@gmail.com"})]})]})})]})},J=c(17),H=c(18),M=c(20),G=c(19);c(88),c(89);var F=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"project-card-container",children:[Object(s.jsx)("div",{style:{"background-image":"url(https://source.unsplash.com/random)"},className:"project-card-container-image"}),Object(s.jsxs)("div",{className:"project-card-container-details",children:[Object(s.jsx)("div",{children:Object(s.jsx)("span",{children:"Project Name"})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Github"})})]})]})})},V=[{category:"News",title:"  Table Tennis WebApp",text:"CNN purchased Casey Neistat's Beme app for $25million.",image:"https://source.unsplash.com/user/erondu/600x400"},{category:"Travel",title:"Live Weather API",text:"Learn our tips and tricks on living a nomadic lifestyle",image:"https://source.unsplash.com/user/_vickyreyes/600x400"},{category:"Development",title:"COVID Tracker",text:"The first ever decoupled starter theme for React & the WP-API",image:"https://source.unsplash.com/user/ilyapavlov/600x400"},{category:"News",title:"BlackJack Game",text:"CNN purchased Casey Neistat's Beme app for $25million.",image:"https://source.unsplash.com/user/erondu/600x400"}],_=function(e){Object(M.a)(c,e);var t=Object(G.a)(c);function c(){var e;return Object(J.a)(this,c),(e=t.call(this)).state={posts:{}},e}return Object(H.a)(c,[{key:"componentWillMount",value:function(){this.setState({posts:V})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"custom-container projects-container",children:[Object(s.jsx)("header",{className:"app-header",id:"projects"}),Object(s.jsx)("h1",{className:"page-main-heading",children:"#PROJECTS"}),Object(s.jsxs)("div",{className:"app-card-list projects-list",id:"app-card-list",children:[Object(s.jsx)(F,{}),Object(s.jsx)(F,{}),Object(s.jsx)(F,{}),Object(s.jsx)(F,{}),Object(s.jsx)(F,{})]})]})}}]),c}(i.a.Component),Q=function(e){Object(M.a)(c,e);var t=Object(G.a)(c);function c(){return Object(J.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){var e=this.props,t=e.image,c=(e.category,{backgroundImage:"url("+t+")"});return Object(s.jsx)("header",{style:c,className:"card-header"})}}]),c}(i.a.Component),W=function(e){Object(M.a)(c,e);var t=Object(G.a)(c);function c(){return Object(J.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("h2",{className:"project-card-title",children:this.props.title})})}}]),c}(i.a.Component),q=(i.a.Component,_);var K=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{}),Object(s.jsx)(O,{}),Object(s.jsx)(w,{}),Object(s.jsx)(q,{}),Object(s.jsx)(y,{}),Object(s.jsx)(P,{})]})};c(90);var U=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(K,{})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(U,{})}),document.getElementById("root")),Z()}},[[92,1,2]]]);
//# sourceMappingURL=main.33145b58.chunk.js.map