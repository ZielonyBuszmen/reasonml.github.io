webpackJsonp([286],{"./node_modules/json-loader/index.js!./.cache/json/api-camlinternal-oo-html.json":function(n,t){n.exports={data:{file:{relativePath:"api/CamlinternalOO.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="CamlinternalMod.html" title="CamlinternalMod">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Char.html" title="Char">Next</a>\n</div>\n<h1>Module <a href="type_CamlinternalOO.html">CamlinternalOO</a></h1>\n\n<pre><span class="keyword">module</span> CamlinternalOO: sig .. end</pre><div class="info module top">\nRun-time support for objects and classes.\n    All functions in this module are for system use only, not for the\n    casual user.<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Classes">Classes</h6><br>\n\n<pre><span class="keyword">type</span> tag;\n</pre>\n\n\n<pre><span class="keyword">type</span> label;\n</pre>\n\n\n<pre><span class="keyword">type</span> table;\n</pre>\n\n\n<pre><span class="keyword">type</span> meth;\n</pre>\n\n\n<pre><span class="keyword">type</span> t;\n</pre>\n\n\n<pre><span class="keyword">type</span> obj;\n</pre>\n\n\n<pre><span class="keyword">type</span> closure;\n</pre>\n\n\n<pre><span class="keyword">let</span> public_method_label: string =&gt; tag;\n</pre>\n<pre><span class="keyword">let</span> new_method: table =&gt; label;\n</pre>\n<pre><span class="keyword">let</span> new_variable: table =&gt; string =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> new_methods_variables: table =&gt; array string =&gt; array string =&gt; array label;\n</pre>\n<pre><span class="keyword">let</span> get_variable: table =&gt; string =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> get_variables: table =&gt; array string =&gt; array int;\n</pre>\n<pre><span class="keyword">let</span> get_method_label: table =&gt; string =&gt; label;\n</pre>\n<pre><span class="keyword">let</span> get_method_labels: table =&gt; array string =&gt; array label;\n</pre>\n<pre><span class="keyword">let</span> get_method: table =&gt; label =&gt; meth;\n</pre>\n<pre><span class="keyword">let</span> set_method: table =&gt; label =&gt; meth =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> set_methods: table =&gt; array label =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> narrow: table =&gt; array string =&gt; array string =&gt; array string =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> widen: table =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> add_initializer: table =&gt; (obj =&gt; unit) =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> dummy_table: table;\n</pre>\n<pre><span class="keyword">let</span> create_table: array string =&gt; table;\n</pre>\n<pre><span class="keyword">let</span> init_class: table =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> inherits:\n  table =&gt;\n  array string =&gt;\n  array string =&gt;\n  array string =&gt;\n  (t, table =&gt; obj =&gt; Obj.t, t, obj) =&gt;\n  bool =&gt;\n  array Obj.t;\n</pre>\n<pre><span class="keyword">let</span> make_class:\n  array string =&gt; (table =&gt; Obj.t =&gt; t) =&gt; (t, table =&gt; Obj.t =&gt; t, Obj.t =&gt; t, Obj.t);\n</pre>\n<pre><span class="keyword">type</span> init_table;\n</pre>\n\n\n<pre><span class="keyword">let</span> make_class_store: array string =&gt; (table =&gt; t) =&gt; init_table =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> dummy_class: (string, int, int) =&gt; (t, table =&gt; Obj.t =&gt; t, Obj.t =&gt; t, Obj.t);\n</pre><br>\n<h6 id="6_Objects">Objects</h6><br>\n\n<pre><span class="keyword">let</span> copy: ({..} as &apos;a) =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> create_object: table =&gt; obj;\n</pre>\n<pre><span class="keyword">let</span> create_object_opt: obj =&gt; table =&gt; obj;\n</pre>\n<pre><span class="keyword">let</span> run_initializers: obj =&gt; table =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> run_initializers_opt: obj =&gt; obj =&gt; table =&gt; obj;\n</pre>\n<pre><span class="keyword">let</span> create_object_and_run_initializers: obj =&gt; table =&gt; obj;\n</pre>\n<pre><span class="keyword">let</span> send: obj =&gt; tag =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> sendcache: obj =&gt; tag =&gt; t =&gt; int =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> sendself: obj =&gt; label =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> get_public_method: obj =&gt; tag =&gt; closure;\n</pre><br>\n<h6 id="6_Tablecache">Table cache</h6><br>\n\n<pre><span class="keyword">type</span> tables;\n</pre>\n\n\n<pre><span class="keyword">let</span> lookup_tables: tables =&gt; array closure =&gt; tables;\n</pre><br>\n<h6 id="6_Builtinstoreducecodesize">Builtins to reduce code size</h6><br>\n\n<pre><span class="keyword">type</span> impl = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SetVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppVarConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppEnvConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppMethConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Closure of closure</code></td>\n\n</tr></tbody></table>\n\n\n<br>\n<h6 id="6_Parameters">Parameters</h6><br>\n\n<pre><span class="keyword">type</span> params = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;compact_table&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;copy_parent&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;clean_when_copying&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;retry_count&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;bucket_small_size&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre><span class="keyword">let</span> params: params;\n</pre><br>\n<h6 id="6_Statistics">Statistics</h6><br>\n\n<pre><span class="keyword">type</span> stats = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>classes&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>methods&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>inst_vars&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre><span class="keyword">let</span> stats: unit =&gt; stats;\n</pre></div>'}}},pathContext:{relativePath:"api/CamlinternalOO.html"}}}});
//# sourceMappingURL=path---api-camlinternal-oo-html-1bbbdad2bb546fa79780.js.map