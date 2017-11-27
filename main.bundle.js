webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    width: 50%;\r\n    height: auto;\r\n    margin: auto;\r\n    display: block;\r\n    margin-top: 130px;\r\n    padding: 20px 20px 20px 20px;\r\n    border: 1px solid #888888;\r\n    background-color: #fefefe;\r\n}\r\n\r\ninput[type = \"text\"] {\r\n    margin: 5px 2px 5px 60px;\r\n    padding: 7px 10px 7px 10px;\r\n    border-radius: 10px;\r\n    border: 1px solid #cccccc;\r\n}\r\n.content-bot{\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n.content-user{\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n.other{\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: -webkit-right;\r\n    margin: 10px 0px 0px 0px;\r\n}\r\n\r\n.other button[type = \"submit\"] {\r\n    border-style: none;\r\n    padding: 10px 40px 10px 40px;\r\n    box-shadow: 1px 1px 2px 0px #4CAF50;\r\n    background-color: #4CAF50;\r\n    color: #ffffff;\r\n}\r\n\r\n.content-user span{\r\n    color: red;\r\n    margin: 0px 0px 0px 59px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"af.authState === null\">\r\n          vui lòng đăng nhập\r\n            <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n     </div>\r\n    <div class=\"content\" *ngIf=\"af.authState !== null\">\r\n        <form (ngSubmit) = \"insertData()\" method=\"get\" #myForm = \"ngForm\">\r\n            <div class=\"content-bot\">\r\n                <label for=\"botsay\"><b>Bot Say</b></label>\r\n                <input type=\"text\" placeholder=\"bot say\" name=\"bot\" [(ngModel)] = \"rep\" required>\r\n            </div>\r\n            <div class=\"content-user\">\r\n                <label for=\"usersay\"><b>User Say</b></label>\r\n                <input type=\"text\" placeholder=\"user say\" name=\"user\" [(ngModel)] = \"ques\" required>\r\n                <span *ngIf=\"messageError !== null\">{{messageError}}</span>\r\n            </div>\r\n            <div class=\"other\">\r\n                <input type=\"file\" (change)=\"openFile($event)\">\r\n                <button type=\"submit\">Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(af, router) {
        this.af = af;
        this.router = router;
        this.ques = '';
        this.rep = '';
        this.messageError = '';
    }
    /**
     * insertData
     */
    AdminComponent.prototype.insertData = function () {
        if (this.validate === true) {
            this.af.insertMessageText(this.ques, this.rep);
            this.ques = '';
            this.rep = '';
        }
    };
    Object.defineProperty(AdminComponent.prototype, "validate", {
        get: function () {
            console.log(this.ques + '  ' + this.rep);
            if (this.ques.length <= 0 || this.rep.length <= 0 || this.ques === undefined || this.rep === undefined) {
                this.messageError = 'say bot or user bot not null';
                return false;
            }
            this.messageError = '';
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.openFile = function (event) {
        var _this = this;
        console.log(event);
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var text = reader.result;
            // var node = document.getElementById('output');
            var str = reader.result.substring(0, 2000).split(/\r\n|\n/);
            console.log(reader.result.substring(0, 2000));
            // let lastText:string = '';
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var item = str_1[_i];
                var keyi = item.split(/-/);
                // lastText += keyi[0]+' '+keyi[1]+'\n';
                // this.af.insertMessageText(keyi[0], keyi[1]);
                if (typeof (keyi[0]) !== 'undefined' && typeof (keyi[1]) !== 'undefined') {
                    _this.af.insertMessageText(keyi[0], keyi[1]);
                    console.log(keyi[0] + ' ' + keyi[1]);
                }
            }
            // node.innerText = lastText;
        };
        reader.readAsText(input.files[0]);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_chat_component__ = __webpack_require__("../../../../../src/app/users/user-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demohttp_demohttp_component__ = __webpack_require__("../../../../../src/app/demohttp/demohttp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routers = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'user-chatbot', component: __WEBPACK_IMPORTED_MODULE_3__users_user_chat_component__["a" /* UserChatBotComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'http', component: __WEBPACK_IMPORTED_MODULE_5__demohttp_demohttp_component__["a" /* DemohttpComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routers)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!--The content below is only a placeholder and can be replaced.-->\n  <!-- <nav class=\"nav nav-default\">\n      <div class=\"container-fluid\"> -->\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <!-- <div class=\"navbar-header\">\n          <a href=\"#\" class=\"navbar-brand\">Chat Messenger</a>\n        </div>\n      </div>\n    </nav> -->\n    <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_chat_component__ = __webpack_require__("../../../../../src/app/users/user-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_employesv__ = __webpack_require__("../../../../../src/app/providers/employesv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demohttp_demohttp_component__ = __webpack_require__("../../../../../src/app/demohttp/demohttp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MatInputModule } from '@material';




 //firebase
 //firebase

 //providers
 //form
 //component login
 //component user
 //component admin



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_user_chat_component__["a" /* UserChatBotComponent */],
            __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_17__demohttp_demohttp_component__["a" /* DemohttpComponent */] //component admin
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__providers_af__["a" /* AF */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_employesv__["a" /* EmployeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/demohttp/demohttp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demohttp/demohttp.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let employe of employes\">\n    <p> {{ employe.name }}</p>\n    <p> {{ employe.birthday }}</p>\n    <p> {{ employe.salary }}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/demohttp/demohttp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemohttpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_employesv__ = __webpack_require__("../../../../../src/app/providers/employesv.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemohttpComponent = (function () {
    function DemohttpComponent(sv) {
        this.sv = sv;
    }
    DemohttpComponent.prototype.ngOnInit = function () {
        this.getEmployeWithObservable();
    };
    DemohttpComponent.prototype.getEmployeWithPromise = function () {
        var _this = this;
        this.sv.getEmployeWithPromise()
            .then(function (employes) {
            console.log(employes);
            _this.employes = employes;
        });
    };
    DemohttpComponent.prototype.getEmployeWithObservable = function () {
        var _this = this;
        this.sv.getEmployeWithObservable()
            .subscribe(function (employes) {
            console.log(employes);
            _this.employes = employes;
        }, function (error) { return console.log(error); });
    };
    return DemohttpComponent;
}());
DemohttpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-demohttp',
        template: __webpack_require__("../../../../../src/app/demohttp/demohttp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demohttp/demohttp.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_employesv__["a" /* EmployeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_employesv__["a" /* EmployeService */]) === "function" && _a || Object])
], DemohttpComponent);

