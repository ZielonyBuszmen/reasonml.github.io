webpackJsonp([228],{"./node_modules/json-loader/index.js!./.cache/json/api-num-html.json":function(n,e){n.exports={data:{file:{relativePath:"api/Num.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Bigarray.html" title="Bigarray">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;</div>\n<h1>Module <a href="type_Num.html">Num</a></h1>\n\n<pre><span class="keyword">module</span> Num: sig .. end</pre><div class="info module top">\nOperation on arbitrary-precision numbers.\n<p>\n\n   Numbers (type <code class="code">num</code>) are arbitrary-precision rational numbers,\n   plus the special elements <code class="code">1/0</code> (infinity) and <code class="code">0/0</code> (undefined).<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> num = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int of int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Big_int of Big_int.big_int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ratio of Ratio.ratio</code></td>\n\n</tr></tbody></table>\n\n<div class="info ">\nThe type of numbers.<br>\n</div>\n\n<br>\n<h6 id="6_Arithmeticoperations">Arithmetic operations</h6><br>\n\n<pre><span class="keyword">let</span> (+/): num =&gt; num =&gt; num;\n</pre><div class="info ">\nSame as <a href="Num.html#VALadd_num"><code class="code">Num.add_num</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> add_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nAddition<br>\n</div>\n\n<pre><span class="keyword">let</span> minus_num: num =&gt; num;\n</pre><div class="info ">\nUnary negation.<br>\n</div>\n\n<pre><span class="keyword">let</span> (-/): num =&gt; num =&gt; num;\n</pre><div class="info ">\nSame as <a href="Num.html#VALsub_num"><code class="code">Num.sub_num</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nSubtraction<br>\n</div>\n\n<pre><span class="keyword">let</span> ( */ ): num =&gt; num =&gt; num;\n</pre><div class="info ">\nSame as <a href="Num.html#VALmult_num"><code class="code">Num.mult_num</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> mult_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nMultiplication<br>\n</div>\n\n<pre><span class="keyword">let</span> square_num: num =&gt; num;\n</pre><div class="info ">\nSquaring<br>\n</div>\n\n<pre><span class="keyword">let</span> (//): num =&gt; num =&gt; num;\n</pre><div class="info ">\nSame as <a href="Num.html#VALdiv_num"><code class="code">Num.div_num</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> div_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nDivision<br>\n</div>\n\n<pre><span class="keyword">let</span> quo_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nEuclidean division: quotient.<br>\n</div>\n\n<pre><span class="keyword">let</span> mod_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nEuclidean division: remainder.<br>\n</div>\n\n<pre><span class="keyword">let</span> ( **/ ): num =&gt; num =&gt; num;\n</pre><div class="info ">\nSame as <a href="Num.html#VALpower_num"><code class="code">Num.power_num</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> power_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nExponentiation<br>\n</div>\n\n<pre><span class="keyword">let</span> abs_num: num =&gt; num;\n</pre><div class="info ">\nAbsolute value.<br>\n</div>\n\n<pre><span class="keyword">let</span> succ_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">succ n</code> is <code class="code">n+1</code><br>\n</div>\n\n<pre><span class="keyword">let</span> pred_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">pred n</code> is <code class="code">n-1</code><br>\n</div>\n\n<pre><span class="keyword">let</span> incr_num: Pervasives.ref num =&gt; unit;\n</pre><div class="info ">\n<code class="code">incr r</code> is <code class="code">r:=!r+1</code>, where <code class="code">r</code> is a reference to a number.<br>\n</div>\n\n<pre><span class="keyword">let</span> decr_num: Pervasives.ref num =&gt; unit;\n</pre><div class="info ">\n<code class="code">decr r</code> is <code class="code">r:=!r-1</code>, where <code class="code">r</code> is a reference to a number.<br>\n</div>\n\n<pre><span class="keyword">let</span> is_integer_num: num =&gt; bool;\n</pre><div class="info ">\nTest if a number is an integer<br>\n</div>\n<br>\nThe four following functions approximate a number by an integer :<br>\n\n<pre><span class="keyword">let</span> integer_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">integer_num n</code> returns the integer closest to <code class="code">n</code>. In case of ties,\n   rounds towards zero.<br>\n</div>\n\n<pre><span class="keyword">let</span> floor_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">floor_num n</code> returns the largest integer smaller or equal to <code class="code">n</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> round_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">round_num n</code> returns the integer closest to <code class="code">n</code>. In case of ties,\n   rounds off zero.<br>\n</div>\n\n<pre><span class="keyword">let</span> ceiling_num: num =&gt; num;\n</pre><div class="info ">\n<code class="code">ceiling_num n</code> returns the smallest integer bigger or equal to <code class="code">n</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> sign_num: num =&gt; int;\n</pre><div class="info ">\nReturn <code class="code">-1</code>, <code class="code">0</code> or <code class="code">1</code> according to the sign of the argument.<br>\n</div>\n<br>\n<div class="h7" id="7_Comparisonsbetweennumbers">Comparisons between numbers</div><br>\n\n<pre><span class="keyword">let</span> (=/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> (&lt;/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> (&gt;/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> (&lt;=/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> (&gt;=/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> (&lt;&gt;/): num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> eq_num: num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> lt_num: num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> le_num: num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> gt_num: num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> ge_num: num =&gt; num =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> compare_num: num =&gt; num =&gt; int;\n</pre><div class="info ">\nReturn <code class="code">-1</code>, <code class="code">0</code> or <code class="code">1</code> if the first argument is less than,\n   equal to, or greater than the second argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> max_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nReturn the greater of the two arguments.<br>\n</div>\n\n<pre><span class="keyword">let</span> min_num: num =&gt; num =&gt; num;\n</pre><div class="info ">\nReturn the smaller of the two arguments.<br>\n</div>\n<br>\n<h6 id="6_Coercionswithstrings">Coercions with strings</h6><br>\n\n<pre><span class="keyword">let</span> string_of_num: num =&gt; string;\n</pre><div class="info ">\nConvert a number to a string, using fractional notation.<br>\n</div>\n\n<pre><span class="keyword">let</span> approx_num_fix: int =&gt; num =&gt; string;\n</pre><div class="info ">\nSee <a href="Num.html#VALapprox_num_exp"><code class="code">Num.approx_num_exp</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> approx_num_exp: int =&gt; num =&gt; string;\n</pre><div class="info ">\nApproximate a number by a decimal. The first argument is the\n   required precision. The second argument is the number to\n   approximate. <a href="Num.html#VALapprox_num_fix"><code class="code">Num.approx_num_fix</code></a> uses decimal notation; the first\n   argument is the number of digits after the decimal point.\n   <code class="code">approx_num_exp</code> uses scientific (exponential) notation; the\n   first argument is the number of digits in the mantissa.<br>\n</div>\n\n<pre><span class="keyword">let</span> num_of_string: string =&gt; num;\n</pre><div class="info ">\nConvert a string to a number.\n   Raise <code class="code">Failure &quot;num_of_string&quot;</code> if the given string is not\n   a valid representation of an integer<br>\n</div>\n<br>\n<h6 id="6_Coercionsbetweennumericaltypes">Coercions between numerical types</h6><br>\n\n<pre><span class="keyword">let</span> int_of_num: num =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> num_of_int: int =&gt; num;\n</pre>\n<pre><span class="keyword">let</span> nat_of_num: num =&gt; Nat.nat;\n</pre>\n<pre><span class="keyword">let</span> num_of_nat: Nat.nat =&gt; num;\n</pre>\n<pre><span class="keyword">let</span> num_of_big_int: Big_int.big_int =&gt; num;\n</pre>\n<pre><span class="keyword">let</span> big_int_of_num: num =&gt; Big_int.big_int;\n</pre>\n<pre><span class="keyword">let</span> ratio_of_num: num =&gt; Ratio.ratio;\n</pre>\n<pre><span class="keyword">let</span> num_of_ratio: Ratio.ratio =&gt; num;\n</pre>\n<pre><span class="keyword">let</span> float_of_num: num =&gt; float;\n</pre></div>'}}},pathContext:{relativePath:"api/Num.html"}}}});
//# sourceMappingURL=path---api-num-html-61497237940885d5a614.js.map