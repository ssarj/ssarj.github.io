webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/affiliate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Loaded; });
var AffiliateActionTypes;
(function (AffiliateActionTypes) {
    AffiliateActionTypes["Load"] = "[Affiliate] Load";
    AffiliateActionTypes["Loaded"] = "[Affiliate] Loaded";
})(AffiliateActionTypes || (AffiliateActionTypes = {}));
var Load = /** @class */ (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = AffiliateActionTypes.Load;
    }
    return Load;
}());

var Loaded = /** @class */ (function () {
    function Loaded(payload) {
        this.payload = payload;
        this.type = AffiliateActionTypes.Loaded;
    }
    return Loaded;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes lds-heart {\r\n  0% {\r\n    -webkit-transform: scale(0.85);\r\n    transform: scale(0.85);\r\n  }\r\n  5% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  39% {\r\n    -webkit-transform: scale(0.75);\r\n    transform: scale(0.75);\r\n  }\r\n  45% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n  60% {\r\n    -webkit-transform: scale(0.85);\r\n    transform: scale(0.85);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n@-webkit-keyframes lds-heart {\r\n  0% {\r\n    -webkit-transform: scale(0.85);\r\n    transform: scale(0.85);\r\n  }\r\n  5% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  39% {\r\n    -webkit-transform: scale(0.75);\r\n    transform: scale(0.75);\r\n  }\r\n  45% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n  60% {\r\n    -webkit-transform: scale(0.85);\r\n    transform: scale(0.85);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n.lds-heart {\r\n  position: relative;\r\n  -webkit-animation: lds-heart 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  animation: lds-heart 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n.lds-heart div {\r\n  top: 72px;\r\n  left: 60px;\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 80px;\r\n  background: #912623;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.lds-heart div:after,\r\n.lds-heart div:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  display: block;\r\n  width: 80px;\r\n  height: 80px;\r\n  background: #912623;\r\n}\r\n.lds-heart div:before {\r\n  left: -52px;\r\n  border-radius: 50% 0 0 50%;\r\n}\r\n.lds-heart div:after {\r\n  top: -52px;\r\n  border-radius: 50% 50% 0 0;\r\n}\r\n.lds-heart {\r\n  width: 200px !important;\r\n  height: 200px !important;\r\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\r\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <spirit></spirit>\n\n  <open-overview [openOverviewModel]=\"openOverviewModel$ | async\" ></open-overview>\n\n  <event-score *ngFor=\"let eventScoreModel of eventScoreModels$ | async\" [eventScoreModel]=\"eventScoreModel\"></event-score>\n\n  <audit [auditViewModels]=\"auditViewModels$ | async\"></audit>\n\n  <credits></credits>\n</div>\n\n<div *ngIf=\"loading$ | async\" style=\"top: 0; left: 0; right: 0; bottom: 0; color: red; z-index: 9999; position: fixed; background-color: rgba(0, 0, 0, .8);\">\n  <div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n    <div>\n      <!--<img src=\"../assets/heart.gif\"/>-->\n      <div class=\"lds-css ng-scope\"><div style=\"width:100%;height:100%\" class=\"lds-heart\"><div></div></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_affiliate__ = __webpack_require__("../../../../../src/app/actions/affiliate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        var _this = this;
        this.store = store;
        this.eventScoreModels$ = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* select */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getEventScores */]));
        this.openOverviewModel$ = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* select */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* getOpenOverviewModel */]));
        this.auditViewModels$ = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* select */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getAuditModel */]));
        this.loading$ = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* select */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getAppLoading */]));
        setTimeout(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_affiliate__["b" /* Load */](17972));
        }, 250);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_affiliate__ = __webpack_require__("../../../../../src/app/effects/affiliate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["d" /* EventScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["g" /* TeamScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["a" /* AthleteScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["e" /* OpenOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["f" /* SpiritComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["b" /* AuditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["c" /* CreditsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__reducers__["f" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_4__reducers__["e" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    name: 'Store DevTools',
                    logOnly: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production,
                }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_11__effects_affiliate__["a" /* AffiliateEffects */]]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services__["a" /* AffiliateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/athlete-score/athlete.score.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.no_score {\n  text-decoration: line-through;\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/athlete-score/athlete.score.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <span [ngClass]=\"{'no_score': !athleteScoreModel.score.scoreDisplay} \">\r\n  {{ athleteScoreModel.athlete.firstName }}\r\n  </span>\r\n\r\n  <span style=\"float: right;\">\r\n    {{ athleteScoreModel.score.scoreDisplay }}\r\n    <span *ngIf=\"athleteScoreModel.isRxWinner\" class=\"unicode\" title=\"U+272A: CIRCLED WHITE STAR\"\r\n          style=\"color: blue;background:  transparent;\">✪</span>\r\n\r\n        <span *ngIf=\"athleteScoreModel.isScaledWinner\" class=\"unicode\" title=\"U+272A: CIRCLED WHITE STAR\"\r\n              style=\"color: #fff34c;background:  transparent;\">✪</span>\r\n\r\n    <span *ngIf=\"!athleteScoreModel.isScaledWinner && !athleteScoreModel.isRxWinner\" class=\"unicode\"\r\n          title=\"U+272A: CIRCLED WHITE STAR\" style=\"color: transparent;background:  transparent;\">✪</span>\r\n  </span>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/athlete-score/athlete.score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AthleteScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_models__ = __webpack_require__("../../../../../src/app/view-models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AthleteScoreComponent = /** @class */ (function () {
    function AthleteScoreComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__view_models__["a" /* AthleteScoreModel */])
    ], AthleteScoreComponent.prototype, "athleteScoreModel", void 0);
    AthleteScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'athlete-score',
            template: __webpack_require__("../../../../../src/app/components/athlete-score/athlete.score.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/athlete-score/athlete.score.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], AthleteScoreComponent);
    return AthleteScoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/audit/audit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  margin-top: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/audit/audit.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 id=\"score_audit\">Score Audit</h3>\r\n\r\n<div *ngFor=\"let teamAuditViewModel of auditViewModels\">\r\n  <h4>{{ teamAuditViewModel.team.name}}</h4>\r\n\r\n  <table class=\"table table-striped table-hover table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Event</th>\r\n        <th scope=\"col\">Athlete</th>\r\n        <th scope=\"col\">Score Description</th>\r\n        <th scope=\"col\">Points Awarded</th>\r\n        <th scope=\"col\">Running Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let record of teamAuditViewModel.records\">\r\n        <th scope=\"row\">{{ record.event.name }}</th>\r\n        <td>{{ record.athlete?.firstName }}</td>\r\n        <td>{{ record.aspect.description }}</td>\r\n        <td>{{ record.aspect.points }}</td>\r\n        <td>{{ record.runningTotal }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/audit/audit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditComponent = /** @class */ (function () {
    function AuditComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], AuditComponent.prototype, "auditViewModels", void 0);
    AuditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'audit',
            template: __webpack_require__("../../../../../src/app/components/audit/audit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/audit/audit.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], AuditComponent);
    return AuditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/credits/credits.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 id=\"credits\" style=\"border-bottom: 1px solid white;\">Credits</h3>\r\n\r\n<ul>\r\n  <li><a href=\"http://mattkruse.com\">Matt Kruse</a> for the API =) Also see his <a href=\"http://myopenleaderboard.com/\">Open Leaderboard!</a></li>\r\n  <li><a href=\"https://loading.io/\">loading.io</a> for the heart.</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/credits/credits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreditsComponent = /** @class */ (function () {
    function CreditsComponent() {
    }
    CreditsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'credits',
            template: __webpack_require__("../../../../../src/app/components/credits/credits.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/event-score/event.score.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"event_{{ eventScoreModel.event.ordinal }}\" style=\"margin-top: 30px;\">\r\n  <h3 style=\"border-bottom: 1px solid white;\">{{ eventScoreModel.event.name }}</h3>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngFor=\"let teamScoreModel of eventScoreModel.teams\">\r\n      <team-score [teamScoreModel]=\"teamScoreModel\"></team-score>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/event-score/event.score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_models__ = __webpack_require__("../../../../../src/app/view-models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventScoreComponent = /** @class */ (function () {
    function EventScoreComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__view_models__["b" /* EventScoreModel */])
    ], EventScoreComponent.prototype, "eventScoreModel", void 0);
    EventScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'event-score',
            template: __webpack_require__("../../../../../src/app/components/event-score/event.score.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], EventScoreComponent);
    return EventScoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/spirit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\"><img style=\"height: 50px;\" src=\"../../../assets/LogoNoTag.png\" /></a>\n\n  <div class=\"collapse navbar-collapse\" style=\"text-align: center\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_1\">18.1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_2\">18.2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_3\">18.2a</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_4\">18.3</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_5\">18.4</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#event_6\">18.5</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#score_audit\">Score Audit</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#credits\">Credits</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/spirit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpiritComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpiritComponent = /** @class */ (function () {
    function SpiritComponent() {
    }
    SpiritComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'spirit',
            template: __webpack_require__("../../../../../src/app/components/header/spirit.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], SpiritComponent);
    return SpiritComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_score_event_score_component__ = __webpack_require__("../../../../../src/app/components/event-score/event.score.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__event_score_event_score_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__athlete_score_athlete_score_component__ = __webpack_require__("../../../../../src/app/components/athlete-score/athlete.score.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__athlete_score_athlete_score_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_score_team_score_component__ = __webpack_require__("../../../../../src/app/components/team-score/team.score.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__team_score_team_score_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__open_overview_open_overview_component__ = __webpack_require__("../../../../../src/app/components/open-overview/open.overview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__open_overview_open_overview_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_spirit_component__ = __webpack_require__("../../../../../src/app/components/header/spirit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__header_spirit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_audit_component__ = __webpack_require__("../../../../../src/app/components/audit/audit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__audit_audit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credits_credits_component__ = __webpack_require__("../../../../../src/app/components/credits/credits.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__credits_credits_component__["a"]; });









/***/ }),

/***/ "../../../../../src/app/components/open-overview/open.overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-top: 30px;\n}\n\n.hakuna {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/hakuna.png")) + ");\n  background-size: cover;\n}\n\n.snatch {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/snatch.png")) + ");\n  background-size: cover;\n\n}\n\n.chalk {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/chalk.png")) + ");\n  background-size: cover;\n\n}\n\n.buck {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/buck.png")) + ");\n  background-size: cover;\n\n}\n\nh1 {\n  text-shadow: 2px 2px 5px #000000\n}\n\n.name {\n  display: none;\n}\n\n.points {\n  font-size: 8em;\n}\n\n.content:hover > .name {\n  display: block;\n}\n\n.content:hover > .points {\n  display: none;\n}\n\n/* see http://www.mademyday.de/css-height-equals-width-with-pure-css.html */\n\n.score-box {\n  text-align: center;\n  position: relative;\n}\n\n.score-box:before{\n  content: \"\";\n  display: block;\n  padding-top: 100%; \t/* initial ratio of 1:1*/\n}\n\n.content{\n  position:  absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/open-overview/open.overview.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!!openOverviewModel\" class=\"row\">\n  <div *ngFor=\"let team of openOverviewModel.teams\" class=\"score-box col-sm-12 col-md-6 col-lg-3 {{ team.code }}\" style=\"position: relative;\">\n    <div class=\"content\">\n    <h1 class=\"name\">{{ team.name }}</h1>\n    <h1 class=\"points\">{{ team.points }}</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/open-overview/open.overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_models__ = __webpack_require__("../../../../../src/app/view-models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenOverviewComponent = /** @class */ (function () {
    function OpenOverviewComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__view_models__["c" /* OpenOverviewModel */])
    ], OpenOverviewComponent.prototype, "openOverviewModel", void 0);
    OpenOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'open-overview',
            template: __webpack_require__("../../../../../src/app/components/open-overview/open.overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/open-overview/open.overview.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], OpenOverviewComponent);
    return OpenOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/team-score/team.score.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  border-radius: 10px;\r\n  background: black;\r\n  padding: 6px;\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n}\r\n\r\n.females {\r\n  background-color: palevioletred;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.males {\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  background-color: cornflowerblue;\r\n  border-radius: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-score/team.score.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4>{{ teamScoreModel.team.name }}</h4>\r\n\r\n  <div class=\"females\">\r\n    <athlete-score *ngFor=\"let athleteScoreModel of teamScoreModel.females\" [athleteScoreModel]=\"athleteScoreModel\"></athlete-score>\r\n  </div>\r\n\r\n  <div class=\"males\">\r\n    <athlete-score *ngFor=\"let athleteScoreModel of teamScoreModel.males\" [athleteScoreModel]=\"athleteScoreModel\"></athlete-score>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/team-score/team.score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_models__ = __webpack_require__("../../../../../src/app/view-models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamScoreComponent = /** @class */ (function () {
    function TeamScoreComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__view_models__["d" /* TeamScoreModel */])
    ], TeamScoreComponent.prototype, "teamScoreModel", void 0);
    TeamScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'team-score',
            template: __webpack_require__("../../../../../src/app/components/team-score/team.score.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/team-score/team.score.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], TeamScoreComponent);
    return TeamScoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/effects/affiliate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_affiliate__ = __webpack_require__("../../../../../src/app/actions/affiliate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AffiliateEffects = /** @class */ (function () {
    function AffiliateEffects(actions$, affiliateService) {
        var _this = this;
        this.actions$ = actions$;
        this.affiliateService = affiliateService;
        this.load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_4__actions_affiliate__["a" /* AffiliateActionTypes */].Load), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* switchMap */])(function (affiliateId) {
            return _this.affiliateService
                .get(affiliateId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* map */])(function (model) { return new __WEBPACK_IMPORTED_MODULE_4__actions_affiliate__["c" /* Loaded */](model); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AffiliateEffects.prototype, "load$", void 0);
    AffiliateEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AffiliateService */]])
    ], AffiliateEffects);
    return AffiliateEffects;
}());



