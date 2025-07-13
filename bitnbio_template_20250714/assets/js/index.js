var Fu=Object.defineProperty;var Ou=(r,t,e)=>t in r?Fu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var wt=(r,t,e)=>(Ou(r,typeof t!="symbol"?t+"":t,e),e);class zu{constructor(){this.breakPoint={pc:1600,sp:768},this.attrName={os:{key:"data-os",value:{mac:"mac",windows:"windows"}},devicePixelRatio:{key:"data-device-pixel-ratio"},touchDevice:{key:"data-touch-device"},layout:{key:"data-layout",value:{pc:"pc",sp:"sp"}}},this.init()}init(){this.os=this.getOSName(),this.devicePixelRatio=this.getDevicePixelRatio(),this.touchDevice=this.isTouchDevice(),this.pcLayout=this.isPcLayout(),this.tablet=this.isTablet(),this.mobile=this.isMobile()}getOSName(){let t;return this.ua=navigator.userAgent,this.ua&&(this.ua.includes("Mac")?t=this.attrName.os.value.mac:t=this.attrName.os.value.windows,document.documentElement.setAttribute(this.attrName.os.key,t)),t}getDevicePixelRatio(){const t=window.devicePixelRatio;return document.documentElement&&document.documentElement.setAttribute(this.attrName.devicePixelRatio.key,t),t}isTouchDevice(){const t=matchMedia==null?void 0:matchMedia("(pointer:coarse)");let e;return"maxTouchPoints"in navigator&&(e=navigator.maxTouchPoints>0),"msMaxTouchPoints"in navigator&&(e=navigator.msMaxTouchPoints>0),(t==null?void 0:t.media)==="(pointer:coarse)"&&(e=!!t.matches),"orientation"in window&&(e=!0),e?document.documentElement.setAttribute(this.attrName.touchDevice.key,"true"):document.documentElement.setAttribute(this.attrName.touchDevice.key,"false"),e}isPcLayout(){const t=window.innerWidth>=this.breakPoint.sp;return t?document.documentElement.setAttribute(this.attrName.layout.key,this.attrName.layout.value.pc):document.documentElement.setAttribute(this.attrName.layout.key,this.attrName.layout.value.sp),t}isTablet(){return this.pcLayout&&this.touchDevice}isMobile(){return!this.pcLayout&&this.isTouchDevice}}class Bu{constructor(){wt(this,"onEvent",t=>{this.prevent(t)});wt(this,"prevent",t=>{t.preventDefault()});this.eventName={wheel:"wheel",touchMove:"ontouchmove"in document?"touchmove":"click",touchStart:"touchstart",touchEnd:"touchend",keyDown:"keydown",keyUp:"keyup"}}enableEvent(){window.removeEventListener(this.eventName.wheel,this.onEvent),window.removeEventListener(this.eventName.touchMove,this.onEvent),window.removeEventListener(this.eventName.touchStart,this.onEvent),window.removeEventListener(this.eventName.touchEnd,this.onEvent),window.removeEventListener(this.eventName.keyDown,this.onEvent),window.removeEventListener(this.eventName.keyUp,this.onEvent)}disableEvent(){window.addEventListener(this.eventName.wheel,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchMove,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchStart,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.touchEnd,this.onEvent,{passive:!1}),window.addEventListener(this.eventName.keyDown,this.onEvent),window.addEventListener(this.eventName.keyUp,this.onEvent)}}class Hu{constructor(t={}){this.options=t,this.dataName={observerId:"observerId"},this.inViewList=[],this.outViewList=[],this.observer=null,this.observerCount=0}init(){this.createObserver()}createObserver(){this.observer=new IntersectionObserver((...t)=>{this.callback(...t)},this.options)}add(t,e=null,n=null){t.dataset[this.dataName.observerId]=this.observerCount,e&&(this.inViewList[this.observerCount]=e),n&&(this.outViewList[this.observerCount]=n),this.observer.observe(t),this.observerCount++}remove(t){const e=t.dataset[this.dataName.observerId];this.inViewList[e]&&(this.inViewList[e]=null),this.outViewList[e]&&(this.outViewList[e]=null),t.dataset[this.dataName.observerId]="",this.observer.unobserve(t)}callback(t){t.forEach(e=>{e.isIntersecting?this.inView(e):this.outView(e)})}inView(t){const i=t.target.dataset[this.dataName.observerId];this.inViewList[i]&&this.inViewList[i]()}outView(t){const i=t.target.dataset[this.dataName.observerId];this.outViewList[i]&&this.outViewList[i]()}}function bl(r,t=1){return Math.round(r*t)/t}function ku(r){return r*Math.PI/180}function Vu(r,t){return r*.5/Math.tan(ku(t*.5))}class Gu{constructor(){wt(this,"onResize",()=>{requestAnimationFrame(()=>{this.isChangedDevicePixelRatio()&&window.location.reload(),this.setSize(),this.isChangedLayout()&&window.location.reload(),this.setVariable(),this.setPrevSize()})});this.size={window:{x:0,y:0},body:{x:0,y:0}},this.prevSize={body:{x:0}},this.firstViewSize={window:{x:0,y:0}},this.pcDevice=!0,this.pixelRatio=window.devicePixelRatio,this.breakPoint=768}init(){this.pcDevice=!gn.detection.mobile&&!gn.detection.tablet,this.setSize(),this.setPrevSize(),this.setFirstViewSize(),this.setVariable(),this.addEventListeners()}setSize(){this.size.window.x=window.innerWidth,this.size.window.y=window.innerHeight,document.body.style.width="100%",this.size.body.x=document.body.clientWidth,this.size.body.y=document.body.clientHeight,document.body.style.width=""}setPrevSize(){this.prevSize.body.x=this.size.body.x}setFirstViewSize(){this.firstViewSize.window.y=this.size.window.y}setVariable(){const t=bl(document.documentElement.clientWidth*.01,1e4),e=bl(this.size.window.y*.01,1e4);document.documentElement.style.setProperty("--vw",`${t}px`),document.documentElement.style.setProperty("--vh",`${e}px`)}addEventListeners(){window.addEventListener("resize",this.onResize,!1)}isChangedLayout(){return gn.detection.pcLayout?this.size.body.x<this.breakPoint:this.size.body.x>=this.breakPoint}isChangedDevicePixelRatio(){return this.pixelRatio!==gn.detection.getDevicePixelRatio()}}var Wu="1.1.20";function qc(r,t,e){return Math.max(r,Math.min(t,e))}function Xu(r,t,e){return(1-e)*r+e*t}function qu(r,t,e,n){return Xu(r,t,1-Math.exp(-e*n))}function Yu(r,t){return(r%t+t)%t}var $u=class{constructor(){wt(this,"isRunning",!1);wt(this,"value",0);wt(this,"from",0);wt(this,"to",0);wt(this,"currentTime",0);wt(this,"lerp");wt(this,"duration");wt(this,"easing");wt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=qc(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=qu(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function ju(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var Ku=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){wt(this,"width",0);wt(this,"height",0);wt(this,"scrollHeight",0);wt(this,"scrollWidth",0);wt(this,"debouncedResize");wt(this,"wrapperResizeObserver");wt(this,"contentResizeObserver");wt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});wt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});wt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=ju(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yc=class{constructor(){wt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Al=100/6,Xn={passive:!1},Zu=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){wt(this,"touchStart",{x:0,y:0});wt(this,"lastDelta",{x:0,y:0});wt(this,"window",{width:0,height:0});wt(this,"emitter",new Yc);wt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});wt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});wt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});wt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=n===1?Al:n===2?this.window.width:1,s=n===1?Al:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});wt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Xn),this.element.addEventListener("touchstart",this.onTouchStart,Xn),this.element.addEventListener("touchmove",this.onTouchMove,Xn),this.element.addEventListener("touchend",this.onTouchEnd,Xn)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Xn),this.element.removeEventListener("touchstart",this.onTouchStart,Xn),this.element.removeEventListener("touchmove",this.onTouchMove,Xn),this.element.removeEventListener("touchend",this.onTouchEnd,Xn)}},Ju=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=R=>Math.min(1,1.001-Math.pow(2,-10*R)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f="vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:d,overscroll:M=!0,autoRaf:S=!1,anchors:v=!1,__experimental__naiveDimensions:A=!1}={}){wt(this,"_isScrolling",!1);wt(this,"_isStopped",!1);wt(this,"_isLocked",!1);wt(this,"_preventNextNativeScrollEvent",!1);wt(this,"_resetVelocityTimeout",null);wt(this,"__rafID",null);wt(this,"isTouching");wt(this,"time",0);wt(this,"userData",{});wt(this,"lastVelocity",0);wt(this,"velocity",0);wt(this,"direction",0);wt(this,"options");wt(this,"targetScroll");wt(this,"animatedScroll");wt(this,"animate",new $u);wt(this,"emitter",new Yc);wt(this,"dimensions");wt(this,"virtualScroll");wt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});wt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});wt(this,"onClick",r=>{const e=r.composedPath().find(n=>{var i;return n instanceof HTMLAnchorElement&&((i=n.getAttribute("href"))==null?void 0:i.startsWith("#"))});if(e){const n=e.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(n,i)}}});wt(this,"onPointerDown",r=>{r.button===1&&this.reset()});wt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(m=>{var d,M,S;return m instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(m))||((d=m.hasAttribute)==null?void 0:d.call(m,"data-lenis-prevent"))||i&&((M=m.hasAttribute)==null?void 0:M.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const p=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...p?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});wt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});wt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Wu,(!r||r===document.documentElement)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:p,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:d,overscroll:M,autoRaf:S,anchors:v,__experimental__naiveDimensions:A},this.dimensions=new Ku(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Zu(e,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const p=f.getBoundingClientRect();r=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=qc(0,r,this.limit),r===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(f,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),p||this.emit(),p&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;const r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?Yu(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};class Qu{constructor(){this.lenis=null,this.raf=null}init(){this.lenis=new Ju,this.raf=t=>{this.lenis.raf(t),requestAnimationFrame(this.raf)},requestAnimationFrame(this.raf)}start(){this.lenis.start()}stop(){this.lenis.stop()}}class tf{constructor(){this.isStartup=!0,this.detection=new zu,this.event=new Bu,this.reload=new Gu,this.iObserver=new Hu,this.smoothScroll=new Qu}async init(){await new Promise(t=>{this.reload.init(),this.iObserver.init(),this.smoothScroll.init(),t()})}}const gn=new tf;function Nn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $c(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ur={duration:.5,overwrite:!1,delay:0},qo,we,ae,on=1e8,ne=1/on,Va=Math.PI*2,ef=Va/4,nf=0,jc=Math.sqrt,rf=Math.cos,sf=Math.sin,Me=function(t){return typeof t=="string"},he=function(t){return typeof t=="function"},Hn=function(t){return typeof t=="number"},Yo=function(t){return typeof t=="undefined"},An=function(t){return typeof t=="object"},ze=function(t){return t!==!1},$o=function(){return typeof window!="undefined"},as=function(t){return he(t)||Me(t)},Kc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,Ga=/(?:-?\.?\d|\.)+/gi,Zc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jc=/[+-]=-?[.\d]+/,Qc=/[^,'"\[\]\s]+/gi,af=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,Mn,Wa,jo,Je={},ks={},th,eh=function(t){return(ks=fr(t,Je))&&Ge},Ko=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vr=function(t,e){return!e&&console.warn(t)},nh=function(t,e){return t&&(Je[t]=e)&&ks&&(ks[t]=e)||Je},Gr=function(){return 0},of={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},lf={suppressEvents:!0},Zo={},ii=[],Xa={},ih,Ye={},sa={},Rl=30,Is=[],Jo="",Qo=function(t){var e=t[0],n,i;if(An(e)||he(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Is.length;i--&&!Is[i].targetTest(e););n=Is[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ah(t[i],n)))||t.splice(i,1);return t},Ci=function(t){return t._gsap||Qo(ln(t))[0]._gsap},rh=function(t,e,n){return(n=t[e])&&he(n)?t[e]():Yo(n)&&t.getAttribute&&t.getAttribute(e)||n},Be=function(t,e){return(t=t.split(",")).forEach(e)||t},ue=function(t){return Math.round(t*1e5)/1e5||0},_e=function(t){return Math.round(t*1e7)/1e7||0},sr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cf=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Vs=function(){var t=ii.length,e=ii.slice(0),n,i;for(Xa={},ii.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sh=function(t,e,n,i){ii.length&&!we&&Vs(),t.render(e,n,i||we&&e<0&&(t._initted||t._startAt)),ii.length&&!we&&Vs()},ah=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qc).length<2?e:Me(t)?t.trim():t},oh=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fr=function(t,e){for(var n in e)t[n]=e[n];return t},Cl=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=An(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Gs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zr=function(t){var e=t.parent||oe,n=t.keyframes?hf(Pe(t.keyframes)):Qe;if(ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},uf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},lh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ks=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},oi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Pi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ff=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},qa=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(Ls):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},df=function r(t){return!t||t._ts&&r(t.parent)},Pl=function(t){return t._repeat?dr(t._tTime,t=t.duration()+t._rDelay)*t:0},dr=function(t,e){var n=Math.floor(t=_e(t/e));return t&&n===t?n-1:n},Ws=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zs=function(t){return t._end=_e(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Js=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=_e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zs(t),n._dirty||Pi(n,t)),t},ch=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ws(t.rawTime(),e),(!e._dur||Zr(0,e.totalDuration(),n)-e._tTime>ne)&&e.render(n,!0)),Pi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ne}},En=function(t,e,n,i){return e.parent&&oi(e),e._start=_e((Hn(n)?n:n||t!==oe?rn(t,n,e):t._time)+e._delay),e._end=_e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),lh(t,e,"_first","_last",t._sort?"_start":0),Ya(e)||(t._recent=e),i||ch(t,e),t._ts<0&&Js(t,t._tTime),t},hh=function(t,e){return(Je.ScrollTrigger||Ko("scrollTrigger",e))&&Je.ScrollTrigger.create(e,t)},uh=function(t,e,n,i,s){if(el(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ih!==$e.frame)return ii.push(t),t._lazy=[s,i],1},pf=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ya=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mf=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&pf(t)&&!(!t._initted&&Ya(t))||(t._ts<0||t._dp._ts<0)&&!Ya(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Zr(0,t._tDur,e),h=dr(l,o),t._yoyo&&h&1&&(a=1-a),h!==dr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||we||i||t._zTime===ne||!e&&t._zTime){if(!t._initted&&uh(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ne:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&qa(t,e,n,!0),t._onUpdate&&!n&&je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&oi(t,1),!n&&!we&&(je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_f=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},pr=function(t,e,n,i){var s=t._repeat,a=_e(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:_e(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Js(t,t._tTime=t._tDur*o),t.parent&&Zs(t),n||Pi(t.parent,t),t},Dl=function(t){return t instanceof Ue?Pi(t):pr(t,t._dur)},gf={_start:0,endTime:Gr,totalDuration:Gr},rn=function r(t,e,n){var i=t.labels,s=t._recent||gf,a=t.duration()>=on?s.endTime(!1):t._dur,o,l,c;return Me(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Br=function(t,e,n){var i=Hn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ze(l.vars.inherit)&&l.parent;a.immediateRender=ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new me(e[0],a,e[s+1])},hi=function(t,e){return t||t===0?e(t):e},Zr=function(t,e,n){return n<t?t:n>e?e:n},Ce=function(t,e){return!Me(t)||!(e=af.exec(t))?"":e[1]},vf=function(t,e,n){return hi(n,function(i){return Zr(t,e,i)})},$a=[].slice,fh=function(t,e){return t&&An(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&An(t[0]))&&!t.nodeType&&t!==Mn},xf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Me(i)&&!e||fh(i,1)?(s=n).push.apply(s,ln(i)):n.push(i)})||n},ln=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Me(t)&&!n&&(Wa||!mr())?$a.call((e||jo).querySelectorAll(t),0):Pe(t)?xf(t,n):fh(t)?$a.call(t,0):t?[t]:[]},ja=function(t){return t=ln(t)[0]||Vr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ln(e,n.querySelectorAll?n:n===t?Vr("Invalid scope")||jo.createElement("div"):t)}},dh=function(t){return t.sort(function(){return .5-Math.random()})},ph=function(t){if(he(t))return t;var e=An(t)?t:{each:t},n=Di(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Me(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,M,S,v,A,R,b,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,on])[1],!x){for(b=-on;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=l?Math.min(x,_)*h-.5:i%x,M=x===on?0:l?_*u/x-.5:i/x|0,b=0,P=on,R=0;R<_;R++)S=R%x-d,v=M-(R/x|0),m[R]=A=c?Math.abs(c==="y"?v:S):jc(S*S+v*v),A>b&&(b=A),A<P&&(P=A);i==="random"&&dh(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ce(e.amount||e.each)||0,n=n&&_<0?Th(n):n}return _=(m[f]-m.min)/m.max||0,_e(m.b+(n?n(_):_)*m.v)+m.u}},Ka=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=_e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hn(n)?0:Ce(n))}},mh=function(t,e){var n=Pe(t),i,s;return!n&&An(t)&&(i=n=t.radius||on,t.values?(t=ln(t.values),(s=!Hn(t[0]))&&(i*=i)):t=Ka(t.increment)),hi(e,n?he(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=on,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-o,p=t[u].y-l,f=f*f+p*p):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Hn(a)?h:h+Ce(a)}:Ka(t))},_h=function(t,e,n,i){return hi(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Sf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Mf=function(t,e){return function(n){return t(parseFloat(n))+(e||Ce(n))}},yf=function(t,e,n){return vh(t,e,0,1,n)},gh=function(t,e,n){return hi(n,function(i){return t[~~e(i)]})},Ef=function r(t,e,n){var i=e-t;return Pe(t)?gh(t,r(0,t.length),e):hi(n,function(s){return(i+(s-t)%i)%i+t})},Tf=function r(t,e,n){var i=e-t,s=i*2;return Pe(t)?gh(t,r(0,t.length-1),e):hi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Wr=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Qc:Ga),n+=t.substr(e,i-e)+_h(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},vh=function(t,e,n,i,s){var a=e-t,o=i-n;return hi(s,function(l){return n+((l-t)/a*o||0)})},wf=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Me(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=fr(Pe(t)?[]:{},t));if(!h){for(l in e)tl.call(o,t,l,"get",e[l]);s=function(g){return rl(g,o)||(a?t.p:t)}}}return hi(n,s)},Ll=function(t,e,n){var i=t.labels,s=on,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},je=function(t,e,n){var i=t.vars,s=i[e],a=ae,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ii.length&&Vs(),o&&(ae=o),h=l?s.apply(c,l):s.call(c),ae=a,h},Nr=function(t){return oi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&je(t,"onInterrupt"),t},ir,xh=[],Sh=function(t){if(t)if(t=!t.name&&t.default||t,$o()||t.headless){var e=t.name,n=he(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Gr,render:rl,add:tl,kill:kf,modifier:Hf,rawVars:0},a={targetTest:0,get:0,getSetter:il,aliases:{},register:0};if(mr(),t!==i){if(Ye[e])return;Qe(i,Qe(Gs(t,s),a)),fr(i.prototype,fr(s,Gs(t,a))),Ye[i.prop=e]=i,t.targetTest&&(Is.push(i),Zo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nh(e,i),t.register&&t.register(Ge,i,He)}else xh.push(t)},ee=255,Fr={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},aa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ee+.5|0},Mh=function(t,e,n){var i=t?Hn(t)?[t>>16,t>>8&ee,t&ee]:0:Fr.black,s,a,o,l,c,h,u,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fr[t])i=Fr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ee,i&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ga),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=aa(l+1/3,s,a),i[1]=aa(l,s,a),i[2]=aa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Zc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ga)||Fr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ee,a=i[1]/ee,o=i[2]/ee,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},yh=function(t){var e=[],n=[],i=-1;return t.split(ri).forEach(function(s){var a=s.match(nr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Il=function(t,e,n){var i="",s=(t+i).match(ri),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Mh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=yh(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ri,"1").split(nr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ri),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},ri=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),bf=/hsl[a]?\(/,Eh=function(t){var e=t.join(" "),n;if(ri.lastIndex=0,ri.test(e))return n=bf.test(e),t[1]=Il(t[1],n),t[0]=Il(t[0],n,yh(t[1])),!0},Xr,$e=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,p,g=function _(m){var d=r()-i,M=m===!0,S,v,A,R;if((d>t||d<0)&&(n+=d-e),i+=d,A=i-n,S=A-a,(S>0||M)&&(R=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,a+=S+(S>=s?4:s-S),v=1),M||(l=c(_)),v)for(p=0;p<o.length;p++)o[p](A,f,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){th&&(!Wa&&$o()&&(Mn=Wa=window,jo=Mn.document||{},Je.gsap=Ge,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(Ge.version),eh(ks||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),xh.forEach(Sh)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Xr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Xr=0,c=Gr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,d,M){var S=d?function(v,A,R,b){m(v,A,R,b),u.remove(S)}:m;return u.remove(m),o[M?"unshift":"push"](S),mr(),S},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},u}(),mr=function(){return!Xr&&$e.wake()},Gt={},Af=/^[\d.\-M][\d.\-,\s]/,Rf=/["']/g,Cf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Rf,"").trim():+c,i=l.substr(o+1).trim();return e},Pf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Df=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Cf(e[1])]:Pf(t).split(",").map(ah)):Gt._CE&&Af.test(t)?Gt._CE("",t):n},Th=function(t){return function(e){return 1-t(1-e)}},wh=function r(t,e){for(var n=t._first,i;n;)n instanceof Ue?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Di=function(t,e){return t&&(he(t)?t:Gt[t]||Df(t))||e},Oi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Be(t,function(o){Gt[o]=Je[o]=s,Gt[a=o.toLowerCase()]=n;for(var l in s)Gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Gt[o+"."+l]=s[l]}),s},bh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Va*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*sf((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:bh(o);return s=Va/s,l.config=function(c,h){return r(t,c,h)},l},la=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:bh(n);return i.config=function(s){return r(t,s)},i};Be("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Oi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;Oi("Elastic",oa("in"),oa("out"),oa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Oi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Oi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Oi("Circ",function(r){return-(jc(1-r*r)-1)});Oi("Sine",function(r){return r===1?1:-rf(r*ef)+1});Oi("Back",la("in"),la("out"),la());Gt.SteppedEase=Gt.steps=Je.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ne;return function(o){return((i*Zr(0,a,o)|0)+s)*n}}};ur.ease=Gt["quad.out"];Be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Jo+=r+","+r+"Params,"});var Ah=function(t,e){this.id=nf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:rh,this.set=e?e.getSetter:il},qr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,pr(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),Xr||$e.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,pr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Js(this,n),!s._dp||s.parent||ch(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&En(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ne||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?dr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ws(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(Zr(-Math.abs(this._delay),this._tDur,s),i!==!1),Zs(this),ff(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&En(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ws(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lf);var i=we;return we=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(rn(this,n),ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ze(i)),this._dur||(this._zTime=-ne),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ne)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=he(n)?n:oh,o=function(){var c=i.then;i.then=null,he(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Nr(this)},r}();Qe(qr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Ue=function(r){$c(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ze(n.sortChildren),oe&&En(n.parent||oe,Nn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hh(Nn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Br(0,arguments,this),this},e.from=function(i,s,a){return Br(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Br(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,zr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new me(i,s,rn(this,a),1),this},e.call=function(i,s,a){return En(this,me.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new me(i,a,rn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,zr(a).immediateRender=ze(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,zr(o).immediateRender=ze(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:_e(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,M,S,v,A,R,b;if(this!==oe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,S=this._ts,d=!S,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=_e(h%m),h===l?(_=this._repeat,f=c):(A=_e(h/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=dr(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),R&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var P=R&&A&1,x=P===(R&&_&1);if(_<A&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(b?0:_e(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&je(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;wh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=_f(this,_e(o),_e(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(je(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){M=0,g&&(h+=this._zTime=-ne);break}}p=g}else{p=this._last;for(var y=i<0?i:f;p;){if(g=p._prev,(p._act||y<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,a||we&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){M=0,g&&(h+=this._zTime=y?-ne:ne);break}}p=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-ne)._zTime=f>=o?1:-1,this._ts))return this._start=v,Zs(this),this.render(i,s,a);this._onUpdate&&!s&&je(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&oi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(je(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Hn(s)||(s=rn(this,s,i)),!(i instanceof qr)){if(Pe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Me(i))return this.addLabel(i,s);if(he(i))i=me.delayedCall(0,i);else return this}return this!==i?En(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-on);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof me?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Me(i)?this.removeLabel(i):he(i)?this.killTweensOf(i):(i.parent===this&&Ks(this,i),i===this._recent&&(this._recent=this._last),Pi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_e($e.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=rn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=me.delayedCall(0,s||Gr,a);return o.data="isPause",this._hasPause=1,En(this,o,rn(this,i))},e.removePause=function(i){var s=this._first;for(i=rn(this,i);s;)s._start===i&&s.data==="isPause"&&oi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ti!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ln(i),l=this._first,c=Hn(s),h;l;)l instanceof me?cf(l._targets,o)&&(c?(!ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=rn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,g=me.to(a,Qe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&pr(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Qe({startAt:{time:rn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ll(this,rn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ll(this,rn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Pi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=on,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,En(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;pr(a,a===oe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(oe._ts&&(sh(oe,Ws(i,oe)),ih=$e.frame),$e.frame>=Rl){Rl+=Ke.autoSleep||120;var s=oe._first;if((!s||!s._ts)&&Ke.autoSleep&&$e._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$e.sleep()}}},t}(qr);Qe(Ue.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lf=function(t,e,n,i,s,a,o){var l=new He(this._pt,t,e,0,1,Ih,null,s),c=0,h=0,u,f,p,g,_,m,d,M;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Wr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(ra)||[];u=ra.exec(i);)g=u[0],_=i.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?sr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Jc.test(i)||d)&&(l.e=0),this._pt=l,l},tl=function(t,e,n,i,s,a,o,l,c,h){he(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:he(u)?c?t[e.indexOf("set")||!he(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=he(u)?c?Of:Dh:nl,g;if(Me(i)&&(~i.indexOf("random(")&&(i=Wr(i)),i.charAt(1)==="="&&(g=sr(f,i)+(Ce(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Za)return!isNaN(f*i)&&i!==""?(g=new He(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Bf:Lh,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&Ko(e,i),Lf.call(this,t,e,f,i,p,l||Ke.stringFilter,c))},If=function(t,e,n,i,s){if(he(t)&&(t=Hr(t,s,e,n,i)),!An(t)||t.style&&t.nodeType||Pe(t)||Kc(t))return Me(t)?Hr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Hr(t[o],s,e,n,i);return a},Rh=function(t,e,n,i,s,a){var o,l,c,h;if(Ye[t]&&(o=new Ye[t]).init(s,o.rawVars?e[t]:If(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new He(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ir))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ti,Za,el=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,M=d&&d.data==="nested"?d.vars.targets:m,S=t._overwrite==="auto"&&!qo,v=t.timeline,A,R,b,P,x,y,L,z,V,K,H,F,W;if(v&&(!f||!s)&&(s="none"),t._ease=Di(s,ur.ease),t._yEase=u?Th(Di(u===!0?s:u,ur.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(z=m[0]?Ci(m[0]).harness:0,F=z&&i[z.prop],A=Gs(i,Zo),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?Ls:of),_._lazy=0),a){if(oi(t._startAt=me.set(m,Qe({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&ze(l),startAt:null,delay:0,onUpdate:c&&function(){return je(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!o&&!p)&&t._startAt.revert(Ls),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),b=Qe({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ze(l),immediateRender:o,stagger:0,parent:d},A),F&&(b[z.prop]=F),oi(t._startAt=me.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(Ls):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ze(l)||l&&!g,R=0;R<m.length;R++){if(x=m[R],L=x._gsap||Qo(m)[R]._gsap,t._ptLookup[R]=K={},Xa[L.id]&&ii.length&&Vs(),H=M===m?R:M.indexOf(x),z&&(V=new z).init(x,F||A,t,H,M)!==!1&&(t._pt=P=new He(t._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(O){K[O]=P}),V.priority&&(y=1)),!z||F)for(b in A)Ye[b]&&(V=Rh(b,A,t,H,x,M))?V.priority&&(y=1):K[b]=P=tl.call(t,x,b,"get",A[b],H,M,0,i.stringFilter);t._op&&t._op[R]&&t.kill(x,t._op[R]),S&&t._pt&&(ti=t,oe.killTweensOf(x,K,t.globalTime(e)),W=!t.parent,ti=0),t._pt&&l&&(Xa[L.id]=1)}y&&Uh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,f&&e<=0&&v.render(on,!0,!0)},Uf=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Za=1,t.vars[e]="+=0",el(t,o),Za=0,l?Vr(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ue(n)+Ce(u.e)),u.b&&(u.b=h.s+Ce(u.b))},Nf=function(t,e){var n=t[0]?Ci(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=fr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ff=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Pe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Hr=function(t,e,n,i,s){return he(t)?t.call(e,n,i,s):Me(t)&&~t.indexOf("random(")?Wr(t):t},Ch=Jo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ph={};Be(Ch+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ph[r]=1});var me=function(r){$c(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,M=i.parent||oe,S=(Pe(n)||Kc(n)?Hn(n[0]):"length"in i)?[n]:ln(n),v,A,R,b,P,x,y,L;if(o._targets=S.length?Qo(S):Vr("GSAP target "+n+" not found. https://gsap.com",!Ke.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||as(c)||as(h)){if(i=o.vars,v=o.timeline=new Ue({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),v.kill(),v.parent=v._dp=Nn(o),v._start=0,f||as(c)||as(h)){if(b=S.length,y=f&&ph(f),An(f))for(P in f)~Ch.indexOf(P)&&(L||(L={}),L[P]=f[P]);for(A=0;A<b;A++)R=Gs(i,Ph),R.stagger=0,d&&(R.yoyoEase=d),L&&fr(R,L),x=S[A],R.duration=+Hr(c,Nn(o),A,x,S),R.delay=(+Hr(h,Nn(o),A,x,S)||0)-o._delay,!f&&b===1&&R.delay&&(o._delay=h=R.delay,o._start+=h,R.delay=0),v.to(x,R,y?y(A,x,S):0),v._ease=Gt.none;v.duration()?c=h=0:o.timeline=0}else if(g){zr(Qe(v.vars.defaults,{ease:"none"})),v._ease=Di(g.ease||i.ease||"none");var z=0,V,K,H;if(Pe(g))g.forEach(function(F){return v.to(S,F,">")}),v.duration();else{R={};for(P in g)P==="ease"||P==="easeEach"||Ff(P,g[P],R,g.easeEach);for(P in R)for(V=R[P].sort(function(F,W){return F.t-W.t}),z=0,A=0;A<V.length;A++)K=V[A],H={ease:K.e,duration:(K.t-(A?V[A-1].t:0))/100*c},H[P]=K.v,v.to(S,H,z),z+=H.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!qo&&(ti=Nn(o),oe.killTweensOf(S),ti=0),En(M,Nn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===_e(M._time)&&ze(u)&&df(Nn(o))&&M.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-h)||0)),m&&hh(Nn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ne&&!h?l:i<ne?0:i,f,p,g,_,m,d,M,S,v;if(!c)mf(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=_e(u%_),u===l?(g=this._repeat,f=c):(m=_e(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(v=this._yEase,f=c-f),m=dr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(S&&this._yEase&&wh(S,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(_e(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(uh(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&!g&&(je(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&qa(this,i,s,a),je(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&je(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&qa(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&oi(this,1),!s&&!(h&&!o)&&(u||o||d)&&(je(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Xr||$e.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||el(this,c),h=this._ease(c/this._dur),Uf(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Js(this,0),this.parent||lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!we),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ti&&ti.vars.overwrite!==!0)._first||Nr(this),this.parent&&a!==this.timeline.totalDuration()&&pr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ln(i):o,c=this._ptLookup,h=this._pt,u,f,p,g,_,m,d;if((!s||s==="all")&&uf(o,l))return s==="all"&&(this._pt=0),Nr(this);for(u=this._op=this._op||[],s!=="all"&&(Me(s)&&(_={},Be(s,function(M){return _[M]=1}),s=_),s=Nf(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(u[d]=s,g=f,p={}):(p=u[d]=u[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ks(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&Nr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Br(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Br(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return oe.killTweensOf(i,s,a)},t}(qr);Qe(me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Be("staggerTo,staggerFrom,staggerFromTo",function(r){me[r]=function(){var t=new Ue,e=$a.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nl=function(t,e,n){return t[e]=n},Dh=function(t,e,n){return t[e](n)},Of=function(t,e,n,i){return t[e](i.fp,n)},zf=function(t,e,n){return t.setAttribute(e,n)},il=function(t,e){return he(t[e])?Dh:Yo(t[e])&&t.setAttribute?zf:nl},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Bf=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ih=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Hf=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},kf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ks(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Vf=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Uh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},He=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Lh,this.d=l||this,this.set=c||nl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Vf,this.m=n,this.mt=s,this.tween=i},r}();Be(Jo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Zo[r]=1});Je.TweenMax=Je.TweenLite=me;Je.TimelineLite=Je.TimelineMax=Ue;oe=new Ue({sortChildren:!1,defaults:ur,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ke.stringFilter=Eh;var Li=[],Us={},Gf=[],Ul=0,Wf=0,ca=function(t){return(Us[t]||Gf).map(function(e){return e()})},Ja=function(){var t=Date.now(),e=[];t-Ul>2&&(ca("matchMediaInit"),Li.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ca("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ul=t,ca("matchMedia"))},Nh=function(){function r(e,n){this.selector=n&&ja(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wf++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){he(n)&&(s=i,i=n,n=he);var a=this,o=function(){var c=ae,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=ja(s)),ae=a,u=i.apply(a,arguments),he(u)&&a._r.push(u),ae=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===he?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ue?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof me)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Li.length;a--;)Li[a].id===this.id&&Li.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Xf=function(){function r(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){An(n)||(n={matches:n});var a=new Nh(0,s||this.scope),o=a.conditions={},l,c,h;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Mn.matchMedia(n[c]),l&&(Li.indexOf(a)<0&&Li.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ja):l.addEventListener("change",Ja)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sh(i)})},timeline:function(t){return new Ue(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Me(t)&&(t=ln(t)[0]);var s=Ci(t||{}).get,a=n?oh:ah;return n==="native"&&(n=""),t&&(e?a((Ye[e]&&Ye[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ye[o]&&Ye[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ln(t),t.length>1){var i=t.map(function(h){return Ge.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Ye[e],o=Ci(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ir._pt=0,u.init(t,n?h+n:h,ir,0,[t]),u.render(1,u),ir._pt&&rl(1,ir)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ge.to(t,Qe((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Di(t.ease,ur.ease)),Cl(ur,t||{})},config:function(t){return Cl(Ke,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ye[o]&&!Je[o]&&Vr(e+" effect requires "+o+" plugin.")}),sa[e]=function(o,l,c){return n(ln(o),Qe(l||{},s),c)},a&&(Ue.prototype[e]=function(o,l,c){return this.add(sa[e](o,An(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Gt[t]=Di(e)},parseEase:function(t,e){return arguments.length?Di(t,e):Gt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ue(t),i,s;for(n.smoothChildTiming=ze(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof me&&i.vars.onComplete===i._targets[0]))&&En(n,i,i._start-i._delay),i=s;return En(oe,n,0),n},context:function(t,e){return t?new Nh(t,e):ae},matchMedia:function(t){return new Xf(t)},matchMediaRefresh:function(){return Li.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ja()},addEventListener:function(t,e){var n=Us[t]||(Us[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Us[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ef,wrapYoyo:Tf,distribute:ph,random:_h,snap:mh,normalize:yf,getUnit:Ce,clamp:vf,splitColor:Mh,toArray:ln,selector:ja,mapRange:vh,pipe:Sf,unitize:Mf,interpolate:wf,shuffle:dh},install:eh,effects:sa,ticker:$e,updateRoot:Ue.updateRoot,plugins:Ye,globalTimeline:oe,core:{PropTween:He,globals:nh,Tween:me,Timeline:Ue,Animation:qr,getCache:Ci,_removeLinkedListItem:Ks,reverting:function(){return we},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return qo=t}}};Be("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xs[r]=me[r]});$e.add(Ue.updateRoot);ir=Xs.to({},{duration:0});var qf=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Yf=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=qf(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ha=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Me(s)&&(l={},Be(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Yf(o,s)}}}},Ge=Xs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ha("roundProps",Ka),ha("modifiers"),ha("snap",mh))||Xs;me.version=Ue.version=Ge.version="3.12.7";th=1;$o()&&mr();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nl,ei,ar,sl,bi,Fl,al,$f=function(){return typeof window!="undefined"},kn={},Mi=180/Math.PI,or=Math.PI/180,Hi=Math.atan2,Ol=1e8,ol=/([A-Z])/g,jf=/(left|right|width|margin|padding|x)/i,Kf=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qa=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Zf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Jf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Qf=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Oh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},td=function(t,e,n){return t.style[e]=n},ed=function(t,e,n){return t.style.setProperty(e,n)},nd=function(t,e,n){return t._gsap[e]=n},id=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},rd=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},sd=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},le="transform",ke=le+"Origin",ad=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in kn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Fn(i,o)}):this.tfm[t]=a.x?a[t]:Fn(i,t),t===ke&&(this.tfm.zOrigin=a.zOrigin);else return Tn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ke,e,"")),t=le}(s||e)&&this.props.push(t,e,s[t])},zh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},od=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ol,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=al(),(!s||!s.isStart)&&!n[le]&&(zh(n),i.zOrigin&&n[ke]&&(n[ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bh=function(t,e){var n={target:t,props:[],revert:od,save:ad};return t._gsap||Ge.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Hh,to=function(t,e){var n=ei.createElementNS?ei.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ei.createElement(t);return n&&n.style?n:ei.createElement(t)},wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ol,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,_r(e)||e,1)||""},zl="O,Moz,ms,Ms,Webkit".split(","),_r=function(t,e,n){var i=e||bi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(zl[a]+t in s););return a<0?null:(a===3?"ms":a>=0?zl[a]:"")+t},eo=function(){$f()&&window.document&&(Nl=window,ei=Nl.document,ar=ei.documentElement,bi=to("div")||{style:{}},to("div"),le=_r(le),ke=le+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hh=!!_r("perspective"),al=Ge.core.reverting,sl=1)},Bl=function(t){var e=t.ownerSVGElement,n=to("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ar.appendChild(n);try{s=i.getBBox()}catch(a){}return n.removeChild(i),ar.removeChild(n),s},Hl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kh=function(t){var e,n;try{e=t.getBBox()}catch(i){e=Bl(t),n=1}return e&&(e.width||e.height)||n||(e=Bl(t)),e&&!e.width&&!e.x&&!e.y?{x:+Hl(t,["x","cx","x1"])||0,y:+Hl(t,["y","cy","y1"])||0,width:0,height:0}:e},Vh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kh(t))},Ui=function(t,e){if(e){var n=t.style,i;e in kn&&e!==ke&&(e=le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ol,"-$1").toLowerCase())):n.removeAttribute(e)}},ni=function(t,e,n,i,s,a){var o=new He(t._pt,e,n,0,1,a?Oh:Fh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},kl={deg:1,rad:1,turn:1},ld={grid:1,flex:1},li=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=bi.style,l=jf.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||kl[i]||kl[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Vh(t),(p||a==="%")&&(kn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[h],ue(p?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ei||!_.appendChild)&&(_=ei.body),m=_._gsap,m&&p&&m.width&&l&&m.time===$e.time&&!m.uncache)return ue(s/m.width*u);if(p&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Ui(t,e)}else(p||a==="%")&&!ld[wn(_,"display")]&&(o.position=wn(t,"position")),_===t&&(o.position="static"),_.appendChild(bi),g=bi[h],_.removeChild(bi),o.position="absolute";return l&&p&&(m=Ci(_),m.time=$e.time,m.width=_[h]),ue(f?g*s/u:g&&s?u/g*s:0)},Fn=function(t,e,n,i){var s;return sl||eo(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),kn[e]&&e!=="transform"?(s=$r(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ys(wn(t,ke))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qs[e]&&qs[e](t,e,n)||wn(t,e)||rh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?li(t,e,s,n)+n:s},cd=function(t,e,n,i){if(!n||n==="none"){var s=_r(e,t,1),a=s&&wn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=wn(t,"borderTopColor"))}var o=new He(this._pt,t.style,e,0,1,Ih),l=0,c=0,h,u,f,p,g,_,m,d,M,S,v,A;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=wn(t,e)||i,_?t.style[e]=_:Ui(t,e)),h=[n,i],Eh(h),n=h[0],i=h[1],f=n.match(nr)||[],A=i.match(nr)||[],A.length){for(;u=nr.exec(i);)m=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=sr(p,m)+v),d=parseFloat(m),S=m.substr((d+"").length),l=nr.lastIndex-S.length,S||(S=S||Ke.units[e]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(p=li(t,e,_,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Oh:Fh;return Jc.test(i)&&(o.e=0),this._pt=o,o},Vl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Vl[n]||n,e[1]=Vl[i]||i,e.join(" ")},ud=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],kn[o]&&(l=1,o=o==="transformOrigin"?ke:le),Ui(n,o);l&&(Ui(n,le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$r(n,1),a.uncache=1,zh(i)))}},qs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new He(t._pt,e,n,0,0,ud);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Yr=[1,0,0,1,0,0],Gh={},Wh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gl=function(t){var e=wn(t,le);return Wh(e)?Yr:e.substr(7).match(Zc).map(ue)},ll=function(t,e){var n=t._gsap||Ci(t),i=t.style,s=Gl(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Yr:s):(s===Yr&&!t.offsetParent&&t!==ar&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ar.appendChild(t)),s=Gl(t),l?i.display=l:Ui(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ar.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},no=function(t,e,n,i,s,a){var o=t._gsap,l=s||ll(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],M=l[5],S=e.split(" "),v=parseFloat(S[0])||0,A=parseFloat(S[1])||0,R,b,P,x;n?l!==Yr&&(b=p*m-g*_)&&(P=v*(m/b)+A*(-_/b)+(_*M-m*d)/b,x=v*(-g/b)+A*(p/b)-(p*M-g*d)/b,v=P,A=x):(R=kh(t),v=R.x+(~S[0].indexOf("%")?v/100*R.width:v),A=R.y+(~(S[1]||S[0]).indexOf("%")?A/100*R.height:A)),i||i!==!1&&o.smooth?(d=v-c,M=A-h,o.xOffset=u+(d*p+M*_)-d,o.yOffset=f+(d*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ke]="0px 0px",a&&(ni(a,o,"xOrigin",c,v),ni(a,o,"yOrigin",h,A),ni(a,o,"xOffset",u,o.xOffset),ni(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},$r=function(t,e){var n=t._gsap||new Ah(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=wn(t,ke)||"0",h,u,f,p,g,_,m,d,M,S,v,A,R,b,P,x,y,L,z,V,K,H,F,W,O,ot,N,mt,it,xt,Y,et;return h=u=f=_=m=d=M=S=v=0,p=g=1,n.svg=!!(t.getCTM&&Vh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),b=ll(t,n.svg),n.svg&&(n.uncache?(O=t.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),no(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,R=n.yOrigin||0,b!==Yr&&(L=b[0],z=b[1],V=b[2],K=b[3],h=H=b[4],u=F=b[5],b.length===6?(p=Math.sqrt(L*L+z*z),g=Math.sqrt(K*K+V*V),_=L||z?Hi(z,L)*Mi:0,M=V||K?Hi(V,K)*Mi+_:0,M&&(g*=Math.abs(Math.cos(M*or))),n.svg&&(h-=A-(A*L+R*V),u-=R-(A*z+R*K))):(et=b[6],xt=b[7],N=b[8],mt=b[9],it=b[10],Y=b[11],h=b[12],u=b[13],f=b[14],P=Hi(et,it),m=P*Mi,P&&(x=Math.cos(-P),y=Math.sin(-P),W=H*x+N*y,O=F*x+mt*y,ot=et*x+it*y,N=H*-y+N*x,mt=F*-y+mt*x,it=et*-y+it*x,Y=xt*-y+Y*x,H=W,F=O,et=ot),P=Hi(-V,it),d=P*Mi,P&&(x=Math.cos(-P),y=Math.sin(-P),W=L*x-N*y,O=z*x-mt*y,ot=V*x-it*y,Y=K*y+Y*x,L=W,z=O,V=ot),P=Hi(z,L),_=P*Mi,P&&(x=Math.cos(P),y=Math.sin(P),W=L*x+z*y,O=H*x+F*y,z=z*x-L*y,F=F*x-H*y,L=W,H=O),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=ue(Math.sqrt(L*L+z*z+V*V)),g=ue(Math.sqrt(F*F+et*et)),P=Hi(H,F),M=Math.abs(P)>2e-4?P*Mi:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wh(wn(t,le)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ue(p),n.scaleY=ue(g),n.rotation=ue(_)+o,n.rotationX=ue(m)+o,n.rotationY=ue(d)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ke]=Ys(c)),n.xOffset=n.yOffset=0,n.force3D=Ke.force3D,n.renderTransform=n.svg?dd:Hh?Xh:fd,n.uncache=0,n},Ys=function(t){return(t=t.split(" "))[0]+" "+t[1]},ua=function(t,e,n){var i=Ce(e);return ue(parseFloat(e)+parseFloat(li(t,"x",n+"px",i)))+i},fd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xh(t,e)},di="0deg",Rr="0px",pi=") ",Xh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,M=n.target,S=n.zOrigin,v="",A=d==="auto"&&t&&t!==1||d===!0;if(S&&(u!==di||h!==di)){var R=parseFloat(h)*or,b=Math.sin(R),P=Math.cos(R),x;R=parseFloat(u)*or,x=Math.cos(R),a=ua(M,a,b*x*-S),o=ua(M,o,-Math.sin(R)*-S),l=ua(M,l,P*x*-S+S)}m!==Rr&&(v+="perspective("+m+pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==Rr||o!==Rr||l!==Rr)&&(v+=l!==Rr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+pi),c!==di&&(v+="rotate("+c+pi),h!==di&&(v+="rotateY("+h+pi),u!==di&&(v+="rotateX("+u+pi),(f!==di||p!==di)&&(v+="skew("+f+", "+p+pi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+pi),M.style[le]=v||"translate(0, 0)"},dd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,M=n.forceCSS,S=parseFloat(a),v=parseFloat(o),A,R,b,P,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=or,c*=or,A=Math.cos(l)*u,R=Math.sin(l)*u,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(h*=or,x=Math.tan(c-h),x=Math.sqrt(1+x*x),b*=x,P*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),A*=x,R*=x)),A=ue(A),R=ue(R),b=ue(b),P=ue(P)):(A=u,P=f,R=b=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=li(p,"x",a,"px"),v=li(p,"y",o,"px")),(g||_||m||d)&&(S=ue(S+g-(g*A+_*b)+m),v=ue(v+_-(g*R+_*P)+d)),(i||s)&&(x=p.getBBox(),S=ue(S+i/100*x.width),v=ue(v+s/100*x.height)),x="matrix("+A+","+R+","+b+","+P+","+S+","+v+")",p.setAttribute("transform",x),M&&(p.style[le]=x)},pd=function(t,e,n,i,s){var a=360,o=Me(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Mi:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ol)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ol)%a-~~(c/a)*a)),t._pt=f=new He(t._pt,e,n,i,c,Zf),f.e=h,f.u="deg",t._props.push(n),f},Wl=function(t,e){for(var n in e)t[n]=e[n];return t},md=function(t,e,n){var i=Wl({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[le]=e,o=$r(n,1),Ui(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],a[le]=e,o=$r(n,1),a[le]=c);for(l in kn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=Ce(c),g=Ce(h),u=p!==g?li(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new He(t._pt,o,l,u,f-u,Qa),t._pt.u=g||0,t._props.push(l));Wl(o,i)};Be("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});qs[t>1?"border"+r:r]=function(o,l,c,h,u){var f,p;if(arguments.length<4)return f=a.map(function(g){return Fn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,u)}});var qh={name:"css",register:eo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,p,g,_,m,d,M,S,v,A,R,b,P;sl||eo(),this.styles=this.styles||Bh(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Ye[_]&&Rh(_,e,n,i,t,s)))){if(p=typeof h,g=qs[_],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Wr(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ri.lastIndex=0,ri.test(c)||(m=Ce(c),d=Ce(h)),d?m!==d&&(c=li(t,_,c,d)+d):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Me(c)&&~c.indexOf("random(")&&(c=Wr(c)),Ce(c+"")||c==="auto"||(c+=Ke.units[_]||Ce(Fn(t,_))||""),(c+"").charAt(1)==="="&&(c=Fn(t,_))):c=Fn(t,_),f=parseFloat(c),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Tn&&(_==="autoAlpha"&&(f===1&&Fn(t,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,o.visibility),ni(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Tn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in kn,S){if(this.styles.save(_),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||$r(t,e.parseTransform),R=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new He(this._pt,o,le,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new He(this._pt,A,"scaleY",A.scaleY,(M?sr(A.scaleY,M+u):u)-A.scaleY||0,Qa),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ke,0,o[ke]),h=hd(h),A.svg?no(t,h,0,R,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==A.zOrigin&&ni(this,A,"zOrigin",A.zOrigin,d),ni(this,o,_,Ys(c),Ys(h)));continue}else if(_==="svgOrigin"){no(t,h,1,R,0,this);continue}else if(_ in Gh){pd(this,A,_,f,M?sr(f,M+h):h);continue}else if(_==="smoothOrigin"){ni(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){md(this,h,t);continue}}else _ in o||(_=_r(_)||_);if(S||(u||u===0)&&(f||f===0)&&!Kf.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),d=Ce(h)||(_ in Ke.units?Ke.units[_]:m),m!==d&&(f=li(t,_,c,d)),this._pt=new He(this._pt,S?A:o,_,f,(M?sr(f,M+u):u)-f,!S&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Qf:Qa),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Jf);else if(_ in o)cd.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Ko(_,h);continue}S||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}b&&Uh(this)},render:function(t,e){if(e.tween._time||!al())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Fn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in kn&&e!==ke&&(t._gsap.x||Fn(t,"x"))?n&&Fl===n?e==="scale"?id:nd:(Fl=n||{})&&(e==="scale"?rd:sd):t.style&&!Yo(t.style[e])?td:~e.indexOf("-")?ed:il(t,e)},core:{_removeProperty:Ui,_getMatrix:ll}};Ge.utils.checkPrefix=_r;Ge.core.getStyleSaver=Bh;(function(r,t,e,n){var i=Be(r+","+t+","+e,function(s){kn[s]=1});Be(t,function(s){Ke.units[s]="deg",Gh[s]=1}),Tn[i[13]]=r+","+t,Be(n,function(s){var a=s.split(":");Tn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ke.units[r]="px"});Ge.registerPlugin(qh);var Te=Ge.registerPlugin(qh)||Ge;Te.core.Tween;/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _d=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,gd=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,vd=Math.PI/180,os=Math.sin,ls=Math.cos,kr=Math.abs,Cr=Math.sqrt,xd=function(t){return typeof t=="number"},Xl=1e5,qn=function(t){return Math.round(t*Xl)/Xl||0};function Sd(r,t,e,n,i,s,a){for(var o=r.length,l,c,h,u,f;--o>-1;)for(l=r[o],c=l.length,h=0;h<c;h+=2)u=l[h],f=l[h+1],l[h]=u*t+f*n+s,l[h+1]=u*e+f*i+a;return r._dirty=1,r}function Md(r,t,e,n,i,s,a,o,l){if(!(r===o&&t===l)){e=kr(e),n=kr(n);var c=i%360*vd,h=ls(c),u=os(c),f=Math.PI,p=f*2,g=(r-o)/2,_=(t-l)/2,m=h*g+u*_,d=-u*g+h*_,M=m*m,S=d*d,v=M/(e*e)+S/(n*n);v>1&&(e=Cr(v)*e,n=Cr(v)*n);var A=e*e,R=n*n,b=(A*R-A*S-R*M)/(A*S+R*M);b<0&&(b=0);var P=(s===a?-1:1)*Cr(b),x=P*(e*d/n),y=P*-(n*m/e),L=(r+o)/2,z=(t+l)/2,V=L+(h*x-u*y),K=z+(u*x+h*y),H=(m-x)/e,F=(d-y)/n,W=(-m-x)/e,O=(-d-y)/n,ot=H*H+F*F,N=(F<0?-1:1)*Math.acos(H/Cr(ot)),mt=(H*O-F*W<0?-1:1)*Math.acos((H*W+F*O)/Cr(ot*(W*W+O*O)));isNaN(mt)&&(mt=f),!a&&mt>0?mt-=p:a&&mt<0&&(mt+=p),N%=p,mt%=p;var it=Math.ceil(kr(mt)/(p/4)),xt=[],Y=mt/it,et=4/3*os(Y/2)/(1+ls(Y/2)),ct=h*e,ut=u*e,bt=u*-n,Ut=h*n,Mt;for(Mt=0;Mt<it;Mt++)i=N+Mt*Y,m=ls(i),d=os(i),H=ls(i+=Y),F=os(i),xt.push(m-et*d,d+et*m,H+et*F,F-et*H,H,F);for(Mt=0;Mt<xt.length;Mt+=2)m=xt[Mt],d=xt[Mt+1],xt[Mt]=m*ct+d*bt+V,xt[Mt+1]=m*ut+d*Ut+K;return xt[Mt-2]=o,xt[Mt-1]=l,xt}}function yd(r){var t=(r+"").replace(gd,function(x){var y=+x;return y<1e-4&&y>-1e-4?0:y}).match(_d)||[],e=[],n=0,i=0,s=2/3,a=t.length,o=0,l="ERROR: malformed path: "+r,c,h,u,f,p,g,_,m,d,M,S,v,A,R,b,P=function(y,L,z,V){M=(z-y)/3,S=(V-L)/3,_.push(y+M,L+S,z-M,V-S,z,V)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<a;c++)if(A=p,isNaN(t[c])?(p=t[c].toUpperCase(),g=p!==t[c]):c--,u=+t[c+1],f=+t[c+2],g&&(u+=n,f+=i),c||(m=u,d=f),p==="M")_&&(_.length<8?e.length-=1:o+=_.length),n=m=u,i=d=f,_=[u,f],e.push(_),c+=2,p="L";else if(p==="C")_||(_=[0,0]),g||(n=i=0),_.push(u,f,n+t[c+3]*1,i+t[c+4]*1,n+=t[c+5]*1,i+=t[c+6]*1),c+=6;else if(p==="S")M=n,S=i,(A==="C"||A==="S")&&(M+=n-_[_.length-4],S+=i-_[_.length-3]),g||(n=i=0),_.push(M,S,u,f,n+=t[c+3]*1,i+=t[c+4]*1),c+=4;else if(p==="Q")M=n+(u-n)*s,S=i+(f-i)*s,g||(n=i=0),n+=t[c+3]*1,i+=t[c+4]*1,_.push(M,S,n+(u-n)*s,i+(f-i)*s,n,i),c+=4;else if(p==="T")M=n-_[_.length-4],S=i-_[_.length-3],_.push(n+M,i+S,u+(n+M*1.5-u)*s,f+(i+S*1.5-f)*s,n=u,i=f),c+=2;else if(p==="H")P(n,i,n=u,i),c+=1;else if(p==="V")P(n,i,n,i=u+(g?i-n:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(u=m,f=d,_.closed=!0),(p==="L"||kr(n-u)>.5||kr(i-f)>.5)&&(P(n,i,u,f),p==="L"&&(c+=2)),n=u,i=f;else if(p==="A"){if(R=t[c+4],b=t[c+5],M=t[c+6],S=t[c+7],h=7,R.length>1&&(R.length<3?(S=M,M=b,h--):(S=b,M=R.substr(2),h-=2),b=R.charAt(1),R=R.charAt(0)),v=Md(n,i,+t[c+1],+t[c+2],+t[c+3],+R,+b,(g?n:0)+M*1,(g?i:0)+S*1),c+=h,v)for(h=0;h<v.length;h++)_.push(v[h]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),e.totalPoints=o+c,e}function Ed(r){xd(r[0])&&(r=[r]);var t="",e=r.length,n,i,s,a;for(i=0;i<e;i++){for(a=r[i],t+="M"+qn(a[0])+","+qn(a[1])+" C",n=a.length,s=2;s<n;s++)t+=qn(a[s++])+","+qn(a[s++])+" "+qn(a[s++])+","+qn(a[s++])+" "+qn(a[s++])+","+qn(a[s])+" ";a.closed&&(t+="z")}return t}/*!
 * CustomEase 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,Yh,$h=function(){return Oe||typeof window!="undefined"&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},ql=function(){Oe=$h(),Oe?(Oe.registerEase("_CE",Jr.create),Yh=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Td=1e20,cs=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,bd=/[cLlsSaAhHvVtTqQ]/g,Ad=function(t){var e=t.length,n=Td,i;for(i=1;i<e;i+=6)+t[i]<n&&(n=+t[i]);return n},Rd=function(t,e,n){!n&&n!==0&&(n=Math.max(+t[t.length-1],+t[1]));var i=+t[0]*-1,s=-n,a=t.length,o=1/(+t[a-2]+i),l=-e||(Math.abs(+t[a-1]-+t[1])<.01*(+t[a-2]-+t[0])?Ad(t)+s:+t[a-1]+s),c;for(l?l=1/l:l=-o,c=0;c<a;c+=2)t[c]=(+t[c]+i)*o,t[c+1]=(+t[c+1]+s)*l},Cd=function r(t,e,n,i,s,a,o,l,c,h,u){var f=(t+n)/2,p=(e+i)/2,g=(n+s)/2,_=(i+a)/2,m=(s+o)/2,d=(a+l)/2,M=(f+g)/2,S=(p+_)/2,v=(g+m)/2,A=(_+d)/2,R=(M+v)/2,b=(S+A)/2,P=o-t,x=l-e,y=Math.abs((n-o)*x-(i-l)*P),L=Math.abs((s-o)*x-(a-l)*P),z;return h||(h=[{x:t,y:e},{x:o,y:l}],u=1),h.splice(u||h.length-1,0,{x:R,y:b}),(y+L)*(y+L)>c*(P*P+x*x)&&(z=h.length,r(t,e,f,p,M,S,R,b,c,h,u),r(R,b,v,A,m,d,o,l,c,h,u+1+(h.length-z))),h},Jr=function(){function r(e,n,i){Yh||ql(),this.id=e,this.setData(n,i)}var t=r.prototype;return t.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(wd),a=1,o=[],l=[],c=i.precision||1,h=c<=1,u,f,p,g,_,m,d,M,S;if(this.data=n,(bd.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=yd(n)[0]),u=s.length,u===4)s.unshift(0,0),s.push(1,1),u=8;else if((u-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[u-2]!=1)&&Rd(s,i.height,i.originY),this.segment=s,g=2;g<u;g+=6)f={x:+s[g-2],y:+s[g-1]},p={x:+s[g+4],y:+s[g+5]},o.push(f,p),Cd(f.x,f.y,+s[g],+s[g+1],+s[g+2],+s[g+3],p.x,p.y,1/(c*2e5),o,o.length-1);for(u=o.length,g=0;g<u;g++)d=o[g],M=o[g-1]||d,(d.x>M.x||M.y!==d.y&&M.x===d.x||d===M)&&d.x<=1?(M.cx=d.x-M.x,M.cy=d.y-M.y,M.n=d,M.nx=d.x,h&&g>1&&Math.abs(M.cy/M.cx-o[g-2].cy/o[g-2].cx)>2&&(h=0),M.cx<a&&(M.cx?a=M.cx:(M.cx=.001,g===u-1&&(M.x-=.001,a=Math.min(a,.001),h=0)))):(o.splice(g--,1),u--);if(u=1/a+1|0,_=1/u,m=0,d=o[0],h){for(g=0;g<u;g++)S=g*_,d.nx<S&&(d=o[++m]),f=d.y+(S-d.x)/d.cx*d.cy,l[g]={x:S,cx:_,y:f,cy:0,nx:9},g&&(l[g-1].cy=f-l[g-1].y);m=o[o.length-1],l[u-1].cy=m.y-f,l[u-1].cx=m.x-l[l.length-1].x}else{for(g=0;g<u;g++)d.nx<g*_&&(d=o[++m]),l[g]=d;m<o.length-1&&(l[g-1]=o[o.length-2])}return this.ease=function(v){var A=l[v*u|0]||l[u-1];return A.nx<v&&(A=A.n),A.y+(v-A.x)/A.cx*A.cy},this.ease.custom=this,this.id&&Oe&&Oe.registerEase(this.id,this.ease),this},t.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Oe=n,ql()},r.get=function(n){return Oe.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,a=i.height||100,o=i.x||0,l=(i.y||0)+a,c=Oe.utils.toArray(i.path)[0],h,u,f,p,g,_,m,d,M,S;if(i.invert&&(a=-a,l=0),typeof n=="string"&&(n=Oe.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)h=Ed(Sd([n.segment],s,0,0,-a,o,l));else{for(h=[o,l],m=Math.max(5,(i.precision||1)*200),p=1/m,m+=2,d=5/m,M=cs(o+p*s),S=cs(l+n(p)*-a),u=(S-l)/(M-o),f=2;f<m;f++)g=cs(o+f*p*s),_=cs(l+n(f*p)*-a),(Math.abs((_-S)/(g-M)-u)>d||f===m-1)&&(h.push(M,S),u=(_-S)/(g-M)),M=g,S=_;h="M"+h.join(",")}return c&&c.setAttribute("d",h),h},r}();Jr.version="3.12.7";Jr.headless=!0;$h()&&Oe.registerPlugin(Jr);Te.registerPlugin(Jr);function jh(r){const t=r.getBoundingClientRect(),e=window.scrollY||document.documentElement.scrollTop,n=window.scrollX||document.documentElement.scrollLeft;return{top:t.top+e,left:t.left+n,right:t.right+n,bottom:t.bottom+e}}function Yl(r){return r.toString().padStart(2,"0")}class Pd{constructor(t){this.asynchronous=t}init(){gn&&gn.init().then(()=>{this.startAsynchronous()})}startAsynchronous(){window.history.scrollRestoration="manual",this.asynchronous.init()}}var Dd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ld(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $l={},Id={get exports(){return $l},set exports(r){$l=r}};(function(r){(function(){function t(T,D,q){return T.call.apply(T.bind,arguments)}function e(T,D,q){if(!T)throw Error();if(2<arguments.length){var B=Array.prototype.slice.call(arguments,2);return function(){var nt=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(nt,B),T.apply(D,nt)}}return function(){return T.apply(D,arguments)}}function n(T,D,q){return n=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?t:e,n.apply(null,arguments)}var i=Date.now||function(){return+new Date};function s(T,D){this.a=T,this.o=D||T,this.c=this.o.document}var a=!!window.FontFace;function o(T,D,q,B){if(D=T.c.createElement(D),q)for(var nt in q)q.hasOwnProperty(nt)&&(nt=="style"?D.style.cssText=q[nt]:D.setAttribute(nt,q[nt]));return B&&D.appendChild(T.c.createTextNode(B)),D}function l(T,D,q){T=T.c.getElementsByTagName(D)[0],T||(T=document.documentElement),T.insertBefore(q,T.lastChild)}function c(T){T.parentNode&&T.parentNode.removeChild(T)}function h(T,D,q){D=D||[],q=q||[];for(var B=T.className.split(/\s+/),nt=0;nt<D.length;nt+=1){for(var lt=!1,gt=0;gt<B.length;gt+=1)if(D[nt]===B[gt]){lt=!0;break}lt||B.push(D[nt])}for(D=[],nt=0;nt<B.length;nt+=1){for(lt=!1,gt=0;gt<q.length;gt+=1)if(B[nt]===q[gt]){lt=!0;break}lt||D.push(B[nt])}T.className=D.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(T,D){for(var q=T.className.split(/\s+/),B=0,nt=q.length;B<nt;B++)if(q[B]==D)return!0;return!1}function f(T){return T.o.location.hostname||T.a.location.hostname}function p(T,D,q){function B(){I&&nt&&lt&&(I(gt),I=null)}D=o(T,"link",{rel:"stylesheet",href:D,media:"all"});var nt=!1,lt=!0,gt=null,I=q||null;a?(D.onload=function(){nt=!0,B()},D.onerror=function(){nt=!0,gt=Error("Stylesheet failed to load"),B()}):setTimeout(function(){nt=!0,B()},0),l(T,"head",D)}function g(T,D,q,B){var nt=T.c.getElementsByTagName("head")[0];if(nt){var lt=o(T,"script",{src:D}),gt=!1;return lt.onload=lt.onreadystatechange=function(){gt||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(gt=!0,q&&q(null),lt.onload=lt.onreadystatechange=null,lt.parentNode.tagName=="HEAD"&&nt.removeChild(lt))},nt.appendChild(lt),setTimeout(function(){gt||(gt=!0,q&&q(Error("Script load timeout")))},B||5e3),lt}return null}function _(){this.a=0,this.c=null}function m(T){return T.a++,function(){T.a--,M(T)}}function d(T,D){T.c=D,M(T)}function M(T){T.a==0&&T.c&&(T.c(),T.c=null)}function S(T){this.a=T||"-"}S.prototype.c=function(T){for(var D=[],q=0;q<arguments.length;q++)D.push(arguments[q].replace(/[\W_]+/g,"").toLowerCase());return D.join(this.a)};function v(T,D){this.c=T,this.f=4,this.a="n";var q=(D||"n4").match(/^([nio])([1-9])$/i);q&&(this.a=q[1],this.f=parseInt(q[2],10))}function A(T){return P(T)+" "+(T.f+"00")+" 300px "+R(T.c)}function R(T){var D=[];T=T.split(/,\s*/);for(var q=0;q<T.length;q++){var B=T[q].replace(/['"]/g,"");B.indexOf(" ")!=-1||/^\d/.test(B)?D.push("'"+B+"'"):D.push(B)}return D.join(",")}function b(T){return T.a+T.f}function P(T){var D="normal";return T.a==="o"?D="oblique":T.a==="i"&&(D="italic"),D}function x(T){var D=4,q="n",B=null;return T&&((B=T.match(/(normal|oblique|italic)/i))&&B[1]&&(q=B[1].substr(0,1).toLowerCase()),(B=T.match(/([1-9]00|normal|bold)/i))&&B[1]&&(/bold/i.test(B[1])?D=7:/[1-9]00/.test(B[1])&&(D=parseInt(B[1].substr(0,1),10)))),q+D}function y(T,D){this.c=T,this.f=T.o.document.documentElement,this.h=D,this.a=new S("-"),this.j=D.events!==!1,this.g=D.classes!==!1}function L(T){T.g&&h(T.f,[T.a.c("wf","loading")]),V(T,"loading")}function z(T){if(T.g){var D=u(T.f,T.a.c("wf","active")),q=[],B=[T.a.c("wf","loading")];D||q.push(T.a.c("wf","inactive")),h(T.f,q,B)}V(T,"inactive")}function V(T,D,q){T.j&&T.h[D]&&(q?T.h[D](q.c,b(q)):T.h[D]())}function K(){this.c={}}function H(T,D,q){var B=[],nt;for(nt in D)if(D.hasOwnProperty(nt)){var lt=T.c[nt];lt&&B.push(lt(D[nt],q))}return B}function F(T,D){this.c=T,this.f=D,this.a=o(this.c,"span",{"aria-hidden":"true"},this.f)}function W(T){l(T.c,"body",T.a)}function O(T){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+R(T.c)+";"+("font-style:"+P(T)+";font-weight:"+(T.f+"00")+";")}function ot(T,D,q,B,nt,lt){this.g=T,this.j=D,this.a=B,this.c=q,this.f=nt||3e3,this.h=lt||void 0}ot.prototype.start=function(){var T=this.c.o.document,D=this,q=i(),B=new Promise(function(gt,I){function at(){i()-q>=D.f?I():T.fonts.load(A(D.a),D.h).then(function($){1<=$.length?gt():setTimeout(at,25)},function(){I()})}at()}),nt=null,lt=new Promise(function(gt,I){nt=setTimeout(I,D.f)});Promise.race([lt,B]).then(function(){nt&&(clearTimeout(nt),nt=null),D.g(D.a)},function(){D.j(D.a)})};function N(T,D,q,B,nt,lt,gt){this.v=T,this.B=D,this.c=q,this.a=B,this.s=gt||"BESbswy",this.f={},this.w=nt||3e3,this.u=lt||null,this.m=this.j=this.h=this.g=null,this.g=new F(this.c,this.s),this.h=new F(this.c,this.s),this.j=new F(this.c,this.s),this.m=new F(this.c,this.s),T=new v(this.a.c+",serif",b(this.a)),T=O(T),this.g.a.style.cssText=T,T=new v(this.a.c+",sans-serif",b(this.a)),T=O(T),this.h.a.style.cssText=T,T=new v("serif",b(this.a)),T=O(T),this.j.a.style.cssText=T,T=new v("sans-serif",b(this.a)),T=O(T),this.m.a.style.cssText=T,W(this.g),W(this.h),W(this.j),W(this.m)}var mt={D:"serif",C:"sans-serif"},it=null;function xt(){if(it===null){var T=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);it=!!T&&(536>parseInt(T[1],10)||parseInt(T[1],10)===536&&11>=parseInt(T[2],10))}return it}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),et(this)};function Y(T,D,q){for(var B in mt)if(mt.hasOwnProperty(B)&&D===T.f[mt[B]]&&q===T.f[mt[B]])return!0;return!1}function et(T){var D=T.g.a.offsetWidth,q=T.h.a.offsetWidth,B;(B=D===T.f.serif&&q===T.f["sans-serif"])||(B=xt()&&Y(T,D,q)),B?i()-T.A>=T.w?xt()&&Y(T,D,q)&&(T.u===null||T.u.hasOwnProperty(T.a.c))?ut(T,T.v):ut(T,T.B):ct(T):ut(T,T.v)}function ct(T){setTimeout(n(function(){et(this)},T),50)}function ut(T,D){setTimeout(n(function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),D(this.a)},T),0)}function bt(T,D,q){this.c=T,this.a=D,this.f=0,this.m=this.j=!1,this.s=q}var Ut=null;bt.prototype.g=function(T){var D=this.a;D.g&&h(D.f,[D.a.c("wf",T.c,b(T).toString(),"active")],[D.a.c("wf",T.c,b(T).toString(),"loading"),D.a.c("wf",T.c,b(T).toString(),"inactive")]),V(D,"fontactive",T),this.m=!0,Mt(this)},bt.prototype.h=function(T){var D=this.a;if(D.g){var q=u(D.f,D.a.c("wf",T.c,b(T).toString(),"active")),B=[],nt=[D.a.c("wf",T.c,b(T).toString(),"loading")];q||B.push(D.a.c("wf",T.c,b(T).toString(),"inactive")),h(D.f,B,nt)}V(D,"fontinactive",T),Mt(this)};function Mt(T){--T.f==0&&T.j&&(T.m?(T=T.a,T.g&&h(T.f,[T.a.c("wf","active")],[T.a.c("wf","loading"),T.a.c("wf","inactive")]),V(T,"active")):z(T.a))}function te(T){this.j=T,this.a=new K,this.h=0,this.f=this.g=!0}te.prototype.load=function(T){this.c=new s(this.j,T.context||this.j),this.g=T.events!==!1,this.f=T.classes!==!1,Ht(this,new y(this.c,T),T)};function Yt(T,D,q,B,nt){var lt=--T.h==0;(T.f||T.g)&&setTimeout(function(){var gt=nt||null,I=B||null||{};if(q.length===0&&lt)z(D.a);else{D.f+=q.length,lt&&(D.j=lt);var at,$=[];for(at=0;at<q.length;at++){var Q=q[at],dt=I[Q.c],pt=D.a,Lt=Q;if(pt.g&&h(pt.f,[pt.a.c("wf",Lt.c,b(Lt).toString(),"loading")]),V(pt,"fontloading",Lt),pt=null,Ut===null)if(window.FontFace){var Lt=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),re=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Ut=Lt?42<parseInt(Lt[1],10):!re}else Ut=!1;Ut?pt=new ot(n(D.g,D),n(D.h,D),D.c,Q,D.s,dt):pt=new N(n(D.g,D),n(D.h,D),D.c,Q,D.s,gt,dt),$.push(pt)}for(at=0;at<$.length;at++)$[at].start()}},0)}function Ht(T,D,q){var nt=[],B=q.timeout;L(D);var nt=H(T.a,q,T.c),lt=new bt(T.c,D,B);for(T.h=nt.length,D=0,q=nt.length;D<q;D++)nt[D].load(function(gt,I,at){Yt(T,lt,gt,I,at)})}function U(T,D){this.c=T,this.a=D}U.prototype.load=function(T){function D(){if(lt["__mti_fntLst"+B]){var gt=lt["__mti_fntLst"+B](),I=[],at;if(gt)for(var $=0;$<gt.length;$++){var Q=gt[$].fontfamily;gt[$].fontStyle!=null&&gt[$].fontWeight!=null?(at=gt[$].fontStyle+gt[$].fontWeight,I.push(new v(Q,at))):I.push(new v(Q))}T(I)}else setTimeout(function(){D()},50)}var q=this,B=q.a.projectId,nt=q.a.version;if(B){var lt=q.c.o;g(this.c,(q.a.api||"https://fast.fonts.net/jsapi")+"/"+B+".js"+(nt?"?v="+nt:""),function(gt){gt?T([]):(lt["__MonotypeConfiguration__"+B]=function(){return q.a},D())}).id="__MonotypeAPIScript__"+B}else T([])};function ye(T,D){this.c=T,this.a=D}ye.prototype.load=function(T){var D,q,B=this.a.urls||[],nt=this.a.families||[],lt=this.a.testStrings||{},gt=new _;for(D=0,q=B.length;D<q;D++)p(this.c,B[D],m(gt));var I=[];for(D=0,q=nt.length;D<q;D++)if(B=nt[D].split(":"),B[1])for(var at=B[1].split(","),$=0;$<at.length;$+=1)I.push(new v(B[0],at[$]));else I.push(new v(B[0]));d(gt,function(){T(I,lt)})};function kt(T,D){T?this.c=T:this.c=Bt,this.a=[],this.f=[],this.g=D||""}var Bt="https://fonts.googleapis.com/css";function Rt(T,D){for(var q=D.length,B=0;B<q;B++){var nt=D[B].split(":");nt.length==3&&T.f.push(nt.pop());var lt="";nt.length==2&&nt[1]!=""&&(lt=":"),T.a.push(nt.join(lt))}}function $t(T){if(T.a.length==0)throw Error("No fonts to load!");if(T.c.indexOf("kit=")!=-1)return T.c;for(var D=T.a.length,q=[],B=0;B<D;B++)q.push(T.a[B].replace(/ /g,"+"));return D=T.c+"?family="+q.join("%7C"),0<T.f.length&&(D+="&subset="+T.f.join(",")),0<T.g.length&&(D+="&text="+encodeURIComponent(T.g)),D}function Ct(T){this.f=T,this.a=[],this.c={}}var C={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},E={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},X={i:"i",italic:"i",n:"n",normal:"n"},rt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function st(T){for(var D=T.f.length,q=0;q<D;q++){var B=T.f[q].split(":"),nt=B[0].replace(/\+/g," "),lt=["n4"];if(2<=B.length){var gt,I=B[1];if(gt=[],I)for(var I=I.split(","),at=I.length,$=0;$<at;$++){var Q;if(Q=I[$],Q.match(/^[\w-]+$/)){var dt=rt.exec(Q.toLowerCase());if(dt==null)Q="";else{if(Q=dt[2],Q=Q==null||Q==""?"n":X[Q],dt=dt[1],dt==null||dt=="")dt="4";else var pt=E[dt],dt=pt||(isNaN(dt)?"4":dt.substr(0,1));Q=[Q,dt].join("")}}else Q="";Q&&gt.push(Q)}0<gt.length&&(lt=gt),B.length==3&&(B=B[2],gt=[],B=B?B.split(","):gt,0<B.length&&(B=C[B[0]])&&(T.c[nt]=B))}for(T.c[nt]||(B=C[nt])&&(T.c[nt]=B),B=0;B<lt.length;B+=1)T.a.push(new v(nt,lt[B]))}}function tt(T,D){this.c=T,this.a=D}var At={Arimo:!0,Cousine:!0,Tinos:!0};tt.prototype.load=function(T){var D=new _,q=this.c,B=new kt(this.a.api,this.a.text),nt=this.a.families;Rt(B,nt);var lt=new Ct(nt);st(lt),p(q,$t(B),m(D)),d(D,function(){T(lt.a,lt.c,At)})};function _t(T,D){this.c=T,this.a=D}_t.prototype.load=function(T){var D=this.a.id,q=this.c.o;D?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+D+".js",function(B){if(B)T([]);else if(q.Typekit&&q.Typekit.config&&q.Typekit.config.fn){B=q.Typekit.config.fn;for(var nt=[],lt=0;lt<B.length;lt+=2)for(var gt=B[lt],I=B[lt+1],at=0;at<I.length;at++)nt.push(new v(gt,I[at]));try{q.Typekit.load({events:!1,classes:!1,async:!0})}catch($){}T(nt)}},2e3):T([])};function yt(T,D){this.c=T,this.f=D,this.a=[]}yt.prototype.load=function(T){var D=this.f.id,q=this.c.o,B=this;D?(q.__webfontfontdeckmodule__||(q.__webfontfontdeckmodule__={}),q.__webfontfontdeckmodule__[D]=function(nt,lt){for(var gt=0,I=lt.fonts.length;gt<I;++gt){var at=lt.fonts[gt];B.a.push(new v(at.name,x("font-weight:"+at.weight+";font-style:"+at.style)))}T(B.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+f(this.c)+"/"+D+".js",function(nt){nt&&T([])})):T([])};var Ft=new te(window);Ft.a.c.custom=function(T,D){return new ye(D,T)},Ft.a.c.fontdeck=function(T,D){return new yt(D,T)},Ft.a.c.monotype=function(T,D){return new U(D,T)},Ft.a.c.typekit=function(T,D){return new _t(D,T)},Ft.a.c.google=function(T,D){return new tt(D,T)};var ft={load:n(Ft.load,Ft)};r.exports?r.exports=ft:(window.WebFont=ft,window.WebFontConfig&&Ft.load(window.WebFontConfig))})()})(Id);class Ud{constructor(t){var e;this.sourceRandomCharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",this.emptyCharacter="-",this.duration=600,this._isRunning=!1,this._originalStr="",this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=[],this._element=null,this._requestAnimationFrameId=0,this._element=t,this.setText((e=t.textContent)!=null?e:"")}setText(t){this._originalStr=t,this._originalLength=t.length}get isRunning(){return this._isRunning}start(){this.stop(),this._randomIndex=[];let t="";for(let e=0;e<this._originalLength;e++){let n=e/this._originalLength;this._randomIndex[e]=Math.random()*(1-n)+n,t+=this.emptyCharacter}this._timeStart=new Date().getTime(),this._isRunning=!0,this._requestAnimationFrameId=requestAnimationFrame(()=>{this._onInterval()}),this._element&&(this._element.textContent=t)}stop(){this._isRunning=!1,cancelAnimationFrame(this._requestAnimationFrameId)}dispose(){cancelAnimationFrame(this._requestAnimationFrameId),this._isRunning=!1,this.duration=0,this._originalStr="",this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=[],this._element=null,this._requestAnimationFrameId=0}_onInterval(){this._timeCurrent=new Date().getTime()-this._timeStart;const t=this._timeCurrent/this.duration;let e="";for(let n=0;n<this._originalLength;n++)t>=this._randomIndex[n]?e+=this._originalStr.charAt(n):t<this._randomIndex[n]/3?e+=this.emptyCharacter:e+=this.sourceRandomCharacter.charAt(Math.floor(Math.random()*this.sourceRandomCharacter.length));t>1&&(e=this._originalStr,this._isRunning=!1),this._element&&(this._element.textContent=e),this._isRunning&&(this._requestAnimationFrameId=requestAnimationFrame(()=>{this._onInterval()}))}}class Nd{constructor(t={}){wt(this,"onMouseEnter",t=>{const e=this.infoList[t];e.isHover=!0,e.isAnimating||this.mouseEnterAnimation(t)});wt(this,"onMouseLeave",t=>{const e=this.infoList[t];e.isHover=!1,e.isAnimating||this.mouseLeaveAnimation(t)});this.tweenParams={shuffleText:{duration:600}},this.$targets=[],this.infoList=[],Object.assign(this,t)}init(){this.getSelector(),this.setInfoList(),this.addEventListeners()}destroy(){this.removeEventListeners()}getSelector(){this.$targets=document.querySelectorAll('[data-shuffle-hover="target"]')}setInfoList(){this.$targets.forEach((t,e)=>{const n=t.querySelector('[data-shuffle-hover="element"]');this.infoList[e]={$target:t,$element:n,shuffleText:new Ud(n),isHover:!1,isAnimating:!1,onMouseEnter:()=>{this.onMouseEnter(e)},onMouseLeave:()=>{this.onMouseLeave(e)}},this.setDuration(this.infoList[e])})}setDuration(t){t.shuffleText.duration=this.tweenParams.shuffleText.duration,t.shuffleText.emptyCharacter=t.$element.textContent}addEventListeners(){this.infoList.forEach(t=>{t.$target.addEventListener("mouseenter",t.onMouseEnter),t.$target.addEventListener("mouseleave",t.onMouseLeave)})}removeEventListeners(){this.infoList.forEach(t=>{t.$target.removeEventListener("mouseenter",t.onMouseEnter),t.$target.removeEventListener("mouseleave",t.onMouseLeave)})}mouseEnterAnimation(t){const e=this.infoList[t];e.isAnimating=!0,requestAnimationFrame(()=>{const n=e.$element.offsetWidth;e.$element.style.width=`${n}px`,e.shuffleText.start(),Te.delayedCall(e.shuffleText.duration*.001,()=>{e.isAnimating=!1,e.isHover||this.mouseLeaveAnimation(t)})})}mouseLeaveAnimation(t){const e=this.infoList[t];e.isAnimating=!0,requestAnimationFrame(()=>{e.$element.style.width="",requestAnimationFrame(()=>{e.isAnimating=!1,e.isHover&&this.mouseEnterAnimation(t)})})}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="173",Fd=0,jl=1,Od=2,Kh=1,zd=2,Un=3,ci=0,Ve=1,mn=2,si=0,lr=1,Kl=2,Zl=3,Jl=4,Bd=5,Ti=100,Hd=101,kd=102,Vd=103,Gd=104,Wd=200,Xd=201,qd=202,Yd=203,io=204,ro=205,$d=206,jd=207,Kd=208,Zd=209,Jd=210,Qd=211,tp=212,ep=213,np=214,so=0,ao=1,oo=2,gr=3,lo=4,co=5,ho=6,uo=7,Zh=0,ip=1,rp=2,ai=0,sp=1,ap=2,op=3,lp=4,cp=5,hp=6,up=7,Jh=300,vr=301,xr=302,fo=303,po=304,Qs=306,mo=1e3,Ai=1001,_o=1002,Sn=1003,fp=1004,hs=1005,cn=1006,fa=1007,Ri=1008,Vn=1009,Qh=1010,tu=1011,jr=1012,hl=1013,Ni=1014,On=1015,Qr=1016,ul=1017,fl=1018,Sr=1020,eu=35902,nu=1021,iu=1022,vn=1023,ru=1024,su=1025,cr=1026,Mr=1027,au=1028,dl=1029,ou=1030,pl=1031,ml=1033,Ns=33776,Fs=33777,Os=33778,zs=33779,go=35840,vo=35841,xo=35842,So=35843,Mo=36196,yo=37492,Eo=37496,To=37808,wo=37809,bo=37810,Ao=37811,Ro=37812,Co=37813,Po=37814,Do=37815,Lo=37816,Io=37817,Uo=37818,No=37819,Fo=37820,Oo=37821,Bs=36492,zo=36494,Bo=36495,lu=36283,Ho=36284,ko=36285,Vo=36286,dp=3200,pp=3201,mp=0,_p=1,Qn="",sn="srgb",yr="srgb-linear",$s="linear",Jt="srgb",ki=7680,Ql=519,gp=512,vp=513,xp=514,cu=515,Sp=516,Mp=517,yp=518,Ep=519,tc=35044,ec="300 es",zn=2e3,js=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,Go=180/Math.PI;function ts(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[r&255]+Ae[r>>8&255]+Ae[r>>16&255]+Ae[r>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Vt(r,t,e){return Math.max(t,Math.min(e,r))}function Tp(r,t){return(r%t+t)%t}function pa(r,t,e){return(1-e)*r+e*t}function Pr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],M=i[1],S=i[4],v=i[7],A=i[2],R=i[5],b=i[8];return s[0]=a*_+o*M+l*A,s[3]=a*m+o*S+l*R,s[6]=a*d+o*v+l*b,s[1]=c*_+h*M+u*A,s[4]=c*m+h*S+u*R,s[7]=c*d+h*v+u*b,s[2]=f*_+p*M+g*A,s[5]=f*m+p*S+g*R,s[8]=f*d+p*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Ot;function hu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wp(){const r=Kr("canvas");return r.style.display="block",r}const nc={};function er(r){r in nc||(nc[r]=!0,console.warn(r))}function bp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ap(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rp(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ic=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){const r={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?$s:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[yr]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),r}const qt=Cp();function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vi;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=Kr("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dp=0;class uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_a(i[a].image)):s.push(_a(i[a]))}else s=_a(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function _a(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Pp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class De extends Tr{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Ai,i=Ai,s=cn,a=Ri,o=vn,l=Vn,c=De.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ts(),this.name="",this.source=new uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Jh;De.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(p+1)/2,A=(d+1)/2,R=(h+f)/4,b=(u+_)/4,P=(g+m)/4;return S>v&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ip extends Tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,M=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),R=Math.atan2(A,d*M);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const v=o*M;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new J,sc=new es;class ns{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),fs.subVectors(this.max,Dr),Gi.subVectors(t.a,Dr),Wi.subVectors(t.b,Dr),Xi.subVectors(t.c,Dr),Yn.subVectors(Wi,Gi),$n.subVectors(Xi,Wi),mi.subVectors(Gi,Xi);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!va(e,Gi,Wi,Xi,fs)||(e=[1,0,0,0,1,0,0,0,1],!va(e,Gi,Wi,Xi,fs))?!1:(ds.crossVectors(Yn,$n),e=[ds.x,ds.y,ds.z],va(e,Gi,Wi,Xi,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new J,new J,new J,new J,new J,new J,new J,new J],fn=new J,us=new ns,Gi=new J,Wi=new J,Xi=new J,Yn=new J,$n=new J,mi=new J,Dr=new J,fs=new J,ds=new J,_i=new J;function va(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_i.fromArray(r,s);const o=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Np=new ns,Lr=new J,xa=new J;class _l{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(xa)),this.expandByPoint(Lr.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new J,Sa=new J,ps=new J,jn=new J,Ma=new J,ms=new J,ya=new J;class Fp{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sa.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Sa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=jn.dot(this.direction),l=-jn.dot(ps),c=jn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(ps,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,s){Ma.subVectors(e,t),ms.subVectors(n,t),ya.crossVectors(Ma,ms);let a=this.direction.dot(ya),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);const l=o*this.direction.dot(ms.crossVectors(jn,ms));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(jn));if(c<0||l+c>a)return null;const h=-o*jn.dot(ya);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,i,s,a,o,l,c,h,u,f,p,g,_,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,i,s,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,zp)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Kn.crossVectors(n,Xe),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Kn.crossVectors(n,Xe)),Kn.normalize(),_s.crossVectors(Xe,Kn),i[0]=Kn.x,i[4]=_s.x,i[8]=Xe.x,i[1]=Kn.y,i[5]=_s.y,i[9]=Xe.y,i[2]=Kn.z,i[6]=_s.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],S=n[7],v=n[11],A=n[15],R=i[0],b=i[4],P=i[8],x=i[12],y=i[1],L=i[5],z=i[9],V=i[13],K=i[2],H=i[6],F=i[10],W=i[14],O=i[3],ot=i[7],N=i[11],mt=i[15];return s[0]=a*R+o*y+l*K+c*O,s[4]=a*b+o*L+l*H+c*ot,s[8]=a*P+o*z+l*F+c*N,s[12]=a*x+o*V+l*W+c*mt,s[1]=h*R+u*y+f*K+p*O,s[5]=h*b+u*L+f*H+p*ot,s[9]=h*P+u*z+f*F+p*N,s[13]=h*x+u*V+f*W+p*mt,s[2]=g*R+_*y+m*K+d*O,s[6]=g*b+_*L+m*H+d*ot,s[10]=g*P+_*z+m*F+d*N,s[14]=g*x+_*V+m*W+d*mt,s[3]=M*R+S*y+v*K+A*O,s[7]=M*b+S*L+v*H+A*ot,s[11]=M*P+S*z+v*F+A*N,s[15]=M*x+S*V+v*W+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-i*a*p+i*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,S=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,A=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,R=e*M+n*S+i*v+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=M*b,t[1]=(_*f*s-u*m*s-_*i*p+n*m*p+u*i*d-n*f*d)*b,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*b,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*p-n*l*p)*b,t[4]=S*b,t[5]=(h*m*s-g*f*s+g*i*p-e*m*p-h*i*d+e*f*d)*b,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*d-e*l*d)*b,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*p+e*l*p)*b,t[8]=v*b,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*d-e*u*d)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*b,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*b,t[12]=A*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,g=s*u,_=a*h,m=a*u,d=o*u,M=l*c,S=l*h,v=l*u,A=n.x,R=n.y,b=n.z;return i[0]=(1-(_+d))*A,i[1]=(p+v)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(p-v)*R,i[5]=(1-(f+d))*R,i[6]=(m+M)*R,i[7]=0,i[8]=(g+S)*b,i[9]=(m-M)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const a=qi.set(i[4],i[5],i[6]).length(),o=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/s,h=1/a,u=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=zn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===zn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===js)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=zn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,p=(n+i)*h;let g,_;if(o===zn)g=(a+s)*u,_=-2*u;else if(o===js)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new J,dn=new ge,Op=new J(0,0,0),zp=new J(1,1,1),Kn=new J,_s=new J,Xe=new J,ac=new ge,oc=new es;class Gn{constructor(t=0,e=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bp=0;const lc=new J,Yi=new es,Dn=new ge,gs=new J,Ir=new J,Hp=new J,kp=new es,cc=new J(1,0,0),hc=new J(0,1,0),uc=new J(0,0,1),fc={type:"added"},Vp={type:"removed"},$i={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Ze extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new J,e=new Gn,n=new es,i=new J(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ir,gs,this.up):Dn.lookAt(gs,Ir,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vp),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,Hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new J(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new J,Ln=new J,Ta=new J,In=new J,ji=new J,Ki=new J,dc=new J,wa=new J,ba=new J,Aa=new J,Ra=new fe,Ca=new fe,Pa=new fe;class _n{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Ln.subVectors(n,e),Ta.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Ln),l=pn.dot(Ta),c=Ln.dot(Ln),h=Ln.dot(Ta),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ca,s.y),a.addScaledVector(Pa,s.z),a}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Ln.subVectors(t,e),pn.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ji.subVectors(i,n),Ki.subVectors(s,n),wa.subVectors(t,n);const l=ji.dot(wa),c=Ki.dot(wa);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,i);const h=ji.dot(ba),u=Ki.dot(ba);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Aa.subVectors(t,s);const p=ji.dot(Aa),g=Ki.dot(Aa);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ki,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return dc.subVectors(s,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(dc,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(ji,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Da(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Tp(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Da(a,s,t+1/3),this.g=Da(a,s,t),this.b=Da(a,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Vt(Re.r*255,0,255))*65536+Math.round(Vt(Re.g*255,0,255))*256+Math.round(Vt(Re.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=sn){qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(vs);const n=pa(Zn.h,vs.h,e),i=pa(Zn.s,vs.s,e),s=pa(Zn.l,vs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Qt;Qt.NAMES=pu;let Gp=0;class ta extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=lr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mu extends ta{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new J,xs=new ie;let Wp=0;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class _u extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gu extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ii extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xp=0;const nn=new ge,La=new Ze,Zi=new J,qe=new ns,Ur=new ns,Se=new J;class zi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hu(t)?gu:_u)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ii(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(qe.min,Ur.min),qe.expandByPoint(Se),Se.addVectors(qe.max,Ur.max),qe.expandByPoint(Se)):(qe.expandByPoint(Ur.min),qe.expandByPoint(Ur.max))}qe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),Se.add(Zi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new J,l[P]=new J;const c=new J,h=new J,u=new J,f=new ie,p=new ie,g=new ie,_=new J,m=new J;function d(P,x,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(_),o[x].add(_),o[y].add(_),l[P].add(m),l[x].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,x=M.length;P<x;++P){const y=M[P],L=y.start,z=y.count;for(let V=L,K=L+z;V<K;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const S=new J,v=new J,A=new J,R=new J;function b(P){A.fromBufferAttribute(i,P),R.copy(A);const x=o[P];S.copy(x),S.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(R,x);const L=v.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,x=M.length;P<x;++P){const y=M[P],L=y.start,z=y.count;for(let V=L,K=L+z;V<K;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,a=new J,o=new J,l=new J,c=new J,h=new J,u=new J;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new ge,gi=new Fp,Ss=new _l,mc=new J,Ms=new J,ys=new J,Es=new J,Ia=new J,Ts=new J,_c=new J,ws=new J;class xn extends Ze{constructor(t=new zi,e=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ia.fromBufferAttribute(u,t),a?Ts.addScaledVector(Ia,h):Ts.addScaledVector(Ia.sub(e),h))}e.add(Ts)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(Ss.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ss,mc)===null||gi.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(s).invert(),gi.copy(t.ray).applyMatrix4(pc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,A=S;v<A;v+=3){const R=o.getX(v),b=o.getX(v+1),P=o.getX(v+2);i=bs(this,d,t,n,c,h,u,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=bs(this,a,t,n,c,h,u,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,A=S;v<A;v+=3){const R=v,b=v+1,P=v+2;i=bs(this,d,t,n,c,h,u,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,S=m+1,v=m+2;i=bs(this,a,t,n,c,h,u,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function qp(r,t,e,n,i,s,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ci,o),l===null)return null;ws.copy(o),ws.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:r}}function bs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ms),r.getVertexPosition(l,ys),r.getVertexPosition(c,Es);const h=qp(r,t,e,n,Ms,ys,Es,_c);if(h){const u=new J;_n.getBarycoord(_c,Ms,ys,Es,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,l,c,u,new ie)),s&&(h.uv1=_n.getInterpolatedAttribute(s,o,l,c,u,new ie)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,u,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};_n.getNormal(Ms,ys,Es,f.normal),h.face=f,h.barycoord=u}return h}class is extends zi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(h,3)),this.setAttribute("uv",new Ii(u,2));function g(_,m,d,M,S,v,A,R,b,P,x){const y=v/b,L=A/P,z=v/2,V=A/2,K=R/2,H=b+1,F=P+1;let W=0,O=0;const ot=new J;for(let N=0;N<F;N++){const mt=N*L-V;for(let it=0;it<H;it++){const xt=it*y-z;ot[_]=xt*M,ot[m]=mt*S,ot[d]=K,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[d]=R>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(it/b),u.push(1-N/P),W+=1}}for(let N=0;N<P;N++)for(let mt=0;mt<b;mt++){const it=f+mt+H*N,xt=f+mt+H*(N+1),Y=f+(mt+1)+H*(N+1),et=f+(mt+1)+H*N;l.push(it,xt,et),l.push(xt,Y,et),O+=6}o.addGroup(p,O,x),p+=O,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=Er(r[e]);for(const i in n)t[i]=n[i]}return t}function Yp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function vu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const $p={clone:Er,merge:Ie};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends ta{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new J,gc=new ie,vc=new ie;class an extends xu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,gc,vc),e.subVectors(vc,gc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Zp extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(Ji,Qi,t,e);i.layers=this.layers,this.add(i);const s=new an(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const a=new an(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new an(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new an(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new an(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Su extends De{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jp extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Su(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new is(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:si});s.uniforms.tEquirect.value=e;const a=new xn(i,s),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=cn),new Zp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class As extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qp={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xc extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Na=new J,tm=new J,em=new Ot;class yi{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Na.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),i=this.coplanarPoint(Na).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new _l,Rs=new J;class Mu{constructor(t=new yi,e=new yi,n=new yi,i=new yi,s=new yi,a=new yi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],M=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-p,v-d).normalize(),n[1].setComponents(l+s,f+c,m+p,v+d).normalize(),n[2].setComponents(l+a,f+h,m+g,v+M).normalize(),n[3].setComponents(l-a,f-h,m-g,v-M).normalize(),n[4].setComponents(l-o,f-u,m-_,v-S).normalize(),e===zn)n[5].setComponents(l+o,f+u,m+_,v+S).normalize();else if(e===js)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nm extends De{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:cn,this.magFilter=s!==void 0?s:cn,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class yu extends De{constructor(t,e,n,i,s,a,o,l,c,h=cr){if(h!==cr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cr&&(n=Ni),n===void 0&&h===Mr&&(n=Sr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wr extends zi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const M=d*f-a;for(let S=0;S<c;S++){const v=S*u-s;g.push(v,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const S=M+c*d,v=M+c*(d+1),A=M+1+c*(d+1),R=M+1+c*d;p.push(S,v,R),p.push(v,A,R)}this.setIndex(p),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Eu extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class im extends ta{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends ta{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sm{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const am=new sm;class gl{constructor(t){this.manager=t!==void 0?t:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gl.DEFAULT_MATERIAL_NAME="__DEFAULT";class om extends gl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Sc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Kr("img");function l(){h(),Sc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class lm extends gl{constructor(t){super(t)}load(t,e,n,i){const s=new De,a=new om(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class cm extends xu{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hm extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Mc(r,t,e,n){const i=um(n);switch(e){case nu:return r*t;case ru:return r*t;case su:return r*t*2;case au:return r*t/i.components*i.byteLength;case dl:return r*t/i.components*i.byteLength;case ou:return r*t*2/i.components*i.byteLength;case pl:return r*t*2/i.components*i.byteLength;case iu:return r*t*3/i.components*i.byteLength;case vn:return r*t*4/i.components*i.byteLength;case ml:return r*t*4/i.components*i.byteLength;case Ns:case Fs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Os:case zs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vo:case So:return Math.max(r,16)*Math.max(t,8)/4;case go:case xo:return Math.max(r,8)*Math.max(t,8)/2;case Mo:case yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bs:case zo:case Bo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lu:case Ho:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ko:case Vo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function um(r){switch(r){case Vn:case Qh:return{byteLength:1,components:1};case jr:case tu:case Qr:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case Ni:case hl:case On:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fm(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
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
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,u_=`struct PhysicalMaterial {
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
}`,f_=`
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
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
#endif`,C_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
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
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:dm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:_m,alphatest_fragment:gm,alphatest_pars_fragment:vm,aomap_fragment:xm,aomap_pars_fragment:Sm,batching_pars_vertex:Mm,batching_vertex:ym,begin_vertex:Em,beginnormal_vertex:Tm,bsdfs:wm,iridescence_fragment:bm,bumpmap_pars_fragment:Am,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Dm,color_fragment:Lm,color_pars_fragment:Im,color_pars_vertex:Um,color_vertex:Nm,common:Fm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:zm,displacementmap_pars_vertex:Bm,displacementmap_vertex:Hm,emissivemap_fragment:km,emissivemap_pars_fragment:Vm,colorspace_fragment:Gm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:$m,envmap_physical_pars_fragment:s_,envmap_vertex:jm,fog_vertex:Km,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:t_,lightmap_pars_fragment:e_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:r_,lights_toon_fragment:a_,lights_toon_pars_fragment:o_,lights_phong_fragment:l_,lights_phong_pars_fragment:c_,lights_physical_fragment:h_,lights_physical_pars_fragment:u_,lights_fragment_begin:f_,lights_fragment_maps:d_,lights_fragment_end:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:v_,map_fragment:x_,map_pars_fragment:S_,map_particle_fragment:M_,map_particle_pars_fragment:y_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:w_,morphcolor_vertex:b_,morphnormal_vertex:A_,morphtarget_pars_vertex:R_,morphtarget_vertex:C_,normal_fragment_begin:P_,normal_fragment_maps:D_,normal_pars_fragment:L_,normal_pars_vertex:I_,normal_vertex:U_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:B_,opaque_fragment:H_,packing:k_,premultiplied_alpha_fragment:V_,project_vertex:G_,dithering_fragment:W_,dithering_pars_fragment:X_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:j_,shadowmap_vertex:K_,shadowmask_pars_fragment:Z_,skinbase_vertex:J_,skinning_pars_vertex:Q_,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:rg,tonemapping_pars_fragment:sg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:fg,background_frag:dg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:_g,cube_frag:gg,depth_vert:vg,depth_frag:xg,distanceRGBA_vert:Sg,distanceRGBA_frag:Mg,equirect_vert:yg,equirect_frag:Eg,linedashed_vert:Tg,linedashed_frag:wg,meshbasic_vert:bg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Dg,meshnormal_vert:Lg,meshnormal_frag:Ig,meshphong_vert:Ug,meshphong_frag:Ng,meshphysical_vert:Fg,meshphysical_frag:Og,meshtoon_vert:zg,meshtoon_frag:Bg,points_vert:Hg,points_frag:kg,shadow_vert:Vg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:Xg},vt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},yn={basic:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ie([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ie([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ie([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ie([vt.points,vt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ie([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ie([vt.common,vt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ie([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ie([vt.sprite,vt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ie([vt.common,vt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ie([vt.lights,vt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};yn.physical={uniforms:Ie([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Cs={r:0,b:0,g:0},xi=new Gn,qg=new ge;function Yg(r,t,e,n,i,s,a){const o=new Qt(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const A=g(S);A===null?d(o,l):A&&A.isColor&&(d(A,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Qs)?(h===void 0&&(h=new xn(new is(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Er(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(xi)),h.material.toneMapped=qt.getTransfer(A.colorSpace)!==Jt,(u!==A||f!==A.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new xn(new wr(2,2),new Wn({name:"BackgroundMaterial",uniforms:Er(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(A.colorSpace)!==Jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,v){S.getRGB(Cs,vu(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:_,addToRenderList:m,dispose:M}}function $g(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,L,z,V,K){let H=!1;const F=u(V,z,L);s!==F&&(s=F,c(s.object)),H=p(y,V,z,K),H&&g(y,V,z,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(y,L,z,V),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,L,z){const V=z.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let H=K[L.id];H===void 0&&(H={},K[L.id]=H);let F=H[V];return F===void 0&&(F=f(l()),H[V]=F),F}function f(y){const L=[],z=[],V=[];for(let K=0;K<e;K++)L[K]=0,z[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,L,z,V){const K=s.attributes,H=L.attributes;let F=0;const W=z.getAttributes();for(const O in W)if(W[O].location>=0){const N=K[O];let mt=H[O];if(mt===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),N===void 0||N.attribute!==mt||mt&&N.data!==mt.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function g(y,L,z,V){const K={},H=L.attributes;let F=0;const W=z.getAttributes();for(const O in W)if(W[O].location>=0){let N=H[O];N===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(N=y.instanceColor));const mt={};mt.attribute=N,N&&N.data&&(mt.data=N.data),K[O]=mt,F++}s.attributes=K,s.attributesNum=F,s.index=V}function _(){const y=s.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function m(y){d(y,0)}function d(y,L){const z=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;z[y]=1,V[y]===0&&(r.enableVertexAttribArray(y),V[y]=1),K[y]!==L&&(r.vertexAttribDivisor(y,L),K[y]=L)}function M(){const y=s.newAttributes,L=s.enabledAttributes;for(let z=0,V=L.length;z<V;z++)L[z]!==y[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function S(y,L,z,V,K,H,F){F===!0?r.vertexAttribIPointer(y,L,z,K,H):r.vertexAttribPointer(y,L,z,V,K,H)}function v(y,L,z,V){_();const K=V.attributes,H=z.getAttributes(),F=L.defaultAttributeValues;for(const W in H){const O=H[W];if(O.location>=0){let ot=K[W];if(ot===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const N=ot.normalized,mt=ot.itemSize,it=t.get(ot);if(it===void 0)continue;const xt=it.buffer,Y=it.type,et=it.bytesPerElement,ct=Y===r.INT||Y===r.UNSIGNED_INT||ot.gpuType===hl;if(ot.isInterleavedBufferAttribute){const ut=ot.data,bt=ut.stride,Ut=ot.offset;if(ut.isInstancedInterleavedBuffer){for(let Mt=0;Mt<O.locationSize;Mt++)d(O.location+Mt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Mt=0;Mt<O.locationSize;Mt++)m(O.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Mt=0;Mt<O.locationSize;Mt++)S(O.location+Mt,mt/O.locationSize,Y,N,bt*et,(Ut+mt/O.locationSize*Mt)*et,ct)}else{if(ot.isInstancedBufferAttribute){for(let ut=0;ut<O.locationSize;ut++)d(O.location+ut,ot.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ut=0;ut<O.locationSize;ut++)m(O.location+ut);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let ut=0;ut<O.locationSize;ut++)S(O.location+ut,mt/O.locationSize,Y,N,mt*et,mt/O.locationSize*ut*et,ct)}}else if(F!==void 0){const N=F[W];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(O.location,N);break;case 3:r.vertexAttrib3fv(O.location,N);break;case 4:r.vertexAttrib4fv(O.location,N);break;default:r.vertexAttrib1fv(O.location,N)}}}}M()}function A(){P();for(const y in n){const L=n[y];for(const z in L){const V=L[z];for(const K in V)h(V[K].object),delete V[K];delete L[z]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const z in L){const V=L[z];for(const K in V)h(V[K].object),delete V[K];delete L[z]}delete n[y.id]}function b(y){for(const L in n){const z=n[L];if(z[y.id]===void 0)continue;const V=z[y.id];for(const K in V)h(V[K].object),delete V[K];delete z[y.id]}}function P(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==vn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Vn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==On&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:R}}function Zg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new yi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,S=M*4;let v=d.clippingState||null;l.value=v,v=h(g,f,S,p);for(let A=0;A!==S;++A)v[A]=e[A];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,v=p;S!==_;++S,v+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jg(r){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=vr:o===po&&(a.mapping=xr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const rr=4,yc=[.125,.215,.35,.446,.526,.582],wi=20,Fa=new cm,Ec=new Qt;let Oa=null,za=0,Ba=0,Ha=!1;const Ei=(1+Math.sqrt(5))/2,tr=1/Ei,Tc=[new J(-Ei,tr,0),new J(Ei,tr,0),new J(-tr,0,Ei),new J(tr,0,Ei),new J(0,Ei,-tr),new J(0,Ei,tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,za,Ba),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Qr,format:vn,colorSpace:yr,depthBuffer:!1},i=bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=tv(s,t,e)}return i}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,i){const o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ec),h.toneMapping=ai,h.autoClear=!1;const p=new mu({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new xn(new is,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ec),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Ps(i,M*S,d>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===vr||t.mapping===xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tc[(i-s-1)%Tc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const d=[];let M=0;for(let b=0;b<wi;++b){const P=b/_,x=Math.exp(-P*P/2);d.push(x),b===0?M+=x:b<m&&(M+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[i],A=3*v*(i>S-rr?i-S+rr:0),R=4*(this._cubeSize-v);Ps(e,A,R,3*v,2*v),l.setRenderTarget(e),l.render(u,Fa)}}function Qg(r){const t=[],e=[],n=[];let i=r;const s=r-rr+1+yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-rr?l=yc[a-r+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),S=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,P=R>2?0:-1,x=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(x,_*g*R),S.set(f,m*g*R);const y=[R,R,R,R,R,R];v.set(y,d*g*R)}const A=new zi;A.setAttribute("position",new bn(M,_)),A.setAttribute("uv",new bn(S,m)),A.setAttribute("faceIndex",new bn(v,d)),t.push(A),i>rr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bc(r,t,e){const n=new Fi(r,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function tv(r,t,e){const n=new Float32Array(wi),i=new J(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ac(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Rc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function ev(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fo||l===po,h=l===vr||l===xr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wc(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new wc(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iv(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let S=0,v=M.length;S<v;S+=3){const A=M[S+0],R=M[S+1],b=M[S+2];f.push(A,R,R,b,b,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const A=S+0,R=S+1,b=S+2;f.push(A,R,R,b,b,A)}}else return;const m=new(hu(f)?gu:_u)(f,1);m.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function rv(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function av(r,t,e){const n=new WeakMap,i=new fe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*R*4*u),P=new fu(b,A,R,u);P.type=On,P.needsUpdate=!0;const x=v*4;for(let L=0;L<u;L++){const z=d[L],V=M[L],K=S[L],H=A*R*4*L;for(let F=0;F<z.count;F++){const W=F*x;g===!0&&(i.fromBufferAttribute(z,F),b[H+W+0]=i.x,b[H+W+1]=i.y,b[H+W+2]=i.z,b[H+W+3]=0),_===!0&&(i.fromBufferAttribute(V,F),b[H+W+4]=i.x,b[H+W+5]=i.y,b[H+W+6]=i.z,b[H+W+7]=0),m===!0&&(i.fromBufferAttribute(K,F),b[H+W+8]=i.x,b[H+W+9]=i.y,b[H+W+10]=i.z,b[H+W+11]=K.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new ie(A,R)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function ov(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const wu=new De,Cc=new yu(1,1),bu=new fu,Au=new Up,Ru=new Su,Pc=[],Dc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Uc=new Float32Array(4);function br(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Pc[i];if(s===void 0&&(s=new Float32Array(i),Pc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ea(r,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function lv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function fv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Uc.set(n),r.uniformMatrix2fv(this.addr,!1,Uc),xe(e,n)}}function dv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ic.set(n),r.uniformMatrix3fv(this.addr,!1,Ic),xe(e,n)}}function pv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),xe(e,n)}}function mv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function _v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2iv(this.addr,t),xe(e,t)}}function gv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3iv(this.addr,t),xe(e,t)}}function vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4iv(this.addr,t),xe(e,t)}}function xv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Sv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2uiv(this.addr,t),xe(e,t)}}function Mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3uiv(this.addr,t),xe(e,t)}}function yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4uiv(this.addr,t),xe(e,t)}}function Ev(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Cc.compareFunction=cu,s=Cc):s=wu,e.setTexture2D(t||s,i)}function Tv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Au,i)}function wv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ru,i)}function bv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bu,i)}function Av(r){switch(r){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return _v;case 35668:case 35672:return gv;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return Sv;case 36295:return Mv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return bv}}function Rv(r,t){r.uniform1fv(this.addr,t)}function Cv(r,t){const e=br(t,this.size,2);r.uniform2fv(this.addr,e)}function Pv(r,t){const e=br(t,this.size,3);r.uniform3fv(this.addr,e)}function Dv(r,t){const e=br(t,this.size,4);r.uniform4fv(this.addr,e)}function Lv(r,t){const e=br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Iv(r,t){const e=br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Uv(r,t){const e=br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Nv(r,t){r.uniform1iv(this.addr,t)}function Fv(r,t){r.uniform2iv(this.addr,t)}function Ov(r,t){r.uniform3iv(this.addr,t)}function zv(r,t){r.uniform4iv(this.addr,t)}function Bv(r,t){r.uniform1uiv(this.addr,t)}function Hv(r,t){r.uniform2uiv(this.addr,t)}function kv(r,t){r.uniform3uiv(this.addr,t)}function Vv(r,t){r.uniform4uiv(this.addr,t)}function Gv(r,t,e){const n=this.cache,i=t.length,s=ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||wu,s[a])}function Wv(r,t,e){const n=this.cache,i=t.length,s=ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Au,s[a])}function Xv(r,t,e){const n=this.cache,i=t.length,s=ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ru,s[a])}function qv(r,t,e){const n=this.cache,i=t.length,s=ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||bu,s[a])}function Yv(r){switch(r){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Dv;case 35674:return Lv;case 35675:return Iv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return zv;case 5125:return Bv;case 36294:return Hv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class $v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}}class jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}}class Kv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Nc(r,t){r.seq.push(t),r.map[t.id]=t}function Zv(r,t,e){const n=r.name,i=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),a=ka.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nc(e,c===void 0?new $v(o,r,t):new jv(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Kv(o),Nc(e,u)),e=u}}}class Hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Zv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Fc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Jv=37297;let Qv=0;function t0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Oc=new Ot;function e0(r){qt._getMatrix(Oc,qt.workingColorSpace,r);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case $s:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function zc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+t0(r.getShaderSource(t),a)}else return i}function n0(r,t){const e=e0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(r,t){let e;switch(t){case sp:e="Linear";break;case ap:e="Reinhard";break;case op:e="Cineon";break;case lp:e="ACESFilmic";break;case hp:e="AgX";break;case up:e="Neutral";break;case cp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new J;function r0(){qt.getLuminanceCoefficients(Ds);const r=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function a0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Or(r){return r!==""}function Bc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(r){return r.replace(l0,h0)}const c0=new Map;function h0(r,t){let e=zt[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(r){return r.replace(u0,f0)}function f0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===zd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zh:t="ENVMAP_BLENDING_MULTIPLY";break;case ip:t="ENVMAP_BLENDING_MIX";break;case rp:t="ENVMAP_BLENDING_ADD";break}return t}function g0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=d0(e),c=p0(e),h=m0(e),u=_0(e),f=g0(e),p=s0(e),g=a0(s),_=i.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?zt.tonemapping_pars_fragment:"",e.toneMapping!==ai?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=Wo(a),a=Bc(a,e),a=Hc(a,e),o=Wo(o),o=Bc(o,e),o=Hc(o,e),a=kc(a),o=kc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=M+m+a,v=M+d+o,A=Fc(i,i.VERTEX_SHADER,S),R=Fc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(A).trim(),K=i.getShaderInfoLog(R).trim();let H=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,R);else{const W=zc(i,A,"vertex"),O=zc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+W+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||K==="")&&(F=!1);F&&(L.diagnostics={runnable:H,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:K,prefix:d}})}i.deleteShader(A),i.deleteShader(R),P=new Hs(i,_),x=o0(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Jv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let x0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=x0++,this.code=t,this.usedTimes=0}}function y0(r,t,e,n,i,s,a){const o=new du,l=new S0,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,z,V){const K=z.fog,H=V.geometry,F=x.isMeshStandardMaterial?z.environment:null,W=(x.isMeshStandardMaterial?e:t).get(x.envMap||F),O=W&&W.mapping===Qs?W.image.height:null,ot=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=N!==void 0?N.length:0;let it=0;H.morphAttributes.position!==void 0&&(it=1),H.morphAttributes.normal!==void 0&&(it=2),H.morphAttributes.color!==void 0&&(it=3);let xt,Y,et,ct;if(ot){const Zt=yn[ot];xt=Zt.vertexShader,Y=Zt.fragmentShader}else xt=x.vertexShader,Y=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),ct=l.getFragmentShaderID(x);const ut=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Ut=V.isInstancedMesh===!0,Mt=V.isBatchedMesh===!0,te=!!x.map,Yt=!!x.matcap,Ht=!!W,U=!!x.aoMap,ye=!!x.lightMap,kt=!!x.bumpMap,Bt=!!x.normalMap,Rt=!!x.displacementMap,$t=!!x.emissiveMap,Ct=!!x.metalnessMap,C=!!x.roughnessMap,E=x.anisotropy>0,X=x.clearcoat>0,rt=x.dispersion>0,st=x.iridescence>0,tt=x.sheen>0,At=x.transmission>0,_t=E&&!!x.anisotropyMap,yt=X&&!!x.clearcoatMap,Ft=X&&!!x.clearcoatNormalMap,ft=X&&!!x.clearcoatRoughnessMap,T=st&&!!x.iridescenceMap,D=st&&!!x.iridescenceThicknessMap,q=tt&&!!x.sheenColorMap,B=tt&&!!x.sheenRoughnessMap,nt=!!x.specularMap,lt=!!x.specularColorMap,gt=!!x.specularIntensityMap,I=At&&!!x.transmissionMap,at=At&&!!x.thicknessMap,$=!!x.gradientMap,Q=!!x.alphaMap,dt=x.alphaTest>0,pt=!!x.alphaHash,Lt=!!x.extensions;let re=ai;x.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=r.toneMapping);const be={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:xt,fragmentShader:Y,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&V._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&V.instanceColor!==null,instancingMorph:Ut&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:yr,alphaToCoverage:!!x.alphaToCoverage,map:te,matcap:Yt,envMap:Ht,envMapMode:Ht&&W.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:ye,bumpMap:kt,normalMap:Bt,displacementMap:f&&Rt,emissiveMap:$t,normalMapObjectSpace:Bt&&x.normalMapType===_p,normalMapTangentSpace:Bt&&x.normalMapType===mp,metalnessMap:Ct,roughnessMap:C,anisotropy:E,anisotropyMap:_t,clearcoat:X,clearcoatMap:yt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:ft,dispersion:rt,iridescence:st,iridescenceMap:T,iridescenceThicknessMap:D,sheen:tt,sheenColorMap:q,sheenRoughnessMap:B,specularMap:nt,specularColorMap:lt,specularIntensityMap:gt,transmission:At,transmissionMap:I,thicknessMap:at,gradientMap:$,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:pt,combine:x.combine,mapUv:te&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:kt&&_(x.bumpMap.channel),normalMapUv:Bt&&_(x.normalMap.channel),displacementMapUv:Rt&&_(x.displacementMap.channel),emissiveMapUv:$t&&_(x.emissiveMap.channel),metalnessMapUv:Ct&&_(x.metalnessMap.channel),roughnessMapUv:C&&_(x.roughnessMap.channel),anisotropyMapUv:_t&&_(x.anisotropyMap.channel),clearcoatMapUv:yt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:D&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:B&&_(x.sheenRoughnessMap.channel),specularMapUv:nt&&_(x.specularMap.channel),specularColorMapUv:lt&&_(x.specularColorMap.channel),specularIntensityMapUv:gt&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:at&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Bt||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(te||Q),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:it,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:te&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Lt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&x.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(M(y,x),S(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const y=g[x.type];let L;if(y){const z=yn[y];L=$p.clone(z.uniforms)}else L=x.uniforms;return L}function A(x,y){let L;for(let z=0,V=h.length;z<V;z++){const K=h[z];if(K.cacheKey===y){L=K,++L.usedTimes;break}}return L===void 0&&(L=new v0(r,y,x,s),h.push(L)),L}function R(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function b(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:P}}function E0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function T0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||T0),n.length>1&&n.sort(f||Gc),i.length>1&&i.sort(f||Gc)}function h(){for(let u=t,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function w0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Wc,r.set(n,[a])):i>=s.length?(a=new Wc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function b0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new Qt};break;case"SpotLight":e={position:new J,direction:new J,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=e,e}}}function A0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let R0=0;function C0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function P0(r){const t=new b0,e=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,s=new ge,a=new ge;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,S=0,v=0,A=0,R=0,b=0;c.sort(C0);for(let x=0,y=c.length;x<y;x++){const L=c[x],z=L.color,V=L.intensity,K=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*V,u+=z.g*V,f+=z.b*V;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],V);b++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,O=e.get(L);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=F,p++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(z).multiplyScalar(V),F.distance=K,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[_]=F;const W=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,W.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=W.matrix,L.castShadow){const O=e.get(L);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=H,v++}_++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(z).multiplyScalar(V),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=F,m++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const W=L.shadow,O=e.get(L);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=F,g++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(V),F.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[d]=F,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=b,n.version=R0++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const S=c[d];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Xc(r){const t=new P0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function D0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Xc(r),t.set(i,[o])):s>=a.length?(o=new Xc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function U0(r,t,e){let n=new Mu;const i=new ie,s=new ie,a=new fe,o=new im({depthPacking:pp}),l=new rm,c={},h=e.maxTextureSize,u={[ci]:Ve,[Ve]:ci,[mn]:mn},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:L0,fragmentShader:I0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new zi;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let d=this.type;this.render=function(R,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=d!==Un&&this.type===Un,K=d===Un&&this.type!==Un;for(let H=0,F=R.length;H<F;H++){const W=R[H],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const ot=O.getFrameExtents();if(i.multiply(ot),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,O.mapSize.y=s.y)),O.map===null||V===!0||K===!0){const mt=this.type!==Un?{minFilter:Sn,magFilter:Sn}:{};O.map!==null&&O.map.dispose(),O.map=new Fi(i.x,i.y,mt),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const N=O.getViewportCount();for(let mt=0;mt<N;mt++){const it=O.getViewport(mt);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),z.viewport(a),O.updateMatrices(W,mt),n=O.getFrustum(),v(b,P,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Un&&M(O,P),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(x,y,L)};function M(R,b){const P=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(b,null,P,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(b,null,P,p,_,null)}function S(R,b,P,x){let y=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=y.uuid,V=b.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let H=K[V];H===void 0&&(H=y.clone(),K[V]=H,b.addEventListener("dispose",A)),y=H}if(y.visible=b.visible,y.wireframe=b.wireframe,x===Un?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=P}return y}function v(R,b,P,x,y){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const V=t.update(R),K=R.material;if(Array.isArray(K)){const H=V.groups;for(let F=0,W=H.length;F<W;F++){const O=H[F],ot=K[O.materialIndex];if(ot&&ot.visible){const N=S(R,ot,x,y);R.onBeforeShadow(r,R,b,P,V,N,O),r.renderBufferDirect(P,null,V,N,R,O),R.onAfterShadow(r,R,b,P,V,N,O)}}}else if(K.visible){const H=S(R,K,x,y);R.onBeforeShadow(r,R,b,P,V,H,null),r.renderBufferDirect(P,null,V,H,R,null),R.onAfterShadow(r,R,b,P,V,H,null)}}const z=R.children;for(let V=0,K=z.length;V<K;V++)v(z[V],b,P,x,y)}function A(R){R.target.removeEventListener("dispose",A);for(const P in c){const x=c[P],y=R.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const N0={[so]:ao,[oo]:ho,[lo]:uo,[gr]:co,[ao]:so,[ho]:oo,[uo]:lo,[co]:gr};function F0(r,t){function e(){let I=!1;const at=new fe;let $=null;const Q=new fe(0,0,0,0);return{setMask:function(dt){$!==dt&&!I&&(r.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){I=dt},setClear:function(dt,pt,Lt,re,be){be===!0&&(dt*=re,pt*=re,Lt*=re),at.set(dt,pt,Lt,re),Q.equals(at)===!1&&(r.clearColor(dt,pt,Lt,re),Q.copy(at))},reset:function(){I=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,$=null,Q=null,dt=null;return{setReversed:function(pt){if(at!==pt){const Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const re=dt;dt=null,this.setClear(re)}at=pt},getReversed:function(){return at},setTest:function(pt){pt?ut(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(pt){$!==pt&&!I&&(r.depthMask(pt),$=pt)},setFunc:function(pt){if(at&&(pt=N0[pt]),Q!==pt){switch(pt){case so:r.depthFunc(r.NEVER);break;case ao:r.depthFunc(r.ALWAYS);break;case oo:r.depthFunc(r.LESS);break;case gr:r.depthFunc(r.LEQUAL);break;case lo:r.depthFunc(r.EQUAL);break;case co:r.depthFunc(r.GEQUAL);break;case ho:r.depthFunc(r.GREATER);break;case uo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pt}},setLocked:function(pt){I=pt},setClear:function(pt){dt!==pt&&(at&&(pt=1-pt),r.clearDepth(pt),dt=pt)},reset:function(){I=!1,$=null,Q=null,dt=null,at=!1}}}function i(){let I=!1,at=null,$=null,Q=null,dt=null,pt=null,Lt=null,re=null,be=null;return{setTest:function(Zt){I||(Zt?ut(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!I&&(r.stencilMask(Zt),at=Zt)},setFunc:function(Zt,hn,Rn){($!==Zt||Q!==hn||dt!==Rn)&&(r.stencilFunc(Zt,hn,Rn),$=Zt,Q=hn,dt=Rn)},setOp:function(Zt,hn,Rn){(pt!==Zt||Lt!==hn||re!==Rn)&&(r.stencilOp(Zt,hn,Rn),pt=Zt,Lt=hn,re=Rn)},setLocked:function(Zt){I=Zt},setClear:function(Zt){be!==Zt&&(r.clearStencil(Zt),be=Zt)},reset:function(){I=!1,at=null,$=null,Q=null,dt=null,pt=null,Lt=null,re=null,be=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,S=null,v=null,A=null,R=null,b=new Qt(0,0,0),P=0,x=!1,y=null,L=null,z=null,V=null,K=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=W>=2);let ot=null,N={};const mt=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),xt=new fe().fromArray(mt),Y=new fe().fromArray(it);function et(I,at,$,Q){const dt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(I,pt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<$;Lt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(at,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(at+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return pt}const ct={};ct[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),ct[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ct[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),a.setFunc(gr),kt(!1),Bt(jl),ut(r.CULL_FACE),U(si);function ut(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Ut(I,at){return u[I]!==at?(r.bindFramebuffer(I,at),u[I]=at,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=at),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=at),!0):!1}function Mt(I,at){let $=p,Q=!1;if(I){$=f.get(at),$===void 0&&($=[],f.set(at,$));const dt=I.textures;if($.length!==dt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Lt=dt.length;pt<Lt;pt++)$[pt]=r.COLOR_ATTACHMENT0+pt;$.length=dt.length,Q=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,Q=!0);Q&&r.drawBuffers($)}function te(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Yt={[Ti]:r.FUNC_ADD,[Hd]:r.FUNC_SUBTRACT,[kd]:r.FUNC_REVERSE_SUBTRACT};Yt[Vd]=r.MIN,Yt[Gd]=r.MAX;const Ht={[Wd]:r.ZERO,[Xd]:r.ONE,[qd]:r.SRC_COLOR,[io]:r.SRC_ALPHA,[Jd]:r.SRC_ALPHA_SATURATE,[Kd]:r.DST_COLOR,[$d]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[ro]:r.ONE_MINUS_SRC_ALPHA,[Zd]:r.ONE_MINUS_DST_COLOR,[jd]:r.ONE_MINUS_DST_ALPHA,[Qd]:r.CONSTANT_COLOR,[tp]:r.ONE_MINUS_CONSTANT_COLOR,[ep]:r.CONSTANT_ALPHA,[np]:r.ONE_MINUS_CONSTANT_ALPHA};function U(I,at,$,Q,dt,pt,Lt,re,be,Zt){if(I===si){_===!0&&(bt(r.BLEND),_=!1);return}if(_===!1&&(ut(r.BLEND),_=!0),I!==Bd){if(I!==m||Zt!==x){if((d!==Ti||v!==Ti)&&(r.blendEquation(r.FUNC_ADD),d=Ti,v=Ti),Zt)switch(I){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kl:r.blendFunc(r.ONE,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,A=null,R=null,b.set(0,0,0),P=0,m=I,x=Zt}return}dt=dt||at,pt=pt||$,Lt=Lt||Q,(at!==d||dt!==v)&&(r.blendEquationSeparate(Yt[at],Yt[dt]),d=at,v=dt),($!==M||Q!==S||pt!==A||Lt!==R)&&(r.blendFuncSeparate(Ht[$],Ht[Q],Ht[pt],Ht[Lt]),M=$,S=Q,A=pt,R=Lt),(re.equals(b)===!1||be!==P)&&(r.blendColor(re.r,re.g,re.b,be),b.copy(re),P=be),m=I,x=!1}function ye(I,at){I.side===mn?bt(r.CULL_FACE):ut(r.CULL_FACE);let $=I.side===Ve;at&&($=!$),kt($),I.blending===lr&&I.transparent===!1?U(si):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),y=I)}function Bt(I){I!==Fd?(ut(r.CULL_FACE),I!==L&&(I===jl?r.cullFace(r.BACK):I===Od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),L=I}function Rt(I){I!==z&&(F&&r.lineWidth(I),z=I)}function $t(I,at,$){I?(ut(r.POLYGON_OFFSET_FILL),(V!==at||K!==$)&&(r.polygonOffset(at,$),V=at,K=$)):bt(r.POLYGON_OFFSET_FILL)}function Ct(I){I?ut(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+H-1),ot!==I&&(r.activeTexture(I),ot=I)}function E(I,at,$){$===void 0&&(ot===null?$=r.TEXTURE0+H-1:$=ot);let Q=N[$];Q===void 0&&(Q={type:void 0,texture:void 0},N[$]=Q),(Q.type!==I||Q.texture!==at)&&(ot!==$&&(r.activeTexture($),ot=$),r.bindTexture(I,at||ct[I]),Q.type=I,Q.texture=at)}function X(){const I=N[ot];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(I){xt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),xt.copy(I))}function B(I){Y.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function nt(I,at){let $=c.get(at);$===void 0&&($=new WeakMap,c.set(at,$));let Q=$.get(I);Q===void 0&&(Q=r.getUniformBlockIndex(at,I.name),$.set(I,Q))}function lt(I,at){const Q=c.get(at).get(I);l.get(at)!==Q&&(r.uniformBlockBinding(at,Q,I.__bindingPointIndex),l.set(at,Q))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ot=null,N={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,S=null,v=null,A=null,R=null,b=new Qt(0,0,0),P=0,x=!1,y=null,L=null,z=null,V=null,K=null,xt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:bt,bindFramebuffer:Ut,drawBuffers:Mt,useProgram:te,setBlending:U,setMaterial:ye,setFlipSided:kt,setCullFace:Bt,setLineWidth:Rt,setPolygonOffset:$t,setScissorTest:Ct,activeTexture:C,bindTexture:E,unbindTexture:X,compressedTexImage2D:rt,compressedTexImage3D:st,texImage2D:T,texImage3D:D,updateUBOMapping:nt,uniformBlockBinding:lt,texStorage2D:Ft,texStorage3D:ft,texSubImage2D:tt,texSubImage3D:At,compressedTexSubImage2D:_t,compressedTexSubImage3D:yt,scissor:q,viewport:B,reset:gt}}function O0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function g(C,E){return p?new OffscreenCanvas(C,E):Kr("canvas")}function _(C,E,X){let rt=1;const st=Ct(C);if((st.width>X||st.height>X)&&(rt=X/Math.max(st.width,st.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const tt=Math.floor(rt*st.width),At=Math.floor(rt*st.height);u===void 0&&(u=g(tt,At));const _t=E?g(tt,At):u;return _t.width=tt,_t.height=At,_t.getContext("2d").drawImage(C,0,0,tt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+At+")."),_t}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,E,X,rt,st=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=E;if(E===r.RED&&(X===r.FLOAT&&(tt=r.R32F),X===r.HALF_FLOAT&&(tt=r.R16F),X===r.UNSIGNED_BYTE&&(tt=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(tt=r.R8UI),X===r.UNSIGNED_SHORT&&(tt=r.R16UI),X===r.UNSIGNED_INT&&(tt=r.R32UI),X===r.BYTE&&(tt=r.R8I),X===r.SHORT&&(tt=r.R16I),X===r.INT&&(tt=r.R32I)),E===r.RG&&(X===r.FLOAT&&(tt=r.RG32F),X===r.HALF_FLOAT&&(tt=r.RG16F),X===r.UNSIGNED_BYTE&&(tt=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(tt=r.RG8UI),X===r.UNSIGNED_SHORT&&(tt=r.RG16UI),X===r.UNSIGNED_INT&&(tt=r.RG32UI),X===r.BYTE&&(tt=r.RG8I),X===r.SHORT&&(tt=r.RG16I),X===r.INT&&(tt=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),X===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),X===r.UNSIGNED_INT&&(tt=r.RGB32UI),X===r.BYTE&&(tt=r.RGB8I),X===r.SHORT&&(tt=r.RGB16I),X===r.INT&&(tt=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),X===r.UNSIGNED_INT&&(tt=r.RGBA32UI),X===r.BYTE&&(tt=r.RGBA8I),X===r.SHORT&&(tt=r.RGBA16I),X===r.INT&&(tt=r.RGBA32I)),E===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),E===r.RGBA){const At=st?$s:qt.getTransfer(rt);X===r.FLOAT&&(tt=r.RGBA32F),X===r.HALF_FLOAT&&(tt=r.RGBA16F),X===r.UNSIGNED_BYTE&&(tt=At===Jt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(C,E){let X;return C?E===null||E===Ni||E===Sr?X=r.DEPTH24_STENCIL8:E===On?X=r.DEPTH32F_STENCIL8:E===jr&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===Sr?X=r.DEPTH_COMPONENT24:E===On?X=r.DEPTH_COMPONENT32F:E===jr&&(X=r.DEPTH_COMPONENT16),X}function A(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function R(C){const E=C.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&h.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),y(E)}function P(C){const E=n.get(C);if(E.__webglInit===void 0)return;const X=C.source,rt=f.get(X);if(rt){const st=rt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&x(C),Object.keys(rt).length===0&&f.delete(X)}n.remove(C)}function x(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const X=C.source,rt=f.get(X);delete rt[E.__cacheKey],a.memory.textures--}function y(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let st=0;st<E.__webglFramebuffer[rt].length;st++)r.deleteFramebuffer(E.__webglFramebuffer[rt][st]);else r.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)r.deleteFramebuffer(E.__webglFramebuffer[rt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=C.textures;for(let rt=0,st=X.length;rt<st;rt++){const tt=n.get(X[rt]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(X[rt])}n.remove(C)}let L=0;function z(){L=0}function V(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function K(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){const X=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const rt=C.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,C,E);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function F(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Y(X,C,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function W(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Y(X,C,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function O(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){et(X,C,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const ot={[mo]:r.REPEAT,[Ai]:r.CLAMP_TO_EDGE,[_o]:r.MIRRORED_REPEAT},N={[Sn]:r.NEAREST,[fp]:r.NEAREST_MIPMAP_NEAREST,[hs]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[fa]:r.LINEAR_MIPMAP_NEAREST,[Ri]:r.LINEAR_MIPMAP_LINEAR},mt={[gp]:r.NEVER,[Ep]:r.ALWAYS,[vp]:r.LESS,[cu]:r.LEQUAL,[xp]:r.EQUAL,[yp]:r.GEQUAL,[Sp]:r.GREATER,[Mp]:r.NOTEQUAL};function it(C,E){if(E.type===On&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===fa||E.magFilter===hs||E.magFilter===Ri||E.minFilter===cn||E.minFilter===fa||E.minFilter===hs||E.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ot[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ot[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ot[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,N[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==hs&&E.minFilter!==Ri||E.type===On&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xt(C,E){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R));const rt=E.source;let st=f.get(rt);st===void 0&&(st={},f.set(rt,st));const tt=K(E);if(tt!==C.__cacheKey){st[tt]===void 0&&(st[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),st[tt].usedTimes++;const At=st[C.__cacheKey];At!==void 0&&(st[C.__cacheKey].usedTimes--,At.usedTimes===0&&x(E)),C.__cacheKey=tt,C.__webglTexture=st[tt].texture}return X}function Y(C,E,X){let rt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=r.TEXTURE_3D);const st=xt(C,E),tt=E.source;e.bindTexture(rt,C.__webglTexture,r.TEXTURE0+X);const At=n.get(tt);if(tt.version!==At.__version||st===!0){e.activeTexture(r.TEXTURE0+X);const _t=qt.getPrimaries(qt.workingColorSpace),yt=E.colorSpace===Qn?null:qt.getPrimaries(E.colorSpace),Ft=E.colorSpace===Qn||_t===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ft=_(E.image,!1,i.maxTextureSize);ft=$t(E,ft);const T=s.convert(E.format,E.colorSpace),D=s.convert(E.type);let q=S(E.internalFormat,T,D,E.colorSpace,E.isVideoTexture);it(rt,E);let B;const nt=E.mipmaps,lt=E.isVideoTexture!==!0,gt=At.__version===void 0||st===!0,I=tt.dataReady,at=A(E,ft);if(E.isDepthTexture)q=v(E.format===Mr,E.type),gt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,q,ft.width,ft.height):e.texImage2D(r.TEXTURE_2D,0,q,ft.width,ft.height,0,T,D,null));else if(E.isDataTexture)if(nt.length>0){lt&&gt&&e.texStorage2D(r.TEXTURE_2D,at,q,nt[0].width,nt[0].height);for(let $=0,Q=nt.length;$<Q;$++)B=nt[$],lt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,B.width,B.height,T,D,B.data):e.texImage2D(r.TEXTURE_2D,$,q,B.width,B.height,0,T,D,B.data);E.generateMipmaps=!1}else lt?(gt&&e.texStorage2D(r.TEXTURE_2D,at,q,ft.width,ft.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft.width,ft.height,T,D,ft.data)):e.texImage2D(r.TEXTURE_2D,0,q,ft.width,ft.height,0,T,D,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,q,nt[0].width,nt[0].height,ft.depth);for(let $=0,Q=nt.length;$<Q;$++)if(B=nt[$],E.format!==vn)if(T!==null)if(lt){if(I)if(E.layerUpdates.size>0){const dt=Mc(B.width,B.height,E.format,E.type);for(const pt of E.layerUpdates){const Lt=B.data.subarray(pt*dt/B.data.BYTES_PER_ELEMENT,(pt+1)*dt/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,pt,B.width,B.height,1,T,Lt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,B.width,B.height,ft.depth,T,B.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,q,B.width,B.height,ft.depth,0,B.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,B.width,B.height,ft.depth,T,D,B.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,q,B.width,B.height,ft.depth,0,T,D,B.data)}else{lt&&gt&&e.texStorage2D(r.TEXTURE_2D,at,q,nt[0].width,nt[0].height);for(let $=0,Q=nt.length;$<Q;$++)B=nt[$],E.format!==vn?T!==null?lt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,B.width,B.height,T,B.data):e.compressedTexImage2D(r.TEXTURE_2D,$,q,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,B.width,B.height,T,D,B.data):e.texImage2D(r.TEXTURE_2D,$,q,B.width,B.height,0,T,D,B.data)}else if(E.isDataArrayTexture)if(lt){if(gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,q,ft.width,ft.height,ft.depth),I)if(E.layerUpdates.size>0){const $=Mc(ft.width,ft.height,E.format,E.type);for(const Q of E.layerUpdates){const dt=ft.data.subarray(Q*$/ft.data.BYTES_PER_ELEMENT,(Q+1)*$/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ft.width,ft.height,1,T,D,dt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,T,D,ft.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,q,ft.width,ft.height,ft.depth,0,T,D,ft.data);else if(E.isData3DTexture)lt?(gt&&e.texStorage3D(r.TEXTURE_3D,at,q,ft.width,ft.height,ft.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,T,D,ft.data)):e.texImage3D(r.TEXTURE_3D,0,q,ft.width,ft.height,ft.depth,0,T,D,ft.data);else if(E.isFramebufferTexture){if(gt)if(lt)e.texStorage2D(r.TEXTURE_2D,at,q,ft.width,ft.height);else{let $=ft.width,Q=ft.height;for(let dt=0;dt<at;dt++)e.texImage2D(r.TEXTURE_2D,dt,q,$,Q,0,T,D,null),$>>=1,Q>>=1}}else if(nt.length>0){if(lt&&gt){const $=Ct(nt[0]);e.texStorage2D(r.TEXTURE_2D,at,q,$.width,$.height)}for(let $=0,Q=nt.length;$<Q;$++)B=nt[$],lt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,T,D,B):e.texImage2D(r.TEXTURE_2D,$,q,T,D,B);E.generateMipmaps=!1}else if(lt){if(gt){const $=Ct(ft);e.texStorage2D(r.TEXTURE_2D,at,q,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,T,D,ft)}else e.texImage2D(r.TEXTURE_2D,0,q,T,D,ft);m(E)&&d(rt),At.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function et(C,E,X){if(E.image.length!==6)return;const rt=xt(C,E),st=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);const tt=n.get(st);if(st.version!==tt.__version||rt===!0){e.activeTexture(r.TEXTURE0+X);const At=qt.getPrimaries(qt.workingColorSpace),_t=E.colorSpace===Qn?null:qt.getPrimaries(E.colorSpace),yt=E.colorSpace===Qn||At===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ft=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,T=[];for(let Q=0;Q<6;Q++)!Ft&&!ft?T[Q]=_(E.image[Q],!0,i.maxCubemapSize):T[Q]=ft?E.image[Q].image:E.image[Q],T[Q]=$t(E,T[Q]);const D=T[0],q=s.convert(E.format,E.colorSpace),B=s.convert(E.type),nt=S(E.internalFormat,q,B,E.colorSpace),lt=E.isVideoTexture!==!0,gt=tt.__version===void 0||rt===!0,I=st.dataReady;let at=A(E,D);it(r.TEXTURE_CUBE_MAP,E);let $;if(Ft){lt&&gt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,at,nt,D.width,D.height);for(let Q=0;Q<6;Q++){$=T[Q].mipmaps;for(let dt=0;dt<$.length;dt++){const pt=$[dt];E.format!==vn?q!==null?lt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,pt.width,pt.height,q,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,nt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,pt.width,pt.height,q,B,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,nt,pt.width,pt.height,0,q,B,pt.data)}}}else{if($=E.mipmaps,lt&&gt){$.length>0&&at++;const Q=Ct(T[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,at,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ft){lt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,T[Q].width,T[Q].height,q,B,T[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,T[Q].width,T[Q].height,0,q,B,T[Q].data);for(let dt=0;dt<$.length;dt++){const Lt=$[dt].image[Q].image;lt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Lt.width,Lt.height,q,B,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,nt,Lt.width,Lt.height,0,q,B,Lt.data)}}else{lt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,q,B,T[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,q,B,T[Q]);for(let dt=0;dt<$.length;dt++){const pt=$[dt];lt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,q,B,pt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,nt,q,B,pt.image[Q])}}}m(E)&&d(r.TEXTURE_CUBE_MAP),tt.__version=st.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ct(C,E,X,rt,st,tt){const At=s.convert(X.format,X.colorSpace),_t=s.convert(X.type),yt=S(X.internalFormat,At,_t,X.colorSpace),Ft=n.get(E),ft=n.get(X);if(ft.__renderTarget=E,!Ft.__hasExternalTextures){const T=Math.max(1,E.width>>tt),D=Math.max(1,E.height>>tt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,yt,T,D,E.depth,0,At,_t,null):e.texImage2D(st,tt,yt,T,D,0,At,_t,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,st,ft.__webglTexture,0,kt(E)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,st,ft.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(C,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const rt=E.depthTexture,st=rt&&rt.isDepthTexture?rt.type:null,tt=v(E.stencilBuffer,st),At=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=kt(E);Bt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,tt,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,tt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,tt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,C)}else{const rt=E.textures;for(let st=0;st<rt.length;st++){const tt=rt[st],At=s.convert(tt.format,tt.colorSpace),_t=s.convert(tt.type),yt=S(tt.internalFormat,At,_t,tt.colorSpace),Ft=kt(E);X&&Bt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,yt,E.width,E.height):Bt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft,yt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,yt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(E.depthTexture);rt.__renderTarget=E,(!rt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const st=rt.__webglTexture,tt=kt(E);if(E.depthTexture.format===cr)Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(E.depthTexture.format===Mr)Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ut(C){const E=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const rt=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",st)};rt.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=rt}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");bt(E.__webglFramebuffer,C)}else if(X){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=r.createRenderbuffer(),ut(E.__webglDepthbuffer[rt],C,!1);else{const st=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ut(E.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(C,E,X){const rt=n.get(C);E!==void 0&&ct(rt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ut(C)}function te(C){const E=C.texture,X=n.get(C),rt=n.get(E);C.addEventListener("dispose",b);const st=C.textures,tt=C.isWebGLCubeRenderTarget===!0,At=st.length>1;if(At||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=E.version,a.memory.textures++),tt){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let yt=0;yt<E.mipmaps.length;yt++)X.__webglFramebuffer[_t][yt]=r.createFramebuffer()}else X.__webglFramebuffer[_t]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)X.__webglFramebuffer[_t]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(At)for(let _t=0,yt=st.length;_t<yt;_t++){const Ft=n.get(st[_t]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Bt(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){const yt=st[_t];X.__webglColorRenderbuffer[_t]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);const Ft=s.convert(yt.format,yt.colorSpace),ft=s.convert(yt.type),T=S(yt.internalFormat,Ft,ft,yt.colorSpace,C.isXRRenderTarget===!0),D=kt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,D,T,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),it(r.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)ct(X.__webglFramebuffer[_t][yt],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else ct(X.__webglFramebuffer[_t],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let _t=0,yt=st.length;_t<yt;_t++){const Ft=st[_t],ft=n.get(Ft);e.bindTexture(r.TEXTURE_2D,ft.__webglTexture),it(r.TEXTURE_2D,Ft),ct(X.__webglFramebuffer,C,Ft,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,0),m(Ft)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let _t=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),it(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)ct(X.__webglFramebuffer[yt],C,E,r.COLOR_ATTACHMENT0,_t,yt);else ct(X.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,_t,0);m(E)&&d(_t),e.unbindTexture()}C.depthBuffer&&Ut(C)}function Yt(C){const E=C.textures;for(let X=0,rt=E.length;X<rt;X++){const st=E[X];if(m(st)){const tt=M(C),At=n.get(st).__webglTexture;e.bindTexture(tt,At),d(tt),e.unbindTexture()}}}const Ht=[],U=[];function ye(C){if(C.samples>0){if(Bt(C)===!1){const E=C.textures,X=C.width,rt=C.height;let st=r.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=n.get(C),_t=E.length>1;if(_t)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),_t){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Ft=n.get(E[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,X,rt,0,0,X,rt,st,r.NEAREST),l===!0&&(Ht.length=0,U.length=0,Ht.push(r.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(tt),U.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_t)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Ft=n.get(E[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function kt(C){return Math.min(i.maxSamples,C.samples)}function Bt(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function $t(C,E){const X=C.colorSpace,rt=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==yr&&X!==Qn&&(qt.getTransfer(X)===Jt?(rt!==vn||st!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ct(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=Mt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Bt}function z0(r,t){function e(n,i=Qn){let s;const a=qt.getTransfer(i);if(n===Vn)return r.UNSIGNED_BYTE;if(n===ul)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return r.BYTE;if(n===tu)return r.SHORT;if(n===jr)return r.UNSIGNED_SHORT;if(n===hl)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===Qr)return r.HALF_FLOAT;if(n===nu)return r.ALPHA;if(n===iu)return r.RGB;if(n===vn)return r.RGBA;if(n===ru)return r.LUMINANCE;if(n===su)return r.LUMINANCE_ALPHA;if(n===cr)return r.DEPTH_COMPONENT;if(n===Mr)return r.DEPTH_STENCIL;if(n===au)return r.RED;if(n===dl)return r.RED_INTEGER;if(n===ou)return r.RG;if(n===pl)return r.RG_INTEGER;if(n===ml)return r.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===zs)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===vo||n===xo||n===So)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===yo||n===Eo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mo||n===yo)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===wo||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Lo||n===Io||n===Uo||n===No||n===Fo||n===Oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===To)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===zo||n===Bo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bs)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===Ho||n===ko||n===Vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:B0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends Tr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new k0,m=e.getContextAttributes();let d=null,M=null;const S=[],v=[],A=new ie;let R=null;const b=new an;b.viewport=new fe;const P=new an;P.viewport=new fe;const x=[b,P],y=new hm;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new Ua,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new Ua,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new Ua,S[Y]=et),et.getHandSpace()};function V(Y){const et=v.indexOf(Y.inputSource);if(et===-1)return;const ct=S[et];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||a),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<S.length;Y++){const et=v[Y];et!==null&&(v[Y]=null,S[Y].disconnect(et))}L=null,z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,M=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",K),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,ut=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Mr:cr,ut=m.stencil?Sr:Ni);const Ut={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Fi(f.textureWidth,f.textureHeight,{format:vn,type:Vn,depthTexture:new yu(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Fi(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let et=0;et<Y.removed.length;et++){const ct=Y.removed[et],ut=v.indexOf(ct);ut>=0&&(v[ut]=null,S[ut].disconnect(ct))}for(let et=0;et<Y.added.length;et++){const ct=Y.added[et];let ut=v.indexOf(ct);if(ut===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=v.length){v.push(ct),ut=Ut;break}else if(v[Ut]===null){v[Ut]=ct,ut=Ut;break}if(ut===-1)break}const bt=S[ut];bt&&bt.connect(ct)}}const F=new J,W=new J;function O(Y,et,ct){F.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(ct.matrixWorld);const ut=F.distanceTo(W),bt=et.projectionMatrix.elements,Ut=ct.projectionMatrix.elements,Mt=bt[14]/(bt[10]-1),te=bt[14]/(bt[10]+1),Yt=(bt[9]+1)/bt[5],Ht=(bt[9]-1)/bt[5],U=(bt[8]-1)/bt[0],ye=(Ut[8]+1)/Ut[0],kt=Mt*U,Bt=Mt*ye,Rt=ut/(-U+ye),$t=Rt*-U;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Ct=Mt+Rt,C=te+Rt,E=kt-$t,X=Bt+(ut-$t),rt=Yt*te/C*Ct,st=Ht*te/C*Ct;Y.projectionMatrix.makePerspective(E,X,rt,st,Ct,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,ct=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),y.near=P.near=b.near=et,y.far=P.far=b.far=ct,(L!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far),b.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|P.layers.mask;const ut=Y.parent,bt=y.cameras;ot(y,ut);for(let Ut=0;Ut<bt.length;Ut++)ot(bt[Ut],ut);bt.length===2?O(y,b,P):y.projectionMatrix.copy(b.projectionMatrix),N(Y,y,ut)};function N(Y,et,ct){ct===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Go*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let mt=null;function it(Y,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Mt=0;Mt<ct.length;Mt++){const te=ct[Mt];let Yt=null;if(p!==null)Yt=p.getViewport(te);else{const U=u.getViewSubImage(f,te);Yt=U.viewport,Mt===0&&(t.setRenderTargetTextures(M,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let Ht=x[Mt];Ht===void 0&&(Ht=new an,Ht.layers.enable(Mt),Ht.viewport=new fe,x[Mt]=Ht),Ht.matrix.fromArray(te.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(te.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Mt===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Ht)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Mt=u.getDepthInformation(ct[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,i.renderState)}}for(let ct=0;ct<S.length;ct++){const ut=v[ct],bt=S[ct];ut!==null&&bt!==void 0&&bt.update(ut,et,c||a)}mt&&mt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const xt=new Tu;xt.setAnimationLoop(it),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Si=new Gn,G0=new ge;function W0(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,vu(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ve&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ve&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(M,A);const R=t.render.frame;s[M.id]!==R&&(f(M),s[M.id]=R)}function h(M){const S=u();M.__bindingPointIndex=S;const v=r.createBuffer(),A=M.__size,R=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=i[M.id],v=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,b=v.length;R<b;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,y=P.length;x<y;x++){const L=P[x];if(p(L,R,x,A)===!0){const z=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let H=0;H<V.length;H++){const F=V[H],W=_(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,z+K,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,S,v,A){const R=M.value,b=S+"_"+v;if(A[b]===void 0)return typeof R=="number"||typeof R=="boolean"?A[b]=R:A[b]=R.clone(),!0;{const P=A[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return A[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(M){const S=M.uniforms;let v=0;const A=16;for(let b=0,P=S.length;b<P;b++){const x=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,L=x.length;y<L;y++){const z=x[y],V=Array.isArray(z.value)?z.value:[z.value];for(let K=0,H=V.length;K<H;K++){const F=V[K],W=_(F),O=v%A,ot=O%W.boundary,N=O+ot;v+=ot,N!==0&&A-N<W.storage&&(v+=A-N),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=W.storage}}}const R=v%A;return R>0&&(v+=A-R),M.__size=v,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function d(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class q0{constructor(t={}){const{canvas:e=wp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let A=!1,R=0,b=0,P=null,x=-1,y=null;const L=new fe,z=new fe;let V=null;const K=new Qt(0);let H=0,F=e.width,W=e.height,O=1,ot=null,N=null;const mt=new fe(0,0,F,W),it=new fe(0,0,F,W);let xt=!1;const Y=new Mu;let et=!1,ct=!1;this.transmissionResolutionScale=1;const ut=new ge,bt=new ge,Ut=new J,Mt=new fe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ht(){return P===null?O:1}let U=n;function ye(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const k="webgl2";if(U=ye(k,w),U===null)throw ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Bt,Rt,$t,Ct,C,E,X,rt,st,tt,At,_t,yt,Ft,ft,T,D,q,B,nt,lt,gt,I;function at(){kt=new nv(U),kt.init(),lt=new z0(U,kt),Bt=new Kg(U,kt,t,lt),Rt=new F0(U,kt),Bt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),$t=new sv(U),Ct=new E0,C=new O0(U,kt,Rt,Ct,Bt,lt,$t),E=new Jg(v),X=new ev(v),rt=new fm(U),gt=new $g(U,rt),st=new iv(U,rt,$t,gt),tt=new ov(U,st,rt,$t),q=new av(U,Bt,C),ft=new Zg(Ct),At=new y0(v,E,X,kt,Bt,gt,ft),_t=new W0(v,Ct),yt=new w0,Ft=new D0(kt),D=new Yg(v,E,X,Rt,tt,p,l),T=new U0(v,tt,Bt),I=new X0(U,$t,Bt,Rt),B=new jg(U,kt,$t),nt=new rv(U,kt,$t),$t.programs=At.programs,v.capabilities=Bt,v.extensions=kt,v.properties=Ct,v.renderLists=yt,v.shadowMap=T,v.state=Rt,v.info=$t}at();const $=new V0(v,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(F,W,!1))},this.getSize=function(w){return w.set(F,W)},this.setSize=function(w,k,j=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,W=k,e.width=Math.floor(w*O),e.height=Math.floor(k*O),j===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(F*O,W*O).floor()},this.setDrawingBufferSize=function(w,k,j){F=w,W=k,O=j,e.width=Math.floor(w*j),e.height=Math.floor(k*j),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,k,j,Z){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,k,j,Z),Rt.viewport(L.copy(mt).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,k,j,Z){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,k,j,Z),Rt.scissor(z.copy(it).multiplyScalar(O).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Rt.setScissorTest(xt=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(w=!0,k=!0,j=!0){let Z=0;if(w){let G=!1;if(P!==null){const ht=P.texture.format;G=ht===ml||ht===pl||ht===dl}if(G){const ht=P.texture.type,St=ht===Vn||ht===Ni||ht===jr||ht===Sr||ht===ul||ht===fl,Et=D.getClearColor(),Tt=D.getClearAlpha(),It=Et.r,Nt=Et.g,Pt=Et.b;St?(g[0]=It,g[1]=Nt,g[2]=Pt,g[3]=Tt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=It,_[1]=Nt,_[2]=Pt,_[3]=Tt,U.clearBufferiv(U.COLOR,0,_))}else Z|=U.COLOR_BUFFER_BIT}k&&(Z|=U.DEPTH_BUFFER_BIT),j&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),D.dispose(),yt.dispose(),Ft.dispose(),Ct.dispose(),E.dispose(),X.dispose(),tt.dispose(),gt.dispose(),I.dispose(),At.dispose(),$.dispose(),$.removeEventListener("sessionstart",xl),$.removeEventListener("sessionend",Sl),ui.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=$t.autoReset,k=T.enabled,j=T.autoUpdate,Z=T.needsUpdate,G=T.type;at(),$t.autoReset=w,T.enabled=k,T.autoUpdate=j,T.needsUpdate=Z,T.type=G}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){const k=w.target;k.removeEventListener("dispose",Lt),re(k)}function re(w){be(w),Ct.remove(w)}function be(w){const k=Ct.get(w).programs;k!==void 0&&(k.forEach(function(j){At.releaseProgram(j)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,j,Z,G,ht){k===null&&(k=te);const St=G.isMesh&&G.matrixWorld.determinant()<0,Et=Pu(w,k,j,Z,G);Rt.setMaterial(Z,St);let Tt=j.index,It=1;if(Z.wireframe===!0){if(Tt=st.getWireframeAttribute(j),Tt===void 0)return;It=2}const Nt=j.drawRange,Pt=j.attributes.position;let Wt=Nt.start*It,jt=(Nt.start+Nt.count)*It;ht!==null&&(Wt=Math.max(Wt,ht.start*It),jt=Math.min(jt,(ht.start+ht.count)*It)),Tt!==null?(Wt=Math.max(Wt,0),jt=Math.min(jt,Tt.count)):Pt!=null&&(Wt=Math.max(Wt,0),jt=Math.min(jt,Pt.count));const de=jt-Wt;if(de<0||de===1/0)return;gt.setup(G,Z,Et,j,Tt);let ce,Xt=B;if(Tt!==null&&(ce=rt.get(Tt),Xt=nt,Xt.setIndex(ce)),G.isMesh)Z.wireframe===!0?(Rt.setLineWidth(Z.wireframeLinewidth*Ht()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(G.isLine){let Dt=Z.linewidth;Dt===void 0&&(Dt=1),Rt.setLineWidth(Dt*Ht()),G.isLineSegments?Xt.setMode(U.LINES):G.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else G.isPoints?Xt.setMode(U.POINTS):G.isSprite&&Xt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,Ee=G._multiDrawCounts,Kt=G._multiDrawCount,un=Tt?rt.get(Tt).bytesPerElement:1,Bi=Ct.get(Z).currentProgram.getUniforms();for(let We=0;We<Kt;We++)Bi.setValue(U,"_gl_DrawID",We),Xt.render(Dt[We]/un,Ee[We])}else if(G.isInstancedMesh)Xt.renderInstances(Wt,de,G.count);else if(j.isInstancedBufferGeometry){const Dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ee=Math.min(j.instanceCount,Dt);Xt.renderInstances(Wt,de,Ee)}else Xt.render(Wt,de)};function Zt(w,k,j){w.transparent===!0&&w.side===mn&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,ss(w,k,j),w.side=ci,w.needsUpdate=!0,ss(w,k,j),w.side=mn):ss(w,k,j)}this.compile=function(w,k,j=null){j===null&&(j=w),d=Ft.get(j),d.init(k),S.push(d),j.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),w!==j&&w.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const Z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){const Et=ht[St];Zt(Et,j,G),Z.add(Et)}else Zt(ht,j,G),Z.add(ht)}),S.pop(),d=null,Z},this.compileAsync=function(w,k,j=null){const Z=this.compile(w,k,j);return new Promise(G=>{function ht(){if(Z.forEach(function(St){Ct.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){G(w);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let hn=null;function Rn(w){hn&&hn(w)}function xl(){ui.stop()}function Sl(){ui.start()}const ui=new Tu;ui.setAnimationLoop(Rn),typeof self!="undefined"&&ui.setContext(self),this.setAnimationLoop=function(w){hn=w,$.setAnimationLoop(w),w===null?ui.stop():ui.start()},$.addEventListener("sessionstart",xl),$.addEventListener("sessionend",Sl),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,P),d=Ft.get(w,S.length),d.init(k),S.push(d),bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(bt),ct=this.localClippingEnabled,et=ft.init(this.clippingPlanes,ct),m=yt.get(w,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&na(ht,k,-1/0,v.sortObjects)}na(w,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,N),Yt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Yt&&D.addToRenderList(m,w),this.info.render.frame++,et===!0&&ft.beginShadows();const j=d.state.shadowsArray;T.render(j,w,k),et===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,G=m.transmissive;if(d.setupLights(),k.isArrayCamera){const ht=k.cameras;if(G.length>0)for(let St=0,Et=ht.length;St<Et;St++){const Tt=ht[St];yl(Z,G,w,Tt)}Yt&&D.render(w);for(let St=0,Et=ht.length;St<Et;St++){const Tt=ht[St];Ml(m,w,Tt,Tt.viewport)}}else G.length>0&&yl(Z,G,w,k),Yt&&D.render(w),Ml(m,w,k);P!==null&&b===0&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,k),gt.resetDefaultState(),x=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],et===!0&&ft.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function na(w,k,j,Z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){Z&&Mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const St=tt.update(w),Et=w.material;Et.visible&&m.push(w,St,Et,j,Mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const St=tt.update(w),Et=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Mt.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Mt.copy(St.boundingSphere.center)),Mt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(Et)){const Tt=St.groups;for(let It=0,Nt=Tt.length;It<Nt;It++){const Pt=Tt[It],Wt=Et[Pt.materialIndex];Wt&&Wt.visible&&m.push(w,St,Wt,j,Mt.z,Pt)}}else Et.visible&&m.push(w,St,Et,j,Mt.z,null)}}const ht=w.children;for(let St=0,Et=ht.length;St<Et;St++)na(ht[St],k,j,Z)}function Ml(w,k,j,Z){const G=w.opaque,ht=w.transmissive,St=w.transparent;d.setupLightsView(j),et===!0&&ft.setGlobalState(v.clippingPlanes,j),Z&&Rt.viewport(L.copy(Z)),G.length>0&&rs(G,k,j),ht.length>0&&rs(ht,k,j),St.length>0&&rs(St,k,j),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function yl(w,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Fi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Qr:Vn,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ht=d.state.transmissionRenderTarget[Z.id],St=Z.viewport||L;ht.setSize(St.z*v.transmissionResolutionScale,St.w*v.transmissionResolutionScale);const Et=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(K),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&D.render(j);const Tt=v.toneMapping;v.toneMapping=ai;const It=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),et===!0&&ft.setGlobalState(v.clippingPlanes,Z),rs(w,j,Z),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Pt=0,Wt=k.length;Pt<Wt;Pt++){const jt=k[Pt],de=jt.object,ce=jt.geometry,Xt=jt.material,Dt=jt.group;if(Xt.side===mn&&de.layers.test(Z.layers)){const Ee=Xt.side;Xt.side=Ve,Xt.needsUpdate=!0,El(de,j,Z,ce,Xt,Dt),Xt.side=Ee,Xt.needsUpdate=!0,Nt=!0}}Nt===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}v.setRenderTarget(Et),v.setClearColor(K,H),It!==void 0&&(Z.viewport=It),v.toneMapping=Tt}function rs(w,k,j){const Z=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ht=w.length;G<ht;G++){const St=w[G],Et=St.object,Tt=St.geometry,It=Z===null?St.material:Z,Nt=St.group;Et.layers.test(j.layers)&&El(Et,k,j,Tt,It,Nt)}}function El(w,k,j,Z,G,ht){w.onBeforeRender(v,k,j,Z,G,ht),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,k,j,Z,w,ht),G.transparent===!0&&G.side===mn&&G.forceSinglePass===!1?(G.side=Ve,G.needsUpdate=!0,v.renderBufferDirect(j,k,Z,G,w,ht),G.side=ci,G.needsUpdate=!0,v.renderBufferDirect(j,k,Z,G,w,ht),G.side=mn):v.renderBufferDirect(j,k,Z,G,w,ht),w.onAfterRender(v,k,j,Z,G,ht)}function ss(w,k,j){k.isScene!==!0&&(k=te);const Z=Ct.get(w),G=d.state.lights,ht=d.state.shadowsArray,St=G.state.version,Et=At.getParameters(w,G.state,ht,k,j),Tt=At.getProgramCacheKey(Et);let It=Z.programs;Z.environment=w.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(w.isMeshStandardMaterial?X:E).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Lt),It=new Map,Z.programs=It);let Nt=It.get(Tt);if(Nt!==void 0){if(Z.currentProgram===Nt&&Z.lightsStateVersion===St)return wl(w,Et),Nt}else Et.uniforms=At.getUniforms(w),w.onBeforeCompile(Et,v),Nt=At.acquireProgram(Et,Tt),It.set(Tt,Nt),Z.uniforms=Et.uniforms;const Pt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=ft.uniform),wl(w,Et),Z.needsLights=Lu(w),Z.lightsStateVersion=St,Z.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.directionalShadowMap.value=G.state.directionalShadowMap,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotShadowMap.value=G.state.spotShadowMap,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMap.value=G.state.pointShadowMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Nt,Z.uniformsList=null,Nt}function Tl(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Hs.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function wl(w,k){const j=Ct.get(w);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Pu(w,k,j,Z,G){k.isScene!==!0&&(k=te),C.resetTextureUnits();const ht=k.fog,St=Z.isMeshStandardMaterial?k.environment:null,Et=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yr,Tt=(Z.isMeshStandardMaterial?X:E).get(Z.envMap||St),It=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Nt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Pt=!!j.morphAttributes.position,Wt=!!j.morphAttributes.normal,jt=!!j.morphAttributes.color;let de=ai;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=v.toneMapping);const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xt=ce!==void 0?ce.length:0,Dt=Ct.get(Z),Ee=d.state.lights;if(et===!0&&(ct===!0||w!==y)){const Le=w===y&&Z.id===x;ft.setState(Z,w,Le)}let Kt=!1;Z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ee.state.version||Dt.outputColorSpace!==Et||G.isBatchedMesh&&Dt.batching===!1||!G.isBatchedMesh&&Dt.batching===!0||G.isBatchedMesh&&Dt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Dt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Dt.instancing===!1||!G.isInstancedMesh&&Dt.instancing===!0||G.isSkinnedMesh&&Dt.skinning===!1||!G.isSkinnedMesh&&Dt.skinning===!0||G.isInstancedMesh&&Dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Dt.instancingMorph===!1&&G.morphTexture!==null||Dt.envMap!==Tt||Z.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ft.numPlanes||Dt.numIntersection!==ft.numIntersection)||Dt.vertexAlphas!==It||Dt.vertexTangents!==Nt||Dt.morphTargets!==Pt||Dt.morphNormals!==Wt||Dt.morphColors!==jt||Dt.toneMapping!==de||Dt.morphTargetsCount!==Xt)&&(Kt=!0):(Kt=!0,Dt.__version=Z.version);let un=Dt.currentProgram;Kt===!0&&(un=ss(Z,k,G));let Bi=!1,We=!1,Ar=!1;const se=un.getUniforms(),tn=Dt.uniforms;if(Rt.useProgram(un.program)&&(Bi=!0,We=!0,Ar=!0),Z.id!==x&&(x=Z.id,We=!0),Bi||y!==w){Rt.buffers.depth.getReversed()?(ut.copy(w.projectionMatrix),Ap(ut),Rp(ut),se.setValue(U,"projectionMatrix",ut)):se.setValue(U,"projectionMatrix",w.projectionMatrix),se.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ne=se.map.cameraPosition;Ne!==void 0&&Ne.setValue(U,Ut.setFromMatrixPosition(w.matrixWorld)),Bt.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&se.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,We=!0,Ar=!0)}if(G.isSkinnedMesh){se.setOptional(U,G,"bindMatrix"),se.setOptional(U,G,"bindMatrixInverse");const Le=G.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),se.setValue(U,"boneTexture",Le.boneTexture,C))}G.isBatchedMesh&&(se.setOptional(U,G,"batchingTexture"),se.setValue(U,"batchingTexture",G._matricesTexture,C),se.setOptional(U,G,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",G._indirectTexture,C),se.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",G._colorsTexture,C));const en=j.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&q.update(G,j,un),(We||Dt.receiveShadow!==G.receiveShadow)&&(Dt.receiveShadow=G.receiveShadow,se.setValue(U,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(tn.envMap.value=Tt,tn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),We&&(se.setValue(U,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Du(tn,Ar),ht&&Z.fog===!0&&_t.refreshFogUniforms(tn,ht),_t.refreshMaterialUniforms(tn,Z,O,W,d.state.transmissionRenderTarget[w.id]),Hs.upload(U,Tl(Dt),tn,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Hs.upload(U,Tl(Dt),tn,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&se.setValue(U,"center",G.center),se.setValue(U,"modelViewMatrix",G.modelViewMatrix),se.setValue(U,"normalMatrix",G.normalMatrix),se.setValue(U,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Le=Z.uniformsGroups;for(let Ne=0,ia=Le.length;Ne<ia;Ne++){const fi=Le[Ne];I.update(fi,un),I.bind(fi,un)}}return un}function Du(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Lu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,j){Ct.get(w.texture).__webglTexture=k,Ct.get(w.depthTexture).__webglTexture=j;const Z=Ct.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const j=Ct.get(w);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Iu=U.createFramebuffer();this.setRenderTarget=function(w,k=0,j=0){P=w,R=k,b=j;let Z=!0,G=null,ht=!1,St=!1;if(w){const Tt=Ct.get(w);if(Tt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(Tt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Tt.__hasExternalTextures)C.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Tt.__boundDepthTexture!==Pt){if(Pt!==null&&Ct.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(St=!0);const Nt=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?G=Nt[k][j]:G=Nt[k],ht=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?G=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?G=Nt[j]:G=Nt,L.copy(w.viewport),z.copy(w.scissor),V=w.scissorTest}else L.copy(mt).multiplyScalar(O).floor(),z.copy(it).multiplyScalar(O).floor(),V=xt;if(j!==0&&(G=Iu),Rt.bindFramebuffer(U.FRAMEBUFFER,G)&&Z&&Rt.drawBuffers(w,G),Rt.viewport(L),Rt.scissor(z),Rt.setScissorTest(V),ht){const Tt=Ct.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,j)}else if(St){const Tt=Ct.get(w.texture),It=k;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,j,It)}else if(w!==null&&j!==0){const Tt=Ct.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tt.__webglTexture,j)}x=-1},this.readRenderTargetPixels=function(w,k,j,Z,G,ht,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){Rt.bindFramebuffer(U.FRAMEBUFFER,Et);try{const Tt=w.texture,It=Tt.format,Nt=Tt.type;if(!Bt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Z&&j>=0&&j<=w.height-G&&U.readPixels(k,j,Z,G,lt.convert(It),lt.convert(Nt),ht)}finally{const Tt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,k,j,Z,G,ht,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){const Tt=w.texture,It=Tt.format,Nt=Tt.type;if(!Bt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Z&&j>=0&&j<=w.height-G){Rt.bindFramebuffer(U.FRAMEBUFFER,Et);const Pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(k,j,Z,G,lt.convert(It),lt.convert(Nt),0);const Wt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Wt);const jt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bp(U,jt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.deleteBuffer(Pt),U.deleteSync(jt),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,j=0){w.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-j),G=Math.floor(w.image.width*Z),ht=Math.floor(w.image.height*Z),St=k!==null?k.x:0,Et=k!==null?k.y:0;C.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,St,Et,G,ht),Rt.unbindTexture()};const Uu=U.createFramebuffer(),Nu=U.createFramebuffer();this.copyTextureToTexture=function(w,k,j=null,Z=null,G=0,ht=null){w.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],k=arguments[2],ht=arguments[3]||0,j=null),ht===null&&(G!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=G,G=0):ht=0);let St,Et,Tt,It,Nt,Pt,Wt,jt,de;const ce=w.isCompressedTexture?w.mipmaps[ht]:w.image;if(j!==null)St=j.max.x-j.min.x,Et=j.max.y-j.min.y,Tt=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,Nt=j.min.y,Pt=j.isBox3?j.min.z:0;else{const en=Math.pow(2,-G);St=Math.floor(ce.width*en),Et=Math.floor(ce.height*en),w.isDataArrayTexture?Tt=ce.depth:w.isData3DTexture?Tt=Math.floor(ce.depth*en):Tt=1,It=0,Nt=0,Pt=0}Z!==null?(Wt=Z.x,jt=Z.y,de=Z.z):(Wt=0,jt=0,de=0);const Xt=lt.convert(k.format),Dt=lt.convert(k.type);let Ee;k.isData3DTexture?(C.setTexture3D(k,0),Ee=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Ee=U.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Ee=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Kt=U.getParameter(U.UNPACK_ROW_LENGTH),un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bi=U.getParameter(U.UNPACK_SKIP_PIXELS),We=U.getParameter(U.UNPACK_SKIP_ROWS),Ar=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pt);const se=w.isDataArrayTexture||w.isData3DTexture,tn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const en=Ct.get(w),Le=Ct.get(k),Ne=Ct.get(en.__renderTarget),ia=Ct.get(Le.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let fi=0;fi<Tt;fi++)se&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,G,Pt+fi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(k).__webglTexture,ht,de+fi)),U.blitFramebuffer(It,Nt,St,Et,Wt,jt,St,Et,U.DEPTH_BUFFER_BIT,U.NEAREST);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Ct.has(w)){const en=Ct.get(w),Le=Ct.get(k);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,Uu),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Nu);for(let Ne=0;Ne<Tt;Ne++)se?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,G,Pt+Ne):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,G),tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.__webglTexture,ht,de+Ne):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Le.__webglTexture,ht),G!==0?U.blitFramebuffer(It,Nt,St,Et,Wt,jt,St,Et,U.COLOR_BUFFER_BIT,U.NEAREST):tn?U.copyTexSubImage3D(Ee,ht,Wt,jt,de+Ne,It,Nt,St,Et):U.copyTexSubImage2D(Ee,ht,Wt,jt,It,Nt,St,Et);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ee,ht,Wt,jt,de,St,Et,Tt,Xt,Dt,ce.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ht,Wt,jt,de,St,Et,Tt,Xt,ce.data):U.texSubImage3D(Ee,ht,Wt,jt,de,St,Et,Tt,Xt,Dt,ce):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ht,Wt,jt,St,Et,Xt,Dt,ce.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ht,Wt,jt,ce.width,ce.height,Xt,ce.data):U.texSubImage2D(U.TEXTURE_2D,ht,Wt,jt,St,Et,Xt,Dt,ce);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bi),U.pixelStorei(U.UNPACK_SKIP_ROWS,We),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ar),ht===0&&k.generateMipmaps&&U.generateMipmap(Ee),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,j=null,Z=null,G=0){return w.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],k=arguments[3],G=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,j,Z,G)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,Rt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Y0{constructor(t,e=" .:-=+*#%@",n={}){const i=n.resolution||.15,s=n.scale||1,a=n.color||!1,o=n.alpha||!1,l=n.block||!1,c=n.invert||!1,h=n.strResolution||"low";let u,f;const p=document.createElement("div");p.style.cursor="default";const g=document.createElement("table");p.appendChild(g);let _,m,d;this.setSize=function(K,H){u=K,f=H,t.setSize(K,H),M()},this.render=function(K,H){t.render(K,H),V(g)},this.domElement=p;function M(){_=Math.floor(u*i),m=Math.floor(f*i),b.width=_,b.height=m,d=t.domElement,d.style.backgroundColor&&(g.rows[0].cells[0].style.backgroundColor=d.style.backgroundColor,g.rows[0].cells[0].style.color=d.style.color),g.cellSpacing=0,g.cellPadding=0;const K=g.style;K.whiteSpace="pre",K.margin="0px",K.padding="0px",K.letterSpacing=z+"px",K.fontFamily=A,K.fontSize=y+"px",K.lineHeight=L+"px",K.textAlign="left",K.textDecoration="none"}const S=" .,:;i1tfLCG08@".split(""),v=" CGO08@".split(""),A="courier new, monospace",R=t.domElement,b=document.createElement("canvas");if(!b.getContext)return;const P=b.getContext("2d");if(!P.getImageData)return;let x=a?v:S;e&&(x=e);const y=2/i*s,L=2/i*s;let z=0;if(h=="low")switch(s){case 1:z=-1;break;case 2:case 3:z=-2.1;break;case 4:z=-3.1;break;case 5:z=-4.15;break}if(h=="medium")switch(s){case 1:z=0;break;case 2:z=-1;break;case 3:z=-1.04;break;case 4:case 5:z=-2.1;break}if(h=="high")switch(s){case 1:case 2:z=0;break;case 3:case 4:case 5:z=-1;break}function V(K){P.clearRect(0,0,_,m),P.drawImage(R,0,0,_,m);const H=P.getImageData(0,0,_,m).data;let F="";for(let W=0;W<m;W+=2){for(let O=0;O<_;O++){const ot=(W*_+O)*4,N=H[ot],mt=H[ot+1],it=H[ot+2],xt=H[ot+3];let Y,et;et=(.3*N+.59*mt+.11*it)/255,xt==0&&(et=1),Y=Math.floor((1-et)*(x.length-1)),c&&(Y=x.length-Y-1);let ct=x[Y];(ct===void 0||ct==" ")&&(ct="&nbsp;"),a?F+="<span style='color:rgb("+N+","+mt+","+it+");"+(l?"background-color:rgb("+N+","+mt+","+it+");":"")+(o?"opacity:"+xt/255+";":"")+"'>"+ct+"</span>":F+=ct}F+="<br/>"}K.innerHTML=`<tr><td style="display:block;width:${u}px;height:${f}px;overflow:hidden">${F}</td></tr>`}}}class $0{constructor(t={}){this.webGLRendererParameters={canvas:null,canvasContainer:null,antialias:!1,alpha:!0},this.rendererColor={color:16777215,alpha:0},this.stageSize={width:0,height:0,widthRatio:0,heightRatio:0,aspect:{xy:0,yx:0}},this.cameraParam={near:.01,far:1e4},this.cameraBasePosition={x:0,y:0,z:0},this.cameraPosition={x:0,y:0,z:0},this.devicePixelRatio=Math.min(window.devicePixelRatio,1.5),this.renderer=null,this.scene=null,this.camera=null,this.effect=null,this.cameraAspect=null,this.cameraFov=45,this.fitFovToViewport=!0,Object.assign(this,t)}init(){this.$canvas?this.webGLRendererParameters.canvas=this.$canvas:this.webGLRendererParameters.canvas=document.createElement("canvas"),this.renderer=new q0(this.webGLRendererParameters),this.setScene(),this.setStageSize(),this.setCamera(),this.initRenderer()}destroy(){this.camera&&this.camera.clearViewOffset(),this.renderer&&this.renderer.dispose(),this.camera=null,this.renderer=null,this.scene=null,this.effect=null}setScene(){this.scene=new xc,this.effectScene=new xc}initRenderer(){this.renderer.setClearColor(this.rendererColor.color,this.rendererColor.alpha),this.setRenderer(),this.setEffect()}hideRenderer(){this.renderer.setSize(0,0),this.renderer.setPixelRatio(.1)}setRenderer(){this.renderer&&(this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.renderer.setPixelRatio(this.devicePixelRatio))}setEffect(){this.effect=new Y0(this.renderer," .:-+*=%@#1234567890",{invert:!0}),this.effect.setSize(this.stageSize.width,this.stageSize.height),this.effect.domElement.style.position="absolute",this.effect.domElement.style.top="0",this.effect.domElement.style.left="0",this.effect.domElement.style.zIndex="1",this.effect.domElement.style.width="100%",this.effect.domElement.style.height="100vh",this.effect.domElement.style.color="#2e2521",this.effect.domElement.style.backgroundColor="#f0ece6",this.$canvasContainer&&(this.$homeFv=document.querySelector('[data-gl-item="home-img-plane"]'),this.$homeFv.appendChild(this.effect.domElement))}setStageSize(){if(this.$canvasContainer){const t=this.$canvasContainer.getBoundingClientRect();this.stageSize.width=t.width,this.stageSize.height=t.height}else this.stageSize.width=document.body.clientWidth,this.stageSize.height=window.innerHeight;this.stageSize.widthRatio=1/this.stageSize.width,this.stageSize.heightRatio=1/this.stageSize.height,this.stageSize.aspect.xy=this.stageSize.width/this.stageSize.height,this.stageSize.aspect.yx=this.stageSize.height/this.stageSize.width}setCamera(){this.camera=new an(0,0,this.cameraParam.near,this.cameraParam.far),this.camera.aspect=this.cameraAspect?this.cameraAspect:this.stageSize.aspect.xy||document.body.clientWidth/window.innerHeight,this.camera.fov=this.cameraFov,this.cameraBasePosition.x=this.cameraPosition.x,this.cameraBasePosition.y=this.cameraPosition.y,this.fitFovToViewport?this.cameraBasePosition.z=Vu(this.stageSize.height,this.camera.fov):this.cameraBasePosition.z=this.cameraPosition.z,this.camera.updateProjectionMatrix(),this.renderer&&this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.effect&&this.effect.setSize(this.stageSize.width,this.stageSize.height),this.camera.position.x=this.cameraBasePosition.x,this.camera.position.y=this.cameraBasePosition.y,this.camera.position.z=this.cameraBasePosition.z}render(){this.renderer&&(this.effect.render(this.effectScene,this.camera),this.renderer.render(this.scene,this.camera))}onResize(){this.setStageSize(),this.setCamera(),this.setRenderer()}onUpdate(){this.render()}}const Cu=`const float PI = 3.1415926535897932384626433832795;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main () {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,j0=`precision highp float;

uniform vec2 uMeshSize;
uniform vec2 uTextureSize;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 resolutionRatio = vec2(
    min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),
    min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)
  );

  uv -= 0.5;
  uv *= resolutionRatio;
  uv += 0.5;

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}
`;class K0{constructor(t={}){this.geometryParam={width:1,height:1,widthSegments:1,heightSegments:1},this.materialParam={useWireframe:!1},this.geometry=null,this.material=null,this.mesh=null,this.vs=Cu,this.fs=j0,this.isInView=!1,this.windowWidth=0,this.windowHeight=0,this.windowWidthHalf=0,this.windowHeightHalf=0,this.meshWidthHalf=0,this.meshHeightHalf=0,Object.assign(this,t)}init(){this.setWindowSize(),this.setResolutions(),this.setTexture(),this.setUniforms(),this.setMesh(),this.setMeshScale(),this.setMeshPosition()}destroy(){this.webgl.stage.scene.remove(this.mesh),this.material.dispose(),this.material.uniforms.uTexture.value.dispose(),this.uniforms.uTexture.value.dispose(),this.geometry.dispose(),this.mesh=null}setWindowSize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowWidthHalf=this.windowWidth*.5,this.windowHeightHalf=this.windowHeight*.5}setUniforms(){this.uniforms={uTexture:{value:this.videoTexture},uTextureSize:{value:{x:this.videoWidth,y:this.videoHeight}},uMeshSize:{value:{x:this.targetWidth,y:this.targetHeight}}}}setMesh(){this.geometry=new wr(this.geometryParam.width,this.geometryParam.height,this.geometryParam.widthSegments,this.geometryParam.heightSegments),this.material=new Eu({vertexShader:this.vs,fragmentShader:this.fs,wireframe:this.materialParam.useWireframe,transparent:!0,uniforms:this.uniforms,side:mn}),this.mesh=new xn(this.geometry,this.material),this.webgl.stage.effectScene.add(this.mesh)}setResolutions(){this.targetVideo=this.$target.querySelector("video"),this.targetRect=this.$target.getBoundingClientRect(),this.targetWidth=this.targetRect.width,this.targetHeight=this.targetRect.height,this.videoWidth=this.targetVideo.videoWidth,this.videoHeight=this.targetVideo.videoHeight,this.targetVideoPath=this.targetVideo.src,this.targetOffset=jh(this.$target)}setMeshScale(){this.mesh.scale.x=this.targetWidth,this.mesh.scale.y=this.targetHeight,this.uniforms.uMeshSize.value.x=this.mesh.scale.x,this.uniforms.uMeshSize.value.y=this.mesh.scale.y,this.meshWidthHalf=this.mesh.scale.x*.5,this.meshHeightHalf=this.mesh.scale.y*.5}setMeshPosition(){this.mesh&&(this.mesh.position.x=-this.windowWidthHalf+this.meshWidthHalf+this.targetOffset.left,this.mesh.position.y=this.windowHeightHalf-this.meshHeightHalf-this.targetOffset.top)}setTexture(){this.videoTexture=new nm(this.targetVideo)}onResize(){this.setWindowSize(),this.setResolutions(),this.setMeshScale(),this.setMeshPosition()}onUpdate(){this.setMeshPosition()}inViewAnimation(){Te.fromTo(this.uniforms.uRipplePos,{value:1.5},{value:1,duration:1,delay:gn.isStartup?.5:0,ease:"expo.out"}),Te.fromTo(this.uniforms.uRippleStrength,{value:5},{value:0,duration:1,delay:gn.isStartup?.5:0,ease:"none"})}}const Z0=`precision highp float;

uniform vec2 uMeshSize;
uniform vec2 uTextureSize;
uniform sampler2D uTexture;
uniform float uMosaic;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 resolutionRatio = vec2(
    min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),
    min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)
  );

  uv -= 0.5;
  uv *= resolutionRatio;
  uv += 0.5;

  uv.x = floor(uv.x * uMeshSize.x / uMosaic) / (uMeshSize.x / uMosaic) + (uMosaic / 2.0) / uMeshSize.x;
  uv.y = floor(uv.y * uMeshSize.y / uMosaic) / (uMeshSize.y / uMosaic) + (uMosaic / 2.0) / uMeshSize.y;

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}
`;class J0{constructor(t={}){this.geometryParam={width:1,height:1,widthSegments:1,heightSegments:1},this.materialParam={useWireframe:!1},this.geometry=null,this.material=null,this.mesh=null,this.vs=Cu,this.fs=Z0,this.isInView=!1,this.windowWidth=0,this.windowHeight=0,this.windowWidthHalf=0,this.windowHeightHalf=0,this.meshWidthHalf=0,this.meshHeightHalf=0,Object.assign(this,t)}init(){this.setWindowSize(),this.setResolutions(),this.setTexture(),this.setUniforms(),this.setMesh(),this.setMeshScale(),this.setMeshPosition(),this.setObserver()}destroy(){this.webgl.stage.scene.remove(this.mesh),this.material.dispose(),this.material.uniforms.uTexture.value.dispose(),this.uniforms.uTexture.value.dispose(),this.geometry.dispose(),this.mesh=null}setWindowSize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowWidthHalf=this.windowWidth*.5,this.windowHeightHalf=this.windowHeight*.5}setUniforms(){this.uniforms={uTexture:{value:null},uTextureSize:{value:{x:this.targetWidth,y:this.targetHeight}},uMeshSize:{value:{x:this.targetWidth,y:this.targetHeight}},uMosaic:{value:10}}}setMesh(){this.geometry=new wr(this.geometryParam.width,this.geometryParam.height,this.geometryParam.widthSegments,this.geometryParam.heightSegments),this.material=new Eu({vertexShader:this.vs,fragmentShader:this.fs,wireframe:this.materialParam.useWireframe,transparent:!0,uniforms:this.uniforms,side:mn}),this.mesh=new xn(this.geometry,this.material),this.webgl.stage.scene.add(this.mesh)}setResolutions(){this.targetImg=this.$target.querySelector("img"),this.targetRect=this.$target.getBoundingClientRect(),this.targetWidth=this.targetRect.width,this.targetHeight=this.targetRect.height,this.targetImgPath=this.targetImg.src,this.targetOffset=jh(this.$target),this.$target.style.opacity=0}setMeshScale(){this.mesh.scale.x=this.targetWidth,this.mesh.scale.y=this.targetHeight,this.uniforms.uMeshSize.value.x=this.mesh.scale.x,this.uniforms.uMeshSize.value.y=this.mesh.scale.y,this.meshWidthHalf=this.mesh.scale.x*.5,this.meshHeightHalf=this.mesh.scale.y*.5}setMeshPosition(){this.mesh&&(this.mesh.position.x=-this.windowWidthHalf+this.meshWidthHalf+this.targetOffset.left,this.mesh.position.y=this.windowHeightHalf-this.meshHeightHalf-this.targetOffset.top+gn.smoothScroll.lenis.animatedScroll)}setTexture(){new lm().load(this.targetImgPath,e=>{this.uniforms.uTexture.value=e})}setObserver(){gn.iObserver.add(this.$target,()=>{this.inViewAnimation()})}onResize(){this.setWindowSize(),this.setResolutions(),this.setMeshScale(),this.setMeshPosition()}onUpdate(){this.setMeshPosition()}inViewAnimation(){Te.to(this.uniforms.uMosaic,{value:1,duration:1,delay:.1,ease:"cubic.out"})}}class Q0{constructor(t={}){this.meshesItems=[],this.imgMeshesItems=[],Object.assign(this,t)}init({$contentRoot:t}){t&&(this.$contentRoot=t),this.getSelector(),this.setMeshes()}destroy(){this.clearMesh()}getSelector(){this.$targets=this.$contentRoot.querySelectorAll('[data-gl-item="home-img-plane"]'),this.$imgTargets=this.$contentRoot.querySelectorAll('[data-gl-item="home-img"]')}setMeshes(){const t=[],e=[];this.meshesItems=[],this.imgMeshesItems=[],this.$targets.forEach((n,i)=>{t[i]=new K0({webgl:this.webgl,$target:n,index:i})}),this.$imgTargets.forEach((n,i)=>{e[i]=new J0({webgl:this.webgl,$target:n,index:i})}),this.meshesItems.push(t),this.meshesItems.forEach(n=>{n.forEach(i=>{i.init()})}),this.imgMeshesItems.push(e),this.imgMeshesItems.forEach(n=>{n.forEach(i=>{i.init()})})}clearMesh(){this.meshesItems.forEach(t=>{t.forEach(e=>{e.destroy(),e=null})}),this.imgMeshesItems.forEach(t=>{t.forEach(e=>{e.destroy(),e=null})}),this.meshesItems=[],this.imgMeshesItems=[]}addGUI(){}onResize(){this.meshesItems.forEach(t=>{t.forEach(e=>{e.onResize()})}),this.imgMeshesItems.forEach(t=>{t.forEach(e=>{e.onResize()})})}onUpdate(){this.meshesItems.forEach(t=>{t.forEach(e=>{e.onUpdate()})}),this.imgMeshesItems.forEach(t=>{t.forEach(e=>{e.onUpdate()})})}}class tx{constructor(t={}){Object.assign(this,t)}init(){this.setStage(),this.meshManager=new Q0({webgl:this}),this.addEventListeners(),this.raf()}destroy(){this.meshManager.destroy(),this.caf(),this.stage.destroy()}setStage(){this.stage=new $0({$canvasContainer:document.querySelector('[data-webgl-container="home"]'),$canvas:document.querySelector('[data-webgl="home"]')}),this.stage&&this.stage.init()}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}raf(){this.onUpdate(),this.requestId=requestAnimationFrame(this.raf.bind(this))}caf(){cancelAnimationFrame(this.requestId)}enter({$contentRoot:t}){this.meshManager.init({$contentRoot:t})}onResize(){this.stage&&this.stage.onResize(),this.meshManager.onResize()}onUpdate(){this.meshManager.onUpdate(),this.stage&&this.stage.onUpdate()}}class ex{constructor(){wt(this,"onResize",()=>{this.getWindowSize(),this.setWindowSize()});this.$target=null,this.$hours=null,this.$minutes=null,this.$temperature=null,this.$width=null,this.$height=null,this.$os=null}init(){this.getSelector(),this.getTime(),this.getTemperature(),this.getWindowSize(),this.getOS(),this.setTime(),this.setTemperature(),this.setWindowSize(),this.setOS(),this.addEventListeners(),this.updateTime()}getSelector(){this.$target=document.querySelector('[data-header-info="target"]'),this.$hours=this.$target.querySelector('[data-header-info="hours"]'),this.$minutes=this.$target.querySelector('[data-header-info="minutes"]'),this.$temperature=this.$target.querySelector('[data-header-info="temperature"]'),this.$width=this.$target.querySelector('[data-header-info="width"]'),this.$height=this.$target.querySelector('[data-header-info="height"]'),this.$os=this.$target.querySelector('[data-header-info="os"]')}getTime(){this.date=new Date,this.hours=Yl(this.date.getHours()),this.minutes=Yl(this.date.getMinutes())}getTemperature(){fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json").then(t=>t.json()).then(t=>{const e=t[0].timeSeries[2].areas[0].temps[1];e?this.$temperature.textContent=`${e}℃`:this.$temperature.textContent="-"}).catch(t=>{this.$temperature.textContent="-",console.log(t)})}getWindowSize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}getOS(){this.os=gn.detection.ua}setTime(){const t=`${this.$hours}:${this.$minutes}`;this.$target.setAttribute("datetime",t),this.$hours.textContent=this.hours,this.$minutes.textContent=this.minutes}setTemperature(t){t?this.$temperature.textContent=`${t}℃`:this.$temperature.textContent="-℃"}setWindowSize(){this.$width.textContent=this.windowWidth,this.$height.textContent=this.windowHeight}setOS(){this.os.includes("Mac")?this.$os.textContent="macOS":this.$os.textContent="Windows"}addEventListeners(){window.addEventListener("resize",this.onResize)}updateTime(){this.intervalId=setInterval(()=>{this.getTime(),this.setTime()},1e3)}}var Xo={},nx={get exports(){return Xo},set exports(r){Xo=r}};(function(r,t){(function(e,n){r.exports=n()})(typeof self!="undefined"?self:Dd,()=>(()=>{var e={75:function(a){(function(){var o,l,c,h,u,f;typeof performance!="undefined"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process!="undefined"&&process!==null&&process.hrtime?(a.exports=function(){return(o()-u)/1e6},l=process.hrtime,h=(o=function(){var p;return 1e9*(p=l())[0]+p[1]})(),f=1e9*process.uptime(),u=h-f):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,o,l)=>{for(var c=l(75),h=typeof window=="undefined"?l.g:window,u=["moz","webkit"],f="AnimationFrame",p=h["request"+f],g=h["cancel"+f]||h["cancelRequest"+f],_=0;!p&&_<u.length;_++)p=h[u[_]+"Request"+f],g=h[u[_]+"Cancel"+f]||h[u[_]+"CancelRequest"+f];if(!p||!g){var m=0,d=0,M=[];p=function(S){if(M.length===0){var v=c(),A=Math.max(0,16.666666666666668-(v-m));m=A+v,setTimeout(function(){var R=M.slice(0);M.length=0;for(var b=0;b<R.length;b++)if(!R[b].cancelled)try{R[b].callback(m)}catch(P){setTimeout(function(){throw P},0)}},Math.round(A))}return M.push({handle:++d,callback:S,cancelled:!1}),d},g=function(S){for(var v=0;v<M.length;v++)M[v].handle===S&&(M[v].cancelled=!0)}}a.exports=function(S){return p.call(h,S)},a.exports.cancel=function(){g.apply(h,arguments)},a.exports.polyfill=function(S){S||(S=h),S.requestAnimationFrame=p,S.cancelAnimationFrame=g}}},n={};function i(a){var o=n[a];if(o!==void 0)return o.exports;var l=n[a]={exports:{}};return e[a].call(l.exports,l,l.exports,i),l.exports}i.n=a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return i.d(o,{a:o}),o},i.d=(a,o)=>{for(var l in o)i.o(o,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:o[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(a){if(typeof window=="object")return window}}(),i.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o);var s={};return(()=>{i.d(s,{default:()=>K});var a=i(4087),o=i.n(a);const l=function(H){return new RegExp(/<[a-z][\s\S]*>/i).test(H)},c=function(H,F){return Math.floor(Math.random()*(F-H+1))+H};var h="TYPE_CHARACTER",u="REMOVE_CHARACTER",f="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",M="CHANGE_DELAY",S="CHANGE_CURSOR",v="PASTE_STRING",A="HTML_TAG";function R(H){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},R(H)}function b(H,F){var W=Object.keys(H);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(H);F&&(O=O.filter(function(ot){return Object.getOwnPropertyDescriptor(H,ot).enumerable})),W.push.apply(W,O)}return W}function P(H){for(var F=1;F<arguments.length;F++){var W=arguments[F]!=null?arguments[F]:{};F%2?b(Object(W),!0).forEach(function(O){z(H,O,W[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(W)):b(Object(W)).forEach(function(O){Object.defineProperty(H,O,Object.getOwnPropertyDescriptor(W,O))})}return H}function x(H){return function(F){if(Array.isArray(F))return y(F)}(H)||function(F){if(typeof Symbol!="undefined"&&F[Symbol.iterator]!=null||F["@@iterator"]!=null)return Array.from(F)}(H)||function(F,W){if(F){if(typeof F=="string")return y(F,W);var O=Object.prototype.toString.call(F).slice(8,-1);return O==="Object"&&F.constructor&&(O=F.constructor.name),O==="Map"||O==="Set"?Array.from(F):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?y(F,W):void 0}}(H)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function y(H,F){(F==null||F>H.length)&&(F=H.length);for(var W=0,O=new Array(F);W<F;W++)O[W]=H[W];return O}function L(H,F){for(var W=0;W<F.length;W++){var O=F[W];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(H,V(O.key),O)}}function z(H,F,W){return(F=V(F))in H?Object.defineProperty(H,F,{value:W,enumerable:!0,configurable:!0,writable:!0}):H[F]=W,H}function V(H){var F=function(W,O){if(R(W)!=="object"||W===null)return W;var ot=W[Symbol.toPrimitive];if(ot!==void 0){var N=ot.call(W,"string");if(R(N)!=="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(W)}(H);return R(F)==="symbol"?F:String(F)}const K=function(){function H(O,ot){var N=this;if(function(it,xt){if(!(it instanceof xt))throw new TypeError("Cannot call a class as a function")}(this,H),z(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),z(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),z(this,"setupWrapperElement",function(){N.state.elements.container&&(N.state.elements.wrapper.className=N.options.wrapperClassName,N.state.elements.cursor.className=N.options.cursorClassName,N.state.elements.cursor.innerHTML=N.options.cursor,N.state.elements.container.innerHTML="",N.state.elements.container.appendChild(N.state.elements.wrapper),N.state.elements.container.appendChild(N.state.elements.cursor))}),z(this,"start",function(){return N.state.eventLoopPaused=!1,N.runEventLoop(),N}),z(this,"pause",function(){return N.state.eventLoopPaused=!0,N}),z(this,"stop",function(){return N.state.eventLoop&&((0,a.cancel)(N.state.eventLoop),N.state.eventLoop=null),N}),z(this,"pauseFor",function(it){return N.addEventToQueue(g,{ms:it}),N}),z(this,"typeOutAllStrings",function(){return typeof N.options.strings=="string"?(N.typeString(N.options.strings).pauseFor(N.options.pauseFor),N):(N.options.strings.forEach(function(it){N.typeString(it).pauseFor(N.options.pauseFor).deleteAll(N.options.deleteSpeed)}),N)}),z(this,"typeString",function(it){var xt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(it))return N.typeOutHTMLString(it,xt);if(it){var Y=(N.options||{}).stringSplitter,et=typeof Y=="function"?Y(it):it.split("");N.typeCharacters(et,xt)}return N}),z(this,"pasteString",function(it){var xt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(it)?N.typeOutHTMLString(it,xt,!0):(it&&N.addEventToQueue(v,{character:it,node:xt}),N)}),z(this,"typeOutHTMLString",function(it){var xt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Y=arguments.length>2?arguments[2]:void 0,et=function(Ut){var Mt=document.createElement("div");return Mt.innerHTML=Ut,Mt.childNodes}(it);if(et.length>0)for(var ct=0;ct<et.length;ct++){var ut=et[ct],bt=ut.innerHTML;ut&&ut.nodeType!==3?(ut.innerHTML="",N.addEventToQueue(m,{node:ut,parentNode:xt}),Y?N.pasteString(bt,ut):N.typeString(bt,ut)):ut.textContent&&(Y?N.pasteString(ut.textContent,xt):N.typeString(ut.textContent,xt))}return N}),z(this,"deleteAll",function(){var it=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return N.addEventToQueue(f,{speed:it}),N}),z(this,"changeDeleteSpeed",function(it){if(!it)throw new Error("Must provide new delete speed");return N.addEventToQueue(d,{speed:it}),N}),z(this,"changeDelay",function(it){if(!it)throw new Error("Must provide new delay");return N.addEventToQueue(M,{delay:it}),N}),z(this,"changeCursor",function(it){if(!it)throw new Error("Must provide new cursor");return N.addEventToQueue(S,{cursor:it}),N}),z(this,"deleteChars",function(it){if(!it)throw new Error("Must provide amount of characters to delete");for(var xt=0;xt<it;xt++)N.addEventToQueue(u);return N}),z(this,"callFunction",function(it,xt){if(!it||typeof it!="function")throw new Error("Callback must be a function");return N.addEventToQueue(_,{cb:it,thisArg:xt}),N}),z(this,"typeCharacters",function(it){var xt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it||!Array.isArray(it))throw new Error("Characters must be an array");return it.forEach(function(Y){N.addEventToQueue(h,{character:Y,node:xt})}),N}),z(this,"removeCharacters",function(it){if(!it||!Array.isArray(it))throw new Error("Characters must be an array");return it.forEach(function(){N.addEventToQueue(u)}),N}),z(this,"addEventToQueue",function(it,xt){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.addEventToStateProperty(it,xt,Y,"eventQueue")}),z(this,"addReverseCalledEvent",function(it,xt){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.options.loop?N.addEventToStateProperty(it,xt,Y,"reverseCalledEvents"):N}),z(this,"addEventToStateProperty",function(it,xt){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2],et=arguments.length>3?arguments[3]:void 0,ct={eventName:it,eventArgs:xt||{}};return N.state[et]=Y?[ct].concat(x(N.state[et])):[].concat(x(N.state[et]),[ct]),N}),z(this,"runEventLoop",function(){N.state.lastFrameTime||(N.state.lastFrameTime=Date.now());var it=Date.now(),xt=it-N.state.lastFrameTime;if(!N.state.eventQueue.length){if(!N.options.loop)return;N.state.eventQueue=x(N.state.calledEvents),N.state.calledEvents=[],N.options=P({},N.state.initialOptions)}if(N.state.eventLoop=o()(N.runEventLoop),!N.state.eventLoopPaused){if(N.state.pauseUntil){if(it<N.state.pauseUntil)return;N.state.pauseUntil=null}var Y,et=x(N.state.eventQueue),ct=et.shift();if(!(xt<=(Y=ct.eventName===p||ct.eventName===u?N.options.deleteSpeed==="natural"?c(40,80):N.options.deleteSpeed:N.options.delay==="natural"?c(120,160):N.options.delay))){var ut=ct.eventName,bt=ct.eventArgs;switch(N.logInDevMode({currentEvent:ct,state:N.state,delay:Y}),ut){case v:case h:var Ut=bt.character,Mt=bt.node,te=document.createTextNode(Ut),Yt=te;N.options.onCreateTextNode&&typeof N.options.onCreateTextNode=="function"&&(Yt=N.options.onCreateTextNode(Ut,te)),Yt&&(Mt?Mt.appendChild(Yt):N.state.elements.wrapper.appendChild(Yt)),N.state.visibleNodes=[].concat(x(N.state.visibleNodes),[{type:"TEXT_NODE",character:Ut,node:Yt}]);break;case u:et.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var Ht=ct.eventArgs.ms;N.state.pauseUntil=Date.now()+parseInt(Ht);break;case _:var U=ct.eventArgs,ye=U.cb,kt=U.thisArg;ye.call(kt,{elements:N.state.elements});break;case m:var Bt=ct.eventArgs,Rt=Bt.node,$t=Bt.parentNode;$t?$t.appendChild(Rt):N.state.elements.wrapper.appendChild(Rt),N.state.visibleNodes=[].concat(x(N.state.visibleNodes),[{type:A,node:Rt,parentNode:$t||N.state.elements.wrapper}]);break;case f:var Ct=N.state.visibleNodes,C=bt.speed,E=[];C&&E.push({eventName:d,eventArgs:{speed:C,temp:!0}});for(var X=0,rt=Ct.length;X<rt;X++)E.push({eventName:p,eventArgs:{removingCharacterNode:!1}});C&&E.push({eventName:d,eventArgs:{speed:N.options.deleteSpeed,temp:!0}}),et.unshift.apply(et,E);break;case p:var st=ct.eventArgs.removingCharacterNode;if(N.state.visibleNodes.length){var tt=N.state.visibleNodes.pop(),At=tt.type,_t=tt.node,yt=tt.character;N.options.onRemoveNode&&typeof N.options.onRemoveNode=="function"&&N.options.onRemoveNode({node:_t,character:yt}),_t&&_t.parentNode.removeChild(_t),At===A&&st&&et.unshift({eventName:p,eventArgs:{}})}break;case d:N.options.deleteSpeed=ct.eventArgs.speed;break;case M:N.options.delay=ct.eventArgs.delay;break;case S:N.options.cursor=ct.eventArgs.cursor,N.state.elements.cursor.innerHTML=ct.eventArgs.cursor}N.options.loop&&(ct.eventName===p||ct.eventArgs&&ct.eventArgs.temp||(N.state.calledEvents=[].concat(x(N.state.calledEvents),[ct]))),N.state.eventQueue=et,N.state.lastFrameTime=it}}}),O)if(typeof O=="string"){var mt=document.querySelector(O);if(!mt)throw new Error("Could not find container element");this.state.elements.container=mt}else this.state.elements.container=O;ot&&(this.options=P(P({},this.options),ot)),this.state.initialOptions=P({},this.options),this.init()}var F,W;return F=H,(W=[{key:"init",value:function(){var O,ot;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(f,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(ot=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(ot),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&L(F.prototype,W),Object.defineProperty(F,"prototype",{writable:!1}),H}()})(),s.default})())})(nx);const ix=Ld(Xo);class rx{constructor(){this.$target=null}init(){this.getSelector(),this.setTypeWriter()}getSelector(){this.$target=document.querySelector('[data-type-writer-animation="target"]'),this.$copyEnTexts=document.querySelectorAll('[data-type-writer-animation="copy-en-text"]')}setTypeWriter(){this.typewriter=new ix(this.$target,{loop:!0,delay:50}),Te.set(this.$copyEnTexts,{opacity:0}),this.typewriter.pauseFor(1e3).callFunction(()=>{Te.to(this.$copyEnTexts[4],{opacity:0,duration:.5,ease:"none"}),Te.to(this.$copyEnTexts[0],{opacity:1,duration:.5,ease:"none"})}).typeString("土に根をおろし、風とともに生きよう。種とともに冬を越え、鳥とともに春を歌おう。どんなに恐ろしい武器を持っても、たくさんの可哀想なロボットを操っても、土から離れては生きられないのよ。<br>— シータ 『天空の城ラピュタ』").pauseFor(1e3).deleteAll(50).pauseFor(1e3).callFunction(()=>{Te.to(this.$copyEnTexts[0],{opacity:0,duration:.5,ease:"none"}),Te.to(this.$copyEnTexts[1],{opacity:1,duration:.5,ease:"none"})}).typeString("自然は回転するが、人間は前進する。<br>— エドワード・ヤング 『夜の瞑想』").pauseFor(1e3).deleteAll(50).callFunction(()=>{Te.to(this.$copyEnTexts[1],{opacity:0,duration:.5,ease:"none"}),Te.to(this.$copyEnTexts[2],{opacity:1,duration:.5,ease:"none"})}).typeString("自然は急がない。それでもすべては成し遂げられる。<br>— 老子").pauseFor(1e3).deleteAll(50).callFunction(()=>{Te.to(this.$copyEnTexts[2],{opacity:0,duration:.5,ease:"none"}),Te.to(this.$copyEnTexts[3],{opacity:1,duration:.5,ease:"none"})}).typeString("自然は絶えずわれわれと語るが、その秘密を打ち明けはしない。われわれはつねに自然に働きかけ、しかも、それを支配するなんらの力もない。<br>— ゲーテ 『自然に関する断片』").pauseFor(1e3).deleteAll(50).callFunction(()=>{Te.to(this.$copyEnTexts[3],{opacity:0,duration:.5,ease:"none"}),Te.to(this.$copyEnTexts[4],{opacity:1,duration:.5,ease:"none"})}).typeString("大自然の秩序は宇宙の建築家の存在を立証する。<br>— カント 『断片』").start()}}class sx{constructor(){this.pageNames={home:'[data-page="home"]',concept:'[data-page="concept"]',collection:'[data-page="collection"]',notFound:'[data-page="not-found"]'}}init(){this.headerInfo=new ex,this.headerInfo.init(),this.shuffleHover=new Nd,this.shuffleHover.init(),this.typeWriterAnimation=new rx,this.typeWriterAnimation.init(),this.homeWebgl=new tx,this.homeWebgl.init(),this.homeWebgl.enter({$contentRoot:document.querySelector('[data-page="home"]')})}}const ax=new sx;window.APP=new Pd(ax);APP.init();
