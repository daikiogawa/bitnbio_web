var cf=Object.defineProperty;var uf=(n,t,e)=>t in n?cf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var pt=(n,t,e)=>(uf(n,typeof t!="symbol"?t+"":t,e),e);class hf{constructor(){this.breakPoint={pc:1600,sp:768},this.attrName={os:{key:"data-os",value:{mac:"mac",windows:"windows"}},devicePixelRatio:{key:"data-device-pixel-ratio"},touchDevice:{key:"data-touch-device"},layout:{key:"data-layout",value:{pc:"pc",sp:"sp"}}},this.init()}init(){this.os=this.getOSName(),this.devicePixelRatio=this.getDevicePixelRatio(),this.touchDevice=this.isTouchDevice(),this.pcLayout=this.isPcLayout(),this.tablet=this.isTablet(),this.mobile=this.isMobile()}getOSName(){let t;return this.ua=navigator.userAgent,this.ua&&(this.ua.includes("Mac")?t=this.attrName.os.value.mac:t=this.attrName.os.value.windows,document.documentElement.setAttribute(this.attrName.os.key,t)),t}getDevicePixelRatio(){const t=window.devicePixelRatio;return document.documentElement&&document.documentElement.setAttribute(this.attrName.devicePixelRatio.key,t),t}isTouchDevice(){const t=matchMedia==null?void 0:matchMedia("(pointer:coarse)");let e;return"maxTouchPoints"in navigator&&(e=navigator.maxTouchPoints>0),"msMaxTouchPoints"in navigator&&(e=navigator.msMaxTouchPoints>0),(t==null?void 0:t.media)==="(pointer:coarse)"&&(e=!!t.matches),"orientation"in window&&(e=!0),e?document.documentElement.setAttribute(this.attrName.touchDevice.key,"true"):document.documentElement.setAttribute(this.attrName.touchDevice.key,"false"),e}isPcLayout(){const t=window.innerWidth>=this.breakPoint.sp;return t?document.documentElement.setAttribute(this.attrName.layout.key,this.attrName.layout.value.pc):document.documentElement.setAttribute(this.attrName.layout.key,this.attrName.layout.value.sp),t}isTablet(){return this.pcLayout&&this.touchDevice}isMobile(){return!this.pcLayout&&this.isTouchDevice}}class df{constructor(){pt(this,"onEvent",t=>{this.prevent(t)});pt(this,"prevent",t=>{t.preventDefault()});this.eventName={wheel:"wheel",touchMove:"ontouchmove"in document?"touchmove":"click",touchStart:"touchstart",touchEnd:"touchend",keyDown:"keydown",keyUp:"keyup"}}enableEvent(){window.removeEventListener(this.eventName.wheel,this.onEvent),window.removeEventListener(this.eventName.touchMove,this.onEvent),window.removeEventListener(this.eventName.touchStart,this.onEvent),window.removeEventListener(this.eventName.touchEnd,this.onEvent),window.removeEventListener(this.eventName.keyDown,this.onEvent),window.removeEventListener(this.eventName.keyUp,this.onEvent)}disableEvent(){window.addEventListener(this.eventName.wheel,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchMove,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchStart,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchEnd,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.keyDown,this.onEvent),window.addEventListener(this.eventName.keyUp,this.onEvent)}}class ff{constructor(t={}){this.options=t,this.dataName={observerId:"observerId"},this.inViewList=[],this.outViewList=[],this.observer=null,this.observerCount=0}init(){this.createObserver()}createObserver(){this.observer=new IntersectionObserver((...t)=>{this.callback(...t)},this.options)}add(t,e=null,i=null){t.dataset[this.dataName.observerId]=this.observerCount,e&&(this.inViewList[this.observerCount]=e),i&&(this.outViewList[this.observerCount]=i),this.observer.observe(t),this.observerCount++}remove(t){const e=t.dataset[this.dataName.observerId];this.inViewList[e]&&(this.inViewList[e]=null),this.outViewList[e]&&(this.outViewList[e]=null),t.dataset[this.dataName.observerId]="",this.observer.unobserve(t)}callback(t){t.forEach(e=>{e.isIntersecting?this.inView(e):this.outView(e)})}inView(t){const s=t.target.dataset[this.dataName.observerId];this.inViewList[s]&&this.inViewList[s]()}outView(t){const s=t.target.dataset[this.dataName.observerId];this.outViewList[s]&&this.outViewList[s]()}}function _c(n,t=1){return Math.round(n*t)/t}function pf(n){return n*Math.PI/180}function mf(n,t){return n*.5/Math.tan(pf(t*.5))}class gf{constructor(){pt(this,"onResize",()=>{requestAnimationFrame(()=>{this.isChangedDevicePixelRatio()&&window.location.reload(),this.setSize(),this.isChangedLayout()&&window.location.reload(),this.setVariable(),this.setPrevSize()})});this.size={window:{x:0,y:0},body:{x:0,y:0}},this.prevSize={body:{x:0}},this.firstViewSize={window:{x:0,y:0}},this.pcDevice=!0,this.pixelRatio=window.devicePixelRatio,this.breakPoint=768}init(){this.pcDevice=!kt.detection.mobile&&!kt.detection.tablet,this.setSize(),this.setPrevSize(),this.setFirstViewSize(),this.setVariable(),this.addEventListeners()}setSize(){this.size.window.x=window.innerWidth,this.size.window.y=window.innerHeight,document.body.style.width="100%",this.size.body.x=document.body.clientWidth,this.size.body.y=document.body.clientHeight,document.body.style.width=""}setPrevSize(){this.prevSize.body.x=this.size.body.x}setFirstViewSize(){this.firstViewSize.window.y=this.size.window.y}setVariable(){const t=_c(document.documentElement.clientWidth*.01,1e4),e=_c(this.size.window.y*.01,1e4);document.documentElement.style.setProperty("--vw",`${t}px`),document.documentElement.style.setProperty("--vh",`${e}px`)}addEventListeners(){window.addEventListener("resize",this.onResize,!1)}isChangedLayout(){return kt.detection.pcLayout?this.size.body.x<this.breakPoint:this.size.body.x>=this.breakPoint}isChangedDevicePixelRatio(){return this.pixelRatio!==kt.detection.getDevicePixelRatio()}}var _f="1.1.20";function nh(n,t,e){return Math.max(n,Math.min(t,e))}function vf(n,t,e){return(1-e)*n+e*t}function xf(n,t,e,i){return vf(n,t,1-Math.exp(-e*i))}function Sf(n,t){return(n%t+t)%t}var Ef=class{constructor(){pt(this,"isRunning",!1);pt(this,"value",0);pt(this,"from",0);pt(this,"to",0);pt(this,"currentTime",0);pt(this,"lerp");pt(this,"duration");pt(this,"easing");pt(this,"onUpdate")}advance(n){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=nh(0,this.currentTime/this.duration,1);t=i>=1;const s=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=xf(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(n,t,{lerp:e,duration:i,easing:s,onStart:r,onUpdate:a}){this.from=this.value=n,this.to=t,this.lerp=e,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=a}};function yf(n,t){let e;return function(...i){let s=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,n.apply(s,i)},t)}}var Mf=class{constructor(n,t,{autoResize:e=!0,debounce:i=250}={}){pt(this,"width",0);pt(this,"height",0);pt(this,"scrollHeight",0);pt(this,"scrollWidth",0);pt(this,"debouncedResize");pt(this,"wrapperResizeObserver");pt(this,"contentResizeObserver");pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});pt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});pt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=t,e&&(this.debouncedResize=yf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,t;(n=this.wrapperResizeObserver)==null||n.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},sh=class{constructor(){pt(this,"events",{})}emit(n,...t){var i;let e=this.events[n]||[];for(let s=0,r=e.length;s<r;s++)(i=e[s])==null||i.call(e,...t)}on(n,t){var e;return(e=this.events[n])!=null&&e.push(t)||(this.events[n]=[t]),()=>{var i;this.events[n]=(i=this.events[n])==null?void 0:i.filter(s=>t!==s)}}off(n,t){var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}destroy(){this.events={}}},vc=100/6,ji={passive:!1},wf=class{constructor(n,t={wheelMultiplier:1,touchMultiplier:1}){pt(this,"touchStart",{x:0,y:0});pt(this,"lastDelta",{x:0,y:0});pt(this,"window",{width:0,height:0});pt(this,"emitter",new sh);pt(this,"onTouchStart",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});pt(this,"onTouchMove",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n,i=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})});pt(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});pt(this,"onWheel",n=>{let{deltaX:t,deltaY:e,deltaMode:i}=n;const s=i===1?vc:i===2?this.window.width:1,r=i===1?vc:i===2?this.window.height:1;t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:n})});pt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ji),this.element.addEventListener("touchstart",this.onTouchStart,ji),this.element.addEventListener("touchmove",this.onTouchMove,ji),this.element.addEventListener("touchend",this.onTouchEnd,ji)}on(n,t){return this.emitter.on(n,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ji),this.element.removeEventListener("touchstart",this.onTouchStart,ji),this.element.removeEventListener("touchmove",this.onTouchMove,ji),this.element.removeEventListener("touchend",this.onTouchEnd,ji)}},Tf=class{constructor({wrapper:n=window,content:t=document.documentElement,eventsTarget:e=n,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=b=>Math.min(1,1.001-Math.pow(2,-10*b)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:f,overscroll:v=!0,autoRaf:S=!1,anchors:x=!1,__experimental__naiveDimensions:T=!1}={}){pt(this,"_isScrolling",!1);pt(this,"_isStopped",!1);pt(this,"_isLocked",!1);pt(this,"_preventNextNativeScrollEvent",!1);pt(this,"_resetVelocityTimeout",null);pt(this,"__rafID",null);pt(this,"isTouching");pt(this,"time",0);pt(this,"userData",{});pt(this,"lastVelocity",0);pt(this,"velocity",0);pt(this,"direction",0);pt(this,"options");pt(this,"targetScroll");pt(this,"animatedScroll");pt(this,"animate",new Ef);pt(this,"emitter",new sh);pt(this,"dimensions");pt(this,"virtualScroll");pt(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});pt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});pt(this,"onClick",n=>{const e=n.composedPath().find(i=>{var s;return i instanceof HTMLAnchorElement&&((s=i.getAttribute("href"))==null?void 0:s.startsWith("#"))});if(e){const i=e.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(i,s)}}});pt(this,"onPointerDown",n=>{n.button===1&&this.reset()});pt(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:t,deltaY:e,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var f,v,S;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((f=m.hasAttribute)==null?void 0:f.call(m,"data-lenis-prevent"))||s&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.preventDefault();const p=s&&this.options.syncTouch,g=s&&i.type==="touchend"&&Math.abs(d)>5;g&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});pt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});pt(this,"raf",n=>{const t=n-(this.time||n);this.time=n,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=_f,(!n||n===document.documentElement)&&(n=window),this.options={wrapper:n,content:t,eventsTarget:e,smoothWheel:i,syncTouch:s,syncTouchLerp:r,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:p,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:f,overscroll:v,autoRaf:S,anchors:x,__experimental__naiveDimensions:T},this.dimensions=new Mf(n,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new wf(e,{touchMultiplier:p,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(n,t){return this.emitter.on(n,t)}off(n,t){return this.emitter.off(n,t)}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(n,{offset:t=0,immediate:e=!1,lock:i=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof n=="string"&&["top","left","start"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let d;if(typeof n=="string"?d=document.querySelector(n):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(d=n),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const p=d.getBoundingClientRect();n=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof n=="number"){if(n+=t,n=Math.round(n),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):n=nh(0,n,this.limit),n===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=h!=null?h:{},e){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=n),this.animate.fromTo(this.animatedScroll,n,{duration:s,easing:r,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;const n=this.options.wrapper;return this.isHorizontal?(t=n.scrollX)!=null?t:n.scrollLeft:(e=n.scrollY)!=null?e:n.scrollTop}get scroll(){return this.options.infinite?Sf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};class bf{constructor(){this.lenis=null,this.raf=null}init(){this.lenis=new Tf,this.raf=t=>{this.lenis.raf(t),requestAnimationFrame(this.raf)},requestAnimationFrame(this.raf)}start(){this.lenis.start()}stop(){this.lenis.stop()}}class Df{constructor(){this.isStartup=!0,this.detection=new hf,this.event=new df,this.reload=new gf,this.iObserver=new ff,this.smoothScroll=new bf}async init(){await new Promise(t=>{this.reload.init(),this.iObserver.init(),this.smoothScroll.init(),t()})}}const kt=new Df;function zi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function rh(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},Rl,De,oe,di=1e8,ne=1/di,Eo=Math.PI*2,Af=Eo/4,Cf=0,ah=Math.sqrt,Rf=Math.cos,Pf=Math.sin,Te=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},Wi=function(t){return typeof t=="number"},Pl=function(t){return typeof t=="undefined"},Pi=function(t){return typeof t=="object"},Ve=function(t){return t!==!1},Ll=function(){return typeof window!="undefined"},Sr=function(t){return de(t)||Te(t)},oh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Le=Array.isArray,yo=/(?:-?\.?\d|\.)+/gi,lh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ba=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ch=/[+-]=-?[.\d]+/,uh=/[^,'"\[\]\s]+/gi,Lf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,Ti,Mo,Fl,ni={},ra={},hh,dh=function(t){return(ra=Es(t,ni))&&qe},Il=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},tr=function(t,e){return!e&&console.warn(t)},fh=function(t,e){return t&&(ni[t]=e)&&ra&&(ra[t]=e)||ni},er=function(){return 0},Ff={suppressEvents:!0,isStart:!0,kill:!1},jr={suppressEvents:!0,kill:!1},If={suppressEvents:!0},Ul={},cn=[],wo={},ph,Ze={},Da={},xc=30,Kr=[],Nl="",Ol=function(t){var e=t[0],i,s;if(Pi(e)||de(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=Kr.length;s--&&!Kr[s].targetTest(e););i=Kr[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Bh(t[s],i)))||t.splice(s,1);return t},Un=function(t){return t._gsap||Ol(fi(t))[0]._gsap},mh=function(t,e,i){return(i=t[e])&&de(i)?t[e]():Pl(i)&&t.getAttribute&&t.getAttribute(e)||i},Ge=function(t,e){return(t=t.split(",")).forEach(e)||t},fe=function(t){return Math.round(t*1e5)/1e5||0},ve=function(t){return Math.round(t*1e7)/1e7||0},ps=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},Uf=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},aa=function(){var t=cn.length,e=cn.slice(0),i,s;for(wo={},cn.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Bl=function(t){return!!(t._initted||t._startAt||t.add)},gh=function(t,e,i,s){cn.length&&!De&&aa(),t.render(e,i,s||!!(De&&e<0&&Bl(t))),cn.length&&!De&&aa()},_h=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(uh).length<2?e:Te(t)?t.trim():t},vh=function(t){return t},si=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Nf=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Es=function(t,e){for(var i in e)t[i]=e[i];return t},Sc=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Pi(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},oa=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},Ys=function(t){var e=t.parent||le,i=t.keyframes?Nf(Le(t.keyframes)):si;if(Ve(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Of=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},xh=function(t,e,i,s,r){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},ga=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=e._prev,a=e._next;r?r._next=a:t[i]===e&&(t[i]=a),a?a._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},fn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nn=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Bf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},To=function(t,e,i,s){return t._startAt&&(De?t._startAt.revert(jr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},zf=function n(t){return!t||t._ts&&n(t.parent)},Ec=function(t){return t._repeat?ys(t._tTime,t=t.duration()+t._rDelay)*t:0},ys=function(t,e){var i=Math.floor(t=ve(t/e));return t&&i===t?i-1:i},la=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},_a=function(t){return t._end=ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},va=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ve(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),_a(t),i._dirty||Nn(i,t)),t},Sh=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=la(t.rawTime(),e),(!e._dur||hr(0,e.totalDuration(),i)-e._tTime>ne)&&e.render(i,!0)),Nn(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ne}},Di=function(t,e,i,s){return e.parent&&fn(e),e._start=ve((Wi(i)?i:i||t!==le?li(t,i,e):t._time)+e._delay),e._end=ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xh(t,e,"_first","_last",t._sort?"_start":0),bo(e)||(t._recent=e),s||Sh(t,e),t._ts<0&&va(t,t._tTime),t},Eh=function(t,e){return(ni.ScrollTrigger||Il("scrollTrigger",e))&&ni.ScrollTrigger.create(e,t)},yh=function(t,e,i,s,r){if(kl(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ph!==Je.frame)return cn.push(t),t._lazy=[r,s],1},kf=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},bo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Hf=function(t,e,i,s){var r=t.ratio,a=e<0||!e&&(!t._start&&kf(t)&&!(!t._initted&&bo(t))||(t._ts<0||t._dp._ts<0)&&!bo(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=hr(0,t._tDur,e),u=ys(l,o),t._yoyo&&u&1&&(a=1-a),u!==ys(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||De||s||t._zTime===ne||!e&&t._zTime){if(!t._initted&&yh(t,e,s,i,l))return;for(h=t._zTime,t._zTime=e||(i?ne:0),i||(i=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&To(t,e,i,!0),t._onUpdate&&!i&&Qe(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&fn(t,1),!i&&!De&&(Qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Vf=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Ms=function(t,e,i,s){var r=t._repeat,a=ve(e)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ve(a*(r+1)+t._rDelay*r):a,o>0&&!s&&va(t,t._tTime=t._tDur*o),t.parent&&_a(t),i||Nn(t.parent,t),t},yc=function(t){return t instanceof Ne?Nn(t):Ms(t,t._dur)},Gf={_start:0,endTime:er,totalDuration:er},li=function n(t,e,i){var s=t.labels,r=t._recent||Gf,a=t.duration()>=di?r.endTime(!1):t._dur,o,l,c;return Te(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(e in s||(s[e]=a),s[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(Le(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},js=function(t,e,i){var s=Wi(e[1]),r=(s?2:1)+(t<2?0:1),a=e[r],o,l;if(s&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ve(l.vars.inherit)&&l.parent;a.immediateRender=Ve(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new _e(e[0],a,e[r+1])},gn=function(t,e){return t||t===0?e(t):e},hr=function(t,e,i){return i<t?t:i>e?e:i},Pe=function(t,e){return!Te(t)||!(e=Lf.exec(t))?"":e[1]},Wf=function(t,e,i){return gn(i,function(s){return hr(t,e,s)})},Do=[].slice,Mh=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==Ti},$f=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return Te(s)&&!e||Mh(s,1)?(r=i).push.apply(r,fi(s)):i.push(s)})||i},fi=function(t,e,i){return oe&&!e&&oe.selector?oe.selector(t):Te(t)&&!i&&(Mo||!ws())?Do.call((e||Fl).querySelectorAll(t),0):Le(t)?$f(t,i):Mh(t)?Do.call(t,0):t?[t]:[]},Ao=function(t){return t=fi(t)[0]||tr("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return fi(e,i.querySelectorAll?i:i===t?tr("Invalid scope")||Fl.createElement("div"):t)}},wh=function(t){return t.sort(function(){return .5-Math.random()})},Th=function(t){if(de(t))return t;var e=Pi(t)?t:{each:t},i=On(e.ease),s=e.from||0,r=parseFloat(e.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=e.axis,u=s,h=s;return Te(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],h=s[1]),function(d,p,_){var g=(_||e).length,m=a[g],f,v,S,x,T,b,D,A,E;if(!m){if(E=e.grid==="auto"?0:(e.grid||[1,di])[1],!E){for(D=-di;D<(D=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=a[g]=[],f=l?Math.min(E,g)*u-.5:s%E,v=E===di?0:l?g*h/E-.5:s/E|0,D=0,A=di,b=0;b<g;b++)S=b%E-f,x=v-(b/E|0),m[b]=T=c?Math.abs(c==="y"?x:S):ah(S*S+x*x),T>D&&(D=T),T<A&&(A=T);s==="random"&&wh(m),m.max=D-A,m.min=A,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Pe(e.amount||e.each)||0,i=i&&g<0?Uh(i):i}return g=(m[d]-m.min)/m.max||0,ve(m.b+(i?i(g):g)*m.v)+m.u}},Co=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=ve(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(Wi(i)?0:Pe(i))}},bh=function(t,e){var i=Le(t),s,r;return!i&&Pi(t)&&(s=i=t.radius||di,t.values?(t=fi(t.values),(r=!Wi(t[0]))&&(s*=s)):t=Co(t.increment)),gn(e,i?de(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=di,u=0,h=t.length,d,p;h--;)r?(d=t[h].x-o,p=t[h].y-l,d=d*d+p*p):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!s||c<=s?t[u]:a,r||u===a||Wi(a)?u:u+Pe(a)}:Co(t))},Dh=function(t,e,i,s){return gn(Le(t)?!e:i===!0?!!(i=0):!s,function(){return Le(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},Xf=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(r,a){return a(r)},s)}},qf=function(t,e){return function(i){return t(parseFloat(i))+(e||Pe(i))}},Yf=function(t,e,i){return Ch(t,e,0,1,i)},Ah=function(t,e,i){return gn(i,function(s){return t[~~e(s)]})},jf=function n(t,e,i){var s=e-t;return Le(t)?Ah(t,n(0,t.length),e):gn(i,function(r){return(s+(r-t)%s)%s+t})},Kf=function n(t,e,i){var s=e-t,r=s*2;return Le(t)?Ah(t,n(0,t.length-1),e):gn(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},ir=function(t){for(var e=0,i="",s,r,a,o;~(s=t.indexOf("random(",e));)a=t.indexOf(")",s),o=t.charAt(s+7)==="[",r=t.substr(s+7,a-s-7).match(o?uh:yo),i+=t.substr(e,s-e)+Dh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},Ch=function(t,e,i,s,r){var a=e-t,o=s-i;return gn(r,function(l){return i+((l-t)/a*o||0)})},Zf=function n(t,e,i,s){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=Te(t),o={},l,c,u,h,d;if(i===!0&&(s=1)&&(i=null),a)t={p:t},e={p:e};else if(Le(t)&&!Le(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},i=e}else s||(t=Es(Le(t)?[]:{},t));if(!u){for(l in e)zl.call(o,t,l,"get",e[l]);r=function(_){return Gl(_,o)||(a?t.p:t)}}}return gn(i,r)},Mc=function(t,e,i){var s=t.labels,r=di,a,o,l;for(a in s)o=s[a]-e,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Qe=function(t,e,i){var s=t.vars,r=s[e],a=oe,o=t._ctx,l,c,u;if(r)return l=s[e+"Params"],c=s.callbackScope||t,i&&cn.length&&aa(),o&&(oe=o),u=l?r.apply(c,l):r.call(c),oe=a,u},$s=function(t){return fn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&Qe(t,"onInterrupt"),t},ds,Rh=[],Ph=function(t){if(t)if(t=!t.name&&t.default||t,Ll()||t.headless){var e=t.name,i=de(t),s=e&&!i&&t.init?function(){this._props=[]}:t,r={init:er,render:Gl,add:zl,kill:fp,modifier:dp,rawVars:0},a={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(ws(),t!==s){if(Ze[e])return;si(s,si(oa(t,r),a)),Es(s.prototype,Es(r,oa(t,a))),Ze[s.prop=e]=s,t.targetTest&&(Kr.push(s),Ul[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}fh(e,s),t.register&&t.register(qe,s,We)}else Rh.push(t)},ie=255,Xs={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},Aa=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ie+.5|0},Lh=function(t,e,i){var s=t?Wi(t)?[t>>16,t>>8&ie,t&ie]:0:Xs.black,r,a,o,l,c,u,h,d,p,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xs[t])s=Xs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ie,s&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(yo),!e)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=Aa(l+1/3,r,a),s[1]=Aa(l,r,a),s[2]=Aa(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(lh),i&&s.length<4&&(s[3]=1),s}else s=t.match(yo)||Xs.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/ie,a=s[1]/ie,o=s[2]/ie,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},Fh=function(t){var e=[],i=[],s=-1;return t.split(un).forEach(function(r){var a=r.match(hs)||[];e.push.apply(e,a),i.push(s+=a.length+1)}),e.c=i,e},wc=function(t,e,i){var s="",r=(t+s).match(un),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return t;if(r=r.map(function(d){return(d=Lh(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Fh(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(un,"1").split(hs),h=c.length-1;o<h;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=t.split(un),h=c.length-1;o<h;o++)s+=c[o]+r[o];return s+c[h]},un=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xs)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),Jf=/hsl[a]?\(/,Ih=function(t){var e=t.join(" "),i;if(un.lastIndex=0,un.test(e))return i=Jf.test(e),t[1]=wc(t[1],i),t[0]=wc(t[0],i,Fh(t[1])),!0},nr,Je=function(){var n=Date.now,t=500,e=33,i=n(),s=i,r=1e3/240,a=r,o=[],l,c,u,h,d,p,_=function g(m){var f=n()-s,v=m===!0,S,x,T,b;if((f>t||f<0)&&(i+=f-e),s+=f,T=s-i,S=T-a,(S>0||v)&&(b=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,a+=S+(S>=r?4:r-S),x=1),v||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](T,d,b,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){hh&&(!Mo&&Ll()&&(Ti=Mo=window,Fl=Ti.document||{},ni.gsap=qe,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(qe.version),dh(ra||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),Rh.forEach(Ph)),u=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},nr=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),nr=0,c=er},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,f,v){var S=f?function(x,T,b,D){m(x,T,b,D),h.remove(S)}:m;return h.remove(m),o[v?"unshift":"push"](S),ws(),S},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},h}(),ws=function(){return!nr&&Je.wake()},Vt={},Qf=/^[\d.\-M][\d.\-,\s]/,tp=/["']/g,ep=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[s]=isNaN(c)?c.replace(tp,"").trim():+c,s=l.substr(o+1).trim();return e},ip=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},np=function(t){var e=(t+"").split("("),i=Vt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[ep(e[1])]:ip(t).split(",").map(_h)):Vt._CE&&Qf.test(t)?Vt._CE("",t):i},Uh=function(t){return function(e){return 1-t(1-e)}},Nh=function n(t,e){for(var i=t._first,s;i;)i instanceof Ne?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},On=function(t,e){return t&&(de(t)?t:Vt[t]||np(t))||e},Gn=function(t,e,i,s){i===void 0&&(i=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:s},a;return Ge(t,function(o){Vt[o]=ni[o]=r,Vt[a=o.toLowerCase()]=i;for(var l in r)Vt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Vt[o+"."+l]=r[l]}),r},Oh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ca=function n(t,e,i){var s=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),a=r/Eo*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*Pf((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Oh(o);return r=Eo/r,l.config=function(c,u){return n(t,c,u)},l},Ra=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Oh(i);return s.config=function(r){return n(t,r)},s};Ge("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Gn(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;Gn("Elastic",Ca("in"),Ca("out"),Ca());(function(n,t){var e=1/t,i=2*e,s=2.5*e,r=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<s?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};Gn("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Gn("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Gn("Circ",function(n){return-(ah(1-n*n)-1)});Gn("Sine",function(n){return n===1?1:-Rf(n*Af)+1});Gn("Back",Ra("in"),Ra("out"),Ra());Vt.SteppedEase=Vt.steps=ni.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),r=e?1:0,a=1-ne;return function(o){return((s*hr(0,a,o)|0)+r)*i}}};Ss.ease=Vt["quad.out"];Ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Nl+=n+","+n+"Params,"});var Bh=function(t,e){this.id=Cf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mh,this.set=e?e.getSetter:Vl},sr=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ms(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),nr||Je.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(ws(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(va(this,i),!r._dp||r.parent||Sh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ne||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),gh(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ec(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ec(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?ys(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?la(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ne?0:this._rts,this.totalTime(hr(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),_a(this),Bf(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Di(s,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ve(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?la(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=If);var s=De;return De=i,Bl(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),De=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,yc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,yc(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(li(this,i),Ve(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Ve(s)),this._dur||(this._zTime=-ne),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-ne)},t.eventCallback=function(i,s,r){var a=this.vars;return arguments.length>1?(s?(a[i]=s,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this;return new Promise(function(r){var a=de(i)?i:vh,o=function(){var c=s.then;s.then=null,de(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=c),r(a),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?o():s._prom=o})},t.kill=function(){$s(this)},n}();si(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Ne=function(n){rh(t,n);function t(i,s){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Ve(i.sortChildren),le&&Di(i.parent||le,zi(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Eh(zi(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,a){return js(0,arguments,this),this},e.from=function(s,r,a){return js(1,arguments,this),this},e.fromTo=function(s,r,a,o){return js(2,arguments,this),this},e.set=function(s,r,a){return r.duration=0,r.parent=this,Ys(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new _e(s,r,li(this,a),1),this},e.call=function(s,r,a){return Di(this,_e.delayedCall(0,s,r),a)},e.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new _e(s,a,li(this,l)),this},e.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,Ys(a).immediateRender=Ve(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},e.staggerFromTo=function(s,r,a,o,l,c,u,h){return o.startAt=a,Ys(o).immediateRender=Ve(o.immediateRender),this.staggerTo(s,r,o,l,c,u,h)},e.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:ve(s),h=this._zTime<0!=s<0&&(this._initted||!c),d,p,_,g,m,f,v,S,x,T,b,D;if(this!==le&&u>l&&s>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),d=u,x=this._start,S=this._ts,f=!S,h&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(d=ve(u%m),u===l?(g=this._repeat,d=c):(T=ve(u/m),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=ys(this._tTime,m),!o&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),b&&g&1&&(d=c-d,D=1),g!==T&&!this._lock){var A=b&&T&1,E=A===(b&&g&1);if(g<T&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(D?0:ve(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Nh(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Vf(this,ve(o),ve(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&!r&&!T&&(Qe(this,"onStart"),this._tTime!==u))return this;if(d>=o&&s>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!f){v=0,_&&(u+=this._zTime=-ne);break}}p=_}else{p=this._last;for(var y=s<0?s:d;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,r,a||De&&Bl(p)),d!==this._time||!this._ts&&!f){v=0,_&&(u+=this._zTime=y?-ne:ne);break}}p=_}}if(v&&!r&&(this.pause(),v.render(d>=o?0:-ne)._zTime=d>=o?1:-1,this._ts))return this._start=x,_a(this),this.render(s,r,a);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fn(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(Qe(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var a=this;if(Wi(r)||(r=li(this,r,s)),!(s instanceof sr)){if(Le(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Te(s))return this.addLabel(s,r);if(de(s))s=_e.delayedCall(0,s);else return this}return this!==s?Di(this,s,r):this},e.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof _e?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},e.remove=function(s){return Te(s)?this.removeLabel(s):de(s)?this.killTweensOf(s):(s.parent===this&&ga(this,s),s===this._recent&&(this._recent=this._last),Nn(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ve(Je.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=li(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,a){var o=_e.delayedCall(0,r||er,a);return o.data="isPause",this._hasPause=1,Di(this,o,li(this,s))},e.removePause=function(s){var r=this._first;for(s=li(this,s);r;)r._start===s&&r.data==="isPause"&&fn(r),r=r._next},e.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)an!==o[l]&&o[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var a=[],o=fi(s),l=this._first,c=Wi(r),u;l;)l instanceof _e?Uf(l._targets,o)&&(c?(!an||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(s,r){r=r||{};var a=this,o=li(a,s),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=_e.to(a,si({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ms(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(s,r,a){return this.tweenTo(r,si({startAt:{time:li(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Mc(this,li(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Mc(this,li(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(s,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return Nn(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return n.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Nn(this)},e.totalDuration=function(s){var r=0,a=this,o=a._last,l=di,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ms(a,a===le&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(le._ts&&(gh(le,la(s,le)),ph=Je.frame),Je.frame>=xc){xc+=ei.autoSleep||120;var r=le._first;if((!r||!r._ts)&&ei.autoSleep&&Je._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Je.sleep()}}},t}(sr);si(Ne.prototype,{_lock:0,_hasPause:0,_forcing:0});var sp=function(t,e,i,s,r,a,o){var l=new We(this._pt,t,e,0,1,Wh,null,r),c=0,u=0,h,d,p,_,g,m,f,v;for(l.b=i,l.e=s,i+="",s+="",(f=~s.indexOf("random("))&&(s=ir(s)),a&&(v=[i,s],a(v,t,e),i=v[0],s=v[1]),d=i.match(ba)||[];h=ba.exec(s);)_=h[0],g=s.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ps(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=ba.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(ch.test(s)||f)&&(l.e=0),this._pt=l,l},zl=function(t,e,i,s,r,a,o,l,c,u){de(s)&&(s=s(r||0,t,a));var h=t[e],d=i!=="get"?i:de(h)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=de(h)?c?cp:Vh:Hl,_;if(Te(s)&&(~s.indexOf("random(")&&(s=ir(s)),s.charAt(1)==="="&&(_=ps(d,s)+(Pe(d)||0),(_||_===0)&&(s=_))),!u||d!==s||Ro)return!isNaN(d*s)&&s!==""?(_=new We(this._pt,t,e,+d||0,s-(d||0),typeof h=="boolean"?hp:Gh,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&Il(e,s),sp.call(this,t,e,d,s,p,l||ei.stringFilter,c))},rp=function(t,e,i,s,r){if(de(t)&&(t=Ks(t,r,e,i,s)),!Pi(t)||t.style&&t.nodeType||Le(t)||oh(t))return Te(t)?Ks(t,r,e,i,s):t;var a={},o;for(o in t)a[o]=Ks(t[o],r,e,i,s);return a},zh=function(t,e,i,s,r,a){var o,l,c,u;if(Ze[t]&&(o=new Ze[t]).init(r,o.rawVars?e[t]:rp(e[t],s,r,a,i),i,s,a)!==!1&&(i._pt=l=new We(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==ds))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},an,Ro,kl=function n(t,e,i){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,h=s.yoyoEase,d=s.keyframes,p=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,v=f&&f.data==="nested"?f.vars.targets:m,S=t._overwrite==="auto"&&!Rl,x=t.timeline,T,b,D,A,E,y,R,I,N,$,O,L,H;if(x&&(!d||!r)&&(r="none"),t._ease=On(r,Ss.ease),t._yEase=h?Uh(On(h===!0?r:h,Ss.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!s.runBackwards,!x||d&&!s.stagger){if(I=m[0]?Un(m[0]).harness:0,L=I&&s[I.prop],T=oa(s,Ul),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?jr:Ff),g._lazy=0),a){if(fn(t._startAt=_e.set(m,si({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Ve(l),startAt:null,delay:0,onUpdate:c&&function(){return Qe(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!o&&!p)&&t._startAt.revert(jr),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),D=si({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ve(l),immediateRender:o,stagger:0,parent:f},T),L&&(D[I.prop]=L),fn(t._startAt=_e.set(m,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(jr):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ve(l)||l&&!_,b=0;b<m.length;b++){if(E=m[b],R=E._gsap||Ol(m)[b]._gsap,t._ptLookup[b]=$={},wo[R.id]&&cn.length&&aa(),O=v===m?b:v.indexOf(E),I&&(N=new I).init(E,L||T,t,O,v)!==!1&&(t._pt=A=new We(t._pt,E,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(U){$[U]=A}),N.priority&&(y=1)),!I||L)for(D in T)Ze[D]&&(N=zh(D,T,t,O,E,v))?N.priority&&(y=1):$[D]=A=zl.call(t,E,D,"get",T[D],O,v,0,s.stringFilter);t._op&&t._op[b]&&t.kill(E,t._op[b]),S&&t._pt&&(an=t,le.killTweensOf(E,$,t.globalTime(e)),H=!t.parent,an=0),t._pt&&l&&(wo[R.id]=1)}y&&$h(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,d&&e<=0&&x.render(di,!0,!0)},ap=function(t,e,i,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(u=d[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ro=1,t.vars[e]="+=0",kl(t,o),Ro=0,l?tr(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=fe(i)+Pe(h.e)),h.b&&(h.b=u.s+Pe(h.b))},op=function(t,e){var i=t[0]?Un(t[0]).harness:0,s=i&&i.aliases,r,a,o,l;if(!s)return e;r=Es({},e);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},lp=function(t,e,i,s){var r=e.ease||s||"power1.inOut",a,o;if(Le(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Ks=function(t,e,i,s,r){return de(t)?t.call(e,i,s,r):Te(t)&&~t.indexOf("random(")?ir(t):t},kh=Nl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hh={};Ge(kh+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Hh[n]=1});var _e=function(n){rh(t,n);function t(i,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=n.call(this,a?s:Ys(s))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=s.parent||le,S=(Le(i)||oh(i)?Wi(i[0]):"length"in s)?[i]:fi(i),x,T,b,D,A,E,y,R;if(o._targets=S.length?Ol(S):tr("GSAP target "+i+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||Sr(c)||Sr(u)){if(s=o.vars,x=o.timeline=new Ne({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:S}),x.kill(),x.parent=x._dp=zi(o),x._start=0,d||Sr(c)||Sr(u)){if(D=S.length,y=d&&Th(d),Pi(d))for(A in d)~kh.indexOf(A)&&(R||(R={}),R[A]=d[A]);for(T=0;T<D;T++)b=oa(s,Hh),b.stagger=0,f&&(b.yoyoEase=f),R&&Es(b,R),E=S[T],b.duration=+Ks(c,zi(o),T,E,S),b.delay=(+Ks(u,zi(o),T,E,S)||0)-o._delay,!d&&D===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),x.to(E,b,y?y(T,E,S):0),x._ease=Vt.none;x.duration()?c=u=0:o.timeline=0}else if(_){Ys(si(x.vars.defaults,{ease:"none"})),x._ease=On(_.ease||s.ease||"none");var I=0,N,$,O;if(Le(_))_.forEach(function(L){return x.to(S,L,">")}),x.duration();else{b={};for(A in _)A==="ease"||A==="easeEach"||lp(A,_[A],b,_.easeEach);for(A in b)for(N=b[A].sort(function(L,H){return L.t-H.t}),I=0,T=0;T<N.length;T++)$=N[T],O={ease:$.e,duration:($.t-(T?N[T-1].t:0))/100*c},O[A]=$.v,x.to(S,O,I),I+=O.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!Rl&&(an=zi(o),le.killTweensOf(S),an=0),Di(v,zi(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(h||!c&&!_&&o._start===ve(v._time)&&Ve(h)&&zf(zi(o))&&v.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-u)||0)),m&&Eh(zi(o),m),o}var e=t.prototype;return e.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,h=s>l-ne&&!u?l:s<ne?0:s,d,p,_,g,m,f,v,S,x;if(!c)Hf(this,s,r,a);else if(h!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,a);if(d=ve(h%g),h===l?(_=this._repeat,d=c):(m=ve(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(x=this._yEase,d=c-d),m=ys(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&Nh(S,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ve(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(yh(this,u?s:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!o&&h&&!r&&!m&&(Qe(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;S&&S.render(s<0?s:S._dur*S._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&To(this,s,r,a),Qe(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&To(this,s,!0,!0),(s||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&fn(this,1),!r&&!(u&&!o)&&(h||o||f)&&(Qe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,a,o,l){nr||Je.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||kl(this,c),u=this._ease(c/this._dur),ap(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(va(this,0),this.parent||xh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!De),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,an&&an.vars.overwrite!==!0)._first||$s(this),this.parent&&a!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?fi(s):o,c=this._ptLookup,u=this._pt,h,d,p,_,g,m,f;if((!r||r==="all")&&Of(o,l))return r==="all"&&(this._pt=0),$s(this);for(h=this._op=this._op||[],r!=="all"&&(Te(r)&&(g={},Ge(r,function(v){return g[v]=1}),r=g),r=op(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],r==="all"?(h[f]=r,_=d,p={}):(p=h[f]=h[f]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ga(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&$s(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return js(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return js(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return le.killTweensOf(s,r,a)},t}(sr);si(_e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ge("staggerTo,staggerFrom,staggerFromTo",function(n){_e[n]=function(){var t=new Ne,e=Do.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Hl=function(t,e,i){return t[e]=i},Vh=function(t,e,i){return t[e](i)},cp=function(t,e,i,s){return t[e](s.fp,i)},up=function(t,e,i){return t.setAttribute(e,i)},Vl=function(t,e){return de(t[e])?Vh:Pl(t[e])&&t.setAttribute?up:Hl},Gh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},hp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wh=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},Gl=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},dp=function(t,e,i,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,e,i),r=a},fp=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?ga(this,e,"_pt"):e.dep||(i=1),e=s;return!i},pp=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},$h=function(t){for(var e=t._pt,i,s,r,a;e;){for(i=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:a=e,e=i}t._pt=r},We=function(){function n(e,i,s,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=s,this.r=o||Gh,this.d=l||this,this.set=c||Hl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=pp,this.m=i,this.mt=r,this.tween=s},n}();Ge(Nl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ul[n]=1});ni.TweenMax=ni.TweenLite=_e;ni.TimelineLite=ni.TimelineMax=Ne;le=new Ne({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=Ih;var Bn=[],Zr={},mp=[],Tc=0,gp=0,Pa=function(t){return(Zr[t]||mp).map(function(e){return e()})},Po=function(){var t=Date.now(),e=[];t-Tc>2&&(Pa("matchMediaInit"),Bn.forEach(function(i){var s=i.queries,r=i.conditions,a,o,l,c;for(o in s)a=Ti.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),Pa("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Tc=t,Pa("matchMedia"))},Xh=function(){function n(e,i){this.selector=i&&Ao(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gp++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,s,r){de(i)&&(r=s,s=i,i=de);var a=this,o=function(){var c=oe,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Ao(r)),oe=a,h=s.apply(a,arguments),de(h)&&a._r.push(h),oe=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===de?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var s=oe;oe=null,i(this),oe=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof n?i.push.apply(i,s.getTweens()):s instanceof _e&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ne?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof _e)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=Bn.length;a--;)Bn[a].id===this.id&&Bn.splice(a,1)},t.revert=function(i){this.kill(i||{})},n}(),_p=function(){function n(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=n.prototype;return t.add=function(i,s,r){Pi(i)||(i={matches:i});var a=new Xh(0,r||this.scope),o=a.conditions={},l,c,u;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(c in i)c==="all"?u=1:(l=Ti.matchMedia(i[c]),l&&(Bn.indexOf(a)<0&&Bn.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Po):l.addEventListener("change",Po)));return u&&s(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},n}(),ca={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Ph(s)})},timeline:function(t){return new Ne(t)},getTweensOf:function(t,e){return le.getTweensOf(t,e)},getProperty:function(t,e,i,s){Te(t)&&(t=fi(t)[0]);var r=Un(t||{}).get,a=i?vh:_h;return i==="native"&&(i=""),t&&(e?a((Ze[e]&&Ze[e].get||r)(t,e,i,s)):function(o,l,c){return a((Ze[o]&&Ze[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=fi(t),t.length>1){var s=t.map(function(u){return qe.quickSetter(u,e,i)}),r=s.length;return function(u){for(var h=r;h--;)s[h](u)}}t=t[0]||{};var a=Ze[e],o=Un(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;ds._pt=0,h.init(t,i?u+i:u,ds,0,[t]),h.render(1,h),ds._pt&&Gl(1,ds)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,e,i){var s,r=qe.to(t,si((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=On(t.ease,Ss.ease)),Sc(Ss,t||{})},config:function(t){return Sc(ei,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!Ze[o]&&!ni[o]&&tr(e+" effect requires "+o+" plugin.")}),Da[e]=function(o,l,c){return i(fi(o),si(l||{},r),c)},a&&(Ne.prototype[e]=function(o,l,c){return this.add(Da[e](o,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Vt[t]=On(e)},parseEase:function(t,e){return arguments.length?On(t,e):Vt},getById:function(t){return le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Ne(t),s,r;for(i.smoothChildTiming=Ve(t.smoothChildTiming),le.remove(i),i._dp=0,i._time=i._tTime=le._time,s=le._first;s;)r=s._next,(e||!(!s._dur&&s instanceof _e&&s.vars.onComplete===s._targets[0]))&&Di(i,s,s._start-s._delay),s=r;return Di(le,i,0),i},context:function(t,e){return t?new Xh(t,e):oe},matchMedia:function(t){return new _p(t)},matchMediaRefresh:function(){return Bn.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||Po()},addEventListener:function(t,e){var i=Zr[t]||(Zr[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Zr[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:jf,wrapYoyo:Kf,distribute:Th,random:Dh,snap:bh,normalize:Yf,getUnit:Pe,clamp:Wf,splitColor:Lh,toArray:fi,selector:Ao,mapRange:Ch,pipe:Xf,unitize:qf,interpolate:Zf,shuffle:wh},install:dh,effects:Da,ticker:Je,updateRoot:Ne.updateRoot,plugins:Ze,globalTimeline:le,core:{PropTween:We,globals:fh,Tween:_e,Timeline:Ne,Animation:sr,getCache:Un,_removeLinkedListItem:ga,reverting:function(){return De},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Rl=t}}};Ge("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ca[n]=_e[n]});Je.add(Ne.updateRoot);ds=ca.to({},{duration:0});var vp=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},xp=function(t,e){var i=t._targets,s,r,a;for(s in e)for(r=i.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=vp(a,s)),a&&a.modifier&&a.modifier(e[s],t,i[r],s))},La=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Te(r)&&(l={},Ge(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}xp(o,r)}}}},qe=ca.registerPlugin({name:"attr",init:function(t,e,i,s,r){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)De?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},La("roundProps",Co),La("modifiers"),La("snap",bh))||ca;_e.version=Ne.version=qe.version="3.13.0";hh=1;Ll()&&ws();Vt.Power0;Vt.Power1;Vt.Power2;Vt.Power3;Vt.Power4;Vt.Linear;Vt.Quad;Vt.Cubic;Vt.Quart;Vt.Quint;Vt.Strong;Vt.Elastic;Vt.Back;Vt.SteppedEase;Vt.Bounce;Vt.Sine;Vt.Expo;Vt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bc,on,ms,Wl,Ln,Dc,$l,Sp=function(){return typeof window!="undefined"},$i={},Dn=180/Math.PI,gs=Math.PI/180,qn=Math.atan2,Ac=1e8,Xl=/([A-Z])/g,Ep=/(left|right|width|margin|padding|x)/i,yp=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Mp=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wp=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Tp=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},qh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Yh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bp=function(t,e,i){return t.style[e]=i},Dp=function(t,e,i){return t.style.setProperty(e,i)},Ap=function(t,e,i){return t._gsap[e]=i},Cp=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Rp=function(t,e,i,s,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},Pp=function(t,e,i,s,r){var a=t._gsap;a[e]=i,a.renderTransform(r,a)},ce="transform",$e=ce+"Origin",Lp=function n(t,e){var i=this,s=this.target,r=s.style,a=s._gsap;if(t in $i&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=ki(s,o)}):this.tfm[t]=a.x?a[t]:ki(s,t),t===$e&&(this.tfm.zOrigin=a.zOrigin);else return Ai.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(ce)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push($e,e,"")),t=ce}(r||e)&&this.props.push(t,e,r[t])},jh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Fp=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Xl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=$l(),(!r||!r.isStart)&&!i[ce]&&(jh(i),s.zOrigin&&i[$e]&&(i[$e]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Kh=function(t,e){var i={target:t,props:[],revert:Fp,save:Lp};return t._gsap||qe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},Zh,Fo=function(t,e){var i=on.createElementNS?on.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):on.createElement(t);return i&&i.style?i:on.createElement(t)},pi=function n(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Xl,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&n(t,Ts(e)||e,1)||""},Cc="O,Moz,ms,Ms,Webkit".split(","),Ts=function(t,e,i){var s=e||Ln,r=s.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Cc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Cc[a]:"")+t},Io=function(){Sp()&&window.document&&(bc=window,on=bc.document,ms=on.documentElement,Ln=Fo("div")||{style:{}},Fo("div"),ce=Ts(ce),$e=ce+"Origin",Ln.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zh=!!Ts("perspective"),$l=qe.core.reverting,Wl=1)},Rc=function(t){var e=t.ownerSVGElement,i=Fo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),ms.appendChild(i);try{r=s.getBBox()}catch(a){}return i.removeChild(s),ms.removeChild(i),r},Pc=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Jh=function(t){var e,i;try{e=t.getBBox()}catch(s){e=Rc(t),i=1}return e&&(e.width||e.height)||i||(e=Rc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Pc(t,["x","cx","x1"])||0,y:+Pc(t,["y","cy","y1"])||0,width:0,height:0}:e},Qh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Jh(t))},kn=function(t,e){if(e){var i=t.style,s;e in $i&&e!==$e&&(e=ce),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(Xl,"-$1").toLowerCase())):i.removeAttribute(e)}},ln=function(t,e,i,s,r,a){var o=new We(t._pt,e,i,0,1,a?Yh:qh);return t._pt=o,o.b=s,o.e=r,t._props.push(i),o},Lc={deg:1,rad:1,turn:1},Ip={grid:1,flex:1},pn=function n(t,e,i,s){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=Ln.style,l=Ep.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=s==="px",p=s==="%",_,g,m,f;if(s===a||!r||Lc[s]||Lc[a])return r;if(a!=="px"&&!d&&(r=n(t,e,i,"px")),f=t.getCTM&&Qh(t),(p||a==="%")&&($i[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[u],fe(p?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(d?a:s),g=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===on||!g.appendChild)&&(g=on.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Je.time&&!m.uncache)return fe(r/m.width*h);if(p&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=h+s,_=t[u],v?t.style[e]=v:kn(t,e)}else(p||a==="%")&&!Ip[pi(g,"display")]&&(o.position=pi(t,"position")),g===t&&(o.position="static"),g.appendChild(Ln),_=Ln[u],g.removeChild(Ln),o.position="absolute";return l&&p&&(m=Un(g),m.time=Je.time,m.width=g[u]),fe(d?_*r/h:_&&r?h/_*r:0)},ki=function(t,e,i,s){var r;return Wl||Io(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),$i[e]&&e!=="transform"?(r=ar(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ha(pi(t,$e))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=ua[e]&&ua[e](t,e,i)||pi(t,e)||mh(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?pn(t,e,r,i)+i:r},Up=function(t,e,i,s){if(!i||i==="none"){var r=Ts(e,t,1),a=r&&pi(t,r,1);a&&a!==i?(e=r,i=a):e==="borderColor"&&(i=pi(t,"borderTopColor"))}var o=new We(this._pt,t.style,e,0,1,Wh),l=0,c=0,u,h,d,p,_,g,m,f,v,S,x,T;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=pi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[e],t.style[e]=s,s=pi(t,e)||s,g?t.style[e]=g:kn(t,e)),u=[i,s],Ih(u),i=u[0],s=u[1],d=i.match(hs)||[],T=s.match(hs)||[],T.length){for(;h=hs.exec(s);)m=h[0],v=s.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=ps(p,m)+x),f=parseFloat(m),S=m.substr((f+"").length),l=hs.lastIndex-S.length,S||(S=S||ei.units[e]||x,l===s.length&&(s+=S,o.e+=S)),x!==S&&(p=pn(t,e,g,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=e==="display"&&s==="none"?Yh:qh;return ch.test(s)&&(o.e=0),this._pt=o,o},Fc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Np=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=Fc[i]||i,e[1]=Fc[s]||s,e.join(" ")},Op=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,r=e.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],$i[o]&&(l=1,o=o==="transformOrigin"?$e:ce),kn(i,o);l&&(kn(i,ce),a&&(a.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ar(i,1),a.uncache=1,jh(s)))}},ua={clearProps:function(t,e,i,s,r){if(r.data!=="isFromStart"){var a=t._pt=new We(t._pt,e,i,0,0,Op);return a.u=s,a.pr=-10,a.tween=r,t._props.push(i),1}}},rr=[1,0,0,1,0,0],td={},ed=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ic=function(t){var e=pi(t,ce);return ed(e)?rr:e.substr(7).match(lh).map(fe)},ql=function(t,e){var i=t._gsap||Un(t),s=t.style,r=Ic(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?rr:r):(r===rr&&!t.offsetParent&&t!==ms&&!i.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ms.appendChild(t)),r=Ic(t),l?s.display=l:kn(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ms.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Uo=function(t,e,i,s,r,a){var o=t._gsap,l=r||ql(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],S=e.split(" "),x=parseFloat(S[0])||0,T=parseFloat(S[1])||0,b,D,A,E;i?l!==rr&&(D=p*m-_*g)&&(A=x*(m/D)+T*(-g/D)+(g*v-m*f)/D,E=x*(-_/D)+T*(p/D)-(p*v-_*f)/D,x=A,T=E):(b=Jh(t),x=b.x+(~S[0].indexOf("%")?x/100*b.width:x),T=b.y+(~(S[1]||S[0]).indexOf("%")?T/100*b.height:T)),s||s!==!1&&o.smooth?(f=x-c,v=T-u,o.xOffset=h+(f*p+v*g)-f,o.yOffset=d+(f*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!s,o.origin=e,o.originIsAbsolute=!!i,t.style[$e]="0px 0px",a&&(ln(a,o,"xOrigin",c,x),ln(a,o,"yOrigin",u,T),ln(a,o,"xOffset",h,o.xOffset),ln(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},ar=function(t,e){var i=t._gsap||new Bh(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=pi(t,$e)||"0",u,h,d,p,_,g,m,f,v,S,x,T,b,D,A,E,y,R,I,N,$,O,L,H,U,Z,P,nt,j,lt,G,J;return u=h=d=g=m=f=v=S=x=0,p=_=1,i.svg=!!(t.getCTM&&Qh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ce]!=="none"?l[ce]:"")),s.scale=s.rotate=s.translate="none"),D=ql(t,i.svg),i.svg&&(i.uncache?(U=t.getBBox(),c=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),Uo(t,H||c,!!H||i.originIsAbsolute,i.smooth!==!1,D)),T=i.xOrigin||0,b=i.yOrigin||0,D!==rr&&(R=D[0],I=D[1],N=D[2],$=D[3],u=O=D[4],h=L=D[5],D.length===6?(p=Math.sqrt(R*R+I*I),_=Math.sqrt($*$+N*N),g=R||I?qn(I,R)*Dn:0,v=N||$?qn(N,$)*Dn+g:0,v&&(_*=Math.abs(Math.cos(v*gs))),i.svg&&(u-=T-(T*R+b*N),h-=b-(T*I+b*$))):(J=D[6],lt=D[7],P=D[8],nt=D[9],j=D[10],G=D[11],u=D[12],h=D[13],d=D[14],A=qn(J,j),m=A*Dn,A&&(E=Math.cos(-A),y=Math.sin(-A),H=O*E+P*y,U=L*E+nt*y,Z=J*E+j*y,P=O*-y+P*E,nt=L*-y+nt*E,j=J*-y+j*E,G=lt*-y+G*E,O=H,L=U,J=Z),A=qn(-N,j),f=A*Dn,A&&(E=Math.cos(-A),y=Math.sin(-A),H=R*E-P*y,U=I*E-nt*y,Z=N*E-j*y,G=$*y+G*E,R=H,I=U,N=Z),A=qn(I,R),g=A*Dn,A&&(E=Math.cos(A),y=Math.sin(A),H=R*E+I*y,U=O*E+L*y,I=I*E-R*y,L=L*E-O*y,R=H,O=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=fe(Math.sqrt(R*R+I*I+N*N)),_=fe(Math.sqrt(L*L+J*J)),A=qn(O,L),v=Math.abs(A)>2e-4?A*Dn:0,x=G?1/(G<0?-G:G):0),i.svg&&(H=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ed(pi(t,ce)),H&&t.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=fe(p),i.scaleY=fe(_),i.rotation=fe(g)+o,i.rotationX=fe(m)+o,i.rotationY=fe(f)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(s[$e]=ha(c)),i.xOffset=i.yOffset=0,i.force3D=ei.force3D,i.renderTransform=i.svg?zp:Zh?id:Bp,i.uncache=0,i},ha=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fa=function(t,e,i){var s=Pe(e);return fe(parseFloat(e)+parseFloat(pn(t,"x",i+"px",s)))+s},Bp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,id(t,e)},xn="0deg",Os="0px",Sn=") ",id=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,S=i.zOrigin,x="",T=f==="auto"&&t&&t!==1||f===!0;if(S&&(h!==xn||u!==xn)){var b=parseFloat(u)*gs,D=Math.sin(b),A=Math.cos(b),E;b=parseFloat(h)*gs,E=Math.cos(b),a=Fa(v,a,D*E*-S),o=Fa(v,o,-Math.sin(b)*-S),l=Fa(v,l,A*E*-S+S)}m!==Os&&(x+="perspective("+m+Sn),(s||r)&&(x+="translate("+s+"%, "+r+"%) "),(T||a!==Os||o!==Os||l!==Os)&&(x+=l!==Os||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Sn),c!==xn&&(x+="rotate("+c+Sn),u!==xn&&(x+="rotateY("+u+Sn),h!==xn&&(x+="rotateX("+h+Sn),(d!==xn||p!==xn)&&(x+="skew("+d+", "+p+Sn),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Sn),v.style[ce]=x||"translate(0, 0)"},zp=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,S=parseFloat(a),x=parseFloat(o),T,b,D,A,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=gs,c*=gs,T=Math.cos(l)*h,b=Math.sin(l)*h,D=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(u*=gs,E=Math.tan(c-u),E=Math.sqrt(1+E*E),D*=E,A*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,b*=E)),T=fe(T),b=fe(b),D=fe(D),A=fe(A)):(T=h,A=d,b=D=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=pn(p,"x",a,"px"),x=pn(p,"y",o,"px")),(_||g||m||f)&&(S=fe(S+_-(_*T+g*D)+m),x=fe(x+g-(_*b+g*A)+f)),(s||r)&&(E=p.getBBox(),S=fe(S+s/100*E.width),x=fe(x+r/100*E.height)),E="matrix("+T+","+b+","+D+","+A+","+S+","+x+")",p.setAttribute("transform",E),v&&(p.style[ce]=E)},kp=function(t,e,i,s,r){var a=360,o=Te(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Dn:1),c=l-s,u=s+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Ac)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Ac)%a-~~(c/a)*a)),t._pt=d=new We(t._pt,e,i,s,c,Mp),d.e=u,d.u="deg",t._props.push(i),d},Uc=function(t,e){for(var i in e)t[i]=e[i];return t},Hp=function(t,e,i){var s=Uc({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,d,p,_;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ce]=e,o=ar(i,1),kn(i,ce),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ce],a[ce]=e,o=ar(i,1),a[ce]=c);for(l in $i)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=Pe(c),_=Pe(u),h=p!==_?pn(i,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new We(t._pt,o,l,h,d-h,Lo),t._pt.u=_||0,t._props.push(l));Uc(o,s)};Ge("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",s="Bottom",r="Left",a=(t<3?[e,i,s,r]:[e+r,e+i,s+i,s+r]).map(function(o){return t<2?n+o:"border"+o+n});ua[t>1?"border"+n:n]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(_){return ki(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,h)}});var nd={name:"css",register:Io,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,r){var a=this._props,o=t.style,l=i.vars.startAt,c,u,h,d,p,_,g,m,f,v,S,x,T,b,D,A;Wl||Io(),this.styles=this.styles||Kh(t),A=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Ze[g]&&zh(g,e,i,s,t,r)))){if(p=typeof u,_=ua[g],p==="function"&&(u=u.call(i,s,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ir(u)),_)_(this,t,g,u,i)&&(D=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",un.lastIndex=0,un.test(c)||(m=Pe(c),f=Pe(u)),f?m!==f&&(c=pn(t,g,c,f)+f):m&&(u+=m),this.add(o,"setProperty",c,u,s,r,0,0,g),a.push(g),A.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,s,t,r):l[g],Te(c)&&~c.indexOf("random(")&&(c=ir(c)),Pe(c+"")||c==="auto"||(c+=ei.units[g]||Pe(ki(t,g))||""),(c+"").charAt(1)==="="&&(c=ki(t,g))):c=ki(t,g),d=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in Ai&&(g==="autoAlpha"&&(d===1&&ki(t,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,o.visibility),ln(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in $i,S){if(this.styles.save(g),p==="string"&&u.substring(0,6)==="var(--"&&(u=pi(t,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(T=t._gsap,T.renderTransform&&!e.parseTransform||ar(t,e.parseTransform),b=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new We(this._pt,o,ce,0,1,T.renderTransform,T,0,-1),x.dep=1),g==="scale")this._pt=new We(this._pt,T,"scaleY",T.scaleY,(v?ps(T.scaleY,v+h):h)-T.scaleY||0,Lo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push($e,0,o[$e]),u=Np(u),T.svg?Uo(t,u,0,b,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==T.zOrigin&&ln(this,T,"zOrigin",T.zOrigin,f),ln(this,o,g,ha(c),ha(u)));continue}else if(g==="svgOrigin"){Uo(t,u,1,b,0,this);continue}else if(g in td){kp(this,T,g,d,v?ps(d,v+u):u);continue}else if(g==="smoothOrigin"){ln(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){Hp(this,u,t);continue}}else g in o||(g=Ts(g)||g);if(S||(h||h===0)&&(d||d===0)&&!yp.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),f=Pe(u)||(g in ei.units?ei.units[g]:m),m!==f&&(d=pn(t,g,c,f)),this._pt=new We(this._pt,S?T:o,g,d,(v?ps(d,v+h):h)-d,!S&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?Tp:Lo),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=wp);else if(g in o)Up.call(this,t,g,c,v?v+u:u);else if(g in t)this.add(t,g,c||t[g],v?v+u:u,s,r);else if(g!=="parseTransform"){Il(g,u);continue}S||(g in o?A.push(g,0,o[g]):typeof t[g]=="function"?A.push(g,2,t[g]()):A.push(g,1,c||t[g])),a.push(g)}}D&&$h(this)},render:function(t,e){if(e.tween._time||!$l())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ki,aliases:Ai,getSetter:function(t,e,i){var s=Ai[e];return s&&s.indexOf(",")<0&&(e=s),e in $i&&e!==$e&&(t._gsap.x||ki(t,"x"))?i&&Dc===i?e==="scale"?Cp:Ap:(Dc=i||{})&&(e==="scale"?Rp:Pp):t.style&&!Pl(t.style[e])?bp:~e.indexOf("-")?Dp:Vl(t,e)},core:{_removeProperty:kn,_getMatrix:ql}};qe.utils.checkPrefix=Ts;qe.core.getStyleSaver=Kh;(function(n,t,e,i){var s=Ge(n+","+t+","+e,function(r){$i[r]=1});Ge(t,function(r){ei.units[r]="deg",td[r]=1}),Ai[s[13]]=n+","+t,Ge(i,function(r){var a=r.split(":");Ai[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ei.units[n]="px"});qe.registerPlugin(nd);var At=qe.registerPlugin(nd)||qe;At.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vp=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Gp=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Wp=Math.PI/180,Er=Math.sin,yr=Math.cos,Zs=Math.abs,Bs=Math.sqrt,$p=function(t){return typeof t=="number"},Nc=1e5,Ki=function(t){return Math.round(t*Nc)/Nc||0};function Xp(n,t,e,i,s,r,a){for(var o=n.length,l,c,u,h,d;--o>-1;)for(l=n[o],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*t+d*i+r,l[u+1]=h*e+d*s+a;return n._dirty=1,n}function qp(n,t,e,i,s,r,a,o,l){if(!(n===o&&t===l)){e=Zs(e),i=Zs(i);var c=s%360*Wp,u=yr(c),h=Er(c),d=Math.PI,p=d*2,_=(n-o)/2,g=(t-l)/2,m=u*_+h*g,f=-h*_+u*g,v=m*m,S=f*f,x=v/(e*e)+S/(i*i);x>1&&(e=Bs(x)*e,i=Bs(x)*i);var T=e*e,b=i*i,D=(T*b-T*S-b*v)/(T*S+b*v);D<0&&(D=0);var A=(r===a?-1:1)*Bs(D),E=A*(e*f/i),y=A*-(i*m/e),R=(n+o)/2,I=(t+l)/2,N=R+(u*E-h*y),$=I+(h*E+u*y),O=(m-E)/e,L=(f-y)/i,H=(-m-E)/e,U=(-f-y)/i,Z=O*O+L*L,P=(L<0?-1:1)*Math.acos(O/Bs(Z)),nt=(O*U-L*H<0?-1:1)*Math.acos((O*H+L*U)/Bs(Z*(H*H+U*U)));isNaN(nt)&&(nt=d),!a&&nt>0?nt-=p:a&&nt<0&&(nt+=p),P%=p,nt%=p;var j=Math.ceil(Zs(nt)/(p/4)),lt=[],G=nt/j,J=4/3*Er(G/2)/(1+yr(G/2)),st=u*e,rt=h*e,yt=h*-i,Nt=u*i,mt;for(mt=0;mt<j;mt++)s=P+mt*G,m=yr(s),f=Er(s),O=yr(s+=G),L=Er(s),lt.push(m-J*f,f+J*m,O+J*L,L-J*O,O,L);for(mt=0;mt<lt.length;mt+=2)m=lt[mt],f=lt[mt+1],lt[mt]=m*st+f*yt+N,lt[mt+1]=m*rt+f*Nt+$;return lt[mt-2]=o,lt[mt-1]=l,lt}}function Yp(n){var t=(n+"").replace(Gp,function(E){var y=+E;return y<1e-4&&y>-1e-4?0:y}).match(Vp)||[],e=[],i=0,s=0,r=2/3,a=t.length,o=0,l="ERROR: malformed path: "+n,c,u,h,d,p,_,g,m,f,v,S,x,T,b,D,A=function(y,R,I,N){v=(I-y)/3,S=(N-R)/3,g.push(y+v,R+S,I-v,N-S,I,N)};if(!n||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<a;c++)if(T=p,isNaN(t[c])?(p=t[c].toUpperCase(),_=p!==t[c]):c--,h=+t[c+1],d=+t[c+2],_&&(h+=i,d+=s),c||(m=h,f=d),p==="M")g&&(g.length<8?e.length-=1:o+=g.length),i=m=h,s=f=d,g=[h,d],e.push(g),c+=2,p="L";else if(p==="C")g||(g=[0,0]),_||(i=s=0),g.push(h,d,i+t[c+3]*1,s+t[c+4]*1,i+=t[c+5]*1,s+=t[c+6]*1),c+=6;else if(p==="S")v=i,S=s,(T==="C"||T==="S")&&(v+=i-g[g.length-4],S+=s-g[g.length-3]),_||(i=s=0),g.push(v,S,h,d,i+=t[c+3]*1,s+=t[c+4]*1),c+=4;else if(p==="Q")v=i+(h-i)*r,S=s+(d-s)*r,_||(i=s=0),i+=t[c+3]*1,s+=t[c+4]*1,g.push(v,S,i+(h-i)*r,s+(d-s)*r,i,s),c+=4;else if(p==="T")v=i-g[g.length-4],S=s-g[g.length-3],g.push(i+v,s+S,h+(i+v*1.5-h)*r,d+(s+S*1.5-d)*r,i=h,s=d),c+=2;else if(p==="H")A(i,s,i=h,s),c+=1;else if(p==="V")A(i,s,i,s=h+(_?s-i:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(h=m,d=f,g.closed=!0),(p==="L"||Zs(i-h)>.5||Zs(s-d)>.5)&&(A(i,s,h,d),p==="L"&&(c+=2)),i=h,s=d;else if(p==="A"){if(b=t[c+4],D=t[c+5],v=t[c+6],S=t[c+7],u=7,b.length>1&&(b.length<3?(S=v,v=D,u--):(S=D,v=b.substr(2),u-=2),D=b.charAt(1),b=b.charAt(0)),x=qp(i,s,+t[c+1],+t[c+2],+t[c+3],+b,+D,(_?i:0)+v*1,(_?s:0)+S*1),c+=u,x)for(u=0;u<x.length;u++)g.push(x[u]);i=g[g.length-2],s=g[g.length-1]}else console.log(l);return c=g.length,c<6?(e.pop(),c=0):g[0]===g[c-2]&&g[1]===g[c-1]&&(g.closed=!0),e.totalPoints=o+c,e}function jp(n){$p(n[0])&&(n=[n]);var t="",e=n.length,i,s,r,a;for(s=0;s<e;s++){for(a=n[s],t+="M"+Ki(a[0])+","+Ki(a[1])+" C",i=a.length,r=2;r<i;r++)t+=Ki(a[r++])+","+Ki(a[r++])+" "+Ki(a[r++])+","+Ki(a[r++])+" "+Ki(a[r++])+","+Ki(a[r])+" ";a.closed&&(t+="z")}return t}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ke,sd,rd=function(){return ke||typeof window!="undefined"&&(ke=window.gsap)&&ke.registerPlugin&&ke},Oc=function(){ke=rd(),ke?(ke.registerEase("_CE",dr.create),sd=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Kp=1e20,Mr=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},Zp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Jp=/[cLlsSaAhHvVtTqQ]/g,Qp=function(t){var e=t.length,i=Kp,s;for(s=1;s<e;s+=6)+t[s]<i&&(i=+t[s]);return i},tm=function(t,e,i){!i&&i!==0&&(i=Math.max(+t[t.length-1],+t[1]));var s=+t[0]*-1,r=-i,a=t.length,o=1/(+t[a-2]+s),l=-e||(Math.abs(+t[a-1]-+t[1])<.01*(+t[a-2]-+t[0])?Qp(t)+r:+t[a-1]+r),c;for(l?l=1/l:l=-o,c=0;c<a;c+=2)t[c]=(+t[c]+s)*o,t[c+1]=(+t[c+1]+r)*l},em=function n(t,e,i,s,r,a,o,l,c,u,h){var d=(t+i)/2,p=(e+s)/2,_=(i+r)/2,g=(s+a)/2,m=(r+o)/2,f=(a+l)/2,v=(d+_)/2,S=(p+g)/2,x=(_+m)/2,T=(g+f)/2,b=(v+x)/2,D=(S+T)/2,A=o-t,E=l-e,y=Math.abs((i-o)*E-(s-l)*A),R=Math.abs((r-o)*E-(a-l)*A),I;return u||(u=[{x:t,y:e},{x:o,y:l}],h=1),u.splice(h||u.length-1,0,{x:b,y:D}),(y+R)*(y+R)>c*(A*A+E*E)&&(I=u.length,n(t,e,d,p,v,S,b,D,c,u,h),n(b,D,x,T,m,f,o,l,c,u,h+1+(u.length-I))),u},dr=function(){function n(e,i,s){sd||Oc(),this.id=e,this.setData(i,s)}var t=n.prototype;return t.setData=function(i,s){s=s||{},i=i||"0,0,1,1";var r=i.match(Zp),a=1,o=[],l=[],c=s.precision||1,u=c<=1,h,d,p,_,g,m,f,v,S;if(this.data=i,(Jp.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(r=Yp(i)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&tm(r,s.height,s.originY),this.segment=r,_=2;_<h;_+=6)d={x:+r[_-2],y:+r[_-1]},p={x:+r[_+4],y:+r[_+5]},o.push(d,p),em(d.x,d.y,+r[_],+r[_+1],+r[_+2],+r[_+3],p.x,p.y,1/(c*2e5),o,o.length-1);for(h=o.length,_=0;_<h;_++)f=o[_],v=o[_-1]||f,(f.x>v.x||v.y!==f.y&&v.x===f.x||f===v)&&f.x<=1?(v.cx=f.x-v.x,v.cy=f.y-v.y,v.n=f,v.nx=f.x,u&&_>1&&Math.abs(v.cy/v.cx-o[_-2].cy/o[_-2].cx)>2&&(u=0),v.cx<a&&(v.cx?a=v.cx:(v.cx=.001,_===h-1&&(v.x-=.001,a=Math.min(a,.001),u=0)))):(o.splice(_--,1),h--);if(h=1/a+1|0,g=1/h,m=0,f=o[0],u){for(_=0;_<h;_++)S=_*g,f.nx<S&&(f=o[++m]),d=f.y+(S-f.x)/f.cx*f.cy,l[_]={x:S,cx:g,y:d,cy:0,nx:9},_&&(l[_-1].cy=d-l[_-1].y);m=o[o.length-1],l[h-1].cy=m.y-d,l[h-1].cx=m.x-l[l.length-1].x}else{for(_=0;_<h;_++)f.nx<_*g&&(f=o[++m]),l[_]=f;m<o.length-1&&(l[_-1]=o[o.length-2])}return this.ease=function(x){var T=l[x*h|0]||l[h-1];return T.nx<x&&(T=T.n),T.y+(x-T.x)/T.cx*T.cy},this.ease.custom=this,this.id&&ke&&ke.registerEase(this.id,this.ease),this},t.getSVGData=function(i){return n.getSVGData(this,i)},n.create=function(i,s,r){return new n(i,s,r).ease},n.register=function(i){ke=i,Oc()},n.get=function(i){return ke.parseEase(i)},n.getSVGData=function(i,s){s=s||{};var r=s.width||100,a=s.height||100,o=s.x||0,l=(s.y||0)+a,c=ke.utils.toArray(s.path)[0],u,h,d,p,_,g,m,f,v,S;if(s.invert&&(a=-a,l=0),typeof i=="string"&&(i=ke.parseEase(i)),i.custom&&(i=i.custom),i instanceof n)u=jp(Xp([i.segment],r,0,0,-a,o,l));else{for(u=[o,l],m=Math.max(5,(s.precision||1)*200),p=1/m,m+=2,f=5/m,v=Mr(o+p*r),S=Mr(l+i(p)*-a),h=(S-l)/(v-o),d=2;d<m;d++)_=Mr(o+d*p*r),g=Mr(l+i(d*p)*-a),(Math.abs((g-S)/(_-v)-h)>f||d===m-1)&&(u.push(v,S),h=(g-S)/(_-v)),v=_,S=g;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},n}();dr.version="3.13.0";dr.headless=!0;rd()&&ke.registerPlugin(dr);At.registerPlugin(dr);const ad={wait:"-wait"};function Bc(n){return n.toString().padStart(2,"0")}function od(){document.documentElement.classList.add(ad.wait)}function zc(){document.documentElement.classList.remove(ad.wait)}class im{constructor(t){this.asynchronous=t}init(){od(),kt&&kt.init().then(()=>{this.startAsynchronous()})}startAsynchronous(){window.history.scrollRestoration="manual",this.asynchronous.init()}}const Ia=new WeakMap;function Ua(n,t,e,i){var o,l;if(!n&&!Ia.has(t))return!1;const s=(o=Ia.get(t))!=null?o:new WeakMap;Ia.set(t,s);const r=(l=s.get(e))!=null?l:new Set;s.set(e,r);const a=r.has(i);return n?r.add(i):r.delete(i),a&&n}function nm(n,t){let e=n.target;if(e instanceof Text&&(e=e.parentElement),e instanceof Element&&n.currentTarget instanceof Element){const i=e.closest(t);if(i&&n.currentTarget.contains(i))return i}}function sm(n,t,e,i={}){const{signal:s,base:r=document}=i;if(s!=null&&s.aborted)return;const{once:a,...o}=i,l=r instanceof Document?r.documentElement:r,c=!!(typeof i=="object"?i.capture:i),u=p=>{const _=nm(p,String(n));if(_){const g=Object.assign(p,{delegateTarget:_});e.call(l,g),a&&(l.removeEventListener(t,u,o),Ua(!1,l,e,h))}},h=JSON.stringify({selector:n,type:t,capture:c});Ua(!0,l,e,h)||l.addEventListener(t,u,o),s==null||s.addEventListener("abort",()=>{Ua(!1,l,e,h)})}function rm(n){for(var t=[],e=0;e<n.length;){var i=n[e];if(i==="*"||i==="+"||i==="?"){t.push({type:"MODIFIER",index:e,value:n[e++]});continue}if(i==="\\"){t.push({type:"ESCAPED_CHAR",index:e++,value:n[e++]});continue}if(i==="{"){t.push({type:"OPEN",index:e,value:n[e++]});continue}if(i==="}"){t.push({type:"CLOSE",index:e,value:n[e++]});continue}if(i===":"){for(var s="",r=e+1;r<n.length;){var a=n.charCodeAt(r);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){s+=n[r++];continue}break}if(!s)throw new TypeError("Missing parameter name at ".concat(e));t.push({type:"NAME",index:e,value:s}),e=r;continue}if(i==="("){var o=1,l="",r=e+1;if(n[r]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(r));for(;r<n.length;){if(n[r]==="\\"){l+=n[r++]+n[r++];continue}if(n[r]===")"){if(o--,o===0){r++;break}}else if(n[r]==="("&&(o++,n[r+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(r));l+=n[r++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(e));if(!l)throw new TypeError("Missing pattern at ".concat(e));t.push({type:"PATTERN",index:e,value:l}),e=r;continue}t.push({type:"CHAR",index:e,value:n[e++]})}return t.push({type:"END",index:e,value:""}),t}function am(n,t){t===void 0&&(t={});for(var e=rm(n),i=t.prefixes,s=i===void 0?"./":i,r=t.delimiter,a=r===void 0?"/#?":r,o=[],l=0,c=0,u="",h=function(E){if(c<e.length&&e[c].type===E)return e[c++].value},d=function(E){var y=h(E);if(y!==void 0)return y;var R=e[c],I=R.type,N=R.index;throw new TypeError("Unexpected ".concat(I," at ").concat(N,", expected ").concat(E))},p=function(){for(var E="",y;y=h("CHAR")||h("ESCAPED_CHAR");)E+=y;return E},_=function(E){for(var y=0,R=a;y<R.length;y++){var I=R[y];if(E.indexOf(I)>-1)return!0}return!1},g=function(E){var y=o[o.length-1],R=E||(y&&typeof y=="string"?y:"");if(y&&!R)throw new TypeError('Must have text between two parameters, missing text after "'.concat(y.name,'"'));return!R||_(R)?"[^".concat(sn(a),"]+?"):"(?:(?!".concat(sn(R),")[^").concat(sn(a),"])+?")};c<e.length;){var m=h("CHAR"),f=h("NAME"),v=h("PATTERN");if(f||v){var S=m||"";s.indexOf(S)===-1&&(u+=S,S=""),u&&(o.push(u),u=""),o.push({name:f||l++,prefix:S,suffix:"",pattern:v||g(S),modifier:h("MODIFIER")||""});continue}var x=m||h("ESCAPED_CHAR");if(x){u+=x;continue}u&&(o.push(u),u="");var T=h("OPEN");if(T){var S=p(),b=h("NAME")||"",D=h("PATTERN")||"",A=p();d("CLOSE"),o.push({name:b||(D?l++:""),pattern:b&&!D?g(S):D,prefix:S,suffix:A,modifier:h("MODIFIER")||""});continue}d("END")}return o}function om(n,t){var e=[],i=cd(n,e,t);return lm(i,e,t)}function lm(n,t,e){e===void 0&&(e={});var i=e.decode,s=i===void 0?function(r){return r}:i;return function(r){var a=n.exec(r);if(!a)return!1;for(var o=a[0],l=a.index,c=Object.create(null),u=function(d){if(a[d]===void 0)return"continue";var p=t[d-1];p.modifier==="*"||p.modifier==="+"?c[p.name]=a[d].split(p.prefix+p.suffix).map(function(_){return s(_,p)}):c[p.name]=s(a[d],p)},h=1;h<a.length;h++)u(h);return{path:o,index:l,params:c}}}function sn(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ld(n){return n&&n.sensitive?"":"i"}function cm(n,t){if(!t)return n;for(var e=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,s=e.exec(n.source);s;)t.push({name:s[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),s=e.exec(n.source);return n}function um(n,t,e){var i=n.map(function(s){return cd(s,t,e).source});return new RegExp("(?:".concat(i.join("|"),")"),ld(e))}function hm(n,t,e){return dm(am(n,e),t,e)}function dm(n,t,e){e===void 0&&(e={});for(var i=e.strict,s=i===void 0?!1:i,r=e.start,a=r===void 0?!0:r,o=e.end,l=o===void 0?!0:o,c=e.encode,u=c===void 0?function(y){return y}:c,h=e.delimiter,d=h===void 0?"/#?":h,p=e.endsWith,_=p===void 0?"":p,g="[".concat(sn(_),"]|$"),m="[".concat(sn(d),"]"),f=a?"^":"",v=0,S=n;v<S.length;v++){var x=S[v];if(typeof x=="string")f+=sn(u(x));else{var T=sn(u(x.prefix)),b=sn(u(x.suffix));if(x.pattern)if(t&&t.push(x),T||b)if(x.modifier==="+"||x.modifier==="*"){var D=x.modifier==="*"?"?":"";f+="(?:".concat(T,"((?:").concat(x.pattern,")(?:").concat(b).concat(T,"(?:").concat(x.pattern,"))*)").concat(b,")").concat(D)}else f+="(?:".concat(T,"(").concat(x.pattern,")").concat(b,")").concat(x.modifier);else{if(x.modifier==="+"||x.modifier==="*")throw new TypeError('Can not repeat "'.concat(x.name,'" without a prefix and suffix'));f+="(".concat(x.pattern,")").concat(x.modifier)}else f+="(?:".concat(T).concat(b,")").concat(x.modifier)}}if(l)s||(f+="".concat(m,"?")),f+=e.endsWith?"(?=".concat(g,")"):"$";else{var A=n[n.length-1],E=typeof A=="string"?m.indexOf(A[A.length-1])>-1:A===void 0;s||(f+="(?:".concat(m,"(?=").concat(g,"))?")),E||(f+="(?=".concat(m,"|").concat(g,")"))}return new RegExp(f,ld(e))}function cd(n,t,e){return n instanceof RegExp?cm(n,t):Array.isArray(n)?um(n,t,e):hm(n,t,e)}function Se(){return Se=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Se.apply(null,arguments)}const ud=(n,t)=>String(n).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||t||"",or=({hash:n}={})=>window.location.pathname+window.location.search+(n?window.location.hash:""),fm=(n,t={})=>{const e=Se({url:n=n||or({hash:!0}),random:Math.random(),source:"swup"},t);window.history.pushState(e,"",n)},Js=(n=null,t={})=>{n=n||or({hash:!0});const e=Se({},window.history.state||{},{url:n,random:Math.random(),source:"swup"},t);window.history.replaceState(e,"",n)},pm=(n,t,e,i)=>{const s=new AbortController;return i=Se({},i,{signal:s.signal}),sm(n,t,e,i),{destroy:()=>s.abort()}};class He extends URL{constructor(t,e=document.baseURI){super(t.toString(),e),Object.setPrototypeOf(this,He.prototype)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href")||"";return new He(e)}static fromUrl(t){return new He(t)}}const kc=(n,t)=>{Array.isArray(n)&&!n.length&&(n="");try{return om(n,t)}catch(e){throw new Error(`[swup] Error parsing path "${String(n)}":
${String(e)}`)}};class wr extends Error{constructor(t,e){super(t),this.url=void 0,this.status=void 0,this.aborted=void 0,this.timedOut=void 0,this.name="FetchError",this.url=e.url,this.status=e.status,this.aborted=e.aborted||!1,this.timedOut=e.timedOut||!1}}async function mm(n,t={}){var e;n=He.fromUrl(n).url;const{visit:i=this.visit}=t,s=Se({},this.options.requestHeaders,t.headers),r=(e=t.timeout)!=null?e:this.options.timeout,a=new AbortController,{signal:o}=a;t=Se({},t,{headers:s,signal:o});let l,c=!1,u=null;r&&r>0&&(u=setTimeout(()=>{c=!0,a.abort("timeout")},r));try{l=await this.hooks.call("fetch:request",i,{url:n,options:t},(m,{url:f,options:v})=>fetch(f,v)),u&&clearTimeout(u)}catch(m){throw c?(this.hooks.call("fetch:timeout",i,{url:n}),new wr(`Request timed out: ${n}`,{url:n,timedOut:c})):(m==null?void 0:m.name)==="AbortError"||o.aborted?new wr(`Request aborted: ${n}`,{url:n,aborted:!0}):m}const{status:h,url:d}=l,p=await l.text();if(h===500)throw this.hooks.call("fetch:error",i,{status:h,response:l,url:d}),new wr(`Server error: ${d}`,{status:h,url:d});if(!p)throw new wr(`Empty response: ${d}`,{status:h,url:d});const{url:_}=He.fromUrl(d),g={url:_,html:p};return!i.cache.write||t.method&&t.method!=="GET"||n!==_||this.cache.set(g.url,g),g}class gm{constructor(t){this.swup=void 0,this.pages=new Map,this.swup=t}get size(){return this.pages.size}get all(){const t=new Map;return this.pages.forEach((e,i)=>{t.set(i,Se({},e))}),t}has(t){return this.pages.has(this.resolve(t))}get(t){const e=this.pages.get(this.resolve(t));return e&&Se({},e)}set(t,e){e=Se({},e,{url:t=this.resolve(t)}),this.pages.set(t,e),this.swup.hooks.callSync("cache:set",void 0,{page:e})}update(t,e){t=this.resolve(t);const i=Se({},this.get(t),e,{url:t});this.pages.set(t,i)}delete(t){this.pages.delete(this.resolve(t))}clear(){this.pages.clear(),this.swup.hooks.callSync("cache:clear",void 0,void 0)}prune(t){this.pages.forEach((e,i)=>{t(i,e)&&this.delete(i)})}resolve(t){const{url:e}=He.fromUrl(t);return this.swup.resolveUrl(e)}}const No=(n,t=document)=>t.querySelector(n),Yl=(n,t=document)=>Array.from(t.querySelectorAll(n)),hd=()=>new Promise(n=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{n()})})});function jl(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function _m(n,t=[]){return new Promise((e,i)=>{const s=n(...t);jl(s)?s.then(e,i):e(s)})}function Hc(n,t){const e=n==null?void 0:n.closest(`[${t}]`);return e!=null&&e.hasAttribute(t)?(e==null?void 0:e.getAttribute(t))||!0:void 0}class vm{constructor(t){this.swup=void 0,this.swupClasses=["to-","is-changing","is-rendering","is-popstate","is-animating","is-leaving"],this.swup=t}get selectors(){const{scope:t}=this.swup.visit.animation;return t==="containers"?this.swup.visit.containers:t==="html"?["html"]:Array.isArray(t)?t:[]}get selector(){return this.selectors.join(",")}get targets(){return this.selector.trim()?Yl(this.selector):[]}add(...t){this.targets.forEach(e=>e.classList.add(...t))}remove(...t){this.targets.forEach(e=>e.classList.remove(...t))}clear(){this.targets.forEach(t=>{const e=t.className.split(" ").filter(i=>this.isSwupClass(i));t.classList.remove(...e)})}isSwupClass(t){return this.swupClasses.some(e=>t.startsWith(e))}}class dd{constructor(t,e){this.id=void 0,this.state=void 0,this.from=void 0,this.to=void 0,this.containers=void 0,this.animation=void 0,this.trigger=void 0,this.cache=void 0,this.history=void 0,this.scroll=void 0,this.meta=void 0;const{to:i,from:s,hash:r,el:a,event:o}=e;this.id=Math.random(),this.state=1,this.from={url:s!=null?s:t.location.url,hash:t.location.hash},this.to={url:i,hash:r},this.containers=t.options.containers,this.animation={animate:!0,wait:!1,name:void 0,native:t.options.native,scope:t.options.animationScope,selector:t.options.animationSelector},this.trigger={el:a,event:o},this.cache={read:t.options.cache,write:t.options.cache},this.history={action:"push",popstate:!1,direction:void 0},this.scroll={reset:!0,target:void 0},this.meta={}}advance(t){this.state<t&&(this.state=t)}abort(){this.state=8}get done(){return this.state>=7}}function xm(n){return new dd(this,n)}class Sm{constructor(t){this.swup=void 0,this.registry=new Map,this.hooks=["animation:out:start","animation:out:await","animation:out:end","animation:in:start","animation:in:await","animation:in:end","animation:skip","cache:clear","cache:set","content:replace","content:scroll","enable","disable","fetch:request","fetch:error","fetch:timeout","history:popstate","link:click","link:self","link:anchor","link:newtab","page:load","page:view","scroll:top","scroll:anchor","visit:start","visit:transition","visit:abort","visit:end"],this.swup=t,this.init()}init(){this.hooks.forEach(t=>this.create(t))}create(t){this.registry.has(t)||this.registry.set(t,new Map)}exists(t){return this.registry.has(t)}get(t){const e=this.registry.get(t);if(e)return e;console.error(`Unknown hook '${t}'`)}clear(){this.registry.forEach(t=>t.clear())}on(t,e,i={}){const s=this.get(t);if(!s)return console.warn(`Hook '${t}' not found.`),()=>{};const r=Se({},i,{id:s.size+1,hook:t,handler:e});return s.set(e,r),()=>this.off(t,e)}before(t,e,i={}){return this.on(t,e,Se({},i,{before:!0}))}replace(t,e,i={}){return this.on(t,e,Se({},i,{replace:!0}))}once(t,e,i={}){return this.on(t,e,Se({},i,{once:!0}))}off(t,e){const i=this.get(t);i&&e?i.delete(e)||console.warn(`Handler for hook '${t}' not found.`):i&&i.clear()}async call(t,e,i,s){const[r,a,o]=this.parseCallArgs(t,e,i,s),{before:l,handler:c,after:u}=this.getHandlers(t,o);await this.run(l,r,a);const[h]=await this.run(c,r,a,!0);return await this.run(u,r,a),this.dispatchDomEvent(t,r,a),h}callSync(t,e,i,s){const[r,a,o]=this.parseCallArgs(t,e,i,s),{before:l,handler:c,after:u}=this.getHandlers(t,o);this.runSync(l,r,a);const[h]=this.runSync(c,r,a,!0);return this.runSync(u,r,a),this.dispatchDomEvent(t,r,a),h}parseCallArgs(t,e,i,s){return e instanceof dd||typeof e!="object"&&typeof i!="function"?[e,i,s]:[void 0,e,i]}async run(t,e=this.swup.visit,i,s=!1){const r=[];for(const{hook:a,handler:o,defaultHandler:l,once:c}of t)if(e==null||!e.done){c&&this.off(a,o);try{const u=await _m(o,[e,i,l]);r.push(u)}catch(u){if(s)throw u;console.error(`Error in hook '${a}':`,u)}}return r}runSync(t,e=this.swup.visit,i,s=!1){const r=[];for(const{hook:a,handler:o,defaultHandler:l,once:c}of t)if(e==null||!e.done){c&&this.off(a,o);try{const u=o(e,i,l);r.push(u),jl(u)&&console.warn(`Swup will not await Promises in handler for synchronous hook '${a}'.`)}catch(u){if(s)throw u;console.error(`Error in hook '${a}':`,u)}}return r}getHandlers(t,e){const i=this.get(t);if(!i)return{found:!1,before:[],handler:[],after:[],replaced:!1};const s=Array.from(i.values()),r=this.sortRegistrations,a=s.filter(({before:h,replace:d})=>h&&!d).sort(r),o=s.filter(({replace:h})=>h).filter(h=>!0).sort(r),l=s.filter(({before:h,replace:d})=>!h&&!d).sort(r),c=o.length>0;let u=[];if(e&&(u=[{id:0,hook:t,handler:e}],c)){const h=o.length-1,{handler:d,once:p}=o[h],_=g=>{const m=o[g-1];return m?(f,v)=>m.handler(f,v,_(g-1)):e};u=[{id:0,hook:t,once:p,handler:d,defaultHandler:_(h)}]}return{found:!0,before:a,handler:u,after:l,replaced:c}}sortRegistrations(t,e){var i,s;return((i=t.priority)!=null?i:0)-((s=e.priority)!=null?s:0)||t.id-e.id||0}dispatchDomEvent(t,e,i){if(e!=null&&e.done)return;const s={hook:t,args:i,visit:e||this.swup.visit};document.dispatchEvent(new CustomEvent("swup:any",{detail:s,bubbles:!0})),document.dispatchEvent(new CustomEvent(`swup:${t}`,{detail:s,bubbles:!0}))}parseName(t){const[e,...i]=t.split(".");return[e,i.reduce((s,r)=>Se({},s,{[r]:!0}),{})]}}const Em=n=>{if(n&&n.charAt(0)==="#"&&(n=n.substring(1)),!n)return null;const t=decodeURIComponent(n);let e=document.getElementById(n)||document.getElementById(t)||No(`a[name='${CSS.escape(n)}']`)||No(`a[name='${CSS.escape(t)}']`);return e||n!=="top"||(e=document.body),e},Tr="transition",Na="animation";async function ym({selector:n,elements:t}){if(n===!1&&!t)return;let e=[];if(t)e=Array.from(t);else if(n&&(e=Yl(n,document.body),!e.length))return void console.warn(`[swup] No elements found matching animationSelector \`${n}\``);const i=e.map(s=>function(r){const{type:a,timeout:o,propCount:l}=function(c){const u=window.getComputedStyle(c),h=br(u,`${Tr}Delay`),d=br(u,`${Tr}Duration`),p=Vc(h,d),_=br(u,`${Na}Delay`),g=br(u,`${Na}Duration`),m=Vc(_,g),f=Math.max(p,m),v=f>0?p>m?Tr:Na:null;return{type:v,timeout:f,propCount:v?v===Tr?d.length:g.length:0}}(r);return!(!a||!o)&&new Promise(c=>{const u=`${a}end`,h=performance.now();let d=0;const p=()=>{r.removeEventListener(u,_),c()},_=g=>{g.target===r&&((performance.now()-h)/1e3<g.elapsedTime||++d>=l&&p())};setTimeout(()=>{d<l&&p()},o+1),r.addEventListener(u,_)})}(s));i.filter(Boolean).length>0?await Promise.all(i):n&&console.warn(`[swup] No CSS animation duration defined on elements matching \`${n}\``)}function br(n,t){return(n[t]||"").split(", ")}function Vc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Gc(e)+Gc(n[i])))}function Gc(n){return 1e3*parseFloat(n)}function Mm(n,t={},e={}){if(typeof n!="string")throw new Error("swup.navigate() requires a URL parameter");if(this.shouldIgnoreVisit(n,{el:e.el,event:e.event}))return void window.location.assign(n);const{url:i,hash:s}=He.fromUrl(n),r=this.createVisit(Se({},e,{to:i,hash:s}));this.performNavigation(r,t)}async function wm(n,t={}){if(this.navigating){if(this.visit.state>=6)return n.state=2,void(this.onVisitEnd=()=>this.performNavigation(n,t));await this.hooks.call("visit:abort",this.visit,void 0),delete this.visit.to.document,this.visit.state=8}this.navigating=!0,this.visit=n;const{el:e}=n.trigger;t.referrer=t.referrer||this.location.url,t.animate===!1&&(n.animation.animate=!1),n.animation.animate||this.classes.clear();const i=t.history||Hc(e,"data-swup-history");typeof i=="string"&&["push","replace"].includes(i)&&(n.history.action=i);const s=t.animation||Hc(e,"data-swup-animation");var r,a;typeof s=="string"&&(n.animation.name=s),n.meta=t.meta||{},typeof t.cache=="object"?(n.cache.read=(r=t.cache.read)!=null?r:n.cache.read,n.cache.write=(a=t.cache.write)!=null?a:n.cache.write):t.cache!==void 0&&(n.cache={read:!!t.cache,write:!!t.cache}),delete t.cache;try{await this.hooks.call("visit:start",n,void 0),n.state=3;const o=this.hooks.call("page:load",n,{options:t},async(c,u)=>{let h;return c.cache.read&&(h=this.cache.get(c.to.url)),u.page=h||await this.fetchPage(c.to.url,u.options),u.cache=!!h,u.page});o.then(({html:c})=>{n.advance(5),n.to.html=c,n.to.document=new DOMParser().parseFromString(c,"text/html")});const l=n.to.url+n.to.hash;if(n.history.popstate||(n.history.action==="replace"||n.to.url===this.location.url?Js(l):(this.currentHistoryIndex++,fm(l,{index:this.currentHistoryIndex}))),this.location=He.fromUrl(l),n.history.popstate&&this.classes.add("is-popstate"),n.animation.name&&this.classes.add(`to-${ud(n.animation.name)}`),n.animation.wait&&await o,n.done||(await this.hooks.call("visit:transition",n,void 0,async()=>{if(!n.animation.animate)return await this.hooks.call("animation:skip",void 0),void await this.renderPage(n,await o);n.advance(4),await this.animatePageOut(n),n.animation.native&&document.startViewTransition?await document.startViewTransition(async()=>await this.renderPage(n,await o)).finished:await this.renderPage(n,await o),await this.animatePageIn(n)}),n.done))return;await this.hooks.call("visit:end",n,void 0,()=>this.classes.clear()),n.state=7,this.navigating=!1,this.onVisitEnd&&(this.onVisitEnd(),this.onVisitEnd=void 0)}catch(o){if(!o||o!=null&&o.aborted)return void(n.state=8);n.state=9,console.error(o),this.options.skipPopStateHandling=()=>(window.location.assign(n.to.url+n.to.hash),!0),window.history.back()}finally{delete n.to.document}}const Tm=async function(n){await this.hooks.call("animation:out:start",n,void 0,()=>{this.classes.add("is-changing","is-animating","is-leaving")}),await this.hooks.call("animation:out:await",n,{skip:!1},(t,{skip:e})=>{if(!e)return this.awaitAnimations({selector:t.animation.selector})}),await this.hooks.call("animation:out:end",n,void 0)},bm=function(n){var t;const e=n.to.document;if(!e)return!1;const i=((t=e.querySelector("title"))==null?void 0:t.innerText)||"";document.title=i;const s=Yl('[data-swup-persist]:not([data-swup-persist=""])'),r=n.containers.map(a=>{const o=document.querySelector(a),l=e.querySelector(a);return o&&l?(o.replaceWith(l.cloneNode(!0)),!0):(o||console.warn(`[swup] Container missing in current document: ${a}`),l||console.warn(`[swup] Container missing in incoming document: ${a}`),!1)}).filter(Boolean);return s.forEach(a=>{const o=a.getAttribute("data-swup-persist"),l=No(`[data-swup-persist="${o}"]`);l&&l!==a&&l.replaceWith(a)}),r.length===n.containers.length},Dm=function(n){const t={behavior:"auto"},{target:e,reset:i}=n.scroll,s=e!=null?e:n.to.hash;let r=!1;return s&&(r=this.hooks.callSync("scroll:anchor",n,{hash:s,options:t},(a,{hash:o,options:l})=>{const c=this.getAnchorElement(o);return c&&c.scrollIntoView(l),!!c})),i&&!r&&(r=this.hooks.callSync("scroll:top",n,{options:t},(a,{options:o})=>(window.scrollTo(Se({top:0,left:0},o)),!0))),r},Am=async function(n){if(n.done)return;const t=this.hooks.call("animation:in:await",n,{skip:!1},(e,{skip:i})=>{if(!i)return this.awaitAnimations({selector:e.animation.selector})});await hd(),await this.hooks.call("animation:in:start",n,void 0,()=>{this.classes.remove("is-animating")}),await t,await this.hooks.call("animation:in:end",n,void 0)},Cm=async function(n,t){if(n.done)return;n.advance(6);const{url:e}=t;this.isSameResolvedUrl(or(),e)||(Js(e),this.location=He.fromUrl(e),n.to.url=this.location.url,n.to.hash=this.location.hash),await this.hooks.call("content:replace",n,{page:t},(i,{})=>{if(this.classes.remove("is-leaving"),i.animation.animate&&this.classes.add("is-rendering"),!this.replaceContent(i))throw new Error("[swup] Container mismatch, aborting");i.animation.animate&&(this.classes.add("is-changing","is-animating","is-rendering"),i.animation.name&&this.classes.add(`to-${ud(i.animation.name)}`))}),await this.hooks.call("content:scroll",n,void 0,()=>this.scrollToContent(n)),await this.hooks.call("page:view",n,{url:this.location.url,title:document.title})},Rm=function(n){var t;if(t=n,!!(t!=null&&t.isSwupPlugin)){if(n.swup=this,!n._checkRequirements||n._checkRequirements())return n._beforeMount&&n._beforeMount(),n.mount(),this.plugins.push(n),this.plugins}else console.error("Not a swup plugin instance",n)};function Pm(n){const t=this.findPlugin(n);if(t)return t.unmount(),t._afterUnmount&&t._afterUnmount(),this.plugins=this.plugins.filter(e=>e!==t),this.plugins;console.error("No such plugin",t)}function Lm(n){return this.plugins.find(t=>t===n||t.name===n||t.name===`Swup${String(n)}`)}function Fm(n){if(typeof this.options.resolveUrl!="function")return console.warn("[swup] options.resolveUrl expects a callback function."),n;const t=this.options.resolveUrl(n);return t&&typeof t=="string"?t.startsWith("//")||t.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),n):t:(console.warn("[swup] options.resolveUrl needs to return a url"),n)}function Im(n,t){return this.resolveUrl(n)===this.resolveUrl(t)}const Um={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',animationScope:"html",cache:!0,containers:["#swup"],hooks:{},ignoreVisit:(n,{el:t}={})=>!(t==null||!t.closest("[data-no-swup]")),linkSelector:"a[href]",linkToSelf:"scroll",native:!1,plugins:[],resolveUrl:n=>n,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:n=>{var t;return((t=n.state)==null?void 0:t.source)!=="swup"},timeout:0};class Nm{get currentPageUrl(){return this.location.url}constructor(t={}){var e,i;this.version="4.8.2",this.options=void 0,this.defaults=Um,this.plugins=[],this.visit=void 0,this.cache=void 0,this.hooks=void 0,this.classes=void 0,this.location=He.fromUrl(window.location.href),this.currentHistoryIndex=void 0,this.clickDelegate=void 0,this.navigating=!1,this.onVisitEnd=void 0,this.use=Rm,this.unuse=Pm,this.findPlugin=Lm,this.log=()=>{},this.navigate=Mm,this.performNavigation=wm,this.createVisit=xm,this.delegateEvent=pm,this.fetchPage=mm,this.awaitAnimations=ym,this.renderPage=Cm,this.replaceContent=bm,this.animatePageIn=Am,this.animatePageOut=Tm,this.scrollToContent=Dm,this.getAnchorElement=Em,this.getCurrentUrl=or,this.resolveUrl=Fm,this.isSameResolvedUrl=Im,this.options=Se({},this.defaults,t),this.handleLinkClick=this.handleLinkClick.bind(this),this.handlePopState=this.handlePopState.bind(this),this.cache=new gm(this),this.classes=new vm(this),this.hooks=new Sm(this),this.visit=this.createVisit({to:""}),this.currentHistoryIndex=(e=(i=window.history.state)==null?void 0:i.index)!=null?e:1,this.enable()}async enable(){var t;const{linkSelector:e}=this.options;this.clickDelegate=this.delegateEvent(e,"click",this.handleLinkClick),window.addEventListener("popstate",this.handlePopState),this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),this.options.native=this.options.native&&!!document.startViewTransition,this.options.plugins.forEach(i=>this.use(i));for(const[i,s]of Object.entries(this.options.hooks)){const[r,a]=this.hooks.parseName(i);this.hooks.on(r,s,a)}((t=window.history.state)==null?void 0:t.source)!=="swup"&&Js(null,{index:this.currentHistoryIndex}),await hd(),await this.hooks.call("enable",void 0,void 0,()=>{const i=document.documentElement;i.classList.add("swup-enabled"),i.classList.toggle("swup-native",this.options.native)})}async destroy(){this.clickDelegate.destroy(),window.removeEventListener("popstate",this.handlePopState),this.cache.clear(),this.options.plugins.forEach(t=>this.unuse(t)),await this.hooks.call("disable",void 0,void 0,()=>{const t=document.documentElement;t.classList.remove("swup-enabled"),t.classList.remove("swup-native")}),this.hooks.clear()}shouldIgnoreVisit(t,{el:e,event:i}={}){const{origin:s,url:r,hash:a}=He.fromUrl(t);return s!==window.location.origin||!(!e||!this.triggerWillOpenNewWindow(e))||!!this.options.ignoreVisit(r+a,{el:e,event:i})}handleLinkClick(t){const e=t.delegateTarget,{href:i,url:s,hash:r}=He.fromElement(e);if(this.shouldIgnoreVisit(i,{el:e,event:t}))return;if(this.navigating&&s===this.visit.to.url)return void t.preventDefault();const a=this.createVisit({to:s,hash:r,el:e,event:t});t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?this.hooks.callSync("link:newtab",a,{href:i}):t.button===0&&this.hooks.callSync("link:click",a,{el:e,event:t},()=>{var o;const l=(o=a.from.url)!=null?o:"";t.preventDefault(),s&&s!==l?this.isSameResolvedUrl(s,l)||this.performNavigation(a):r?this.hooks.callSync("link:anchor",a,{hash:r},()=>{Js(s+r),this.scrollToContent(a)}):this.hooks.callSync("link:self",a,void 0,()=>{this.options.linkToSelf==="navigate"?this.performNavigation(a):(Js(s),this.scrollToContent(a))})})}handlePopState(t){var e,i,s,r;const a=(e=(i=t.state)==null?void 0:i.url)!=null?e:window.location.href;if(this.options.skipPopStateHandling(t)||this.isSameResolvedUrl(or(),this.location.url))return;const{url:o,hash:l}=He.fromUrl(a),c=this.createVisit({to:o,hash:l,event:t});c.history.popstate=!0;const u=(s=(r=t.state)==null?void 0:r.index)!=null?s:0;u&&u!==this.currentHistoryIndex&&(c.history.direction=u-this.currentHistoryIndex>0?"forwards":"backwards",this.currentHistoryIndex=u),c.animation.animate=!1,c.scroll.reset=!1,c.scroll.target=!1,this.options.animateHistoryBrowsing&&(c.animation.animate=!0,c.scroll.reset=!0),this.hooks.callSync("history:popstate",c,{event:t},()=>{this.performNavigation(c)})}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}}function Qs(){return Qs=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Qs.apply(this,arguments)}const Wc=n=>String(n).split(".").map(t=>String(parseInt(t||"0",10))).concat(["0","0"]).slice(0,3).join(".");class Om{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(t=>t()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return typeof this.requires!="object"||Object.entries(this.requires).forEach(([t,e])=>{if(!function(i,s,r){const a=function(o,l){var c;if(o==="swup")return(c=l.version)!=null?c:"";{var u;const h=l.findPlugin(o);return(u=h==null?void 0:h.version)!=null?u:""}}(i,r);return!!a&&((o,l)=>l.every(c=>{const[,u,h]=c.match(/^([\D]+)?(.*)$/)||[];var d,p;return((_,g)=>{const m={"":f=>f===0,">":f=>f>0,">=":f=>f>=0,"<":f=>f<0,"<=":f=>f<=0};return(m[g]||m[""])(_)})((p=h,d=Wc(d=o),p=Wc(p),d.localeCompare(p,void 0,{numeric:!0})),u||">=")}))(a,s)}(t,e=Array.isArray(e)?e:[e],this.swup)){const i=`${t} ${e.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${i}`)}}),!0}on(t,e,i={}){var s;e=!(s=e).name.startsWith("bound ")||s.hasOwnProperty("prototype")?e.bind(this):e;const r=this.swup.hooks.on(t,e,i);return this.handlersToUnregister.push(r),r}once(t,e,i={}){return this.on(t,e,Qs({},i,{once:!0}))}before(t,e,i={}){return this.on(t,e,Qs({},i,{before:!0}))}replace(t,e,i={}){return this.on(t,e,Qs({},i,{replace:!0}))}off(t,e){return this.swup.hooks.off(t,e)}}function da(){return da=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},da.apply(this,arguments)}const Bm={from:"(.*)",to:"(.*)",out:n=>n(),in:n=>n()};class zm extends Om{constructor(t){var e,i;super(),e=this,this.name="SwupJsPlugin",this.requires={swup:">=4"},this.defaults={animations:[],matchOptions:{}},this.options=void 0,this.animations=[],this.awaitOutAnimation=async function(s,{skip:r}){r||await e.findAndRunAnimation(s,"out")},this.awaitInAnimation=async function(s,{skip:r}){r||await e.findAndRunAnimation(s,"in")},Array.isArray(t)&&(t={animations:t}),this.options=da({},this.defaults,t),this.options.animations.push(Bm),this.animations=(i=this.options.matchOptions,this.options.animations.map(s=>function(r,a){return da({},r,{matchesFrom:kc(r.from,a),matchesTo:kc(r.to,a)})}(s,i)))}mount(){this.replace("animation:out:await",this.awaitOutAnimation,{priority:-1}),this.replace("animation:in:await",this.awaitInAnimation,{priority:-1})}async findAndRunAnimation(t,e){const i=function(s,r){return function(a,o,l,c){let u=0;return a.reduceRight((d,p)=>{const _=function(g,m,f,v){let S=0;const x=g.matchesFrom(m);return x&&(S+=1),g.matchesTo(f)&&(S+=1),x&&g.to===v&&(S+=2),S}(p,o,l,c);return _>=u?(u=_,p):d},null)}(s,r.from.url,r.to.url,r.animation.name)}(this.animations,t);if(i){const s=function(r,a,o){const l=r.matchesFrom(a.from.url),c=r.matchesTo(a.to.url);return{visit:a,direction:o,from:{url:a.from.url,pattern:r.from,params:l?l.params:{}},to:{url:a.to.url,pattern:r.to,params:c?c.params:{}}}}(i,t,e);await function(r,a){const{direction:o}=a,l=r[o];return l?new Promise(c=>{const u=l(()=>c(),a);jl(u)&&u.then(c)}):(console.warn(`Missing animation function for '${o}' phase`),Promise.resolve())}(i,s)}}}/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var km=/(?:^\s+|\s+$)/g,Hm=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Kl(n){var t=n.nodeType,e="";if(t===1||t===9||t===11){if(typeof n.textContent=="string")return n.textContent;for(n=n.firstChild;n;n=n.nextSibling)e+=Kl(n)}else if(t===3||t===4)return n.nodeValue;return e}function wi(n,t,e,i,s){if(n+="",e&&(n=n.trim?n.trim():n.replace(km,"")),t&&t!=="")return n.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var r=[],a=n.length,o=0,l,c;o<a;o++)c=n.charAt(o),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||n.charCodeAt(o+1)>=65024&&n.charCodeAt(o+1)<=65039)&&(l=((n.substr(o,12).split(Hm)||[])[1]||"").length||2,c=n.substr(o,l),r.emoji=1,o+=l-1),r.push(s?c:c===">"?"&gt;":c==="<"?"&lt;":i&&c===" "&&(n.charAt(o-1)===" "||n.charAt(o+1)===" ")?"&nbsp;":c);return r}/*!
 * ScrambleTextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jr=function(){function n(e){this.chars=wi(e),this.sets=[],this.length=50;for(var i=0;i<20;i++)this.sets[i]=Xc(80,this.chars)}var t=n.prototype;return t.grow=function(i){for(var s=0;s<20;s++)this.sets[s]+=Xc(i-this.length,this.chars);this.length=i},n}(),Fn,fd,pd=function(){return Fn||typeof window!="undefined"&&(Fn=window.gsap)&&Fn.registerPlugin&&Fn},Vm=1,$c=/\s+/g,Xc=function(t,e){for(var i=e.length,s="";--t>-1;)s+=e[~~(Math.random()*i)];return s},Oo="ABCDEFGHIJKLMNOPQRSTUVWXYZ",qc=Oo.toLowerCase(),Gm={upperCase:new Jr(Oo),lowerCase:new Jr(qc),upperAndLowerCase:new Jr(Oo+qc)},Yc=function(){fd=Fn=pd()},Fs={version:"3.13.0",name:"scrambleText",register:function(t,e,i){Fn=t,Yc()},init:function(t,e,i,s,r){if(fd||Yc(),this.prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!!this.prop){this.target=t,typeof e!="object"&&(e={text:e});var a=e.text||e.value||"",o=e.trim!==!1,l=this,c,u,h,d;return l.delimiter=c=e.delimiter||"",l.original=wi(Kl(t).replace($c," ").split("&nbsp;").join(""),c,o),(a==="{original}"||a===!0||a==null)&&(a=l.original.join(c)),l.text=wi((a||"").replace($c," "),c,o),l.hasClass=!!(e.newClass||e.oldClass),l.newClass=e.newClass,l.oldClass=e.oldClass,d=c==="",l.textHasEmoji=d&&!!l.text.emoji,l.charsHaveEmoji=!!e.chars&&!!wi(e.chars).emoji,l.length=d?l.original.length:l.original.join(c).length,l.lengthDif=(d?l.text.length:l.text.join(c).length)-l.length,l.fillChar=e.fillChar||e.chars&&~e.chars.indexOf(" ")?"&nbsp;":"",l.charSet=h=Gm[e.chars||"upperCase"]||new Jr(e.chars),l.speed=.05/(e.speed||1),l.prevScrambleTime=0,l.setIndex=Math.random()*20|0,u=l.length+Math.max(l.lengthDif,0),u>h.length&&h.grow(u),l.chars=h.sets[l.setIndex],l.revealDelay=e.revealDelay||0,l.tweenLength=e.tweenLength!==!1,l.tween=i,l.rightToLeft=!!e.rightToLeft,l._props.push("scrambleText","text"),Vm}},render:function(t,e){var i=e.target,s=e.prop,r=e.text,a=e.delimiter,o=e.tween,l=e.prevScrambleTime,c=e.revealDelay,u=e.setIndex,h=e.chars,d=e.charSet,p=e.length,_=e.textHasEmoji,g=e.charsHaveEmoji,m=e.lengthDif,f=e.tweenLength,v=e.oldClass,S=e.newClass,x=e.rightToLeft,T=e.fillChar,b=e.speed,D=e.original,A=e.hasClass,E=r.length,y=o._time,R=y-l,I,N,$,O,L,H,U,Z,P,nt,j;c&&(o._from&&(y=o._dur-y),t=y===0?0:y<c?1e-6:y===o._dur?1:o._ease((y-c)/(o._dur-c))),t<0?t=0:t>1&&(t=1),x&&(t=1-t),I=~~(t*E+.5),t?((R>b||R<-b)&&(e.setIndex=u=(u+(Math.random()*19|0))%20,e.chars=d.sets[u],e.prevScrambleTime+=R),O=h):O=D.join(a),j=o._from?t:1-t,nt=p+(f?o._from?j*j*j:1-j*j*j:1)*m,x?t===1&&(o._from||o.data==="isFromStart")?($="",O=D.join(a)):(U=r.slice(I).join(a),g?$=wi(O).slice(0,nt-(_?wi(U):U).length+.5|0).join(""):$=O.substr(0,nt-(_?wi(U):U).length+.5|0),O=U):($=r.slice(0,I).join(a),N=(_?wi($):$).length,g?O=wi(O).slice(N,nt+.5|0).join(""):O=O.substr(N,nt-N+.5|0)),A?(Z=x?v:S,P=x?S:v,L=Z&&I!==0,H=P&&I!==E,U=(L?"<span class='"+Z+"'>":"")+$+(L?"</span>":"")+(H?"<span class='"+P+"'>":"")+a+O+(H?"</span>":"")):U=$+a+O,i[s]=T==="&nbsp;"&&~U.indexOf("  ")?U.split("  ").join("&nbsp;&nbsp;"):U}};Fs.emojiSafeSplit=wi;Fs.getText=Kl;pd()&&Fn.registerPlugin(Fs);var Wm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function $m(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bo={},Xm={get exports(){return Bo},set exports(n){Bo=n}};(function(n,t){(function(e,i){n.exports=i()})(typeof self!="undefined"?self:Wm,()=>(()=>{var e={75:function(a){(function(){var o,l,c,u,h,d;typeof performance!="undefined"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process!="undefined"&&process!==null&&process.hrtime?(a.exports=function(){return(o()-h)/1e6},l=process.hrtime,u=(o=function(){var p;return 1e9*(p=l())[0]+p[1]})(),d=1e9*process.uptime(),h=u-d):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,o,l)=>{for(var c=l(75),u=typeof window=="undefined"?l.g:window,h=["moz","webkit"],d="AnimationFrame",p=u["request"+d],_=u["cancel"+d]||u["cancelRequest"+d],g=0;!p&&g<h.length;g++)p=u[h[g]+"Request"+d],_=u[h[g]+"Cancel"+d]||u[h[g]+"CancelRequest"+d];if(!p||!_){var m=0,f=0,v=[];p=function(S){if(v.length===0){var x=c(),T=Math.max(0,16.666666666666668-(x-m));m=T+x,setTimeout(function(){var b=v.slice(0);v.length=0;for(var D=0;D<b.length;D++)if(!b[D].cancelled)try{b[D].callback(m)}catch(A){setTimeout(function(){throw A},0)}},Math.round(T))}return v.push({handle:++f,callback:S,cancelled:!1}),f},_=function(S){for(var x=0;x<v.length;x++)v[x].handle===S&&(v[x].cancelled=!0)}}a.exports=function(S){return p.call(u,S)},a.exports.cancel=function(){_.apply(u,arguments)},a.exports.polyfill=function(S){S||(S=u),S.requestAnimationFrame=p,S.cancelAnimationFrame=_}}},i={};function s(a){var o=i[a];if(o!==void 0)return o.exports;var l=i[a]={exports:{}};return e[a].call(l.exports,l,l.exports,s),l.exports}s.n=a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return s.d(o,{a:o}),o},s.d=(a,o)=>{for(var l in o)s.o(o,l)&&!s.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:o[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(a){if(typeof window=="object")return window}}(),s.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o);var r={};return(()=>{s.d(r,{default:()=>$});var a=s(4087),o=s.n(a);const l=function(O){return new RegExp(/<[a-z][\s\S]*>/i).test(O)},c=function(O,L){return Math.floor(Math.random()*(L-O+1))+O};var u="TYPE_CHARACTER",h="REMOVE_CHARACTER",d="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",_="PAUSE_FOR",g="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",v="CHANGE_DELAY",S="CHANGE_CURSOR",x="PASTE_STRING",T="HTML_TAG";function b(O){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},b(O)}function D(O,L){var H=Object.keys(O);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(O);L&&(U=U.filter(function(Z){return Object.getOwnPropertyDescriptor(O,Z).enumerable})),H.push.apply(H,U)}return H}function A(O){for(var L=1;L<arguments.length;L++){var H=arguments[L]!=null?arguments[L]:{};L%2?D(Object(H),!0).forEach(function(U){I(O,U,H[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(H)):D(Object(H)).forEach(function(U){Object.defineProperty(O,U,Object.getOwnPropertyDescriptor(H,U))})}return O}function E(O){return function(L){if(Array.isArray(L))return y(L)}(O)||function(L){if(typeof Symbol!="undefined"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}(O)||function(L,H){if(L){if(typeof L=="string")return y(L,H);var U=Object.prototype.toString.call(L).slice(8,-1);return U==="Object"&&L.constructor&&(U=L.constructor.name),U==="Map"||U==="Set"?Array.from(L):U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)?y(L,H):void 0}}(O)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function y(O,L){(L==null||L>O.length)&&(L=O.length);for(var H=0,U=new Array(L);H<L;H++)U[H]=O[H];return U}function R(O,L){for(var H=0;H<L.length;H++){var U=L[H];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(O,N(U.key),U)}}function I(O,L,H){return(L=N(L))in O?Object.defineProperty(O,L,{value:H,enumerable:!0,configurable:!0,writable:!0}):O[L]=H,O}function N(O){var L=function(H,U){if(b(H)!=="object"||H===null)return H;var Z=H[Symbol.toPrimitive];if(Z!==void 0){var P=Z.call(H,"string");if(b(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(H)}(O);return b(L)==="symbol"?L:String(L)}const $=function(){function O(U,Z){var P=this;if(function(j,lt){if(!(j instanceof lt))throw new TypeError("Cannot call a class as a function")}(this,O),I(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),I(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),I(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),I(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),I(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),I(this,"stop",function(){return P.state.eventLoop&&((0,a.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),I(this,"pauseFor",function(j){return P.addEventToQueue(_,{ms:j}),P}),I(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(j){P.typeString(j).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),I(this,"typeString",function(j){var lt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(j))return P.typeOutHTMLString(j,lt);if(j){var G=(P.options||{}).stringSplitter,J=typeof G=="function"?G(j):j.split("");P.typeCharacters(J,lt)}return P}),I(this,"pasteString",function(j){var lt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(j)?P.typeOutHTMLString(j,lt,!0):(j&&P.addEventToQueue(x,{character:j,node:lt}),P)}),I(this,"typeOutHTMLString",function(j){var lt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,G=arguments.length>2?arguments[2]:void 0,J=function(Nt){var mt=document.createElement("div");return mt.innerHTML=Nt,mt.childNodes}(j);if(J.length>0)for(var st=0;st<J.length;st++){var rt=J[st],yt=rt.innerHTML;rt&&rt.nodeType!==3?(rt.innerHTML="",P.addEventToQueue(m,{node:rt,parentNode:lt}),G?P.pasteString(yt,rt):P.typeString(yt,rt)):rt.textContent&&(G?P.pasteString(rt.textContent,lt):P.typeString(rt.textContent,lt))}return P}),I(this,"deleteAll",function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(d,{speed:j}),P}),I(this,"changeDeleteSpeed",function(j){if(!j)throw new Error("Must provide new delete speed");return P.addEventToQueue(f,{speed:j}),P}),I(this,"changeDelay",function(j){if(!j)throw new Error("Must provide new delay");return P.addEventToQueue(v,{delay:j}),P}),I(this,"changeCursor",function(j){if(!j)throw new Error("Must provide new cursor");return P.addEventToQueue(S,{cursor:j}),P}),I(this,"deleteChars",function(j){if(!j)throw new Error("Must provide amount of characters to delete");for(var lt=0;lt<j;lt++)P.addEventToQueue(h);return P}),I(this,"callFunction",function(j,lt){if(!j||typeof j!="function")throw new Error("Callback must be a function");return P.addEventToQueue(g,{cb:j,thisArg:lt}),P}),I(this,"typeCharacters",function(j){var lt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j||!Array.isArray(j))throw new Error("Characters must be an array");return j.forEach(function(G){P.addEventToQueue(u,{character:G,node:lt})}),P}),I(this,"removeCharacters",function(j){if(!j||!Array.isArray(j))throw new Error("Characters must be an array");return j.forEach(function(){P.addEventToQueue(h)}),P}),I(this,"addEventToQueue",function(j,lt){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(j,lt,G,"eventQueue")}),I(this,"addReverseCalledEvent",function(j,lt){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(j,lt,G,"reverseCalledEvents"):P}),I(this,"addEventToStateProperty",function(j,lt){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2],J=arguments.length>3?arguments[3]:void 0,st={eventName:j,eventArgs:lt||{}};return P.state[J]=G?[st].concat(E(P.state[J])):[].concat(E(P.state[J]),[st]),P}),I(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var j=Date.now(),lt=j-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=E(P.state.calledEvents),P.state.calledEvents=[],P.options=A({},P.state.initialOptions)}if(P.state.eventLoop=o()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(j<P.state.pauseUntil)return;P.state.pauseUntil=null}var G,J=E(P.state.eventQueue),st=J.shift();if(!(lt<=(G=st.eventName===p||st.eventName===h?P.options.deleteSpeed==="natural"?c(40,80):P.options.deleteSpeed:P.options.delay==="natural"?c(120,160):P.options.delay))){var rt=st.eventName,yt=st.eventArgs;switch(P.logInDevMode({currentEvent:st,state:P.state,delay:G}),rt){case x:case u:var Nt=yt.character,mt=yt.node,re=document.createTextNode(Nt),Zt=re;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(Zt=P.options.onCreateTextNode(Nt,re)),Zt&&(mt?mt.appendChild(Zt):P.state.elements.wrapper.appendChild(Zt)),P.state.visibleNodes=[].concat(E(P.state.visibleNodes),[{type:"TEXT_NODE",character:Nt,node:Zt}]);break;case h:J.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case _:var Bt=st.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(Bt);break;case g:var F=st.eventArgs,Oe=F.cb,zt=F.thisArg;Oe.call(zt,{elements:P.state.elements});break;case m:var Ot=st.eventArgs,Mt=Ot.node,Jt=Ot.parentNode;Jt?Jt.appendChild(Mt):P.state.elements.wrapper.appendChild(Mt),P.state.visibleNodes=[].concat(E(P.state.visibleNodes),[{type:T,node:Mt,parentNode:Jt||P.state.elements.wrapper}]);break;case d:var wt=P.state.visibleNodes,C=yt.speed,M=[];C&&M.push({eventName:f,eventArgs:{speed:C,temp:!0}});for(var V=0,Q=wt.length;V<Q;V++)M.push({eventName:p,eventArgs:{removingCharacterNode:!1}});C&&M.push({eventName:f,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),J.unshift.apply(J,M);break;case p:var et=st.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var K=P.state.visibleNodes.pop(),Et=K.type,ot=K.node,gt=K.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:ot,character:gt}),ot&&ot.parentNode.removeChild(ot),Et===T&&et&&J.unshift({eventName:p,eventArgs:{}})}break;case f:P.options.deleteSpeed=st.eventArgs.speed;break;case v:P.options.delay=st.eventArgs.delay;break;case S:P.options.cursor=st.eventArgs.cursor,P.state.elements.cursor.innerHTML=st.eventArgs.cursor}P.options.loop&&(st.eventName===p||st.eventArgs&&st.eventArgs.temp||(P.state.calledEvents=[].concat(E(P.state.calledEvents),[st]))),P.state.eventQueue=J,P.state.lastFrameTime=j}}}),U)if(typeof U=="string"){var nt=document.querySelector(U);if(!nt)throw new Error("Could not find container element");this.state.elements.container=nt}else this.state.elements.container=U;Z&&(this.options=A(A({},this.options),Z)),this.state.initialOptions=A({},this.options),this.init()}var L,H;return L=O,(H=[{key:"init",value:function(){var U,Z;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(d,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(U=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Z=document.createElement("style")).appendChild(document.createTextNode(U)),document.head.appendChild(Z),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(U){this.options.devMode&&console.log(U)}}])&&R(L.prototype,H),Object.defineProperty(L,"prototype",{writable:!1}),O}()})(),r.default})())})(Xm);const qm=$m(Bo);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let zs,Yn,zo,Ym=()=>zo||Zl.register(window.gsap),jc=typeof Intl!="undefined"?new Intl.Segmenter:0,fa=n=>typeof n=="string"?fa(document.querySelectorAll(n)):"length"in n?Array.from(n):[n],Kc=n=>fa(n).filter(t=>t instanceof HTMLElement),ko=[],Oa=function(){},jm=/\s+/g,Zc=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Jc={left:0,top:0,width:0,height:0},Qc=(n,t)=>{if(t){let e=new Set(n.join("").match(t)||ko),i=n.length,s,r,a,o;if(e.size)for(;--i>-1;){r=n[i];for(a of e)if(a.startsWith(r)&&a.length>r.length){for(s=0,o=r;a.startsWith(o+=n[i+ ++s])&&o.length<a.length;);if(s&&o.length===a.length){n[i]=a,n.splice(i+1,s);break}}}}return n},tu=n=>window.getComputedStyle(n).display==="inline"&&(n.style.display="inline-block"),jn=(n,t,e)=>t.insertBefore(typeof n=="string"?document.createTextNode(n):n,e),Ho=(n,t,e)=>{let i=t[n+"sClass"]||"",{tag:s="div",aria:r="auto",propIndex:a=!1}=t,o=n==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=u=>{let h=document.createElement(s),d=e.length+1;return i&&(h.className=i+(l?" "+i+d:"")),a&&h.style.setProperty("--"+n,d+""),r!=="none"&&h.setAttribute("aria-hidden","true"),s!=="span"&&(h.style.position="relative",h.style.display=o),h.textContent=u,e.push(h),h};return l&&(i=i.replace("++","")),c.collection=e,c},Km=(n,t,e,i)=>{let s=Ho("line",e,i),r=window.getComputedStyle(n).textAlign||"left";return(a,o)=>{let l=s("");for(l.style.textAlign=r,n.insertBefore(l,t[a]);a<o;a++)l.appendChild(t[a]);l.normalize()}},md=(n,t,e,i,s,r,a,o,l,c)=>{var u;let h=Array.from(n.childNodes),d=0,{wordDelimiter:p,reduceWhiteSpace:_=!0,prepareText:g}=t,m=n.getBoundingClientRect(),f=m,v=!_&&window.getComputedStyle(n).whiteSpace.substring(0,3)==="pre",S=0,x=e.collection,T,b,D,A,E,y,R,I,N,$,O,L,H,U,Z,P,nt,j;for(typeof p=="object"?(D=p.delimiter||p,b=p.replaceWith||""):b=p===""?"":p||" ",T=b!==" ";d<h.length;d++)if(A=h[d],A.nodeType===3){for(Z=A.textContent||"",_?Z=Z.replace(jm," "):v&&(Z=Z.replace(/\n/g,b+`
`)),g&&(Z=g(Z,n)),A.textContent=Z,E=b||D?Z.split(D||b):Z.match(o)||ko,nt=E[E.length-1],I=T?nt.slice(-1)===" ":!nt,nt||E.pop(),f=m,R=T?E[0].charAt(0)===" ":!E[0],R&&jn(" ",n,A),E[0]||E.shift(),Qc(E,l),r&&c||(A.textContent=""),N=1;N<=E.length;N++)if(P=E[N-1],!_&&v&&P.charAt(0)===`
`&&((u=A.previousSibling)==null||u.remove(),jn(document.createElement("br"),n,A),P=P.slice(1)),!_&&P==="")jn(b,n,A);else if(P===" ")n.insertBefore(document.createTextNode(" "),A);else{if(T&&P.charAt(0)===" "&&jn(" ",n,A),S&&N===1&&!R&&x.indexOf(S.parentNode)>-1?(y=x[x.length-1],y.appendChild(document.createTextNode(i?"":P))):(y=e(i?"":P),jn(y,n,A),S&&N===1&&!R&&y.insertBefore(S,y.firstChild)),i)for(O=jc?Qc([...jc.segment(P)].map(lt=>lt.segment),l):P.match(o)||ko,j=0;j<O.length;j++)y.appendChild(O[j]===" "?document.createTextNode(" "):i(O[j]));if(r&&c){if(Z=A.textContent=Z.substring(P.length+1,Z.length),$=y.getBoundingClientRect(),$.top>f.top&&$.left<=f.left){for(L=n.cloneNode(),H=n.childNodes[0];H&&H!==y;)U=H,H=H.nextSibling,L.appendChild(U);n.parentNode.insertBefore(L,n),s&&tu(L)}f=$}(N<E.length||I)&&jn(N>=E.length?" ":T&&P.slice(-1)===" "?" "+b:b,n,A)}n.removeChild(A),S=0}else A.nodeType===1&&(a&&a.indexOf(A)>-1?(x.indexOf(A.previousSibling)>-1&&x[x.length-1].appendChild(A),S=A):(md(A,t,e,i,s,r,a,o,l,!0),S=0),s&&tu(A))};const gd=class _d{constructor(t,e){this.isSplit=!1,Ym(),this.elements=Kc(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this._split=()=>this.isSplit&&this.split(this.vars);let i=[],s,r=()=>{let a=i.length,o;for(;a--;){o=i[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver!="undefined"&&new ResizeObserver(()=>{clearTimeout(s),s=setTimeout(r,200)})},Oa(this),this.split(e)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:s=!0,smartWrap:r,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,d=e.indexOf("words")>-1,p=h&&!d&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+Zc.source,"gu"):Zc,m=!!t.ignore&&Kc(t.ignore),{orig:f,animTime:v,obs:S}=this._data,x;return(h||d||u)&&(this.elements.forEach((T,b)=>{f[b]={element:T,html:T.innerHTML,ariaL:T.getAttribute("aria-label"),ariaH:T.getAttribute("aria-hidden")},i==="auto"?T.setAttribute("aria-label",(T.textContent||"").trim()):i==="hidden"&&T.setAttribute("aria-hidden","true");let D=[],A=[],E=[],y=h?Ho("char",t,D):null,R=Ho("word",t,A),I,N,$,O;if(md(T,t,R,y,p,s&&(u||p),m,g,_,!1),u){let L=fa(T.childNodes),H=Km(T,L,t,E),U,Z=[],P=0,nt=L.map(lt=>lt.nodeType===1?lt.getBoundingClientRect():Jc),j=Jc;for(I=0;I<L.length;I++)U=L[I],U.nodeType===1&&(U.nodeName==="BR"?(Z.push(U),H(P,I+1),P=I+1,j=nt[P]):(I&&nt[I].top>j.top&&nt[I].left<=j.left&&(H(P,I),P=I),j=nt[I]));P<I&&H(P,I),Z.forEach(lt=>{var G;return(G=lt.parentNode)==null?void 0:G.removeChild(lt)})}if(!d){for(I=0;I<A.length;I++)if(N=A[I],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!u){for($=document.createElement("span"),$.style.whiteSpace="nowrap";N.firstChild;)$.appendChild(N.firstChild);N.replaceWith($)}else N.replaceWith(...N.childNodes);else O=N.nextSibling,O&&O.nodeType===3&&(O.textContent=(N.textContent||"")+(O.textContent||""),N.remove());A.length=0,T.normalize()}this.lines.push(...E),this.words.push(...A),this.chars.push(...D)}),c&&this[c]&&this.masks.push(...this[c].map(T=>{let b=T.cloneNode();return T.replaceWith(b),b.appendChild(T),T.className&&(b.className=T.className.replace(/(\b\w+\b)/g,"$1-mask")),b.style.overflow="clip",b}))),this.isSplit=!0,Yn&&(o?Yn.addEventListener("loadingdone",this._split):Yn.status==="loading"&&console.warn("SplitText called before fonts loaded")),(x=a&&a(this))&&x.totalTime&&(this._data.anim=v?x.totalTime(v):x),u&&o&&this.elements.forEach((T,b)=>{f[b].width=T.offsetWidth,S&&S.observe(T)}),this}revert(){var t,e;let{orig:i,anim:s,obs:r}=this._data;return r&&r.disconnect(),i.forEach(({element:a,html:o,ariaL:l,ariaH:c})=>{a.innerHTML=o,l?a.setAttribute("aria-label",l):a.removeAttribute("aria-label"),c?a.setAttribute("aria-hidden",c):a.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,Yn==null||Yn.removeEventListener("loadingdone",this._split),s&&(this._data.animTime=s.totalTime(),s.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this),this}static create(t,e){return new _d(t,e)}static register(t){zs=zs||t||window.gsap,zs&&(fa=zs.utils.toArray,Oa=zs.core.context||Oa),!zo&&window.innerWidth>0&&(Yn=document.fonts,zo=!0)}};gd.version="3.13.0";let Zl=gd;At.registerPlugin(Zl);class xa{constructor(t={}){this.tweenParams={splitTextsLines:{opacity:{duration:.4,ease:"none"},y:{duration:1,stagger:.05,ease:"expo.out"}}},this.$targets=[],this.infoList=[],this.root=document,Object.assign(this,t)}init(){this.getSelector(),this.setInfoList()}getSelector(){this.$targets=this.root.querySelectorAll('[data-type-writer-animation="target"]')}setInfoList(){this.$targets.forEach((t,e)=>{this.infoList[e]={$target:t,$texts:t.querySelectorAll('[data-type-writer-animation="copy-text"]'),$subTexts:t.nextElementSibling?t.nextElementSibling.querySelectorAll('[data-type-writer-animation="copy-sub-text"]'):[],textStrings:[],splitTexts:[],typewriter:null,isLoop:t.dataset.loop==="true"},this.setTypeWriter(this.infoList[e]),this.setSplitText(this.infoList[e]),this.setStyle(this.infoList[e]),this.inViewAnimation(this.infoList[e])})}setTypeWriter(t){t.$texts.forEach((e,i)=>{const s=e.textContent;t.textStrings.push(s)}),t.typewriter=new qm(t.$target,{strings:t.textStrings,delay:60,deleteSpeed:0,loop:t.$target.dataset.loop==="true",wrapperClassName:"typewriter_wrapper",cursorClassName:"typewriter_cursor",onCreateTextNode:this.createCustomNode})}setSplitText(t){t.isLoop&&(t.splitTexts=[],t.$subTexts.forEach(e=>{const i=Zl.create(e,{type:"lines"});t.splitTexts.push(i)}))}setStyle(t){t.isLoop&&t.splitTexts.forEach((e,i)=>{At.set(e.lines,{opacity:0,y:"100%",force3D:!0})})}createCustomNode(t){if(t===" "){const i=document.createElement("span");return i.innerHTML="&nbsp;",i.className="typewriter_space",i}const e=document.createElement("span");return e.textContent=t,e.className="typewriter_char",e}inViewAnimation(t){t.$target.classList.add("-inView");let e=t.typewriter;t.textStrings.forEach((i,s)=>{e=e.callFunction(()=>{t.isLoop&&(t.$target.className=t.$target.className.replace(/-typewriter\d+/g,""),t.$target.classList.add(`-typewriter0${s}`))}).typeString(i),t.isLoop&&(e=e.callFunction(()=>{At.fromTo(t.splitTexts[s].lines,{opacity:0},{opacity:1,duration:this.tweenParams.splitTextsLines.opacity.duration,ease:this.tweenParams.splitTextsLines.opacity.ease}),At.fromTo(t.splitTexts[s].lines,{y:"100%",force3D:!0},{y:"0%",duration:this.tweenParams.splitTextsLines.y.duration,stagger:this.tweenParams.splitTextsLines.y.stagger,ease:this.tweenParams.splitTextsLines.y.ease,force3D:!0})})),e=e.pauseFor(3e3),t.isLoop&&(e=e.deleteChars(i.length).callFunction(()=>{t.$target.classList.remove(`-typewriter${s}`),At.to(t.splitTexts[s].lines,{opacity:0,duration:this.tweenParams.splitTextsLines.opacity.duration,ease:this.tweenParams.splitTextsLines.opacity.ease}),At.to(t.splitTexts[s].lines,{y:"-100%",duration:this.tweenParams.splitTextsLines.y.duration,ease:this.tweenParams.splitTextsLines.y.ease,force3D:!0})}))}),e.start()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="173",Zm=0,eu=1,Jm=2,vd=1,Qm=2,Bi=3,mn=0,Xe=1,hi=2,hn=0,_s=1,iu=2,nu=3,su=4,tg=5,Rn=100,eg=101,ig=102,ng=103,sg=104,rg=200,ag=201,og=202,lg=203,Vo=204,Go=205,cg=206,ug=207,hg=208,dg=209,fg=210,pg=211,mg=212,gg=213,_g=214,Wo=0,$o=1,Xo=2,bs=3,qo=4,Yo=5,jo=6,Ko=7,xd=0,vg=1,xg=2,dn=0,Sg=1,Eg=2,yg=3,Mg=4,wg=5,Tg=6,bg=7,Sd=300,Ds=301,As=302,Zo=303,Jo=304,Sa=306,Qo=1e3,ti=1001,tl=1002,Mi=1003,Dg=1004,Dr=1005,we=1006,Ba=1007,In=1008,Xi=1009,Ed=1010,yd=1011,lr=1012,Ql=1013,Hn=1014,Hi=1015,fr=1016,tc=1017,ec=1018,Cs=1020,Md=35902,wd=1021,Td=1022,yi=1023,bd=1024,Dd=1025,vs=1026,Rs=1027,Ad=1028,ic=1029,Cd=1030,nc=1031,sc=1033,Qr=33776,ta=33777,ea=33778,ia=33779,el=35840,il=35841,nl=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37808,cl=37809,ul=37810,hl=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Sl=37820,El=37821,na=36492,yl=36494,Ml=36495,Rd=36283,wl=36284,Tl=36285,bl=36286,Ag=3200,Cg=3201,Rg=0,Pg=1,rn="",ci="srgb",Ps="srgb-linear",pa="linear",te="srgb",Kn=7680,ru=519,Lg=512,Fg=513,Ig=514,Pd=515,Ug=516,Ng=517,Og=518,Bg=519,au=35044,ou="300 es",Vi=2e3,ma=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,Dl=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function zg(n,t){return(n%t+t)%t}function ka(n,t,e){return(1-e)*n+e*t}function ks(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,i,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],f=s[6],v=s[1],S=s[4],x=s[7],T=s[2],b=s[5],D=s[8];return r[0]=a*g+o*v+l*T,r[3]=a*m+o*S+l*b,r[6]=a*f+o*x+l*D,r[1]=c*g+u*v+h*T,r[4]=c*m+u*S+h*b,r[7]=c*f+u*x+h*D,r[2]=d*g+p*v+_*T,r[5]=d*m+p*S+_*b,r[8]=d*f+p*x+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=e*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ft;function Ld(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kg(){const n=cr("canvas");return n.style.display="block",n}const lu={};function us(n){n in lu||(lu[n]=!0,console.warn(n))}function Hg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Vg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gg(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const cu=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rn?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:t,whitePoint:i,transfer:pa,toXYZ:cu,fromXYZ:uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:te,toXYZ:cu,fromXYZ:uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),n}const Yt=Wg();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zn;class $g{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=cr("canvas")),Zn.width=t.width,Zn.height=t.height;const i=Zn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xg=0;class Fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?$g.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qg=0;class Fe extends Is{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=ti,s=ti,r=we,a=In,o=yi,l=Xi,c=Fe.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=pr(),this.name="",this.source=new Fd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Sd;Fe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,T=(f+1)/2,b=(u+d)/4,D=(h+g)/4,A=(_+m)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=D/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=A/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=D/r,s=A/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends Is{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Fe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Fd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Yg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Id extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jg extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*g,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),b=Math.atan2(T,f*v);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const x=o*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*p-c*d,t[e+1]=l*_+u*d+c*h-o*p,t[e+2]=c*_+u*p+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new q,hu=new mr;class gr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Cr.subVectors(this.max,Hs),Jn.subVectors(t.a,Hs),Qn.subVectors(t.b,Hs),ts.subVectors(t.c,Hs),Zi.subVectors(Qn,Jn),Ji.subVectors(ts,Qn),En.subVectors(Jn,ts);let e=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-En.z,En.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,En.z,0,-En.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-En.y,En.x,0];return!Wa(e,Jn,Qn,ts,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Jn,Qn,ts,Cr))?!1:(Rr.crossVectors(Zi,Ji),e=[Rr.x,Rr.y,Rr.z],Wa(e,Jn,Qn,ts,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new q,new q,new q,new q,new q,new q,new q,new q],vi=new q,Ar=new gr,Jn=new q,Qn=new q,ts=new q,Zi=new q,Ji=new q,En=new q,Hs=new q,Cr=new q,Rr=new q,yn=new q;function Wa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){yn.fromArray(n,r);const o=s.x*Math.abs(yn.x)+s.y*Math.abs(yn.y)+s.z*Math.abs(yn.z),l=t.dot(yn),c=e.dot(yn),u=i.dot(yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kg=new gr,Vs=new q,$a=new q;class rc{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Kg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add($a)),this.expandByPoint(Vs.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new q,Xa=new q,Pr=new q,Qi=new q,qa=new q,Lr=new q,Ya=new q;class Zg{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Qi.dot(this.direction),l=-Qi.dot(Pr),c=Qi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(Pr,d),p}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){qa.subVectors(e,t),Lr.subVectors(i,t),Ya.crossVectors(qa,Lr);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,t);const l=o*this.direction.dot(Lr.crossVectors(Qi,Lr));if(l<0)return null;const c=o*this.direction.dot(qa.cross(Qi));if(c<0||l+c>a)return null;const u=-o*Qi.dot(Ya);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m)}set(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jg,t,Qg)}lookAt(t,e,i){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),tn.crossVectors(i,je),tn.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),tn.crossVectors(i,je)),tn.normalize(),Fr.crossVectors(je,tn),s[0]=tn.x,s[4]=Fr.x,s[8]=je.x,s[1]=tn.y,s[5]=Fr.y,s[9]=je.y,s[2]=tn.z,s[6]=Fr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],S=i[7],x=i[11],T=i[15],b=s[0],D=s[4],A=s[8],E=s[12],y=s[1],R=s[5],I=s[9],N=s[13],$=s[2],O=s[6],L=s[10],H=s[14],U=s[3],Z=s[7],P=s[11],nt=s[15];return r[0]=a*b+o*y+l*$+c*U,r[4]=a*D+o*R+l*O+c*Z,r[8]=a*A+o*I+l*L+c*P,r[12]=a*E+o*N+l*H+c*nt,r[1]=u*b+h*y+d*$+p*U,r[5]=u*D+h*R+d*O+p*Z,r[9]=u*A+h*I+d*L+p*P,r[13]=u*E+h*N+d*H+p*nt,r[2]=_*b+g*y+m*$+f*U,r[6]=_*D+g*R+m*O+f*Z,r[10]=_*A+g*I+m*L+f*P,r[14]=_*E+g*N+m*H+f*nt,r[3]=v*b+S*y+x*$+T*U,r[7]=v*D+S*R+x*O+T*Z,r[11]=v*A+S*I+x*L+T*P,r[15]=v*E+S*N+x*H+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],v=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,S=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,x=u*g*c-_*h*c+_*o*p-a*g*p-u*o*f+a*h*f,T=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,b=e*v+i*S+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(g*d*r-h*m*r-g*s*p+i*m*p+h*s*f-i*d*f)*D,t[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*f+i*l*f)*D,t[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*D,t[4]=S*D,t[5]=(u*m*r-_*d*r+_*s*p-e*m*p-u*s*f+e*d*f)*D,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*D,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*D,t[8]=x*D,t[9]=(_*h*r-u*g*r-_*i*p+e*g*p+u*i*f-e*h*f)*D,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*f+e*o*f)*D,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*p-e*o*p)*D,t[12]=T*D,t[13]=(u*g*s-_*h*s+_*i*d-e*g*d-u*i*m+e*h*m)*D,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*m-e*o*m)*D,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*d+e*o*d)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,g=a*u,m=a*h,f=o*h,v=l*c,S=l*u,x=l*h,T=i.x,b=i.y,D=i.z;return s[0]=(1-(g+f))*T,s[1]=(p+x)*T,s[2]=(_-S)*T,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(_+S)*D,s[9]=(m-v)*D,s[10]=(1-(d+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);const c=1/r,u=1/a,h=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,e.setFromRotationMatrix(xi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Vi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(o===Vi)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ma)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(a-r),d=(e+t)*c,p=(i+s)*u;let _,g;if(o===Vi)_=(a+r)*h,g=-2*h;else if(o===ma)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new q,xi=new xe,Jg=new q(0,0,0),Qg=new q(1,1,1),tn=new q,Fr=new q,je=new q,du=new xe,fu=new mr;class qi{constructor(t=0,e=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t_=0;const pu=new q,is=new mr,Ui=new xe,Ir=new q,Gs=new q,e_=new q,i_=new mr,mu=new q(1,0,0),gu=new q(0,1,0),_u=new q(0,0,1),vu={type:"added"},n_={type:"removed"},ns={type:"childadded",child:null},ja={type:"childremoved",child:null};class ii extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new q,e=new qi,i=new mr,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ft}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(_u,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(_u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Gs,Ir,this.up):Ui.lookAt(Ir,Gs,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Ui),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n_),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,e_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,i_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ii.DEFAULT_UP=new q(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new q,Ni=new q,Ka=new q,Oi=new q,ss=new q,rs=new q,xu=new q,Za=new q,Ja=new q,Qa=new q,to=new pe,eo=new pe,io=new pe;class Ei{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Si.subVectors(t,e),s.cross(Si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Si.subVectors(s,e),Ni.subVectors(i,e),Ka.subVectors(t,e);const a=Si.dot(Si),o=Si.dot(Ni),l=Si.dot(Ka),c=Ni.dot(Ni),u=Ni.dot(Ka),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return to.setScalar(0),eo.setScalar(0),io.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,i),io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(t,e,i,s){return Si.subVectors(i,e),Ni.subVectors(t,e),Si.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Si.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,i),rs.subVectors(r,i),Za.subVectors(t,i);const l=ss.dot(Za),c=rs.dot(Za);if(l<=0&&c<=0)return e.copy(i);Ja.subVectors(t,s);const u=ss.dot(Ja),h=rs.dot(Ja);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(ss,a);Qa.subVectors(t,r);const p=ss.dot(Qa),_=rs.dot(Qa);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(rs,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return xu.subVectors(r,s),o=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(xu,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(i).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function no(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=zg(t,1),e=Ht(e,0,1),i=Ht(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=no(a,r,t+1/3),this.g=no(a,r,t),this.b=no(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ci){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const i=Nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ht(Re.r*255,0,255))*65536+Math.round(Ht(Re.g*255,0,255))*256+Math.round(Ht(Re.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,s=Re.g,r=Re.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ci){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,s=Re.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(en),this.setHSL(en.h+t,en.s+e,en.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(Ur);const i=ka(en.h,Ur.h,e),s=ka(en.s,Ur.s,e),r=ka(en.l,Ur.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new ee;ee.NAMES=Nd;let s_=0;class Ea extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=_s,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==mn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==Rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Od extends Ea{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new q,Nr=new Wt;let r_=0;class Ci{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ks(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}}class Bd extends Ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class zd extends Ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class zn extends Ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}let a_=0;const oi=new xe,so=new ii,as=new q,Ke=new gr,Ws=new gr,Me=new q;class Wn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?zd:Bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ke.min,Ws.min),Ke.expandByPoint(Me),Me.addVectors(Ke.max,Ws.max),Ke.expandByPoint(Me)):(Ke.expandByPoint(Ws.min),Ke.expandByPoint(Ws.max))}Ke.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Me.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(t,c),Me.add(as)),s=Math.max(s,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new q,l[A]=new q;const c=new q,u=new q,h=new q,d=new Wt,p=new Wt,_=new Wt,g=new q,m=new q;function f(A,E,y){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),o[A].add(g),o[E].add(g),o[y].add(g),l[A].add(m),l[E].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,E=v.length;A<E;++A){const y=v[A],R=y.start,I=y.count;for(let N=R,$=R+I;N<$;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new q,x=new q,T=new q,b=new q;function D(A){T.fromBufferAttribute(s,A),b.copy(T);const E=o[A];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(b,E);const R=x.dot(l[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,R)}for(let A=0,E=v.length;A<E;++A){const y=v[A],R=y.start,I=y.count;for(let N=R,$=R+I;N<$;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new Ci(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new xe,Mn=new Zg,Or=new rc,Eu=new q,Br=new q,zr=new q,kr=new q,ro=new q,Hr=new q,yu=new q,Vr=new q;class mi extends ii{constructor(t=new Wn,e=new Od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ro.fromBufferAttribute(h,t),a?Hr.addScaledVector(ro,u):Hr.addScaledVector(ro.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Mn.copy(t.ray).recast(t.near),!(Or.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Or,Eu)===null||Mn.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),Mn.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){const b=o.getX(x),D=o.getX(x+1),A=o.getX(x+2);s=Gr(this,f,t,i,c,u,h,b,D,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=Gr(this,a,t,i,c,u,h,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){const b=x,D=x+1,A=x+2;s=Gr(this,f,t,i,c,u,h,b,D,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,S=m+1,x=m+2;s=Gr(this,a,t,i,c,u,h,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function o_(n,t,e,i,s,r,a,o){let l;if(t.side===Xe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===mn,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:n}}function Gr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,kr);const u=o_(n,t,e,i,Br,zr,kr,yu);if(u){const h=new q;Ei.getBarycoord(yu,Br,zr,kr,h),s&&(u.uv=Ei.getInterpolatedAttribute(s,o,l,c,h,new Wt)),r&&(u.uv1=Ei.getInterpolatedAttribute(r,o,l,c,h,new Wt)),a&&(u.normal=Ei.getInterpolatedAttribute(a,o,l,c,h,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};Ei.getNormal(Br,zr,kr,d.normal),u.face=d,u.barycoord=h}return u}class _r extends Wn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(h,2));function _(g,m,f,v,S,x,T,b,D,A,E){const y=x/D,R=T/A,I=x/2,N=T/2,$=b/2,O=D+1,L=A+1;let H=0,U=0;const Z=new q;for(let P=0;P<L;P++){const nt=P*R-N;for(let j=0;j<O;j++){const lt=j*y-I;Z[g]=lt*v,Z[m]=nt*S,Z[f]=$,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[f]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(j/D),h.push(1-P/A),H+=1}}for(let P=0;P<A;P++)for(let nt=0;nt<D;nt++){const j=d+nt+O*P,lt=d+nt+O*(P+1),G=d+(nt+1)+O*(P+1),J=d+(nt+1)+O*P;l.push(j,lt,J),l.push(lt,G,J),U+=6}o.addGroup(p,U,E),p+=U,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=Ls(n[e]);for(const s in i)t[s]=i[s]}return t}function l_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const c_={clone:Ls,merge:Ue};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ea{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=l_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hd extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nn=new q,Mu=new Wt,wu=new Wt;class ui extends Hd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nn.x,nn.y).multiplyScalar(-t/nn.z),nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nn.x,nn.y).multiplyScalar(-t/nn.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,wu),e.subVectors(wu,Mu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(za*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,ls=1;class d_ extends ii{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ui(os,ls,t,e);s.layers=this.layers,this.add(s);const r=new ui(os,ls,t,e);r.layers=this.layers,this.add(r);const a=new ui(os,ls,t,e);a.layers=this.layers,this.add(a);const o=new ui(os,ls,t,e);o.layers=this.layers,this.add(o);const l=new ui(os,ls,t,e);l.layers=this.layers,this.add(l);const c=new ui(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vd extends Fe{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class f_ extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _r(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:hn});r.uniforms.tEquirect.value=e;const a=new mi(s,r),o=e.minFilter;return e.minFilter===In&&(e.minFilter=we),new d_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Wr extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class m_ extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const oo=new q,g_=new q,__=new Ft;class An{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=oo.subVectors(i,e).cross(g_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||__.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new rc,$r=new q;class Gd{constructor(t=new An,e=new An,i=new An,s=new An,r=new An,a=new An){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],v=s[13],S=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-p,x-f).normalize(),i[1].setComponents(l+r,d+c,m+p,x+f).normalize(),i[2].setComponents(l+a,d+u,m+_,x+v).normalize(),i[3].setComponents(l-a,d-u,m-_,x-v).normalize(),i[4].setComponents(l-o,d-h,m-g,x-S).normalize(),e===Vi)i[5].setComponents(l+o,d+h,m+g,x+S).normalize();else if(e===ma)i[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends Fe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:we,this.magFilter=r!==void 0?r:we,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class $d extends Fe{constructor(t,e,i,s,r,a,o,l,c,u=vs){if(u!==vs&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vs&&(i=Hn),i===void 0&&u===Rs&&(i=Cs),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mi,this.minFilter=l!==void 0?l:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $n extends Wn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let S=0;S<c;S++){const x=S*h-r;_.push(x,-v,0),g.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,x=v+c*(f+1),T=v+1+c*(f+1),b=v+1+c*f;p.push(S,x,b),p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class ac extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class v_ extends Ea{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x_ extends Ea{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class S_{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const E_=new S_;class oc{constructor(t){this.manager=t!==void 0?t:E_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}oc.DEFAULT_MATERIAL_NAME="__DEFAULT";let y_=class extends oc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Tu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=cr("img");function l(){u(),Tu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};class lc extends oc{constructor(t){super(t)}load(t,e,i,s){const r=new Fe,a=new y_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class M_ extends Hd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class w_ extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function bu(n,t,e,i){const s=T_(i);switch(e){case wd:return n*t;case bd:return n*t;case Dd:return n*t*2;case Ad:return n*t/s.components*s.byteLength;case ic:return n*t/s.components*s.byteLength;case Cd:return n*t*2/s.components*s.byteLength;case nc:return n*t*2/s.components*s.byteLength;case Td:return n*t*3/s.components*s.byteLength;case yi:return n*t*4/s.components*s.byteLength;case sc:return n*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case sl:return Math.max(n,16)*Math.max(t,8)/4;case el:case nl:return Math.max(n,8)*Math.max(t,8)/2;case rl:case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case yl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rd:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tl:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T_(n){switch(n){case Xi:case Ed:return{byteLength:1,components:1};case lr:case yd:case fr:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Hn:case Ql:case Hi:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function b_(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ev=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:D_,alphahash_pars_fragment:A_,alphamap_fragment:C_,alphamap_pars_fragment:R_,alphatest_fragment:P_,alphatest_pars_fragment:L_,aomap_fragment:F_,aomap_pars_fragment:I_,batching_pars_vertex:U_,batching_vertex:N_,begin_vertex:O_,beginnormal_vertex:B_,bsdfs:z_,iridescence_fragment:k_,bumpmap_pars_fragment:H_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:$_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:j_,common:K_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:J_,displacementmap_pars_vertex:Q_,displacementmap_vertex:tv,emissivemap_fragment:ev,emissivemap_pars_fragment:iv,colorspace_fragment:nv,colorspace_pars_fragment:sv,envmap_fragment:rv,envmap_common_pars_fragment:av,envmap_pars_fragment:ov,envmap_pars_vertex:lv,envmap_physical_pars_fragment:xv,envmap_vertex:cv,fog_vertex:uv,fog_pars_vertex:hv,fog_fragment:dv,fog_pars_fragment:fv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:vv,lights_toon_fragment:Sv,lights_toon_pars_fragment:Ev,lights_phong_fragment:yv,lights_phong_pars_fragment:Mv,lights_physical_fragment:wv,lights_physical_pars_fragment:Tv,lights_fragment_begin:bv,lights_fragment_maps:Dv,lights_fragment_end:Av,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Lv,map_fragment:Fv,map_pars_fragment:Iv,map_particle_fragment:Uv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:Bv,morphinstance_vertex:zv,morphcolor_vertex:kv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Gv,normal_fragment_begin:Wv,normal_fragment_maps:$v,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:Yv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:i0,project_vertex:n0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:u0,shadowmask_pars_fragment:h0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:v0,tonemapping_pars_fragment:x0,transmission_fragment:S0,transmission_pars_fragment:E0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:w0,worldpos_vertex:T0,background_vert:b0,background_frag:D0,backgroundCube_vert:A0,backgroundCube_frag:C0,cube_vert:R0,cube_frag:P0,depth_vert:L0,depth_frag:F0,distanceRGBA_vert:I0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:z0,meshbasic_vert:k0,meshbasic_frag:H0,meshlambert_vert:V0,meshlambert_frag:G0,meshmatcap_vert:W0,meshmatcap_frag:$0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:j0,meshphysical_vert:K0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:tx,points_frag:ex,shadow_vert:ix,shadow_frag:nx,sprite_vert:sx,sprite_frag:rx},ct={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bi={basic:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ue([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ue([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ue([ct.points,ct.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ue([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ue([ct.common,ct.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ue([ct.sprite,ct.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ue([ct.common,ct.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ue([ct.lights,ct.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};bi.physical={uniforms:Ue([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Xr={r:0,b:0,g:0},Tn=new qi,ax=new xe;function ox(n,t,e,i,s,r,a){const o=new ee(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const T=_(S);T===null?f(o,l):T&&T.isColor&&(f(T,1),x=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===Sa)?(u===void 0&&(u=new mi(new _r(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ls(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Tn.copy(x.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Tn)),u.material.toneMapped=Yt.getTransfer(T.colorSpace)!==te,(h!==T||d!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new mi(new $n(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ls(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==te,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(Xr,kd(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,x,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:g,addToRenderList:m,dispose:v}}function lx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(y,R,I,N,$){let O=!1;const L=h(N,I,R);r!==L&&(r=L,c(r.object)),O=p(y,N,I,$),O&&_(y,N,I,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(y,R,I,N),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,R,I){const N=I.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let O=$[R.id];O===void 0&&(O={},$[R.id]=O);let L=O[N];return L===void 0&&(L=d(l()),O[N]=L),L}function d(y){const R=[],I=[],N=[];for(let $=0;$<e;$++)R[$]=0,I[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,R,I,N){const $=r.attributes,O=R.attributes;let L=0;const H=I.getAttributes();for(const U in H)if(H[U].location>=0){const P=$[U];let nt=O[U];if(nt===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),P===void 0||P.attribute!==nt||nt&&P.data!==nt.data)return!0;L++}return r.attributesNum!==L||r.index!==N}function _(y,R,I,N){const $={},O=R.attributes;let L=0;const H=I.getAttributes();for(const U in H)if(H[U].location>=0){let P=O[U];P===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const nt={};nt.attribute=P,P&&P.data&&(nt.data=P.data),$[U]=nt,L++}r.attributes=$,r.attributesNum=L,r.index=N}function g(){const y=r.newAttributes;for(let R=0,I=y.length;R<I;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const I=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;I[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),$[y]!==R&&(n.vertexAttribDivisor(y,R),$[y]=R)}function v(){const y=r.newAttributes,R=r.enabledAttributes;for(let I=0,N=R.length;I<N;I++)R[I]!==y[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function S(y,R,I,N,$,O,L){L===!0?n.vertexAttribIPointer(y,R,I,$,O):n.vertexAttribPointer(y,R,I,N,$,O)}function x(y,R,I,N){g();const $=N.attributes,O=I.getAttributes(),L=R.defaultAttributeValues;for(const H in O){const U=O[H];if(U.location>=0){let Z=$[H];if(Z===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const P=Z.normalized,nt=Z.itemSize,j=t.get(Z);if(j===void 0)continue;const lt=j.buffer,G=j.type,J=j.bytesPerElement,st=G===n.INT||G===n.UNSIGNED_INT||Z.gpuType===Ql;if(Z.isInterleavedBufferAttribute){const rt=Z.data,yt=rt.stride,Nt=Z.offset;if(rt.isInstancedInterleavedBuffer){for(let mt=0;mt<U.locationSize;mt++)f(U.location+mt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let mt=0;mt<U.locationSize;mt++)m(U.location+mt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let mt=0;mt<U.locationSize;mt++)S(U.location+mt,nt/U.locationSize,G,P,yt*J,(Nt+nt/U.locationSize*mt)*J,st)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<U.locationSize;rt++)f(U.location+rt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<U.locationSize;rt++)m(U.location+rt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let rt=0;rt<U.locationSize;rt++)S(U.location+rt,nt/U.locationSize,G,P,nt*J,nt/U.locationSize*rt*J,st)}}else if(L!==void 0){const P=L[H];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(U.location,P);break;case 3:n.vertexAttrib3fv(U.location,P);break;case 4:n.vertexAttrib4fv(U.location,P);break;default:n.vertexAttrib1fv(U.location,P)}}}}v()}function T(){A();for(const y in i){const R=i[y];for(const I in R){const N=R[I];for(const $ in N)u(N[$].object),delete N[$];delete R[I]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const I in R){const N=R[I];for(const $ in N)u(N[$].object),delete N[$];delete R[I]}delete i[y.id]}function D(y){for(const R in i){const I=i[R];if(I[y.id]===void 0)continue;const N=I[y.id];for(const $ in N)u(N[$].object),delete N[$];delete I[y.id]}}function A(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function cx(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ux(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==yi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const A=D===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Xi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Hi&&!A)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function hx(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new An,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,S=v*4;let x=f.clippingState||null;l.value=x,x=u(_,d,S,p);for(let T=0;T!==S;++T)x[T]=e[T];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==g;++S,x+=4)a.copy(h[S]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function dx(n){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=Ds:o===Jo&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===Jo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new f_(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const fs=4,Du=[.125,.215,.35,.446,.526,.582],Pn=20,lo=new M_,Au=new ee;let co=null,uo=0,ho=0,fo=!1;const Cn=(1+Math.sqrt(5))/2,cs=1/Cn,Cu=[new q(-Cn,cs,0),new q(Cn,cs,0),new q(-cs,0,Cn),new q(cs,0,Cn),new q(0,Cn,-cs),new q(0,Cn,cs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){co=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co,uo,ho),this._renderer.xr.enabled=fo,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:we,minFilter:we,generateMipmaps:!1,type:fr,format:yi,colorSpace:Ps,depthBuffer:!1},s=Pu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(r)),this._blurMaterial=px(r,t,e)}return s}_compileMaterial(t){const e=new mi(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,i,s){const o=new ui(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Au),u.toneMapping=dn,u.autoClear=!1;const p=new Od({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),_=new mi(new _r,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Au),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;qr(s,v*S,f>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ds||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new mi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,lo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mi(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pn-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Pn;m>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);const f=[];let v=0;for(let D=0;D<Pn;++D){const A=D/g,E=Math.exp(-A*A/2);f.push(E),D===0?v+=E:D<m&&(v+=2*E)}for(let D=0;D<f.length;D++)f[D]=f[D]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const x=this._sizeLods[s],T=3*x*(s>S-fs?s-S+fs:0),b=4*(this._cubeSize-x);qr(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(h,lo)}}function fx(n){const t=[],e=[],i=[];let s=n;const r=n-fs+1+Du.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-fs?l=Du[a-n+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),S=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let b=0;b<p;b++){const D=b%3*2/3-1,A=b>2?0:-1,E=[D,A,0,D+2/3,A,0,D+2/3,A+1,0,D,A,0,D+2/3,A+1,0,D,A+1,0];v.set(E,g*_*b),S.set(d,m*_*b);const y=[b,b,b,b,b,b];x.set(y,f*_*b)}const T=new Wn;T.setAttribute("position",new Ci(v,g)),T.setAttribute("uv",new Ci(S,m)),T.setAttribute("faceIndex",new Ci(x,f)),t.push(T),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pu(n,t,e){const i=new Vn(n,t,e);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function px(n,t,e){const i=new Float32Array(Pn),s=new q(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Lu(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Fu(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zo||l===Jo,u=l===Ds||l===As;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ru(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Ru(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function gx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&us("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _x(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let S=0,x=v.length;S<x;S+=3){const T=v[S+0],b=v[S+1],D=v[S+2];d.push(T,b,b,D,D,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const T=S+0,b=S+1,D=S+2;d.push(T,b,b,D,D,T)}}else return;const m=new(Ld(d)?zd:Bd)(d,1);m.version=g;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function vx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),e.update(p,i,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,i,1)}function h(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*g[v];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Sx(n,t,e){const i=new WeakMap,s=new pe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const D=new Float32Array(T*b*4*h),A=new Id(D,T,b,h);A.type=Hi,A.needsUpdate=!0;const E=x*4;for(let R=0;R<h;R++){const I=f[R],N=v[R],$=S[R],O=T*b*4*R;for(let L=0;L<I.count;L++){const H=L*E;_===!0&&(s.fromBufferAttribute(I,L),D[O+H+0]=s.x,D[O+H+1]=s.y,D[O+H+2]=s.z,D[O+H+3]=0),g===!0&&(s.fromBufferAttribute(N,L),D[O+H+4]=s.x,D[O+H+5]=s.y,D[O+H+6]=s.z,D[O+H+7]=0),m===!0&&(s.fromBufferAttribute($,L),D[O+H+8]=s.x,D[O+H+9]=s.y,D[O+H+10]=s.z,D[O+H+11]=$.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Wt(T,b)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ex(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const qd=new Fe,Iu=new $d(1,1),Yd=new Id,jd=new jg,Kd=new Vd,Uu=[],Nu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function Us(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ya(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function bx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),ye(e,i)}}function Dx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),ye(e,i)}}function Ax(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),ye(e,i)}}function Cx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function Px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function Fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function Ox(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Pd,r=Iu):r=qd,e.setTexture2D(t||r,s)}function Bx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kd,s)}function kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yd,s)}function Hx(n){switch(n){case 5126:return yx;case 35664:return Mx;case 35665:return wx;case 35666:return Tx;case 35674:return bx;case 35675:return Dx;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Fx;case 36294:return Ix;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}function Vx(n,t){n.uniform1fv(this.addr,t)}function Gx(n,t){const e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function Wx(n,t){const e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function $x(n,t){const e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function Xx(n,t){const e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qx(n,t){const e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yx(n,t){const e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function jx(n,t){n.uniform1iv(this.addr,t)}function Kx(n,t){n.uniform2iv(this.addr,t)}function Zx(n,t){n.uniform3iv(this.addr,t)}function Jx(n,t){n.uniform4iv(this.addr,t)}function Qx(n,t){n.uniform1uiv(this.addr,t)}function tS(n,t){n.uniform2uiv(this.addr,t)}function eS(n,t){n.uniform3uiv(this.addr,t)}function iS(n,t){n.uniform4uiv(this.addr,t)}function nS(n,t,e){const i=this.cache,s=t.length,r=ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qd,r[a])}function sS(n,t,e){const i=this.cache,s=t.length,r=ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jd,r[a])}function rS(n,t,e){const i=this.cache,s=t.length,r=ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kd,r[a])}function aS(n,t,e){const i=this.cache,s=t.length,r=ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yd,r[a])}function oS(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return $x;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return jx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return tS;case 36295:return eS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}class lS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}}class cS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oS(e.type)}}class uS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const po=/(\w+)(\])?(\[|\.)?/g;function ku(n,t){n.seq.push(t),n.map[t.id]=t}function hS(n,t,e){const i=n.name,s=i.length;for(po.lastIndex=0;;){const r=po.exec(i),a=po.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ku(e,c===void 0?new lS(o,n,t):new cS(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new uS(o),ku(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hS(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Hu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const dS=37297;let fS=0;function pS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Vu=new Ft;function mS(n){Yt._getMatrix(Vu,Yt.workingColorSpace,n);const t=`mat3( ${Vu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case pa:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pS(n.getShaderSource(t),a)}else return s}function gS(n,t){const e=mS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _S(n,t){let e;switch(t){case Sg:e="Linear";break;case Eg:e="Reinhard";break;case yg:e="Cineon";break;case Mg:e="ACESFilmic";break;case Tg:e="AgX";break;case bg:e="Neutral";break;case wg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new q;function vS(){Yt.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function SS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ES(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function qs(n){return n!==""}function Wu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(yS,wS)}const MS=new Map;function wS(n,t){let e=Ut[t];if(e===void 0){const i=MS.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(TS,bS)}function bS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function DS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function AS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case As:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function RS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xd:t="ENVMAP_BLENDING_MULTIPLY";break;case vg:t="ENVMAP_BLENDING_MIX";break;case xg:t="ENVMAP_BLENDING_ADD";break}return t}function PS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function LS(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=DS(e),c=AS(e),u=CS(e),h=RS(e),d=PS(e),p=xS(e),_=SS(r),g=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==dn?_S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,gS("linearToOutputTexel",e.outputColorSpace),vS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=Al(a),a=Wu(a,e),a=$u(a,e),o=Al(o),o=Wu(o,e),o=$u(o,e),a=Xu(a),o=Xu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+m+a,x=v+f+o,T=Hu(s,s.VERTEX_SHADER,S),b=Hu(s,s.FRAGMENT_SHADER,x);s.attachShader(g,T),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(T).trim(),$=s.getShaderInfoLog(b).trim();let O=!0,L=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,b);else{const H=Gu(s,T,"vertex"),U=Gu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+H+`
`+U)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||$==="")&&(L=!1);L&&(R.diagnostics={runnable:O,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(T),s.deleteShader(b),A=new sa(s,g),E=ES(s,g)}let A;this.getUniforms=function(){return A===void 0&&D(this),A};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,dS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=b,this}let FS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new US(t),e.set(t,i)),i}}class US{constructor(t){this.id=FS++,this.code=t,this.usedTimes=0}}function NS(n,t,e,i,s,r,a){const o=new Ud,l=new IS,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,R,I,N){const $=I.fog,O=N.geometry,L=E.isMeshStandardMaterial?I.environment:null,H=(E.isMeshStandardMaterial?e:t).get(E.envMap||L),U=H&&H.mapping===Sa?H.image.height:null,Z=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const P=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=P!==void 0?P.length:0;let j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let lt,G,J,st;if(Z){const Qt=bi[Z];lt=Qt.vertexShader,G=Qt.fragmentShader}else lt=E.vertexShader,G=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),st=l.getFragmentShaderID(E);const rt=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,mt=N.isBatchedMesh===!0,re=!!E.map,Zt=!!E.matcap,Bt=!!H,F=!!E.aoMap,Oe=!!E.lightMap,zt=!!E.bumpMap,Ot=!!E.normalMap,Mt=!!E.displacementMap,Jt=!!E.emissiveMap,wt=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,et=E.iridescence>0,K=E.sheen>0,Et=E.transmission>0,ot=M&&!!E.anisotropyMap,gt=V&&!!E.clearcoatMap,$t=V&&!!E.clearcoatNormalMap,at=V&&!!E.clearcoatRoughnessMap,vt=et&&!!E.iridescenceMap,Dt=et&&!!E.iridescenceThicknessMap,Ct=K&&!!E.sheenColorMap,xt=K&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,It=!!E.specularColorMap,se=!!E.specularIntensityMap,B=Et&&!!E.transmissionMap,ut=Et&&!!E.thicknessMap,Y=!!E.gradientMap,tt=!!E.alphaMap,ft=E.alphaTest>0,dt=!!E.alphaHash,Lt=!!E.extensions;let ue=dn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=n.toneMapping);const Ae={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:lt,fragmentShader:G,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:mt,batchingColor:mt&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ps,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Zt,envMap:Bt,envMapMode:Bt&&H.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:Oe,bumpMap:zt,normalMap:Ot,displacementMap:d&&Mt,emissiveMap:Jt,normalMapObjectSpace:Ot&&E.normalMapType===Pg,normalMapTangentSpace:Ot&&E.normalMapType===Rg,metalnessMap:wt,roughnessMap:C,anisotropy:M,anisotropyMap:ot,clearcoat:V,clearcoatMap:gt,clearcoatNormalMap:$t,clearcoatRoughnessMap:at,dispersion:Q,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:K,sheenColorMap:Ct,sheenRoughnessMap:xt,specularMap:Gt,specularColorMap:It,specularIntensityMap:se,transmission:Et,transmissionMap:B,thicknessMap:ut,gradientMap:Y,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:dt,combine:E.combine,mapUv:re&&g(E.map.channel),aoMapUv:F&&g(E.aoMap.channel),lightMapUv:Oe&&g(E.lightMap.channel),bumpMapUv:zt&&g(E.bumpMap.channel),normalMapUv:Ot&&g(E.normalMap.channel),displacementMapUv:Mt&&g(E.displacementMap.channel),emissiveMapUv:Jt&&g(E.emissiveMap.channel),metalnessMapUv:wt&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:ot&&g(E.anisotropyMap.channel),clearcoatMapUv:gt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:$t&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(E.sheenRoughnessMap.channel),specularMapUv:Gt&&g(E.specularMap.channel),specularColorMapUv:It&&g(E.specularColorMap.channel),specularIntensityMapUv:se&&g(E.specularIntensityMap.channel),transmissionMapUv:B&&g(E.transmissionMap.channel),thicknessMapUv:ut&&g(E.thicknessMap.channel),alphaMapUv:tt&&g(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ot||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(re||tt),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:yt,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:Jt&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===Xe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&E.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(v(y,E),S(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const y=_[E.type];let R;if(y){const I=bi[y];R=c_.clone(I.uniforms)}else R=E.uniforms;return R}function T(E,y){let R;for(let I=0,N=u.length;I<N;I++){const $=u[I];if($.cacheKey===y){R=$,++R.usedTimes;break}}return R===void 0&&(R=new LS(n,y,E,r),u.push(R)),R}function b(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function D(E){l.remove(E)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:u,dispose:A}}function OS(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function BS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ju(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,p,_,g,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),t++,f}function o(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||BS),i.length>1&&i.sort(d||Yu),s.length>1&&s.sort(d||Yu)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function zS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new ju,n.set(i,[a])):s>=r.length?(a=new ju,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function kS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new ee};break;case"SpotLight":e={position:new q,direction:new q,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function HS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let VS=0;function GS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function WS(n){const t=new kS,e=HS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new xe,a=new xe;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,v=0,S=0,x=0,T=0,b=0,D=0;c.sort(GS);for(let E=0,y=c.length;E<y;E++){const R=c[E],I=R.color,N=R.intensity,$=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(R.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(R.sh.coefficients[L],N);D++}else if(R.isDirectionalLight){const L=t.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const H=R.shadow,U=e.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=L,p++}else if(R.isSpotLight){const L=t.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(I).multiplyScalar(N),L.distance=$,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,i.spot[g]=L;const H=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,H.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[g]=H.matrix,R.castShadow){const U=e.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=O,x++}g++}else if(R.isRectAreaLight){const L=t.get(R);L.color.copy(I).multiplyScalar(N),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=L,m++}else if(R.isPointLight){const L=t.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),L.distance=R.distance,L.decay=R.decay,R.castShadow){const H=R.shadow,U=e.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=R.shadow.matrix,S++}i.point[_]=L,_++}else if(R.isHemisphereLight){const L=t.get(R);L.skyColor.copy(R.color).multiplyScalar(N),L.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[f]=L,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==p||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==v||A.numPointShadows!==S||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,A.directionalLength=p,A.pointLength=_,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=v,A.numPointShadows=S,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=D,i.version=VS++)}function l(c,u){let h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Ku(n){const t=new WS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $S(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ku(n),t.set(s,[o])):r>=a.length?(o=new Ku(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YS(n,t,e){let i=new Gd;const s=new Wt,r=new Wt,a=new pe,o=new v_({depthPacking:Cg}),l=new x_,c={},u=e.maxTextureSize,h={[mn]:Xe,[Xe]:mn,[hi]:hi},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let f=this.type;this.render=function(b,D,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==Bi&&this.type===Bi,$=f===Bi&&this.type!==Bi;for(let O=0,L=b.length;O<L;O++){const H=b[O],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Z=U.getFrameExtents();if(s.multiply(Z),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,U.mapSize.y=r.y)),U.map===null||N===!0||$===!0){const nt=this.type!==Bi?{minFilter:Mi,magFilter:Mi}:{};U.map!==null&&U.map.dispose(),U.map=new Vn(s.x,s.y,nt),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const P=U.getViewportCount();for(let nt=0;nt<P;nt++){const j=U.getViewport(nt);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),I.viewport(a),U.updateMatrices(H,nt),i=U.getFrustum(),x(D,A,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Bi&&v(U,A),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,R)};function v(b,D){const A=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(D,null,A,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(D,null,A,p,g,null)}function S(b,D,A,E){let y=null;const R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)y=R;else if(y=A.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const I=y.uuid,N=D.uuid;let $=c[I];$===void 0&&($={},c[I]=$);let O=$[N];O===void 0&&(O=y.clone(),$[N]=O,D.addEventListener("dispose",T)),y=O}if(y.visible=D.visible,y.wireframe=D.wireframe,E===Bi?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=A}return y}function x(b,D,A,E,y){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Bi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const N=t.update(b),$=b.material;if(Array.isArray($)){const O=N.groups;for(let L=0,H=O.length;L<H;L++){const U=O[L],Z=$[U.materialIndex];if(Z&&Z.visible){const P=S(b,Z,E,y);b.onBeforeShadow(n,b,D,A,N,P,U),n.renderBufferDirect(A,null,N,P,b,U),b.onAfterShadow(n,b,D,A,N,P,U)}}}else if($.visible){const O=S(b,$,E,y);b.onBeforeShadow(n,b,D,A,N,O,null),n.renderBufferDirect(A,null,N,O,b,null),b.onAfterShadow(n,b,D,A,N,O,null)}}const I=b.children;for(let N=0,$=I.length;N<$;N++)x(I[N],D,A,E,y)}function T(b){b.target.removeEventListener("dispose",T);for(const A in c){const E=c[A],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const jS={[Wo]:$o,[Xo]:jo,[qo]:Ko,[bs]:Yo,[$o]:Wo,[jo]:Xo,[Ko]:qo,[Yo]:bs};function KS(n,t){function e(){let B=!1;const ut=new pe;let Y=null;const tt=new pe(0,0,0,0);return{setMask:function(ft){Y!==ft&&!B&&(n.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){B=ft},setClear:function(ft,dt,Lt,ue,Ae){Ae===!0&&(ft*=ue,dt*=ue,Lt*=ue),ut.set(ft,dt,Lt,ue),tt.equals(ut)===!1&&(n.clearColor(ft,dt,Lt,ue),tt.copy(ut))},reset:function(){B=!1,Y=null,tt.set(-1,0,0,0)}}}function i(){let B=!1,ut=!1,Y=null,tt=null,ft=null;return{setReversed:function(dt){if(ut!==dt){const Lt=t.get("EXT_clip_control");ut?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ft;ft=null,this.setClear(ue)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?rt(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!B&&(n.depthMask(dt),Y=dt)},setFunc:function(dt){if(ut&&(dt=jS[dt]),tt!==dt){switch(dt){case Wo:n.depthFunc(n.NEVER);break;case $o:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case jo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=dt}},setLocked:function(dt){B=dt},setClear:function(dt){ft!==dt&&(ut&&(dt=1-dt),n.clearDepth(dt),ft=dt)},reset:function(){B=!1,Y=null,tt=null,ft=null,ut=!1}}}function s(){let B=!1,ut=null,Y=null,tt=null,ft=null,dt=null,Lt=null,ue=null,Ae=null;return{setTest:function(Qt){B||(Qt?rt(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!B&&(n.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,gi,Li){(Y!==Qt||tt!==gi||ft!==Li)&&(n.stencilFunc(Qt,gi,Li),Y=Qt,tt=gi,ft=Li)},setOp:function(Qt,gi,Li){(dt!==Qt||Lt!==gi||ue!==Li)&&(n.stencilOp(Qt,gi,Li),dt=Qt,Lt=gi,ue=Li)},setLocked:function(Qt){B=Qt},setClear:function(Qt){Ae!==Qt&&(n.clearStencil(Qt),Ae=Qt)},reset:function(){B=!1,ut=null,Y=null,tt=null,ft=null,dt=null,Lt=null,ue=null,Ae=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,S=null,x=null,T=null,b=null,D=new ee(0,0,0),A=0,E=!1,y=null,R=null,I=null,N=null,$=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=H>=2);let Z=null,P={};const nt=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),lt=new pe().fromArray(nt),G=new pe().fromArray(j);function J(B,ut,Y,tt){const ft=new Uint8Array(4),dt=n.createTexture();n.bindTexture(B,dt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Y;Lt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ut+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return dt}const st={};st[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(bs),zt(!1),Ot(eu),rt(n.CULL_FACE),F(hn);function rt(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function yt(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Nt(B,ut){return h[B]!==ut?(n.bindFramebuffer(B,ut),h[B]=ut,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function mt(B,ut){let Y=p,tt=!1;if(B){Y=d.get(ut),Y===void 0&&(Y=[],d.set(ut,Y));const ft=B.textures;if(Y.length!==ft.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Lt=ft.length;dt<Lt;dt++)Y[dt]=n.COLOR_ATTACHMENT0+dt;Y.length=ft.length,tt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,tt=!0);tt&&n.drawBuffers(Y)}function re(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Zt={[Rn]:n.FUNC_ADD,[eg]:n.FUNC_SUBTRACT,[ig]:n.FUNC_REVERSE_SUBTRACT};Zt[ng]=n.MIN,Zt[sg]=n.MAX;const Bt={[rg]:n.ZERO,[ag]:n.ONE,[og]:n.SRC_COLOR,[Vo]:n.SRC_ALPHA,[fg]:n.SRC_ALPHA_SATURATE,[hg]:n.DST_COLOR,[cg]:n.DST_ALPHA,[lg]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[dg]:n.ONE_MINUS_DST_COLOR,[ug]:n.ONE_MINUS_DST_ALPHA,[pg]:n.CONSTANT_COLOR,[mg]:n.ONE_MINUS_CONSTANT_COLOR,[gg]:n.CONSTANT_ALPHA,[_g]:n.ONE_MINUS_CONSTANT_ALPHA};function F(B,ut,Y,tt,ft,dt,Lt,ue,Ae,Qt){if(B===hn){g===!0&&(yt(n.BLEND),g=!1);return}if(g===!1&&(rt(n.BLEND),g=!0),B!==tg){if(B!==m||Qt!==E){if((f!==Rn||x!==Rn)&&(n.blendEquation(n.FUNC_ADD),f=Rn,x=Rn),Qt)switch(B){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,S=null,T=null,b=null,D.set(0,0,0),A=0,m=B,E=Qt}return}ft=ft||ut,dt=dt||Y,Lt=Lt||tt,(ut!==f||ft!==x)&&(n.blendEquationSeparate(Zt[ut],Zt[ft]),f=ut,x=ft),(Y!==v||tt!==S||dt!==T||Lt!==b)&&(n.blendFuncSeparate(Bt[Y],Bt[tt],Bt[dt],Bt[Lt]),v=Y,S=tt,T=dt,b=Lt),(ue.equals(D)===!1||Ae!==A)&&(n.blendColor(ue.r,ue.g,ue.b,Ae),D.copy(ue),A=Ae),m=B,E=!1}function Oe(B,ut){B.side===hi?yt(n.CULL_FACE):rt(n.CULL_FACE);let Y=B.side===Xe;ut&&(Y=!Y),zt(Y),B.blending===_s&&B.transparent===!1?F(hn):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const tt=B.stencilWrite;o.setTest(tt),tt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Jt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(B){y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),y=B)}function Ot(B){B!==Zm?(rt(n.CULL_FACE),B!==R&&(B===eu?n.cullFace(n.BACK):B===Jm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),R=B}function Mt(B){B!==I&&(L&&n.lineWidth(B),I=B)}function Jt(B,ut,Y){B?(rt(n.POLYGON_OFFSET_FILL),(N!==ut||$!==Y)&&(n.polygonOffset(ut,Y),N=ut,$=Y)):yt(n.POLYGON_OFFSET_FILL)}function wt(B){B?rt(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+O-1),Z!==B&&(n.activeTexture(B),Z=B)}function M(B,ut,Y){Y===void 0&&(Z===null?Y=n.TEXTURE0+O-1:Y=Z);let tt=P[Y];tt===void 0&&(tt={type:void 0,texture:void 0},P[Y]=tt),(tt.type!==B||tt.texture!==ut)&&(Z!==Y&&(n.activeTexture(Y),Z=Y),n.bindTexture(B,ut||st[B]),tt.type=B,tt.texture=ut)}function V(){const B=P[Z];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(B){lt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),lt.copy(B))}function xt(B){G.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),G.copy(B))}function Gt(B,ut){let Y=c.get(ut);Y===void 0&&(Y=new WeakMap,c.set(ut,Y));let tt=Y.get(B);tt===void 0&&(tt=n.getUniformBlockIndex(ut,B.name),Y.set(B,tt))}function It(B,ut){const tt=c.get(ut).get(B);l.get(ut)!==tt&&(n.uniformBlockBinding(ut,tt,B.__bindingPointIndex),l.set(ut,tt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,P={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,S=null,x=null,T=null,b=null,D=new ee(0,0,0),A=0,E=!1,y=null,R=null,I=null,N=null,$=null,lt.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:yt,bindFramebuffer:Nt,drawBuffers:mt,useProgram:re,setBlending:F,setMaterial:Oe,setFlipSided:zt,setCullFace:Ot,setLineWidth:Mt,setPolygonOffset:Jt,setScissorTest:wt,activeTexture:C,bindTexture:M,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:vt,texImage3D:Dt,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:$t,texStorage3D:at,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:ot,compressedTexSubImage3D:gt,scissor:Ct,viewport:xt,reset:se}}function ZS(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function _(C,M){return p?new OffscreenCanvas(C,M):cr("canvas")}function g(C,M,V){let Q=1;const et=wt(C);if((et.width>V||et.height>V)&&(Q=V/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const K=Math.floor(Q*et.width),Et=Math.floor(Q*et.height);h===void 0&&(h=_(K,Et));const ot=M?_(K,Et):h;return ot.width=K,ot.height=Et,ot.getContext("2d").drawImage(C,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Et+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,M,V,Q,et=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=M;if(M===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),M===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),M===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),M===n.RGBA){const Et=et?pa:Yt.getTransfer(Q);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=Et===te?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(C,M){let V;return C?M===null||M===Hn||M===Cs?V=n.DEPTH24_STENCIL8:M===Hi?V=n.DEPTH32F_STENCIL8:M===lr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hn||M===Cs?V=n.DEPTH_COMPONENT24:M===Hi?V=n.DEPTH_COMPONENT32F:M===lr&&(V=n.DEPTH_COMPONENT16),V}function T(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mi&&C.minFilter!==we?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&u.delete(M)}function D(C){const M=C.target;M.removeEventListener("dispose",D),y(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,Q=d.get(V);if(Q){const et=Q[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(C),Object.keys(Q).length===0&&d.delete(V)}i.remove(C)}function E(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const V=C.source,Q=d.get(V);delete Q[M.__cacheKey],a.memory.textures--}function y(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let et=0;et<M.__webglFramebuffer[Q].length;et++)n.deleteFramebuffer(M.__webglFramebuffer[Q][et]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let Q=0,et=V.length;Q<et;Q++){const K=i.get(V[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(V[Q])}i.remove(C)}let R=0;function I(){R=0}function N(){const C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function $(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function O(C,M){const V=i.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,C,M);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function L(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){G(V,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function H(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){G(V,C,M);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function U(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const Z={[Qo]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},P={[Mi]:n.NEAREST,[Dg]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[we]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},nt={[Lg]:n.NEVER,[Bg]:n.ALWAYS,[Fg]:n.LESS,[Pd]:n.LEQUAL,[Ig]:n.EQUAL,[Og]:n.GEQUAL,[Ug]:n.GREATER,[Ng]:n.NOTEQUAL};function j(C,M){if(M.type===Hi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===we||M.magFilter===Ba||M.magFilter===Dr||M.magFilter===In||M.minFilter===we||M.minFilter===Ba||M.minFilter===Dr||M.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Z[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Z[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Z[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,P[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,nt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mi||M.minFilter!==Dr&&M.minFilter!==In||M.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function lt(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const K=$(M);if(K!==C.__cacheKey){et[K]===void 0&&(et[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[K].usedTimes++;const Et=et[C.__cacheKey];Et!==void 0&&(et[C.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),C.__cacheKey=K,C.__webglTexture=et[K].texture}return V}function G(C,M,V){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const et=lt(C,M),K=M.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+V);const Et=i.get(K);if(K.version!==Et.__version||et===!0){e.activeTexture(n.TEXTURE0+V);const ot=Yt.getPrimaries(Yt.workingColorSpace),gt=M.colorSpace===rn?null:Yt.getPrimaries(M.colorSpace),$t=M.colorSpace===rn||ot===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let at=g(M.image,!1,s.maxTextureSize);at=Jt(M,at);const vt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Ct=S(M.internalFormat,vt,Dt,M.colorSpace,M.isVideoTexture);j(Q,M);let xt;const Gt=M.mipmaps,It=M.isVideoTexture!==!0,se=Et.__version===void 0||et===!0,B=K.dataReady,ut=T(M,at);if(M.isDepthTexture)Ct=x(M.format===Rs,M.type),se&&(It?e.texStorage2D(n.TEXTURE_2D,1,Ct,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ct,at.width,at.height,0,vt,Dt,null));else if(M.isDataTexture)if(Gt.length>0){It&&se&&e.texStorage2D(n.TEXTURE_2D,ut,Ct,Gt[0].width,Gt[0].height);for(let Y=0,tt=Gt.length;Y<tt;Y++)xt=Gt[Y],It?B&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Dt,xt.data):e.texImage2D(n.TEXTURE_2D,Y,Ct,xt.width,xt.height,0,vt,Dt,xt.data);M.generateMipmaps=!1}else It?(se&&e.texStorage2D(n.TEXTURE_2D,ut,Ct,at.width,at.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,vt,Dt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,at.width,at.height,0,vt,Dt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Gt[0].width,Gt[0].height,at.depth);for(let Y=0,tt=Gt.length;Y<tt;Y++)if(xt=Gt[Y],M.format!==yi)if(vt!==null)if(It){if(B)if(M.layerUpdates.size>0){const ft=bu(xt.width,xt.height,M.format,M.type);for(const dt of M.layerUpdates){const Lt=xt.data.subarray(dt*ft/xt.data.BYTES_PER_ELEMENT,(dt+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,dt,xt.width,xt.height,1,vt,Lt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,at.depth,vt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ct,xt.width,xt.height,at.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,at.depth,vt,Dt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ct,xt.width,xt.height,at.depth,0,vt,Dt,xt.data)}else{It&&se&&e.texStorage2D(n.TEXTURE_2D,ut,Ct,Gt[0].width,Gt[0].height);for(let Y=0,tt=Gt.length;Y<tt;Y++)xt=Gt[Y],M.format!==yi?vt!==null?It?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Ct,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?B&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Dt,xt.data):e.texImage2D(n.TEXTURE_2D,Y,Ct,xt.width,xt.height,0,vt,Dt,xt.data)}else if(M.isDataArrayTexture)if(It){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ct,at.width,at.height,at.depth),B)if(M.layerUpdates.size>0){const Y=bu(at.width,at.height,M.format,M.type);for(const tt of M.layerUpdates){const ft=at.data.subarray(tt*Y/at.data.BYTES_PER_ELEMENT,(tt+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,vt,Dt,ft)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Dt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,at.width,at.height,at.depth,0,vt,Dt,at.data);else if(M.isData3DTexture)It?(se&&e.texStorage3D(n.TEXTURE_3D,ut,Ct,at.width,at.height,at.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Dt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,at.width,at.height,at.depth,0,vt,Dt,at.data);else if(M.isFramebufferTexture){if(se)if(It)e.texStorage2D(n.TEXTURE_2D,ut,Ct,at.width,at.height);else{let Y=at.width,tt=at.height;for(let ft=0;ft<ut;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ct,Y,tt,0,vt,Dt,null),Y>>=1,tt>>=1}}else if(Gt.length>0){if(It&&se){const Y=wt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Ct,Y.width,Y.height)}for(let Y=0,tt=Gt.length;Y<tt;Y++)xt=Gt[Y],It?B&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,vt,Dt,xt):e.texImage2D(n.TEXTURE_2D,Y,Ct,vt,Dt,xt);M.generateMipmaps=!1}else if(It){if(se){const Y=wt(at);e.texStorage2D(n.TEXTURE_2D,ut,Ct,Y.width,Y.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Dt,at)}else e.texImage2D(n.TEXTURE_2D,0,Ct,vt,Dt,at);m(M)&&f(Q),Et.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,V){if(M.image.length!==6)return;const Q=lt(C,M),et=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const K=i.get(et);if(et.version!==K.__version||Q===!0){e.activeTexture(n.TEXTURE0+V);const Et=Yt.getPrimaries(Yt.workingColorSpace),ot=M.colorSpace===rn?null:Yt.getPrimaries(M.colorSpace),gt=M.colorSpace===rn||Et===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!$t&&!at?vt[tt]=g(M.image[tt],!0,s.maxCubemapSize):vt[tt]=at?M.image[tt].image:M.image[tt],vt[tt]=Jt(M,vt[tt]);const Dt=vt[0],Ct=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Gt=S(M.internalFormat,Ct,xt,M.colorSpace),It=M.isVideoTexture!==!0,se=K.__version===void 0||Q===!0,B=et.dataReady;let ut=T(M,Dt);j(n.TEXTURE_CUBE_MAP,M);let Y;if($t){It&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Gt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){Y=vt[tt].mipmaps;for(let ft=0;ft<Y.length;ft++){const dt=Y[ft];M.format!==yi?Ct!==null?It?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,dt.width,dt.height,Ct,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,dt.width,dt.height,Ct,xt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Gt,dt.width,dt.height,0,Ct,xt,dt.data)}}}else{if(Y=M.mipmaps,It&&se){Y.length>0&&ut++;const tt=wt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){It?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Ct,xt,vt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,vt[tt].width,vt[tt].height,0,Ct,xt,vt[tt].data);for(let ft=0;ft<Y.length;ft++){const Lt=Y[ft].image[tt].image;It?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Lt.width,Lt.height,Ct,xt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Gt,Lt.width,Lt.height,0,Ct,xt,Lt.data)}}else{It?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct,xt,vt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,Ct,xt,vt[tt]);for(let ft=0;ft<Y.length;ft++){const dt=Y[ft];It?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Ct,xt,dt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Gt,Ct,xt,dt.image[tt])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),K.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function st(C,M,V,Q,et,K){const Et=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),gt=S(V.internalFormat,Et,ot,V.colorSpace),$t=i.get(M),at=i.get(V);if(at.__renderTarget=M,!$t.__hasExternalTextures){const vt=Math.max(1,M.width>>K),Dt=Math.max(1,M.height>>K);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,K,gt,vt,Dt,M.depth,0,Et,ot,null):e.texImage2D(et,K,gt,vt,Dt,0,Et,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Ot(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,at.__webglTexture,0,zt(M)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,at.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(C,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,K=x(M.stencilBuffer,et),Et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=zt(M);Ot(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,K,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,C)}else{const Q=M.textures;for(let et=0;et<Q.length;et++){const K=Q[et],Et=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),gt=S(K.internalFormat,Et,ot,K.colorSpace),$t=zt(M);V&&Ot(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,gt,M.width,M.height):Ot(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t,gt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,gt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const et=Q.__webglTexture,K=zt(M);if(M.depthTexture.format===vs)Ot(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===Rs)Ot(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Nt(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");yt(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),rt(M.__webglDepthbuffer[Q],C,!1);else{const et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),rt(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,M,V){const Q=i.get(C);M!==void 0&&st(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Nt(C)}function re(C){const M=C.texture,V=i.get(C),Q=i.get(M);C.addEventListener("dispose",D);const et=C.textures,K=C.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let gt=0;gt<M.mipmaps.length;gt++)V.__webglFramebuffer[ot][gt]=n.createFramebuffer()}else V.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)V.__webglFramebuffer[ot]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ot=0,gt=et.length;ot<gt;ot++){const $t=i.get(et[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ot(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){const gt=et[ot];V.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);const $t=r.convert(gt.format,gt.colorSpace),at=r.convert(gt.type),vt=S(gt.internalFormat,$t,at,gt.colorSpace,C.isXRRenderTarget===!0),Dt=zt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,vt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),j(n.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)st(V.__webglFramebuffer[ot][gt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else st(V.__webglFramebuffer[ot],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,gt=et.length;ot<gt;ot++){const $t=et[ot],at=i.get($t);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),j(n.TEXTURE_2D,$t),st(V.__webglFramebuffer,C,$t,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m($t)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),j(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)st(V.__webglFramebuffer[gt],C,M,n.COLOR_ATTACHMENT0,ot,gt);else st(V.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,ot,0);m(M)&&f(ot),e.unbindTexture()}C.depthBuffer&&Nt(C)}function Zt(C){const M=C.textures;for(let V=0,Q=M.length;V<Q;V++){const et=M[V];if(m(et)){const K=v(C),Et=i.get(et).__webglTexture;e.bindTexture(K,Et),f(K),e.unbindTexture()}}}const Bt=[],F=[];function Oe(C){if(C.samples>0){if(Ot(C)===!1){const M=C.textures,V=C.width,Q=C.height;let et=n.COLOR_BUFFER_BIT;const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(C),ot=M.length>1;if(ot)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const $t=i.get(M[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,et,n.NEAREST),l===!0&&(Bt.length=0,F.length=0,Bt.push(n.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Bt.push(K),F.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const $t=i.get(M[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Ot(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Jt(C,M){const V=C.colorSpace,Q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ps&&V!==rn&&(Yt.getTransfer(V)===te?(Q!==yi||et!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function wt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=mt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ot}function JS(n,t){function e(i,s=rn){let r;const a=Yt.getTransfer(s);if(i===Xi)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return n.BYTE;if(i===yd)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===fr)return n.HALF_FLOAT;if(i===wd)return n.ALPHA;if(i===Td)return n.RGB;if(i===yi)return n.RGBA;if(i===bd)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===vs)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===Ad)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===Cd)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===sc)return n.RGBA_INTEGER;if(i===Qr||i===ta||i===ea||i===ia)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===el||i===il||i===nl||i===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===al||i===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===al)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ol)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===yl||i===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===wl||i===Tl||i===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:QS,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mi(new $n(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iE extends Is{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=new eE,m=e.getContextAttributes();let f=null,v=null;const S=[],x=[],T=new Wt;let b=null;const D=new ui;D.viewport=new pe;const A=new ui;A.viewport=new pe;const E=[D,A],y=new w_;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=S[G];return J===void 0&&(J=new ao,S[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=S[G];return J===void 0&&(J=new ao,S[G]=J),J.getGripSpace()},this.getHand=function(G){let J=S[G];return J===void 0&&(J=new ao,S[G]=J),J.getHandSpace()};function N(G){const J=x.indexOf(G.inputSource);if(J===-1)return;const st=S[J];st!==void 0&&(st.update(G.inputSource,G.frame,c||a),st.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",O);for(let G=0;G<S.length;G++){const J=x[G];J!==null&&(x[G]=null,S[G].disconnect(J))}R=null,I=null,g.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,v=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",$),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,rt=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Rs:vs,rt=m.stencil?Cs:Hn);const Nt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:yi,type:Xi,depthTexture:new $d(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(G){for(let J=0;J<G.removed.length;J++){const st=G.removed[J],rt=x.indexOf(st);rt>=0&&(x[rt]=null,S[rt].disconnect(st))}for(let J=0;J<G.added.length;J++){const st=G.added[J];let rt=x.indexOf(st);if(rt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=x.length){x.push(st),rt=Nt;break}else if(x[Nt]===null){x[Nt]=st,rt=Nt;break}if(rt===-1)break}const yt=S[rt];yt&&yt.connect(st)}}const L=new q,H=new q;function U(G,J,st){L.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(st.matrixWorld);const rt=L.distanceTo(H),yt=J.projectionMatrix.elements,Nt=st.projectionMatrix.elements,mt=yt[14]/(yt[10]-1),re=yt[14]/(yt[10]+1),Zt=(yt[9]+1)/yt[5],Bt=(yt[9]-1)/yt[5],F=(yt[8]-1)/yt[0],Oe=(Nt[8]+1)/Nt[0],zt=mt*F,Ot=mt*Oe,Mt=rt/(-F+Oe),Jt=Mt*-F;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Jt),G.translateZ(Mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),yt[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const wt=mt+Mt,C=re+Mt,M=zt-Jt,V=Ot+(rt-Jt),Q=Zt*re/C*wt,et=Bt*re/C*wt;G.projectionMatrix.makePerspective(M,V,Q,et,wt,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Z(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,st=G.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(st=g.depthFar)),y.near=A.near=D.near=J,y.far=A.far=D.far=st,(R!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,I=y.far),D.layers.mask=G.layers.mask|2,A.layers.mask=G.layers.mask|4,y.layers.mask=D.layers.mask|A.layers.mask;const rt=G.parent,yt=y.cameras;Z(y,rt);for(let Nt=0;Nt<yt.length;Nt++)Z(yt[Nt],rt);yt.length===2?U(y,D,A):y.projectionMatrix.copy(D.projectionMatrix),P(G,y,rt)};function P(G,J,st){st===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(st.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Dl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let nt=null;function j(G,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const st=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let rt=!1;st.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let mt=0;mt<st.length;mt++){const re=st[mt];let Zt=null;if(p!==null)Zt=p.getViewport(re);else{const F=h.getViewSubImage(d,re);Zt=F.viewport,mt===0&&(t.setRenderTargetTextures(v,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(v))}let Bt=E[mt];Bt===void 0&&(Bt=new ui,Bt.layers.enable(mt),Bt.viewport=new pe,E[mt]=Bt),Bt.matrix.fromArray(re.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(re.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),mt===0&&(y.matrix.copy(Bt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Bt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const mt=h.getDepthInformation(st[0]);mt&&mt.isValid&&mt.texture&&g.init(t,mt,s.renderState)}}for(let st=0;st<S.length;st++){const rt=x[st],yt=S[st];rt!==null&&yt!==void 0&&yt.update(rt,J,c||a)}nt&&nt(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const lt=new Xd;lt.setAnimationLoop(j),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}}const bn=new qi,nE=new xe;function sE(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,bn.copy(x),bn.x*=-1,bn.y*=-1,bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),m.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(bn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rE(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const x=S.program;i.uniformBlockBinding(v,x)}function c(v,S){let x=s[v.id];x===void 0&&(_(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const T=S.program;i.updateUBOMapping(v,T);const b=t.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){const S=h();v.__bindingPointIndex=S;const x=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,D=x.length;b<D;b++){const A=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,y=A.length;E<y;E++){const R=A[E];if(p(R,b,E,T)===!0){const I=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let O=0;O<N.length;O++){const L=N[O],H=g(L);typeof L=="number"||typeof L=="boolean"?(R.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,I+$,R.__data)):L.isMatrix3?(R.__data[0]=L.elements[0],R.__data[1]=L.elements[1],R.__data[2]=L.elements[2],R.__data[3]=0,R.__data[4]=L.elements[3],R.__data[5]=L.elements[4],R.__data[6]=L.elements[5],R.__data[7]=0,R.__data[8]=L.elements[6],R.__data[9]=L.elements[7],R.__data[10]=L.elements[8],R.__data[11]=0):(L.toArray(R.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,S,x,T){const b=v.value,D=S+"_"+x;if(T[D]===void 0)return typeof b=="number"||typeof b=="boolean"?T[D]=b:T[D]=b.clone(),!0;{const A=T[D];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[D]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function _(v){const S=v.uniforms;let x=0;const T=16;for(let D=0,A=S.length;D<A;D++){const E=Array.isArray(S[D])?S[D]:[S[D]];for(let y=0,R=E.length;y<R;y++){const I=E[y],N=Array.isArray(I.value)?I.value:[I.value];for(let $=0,O=N.length;$<O;$++){const L=N[$],H=g(L),U=x%T,Z=U%H.boundary,P=U+Z;x+=Z,P!==0&&T-P<H.storage&&(x+=T-P),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=H.storage}}}const b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function g(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class aE{constructor(t={}){const{canvas:e=kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const v=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=dn,this.toneMappingExposure=1;const x=this;let T=!1,b=0,D=0,A=null,E=-1,y=null;const R=new pe,I=new pe;let N=null;const $=new ee(0);let O=0,L=e.width,H=e.height,U=1,Z=null,P=null;const nt=new pe(0,0,L,H),j=new pe(0,0,L,H);let lt=!1;const G=new Gd;let J=!1,st=!1;this.transmissionResolutionScale=1;const rt=new xe,yt=new xe,Nt=new q,mt=new pe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Bt(){return A===null?U:1}let F=i;function Oe(w,z){return e.getContext(w,z)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const z="webgl2";if(F=Oe(z,w),F===null)throw Oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Ot,Mt,Jt,wt,C,M,V,Q,et,K,Et,ot,gt,$t,at,vt,Dt,Ct,xt,Gt,It,se,B;function ut(){zt=new gx(F),zt.init(),It=new JS(F,zt),Ot=new ux(F,zt,t,It),Mt=new KS(F,zt),Ot.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Jt=new xx(F),wt=new OS,C=new ZS(F,zt,Mt,wt,Ot,It,Jt),M=new dx(x),V=new mx(x),Q=new b_(F),se=new lx(F,Q),et=new _x(F,Q,Jt,se),K=new Ex(F,et,Q,Jt),Ct=new Sx(F,Ot,C),at=new hx(wt),Et=new NS(x,M,V,zt,Ot,se,at),ot=new sE(x,wt),gt=new zS,$t=new $S(zt),Dt=new ox(x,M,V,Mt,K,p,l),vt=new YS(x,K,Ot),B=new rE(F,Jt,Ot,Mt),xt=new cx(F,zt,Jt),Gt=new vx(F,zt,Jt),Jt.programs=Et.programs,x.capabilities=Ot,x.extensions=zt,x.properties=wt,x.renderLists=gt,x.shadowMap=vt,x.state=Mt,x.info=Jt}ut();const Y=new iE(x,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(L,H,!1))},this.getSize=function(w){return w.set(L,H)},this.setSize=function(w,z,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,H=z,e.width=Math.floor(w*U),e.height=Math.floor(z*U),W===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(L*U,H*U).floor()},this.setDrawingBufferSize=function(w,z,W){L=w,H=z,U=W,e.width=Math.floor(w*W),e.height=Math.floor(z*W),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,z,W,X){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,z,W,X),Mt.viewport(R.copy(nt).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,z,W,X){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,z,W,X),Mt.scissor(I.copy(j).multiplyScalar(U).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){Mt.setScissorTest(lt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,z=!0,W=!0){let X=0;if(w){let k=!1;if(A!==null){const it=A.texture.format;k=it===sc||it===nc||it===ic}if(k){const it=A.texture.type,ht=it===Xi||it===Hn||it===lr||it===Cs||it===tc||it===ec,_t=Dt.getClearColor(),St=Dt.getClearAlpha(),Rt=_t.r,Pt=_t.g,Tt=_t.b;ht?(_[0]=Rt,_[1]=Pt,_[2]=Tt,_[3]=St,F.clearBufferuiv(F.COLOR,0,_)):(g[0]=Rt,g[1]=Pt,g[2]=Tt,g[3]=St,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Dt.dispose(),gt.dispose(),$t.dispose(),wt.dispose(),M.dispose(),V.dispose(),K.dispose(),se.dispose(),B.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",uc),Y.removeEventListener("sessionend",hc),_n.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Jt.autoReset,z=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,k=vt.type;ut(),Jt.autoReset=w,vt.enabled=z,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=k}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){const z=w.target;z.removeEventListener("dispose",Lt),ue(z)}function ue(w){Ae(w),wt.remove(w)}function Ae(w){const z=wt.get(w).programs;z!==void 0&&(z.forEach(function(W){Et.releaseProgram(W)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,W,X,k,it){z===null&&(z=re);const ht=k.isMesh&&k.matrixWorld.determinant()<0,_t=nf(w,z,W,X,k);Mt.setMaterial(X,ht);let St=W.index,Rt=1;if(X.wireframe===!0){if(St=et.getWireframeAttribute(W),St===void 0)return;Rt=2}const Pt=W.drawRange,Tt=W.attributes.position;let Xt=Pt.start*Rt,jt=(Pt.start+Pt.count)*Rt;it!==null&&(Xt=Math.max(Xt,it.start*Rt),jt=Math.min(jt,(it.start+it.count)*Rt)),St!==null?(Xt=Math.max(Xt,0),jt=Math.min(jt,St.count)):Tt!=null&&(Xt=Math.max(Xt,0),jt=Math.min(jt,Tt.count));const me=jt-Xt;if(me<0||me===1/0)return;se.setup(k,X,_t,W,St);let he,qt=xt;if(St!==null&&(he=Q.get(St),qt=Gt,qt.setIndex(he)),k.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*Bt()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(k.isLine){let bt=X.linewidth;bt===void 0&&(bt=1),Mt.setLineWidth(bt*Bt()),k.isLineSegments?qt.setMode(F.LINES):k.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else k.isPoints?qt.setMode(F.POINTS):k.isSprite&&qt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)qt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const bt=k._multiDrawStarts,be=k._multiDrawCounts,Kt=k._multiDrawCount,_i=St?Q.get(St).bytesPerElement:1,Xn=wt.get(X).currentProgram.getUniforms();for(let Ye=0;Ye<Kt;Ye++)Xn.setValue(F,"_gl_DrawID",Ye),qt.render(bt[Ye]/_i,be[Ye])}else if(k.isInstancedMesh)qt.renderInstances(Xt,me,k.count);else if(W.isInstancedBufferGeometry){const bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,bt);qt.renderInstances(Xt,me,be)}else qt.render(Xt,me)};function Qt(w,z,W){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,xr(w,z,W),w.side=mn,w.needsUpdate=!0,xr(w,z,W),w.side=hi):xr(w,z,W)}this.compile=function(w,z,W=null){W===null&&(W=w),f=$t.get(W),f.init(z),S.push(f),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const it=k.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const _t=it[ht];Qt(_t,W,k),X.add(_t)}else Qt(it,W,k),X.add(it)}),S.pop(),f=null,X},this.compileAsync=function(w,z,W=null){const X=this.compile(w,z,W);return new Promise(k=>{function it(){if(X.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&X.delete(ht)}),X.size===0){k(w);return}setTimeout(it,10)}zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let gi=null;function Li(w){gi&&gi(w)}function uc(){_n.stop()}function hc(){_n.start()}const _n=new Xd;_n.setAnimationLoop(Li),typeof self!="undefined"&&_n.setContext(self),this.setAnimationLoop=function(w){gi=w,Y.setAnimationLoop(w),w===null?_n.stop():_n.start()},Y.addEventListener("sessionstart",uc),Y.addEventListener("sessionend",hc),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,z,A),f=$t.get(w,S.length),f.init(z),S.push(f),yt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(yt),st=this.localClippingEnabled,J=at.init(this.clippingPlanes,st),m=gt.get(w,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&wa(it,z,-1/0,x.sortObjects)}wa(w,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Z,P),Zt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Zt&&Dt.addToRenderList(m,w),this.info.render.frame++,J===!0&&at.beginShadows();const W=f.state.shadowsArray;vt.render(W,w,z),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(f.setupLights(),z.isArrayCamera){const it=z.cameras;if(k.length>0)for(let ht=0,_t=it.length;ht<_t;ht++){const St=it[ht];fc(X,k,w,St)}Zt&&Dt.render(w);for(let ht=0,_t=it.length;ht<_t;ht++){const St=it[ht];dc(m,w,St,St.viewport)}}else k.length>0&&fc(X,k,w,z),Zt&&Dt.render(w),dc(m,w,z);A!==null&&D===0&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,z),se.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],J===!0&&at.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function wa(w,z,W,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){X&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);const ht=K.update(w),_t=w.material;_t.visible&&m.push(w,ht,_t,W,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const ht=K.update(w),_t=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),mt.copy(ht.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(_t)){const St=ht.groups;for(let Rt=0,Pt=St.length;Rt<Pt;Rt++){const Tt=St[Rt],Xt=_t[Tt.materialIndex];Xt&&Xt.visible&&m.push(w,ht,Xt,W,mt.z,Tt)}}else _t.visible&&m.push(w,ht,_t,W,mt.z,null)}}const it=w.children;for(let ht=0,_t=it.length;ht<_t;ht++)wa(it[ht],z,W,X)}function dc(w,z,W,X){const k=w.opaque,it=w.transmissive,ht=w.transparent;f.setupLightsView(W),J===!0&&at.setGlobalState(x.clippingPlanes,W),X&&Mt.viewport(R.copy(X)),k.length>0&&vr(k,z,W),it.length>0&&vr(it,z,W),ht.length>0&&vr(ht,z,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function fc(w,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Vn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?fr:Xi,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const it=f.state.transmissionRenderTarget[X.id],ht=X.viewport||R;it.setSize(ht.z*x.transmissionResolutionScale,ht.w*x.transmissionResolutionScale);const _t=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor($),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Dt.render(W);const St=x.toneMapping;x.toneMapping=dn;const Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),J===!0&&at.setGlobalState(x.clippingPlanes,X),vr(w,W,X),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Tt=0,Xt=z.length;Tt<Xt;Tt++){const jt=z[Tt],me=jt.object,he=jt.geometry,qt=jt.material,bt=jt.group;if(qt.side===hi&&me.layers.test(X.layers)){const be=qt.side;qt.side=Xe,qt.needsUpdate=!0,pc(me,W,X,he,qt,bt),qt.side=be,qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}x.setRenderTarget(_t),x.setClearColor($,O),Rt!==void 0&&(X.viewport=Rt),x.toneMapping=St}function vr(w,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,it=w.length;k<it;k++){const ht=w[k],_t=ht.object,St=ht.geometry,Rt=X===null?ht.material:X,Pt=ht.group;_t.layers.test(W.layers)&&pc(_t,z,W,St,Rt,Pt)}}function pc(w,z,W,X,k,it){w.onBeforeRender(x,z,W,X,k,it),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,z,W,X,w,it),k.transparent===!0&&k.side===hi&&k.forceSinglePass===!1?(k.side=Xe,k.needsUpdate=!0,x.renderBufferDirect(W,z,X,k,w,it),k.side=mn,k.needsUpdate=!0,x.renderBufferDirect(W,z,X,k,w,it),k.side=hi):x.renderBufferDirect(W,z,X,k,w,it),w.onAfterRender(x,z,W,X,k,it)}function xr(w,z,W){z.isScene!==!0&&(z=re);const X=wt.get(w),k=f.state.lights,it=f.state.shadowsArray,ht=k.state.version,_t=Et.getParameters(w,k.state,it,z,W),St=Et.getProgramCacheKey(_t);let Rt=X.programs;X.environment=w.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(w.isMeshStandardMaterial?V:M).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Lt),Rt=new Map,X.programs=Rt);let Pt=Rt.get(St);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===ht)return gc(w,_t),Pt}else _t.uniforms=Et.getUniforms(w),w.onBeforeCompile(_t,x),Pt=Et.acquireProgram(_t,St),Rt.set(St,Pt),X.uniforms=_t.uniforms;const Tt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=at.uniform),gc(w,_t),X.needsLights=rf(w),X.lightsStateVersion=ht,X.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function mc(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=sa.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function gc(w,z){const W=wt.get(w);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function nf(w,z,W,X,k){z.isScene!==!0&&(z=re),C.resetTextureUnits();const it=z.fog,ht=X.isMeshStandardMaterial?z.environment:null,_t=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ps,St=(X.isMeshStandardMaterial?V:M).get(X.envMap||ht),Rt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,jt=!!W.morphAttributes.color;let me=dn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=x.toneMapping);const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qt=he!==void 0?he.length:0,bt=wt.get(X),be=f.state.lights;if(J===!0&&(st===!0||w!==y)){const Ie=w===y&&X.id===E;at.setState(X,w,Ie)}let Kt=!1;X.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==be.state.version||bt.outputColorSpace!==_t||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==St||X.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==at.numPlanes||bt.numIntersection!==at.numIntersection)||bt.vertexAlphas!==Rt||bt.vertexTangents!==Pt||bt.morphTargets!==Tt||bt.morphNormals!==Xt||bt.morphColors!==jt||bt.toneMapping!==me||bt.morphTargetsCount!==qt)&&(Kt=!0):(Kt=!0,bt.__version=X.version);let _i=bt.currentProgram;Kt===!0&&(_i=xr(X,z,k));let Xn=!1,Ye=!1,Ns=!1;const ae=_i.getUniforms(),ri=bt.uniforms;if(Mt.useProgram(_i.program)&&(Xn=!0,Ye=!0,Ns=!0),X.id!==E&&(E=X.id,Ye=!0),Xn||y!==w){Mt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),Vg(rt),Gg(rt),ae.setValue(F,"projectionMatrix",rt)):ae.setValue(F,"projectionMatrix",w.projectionMatrix),ae.setValue(F,"viewMatrix",w.matrixWorldInverse);const Be=ae.map.cameraPosition;Be!==void 0&&Be.setValue(F,Nt.setFromMatrixPosition(w.matrixWorld)),Ot.logarithmicDepthBuffer&&ae.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ae.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ye=!0,Ns=!0)}if(k.isSkinnedMesh){ae.setOptional(F,k,"bindMatrix"),ae.setOptional(F,k,"bindMatrixInverse");const Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ae.setValue(F,"boneTexture",Ie.boneTexture,C))}k.isBatchedMesh&&(ae.setOptional(F,k,"batchingTexture"),ae.setValue(F,"batchingTexture",k._matricesTexture,C),ae.setOptional(F,k,"batchingIdTexture"),ae.setValue(F,"batchingIdTexture",k._indirectTexture,C),ae.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ae.setValue(F,"batchingColorTexture",k._colorsTexture,C));const ai=W.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ct.update(k,W,_i),(Ye||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,ae.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ri.envMap.value=St,ri.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(ri.envMapIntensity.value=z.environmentIntensity),Ye&&(ae.setValue(F,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&sf(ri,Ns),it&&X.fog===!0&&ot.refreshFogUniforms(ri,it),ot.refreshMaterialUniforms(ri,X,U,H,f.state.transmissionRenderTarget[w.id]),sa.upload(F,mc(bt),ri,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(sa.upload(F,mc(bt),ri,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ae.setValue(F,"center",k.center),ae.setValue(F,"modelViewMatrix",k.modelViewMatrix),ae.setValue(F,"normalMatrix",k.normalMatrix),ae.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ie=X.uniformsGroups;for(let Be=0,Ta=Ie.length;Be<Ta;Be++){const vn=Ie[Be];B.update(vn,_i),B.bind(vn,_i)}}return _i}function sf(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function rf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,W){wt.get(w.texture).__webglTexture=z,wt.get(w.depthTexture).__webglTexture=W;const X=wt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const W=wt.get(w);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const af=F.createFramebuffer();this.setRenderTarget=function(w,z=0,W=0){A=w,b=z,D=W;let X=!0,k=null,it=!1,ht=!1;if(w){const St=wt.get(w);if(St.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(St.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&wt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ht=!0);const Pt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[z])?k=Pt[z][W]:k=Pt[z],it=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?k=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[W]:k=Pt,R.copy(w.viewport),I.copy(w.scissor),N=w.scissorTest}else R.copy(nt).multiplyScalar(U).floor(),I.copy(j).multiplyScalar(U).floor(),N=lt;if(W!==0&&(k=af),Mt.bindFramebuffer(F.FRAMEBUFFER,k)&&X&&Mt.drawBuffers(w,k),Mt.viewport(R),Mt.scissor(I),Mt.setScissorTest(N),it){const St=wt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,St.__webglTexture,W)}else if(ht){const St=wt.get(w.texture),Rt=z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,W,Rt)}else if(w!==null&&W!==0){const St=wt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(w,z,W,X,k,it,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Mt.bindFramebuffer(F.FRAMEBUFFER,_t);try{const St=w.texture,Rt=St.format,Pt=St.type;if(!Ot.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&W>=0&&W<=w.height-k&&F.readPixels(z,W,X,k,It.convert(Rt),It.convert(Pt),it)}finally{const St=A!==null?wt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(w,z,W,X,k,it,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const St=w.texture,Rt=St.format,Pt=St.type;if(!Ot.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-X&&W>=0&&W<=w.height-k){Mt.bindFramebuffer(F.FRAMEBUFFER,_t);const Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(z,W,X,k,It.convert(Rt),It.convert(Pt),0);const Xt=A!==null?wt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,Xt);const jt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hg(F,jt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(Tt),F.deleteSync(jt),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,W=0){w.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(w.image.width*X),it=Math.floor(w.image.height*X),ht=z!==null?z.x:0,_t=z!==null?z.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ht,_t,k,it),Mt.unbindTexture()};const of=F.createFramebuffer(),lf=F.createFramebuffer();this.copyTextureToTexture=function(w,z,W=null,X=null,k=0,it=null){w.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],z=arguments[2],it=arguments[3]||0,W=null),it===null&&(k!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=k,k=0):it=0);let ht,_t,St,Rt,Pt,Tt,Xt,jt,me;const he=w.isCompressedTexture?w.mipmaps[it]:w.image;if(W!==null)ht=W.max.x-W.min.x,_t=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Pt=W.min.y,Tt=W.isBox3?W.min.z:0;else{const ai=Math.pow(2,-k);ht=Math.floor(he.width*ai),_t=Math.floor(he.height*ai),w.isDataArrayTexture?St=he.depth:w.isData3DTexture?St=Math.floor(he.depth*ai):St=1,Rt=0,Pt=0,Tt=0}X!==null?(Xt=X.x,jt=X.y,me=X.z):(Xt=0,jt=0,me=0);const qt=It.convert(z.format),bt=It.convert(z.type);let be;z.isData3DTexture?(C.setTexture3D(z,0),be=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),be=F.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Kt=F.getParameter(F.UNPACK_ROW_LENGTH),_i=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ye=F.getParameter(F.UNPACK_SKIP_ROWS),Ns=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Tt);const ae=w.isDataArrayTexture||w.isData3DTexture,ri=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const ai=wt.get(w),Ie=wt.get(z),Be=wt.get(ai.__renderTarget),Ta=wt.get(Ie.__renderTarget);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,Be.__webglFramebuffer),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ta.__webglFramebuffer);for(let vn=0;vn<St;vn++)ae&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,k,Tt+vn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(z).__webglTexture,it,me+vn)),F.blitFramebuffer(Rt,Pt,ht,_t,Xt,jt,ht,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||wt.has(w)){const ai=wt.get(w),Ie=wt.get(z);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,of),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,lf);for(let Be=0;Be<St;Be++)ae?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ai.__webglTexture,k,Tt+Be):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ai.__webglTexture,k),ri?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,it,me+Be):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,it),k!==0?F.blitFramebuffer(Rt,Pt,ht,_t,Xt,jt,ht,_t,F.COLOR_BUFFER_BIT,F.NEAREST):ri?F.copyTexSubImage3D(be,it,Xt,jt,me+Be,Rt,Pt,ht,_t):F.copyTexSubImage2D(be,it,Xt,jt,Rt,Pt,ht,_t);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ri?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(be,it,Xt,jt,me,ht,_t,St,qt,bt,he.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(be,it,Xt,jt,me,ht,_t,St,qt,he.data):F.texSubImage3D(be,it,Xt,jt,me,ht,_t,St,qt,bt,he):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,it,Xt,jt,ht,_t,qt,bt,he.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,it,Xt,jt,he.width,he.height,qt,he.data):F.texSubImage2D(F.TEXTURE_2D,it,Xt,jt,ht,_t,qt,bt,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,Kt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_i),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ns),it===0&&z.generateMipmaps&&F.generateMipmap(be),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,W=null,X=null,k=0){return w.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],z=arguments[3],k=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,W,X,k)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){b=0,D=0,A=null,Mt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Zd{constructor(t={}){this.webGLRendererParameters={canvas:null,canvasContainer:null,antialias:!1,alpha:!0},this.rendererColor={color:16777215,alpha:0},this.stageSize={width:0,height:0,widthRatio:0,heightRatio:0,aspect:{xy:0,yx:0}},this.cameraParam={near:.01,far:1e4},this.cameraBasePosition={x:0,y:0,z:0},this.cameraPosition={x:0,y:0,z:0},this.devicePixelRatio=window.devicePixelRatio,this.renderer=null,this.scene=null,this.camera=null,this.cameraAspect=null,this.cameraFov=45,this.fitFovToViewport=!0,this.padding=.25,this.canvasType="",this.resolution=new Wt(1,1),this.scrollOffset=new Wt(0,0),Object.assign(this,t)}init(){this.$canvas?this.webGLRendererParameters.canvas=this.$canvas:this.webGLRendererParameters.canvas=document.createElement("canvas"),this.renderer=new aE(this.webGLRendererParameters),this.setScene(),this.setStageSize(),this.setCamera(),this.initRenderer()}destroy(){this.camera&&this.camera.clearViewOffset(),this.renderer&&this.renderer.dispose(),this.camera=null,this.renderer=null,this.scene=null}setScene(){this.scene=new m_}initRenderer(){this.renderer.setClearColor(this.rendererColor.color,this.rendererColor.alpha),this.setRenderer()}hideRenderer(){this.renderer.setSize(0,0),this.renderer.setPixelRatio(.1)}setRenderer(){this.renderer&&(this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.renderer.setPixelRatio(this.devicePixelRatio))}setStageSize(){if(this.$canvasContainer){const t=this.$canvasContainer.getBoundingClientRect();this.stageSize.width=t.width,this.stageSize.height=t.height}else this.stageSize.width=document.body.clientWidth,this.stageSize.height=window.innerHeight;this.stageSize.widthRatio=1/this.stageSize.width,this.stageSize.heightRatio=1/this.stageSize.height,this.stageSize.aspect.xy=this.stageSize.width/this.stageSize.height,this.stageSize.aspect.yx=this.stageSize.height/this.stageSize.width}setCamera(){this.camera=new ui(0,0,this.cameraParam.near,this.cameraParam.far),this.camera.aspect=this.cameraAspect?this.cameraAspect:this.stageSize.aspect.xy||document.body.clientWidth/window.innerHeight,this.camera.fov=this.cameraFov,this.cameraBasePosition.x=this.cameraPosition.x,this.cameraBasePosition.y=this.cameraPosition.y,this.fitFovToViewport?this.cameraBasePosition.z=mf(this.stageSize.height,this.camera.fov):this.cameraBasePosition.z=this.cameraPosition.z,this.camera.updateProjectionMatrix(),this.renderer&&this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.camera.position.x=this.cameraBasePosition.x,this.camera.position.y=this.cameraBasePosition.y,this.camera.position.z=this.cameraBasePosition.z}onResize(){this.setStageSize(),this.setCamera(),this.setRenderer()}onUpdate(t){this.renderer&&(this.canvasType==="scroll"&&(this.updateScrollOffset(t),this.updateCanvasInfo()),this.renderer.render(this.scene,this.camera))}updateScrollOffset(t){this.scrollOffset.set(window.scrollX,t-window.innerHeight*this.padding)}updateCanvasInfo(){this.$canvas.style.transform=`translate(${this.scrollOffset.x}px, ${this.scrollOffset.y}px)`,this.canvasTop=this.scrollOffset.y,this.canvasBottom=this.canvasTop+this.resolution.y}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Ri{constructor(t,e,i,s,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ri.nextNameID=Ri.nextNameID||0,this.$name.id=`lil-gui-name-${++Ri.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class oE extends Ri{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Cl(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const lE={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Cl,toHexString:Cl},ur={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},cE={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,t,e=1){const i=ur.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([n,t,e],i=1){i=255/i;const s=n*i<<16^t*i<<8^e*i<<0;return ur.toHexString(s)}},uE={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){const i=ur.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:n,g:t,b:e},i=1){i=255/i;const s=n*i<<16^t*i<<8^e*i<<0;return ur.toHexString(s)}},hE=[lE,ur,cE,uE];function dE(n){return hE.find(t=>t.match(n))}class fE extends Ri{constructor(t,e,i,s){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dE(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Cl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class mo extends Ri{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class pE extends Ri{constructor(t,e,i,s,r,a){super(t,e,i,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let a=!1,o,l,c,u,h;const d=5,p=v=>{o=v.clientX,l=c=v.clientY,a=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(a){const S=v.clientX-o,x=v.clientY-l;Math.abs(x)>d?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>d&&g()}if(!a){const S=v.clientY-c;h-=S*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,v,S,x,T)=>(f-v)/(S-v)*(T-x)+x,e=f=>{const v=this.$slider.getBoundingClientRect();let S=t(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(S)},i=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(a){const v=f.touches[0].clientX-o,S=f.touches[0].clientY-l;Math.abs(v)>Math.abs(S)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const S=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class mE extends Ri{constructor(t,e,i,s){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class gE extends Ri{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var _E=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function vE(n){const t=document.createElement("style");t.innerHTML=n;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Zu=!1;class Ma{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Zu&&o&&(vE(_E),Zu=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,i,s,r){if(Object(i)===i)return new mE(this,t,e,i);const a=t[e];switch(typeof a){case"number":return new pE(this,t,e,i,s,r);case"boolean":return new oE(this,t,e);case"string":return new gE(this,t,e);case"function":return new mo(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,i=1){return new fE(this,t,e,i)}addFolder(t){const e=new Ma({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof mo||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof mo)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Jd=`const float PI = 3.1415926535897932384626433832795;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uResolution;
uniform vec2 uScrollOffset;
uniform vec2 uDomXY;
uniform vec2 uDomWH;

varying vec2 vUv;

void main () {
  vec2 pixelXY = uDomXY - uScrollOffset + uDomWH * 0.5;

  pixelXY.y = uResolution.y - pixelXY.y;
  pixelXY += position.xy * uDomWH;

  vec2 xy = pixelXY / uResolution * 2. - 1.;

  vUv = uv;

  gl_Position = vec4(xy, 0., 1.0);
}`,xE=`precision highp float;

uniform vec2 uMeshSize;
uniform vec2 uTextureSize;
uniform sampler2D uTexture;
uniform sampler2D uAsciiMap;
uniform float uAsciiColorStep;
uniform float uAspect;
uniform float uTileSize;
uniform float uMosaic;
uniform bool uBitMode;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uAspect, 1.0);
  vec2 resolutionRatio = vec2(
    min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),
    min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)
  );

  uv -= 0.5;
  uv *= resolutionRatio;
  uv += 0.5;

  if (uBitMode) {
    // BIT MODE ON
    vec2 tile = vec2(fract(uv * aspect * uTileSize));
    vec2 asciiUv = floor(uv * aspect * uTileSize) * (1.0 / (uTileSize * aspect));

    asciiUv.x = floor(asciiUv.x * uMeshSize.x / uMosaic) / (uMeshSize.x / uMosaic) + (uMosaic / 2.0) / uMeshSize.x;
    asciiUv.y = floor(asciiUv.y * uMeshSize.y / uMosaic) / (uMeshSize.y / uMosaic) + (uMosaic / 2.0) / uMeshSize.y;

    vec4 texture = texture2D(uTexture, asciiUv);
    float grayScale = dot(vec3(0.298912, 0.586611, 0.114478), texture.rgb);
    float shift = floor(grayScale / uAsciiColorStep) * uAsciiColorStep;

    shift = 1.0 - shift;
    tile.x = tile.x * uAsciiColorStep + shift;

    float asciiTexture = texture2D(uAsciiMap, tile).r;

    asciiTexture = smoothstep(0.2, 0.8, asciiTexture);

    vec3 color = vec3(0.0);
    float alpha = 1.0 - asciiTexture;

    gl_FragColor = vec4(color, alpha);
  } else {
    // BIT MODE OFF
    vec2 mosaicUv = uv;

    mosaicUv.x = floor(mosaicUv.x * uMeshSize.x / uMosaic) / (uMeshSize.x / uMosaic) + (uMosaic / 2.0) / uMeshSize.x;
    mosaicUv.y = floor(mosaicUv.y * uMeshSize.y / uMosaic) / (uMeshSize.y / uMosaic) + (uMosaic / 2.0) / uMeshSize.y;

    vec4 color = texture2D(uTexture, mosaicUv);

    gl_FragColor = vec4(color.rgb, 1.0);
  }
}
`;class SE{constructor(t={}){pt(this,"onClick",()=>{});this.tweenParams={duration:1,delay:.1,ease:"cubic.out"},this.geometryParam={width:1,height:1,widthSegments:1,heightSegments:1},this.materialParam={useWireframe:!1},this.className={complete:"-complete"},this.$img=null,this.$trigger=null,this.texture=null,this.geometry=null,this.material=null,this.mesh=null,this.vs=Jd,this.fs=xE,this.aspect=0,this.itemWidth=0,this.itemHeight=0,this.itemX=0,this.itemY=0,this.padding=.25,this.resolution=new Wt(1,1),Object.assign(this,t)}init(){this.getSelector(),this.getImgPath(),this.createTexture(),this.createMesh(),this.setResolutions(),this.setMeshScale(),this.addEventListeners()}destroy(){this.removeEventListeners(),this.clearObserver(),this.mesh.material.uniforms.uBitMode.value=!1,this.webgl.stage.scene.remove(this.mesh),this.mesh.material.uniforms.uTexture.value.dispose(),this.geometry.dispose(),this.mesh=null}getSelector(){this.$img=this.$target.querySelector("img")}getImgPath(){kt.detection.pcLayout?window.devicePixelRatio>=2?this.imgPath=this.$target.dataset["img-2x"]:this.imgPath=this.$target.dataset["img-1x"]:window.devicePixelRatio>=3?this.imgPath=this.$target.dataset["imgSp-3x"]:this.imgPath=this.$target.dataset["imgSp-2x"]}createTexture(){const t=new lc;t.load(this.imgPath,e=>{this.texture=e,this.texture.magFilter=we,this.texture.minFilter=we,this.texture.generateMipmaps=!1,this.texture.wrapS=ti,this.texture.wrapT=ti,this.mesh.material.uniforms.uTexture.value=this.texture,this.aspect=this.mesh.material.uniforms.uTexture.value.source.data.width/this.mesh.material.uniforms.uTexture.value.source.data.height,this.mesh.material.uniforms.uAspect.value=this.aspect}),t.load("https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/images/ascii.png",e=>{this.mesh.material.uniforms.uAsciiMap.value=e;const i=this.mesh.material.uniforms.uAsciiMap.value.source.data.width,s=this.mesh.material.uniforms.uAsciiMap.value.source.data.height;this.mesh.material.uniforms.uAsciiColorStep.value=s/i})}createUniforms(){return{uTexture:{value:this.texture},uAsciiMap:{value:null},uTextureSize:{value:{x:this.itemWidth,y:this.itemHeight}},uMeshSize:{value:{x:this.itemWidth,y:this.itemHeight}},uDomXY:{value:new Wt(0,0)},uDomWH:{value:new Wt(1,1)},uResolution:{value:this.resolution},uScrollOffset:{value:this.webgl.stage.scrollOffset},uAsciiColorStep:{value:0},uAspect:{value:0},uTileSize:{value:150},uTileStrength:{value:0},uMosaic:{value:20},uBitMode:{value:!1}}}createMesh(){this.geometry=new $n(this.geometryParam.width,this.geometryParam.height,this.geometryParam.widthSegments,this.geometryParam.heightSegments),this.material=new ac({vertexShader:this.vs,fragmentShader:this.fs,wireframe:this.materialParam.useWireframe,transparent:!0,uniforms:this.createUniforms(),side:hi}),this.mesh=new mi(this.geometry,this.material),this.webgl.stage.scene.add(this.mesh),this.mesh.frustumCulled=!1}setResolutions(){const t=this.$target.getBoundingClientRect();this.itemWidth=t.width,this.itemHeight=t.height,this.itemX=t.left+this.webgl.stage.scrollOffset.x,this.itemY=t.top+this.webgl.stage.scrollOffset.y,this.mesh.material.uniforms.uDomWH.value.set(this.itemWidth,this.itemHeight)}setMeshScale(){this.mesh.scale.x=this.itemWidth,this.mesh.scale.y=this.itemHeight,this.mesh.material.uniforms.uMeshSize.value.x=this.mesh.scale.x,this.mesh.material.uniforms.uMeshSize.value.y=this.mesh.scale.y}setObserver(){kt.iObserver.add(this.$target,()=>{this.inViewAnimation()})}clearObserver(){kt.iObserver.remove(this.$target)}addEventListeners(){}removeEventListeners(){}onResize(){const t=this.webgl.stage.stageSize.width,e=window.innerHeight*(1+this.padding*2);this.resolution.set(t,e),this.webgl.stage.$canvas.style.width=`${t}px`,this.webgl.stage.$canvas.style.height=`${e}px`,this.webgl.stage.scrollOffset.set(window.scrollX,window.scrollY),this.setResolutions(),this.setMeshScale()}onUpdate(){this.updateMesh()}updateMesh(){this.mesh.material.uniforms.uDomXY.value.set(this.itemX,this.itemY)}inViewAnimation(){At.to(this.mesh.material.uniforms.uMosaic,{value:1,duration:this.tweenParams.duration,delay:this.tweenParams.delay,ease:this.tweenParams.ease,onComplete:()=>{this.$target.classList.add(this.className.complete)}})}}const Qd=`precision highp float;

uniform vec2 uMeshSize;
uniform vec2 uTextureSize;
uniform vec2 uMouse;
uniform sampler2D uTexture;
uniform sampler2D uAsciiMap;
uniform float uAsciiColorStep;
uniform float uAspect;
uniform float uTileSize;
uniform float uTileStrength;
uniform float uMouseStrength;

varying vec2 vUv;

void main() {
  vec2 originalUv = vUv;
  vec2 uv = vUv;
  vec2 aspect = vec2(uAspect, 1.0);

  // タイル計算
  vec2 tileUv = vUv * aspect * uTileSize;
  vec2 tileId = floor(tileUv);
  vec2 tileLocal = fract(tileUv);

  // ASCII文字サンプリング用のUV
  uv = (tileId + 0.5) / (aspect * uTileSize);

  vec2 resolutionRatio = vec2(
    min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),
    min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)
  );

  uv -= 0.5;
  uv *= resolutionRatio;
  uv += 0.5;
  uv += uMouse * uMouseStrength;

  vec4 texture = texture2D(uTexture, uv);
  float grayScale = dot(vec3(0.298912, 0.586611, 0.114478), texture.rgb);
  float shift = floor(grayScale / uAsciiColorStep) * uAsciiColorStep;

  shift = 1.0 - shift;

  // 最適化されたタイル内スケーリング
  vec2 tile = tileLocal;

  // uTileStrengthで文字密度を制御（1.0 = 通常、2.0 = 2倍密度）
  tile = (tile - 0.5) * uTileStrength + 0.5;

  // 厳密な境界制限
  tile = clamp(tile, 0.025, 0.975);

  // ASCII文字座標
  tile.x = tile.x * uAsciiColorStep + (shift * clamp(1.0, 0.0, 1.0));

  float asciiTexture = texture2D(uAsciiMap, tile).r;
  asciiTexture = smoothstep(0.2, 0.8, asciiTexture);

  vec3 color = vec3(0.0);
  float alpha = 1.0 - asciiTexture;

  gl_FragColor = vec4(color, alpha);
}
`;class EE{constructor(t={}){this.geometryParam={width:1,height:1,widthSegments:1,heightSegments:1},this.materialParam={useWireframe:!1},this.$video=null,this.videoTexture=null,this.geometry=null,this.material=null,this.mesh=null,this.vs=Jd,this.fs=Qd,this.aspect=0,this.itemWidth=0,this.itemHeight=0,this.videoWidth=0,this.videoHeight=0,this.itemX=0,this.itemY=0,this.padding=.25,Object.assign(this,t)}init(){this.getSelector(),this.playVideo(),this.createTexture(),this.createMesh(),this.setResolutions(),this.setMeshScale()}destroy(){this.webgl.stage.scene.remove(this.mesh),this.mesh.material.uniforms.uTexture.value.dispose(),this.geometry.dispose(),this.mesh=null}getSelector(){this.$video=this.$target.querySelector("video")}playVideo(){this.$video.play()}createTexture(){const t=new lc;this.videoTexture=new Wd(this.$video),this.videoTexture.magFilter=we,this.videoTexture.minFilter=we,this.videoTexture.generateMipmaps=!1,this.videoTexture.wrapS=ti,this.videoTexture.wrapT=ti,t.load("https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/images/ascii.png",e=>{this.mesh.material.uniforms.uAsciiMap.value=e;const i=this.mesh.material.uniforms.uAsciiMap.value.source.data.width,s=this.mesh.material.uniforms.uAsciiMap.value.source.data.height;this.mesh.material.uniforms.uAsciiColorStep.value=s/i})}createUniforms(){return{uTexture:{value:this.videoTexture},uAsciiMap:{value:null},uTextureSize:{value:{x:this.videoWidth,y:this.videoHeight}},uMeshSize:{value:{x:this.itemWidth,y:this.itemHeight}},uDomXY:{value:new Wt(0,0)},uDomWH:{value:new Wt(1,1)},uResolution:{value:this.webgl.stage.resolution},uScrollOffset:{value:this.webgl.stage.scrollOffset},uAsciiColorStep:{value:0},uAspect:{value:0},uTileSize:{value:150},uTileStrength:{value:0}}}createMesh(){this.geometry=new $n(this.geometryParam.width,this.geometryParam.height,this.geometryParam.widthSegments,this.geometryParam.heightSegments),this.material=new ac({vertexShader:this.vs,fragmentShader:this.fs,wireframe:this.materialParam.useWireframe,transparent:!0,uniforms:this.createUniforms(),side:hi}),this.mesh=new mi(this.geometry,this.material),this.webgl.stage.scene.add(this.mesh),this.aspect=this.mesh.material.uniforms.uTexture.value.source.data.videoWidth/this.mesh.material.uniforms.uTexture.value.source.data.videoHeight,this.mesh.material.uniforms.uAspect.value=this.aspect,this.mesh.frustumCulled=!1}setResolutions(){const t=this.$target.getBoundingClientRect();this.itemWidth=t.width,this.itemHeight=t.height,this.videoWidth=this.$video.videoWidth,this.videoHeight=this.$video.videoHeight,this.itemX=t.left+this.webgl.stage.scrollOffset.x,this.itemY=t.top+this.webgl.stage.scrollOffset.y,this.mesh.material.uniforms.uDomWH.value.set(this.itemWidth,this.itemHeight)}setMeshScale(){this.mesh.scale.x=this.itemWidth,this.mesh.scale.y=this.itemHeight,this.mesh.material.uniforms.uMeshSize.value.x=this.mesh.scale.x,this.mesh.material.uniforms.uMeshSize.value.y=this.mesh.scale.y}onResize(){const t=this.webgl.stage.stageSize.width,e=window.innerHeight*(1+this.padding*2);this.webgl.stage.resolution.set(t,e),this.webgl.stage.$canvas.style.width=`${t}px`,this.webgl.stage.$canvas.style.height=`${e}px`,this.webgl.stage.scrollOffset.set(window.scrollX,window.scrollY),this.setResolutions(),this.setMeshScale()}onUpdate(){this.updateMesh()}updateMesh(){this.mesh.material.uniforms.uDomXY.value.set(this.itemX,this.itemY)}}class yE{constructor(t={}){this.asciiMeshesItems=[],Object.assign(this,t)}init({$contentRoot:t}){t&&(this.$contentRoot=t),this.getSelector(),this.setMeshes()}destroy(){this.clearMesh()}getSelector(){this.$asciiImgTargets=this.$contentRoot.querySelectorAll('[data-webgl-item="ascii-img-target"]'),this.$asciiVideoTargets=this.$contentRoot.querySelectorAll('[data-webgl-item="ascii-video-target"]')}setMeshes(){const t=[],e=[];this.$asciiImgTargets.forEach((i,s)=>{t[s]=new SE({webgl:this.webgl,$target:i,index:s})}),this.$asciiVideoTargets.forEach((i,s)=>{e[s]=new EE({webgl:this.webgl,$target:i,index:s})}),this.asciiMeshesItems.push(t),this.asciiMeshesItems.push(e),this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.init()})})}clearMesh(){this.asciiMeshesItems.forEach(t=>{t.forEach(e=>{e.destroy(),e=null})}),this.asciiMeshesItems=[]}addGUI(){this.settings={tileStrength:0,tileSize:150,bitMode:!0};const t=new Ma;t.add(this.settings,"tileStrength",0,10,.1).name("tileStrength").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uTileStrength.value=e})})}),t.add(this.settings,"tileSize",0,1e3,1).name("tileSize").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uTileSize.value=e})})}),t.add(this.settings,"bitMode",!0).name("bitMode").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uBitMode.value=e})})})}onResize(){this.asciiMeshesItems.forEach(t=>{t.forEach(e=>{e.onResize()})})}onUpdate(t){this.asciiMeshesItems.forEach(e=>{e.forEach(i=>{i.onUpdate(t)})})}}class tf{constructor(t={}){this.meshManager=null,this.stage=null,this.$webglWrapper=null,this.prevScrollY=0,this.scrollY=0,this.requestId=0,Object.assign(this,t)}init(){this.getSelector(),this.setStage(),this.meshManager=new yE({webgl:this}),this.addEventListeners(),this.prevScrollY=this.getScrollY(),this.raf()}destroy(){this.meshManager.destroy(),this.caf(),this.removeEventListeners(),this.stage.destroy(),kt.detection.touchDevice&&(this.$scrollContainer.scrollTop=0)}getSelector(){this.$webglWrapper=document.querySelector('[data-webgl-wrapper="common"]'),this.$scrollContainer=document.querySelector("[data-content]")}getScrollY(){return kt.detection.touchDevice?this.$scrollContainer.scrollTop:window.scrollY}setStage(){this.stage=new Zd({$canvasContainer:document.querySelector('[data-webgl-container="common"]'),$canvas:document.querySelector('[data-webgl="common"]'),canvasType:"scroll"}),this.stage&&this.stage.init()}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this)),window.ResizeObserver&&new ResizeObserver(this.onResize.bind(this)).observe(this.$webglWrapper)}removeEventListeners(){window.removeEventListener("resize",this.onResize.bind(this))}addGUI(){this.meshManager.addGUI()}raf(){this.requestId=requestAnimationFrame(this.raf.bind(this)),this.onUpdate()}caf(){cancelAnimationFrame(this.requestId)}enter({$contentRoot:t}){this.meshManager.init({$contentRoot:t})}onResize(){this.stage&&this.stage.onResize(),this.meshManager.onResize()}onUpdate(){this.scrollY=this.getScrollY(),this.meshManager.onUpdate(this.scrollY),this.stage&&this.stage.onUpdate(this.scrollY),this.prevScrollY=this.scrollY}}class ME{constructor(){this.commonWebgl=new tf}init(){this.typeWriterAnimation=new xa({root:document.querySelector('[data-page="about"]')}),At.delayedCall(kt.isStartup?1:.5,()=>{this.typeWriterAnimation.init()}),this.commonWebgl.init(),this.commonWebgl.enter({$contentRoot:document.querySelector('[data-page="about"]')}),At.delayedCall(kt.isStartup?1:.5,()=>{this.commonWebgl.meshManager.asciiMeshesItems[0].forEach(t=>{t.setObserver()})})}destroy(){}contentReplace(){this.commonWebgl.destroy()}}const go=new ME;class ef{constructor(t={}){pt(this,"onClick",t=>{this.$trigger=t.currentTarget;const e=this.$trigger.dataset,i=e.modalTriggerType;this.triggerOpenId=e.modalTriggerOpenId,this.triggerCloseId=e.modalTriggerCloseId,this.$currentTarget=document.getElementById(this.triggerOpenId||this.triggerCloseId),i==="open"?(document.addEventListener("keydown",this.onKeydown),this.open()):(document.removeEventListener("keydown",this.onKeydown),this.close(t))});pt(this,"onKeydown",t=>{t.keyCode===27&&this.closeAnimation(t),t.keyCode===9&&this.bindFocus(t)});pt(this,"close",t=>{const e=t.target.closest('[data-modal-trigger-type="close"]'),i=t.target===t.currentTarget;!e&&!i||this.isAnimating||(this.isAnimating=!0,this.isOpen=!1,this.closeAnimation())});this.tweenParams={overlay:{duration:0,ease:"expo.out"}},this.className={open:"-open"},this.focusableElements=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this.$targets=[],this.$triggerAll=[],this.$overlay=null,this.$container=null,this.triggerOpenId=null,this.triggerCloseId=null,this.$currentTarget=null,this.activeElement=null,this.isAnimating=!1,this.isOpen=!1,Object.assign(this,t)}init(){this.getSelector(),this.setStyle(),this.addEventListeners()}destroy(){this.removeEventListeners(),this.isOpen&&this.close()}getFocusableNodes(){return[...this.$currentTarget.querySelectorAll(this.focusableElements)]}getSelector(){this.$targets=document.querySelectorAll('[data-modal="target"]'),this.$overlays=document.querySelectorAll('[data-modal="overlay"]'),this.$triggerAll=document.querySelectorAll('[data-modal="trigger"]'),this.$container=document.querySelector('[data-modal="container"]')}setStyle(){At.set(this.$overlays,{autoAlpha:0})}setFocusToFirstNode(){const t=this.getFocusableNodes();t.length!==0&&t.length>0&&t[0].focus()}addEventListeners(){this.$triggerAll.forEach(t=>{t.addEventListener("click",this.onClick)}),this.$overlays.forEach(t=>{t.addEventListener("click",this.close)})}removeEventListeners(){this.$triggerAll.forEach(t=>{t.removeEventListener("click",this.onClick)}),this.$overlays.forEach(t=>{t.removeEventListener("click",this.close)}),document.removeEventListener("keydown",this.onKeydown)}open(){this.isAnimating||(this.isAnimating=!0,this.isOpen=!0,this.triggerCloseId=this.triggerOpenId,this.openAnimation())}openAnimation(){const t=this.$currentTarget,e=t.querySelector('[data-modal="overlay"]');this.activeElement=document.activeElement,t.setAttribute("aria-hidden","false"),kt.smoothScroll.stop(),requestAnimationFrame(()=>{this.killTweens(),At.to(e,{autoAlpha:1,duration:this.tweenParams.overlay.duration,ease:this.tweenParams.overlay.ease,onComplete:()=>{this.isAnimating=!1,this.setFocusToFirstNode()}})})}closeAnimation(){const t=this.$currentTarget,e=t.querySelector('[data-modal="overlay"]');t.setAttribute("aria-hidden","true"),kt.smoothScroll.start(),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),requestAnimationFrame(()=>{this.killTweens(),At.to(e,{autoAlpha:0,duration:this.tweenParams.overlay.duration,ease:this.tweenParams.overlay.ease,onComplete:()=>{this.$container.scrollTop=0,this.isAnimating=!1}})})}killTweens(){At.killTweensOf(this.$overlay)}bindFocus(t){const e=this.getFocusableNodes();if(e.length!==0)if(!this.$currentTarget.contains(document.activeElement))e[0]&&e[0].focus&&e[0].focus();else{const i=e.indexOf(document.activeElement);t.shiftKey&&i===0&&(e[e.length-1].focus(),t.preventDefault()),!t.shiftKey&&e.length>0&&i===e.length-1&&(e[0].focus(),t.preventDefault())}}}class wE{constructor(){this.modal=new ef,this.commonWebgl=new tf}init(){this.typeWriterAnimation=new xa({root:document.querySelector('[data-page="home"]')}),this.typeWriterAnimation.init(),this.modal.init(),this.commonWebgl.init(),this.commonWebgl.enter({$contentRoot:document.querySelector('[data-page="home"]')}),At.delayedCall(kt.isStartup?1:.5,()=>{this.commonWebgl.meshManager.asciiMeshesItems[0].forEach(t=>{t.setObserver()})})}destroy(){this.modal.destroy()}contentReplace(){this.commonWebgl.destroy()}}const _o=new wE;class TE{constructor(){this.modal=new ef}init(){this.typeWriterAnimation=new xa({root:document.querySelector('[data-page="projects"]')}),At.delayedCall(kt.isStartup?1:.5,()=>{this.typeWriterAnimation.init()}),this.modal.init()}destroy(){this.modal.destroy()}contentReplace(){}}const vo=new TE;class bE{constructor(){pt(this,"onMailSent",()=>{window.location.href.includes("/contact-ja/")?location.href=this.pathNames.ja:location.href=this.pathNames.en});this.pathNames={ja:"/tsuchi-to-digital/contact-thanks-ja/",en:"/tsuchi-to-digital/contact-thanks-en/"}}init(){this.addEventListeners()}addEventListeners(){document.addEventListener("wpcf7mailsent",this.onMailSent)}}At.registerPlugin(Fs);class DE{constructor(){pt(this,"onChange",()=>{this.checkValidation()});this.tweenParams={buttonText:{duration:.5}},this.$targets=[],this.$submit=null,this.isCurrentValid=!1}init(){this.getSelector(),!(!this.$targets.length||!this.$submit)&&(this.addEventListeners(),this.disableSubmit())}getSelector(){this.$targets=document.querySelectorAll(".js-formValidation-target"),this.$submit=document.querySelector(".js-formValidation-submit"),this.$buttonText=this.$submit.querySelector(".js-formValidation-buttonText")}addEventListeners(){this.$targets.forEach(t=>{t.addEventListener("change",this.onChange)})}checkValidation(){let t=!0;this.$targets.forEach(e=>{this.validateField(e)||(t=!1)}),t!==this.isCurrentValid&&(this.isCurrentValid=t,this.switchSubmit(t))}validateField(t){if(t.type==="text"||t.type==="textarea")return t.value.trim()!=="";if(t.type==="email")return this.validateEmail(t.value);if(t.type==="checkbox")return t.checked;if(t.tagName.toLowerCase()==="select")return t.value!==""}validateEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}switchSubmit(t){t?(this.enableSubmit(),this.enableSubmitAnimation()):(this.disableSubmit(),this.disableSubmitAnimation())}enableSubmit(){this.$submit.disabled=!1}disableSubmit(){this.$submit.disabled=!0}enableSubmitAnimation(){At.to(this.$buttonText,{duration:this.tweenParams.buttonText.duration,scrambleText:{text:"Send",chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.5}})}disableSubmitAnimation(){At.to(this.$buttonText,{duration:this.tweenParams.buttonText.duration,scrambleText:{text:"Please Fill Form",chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.5}})}}class AE{init(){const t=document.querySelector('[data-page-modifier="thanks"]');this.isContactThanks=t!==null,this.isContactThanks||(this.switchParam=new bE,this.formValidation=new DE),this.typeWriterAnimation=new xa({root:document.querySelector('[data-page="contact"]')}),this.isContactThanks?At.delayedCall(0,()=>{this.typeWriterAnimation.init()}):kt.isStartup?At.delayedCall(1,()=>{this.typeWriterAnimation.init()}):At.delayedCall(.5,()=>{this.typeWriterAnimation.init()}),this.switchParam&&this.switchParam.init(),this.formValidation&&this.formValidation.init();const e=document.querySelector(".wpcf7-form"),i=e==null?void 0:e.querySelector(".wpcf7-submit");e&&i&&typeof wpcf7!="undefined"&&wpcf7.init(e)}destroy(){}contentReplace(){}}const xo=new AE;class Ju{constructor(t={}){this.$images=[],this.imagesList=[],this.root=document,Object.assign(this,t)}init(){this.getSelector()}getSelector(){this.$images=this.root.querySelectorAll("img"),this.imagesList=this.getImages()}getImages(){return Array.from(this.$images).map(t=>t.currentSrc)}async load(t,e){await new Promise(i=>{const s=new Image;s.onload=()=>{i(),e(t)},s.onerror=()=>{i(),e(t)},s.src=t.src})}}class Qu{constructor(){this.tasks=[],this.taskLength=0,this.taskResolveCount=0,this.onUpdateProgressAnimation=null,this.onCompleteProgressAnimation=null,this.progress=0}init(t={onUpdateProgressAnimation:(e,i)=>{e===1&&i()},onCompleteProgressAnimationProgressAnimation:e=>{}}){this.onUpdateProgressAnimation=t.onUpdateProgressAnimation,this.onCompleteProgressAnimation=t.onCompleteProgressAnimation}add(t,e){this.tasks.push({taskId:e,task:t})}set(){this.taskLength=this.tasks.length,this.taskResolveCount=0}run(){this.tasks.length?this.tasks.forEach(t=>{t.task().then(()=>{this.taskResolveCount++,this.update(this.taskResolveCount,this.taskLength)})}):this.update(1,1)}update(t,e){this.progress=t/e,this.onUpdateProgressAnimation(this.progress,this.onCompleteProgressAnimation)}}class th{constructor(t={}){this.$videos=[],this.videosList=[],this.root=document,Object.assign(this,t)}init(){this.getSelector()}getSelector(){this.$videos=this.root.querySelectorAll("video"),this.videosList=this.getVideos()}getVideos(){return Array.from(this.$videos).map(t=>t)}async load(t,e){await new Promise(i=>{const s=t.video;s.onloadeddata=()=>{i(),e(t)},s.onerror=()=>{i(),e(t)},s.load()})}}class CE{constructor(){this.$targets=[],this.infoList=[],this.$trigger=null}init(){this.getSelector(),this.setObserver()}getSelector(){this.$targets=document.querySelectorAll('[data-fixed-header="target"]'),this.$trigger=document.querySelector('[data-fixed-header="trigger"]')}setObserver(){kt.iObserver.add(this.$trigger,()=>{this.inView()},()=>{this.outView()})}clearObserver(){kt.iObserver.remove(this.$trigger)}inView(){this.$targets.forEach(t=>{At.to(t,{y:"-3.8rem",duration:0,force3D:!0})})}outView(){this.$targets.forEach(t=>{At.to(t,{y:"0rem",duration:0,force3D:!0})})}}class RE{constructor(){pt(this,"onResize",()=>{this.getWindowSize(),this.setWindowSize()});this.$target=null,this.$clock=null,this.$period=null,this.$hours=null,this.$minutes=null,this.$temperature=null,this.$width=null,this.$height=null,this.$os=null,this.hours24=0,this.minutes=0,this.windowWidth=0,this.windowHeight=0,this.period="",this.os=""}init(){this.getSelector(),this.getTime(),this.getTemperature(),this.getWindowSize(),this.getOS(),this.setTime(),this.setTemperature(),this.setWindowSize(),this.setOS(),this.addEventListeners(),this.updateTime()}getSelector(){this.$target=document.querySelector('[data-header-info="target"]'),this.$clock=this.$target.querySelector('[data-header-info="clock"]'),this.$period=this.$target.querySelector('[data-header-info="period"]'),this.$hours=this.$target.querySelector('[data-header-info="hours"]'),this.$minutes=this.$target.querySelector('[data-header-info="minutes"]'),this.$temperature=this.$target.querySelector('[data-header-info="temperature"]'),this.$width=this.$target.querySelector('[data-header-info="width"]'),this.$height=this.$target.querySelector('[data-header-info="height"]'),this.$os=this.$target.querySelector('[data-header-info="os"]')}getTime(){const t=new Date,e=t.getHours();this.period=e<12?"AM":"PM",this.hours24=Bc(e%12||12),this.minutes=Bc(t.getMinutes())}getTemperature(){fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json").then(t=>t.json()).then(t=>{const e=t[0].timeSeries[2].areas[0].temps[1];e?this.$temperature.textContent=`${e}℃`:this.$temperature.textContent="-"}).catch(t=>{this.$temperature.textContent="-",console.log(t)})}getWindowSize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}getOS(){this.os=kt.detection.ua}setTime(){const t=`${this.hours24}:${this.minutes}`;this.$clock.setAttribute("datetime",t),this.$period.textContent=this.period,this.$hours.textContent=this.hours24,this.$minutes.textContent=this.minutes}setTemperature(t){t?this.$temperature.textContent=`${t}℃`:this.$temperature.textContent="-℃"}setWindowSize(){this.$width.textContent=this.windowWidth,this.$height.textContent=this.windowHeight}setOS(){this.os.includes("Mac")?this.$os.textContent="macOS":this.$os.textContent="Windows"}addEventListeners(){window.addEventListener("resize",this.onResize)}updateTime(){this.intervalId=setInterval(()=>{this.getTime(),this.setTime()},1e3)}}At.registerPlugin(Fs);class So{constructor(t={}){pt(this,"onMouseEnter",t=>{const e=this.infoList[t];e.isHover=!0,e.isAnimating||this.mouseEnterAnimation(t)});pt(this,"onMouseLeave",t=>{const e=this.infoList[t];e.isHover=!1,e.isAnimating||this.mouseLeaveAnimation(t)});this.tweenParams={text:{duration:1}},this.$targets=[],this.infoList=[],this.root=document,Object.assign(this,t)}init(){this.getSelector(),this.setInfoList(),this.addEventListeners()}destroy(){this.removeEventListeners()}getSelector(){this.$targets=this.root.querySelectorAll('[data-shuffle-hover="target"]')}setInfoList(){this.$targets.forEach((t,e)=>{this.infoList[e]={$target:t,$text:t.querySelector('[data-shuffle-hover="text"]'),isHover:!1,isAnimating:!1,onMouseEnter:()=>{this.onMouseEnter(e)},onMouseLeave:()=>{this.onMouseLeave(e)}}})}addEventListeners(){this.infoList.forEach(t=>{t.$target.addEventListener("mouseenter",t.onMouseEnter),t.$target.addEventListener("mouseleave",t.onMouseLeave)})}removeEventListeners(){this.infoList.forEach(t=>{t.$target.removeEventListener("mouseenter",t.onMouseEnter),t.$target.removeEventListener("mouseleave",t.onMouseLeave)})}mouseEnterAnimation(t){const e=this.infoList[t];e.isAnimating=!0,requestAnimationFrame(()=>{this.killTweens(e),At.to(e.$text,{duration:this.tweenParams.text.duration,scrambleText:{text:"{original}",chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.5},onComplete:()=>{e.isAnimating=!1,e.isHover||this.mouseLeaveAnimation(t)}})})}mouseLeaveAnimation(t){const e=this.infoList[t];e.isAnimating=!0,requestAnimationFrame(()=>{this.killTweens(e),requestAnimationFrame(()=>{e.isAnimating=!1,e.isHover&&this.mouseEnterAnimation(t)})})}killTweens(t){At.killTweensOf(t.$text)}}class eh{constructor(){this._list=[],this._promiseList=[]}static wait(t=0){return new Promise(e=>{At.delayedCall(t,e)})}add(t=e=>{}){this._list.push(async()=>{const e=new Promise(i=>{t(i)});this._promiseList.push(e),await e})}done(t=()=>{}){this._list.reduce((e,i)=>e.then(i),Promise.resolve()).then(()=>{Promise.all(this._promiseList).then(t)})}}const PE=`const float PI = 3.1415926535897932384626433832795;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main () {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;class LE{constructor(t={}){this.geometryParam={width:1,height:1,widthSegments:1,heightSegments:1},this.materialParam={useWireframe:!1},this.$video=null,this.videoTexture=null,this.geometry=null,this.material=null,this.mesh=null,this.vs=PE,this.fs=Qd,this.aspect=0,this.itemWidth=0,this.itemHeight=0,this.videoWidth=0,this.videoHeight=0,Object.assign(this,t)}init(){this.getSelector(),this.playVideo(),this.createTexture(),this.createMesh(),this.setResolutions(),this.setMeshScale()}getSelector(){this.$video=this.$target.querySelector("video")}playVideo(){this.$video.play()}createTexture(){const t=new lc;this.videoTexture=new Wd(this.$video),this.videoTexture.magFilter=we,this.videoTexture.minFilter=we,this.videoTexture.generateMipmaps=!1,this.videoTexture.wrapS=ti,this.videoTexture.wrapT=ti,t.load("https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/images/ascii.png",e=>{this.mesh.material.uniforms.uAsciiMap.value=e;const i=this.mesh.material.uniforms.uAsciiMap.value.source.data.width,s=this.mesh.material.uniforms.uAsciiMap.value.source.data.height;this.mesh.material.uniforms.uAsciiColorStep.value=s/i})}createUniforms(){return{uTexture:{value:this.videoTexture},uAsciiMap:{value:null},uTextureSize:{value:{x:this.videoWidth,y:this.videoHeight}},uMeshSize:{value:{x:this.itemWidth,y:this.itemHeight}},uAsciiColorStep:{value:0},uAspect:{value:0},uTileSize:{value:150},uTileStrength:{value:0},uMosaic:{value:20}}}createMesh(){this.geometry=new $n(this.geometryParam.width,this.geometryParam.height,this.geometryParam.widthSegments,this.geometryParam.heightSegments),this.material=new ac({vertexShader:this.vs,fragmentShader:this.fs,wireframe:this.materialParam.useWireframe,transparent:!0,uniforms:this.createUniforms(),side:hi}),this.mesh=new mi(this.geometry,this.material),this.webgl.stage.scene.add(this.mesh),this.aspect=this.mesh.material.uniforms.uTexture.value.source.data.videoWidth/this.mesh.material.uniforms.uTexture.value.source.data.videoHeight,this.mesh.material.uniforms.uAspect.value=this.aspect}setResolutions(){const t=this.$target.getBoundingClientRect();this.itemWidth=t.width,this.itemHeight=t.height,this.videoWidth=this.$video.videoWidth,this.videoHeight=this.$video.videoHeight}setMeshScale(){this.mesh.scale.x=this.itemWidth,this.mesh.scale.y=this.itemHeight,this.mesh.material.uniforms.uMeshSize.value.x=this.mesh.scale.x,this.mesh.material.uniforms.uMeshSize.value.y=this.mesh.scale.y}onResize(){this.setResolutions(),this.setMeshScale()}onUpdate(){}}class FE{constructor(t={}){this.asciiMeshesItems=[],Object.assign(this,t)}init({$contentRoot:t}){t&&(this.$contentRoot=t),this.getSelector(),this.setMeshes()}getSelector(){this.$asciiVideoTargets=this.$contentRoot.querySelectorAll('[data-webgl-item="ascii-video-target"]')}setMeshes(){const t=[];this.$asciiVideoTargets.forEach((e,i)=>{t[i]=new LE({webgl:this.webgl,$target:e,index:i})}),this.asciiMeshesItems.push(t),this.asciiMeshesItems.forEach(e=>{e.forEach(i=>{i.init()})})}addGUI(){this.settings={tileStrength:0,tileSize:150,bitMode:!0};const t=new Ma;t.add(this.settings,"tileStrength",0,10,.1).name("tileStrength").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uTileStrength.value=e})})}),t.add(this.settings,"tileSize",0,1e3,1).name("tileSize").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uTileSize.value=e})})}),t.add(this.settings,"bitMode",!0).name("bitMode").onChange(e=>{this.asciiMeshesItems.forEach(i=>{i.forEach(s=>{s.material.uniforms.uBitMode.value=e})})})}onResize(){this.asciiMeshesItems.forEach(t=>{t.forEach(e=>{e.onResize()})})}onUpdate(){this.asciiMeshesItems.forEach(t=>{t.forEach(e=>{e.onUpdate()})})}}class IE{constructor(t={}){this.meshManager=null,this.stage=null,this.requestId=0,Object.assign(this,t)}init(){this.setStage(),this.meshManager=new FE({webgl:this}),this.addEventListeners(),this.raf()}setStage(){this.stage=new Zd({$canvasContainer:document.querySelector('[data-webgl-container="footer"]'),$canvas:document.querySelector('[data-webgl="footer"]'),canvasType:"fixed"}),this.stage&&this.stage.init()}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addGUI(){this.meshManager.addGUI()}raf(){this.requestId=requestAnimationFrame(this.raf.bind(this)),this.onUpdate()}enter({$contentRoot:t}){this.meshManager.init({$contentRoot:t})}onResize(){this.stage&&this.stage.onResize(),this.meshManager.onResize()}onUpdate(){this.meshManager.onUpdate(),this.stage&&this.stage.onUpdate()}}class ih{constructor(){this.paths={homeFv:{bud:{pc:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_bud.mp4"},sp:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_bud_sp.mp4"}},deer:{pc:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_deer.mp4"},sp:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_deer_sp.mp4"}},water:{pc:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_water.mp4"},sp:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/home_fv_water_sp.mp4"}}},footer:{pc:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/footer.mp4"},sp:{mp4:"https://bitnb.io/wp-content/themes/tsuchi-to-digital/assets/video/footer_sp.mp4"}}},this.$targets=[],this.infoList=[]}init(){this.getSelector(),this.setInfoList()}getSelector(){this.$targets=document.querySelectorAll('[data-video="target"]')}getRandomVideoType(t){const e=[...t];for(let i=e.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e[0]}setInfoList(){this.$targets.forEach((t,e)=>{this.infoList[e]={$target:t},this.setPath(this.infoList[e])})}setPath(t){switch(t.$target.dataset.videoType){case"home-fv":{const i=["bud","deer","water"],s=this.getRandomVideoType(i);kt.detection.pcLayout?t.$target.src=this.paths.homeFv[s].pc.mp4:t.$target.src=this.paths.homeFv[s].sp.mp4;break}case"footer":{kt.detection.pcLayout?t.$target.src=this.paths.footer.pc.mp4:t.$target.src=this.paths.footer.sp.mp4;break}}}}At.registerPlugin(Fs);class UE{constructor(){const t=new eh,e={value:0},i={loader:{duration:.5,ease:"expo.out"},loaderText:{duration:.5,delay:.5,ease:"expo.out"},progressEase:{duration:2,ease:"expo.inOut"},shuffleTargets:{duration:1}},s=document.querySelector("[data-loader]"),r=s.querySelector('[data-loader="text"]'),a=s.querySelector('[data-loader="progress"]'),o=s.querySelector('[data-loader="number"]'),l=document.querySelectorAll('[data-shuffle-animation="target"]'),u=document.querySelector('[data-page-modifier="thanks"]')!==null;this.loaderProgress=new Qu,this.video=new ih,this.video.init(),this.imageLoader=new Ju({root:document.documentElement}),this.videoLoader=new th({root:document.documentElement}),t.add(h=>{document.documentElement.classList.contains("wf-active")&&h();let d=!1;const p=new MutationObserver(_=>{_.forEach((g,m)=>{var f;!d&&g.type==="attributes"&&g.attributeName==="class"&&!((f=g.oldValue)!=null&&f.includes("wf-active"))&&g.target.classList.contains("wf-active")&&(d=!0,p.disconnect(),h())})});p.observe(document.documentElement,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0})}),t.add(h=>{kt.smoothScroll.stop(),kt.event.disableEvent(),this.imageLoader.init(),this.imageLoader.imagesList.forEach(d=>{const p={src:d};this.loaderProgress.add(this.imageLoader.load.bind(this.imageLoader,p,()=>{}))}),this.videoLoader.init(),this.videoLoader.videosList.forEach(d=>{const p={video:d};this.loaderProgress.add(this.videoLoader.load.bind(this.videoLoader,p,()=>{}))}),h()}),t.add(h=>{const d=()=>{o.innerHTML=Math.floor(e.value*100)};At.to(r,{y:"0%",duration:u?0:i.loaderText.duration,delay:u?0:i.loaderText.delay,ease:i.loaderText.ease,force3D:!0}),At.to(a,{y:"0%",duration:u?0:i.loaderText.duration,delay:u?0:i.loaderText.delay,ease:i.loaderText.ease,force3D:!0}),At.delayedCall(u?0:.75,()=>{this.loaderProgress.init({onUpdateProgressAnimation:(p,_)=>{At.killTweensOf(e.value),p!==1?At.to(e,{value:p,ease:i.progressEase.ease,duration:u?0:i.progressEase.duration,onUpdate:d}):requestAnimationFrame(()=>{At.to(e,{value:1,ease:i.progressEase.ease,duration:u?0:i.progressEase.duration,onUpdate:d,onComplete:()=>{requestAnimationFrame(()=>{this.enter(),this.pageInit(),o.innerHTML="100",At.delayedCall(u?0:.5,()=>{At.to(r,{y:"-100%",duration:u?0:i.loaderText.duration,ease:i.loaderText.ease,force3D:!0}),At.to(a,{y:"-100%",duration:u?0:i.loaderText.duration,ease:i.loaderText.ease,force3D:!0})}),At.delayedCall(u?0:1,()=>{_(),At.to(l,{duration:i.shuffleTargets.duration,scrambleText:{text:"{original}",chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.5}})})})}})})},onCompleteProgressAnimation:()=>{At.to(s,{opacity:0,duration:u?0:i.loader.duration,ease:i.loader.ease,onComplete:()=>{requestAnimationFrame(()=>{const p=s.parentNode;p&&p.removeChild(s),h()})}})}}),this.loaderProgress.set(),this.loaderProgress.run()})}),t.done(()=>{requestAnimationFrame(()=>{zc(),kt.event.enableEvent(),kt.smoothScroll.start(),kt.isStartup=!1})}),this.tweenParams={transition:{duration:.5,ease:"expo.out"},transitionLines:{duration:.5,delay:.5,stagger:.025,ease:"expo.out"}},this.pageNames={home:'[data-page="home"]',about:'[data-page="about"]',projects:'[data-page="projects"]',contact:'[data-page="contact"]'},this.transitionLines=[],this.swup=null,this.$transition=null,this.$transitionPageName=null,this.$transition=document.querySelector("[data-transition]"),this.$transitionLines=this.$transition.querySelectorAll('[data-transition="line"]'),this.$transitionPageNames=this.$transition.querySelectorAll('[data-transition="page-name"]'),this.gShuffleHoverList=[],this.$gElements=document.querySelectorAll('[data-global-element="target"]'),kt.detection.touchDevice||(this.$gElements.forEach((h,d)=>{this.gShuffleHoverList[d]=new So({root:h})}),this.pShuffleHover=new So({root:document.querySelector("#swup")}),this.gShuffleHoverList.forEach(h=>{h.init()}),this.pShuffleHover.init())}init(){this.initSwup()}initSwup(){this.swup=new Nm({animateHistoryBrowsing:!0,plugins:[new zm({animations:[{from:"(.*)",to:"(.*)",out:(t,e)=>{At.to(this.$transition,{opacity:1,duration:this.tweenParams.transition.duration,ease:this.tweenParams.transition.ease,onStart:()=>{this.pageDestroy(),od(),kt.smoothScroll.stop(),kt.event.disableEvent(),this.$transitionPageNames.forEach(i=>{e.to.url==="/"?i.innerHTML="/home/":e.to.url==="/contact-ja/"||e.to.url==="/contact-en/"?i.innerHTML="/contact/":i.innerHTML=e.to.url})},onComplete:()=>{this.pageContentReplace()}}),At.fromTo(this.$transitionLines,{y:"100%",force3D:!0},{y:"0%",duration:this.tweenParams.transitionLines.duration,delay:this.tweenParams.transitionLines.delay,stagger:this.tweenParams.transitionLines.stagger,ease:this.tweenParams.transitionLines.ease,force3D:!0,onComplete:()=>{At.delayedCall(.5,()=>{t()})}})},in:t=>{At.set(this.$transition,{opacity:1});const e=new eh;this.progressEase={value:0},this.loaderProgress=new Qu,this.imageLoader=new Ju({root:document.querySelector("#swup")}),this.video=new ih,this.video.init(),this.videoLoader=new th({root:document.querySelector("#swup")}),e.add(i=>{this.imageLoader.init(),this.imageLoader.imagesList.forEach(s=>{const r={src:s};this.loaderProgress.add(this.imageLoader.load.bind(this.imageLoader,r,()=>{}))}),this.videoLoader.init(),this.videoLoader.videosList.forEach(s=>{const r={video:s};this.loaderProgress.add(this.videoLoader.load.bind(this.videoLoader,r,()=>{}))}),i()}),e.add(i=>{this.loaderProgress.init({onUpdateProgressAnimation:(s,r)=>{s===1&&requestAnimationFrame(()=>{r()})},onCompleteProgressAnimation:()=>{requestAnimationFrame(()=>{this.pageInit(),At.to(this.$transitionLines,{y:"-100%",duration:this.tweenParams.transitionLines.duration,ease:this.tweenParams.transitionLines.ease,force3D:!0}),At.delayedCall(.5,()=>{i()})})}}),this.loaderProgress.set(),this.loaderProgress.run()}),e.done(()=>{At.to(this.$transition,{opacity:0,duration:this.tweenParams.transition.duration,ease:this.tweenParams.transition.ease,onComplete:()=>{kt.event.enableEvent(),kt.smoothScroll.start(),zc(),t()}})})}}]})]}),this.swup.hooks.on("content:replace",()=>{const t=document.querySelector("[data-content]");t&&(t.scrollTop=0),window.scrollTo(0,0)})}enter(){kt.detection.pcLayout||(this.fixedHeader=new CE,this.fixedHeader.init()),this.headerInfo=new RE,this.headerInfo.init(),this.footerWebgl=new IE,this.footerWebgl.init(),this.footerWebgl.enter({$contentRoot:document.querySelector("[data-footer]")})}pageInit(){kt.detection.touchDevice||(this.pShuffleHover=new So({root:document.querySelector("#swup")}),this.pShuffleHover.init()),document.querySelector(this.pageNames.home)&&_o.init(),document.querySelector(this.pageNames.about)&&go.init(),document.querySelector(this.pageNames.projects)&&vo.init(),document.querySelector(this.pageNames.contact)&&xo.init()}pageDestroy(){this.pShuffleHover&&this.pShuffleHover.destroy(),document.querySelector(this.pageNames.home)&&_o.destroy(),document.querySelector(this.pageNames.about)&&go.destroy(),document.querySelector(this.pageNames.projects)&&vo.destroy(),document.querySelector(this.pageNames.contact)&&xo.destroy()}pageContentReplace(){document.querySelector(this.pageNames.home)&&_o.contentReplace(),document.querySelector(this.pageNames.about)&&go.contentReplace(),document.querySelector(this.pageNames.projects)&&vo.contentReplace(),document.querySelector(this.pageNames.contact)&&xo.contentReplace()}}const NE=new UE;window.APP=new im(NE);APP.init();