/***/ }),

/***/ "../../../../../src/app/models/athlete.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Division */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Athlete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AthleteState; });
/* unused harmony export NoScore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Score; });
var Division;
(function (Division) {
    Division[Division["IndividualMen"] = 1] = "IndividualMen";
    Division[Division["IndividualWoman"] = 2] = "IndividualWoman";
    Division[Division["MastersMen45_49"] = 3] = "MastersMen45_49";
    Division[Division["MastersWoman45_49"] = 4] = "MastersWoman45_49";
    Division[Division["MastersMen50_54"] = 5] = "MastersMen50_54";
    Division[Division["MastersWoman50_54"] = 6] = "MastersWoman50_54";
    Division[Division["MastersMen55_59"] = 7] = "MastersMen55_59";
    Division[Division["MastersWoman55_59"] = 8] = "MastersWoman55_59";
    Division[Division["MastersMen60"] = 9] = "MastersMen60";
    Division[Division["MastersWoman60"] = 10] = "MastersWoman60";
    Division[Division["Team"] = 11] = "Team";
    Division[Division["MastersMen40_44"] = 12] = "MastersMen40_44";
    Division[Division["MastersWoman40_44"] = 13] = "MastersWoman40_44";
    Division[Division["TeenageBoys14_15"] = 14] = "TeenageBoys14_15";
    Division[Division["TeenageGirls14_15"] = 15] = "TeenageGirls14_15";
    Division[Division["TeenageBoys16_17"] = 16] = "TeenageBoys16_17";
    Division[Division["TeenageGirls16_17"] = 17] = "TeenageGirls16_17";
})(Division || (Division = {}));
var isScore = function (score) {
    var judge = score.judge;
    // You need to have a judge to be scored, so seems like the best bet.
    return judge !== undefined && judge !== null && judge !== "";
};
var Athlete = /** @class */ (function () {
    function Athlete(id, firstName, lastName, state, division, gender, scores) {
        if (firstName === void 0) { firstName = null; }
        if (lastName === void 0) { lastName = null; }
        if (state === void 0) { state = AthleteState.Loading; }
        if (gender === void 0) { gender = "M"; }
        if (scores === void 0) { scores = []; }
        var _this = this;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.state = state;
        this.division = division;
        this.gender = gender;
        this.scores = scores;
        this.eventScoreMap = new Map();
        scores.forEach(function (score) {
            _this.eventScoreMap.set(score.ordinal, score);
        });
    }
    Athlete.prototype.getScore = function (event) {
        if (!this.eventScoreMap.has(event.ordinal))
            return new NoScore();
        var score = this.eventScoreMap.get(event.ordinal);
        if (!isScore(score))
            return new NoScore();
        return score;
    };
    Athlete.prototype.hasScore = function (event) {
        return isScore(this.getScore(event));
    };
    Athlete.prototype.isMale = function () {
        return this.gender === "M";
    };
    return Athlete;
}());

