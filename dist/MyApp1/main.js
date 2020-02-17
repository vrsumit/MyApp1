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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "inputCls\r\n{\r\n    border: 2px solid;\r\n}\r\n\r\ndiv.logo-wrapper1{text-align: center;margin: 0px 10px;max-width: 100%;float: left;}\r\n\r\ndiv.logo-wrapper1 img{display: block;margin: 0px auto;width: 40%;}\r\n\r\ndiv.logo-wrapper1 h1{margin: 0px;}\r\n\r\ndiv.logo-wrapper2{text-align: center;margin: 0px 10px;max-width: 100%;float: right;}\r\n\r\ndiv.logo-wrapper2 img{display: block;margin: 0px auto;width: 40%;}\r\n\r\ndiv.logo-wrapper2 h1{margin: 0px;}\r\n\r\ndiv.logo-center-text{\r\n    float:center;text-align: center;margin-left: 10px;margin-right: 10px;\r\n    padding-top: 30px;\r\n    color: white;\r\n    font-size: 22px;\r\n    font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;\r\n}\r\n\r\ndiv.logo-center-text-content{ font-size: 12px; }\r\n\r\n.head-container {\r\n    margin: 0px auto;\r\n    padding: 0px 10px;\r\n    max-width: 960px;\r\n    position: relative;\r\n}\r\n\r\ndiv.navigation-wrapper {\r\n    position: relative;\r\n    margin: 0px 10px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.clear{\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\ndiv.page-header-wrapper{\r\n    /* position: absolute; */\r\n    left: 0px;right: 0px;z-index: 99;\r\n    /* opacity: 0.65; */\r\n\tfilter: alpha(opacity=65);\r\n\t/* position: absolute; */\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n    background-color: #000000b5;\r\n    padding-top: 10px;\r\n}\r\n\r\n/* div.page-header-overlay {\r\n    opacity: 0.65;\r\n\tfilter: alpha(opacity=65);\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n    background-color: #000000;\r\n} */\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-wrapper\">\n  <!-- <div class=\"page-header-overlay\"></div> -->\n  <div class=\"head-container\">\n    <div class=\"logo-wrapper1\">\n      <img src=\"assets/logo1.png\" alt=\"\">\n    </div>\n    <div class=\"logo-wrapper2\">\n      <img src=\"assets/logo2.png\" alt=\"\">\n    </div>\n    <div class=\"logo-center-text\">\n      <span>Malankara Orthodox Syrian Church\n        <br> Diocese of South-West America</span>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"navigation-wrapper\">\n      <nav id=\"mainNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark\" style=\"background-color: #84130d!important;\">\n        <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active nav-item\" id=\"homeTab\">\n              <a class=\"nav-link\" [routerLink]=\"['/']\">HOME</a>\n            </li>\n            <li class=\"nav-item dropdown\" id=\"regTab\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                REGISTRATION\n              </a>\n              <div class=\"dropdown-menu fontFam\">\n                <a class=\"dropdown-item\" [routerLink]=\"['studentRegistration']\">Student Registration</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['cwcRegistration']\">CWC Registration</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['ovbsRegistration']\">OVBS Registration</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['diplomaRegistration']\">Diploma Registration</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['ttcRegistration']\">TTC Registration</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['textbookOrder']\">Text Book Order</a>\n                <a class=\"dropdown-item\" href=\"#\">Member Registrations</a>\n              </div>\n            </li>\n          </ul>\n          <div class=\"text-right\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"nav-item\" id=\"signinTab\">\n                <a class=\"nav-link\" [routerLink]=\"['register']\">\n                  SIGN UP\n                </a>\n              </li>\n              <li class=\"nav-item\" id=\"loginTab\">\n                <a class=\"nav-link\" [routerLink]=\"['signin']\">\n                  LOGIN\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _portal_admin_portal_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portal-admin/portal-admin.component */ "./src/app/portal-admin/portal-admin.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student-registration/student-registration.component */ "./src/app/student-registration/student-registration.component.ts");
/* harmony import */ var _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cwc-registration/cwc-registration.component */ "./src/app/cwc-registration/cwc-registration.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ovbs-registration/ovbs-registration.component */ "./src/app/ovbs-registration/ovbs-registration.component.ts");
/* harmony import */ var _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./diploma-exam-registration/diploma-exam-registration.component */ "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts");
/* harmony import */ var _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ttc-registration/ttc-registration.component */ "./src/app/ttc-registration/ttc-registration.component.ts");
/* harmony import */ var _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./textbook-order/textbook-order.component */ "./src/app/textbook-order/textbook-order.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _diploma_search_diploma_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./diploma-search/diploma-search.component */ "./src/app/diploma-search/diploma-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
                _portal_portal_component__WEBPACK_IMPORTED_MODULE_10__["PortalComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileSelectDirective"],
                _portal_admin_portal_admin_component__WEBPACK_IMPORTED_MODULE_14__["PortalAdminComponent"],
                _resources_resources_component__WEBPACK_IMPORTED_MODULE_15__["ResourcesComponent"],
                _links_links_component__WEBPACK_IMPORTED_MODULE_16__["LinksComponent"],
                _training_training_component__WEBPACK_IMPORTED_MODULE_17__["TrainingComponent"],
                _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_18__["StudentRegistration"],
                _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_19__["CWCRegistrationComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_20__["EventsComponent"],
                _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_21__["OVBSRegistrationComponent"],
                _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_22__["DiplomaExamRegistrationComponent"],
                _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_23__["TTCRegistrationComponent"],
                _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_24__["TextbookOrderComponent"],
                _diploma_search_diploma_search_component__WEBPACK_IMPORTED_MODULE_26__["DiplomaSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]
            ],
            providers: [
                _test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var src_app_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/portal/portal.component */ "./src/app/portal/portal.component.ts");
/* harmony import */ var src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var src_app_portal_admin_portal_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/portal-admin/portal-admin.component */ "./src/app/portal-admin/portal-admin.component.ts");
/* harmony import */ var src_app_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-registration/student-registration.component */ "./src/app/student-registration/student-registration.component.ts");
/* harmony import */ var _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cwc-registration/cwc-registration.component */ "./src/app/cwc-registration/cwc-registration.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ovbs-registration/ovbs-registration.component */ "./src/app/ovbs-registration/ovbs-registration.component.ts");
/* harmony import */ var _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./diploma-exam-registration/diploma-exam-registration.component */ "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts");
/* harmony import */ var _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ttc-registration/ttc-registration.component */ "./src/app/ttc-registration/ttc-registration.component.ts");
/* harmony import */ var _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./textbook-order/textbook-order.component */ "./src/app/textbook-order/textbook-order.component.ts");
/* harmony import */ var _diploma_search_diploma_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./diploma-search/diploma-search.component */ "./src/app/diploma-search/diploma-search.component.ts");

















