"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var RouterStore_1 = require("./stores/RouterStore");
var react_1 = __importStar(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
exports.Router = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return routerStore.screen === "WorkoutHistory" ? (react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null)) : (react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null));
});