var AthleteState;
(function (AthleteState) {
    AthleteState[AthleteState["Loading"] = 0] = "Loading";
    AthleteState[AthleteState["Loaded"] = 1] = "Loaded";
})(AthleteState || (AthleteState = {}));
var NoScore = /** @class */ (function () {
    function NoScore() {
    }
    Object.defineProperty(NoScore.prototype, "isScore", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return NoScore;
}());

var Score = /** @class */ (function () {
    function Score(ordinal, rank, scoreDisplay, breakdown, judge, scaled) {
        this.ordinal = ordinal;
        this.rank = rank;
        this.scoreDisplay = scoreDisplay;
        this.breakdown = breakdown;
        this.judge = judge;
        this.scaled = scaled;
    }
    Object.defineProperty(Score.prototype, "isScore", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Score;
}());



/***/ }),

/***/ "../../../../../src/app/models/event-team-award.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTeamAward; });
var EventTeamAward = /** @class */ (function () {
    function EventTeamAward(eventOrdinal, teamId, award) {
        this.eventOrdinal = eventOrdinal;
        this.teamId = teamId;
        this.award = award;
    }
    return EventTeamAward;
}());



/***/ }),

/***/ "../../../../../src/app/models/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(ordinal, name, scoreRecordedPoints) {
        if (scoreRecordedPoints === void 0) { scoreRecordedPoints = true; }
        this.ordinal = ordinal;
        this.name = name;
        this.scoreRecordedPoints = scoreRecordedPoints;
    }
    Object.defineProperty(Event.prototype, "id", {
        get: function () {
            return this.ordinal.toString();
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__athlete__ = __webpack_require__("../../../../../src/app/models/athlete.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__athlete__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__athlete__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__athlete__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__athlete__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team__ = __webpack_require__("../../../../../src/app/models/team.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__team__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__("../../../../../src/app/models/event.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__score_aspect__ = __webpack_require__("../../../../../src/app/models/score-aspect.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/models/score-aspect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreAspect; });
// Conceptually, some of these only make sense for teams *or* individuals.
var ScoreAspect = /** @class */ (function () {
    function ScoreAspect(description, points) {
        this.description = description;
        this.points = points;
    }
    ScoreAspect.createJudges = function (points) {
        return new ScoreAspect('Athletes Completed Judges Course', points);
    };
    ScoreAspect.createFnl = function (points) {
        return new ScoreAspect('Athletes Attending FNL', points);
    };
    ScoreAspect.SpiritScoreAspect = new ScoreAspect('Team Spirit Award', 3);
    ScoreAspect.ScoreRecordedScoreAspect = new ScoreAspect('Athlete Score Recorded', 1);
    ScoreAspect.WonScaledScoreAspect = new ScoreAspect('Athlete Won Scaled Division', 1);
    ScoreAspect.WonRxScoreAspect = new ScoreAspect('Athlete Won RX Division', 1);
    ScoreAspect.TeamTopsAward = new ScoreAspect('Full Team Wearing Uniform', 1);
    return ScoreAspect;
}());



/***/ }),

/***/ "../../../../../src/app/models/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(id, name, athleteIds, code) {
        this.id = id;
        this.name = name;
        this.athleteIds = athleteIds;
        this.code = code;
    }
    return Team;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_affiliate__ = __webpack_require__("../../../../../src/app/actions/affiliate.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: true
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_affiliate__["a" /* AffiliateActionTypes */].Loaded: {
            var loading = false;
            return __assign({}, state, { loading: loading });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../../../../src/app/reducers/athletes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export convertModel */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAthleteEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_affiliate__ = __webpack_require__("../../../../../src/app/actions/affiliate.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    athletes: []
};
var convertModel = function (athleteModel) {
    var scores = athleteModel.scores.map(function (score) {
        var rank = parseInt(score.rank, 10);
        var scaled = score.scaled === "1";
        return new __WEBPACK_IMPORTED_MODULE_0__models__["d" /* Score */](score.ordinal, rank, score.scoreDisplay, score.breakdown, score.judge, scaled);
    });
    var entrant = athleteModel.entrant;
    var division = parseInt(entrant.divisionId, 10);
    return new __WEBPACK_IMPORTED_MODULE_0__models__["a" /* Athlete */](entrant.competitorId, entrant.firstName, entrant.lastName, __WEBPACK_IMPORTED_MODULE_0__models__["b" /* AthleteState */].Loaded, division, entrant.gender, scores);
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_affiliate__["a" /* AffiliateActionTypes */].Loaded: {
            var models = action.payload;
            var athletes = models.map(convertModel);
            return __assign({}, state, { athletes: athletes });
        }
        default: {
            return state;
        }
    }
}
var getAthleteEntities = function (state) { return state.athletes; };


/***/ }),

