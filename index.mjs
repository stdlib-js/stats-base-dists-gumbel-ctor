// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-entropy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-kurtosis@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mean@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-median@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mode@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-skewness@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-stdev@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-variance@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-cdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logcdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logpdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-mgf@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-pdf@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-quantile@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function x(){var s,e;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!n(e=arguments[0])||r(e))throw new TypeError(y("invalid argument. Location parameter must be a number. Value: `%s`.",e));if(!i(s))throw new TypeError(y("0Vr7u",s))}else e=0,s=1;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!n(t)||r(t))throw new TypeError(y("invalid assignment. Must be a number. Value: `%s`.",t));e=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(y("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),this}e(x.prototype,"entropy",(function(){return m(this.mu,this.beta)})),e(x.prototype,"kurtosis",(function(){return o(this.mu,this.beta)})),e(x.prototype,"mean",(function(){return d(this.mu,this.beta)})),e(x.prototype,"median",(function(){return u(this.mu,this.beta)})),e(x.prototype,"mode",(function(){return p(this.mu,this.beta)})),e(x.prototype,"skewness",(function(){return a(this.mu,this.beta)})),e(x.prototype,"stdev",(function(){return l(this.mu,this.beta)})),e(x.prototype,"variance",(function(){return h(this.mu,this.beta)})),s(x.prototype,"cdf",(function(t){return b(t,this.mu,this.beta)})),s(x.prototype,"logcdf",(function(t){return f(t,this.mu,this.beta)})),s(x.prototype,"logpdf",(function(t){return j(t,this.mu,this.beta)})),s(x.prototype,"mgf",(function(t){return c(t,this.mu,this.beta)})),s(x.prototype,"pdf",(function(t){return g(t,this.mu,this.beta)})),s(x.prototype,"quantile",(function(t){return v(t,this.mu,this.beta)}));export{x as default};
//# sourceMappingURL=index.mjs.map