function PostService(t,e){return{addPost:function(a){return t({method:"POST",url:e+"/post/add",data:a})},updatePost:function(a){return t({method:"POST",url:e+"/post/update",data:a})},deletePost:function(a){return t({method:"GET",url:e+"/post/delete/"+a})},findOne:function(a){return t({method:"GET",url:e+"/post/findOne/"+a})},findAll:function(){return t.get(e+"/post/findAll")}}}function LoginService(t,e){return{checkLogin:function(a,n){return t({method:"POST",url:e+"/users/login",data:{username:a,password:n}})}}}function prism(){return{restrict:"A",link:function(t,e,a){e.ready(function(){Prism.highlightElement(e[0])})}}}function PostController(t,e,a,n,o,s,i,r){var l=this;l.findOne=function(){s.findOne(n.slug).then(function(t){l.postData=t.data})},l.findAll=function(){s.findAll().then(function(t){l.posts=t.data})},l.addPost=function(t){t.title.length>0&&t.content.length>0&&(t.slug=i.slugify(t.title),s.addPost(t).then(function(t){o.success("The post has been created successfully."),a.go("adminDashboard")}))},l.updatePost=function(t){t.title.length>0&&t.content.length>0&&(t.slug=i.slugify(t.title),s.updatePost(t).then(function(t){o.success("The post has been updated successfully."),a.go("adminDashboard")}))},l.deletePost=function(t){s.deletePost(t).then(function(t){t.data.status&&(o.success("The post has been deleted successfully."),l.findAll())})}}function LoginController(t,e,a,n){var o=this;o.loginError=!1,o.login=function(t){n.checkLogin(t.username,t.password).then(function(t){t.data.status?(e.userData=t.data.user,a.go("adminDashboard")):o.loginError=!0})}}!function(){"use strict";angular.module("portfolio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","slugifier","ngDialog","angular-loading-bar","textAngular","gist","hljs","hc.marked","angular-lightweight-markdown-editor","updateMeta"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=t}angular.module("portfolio").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("portfolio").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,a,n,o){var s,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),s=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){s()})}function a(t,e){function a(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],a()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return a.$inject=["$log","githubContributor"],n}angular.module("portfolio").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,e){function a(a){function o(t){return t.data}function s(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(n+"/contributors?per_page="+a).then(o)["catch"](s)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}angular.module("portfolio").factory("githubContributor",t),t.$inject=["$log","$http"]}(),angular.module("portfolio").factory("PostService",PostService),PostService.$inject=["$http","SERVICE_URL"],angular.module("portfolio").factory("LoginService",LoginService),LoginService.$inject=["$http","SERVICE_URL"],function(){"use strict";function t(t,e,a){function n(){s(),t(function(){i.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function s(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1445447701305,i.showToastr=o,n()}angular.module("portfolio").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),angular.module("portfolio").directive("code",prism),angular.module("portfolio").controller("PostController",PostController),PostController.$inject=["$scope","$rootScope","$state","$stateParams","toastr","PostService","Slug","ngDialog"],angular.module("portfolio").controller("LoginController",LoginController),LoginController.$inject=["$scope","$rootScope","$state","LoginService"];var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var t=/\blang(?:uage)?-(?!\*)(\w+)\b/i,e=_self.Prism={util:{encode:function(t){return t instanceof a?new a(t.type,e.util.encode(t.content),t.alias):"Array"===e.util.type(t)?t.map(e.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]},clone:function(t){var a=e.util.type(t);switch(a){case"Object":var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=e.util.clone(t[o]));return n;case"Array":return t.map&&t.map(function(t){return e.util.clone(t)})}return t}},languages:{extend:function(t,a){var n=e.util.clone(e.languages[t]);for(var o in a)n[o]=a[o];return n},insertBefore:function(t,a,n,o){o=o||e.languages;var s=o[t];if(2==arguments.length){n=arguments[1];for(var i in n)n.hasOwnProperty(i)&&(s[i]=n[i]);return s}var r={};for(var l in s)if(s.hasOwnProperty(l)){if(l==a)for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);r[l]=s[l]}return e.languages.DFS(e.languages,function(e,a){a===o[t]&&e!=t&&(this[e]=r)}),o[t]=r},DFS:function(t,a,n){for(var o in t)t.hasOwnProperty(o)&&(a.call(t,o,t[o],n||o),"Object"===e.util.type(t[o])?e.languages.DFS(t[o],a):"Array"===e.util.type(t[o])&&e.languages.DFS(t[o],a,o))}},plugins:{},highlightAll:function(t,a){for(var n,o=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),s=0;n=o[s++];)e.highlightElement(n,t===!0,a)},highlightElement:function(a,n,o){for(var s,i,r=a;r&&!t.test(r.className);)r=r.parentNode;r&&(s=(r.className.match(t)||[,""])[1],i=e.languages[s]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,r=a.parentNode,/pre/i.test(r.nodeName)&&(r.className=r.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var l=a.textContent,c={element:a,language:s,grammar:i,code:l};if(!l||!i)return void e.hooks.run("complete",c);if(e.hooks.run("before-highlight",c),n&&_self.Worker){var p=new Worker(e.filename);p.onmessage=function(t){c.highlightedCode=t.data,e.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),e.hooks.run("after-highlight",c),e.hooks.run("complete",c)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=e.highlight(c.code,c.grammar,c.language),e.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(a),e.hooks.run("after-highlight",c),e.hooks.run("complete",c)},highlight:function(t,n,o){var s=e.tokenize(t,n);return a.stringify(e.util.encode(s),o)},tokenize:function(t,a){var n=e.Token,o=[t],s=a.rest;if(s){for(var i in s)a[i]=s[i];delete a.rest}t:for(var i in a)if(a.hasOwnProperty(i)&&a[i]){var r=a[i];r="Array"===e.util.type(r)?r:[r];for(var l=0;l<r.length;++l){var c=r[l],p=c.inside,u=!!c.lookbehind,d=0,m=c.alias;c=c.pattern||c;for(var g=0;g<o.length;g++){var f=o[g];if(o.length>t.length)break t;if(!(f instanceof n)){c.lastIndex=0;var h=c.exec(f);if(h){u&&(d=h[1].length);var b=h.index-1+d,h=h[0].slice(d),v=h.length,E=b+v,T=f.slice(0,b+1),A=f.slice(E+1),S=[g,1];T&&S.push(T);var N=new n(i,p?e.tokenize(h,p):h,m);S.push(N),A&&S.push(A),Array.prototype.splice.apply(o,S)}}}}}return o},hooks:{all:{},add:function(t,a){var n=e.hooks.all;n[t]=n[t]||[],n[t].push(a)},run:function(t,a){var n=e.hooks.all[t];if(n&&n.length)for(var o,s=0;o=n[s++];)o(a)}}},a=e.Token=function(t,e,a){this.type=t,this.content=e,this.alias=a};if(a.stringify=function(t,n,o){if("string"==typeof t)return t;if("Array"===e.util.type(t))return t.map(function(e){return a.stringify(e,n,t)}).join("");var s={type:t.type,content:a.stringify(t.content,n,o),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:o};if("comment"==s.type&&(s.attributes.spellcheck="true"),t.alias){var i="Array"===e.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(s.classes,i)}e.hooks.run("wrap",s);var r="";for(var l in s.attributes)r+=(r?" ":"")+l+'="'+(s.attributes[l]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+r+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,o=a.code,s=a.immediateClose;_self.postMessage(e.highlight(o,e.languages[n],n)),s&&_self.close()},!1),_self.Prism):_self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(e.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",e.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m},Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(t){"php"===t.language&&(t.tokenStack=[],t.backupCode=t.code,t.code=t.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(e){return t.tokenStack.push(e),"{{{PHP"+t.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(t){"php"===t.language&&(t.code=t.backupCode,delete t.backupCode)}),Prism.hooks.add("after-highlight",function(t){if("php"===t.language){for(var e,a=0;e=t.tokenStack[a];a++)t.highlightedCode=t.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(e,t.grammar,"php").replace(/\$/g,"$$$$"));t.element.innerHTML=t.highlightedCode}}),Prism.hooks.add("wrap",function(t){"php"===t.language&&"markup"===t.type&&(t.content=t.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(t){if(t.code){var e=t.element.parentNode,a=/\s*\bline-numbers\b\s*/;if(e&&/pre/i.test(e.nodeName)&&(a.test(e.className)||a.test(t.element.className))&&!t.element.querySelector(".line-numbers-rows")){a.test(t.element.className)&&(t.element.className=t.element.className.replace(a,"")),a.test(e.className)||(e.className+=" line-numbers");var n,o=t.code.match(/\n(?!$)/g),s=o?o.length+1:1,i=new Array(s+1);i=i.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=i,e.hasAttribute("data-start")&&(e.style.counterReset="linenumber "+(parseInt(e.getAttribute("data-start"),10)-1)),t.element.appendChild(n)}}})}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("portfolio").run(t).animation(".reveal-animation",function(){return{enter:function(t,e){return t.css("display","none"),t.fadeIn(500,e),function(){t.stop()}},leave:function(t,e){return t.fadeOut(500,e),function(){t.stop()}}}}),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"PostController",controllerAs:"post"}).state("about",{url:"/about",templateUrl:"app/main/about.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/main/portfolio.html",controller:"MainController",controllerAs:"main"}).state("blog",{url:"/blog",templateUrl:"app/main/blog.html",controller:"MainController",controllerAs:"main"}).state("viewPost",{url:"/blog/post/:slug",templateUrl:"app/main/viewPost.html",controller:"PostController",controllerAs:"blogPost"}).state("adminLogin",{url:"/admin/login",templateUrl:"app/admin/login.html",controller:"LoginController",controllerAs:"login"}).state("adminDashboard",{url:"/admin/dashboard",templateUrl:"app/admin/dashboard.html",controller:"LoginController",controllerAs:"login"}).state("addPost",{url:"/admin/post/add",templateUrl:"app/admin/addPost.html",controller:"PostController",controllerAs:"post"}).state("updatePost",{url:"/admin/post/update/:slug",templateUrl:"app/admin/editPost.html",controller:"PostController",controllerAs:"post"}),e.otherwise("/")}angular.module("portfolio").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("portfolio").constant("malarkey",malarkey).constant("moment",moment).constant("SERVICE_URL","https://sumeetbajra.herokuapp.com")}(),function(){"use strict";function t(t,e,a){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0,a.setOptions({gfm:!0,tables:!0,highlight:function(t,e){return e?hljs.highlight(e,t,!0).value:hljs.highlightAuto(t).value}})}angular.module("portfolio").config(t),t.$inject=["$logProvider","toastrConfig","markedProvider"]}(),angular.module("portfolio").run(["$templateCache",function(t){t.put("app/admin/addPost.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div class="admin-select-content"><h3>Add new post</h3><hr><form ng-submit="post.addPost(postData)"><div class="form-group"><label for="title">Title</label> <input type="text" class="form-control input" ng-model="postData.title"></div><div class="form-group"><label for="content">Content</label><text-angular ng-model="postData.content" enable-bootstrap-title="true"></text-angular></div><button class="btn btn-primary">Submit</button> <button class="btn btn-danger" ui-sref="adminDashboard">Cancel</button></form></div></div></div>'),t.put("app/admin/dashboard.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div>Please select page to edit:</div><select class="form-control input" ng-model="selectedPage"><option value="">--Select page--</option><option value="home">Hompage</option><option value="about">About</option><option value="portfolio">Portfolio</option><option value="blog">Blog</option></select><div class="admin-select-content edit-blog" ng-controller="PostController as postctrl" ng-init="postctrl.findAll()"><table class="table table-responsive table-bordered table-striped"><thead><tr><td>S.N.</td><td>Title</td><td>Created date</td><td>Actions</td></tr></thead><tbody ng-repeat="post in postctrl.posts"><tr><td>{{$index+1}}</td><td>{{post.title}}</td><td>{{post.created_at | date: \'yyyy-mm-dd hh-mm a\'}}</td><td><button class="btn btn-primary btn-sm" ui-sref="updatePost({slug: post.slug})"><i class="fa fa-pencil"></i></button> <button class="btn btn-danger btn-sm" ng-click="postctrl.deletePost(post._id)"><i class="fa fa-trash"></i></button></td></tr></tbody></table><button class="btn btn-primary" ui-sref="addPost">Add new post</button></div></div></div><script type="text/ng-template" id="templateId"><h3>Confirmation</h3><hr> <p>Are you sure you want to delete this post? You wont be able to revert it back.</p></script>'),t.put("app/admin/editPost.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div class="admin-select-content" ng-init="post.findOne()"><h3>Edit post</h3><hr><form ng-submit="post.updatePost(post.postData)"><div class="form-group"><label for="title">Title</label> <input type="text" class="form-control input" ng-model="post.postData.title"></div><div class="form-group"><label for="content">Content</label><markdown-editor ng-model="post.postData.content"></markdown-editor></div><button class="btn btn-primary">Submit</button> <button class="btn btn-danger" ui-sref="adminDashboard">Cancel</button></form></div></div></div>'),t.put("app/admin/login.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Login</h2><div class="alert alert-danger" ng-if="login.loginError">Sorry, authentication error.</div><form ng-submit="login.login (loginData)"><input class="form-control input" ng-model="loginData.username" placeholder="Username" type="text"><br><input class="form-control input" ng-model="loginData.password" placeholder="Password" type="password"><br><button class="btn btn-primary">Login</button></form></div></div>'),t.put("app/main/about.html",'<div class="portfolio-name">Get to know me</div><div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Hello</h2><p>I am Sumit Bajracharya, a software developer by profession. Donec eu quam tincidunt, ullamcorper mi at, rutrum mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut nisi nisi. Fusce sollicitudin, libero et gravida cursus, nibh magna venenatis eros, ac vehicula libero leo facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam dapibus semper orci, non imperdiet magna egestas non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis diam mauris, pretium ac ornare nec, ultrices ac eros.</p></div></div>'),t.put("app/main/main.html",'<div class="portfolio-name">Hi! I am Sumit Bajracharya.<br>Welcome to my porftolio.</div><div class="col-sm-8 col-sm-offset-2" ng-init="post.findAll()"><div class="recent-work"><h2 class="section-title">SOME OF MY WORKS</h2><div class="content-begin row"><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/1.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/2.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/3.png" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/4.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div></div></div><div class="divider"></div><div class="recent-blog"><h2 class="section-title">recent blog posts</h2><div class="blog-content" ng-repeat="teaser in post.posts"><div class="blog-title"><a ng-href="#/blog/post/{{teaser.slug}}">{{teaser.title}}</a></div><div class="post-meta">Posted on {{teaser.created_at | date:\'dd MMM yyyy\'}} &nbsp;&nbsp; by Sumit Bajracharya<div class="post-meta-share"><span><div class="fb-share-button fb_iframe_widget" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=1651819458366581&amp;container_width=379&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey"><span style="vertical-align: bottom; width: 86px; height: 20px;"><iframe name="f3df534d2c" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" src="http://www.facebook.com/v2.5/plugins/share_button.php?app_id=1651819458366581&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Dfe9e3cc64%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ffd96f2248%26relation%3Dparent.parent&amp;container_width=379&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey" style="border: none; visibility: visible; width: 86px; height: 20px;" class=""></iframe></span></div><script>\n                (function(d, s, id) {\n                  var js, fjs = d.getElementsByTagName(s)[0];\n                  //if (d.getElementById(id)) return;\n                  js = d.createElement(s); js.id = id;\n                  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1651819458366581";\n                  fjs.parentNode.insertBefore(js, fjs);\n                }(document, \'script\', \'facebook-jssdk\'));\n              </script></span> <span><a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a><script src="//platform.twitter.com/widgets.js"></script></span> <span><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><g:plus action="share"></g:plus></span></div><div class="blog-teaser"><div marked="teaser.content | limitTo: 1000"></div><br><button class="btn btn-primary">Read more</button></div></div></div></div></div>'),t.put("app/main/portfolio.html",'<div class="portfolio-name">Some of my works</div><div class="col-sm-10 col-sm-offset-1"><div class="content-begin row"><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/1.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/2.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/3.png" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/4.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div></div></div>'),t.put("app/main/viewPost.html",'<div class="view-blog-content col-sm-8 col-sm-offset-2" ng-init="blogPost.findOne()"><div id="post-title-banner" class="blog-title">{{blogPost.postData.title}}</div><div class="post-meta">Posted on {{blogPost.postData.created_at | date:\'dd MMM yyyy\'}} &nbsp;&nbsp; by Sumit Bajracharya<div class="post-meta-share"><span><div class="fb-share-button fb_iframe_widget" data-title="{{blogPost.postData.title}}" data-href="https://sumeetbajra.github.io/dist/#/post/view/{{blogPost.postData.slug}}" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=1651819458366581&amp;container_width=379&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey"><span style="vertical-align: bottom; width: 86px; height: 20px;"><iframe name="f3df534d2c" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" src="http://www.facebook.com/v2.5/plugins/share_button.php?app_id=1651819458366581&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Dfe9e3cc64%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ffd96f2248%26relation%3Dparent.parent&amp;container_width=379&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey" style="border: none; visibility: visible; width: 86px; height: 20px;" class=""></iframe></span></div><script>\n             (function(d, s, id) {\n               var js, fjs = d.getElementsByTagName(s)[0];\n               //if (d.getElementById(id)) return;\n               js = d.createElement(s); js.id = id;\n               js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1651819458366581";\n               fjs.parentNode.insertBefore(js, fjs);\n             }(document, \'script\', \'facebook-jssdk\'));\n           </script></span> <span><a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a><script src="//platform.twitter.com/widgets.js"></script></span> <span><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><g:plus action="share"></g:plus></span></div></div><div class="blog"><div marked="blogPost.postData.content" class="blog-content"></div></div><h4>Comments</h4><hr><div id="disqus_thread"></div><script>\n      /**\n       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables\n       */\n\n      var disqus_config = function () {\n          //this.page.url = PAGE_URL;  // Replace PAGE_URL with your page\'s canonical URL variable\n          this.page.identifier = blog.postData.slug; // Replace PAGE_IDENTIFIER with your page\'s unique identifier variable\n      };\n\n      (function() {  // DON\'T EDIT BELOW THIS LINE\n          var d = document, s = d.createElement(\'script\');\n\n          s.src = \'//sumeetbajrablog.disqus.com/embed.js\';\n\n          s.setAttribute(\'data-timestamp\', +new Date());\n          (d.head || d.body).appendChild(s);\n      })();\n  </script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript></div>'),
t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-d149e9e0a3.js.map