/***/ "../../../../../src/app/reducers/awards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEventTeamAwardEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__ = __webpack_require__("../../../../../src/app/models/score-aspect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teams__ = __webpack_require__("../../../../../src/app/reducers/teams.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__ = __webpack_require__("../../../../../src/app/models/event-team-award.ts");



var initialState = {
    eventTeamAwards: [
        // EVENT 1
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].SpiritScoreAspect),
        // FNL
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(9)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(9)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(9)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(11)),
        // KIT
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        // JUDGES
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(7)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(7)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(6)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](1, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(7)),
        // EVENT 2
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].SpiritScoreAspect),
        // FNL
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(8)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(10)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(9)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createFnl(10)),
        // KIT
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].TeamTopsAward),
        // JUDGES
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].HAKUNA, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(1)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].BUCK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(0)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].SNATCH, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(0)),
        new __WEBPACK_IMPORTED_MODULE_2__models_event_team_award__["a" /* EventTeamAward */](2, __WEBPACK_IMPORTED_MODULE_1__teams__["a" /* Teams */].CHALK, __WEBPACK_IMPORTED_MODULE_0__models_score_aspect__["a" /* ScoreAspect */].createJudges(0)),
    ]
};
function reducer(state) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getEventTeamAwardEntities = function (state) { return state.eventTeamAwards; };


/***/ }),

/***/ "../../../../../src/app/reducers/builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Builder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_score_aspect__ = __webpack_require__("../../../../../src/app/models/score-aspect.ts");


