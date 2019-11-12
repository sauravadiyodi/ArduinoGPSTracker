
/**
 * The code below uses open source software. Please visit the URL below for an overview of the licenses:
 * http://js.api.here.com/v3/3.1.6.0/HERE_NOTICE
 */

H.util.eval("function lq(a){var b=a.ownerDocument;b=b.documentElement||b.body.parentNode||b.body;try{var c=a.getBoundingClientRect()}catch(d){c={top:0,right:0,bottom:0,left:0,height:0,width:0}}return{x:c.left+(\"number\"===typeof window.pageXOffset?window.pageXOffset:b.scrollLeft),y:c.top+(\"number\"===typeof window.pageYOffset?window.pageYOffset:b.scrollTop)}}var mq=/Edge\\/\\d+/.test(navigator.appVersion),nq=/(A|a)ndroid/.test(navigator.appVersion),oq=Function(\"return this\")();function pq(a,b,c,d,e,f,g){pq.l.constructor.call(this,a);this.pointers=b;this.changedPointers=c;this.targetPointers=d;this.currentPointer=e;this.originalEvent=g;this.target=f}w(pq,Ec);u(\"H.mapevents.Event\",pq);function qq(a,b,c,d,e,f){if(isNaN(a))throw Error(\"x needs to be a number\");if(isNaN(b))throw Error(\"y needs to be a number\");if(isNaN(c))throw Error(\"pointer must have an id\");this.viewportX=a;this.viewportY=b;this.target=null;this.id=c;this.type=d;this.dragTarget=null;this.a=this.button=Lb(e)?e:-1;this.buttons=Lb(f)?f:0}u(\"H.mapevents.Pointer\",qq);\nfunction rq(a,b,c){if(isNaN(b))throw Error(\"x needs to be a number\");if(isNaN(c))throw Error(\"y needs to be a number\");a.viewportX=b;a.viewportY=c}qq.prototype.qm=function(){return this.a};qq.prototype.getLastChangedButton=qq.prototype.qm;function sq(a,b){a.a=b;a.buttons|=qq.prototype.b[+b]||0}function tq(a,b){a.a=b;a.buttons&=~(qq.prototype.b[+b]||0)}qq.prototype.b=[1,4,2];var uq={NONE:-1,LEFT:0,MIDDLE:1,RIGHT:2};qq.Button=uq;function vq(a){this.a=a instanceof Array?a.slice(0):[]}n=vq.prototype;n.clear=function(){this.a.splice(0,this.a.length)};n.length=function(){return this.a.length};n.indexOf=function(a){for(var b=this.a.length;b--;)if(this.a[b].id===a)return b;return-1};function wq(a,b){b=a.indexOf(b);return-1!==b?a.a[b]:null}n.remove=function(a){a=this.indexOf(a);return-1!==a?this.a.splice(a,1)[0]:null};function xq(a,b){for(var c=a.a.length,d=[];c--;)a.a[c].type!==b&&d.push(a.a[c]);a.a=d}\nfunction yq(a,b){for(var c=a.a.length;c--;)if(a.a[c].dragTarget===b)return!0;return!1}n.push=function(a){if(a instanceof qq)return this.a.push(a);throw Error(\"list needs a pointer\");};n.ab=function(){return this.a};n.clone=function(){return new vq(this.a)};function zq(a,b,c){c=c||{};if(!(a instanceof S))throw Error(\"events: map instance required\");if(!(b instanceof Array))throw Error(\"events: map array required\");Ac.call(this);this.Qg=c.Qg||300;this.fj=c.fj||50;this.Xk=c.Xk||50;this.Yk=c.Yk||500;this.Ch=c.Ch||900;this.Tj=c.Tj||50;this.map=a;this.s=this.map.Aa;this.i=this.s.element;this.D=b;this.a=new vq;this.b=new vq;this.g={};this.c=null;this.o=!0;this.W={};this.m={};this.j=null;this.ue=A(this.ue,this);this.C={pointerdown:this.Gl,pointermove:this.Hl,\npointerup:this.Il,pointercancel:this.Fl};Aq(this)}w(zq,Ac);function Aq(a,b){var c,d=a.D.length;for(c=0;c<d;c++){var e=a.D[c];var f=e.listener;\"function\"===typeof f&&(b?(e.target||a.i).removeEventListener(e.Ta,f):(e.target||a.i).addEventListener(e.Ta,f))}}function Bq(a,b,c){var d;if(\"function\"===typeof a.C[b]){\"pointermove\"!==b&&(a.o=!0);var e=0;for(d=a.b.length();e<d;e++){var f=a.b.a[e];a.i.contains(c.target)?Cq(a,f,a.lj.bind(a,c,b,f)):a.lj(c,b,f,null)}}a.b.clear()}n=zq.prototype;\nn.lj=function(a,b,c,d){Dq(c.id,this.W);this.C[b].call(this,c,d,a)};function Cq(a,b,c){if(a.c===b)c(b.target);else{var d=a.s;var e=b.viewportX;b=b.viewportY;if(0>e||0>b||e>=d.width||b>=d.height)c(z);else{var f=a.map;f.Qd(e,b,function(a){c(a||f)})}}}\nn.Il=function(a,b,c){a.target=b;Eq(this,a,c);Fq(this,b,\"pointerup\",c,a);\"mouse\"!==a.type&&Fq(this,b,\"pointerleave\",c,a);b=this.g[a.id];var d={x:a.viewportX,y:a.viewportY},e=c.timeStamp,f=a.target,g=this.j;b&&b.target===f&&b.Hg.bb(d)<this.Xk&&e-b.Ci<this.Yk?(Fq(this,f,\"tap\",c,a),g&&g.target===f&&e-g.Ci<this.Qg?g.Hg.bb({x:a.viewportX,y:a.viewportY})<this.fj&&(Fq(this,f,\"dbltap\",c,a),this.j=null):this.j={target:f,Hg:new H(a.viewportX,a.viewportY),Ci:c.timeStamp}):this.j=null;this.g={};Dq(a.id,this.m)};\nfunction Eq(a,b,c){b===a.c&&(Fq(a,b.dragTarget,\"dragend\",c,b),a.c=null,Dq(b.id,a.W));b.dragTarget=null}n.ue=function(a,b){var c=this;Fq(this,a.dragTarget,\"drag\",b,a);Dq(a.id,this.W);this.W[a.id]=setTimeout(function(){c.ue(a,b)},150)};function Dq(a,b){b[a]&&(clearTimeout(b[a]),delete b[a])}\nfunction Gq(a,b,c){var d=b.target,e=new H(b.viewportX,b.viewportY),f=b.id;Dq(f,a.m);a.m[f]=setTimeout(function(){d&&d===b.target&&e.bb({x:b.viewportX,y:b.viewportY})<a.Tj&&(Fq(a,d,\"longpress\",c,b),delete a.g[b.id])},a.Ch)}\nn.Hl=function(a,b,c){var d=a.dragTarget,e=a.id;var f=a.target;a.target=b;f!==b&&(Fq(this,f,\"pointerleave\",c,a),Fq(this,b,\"pointerenter\",c,a));d?this.c?this.ue(a,c):this.o?this.o=!1:(this.c=a,Fq(this,d,\"dragstart\",c,a),this.ue(a,c),delete this.g[e],this.o=!0):(!this.c||this.c&&this.c.dragTarget!==b&&this.c.dragTarget!==this.map)&&Fq(this,b,\"pointermove\",c,a)};\nn.Gl=function(a,b,c){var d=!(/^(?:mouse|pen)$/.test(a.type)&&0!==c.button);if(b){a.target=b;this.g[a.id]={Hg:new H(a.viewportX,a.viewportY),target:a.target,Ci:c.timeStamp};\"mouse\"!==a.type&&Fq(this,b,\"pointerenter\",c,a);var e=Fq(this,b,\"pointerdown\",c,a);!this.c&&d&&(b.draggable&&!yq(this.a,b)?a.dragTarget=b:!this.map.draggable||e.defaultPrevented||yq(this.a,this.map)||(a.dragTarget=this.map));Gq(this,a,c)}};\nn.Fl=function(a,b,c){a.target=null;b?(Fq(this,b,\"pointerleave\",c,a),Fq(this,b,\"pointercancel\",c,a)):Fq(this,this.map,\"pointercancel\",c,a);Eq(this,a,c);this.g={};Dq(a.id,this.m)};function Fq(a,b,c,d,e){if(b&&\"function\"===typeof b.dispatchEvent){var f=pq;var g=a.a.ab(),h=a.b.ab();a=a.a;var k,l=a.a.length,m=[];for(k=0;k<l;k++)a.a[k].target===b&&m.push(a.a[k]);f=new f(c,g,h,m,e,b,d);e.button=/^(?:longpress|(?:dbl)?tap|pointer(?:down|up))$/.test(c)?e.a:uq.NONE;b.dispatchEvent(f)}return f}\nn.u=function(){Aq(this,!0);this.a.clear();this.b.clear();var a=this.W,b;for(b in a)Dq(b,a);a=this.m;for(var c in a)Dq(c,a);this.c=this.g=this.j=this.map=this.b=this.a=this.D=this.P=null;Ac.prototype.u.call(this)};function Hq(a){this.f=A(this.f,this);zq.call(this,a,[{Ta:\"touchstart\",listener:this.f},{Ta:\"touchmove\",listener:this.f},{Ta:\"touchend\",listener:this.f},{Ta:\"touchcancel\",listener:this.f}]);this.G={touchstart:\"pointerdown\",touchmove:\"pointermove\",touchend:\"pointerup\",touchcancel:\"pointercancel\"};this.v=(a=(a=a.m)?a.J():null)?Array.prototype.slice.call(a.querySelectorAll(\"a\"),0):[]}w(Hq,zq);\nHq.prototype.f=function(a){var b=a.touches,c=this.a.length(),d;if(\"touchstart\"===a.type&&c>=b.length){c=this.a.clone();for(d=b.length;d--;)c.remove(b[d].identifier);for(d=c.length();d--;)this.a.remove(c.a[d].id);this.b=c;Bq(this,\"pointercancel\",a);this.b.clear()}if(this.G[a.type]){b=lq(this.s.element);c=a.type;d=a.changedTouches;var e=d.length,f;this.b.clear();for(f=0;f<e;f++){var g=d[f];var h=wq(this.a,g.identifier);var k=g.pageX-b.x;var l=g.pageY-b.y;if(h)if(\"touchmove\"===c){g=Math.abs(h.viewportX-\nk);var m=Math.abs(h.viewportY-l);if(1<g||1<m||1===g&&1===m)rq(h,k,l),this.b.push(h)}else\"touchend\"===c&&(this.a.remove(h.id),this.b.push(h),tq(h,uq.LEFT));else h=new qq(k,l,g.identifier,\"touch\",uq.LEFT,1),this.a.push(h),this.b.push(h)}Bq(this,this.G[a.type],a);-1===this.v.indexOf(a.target)&&a.preventDefault()}};Hq.prototype.u=function(){this.v=null;zq.prototype.u.call(this)};function Iq(a){var b=Jq(this);(window.PointerEvent||window.MSPointerEvent)&&b.push({Ta:\"MSHoldVisual\",listener:\"prevent\"});zq.call(this,a,b)}w(Iq,zq);function Jq(a){var b=!!window.PointerEvent,c,d,e=[];a.f=A(a.f,a);\"MSPointerDown MSPointerMove MSPointerUp MSPointerCancel MSPointerOut MSPointerOver\".split(\" \").forEach(function(f){c=f.toLowerCase().replace(/ms/g,\"\");d=b?c:f;e.push({Ta:d,listener:a.f,target:\"MSPointerUp\"===f||\"MSPointerMove\"===f?window:null})});return e}var Kq={2:\"touch\",3:\"pen\",4:\"mouse\"};\nIq.prototype.f=function(a){var b=window.PointerEvent?a.type:a.type.toLowerCase().replace(/ms/g,\"\"),c=lq(this.i),d=wq(this.a,a.pointerId),e=a.pageX-c.x;c=a.pageY-c.y;var f=Kq[a.pointerType]||a.pointerType;mq&&\"rtl\"===y.getComputedStyle(this.s.element).direction&&(e-=(y.devicePixelRatio-1)*this.s.width);if(!(d||b in{pointerup:1,pointerout:1,pointercancel:1}||\"touch\"===f&&\"pointerdown\"!==b)){d={x:e,y:c};var g=a.pointerType;\"number\"===typeof g&&(g=Kq[g]);d=new qq(d.x,d.y,a.pointerId,g,a.button,a.buttons);\nthis.a.push(d)}d&&(b in{pointerup:1,pointercancel:1}?(\"touch\"===f&&this.a.remove(d.id),tq(d,a.button)):\"pointerdown\"===b&&(\"touch\"===a.pointerType&&(xq(this.a,\"mouse\"),xq(this.a,\"pen\")),sq(d,a.button)),this.b.push(d),\"pointermove\"!==b?(rq(d,e,c),Bq(this,\"pointerout\"===b||\"pointerover\"===b?\"pointermove\":b,a)):d.viewportX===e&&d.viewportY===c||a.target===document.documentElement||(rq(d,e,c),Bq(this,b,a)));this.b.clear()};function Lq(a,b,c,d){Lq.l.constructor.call(this,\"contextmenu\");this.items=[];this.viewportX=a;this.viewportY=b;this.target=c;this.originalEvent=d}w(Lq,Ec);u(\"H.mapevents.ContextMenuEvent\",Lq);function Mq(a){this.oh=A(this.oh,this);this.qh=A(this.qh,this);this.ph=A(this.ph,this);this.v=!1;this.f=-1;this.G=0;Mq.l.constructor.call(this,a,[{Ta:\"contextmenu\",listener:this.oh},{target:a,Ta:\"longpress\",listener:this.qh},{target:a,Ta:\"dbltap\",listener:this.ph}])}w(Mq,zq);n=Mq.prototype;n.qh=function(a){var b=a.currentPointer;\"touch\"===b.type&&1===a.pointers.length&&Nq(this,b.viewportX,b.viewportY,a.originalEvent,a.target)};n.ph=function(a){\"touch\"===a.currentPointer.type&&(this.G=Date.now())};\nn.oh=function(a){var b=this;-1===this.f?this.f=setTimeout(function(){var c=lq(b.i),d=a.pageX-c.x;c=a.pageY-c.y;b.f=-1;Nq(b,d,c,a)},this.Qg):(clearInterval(this.f),this.f=-1);a.preventDefault()};function Nq(a,b,c,d,e){var f=a.map,g=Date.now()-a.G;e?!a.v&&g>a.Ch&&(a.v=!0,e.dispatchEvent(new Lq(b,c,e,d)),pe(f.J(),a.Ji,a.kj,!1,a)):f.Qd(b,c,a.tn.bind(a,b,c,d))}n.tn=function(a,b,c,d){d=d&&r(d.dispatchEvent)?d:this.map;Nq(this,a,b,c,d)};n.Ji=[\"mousedown\",\"touchstart\",\"pointerdown\",\"wheel\"];\nn.kj=function(){this.v&&(this.v=!1,this.map.dispatchEvent(new Ec(\"contextmenuclose\",this.map)))};n.u=function(){var a=this.map.J();clearInterval(this.f);a&&we(a,this.Ji,this.kj,!1,this);zq.prototype.u.call(this)};function Oq(a,b,c,d,e){Oq.l.constructor.call(this,\"wheel\");this.delta=a;this.viewportX=b;this.viewportY=c;this.target=d;this.originalEvent=e}w(Oq,Ec);u(\"H.mapevents.WheelEvent\",Oq);function Pq(a){var b=\"onwheel\"in document;this.L=b;this.G=(b?\"d\":\"wheelD\")+\"elta\";this.f=A(this.f,this);Pq.l.constructor.call(this,a,[{Ta:(b?\"\":\"mouse\")+\"wheel\",listener:this.f}]);this.v=this.map.Aa}w(Pq,zq);\nPq.prototype.f=function(a){if(!a.el){var b=lq(this.i);var c=a.pageX-b.x;b=a.pageY-b.y;var d=this.G,e=a[d+(d+\"Y\"in a?\"Y\":\"\")],f;mq&&\"rtl\"===y.getComputedStyle(this.v.element).direction&&(c-=(y.devicePixelRatio-1)*this.v.width);if(e){var g=Math.abs;var h=g(e);e=(!(f=a[d+\"X\"])||3<=h/g(f))&&(!(f=a[d+\"Z\"])||3<=h/g(f))?((0<e)-(0>e))*(this.L?1:-1):0}c=new Oq(e,c,b,null,a);c.delta&&(a.stopImmediatePropagation(),a.preventDefault(),this.map.Qd(c.viewportX,c.viewportY,this.N.bind(this,c)))}};\nPq.prototype.N=function(a,b){var c=a.target=b||this.map,d,e;setTimeout(function(){c.dispatchEvent(a);a.f||(d=a.originalEvent,e=new y.WheelEvent(\"wheel\",d),e.el=1,d.target.dispatchEvent(e))},0)};function Qq(a){var b=window;this.f=A(this.f,this);zq.call(this,a,[{Ta:\"mousedown\",listener:this.f},{Ta:\"mousemove\",listener:this.f,target:b},{Ta:\"mouseup\",listener:this.f,target:b},{Ta:\"mouseover\",listener:this.f},{Ta:\"mouseout\",listener:this.f},{Ta:\"dragstart\",listener:this.v}])}w(Qq,zq);\nQq.prototype.f=function(a){var b=a.type,c=lq(this.i);c={x:a.pageX-c.x,y:a.pageY-c.y};var d;(d=this.a.a[0])||(d=new qq(c.x,c.y,1,\"mouse\"),this.a.push(d));this.b.push(d);rq(d,c.x,c.y);/^mouse(?:move|over|out)$/.test(b)?Bq(this,\"pointermove\",a):(/^mouse(down|up)$/.test(b)&&(c=a.which-1,\"up\"===oq.RegExp.$1?tq(d,c):sq(d,c)),Bq(this,b.replace(\"mouse\",\"pointer\"),a));this.b.clear()};Qq.prototype.v=function(a){a.preventDefault()};function Rq(a){var b=a.Aa.element.style;if(-1!==Sq.indexOf(a))throw Error(\"InvalidArgument: map is already in use\");this.a=a;Sq.push(a);b.msTouchAction=b.touchAction=\"none\";nq||!window.PointerEvent&&!window.MSPointerEvent?(this.c=new Hq(this.a),this.b=new Qq(this.a)):this.c=new Iq(this.a);this.g=new Pq(this.a);this.f=new Mq(this.a);this.a.Lb(this.F,this);Ac.call(this)}w(Rq,Ac);u(\"H.mapevents.MapEvents\",Rq);Rq.prototype.c=null;Rq.prototype.b=null;Rq.prototype.g=null;Rq.prototype.f=null;\nvar Sq=[];Yb(Sq);Rq.prototype.F=function(){this.a=null;this.c.F();this.g.F();this.f.F();this.b&&this.b.F();Sq.splice(Sq.indexOf(this.a),1);Ac.prototype.F.call(this)};Rq.prototype.dispose=Rq.prototype.F;Rq.prototype.Ul=function(){return this.a};Rq.prototype.getAttachedMap=Rq.prototype.Ul;function Tq(a,b){var c;if(-1!==Uq.indexOf(a))throw new D(Tq,0,\"events are already used\");b=b||{};Ac.call(this);this.a=c=a.a;this.j=a;Uq.push(a);c.draggable=!0;this.i=b.kinetics||{duration:600,Jd:Ll};this.m=b.modifierKey||\"Alt\";this.enable(b.enabled);this.c=c.Aa;this.f=this.c.element;this.g=0;c.addEventListener(\"dragstart\",this.Mh,!1,this);c.addEventListener(\"drag\",this.Zj,!1,this);c.addEventListener(\"dragend\",this.Lh,!1,this);c.addEventListener(\"wheel\",this.nk,!1,this);c.addEventListener(\"dbltap\",\nthis.ik,!1,this);c.addEventListener(\"pointermove\",this.$j,!1,this);oe(this.f,\"contextmenu\",this.Yj,!1,this);a.Lb(this.F,this)}w(Tq,Ac);u(\"H.mapevents.Behavior\",Tq);var Uq=[];Yb(Uq);Tq.prototype.b=0;var Vq={Qi:1,Si:2,vo:4,oo:8,po:16,dc:32,rc:64};Tq.DRAGGING=1;Tq.WHEELZOOM=4;Tq.DBLTAPZOOM=8;Tq.FRACTIONALZOOM=16;Tq.Feature={PANNING:1,PINCH_ZOOM:2,WHEEL_ZOOM:4,DBL_TAP_ZOOM:8,FRACTIONAL_ZOOM:16,HEADING:64,TILT:32};\nfunction Wq(a,b){if(a!==+a||a%1||0>a||2147483647<a)throw new D(b,0,\"integer in range [0...0x7FFFFFFF] required\");}Tq.prototype.disable=function(a){var b=this.b;a!==B?(Wq(a,this.disable),b^=b&a):b=0;this.c.endInteraction(!0);this.b=b;this.a.draggable=0<(b&1)};Tq.prototype.disable=Tq.prototype.disable;Tq.prototype.enable=function(a){var b=this.b;a!==B?(Wq(a,this.enable),b|=a&127):b=127;this.b=b;this.a.draggable=0<(b&1)};Tq.prototype.enable=Tq.prototype.enable;\nTq.prototype.isEnabled=function(a){Wq(a,this.isEnabled);return a===(this.b&a)};Tq.prototype.isEnabled=Tq.prototype.isEnabled;\nfunction Xq(a,b,c){var d=\"touch\"===b.currentPointer.type,e=0,f;if(f=!d){f=a.m;var g,h=b.originalEvent;h.getModifierState?g=h.getModifierState(f):g=!!h[f.replace(/^Control$/,\"ctrl\").toLowerCase()+\"Key\"];f=g}f?e|=Vq.dc|Vq.rc:(e|=Vq.Qi,d&&(b=b.pointers,2===b.length&&(e|=Vq.Si|Vq.rc,c?55>Nc(b[0].viewportY-b[1].viewportY)&&(e|=Vq.dc):a.vh&Tk.TILT&&(e|=Vq.dc))));e&=a.b;return(e&Vq.dc?Tk.TILT:0)|(e&Vq.rc?Tk.HEADING:0)|(e&Vq.Si?Tk.ZOOM:0)|(e&Vq.Qi?Tk.COORD:0)}\nfunction Yq(a){var b=a.pointers;a=b[0];b=b[1];a=[a.viewportX,a.viewportY];b&&a.push(b.viewportX,b.viewportY);return a}n=Tq.prototype;n.vh=0;n.Mh=function(a){var b=Xq(this,a,!0);if(this.vh=b){var c=this.c;a=Yq(a);c.startInteraction(b,this.i);c.interaction.apply(c,a);if(this.b&4&&!(this.b&16)&&(b=a[0],c=a[1],this.g)){a=this.a.pb();var d=(0>this.g?Mc:Lc)(a);a!==d&&(this.g=0,Zq(this,a,d,b,c))}}};\nn.Zj=function(a){var b=Xq(this,a,!1);if(b!==this.vh)\"pointerout\"!==a.originalEvent.type&&\"pointerover\"!==a.originalEvent.type&&(this.Lh(a),this.Mh(a));else if(b){b=this.c;var c=Yq(a);b.interaction.apply(b,c);a.originalEvent.preventDefault()}};n.Lh=function(a){Xq(this,a,!1)&&this.c.endInteraction(!this.i)};\nfunction Zq(a,b,c,d,e){a=a.a.b;if(isNaN(+b))throw Error(\"start zoom needs to be a number\");if(isNaN(+c))throw Error(\"to zoom needs to be a number\");0!==+c-+b&&(a.startControl(null,d,e),a.control(0,0,6,0,0,0),a.endControl(!0,function(a){a.zoom=c}))}n.nk=function(a){if(!a.defaultPrevented&&this.b&4){var b=a.delta;var c=this.a.pb();var d=this.a;var e=d.zb().type;d=this.b&16?c-b:(0>-b?Mc:Lc)(c)-b;if(e===Km.P2D||e===Km.WEBGL)Zq(this,c,d,a.viewportX,a.viewportY),this.g=b;a.preventDefault()}};n.$j=function(){};\nn.ik=function(a){var b=a.currentPointer,c=this.a.pb(),d=a.currentPointer.type,e=this.a.zb().type;(e===Km.P2D||e===Km.WEBGL)&&this.b&8&&(a=\"mouse\"===d?0===a.originalEvent.button?-1:1:0<a.pointers.length?1:-1,a=this.b&16?c-a:(0>-a?Mc:Lc)(c)-a,Zq(this,c,a,b.viewportX,b.viewportY))};n.Yj=function(a){return this.b&8?(a.preventDefault(),!1):!0};\nn.F=function(){var a=this.a;a&&(a.draggable=!1,a.removeEventListener(\"dragstart\",this.Mh,!1,this),a.removeEventListener(\"drag\",this.Zj,!1,this),a.removeEventListener(\"dragend\",this.Lh,!1,this),a.removeEventListener(\"wheel\",this.nk,!1,this),a.removeEventListener(\"dbltap\",this.ik,!1,this),a.removeEventListener(\"pointermove\",this.$j,!1,this),this.a=null);this.f&&(this.f.style.msTouchAction=\"\",we(this.f,\"contextmenu\",this.Yj,!1,this),this.f=null);this.i=this.c=null;Uq.splice(Uq.indexOf(this.j),1);Ac.prototype.F.call(this)};\nTq.prototype.dispose=Tq.prototype.F;u(\"H.mapevents.buildInfo\",function(){return pf(\"mapsjs-mapevents\",\"1.6.0\",\"3dcce55\")});\n");