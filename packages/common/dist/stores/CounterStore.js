"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterStore = void 0;
var mobx_1 = require("mobx");
exports.counterStore = mobx_1.observable({
    count: 0,
});