var EventWinnerBuilder = /** @class */ (function () {
    function EventWinnerBuilder(event) {
        this.event = event;
        this.winnerMap = new Map();
    }
    // TODO: should be renamed "include"
    EventWinnerBuilder.prototype.addAthlete = function (athlete) {
        // TODO: we may need to black list certain athletes (i.e. Liz).
        //
        if (athlete.division === 10 || athlete.division === 14)
            return;
        var score = athlete.getScore(this.event);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__models__["f" /* isScore */])(score)) {
            var key = EventWinnerBuilder.typeKey(score) + "/" + athlete.gender;
            var scaled = score.scaled;
            if (!this.winnerMap.has(key)) {
                this.winnerMap.set(key, { athlete: athlete, score: score, scaled: scaled });
                return;
            }
            var otherScore = this.winnerMap.get(key).score;
            if (otherScore.rank > score.rank) {
                // A new winner. If they're the same, then wait?
                this.winnerMap.set(key, { athlete: athlete, score: score, scaled: scaled });
            }
        }
    };
    EventWinnerBuilder.prototype.winners = function () {
        var result = [];
        this.winnerMap.forEach(function (value, key) {
            result.push(value);
        });
        return result;
    };
    EventWinnerBuilder.typeKey = function (score) {
        return score.scaled ? "SCALED" : "RX";
    };
    return EventWinnerBuilder;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.eventAthleteMap = new Map();
        this.teamMap = new Map();
        // public getScoreAspects(athlete: Athlete): ScoreAspect[] {
        //   // Judges course, one day.
        //  return [];
        // }
    }
    Builder.prototype.include = function (events, athletes, teams, eventTeamAwards) {
        // We need to find the following items:
        var _this = this;
        // const {males, females} = Builder.partitionAthletes(athletes);
        events.forEach(function (event) {
            var winnerBuilder = new EventWinnerBuilder(event);
            athletes.forEach(function (athlete) {
                winnerBuilder.addAthlete(athlete);
                if (athlete.hasScore(event) && event.scoreRecordedPoints) {
                    _this.add(event, athlete, __WEBPACK_IMPORTED_MODULE_1__models_score_aspect__["a" /* ScoreAspect */].ScoreRecordedScoreAspect);
                }
            });
            var winners = winnerBuilder.winners();
            winners.forEach(function (winner) {
                // and that would be event/athlete (could go into the same map).
                // would need to dynamically determine the winner type to score aspect, but they have the
                // same points anyway.
                var aspect = __WEBPACK_IMPORTED_MODULE_1__models_score_aspect__["a" /* ScoreAspect */].WonRxScoreAspect;
                if (winner.scaled) {
                    aspect = __WEBPACK_IMPORTED_MODULE_1__models_score_aspect__["a" /* ScoreAspect */].WonScaledScoreAspect;
                }
                _this.add(event, winner.athlete, aspect);
            });
        });
        // event/team-spirit
        // we don't have records for this yet, but eventually:
        // event/athlete/attendence
        // athlete/judges-course
    };
    Builder.prototype.add = function (event, athlete, aspect) {
        var key = Builder.createKey(event, athlete);
        if (!this.eventAthleteMap.has(key)) {
            this.eventAthleteMap.set(key, []);
        }
        this.eventAthleteMap.set(key, this.eventAthleteMap.get(key).concat(aspect));
    };
    Builder.createKey = function (event, athlete) {
        return event.ordinal + "/" + athlete.id;
    };
    Builder.prototype.getScoreAspectsForTeam = function (event, team) {
        // TODO: this might include some fuckery to work for people like Yoz.
        return [];
    };
    Builder.prototype.getScoreAspects = function (event, athlete) {
        var key = Builder.createKey(event, athlete);
        var aspects = [];
        if (this.eventAthleteMap.has(key))
            aspects = this.eventAthleteMap.get(key);
        return aspects;
    };
    return Builder;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Competitors; });
var Competitors = /** @class */ (function () {
    function Competitors() {
    }
    // Hakuna Masquata
    Competitors.CHRISTIAAN_MATTHEUS = '85507';
    Competitors.PAUL_TAYLOR = '1244541';
    Competitors.HEYDAN_BUCKNELL = '1234545';
    Competitors.ASHTON_DUERDEN = '1220325';
    Competitors.LESLEY_BINNIE = '1250938';
    Competitors.JAIME_RAPLEY = '1225172';
    Competitors.ANDRE_STRYDOM = '1237443';
    Competitors.THIJS_BOHM = '1237329';
    Competitors.TK_KURIEN = '1242832';
    Competitors.STU_MANUEL = '1240108';
    Competitors.YOZ = '1298178';
    Competitors.HAKUNA = [Competitors.CHRISTIAAN_MATTHEUS, Competitors.PAUL_TAYLOR, Competitors.HEYDAN_BUCKNELL,
        Competitors.ASHTON_DUERDEN, Competitors.LESLEY_BINNIE, Competitors.JAIME_RAPLEY,
        Competitors.ANDRE_STRYDOM, Competitors.THIJS_BOHM, Competitors.TK_KURIEN, Competitors.STU_MANUEL,
        Competitors.YOZ];
    // Buck Furpees
    Competitors.EVGENY_ZAKHAROV = '263860';
    Competitors.SIMON_FORREST = '1234543';
    Competitors.DARRYL_PAGE = '1071860';
    Competitors.ANNIKA_ROBERTS = '1212706';
    Competitors.SHANE_FORSTER = '996356';
    Competitors.ELIZABETH_STEEDMAN = '1235959';
    Competitors.NATHAN_PRINCE = '1267847';
    Competitors.MALLIK_BANDA = '1229756';
    Competitors.STEPHANIE_COLLINS = '924657';
    Competitors.CARL_MATTHEUS = '1141254';
    // .. and Nakita isn't even registered..
    Competitors.NAKITA = 'NAKITA';
    Competitors.BUCK = [Competitors.EVGENY_ZAKHAROV, Competitors.SIMON_FORREST, Competitors.DARRYL_PAGE,
        Competitors.ANNIKA_ROBERTS, Competitors.SHANE_FORSTER, Competitors.ELIZABETH_STEEDMAN,
        Competitors.NATHAN_PRINCE, Competitors.MALLIK_BANDA, Competitors.STEPHANIE_COLLINS, Competitors.CARL_MATTHEUS,
        Competitors.NAKITA];
    // Snatch me if you can
    Competitors.ERYNNE_SCHERF = '542483';
    Competitors.JETHRO_LOCHHEAD = '683513';
    Competitors.STEVE_SARJEANT = '1230734';
    Competitors.ROBERT_HARRIS = '1208372';
    Competitors.ADAM_PEARCE = '1282009';
    Competitors.JO_DEAKER = '1257336';
    Competitors.TAYLOR_SMEATH = '1251635';
    Competitors.ASYA_ZAKHAROV = '430633';
    Competitors.CARISSA_GILLIES = '704289';
    Competitors.MARIELLE_DROST = '1237337';
    Competitors.BRONI_WYATT = '1237279';
    Competitors.SNATCH = [Competitors.ERYNNE_SCHERF, Competitors.JETHRO_LOCHHEAD, Competitors.STEVE_SARJEANT,
        Competitors.ROBERT_HARRIS, Competitors.ADAM_PEARCE, Competitors.JO_DEAKER, Competitors.TAYLOR_SMEATH,
        Competitors.ASYA_ZAKHAROV, Competitors.CARISSA_GILLIES, Competitors.MARIELLE_DROST, Competitors.BRONI_WYATT];
    // Chalk Dirty to me
    Competitors.OTIS_GILLES = '1043087';
    Competitors.CAMERON_BROPHY = '1075836';
    Competitors.FEDERICO_SPINELLI = '1220289';
    Competitors.LUCY_BOLTON = '879435';
    Competitors.ANDREA_MASCHERPA = '1212131';
    Competitors.ANDREA_STRYDOM = '1237434';
    Competitors.DANIEL_SHIELDS = '1225796';
    Competitors.JONNY_SMYTH = '1229706';
    Competitors.RACHEL_MARTIN = '977323';
    Competitors.MARIA_FERNANDO = '796742';
    Competitors.NOELLE_NOBOURG = '910947';
    Competitors.CHALK = [Competitors.OTIS_GILLES, Competitors.CAMERON_BROPHY, Competitors.FEDERICO_SPINELLI,
        Competitors.LUCY_BOLTON, Competitors.ANDREA_MASCHERPA, Competitors.ANDREA_STRYDOM,
        Competitors.DANIEL_SHIELDS, Competitors.JONNY_SMYTH, Competitors.RACHEL_MARTIN,
        Competitors.MARIA_FERNANDO, Competitors.NOELLE_NOBOURG];
    return Competitors;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/events.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEventEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/models/index.ts");

var eighteenOne = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](1, "18.1");
var eighteenTwo = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](2, "18.2");
var eighteenTwoA = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](3, "18.2a", false);
var eighteenThree = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](4, "18.3");
var eighteenFour = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](5, "18.4");
var eighteenFive = new __WEBPACK_IMPORTED_MODULE_0__models__["c" /* Event */](6, "18.5");
var events = [eighteenOne, eighteenTwo, eighteenTwoA, eighteenThree, eighteenFour, eighteenFive];
var initialState = {
    events: events
};
function reducer(state) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getEventEntities = function (state) { return state.events; };


