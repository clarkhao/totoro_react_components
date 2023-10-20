import React from "react";
export interface IInput {
    /**
     * type indicated icon and input type,
     * 'email'|'password'|'text'|'search'
     */
    type: string;
    /**
     * optional text used in label
     */
    labelText?: string;
    /**
     * value
     */
    value?: string;
    /**
     * input name prop
     */
    name: string;
    /**
     * handleChange used for state bind
     */
    handleInput?: (value: string) => void;
    /**
     * errMsg indicate error returned from request result
     */
    requestErr?: string | undefined;
    /**
     * handleFocus clear errMsg from parent
     */
    handleFocus?: () => void;
    /**
     * pwd2 error
     */
    pwd2Error?: string;
    /**
     * needVerified
     */
    needVerified?: boolean;
}
export declare function NextInput({ value, ...props }: IInput): React.JSX.Element;
