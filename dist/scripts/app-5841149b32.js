function PostService(t,o){return{addPost:function(e){return t({method:"POST",url:o+"/post/add",data:e})},updatePost:function(e){return t({method:"POST",url:o+"/post/update",data:e})},deletePost:function(e){return t({method:"GET",url:o+"/post/delete/"+e})},findOne:function(e){return t({method:"GET",url:o+"/post/findOne/"+e})},findAll:function(){return t.get(o+"/post/findAll")}}}function LoginService(t,o){return{checkLogin:function(e,s){return t({method:"POST",url:o+"/users/login",data:{username:e,password:s}})}}}function PostController(t,o,e,s,a,n,i,r){var l=this;l.findOne=function(){n.findOne(s.slug).then(function(t){l.postData=t.data,console.log(l.postData)})},l.findAll=function(){n.findAll().then(function(t){l.posts=t.data})},l.addPost=function(t){t.title.length>0&&t.content.length>0&&(t.slug=i.slugify(t.title),n.addPost(t).then(function(t){a.success("The post has been created successfully."),e.go("adminDashboard")}))},l.updatePost=function(t){t.title.length>0&&t.content.length>0&&n.updatePost(t).then(function(t){a.success("The post has been updated successfully."),e.go("adminDashboard")})},l.deletePost=function(t){n.deletePost(t).then(function(t){t.data.status&&(a.success("The post has been deleted successfully."),l.findAll())})}}function LoginController(t,o,e,s){var a=this;a.loginError=!1,a.login=function(t){s.checkLogin(t.username,t.password).then(function(t){t.data.status?(o.userData=t.data.user,e.go("adminDashboard")):a.loginError=!0})}}!function(){"use strict";angular.module("portfolio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","wysiwyg.module","slugifier","ngDialog"])}(),function(){"use strict";function t(){function t(){return o}var o=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=t}angular.module("portfolio").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var o=this;o.relativeDate=t(o.creationDate).fromNow()}var o={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],o}angular.module("portfolio").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function o(o,e,s,a){var n,i=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(o.extraValues,function(t){i.type(t).pause()["delete"]()}),n=o.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),o.$on("$destroy",function(){n()})}function e(t,o){function e(){return s().then(function(){t.info("Activated Contributors View")})}function s(){return o.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],e()}var s={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:e,controllerAs:"vm"};return e.$inject=["$log","githubContributor"],s}angular.module("portfolio").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,o){function e(e){function a(t){return t.data}function n(o){t.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}return e||(e=30),o.get(s+"/contributors?per_page="+e).then(a)["catch"](n)}var s="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:s,getContributors:e};return a}angular.module("portfolio").factory("githubContributor",t),t.$inject=["$log","$http"]}(),angular.module("portfolio").factory("PostService",PostService),PostService.$inject=["$http","SERVICE_URL"],angular.module("portfolio").factory("LoginService",LoginService),LoginService.$inject=["$http","SERVICE_URL"],function(){"use strict";function t(t,o,e){function s(){n(),t(function(){i.classAnimation="rubberBand"},4e3)}function a(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function n(){i.awesomeThings=o.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1445447701305,i.showToastr=a,s()}angular.module("portfolio").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),angular.module("portfolio").controller("PostController",PostController),PostController.$inject=["$scope","$rootScope","$state","$stateParams","toastr","PostService","Slug","ngDialog"],angular.module("portfolio").controller("LoginController",LoginController),LoginController.$inject=["$scope","$rootScope","$state","LoginService"],function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("portfolio").run(t).animation(".reveal-animation",function(){return{enter:function(t,o){return t.css("display","none"),t.fadeIn(500,o),function(){t.stop()}},leave:function(t,o){return t.fadeOut(500,o),function(){t.stop()}}}}),t.$inject=["$log"]}(),function(){"use strict";function t(t,o){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"PostController",controllerAs:"post"}).state("about",{url:"/about",templateUrl:"app/main/about.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/main/portfolio.html",controller:"MainController",controllerAs:"main"}).state("blog",{url:"/blog",templateUrl:"app/main/blog.html",controller:"MainController",controllerAs:"main"}).state("viewPost",{url:"/blog/post/:slug",templateUrl:"app/main/viewPost.html",controller:"PostController",controllerAs:"blogPost"}).state("adminLogin",{url:"/admin/login",templateUrl:"app/admin/login.html",controller:"LoginController",controllerAs:"login"}).state("adminDashboard",{url:"/admin/dashboard",templateUrl:"app/admin/dashboard.html",controller:"LoginController",controllerAs:"login"}).state("addPost",{url:"/admin/post/add",templateUrl:"app/admin/addPost.html",controller:"PostController",controllerAs:"post"}).state("updatePost",{url:"/admin/post/update/:slug",templateUrl:"app/admin/editPost.html",controller:"PostController",controllerAs:"post"}),o.otherwise("/")}angular.module("portfolio").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("portfolio").constant("malarkey",malarkey).constant("moment",moment).constant("SERVICE_URL","https://sumeetbajra.heroku.com")}(),function(){"use strict";function t(t,o){t.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-top-right",o.preventDuplicates=!0,o.progressBar=!0}angular.module("portfolio").config(t),t.$inject=["$logProvider","toastrConfig"]}(),angular.module("portfolio").run(["$templateCache",function(t){t.put("app/admin/addPost.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div class="admin-select-content"><h3>Add new post</h3><hr><form ng-submit="post.addPost(postData)"><div class="form-group"><label for="title">Title</label> <input type="text" class="form-control input" ng-model="postData.title"></div><div class="form-group"><label for="content">Content</label><wysiwyg textarea-id="question" textarea-class="form-control" textarea-height="160px" textarea-name="textareaQuestion" textarea-required="" ng-model="postData.content" enable-bootstrap-title="true"></wysiwyg></div><button class="btn btn-primary">Submit</button> <button class="btn btn-danger" ui-sref="adminDashboard">Cancel</button></form></div></div></div>'),t.put("app/admin/dashboard.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div>Please select page to edit:</div><select class="form-control input" ng-model="selectedPage"><option value="">--Select page--</option><option value="home">Hompage</option><option value="about">About</option><option value="portfolio">Portfolio</option><option value="blog">Blog</option></select><div class="admin-select-content edit-blog" ng-controller="PostController as postctrl" ng-init="postctrl.findAll()"><table class="table table-responsive table-bordered table-striped"><thead><tr><td>S.N.</td><td>Title</td><td>Created date</td><td>Actions</td></tr></thead><tbody ng-repeat="post in postctrl.posts"><tr><td>{{$index+1}}</td><td>{{post.title}}</td><td>{{post.created_at | date: \'yyyy-mm-dd hh-mm a\'}}</td><td><button class="btn btn-primary btn-sm" ui-sref="updatePost({slug: post.slug})"><i class="fa fa-pencil"></i></button> <button class="btn btn-danger btn-sm" ng-click="postctrl.deletePost(post._id)"><i class="fa fa-trash"></i></button></td></tr></tbody></table><button class="btn btn-primary" ui-sref="addPost">Add new post</button></div></div></div><script type="text/ng-template" id="templateId"><h3>Confirmation</h3><hr> <p>Are you sure you want to delete this post? You wont be able to revert it back.</p></script>'),t.put("app/admin/editPost.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Dashboard</h2><br><div>Welcome {{userData.fname}}</div><br><div class="admin-select-content" ng-init="post.findOne()"><h3>Edit post</h3><hr><form ng-submit="post.updatePost(post.postData)"><div class="form-group"><label for="title">Title</label> <input type="text" class="form-control input" ng-model="post.postData.title"></div><div class="form-group"><label for="content">Content</label><wysiwyg textarea-id="question" textarea-class="form-control" textarea-height="160px" textarea-name="textareaQuestion" textarea-required="" ng-model="post.postData.content" enable-bootstrap-title="true"></wysiwyg></div><button class="btn btn-primary">Submit</button> <button class="btn btn-danger" ui-sref="adminDashboard">Cancel</button></form></div></div></div>'),t.put("app/admin/login.html",'<div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Login</h2><div class="alert alert-danger" ng-if="login.loginError">Sorry, authentication error.</div><form ng-submit="login.login (loginData)"><input class="form-control input" ng-model="loginData.username" placeholder="Username" type="text"><br><input class="form-control input" ng-model="loginData.password" placeholder="Password" type="password"><br><button class="btn btn-primary">Login</button></form></div></div>'),t.put("app/main/about.html",'<div class="portfolio-name">Get to know me</div><div class="col-sm-10 col-sm-offset-1"><div class="content-begin"><h2 class="section-title">Hello</h2><p>I am Sumit Bajracharya, a software developer by profession. Donec eu quam tincidunt, ullamcorper mi at, rutrum mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut nisi nisi. Fusce sollicitudin, libero et gravida cursus, nibh magna venenatis eros, ac vehicula libero leo facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam dapibus semper orci, non imperdiet magna egestas non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis diam mauris, pretium ac ornare nec, ultrices ac eros.</p></div></div>'),t.put("app/main/main.html",'<div class="portfolio-name">Hi! I am Sumit Bajracharya.<br>Welcome to my porftolio.</div><div class="col-sm-8 col-sm-offset-2" ng-init="post.findAll()"><div class="recent-work"><h2 class="section-title">SOME OF MY WORKS</h2><div class="content-begin row"><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/1.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/2.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/3.png" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/4.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div></div></div><div class="divider"></div><div class="recent-blog"><h2 class="section-title">recent blog posts</h2><div class="blog-content" ng-repeat="teaser in post.posts"><div class="blog-title"><a ng-href="#/blog/post/{{teaser.slug}}">{{teaser.title}}</a></div><div class="post-meta">Posted on {{teaser.created_at | date:\'dd MMM yyyy\'}} &nbsp;&nbsp; by Sumit Bajracharya<div class="post-meta-share"><span><div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count"></div><script>\n              (function(d, s, id) {\n                var js, fjs = d.getElementsByTagName(s)[0];\n                //if (d.getElementById(id)) return;\n                js = d.createElement(s); js.id = id;\n                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1651819458366581";\n                fjs.parentNode.insertBefore(js, fjs);\n              }(document, \'script\', \'facebook-jssdk\'));\n            </script></span> <span><a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a><script src="//platform.twitter.com/widgets.js"></script></span> <span><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><g:plus action="share"></g:plus></span></div><div class="blog-teaser"><p ng-bind-html="teaser.content | limitTo: 1000"></p><br><button class="btn btn-primary">Read more</button></div></div></div></div></div>'),t.put("app/main/portfolio.html",'<div class="portfolio-name">Some of my works</div><div class="col-sm-10 col-sm-offset-1"><div class="content-begin row"><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/1.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/2.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/3.png" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div><div class="col-md-4 portfolio-box"><a href="#"><img src="assets/images/4.jpg" class="img-responsive"><div class="portfolio-cover">Visit Site</div></a></div></div></div>'),t.put("app/main/viewPost.html",'<div class="view-blog-content col-sm-8 col-sm-offset-2" ng-init="blogPost.findOne()"><div id="post-title-banner" class="blog-title">{{blogPost.postData.title}}</div><div class="post-meta">Posted on {{blogPost.postData.created_at | date:\'dd MMM yyyy\'}} &nbsp;&nbsp; by Sumit Bajracharya<div class="post-meta-share"><span><div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count"></div><script>\n          (function(d, s, id) {\n            var js, fjs = d.getElementsByTagName(s)[0];\n            //if (d.getElementById(id)) return;\n            js = d.createElement(s); js.id = id;\n            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1651819458366581";\n            fjs.parentNode.insertBefore(js, fjs);\n          }(document, \'script\', \'facebook-jssdk\'));\n        </script></span> <span><a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a><script src="//platform.twitter.com/widgets.js"></script></span> <span><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><g:plus action="share"></g:plus></span></div></div><div class="blog"><p ng-bind-html="blogPost.postData.content"></p><br></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-5841149b32.js.map
