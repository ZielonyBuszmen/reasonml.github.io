webpackJsonp([234],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-map-s-html.json":function(a,p){a.exports={data:{file:{relativePath:"api/MoreLabels.Map.S.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Map.OrderedType.html" title="MoreLabels.Map.OrderedType">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Map.html" title="MoreLabels.Map">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_MoreLabels.Map.S.html">MoreLabels.Map.S</a></h1>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t +&apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> empty: t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> is_empty: t &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> mem: key =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> add: key::key =&gt; data::&apos;a =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> singleton: key =&gt; &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> remove: key =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> merge: f::(key =&gt; option &apos;a =&gt; option &apos;b =&gt; option &apos;c) =&gt; t &apos;a =&gt; t &apos;b =&gt; t &apos;c;\n</pre>\n<pre><span class="keyword">let</span> compare: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; t &apos;a =&gt; t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> equal: cmp::(&apos;a =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(key::key =&gt; data::&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(key::key =&gt; data::&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> for_all: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> exists: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> filter: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> partition: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; (t &apos;a, t &apos;a);\n</pre>\n<pre><span class="keyword">let</span> cardinal: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> bindings: t &apos;a =&gt; list (key, &apos;a);\n</pre>\n<pre><span class="keyword">let</span> min_binding: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre><span class="keyword">let</span> max_binding: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre><span class="keyword">let</span> choose: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre><span class="keyword">let</span> split: key =&gt; t &apos;a =&gt; (t &apos;a, option &apos;a, t &apos;a);\n</pre>\n<pre><span class="keyword">let</span> find: key =&gt; t &apos;a =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> map: f::(&apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre>\n<pre><span class="keyword">let</span> mapi: f::(key =&gt; &apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Map.S.html"}}}});
//# sourceMappingURL=path---api-more-labels-map-s-html-fe2f386a0bad8c4cc5c3.js.map