(this.webpackJsonpdoppler=this.webpackJsonpdoppler||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),o=n(8),c=n.n(o),u=(n(17),n(9)),a=n(3),r=n(10),l=n(12),h=n(5),v=n(6),m=function(){function e(){Object(h.a)(this,e),this.touches={},this.isMouseDown=!1,this.lastMouseX=0,this.lastMouseY=0,this.mouseVX=0,this.mouseVY=0}return Object(v.a)(e,[{key:"touch",value:function(e){for(var t={},n=performance.now(),s=0;s<e.touches.length;s++){var i=e.touches[s],o=i.identifier;if(t[o]=!0,this.touches[o]){if(n-this.touches[o].lastTime>0){var c=this.touches[o];c.vx=(i.clientX-c.lastX)/(n-c.lastTime),c.vy=(i.clientY-c.lastY)/(n-c.lastTime),c.lastX=i.clientX,c.lastY=i.clientY,c.lastTime=n}}else{var u={lastX:i.clientX,lastY:i.clientY,vx:0,vy:0,lastTime:n};this.touches[o]=u}}for(var a=0,r=Object.keys(this.touches);a<r.length;a++){var l=r[a];t[l]||delete this.touches[l]}e.preventDefault()}},{key:"getTouches",value:function(){var e=this;return Object.keys(this.touches).map((function(t,n){var s=e.touches[t];return Object(l.a)({id:t},s)}))}},{key:"mouseDown",value:function(e){this.touches.mouse={vx:0,vy:0,lastX:e.clientX,lastY:e.clientY,lastTime:performance.now()},this.isMouseDown=!0,e.preventDefault()}},{key:"mouseMove",value:function(e){if(this.isMouseDown){var t=performance.now(),n=this.touches.mouse;t-n.lastTime>0&&(n.vx=(e.clientX-n.lastX)/(t-n.lastTime),n.vy=(e.clientY-n.lastY)/(t-n.lastTime),n.lastX=e.clientX,n.lastY=e.clientY,n.lastTime=t)}e.preventDefault()}},{key:"mouseUp",value:function(e){this.isMouseDown=!1,this.touches.mouse&&delete this.touches.mouse,e.preventDefault()}}]),e}(),d=n(11),f=function(){function e(){Object(h.a)(this,e),this.circles=[],this.time=0,this.lastID=0}return Object(v.a)(e,[{key:"next",value:function(e){this.time+=e;for(var t=!1,n=0;n<this.circles.length;n++){var s=this.circles[n];s.x+=s.vx*e,s.y+=s.vy*e,s.r+=s.vr*e,s.time+=e,s.time>5&&(t=!0)}t&&(this.circles=this.circles.filter((function(e){return e.time<=5})))}},{key:"addCircle",value:function(e,t,n,s,i,o){var c=this.lastID+1;this.circles.push({x:e,y:t,r:n,vx:s,vy:i,vr:o,id:c,time:0}),this.lastID=c}},{key:"getCircles",value:function(){return Object(d.a)(this.circles)}}]),e}(),p=n(2),g=new m,w=new f;var y=function(){var e=Object(r.a)(),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(s.useState)([]),c=Object(a.a)(o,2),l=(c[0],c[1]),h=Object(s.useState)([]),v=Object(a.a)(h,2),m=v[0],d=v[1];return Object(s.useEffect)((function(){var e,t,n=function(e){g.touch(e),l(g.getTouches())},s=function(e){g.touch(e),l(g.getTouches())},i=function(e){g.touch(e),l(g.getTouches())},o=function(e){g.mouseDown(e),l(g.getTouches())},c=function(e){g.mouseMove(e),l(g.getTouches())},a=function(e){g.mouseUp(e),l(g.getTouches())},r=performance.now();return console.log("Adding..."),document.addEventListener("mousedown",o,{passive:!1}),document.addEventListener("mousemove",c,{passive:!1}),document.addEventListener("mouseup",a,{passive:!1}),document.addEventListener("touchstart",n,{passive:!1}),document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",i,{passive:!1}),e=window.requestAnimationFrame((function t(){var n=performance.now(),s=(n-r)/1e3;w.next(s),d(w.getCircles()),e=window.requestAnimationFrame(t),r=n})),t=setTimeout((function e(){var n,s=g.getTouches(),i=Object(u.a)(s);try{for(i.s();!(n=i.n()).done;){var o=n.value;w.addCircle(o.lastX,o.lastY,0,o.vx,o.vy,100)}}catch(c){i.e(c)}finally{i.f()}t=setTimeout(e,250)}),250),function(){console.log("Removing..."),document.removeEventListener("mousedown",o),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchstart",n),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",i),window.cancelAnimationFrame(e),clearTimeout(t)}}),[]),Object(p.jsx)("svg",{width:n,height:i,viewport:"0 0 "+n+" "+i,children:m.map((function(e){return Object(p.jsx)("circle",{cx:e.x,cy:e.y,r:e.r,fill:"none",stroke:"black",opacity:(5-e.time)/5*((5-e.time)/5)},e.id)}))})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.f9e84ff6.chunk.js.map