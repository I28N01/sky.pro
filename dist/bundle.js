(()=>{"use strict";var e={gameLevel:0,timer:0},t=[],c=["clubs","diamonds","hearts","spades"],n=["6","7","8","9","10","jack","queen","king","ace"],r=document.querySelector(".button"),o=document.querySelectorAll(".level");function a(e,t,c,n){var r=document.createElement(e);r.classList=t,r.textContent=n,c.appendChild(r)}function u(){for(var t=0;t<e.gameLevel;t++)document.querySelector(".card".concat(t)).style.backgroundImage="url(./src/img/card-cover.png)"}o.forEach((function(t){t.addEventListener("click",(function(){t.classList.contains("selected")?(t.classList.remove("selected"),e.gameLevel=0):(o.forEach((function(e){e.classList.remove("selected")})),e.gameLevel=Number(t.classList[1]),t.classList.add("selected"),console.log(e.gameLevel))}))})),r.addEventListener("click",(function(){0!==e.gameLevel?(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.querySelector(".firstScreen")),function(){a("section","wrap game-screen",document.body,null),a("div","game-data",document.querySelector(".wrap"),null),a("div","timer",document.querySelector(".game-data"),null),a("div","timer-name",document.querySelector(".timer"),null),a("p","",document.querySelector(".timer-name"),"min"),a("p","",document.querySelector(".timer-name"),"sec"),a("h2","timer-digital timer-start",document.querySelector(".timer"),"0.00"),a("button","button reset-btn",document.querySelector(".game-data"),"Начать заново"),document.querySelector(".reset-btn").addEventListener("click",(function(){document.location.reload()})),a("div","card-field",document.querySelector(".wrap"),null),function(){for(var r=0;r<e.gameLevel/2;r++){var o=c["".concat(~~(Math.random()*c.length))],a=n["".concat(~~(Math.random()*n.length))];t.push("url(./src/img/cards/".concat(o,"/").concat(a,".png)")),t.push("url(./src/img/cards/".concat(o,"/").concat(a,".png)")),t.sort((function(){return Math.random()-.6}))}}();for(var r=0;r<e.gameLevel;r++)a("div","play-card card".concat(r," ").concat(r),document.querySelector(".card-field"),null),document.querySelector(".card".concat(r)).style.backgroundImage="".concat(t[r]);s(),setTimeout(u,5e3),setTimeout((function(){var c=document.querySelectorAll(".play-card");c.forEach((function(n){n.addEventListener("click",(function(){var r=n.classList[2];document.querySelector(".card".concat(r)).style.backgroundImage="".concat(t[r]),document.querySelector(".card".concat(r)).classList.add("active"),document.querySelector(".card".concat(r)).classList.add("done");var o=document.querySelectorAll(".active");e.gameLevel<=document.querySelectorAll(".done").length&&(clearTimeout(l),document.querySelector(".blackout").classList.add("popup"),document.querySelector(".play-again-btn").addEventListener("click",(function(){document.location.reload()})),document.querySelector(".header").textContent="Вы выйграли! ",document.querySelector(".final-img").src="src/img/win.png"),o.length>1&&(o[0].style.backgroundImage===o[1].style.backgroundImage?c.forEach((function(){document.querySelector(".active")&&document.querySelector(".active").classList.remove("active")})):(clearTimeout(l),document.querySelector(".blackout").classList.add("popup"),document.querySelector(".play-again-btn").addEventListener("click",(function(){document.location.reload()}))))}))}))}),5e3)}()):(document.querySelector(".header").classList.add("bounce"),setTimeout((function(){document.querySelector(".header").classList.remove("bounce")}),1e3))}));var l,d=0,i=0;function m(){var t=document.querySelector(".timer-start"),c=document.querySelector(".timer-finish");++d>=60&&(d=0,i++),e.timer=Number((i>9?i:"0"+i)+"."+(d>9?d:"0"+d)),t.textContent=String(e.timer),c.textContent=String(e.timer),s()}function s(){l=setTimeout(m,1e3)}})();
//# sourceMappingURL=bundle.js.map