var _a;
//# sourceMappingURL=demohttp.component.js.map

/***/ }),

/***/ "../../../../../src/app/entity/Messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(ques, rep) {
        this.ques = ques;
        this.rep = rep;
    }
    return Message;
}());

//# sourceMappingURL=Messages.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".model-content{\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto;\r\n    border: 1px solid #888888;\r\n    width: 80%;\r\n}\r\n\r\n.imageContainer{\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n    position: relative;\r\n}\r\n\r\n.mat-form-field {\r\n    width: inherit;\r\n    /* padding: 12px 20px; */\r\n    margin: 5px 0;\r\n    /* display: inline-block; */\r\n    /* border: 1px solid #cccccc; */\r\n    /* box-sizing: border-box; */\r\n}\r\n.loginContainer {\r\n    width: 40%; /* Full width */\r\n    height: 60%; /* Full height */ \r\n    margin: auto;\r\n    box-shadow: 20%;\r\n}\r\n\r\n.container-content {\r\n    padding: 16px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\nimg.avatar{\r\n    width: 40%;\r\n    /* border-radius: 50%; */\r\n}\r\n\r\nbutton.button-login{\r\n    background-color: #4caf54;\r\n    color: white;\r\n    border: none;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n}\r\n\r\n.container-login-other{\r\n    margin: 5px 0px 0px 0px;\r\n    text-align: -webkit-right;\r\n}\r\n\r\nbutton.container-login-google{\r\n    border: none;\r\n    background-color: white;\r\n    color: black;   \r\n    cursor: pointer;\r\n    padding: 5px 20px;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nbutton.container-login-fb{\r\n    border: none;\r\n    background-color: white;\r\n    color: black;   \r\n    cursor: pointer;\r\n    padding: 5px 20px;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nbutton.container-login-fb:hover{\r\n    background-color: #4267B2;\r\n    color: white; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginContainer\">\r\n    <form class=\"model-content\" (ngSubmit)=\"loginWithEmail()\" #myForm = \"ngForm\" method=\"POST\">\r\n        <div class=\"imageContainer\">\r\n            <img src=\"./assets/image/chatbot-avatar-03.png\" alt=\"Avatar\" class=\"avatar\">\r\n        </div>\r\n        <div class=\"container-content\">\r\n            <!-- <label for=\"username\"><b>Username</b></label> -->\r\n            <!-- <input type=\"email\" name=\"uemail\" placeholder=\"Enter Username\" [(ngModel)]= \"email\" required> -->\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]= \"email\">\r\n                <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <p *ngIf=\"errorMessage.length > 0\" class=\"text-danger\">{{errorMessage}}</p>\r\n\r\n            <!-- <label for=\"pass\"><b>Password</b></label> -->\r\n            <!-- <input type=\"password\" name=\"psw\" placeholder=\"Enter Password\" [(ngModel)]=\"pass\" required> -->\r\n            <mat-form-field>\r\n                <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"passFormControl\" [(ngModel)]= \"pass\">\r\n                <mat-error *ngIf=\"passFormControl.hasError('pattern')\">\r\n                    Please enter a valid password\r\n                </mat-error>\r\n                <mat-error *ngIf=\"passFormControl.hasError('required')\">\r\n                    Password is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <p *ngIf=\"error.message.length > 0\" class=\"text-danger\">{{error.message}}</p>\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\r\n            <div class=\"container-login-other\">\r\n                <button type=\"button\" class=\"container-login-google\" (click)=\"loginWithGoogle()\">\r\n                    <span>\r\n                        <img src=\"//www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg\" alt=\"\" srcset=\"\">\r\n                    </span>\r\n                    <span>Login Google</span>\r\n                </button>\r\n                <button type=\"button\" class=\"container-login-fb\" (click)=\"loginWithFB()\">\r\n                    <span>\r\n                        <i>\r\n                            <img src = \"//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_facebook.svg\" alt = \"\" srcset = \"\">\r\n                        </i>\r\n                    </span>\r\n                    <span>Login Facebook</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url__ = __webpack_require__("../../../../url/url.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_url__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var PASS_REGEX = /^(\w+\S+)$/;
var filePath = '../../assets/input.txt';
var fileData = 'Hello, World!';
var LoginComponent = (function () {
    function LoginComponent(af, router) {
        // af.insertMessageText('hello','hello there');
        // FS.createReadStream('abc');
        // this.fs.createReadStream("abc.txt");
        this.af = af;
        this.router = router;
        // private fs = require('fs');
        this.email = '';
        this.pass = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(EMAIL_REGEX)
        ]);
        this.passFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(PASS_REGEX)
        ]);
        var myUrl = __WEBPACK_IMPORTED_MODULE_4_url__["parse"]('http://www.typescriptlang.org');
        console.log(myUrl);
    }
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        return this.af.loginWithGoogle()
            .then(function () {
            _this.router.navigate(['/user-chatbot']);
        })
            .catch(function (_error) {
            _this.error = _error;
            _this.router.navigate(['/']);
        });
    };
    // tslint:disable-next-line:one-line
    LoginComponent.prototype.loginWithFB = function () {
        var _this = this;
        return this.af.loginWithFacebook()
            .then(function () {
            _this.router.navigate(['/user-chatbot']);
        })
            .catch(function (_error) {
            _this.error = _error;
            _this.router.navigate(['/']);
        });
    };
    // tslint:disable-next-line:one-line
    LoginComponent.prototype.loginWithEmail = function () {
        var _this = this;
        if (this.validateForm(this.email, this.pass)) {
            return this.af.loginWithEmail(this.email, this.pass)
                .then(function () {
                _this.router.navigate(['/user-chatbot']);
                // this.router.navigateByUrl('/user');
            })
                .catch(function (_error) {
                _this.error = _error;
                _this.router.navigate(['/']);
            });
        }
    };
    // tslint:disable-next-line:one-line
    LoginComponent.prototype.validateForm = function (email, pass) {
        if (email === null || email.length === 0
            || pass === null || pass.length === 0) {
            return false;
        }
        return true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/af.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AF = (function () {
    function AF(af, db, router) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.router = router;
        this.filters = {};
        this.db.list('/messages/message_insert')
            .subscribe(function (animals) {
            _this.message = animals;
            _this.applyFilters();
        });
        this.af.authState.subscribe(function (user) {
            console.log(user);
            _this.authState = user;
        });
    }
    Object.defineProperty(AF.prototype, "isUserLogedIn", {
        get: function () {
            return (this.authState !== null) ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AF.prototype, "currentUserId", {
        get: function () {
            return (this.authState !== null) ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AF.prototype, "currentUser", {
        get: function () {
            return (this.authState !== null) ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AF.prototype, "isUserEmailLoggedIn", {
        get: function () {
            if (this.authState !== null && this.isUserLogedIn) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
    AF.prototype.loginWithEmail = function (email, pass) {
        var _this = this;
        return this.af.auth.signInWithEmailAndPassword(email, pass)
            .then(function (res) {
            _this.authState = res;
            console.log(res);
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    AF.prototype.loginWithGoogle = function () {
        var _this = this;
        return this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (res) {
            _this.authState = res;
            console.log(_this.authState);
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    /**
     * loginWithGoogle
     */
    AF.prototype.loginWithFacebook = function () {
        var _this = this;
        return this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (resfb) {
            _this.authState = resfb;
            console.log(_this.authState);
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        this.af.auth.signOut();
        this.router.navigate(['/']);
    };
    /**
     * insertMessageText
     * @param text: string
     * @param rep: string
     */
    AF.prototype.insertMessageText = function (ques, rep) {
        var message = {
            ques: ques,
            rep: rep
        };
        //   this.messages.push(message);
        this.db.list('/messages/message_insert').push(message);
    };
    /**
     * getListData
     */
    AF.prototype.getListData = function () {
        return this.db.list('/messages/message_list');
    };
    AF.prototype.applyFilters = function () {
        // this.filteredMessages = _.filter(this.message, _.conforms(this.filters) )
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.message, __WEBPACK_IMPORTED_MODULE_5_lodash__["conforms"](this.filters));
    };
    /// filter property by equality to rule
    AF.prototype.filterExact = function (property, rule) {
        this.filters[property] = function (val) { return val == rule; };
        return this.applyFilters();
    };
    return AF;
}());
AF = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AF);

var _a, _b, _c;
//# sourceMappingURL=af.js.map

/***/ }),

/***/ "../../../../../src/app/providers/employesv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeService = (function () {
    function EmployeService(http) {
        this.http = http;
        this.get_Url = 'http://localhost/demoangularjs/angularjsbService/webservicephp.php';
    }
    EmployeService.prototype.getEmployeWithPromise = function () {
        return this.http.get(this.get_Url)
            .toPromise()
            .then(this.extractData)
            .catch(this.getEmployeWithPromise);
    };
    EmployeService.prototype.getEmployeWithObservable = function () {
        return this.http.get(this.get_Url)
            .map(this.extractData);
    };
    EmployeService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    EmployeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    EmployeService.prototype.handelErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return EmployeService;
}());
EmployeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], EmployeService);

var _a;
//# sourceMappingURL=employesv.js.map

/***/ }),

/***/ "../../../../../src/app/users/UserChatBotComponent.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-content{\r\n    position: relative;\r\n    padding: 15px 15px 15px;\r\n    margin: 0 -15px 0px;\r\n    border-color: #e5e5e5 #eeeeee #eeeeee;\r\n    border-style: solid;\r\n    border-width: 1px 0;\r\n    background-color: #e1e2e3;\r\n    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .05);\r\n    height: 60vh;\r\n    overflow-y: scroll; \r\n}\r\n\r\n#messages{\r\n    background-color: #ffffff !important;\r\n}\r\n\r\n.author_1{\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  font-size: 12px;\r\n  display: block;\r\n}\r\n\r\n.author_2{\r\n  width: 40px;\r\n  height: 40px;\r\n  float: right;\r\n  font-size: 12px;\r\n  display: block;\r\n}\r\n\r\n.bubble_1{\r\n    float: left;\r\n    width: auto;\r\n    height: auto;\r\n    background-color: #F2F2F2;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 6px #B2B2B2;\r\n    display: block;\r\n    padding: 10px 18px;\r\n    position: relative;\r\n    /* vertical-align: top; */\r\n    margin-left: 16px;\r\n    word-spacing: 0px;\r\n    /* line-height: 16px; */\r\n    max-width: 550px;\r\n  }\r\n\r\n  .bubble_2{\r\n    float: right;\r\n    width: auto;\r\n    height: auto;\r\n    background-color: #F2F2F2;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 6px #B2B2B2;\r\n    display: block;\r\n    padding: 10px 18px;\r\n    position: relative;\r\n    /* vertical-align: top; */\r\n    margin-right: 16px;\r\n    word-spacing: 0px;\r\n    /* line-height: 16px; */\r\n    max-width: 550px;\r\n    background-color: #4080FF;\r\n  }\r\n\r\n  .message-text {\r\n    display: block;\r\n    padding: 9.5px;\r\n    margin: 0 0 10px;\r\n    font-size: 13px;\r\n    line-height: 1.42857143;\r\n    color: #333;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    width: 98%;\r\n  }\r\n\r\n  .send-message {\r\n    color: #ffffff;\r\n    background-color: #4184f3;\r\n    text-decoration: none;\r\n    padding: 10px 20px 10px 20px;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n    border-style: none;\r\n  }\r\n\r\n.bubble::before{\r\n    background-color: #f2f2f2;\r\n    display: block;\r\n    /* height: 16px; */\r\n    position: absolute;\r\n    /* top: 11px; */\r\n    transform: rotate(29deg) skew(-45deg);\r\n    -moz-transform: rotate(29deg) skew(-35deg);\r\n    -ms-transform: rotate(29deg) skew(-35deg);\r\n    -o-transform: rotate(29deg) skew(-35deg);\r\n    -webkit-transform: rotate(29deg) skew(-35deg);\r\n    /* width: 20px; */\r\n}\r\n\r\n.highlight {\r\n    padding: 9px 14px;\r\n    margin-bottom: 14px;\r\n    background-color: #f7f7f9;\r\n    border: 1px solid #e1e1e8;\r\n    border-radius: 4px;\r\n  }\r\n  .me {\r\n    display: inherit;\r\n    margin: 5px 45px 5px 20px;\r\n  }\r\n\r\n  .bot {\r\n    display: inherit;\r\n    margin: 5px 20px 5px 45px;\r\n  }\r\n  .chat-content+.highlight, .chat-content+.zero-clipboard+.highlight {\r\n    margin: 0px -15px 15px;\r\n    border-width: 0 0 1px;\r\n    border-radius: 0;\r\n  }\r\n\r\n  .highlight {\r\n    padding: 9px 14px;\r\n    margin-bottom: 14px;\r\n    background-color: #f7f7f9;\r\n    border: 1px solid #e1e1e8;\r\n    border-radius: 4px;\r\n  }\r\n\r\n.showRight{\r\n  width: 100%;\r\n  display: block;\r\n  /* z-index: 1; */\r\n}\r\n\r\n.showLeft{\r\n  width: 100%;\r\n  display: block;\r\n  margin-left: auto !important;\r\n  margin-top: 15px;\r\n  /* z-index: 2; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin: 80px auto;\">\r\n    <div *ngIf=\"af.authState === null\">\r\n        vui lòng đăng nhập\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"af.authState !== null\">\r\n\r\n        <div class=\"col-md-8 col-md-offset-2\" >\r\n            <a (click)=\"logOut()\">log Out</a>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n\r\n            <div #scrollMe class=\"chat-content\" id=\"messages\">\r\n\r\n                <!-- Point: 1 -->\r\n                <div style=\"width: 100%; height: auto; clear: both;\" *ngFor=\"let item of message_return\">\r\n                    \r\n                    <!-- hien thi ben phai man hinh-->\r\n                    <div class=\"row showRight\" *ngIf=\" item.ques != null\">\r\n                        <div class = \"author_2\">\r\n                            <img [src]=\"af.currentUser.photoURL\" alt=\"\" style=\"border-radius: 20px;\" width=\"40px\" height=\"40px\" *ngIf=\"af.currentUser.photoURL !== null\">\r\n                            <img [src]=\"'./assets/image/avatar-user.jpg'\" alt=\"\" style=\"border-radius: 20px;\" width=\"40px\" height=\"40px\" *ngIf=\"af.currentUser.photoURL === null\">\r\n                        </div>\r\n                        <!-- Point: 2 -->\r\n                        <div class =\"bubble_2\">\r\n                            <!-- <p>Hello there</p> -->\r\n                            <span style=\"font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #FFFFFF;\">\r\n                                {{item.ques}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <!-- hien thi ben trai man hinh-->\r\n                    <div class=\"row showLeft\" *ngIf=\" item.rep != null\">\r\n                        <div class = \"author_1\">\r\n                            <img src=\"./assets/image/avatar-robotic.jpg\" alt=\"\" style=\"border-radius: 20px;\" width=\"40px\" height=\"40px\">\r\n                        </div>\r\n                        <!-- Point: 2 -->\r\n                        <div class =\"bubble_1\">\r\n                            <!-- <p>Hello there</p> -->\r\n                            <span style=\"font-size: 16px; font-family: Arial, Helvetica, sans-serif;\">\r\n                                {{item.rep}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"highlight\">\r\n                <!-- Point: 3 -->\r\n                <div style=\"float: left; width: 88%;\">\r\n                    <input type=\"textarea\" class=\"message-text\" [(ngModel)] = \"newMessage\" (keyup.enter)=\"sendMessageText()\">\r\n                </div>\r\n                <div>\r\n                    <button class=\"send-message\" (click)=\"sendMessageText()\">SEND</button>\r\n                </div>\r\n                <!-- <a class=\"send-message\">SEND</a> -->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChatBotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_Messages__ = __webpack_require__("../../../../../src/app/entity/Messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserChatBotComponent = (function () {
    function UserChatBotComponent(af, router) {
        this.af = af;
        this.router = router;
        this.message_return = [];
        // af.insertMessageText("hi","hi there");
        // af.insertMessageText("i love you P-Bot","Oh! no");
        // this.messages = this.af.messages;
        if (af.authState === null) {
            router.navigate(['/login']);
        }
    }
    UserChatBotComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
        // throw new Error("Method not implemented.");
    };
    /**
     * scrollToBottom
     */
    UserChatBotComponent.prototype.scrollToBottom = function () {
        // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (error) {
            console.log('Scroll to bottom failed yo!');
        }
    };
    /**
     * getDataKeyValue
     */
    // public getDataKeyValue() {
    //     this.messages = this.af.getValueKey(this.newMessage);
    //     this.newMessage = "";
    //     console.log(this.newMessage);
    // }
    /**
     * sendMessageText
     */
    UserChatBotComponent.prototype.sendMessageText = function () {
        this.newMessage.replace('\\0\\t', null);
        if (this.newMessage.length.valueOf() > 0) {
            try {
                var filteredMessages = this.af.filterExact('ques', this.jsUcfirst(this.newMessage));
                console.log(filteredMessages.length);
                if (filteredMessages.length === 0) {
                    filteredMessages = this.af.filterExact('ques', this.newMessage);
                }
                this.message_return.push(new __WEBPACK_IMPORTED_MODULE_2__entity_Messages__["a" /* Message */](filteredMessages[0].ques, filteredMessages[0].rep));
            }
            catch (error) {
                console.log(error);
            }
            this.newMessage = "";
        }
    };
    UserChatBotComponent.prototype.jsUcfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    UserChatBotComponent.prototype.logOut = function () {
        this.af.logout();
    };
    return UserChatBotComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], UserChatBotComponent.prototype, "myScrollContainer", void 0);
UserChatBotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-chat-bot',
        template: __webpack_require__("../../../../../src/app/users/user-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/UserChatBotComponent.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserChatBotComponent);

var _a, _b, _c;
//# sourceMappingURL=user-chat.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDA2RGMxFc_4QWLw8tg5XV4CHBTbBljTzY",
        authDomain: "mychatangular.firebaseapp.com",
        databaseURL: "https://mychatangular.firebaseio.com",
        projectId: "mychatangular",
        storageBucket: "mychatangular.appspot.com",
        messagingSenderId: "946645495854"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map