// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,t=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var c,s,l,y;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((s="value"in a)&&(o.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=a.value,e.__proto__=c):e[r]=a.value),l="get"in a,y="set"in a,s&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(e,r,a.get),y&&i&&i.call(e,r,a.set),e};function c(e,r,n){a(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(e,r,n){a(e,r,{configurable:!1,enumerable:!1,get:n})}function l(e){return"number"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=v()?function(e){var r,n,t,u,i;if(null==e)return p.call(e);n=e[N],i=N,r=null!=(u=e)&&b.call(u,i);try{e[N]=void 0}catch(r){return p.call(e)}return t=p.call(e),r?e[N]=n:delete e[N],t}:function(e){return p.call(e)},m=Number,w=m.prototype.toString,d=v();function g(e){return"object"==typeof e&&(e instanceof m||(d?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Number]"===h(e)))}function A(e){return l(e)||g(e)}function _(e){return l(e)&&e>0}function j(e){return g(e)&&e.valueOf()>0}function U(e){return _(e)||j(e)}function O(e){return e!=e}function E(e){return l(e)&&O(e)}function I(e){return g(e)&&O(e.valueOf())}function T(e){return E(e)||I(e)}c(A,"isPrimitive",l),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",j),c(T,"isPrimitive",E),c(T,"isObject",I);var S,F="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,x="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var e,r,n;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(F&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?x:function(){throw new Error("not implemented")};var G,H=S,V="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;G=function(){var e,r,n;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,NaN]),n=r,e=(V&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?M:function(){throw new Error("not implemented")};var L,W=G,q="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var e,r,n;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,256,257]),n=r,e=(q&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Y:function(){throw new Error("not implemented")};var R,z=L,B="function"==typeof Uint16Array,D="function"==typeof Uint16Array?Uint16Array:null,J="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var e,r,n;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,65536,65537]),n=r,e=(B&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:R,uint8:z};(K=new Q.uint16(1))[0]=4660;var X=52===new Q.uint8(K.buffer)[0],Z=!0===X?1:0,$=new W(1),ee=new H($.buffer);function re(e){return $[0]=e,ee[Z]}var ne=!0===X?1:0,te=new W(1),ue=new H(te.buffer);function ie(e,r){return te[0]=e,ue[ne]=r>>>0,te[0]}var oe=1023,fe=m.NEGATIVE_INFINITY,ae=.6931471803691238,ce=1.9082149292705877e-10,se=1048575;function le(e){var r,n,t,u,i,o,f,a,c,s,l,y;return 0===e?fe:O(e)||e<0?NaN:(i=0,(n=re(e))<1048576&&(i-=54,n=re(e*=0x40000000000000)),n>=2146435072?e+e:(i+=(n>>20)-oe|0,i+=(a=614244+(n&=se)&1048576|0)>>20|0,f=(e=ie(e,n|1072693248^a))-1,(se&2+n)<3?0===f?0===i?0:i*ae+i*ce:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*ae-(o-i*ce-f)):(a=n-398458|0,c=440401-n|0,u=(l=(y=(s=f/(2+f))*s)*y)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(l),t=y*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(l),o=t+u,(a|=c)>0?(r=.5*f*f,0===i?f-(r-s*(r+o)):i*ae-(r-(s*(r+o)+i*ce)-f)):0===i?f-s*(f-o):i*ae-(s*(f-o)-i*ce-f))))}var ye=.5772156649015329,ve=.6931471805599453,pe=le(ve),be=Math.sqrt,Ne=Math.floor;function he(e){return Ne(e)===e}function me(e){return Math.abs(e)}var we=Math.ceil;function de(e){return e<0?we(e):Ne(e)}var ge=Number.POSITIVE_INFINITY;function Ae(e){return e===ge||e===fe}var _e,je,Ue=2147483647;!0===X?(_e=1,je=0):(_e=0,je=1);var Oe,Ee,Ie={HIGH:_e,LOW:je},Te=new W(1),Se=new H(Te.buffer),Fe=Ie.HIGH,Pe=Ie.LOW;function xe(e,r,n,t){return Te[0]=e,r[t]=Se[Fe],r[t+n]=Se[Pe],r}function Ge(e){return xe(e,[0,0],1,0)}c(Ge,"assign",xe),!0===X?(Oe=1,Ee=0):(Oe=0,Ee=1);var He={HIGH:Oe,LOW:Ee},Ve=new W(1),ke=new H(Ve.buffer),Me=He.HIGH,Le=He.LOW;function We(e,r){return ke[Me]=e,ke[Le]=r,Ve[0]}var qe=[0,0];function Ce(e,r){var n,t;return Ge.assign(e,qe,1,0),n=qe[0],n&=Ue,t=re(r),We(n|=t&=2147483648,qe[1])}function Ye(e,r,n,t){return O(e)||Ae(e)?(r[t]=e,r[t+n]=0,r):0!==e&&me(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}c((function(e){return Ye(e,[0,0],1,0)}),"assign",Ye);var Re=[0,0],ze=[0,0];function Be(e,r){var n,t;return 0===r||0===e||O(e)||Ae(e)?e:(Ye(e,Re,1,0),r+=Re[1],r+=function(e){var r=re(e);return(r=(2146435072&r)>>>20)-oe|0}(e=Re[0]),r<-1074?Ce(0,e):r>1023?e<0?fe:ge:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,Ge.assign(e,ze,1,0),n=ze[0],n&=2148532223,t*We(n|=r+oe<<20,ze[1])))}var De=1.4426950408889634,Je=1/(1<<28);function Ke(e){var r;return O(e)||e===ge?e:e===fe?0:e>709.782712893384?ge:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Je?1+e:function(e,r,n){var t,u,i,o;return Be(1-(r-(t=e-r)*(i=t-(u=t*t)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-e),n)}(e-.6931471803691238*(r=de(e<0?De*e-.5:De*e+.5)),1.9082149292705877e-10*r,r)}function Qe(e,r){var n,t,u,i;return u=(i=e*e)*i,t=i*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(i),t+=u*u*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(i),(u=1-(n=.5*i))+(1-u-n+(i*t-e*r))}var Xe=-.16666666666666632;function Ze(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(Xe+u*n):e-(u*(.5*r-t*n)-r-t*Xe)}var $e=!0===X?0:1,er=new W(1),rr=new H(er.buffer);function nr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ir=16777216,or=5.960464477539063e-8,fr=nr(20),ar=nr(20),cr=nr(20),sr=nr(20);function lr(e,r,n,t,u,i,o,f,a){var c,s,l,y,v,p,b,N,h;for(y=i,h=t[n],N=n,v=0;N>0;v++)s=or*h|0,sr[v]=h-ir*s|0,h=t[N-1]+s,N-=1;if(h=Be(h,u),h-=8*Ne(.125*h),h-=b=0|h,l=0,u>0?(b+=v=sr[n-1]>>24-u,sr[n-1]-=v<<24-u,l=sr[n-1]>>23-u):0===u?l=sr[n-1]>>23:h>=.5&&(l=2),l>0){for(b+=1,c=0,v=0;v<n;v++)N=sr[v],0===c?0!==N&&(c=1,sr[v]=16777216-N):sr[v]=16777215-N;if(u>0)switch(u){case 1:sr[n-1]&=8388607;break;case 2:sr[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Be(1,u)))}if(0===h){for(N=0,v=n-1;v>=i;v--)N|=sr[v];if(0===N){for(p=1;0===sr[i-p];p++);for(v=n+1;v<=n+p;v++){for(a[f+v]=tr[o+v],s=0,N=0;N<=f;N++)s+=e[N]*a[f+(v-N)];t[v]=s}return lr(e,r,n+=p,t,u,i,o,f,a)}}if(0===h)for(n-=1,u-=24;0===sr[n];)n-=1,u-=24;else(h=Be(h,-u))>=ir?(s=or*h|0,sr[n]=h-ir*s|0,u+=24,sr[n+=1]=s):sr[n]=0|h;for(s=Be(1,u),v=n;v>=0;v--)t[v]=s*sr[v],s*=or;for(v=n;v>=0;v--){for(s=0,p=0;p<=y&&p<=n-v;p++)s+=ur[p]*t[v+p];cr[n-v]=s}for(s=0,v=n;v>=0;v--)s+=cr[v];for(r[0]=0===l?s:-s,s=cr[0]-s,v=1;v<=n;v++)s+=cr[v];return r[1]=0===l?s:-s,7&b}function yr(e,r,n,t){var u,i,o,f,a,c,s;for((i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(o=t-1),s=o+4,a=0;a<=s;a++)fr[a]=c<0?0:tr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=e[c]*fr[o+(a-c)];ar[a]=u}return lr(e,r,4,ar,f,4,i,o,fr)}var vr=Math.round;function pr(e,r,n){var t,u,i,o,f;return i=e-1.5707963267341256*(t=vr(.6366197723675814*e)),o=6077100506506192e-26*t,f=r>>20|0,n[0]=i-o,f-(re(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((u=i)-(i=u-(o=6077100506303966e-26*t))-o),n[0]=i-o,f-(re(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((u=i)-(i=u-(o=20222662487111665e-37*t))-o),n[0]=i-o)),n[1]=i-n[0]-o,t}var br=1.5707963267341256,Nr=6077100506506192e-26,hr=2*Nr,mr=3*Nr,wr=4*Nr,dr=[0,0,0],gr=[0,0];function Ar(e,r){var n,t,u,i,o,f,a;if((u=2147483647&re(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?pr(e,u,r):u<=1073928572?e>0?(a=e-br,r[0]=a-Nr,r[1]=a-r[0]-Nr,1):(a=e+br,r[0]=a+Nr,r[1]=a-r[0]+Nr,-1):e>0?(a=e-2*br,r[0]=a-hr,r[1]=a-r[0]-hr,2):(a=e+2*br,r[0]=a+hr,r[1]=a-r[0]+hr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?pr(e,u,r):e>0?(a=e-3*br,r[0]=a-mr,r[1]=a-r[0]-mr,3):(a=e+3*br,r[0]=a+mr,r[1]=a-r[0]+mr,-3):1075388923===u?pr(e,u,r):e>0?(a=e-4*br,r[0]=a-wr,r[1]=a-r[0]-wr,4):(a=e+4*br,r[0]=a+wr,r[1]=a-r[0]+wr,-4);if(u<1094263291)return pr(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return er[0]=e,rr[$e]}(e),a=We(u-((t=(u>>20)-1046)<<20|0),n),o=0;o<2;o++)dr[o]=0|a,a=16777216*(a-dr[o]);for(dr[2]=a,i=3;0===dr[i-1];)i-=1;return f=yr(dr,gr,t,i),e<0?(r[0]=-gr[0],r[1]=-gr[1],-f):(r[0]=gr[0],r[1]=gr[1],f)}var _r=[0,0];function jr(e){var r;if(r=re(e),(r&=2147483647)<=1072243195)return r<1045430272?e:Ze(e,0);if(r>=2146435072)return NaN;switch(3&Ar(e,_r)){case 0:return Ze(_r[0],_r[1]);case 1:return Qe(_r[0],_r[1]);case 2:return-Ze(_r[0],_r[1]);default:return-Qe(_r[0],_r[1])}}var Ur=3.141592653589793;function Or(e){return he(e/2)}function Er(e){return Or(e>0?e-1:e+1)}var Ir=!0===X?0:1,Tr=new W(1),Sr=new H(Tr.buffer);function Fr(e,r){return Tr[0]=e,Sr[Ir]=r>>>0,Tr[0]}function Pr(e){return 0|e}var xr=1048576,Gr=[1,1.5],Hr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8],kr=1048575,Mr=1048576,Lr=1083179008,Wr=1e300,qr=1e-300,Cr=[0,0],Yr=[0,0];function Rr(e,r){var n,t,u,i,o,f,a,c,s,l,y,v,p,b;if(O(e)||O(r))return NaN;if(Ge.assign(r,Cr,1,0),o=Cr[0],0===Cr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return be(e);if(-.5===r)return 1/be(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Ae(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:me(e)<1==(r===ge)?0:ge}(e,r)}if(Ge.assign(e,Cr,1,0),i=Cr[0],0===Cr[1]){if(0===i)return function(e,r){return r===fe?ge:r===ge?0:r>0?Er(r)?e:0:Er(r)?Ce(ge,e):ge}(e,r);if(1===e)return 1;if(-1===e&&Er(r))return-1;if(Ae(e))return e===fe?Rr(-0,-r):r<0?0:ge}if(e<0&&!1===he(r))return(e-e)/(e-e);if(u=me(e),n=i&Ue|0,t=o&Ue|0,a=o>>>31|0,f=(f=i>>>31|0)&&Er(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(re(e)&Ue)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===a?f*Wr*Wr:f*qr*qr;if(n>1072693248)return 0===a?f*Wr*Wr:f*qr*qr;y=function(e,r){var n,t,u,i,o,f;return n=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=Fr(t=(i=1.4426950216293335*u)+o,0))-i),e[0]=t,e[1]=n,e}(Yr,u)}else y=function(e,r,n){var t,u,i,o,f,a,c,s,l,y,v,p,b,N,h,m,w,d,g,A,_;return d=0,n<xr&&(d-=53,n=re(r*=9007199254740992)),d+=(n>>20)-oe|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=xr),o=Fr(u=(m=(r=ie(r,n))-(c=Gr[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),a=ie(0,t+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Fr(a=3+(i=o*o)+(h+=(f=w*(m-o*a-o*(r-(a-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(l=Fr(l=(m=o*a)+(w=f*a+(h-(a-3-i))*u),0))+.9617966939259756*(w-(l-m))+Vr[A])-((p=Fr(p=(y=.9617967009544373*l)+v+(s=Hr[A])+(N=d),0))-N-s-y),e[0]=p,e[1]=b,e}(Yr,u,n);if(v=(l=(r-(c=Fr(r,0)))*y[0]+r*y[1])+(s=c*y[0]),Ge.assign(v,Cr,1,0),p=Pr(Cr[0]),b=Pr(Cr[1]),p>=Lr){if(0!=(p-Lr|b))return f*Wr*Wr;if(l+8008566259537294e-32>v-s)return f*Wr*Wr}else if((p&Ue)>=1083231232){if(0!=(p-3230714880|b))return f*qr*qr;if(l<=v-s)return f*qr*qr}return v=function(e,r,n){var t,u,i,o,f,a,c,s,l,y;return l=((s=e&Ue|0)>>20)-oe|0,c=0,s>1071644672&&(u=ie(0,((c=e+(Mr>>l+1)>>>0)&~(kr>>(l=((c&Ue)>>20)-oe|0)))>>>0),c=(c&kr|Mr)>>20-l>>>0,e<0&&(c=-c),r-=u),e=Pr(e=re(a=1-((a=(i=.6931471824645996*(u=Fr(u=n+r,0)))+(o=(n-(u-r))*ve+-1.904654299957768e-9*u))*(t=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=o-(a-i))+a*f)-a))),(e+=c<<20>>>0)>>20<=0?Be(a,c):ie(a,e)}(p,s,l),f*v}function zr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Ke(e),2.5066282746310007*(n=e>143.01608?(t=Rr(e,.5*e-.25))*(t/n):Rr(e,e-.5)/n)*r}function Br(e,r){return r/((1+ye*e)*e)}function Dr(e){var r,n,t,u;if(he(e)&&e<0||e===fe||O(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===fe}(e)?fe:ge;if(e>171.61447887182297)return ge;if(e<-170.5674972726612)return 0;if((n=me(e))>33)return e>=0?zr(e):(r=0==(1&(t=Ne(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*jr(Ur*u),r*Ur/(me(u)*zr(n)));for(u=1;e>=3;)u*=e-=1;for(;e<0;){if(e>-1e-9)return Br(e,u);u/=e,e+=1}for(;e<2;){if(e<1e-9)return Br(e,u);u/=e,e+=1}return 2===e?u:u*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var Jr=[0,0];function Kr(e){var r;if(r=re(e),(r&=2147483647)<=1072243195)return r<1044381696?1:Qe(e,0);if(r>=2146435072)return NaN;switch(3&Ar(e,Jr)){case 0:return Qe(Jr[0],Jr[1]);case 1:return-Ze(Jr[0],Jr[1]);case 2:return-Qe(Jr[0],Jr[1]);default:return Ze(Jr[0],Jr[1])}}function Qr(e){var r,n;return O(e)||Ae(e)?NaN:0===(r=me(n=e%2))||1===r?Ce(0,n):r<.25?jr(Ur*n):r<.75?Ce(Kr(Ur*(r=.5-r)),n):r<1.25?(n=Ce(1,n)-n,jr(Ur*n)):r<1.75?-Ce(Kr(Ur*(r-=1.5)),n):(n-=Ce(2,n),jr(Ur*n))}var Xr=1.4616321449683622,Zr=1.4616321449683622,$r=6.283185307179586,en=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],rn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],nn=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],tn=12*be(6)*function e(r){var n,t,u,i,o,f,a,c,s;if(O(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(he(r)&&(i=0|r)===r){if(!(i<0))return 0==(1&i)?rn[i/2]:en[(i-3)/2];if(0==(1&(u=0|-i)))return 0;if((f=(u+1)/2|0)<=129)return-nn[f]/(u+1)}return me(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(t=1-r,r<0?Ne(r/2)===r/2?0:(n=r,r=t,t=n,r>170?(n=2*Qr(.5*t)*e(r),o=function(e){var r,n,t,u,i,o,f,a,c,s,l,y,v;if(O(e)||Ae(e))return e;if(0===e)return ge;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-le(e);if(r){if(e>=4503599627370496)return ge;if(0===(c=Qr(e)))return ge;n=le(Ur/me(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(v=-le(e),e>=Xr-1+.27?(l=1-e,t=0):e>=Xr-1-.27?(l=e-(Zr-1),t=1):(l=e,t=2)):(v=0,e>=Xr+.27?(l=2-e,t=0):e>=Xr-.27?(l=e-Zr,t=1):(l=e-1,t=2)),t){case 0:o=.07721566490153287+(y=l*l)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(y),i=y*(.3224670334241136+y*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(y)),v+=(f=l*o+i)-.5*l;break;case 1:o=.48383612272381005+(s=(y=l*l)*l)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(s),i=s*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(s)-.1475877229945939,u=.06462494023913339+s*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(s),v+=(f=y*o-(-3638676997039505e-33-s*(i+l*u)))-.12148629053584961;break;case 2:o=l*(l*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(l)-.07721566490153287),i=1+l*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(l),v+=-.5*l+o/i}else if(e<8)switch(f=(l=e-(t=de(e)))*(l*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(l)-.07721566490153287),a=1+l*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(l),v=.5*l+f/a,y=1,t){case 7:y*=l+6;case 6:y*=l+5;case 5:y*=l+4;case 4:y*=l+3;case 3:v+=le(y*=l+2)}else e<0x400000000000000?(c=le(e),s=.4189385332046727+(y=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(l=y*y),v=(e-.5)*(c-1)+s):v=e*(le(e)-1);return r&&(v=n-v),v}(r),(o-=r*le($r))>709?n<0?fe:ge:n*Ke(o)):2*Qr(.5*t)*Rr($r,-r)*Dr(r)*e(r)):r<1?(n=0===(a=t)?.2433929443359375:((a<0?-a:a)<=1?(c=.2433929443359375+a*(a*(.055761621477604675+a*(a*(.0004515345286457964+-9332412703570615e-21*a)-.003209124988790859))-.4909247051635357),s=1+a*(a*(.04196762233099861+a*(a*(.00024978985622317937+-10185578841856403e-21*a)-.00413421406552171))-.27996033431034445)):(c=(a=1/a)*(.0004515345286457964+a*(a*(.055761621477604675+a*(.2433929443359375*a-.4909247051635357))-.003209124988790859))-9332412703570615e-21,s=a*(.00024978985622317937+a*(a*(.04196762233099861+a*(1*a-.27996033431034445))-.00413421406552171))-10185578841856403e-21),c/s),n-=1.2433929443359375,n+=t,n/=t):r<=2?(n=1/(t=-t))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(t):r<=4?(n=.6986598968505859+1/-t)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(r-2):r<=7?(n=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(r-4),1+Ke(n)):r<15?(n=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(r-7),1+Ke(n)):r<36?(n=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(r-15),1+Ke(n)):1+Rr(2,-r))}(3)/(Ur*Ur*Ur),un=be(6);function on(e,r,n){return O(e)||O(r)||O(n)||n<=0?NaN:Ke(-Ke(-(e-r)/n))}function fn(e){return function(){return e}}function an(e,r,n){return O(e)||O(r)||O(n)||n<=0?NaN:-Ke(-(e-r)/n)}function cn(e,r,n){var t;return O(e)||O(r)||O(n)||n<=0?NaN:e===fe?0:-(t=(e-r)/n)-Ke(-t)-le(n)}function sn(e,r,n){return O(e)||O(r)||O(n)||n<=0||e>=1/n?NaN:Dr(1-n*e)*Ke(r*e)}function ln(e,r,n){var t;return O(e)||O(r)||O(n)||n<=0?NaN:e===fe?0:1/n*Ke(-(t=(e-r)/n)-Ke(-t))}function yn(e,r,n){return O(r)||O(n)||O(e)||n<=0||e<0||e>1?NaN:r-n*le(-le(e))}function vn(){var e,r=arguments,n=r[0],t="https://stdlib.io/e/"+n+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function pn(){var e,r;if(!(this instanceof pn))return 0===arguments.length?new pn:new pn(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!l(r=arguments[0])||T(r))throw new TypeError(vn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(e))throw new TypeError(vn("0Vr7u",e))}else r=0,e=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!l(e)||T(e))throw new TypeError(vn("invalid assignment. Must be a number. Value: `%s`.",e));r=e}}),a(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!_(r))throw new TypeError(vn("invalid assignment. Must be a positive number. Value: `%s`.",r));e=r}}),this}return c(on,"factory",(function(e,r){return O(e)||O(r)||r<=0?fn(NaN):function(n){return O(n)?NaN:Ke(-Ke(-(n-e)/r))}})),c(an,"factory",(function(e,r){return O(e)||O(r)||r<=0?fn(NaN):function(n){return O(n)?NaN:-Ke(-(n-e)/r)}})),c(cn,"factory",(function(e,r){var n;return O(e)||O(r)||r<=0?fn(NaN):(n=le(r),function(t){var u;return O(t)?NaN:t===fe?0:-(u=(t-e)/r)-Ke(-u)-n})})),c(sn,"factory",(function(e,r){return O(e)||O(r)||r<=0?fn(NaN):function(n){return n>=1/r?NaN:Dr(1-r*n)*Ke(e*n)}})),c(ln,"factory",(function(e,r){return O(e)||O(r)||r<=0?fn(NaN):function(n){var t;return O(n)?NaN:n===fe?0:1/r*Ke(-(t=(n-e)/r)-Ke(-t))}})),c(yn,"factory",(function(e,r){return O(e)||O(r)||r<=0?fn(NaN):function(n){return O(n)||n<0||n>1?NaN:e-r*le(-le(n))}})),s(pn.prototype,"entropy",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:le(r)+ye+1;var e,r})),s(pn.prototype,"kurtosis",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:2.4;var e,r})),s(pn.prototype,"mean",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:e+r*ye;var e,r})),s(pn.prototype,"median",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:e-r*pe;var e,r})),s(pn.prototype,"mode",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:e;var e,r})),s(pn.prototype,"skewness",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:tn;var e,r})),s(pn.prototype,"stdev",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:Ur/un*r;var e,r})),s(pn.prototype,"variance",(function(){return e=this.mu,r=this.beta,O(e)||O(r)||r<=0?NaN:1.6449340668482264*r*r;var e,r})),c(pn.prototype,"cdf",(function(e){return on(e,this.mu,this.beta)})),c(pn.prototype,"logcdf",(function(e){return an(e,this.mu,this.beta)})),c(pn.prototype,"logpdf",(function(e){return cn(e,this.mu,this.beta)})),c(pn.prototype,"mgf",(function(e){return sn(e,this.mu,this.beta)})),c(pn.prototype,"pdf",(function(e){return ln(e,this.mu,this.beta)})),c(pn.prototype,"quantile",(function(e){return yn(e,this.mu,this.beta)})),pn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Gumbel=r();
//# sourceMappingURL=index.js.map
