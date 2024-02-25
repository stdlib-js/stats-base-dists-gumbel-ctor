// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-entropy@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-kurtosis@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mean@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-median@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mode@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-skewness@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-stdev@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-variance@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-cdf@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logcdf@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logpdf@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mgf@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-pdf@v0.2.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-quantile@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function x(){var s,e;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!n(e=arguments[0])||r(e))throw new TypeError(y("11v8p",e));if(!i(s))throw new TypeError(y("11v7c",s))}else e=0,s=1;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!n(t)||r(t))throw new TypeError(y("11v8d",t));e=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(y("11v8k",t));s=t}}),this}e(x.prototype,"entropy",(function(){return m(this.mu,this.beta)})),e(x.prototype,"kurtosis",(function(){return o(this.mu,this.beta)})),e(x.prototype,"mean",(function(){return d(this.mu,this.beta)})),e(x.prototype,"median",(function(){return p(this.mu,this.beta)})),e(x.prototype,"mode",(function(){return u(this.mu,this.beta)})),e(x.prototype,"skewness",(function(){return h(this.mu,this.beta)})),e(x.prototype,"stdev",(function(){return l(this.mu,this.beta)})),e(x.prototype,"variance",(function(){return b(this.mu,this.beta)})),s(x.prototype,"cdf",(function(t){return a(t,this.mu,this.beta)})),s(x.prototype,"logcdf",(function(t){return f(t,this.mu,this.beta)})),s(x.prototype,"logpdf",(function(t){return j(t,this.mu,this.beta)})),s(x.prototype,"mgf",(function(t){return v(t,this.mu,this.beta)})),s(x.prototype,"pdf",(function(t){return c(t,this.mu,this.beta)})),s(x.prototype,"quantile",(function(t){return g(t,this.mu,this.beta)}));export{x as default};
//# sourceMappingURL=index.mjs.map
