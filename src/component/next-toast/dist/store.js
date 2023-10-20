import { __assign, __spreadArray } from "tslib";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
var loggerImpl = function (f, name) { return function (set, get, store) {
    var loggedSet = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        set.apply(void 0, a);
        console.log.apply(console, __spreadArray(__spreadArray([], (name ? ["".concat(name, ":")] : []), false), [get()], false));
    };
    store.setState = loggedSet;
    return f(loggedSet, get, store);
}; };
export var logger = loggerImpl;
var initialState = {
    toastMsg: [],
};
export var useToastStore = create(logger(subscribeWithSelector(function (set) { return (__assign(__assign({}, initialState), { reset: function () {
        set(initialState);
    }, setToastMsg: function (fn) {
        return set(function (state) { return ({
            toastMsg: fn(state.toastMsg),
        }); });
    } })); })));
/////////////////////////////////////////////////////////////////////////////
