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

var Gumbel = require( './../lib' );

var gumbel = new Gumbel( 2.0, 4.0 );

var mean = gumbel.mean;
console.log( 'Mean = %d', mean );
// => 'Mean = 4.308862659606131'

var median = gumbel.median;
console.log( 'Median = %d', median );
// => 'Median = 3.4660516823266576'

var s2 = gumbel.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 26.318945069571622'

var y = gumbel.cdf( 0.8 );
console.log( 'F(0.8) = %d', y );
// => 'F(0.8) = 0.25927686599082755'
