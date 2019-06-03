(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/canvas/canvas.component */ "./src/app/components/canvas/canvas.component.ts");











var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'canvas', component: _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"] },
    { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__["FeedbackComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n</div>\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'MetaGene';
        this.message = "Generating Visualization!Please Wait";
    }
    AppComponent.prototype.visualize = function () {
        this.message = "Generating Visualization!Please Wait";
    };
    AppComponent.prototype.meta = function () {
        this.message = "Querying Data!Please Wait";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var angular_json_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-json-table */ "./node_modules/angular-json-table/fesm5/angular-json-table.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/canvas/canvas.component */ "./src/app/components/canvas/canvas.component.ts");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/script-loader.service */ "./src/app/services/script-loader.service.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_16__["HelpComponent"],
                _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_17__["FeedbackComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_21__["ProgressBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"],
                angular_json_table__WEBPACK_IMPORTED_MODULE_5__["JSONTableModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services_script_loader_service__WEBPACK_IMPORTED_MODULE_23__["ScriptLoaderService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/canvas/canvas.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\r\n    margin: 10px;\r\n  }\r\n  \r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin {\r\n    margin: 0 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oMiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-md-8.5 card bg-light\" style=\"margin-top:2%;margin-left:1vw;float:left;padding:2vw;\">\n  <div *ngFor=\"let key of keys\"><p><span style=\"font-weight:600\">{{key}}:</span> {{description[key]}}</p></div>\n  <div><a class ='btn bg-success' href=\"/static/assets/json/dataset.csv\">Download Pivoted Table</a></div>\n</div>\n\n<div  [innerHTML]=\"safeHtml(graph)\" id=\"graphdiv\" class=\"container row card bg-light\" style=\"float:left;margin-top:4%;margin-bottom:4%;margin-left:1vw\"></div>\n<div class=\"row col-md-7\" style=\"margin-bottom:4%\">\n<div *ngIf=\"!add\" (click)=\"gettitle()\"  class=\"btn bg-danger row\"  style=\"float:left;margin-top:1vh;margin-bottom:4%;margin-left:1vw\" >Add this plot to favourites <i class=\"far fa-star\"></i></div>\n<div *ngIf=\"add\" class=\"card bg-light\" style=\"padding:2%\">\n<form  (submit)=addfav()>\n  <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"title\"/>\n  </div>\n  <input type=\"submit\" style=\"margin-left:40%;\" class=\"btn btn-success\" value=\"Save\">\n </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.ts ***!
  \*******************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(router, dynamicScriptLoader, auth, flash, _sanitizer, spinner) {
        this.router = router;
        this.dynamicScriptLoader = dynamicScriptLoader;
        this.auth = auth;
        this.flash = flash;
        this._sanitizer = _sanitizer;
        this.spinner = spinner;
        this.message = "";
        this.color = 'primary';
        this.mode = 'determinate';
        this.loading = false;
        this.value = 50;
        this.bufferValue = 75;
        this.graph = '';
        this.description = {};
        this.aquired = false;
        this.title = '';
        this.add = false;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.aquired = false;
        this.graph = this.auth.getPlotDOM();
        this.description = JSON.parse(this.auth.getDescription());
        this.keys = Object.keys(this.description);
        this.loadScripts();
    };
    CanvasComponent.prototype.safeHtml = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    CanvasComponent.prototype.loadScripts = function () {
        // You can load multiple scripts by just providing the key as argument into load method of the service
        this.dynamicScriptLoader.load('graph').then(function (data) {
            // Script Loaded Successfully
        }).catch(function (error) { return console.log(error); });
    };
    CanvasComponent.prototype.ngOnDestroy = function () {
    };
    CanvasComponent.prototype.gettitle = function () {
        this.add = true;
    };
    CanvasComponent.prototype.addfav = function () {
        var _this = this;
        this.add = false;
        if (this.auth.isLoggedIn()) {
            var params = {
                'accession': this.description[this.keys[0]],
                'title': this.title
            };
            this.auth.savetofav(params).subscribe(function (data) {
                if (data = 'success') {
                    _this.flash.showFlashMessage({ messages: ["Added to favourites successfully!"],
                        dismissible: true,
                        timeout: 10000,
                        type: 'success' });
                    _this.router.navigateByUrl('dashboard');
                }
                else {
                    _this.flash.showFlashMessage({ messages: ["OOPS! Something went wrong"],
                        dismissible: true,
                        timeout: 10000,
                        type: 'danger' });
                }
            });
        }
        else {
            this.flash.showFlashMessage({ messages: ["To use this feature you have to Signin First!"],
                dismissible: true,
                timeout: 10000,
                type: 'danger' });
        }
    };
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/components/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/components/canvas/canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col col-md-4 card-bg-light \" style=\"margin-top:4%;padding:2vw;\">\n  \n  <ul class=\"list-group\">  \n    <div class=\"bg-danger\" style=\"height:7vh; padding:1vw\"><h4 style=\"color:white;text-align: center\">Favourites <i class=\"far fa-star\"></i></h4></div>\n    <a *ngFor=\"let fav of favs\"   (click)=\"viewfav(fav[1])\" class=\"list-group-item list-group-item-action list-group-item-primary\">{{fav[2]}} ,On Accession:{{fav[3]}}<span class=\"ey\" style=\"color:black;float:right\"><i class=\"fas fa-eye\"></i></span><br><span style=\"color:tomato;font-size: 70%;\">{{fav[0]}}</span></a>\n  </ul>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, flash, router) {
        this.auth = auth;
        this.flash = flash;
        this.router = router;
        this.favs = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadFavs();
    };
    DashboardComponent.prototype.loadFavs = function () {
        var _this = this;
        this.auth.getFavs().subscribe(function (data) {
            if (data['result'] == 'success') {
                _this.favs = data['data'];
            }
        });
    };
    DashboardComponent.prototype.viewfav = function (_id) {
        var _this = this;
        this.auth.viewFav(_id).subscribe(function (data) {
            if (data['result'] == 'success') {
                _this.router.navigateByUrl('canvas');
            }
            else {
                _this.flash.showFlashMessage({ messages: ["Could not generate the plot! Try again"],
                    dismissible: true,
                    timeout: 10000,
                    type: 'danger' });
            }
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/feedback/feedback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row pannel-group\">\n  <div class=\"col col-md-8.5 card bg-light pannel pannel-info\" style=\"margin-top:2%;float:left;padding:2vw;\">\n    <form  (ngSubmit)=\"onFeedBackSubmit()\" enctype=\"multipart/form-data\">\n      <div class=\"form-group\">\n        <label for=\"titile\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"ticket.title\" placeholder=\"Enter Title\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea  rows=\"10\" class=\"form-control\" name=\"description\" [(ngModel)]=\"ticket.description\" placeholder=\"description\"></textarea>\n      </div>\n      <input  type=\"submit\" value=\"Feed Back\" style=\"margin-left:45%;\" class=\"btn bg-primary\"/>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(auth, flash, router) {
        this.auth = auth;
        this.flash = flash;
        this.router = router;
        this.ticket = {
            title: '',
            description: ''
        };
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.onFeedBackSubmit = function () {
        var _this = this;
        this.auth.feedback(this.ticket).subscribe(function (data) {
            if (data['result'] == 'success') {
                _this.flash.showFlashMessage({ messages: ['Thank you! Your Feed Back Was Submitted Successfuly.'],
                    dismissible: true,
                    timeout: 10000,
                    type: 'success' });
                _this.router.navigateByUrl('');
            }
            else {
                _this.flash.showFlashMessage({ messages: ['oops!Some thing Went Wrong.'],
                    dismissible: true,
                    timeout: 10000,
                    type: 'danger' });
            }
        });
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/components/feedback/feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/help/help.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row pannel-group\">\n  <div class=\"col col-md-8.5 card bg-light pannel pannel-info\" style=\"margin-top:2%;float:left;padding:2vw;\">\n    <form  (ngSubmit)=\"onSupportSubmit()\" enctype=\"multipart/form-data\">\n      <div class=\"form-group\">\n        <label for=\"titile\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"ticket.title\" placeholder=\"Enter Title\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea  rows=\"10\" class=\"form-control\" name=\"description\" [(ngModel)]=\"ticket.description\" placeholder=\"description\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"ticket.email\" placeholder=\"Enter Email\"/>\n      </div>\n      <input  type=\"submit\" value=\"Submit Support Ticket\" style=\"margin-left:45%;\" class=\"btn bg-primary\"/>\n\n    </form>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top:1vh;margin-left:0.8vw;margin-bottom:2vw;\"><a class ='btn bg-success' href=\"/static/assets/doc.pdf\">Download Documentation</a></div>\n"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var HelpComponent = /** @class */ (function () {
    function HelpComponent(auth, router, flash) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
        this.ticket = {
            title: '',
            description: '',
            email: ''
        };
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.onSupportSubmit = function () {
        var _this = this;
        this.auth.support(this.ticket).subscribe(function (data) {
            if (data['result'] == 'success') {
                _this.flash.showFlashMessage({ messages: ['Your Support tciket Was Submitted Successfuly! An email will be sent with in 24 hours'],
                    dismissible: true,
                    timeout: 10000,
                    type: 'success' });
                _this.router.navigateByUrl('');
            }
            else {
                _this.flash.showFlashMessage({ messages: ['oops!Some thing Went Wrong.'],
                    dismissible: true,
                    timeout: 10000,
                    type: 'danger' });
            }
        });
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"green\"\ntype=\"line-scale-pulse-out\">\n<p style=\"font-size: 20px; color:white\">{{message}}</p>\n</ngx-spinner>\n\n<div class=\"row container\" style=\"padding:0;margin-left:4vw;\">\n  <div class=\"col col-md-5 card bg-light\" style=\"margin-top:2%;margin-right:1vw;float:left;padding:2vw;\">\n    <p> <span style=\"font-weight:bold;color:mediumblue\">M</span><span>eta</span><span style=\"font-weight:bold;color:yellow\">G</span><span>ene</span> <i class=\"fas fa-burn\" style=\"color:yellow\"></i>  is a micro-array gene expression data visualizer, is capable of visualizing plots related to bio-informatics domain. Verison 1.0 is capable of plotting six kinds of graphs.<span style=\"color:black;font-weight: bold;font-size: 120%\">Get Started by Entering a GEO Accession number!</span></p>\n    <div></div>\n   </div>\n    <div class=\"col col-md-3 card bg-light\" style=\"margin-top:2%;float:left;padding:2vw;\">\n            <form  (ngSubmit)=\"visualize()\" enctype=\"multipart/form-data\">\n                 <div class=\"form-group\">\n                      <label for=\"acnum\">Accession Number</label>\n                      <input type=\"text\" class=\"form-control\" name=\"acnum\" [(ngModel)]=\"details.accnum\" placeholder=\"Enter Accession Number\"/>\n                  </div>\n                  <div style=\"margin-left:30%;\" *ngIf=\"aquired==false\" ><button  (click)=\"getData()\" class=\"btn bg-primary\">Submit</button></div>\n                  <div *ngIf=\"aquired==true\"  class=\"form-group\">\n                      <label for=\"gtype\">Graph Type</label>\n                      <select class=\"form-control\" [(ngModel)]=\"details.gtype\" name=\"gtype\">\n                        <option value=\"scatter\">Scatter plot</option>\n                        <option value=\"heatmap\">HeatMap</option>\n                        <option value=\"box\">Box plot</option>\n                        <option value=\"hist\">Histogram</option>\n                        <option value=\"bar\">Bar Plot</option>\n                      </select> \n                  </div> \n                   \n                   <div *ngIf=\"details.gtype=='scatter'\" class=\"form-group\">\n                    <label for=\"gene1\">Gene 1</label>\n                    <select class=\"form-control\" [(ngModel)]=\"gene1\" name=\"gene1\">\n                        <option *ngFor=\"let gene of genes\" value=\"{{gene}}\">{{gene}}</option>\n                    </select> \n                  </div> \n                  <div *ngIf=\"details.gtype=='scatter'\" class=\"form-group\">\n                  <label for=\"gene1\">Gene 2</label>\n                  <select class=\"form-control\" [(ngModel)]=\"gene2\" name=\"gene2\">\n                    <option *ngFor=\"let gene of genes\" value=\"{{gene}}\">{{gene}}</option>\n                  </select> \n                  </div>  \n                  <div *ngIf=\"details.gtype=='bar'\" class=\"form-group\">\n                    <label for=\"sample\">Sample(Single time point)</label>\n                    <select class=\"form-control\" [(ngModel)]=\"sample\" name=\"sample\">\n                        <option *ngFor=\"let gene of genes\" value=\"{{gene}}\">{{gene}}</option>\n                    </select> \n                  </div> \n                  <div *ngIf=\"details.gtype=='bar'\" class=\"form-group\">\n                    <label for=\"number\">Gene range</label>\n                    <input type=\"number\" class=\"form-control\" name=\"number\" [(ngModel)]=\"details.number[0]\" placeholder=\"From\"/>\n                    <input type=\"number\" class=\"form-control\" name=\"number\" [(ngModel)]=\"details.number[1]\" placeholder=\"To\"/>\n                  </div>\n                  <input *ngIf=\"aquired==true\" type=\"submit\" value=\"visualize\" style=\"margin-left:30%;\" class=\"btn bg-primary\"/>\n\n            </form>         \n  </div>\n \n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, auth, flash, _sanitizer, spinner) {
        this.router = router;
        this.auth = auth;
        this.flash = flash;
        this._sanitizer = _sanitizer;
        this.spinner = spinner;
        //spinner attributes
        this.message = "";
        this.color = 'primary';
        this.mode = 'determinate';
        this.loading = false;
        this.value = 50;
        this.bufferValue = 75;
        this.aquired = false;
        this.sample = '';
        this.details = {
            accnum: '',
            gtype: '',
            genes: [],
            number: [],
            sample: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.message = "Querying Data!Please Wait";
        this.spinner.show();
        this.auth.getMeta(this.details.accnum).subscribe(function (data) {
            _this.genes = data.genes;
            _this.aquired = true;
            _this.spinner.hide();
        });
        return false;
    };
    HomeComponent.prototype.visualize = function () {
        var _this = this;
        this.message = "Generating Visualization!Please Wait";
        this.spinner.show();
        this.details.genes = this.genes;
        this.details.sample = this.sample;
        this.auth.plot(this.details).subscribe(function (data) {
            _this.spinner.hide();
            _this.router.navigate(['canvas']);
        });
        return false;
    };
    HomeComponent.prototype.safeHtml = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-md-5 card bg-light\" style=\"padding-bottom:3px;margin-top: 2%;margin-left: 27%;\">\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n     <label for=\"email\">Email</label>\n     <input type=\"email\" class=\"form-control\" [(ngModel)]=\"credentials.email\"  [ngModelOptions]=\"{standalone: true}\" name=\"email\">\n\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"credentials.password\"   [ngModelOptions]=\"{standalone: true}\" name=\"password\">\n\n </div>\n <input type=\"submit\" style=\"margin-left:40%;\" class=\"btn btn-primary\" value=\"Login\">\n \n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, validate, router, flash) {
        this.auth = auth;
        this.validate = validate;
        this.router = router;
        this.flash = flash;
        this.credentials = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function (data) {
            if (data.token) {
                _this.flash.showFlashMessage({ messages: ['LogIn Sucessfull!!'],
                    dismissible: true,
                    timeout: 10000,
                    type: 'success' });
                _this.router.navigateByUrl('dashboard');
            }
            else {
                _this.flash.showFlashMessage({ messages: ["Invalid Email or Password"],
                    dismissible: true,
                    timeout: 10000,
                    type: 'danger' });
                _this.router.navigateByUrl('login');
            }
        }, function (err) {
            _this.flash.showFlashMessage({ messages: ["Error Logging In"],
                dismissible: true,
                timeout: 10000,
                type: 'danger' });
            _this.router.navigateByUrl('login');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark  \">\n    <a class=\"navbar-brand\" style=\"font-size: 150%;\" href=\"#\"><span style=\"font-weight:bold;color:mediumblue\">M</span>eta<span style=\"font-weight:bold;color:yellow\">G</span>ene <i class=\"fas fa-burn\" style=\"color:yellow\"></i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\" ><i class=\"fas fa-home\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Home</span> <span class=\"sr-only\">(current)</span></a>\n        </li>\n      <!--  <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/canvas\" ><i class=\"fas fa-chart-line\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Canvas</span></a>\n          </li> -->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/help\"><i class=\"fas fa-info-circle\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Help</span></a>\n        </li>\n      \n        <li class=\"nav-item\">\n            <a class=\"nav-link\"  routerLink=\"/feedback\"><i class=\"far fa-comment\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Feedback</span></a>\n          </li>\n        \n        </ul>\n        <ul class=\"navbar-nav mr-right\">\n            <li  *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\"><i class=\"fas fa-tachometer-alt\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Dashboard</span></a>\n              </li>\n              <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"logout()\" href=\"#\"><i class=\"fas fa-sign-out-alt\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Signout</span></a>\n                </li>\n  \n            <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/register\"><i class=\"fas fa-arrow-alt-circle-right\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Register</span></a>\n              </li>\n              <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/login\"><i class=\"fas fa-sign-in-alt\"></i><br><span style=\"font-weight: bolder;font-size:90%\">Signin</span></a>\n              </li>\n        </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, flash, router) {
        this.auth = auth;
        this.flash = flash;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.flash.showFlashMessage({ messages: ['Logged out!'],
            dismissible: true,
            timeout: 4000,
            type: 'success' });
        this.router.navigateByUrl('/');
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-md-5 card bg-light\" style=\"padding-bottom:3px;margin-top: 2%;margin-left: 27%;\">\n<form (ngSubmit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"credentials.name\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Your name\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"email\">email</label>\n        <input type=\"email\" [(ngModel)]=\"credentials.email\" class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"credentials.password\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"New Password\">\n    </div>\n    <input type=\"submit\" style=\"margin-left:40%;\" class=\"btn btn-primary\" value=\"Sign Up\">\n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, flash, validate) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
        this.validate = validate;
        this.credentials = {
            _id: '',
            name: '',
            email: '',
            password: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        alert(this.credentials.name);
        if (!this.validate.validateRegister(this.credentials)) {
            this.flash.showFlashMessage({ messages: ['please fill in all fields'],
                dismissible: true,
                timeout: 10000,
                type: 'danger' });
            return false;
        }
        if (!this.validate.validateEmail(this.credentials.email)) {
            this.flash.showFlashMessage({ messages: ['Please Enter a correct Email'],
                dismissible: true,
                timeout: 10000,
                type: 'danger' });
            return false;
        }
        this.auth.register(this.credentials).subscribe(function () {
            _this.flash.showFlashMessage({ messages: ['Registration Successful'],
                dismissible: true,
                timeout: 10000,
                type: 'success' });
            _this.router.navigateByUrl('/login');
        }, function (err) {
            _this.flash.showFlashMessage({ messages: ['Registration Unsuccssful'],
                dismissible: true,
                timeout: 10000,
                type: 'danger' });
            _this.router.navigateByUrl('/register');
            console.log(err);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl("/");
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    };
    AuthenticationService.prototype.getPlotDOM = function () {
        return localStorage.getItem('plotdiv');
    };
    AuthenticationService.prototype.setPlotDOM = function (div) {
        localStorage.setItem('plotdiv', div);
    };
    AuthenticationService.prototype.setPlotScript = function (script) {
        localStorage.setItem('plotscript', script);
    };
    AuthenticationService.prototype.getPlotScript = function () {
        return localStorage.getItem('plotscript');
    };
    AuthenticationService.prototype.setDescription = function (desc) {
        localStorage.setItem('desc', desc);
    };
    AuthenticationService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    AuthenticationService.prototype.destroyPlot = function () {
        window.localStorage.removeItem('desc');
        window.localStorage.removeItem('plotdiv');
    };
    AuthenticationService.prototype.getDescription = function () {
        return localStorage.getItem('desc');
    };
    AuthenticationService.prototype.saveUser = function (email) {
        localStorage.setItem('user', email);
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.token;
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        var base = this.http.post('users/register', user);
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var base = this.http.post('users/login', user);
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
                _this.saveUser(data.email);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.getMeta = function (accnum) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var accnumm = {
            'accnum': accnum
        };
        headers.append('Content-Type', 'application/json');
        var base = this.http.post('users/meta', accnumm, { headers: headers });
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.description) {
                _this.setDescription(JSON.stringify(res.description));
                return res;
            }
            else {
                return false;
            }
        }));
        return request;
    };
    AuthenticationService.prototype.plot = function (details) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var base = this.http.post('users/plot', details, { headers: headers });
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res) {
                _this.setPlotDOM(String(res.div));
                _this.setPlotScript(String(res.script));
                return true;
            }
            else {
                return false;
            }
        }));
        return request;
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('usertoken');
    };
    AuthenticationService.prototype.feedback = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/feedback', ticket, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthenticationService.prototype.support = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/support', ticket, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthenticationService.prototype.savetofav = function (params) {
        var desc = this.getDescription();
        var div = this.getPlotDOM();
        var script = this.getPlotScript();
        var token = this.getToken();
        var user = this.getUser();
        var title = params['title'];
        var accession = params['accession'];
        var data = {
            'desc': desc,
            'div': div,
            'script': script,
            'email': user,
            'title': title,
            'accession': accession
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/savetofav', data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthenticationService.prototype.getFavs = function () {
        var user = this.getUser();
        var data = {
            'user': user
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getfavs', data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    AuthenticationService.prototype.viewFav = function (_id) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var data = {
            '_id': _id
        };
        headers.append('Content-Type', 'application/json');
        var base = this.http.post('users/viewfav', data, { headers: headers });
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res) {
                _this.setDescription(String(res.description));
                console.log(res.div);
                _this.setPlotDOM(String(res.div));
                _this.setPlotScript(String(res.script));
                return res;
            }
            else {
                return false;
            }
        }));
        return request;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/script-loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/script-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptStore, ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'graph', src: '/static/assets/js/graph.js' }
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptLoaderService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.scripts[name].loaded == true) {
                _this.scripts[name].loaded = false;
            }
            if (!_this.scripts[name].loaded) {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) { //IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    };
    ScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\METAGENE\heroku test\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map