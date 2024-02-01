// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,u=r-e.length;return u<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(u):t(u)+e,i&&(e="-"+e)),e}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(e){var r,t,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(t=(-o).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=o.toString(r),o||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===a.call(e.specifier)?a.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,d,"e"),t=l.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=l.call(t,v,"e+0$1"),t=l.call(t,y,"e-0$1"),e.alternate&&(t=l.call(t,h,"$1."),t=l.call(t,g,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function N(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function A(e,r,n){var t=r-e.length;return t<0?e:e=n?e+N(t):N(t)+e}var _=String.fromCharCode,E=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,n,t,u,a,c,s,p,l;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,p=0;p<e.length;p++)if(f(t=e[p]))c+=t;else{if(r=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(u=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,n,t,i;for(n=[],i=0,t=U.exec(e);t;)(r=e.slice(i,U.lastIndex-t[0].length)).length&&n.push(r),n.push(j(t)),i=U.lastIndex,t=U.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function T(e){return"string"==typeof e}function F(e){var r,n,t;if(!T(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,G=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,H=O.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,u,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(e,r)||H.call(e,r)?(t=e.__proto__,e.__proto__=O,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),u="get"in n,a="set"in n,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&G&&G.call(e,r,n.get),a&&P&&P.call(e,r,n.set),e};function M(e,r,n){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(e,r,n){L(e,r,{configurable:!1,enumerable:!1,get:n})}function C(e){return"number"==typeof e}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(e){var r,n,t,i,u;if(null==e)return q.call(e);n=e[z],u=z,r=null!=(i=e)&&X.call(i,u);try{e[z]=void 0}catch(r){return q.call(e)}return t=q.call(e),r?e[z]=n:delete e[z],t}:function(e){return q.call(e)},D=Number,J=D.prototype.toString,K=Z();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function ee(e){return C(e)||Q(e)}function re(e){return C(e)&&e>0}function ne(e){return Q(e)&&e.valueOf()>0}function te(e){return re(e)||ne(e)}function ie(e){return e!=e}function ue(e){return C(e)&&ie(e)}function ae(e){return Q(e)&&ie(e.valueOf())}function oe(e){return ue(e)||ae(e)}M(ee,"isPrimitive",C),M(ee,"isObject",Q),M(te,"isPrimitive",re),M(te,"isObject",ne),M(oe,"isPrimitive",ue),M(oe,"isObject",ae);var fe,ce="function"==typeof Uint32Array,se="function"==typeof Uint32Array?Uint32Array:null,pe="function"==typeof Uint32Array?Uint32Array:void 0;fe=function(){var e,r,n;if("function"!=typeof se)return!1;try{r=new se(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(ce&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")};var le,ve=fe,ye="function"==typeof Float64Array,he="function"==typeof Float64Array?Float64Array:null,ge="function"==typeof Float64Array?Float64Array:void 0;le=function(){var e,r,n;if("function"!=typeof he)return!1;try{r=new he([1,3.14,-3.14,NaN]),n=r,e=(ye&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")};var be,de=le,we="function"==typeof Uint8Array,me="function"==typeof Uint8Array?Uint8Array:null,Ne="function"==typeof Uint8Array?Uint8Array:void 0;be=function(){var e,r,n;if("function"!=typeof me)return!1;try{r=new me(r=[1,3.14,-3.14,256,257]),n=r,e=(we&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")};var Ae,_e=be,Ee="function"==typeof Uint16Array,xe="function"==typeof Uint16Array?Uint16Array:null,ke="function"==typeof Uint16Array?Uint16Array:void 0;Ae=function(){var e,r,n;if("function"!=typeof xe)return!1;try{r=new xe(r=[1,3.14,-3.14,65536,65537]),n=r,e=(Ee&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ke:function(){throw new Error("not implemented")};var Se,Ue={uint16:Ae,uint8:_e};(Se=new Ue.uint16(1))[0]=4660;var je=52===new Ue.uint8(Se.buffer)[0],Ie=!0===je?1:0,Te=new de(1),Fe=new ve(Te.buffer);function Oe(e){return Te[0]=e,Fe[Ie]}var Ve=!0===je?1:0,Ge=new de(1),Pe=new ve(Ge.buffer);function $e(e,r){return Ge[0]=e,Pe[Ve]=r>>>0,Ge[0]}var He=1023,Le=D.NEGATIVE_INFINITY,Me=.6931471803691238,We=1.9082149292705877e-10,Ce=1048575;function Re(e){var r,n,t,i,u,a,o,f,c,s,p,l;return 0===e?Le:ie(e)||e<0?NaN:(u=0,(n=Oe(e))<1048576&&(u-=54,n=Oe(e*=0x40000000000000)),n>=2146435072?e+e:(u+=(n>>20)-He|0,u+=(f=614244+(n&=Ce)&1048576|0)>>20|0,o=(e=$e(e,n|1072693248^f))-1,(Ce&2+n)<3?0===o?0===u?0:u*Me+u*We:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Me-(a-u*We-o)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(p),t=l*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(p),a=t+i,(f|=c)>0?(r=.5*o*o,0===u?o-(r-s*(r+a)):u*Me-(r-(s*(r+a)+u*We)-o)):0===u?o-s*(o-a):u*Me-(s*(o-a)-u*We-o))))}var Ze=.5772156649015329,qe=.6931471805599453,Xe=Re(qe),Ye=Math.sqrt,ze=Math.floor;function Be(e){return ze(e)===e}function De(e){return Math.abs(e)}var Je=Math.ceil;function Ke(e){return e<0?Je(e):ze(e)}var Qe=Number.POSITIVE_INFINITY;function er(e){return e===Qe||e===Le}var rr,nr,tr=2147483647;!0===je?(rr=1,nr=0):(rr=0,nr=1);var ir,ur,ar={HIGH:rr,LOW:nr},or=new de(1),fr=new ve(or.buffer),cr=ar.HIGH,sr=ar.LOW;function pr(e,r,n,t){return or[0]=e,r[t]=fr[cr],r[t+n]=fr[sr],r}function lr(e){return pr(e,[0,0],1,0)}M(lr,"assign",pr),!0===je?(ir=1,ur=0):(ir=0,ur=1);var vr={HIGH:ir,LOW:ur},yr=new de(1),hr=new ve(yr.buffer),gr=vr.HIGH,br=vr.LOW;function dr(e,r){return hr[gr]=e,hr[br]=r,yr[0]}var wr=[0,0];function mr(e,r){var n,t;return lr.assign(e,wr,1,0),n=wr[0],n&=tr,t=Oe(r),dr(n|=t&=2147483648,wr[1])}function Nr(e,r,n,t){return ie(e)||er(e)?(r[t]=e,r[t+n]=0,r):0!==e&&De(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}M((function(e){return Nr(e,[0,0],1,0)}),"assign",Nr);var Ar=2146435072,_r=[0,0],Er=[0,0];function xr(e,r){var n,t;return 0===r||0===e||ie(e)||er(e)?e:(Nr(e,_r,1,0),r+=_r[1],r+=function(e){var r=Oe(e);return(r=(r&Ar)>>>20)-He|0}(e=_r[0]),r<-1074?mr(0,e):r>1023?e<0?Le:Qe:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,lr.assign(e,Er,1,0),n=Er[0],n&=2148532223,t*dr(n|=r+He<<20,Er[1])))}var kr=1.4426950408889634,Sr=1/(1<<28);function Ur(e){var r;return ie(e)||e===Qe?e:e===Le?0:e>709.782712893384?Qe:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Sr?1+e:function(e,r,n){var t,i,u,a;return xr(1-(r-(t=e-r)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-e),n)}(e-.6931471803691238*(r=Ke(e<0?kr*e-.5:kr*e+.5)),1.9082149292705877e-10*r,r)}function jr(e,r){var n,t,i,u;return i=(u=e*e)*u,t=u*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(u),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-e*r))}var Ir=-.16666666666666632;function Tr(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(Ir+i*n):e-(i*(.5*r-t*n)-r-t*Ir)}var Fr=1048575,Or=!0===je?0:1,Vr=new de(1),Gr=new ve(Vr.buffer);function Pr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var $r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lr=16777216,Mr=5.960464477539063e-8,Wr=Pr(20),Cr=Pr(20),Rr=Pr(20),Zr=Pr(20);function qr(e,r,n,t,i,u,a,o,f){var c,s,p,l,v,y,h,g,b;for(l=u,b=t[n],g=n,v=0;g>0;v++)s=Mr*b|0,Zr[v]=b-Lr*s|0,b=t[g-1]+s,g-=1;if(b=xr(b,i),b-=8*ze(.125*b),b-=h=0|b,p=0,i>0?(h+=v=Zr[n-1]>>24-i,Zr[n-1]-=v<<24-i,p=Zr[n-1]>>23-i):0===i?p=Zr[n-1]>>23:b>=.5&&(p=2),p>0){for(h+=1,c=0,v=0;v<n;v++)g=Zr[v],0===c?0!==g&&(c=1,Zr[v]=16777216-g):Zr[v]=16777215-g;if(i>0)switch(i){case 1:Zr[n-1]&=8388607;break;case 2:Zr[n-1]&=4194303}2===p&&(b=1-b,0!==c&&(b-=xr(1,i)))}if(0===b){for(g=0,v=n-1;v>=u;v--)g|=Zr[v];if(0===g){for(y=1;0===Zr[u-y];y++);for(v=n+1;v<=n+y;v++){for(f[o+v]=$r[a+v],s=0,g=0;g<=o;g++)s+=e[g]*f[o+(v-g)];t[v]=s}return qr(e,r,n+=y,t,i,u,a,o,f)}}if(0===b)for(n-=1,i-=24;0===Zr[n];)n-=1,i-=24;else(b=xr(b,-i))>=Lr?(s=Mr*b|0,Zr[n]=b-Lr*s|0,i+=24,Zr[n+=1]=s):Zr[n]=0|b;for(s=xr(1,i),v=n;v>=0;v--)t[v]=s*Zr[v],s*=Mr;for(v=n;v>=0;v--){for(s=0,y=0;y<=l&&y<=n-v;y++)s+=Hr[y]*t[v+y];Rr[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Rr[v];for(r[0]=0===p?s:-s,s=Rr[0]-s,v=1;v<=n;v++)s+=Rr[v];return r[1]=0===p?s:-s,7&h}function Xr(e,r,n,t){var i,u,a,o,f,c,s;for((u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)Wr[f]=c<0?0:$r[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*Wr[a+(f-c)];Cr[f]=i}return qr(e,r,4,Cr,o,4,u,a,Wr)}var Yr=Math.round;function zr(e,r,n){var t,i,u,a,o;return u=e-1.5707963267341256*(t=Yr(.6366197723675814*e)),a=6077100506506192e-26*t,o=r>>20|0,n[0]=u-a,o-(Oe(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=u)-(u=i-(a=6077100506303966e-26*t))-a),n[0]=u-a,o-(Oe(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=u)-(u=i-(a=20222662487111665e-37*t))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var Br=1.5707963267341256,Dr=6077100506506192e-26,Jr=2*Dr,Kr=3*Dr,Qr=4*Dr,en=[0,0,0],rn=[0,0];function nn(e,r){var n,t,i,u,a,o,f;if((i=Oe(e)&tr|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(i&Fr)?zr(e,i,r):i<=1073928572?e>0?(f=e-Br,r[0]=f-Dr,r[1]=f-r[0]-Dr,1):(f=e+Br,r[0]=f+Dr,r[1]=f-r[0]+Dr,-1):e>0?(f=e-2*Br,r[0]=f-Jr,r[1]=f-r[0]-Jr,2):(f=e+2*Br,r[0]=f+Jr,r[1]=f-r[0]+Jr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?zr(e,i,r):e>0?(f=e-3*Br,r[0]=f-Kr,r[1]=f-r[0]-Kr,3):(f=e+3*Br,r[0]=f+Kr,r[1]=f-r[0]+Kr,-3):1075388923===i?zr(e,i,r):e>0?(f=e-4*Br,r[0]=f-Qr,r[1]=f-r[0]-Qr,4):(f=e+4*Br,r[0]=f+Qr,r[1]=f-r[0]+Qr,-4);if(i<1094263291)return zr(e,i,r);if(i>=Ar)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Vr[0]=e,Gr[Or]}(e),f=dr(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)en[a]=0|f,f=16777216*(f-en[a]);for(en[2]=f,u=3;0===en[u-1];)u-=1;return o=Xr(en,rn,t,u),e<0?(r[0]=-rn[0],r[1]=-rn[1],-o):(r[0]=rn[0],r[1]=rn[1],o)}var tn=[0,0];function un(e){var r;if(r=Oe(e),(r&=tr)<=1072243195)return r<1045430272?e:Tr(e,0);if(r>=Ar)return NaN;switch(3&nn(e,tn)){case 0:return Tr(tn[0],tn[1]);case 1:return jr(tn[0],tn[1]);case 2:return-Tr(tn[0],tn[1]);default:return-jr(tn[0],tn[1])}}var an=3.141592653589793;function on(e){return Be(e/2)}function fn(e){return on(e>0?e-1:e+1)}var cn=!0===je?0:1,sn=new de(1),pn=new ve(sn.buffer);function ln(e,r){return sn[0]=e,pn[cn]=r>>>0,sn[0]}function vn(e){return 0|e}var yn=1048576,hn=[1,1.5],gn=[0,.5849624872207642],bn=[0,1.350039202129749e-8],dn=1048576,wn=1083179008,mn=1e300,Nn=1e-300,An=[0,0],_n=[0,0];function En(e,r){var n,t,i,u,a,o,f,c,s,p,l,v,y,h;if(ie(e)||ie(r))return NaN;if(lr.assign(r,An,1,0),a=An[0],0===An[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Ye(e);if(-.5===r)return 1/Ye(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(er(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:De(e)<1==(r===Qe)?0:Qe}(e,r)}if(lr.assign(e,An,1,0),u=An[0],0===An[1]){if(0===u)return function(e,r){return r===Le?Qe:r===Qe?0:r>0?fn(r)?e:0:fn(r)?mr(Qe,e):Qe}(e,r);if(1===e)return 1;if(-1===e&&fn(r))return-1;if(er(e))return e===Le?En(-0,-r):r<0?0:Qe}if(e<0&&!1===Be(r))return(e-e)/(e-e);if(i=De(e),n=u&tr|0,t=a&tr|0,f=a>>>31|0,o=(o=u>>>31|0)&&fn(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(Oe(e)&tr)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?o*mn*mn:o*Nn*Nn;if(n>1072693248)return 0===f?o*mn*mn:o*Nn*Nn;l=function(e,r){var n,t,i,u,a,o;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=ln(t=(u=1.4426950216293335*i)+a,0))-u),e[0]=t,e[1]=n,e}(_n,i)}else l=function(e,r,n){var t,i,u,a,o,f,c,s,p,l,v,y,h,g,b,d,w,m,N,A,_;return m=0,n<yn&&(m-=53,n=Oe(r*=9007199254740992)),m+=(n>>20)-He|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=yn),a=ln(i=(d=(r=$e(r,n))-(c=hn[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),f=$e(0,t+=A<<18),b=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ln(f=3+(u=a*a)+(b+=(o=w*(d-a*f-a*(r-(f-c))))*(a+i)),0),h=(v=-7.028461650952758e-9*(p=ln(p=(d=a*f)+(w=o*f+(b-(f-3-u))*i),0))+.9617966939259756*(w-(p-d))+bn[A])-((y=ln(y=(l=.9617967009544373*p)+v+(s=gn[A])+(g=m),0))-g-s-l),e[0]=y,e[1]=h,e}(_n,i,n);if(v=(p=(r-(c=ln(r,0)))*l[0]+r*l[1])+(s=c*l[0]),lr.assign(v,An,1,0),y=vn(An[0]),h=vn(An[1]),y>=wn){if(0!=(y-wn|h))return o*mn*mn;if(p+8008566259537294e-32>v-s)return o*mn*mn}else if((y&tr)>=1083231232){if(0!=(y-3230714880|h))return o*Nn*Nn;if(p<=v-s)return o*Nn*Nn}return v=function(e,r,n){var t,i,u,a,o,f,c,s,p,l;return p=((s=e&tr|0)>>20)-He|0,c=0,s>1071644672&&(i=$e(0,((c=e+(dn>>p+1)>>>0)&~(Fr>>(p=((c&tr)>>20)-He|0)))>>>0),c=(c&Fr|dn)>>20-p>>>0,e<0&&(c=-c),r-=i),e=vn(e=Oe(f=1-((f=(u=.6931471824645996*(i=ln(i=n+r,0)))+(a=(n-(i-r))*qe+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=a-(f-u))+f*o)-f))),(e+=c<<20>>>0)>>20<=0?xr(f,c):$e(f,e)}(y,s,p),o*v}function xn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Ur(e),2.5066282746310007*(n=e>143.01608?(t=En(e,.5*e-.25))*(t/n):En(e,e-.5)/n)*r}function kn(e,r){return r/((1+Ze*e)*e)}function Sn(e){var r,n,t,i;if(Be(e)&&e<0||e===Le||ie(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===Le}(e)?Le:Qe;if(e>171.61447887182297)return Qe;if(e<-170.5674972726612)return 0;if((n=De(e))>33)return e>=0?xn(e):(r=0==(1&(t=ze(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*un(an*i),r*an/(De(i)*xn(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return kn(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return kn(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var Un=[0,0];function jn(e){var r;if(r=Oe(e),(r&=2147483647)<=1072243195)return r<1044381696?1:jr(e,0);if(r>=2146435072)return NaN;switch(3&nn(e,Un)){case 0:return jr(Un[0],Un[1]);case 1:return-Tr(Un[0],Un[1]);case 2:return-jr(Un[0],Un[1]);default:return Tr(Un[0],Un[1])}}function In(e){var r,n;return ie(e)||er(e)?NaN:0===(r=De(n=e%2))||1===r?mr(0,n):r<.25?un(an*n):r<.75?mr(jn(an*(r=.5-r)),n):r<1.25?(n=mr(1,n)-n,un(an*n)):r<1.75?-mr(jn(an*(r-=1.5)),n):(n-=mr(2,n),un(an*n))}var Tn=1.4616321449683622,Fn=1.4616321449683622,On=6.283185307179586,Vn=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Gn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Pn=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],$n=12*Ye(6)*function e(r){var n,t,i,u,a,o,f,c,s;if(ie(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(Be(r)&&(u=0|r)===r){if(!(u<0))return 0==(1&u)?Gn[u/2]:Vn[(u-3)/2];if(0==(1&(i=0|-u)))return 0;if((o=(i+1)/2|0)<=129)return-Pn[o]/(i+1)}return De(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(t=1-r,r<0?ze(r/2)===r/2?0:(n=r,r=t,t=n,r>170?(n=2*In(.5*t)*e(r),a=function(e){var r,n,t,i,u,a,o,f,c,s,p,l,v;if(ie(e)||er(e))return e;if(0===e)return Qe;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-Re(e);if(r){if(e>=4503599627370496)return Qe;if(0===(c=In(e)))return Qe;n=Re(an/De(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(v=-Re(e),e>=Tn-1+.27?(p=1-e,t=0):e>=Tn-1-.27?(p=e-(Fn-1),t=1):(p=e,t=2)):(v=0,e>=Tn+.27?(p=2-e,t=0):e>=Tn-.27?(p=e-Fn,t=1):(p=e-1,t=2)),t){case 0:a=.07721566490153287+(l=p*p)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(l),u=l*(.3224670334241136+l*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(l)),v+=(o=p*a+u)-.5*p;break;case 1:a=.48383612272381005+(s=(l=p*p)*p)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(s),u=s*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(s),v+=(o=l*a-(-3638676997039505e-33-s*(u+p*i)))-.12148629053584961;break;case 2:a=p*(p*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(p)-.07721566490153287),u=1+p*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(p),v+=-.5*p+a/u}else if(e<8)switch(o=(p=e-(t=Ke(e)))*(p*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(p)-.07721566490153287),f=1+p*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(p),v=.5*p+o/f,l=1,t){case 7:l*=p+6;case 6:l*=p+5;case 5:l*=p+4;case 4:l*=p+3;case 3:v+=Re(l*=p+2)}else e<0x400000000000000?(c=Re(e),s=.4189385332046727+(l=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(p=l*l),v=(e-.5)*(c-1)+s):v=e*(Re(e)-1);return r&&(v=n-v),v}(r),(a-=r*Re(On))>709?n<0?Le:Qe:n*Ur(a)):2*In(.5*t)*En(On,-r)*Sn(r)*e(r)):r<1?(n=0===(f=t)?.2433929443359375:((f<0?-f:f)<=1?(c=.2433929443359375+f*(f*(.055761621477604675+f*(f*(.0004515345286457964+-9332412703570615e-21*f)-.003209124988790859))-.4909247051635357),s=1+f*(f*(.04196762233099861+f*(f*(.00024978985622317937+-10185578841856403e-21*f)-.00413421406552171))-.27996033431034445)):(c=(f=1/f)*(.0004515345286457964+f*(f*(.055761621477604675+f*(.2433929443359375*f-.4909247051635357))-.003209124988790859))-9332412703570615e-21,s=f*(.00024978985622317937+f*(f*(.04196762233099861+f*(1*f-.27996033431034445))-.00413421406552171))-10185578841856403e-21),c/s),n-=1.2433929443359375,n+=t,n/=t):r<=2?(n=1/(t=-t))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(t):r<=4?(n=.6986598968505859+1/-t)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(r-2):r<=7?(n=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(r-4),1+Ur(n)):r<15?(n=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(r-7),1+Ur(n)):r<36?(n=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(r-15),1+Ur(n)):1+En(2,-r))}(3)/(an*an*an),Hn=Ye(6);function Ln(e,r,n){return ie(e)||ie(r)||ie(n)||n<=0?NaN:Ur(-Ur(-(e-r)/n))}function Mn(e){return function(){return e}}function Wn(e,r,n){return ie(e)||ie(r)||ie(n)||n<=0?NaN:-Ur(-(e-r)/n)}function Cn(e,r,n){var t;return ie(e)||ie(r)||ie(n)||n<=0?NaN:e===Le?0:-(t=(e-r)/n)-Ur(-t)-Re(n)}function Rn(e,r,n){return ie(e)||ie(r)||ie(n)||n<=0||e>=1/n?NaN:Sn(1-n*e)*Ur(r*e)}function Zn(e,r,n){var t;return ie(e)||ie(r)||ie(n)||n<=0?NaN:e===Le?0:1/n*Ur(-(t=(e-r)/n)-Ur(-t))}function qn(e,r,n){return ie(r)||ie(n)||ie(e)||n<=0||e<0||e>1?NaN:r-n*Re(-Re(e))}function Xn(){var e,r;if(!(this instanceof Xn))return 0===arguments.length?new Xn:new Xn(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!C(r=arguments[0])||oe(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!re(e))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",e))}else r=0,e=1;return L(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!C(e)||oe(e))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",e));r=e}}),L(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!re(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));e=r}}),this}return M(Ln,"factory",(function(e,r){return ie(e)||ie(r)||r<=0?Mn(NaN):function(n){return ie(n)?NaN:Ur(-Ur(-(n-e)/r))}})),M(Wn,"factory",(function(e,r){return ie(e)||ie(r)||r<=0?Mn(NaN):function(n){return ie(n)?NaN:-Ur(-(n-e)/r)}})),M(Cn,"factory",(function(e,r){var n;return ie(e)||ie(r)||r<=0?Mn(NaN):(n=Re(r),function(t){var i;return ie(t)?NaN:t===Le?0:-(i=(t-e)/r)-Ur(-i)-n})})),M(Rn,"factory",(function(e,r){return ie(e)||ie(r)||r<=0?Mn(NaN):function(n){return n>=1/r?NaN:Sn(1-r*n)*Ur(e*n)}})),M(Zn,"factory",(function(e,r){return ie(e)||ie(r)||r<=0?Mn(NaN):function(n){var t;return ie(n)?NaN:n===Le?0:1/r*Ur(-(t=(n-e)/r)-Ur(-t))}})),M(qn,"factory",(function(e,r){return ie(e)||ie(r)||r<=0?Mn(NaN):function(n){return ie(n)||n<0||n>1?NaN:e-r*Re(-Re(n))}})),W(Xn.prototype,"entropy",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:Re(r)+Ze+1;var e,r})),W(Xn.prototype,"kurtosis",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:2.4;var e,r})),W(Xn.prototype,"mean",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:e+r*Ze;var e,r})),W(Xn.prototype,"median",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:e-r*Xe;var e,r})),W(Xn.prototype,"mode",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:e;var e,r})),W(Xn.prototype,"skewness",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:$n;var e,r})),W(Xn.prototype,"stdev",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:an/Hn*r;var e,r})),W(Xn.prototype,"variance",(function(){return e=this.mu,r=this.beta,ie(e)||ie(r)||r<=0?NaN:1.6449340668482264*r*r;var e,r})),M(Xn.prototype,"cdf",(function(e){return Ln(e,this.mu,this.beta)})),M(Xn.prototype,"logcdf",(function(e){return Wn(e,this.mu,this.beta)})),M(Xn.prototype,"logpdf",(function(e){return Cn(e,this.mu,this.beta)})),M(Xn.prototype,"mgf",(function(e){return Rn(e,this.mu,this.beta)})),M(Xn.prototype,"pdf",(function(e){return Zn(e,this.mu,this.beta)})),M(Xn.prototype,"quantile",(function(e){return qn(e,this.mu,this.beta)})),Xn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Gumbel=r();
//# sourceMappingURL=index.js.map
