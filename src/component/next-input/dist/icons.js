import { __rest } from "tslib";
import { FiUser, FiMail, FiEye, FiEyeOff, FiLock, FiSearch, } from "react-icons/fi";
import React from "react";
export default function InputIcon(_a) {
    var props = __rest(_a, []);
    switch (props.type) {
        case "email":
            return React.createElement(FiMail, null);
        case "password":
            return React.createElement(FiLock, null);
        case 'search':
            return React.createElement(FiSearch, null);
        case 'pwdVisbile':
            return React.createElement(FiEyeOff, null);
        case 'pwdInvisible':
            return React.createElement(FiEye, null);
        default:
            return React.createElement(FiUser, null);
    }
}
