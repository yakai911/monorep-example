"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var RouterStore_1 = require("./stores/RouterStore");
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
exports.Routes = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return null;
});
