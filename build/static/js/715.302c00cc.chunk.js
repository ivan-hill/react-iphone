(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[715],{8715:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r,i,o,u,s=t(2791),c=t(2035),l=t(4986),f=t(1413),a=t(885),d=t(168),h=t(5751),p=t(6030),v=t(237),m=t(4139),x=t(7941),w=t(8617),g=t(184),b=function(e){var n=e.id,t=e.name,r=(0,p.I0)(),i=(0,s.useState)(!0),o=(0,a.Z)(i,2),u=o[0],c=o[1],l=(0,m.useTransition)(u,{from:{gridArea:"1/-1",opacity:0},enter:{opacity:1},leave:{opacity:0},config:m.config.slow}),f=function(){r(u?(0,x.YC)({key:n,value:t}):(0,x.gL)(n)),c(!u)};return l((function(e,n){return n?(0,g.jsx)(m.animated.div,{style:e,children:(0,g.jsx)(w.lo,{onClick:f,children:"Add"})}):(0,g.jsx)(m.animated.div,{style:e,children:(0,g.jsx)(w.c7,{onClick:f,children:"Remove"})})}))},y=h.ZP.article(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n  min-height: 360px;\n  height: 100%;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n  height: max(360px, 100%);\n\n  & > img {\n    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);\n    margin-bottom: 12px;\n  }\n\n  & > p {\n    font-weight: 700;\n    font-size: 24px;\n  }\n\n  &:last-child > div {\n    display: grid;\n  }\n"]))),j=h.ZP.h3(i||(i=(0,d.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: left;\n  flex: 1 0 auto;\n"]))),Z=function(e){var n=e.data,t=n.id,r=n.name,i=n.photo,o=n.price,u=(0,m.useSpring)({from:{opacity:0},to:{opacity:1},config:m.config.slow});return(0,g.jsx)("li",{children:(0,g.jsxs)(y,{children:[(0,g.jsx)(m.animated.img,{style:u,src:i,alt:t}),(0,g.jsx)(j,{children:r}),(0,g.jsxs)("p",{children:["$",o]}),(0,g.jsx)("div",{children:(0,g.jsx)(b,{id:t,name:r})})]})})},z=t(7332),E=h.ZP.ul(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  height: auto;\n"]))),C=function(){var e=(0,p.v9)(v.zs),n=(0,z.Z)(),t=(0,a.Z)(n,2),r=t[0],i=t[1].height,o=(0,m.useSpring)({height:i});return(0,g.jsx)(m.animated.div,{style:(0,f.Z)({overflow:"hidden"},o),children:(0,g.jsx)(E,{ref:r,children:e.map((function(e){return(0,g.jsx)(Z,{data:e},e.id)}))})})},k=(0,h.ZP)(w.c7)(u||(u=(0,d.Z)(["\n  align-self: flex-end;\n  visibility: ",";\n"])),(function(e){return e.show?"visible":"hidden"})),O=function(){var e=(0,s.useState)(!0),n=(0,a.Z)(e,2),t=n[0],r=n[1],i=(0,p.I0)(),o=(0,p.v9)(v.ZR),u=(0,p.v9)(v.q0),c=(0,s.useMemo)((function(){return o.length}),[o]);return(0,s.useEffect)((function(){u>c&&r(!1)}),[u,c]),(0,g.jsx)(k,{onClick:function(){return u<=c&&i((0,v.ok)())},show:t,children:"Show more"})},S=function(){return(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(l.NZ,{children:"Other items you may like"}),(0,g.jsx)(C,{}),(0,g.jsx)(O,{})]})}},7494:function(e){function n(e,n,t){var r,i,o,u,s;function c(){var l=Date.now()-u;l<n&&l>=0?r=setTimeout(c,n-l):(r=null,t||(s=e.apply(o,i),o=i=null))}null==n&&(n=100);var l=function(){o=this,i=arguments,u=Date.now();var l=t&&!r;return r||(r=setTimeout(c,n)),l&&(s=e.apply(o,i),o=i=null),s};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(s=e.apply(o,i),o=i=null,clearTimeout(r),r=null)},l}n.debounce=n,e.exports=n},7332:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(2982),i=t(885),o=t(3144),u=t(5671),s=t(2791),c=t(7494),l=t.n(c);function f(e){var n=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e,t=n.debounce,r=n.scroll,c=n.polyfill,f=n.offsetSize,d=c||("undefined"===typeof window?(0,o.Z)((function e(){(0,u.Z)(this,e)})):window.ResizeObserver);if(!d)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");var p=(0,s.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),v=(0,i.Z)(p,2),m=v[0],x=v[1],w=(0,s.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:m}),g=t?"number"===typeof t?t:t.scroll:null,b=t?"number"===typeof t?t:t.resize:null,y=(0,s.useRef)(!1);(0,s.useEffect)((function(){return y.current=!0,function(){y.current=!1}}));var j=(0,s.useMemo)((function(){var e=function(){if(w.current.element){var e=w.current.element.getBoundingClientRect(),n={left:e.left,top:e.top,width:e.width,height:e.height,bottom:e.bottom,right:e.right,x:e.x,y:e.y};w.current.element instanceof HTMLElement&&f&&(n.height=w.current.element.offsetHeight,n.width=w.current.element.offsetWidth),Object.freeze(n),y.current&&!h(w.current.lastBounds,n)&&x(w.current.lastBounds=n)}};return[e,b?l()(e,b):e,g?l()(e,g):e]}),[x,f,g,b]),Z=(0,i.Z)(j,3),z=Z[0],E=Z[1],C=Z[2];function k(){w.current.scrollContainers&&(w.current.scrollContainers.forEach((function(e){return e.removeEventListener("scroll",C,!0)})),w.current.scrollContainers=null),w.current.resizeObserver&&(w.current.resizeObserver.disconnect(),w.current.resizeObserver=null)}function O(){w.current.element&&(w.current.resizeObserver=new d(C),w.current.resizeObserver.observe(w.current.element),r&&w.current.scrollContainers&&w.current.scrollContainers.forEach((function(e){return e.addEventListener("scroll",C,{capture:!0,passive:!0})})))}var S,L,R;return S=C,L=Boolean(r),(0,s.useEffect)((function(){if(L){var e=S;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),function(){window.removeEventListener("scroll",e,!0)}}}),[S,L]),R=E,(0,s.useEffect)((function(){var e=R;return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[R]),(0,s.useEffect)((function(){k(),O()}),[r,C,E]),(0,s.useEffect)((function(){return k}),[]),[function(e){e&&e!==w.current.element&&(k(),w.current.element=e,w.current.scrollContainers=a(e),O())},m,z]}function a(e){var n=[];if(!e||e===document.body)return n;var t=window.getComputedStyle(e);return[t.overflow,t.overflowX,t.overflowY].some((function(e){return"auto"===e||"scroll"===e}))&&n.push(e),[].concat(n,(0,r.Z)(a(e.parentElement)))}var d=["x","y","top","bottom","left","right","width","height"],h=function(e,n){return d.every((function(t){return e[t]===n[t]}))}}}]);
//# sourceMappingURL=715.302c00cc.chunk.js.map