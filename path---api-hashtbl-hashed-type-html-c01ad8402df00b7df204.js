webpackJsonp([277],{"./node_modules/json-loader/index.js!./.cache/json/api-hashtbl-hashed-type-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Hashtbl.HashedType.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Hashtbl.html" title="Hashtbl">Up</a>\n&#xA0;<a class="post" href="Hashtbl.S.html" title="Hashtbl.S">Next</a>\n</div>\n<h1>Module type <a href="type_Hashtbl.HashedType.html">Hashtbl.HashedType</a></h1>\n\n<pre><span class="keyword">module</span> type HashedType = sig .. end</pre><div class="info modtype top">\nThe input signature of the functor <a href="Hashtbl.Make.html"><code class="code">Hashtbl.Make</code></a>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of the hashtable keys.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> equal: t =&gt; t =&gt; bool;\n</pre><div class="info ">\nThe equality predicate used to compare keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> hash: t =&gt; int;\n</pre><div class="info ">\nA hashing function on keys. It must be such that if two keys are\n          equal according to <code class="code">equal</code>, then they have identical hash values\n          as computed by <code class="code">hash</code>.\n          Examples: suitable (<code class="code">equal</code>, <code class="code">hash</code>) pairs for arbitrary key\n          types include<ul>\n<li>        (<code class="code">(=)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>) for comparing objects by structure\n              (provided objects do not contain floats)</li>\n<li>        (<code class="code">(fun x y -&gt; compare x y = 0)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>)\n              for comparing objects by structure\n              and handling <a href="Pervasives.html#VALnan"><code class="code">Pervasives.nan</code></a> correctly</li>\n<li>        (<code class="code">(==)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>) for comparing objects by physical\n              equality (e.g. for mutable or cyclic objects).</li>\n</ul>\n<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Hashtbl.HashedType.html"}}}});
//# sourceMappingURL=path---api-hashtbl-hashed-type-html-c01ad8402df00b7df204.js.map