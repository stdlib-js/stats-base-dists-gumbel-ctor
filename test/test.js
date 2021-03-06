/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-gumbel-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-gumbel-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-gumbel-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-gumbel-cdf' );
var mgf = require( '@stdlib/stats-base-dists-gumbel-mgf' );
var pdf = require( '@stdlib/stats-base-dists-gumbel-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-gumbel-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-gumbel-skewness' );
var variance = require( '@stdlib/stats-base-dists-gumbel-variance' );
var entropy = require( '@stdlib/stats-base-dists-gumbel-entropy' );
var median = require( '@stdlib/stats-base-dists-gumbel-median' );
var stdev = require( '@stdlib/stats-base-dists-gumbel-stdev' );
var mode = require( '@stdlib/stats-base-dists-gumbel-mode' );
var mean = require( '@stdlib/stats-base-dists-gumbel-mean' );
var Gumbel = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Gumbel, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `mu` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Gumbel( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `beta` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Gumbel( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `mu` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Gumbel( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var gumbel = new Gumbel();
	t.strictEqual( gumbel instanceof Gumbel, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var gumbel = new Gumbel( 2.0, 4.0 );
	t.strictEqual( gumbel instanceof Gumbel, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var gumbel = Gumbel();
	t.strictEqual( gumbel instanceof Gumbel, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	gumbel = Gumbel( 2.0, 4.0 );
	t.strictEqual( gumbel instanceof Gumbel, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var gumbel;

	gumbel = new Gumbel( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( gumbel, 'mu' ), true, 'has property' );
	t.strictEqual( gumbel.mu, 2.0, 'returns expected value' );

	gumbel.mu = 3.0;
	t.strictEqual( gumbel.mu, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var gumbel = new Gumbel();
			gumbel.beta = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var gumbel;

	gumbel = new Gumbel( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( gumbel, 'beta' ), true, 'has property' );
	t.strictEqual( gumbel.beta, 4.0, 'returns expected value' );

	gumbel.beta = 3.0;
	t.strictEqual( gumbel.beta, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `beta` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var gumbel = new Gumbel();
			gumbel.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'entropy' ), true, 'has property' );

	gumbel = new Gumbel();
	t.strictEqual( gumbel.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'kurtosis' ), true, 'has property' );

	gumbel = new Gumbel( 2.0, 4.0 );
	t.strictEqual( gumbel.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'mean' ), true, 'has property' );

	gumbel = new Gumbel();
	t.strictEqual( gumbel.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'median' ), true, 'has property' );

	gumbel = new Gumbel( 5.0, 2.0 );
	t.strictEqual( gumbel.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'mode' ), true, 'has property' );

	gumbel = new Gumbel( 2.0, 3.0 );
	t.strictEqual( gumbel.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'skewness' ), true, 'has property' );

	gumbel = new Gumbel( 0.5, 0.5 );
	t.strictEqual( gumbel.skewness, skewness( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'stdev' ), true, 'has property' );

	gumbel = new Gumbel( 3.0, 1.0 );
	t.strictEqual( gumbel.stdev, stdev( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var gumbel;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'variance' ), true, 'has property' );

	gumbel = new Gumbel( 3.0, 1.0 );
	t.strictEqual( gumbel.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.cdf ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.logcdf ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.logpdf ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.mgf ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.pdf ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var gumbel;
	var y;

	t.strictEqual( hasOwnProp( Gumbel.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Gumbel.prototype.quantile ), true, 'has method' );

	gumbel = new Gumbel();
	y = gumbel.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