/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return metaReducers; });
/* unused harmony export getAppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAppLoading; });
/* unused harmony export getEventsState */
/* unused harmony export getEventEntities */
/* unused harmony export getAthletesState */
/* unused harmony export getAthleteEntities */
/* unused harmony export getTeamsState */
/* unused harmony export getTeamEntities */
/* unused harmony export getAwardState */
/* unused harmony export getEventTeamAwardEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEventScores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAuditModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getOpenOverviewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__("../../../../../src/app/reducers/events.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__athletes__ = __webpack_require__("../../../../../src/app/reducers/athletes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams__ = __webpack_require__("../../../../../src/app/reducers/teams.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__awards__ = __webpack_require__("../../../../../src/app/reducers/awards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app__ = __webpack_require__("../../../../../src/app/reducers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__builder__ = __webpack_require__("../../../../../src/app/reducers/builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_models__ = __webpack_require__("../../../../../src/app/view-models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sort__ = __webpack_require__("../../../../../src/app/reducers/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_models_audit__ = __webpack_require__("../../../../../src/app/view-models/audit.ts");












var reducers = {
    events: __WEBPACK_IMPORTED_MODULE_3__events__["b" /* reducer */],
    athletes: __WEBPACK_IMPORTED_MODULE_4__athletes__["b" /* reducer */],
    teams: __WEBPACK_IMPORTED_MODULE_5__teams__["c" /* reducer */],
    awards: __WEBPACK_IMPORTED_MODULE_6__awards__["b" /* reducer */],
    app: __WEBPACK_IMPORTED_MODULE_7__app__["a" /* reducer */]
};
function logger(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        return newState;
    };
}
var metaReducers = !__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__["storeFreeze"]]
    : [];