var appRoutes = [
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"] },
    { path: 'register', component: src_app_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'portal', component: src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_3__["PortalComponent"] },
    { path: '', component: src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'admin', component: src_app_portal_admin_portal_admin_component__WEBPACK_IMPORTED_MODULE_5__["PortalAdminComponent"] },
    { path: 'resources', component: src_app_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__["ResourcesComponent"] },
    { path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_7__["LinksComponent"] },
    { path: 'training', component: _training_training_component__WEBPACK_IMPORTED_MODULE_8__["TrainingComponent"] },
    { path: 'studentRegistration', component: _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_9__["StudentRegistration"] },
    { path: 'cwcRegistration', component: _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_10__["CWCRegistrationComponent"] },
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_11__["EventsComponent"] },
    { path: 'ovbsRegistration', component: _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_12__["OVBSRegistrationComponent"] },
    { path: 'diplomaRegistration', component: _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_13__["DiplomaExamRegistrationComponent"] },
    { path: 'ttcRegistration', component: _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_14__["TTCRegistrationComponent"] },
    { path: 'textbookOrder', component: _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_15__["TextbookOrderComponent"] },
    { path: 'diplomaSearch', component: _diploma_search_diploma_search_component__WEBPACK_IMPORTED_MODULE_16__["DiplomaSearchComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cwc-registration/cwc-registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cwc-registration/cwc-registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border mt-2rem mb-1rem card p-3 bg-light\">\n    <div>\n        <h3 class=\"text-center header-blue\"> CWC REGISTRATION </h3>\n    </div>\n\n    <form id=\"subscribeForm\" [formGroup]=\"CWCregistrationForm\" (ngSubmit)=\"onSubmit()\">\n        <label class=\"\">Student's Name:</label>\n        <div class=\"row\">\n            <div class=\"form-group col-4\">\n                <input type=\"text\" formControlName=\"fname\" class=\"form-control form-control-sm\" placeholder=\"Enter First Name\" required>\n                <!-- <label for=\"fname\">First</label> -->\n            </div>\n            <div class=\"form-group col-4\">\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"mname\" placeholder=\"Enter Middle Name\" name=\"mname\" required>\n                <!-- <label for=\"mname\"> Middle</label> -->\n                <div class=\"invalid-feedback\">Please fill out this field.</div>\n            </div>\n            <div class=\"form-group col-4\">\n                <input type=\"text\" formControlName=\"lname\" class=\"form-control form-control-sm\" id=\"lname\" placeholder=\"Enter Last Name\"\n                    name=\"lname\" required>\n                <!-- <label for=\"lname\">Last</label> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"email\">Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                placeholder=\"Enter Email ID\" name=\"email\" required>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <!--<div class=\"form-group\">\n            <label for=\"mname\">Student's Middle Name:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"mname\" formControlName=\"mname\" placeholder=\"Enter First Name\" name=\"mname\" required>\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lname\">Student's Last Name:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"lname\" formControlName=\"lname\" placeholder=\"Enter Last Name\" name=\"lname\" required>\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>-->\n        <div class=\"form-row\">\n            <div class=\"form-group col\">\n                <label for=\"p1\">Parish Name:</label>\n                <select class=\"form-control form-control-sm\" formControlName=\"p1\" id=\"p1\">\n                    <option>Select Parish Name</option>\n                    <option>Teachers</option>\n                    <option>Principals</option>\n                    <option>Staff</option>\n                </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"grade1\">Student's Current Grade:</label>\n                <select formControlName=\"grade1\" class=\"form-control form-control-sm\" id=\"grade1\">\n                    <option>Select Student's Current Grade</option>\n                    <option>Grade Pre-KG</option>\n                    <option>Grade KG</option>\n                    <option>Grade 1st</option>\n                    <option>Grade 2nd</option>\n                    <option>Grade 3rd</option>\n                    <option>Grade 4th</option>\n                    <option>Grade 5th</option>\n                    <option>Grade 6th</option>\n                    <option>Grade 7th</option>\n                    <option>Grade 8th</option>\n                    <option>Grade 9th</option>\n                    <option>Grade 10th</option>\n                    <option>Grade 11th</option>\n                    <option>Grade 12th</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"center1\">Testing Center</label>\n                <select formControlName=\"center1\" class=\"form-control form-control-sm\" id=\"center1\">\n                    <option>Select Testing Center</option>\n                    <option>Center 1</option>\n                    <option>Center 2</option>\n                    <option>Center 3</option>\n                    <option>Center 4</option>\n                    <option>Center 5</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label class=\"\" for=\"test1\">Location at which you will be testing:</label>\n                <select formControlName=\"test1\" class=\"form-control form-control-sm\" id=\"test1\">\n                    <option>Select the location at which you will be testing</option>\n                    <option>Location 1</option>\n                    <option>Location 2</option>\n                    <option>Location 3</option>\n                    <option>Location 4</option>\n                    <option>Location 5</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            CWC date :\n            <input placeholder=\"Select date\" type=\"date\" formControlName=\"cwcdate\" class=\"form-control form-control-sm datepicker\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"sel1\">Group of the Student's Registration:</label>\n            <select formControlName=\"sel1\" class=\"form-control form-control-sm\" id=\"sel1\">\n                <option>Select the Group of the Student's Registration</option>\n                <option>Group 1</option>\n                <option>Group 2</option>\n                <option>Group 3</option>\n                <option>Group 4</option>\n            </select>\n        </div>\n        <div>\n            <h5>Events</h5>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input name=\"list\" type=\"checkbox\" class=\"form-check-input\" data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"Some content\"\n                    value=\"\">Drawing ( Drawing is open to all groups )\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input name=\"list\" type=\"checkbox\" class=\"form-check-input\" value=\"\">Bible Quiz ( Bible Quiz is open to Groups 2-7 )\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input name=\"list\" type=\"checkbox\" class=\"form-check-input\" value=\"\">Essay Writing ( Essay Writing is open to Groups 4 -7 )\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input name=\"list\" type=\"checkbox\" class=\"form-check-input\" value=\"\">Story Writing ( Story Writing is open to Groups 4 -7 )\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input name=\"list\" type=\"checkbox\" class=\"form-check-input\" value=\"\">Poetry Writing ( Poetry is open to Groups 4 -7 )\n            </label>\n        </div>\n\n        <!--<div class=\"container\">\n    <div class=\"row\">\n        <div class='col-sm-6'>\n            <div class=\"form-group\">\n                <div class='input-group date' id='datetimepicker1'>\n                    <input type='text' class=\"form-control form-control-sm\" />\n                    <span class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>-->\n\n        <!--<div class=\"form-group\">\n      <label for=\"contact\">Contact No:</label>\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"contact\" formControlName=\"contact\" NumbersOnly placeholder=\"Enter Contact No\"\n        name=\"contact\" required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>-->\n        <!--<div class=\"form-group form-check\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"checkbox\" formControlName = \"agree\" name=\"remember\" required> I agree.\n        <div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n      </label>\n    </div>-->\n        <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-primary btn-blue float-right btn-primary-spacing mt-3\">Register</button>\n        <!--[disabled]=\"!CWCregistrationForm.valid\"-->\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/cwc-registration/cwc-registration.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cwc-registration/cwc-registration.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cwc-registration/cwc-registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cwc-registration/cwc-registration.component.ts ***!
  \****************************************************************/
/*! exports provided: CWCRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CWCRegistrationComponent", function() { return CWCRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CWCRegistrationComponent = /** @class */ (function () {
    function CWCRegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.CWCregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            parish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tcenter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cwcdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    CWCRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.CWCregistrationForm.invalid) {
            return;
        }
        ;
    };
    CWCRegistrationComponent.prototype.submit = function () {
        //   $("#subscribeForm").validate({
        //     rules: {
        //         list: {
        //             required: true,
        //             minlength: 1
        //         }
        //      }
        //  });
        if (this.CWCregistrationForm.invalid) {
            return;
        }
        // else{
        //   this.router.navigate(['/signin']);
        // }
        //this.CWCregistrationForm.reset(); 
    };
    CWCRegistrationComponent.prototype.ngOnInit = function () {
        this.CWCregistrationForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tcenter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cwcdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        $("#regTab").addClass("active");
        $("#homeTab").removeClass("active");
        // $(".popover-dismiss").popover({
        //   trigger: 'focus'
        // });
    };
    CWCRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cwc-registration',
            template: __webpack_require__(/*! ./cwc-registration.component.html */ "./src/app/cwc-registration/cwc-registration.component.html"),
            styles: [__webpack_require__(/*! ./cwc-registration.component.scss */ "./src/app/cwc-registration/cwc-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CWCRegistrationComponent);
    return CWCRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/diploma-exam-registration/diploma-exam-registration.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/diploma-exam-registration/diploma-exam-registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border mt-2rem mb-1rem card p-3 bg-light\">\n    <div>\n        <h3 class=\"text-center header-blue\">Diploma Exam Registration</h3>\n        <!-- <p>Please fill completely the name of the student, telephone # and email address. Please take care in giving the email\n            address correctly.</p>\n        <hr class=\"border-dark\"> -->\n    </div>\n\n    <form id=\"subscribeForm\" [formGroup]=\"DEregistrationForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"pname\">Parish Name:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"pname\" formControlName=\"pname\" placeholder=\"Enter Parish Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <label for=\"addr\">Parish Address:</label>\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Address\">\n                <!-- <label>Street Address</label> -->\n            </div>\n            <div class=\"form-group col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Landmark\">\n                <!-- <label>Landmark</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your City\">\n                <!-- <label>City</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your State\">\n                <!-- <label>State</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Zip code\">\n                <!-- <label>Postal/Zip Code</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <select class=\"form-control form-control-sm\">\n                    <option>India</option>\n                    <option>England</option>\n                    <option>Australia</option>\n                </select>\n                <!-- <label>Country</label> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"prname\">Name of Principal:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"prname\" formControlName=\"prname\" placeholder=\"Enter Principal's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"vname\">Name of Vicar:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"vname\" formControlName=\"vname\" placeholder=\"Enter Vicar Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"pemail\">Principal's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"pemail\" formControlName=\"pemail\" [ngClass]=\"{'is-invalid': submitted && f.pemail.errors}\"\n                placeholder=\"Enter Principal's Email ID\" required>\n            <div *ngIf=\"submitted && f.pemail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.pemail.errors.required\">Email is required</div>\n                <div *ngIf=\"f.pemail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mobile1\">Principal's Contact Number: </label>\n            <input type=\"text\" formControlName=\"mobile1\" class=\"form-control form-control-sm\" placeholder=\"Enter Principal's Contact Number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"vname\">Name of Student:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"sname\" formControlName=\"sname\" placeholder=\"Enter Student's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"phonenum1\">Student's Phone Number: </label>\n            <input type=\"text\" formControlName=\"phonenum1\" class=\"form-control form-control-sm\" placeholder=\"Enter Student's Contact Number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"semail\">Student's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"semail\" formControlName=\"semail\" [ngClass]=\"{'is-invalid': submitted && f.semail.errors}\"\n                placeholder=\"Enter Student's Email ID\" required>\n            <div *ngIf=\"submitted && f.semail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.semail.errors.required\">Student's Email is required</div>\n                <div *ngIf=\"f.semail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group w-50\">\n            <label for=\"sele1\">Select Exam Date</label>\n            <select formControlName=\"group\" class=\"form-control form-control-sm\" id=\"sele1\">\n                <option>22/12/2019</option>\n                <option>01/01/2020</option>\n                <option>13/04/2020</option>\n                <option>28/07/2020</option>\n            </select>\n        </div>\n        <button type=\"submit\" (click)=\"register()\" class=\"btn btn-blue btn-primary float-right\">Register</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/diploma-exam-registration/diploma-exam-registration.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/diploma-exam-registration/diploma-exam-registration.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/diploma-exam-registration/diploma-exam-registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiplomaExamRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiplomaExamRegistrationComponent", function() { return DiplomaExamRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiplomaExamRegistrationComponent = /** @class */ (function () {
    function DiplomaExamRegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.DEregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    Object.defineProperty(DiplomaExamRegistrationComponent.prototype, "f", {
        get: function () { return this.DEregistrationForm.controls; },
        enumerable: true,
        configurable: true
    });
    DiplomaExamRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.DEregistrationForm.invalid) {
            return;
        }
        else {
            alert("You have registered Successfully");
            this.DEregistrationForm.reset();
        }
    };
    DiplomaExamRegistrationComponent.prototype.register = function () {
        //   $("#subscribeForm").validate({
        //     rules: {
        //         list: {
        //             required: true,
        //             minlength: 1
        //         }
        //      }
        //  });
        if (this.DEregistrationForm.invalid) {
            return;
        }
    };
    DiplomaExamRegistrationComponent.prototype.ngOnInit = function () {
        this.DEregistrationForm = this.formBuilder.group({
            pname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            phonenum1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonenum2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            semail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            mobile1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DiplomaExamRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diploma-exam-registration',
            template: __webpack_require__(/*! ./diploma-exam-registration.component.html */ "./src/app/diploma-exam-registration/diploma-exam-registration.component.html"),
            styles: [__webpack_require__(/*! ./diploma-exam-registration.component.scss */ "./src/app/diploma-exam-registration/diploma-exam-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DiplomaExamRegistrationComponent);
    return DiplomaExamRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/diploma-search/diploma-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/diploma-search/diploma-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/diploma-search/diploma-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/diploma-search/diploma-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resources']\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">EVENTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">RESOURCES/LINKS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<p>\n  diploma-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/diploma-search/diploma-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/diploma-search/diploma-search.component.ts ***!
  \************************************************************/
/*! exports provided: DiplomaSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiplomaSearchComponent", function() { return DiplomaSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiplomaSearchComponent = /** @class */ (function () {
    function DiplomaSearchComponent() {
    }
    DiplomaSearchComponent.prototype.ngOnInit = function () {
    };
    DiplomaSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diploma-search',
            template: __webpack_require__(/*! ./diploma-search.component.html */ "./src/app/diploma-search/diploma-search.component.html"),
            styles: [__webpack_require__(/*! ./diploma-search.component.css */ "./src/app/diploma-search/diploma-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiplomaSearchComponent);
    return DiplomaSearchComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pl-wrapper{\r\n    /* margin-top: 0px; */\r\n    background: #fff;\r\n    /* margin-bottom: 90px !important; */\r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.pd-wrapper{\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n}\r\n\r\n.total-people{\r\n    /* padding-top: 1.6em; */\r\n    font-size: 1.3em;\r\n    color: #aaa;\r\n}\r\n\r\n.p-table{\r\n    margin-top: 2em;\r\n    width: 100%;\r\n}\r\n\r\n.p-table td{\r\n    border-top: 1px solid #f5f5f5;\r\n    padding: 20px;\r\n}\r\n\r\n.p-icon{\r\n    color: #395c80;\r\n}\r\n\r\n.p-name{\r\n    font-size: 15pt;\r\n}\r\n\r\n.textCenter{\r\n    text-align: center;\r\n}\r\n\r\n.mt-0_5em{\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.fw-500{\r\n    font-weight: 500;\r\n}\r\n\r\n.e-width{\r\n    width: 60%;\r\n}\r\n\r\n.per-wrapper{\r\n    /* margin-top: 0px; */\r\n    background: #fff;\r\n    /* margin-bottom: 90px !important; */\r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.per-profile-top {\r\n    padding-bottom: 2em;\r\n    margin-bottom: 1em;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.per-profile{\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n    width: 100%;\r\n    padding: 4px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.2);\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n.person-name {\r\n    margin: 0em 0em 0.4em 0em;\r\n    padding: 0em;\r\n    line-height: 1em;\r\n    font-size: 3em;\r\n}\r\n\r\n.person-details {\r\n    margin-left: .3em;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.person-details-item {\r\n    margin: .7em 0em;\r\n}\r\n\r\n.person-secondary-details {\r\n    color: #999;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.person-secondary-details-head {\r\n    font-size: 1.4em;\r\n    padding: 0.8em 1em;\r\n    border-radius: 5px;\r\n    background-color: #F4F8FA;\r\n    color: #555861;\r\n}\r\n\r\n.per-table{\r\n    border-bottom: 1px solid #eee;\r\n    color: #999 !important;\r\n}\r\n\r\n.pl5{\r\n    padding-left: 5%;\r\n}\r\n\r\n.e-total-att{\r\n    padding-bottom: 1em;\r\n    /* margin-top: 2em; */\r\n    /* border-top: 1px solid #eee; */\r\n    color: #999;\r\n    font-size: 1.2em;\r\n    \r\n}\r\n\r\n.e-border-none{\r\n    border-bottom: none;\r\n}\r\n\r\n.e-yes{\r\n    color: #2bbbad;\r\n}\r\n\r\n.e-no{\r\n    color: #ff3547;\r\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resources']\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"showEvents(1)\">EVENTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">COMPETITION/EXAMS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"\" style=\"padding-top: 6rem;\">\n  <div class=\"pl-wrapper mb-5\">\n    <div class=\"total-people\">5 Events</div>\n    <div>\n      <table class=\"p-table\">\n        <tbody>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" (click)=\"openPerson(1)\" class=\"link-blue\">Sunday Service</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">20th Feb 2020</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Centralized Writting Competition</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">25th Feb 2020</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Children's Church</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">5th March 2020</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(2)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" (click)=\"openPerson(2)\" class=\"link-blue\">Teachers Training</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">29th Feb 2020</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(2)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Worship with Communion</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">20th March 2020</div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div id=\"flag1\" class=\"per-wrapper mb-5\">\n    <div class=\"per-profile-top\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4 class=\"person-name\">Sunday Service</h4>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"person-details\">\n            <div class=\"person-details-item\">\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              <span class=\"pl5\">20th Jan 2020 - 24th Jan 2020</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 e-total-att\">\n        <span>Number of Attenders : 6 out of 10</span>\n      </div>\n    </div>\n    <div class=\"row person-secondary-details\">\n      <div class=\"col\">\n        <table class=\"table no_border table-condensed person_details per-table\">\n          <thead>\n            <th class=\"e-border-none\">Attenders</th>\n            <th class=\"e-border-none\">20th Jan</th>\n            <th class=\"e-border-none\">21st Jan</th>\n            <th class=\"e-border-none\">22nd Jan</th>\n            <th class=\"e-border-none\">23rd Jan</th>\n            <th class=\"e-border-none\">24th Jan</th>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Austen, Kate</td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td>Baggins, Frodo</td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n                <td>Boseman, Chadwick</td>\n                <td>\n                  <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>            \n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div id=\"flag2\" class=\"per-wrapper mb-5\">\n    <div class=\"per-profile-top\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4 class=\"person-name\">Teachers Training</h4>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"person-details\">\n            <div class=\"person-details-item\">\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              <span class=\"pl5\">31st Jan 2020 - 3rd Feb 2020</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 e-total-att\">\n        <span>Number of Attenders : 6 out of 10</span>\n      </div>\n    </div>\n    <div class=\"row person-secondary-details\">\n      <div class=\"col\">\n        <table class=\"table no_border table-condensed person_details per-table\">\n          <thead>\n            <th class=\"e-border-none\">Attenders</th>\n            <th class=\"e-border-none\">31st Jan</th>\n            <th class=\"e-border-none\">1st Feb</th>\n            <th class=\"e-border-none\">2nd Feb</th>\n            <th class=\"e-border-none\">3rd Feb</th>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Flintstone, Pebbles</td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td>Flintstone, Wilma</td>\n              <td>\n                <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n              <td>\n                <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n                <td>Halpert, Cecelia</td>\n                <td>\n                  <i class=\"fa fa-times e-no\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n                <td>\n                  <i class=\"fa fa-check e-yes\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".page-header-wrapper").hide();
        var user = localStorage.getItem("user");
        if (user === "event_owner") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".total-people").text("2 Events");
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
    };
    EventsComponent.prototype.setClasses = function (flag) {
        var user = localStorage.getItem("user");
        var classes = "";
        if (flag === 1 && user === "event_owner") {
            classes = "d-none";
        }
        return classes;
    };
    EventsComponent.prototype.openPerson = function (flag) {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").hide();
        if (flag === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
    };
    EventsComponent.prototype.showEvents = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel-inner .carousel-item>img {\r\n  width: 100%\r\n}\r\n\r\n.card-title{\r\n  background-color: #84130d;\r\n  color:white;\r\n  padding: 5px;\r\n}\r\n\r\n.boxShadow {\r\n  -webkit-box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;\r\n  height: 12rem;\r\n}\r\n\r\n.fontFam {\r\n  font-family: Helvetica, Arial, sans-serif !important;\r\n    font-size: 13px !important;\r\n}\r\n\r\n.home-header{\r\n  padding-top: 1rem;padding-bottom: 4rem;\r\n  margin: 0px auto;\r\n    max-width: 1140px;\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--*************** Carousel *******************-->\n<!-- <div class=\"\" style=\"border: 10px solid #395c80;margin-top: 3rem;\">\n  <div id=\"slider\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#slider\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <div class=\"carousel-inner\">\n      <div id=\"slider\" class=\"carousel-item active\">\n        <img class=\"img-responsive mySlides\" style=\"height:400px\" src=\"assets/C1.jpg\">\n      </div>\n      <div id=\"slider\" class=\"carousel-item\">\n        <img class=\"img-responsive mySlides\" style=\"height:400px\" src=\"assets/C2.jpg\">\n      </div>\n      <div id=\"slider\" class=\"carousel-item\">\n        <img class=\"img-responsive mySlides\" style=\"height:400px\" src=\"assets/C3.jpg\">\n      </div>\n      <div id=\"slider\" class=\"carousel-item\">\n        <img class=\"img-responsive mySlides\" style=\"height:400px\" src=\"assets/C4.jpg\">\n      </div>\n    </div>\n\n    <a class=\"carousel-control-prev\" href=\"#slider\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#slider\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</div> -->\n\n<!--*************** Cards *******************-->\n<div class=\"home-header\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body boxShadow\">\n          <h5 class=\"card-title fontFam\">Diocesan Calendar of Events</h5>\n          <p class=\"card-text\">You will get detail information about upcoming events conducted during this year.</p>\n          <a href=\"#\" class=\"card-link\">School Of Servant Leadership</a>\n          <p>February, 5th 2020</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body boxShadow\">\n          <h5 class=\"card-title fontFam\">Quick Links</h5>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <ul>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Abuses Reporting</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Parish services</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Respect Life</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Human Resources</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-sm-6\">\n              <ul>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Cathalic Mutual</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Finance Dept.</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Chancery Bulletin</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"card-link\">Marriage Tribunal</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body boxShadow\">\n          <h5 class=\"card-title fontFam\">Prayer of Our CHURCH</h5>\n          <p class=\"card-text\">Heavenly Father, in every age you have been our refuge. Yet again and still, we stand before you asking for your\n            protection on your holy CHURCH For the victims of abuse and their families, pour out your healing and peace.\n            For the bishops of this country, continue to inspire their decisions, and guide them with your Spirit.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<body>\n<script>\nvar myIndex = 0;\ncarousel();\n\nfunction carousel() {\n  var i;\n  var x = document.getElementsByClassName(\"mySlides\");\n  for (i = 0; i < x.length; i++) {\n    x[i].style.display = \"none\";  \n  }\n  myIndex++;\n  if (myIndex > x.length) {myIndex = 1}    \n  x[myIndex-1].style.display = \"block\";  \n  setTimeout(carousel, 2000); // Change image every 2 seconds\n}\n</script>\n</body>-->"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__("#homeTab").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_1__("#regTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_1__("#loginTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_1__("#signinTab").removeClass("active");
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/links/links.component.css":
/*!*******************************************!*\
  !*** ./src/app/links/links.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    border-bottom: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.light-background {\r\n    --text-color:var(--text-dark-color);--text-grey-color:var(--text-grey-dark-color);--hyperlink-color:var(--hyperlink-dark-color);--hyperlink-hover-color:var(--hyperlink-dark-hover-color);--menu-item-color:var(--menu-item-dark-color);--menu-item-hover-color:var(--menu-item-dark-hover-color);--navbar-background-color:var(--navbar-background-dark-color);--fill-1-color:var(--fill-dark-1-color);--fill-2-color:var(--fill-dark-2-color);--fill-3-color:var(--fill-dark-3-color);--background-1-color:var(--fill-light-1-color);--background-2-color:var(--fill-light-2-color);--background-3-color:var(--fill-light-3-color);--image-placeholder-color:var(--image-placeholder-dark-color);--icon-color:var(--icon-dark-color);--icon-background-color:var(--icon-background-dark-color);--icon-border-color:var(--icon-border-dark-color);--border-color:var(--fill-grey-1-color);--button-primary-color:var(--button-primary-dark-color);--button-primary-text-color:var(--button-primary-text-dark-color);--button-primary-hover-color:var(--button-primary-hover-dark-color);--button-primary-hover-text-color:var(--button-primary-hover-text-dark-color);--button-secondary-color:var(--button-secondary-dark-color);--button-secondary-text-color:var(--button-secondary-text-dark-color);--button-secondary-hover-color:var(--button-secondary-hover-dark-color);--button-secondary-hover-text-color:var(--button-secondary-hover-text-dark-color);--button-list-color:var(--button-list-dark-color);--button-list-text-color:var(--button-list-text-dark-color);--button-list-hover-color:var(--button-list-hover-dark-color);--button-list-hover-text-color:var(--button-list-hover-text-dark-color)}\r\n\r\n.dark-background {\r\n    --text-color:var(--text-light-color);--text-grey-color:var(--text-grey-light-color);--hyperlink-color:var(--hyperlink-light-color);--hyperlink-hover-color:var(--hyperlink-light-hover-color);--menu-item-color:var(--menu-item-light-color);--menu-item-hover-color:var(--menu-item-light-hover-color);--navbar-background-color:var(--navbar-background-light-color);--fill-1-color:var(--fill-light-1-color);--fill-2-color:var(--fill-light-2-color);--fill-3-color:var(--fill-light-3-color);--background-1-color:var(--fill-dark-1-color);--background-2-color:var(--fill-dark-2-color);--background-3-color:var(--fill-dark-3-color);--border-color:var(--fill-grey-1-color);--image-placeholder-color:var(--image-placeholder-light-color);--icon-color:var(--icon-light-color);--icon-background-color:var(--icon-background-light-color);--icon-border-color:var(--icon-border-light-color);--button-primary-color:var(--button-primary-light-color);--button-primary-text-color:var(--button-primary-text-light-color);--button-primary-hover-color:var(--button-primary-hover-light-color);--button-primary-hover-text-color:var(--button-primary-hover-text-light-color);--button-secondary-color:var(--button-secondary-light-color);--button-secondary-text-color:var(--button-secondary-text-light-color);--button-secondary-hover-color:var(--button-secondary-hover-light-color);--button-secondary-hover-text-color:var(--button-secondary-hover-text-light-color);--button-list-color:var(--button-list-light-color);--button-list-text-color:var(--button-list-text-light-color);--button-list-hover-color:var(--button-list-hover-light-color);--button-list-hover-text-color:var(--button-list-hover-text-light-color)}\r\n\r\n*,*:before,*:after {\r\n    box-sizing: border-box\r\n}\r\n\r\nhtml,body {\r\n    overflow-x: hidden\r\n}\r\n\r\nbody {\r\n    background: var(--site-background);\r\n    color: var(--text-color);\r\n    width: 100%;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\nbody.nav-open {\r\n    position: fixed;\r\n    overflow: hidden\r\n}\r\n\r\n.site-disabled-bar__info {\r\n    margin: 8px 0;\r\n    font-family: 'Source Sans pro',Sans-Serif\r\n}\r\n\r\n.text-input {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    border: var(--input-border);\r\n    padding: var(--input-padding);\r\n    border-radius: var(--input-border-radius)\r\n}\r\n\r\n.text-input:focus {\r\n    border-color: var(--input-focus-border-color);\r\n    outline: none\r\n}\r\n\r\niframe {\r\n    border: 0\r\n}\r\n\r\n.social-icon--faithlife {\r\n    color: #5fbc39\r\n}\r\n\r\n:root {\r\n    --display-font-size:48px;--display-line-height:1.3;--display-margin-bottom:8px;--heading-line-height:1.3;--h1-font-size:42px;--h2-font-size:32px;--h3-font-size:28px;--h4-font-size:20px;--h5-font-size:18px;--h6-font-size:16px;--edit-item-width:24px;--group-branding-font-size:20px;--group-branding-line-height:1.3;--fragment-title-font-size:32px;--fragment-title-line-height:1.3;--fragment-title-letter-spacing:unset;--fragment-content-background:transparent;--fragment-content-box-shadow:var(--item-box-shadow);--fragment-content-border:initial;--fragment-content-border-width:0;--fragment-content-border-radius:var(--item-border-radius);--fragment-content-padding:0;--body-text-large-font-size:18px;--body-text-medium-font-size:16px;--body-text-small-font-size:14px;--body-text-line-height:1.3;--ui-large-size:18px;--ui-medium-size:16px;--ui-small-size:12px;--ui-line-height:1;--line-clamp-max-height:3.9em;--hero-sub-header-max-width:600px;--hero-border-radius:var(--item-border-radius);--mobile-nav-height:120px;--hero-buttons-margin:0;--hero-min-height:730px;--header-menu-item-height:32px;--slideout-menu-height:calc(100vh - var(--mobile-nav-height));--slideout-menu-padding:0 24px;--site-background:initial;--edit-item-top:-60px;--edit-item-right:-12px;--item-border-radius:0;--button-display:inline-block;--button-box-shadow:0 0 8px -2px #9b9b9b;--button-border:1px solid;--button-border-radius:3px;--button-padding:12px 24px;--button-min-width:120px;--button-transition:all .15s;--button-secondary-border:2px solid;--button-secondary-background:transparent;--fragment-background:initial;--fragment-column-gutter:32px;--multimedia-embed-background:black;--multimedia-aspect-ratio-percentage:66.66666667%;--fragment-title-margin-bottom:32px;--fragment-title-text-align:center;--fragment-title-text-transform:initial;--fragment-cta-align-items:center;--fragment-cta-justify-content:center;--fragment-cta-button-margin-top:24px;--fragment-cta-title-margin:16px 0 12px;--fragment-view-all-margin-top:32px;--fragment-view-all-text-align:center;--fragment-box-shadow:unset;--fragment-border:unset;--fragment-border-width:unset;--fragment-border-radius:var(--item-border-radius);--vertical-fragment-section-padding:0;--fragment-padding:48px 0;--fragment-image-background-position:center center;--fragment-image-background-size:cover;--fragment-overflow:initial;--fragment-two-col-min-height:auto;--item-box-shadow:none;--item-button-width:auto;--item-icon-display:flex;--item-icon-border:1px solid;--item-icon-border-radius:50%;--item-icon-container-diameter:44px;--item-icon-background-color:transparent;--list-item-justify-content:space-between;--list-item-flex-direction:column;--list-item-align-items:flex-start;--list-item-margin:0;--top-list-item-top-padding:0;--list-item-padding:24px 0;--list-item-details-margin:16px 0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--list-item-border:#dadada solid;--list-item-border-width:0 0 1px;--list-item-border-radius:var(--item-border-radius);--list-item-background:transparent;--list-item-container-width:100%;--list-item-container-align-items:flex-start;--list-item-container-flex-direction:column;--list-item-subtitle-display:flex;--list-item-subtitle-margin:8px 0 0;--button-list-display:block;--button-list-svg-margin:0 0 0 2px;--button-list-border:1px solid;--button-list-border-radius:16px;--button-list-padding:6px 16px;--button-list-margin:12px 0 0;--cta-content-margin:0 auto;--cta-content-height:100%;--cta-content-max-width:520px;--cta-content-text-align:center;--cta-title-margin:0 0 16px;--cta-body-margin:0 0 24px;--cta-body-text-align:center;--cta-background-image-position:absolute;--cta-display:block;--cta-flex-wrap:initial;--cta-content-display:block;--cta-content-flex-direction:initial;--cta-content-justify-content:initial;--cta-content-align-items:initial;--cta-content-padding:32px;--highlight-display:flex;--highlight-flex-direction:column;--highlight-align-items:center;--highlight-justify-content:center;--highlight-content-text-align:center;--highlight-justify-content:normal;--highlight-content-max-width:520px;--highlight-content-margin:16px auto 0;--highlight-title-margin:8px 0;--highlight-button-margin-top:12px;--highlight-border-radius:var(--item-border-radius);--highlight-padding:0;--highlight-background:transparent;--highlight-height:auto;--highlight-view-button-margin-top:16px;--contact-info-container-flex-direction:column;--contact-info-container-justify-content:center;--contact-info-container-align-items:center;--contact-info-item-flex-direction:column;--contact-info-item-justify-content:center;--contact-info-item-align-items:center;--contact-info-item-border:unset;--contact-info-item-border-width:unset;--contact-info-item-border-radius:0;--contact-info-item-margin:0 0 24px;--contact-info-item-padding:0;--contact-info-item-width:unset;--contact-info-item-details-text-align:center;--contact-info-item-details-margin:16px 0 0;--form-container-justify-content:center;--form-container-align-items:center;--form-container-flex-direction:column;--form-container-text-align:center;--form-container-align-items:normal;--form-container-height:auto;--form-justify-content:center;--form-align-items:center;--form-flex-direction:column;--form-input-width:100%;--form-input-margin:0 auto 16px;--form-helper-text-margin:16px 0 0;--form-button-margin:0 auto;--input-border-radius:3px;--input-border:1px solid #ddd;--input-padding:12px;--input-focus-border-color:#278ed4;--service-time-container-margin:16px 0 0 0;--service-times-item-gap:64px;--service-times-item-width:100%;--service-times-item-padding:initial;--service-times-item-box-shadow:initial;--service-times-item-border-radius:initial;--service-times-item-border:initial;--service-times-item-text-align:center;--service-times-item-flex-direction:column;--service-times-item-align-items:center;--service-times-item-time-top-margin:12px;--service-times-item-time-bottom-margin:24px;--service-times-inline-day-display:none;--service-times-icon-display:block;--gallery-grid-row-gap:32px;--gallery-grid-column-gap:32px;--gallery-grid-template-columns:1fr;--grid-item-background:initial;--grid-item-border-width:1px;--grid-item-border-radius:var(--item-border-radius);--grid-item-overflow:inherit;--grid-item-padding:32px;--grid-item-date-margin:0 0 .5rem;--grid-item-title-margin:16px 0 0;--grid-item-title-text-align:center;--grid-item-details-margin:24px 0 0 0;--grid-item-heading-flex:1 0 100%;--grid-item-subtitle-margin:12px 0 0 0;--grid-item-button-container-margin:auto 0 0 0;--grid-item-button-container-padding:16px 0 0 0;--grid-row-gap:24px;--grid-column-gap:32px;--blog-item-image-border-radius:initial;--blog-item-image-height:100%;--blog-item-image-max-height:220px;--blog-grid-item-preview-margin:12px 0;--blog-grid-item-preview-font-size:inherit;--blog-item-details-margin:16px;--blog-list-item-display:block;--blog-list-image-width:100%;--blog-highlight-display:block;--sermon-grid-item-placeholder-height:200px;--sermon-grid-item-media-container-margin:0 0 12px 0;--sermon-grid-item-title-margin:8px 0;--sermon-grid-item-media-container-border-radius:0;--sermon-grid-item-details-margin:0;--verse-image-border-radius:var(--item-border-radius);--header-dropdown-box-shadow:0 10px 20px 0 rgba(0,0,0,0.05);--header-dropdown-text-transform:uppercase;--header-dropdown-border-radius:0;--header-dropdown-border:0;--header-icon-border-radius:5px;--header-default-icon-color:#7a7a7a;--header-menu-item-text-transform:uppercase;--shared-menu-margin:0 0 0 auto;--mobile-header-justify-content:center;--mobile-header-flex-direction:column;--mobile-menu-width:300px;--mobile-menu-top-position:0;--mobile-menu-left-hidden-position:auto;--mobile-menu-right-hidden-position:calc(-1 * var(--mobile-menu-width));--mobile-menu-left-visible-position:auto;--mobile-menu-right-visible-position:0;--mobile-menu-transition:right 400ms ease;--mobile-nav-hamburger-top-position:50%;--mobile-nav-hamburger-left-position:12px;--mobile-nav-hamburger-right-position:0;--mobile-nav-hamburger-transform:translateY(-50%);--mobile-nav-button-text-display:none;--mobile-menu-display:flex;--desktop-header-display:none;--content-container-margin:0 16px;--content-container-max-width:540px;--mosaic-item-width:100%;--mosaic-item-margin:0 0 32px 0}\r\n\r\n@media (min-width: 576px) {\r\n    :root {\r\n        --content-container-margin:0 auto\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    :root {\r\n        --display-font-size:56px;\r\n        --content-container-max-width:720px;--h2-font-size:48px;--mosaic-item-width:46%;--list-item-details-flex-direction:row;--list-item-details-align-items:center;--button-list-margin:0}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    :root {\r\n        --desktop-header-display:flex;\r\n        --mobile-menu-display:none;--content-container-max-width:960px;--mosaic-item-width:31%}\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    :root {\r\n        --content-container-max-width:1140px\r\n    }\r\n}\r\n\r\n.fragment-form-container {\r\n    --fragment-title-margin-bottom:16px}\r\n\r\n.sermons {\r\n    --grid-item-border:none;--grid-item-padding:0;--list-item-container-flex-direction:row;--list-item-details-margin:0 0 0 16px}\r\n\r\n.events,.event-details {\r\n    --highlight-title-margin:4px 0 8px;--event-highlight-details-max-width:80%;--event-highlight-details-margin:8px 0 0 0;--list-item-container-flex-direction:row;--list-item-details-margin:0 0 0 16px;--event-details-display:none;--event-date-inline-display:none;--event-date-square-text-color:var(--icon-color);--event-date-square-display:flex;--event-date-square-justify-content:center;--event-date-square-border:1px solid var(--icon-border-color);--event-date-square-border-radius:5px;--event-date-square-container-diameter:66px;--event-date-square-background:transparent;--event-date-square-multi-day-divider:1px solid var(--icon-border-color);--event-date-square-multi-day-top-padding:2px;--event-date-month-padding:0;--event-date-month-background:transparent;--event-date-small-font-size:12px;--event-date-day-font-size:32px;--event-item-location-margin:0 0 4px 0;--list-item-subtitle-display:block;--event-item-location-date-divider:''}\r\n\r\n.event-details {\r\n    --event-date-square-container-diameter:90px;--event-date-square-margin:0 auto 24px}\r\n\r\n.document-list {\r\n    --item-icon-border-radius:0;--item-icon-container-diameter:32px;--list-item-details-margin:0 0 0 16px;--list-item-container-flex-direction:row}\r\n\r\n.blog-posts {\r\n    --grid-item-border-width:0;--grid-item-padding:0;--highlight-image-container-margin:0;--highlight-title-margin:16px 0 4px;--highlight-content-max-width:none;--highlight-content-text-align:left;--highlight-content-margin:0}\r\n\r\n.blog-highlight:not(.blog-highlight--no-image) {\r\n    --highlight-padding:0;--highlight-content-margin:var(--blog-item-details-margin)}\r\n\r\n.blog-highlight--no-image {\r\n    --blog-highlight-background-width:0;--blog-highlight-background-height:0;--blog-highlight-grid-template-columns:1fr;--highlight-content-text-align:center;--highlight-content-margin:0 auto}\r\n\r\n.cta {\r\n    --fragment-title-margin-bottom:16px}\r\n\r\n.cta--with-image,.fragment-highlight--with-image {\r\n    --background-image-padding:64px 16px;--background-image-max-height:1000px}\r\n\r\n.light-background,.dark-background {\r\n    --fragment-title-text-color:var(--text-color);--list-item-subtitle-color:var(--text-color);--blog-grid-item-title-color:var(--text-color);--grid-item-border:solid var(--fill-2-color);--blog-item-image-container-background:var(--fill-1-color)}\r\n\r\n.light-background .sermons,.dark-background .sermons {\r\n    --multimedia-embed-background:var(--image-placeholder-color)}\r\n\r\n.light-background .sermons {\r\n    --sermon-icon-color:var(--icon-light-color)}\r\n\r\n.dark-background .sermons {\r\n    --sermon-icon-color:var(--icon-dark-color)}\r\n\r\n@media (min-width: 768px) {\r\n    .fragment-12-col {\r\n        --h1-font-size:64px;\r\n        --h2-font-size:48px;--h3-font-size:32px;--h4-font-size:24px;--fragment-title-font-size:48px;--contact-info-container-flex-direction:row;--contact-info-container-align-items:flex-start;--contact-info-item-width:33.33333333%;--contact-info-item-margin:0;--form-flex-direction:row;--form-margin:0 auto;--form-input-width:280px;--form-button-margin:0 16px;--form-input-margin:0;--grid-item-heading-flex:1 0;--grid-item-details-margin:0 0 0 16px;--grid-template-columns:1fr 1fr;--service-times-item-width:33.33333333%;--list-item-flex-direction:row;--list-item-justify-content:space-between;--list-item-align-items:center;--list-item-container-flex-direction:row;--list-item-container-width:100%;--list-item-details-margin:0 24px;--blog-list-item-image-container-margin:0 24px 0 0;--blog-list-item-display:flex;--blog-list-item-width:33.33333333%;--blog-item-image-height:auto;--blog-list-image-width:33.33333333%;--event-details-button-display:initial;--highlight-content-max-width:75%}\r\n\r\n    .fragment-12-col .blog-posts {\r\n        --highlight-flex-direction:row;--highlight-align-items:center;--highlight-image-container-width:100%}\r\n\r\n    .fragment-12-col .blog-posts--few-items {\r\n        --grid-template-columns:1fr 1fr}\r\n\r\n    .fragment-12-col .cta {\r\n        --fragment-padding:64px 0}\r\n\r\n    .fragment-12-col .cta--with-image,.fragment-12-col .fragment-highlight--with-image {\r\n        --background-image-padding:128px 0}\r\n}\r\n\r\n@media (min-width: 768px) and (min-width:768px) {\r\n    .fragment-12-col {\r\n        --highlight-height:auto\r\n    }\r\n\r\n    .fragment-12-col .gallery {\r\n        --gallery-grid-template-columns:repeat(2, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) and (min-width:992px) {\r\n    .fragment-12-col {\r\n        --list-item-container-width:80%;\r\n        --item-icon-container-diameter:54px;--blog-list-item-display:flex;--blog-highlight-preview-margin:0 0 12px;--blog-highlight-display:grid;--blog-highlight-grid-template-columns:1fr 1fr;--blog-highlight-grid-column-gap:24px}\r\n\r\n    .fragment-12-col .blog-list {\r\n        --blog-item-image-height:auto}\r\n\r\n    .fragment-12-col .blog-posts,.fragment-12-col .sermons {\r\n        --grid-template-columns:1fr 1fr 1fr}\r\n\r\n    .fragment-12-col .events,.fragment-12-col .events-details {\r\n        --list-item-details-margin:0 24px;--event-item-location-margin:0 4px 12px 0;--list-item-subtitle-display:flex;--list-item-subtitle-flex-wrap:wrap;--event-item-location-date-divider:' â€¢'}\r\n\r\n    .fragment-12-col .gallery {\r\n        --gallery-grid-template-columns:repeat(3, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .fragment-6-col {\r\n        --form-input-width:280px;\r\n        --form-container-align-items:center;--form-container-height:100%;--contact-info-container-align-items:flex-start;--contact-info-item-margin:0 0 24px;--contact-info-item-details-margin:16px 0 0;--contact-info-item-details-text-align:left;--contact-info-item-width:100%;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--blog-list-image-width:100%;--highlight-justify-content:center;--cta-content-text-align:left;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-6-col .events {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-6-col .fragment-highlight__title {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) {\r\n    .fragment-4-col:not(.fragment-4-col--last) {\r\n        --form-input-width:280px;\r\n        --form-container-align-items:center;--form-container-height:100%;--contact-info-container-align-items:flex-start;--contact-info-item-margin:0 0 24px;--contact-info-item-details-margin:16px 0 0;--contact-info-item-details-text-align:left;--contact-info-item-width:100%;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--blog-list-image-width:100%;--highlight-justify-content:center;--cta-content-text-align:left;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col:not(.fragment-4-col--last) .events {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col:not(.fragment-4-col--last) .fragment-highlight__title {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .fragment-4-col:not(.fragment-4-col--last) {\r\n        --h4-font-size:18px;\r\n        --h5-font-size:16px;--fragment-title-text-align:left;--fragment-title-margin-bottom:24px;--contact-info-item-margin:0 0 24px;--contact-info-item-flex-direction:row;--contact-info-item-details-margin:0 0 0 16px;--contact-info-item-details-text-align:left;--contact-info-container-justify-content:flex-start;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--contact-info-container-align-items:center;--contact-info-item-width:100%;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--service-times-item-gap:32px;--form-align-items:flex-start;--form-container-text-align:left;--form-button-margin:0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col:not(.fragment-4-col--last) .events {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col:not(.fragment-4-col--last) .cta--with-image,.fragment-4-col:not(.fragment-4-col--last) .fragment-highlight--with-image {\r\n        --background-image-padding:96px 12px}\r\n\r\n    .fragment-4-col:not(.fragment-4-col--last) .fragment-highlight__title {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) and (min-width:768px) {\r\n    .fragment-4-col:not(.fragment-4-col--last) {\r\n        --event-item-location-date-divider:' â€¢'\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) {\r\n    .fragment-4-col--last {\r\n        --h1-font-size:64px;\r\n        --h2-font-size:48px;--h3-font-size:32px;--h4-font-size:24px;--fragment-title-font-size:48px;--contact-info-container-flex-direction:row;--contact-info-container-align-items:flex-start;--contact-info-item-width:33.33333333%;--contact-info-item-margin:0;--form-flex-direction:row;--form-margin:0 auto;--form-input-width:280px;--form-button-margin:0 16px;--form-input-margin:0;--grid-item-heading-flex:1 0;--grid-item-details-margin:0 0 0 16px;--grid-template-columns:1fr 1fr;--service-times-item-width:33.33333333%;--list-item-flex-direction:row;--list-item-justify-content:space-between;--list-item-align-items:center;--list-item-container-flex-direction:row;--list-item-container-width:100%;--list-item-details-margin:0 24px;--blog-list-item-image-container-margin:0 24px 0 0;--blog-list-item-display:flex;--blog-list-item-width:33.33333333%;--blog-item-image-height:auto;--blog-list-image-width:33.33333333%;--event-details-button-display:initial;--highlight-content-max-width:75%}\r\n\r\n    .fragment-4-col--last .blog-posts {\r\n        --highlight-flex-direction:row;--highlight-align-items:center;--highlight-image-container-width:100%}\r\n\r\n    .fragment-4-col--last .blog-posts--few-items {\r\n        --grid-template-columns:1fr 1fr}\r\n\r\n    .fragment-4-col--last .cta {\r\n        --fragment-padding:64px 0}\r\n\r\n    .fragment-4-col--last .cta--with-image,.fragment-4-col--last .fragment-highlight--with-image {\r\n        --background-image-padding:128px 0}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) and (min-width:768px) {\r\n    .fragment-4-col--last {\r\n        --highlight-height:auto\r\n    }\r\n\r\n    .fragment-4-col--last .gallery {\r\n        --gallery-grid-template-columns:repeat(2, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) and (min-width:992px) {\r\n    .fragment-4-col--last {\r\n        --list-item-container-width:80%;\r\n        --item-icon-container-diameter:54px;--blog-list-item-display:flex;--blog-highlight-preview-margin:0 0 12px;--blog-highlight-display:grid;--blog-highlight-grid-template-columns:1fr 1fr;--blog-highlight-grid-column-gap:24px}\r\n\r\n    .fragment-4-col--last .blog-list {\r\n        --blog-item-image-height:auto}\r\n\r\n    .fragment-4-col--last .blog-posts,.fragment-4-col--last .sermons {\r\n        --grid-template-columns:1fr 1fr 1fr}\r\n\r\n    .fragment-4-col--last .events,.fragment-4-col--last .events-details {\r\n        --list-item-details-margin:0 24px;--event-item-location-margin:0 4px 12px 0;--list-item-subtitle-display:flex;--list-item-subtitle-flex-wrap:wrap;--event-item-location-date-divider:' â€¢'}\r\n\r\n    .fragment-4-col--last .gallery {\r\n        --gallery-grid-template-columns:repeat(3, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .fragment-4-col--last {\r\n        --h4-font-size:18px;\r\n        --h5-font-size:16px;--fragment-title-text-align:left;--fragment-title-margin-bottom:24px;--contact-info-item-margin:0 0 24px;--contact-info-item-flex-direction:row;--contact-info-item-details-margin:0 0 0 16px;--contact-info-item-details-text-align:left;--contact-info-container-justify-content:flex-start;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--contact-info-container-align-items:center;--contact-info-item-width:100%;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--service-times-item-gap:32px;--form-align-items:flex-start;--form-container-text-align:left;--form-button-margin:0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col--last .events {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col--last .cta--with-image,.fragment-4-col--last .fragment-highlight--with-image {\r\n        --background-image-padding:96px 12px}\r\n\r\n    .fragment-4-col--last .fragment-highlight__title {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) and (min-width:768px) {\r\n    .fragment-4-col--last {\r\n        --event-item-location-date-divider:' â€¢'\r\n    }\r\n}\r\n\r\n.footer {\r\n    --fragment-content-box-shadow:none;--fragment-box-shadow:none}\r\n\r\n.footer .fragment-title {\r\n    --fragment-title-margin-bottom:24px}\r\n\r\n.footer .footer__sections {\r\n    --h4-font-size:var(--body-text-medium-font-size);--fragment-padding:0;--fragment-title-font-size:20px;--fragment-title-text-transform:uppercase;--fragment-content-background:transparent;--fragment-content-padding:0;--item-icon-display:none;--service-times-icon-display:none;--service-times-inline-day-display:inline-block;--service-time-container-margin:0;--service-times-item-gap:16px;--service-times-item-time-top-margin:4px;--service-times-item-time-bottom-margin:12px;--contact-info-item-details-margin:0;--contact-info-item-margin:0 0 16px 0;--hyperlink-color:var(--text-color);--fragment-title-text-align:left;--form-container-justify-content:flex-start;--form-container-align-items:flex-start;--form-align-items:flex-start;--form-input-width:100%;--form-button-margin:0;--contact-info-item-justify-content:normal;--contact-info-item-align-items:flex-start;--contact-info-container-align-items:flex-start;--contact-info-item-details-text-align:left;--service-times-item-text-align:left;--service-times-item-align-items:flex-start}\r\n\r\n.fragment {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--fragment-background);\r\n    box-shadow: var(--fragment-box-shadow);\r\n    border: var(--fragment-border);\r\n    border-width: var(--fragment-border-width);\r\n    border-radius: var(--fragment-border-radius);\r\n    padding: var(--fragment-padding);\r\n    overflow: var(--fragment-overflow);\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n.fragment__content {\r\n    background: var(--fragment-content-background);\r\n    box-shadow: var(--fragment-content-box-shadow);\r\n    border: var(--fragment-content-border);\r\n    border-width: var(--fragment-content-border-width);\r\n    border-radius: var(--fragment-content-border-radius);\r\n    padding: var(--fragment-content-padding)\r\n}\r\n\r\n.fragment-section {\r\n    margin: var(--content-container-margin);\r\n    max-width: var(--content-container-max-width)\r\n}\r\n\r\n.fragment-cta {\r\n    background: var(--fragment-background);\r\n    box-shadow: var(--fragment-box-shadow);\r\n    border: var(--fragment-border);\r\n    border-width: var(--fragment-border-width);\r\n    border-radius: var(--fragment-border-radius);\r\n    padding: var(--fragment-padding);\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-direction: column;\r\n    justify-content: var(--fragment-cta-justify-content);\r\n    align-items: var(--fragment-cta-align-items)\r\n}\r\n\r\n.fragment-cta__icon {\r\n    color: var(--icon-color)\r\n}\r\n\r\n.fragment-cta__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin: var(--fragment-cta-title-margin)\r\n}\r\n\r\n.fragment-cta__subtitle {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-large-size)\r\n}\r\n\r\n.fragment-cta__button {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color);\r\n    margin-top: var(--fragment-cta-button-margin-top)\r\n}\r\n\r\n.fragment-cta__button:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-cta__button:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.fragment-form-button,.highlight-view-button {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    margin-top: var(--highlight-view-button-margin-top)\r\n}\r\n\r\n.fragment-form-button:hover,.highlight-view-button:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-form-button:hover,.highlight-view-button:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-highlight {\r\n    display: flex;\r\n    flex-direction: var(--highlight-flex-direction);\r\n    align-items: var(--highlight-align-items);\r\n    justify-content: var(--highlight-justify-content);\r\n    box-shadow: var(--item-box-shadow);\r\n    border-radius: var(--item-border-radius);\r\n    padding: var(--highlight-padding);\r\n    background: var(--highlight-background);\r\n    height: var(--highlight-height)\r\n}\r\n\r\n.fragment-highlight--with-image {\r\n    padding: var(--background-image-padding);\r\n    background-position: var(--fragment-image-background-position);\r\n    background-size: var(--fragment-image-background-size)\r\n}\r\n\r\n.fragment-highlight__date {\r\n    margin-bottom: 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-highlight__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    display: block;\r\n    margin: var(--highlight-title-margin)\r\n}\r\n\r\n.fragment-highlight__title:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-highlight__subtitle {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.fragment-highlight__content {\r\n    text-align: var(--highlight-content-text-align);\r\n    max-width: var(--highlight-content-max-width);\r\n    margin: var(--highlight-content-margin)\r\n}\r\n\r\n.fragment-list {\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\n\r\n.fragment-title {\r\n    font-size: var(--fragment-title-font-size);\r\n    line-height: var(--fragment-title-line-height);\r\n    letter-spacing: var(--fragment-title-letter-spacing);\r\n    text-transform: var(--fragment-title-text-transform);\r\n    margin-bottom: var(--fragment-title-margin-bottom);\r\n    text-align: var(--fragment-title-text-align);\r\n    color: var(--fragment-title-text-color)\r\n}\r\n\r\n.fragment-view-all {\r\n    margin-top: var(--fragment-view-all-margin-top);\r\n    text-align: var(--fragment-view-all-text-align)\r\n}\r\n\r\n.fragment-view-all__text {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color)\r\n}\r\n\r\n.fragment-view-all__text:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-view-all__text:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.fragment-item-icon-container {\r\n    display: var(--item-icon-display);\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    border: var(--item-icon-border);\r\n    border-color: var(--icon-border-color);\r\n    border-radius: var(--item-icon-border-radius);\r\n    width: var(--item-icon-container-diameter);\r\n    height: var(--item-icon-container-diameter);\r\n    background-color: var(--item-icon-background-color);\r\n    color: var(--icon-color)\r\n}\r\n\r\na.fragment-item-icon-container:hover {\r\n    border-color: var(--icon-hover-color)\r\n}\r\n\r\na.fragment-item-icon-container .fragment-item-icon {\r\n    color: var(--icon-color)\r\n}\r\n\r\na.fragment-item-icon-container .fragment-item-icon:hover {\r\n    color: var(--icon-color)\r\n}\r\n\r\n.fragment-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    padding: var(--grid-padding);\r\n    -ms-grid-columns: var(--grid-template-columns);\r\n        grid-template-columns: var(--grid-template-columns);\r\n    grid-column-gap: var(--grid-column-gap);\r\n    grid-row-gap: var(--grid-row-gap)\r\n}\r\n\r\n.fragment-grid__item {\r\n    background: var(--grid-item-background);\r\n    border: var(--grid-item-border);\r\n    border-width: var(--grid-item-border-width);\r\n    border-radius: var(--grid-item-border-radius);\r\n    padding: var(--grid-item-padding);\r\n    box-shadow: var(--item-box-shadow);\r\n    overflow: var(--grid-item-overflow)\r\n}\r\n\r\n.button-reset {\r\n    border: none;\r\n    padding: 0;\r\n    background: transparent;\r\n    color: inherit;\r\n    overflow: visible\r\n}\r\n\r\n.button,.button--primary {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center\r\n}\r\n\r\n.button:hover,.button--primary:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.button--secondary {\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color)\r\n}\r\n\r\n.button--secondary:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.button--list {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    display: var(--button-list-display);\r\n    align-items: var(--button-list-align-items);\r\n    line-height: 1;\r\n    border: var(--button-list-border);\r\n    border-color: var(--button-list-color);\r\n    border-radius: var(--button-list-border-radius);\r\n    color: var(--button-list-text-color);\r\n    background: transparent;\r\n    padding: var(--button-list-padding);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: var(--button-list-margin);\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content\r\n}\r\n\r\n.button--list:hover {\r\n    color: var(--button-list-hover-text-color);\r\n    background: var(--button-list-hover-color);\r\n    border-color: var(--button-list-hover-color)\r\n}\r\n\r\n.button--list:hover:link {\r\n    text-decoration: none\r\n}\r\n\r\n.button--list svg {\r\n    margin: var(--button-list-svg-margin)\r\n}\r\n\r\n.button-as-link {\r\n    display: flex;\r\n    align-items: center;\r\n    box-shadow: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    min-width: auto;\r\n    background-color: transparent;\r\n    color: var(--hyperlink-color);\r\n    text-transform: none\r\n}\r\n\r\n.button-as-link:hover,.button-as-link:focus {\r\n    background-color: transparent;\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.desktop-nav__list,.slideout-nav__list {\r\n    margin-bottom: 0\r\n}\r\n\r\n.menu-link {\r\n    font-size: var(--body-text-small-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.menu-link:hover {\r\n    color: var(--menu-item-hover-color);\r\n    text-decoration: none\r\n}\r\n\r\n.desktop-nav__list {\r\n    padding: 0;\r\n    list-style-type: none\r\n}\r\n\r\n.desktop-nav__dropdown {\r\n    width: 224px;\r\n    box-shadow: var(--header-dropdown-box-shadow);\r\n    text-transform: var(--header-dropdown-text-transform);\r\n    border-radius: var(--header-dropdown-border-radius);\r\n    border: var(--header-dropdown-border)\r\n}\r\n\r\n.desktop-nav__item {\r\n    border: none;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    text-transform: var(--header-menu-item-text-transform)\r\n}\r\n\r\n.desktop-nav__dropdown-item::after {\r\n    vertical-align: .15em\r\n}\r\n\r\n.desktop-nav__sub-item {\r\n    padding: 12px;\r\n    white-space: initial\r\n}\r\n\r\n.desktop-nav__sub-item:active,.desktop-nav__sub-item:focus,.desktop-nav__sub-item:hover {\r\n    background-color: transparent\r\n}\r\n\r\n.shared-menus {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: var(--shared-menu-margin);\r\n    position: relative\r\n}\r\n\r\n.shared-menus .slideout-menu {\r\n    top: var(--mobile-menu-top-position);\r\n    left: var(--mobile-menu-left-hidden-position);\r\n    right: var(--mobile-menu-right-hidden-position);\r\n    width: var(--mobile-menu-width);\r\n    transition: var(--mobile-menu-transition);\r\n    height: var(--slideout-menu-height);\r\n    padding: var(--slideout-menu-padding);\r\n    position: absolute\r\n}\r\n\r\n.shared-menus .slideout-menu.show {\r\n    left: var(--mobile-menu-left-visible-position);\r\n    right: var(--mobile-menu-right-visible-position)\r\n}\r\n\r\n.shared-menus .slideout-menu__name {\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.shared-menus .desktop-nav__menu-item {\r\n    padding: 0\r\n}\r\n\r\n.shared-menus .desktop-nav__item-container {\r\n    display: inline-flex;\r\n    padding: 0 12px;\r\n    height: var(--header-menu-item-height);\r\n    align-items: center\r\n}\r\n\r\n.mobile-nav-container {\r\n    position: relative\r\n}\r\n\r\n.shared-mobile-nav {\r\n    display: var(--mobile-menu-display);\r\n    justify-content: var(--mobile-header-justify-content);\r\n    align-items: center;\r\n    flex-direction: var(--mobile-header-flex-direction);\r\n    min-height: var(--mobile-nav-height)\r\n}\r\n\r\n.shared-mobile-nav__icon {\r\n    max-width: 180px\r\n}\r\n\r\n.shared-mobile-nav__button-text {\r\n    display: var(--mobile-nav-button-text-display);\r\n    margin-left: 12px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .shared-mobile-nav__name {\r\n        margin-left:12px\r\n    }\r\n}\r\n\r\n.shared-mobile-nav__name,.shared-mobile-nav__button-text {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height);\r\n    text-transform: var(--mobile-header-text-transform);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.shared-mobile-nav__name:hover,.shared-mobile-nav__button-text:hover {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.shared-mobile-nav__header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.shared-mobile-nav__button {\r\n    top: var(--mobile-nav-hamburger-top-position);\r\n    left: var(--mobile-nav-hamburger-left-position);\r\n    right: var(--mobile-nav-hamburger-right-position);\r\n    -webkit-transform: var(--mobile-nav-hamburger-transform);\r\n    transform: var(--mobile-nav-hamburger-transform);\r\n    z-index: 999\r\n}\r\n\r\n.fragment-periodical-list-item {\r\n    display: flex;\r\n    justify-content: var(--list-item-justify-content);\r\n    flex-direction: var(--list-item-flex-direction);\r\n    align-items: var(--list-item-align-items);\r\n    box-shadow: var(--item-box-shadow);\r\n    border: var(--list-item-border);\r\n    border-width: var(--list-item-border-width);\r\n    border-radius: var(--list-item-border-radius);\r\n    background: var(--list-item-background);\r\n    margin: var(--list-item-margin);\r\n    padding: var(--list-item-padding)\r\n}\r\n\r\n.fragment-periodical-list-item:first-child {\r\n    margin-top: 0;\r\n    padding-top: var(--top-list-item-top-padding)\r\n}\r\n\r\n.fragment-periodical-list-item:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.fragment-periodical-list-item__container {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    align-items: var(--list-item-container-align-items);\r\n    flex-direction: var(--list-item-container-flex-direction);\r\n    width: var(--list-item-container-width)\r\n}\r\n\r\n.fragment-periodical-list-item__date {\r\n    margin-bottom: 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-list-item__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-list-item__title:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-periodical-list-item__details {\r\n    margin: var(--list-item-details-margin);\r\n    flex-direction: var(--list-item-details-flex-direction);\r\n    align-items: var(--list-item-details-align-items);\r\n    word-break: break-word;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: space-between\r\n}\r\n\r\n.fragment-periodical-list-item__subtitle {\r\n    display: var(--list-item-subtitle-display);\r\n    flex-wrap: var(--list-item-subtitle-flex-wrap);\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--list-item-subtitle-margin);\r\n    color: var(--list-item-subtitle-color)\r\n}\r\n\r\n.fragment-periodical-grid-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    word-break: break-word\r\n}\r\n\r\n.fragment-periodical-grid-item__heading {\r\n    display: flex;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.fragment-periodical-grid-item__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    text-align: var(--grid-item-title-text-align)\r\n}\r\n\r\n.fragment-periodical-grid-item__title:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-periodical-grid-item__details {\r\n    margin: var(--grid-item-details-margin);\r\n    flex: var(--grid-item-heading-flex)\r\n}\r\n\r\n.fragment-periodical-grid-item__date {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--grid-item-date-margin);\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-grid-item__subtitle {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--grid-item-subtitle-margin)\r\n}\r\n\r\n.fragment-periodical-grid-item__button-container {\r\n    margin: var(--grid-item-button-container-margin);\r\n    padding: var(--grid-item-button-container-padding)\r\n}\r\n\r\n.fragment-form-container {\r\n    display: flex;\r\n    justify-content: var(--form-container-justify-content);\r\n    flex-direction: var(--form-container-flex-direction);\r\n    text-align: var(--form-container-text-align);\r\n    align-items: var(--form-container-align-items);\r\n    height: var(--form-container-height)\r\n}\r\n\r\n.fragment-form {\r\n    display: flex;\r\n    justify-content: var(--form-justify-content);\r\n    align-items: var(--form-align-items);\r\n    flex-direction: var(--form-flex-direction);\r\n    margin: var(--form-margin);\r\n    width: 100%\r\n}\r\n\r\n.fragment-form__helper-text {\r\n    margin: var(--form-helper-text-margin)\r\n}\r\n\r\n.fragment-form-input {\r\n    width: var(--form-input-width);\r\n    margin: var(--form-input-margin)\r\n}\r\n\r\n.fragment-form-button {\r\n    margin: var(--form-button-margin)\r\n}\r\n\r\n.h1,h1,.h2,h2,.h3,h3,.h4,h4,.h5,h5,.h6,h6,.fragment-title,.page-header {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight)\r\n}\r\n\r\n.display {\r\n    margin-bottom: var(--display-margin-bottom);\r\n    font-family: var(--display-font-family);\r\n    font-weight: var(--display-font-weight);\r\n    font-size: var(--display-font-size);\r\n    line-height: var(--display-line-height)\r\n}\r\n\r\nh1 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h1-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh2 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh3 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh4 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh5 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh6 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h6-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nli,ul,ol {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-small-font-size)\r\n}\r\n\r\na {\r\n    color: var(--hyperlink-color)\r\n}\r\n\r\na:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.rich-text h1 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text h2 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text h3 {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h6-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text p,.rich-text li,.rich-text ul,.rich-text ol,.rich-text a {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.rich-text blockquote {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    border-left: 4px solid var(--fill-1-color);\r\n    padding-left: 16px\r\n}\r\n\r\n.give {\r\n    margin-bottom: 32px;\r\n    background: white\r\n}\r\n\r\n.page {\r\n    padding: var(--page-content-padding, 24px 0);\r\n    max-width: var(--page-max-width);\r\n    min-height: 50vh\r\n}\r\n\r\n.page__icon {\r\n    margin-bottom: 24px\r\n}\r\n\r\n.page--empty {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.page--empty__subtitle {\r\n    margin: 12px 0;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.sermon-details__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 16px\r\n}\r\n\r\n.sermon-details__cover-image {\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n.sermon-details__no-cover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid var(--border-color);\r\n    border-radius: 3px;\r\n    padding: 32px;\r\n    width: 100%;\r\n    min-height: 280px;\r\n    vertical-align: center\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__no-cover {\r\n        flex-direction: row;\r\n        padding: 64px\r\n    }\r\n}\r\n\r\n.sermon-details__no-cover-icon {\r\n    margin: 0 32px 24px 0\r\n}\r\n\r\n.sermon-details__no-cover-date {\r\n    margin-bottom: 8px\r\n}\r\n\r\n.sermon-details__no-cover-speaker {\r\n    margin: 8px 0\r\n}\r\n\r\n.sermon-details__audio {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin: 12px\r\n}\r\n\r\n.sermon-details__actions {\r\n    margin-top: 8px\r\n}\r\n\r\n.sermon-details__embed {\r\n    border-radius: var(--item-border-radius)\r\n}\r\n\r\n.sermon-details__meta {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 24px\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__meta {\r\n        flex-direction: row;\r\n        margin: 32px 0 24px\r\n    }\r\n}\r\n\r\n.sermon-details__meta-divider {\r\n    display: none\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__meta-divider {\r\n        display:inline;\r\n        margin: 0 8px;\r\n        line-height: normal\r\n    }\r\n}\r\n\r\n.sermon-details__preached-date {\r\n    display: inline\r\n}\r\n\r\n.sermon-details__tag {\r\n    display: inline-block;\r\n    border: 1px solid #d6d6d6;\r\n    border-radius: 4px;\r\n    margin: 8px 0 0;\r\n    padding: 8px 12px\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__tag {\r\n        margin-right:8px\r\n    }\r\n}\r\n\r\n.sermon-details__tag:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.sermon-details__share {\r\n    margin: 24px 0\r\n}\r\n\r\n.sermon-details__description {\r\n    border-top: 1px solid var(--border-color);\r\n    margin: 16px 0;\r\n    padding-top: 12px\r\n}\r\n\r\n.event-date-square {\r\n    display: var(--event-date-square-display);\r\n    flex-direction: column;\r\n    justify-content: var(--event-date-square-justify-content);\r\n    border: var(--event-date-square-border);\r\n    border-radius: var(--event-date-square-border-radius);\r\n    width: var(--event-date-square-container-diameter);\r\n    height: var(--event-date-square-container-diameter);\r\n    min-width: var(--event-date-square-container-diameter);\r\n    margin: var(--event-date-square-margin);\r\n    background: var(--event-date-square-background)\r\n}\r\n\r\n.event-date-square__end {\r\n    border-top: var(--event-date-square-multi-day-divider);\r\n    font-size: var(--event-date-small-font-size);\r\n    font-family: var(--ui-font-family);\r\n    color: var(--event-date-square-text-color);\r\n    padding-top: var(--event-date-square-multi-day-top-padding);\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-date-square__day {\r\n    font-size: var(--event-date-day-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--event-date-square-text-color);\r\n    line-height: 1;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-date-square__month {\r\n    font-size: var(--event-date-small-font-size);\r\n    font-family: var(--ui-font-family);\r\n    color: var(--event-date-square-text-color);\r\n    padding: var(--event-date-month-padding);\r\n    background: var(--event-date-month-background);\r\n    border-radius: var(--event-date-square-border-radius) var(--event-date-square-border-radius) 0 0;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-item__date-inline {\r\n    display: var(--event-date-inline-display);\r\n    margin-right: 4px\r\n}\r\n\r\n.event-item__day-of-week {\r\n    margin-right: 4px\r\n}\r\n\r\n.event-item__details {\r\n    display: var(--event-details-display)\r\n}\r\n\r\n.event-item__highlight-details {\r\n    margin: var(--event-highlight-details-margin);\r\n    max-width: var(--event-highlight-details-max-width);\r\n    text-align: var(--highlight-details-text-align)\r\n}\r\n\r\n.event-item__location {\r\n    margin: var(--event-item-location-margin)\r\n}\r\n\r\n.event-item__location:after {\r\n    content: var(--event-item-location-date-divider)\r\n}\r\n\r\n.events-month-view {\r\n    border: var(--events-month-view-border);\r\n    width: 100%\r\n}\r\n\r\n.events-month-view .event-button {\r\n    padding: 12px;\r\n    white-space: nowrap;\r\n    text-align: center\r\n}\r\n\r\n.events-month-view a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.hero {\r\n    border-radius: var(--hero-border-radius);\r\n    background-position: center;\r\n    background-size: cover;\r\n    min-height: var(--hero-min-height)\r\n}\r\n\r\n.hero__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: var(--fragment-padding);\r\n    width: 100%;\r\n    text-align: center;\r\n    flex-grow: 1\r\n}\r\n\r\n.hero__buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: var(--hero-buttons-margin)\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .hero__buttons {\r\n        flex-direction: row;\r\n        justify-content: center\r\n    }\r\n}\r\n\r\n.hero__button {\r\n    display: inline-block;\r\n    margin: 8px 0\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .hero__button {\r\n        margin:16px\r\n    }\r\n}\r\n\r\n.hero__header-text,.hero__sub-header-text {\r\n    color: var(--text-color)\r\n}\r\n\r\n.hero__sub-header-text {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    max-width: var(--hero-sub-header-max-width);\r\n    margin: 0 auto\r\n}\r\n\r\n.hero .text-shadow--light.text-shadow--1 {\r\n    text-shadow: 0 0 6px rgba(255,255,255,0.17)\r\n}\r\n\r\n.hero .text-shadow--light.text-shadow--2 {\r\n    text-shadow: 0 0 8px rgba(255,255,255,0.61)\r\n}\r\n\r\n.hero .text-shadow--light.text-shadow--3 {\r\n    text-shadow: 0 1px 3px #fff\r\n}\r\n\r\n.hero .text-shadow--dark.text-shadow--1 {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.08)\r\n}\r\n\r\n.hero .text-shadow--dark.text-shadow--2 {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.2)\r\n}\r\n\r\n.hero .text-shadow--dark.text-shadow--3 {\r\n    text-shadow: 0 1px 3px #000\r\n}\r\n\r\n.html-fragment-iframe {\r\n    border: 0;\r\n    width: 100%\r\n}\r\n\r\n.google-map__container {\r\n    height: 475px\r\n}\r\n\r\n.google-map label {\r\n    display: inline\r\n}\r\n\r\n.mobile-download-cta {\r\n    position: relative\r\n}\r\n\r\n.mobile-download-cta__link {\r\n    align-items: center;\r\n    margin-right: 8px\r\n}\r\n\r\n.mobile-download-cta__platform-icon {\r\n    margin-right: 4px\r\n}\r\n\r\n.verse-of-the-day__image-container {\r\n    text-align: center\r\n}\r\n\r\n.verse-of-the-day__image {\r\n    max-width: 100%;\r\n    border-radius: var(--verse-image-border-radius)\r\n}\r\n\r\n.cta {\r\n    display: var(--cta-display);\r\n    flex-wrap: var(--cta-flex-wrap);\r\n    padding: var(--fragment-padding);\r\n    align-items: var(--cta-align-items)\r\n}\r\n\r\n.cta--with-image {\r\n    padding: var(--background-image-padding);\r\n    max-height: var(--background-image-max-height)\r\n}\r\n\r\n.cta__background {\r\n    position: var(--cta-background-image-position);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: var(--cta-background-width);\r\n    min-height: var(--cta-min-height);\r\n    background-position: var(--fragment-image-background-position);\r\n    background-size: var(--fragment-image-background-size);\r\n    background-color: var(--fragment-background-color)\r\n}\r\n\r\n.cta__background-image {\r\n    border-radius: var(--item-border-radius)\r\n}\r\n\r\n.cta__content {\r\n    display: var(--cta-content-display);\r\n    flex-direction: var(--cta-content-flex-direction);\r\n    justify-content: var(--cta-content-justify-content);\r\n    align-items: var(--cta-content-align-items);\r\n    flex: var(--cta-content-flex);\r\n    position: relative;\r\n    margin: var(--cta-content-margin);\r\n    padding: var(--cta-content-padding);\r\n    max-width: var(--cta-content-max-width);\r\n    text-align: var(--cta-content-text-align);\r\n    height: var(--cta-content-height)\r\n}\r\n\r\n.cta__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    margin: var(--cta-title-margin)\r\n}\r\n\r\n.cta__body {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    color: var(--text-color);\r\n    margin: var(--cta-body-margin);\r\n    text-align: var(--cta-body-text-align)\r\n}\r\n\r\n.cta .text-shadow--dark.text-shadow--1 .cta__title,.cta .text-shadow--dark.text-shadow--1 .cta__body {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.08)\r\n}\r\n\r\n.cta .text-shadow--dark.text-shadow--2 .cta__title,.cta .text-shadow--dark.text-shadow--2 .cta__body {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.2)\r\n}\r\n\r\n.cta .text-shadow--dark.text-shadow--3 .cta__title,.cta .text-shadow--dark.text-shadow--3 .cta__body {\r\n    text-shadow: 0 1px 3px #000\r\n}\r\n\r\n.cta .text-shadow--light.text-shadow--1 .cta__title,.cta .text-shadow--light.text-shadow--1 .cta__body {\r\n    text-shadow: 0 0 6px rgba(255,255,255,0.17)\r\n}\r\n\r\n.cta .text-shadow--light.text-shadow--2 .cta__title,.cta .text-shadow--light.text-shadow--2 .cta__body {\r\n    text-shadow: 0 0 8px rgba(255,255,255,0.61)\r\n}\r\n\r\n.cta .text-shadow--light.text-shadow--3 .cta__title,.cta .text-shadow--light.text-shadow--3 .cta__body {\r\n    text-shadow: 0 1px 3px #fff\r\n}\r\n\r\n.contact-info-container {\r\n    display: flex;\r\n    flex-direction: var(--contact-info-container-flex-direction);\r\n    justify-content: var(--contact-info-container-justify-content);\r\n    align-items: var(--contact-info-container-align-items)\r\n}\r\n\r\n.contact-info-item {\r\n    display: flex;\r\n    flex-direction: var(--contact-info-item-flex-direction);\r\n    justify-content: var(--contact-info-item-justify-content);\r\n    align-items: var(--contact-info-item-align-items);\r\n    border: var(--contact-info-item-border);\r\n    border-width: var(--contact-info-item-border-width);\r\n    border-radius: var(--contact-info-item-border-radius);\r\n    margin: var(--contact-info-item-margin);\r\n    padding: var(--contact-info-item-padding);\r\n    max-width: 100%;\r\n    width: var(--contact-info-item-width)\r\n}\r\n\r\n.contact-info-item:last-child {\r\n    --contact-info-item-margin:0}\r\n\r\n.contact-info-item__details {\r\n    margin: var(--contact-info-item-details-margin);\r\n    text-align: var(--contact-info-item-details-text-align);\r\n    overflow-wrap: break-word;\r\n    max-width: 100%;\r\n    min-width: 0\r\n}\r\n\r\n.sermon-grid-item__media-container {\r\n    margin: var(--sermon-grid-item-media-container-margin);\r\n    border-radius: var(--sermon-grid-item-media-container-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.sermon-grid-item__icon {\r\n    display: block;\r\n    width: 64px;\r\n    color: var(--sermon-icon-color)\r\n}\r\n\r\n.sermon-grid-item__details {\r\n    margin: var(--sermon-grid-item-details-margin)\r\n}\r\n\r\n.sermon-grid-item__date {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.sermon-grid-item__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    display: inline-block;\r\n    margin: var(--sermon-grid-item-title-margin)\r\n}\r\n\r\n.sermon-grid-item__title:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.sermon-grid-item__passages {\r\n    margin: 0\r\n}\r\n\r\n.sermon-grid-item__passages a {\r\n    color: var(--text-color)\r\n}\r\n\r\n.sermon-item__passage-dot {\r\n    margin: 0 4px\r\n}\r\n\r\n.sermon-highlight__passage {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    color: var(--text-color)\r\n}\r\n\r\n.sermon-highlight__passage a {\r\n    color: var(--text-color)\r\n}\r\n\r\n.service-times-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: calc(-1 * var(--service-times-item-gap) / 2)\r\n}\r\n\r\n.clock-icon {\r\n    color: var(--icon-color);\r\n    display: var(--service-times-icon-display);\r\n    margin-right: 8px\r\n}\r\n\r\n.clock-icon svg {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.service-times-item-wrapper {\r\n    padding: calc(var(--service-times-item-gap) / 2);\r\n    width: var(--service-times-item-width);\r\n    justify-content: end\r\n}\r\n\r\n.service-times-item {\r\n    display: flex;\r\n    flex-direction: var(--service-times-item-flex-direction);\r\n    align-items: var(--service-times-item-align-items);\r\n    background: var(--service-times-item-background);\r\n    padding: var(--service-times-item-padding);\r\n    border: var(--service-times-item-border);\r\n    border-radius: var(--service-times-item-border-radius);\r\n    box-shadow: var(--service-times-item-box-shadow);\r\n    text-align: var(--service-times-item-text-align);\r\n    height: 100%\r\n}\r\n\r\n.service-times-item .fragment-item-icon-container {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-small-font-size)\r\n}\r\n\r\n.service-times-item__inline-day {\r\n    display: var(--service-times-inline-day-display)\r\n}\r\n\r\n.service-times-item__service-container {\r\n    margin: var(--service-time-container-margin)\r\n}\r\n\r\n.service-times-item__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    overflow-wrap: break-word\r\n}\r\n\r\n.service-times-item__time-container {\r\n    margin: var(--service-times-item-time-top-margin) 0 var(--service-times-item-time-bottom-margin);\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    display: inline-flex\r\n}\r\n\r\n.service-times-item__time-container:last-child {\r\n    margin: var(--service-times-item-time-top-margin) 0 0 0\r\n}\r\n\r\n.blog-preview-text {\r\n    word-break: break-word\r\n}\r\n\r\n.blog-preview-text h1,.blog-preview-text h2,.blog-preview-text h3,.blog-preview-text p {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: inherit;\r\n    line-height: inherit\r\n}\r\n\r\n.blog-preview-text br,.blog-preview-text ul,.blog-preview-text ol,.blog-preview-text img {\r\n    display: none\r\n}\r\n\r\n.blog-item-details {\r\n    margin: var(--blog-item-details-margin)\r\n}\r\n\r\n.blog-item-details__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color)\r\n}\r\n\r\n.blog-item-details__title:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.blog-item-details__preview {\r\n    margin: var(--blog-grid-item-preview-margin)\r\n}\r\n\r\n.blog-item-details__post-info {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.blog-item-image {\r\n    background: var(--fill-1-color);\r\n    border-radius: var(--blog-item-image-border-radius);\r\n    background-size: cover;\r\n    background-position: 50%;\r\n    padding-top: var(--multimedia-aspect-ratio-percentage);\r\n    height: var(--blog-item-image-height);\r\n    max-height: var(--blog-item-image-max-height)\r\n}\r\n\r\n.blog-grid-item {\r\n    box-shadow: var(--item-box-shadow);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-list-item {\r\n    display: var(--blog-list-item-display);\r\n    border: var(--list-item-border);\r\n    padding: var(--list-item-padding);\r\n    margin: var(--list-item-margin);\r\n    border-width: var(--list-item-border-width);\r\n    border-radius: var(--list-item-border-radius);\r\n    box-shadow: var(--item-box-shadow);\r\n    background: var(--list-item-background);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-list-item:first-child {\r\n    padding-top: 0\r\n}\r\n\r\n.blog-list-item__image-container {\r\n    width: var(--blog-list-image-width);\r\n    flex: 0 0 auto\r\n}\r\n\r\n.blog-highlight {\r\n    display: var(--blog-highlight-display);\r\n    -ms-grid-columns: var(--blog-highlight-grid-template-columns);\r\n        grid-template-columns: var(--blog-highlight-grid-template-columns);\r\n    grid-column-gap: var(--blog-highlight-grid-column-gap);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-highlight__icon {\r\n    margin: 0 auto\r\n}\r\n\r\n.blog-highlight__image-container {\r\n    width: var(--highlight-image-container-width);\r\n    margin: var(--highlight-image-container-margin);\r\n    flex: 0 0 auto\r\n}\r\n\r\n.blog-highlight__post-info {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.blog-highlight__preview {\r\n    margin: var(--blog-highlight-preview-margin)\r\n}\r\n\r\n.blog-highlight__detail-page-link {\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    cursor: pointer\r\n}\r\n\r\n.blog-highlight--no-image .blog-highlight__image-container {\r\n    width: var(--blog-highlight-background-width);\r\n    height: var(--blog-highlight-background-height);\r\n    background: var(--blog-item-image-container-background);\r\n    border-radius: var(--blog-item-image-border-radius)\r\n}\r\n\r\n.live-stream__embed {\r\n    border-radius: var(--item-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.digital-signage__embed {\r\n    border-radius: var(--item-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.detail-page__container {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n    padding: 0 16px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .detail-page__container {\r\n        padding:0 64px\r\n    }\r\n}\r\n\r\n.event-details .event-date-square__end {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size)\r\n}\r\n\r\n.event-details__title {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin-bottom: 12px\r\n}\r\n\r\n.event-details__details {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.event-details__details-header {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin-bottom: 16px\r\n}\r\n\r\n.event-details__info {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.footer {\r\n    background-color: var(--background-2-color);\r\n    padding: 32px 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.footer .block-new-section {\r\n    color: var(--text-color);\r\n    border-color: var(--text-color)\r\n}\r\n\r\n.footer__social {\r\n    text-align: center\r\n}\r\n\r\n.footer__social-link {\r\n    margin: 0 8px\r\n}\r\n\r\n.footer__social-link:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.footer__social-link .social-icon--faithlife {\r\n    color: inherit\r\n}\r\n\r\n.footer__sections {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: 32px 0;\r\n    grid-row-gap: 32px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .footer__sections {\r\n        -ms-grid-columns:(45%)[2];\r\n            grid-template-columns:repeat(2, 45%);\r\n        grid-column-gap: 32px;\r\n        margin: 64px 0\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .footer__sections {\r\n        -ms-grid-columns:(22%)[4];\r\n            grid-template-columns:repeat(4, 22%)\r\n    }\r\n}\r\n\r\n.footer__menu {\r\n    margin: 0 0 32px;\r\n    text-align: center\r\n}\r\n\r\n.footer__menu-link {\r\n    display: inline-block;\r\n    margin: 12px\r\n}\r\n\r\n.footer__copyright {\r\n    text-align: center\r\n}\r\n\r\n.members-page {\r\n    margin: 32px 0;\r\n    text-align: center\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .members-page {\r\n        margin:32px 0\r\n    }\r\n}\r\n\r\n.homepage {\r\n    padding: var(--homepage-padding)\r\n}\r\n\r\n.page-header {\r\n    padding-bottom: var(--page-header-padding-bottom, 8px);\r\n    font-size: var(--h2-font-size);\r\n    text-align: var(--page-header-text-alignment, center)\r\n}\r\n\r\n.header-engagement {\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    height: var(--header-menu-item-height)\r\n}\r\n\r\n.header-engagement__text {\r\n    font-size: var(--body-text-small-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    vertical-align: middle;\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.header-engagement__text:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.header-engagement__profile {\r\n    border: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: var(--hyperlink-color)\r\n}\r\n\r\n.header-engagement__link-icon {\r\n    display: inline-block;\r\n    margin-right: 8px;\r\n    width: 24px;\r\n    height: 24px\r\n}\r\n\r\n.header-engagement__link-icon--user {\r\n    border-radius: var(--header-icon-border-radius)\r\n}\r\n\r\n.header-engagement__link-icon--user-default-icon {\r\n    color: var(--header-default-icon-color)\r\n}\r\n\r\n.header-engagement__follow {\r\n    margin-left: 4px\r\n}\r\n\r\n.header-engagement__link {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    flex-shrink: 0;\r\n    padding: 0 12px\r\n}\r\n\r\n.header-engagement__link:last-child {\r\n    padding-right: 0\r\n}\r\n\r\n.header-engagement__link:hover {\r\n    text-decoration: none\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .header-engagement__link {\r\n        margin-bottom:0\r\n    }\r\n}\r\n\r\n.profile-dropdown {\r\n    position: relative\r\n}\r\n\r\n.profile-dropdown__container {\r\n    width: 180px;\r\n    box-shadow: var(--header-dropdown-box-shadow);\r\n    text-transform: var(--header-dropdown-text-transform);\r\n    border-radius: var(--header-dropdown-border-radius);\r\n    border: var(--header-dropdown-border)\r\n}\r\n\r\n.profile-dropdown__list {\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.profile-dropdown__list-item {\r\n    display: block;\r\n    padding: 12px\r\n}\r\n\r\n.profile-dropdown__item:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.group-branding {\r\n    position: relative;\r\n    margin: 0 8px 0 0;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.group-branding__name {\r\n    text-transform: uppercase;\r\n    font-size: var(--group-branding-font-size);\r\n    line-height: var(--group-branding-line-height);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.group-branding__name,.group-branding__name:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.group-branding__name:nth-of-type(2) {\r\n    margin-left: 16px\r\n}\r\n\r\n.group-branding__icon {\r\n    border-radius: var(--header-icon-border-radius)\r\n}\r\n\r\n.group-branding__icon--small {\r\n    height: 32px\r\n}\r\n\r\n.group-branding__icon--medium {\r\n    height: 44px\r\n}\r\n\r\n.group-branding__icon--large {\r\n    height: 96px\r\n}\r\n\r\n.group-branding .edit-item {\r\n    min-width: unset\r\n}\r\n\r\n.slideout-menu-account {\r\n    display: flex;\r\n    padding: 24px 0 12px;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height)\r\n}\r\n\r\n.slideout-menu-account--unauthenticated {\r\n    padding-bottom: 32px\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-link {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 24px;\r\n    font-size: var(--body-text-small-font-size);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-link:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-icon {\r\n    margin-right: 4px;\r\n    width: 24px;\r\n    height: 24px\r\n}\r\n\r\n.slideout-menu-account__profile-image {\r\n    border-radius: 5px;\r\n    margin-right: 16px;\r\n    width: 44px;\r\n    height: 44px\r\n}\r\n\r\n.slideout-menu-account__sign-out-link {\r\n    font-size: var(--body-text-small-font-size);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.slideout-menu-account__sign-out-link:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.slideout-menu-account__name {\r\n    margin-bottom: 4px;\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.tp{\r\n            display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n\t-webkit-margin-end: 0px;\r\n\t        margin-inline-end: 0px;\r\n\tbackground-color: white;\r\n\t\t}\r\n\r\n.viewLinks {\r\n\t\t\tbackground-color: #395c80 !important;\r\n\t\t\tborder: none;\r\n\t\t\tcolor: white;\r\n\t\t\tpadding: 10px;\r\n\t\t\ttext-align: center;\r\n\t\t\ttext-decoration: none;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tmargin: 4px 2px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tborder-radius: 8px;\r\n\t\t\tmargin-right: 1%;\r\n          }\r\n\r\n.pl-wrapper{\r\n            /* margin-top: 0px; */\r\n            background: #fff;\r\n            /* margin-bottom: 90px !important; */\r\n            border-radius: 5px;\r\n            padding: 40px;\r\n            position: relative;\r\n            margin: 0px auto;\r\n            max-width: 1140px;\r\n            border: 1px solid #E2EAF0;\r\n        }\r\n\r\n.per-table{\r\n            border-bottom: 1px solid #eee;\r\n            color: #999 !important;\r\n        }\r\n\r\n.e-border-none{\r\n            border-bottom: none;\r\n        }"

/***/ }),

/***/ "./src/app/links/links.component.html":
/*!********************************************!*\
  !*** ./src/app/links/links.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resources']\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">EVENTS</a>\n      </li>\n      <li class=\"active nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">COMPETITION/EXAMS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<section class=\"fragment edit-outline bulletins\" id=\"searchList\" style=\"padding: 8%;\">\n  <div class=\"fragment-list\">\n    <div class=\"fragment-periodical-list-item tp\">\n      <div class=\"fragment-periodical-list-item__container\">\n        <span class=\"fragment-item-icon-container\">\n          <svg style=\"color: #395c80;\" height=\"56\" viewBox=\"0 0 56 56\" width=\"56\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"currentColor\">\n              <path d=\"M23 36v1.5c0 1.193-1.194 1.447-1.54 1.496A1.5 1.5 0 0 1 20 37.5V19h15v15h2V18a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v19.5c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5V36H23z\"></path>\n              <path d=\"M23 22h9v2h-9zM23 26h9v2h-9zM23 30h9v2h-9z\"></path>\n            </g>\n          </svg>\n        </span>\n        <div class=\"fragment-periodical-list-item__details align-self-center\">\n          <div class=\" align-self-center\">\n            <p class=\"fragment-periodical-list-item__date\">Diploma</p>\n          </div>\n          <a class=\"button--list align-self-center pr-3 viewLinks\" href=\"javascript:void(0);\" (click)=\"openSearch()\" rel=\"noopener noreferrer\"\n            title=\"Diploma\">\n            View\n            <svg class=\"external-link\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n              <g fill-rule=\"nonzero\">\n                <path fill=\"currentColor\" d=\"M9.375 0H5v1.25h2.875L3.937 5.188l.876.875L8.75 2.124V5H10V.625C10 .25 9.75 0 9.375 0z\"></path>\n                <path fill=\"currentColor\" d=\"M8.75 10H.625C.25 10 0 9.75 0 9.375V1.25C0 .875.25.625.625.625h2.5v1.25H1.25V8.75h6.875V6.875h1.25v2.5c0 .375-.25.625-.625.625z\"></path>\n              </g>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"fragment-periodical-list-item tp\">\n      <div class=\"fragment-periodical-list-item__container\">\n        <span class=\"fragment-item-icon-container\">\n          <svg style=\"color: #395c80;\" height=\"56\" viewBox=\"0 0 56 56\" width=\"56\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"currentColor\">\n              <path d=\"M23 36v1.5c0 1.193-1.194 1.447-1.54 1.496A1.5 1.5 0 0 1 20 37.5V19h15v15h2V18a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v19.5c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5V36H23z\"></path>\n              <path d=\"M23 22h9v2h-9zM23 26h9v2h-9zM23 30h9v2h-9z\"></path>\n            </g>\n          </svg>\n        </span>\n        <div class=\"fragment-periodical-list-item__details align-self-center\">\n          <div class=\" align-self-center\">\n            <p class=\"fragment-periodical-list-item__date\">TTC</p>\n          </div>\n          <a class=\"button--list align-self-center pr-3 viewLinks\" href=\"https://faithlife.com/fitcommunitychurch/bulletins/44049796\"\n            target=\"_blank\" rel=\"noopener noreferrer\" title=\"TTC\">\n            View\n            <svg class=\"external-link\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n              <g fill-rule=\"nonzero\">\n                <path fill=\"currentColor\" d=\"M9.375 0H5v1.25h2.875L3.937 5.188l.876.875L8.75 2.124V5H10V.625C10 .25 9.75 0 9.375 0z\"></path>\n                <path fill=\"currentColor\" d=\"M8.75 10H.625C.25 10 0 9.75 0 9.375V1.25C0 .875.25.625.625.625h2.5v1.25H1.25V8.75h6.875V6.875h1.25v2.5c0 .375-.25.625-.625.625z\"></path>\n              </g>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"fragment-periodical-list-item tp\">\n      <div class=\"fragment-periodical-list-item__container\">\n        <span class=\"fragment-item-icon-container\">\n          <svg style=\"color: #395c80;\" height=\"56\" viewBox=\"0 0 56 56\" width=\"56\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"currentColor\">\n              <path d=\"M23 36v1.5c0 1.193-1.194 1.447-1.54 1.496A1.5 1.5 0 0 1 20 37.5V19h15v15h2V18a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v19.5c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5V36H23z\"></path>\n              <path d=\"M23 22h9v2h-9zM23 26h9v2h-9zM23 30h9v2h-9z\"></path>\n            </g>\n          </svg>\n        </span>\n        <div class=\"fragment-periodical-list-item__details align-self-center\">\n          <div class=\" align-self-center\">\n            <p class=\"fragment-periodical-list-item__date\">CWC</p>\n          </div>\n          <a class=\"button--list align-self-center pr-3 viewLinks\" href=\"https://faithlife.com/fitcommunitychurch/bulletins/44049796\"\n            target=\"_blank\" rel=\"noopener noreferrer\" title=\"CWC\">\n            View\n            <svg class=\"external-link\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n              <g fill-rule=\"nonzero\">\n                <path fill=\"currentColor\" d=\"M9.375 0H5v1.25h2.875L3.937 5.188l.876.875L8.75 2.124V5H10V.625C10 .25 9.75 0 9.375 0z\"></path>\n                <path fill=\"currentColor\" d=\"M8.75 10H.625C.25 10 0 9.75 0 9.375V1.25C0 .875.25.625.625.625h2.5v1.25H1.25V8.75h6.875V6.875h1.25v2.5c0 .375-.25.625-.625.625z\"></path>\n              </g>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"fragment-periodical-list-item tp\">\n      <div class=\"fragment-periodical-list-item__container\">\n        <span style=\"color: #395c80;\" class=\"fragment-item-icon-container\">\n          <svg height=\"56\" viewBox=\"0 0 56 56\" width=\"56\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"currentColor\">\n              <path d=\"M23 36v1.5c0 1.193-1.194 1.447-1.54 1.496A1.5 1.5 0 0 1 20 37.5V19h15v15h2V18a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v19.5c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5V36H23z\"></path>\n              <path d=\"M23 22h9v2h-9zM23 26h9v2h-9zM23 30h9v2h-9z\"></path>\n            </g>\n          </svg>\n        </span>\n        <div class=\"fragment-periodical-list-item__details align-self-center\">\n          <div>\n            <p class=\"fragment-periodical-list-item__date\">OVBS</p>\n          </div>\n          <a class=\"button--list align-self-center pr-3 viewLinks\" href=\"https://faithlife.com/fitcommunitychurch/bulletins/44049796\"\n            target=\"_blank\" rel=\"noopener noreferrer\" title=\"OVBS\">\n            View\n            <svg class=\"external-link\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n              <g fill-rule=\"nonzero\">\n                <path fill=\"currentColor\" d=\"M9.375 0H5v1.25h2.875L3.937 5.188l.876.875L8.75 2.124V5H10V.625C10 .25 9.75 0 9.375 0z\"></path>\n                <path fill=\"currentColor\" d=\"M8.75 10H.625C.25 10 0 9.75 0 9.375V1.25C0 .875.25.625.625.625h2.5v1.25H1.25V8.75h6.875V6.875h1.25v2.5c0 .375-.25.625-.625.625z\"></path>\n              </g>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div id=\"searchResult\" style=\"padding-top: 6rem;\">\n  <div class=\"pl-wrapper mb-5\">\n    <div class=\"row pb-3\" style=\"align-items: center;\">\n      <div class=\"form-group col\">\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"regId\" formControlName=\"regId\" placeholder=\"Registration Id\"\n          name=\"regId\">\n      </div>\n      <div class=\"form-group col\">\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"studId\" formControlName=\"studId\" placeholder=\"Student Id\" name=\"studId\">\n      </div>\n      <div class=\"form-group col\">\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"parishName\" formControlName=\"parishName\" placeholder=\"Parish Name\"\n          name=\"parishName\">\n      </div>\n      <div class=\"form-group col\">\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"studentName\" formControlName=\"studentName\" placeholder=\"Student Name\"\n          name=\"studentName\">\n      </div>\n      <div class=\"form-group col\">\n        <button (click)=\"onSubmit()\" class=\"btn btn-blue btn-success\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <table class=\"table no_border table-condensed person_details per-table\">\n        <thead>\n          <th class=\"e-border-none\">Reg. ID</th>\n          <th class=\"e-border-none\">Stud. ID</th>\n          <th class=\"e-border-none\">Parish Name</th>\n          <th class=\"e-border-none\">Student Name</th>\n          <th class=\"e-border-none\">Action</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>121324</td>\n            <td>10001</td>\n            <td>Acadia</td>\n            <td>Austen, Kate</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm\" (click)=\"editView()\">Edit</button>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm  ml-1\" (click)=\"editView()\">View</button>\n            </td>\n          </tr>\n          <tr>\n            <td>121225</td>\n            <td>10045</td>\n            <td>Allen</td>\n            <td>Baggins, Frodo</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm\">Edit</button>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm ml-1\">View</button>\n            </td>\n          </tr>\n          <tr>\n            <td>121254</td>\n            <td>10006</td>\n            <td>Bossier</td>\n            <td>Bourne, Alison</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm\">Edit</button>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm ml-1\">View</button>\n            </td>\n          </tr>\n          <tr>\n            <td>121266</td>\n            <td>100054</td>\n            <td>Caldwell</td>\n            <td>Flintstone, Fred</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm\">Edit</button>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm ml-1\">View</button>\n            </td>\n          </tr>\n          <tr>\n            <td>1212344</td>\n            <td>100012</td>\n            <td>DeSoto</td>\n            <td>Halpert, Cecelia</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm\">Edit</button>\n              <button type=\"button\" class=\"btn btn-blue btn-primary btn-sm ml-1\">View</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div id=\"editView\" class=\"container col-md-6 col-sm-6 border mb-1rem card p-3 bg-light\" style=\"margin-top: 6rem;background-color: #fff !important;\">\n    <div>\n        <h3 class=\"text-center header-blue\">Diploma Exam Registration</h3>\n    </div>\n    <form id=\"subscribeForm\" [formGroup]=\"DEregistrationForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"pname\">Parish Name:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"pname\" formControlName=\"pname\" placeholder=\"Enter Parish Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <label for=\"addr\">Parish Address:</label>\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Address\">\n                <!-- <label>Street Address</label> -->\n            </div>\n            <div class=\"form-group col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Landmark\">\n                <!-- <label>Landmark</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your City\">\n                <!-- <label>City</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your State\">\n                <!-- <label>State</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Zip code\">\n                <!-- <label>Postal/Zip Code</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <select class=\"form-control form-control-sm\">\n                    <option>India</option>\n                    <option>England</option>\n                    <option>Australia</option>\n                </select>\n                <!-- <label>Country</label> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"prname\">Name of Principal:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"prname\" formControlName=\"prname\" placeholder=\"Enter Principal's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"vname\">Name of Vicar:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"vname\" formControlName=\"vname\" placeholder=\"Enter Vicar Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"pemail\">Principal's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"pemail\" formControlName=\"pemail\" [ngClass]=\"{'is-invalid': submitted && f.pemail.errors}\"\n                placeholder=\"Enter Principal's Email ID\" required>\n            <div *ngIf=\"submitted && f.pemail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.pemail.errors.required\">Email is required</div>\n                <div *ngIf=\"f.pemail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mobile1\">Principal's Contact Number: </label>\n            <input type=\"text\" formControlName=\"mobile1\" class=\"form-control form-control-sm\" placeholder=\"Enter Principal's Contact Number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"vname\">Name of Student:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"sname\" formControlName=\"sname\" placeholder=\"Enter Student's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"phonenum1\">Student's Phone Number: </label>\n            <input type=\"text\" formControlName=\"phonenum1\" class=\"form-control form-control-sm\" placeholder=\"Enter Student's Contact Number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"semail\">Student's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"semail\" formControlName=\"semail\" [ngClass]=\"{'is-invalid': submitted && f.semail.errors}\"\n                placeholder=\"Enter Student's Email ID\" required>\n            <div *ngIf=\"submitted && f.semail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.semail.errors.required\">Student's Email is required</div>\n                <div *ngIf=\"f.semail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group w-50\">\n            <label for=\"sele1\">Select Exam Date</label>\n            <select formControlName=\"group\" class=\"form-control form-control-sm\" id=\"sele1\">\n                <option>22/12/2019</option>\n                <option>01/01/2020</option>\n                <option>13/04/2020</option>\n                <option>28/07/2020</option>\n            </select>\n        </div>\n        <button type=\"submit\" (click)=\"register()\" class=\"btn btn-blue btn-primary float-right\">Update</button>\n    </form>\n</div>\n<div id=\"modalUpload\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5>Upload PDF/Audio/Video File Here</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col\">\n          <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n          <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Upload</button>\n          <!--[disabled]=\"!uploader.getNotUploadedItems().length\"-->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"modalNotify\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color:lavender\">\n        <h6>You can Approve/Delete uploded files here.</h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col\">\n          <div class=\"row \">\n            <h6 class=\"text-center\">\n              <a href=\"/lesson\">View Content</a>\n            </h6>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Approve</button>\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s \" (click)=\"onButtonClick($event)\">Delete</button>\n            </div>\n\n          </div>\n          <div id=\"commentId\" class=\"hide mt-1 row\">\n\n            <textarea class=\"form-control mt-4\" rows=\"3\" placeholder=\"Comment here..\"></textarea>\n            <br>\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: -2%;\">Notify</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" style=\"height: 3rem\">\n        <button type=\"button\" class=\"btn btn-default\" style=\"background-color:lavender\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/links/links.component.ts":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
        this.DEregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    Object.defineProperty(LinksComponent.prototype, "f", {
        get: function () { return this.DEregistrationForm.controls; },
        enumerable: true,
        configurable: true
    });
    LinksComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".page-header-wrapper").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editView").hide();
    };
    LinksComponent.prototype.openSearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").show();
    };
    LinksComponent.prototype.editView = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editView").show();
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.css */ "./src/app/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/ovbs-registration/ovbs-registration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ovbs-registration/ovbs-registration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border p-3 mt-2rem bg-light mb-1rem\" style=\"overflow:auto;\">\n    <div>\n        <h3 class=\"text-center header-blue\">OVBS Registration</h3>\n    </div>\n    <form [formGroup]=\"ovbsRegisterForm\">\n        <div class=\"form-group\">\n            <label for=\"churchName\" class=\"\">Church Name</label>\n            <input type=\"text\" formControlName=\"churchName\" class=\"form-control form-control-sm\" placeholder=\"Enter Church Name\">\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label for=\"ovbsLoc\" class=\"\">OVBS Location</label>\n                <input type=\"text\" formControlName=\"ovbsLoc\" class=\"form-control form-control-sm\" placeholder=\"Enter OVBS Location\">\n            </div>\n\n            <div class=\"form-group col\">\n                <label for=\"parishName\" class=\"\">Name of Parish</label>\n                <input type=\"text\" formControlName=\"parishName\" class=\"form-control form-control-sm\" placeholder=\"Enter Name of Parish\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"parentName\" class=\"\">Parent/ Guardian Name</label>\n            <input type=\"text\" formControlName=\"parentName\" class=\"form-control form-control-sm\" placeholder=\"Enter Parent/ Guardian Name\">\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label for=\"phNo\" class=\"\">Phone Number</label>\n                <input type=\"number\" formControlName=\"phNo\" class=\"form-control form-control-sm\" pattern=\"\\d{10}\" placeholder=\"Enter Phone Number\">\n            </div>\n\n            <div class=\"form-group col\">\n                <label for=\"email\" class=\"\">Email Address </label>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-sm\" placeholder=\"Enter Email Address\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label for=\"emargencyName\" class=\"\">Emergency Contact Name</label>\n                <input type=\"text\" formControlName=\"emargencyName\" class=\"form-control form-control-sm\" placeholder=\"Enter Emergency Contact Name\">\n            </div>\n\n            <div class=\"form-group col\">\n                <label for=\"emargencyPh\" class=\"\">Emergency Contact Phone</label>\n                <input type=\"number\" formControlName=\"emargencyPh\" class=\"form-control form-control-sm\" pattern=\"\\d{10}\" placeholder=\"Enter Emergency Contact Phone\">\n            </div>\n        </div>\n\n        <div id=\"childInfo\" class=\"container borderStyle mt-3 mb-3\">\n            <h6 class=\"border-with-text bg-light\">CHILD 1</h6>\n            <div class=\"form-group\">\n                <label class=\"\">Student Name</label>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control form-control-sm col\" placeholder=\"First Name\">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"middleName\" class=\"form-control form-control-sm col\" placeholder=\"Middle Name\">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control form-control-sm col\" placeholder=\"Last Name\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col\">\n                    <label for=\"regType\">Registration Type</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"regType\" id=\"regType\">\n                        <option>Student</option>\n                        <option>Volunteer</option>\n                        <option>Teacher</option>\n                    </select>\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"grade\">Grade</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"grade\" id=\"grade\">\n                        <option>KG</option>\n                        <option>1st</option>\n                        <option>2nd</option>\n                        <option>3rd</option>\n                        <option>4th</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label for=\"age\" class=\"\">Age</label>\n                    <input type=\"number\" formControlName=\"age\" class=\"form-control form-control-sm\" placeholder=\"Enter Age\">\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"day_date\">Days Attending/ Dates</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"day_date\" id=\"day_date\">\n                        <option>Monday-10 Feb 2020</option>\n                        <option>Tuesday-11 Feb 2020</option>\n                        <option>Wednesday-12 Feb 2020</option>\n                        <option>Thursday-13 Feb 2020</option>\n                        <option>Friday-14 Feb 2020</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label for=\"TshirtSize\">T-Shirt Size</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"TshirtSize\" id=\"TshirtSize\" placeholder=\"Select T-Shirt Size for parent\">\n                        <option>Small</option>\n                        <option>Medium</option>\n                        <option>Large</option>\n                        <option>XL</option>\n                    </select>\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"tshirtQuantity\" class=\"\">T-shirt Quantity</label>\n                    <input type=\"number\" formControlName=\"tshirtQuantity\" class=\"form-control form-control-sm\" pattern=\"\\d{1}\" placeholder=\"Enter T-shirt Quantity\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"alergies\" class=\"\">Alergies</label>\n                <input type=\"text\" formControlName=\"alergies\" class=\"form-control form-control-sm\" placeholder=\"About Alergies if any\">\n            </div>\n\n        </div>\n\n\n        <div id=\"child2Info\" class=\"container borderStyle mb-3\">\n            <h6 class=\"border-with-text bg-light\">CHILD 2</h6>\n            <div class=\"form-group\">\n                <label class=\"\">Student Name</label>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control form-control-sm col\" placeholder=\"First Name\">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"middleName\" class=\"form-control form-control-sm col\" placeholder=\"Middle Name\">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control form-control-sm col\" placeholder=\"Last Name\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col\">\n                    <label for=\"regType\">Registration Type</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"regType\" id=\"regType\">\n                        <option>Student</option>\n                        <option>Volunteer</option>\n                        <option>Teacher</option>\n                    </select>\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"grade\">Grade</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"grade\" id=\"grade\">\n                        <option>KG</option>\n                        <option>1st</option>\n                        <option>2nd</option>\n                        <option>3rd</option>\n                        <option>4th</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label for=\"age\" class=\"\">Age</label>\n                    <input type=\"number\" formControlName=\"age\" class=\"form-control form-control-sm\" placeholder=\"Enter Age\">\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"day_date\">Days Attending/ Dates</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"day_date\" id=\"day_date\">\n                        <option>Monday-10 Feb 2020</option>\n                        <option>Tuesday-11 Feb 2020</option>\n                        <option>Wednesday-12 Feb 2020</option>\n                        <option>Thursday-13 Feb 2020</option>\n                        <option>Friday-14 Feb 2020</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label for=\"TshirtSize\">T-Shirt Size</label>\n                    <select class=\"form-control form-control-sm\" formControlName=\"TshirtSize\" id=\"TshirtSize\" placeholder=\"Select T-Shirt Size for parent\">\n                        <option>Small</option>\n                        <option>Medium</option>\n                        <option>Large</option>\n                        <option>XL</option>\n                    </select>\n                </div>\n                <div class=\"form-group col\">\n                    <label for=\"tshirtQuantity\" class=\"\">T-shirt Quantity</label>\n                    <input type=\"number\" formControlName=\"tshirtQuantity\" class=\"form-control form-control-sm\" pattern=\"\\d{1}\" placeholder=\"Enter T-shirt Quantity\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"alergies\" class=\"\">Alergies</label>\n                <input type=\"text\" formControlName=\"alergies\" class=\"form-control form-control-sm\" placeholder=\"About Alergies if any\">\n            </div>\n\n        </div>\n        <!-- <div class=\"row mb-4\">\n            <div class=\"ml-3\">\n                <button type=\"button\" class=\"btn btn-success btn-s \" (click)=\"onAddButtonClick($event)\">Add</button>\n            </div>\n            <div class=\"ml-2\">\n                <button type=\"button\" id=\"remove\" class=\"hide\" (click)=\"onRemoveButtonClick($event)\">Remove</button>\n            </div>\n        </div> -->\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label for=\"parentTshirtSize\">T-Shirt Size for parent</label>\n                <select class=\"form-control form-control-sm\" formControlName=\"parentTshirtSize\" id=\"parentTshirtSize\" placeholder=\"Select T-Shirt Size for parent\">\n                    <option>Small</option>\n                    <option>Medium</option>\n                    <option>Large</option>\n                    <option>XL</option>\n                </select>\n            </div>\n            <div class=\"form-group col\">\n                <label for=\"parentTshirtQuantity\" class=\"\">T-shirt Quantity</label>\n                <input type=\"number\" formControlName=\"parentTshirtQuantity\" class=\"form-control form-control-sm\" pattern=\"\\d{1}\" placeholder=\"Enter T-shirt Quantity\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <button [disabled]=\"!ovbsRegisterForm.valid\" (click)=\"onSubmit()\" class=\"btn btn-blue btn-success ml-4 float-right\"> Register\n            </button>\n        </div>\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/ovbs-registration/ovbs-registration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/ovbs-registration/ovbs-registration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-with-text {\n  width: 4rem;\n  margin-top: -0.6rem;\n  color: #395c80; }\n\n.borderStyle {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6; }\n\n#child2Info {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-top: 2rem;\n  margin-left: auto; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n#remove {\n  font-size: 1rem;\n  line-height: 1.5;\n  background-color: red;\n  color: #fff;\n  height: 2.4rem;\n  border-radius: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/ovbs-registration/ovbs-registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ovbs-registration/ovbs-registration.component.ts ***!
  \******************************************************************/
/*! exports provided: OVBSRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVBSRegistrationComponent", function() { return OVBSRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OVBSRegistrationComponent = /** @class */ (function () {
    function OVBSRegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    OVBSRegistrationComponent.prototype.ngOnInit = function () {
        this.ovbsRegisterForm = this.formBuilder.group({
            churchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ovbsLoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parishName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emargencyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emargencyPh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            middleName: [''],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regType: [''],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            day_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TshirtSize: [''],
            tshirtQuantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alergies: [''],
            parentTshirtSize: [''],
            parentTshirtQuantity: ['']
        });
    };
    OVBSRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.ovbsRegisterForm.invalid) {
            return;
        }
        else {
            alert("Student Registered successfully...");
            console.log(this.ovbsRegisterForm.value);
        }
        this.ovbsRegisterForm.reset();
    };
    OVBSRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ovbs-registration',
            template: __webpack_require__(/*! ./ovbs-registration.component.html */ "./src/app/ovbs-registration/ovbs-registration.component.html"),
            styles: [__webpack_require__(/*! ./ovbs-registration.component.scss */ "./src/app/ovbs-registration/ovbs-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OVBSRegistrationComponent);
    return OVBSRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/portal-admin/portal-admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/portal-admin/portal-admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container-fluid{\r\n    padding:0%;\r\n    margin-right:0%;\r\n}\r\n\r\n#sidebar-container {\r\n    min-height: 100vh;   \r\n    background-color: #333;\r\n    padding: 0;\r\n}\r\n\r\n/* Sidebar sizes when expanded and expanded */\r\n\r\n.sidebar-expanded {\r\n    width: 230px;\r\n}\r\n\r\n.sidebar-collapsed {\r\n    width: 60px;\r\n}\r\n\r\n/* Menu item*/\r\n\r\n#sidebar-container .list-group a {\r\n    height: 50px;\r\n    color: white;\r\n}\r\n\r\n/* Submenu item*/\r\n\r\n#sidebar-container .list-group .sidebar-submenu a {\r\n    height: 45px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.sidebar-submenu {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n/* Separators */\r\n\r\n.sidebar-separator-title {\r\n    background-color: #333;\r\n    height: 35px;\r\n}\r\n\r\n.sidebar-separator {\r\n    background-color: #333;\r\n    height: 25px;\r\n}\r\n\r\n.logo-separator {\r\n    background-color: #333;    \r\n    height: 60px;\r\n}\r\n\r\n/* Closed submenu icon */\r\n\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"false\"] .submenu-icon::after {\r\n  content: \" \\f0d7\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n/* Opened submenu icon */\r\n\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"true\"] .submenu-icon::after {\r\n  content: \" \\f0da\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/portal-admin/portal-admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/portal-admin/portal-admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--*****************************Navbar***********************************-->\n  <nav class=\"navbar navbar-expand-sm navbar-dark\" style=\"background-color:brown;\">\n    <h3 class=\"navbar-brand\" style=\"font-style:italic; color:antiquewhite;\">Portal</h3>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active nav-item\"><a class=\"nav-link\" href=\"#\">Resources</a></li>\n      <li class=\"active nav-item\"><a class=\"nav-link\" href=\"#\">Useful Links</a></li>\n      <li class=\"active nav-item\"><a class=\"nav-link\" href=\"#\">TRAINING</a></li>\n      <li class=\"nav-item dropdown\">\n        <a class=\" active nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">UPLOAD FILE</a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n  <!--*****************************Sidebar***********************************-->\n  <div class=\"row\" id=\"body-row\" style=\"margin-right:0px;\">\n    <div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block\">\n\n      <ul class=\"list-group\">\n\n        <!--<li class=\"list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed\">\n                <small>MAIN MENU</small>\n            </li>-->\n\n        <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-start align-items-center\">\n            <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n            <span class=\"menu-collapsed\">Errata</span>\n            <span class=\"submenu-icon ml-auto\"></span>\n          </div>\n        </a>\n        <!-- Submenu content -->\n        <div id='submenu1' class=\"collapse sidebar-submenu\">\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">Pre-KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">1st</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">2nd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">3rd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">4th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">5th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">6th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">7th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">8th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">9th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">10th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">11th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">12th</span>\n          </a>\n        </div>\n\n        <a href=\"#submenu2\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-start align-items-center\">\n            <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n            <span class=\"menu-collapsed\">Teacher's Notes</span>\n            <span class=\"submenu-icon ml-auto\"></span>\n          </div>\n        </a>\n        <!-- Submenu content -->\n        <div id='submenu2' class=\"collapse sidebar-submenu\">\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">Pre-KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">1st</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">2nd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">3rd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">4th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">5th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">6th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">7th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">8th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">9th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">10th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">11th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">12th</span>\n          </a>\n        </div>\n\n        <a href=\"#submenu3\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-start align-items-center\">\n            <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n            <span class=\"menu-collapsed\">Activities</span>\n            <span class=\"submenu-icon ml-auto\"></span>\n          </div>\n        </a>\n        <!-- Submenu content -->\n        <div id='submenu3' class=\"collapse sidebar-submenu\">\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">Pre-KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">1st</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">2nd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">3rd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">4th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">5th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">6th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">7th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">8th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">9th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">10th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">11th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">12th</span>\n          </a>\n        </div>\n\n        <a href=\"#submenu4\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-start align-items-center\">\n            <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n            <span class=\"menu-collapsed\">Worksheets</span>\n            <span class=\"submenu-icon ml-auto\"></span>\n          </div>\n        </a>\n        <!-- Submenu content -->\n        <div id='submenu4' class=\"collapse sidebar-submenu\">\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">Pre-KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">1st</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">2nd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">3rd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">4th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">5th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">6th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">7th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">8th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">9th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">10th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">11th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">12th</span>\n          </a>\n        </div>\n\n        <a href=\"#submenu5\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"d-flex w-100 justify-content-start align-items-center\">\n            <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n            <span class=\"menu-collapsed\">Review Questions</span>\n            <span class=\"submenu-icon ml-auto\"></span>\n          </div>\n        </a>\n        <!-- Submenu content -->\n        <div id='submenu5' class=\"collapse sidebar-submenu\">\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">Pre-KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">KG</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">1st</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">2nd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">3rd</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">4th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">5th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">6th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">7th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">8th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">9th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">10th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">11th</span>\n          </a>\n          <a routerLink=\"#masterId\" (click)=\"view($event)\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n            <span class=\"menu-collapsed\">12th</span>\n          </a>\n        </div>\n      </ul>\n    </div>\n\n    <div id=\"masterId\" class=\"myDiv col\" style=\"display:none\">\n      <h5 class=\"mt-3\">More information regarding our curriculum is available through the following links:</h5>\n      <ul class=\"mt-3\">\n            <li><a href=\"#\" >Lesson 1</a></li>\n            <li><a href=\"#\" >Lesson 2</a></li>\n            <li><a href=\"#\" >Lesson 3</a></li>\n            <li><a href=\"#\">Lesson 4</a></li>\n            <li><a href=\"#\" >Lesson 5</a></li>\n            <li><a href=\"#\" >Lesson 6</a></li>\n            <li><a href=\"#\" >Lesson 7</a></li>\n            <li><a href=\"#\">Lesson 8</a></li>\n            <li><a href=\"#\" >Lesson 9</a></li>\n            <li><a href=\"#\" >Lesson 10</a></li>\n            <li><a href=\"#\" >Lesson 11</a></li>\n            <li><a href=\"#\">Lesson 12</a></li>\n            <li><a href=\"#\" >Lesson 13</a></li>\n            <li><a href=\"#\" >Lesson 14</a></li>\n            <li><a href=\"#\" >Lesson 15</a></li>\n            <li><a href=\"#\">Lesson 16</a></li>\n          </ul>\n    </div>\n  </div>\n\n  <!--*****************************Modal box***********************************-->\n\n\n  <div id=\"modalUpload\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5>Upload PDF/Audio/Video File Here</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col\">\n            <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Upload</button>\n            <!--[disabled]=\"!uploader.getNotUploadedItems().length\"-->\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!--*****************************Master Div***********************************-->\n\n  <!--<div id=\"masterId\" class=\"myDiv\">\nsanakdjslkfcmls;dxklv;xc,b v;cl bv vcbvc\nfcbvbnvnvbnbvm\n</div>-->\n\n</div>"

/***/ }),

/***/ "./src/app/portal-admin/portal-admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/portal-admin/portal-admin.component.ts ***!
  \********************************************************/
/*! exports provided: PortalAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalAdminComponent", function() { return PortalAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalAdminComponent = /** @class */ (function () {
    function PortalAdminComponent() {
        this.title = 'Upload a File';
    }
    // public uploader: FileUploader = new FileUploader({url: URL});
    PortalAdminComponent.prototype.ngOnInit = function () {
        // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        //     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //          console.log('FileUpload:uploaded:', item, status, response);
        //  alert('File uploaded successfully');
        //      };
        //  }
    };
    PortalAdminComponent.prototype.view = function (e) {
        document.getElementById('masterId').setAttribute('style', 'display:block');
    };
    PortalAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portal-admin',
            template: __webpack_require__(/*! ./portal-admin.component.html */ "./src/app/portal-admin/portal-admin.component.html"),
            styles: [__webpack_require__(/*! ./portal-admin.component.css */ "./src/app/portal-admin/portal-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortalAdminComponent);
    return PortalAdminComponent;
}());



/***/ }),

/***/ "./src/app/portal/portal.component.css":
/*!*********************************************!*\
  !*** ./src/app/portal/portal.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    padding:0%;\r\n margin-right:0%;\r\n}\r\n\r\n#sidebar-container {\r\n    min-height: 100vh;   \r\n    background-color: #333;\r\n    padding: 0;\r\n}\r\n\r\n/* Sidebar sizes when expanded and expanded */\r\n\r\n.sidebar-expanded {\r\n    width: 230px;\r\n}\r\n\r\n.sidebar-collapsed {\r\n    width: 60px;\r\n}\r\n\r\n/* Menu item*/\r\n\r\n#sidebar-container .list-group a {\r\n    height: 50px;\r\n    color: white;\r\n}\r\n\r\n/* Submenu item*/\r\n\r\n#sidebar-container .list-group .sidebar-submenu a {\r\n    height: 45px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.sidebar-submenu {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n/* Separators */\r\n\r\n.sidebar-separator-title {\r\n    background-color: #333;\r\n    height: 35px;\r\n}\r\n\r\n.sidebar-separator {\r\n    background-color: #333;\r\n    height: 25px;\r\n}\r\n\r\n.logo-separator {\r\n    background-color: #333;    \r\n    height: 60px;\r\n}\r\n\r\n/* Closed submenu icon */\r\n\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"false\"] .submenu-icon::after {\r\n  content: \" \\f0d7\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n/* Opened submenu icon */\r\n\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"true\"] .submenu-icon::after {\r\n  content: \" \\f0da\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n.cardHeaderColor{\r\n    background-color: #395c80;\r\n    color: white;\r\n  }\r\n\r\n.card:hover {\r\n    -webkit-box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;\r\n    cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/portal/portal.component.html":
/*!**********************************************!*\
  !*** ./src/app/portal/portal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resources']\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">EVENTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">COMPETITION/EXAMS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row\" style=\"padding: 10%;\">\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\" (click)=\"navigate(1)\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">PEOPLE</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center mt-4\">\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-5x \"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Search for PEOPLE</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\" (click)=\"navigate(3)\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">EVENTS</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center mt-4\">\n          <i class=\"fa fa-calendar fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Find Events</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\" (click)=\"navigate(2)\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">COMPETITION/EXAMS</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center mt-4\">\n          <i class=\"fa fa-book fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Find Competition/Exams</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"modalUpload\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5>Upload PDF/Audio/Video File Here</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col\">\n          <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n          <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Upload</button>\n          <!--[disabled]=\"!uploader.getNotUploadedItems().length\"-->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"modalNotify\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color:lavender\">\n        <h6>You can Approve/Delete uploded files here.</h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col\">\n          <div class=\"row \">\n            <h6 class=\"text-center\">\n              <a href=\"/lesson\">View Content</a>\n            </h6>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Approve</button>\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s \" (click)=\"onButtonClick($event)\">Delete</button>\n            </div>\n\n          </div>\n          <div id=\"commentId\" class=\"hide mt-1 row\">\n\n            <textarea class=\"form-control mt-4\" rows=\"3\" placeholder=\"Comment here..\"></textarea>\n            <br>\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: -2%;\">Notify</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" style=\"height: 3rem\">\n        <button type=\"button\" class=\"btn btn-default\" style=\"background-color:lavender\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/portal/portal.component.ts":
/*!********************************************!*\
  !*** ./src/app/portal/portal.component.ts ***!
  \********************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortalComponent = /** @class */ (function () {
    function PortalComponent(router) {
        this.router = router;
        this.title = 'Upload a File';
    }
    // public uploader: FileUploader = new FileUploader({url: URL});
    PortalComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".page-header-wrapper").hide();
        // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        //     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //          console.log('FileUpload:uploaded:', item, status, response);
        //  alert('File uploaded successfully');
        //      };
        //  }
    };
    PortalComponent.prototype.view = function (e) {
        document.getElementById('masterId').setAttribute('style', 'display:block');
    };
    PortalComponent.prototype.navigate = function (flag) {
        if (flag === 1)
            this.router.navigate(['/resources']);
        else if (flag === 2)
            this.router.navigate(['/links']);
        else
            this.router.navigate(['/events']);
    };
    PortalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__(/*! ./portal.component.html */ "./src/app/portal/portal.component.html"),
            styles: [__webpack_require__(/*! ./portal.component.css */ "./src/app/portal/portal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary-spacing\r\n{\r\n    margin-right: 20px !important; \r\n}\r\n\r\n.width50{\r\n    width: 50%;    \r\n  }\r\n\r\n.inline{\r\n    display: inline;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-6 border card p-3 bg-light mt-2rem mb-1rem\" style=\"border:15px solid black\">\n\n  <div>\n    <h3 class=\"text-center header-blue\"> SIGN UP </h3>\n  </div>\n\n  <form [formGroup]=\"registrationForm\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"fname\">First Name:</label>\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"fname\" formControlName=\"fname\" placeholder=\"Enter First Name\"\n          name=\"fname\" required>\n        <div class=\"invalid-feedback\">Please fill out this field.</div>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"lname\">Last Name:</label>\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"lname\" formControlName=\"lname\" placeholder=\"Enter Last Name\"\n          name=\"lname\" required>\n        <div class=\"invalid-feedback\">Please fill out this field.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\" formControlName=\"email\" placeholder=\"Enter Email\" name=\"email\"\n        required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"fname\">Username:</label>\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"fname\" formControlName=\"username\" placeholder=\"Enter Usename\"\n        name=\"fname\" required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control form-control-sm\" id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\"\n          name=\"password\" required>\n        <div class=\"invalid-feedback\">Please fill out this field.</div>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"cpassword\">Confirm Password:</label>\n        <input type=\"password\" class=\"form-control form-control-sm\" id=\"cpassword\" formControlName=\"cpassword\" placeholder=\"Enter Confirm Password\"\n          name=\"cpassword\" required>\n        <div class=\"invalid-feedback\">Please fill out this field.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact\">Contact No:</label>\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"contact\" formControlName=\"contact\" NumbersOnly placeholder=\"Enter Contact No\"\n        name=\"contact\" required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"yourself\">About Yourself:</label>\n      <textarea rows=\"4\" cols=\"50\" class=\"form-control form-control-sm\" id=\"yourself\" formControlName=\"yourself\" NumbersOnly placeholder=\"Enter About Yourself\"\n        name=\"yourself\" required></textarea>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div style=\"padding-top: 2%;\">\n      <button [disabled]=\"!registrationForm.valid\" type=\"submit\" (click)=\"submit()\" class=\"btn btn-blue btn-primary float-right\">Register</button>\n    </div>\n    <div>\n      <button type=\"button\" (click)=\"cancel()\" class=\"btn link-blue btn-link float-right\">Cancel</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            parish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.parishes = [
            { value: 'teachers-0', viewValue: 'Teachers' },
            { value: 'principals-1', viewValue: 'Principals' },
            { value: 'staff-2', viewValue: 'Staff' }
        ];
    }
    RegistrationComponent.prototype.submit = function () {
        if (this.registrationForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/signin']);
        }
        this.registrationForm.reset();
    };
    RegistrationComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("#homeTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#regTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#loginTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#signinTab").addClass("active");
        this.registrationForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.css":
/*!***************************************************!*\
  !*** ./src/app/resources/resources.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    padding: 4px;\r\n}\r\n\r\n.pl5{\r\n    padding-left: 5%;\r\n}\r\n\r\n.pl-wrapper{\r\n    /* margin-top: 0px; */\r\n    background: #fff;\r\n    /* margin-bottom: 90px !important; */\r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.pd-wrapper{\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n}\r\n\r\n.total-people{\r\n    /* padding-top: 1.6em; */\r\n    font-size: 1.3em;\r\n    color: #aaa;\r\n}\r\n\r\n.p-table{\r\n    margin-top: 2em;\r\n    width: 100%;\r\n}\r\n\r\n.p-table td{\r\n    border-top: 1px solid #f5f5f5;\r\n    padding: 20px;\r\n}\r\n\r\n.p-icon{\r\n    color: #395c80;\r\n}\r\n\r\n.p-name{\r\n    font-size: 15pt;\r\n}\r\n\r\n.textCenter{\r\n    text-align: center;\r\n}\r\n\r\n.mt-0_5em{\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.fw-500{\r\n    font-weight: 500;\r\n}\r\n\r\n.e-width{\r\n    width: 60%;\r\n}\r\n\r\n.per-wrapper{\r\n    /* margin-top: 0px; */\r\n    background: #fff;\r\n    /* margin-bottom: 90px !important; */\r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.per-profile-top {\r\n    padding-bottom: 3em;\r\n    margin-bottom: 4em;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.per-profile{\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n    width: 100%;\r\n    padding: 4px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.2);\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n.person-name {\r\n    margin: 0em 0em 0.4em 0em;\r\n    padding: 0em;\r\n    line-height: 1em;\r\n    font-size: 3em;\r\n}\r\n\r\n.person-details {\r\n    margin-left: .3em;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.person-details-item {\r\n    margin: .7em 0em;\r\n}\r\n\r\n.person-secondary-details {\r\n    color: #999;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.person-secondary-details-head {\r\n    font-size: 1.4em;\r\n    padding: 0.8em 1em;\r\n    border-radius: 5px;\r\n    background-color: #F4F8FA;\r\n    color: #555861;\r\n}\r\n\r\n.per-table{\r\n    border-bottom: 1px solid #eee;\r\n    color: #999 !important;\r\n}"

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\" style=\"padding: 10%;\">\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">Resources</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center\" style=\"margin-top: 12%;\">\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-5x \"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Search for resources</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">Useful Links</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center\" style=\"margin-top: 12%;\">\n          <i class=\"fa fa-bookmark fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Find useful links</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;height: 16rem;\">\n      <div class=\"card-header cardHeaderColor d-flex justify-content-center\">TRAINING</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-center\" style=\"margin-top: 12%;\">\n          <i aria-hidden=\"true\" class=\"fa fa-users fa-5x \"></i>\n        </div>\n        <span class=\"card-text d-flex justify-content-center\">Find cources</span>\n      </div>\n    </div>\n  </div>\n</div> -->\n<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"active nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"showPeople()\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">EVENTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">COMPETITION/EXAMS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"\" style=\"padding-top: 6rem;\">\n  <div class=\"row d-none pd-wrapper\">\n    <div class=\"col-sm-4\">\n      <div class=\"card cardBorder\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" data-src=\"holder.js/100px180/?text=Image cap\" alt=\"Image cap [100%x180]\" src=\"assets/m1.jpg\" data-holder-rendered=\"true\"\n          style=\"height: 180px;width: 100%;display: block;\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">Frodo Baggins</h3>\n          <p>Teacher</p>\n          <div>\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">(616) 555-5555</span>\n          </div>\n          <div>\n            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">kausten@example.com</span>\n          </div>\n          <div>\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">11 Sheldon Ave NE Grand Rapids, MI 49503</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card cardBorder\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" data-src=\"holder.js/100px180/?text=Image cap\" alt=\"Image cap [100%x180]\" src=\"assets/w2.jpg\" data-holder-rendered=\"true\"\n          style=\"height: 180px;width: 100%;display: block;\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">Kate Austen</h3>\n          <p>Member</p>\n          <div>\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">(616) 555-5555</span>\n          </div>\n          <div>\n            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">kausten@example.com</span>\n          </div>\n          <div>\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">11 Sheldon Ave NE Grand Rapids, MI 49503</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card cardBorder\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" data-src=\"holder.js/100px180/?text=Image cap\" alt=\"Image cap [100%x180]\" src=\"assets/m2.jpg\" data-holder-rendered=\"true\"\n          style=\"height: 180px;width: 100%;display: block;\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">Phillip Halpert</h3>\n          <p>Priest</p>\n          <div>\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">(616) 555-5555</span>\n          </div>\n          <div>\n            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">kausten@example.com</span>\n          </div>\n          <div>\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            <span class=\"pl5\">11 Sheldon Ave NE Grand Rapids, MI 49503</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pl-wrapper mb-5\">\n    <div class=\"total-people\">10 People</div>\n    <div>\n      <table class=\"p-table\">\n        <tbody>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" (click)=\"openPerson(1)\" class=\"link-blue\">Austen, Kate</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (20)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Baggins, Frodo</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Male (22)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Boseman, Chadwick</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Male (30)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Bourne, Alison</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (20)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Bourne, Jason</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Male (19)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Bourne, Marie</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (21)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(1)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Flintstone, Fred</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Male (22)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(2)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" (click)=\"openPerson(2)\" class=\"link-blue\">Flintstone, Pebbles</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (23)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(2)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Flintstone, Wilma</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (24)</div>\n            </td>\n          </tr>\n          <tr [ngClass]=\"setClasses(2)\">\n            <td class=\"\">\n              <div class=\"pull-left mr-3 mt-0_5em p-icon\">\n                <i aria-hidden=\"true\" class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"pull-left p-name e-width\">\n                <a href=\"javascript:void(0);\" class=\"link-blue\">Halpert, Cecelia</a>\n              </div>\n              <div class=\"mt-0_5em fw-500\">Female (26)</div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div id=\"flag1\" class=\"per-wrapper mb-5\">\n    <div class=\"per-profile-top\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <img src=\"https://files.breezechms.com/img/profiles/upload/5b743818d7771.jpg\" class=\"per-profile\">\n        </div>\n        <div class=\"col-sm-8\">\n          <h3 class=\"person-name\">Kate Austen</h3>\n          <div class=\"person-details\">\n            <div class=\"person-details-item\">\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n              <span class=\"pl5\">(616) 555-5555</span>\n            </div>\n            <div class=\"person-details-item\">\n              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n              <span class=\"pl5\">kausten@example.com</span>\n            </div>\n            <div class=\"person-details-item\">\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              <span class=\"pl5\">11 Sheldon Ave NE Grand Rapids, MI 49503</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row person-secondary-details\">\n      <div class=\"col\">\n        <h4 class=\"person-secondary-details-head\">Main</h4>\n        <table class=\"table no_border table-condensed person_details per-table\">\n          <tbody>\n            <tr>\n              <td>Name</td>\n              <td>Kate Austen</td>\n            </tr>\n            <tr>\n              <td>Gender</td>\n              <td>Female</td>\n            </tr>\n            <tr>\n              <td>Status</td>\n              <td>Member</td>\n            </tr>\n            <tr>\n              <td>Age</td>\n              <td>35 Years Old\n                <br>\n                <span class=\"birthdate\">August 21, 1984</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col\">\n        <h4 class=\"person-secondary-details-head\">Contact</h4>\n        <table class=\"table no_border table-condensed person_details per-table\">\n          <tbody>\n            <tr>\n              <td>Mobile</td>\n              <td>(616) 555-5555</td>\n            </tr>\n            <tr>\n              <td>Home</td>\n              <td>(616) 555-5555</td>\n            </tr>\n            <tr>\n              <td>Email</td>\n              <td>kausten@example.com</td>\n            </tr>\n            <tr>\n              <td>Address</td>\n              <td>11 Sheldon Ave NE Grand Rapids, MI 49503\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div id=\"flag2\" class=\"per-wrapper mb-5\">\n      <div class=\"per-profile-top\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <img src=\"https://files.breezechms.com/img/profiles/upload/5b743818d7771.jpg\" class=\"per-profile\">\n          </div>\n          <div class=\"col-sm-8\">\n            <h3 class=\"person-name\">Pebbles Flintstone</h3>\n            <div class=\"person-details\">\n              <div class=\"person-details-item\">\n                <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                <span class=\"pl5\">(616) 555-5555</span>\n              </div>\n              <div class=\"person-details-item\">\n                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n                <span class=\"pl5\">p.flintstone@example.com</span>\n              </div>\n              <div class=\"person-details-item\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                <span class=\"pl5\">11 Sheldon Ave NE Grand Rapids, MI 49503</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row person-secondary-details\">\n        <div class=\"col\">\n          <h4 class=\"person-secondary-details-head\">Main</h4>\n          <table class=\"table no_border table-condensed person_details per-table\">\n            <tbody>\n              <tr>\n                <td>Name</td>\n                <td>Pebbles Flintstone</td>\n              </tr>\n              <tr>\n                <td>Gender</td>\n                <td>Female</td>\n              </tr>\n              <tr>\n                <td>Status</td>\n                <td>Member</td>\n              </tr>\n              <tr>\n                <td>Age</td>\n                <td>35 Years Old\n                  <br>\n                  <span class=\"birthdate\">August 21, 1984</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col\">\n          <h4 class=\"person-secondary-details-head\">Contact</h4>\n          <table class=\"table no_border table-condensed person_details per-table\">\n            <tbody>\n              <tr>\n                <td>Mobile</td>\n                <td>(616) 555-5555</td>\n              </tr>\n              <tr>\n                <td>Home</td>\n                <td>(616) 555-5555</td>\n              </tr>\n              <tr>\n                <td>Email</td>\n                <td>p.flintstone@example.com</td>\n              </tr>\n              <tr>\n                <td>Address</td>\n                <td>11 Sheldon Ave NE Grand Rapids, MI 49503\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n</div>\n<div id=\"modalUpload\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5>Upload PDF/Audio/Video File Here</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col\">\n          <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n          <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Upload</button>\n          <!--[disabled]=\"!uploader.getNotUploadedItems().length\"-->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"modalNotify\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color:lavender\">\n        <h6>You can Approve/Delete uploded files here.</h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col\">\n          <div class=\"row \">\n            <h6 class=\"text-center\">\n              <a href=\"/lesson\">View Content</a>\n            </h6>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Approve</button>\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s \" (click)=\"onButtonClick($event)\">Delete</button>\n            </div>\n\n          </div>\n          <div id=\"commentId\" class=\"hide mt-1 row\">\n\n            <textarea class=\"form-control mt-4\" rows=\"3\" placeholder=\"Comment here..\"></textarea>\n            <br>\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: -2%;\">Notify</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" style=\"height: 3rem\">\n        <button type=\"button\" class=\"btn btn-default\" style=\"background-color:lavender\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".page-header-wrapper").hide();
        var user = localStorage.getItem("user");
        if (user === "event_owner") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".total-people").text("3 People");
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
    };
    ResourcesComponent.prototype.setClasses = function (flag) {
        var user = localStorage.getItem("user");
        var classes = "";
        if (flag === 1 && user === "event_owner") {
            classes = "d-none";
        }
        return classes;
    };
    ResourcesComponent.prototype.openPerson = function (flag) {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").hide();
        if (flag === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
    };
    ResourcesComponent.prototype.showPeople = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary-spacing\r\n{\r\n    margin-right: 20px !important; \r\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-5 border card p-3 bg-light mt-2rem\" style=\"border:15px solid black\">\n\n  <div class=\"mt-3\">\n    <h3 class=\"text-center\" style=\"color:#395c80;\"> LOGIN </h3>\n  </div>\n\n  <form [formGroup]=\"signinForm\">\n    <div class=\"form-group\">\n      <label for=\"uname\">Username:</label>\n      <input type=\"text\" class=\"form-control  form-control-sm\" id=\"uname\" formControlName=\"uname\" placeholder=\"Enter username\"\n        name=\"uname\" required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control  form-control-sm\" id=\"pwd\" formControlName=\"pwd\" placeholder=\"Enter password\"\n        name=\"pswd\" required>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <!-- <button [disabled]=\"!signinForm.valid\" type=\"submit\" (click) = \"submit()\" class=\"btn btn-primary float-right btn-primary-spacing\">Login</button> -->\n    <button [disabled]=\"!signinForm.valid\" type=\"submit\" (click)=\"submit()\" class=\"btn btn-blue btn-primary float-right btn-primary-spacing\">Login</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(testservice, formBuilder, router) {
        this.testservice = testservice;
        this.formBuilder = formBuilder;
        this.router = router;
        this.users = [];
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            agree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    SigninComponent.prototype.submit = function () {
        if (this.signinForm.invalid) {
            return;
        }
        else {
            if (this.signinForm.value.uname == "admin") {
                localStorage.setItem("user", "admin");
            }
            else if (this.signinForm.value.uname == "event_owner") {
                localStorage.setItem("user", "event_owner");
            }
            this.router.navigate(['/portal']);
            // if (this.signinForm.value.uname == "user" && this.signinForm.value.pwd == "user") {
            //   this.router.navigate(['/portal']);
            // } else
            //   if (this.signinForm.value.uname == "admin" && this.signinForm.value.pwd == "admin") {
            //     this.router.navigate(['/admin']);
            //   } else {
            //     alert("Invalid Username or Password");
            //   }
        }
        this.signinForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__("#homeTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4__("#regTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4__("#signinTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4__("#loginTab").addClass("active");
        this.signinForm = this.formBuilder.group({
            uname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.subscription = this.testservice.getMessage().subscribe(function (message) { _this.message = message; });
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/student-registration/student-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/student-registration/student-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border p-3 mt-2rem bg-light mb-1rem\" style=\"overflow:auto;\">\n    <div>\n        <h3 class=\"text-center header-blue\"> STUDENT REGISTRATION </h3>\n    </div>\n    <form [formGroup]=\"studRegisterForm\">\n        <div class=\"form-group\">\n            <label for=\"lastName\" >Student Name:</label>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <input type=\"text\" placeholder=\"Enter First Name\" formControlName=\"firstName\" class=\"form-control form-control-sm col\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                    />\n                    <!-- <label>First Name</label> -->\n                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <input type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middleName\" class=\"form-control form-control-sm col\" [ngClass]=\"{ 'is-invalid': submitted && f.middleName.errors }\"\n                    />\n                    <!-- <label>Middle Name</label> -->\n                    <div *ngIf=\"submitted && f.middleName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.middleName.errors.required\">Middle Name is required</div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <input type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastName\" class=\"form-control form-control-sm col\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n                    />\n                    <!-- <label>Last Name</label> -->\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col\">\n                <label  for=\"grade\">Student's Grade:</label>\n                <select class=\"form-control form-control-sm\" formControlName=\"grade\" id=\"grade\">\n                        <option>Select Student's Grade</option>\n                    <option>Pre-KG</option>\n                    <option>KG</option>\n                    <option>1st</option>\n                    <option>2nd</option>\n                    <option>3rd</option>\n                    <option>4th</option>\n                    <option>5th</option>\n                    <option>6th</option>\n                    <option>7th</option>\n                    <option>8th</option>\n                    <option>9th</option>\n                    <option>10th</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-6\">\n                <label  for=\"DOB\">Student's Date Of Birth:</label>\n                <input type=\"date\" name=\"DOB\" formControlName=\"DOB\" style=\"width: 100%; background-color:#fff;height: calc(1.5em + .75rem + 2px);border:1px solid #ced4da;\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\" >Father's Name:</label>\n            <input type=\"text\" placeholder=\"Enter Father's Name\" formControlName=\"fatherName\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.fatherName.errors }\"\n            />\n            <div *ngIf=\"submitted && f.fatherName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.fatherName.errors.required\">Father's Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <label for=\"motherName\" >Mother's Name:</label>\n            <input type=\"text\" placeholder=\"Enter Mother's Name\"formControlName=\"motherName\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.matherName.errors }\"\n            />\n            <div *ngIf=\"submitted && f.motherName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.motherName.errors.required\">Mother's Name is required</div>\n            </div>\n        </div>\n\n\n        <div class=\"form-group \">\n            <label for=\"address1\" >Address Line 1:</label>\n            <input type=\"text\" placeholder=\"Enter Address\" formControlName=\"address1\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address1.errors }\"\n            />\n            <div *ngIf=\"submitted && f.address1.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.address1.errors.required\">Address is required</div>\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <label for=\"address2\" >Address Line 2:</label>\n            <input type=\"text\" placeholder=\"Enter Address\" formControlName=\"address2\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\"\n            />\n            <div *ngIf=\"submitted && f.address2.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.address2.errors.required\">Address is required</div>\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col\">\n                <label for=\"city\">City:</label>\n                <select class=\"form-control form-control-sm\" formControlName=\"city\" id=\"city\">\n                        <option>Select City</option>\n                    <option>Mumbai</option>\n                    <option>Trivandrum</option>\n                    <option>Pune</option>\n                    <option>Banglore</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col\">\n                <label for=\"zip\">Zip Code:</label>\n                <select class=\"form-control form-control-sm\" formControlName=\"zip\" id=\"zip\">\n                        <option>Select Zip Code</option>\n                    <option>400055</option>\n                    <option>400365</option>\n                    <option>422355</option>\n                    <option>403214</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col\">\n                <label for=\"address2\" >Telephone Number Home : </label>\n                <input type=\"number\" placeholder=\"Enter Telephone Number\" formControlName=\"telNo\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\"\n                />\n            </div>\n            <div class=\"form-group col\">\n                <label for=\"address2\" >Mobile : </label>\n                <input type=\"number\" placeholder=\"Enter Mobile Number\" formControlName=\"mobile\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\"\n                />\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <label for=\"fatherEmail\" >Email Address(Father) : </label>\n            <input type=\"email\" placeholder=\"Enter Email Name\" formControlName=\"fatherEmail\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.fatherEmail.errors }\"\n            />\n            <div *ngIf=\"submitted && f.fatherEmail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.fatherEmail.errors.required\">Email is required</div>\n            </div>\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"motherEmail\" >Email Address(Mother): </label>\n            <input type=\"email\" placeholder=\"Enter Email Name\" formControlName=\"motherEmail\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.fatherEmail.errors }\"\n            />\n            <div *ngIf=\"submitted && f.fatherEmail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.fatherEmail.errors.required\">Email is required</div>\n            </div>\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"studentEmail\" >Email Address(Student if any) : </label>\n            <input type=\"email\" placeholder=\"Enter Email Name\" formControlName=\"studentEmail\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\"\n            />\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"note\" >Note (if any)</label>\n            <input type=\"text\" placeholder=\"Enter Note\" formControlName=\"note\" class=\"form-control form-control-sm\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\"\n            />\n        </div>\n\n        <div class=\"form-group text-center\">\n\n            <!-- <button class=\"btn btn-primary float-right\" (click)=\"reset()\"> Reset\n            </button> -->\n            <button [disabled]=\"!studRegisterForm.valid\" (click)=\"onSubmit()\" class=\"btn  btn-blue btn-success ml-4 float-right\"> Register\n            </button>\n\n        </div>\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/student-registration/student-registration.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/student-registration/student-registration.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/student-registration/student-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/student-registration/student-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegistration", function() { return StudentRegistration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AlertifyService } from 'src/app/alertify.service';

var StudentRegistration = /** @class */ (function () {
    function StudentRegistration(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    StudentRegistration.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("#homeTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#regTab").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#loginTab").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#signinTab").removeClass("active");
        this.studRegisterForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^(\+\d{1,3}[- ]?)?\d{10}$")],
            fatherEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            motherEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            studentEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            note: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(StudentRegistration.prototype, "f", {
        get: function () { return this.studRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    StudentRegistration.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.studRegisterForm.invalid) {
            return;
        }
        else {
            //this.alertify.success("Student Registered successfully...");
        }
        // this.loading = true;
        // this.router.navigate(['/login']);
        // error => {
        //   this.loading = false;
    };
    StudentRegistration.prototype.reset = function () {
        this.studRegisterForm.reset();
    };
    StudentRegistration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-registration',
            template: __webpack_require__(/*! ./student-registration.component.html */ "./src/app/student-registration/student-registration.component.html"),
            styles: [__webpack_require__(/*! ./student-registration.component.scss */ "./src/app/student-registration/student-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentRegistration);
    return StudentRegistration;
}());



/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestService = /** @class */ (function () {
    function TestService() {
        this.users = [
            { id: "1", fname: "A", lname: "Raut" },
            { id: "2", fname: "P", lname: "Lokhande" }
        ];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TestService.prototype.getTodayDate = function () {
        var date = new Date();
        return date;
    };
    TestService.prototype.getUsers = function () {
        return this.users;
    };
    TestService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    TestService.prototype.clearMessage = function () {
        this.subject.next();
    };
    TestService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/textbook-order/textbook-order.component.html":
/*!**************************************************************!*\
  !*** ./src/app/textbook-order/textbook-order.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border p-3 mt-2rem bg-light mb-1rem\">\n    <div>\n        <h3 class=\"text-center header-blue\"> Text Book Order </h3>\n    </div>\n    <form [formGroup]=\"textbookOrderForm\">\n        <div class=\"form-group\">\n            <label for=\"parishName\" >Parish Name</label>\n            <input type=\"text\" formControlName=\"parishName\" class=\"form-control form-control-sm\" placeholder=\"Enter Parish Name\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"parishAddress\" >Parish Address</label>\n            <input type=\"text\" formControlName=\"parishAddress\" class=\"form-control form-control-sm\" placeholder=\"Enter Parish Address\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"principalName\" >Name of Parish Principal</label>\n            <input type=\"text\" formControlName=\"principalName\" class=\"form-control form-control-sm\" placeholder=\"Enter Name of Parish Principal\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"principalContact\" >Principal's Contact Number</label>\n            <input type=\"number\" formControlName=\"principalContact\" class=\"form-control form-control-sm\" placeholder=\"Enter Principal's Contact Number\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"contactName\" >Contact Name</label>\n            <input type=\"text\" formControlName=\"contactName\" class=\"form-control form-control-sm\" placeholder=\"Enter Contact Name\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"shippingAddr\" >Shipping Address</label>\n            <input type=\"text\" formControlName=\"shippingAddr\" class=\"form-control form-control-sm\" placeholder=\"Enter Address Where books will be shipped.\">\n        </div>\n\n        <div class=\"form-group \">\n            <label for=\"contactEmail\" >Contact's Email Address</label>\n            <input type=\"email\" formControlName=\"contactEmail\" class=\"form-control form-control-sm\" placeholder=\"Enter Contact Email Address\">\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label for=\"contactPhone\" >Contact's Phone Number</label>\n                <input type=\"number\" formControlName=\"contactPhone\" class=\"form-control form-control-sm\" pattern=\"\\d{10}\" placeholder=\"Enter Contact Phone Number\">\n            </div>\n            <div class=\"form-group col\">\n                <label for=\"alternatePhone\" >Alternate Phone Number</label>\n                <input type=\"number\" formControlName=\"alternatePhone\" class=\"form-control form-control-sm\" pattern=\"\\d{10}\" placeholder=\"Enter Alternate Phone Number\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label  for=\"schoolStartDate\">When is the anticipated start date of your parish Sunday School? </label>\n            <input type=\"date\" name=\"schoolStartDate\" data-provider=\"datepicker\" class=\"form-control form-control-sm\" formControlName=\"schoolStartDate\" id='datetimepicker'\n                style=\"width: 100%; background-color:#fff;height: calc(1.5em + .75rem + 2px);border:1px solid #ced4da;\">\n        </div>\n\n        <div id=\"orderDetails\" class=\"container borderStyle mt-4 mb-3\">\n            <h6 class=\"border-with-text bg-light\" style=\"font-size: 1.1rem;\">Order Details</h6>\n\n            <div class=\"form-group row\">\n                <label for=\"gestureNo\" class=\"col\">Gestures of the Liturgy Booklet</label>\n                <input type=\"number\" formControlName=\"gestureNo\" class=\"form-control form-control-sm col mr-2\" placeholder=\"Enter No of Books\">\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"preKgBooks\" class=\"col\">Pre-KG Books</label>\n                    <input type=\"number\" formControlName=\"preKgBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"KGBooks\" class=\"col\">KG Books</label>\n                    <input type=\"number\" formControlName=\"KGBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"firstBooks\" class=\"col\">1st Grade Books</label>\n                    <input type=\"number\" formControlName=\"firstBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"secondBooks\" class=\"col\">2nd Grade Books</label>\n                    <input type=\"number\" formControlName=\"secondBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"thirdBooks\" class=\"col\">3rd Grade Books</label>\n                    <input type=\"number\" formControlName=\"thirdBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"fourthBooks\" class=\"col\">4th Grade Books</label>\n                    <input type=\"number\" formControlName=\"fourthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"fifthBooks\" class=\"col\">5th Grade Books</label>\n                    <input type=\"number\" formControlName=\"fifthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"sixthBooks\" class=\"col\">6th Grade Books</label>\n                    <input type=\"number\" formControlName=\"sixthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"seventhBooks\" class=\"col\">7th Grade Books</label>\n                    <input type=\"number\" formControlName=\"seventhBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"eighthBooks\" class=\"col\">8th Grade Books</label>\n                    <input type=\"number\" formControlName=\"eighthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"ninethBooks\" class=\"col\">9th Grade Books</label>\n                    <input type=\"number\" formControlName=\"ninethBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"tenthBooks\" class=\"col\">10th Grade Books</label>\n                    <input type=\"number\" formControlName=\"tenthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col row\">\n                    <label for=\"eleventhBooks\" class=\"col-sm\">11th Grade Books</label>\n                    <input type=\"number\" formControlName=\"eleventhBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n                <div class=\"form-group col row\">\n                    <label for=\"twelthBooks\" class=\"col-sm\">12th Grade Books</label>\n                    <input type=\"number\" formControlName=\"twelthBooks\" class=\"form-control form-control-sm col-sm-5 mr-2\" placeholder=\"No of Books\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"comments\" >Additional Comments or Needs</label>\n                <textarea formControlName=\"comments\" class=\"form-control form-control-sm\" placeholder=\"Enter Additional Comments or Needs\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group text-right\">\n            <button [disabled]=\"!textbookOrderForm.valid\" (click)=\"onSubmit()\" class=\"btn btn-blue btn-success\">\n                Register\n            </button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/textbook-order/textbook-order.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/textbook-order/textbook-order.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-with-text {\n  width: 7rem;\n  margin-top: -0.6rem;\n  color: #395c80; }\n\n.borderStyle {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6; }\n"

/***/ }),

/***/ "./src/app/textbook-order/textbook-order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/textbook-order/textbook-order.component.ts ***!
  \************************************************************/
/*! exports provided: TextbookOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbookOrderComponent", function() { return TextbookOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextbookOrderComponent = /** @class */ (function () {
    function TextbookOrderComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    TextbookOrderComponent.prototype.ngOnInit = function () {
        this.textbookOrderForm = this.formBuilder.group({
            parishName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parishAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            principalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            principalContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shippingAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            contactPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alternatePhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            schoolStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gestureNo: [''],
            preKgBooks: [''],
            KGBooks: [''],
            firstBooks: [''],
            secondBooks: [''],
            thirdBooks: [''],
            fourthBooks: [''],
            fifthBooks: [''],
            sixthBooks: [''],
            seventhBooks: [''],
            eighthBooks: [''],
            ninethBooks: [''],
            tenthBooks: [''],
            eleventhBooks: [''],
            twelthBooks: [''],
            comments: ['']
        });
    };
    TextbookOrderComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.textbookOrderForm.invalid) {
            return;
        }
        else {
            alert("TextBooks ordered successfully...");
            console.log(this.textbookOrderForm.value);
        }
        this.textbookOrderForm.reset();
    };
    TextbookOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textbook-order',
            template: __webpack_require__(/*! ./textbook-order.component.html */ "./src/app/textbook-order/textbook-order.component.html"),
            styles: [__webpack_require__(/*! ./textbook-order.component.scss */ "./src/app/textbook-order/textbook-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TextbookOrderComponent);
    return TextbookOrderComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#l-content .m-inlineImage {\r\n    width: 100%;\r\n    float: right;\r\n    margin-left: 0;\r\n    \r\n}\r\n\t  \r\n\t  .col_2 p {\r\n\t  text-align: center;\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .col_2 p a img {\r\n\t  display: inline-block; \r\n\t  margin-left: auto; \r\n\t  margin-right: auto;\r\n\t  }\r\n\t  \r\n\t  .btn.solid {\r\n\t  border: 1px solid #eda300;\r\n\t  border-radius: 6px;\r\n\t  }\r\n\t  \r\n\t  a.btn.solid {\r\n\t  /* width: 20%; */\r\n\t  background-color: #A6B12F;\r\n      border: 1px solid #A6B12F;\r\n      color: #fff;\r\n\t  }\r\n\t  \r\n\t  .cta a.btn.solid {\r\n\t  width: 100%;\r\n\t  }\r\n\t  \r\n\t  @media (max-width: 800px) {\r\n\t  div.col_3.cta, a.btn.solid {\r\n\t  width: 100%;\r\n\t  }\r\n\t  }\r\n\t  \r\n\t  a.btn.solid:hover {\r\n\t  background-color: #7e8624;\r\n\t  }\r\n\t  \r\n\t  a.solid i {\r\n\t  margin-top: 5px;\r\n\t  }\r\n\t  \r\n\t  #l-content .l-main div.rome-story img {\r\n\t  border-bottom: 5px solid rgb(0, 134, 193);\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .quote img {\r\n\t  display: block;\r\n    overflow: hidden;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 50%;\r\n\t  border: none !important;\r\n\t  }\r\n\t  \r\n\t  #l-content .l-main div.rome-story h3 {\r\n\t  margin-top: 5px;\r\n\t  padding-top: 0;\r\n\t  }\r\n\t  \r\n\t  #l-content .l-main div.rome-story h3 a {\r\n\t  font-family: 'Oswald', sans-serif;\r\n\t  text-decoration: none;\r\n\t  }\r\n\t  \r\n\t  .careers li{\r\n\t  font-style: italic;\r\n\t  color: rgb(0, 134, 193);\r\n\t  }\r\n\t  \r\n\t  .careers li i {\r\n\t  color: #0F3A71;\r\n\t  }\r\n\t  \r\n\t  .commitment li {\r\n\t  font-family: 'Oswald', sans-serif;\r\n\t  text-transform: uppercase;\r\n\t  color: rgb(0, 134, 193);\r\n\t  font-weight: 400;\r\n\t  }\r\n\t  \r\n\t  .commitment li i {\r\n\t  color: #2e343b;\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .commitment span.fa-li {top: 0;}\r\n\t  \r\n\t  .program {margin-bottom:10px;\r\n\t  padding-top: 0; padding-bottom: 15px;padding-left: 15px;\r\n    padding-right: 15px;\r\n\t  }\r\n\t  \r\n\t  .program p a {text-decoration:none !important;}\r\n\t  \r\n\t  .white{background-color: #fff;}\r\n\t  \r\n\t  .tp{\r\n            display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n        }"

/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portalNavId\" class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\" style=\"background-color: #395c80!important;\">\n  <a class=\"navbar-brand\" href=\"#\">CHURCH</a>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/portal']\">DASHBOARD</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resources']\">PEOPLE</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">EVENTS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/links']\">COMPETITION/EXAMS</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/training']\">TRAINING</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          UPLOAD FILE\n        </a>\n        <div class=\"dropdown-menu fontFam\">\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Errata</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Teacher's Notes</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Activities</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Worksheets</a>\n          <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalUpload\">Review Questions</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a style=\"margin-left: -21%;\" href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\">\n          <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>(\n          <b>2</b>)\n          <i aria-hidden=\"true\" class=\"fa fa-user fa-2x\" style=\"margin-left: 10%;\"></i>\n        </a>\n        <ul class=\"dropdown-menu notify-drop fontFam\" style=\"margin-left: -155%;\">\n          <div class=\"notify-drop-title\">\n            <h6 class=\"text-center\">You have 2 notifications</h6>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i> 1.User 1 uploded pdf for lesson 2 </i>\n              </u>\n            </a>\n          </div>\n          <div class=\"notify-drop-footer text-center\">\n            <a class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#modalNotify\">\n              <u>\n                <i>2.User 1 uploded pdf for lesson 2</i>\n              </u>\n            </a>\n          </div>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- <div class=\"wrapper center-block\" style=\"padding: 10%;\">\n  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading active\" role=\"tab\" id=\"headingOne\">\n        <h4 class=\"panel-title\">\n          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n            Teacher Lessons\n            <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          </a>          \n        </h4>\n      </div>\n      <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"  data-parent=\"#accordion\">\n        <div class=\"panel-body\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\"\n            aria-controls=\"collapseTwo\">\n            Student Lessons\n            <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"  data-parent=\"#accordion\">\n        <div class=\"panel-body\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\"\n            aria-controls=\"collapseThree\">\n            Religious Lessons\n            <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\"  data-parent=\"#accordion\">\n        <div class=\"panel-body\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div style=\"padding: 8%;\">\n  <div class=\"col_12 program white\" style=\"padding: 2%;\">\n\n    <h3 class=\"intro\">Classical Education Graduate Program</h3>\n\n    <div>Join the classical education movement, and advance your career in teaching or administration as you study the history\n      of liberal education, pedagogy and the classics of the Western tradition with the most accomplished classical educators\n      in the nation.\n    </div>\n\n    <p class=\"tp\">Three Classical Education Graduate Program Tracks:</p>\n\n    <ul>\n\n      <li>Master of Arts in Humanities with Classical Education Concentration</li>\n\n      <li>Master of Humanities with Classical Education Concentration</li>\n\n      <li>Certificate of Classical Learning&nbsp;</li>\n\n    </ul>\n\n    <p class=\"mb-0\">\n      <a class=\"btn solid\" style=\"display: inline-block;\" href=\"#\" target=\"No\">Learn More</a>\n    </p>\n\n\n  </div>\n  <div class=\"col_12 program white\" style=\"padding: 2%;\">\n\n    <h3 class=\"intro\">Catholic Teacher Certificate</h3>\n\n    <div class=\"tp\">With the University of Dallas Catholic Teacher Certificate, you will meet all of the Texas Catholic Conference Education\n      Department pedagogy requirements for teaching in Texas Catholic schools. The program is comprised of 18 credit hours\n      and offers emphases in elementary or secondary education.\n    </div>\n\n    <p class=\"mb-0\">\n      <a class=\"btn solid\" style=\"display: inline-block;\" href=\"#\" target=\"No\">Learn More</a>\n    </p>\n\n\n  </div>\n  <div class=\"col_12 program white\" style=\"padding: 2%;\">\n\n    <h3 class=\"intro\">Master of Catholic School Leadership</h3>\n\n    <div class=\"tp\">\n      The University of Dallas Master of Catholic School Leadership is designed to prepare you for leadership in Catholic education.\n      Whether seeking to be a principal, president or administrator at the elementary, secondary or diocesan levels, you\n      will deepen your knowledge of the Catholic tradition and gain practical, experience-based skills for leadership through\n      the Master of Catholic School Leadership. This program is an interdisciplinary graduate degree, offered by the Ann\n      and Joe O. Neuhoff School of Ministry in conjunction with the Department of Education in the Braniff Graduate School\n      of Liberal Arts.\n    </div>\n\n    <p class=\"mb-0\">\n      <a class=\"btn solid\" style=\"display: inline-block;\" href=\"#\" target=\"No\">Learn More</a>\n    </p>\n\n\n  </div>\n</div>\n\n<div id=\"modalUpload\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5>Upload PDF/Audio/Video File Here</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col\">\n          <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n          <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Upload</button>\n          <!--[disabled]=\"!uploader.getNotUploadedItems().length\"-->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"modalNotify\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color:lavender\">\n        <h6>You can Approve/Delete uploded files here.</h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col\">\n          <div class=\"row \">\n            <h6 class=\"text-center\">\n              <a href=\"/lesson\">View Content</a>\n            </h6>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\">Approve</button>\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-success btn-s \" (click)=\"onButtonClick($event)\">Delete</button>\n            </div>\n\n          </div>\n          <div id=\"commentId\" class=\"hide mt-1 row\">\n\n            <textarea class=\"form-control mt-4\" rows=\"3\" placeholder=\"Comment here..\"></textarea>\n            <br>\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: -2%;\">Notify</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" style=\"height: 3rem\">\n        <button type=\"button\" class=\"btn btn-default\" style=\"background-color:lavender\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingComponent = /** @class */ (function () {
    function TrainingComponent() {
    }
    TrainingComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.panel-collapse').on('show.bs.collapse', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).siblings('.panel-heading').addClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.panel-collapse').on('hide.bs.collapse', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).siblings('.panel-heading').removeClass('active');
        });
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/ttc-registration/ttc-registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ttc-registration/ttc-registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-6 border mt-2rem mb-1rem card p-3 bg-light\">\n\n    <div>\n        <h3 class=\"text-center header-blue\"> TTC Registration </h3>\n        <!-- <h3 class=\"text-center\" style=\"color:purple;\"> TTC Registration Form </h3> -->\n        <!-- <p>Please fill completely the name of the teacher, telephone # and email address. Please take care in giving the email\n            address correctly.</p>\n        <hr class=\"border-dark\"> -->\n    </div>\n\n    <form id=\"subscribeForm\" [formGroup]=\"TTCregistrationForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"pname\">Parish Name:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"pname\" formControlName=\"pname\" placeholder=\"Enter Parish Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <label for=\"addr\">Parish Address:</label>\n        <div class=\"row\">\n            <div class=\"form-group  col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Address\">\n                <!-- <label>Street Address</label> -->\n            </div>\n            <div class=\"form-group  col-12\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Landmark\">\n                <!-- <label>Landmark</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your City\">\n                <!-- <label>City</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your State\">\n                <!-- <label>State</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter Your Zip code\">\n                <!-- <label>Postal/Zip Code</label> -->\n            </div>\n            <div class=\"form-group col-6\">\n                <select class=\"form-control form-control-sm\">\n                    <option>India</option>\n                    <option>England</option>\n                    <option>Australia</option>\n                </select>\n                <!-- <label>Country</label> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"prname\">Name of Principal:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"prname\" formControlName=\"prname\" placeholder=\"Enter Principal's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"vname\">Name of Vicar:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"vname\" formControlName=\"vname\" placeholder=\"Enter Vicar Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"pemail\">Principal's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"pemail\" formControlName=\"pemail\" [ngClass]=\"{'is-invalid': submitted && f.pemail.errors}\"\n                placeholder=\"Enter Principal's Email ID\" required>\n            <div *ngIf=\"submitted && f.pemail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.pemail.errors.required\">Email is required</div>\n                <div *ngIf=\"f.pemail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mobile1\">Principal's Contact Number: </label>\n            <input type=\"text\" formControlName=\"mobile1\" class=\"form-control form-control-sm\" placeholder=\"Enter Principal's Contact Number\">\n            <!-- <label>Area code</label> -->\n        </div>\n        <div class=\"form-group\">\n            <label class=\"\" for=\"vname\">Name of Teacher:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"sname\" formControlName=\"sname\" placeholder=\"Enter Student's' Name\">\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"phonenum1\">Teacher's Phone Number: </label>\n            <input type=\"text\" min=\"-999\" max=\"999\" maxlength=3 formControlName=\"phonenum1\" class=\"form-control form-control-sm\" placeholder=\"Enter Teacher's Contact Number\">\n            <!-- <label>Area code</label> -->\n        </div>\n        <div class=\"form-group\">\n            <label for=\"semail\">Teacher's Email Address:</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"semail\" formControlName=\"semail\" [ngClass]=\"{'is-invalid': submitted && f.semail.errors}\"\n                placeholder=\"Enter Student's Email ID\" required>\n            <div *ngIf=\"submitted && f.semail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.semail.errors.required\">Student's Email is required</div>\n                <div *ngIf=\"f.semail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group w-50\">\n            <label for=\"sele1\">Select Exam Date</label>\n            <select formControlName=\"group\" class=\"form-control form-control-sm\" id=\"sele1\">\n                <option>22/12/2019</option>\n                <option>01/01/2020</option>\n                <option>13/04/2020</option>\n                <option>28/07/2020</option>\n            </select>\n        </div>\n        <button type=\"submit\" (click)=\"register()\" class=\"btn btn-blue btn-primary float-right\">Register</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/ttc-registration/ttc-registration.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ttc-registration/ttc-registration.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ttc-registration/ttc-registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ttc-registration/ttc-registration.component.ts ***!
  \****************************************************************/
/*! exports provided: TTCRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTCRegistrationComponent", function() { return TTCRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TTCRegistrationComponent = /** @class */ (function () {
    function TTCRegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.TTCregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    Object.defineProperty(TTCRegistrationComponent.prototype, "f", {
        get: function () { return this.TTCregistrationForm.controls; },
        enumerable: true,
        configurable: true
    });
    TTCRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.TTCregistrationForm.invalid) {
            return;
        }
        else {
            alert("You have registered Successfully");
            this.TTCregistrationForm.reset();
        }
    };
    TTCRegistrationComponent.prototype.register = function () {
        //   $("#subscribeForm").validate({
        //     rules: {
        //         list: {
        //             required: true,
        //             minlength: 1
        //         }
        //      }
        //  });
        if (this.TTCregistrationForm.invalid) {
            return;
        }
    };
    TTCRegistrationComponent.prototype.ngOnInit = function () {
        this.TTCregistrationForm = this.formBuilder.group({
            pname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            phonenum1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonenum2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            semail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            mobile1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    TTCRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ttc-registration',
            template: __webpack_require__(/*! ./ttc-registration.component.html */ "./src/app/ttc-registration/ttc-registration.component.html"),
            styles: [__webpack_require__(/*! ./ttc-registration.component.scss */ "./src/app/ttc-registration/ttc-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TTCRegistrationComponent);
    return TTCRegistrationComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\A_Diocese\MyApp1\MyApp1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map