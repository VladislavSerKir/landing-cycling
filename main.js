(()=>{var e={792:()=>{var e=document.querySelector(".header"),t=e.querySelector(".header__button"),r=e.querySelector(".header__bar"),i=e.querySelector(".header__links"),c=e.querySelector(".header__close-button"),o=e.querySelector(".wrapper"),n=e.querySelector(".header__container");r.addEventListener("click",(function(){c.classList.toggle("header__close-button_visible"),n.toggleAttribute("hidden"),o.toggleAttribute("hidden"),t.toggleAttribute("hidden")})),c.addEventListener("click",(function(){c.classList.toggle("header__close-button_visible"),n.toggleAttribute("hidden"),o.toggleAttribute("hidden"),i.toggleAttribute("hidden"),t.toggleAttribute("hidden")})),window.addEventListener("resize",(function(e){e.target.innerWidth>652&&Array.from(c.classList).includes("header__close-button_visible")&&(c.classList.toggle("header__close-button_visible"),n.toggleAttribute("hidden"),o.toggleAttribute("hidden"),t.toggleAttribute("hidden"))}),!0)},108:()=>{var e=document.subscriptionData,t=e.email,r=e.querySelector(".footer__input-button");r.addEventListener("submit",(function(e){e.preventDefault()})),t.addEventListener("input",(function(e){var t;t=e.target.validity.valid,r.textContent=t?"Ок!":"",r.textContent}))}},t={};function r(i){var c=t[i];if(void 0!==c)return c.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.p="",(()=>{"use strict";r(108);const e=r.p+"127af17ed83c0df7d8b4.png",t=r.p+"2d1cff67c0fbdf4388db.png",i=r.p+"c403e40a89377e8f2cc1.png",c=r.p+"1c3327091c075655f618.png",o=r.p+"14ba99ca4a1f543aa52d.png",n=r.p+"a33b7d1c75abb44853f4.png",s=r.p+"9b665f8f473e958f9ddd.png",a=r.p+"cbe8a87224f0934eff33.png",d=r.p+"12cc6d9f28af5e03aa74.png",l=r.p+"89800ec35e5425cb007b.png",g=r.p+"95906d41969268936dca.png",u=r.p+"eaf7e96ab516a5430fae.png",f=r.p+"7091d6ba946b35ebe48f.png",p=r.p+"a87ee42586f0c2540621.png",b=r.p+"eb7b82f6bfb5e3adbd50.png";var h=[{track:{title:"Шоссе",description:"На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",locations:{firstLocation:s,secondLocation:a},bikes:{firstBike:{image:f,description:"Cervelo Caledonia-5"},secondBike:{image:p,description:"Cannondale Systemsix Himod"},thirdBike:{image:b,description:"Trek Domane SL-7"}}}},{gravel:{title:"Грэвел",description:"Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",locations:{firstLocation:d,secondLocation:l},bikes:{firstBike:{image:r.p+"b76327be88750df54c4d.png",description:"Cervelo Aspero GRX 810"},secondBike:{image:r.p+"f3c59044617f0b76a641.png",description:"Specialized S-Works Diverge"},thirdBike:{image:r.p+"c889baddbe5ccb150e17.png",description:"Cannondale Topstone Lefty 3"}}}},{TT:{title:"ТТ",description:"ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",locations:{firstLocation:g,secondLocation:u},bikes:{firstBike:{image:r.p+"acd0fb5e6bb95b3f0fce.png",description:"Specialized S-Works Shiv"},secondBike:{image:r.p+"4e7cbb2ff723a2a6c781.png",description:"BMC Timemachine 01 ONE"},thirdBike:{image:r.p+"8b43e852e7340396ebf5.png",description:"Cervelo P-Series"}}}}],_=document.querySelector(".tracks"),k=document.querySelector(".bikes"),y=k.querySelector("#track"),m=k.querySelector("#gravel"),S=k.querySelector("#TT"),q=_.querySelector(".track-switcher-left"),L=_.querySelector("#left"),v=_.querySelector(".track-switcher-right"),x=_.querySelector("#right"),E=_.querySelector(".tracks__title"),A=_.querySelector(".tracks__description"),B=_.querySelector(".tracks__first-image"),C=_.querySelector(".tracks__second-image"),w=k.querySelector(".first-bike"),T=k.querySelector(".first-bike-text"),j=k.querySelector(".second-bike"),D=k.querySelector(".second-bike-text"),O=k.querySelector(".third-bike"),z=k.querySelector(".third-bike-text");q.src=i,v.src=c,B.src=s,C.src=a,w.src=f,j.src=p,O.src=b;var W=0;function G(e){E.textContent=e.title,A.textContent=e.description,B.src=e.locations.firstLocation,C.src=e.locations.secondLocation,w.src=e.bikes.firstBike.image,T.textContent=e.bikes.firstBike.description,j.src=e.bikes.secondBike.image,D.textContent=e.bikes.secondBike.description,O.src=e.bikes.thirdBike.image,z.textContent=e.bikes.thirdBike.description}[y,m,S].forEach((function(e){e.addEventListener("click",(function(e){h.forEach((function(t){Object.keys(t)[0]===e.target.id&&(W=h.indexOf(t),G(t[e.target.id]))}))}))})),[L,x].forEach((function(e){e.addEventListener("click",(function(e){"track-switcher-left"===e.target.classList.value?(W-=1)<0&&(W=2):(W+=1)>2&&(W=0),G(h[W][Object.keys(h[W])[0]])}))}));var H=document.querySelector(".body"),M=H.querySelector(".footer"),N=H.querySelector(".header"),P=M.querySelector(".footer__copyright"),R=H.querySelectorAll(".theme-switcher"),X=Array.from(H.querySelectorAll(".theme-text-toggler-general")),F=Array.from(H.querySelectorAll(".theme-text-toggler-secondary")),I=H.querySelectorAll(".footer__button-image");function J(r){Array.from(r.target.classList).includes("theme-switcher")?(console.log("переключение на темную"),I.forEach((function(e){e.src=t,e.classList.toggle("theme-switcher")})),X.forEach((function(e){e.classList.toggle("theme-text-general-white")})),F.forEach((function(e){e.classList.toggle("theme-text-secondary")})),q.src=o,v.src=n,H.classList.toggle("body_theme_dark"),N.classList.toggle("header_theme_dark"),M.classList.toggle("footer_theme_dark"),P.classList.toggle(".footer__copyright_theme_dark")):(console.log("переключение на светлую"),I.forEach((function(t){t.src=e,t.classList.toggle("theme-switcher")})),X.forEach((function(e){e.classList.toggle("theme-text-general-white")})),F.forEach((function(e){e.classList.toggle("theme-text-secondary")})),q.src=i,v.src=c,H.classList.toggle("body_theme_dark"),N.classList.toggle("header_theme_dark"),M.classList.toggle("footer_theme_dark"),P.classList.toggle(".footer__copyright_theme_dark"))}I.forEach((function(t){t.src=e,t.classList.add("theme-switcher")})),R.forEach((function(e){e.addEventListener("click",J)})),r(792);const K=r.p+"71fc0e0e38f52146b49e.jpg",Q=r.p+"a4750031d064f8436236.png",U=r.p+"dbd3ce741e7823938c83.jpg",V=r.p+"c5995c030582b79a34eb.jpg";var Y=document.querySelector(".introduction"),Z=Y.querySelector(".introduction__image"),$=Y.querySelector(".introduction__bike-image");Z.src=K,$.src=Q,document.querySelector(".description").querySelector(".description__image").src=U,document.querySelector(".training").querySelector(".training__image").src=V})()})();