var getAppState = function (state) { return state.app; };
var getAppLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getAppState, function (state) { return state.loading; });
var getEventsState = function (state) { return state.events; };
var getEventEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getEventsState, __WEBPACK_IMPORTED_MODULE_3__events__["a" /* getEventEntities */]);
var getAthletesState = function (state) { return state.athletes; };
var getAthleteEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getAthletesState, __WEBPACK_IMPORTED_MODULE_4__athletes__["a" /* getAthleteEntities */]);
var getTeamsState = function (state) { return state.teams; };
var getTeamEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getTeamsState, __WEBPACK_IMPORTED_MODULE_5__teams__["b" /* getTeamEntities */]);
var getAwardState = function (state) { return state.awards; };
var getEventTeamAwardEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getAwardState, __WEBPACK_IMPORTED_MODULE_6__awards__["a" /* getEventTeamAwardEntities */]);
var getScoreModels = function (ev, athletes, gender, builder) {
    return athletes
        .filter(function (athlete) { return athlete.gender === gender; })
        .map(function (athlete) {
        var score = athlete.getScore(ev);
        var aspects = builder.getScoreAspects(ev, athlete);
        return new __WEBPACK_IMPORTED_MODULE_9__view_models__["a" /* AthleteScoreModel */](athlete, score, aspects);
    })
        .sort(__WEBPACK_IMPORTED_MODULE_10__sort__["a" /* compareAthleteScoreModels */]);
};
var getEventScores = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getEventEntities, getAthleteEntities, getTeamEntities, getEventTeamAwardEntities, function (events, athletes, teams, eventTeamAwards) {
    var athletesById = new Map();
    athletes.forEach(function (athlete) { return athletesById.set(athlete.id, athlete); });
    var teamMembers = new Map();
    teams.forEach(function (team) {
        // TODO: initially athletes is completely empty, and then completely fill, consequently
        // we have to filter as well
        teamMembers.set(team.id, team.athleteIds
            .filter(function (athleteId) { return athletesById.has(athleteId); }) // might be able to nuke this
            .map(function (athleteId) { return athletesById.get(athleteId); }));
    });
    var builder = new __WEBPACK_IMPORTED_MODULE_8__builder__["a" /* Builder */]();
    builder.include(events, athletes, teams, eventTeamAwards);
    var result = events.map(function (ev) {
        var teamScoreModels = teams.map(function (team) {
            var members = teamMembers.get(team.id);
            var males = getScoreModels(ev, members, "M", builder);
            var females = getScoreModels(ev, members, "F", builder);
            // TODO: could be a lot faster. Move it into the builder.
            var awards = eventTeamAwards
                .filter(function (award) { return award.eventOrdinal === ev.ordinal && award.teamId === team.id; })
                .map(function (award) { return award.award; });
            //debugger;
            return new __WEBPACK_IMPORTED_MODULE_9__view_models__["d" /* TeamScoreModel */](team, males, females, awards);
        }) /*.sort(compareTeamRanks)*/;
        return new __WEBPACK_IMPORTED_MODULE_9__view_models__["b" /* EventScoreModel */](ev, teamScoreModels);
    });
    return result;
});
var getAuditModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getEventScores, function (eventScoreModels) {
    var result = [];
    var map = new Map();
    eventScoreModels.forEach(function (eventScoreModel) {
        eventScoreModel.teams.forEach(function (team) {
            if (!map.has(team.team.id)) {
                map.set(team.team.id, new __WEBPACK_IMPORTED_MODULE_11__view_models_audit__["b" /* TeamAuditViewModel */](team.team));
            }
            var model = map.get(team.team.id);
            team.scoreAspects.forEach(function (aspect) {
                model.records.push(new __WEBPACK_IMPORTED_MODULE_11__view_models_audit__["a" /* AuditRecordViewModel */](eventScoreModel.event, null, aspect, model.lastRunningTotal + aspect.points));
            });
            team.females.forEach(function (female) {
                female.scoreAspects.forEach(function (aspect) {
                    model.records.push(new __WEBPACK_IMPORTED_MODULE_11__view_models_audit__["a" /* AuditRecordViewModel */](eventScoreModel.event, female.athlete, aspect, model.lastRunningTotal + aspect.points));
                });
            });
            team.males.forEach(function (male) {
                male.scoreAspects.forEach(function (aspect) {
                    model.records.push(new __WEBPACK_IMPORTED_MODULE_11__view_models_audit__["a" /* AuditRecordViewModel */](eventScoreModel.event, male.athlete, aspect, model.lastRunningTotal + aspect.points));
                });
            });
        });
    });
    map.forEach(function (value) {
        result.push(value);
    });
    return result.sort(function (a, b) { return b.lastRunningTotal - a.lastRunningTotal; });
});
var getOpenOverviewModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(getEventScores, function (eventScoreModels) {
    var builder = new Map();
    eventScoreModels.forEach(function (eventScoreModel) {
        eventScoreModel.teams.forEach(function (team) {
            var points = team.points;
            if (builder.has(team.team.id)) {
                points += builder.get(team.team.id).points;
            }
            builder.set(team.team.id, { name: team.team.name, points: points, code: team.team.code });
        });
    });
    var teams = [];
    builder.forEach(function (value, key) {
        teams.push(new __WEBPACK_IMPORTED_MODULE_9__view_models__["e" /* TeamTileModel */](value.name, value.points, value.code));
    });
    teams.sort(function (a, b) { return b.points - a.points; });
    var result = new __WEBPACK_IMPORTED_MODULE_9__view_models__["c" /* OpenOverviewModel */](teams);
    return result;
});


/***/ }),

/***/ "../../../../../src/app/reducers/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compareAthleteScoreModels;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../../src/app/reducers/constants.ts");


var SORT_A_FIRST = -1;
var SORT_B_FIRST = 1;
var SORT_EQUAL = 0;
function compareAthleteScoreModels(a, b) {
    var aScore = a.score;
    var bScore = b.score;
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__models__["f" /* isScore */])(aScore)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__models__["f" /* isScore */])(bScore)) {
            return compareDivisions(a.athlete, b.athlete);
        }
        return SORT_B_FIRST;
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__models__["f" /* isScore */])(bScore)) {
        return SORT_A_FIRST;
    }
    var divisionCompare = compareDivisions(a.athlete, b.athlete);
    if (divisionCompare !== SORT_EQUAL) {
        return divisionCompare;
    }
    var typeCompare = compareTypes(aScore, bScore);
    if (typeCompare !== SORT_EQUAL) {
        return typeCompare;
    }
    return compareRanks(aScore, bScore);
}
var getDivisionRank = function (a) {
    // Just returning division, doesn't work, because of people like E who are in masters.
    if (a.id === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].ELIZABETH_STEEDMAN || a.id === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].YOZ) {
        return 1;
    }
    return 0;
};
var compareDivisions = function (a, b) {
    return getDivisionRank(a) - getDivisionRank(b);
};
var compareTypes = function (a, b) {
    if (a.scaled) {
        if (!b.scaled) {
            return SORT_B_FIRST;
        }
        return SORT_EQUAL;
    }
    if (b.scaled) {
        return SORT_A_FIRST;
    }
    return SORT_EQUAL;
};
var compareRanks = function (a, b) { return a.rank - b.rank; };


/***/ }),

/***/ "../../../../../src/app/reducers/teams.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teams; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTeamEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../../src/app/reducers/constants.ts");


var Teams = /** @class */ (function () {
    function Teams() {
    }
    Teams.SNATCH = '1';
    Teams.CHALK = '2';
    Teams.BUCK = '3';
    Teams.HAKUNA = '4';
    return Teams;
}());

