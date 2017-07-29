webpackJsonp([45],{"./node_modules/json-loader/index.js!./.cache/json/guide-editor-tools-global-installation.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:0}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching!",order:130}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/language/array.md",childMarkdownRemark:{frontmatter:{title:"Array",order:90}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/more-on-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:120}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/language/list.md",childMarkdownRemark:{frontmatter:{title:"List",order:80}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant",order:70}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}}]},file:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{html:'<p><strong>Before setting up the editor plugins</strong>, you need to install the global binaries needed by them.</p>\n<h3 id="recommended-through-npmyarn"><a href="#recommended-through-npmyarn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>(Recommended) Through Npm/Yarn</h3>\n<table>\n<thead>\n<tr>\n<th>Platform</th>\n<th>Install command</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>OSX</strong></td>\n<td><code>npm install -g https://github.com/reasonml/reason-cli/archive/beta-v-1.13.6-bin-darwin.tar.gz</code></td>\n</tr>\n<tr>\n<td><strong>Linux</strong></td>\n<td><code>npm install -g https://github.com/reasonml/reason-cli/archive/beta-v-1.13.6-bin-linux.tar.gz</code></td>\n</tr>\n</tbody>\n</table>\n<p><strong><code>reason-cli</code> currently doesn\'t work on Windows</strong>, but it\'s not a hard requirement for using Reason; you still have great CLI build system diagnosis messages through BuckleScript, whose npm global package <a href="https://www.npmjs.com/package/bs-platform"><code>bs-platform</code></a> does work on Windows.</p>\n<h3 id="alternative-through-opam"><a href="#alternative-through-opam" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>(Alternative) Through OPAM</h3>\n<p><a href="https://opam.ocaml.org">OPAM</a> is the native package manager for OCaml. If you come from OCaml and don\'t have npm/yarn, use this installation, but be careful about it!</p>\n<p>Make sure you\'re on OCaml <code>4.02.3</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>opam update\nopam add reason.1.13.6\nopam add merlin.2.5.4</code></pre>\n      </div>\n<h3 id="troubleshooting"><a href="#troubleshooting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h3>\n<p>If your editor isn\'t behaving as expected with the above install, do the following:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-built_in">which</span> ocamlmerlin refmt ocamlmerlin-reason <span class="hljs-comment"># It should spit out three paths that contain the word `reason-cli`.</span>\nocamlmerlin -v <span class="hljs-comment"># should say "The Merlin toolkit version 2.5.x, for Ocaml 4.02.3"</span></code></pre>\n      </div>\n<p>Please verify that your installed OCaml version is <code>4.02.x</code> and that Merlin is <code>>=2.5.1</code>.</p>',frontmatter:{title:"Global Installation"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/editor-tools/global-installation.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-editor-tools-global-installation-666e3aac6173ce8743b0.js.map