var teams = [
    new __WEBPACK_IMPORTED_MODULE_0__models__["e" /* Team */](Teams.SNATCH, "Snatch Me If You Can", __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].SNATCH, "snatch"),
    new __WEBPACK_IMPORTED_MODULE_0__models__["e" /* Team */](Teams.CHALK, "Chalk Dirty To Me", __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].CHALK, "chalk"),
    new __WEBPACK_IMPORTED_MODULE_0__models__["e" /* Team */](Teams.BUCK, "Buck Furpees", __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].BUCK, "buck"),
    new __WEBPACK_IMPORTED_MODULE_0__models__["e" /* Team */](Teams.HAKUNA, "Hakuna Masquata", __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Competitors */].HAKUNA, "hakuna")
];
var initialState = {
    teams: teams
};
function reducer(state) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getTeamEntities = function (state) { return state.teams; };


/***/ }),

/***/ "../../../../../src/app/services/affiliate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AffiliateService = /** @class */ (function () {
    function AffiliateService(http) {
        this.http = http;
    }
    AffiliateService.prototype.get = function (affiliateId) {
        // TODO: need to manually put Nakita back in.
        var nakita = {
            scores: [],
            entrant: { competitorId: 'NAKITA', firstName: 'Nakita', lastName: '', gender: 'F', divisionId: '2' }
        };
        // const fromStorage = localStorage.getItem('scores');
        // if (fromStorage) {
        //   return of(JSON.parse(fromStorage));
        // }
        var url = 'https://17f05zpuae.execute-api.us-east-1.amazonaws.com/prod/proxy?affiliates=' + encodeURIComponent(affiliateId + '');
        return this.http
            .get(url)
            .map(function (data) {
            var athletes = data.affiliates[affiliateId].athletes;
            athletes.push(nakita);
            return athletes;
        })
            .do(function (data) {
            // localStorage.setItem('scores', JSON.stringify(data));
        });
    };
    AffiliateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AffiliateService);
    return AffiliateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affiliate_service__ = __webpack_require__("../../../../../src/app/services/affiliate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__affiliate_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/view-models/audit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TeamAuditViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditRecordViewModel; });
// TODO: violating mutability.
var TeamAuditViewModel = /** @class */ (function () {
    function TeamAuditViewModel(team, records) {
        if (records === void 0) { records = []; }
        this.team = team;
        this.records = records;
    }
    Object.defineProperty(TeamAuditViewModel.prototype, "lastRunningTotal", {
        get: function () {
            return !this.records.length ? 0 : this.records[this.records.length - 1].runningTotal;
        },
        enumerable: true,
        configurable: true
    });
    return TeamAuditViewModel;
}());

var AuditRecordViewModel = /** @class */ (function () {
    function AuditRecordViewModel(event, athlete, aspect, runningTotal) {
        this.event = event;
        this.athlete = athlete;
        this.aspect = aspect;
        this.runningTotal = runningTotal;
    }
    return AuditRecordViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/view-models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventScoreModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TeamScoreModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AthleteScoreModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OpenOverviewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TeamTileModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audit__ = __webpack_require__("../../../../../src/app/view-models/audit.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_score_aspect__ = __webpack_require__("../../../../../src/app/models/score-aspect.ts");


var EventScoreModel = /** @class */ (function () {
    function EventScoreModel(event, teams) {
        this.event = event;
        this.teams = teams;
    }
    return EventScoreModel;
}());

var TeamScoreModel = /** @class */ (function () {
    function TeamScoreModel(team, males, females, scoreAspects) {
        if (scoreAspects === void 0) { scoreAspects = []; }
        this.team = team;
        this.males = males;
        this.females = females;
        this.scoreAspects = scoreAspects;
    }
    Object.defineProperty(TeamScoreModel.prototype, "points", {
        get: function () {
            var maleScores = this.males.reduce(function (points, athlete) { return points + athlete.points; }, 0);
            var femaleScores = this.females.reduce(function (points, athlete) { return points + athlete.points; }, 0);
            var teamScores = this.scoreAspects.reduce(function (points, aspect) { return points + aspect.points; }, 0);
            return maleScores + femaleScores + teamScores;
        },
        enumerable: true,
        configurable: true
    });
    return TeamScoreModel;
}());

var AthleteScoreModel = /** @class */ (function () {
    function AthleteScoreModel(athlete, score, scoreAspects) {
        if (scoreAspects === void 0) { scoreAspects = []; }
        this.athlete = athlete;
        this.score = score;
        this.scoreAspects = scoreAspects;
    }
    Object.defineProperty(AthleteScoreModel.prototype, "points", {
        get: function () {
            return this.scoreAspects.reduce(function (points, aspect) {
                return points + aspect.points;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AthleteScoreModel.prototype, "isRxWinner", {
        get: function () {
            var result = this.scoreAspects.indexOf(__WEBPACK_IMPORTED_MODULE_1__models_score_aspect__["a" /* ScoreAspect */].WonRxScoreAspect) >= 0;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AthleteScoreModel.prototype, "isScaledWinner", {
        get: function () {
            var result = this.scoreAspects.indexOf(__WEBPACK_IMPORTED_MODULE_1__models_score_aspect__["a" /* ScoreAspect */].WonScaledScoreAspect) >= 0;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return AthleteScoreModel;
}());

var OpenOverviewModel = /** @class */ (function () {
    function OpenOverviewModel(teams) {
        this.teams = teams;
    }
    return OpenOverviewModel;
}());

var TeamTileModel = /** @class */ (function () {
    function TeamTileModel(name, points, code) {
        this.name = name;
        this.points = points;
        this.code = code;
    }
    return TeamTileModel;
}());



/***/ }),

/***/ "../../../../../src/assets/buck.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "buck.352d1ab0cd8d616b9bc8.png";

/***/ }),

/***/ "../../../../../src/assets/chalk.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chalk.ec22e02a0cf09e12f6f9.png";

/***/ }),

/***/ "../../../../../src/assets/hakuna.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hakuna.b62e661073ea863d6aea.png";

/***/ }),

/***/ "../../../../../src/assets/snatch.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "snatch.be94df875b1d5f3e62e7.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map