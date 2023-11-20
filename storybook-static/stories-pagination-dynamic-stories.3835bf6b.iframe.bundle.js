/*! For license information please see stories-pagination-dynamic-stories.3835bf6b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknext_components=self.webpackChunknext_components||[]).push([[7496],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/pagination/dynamic.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicPaginationDefault:()=>DynamicPaginationDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DynamicPaginationDef,_DynamicPaginationDef2,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_component_next_pagination_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/next-pagination/dynamic.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_component_next_pagination_dynamicHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/next-pagination/dynamicHook.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Pagination",component:_component_next_pagination_dynamic__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["autodocs"],parameters:{layout:"centered"}};var DynamicPaginationDefault={args:{isNext:!0,isPrev:!0,total:1e3},decorators:[function(Story){var _usePage=(0,_component_next_pagination_dynamicHook__WEBPACK_IMPORTED_MODULE_3__.q)(),listState=_usePage.listState,listDispatch=_usePage.listDispatch;return __jsx(_component_next_pagination_dynamicHook__WEBPACK_IMPORTED_MODULE_3__.Z.Provider,{value:{listState,listDispatch}},__jsx(Story,null))}]};DynamicPaginationDefault.parameters=_objectSpread(_objectSpread({},DynamicPaginationDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DynamicPaginationDef=DynamicPaginationDefault.parameters)||void 0===_DynamicPaginationDef?void 0:_DynamicPaginationDef.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isNext: true,\n    isPrev: true,\n    total: 1000\n  },\n  decorators: [Story => {\n    const {\n      listState,\n      listDispatch\n    } = usePage();\n    return <DynamicListContext.Provider value={{\n      listState,\n      listDispatch\n    }}>\r\n          <Story />\r\n        </DynamicListContext.Provider>;\n  }]\n}"},null===(_DynamicPaginationDef2=DynamicPaginationDefault.parameters)||void 0===_DynamicPaginationDef2||null===(_DynamicPaginationDef2=_DynamicPaginationDef2.docs)||void 0===_DynamicPaginationDef2?void 0:_DynamicPaginationDef2.source)})})},"./src/component/next-list/cart/cartStore.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>useCartStore});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),zustand__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/zustand/esm/index.mjs"),_store_logger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/component/store/logger.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var initialState={cartItems:{},cartPos:{x:0,y:0}},useCartStore=(0,zustand__WEBPACK_IMPORTED_MODULE_2__.Ue)((0,_store_logger__WEBPACK_IMPORTED_MODULE_1__.k)((function(set){return _objectSpread(_objectSpread({},initialState),{},{reset:function reset(){set(initialState)},setCartItems:function setCartItems(fn){return set((function(state){return{cartItems:fn(state.cartItems)}}))},setCartPos:function setCartPos(x,y){return set((function(){return{cartPos:{x,y}}}))}})})))},"./src/component/next-pagination/dynamic.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DynamicPagination});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-transition-group/esm/TransitionGroup.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),_dynamicHook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/next-pagination/dynamicHook.tsx"),react_icons_fi__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),_excluded=(__webpack_require__("./src/component/next-pagination/dynamic-transition.css"),["total","use"]),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function DynamicPagination(_ref){var total=_ref.total,_ref$use=_ref.use,use=void 0===_ref$use?"page":_ref$use,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),list=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_dynamicHook__WEBPACK_IMPORTED_MODULE_2__.Z),debounceTimer=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),handleAsyncNext=function(){var _ref2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new Promise((function(resolve){null==list||list.listDispatch({type:"isAscending",payload:props.isNext}),resolve("finished")})));case 1:case"end":return _context.stop()}}),_callee)})));return function handleAsyncNext(){return _ref2.apply(this,arguments)}}(),handleAsyncPrev=function(){var _ref3=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee2(){return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",new Promise((function(resolve){null==list||list.listDispatch({type:"isDescending",payload:props.isPrev}),resolve("finished")})));case 1:case"end":return _context2.stop()}}),_callee2)})));return function handleAsyncPrev(){return _ref3.apply(this,arguments)}}(),handlePrev=function(){var _ref4=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee3(){return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(window.clearTimeout(debounceTimer.current),null==list||!list.listState.isAscending){_context3.next=4;break}return _context3.next=4,handleAsyncPrev();case 4:debounceTimer.current=window.setTimeout((function(){null==list||list.listDispatch({type:"prev-page",payload:props.isPrev})}),300);case 5:case"end":return _context3.stop()}}),_callee3)})));return function handlePrev(){return _ref4.apply(this,arguments)}}(),handleNext=function(){var _ref5=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee4(){return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(window.clearTimeout(debounceTimer.current),null!=list&&list.listState.isAscending){_context4.next=4;break}return _context4.next=4,handleAsyncNext();case 4:debounceTimer.current=window.setTimeout((function(){null==list||list.listDispatch({type:"next-page",payload:props.isNext})}),300);case 5:case"end":return _context4.stop()}}),_callee4)})));return function handleNext(){return _ref5.apply(this,arguments)}}();return __jsx("div",{className:"inline-flex items-center justify-center rounded text-black"},__jsx("button",{className:"bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-r border-r-white text-brand-primary rounded-tl-sm rounded-bl-sm",onClick:handlePrev,disabled:!(props.isPrev&&(null==list?void 0:list.listState.currentIndex)>1)},"page"===use?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("span",{className:"sr-only"},"Prev Page"),__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},__jsx("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("span",{className:"sr-only"},"Minus One"),__jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiMinus,null))),__jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.Z,{className:["flex gap-0 overflow-hidden items-center justify-center bg-gray-200 h-8 w-12",null!=list&&list.listState.isAscending?"flex-row":"flex-row-reverse"].join(" ")},__jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Z,{key:null==list?void 0:list.listState.currentIndex,classNames:null!=list&&list.listState.isAscending?"dynamic-page-left":"dynamic-page-right",timeout:500},__jsx("span",{className:""},null==list?void 0:list.listState.currentIndex))),__jsx("button",{className:"bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-l border-l-white text-brand-primary rounded-tr-sm rounded-br-sm",onClick:handleNext,disabled:!(props.isNext&&(null==list?void 0:list.listState.currentIndex)<total)},"page"===use?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("span",{className:"sr-only"},"Next Page"),__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},__jsx("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("span",{className:"sr-only"},"Plus One"),__jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiPlus,null))))}DynamicPagination.displayName="DynamicPagination",DynamicPagination.__docgenInfo={description:"",methods:[],displayName:"DynamicPagination",props:{use:{defaultValue:{value:'"page"',computed:!1},required:!1,tsType:{name:"union",raw:'"page" | "counter"',elements:[{name:"literal",value:'"page"'},{name:"literal",value:'"counter"'}]},description:"use"},isNext:{required:!0,tsType:{name:"boolean"},description:"isNext"},isPrev:{required:!0,tsType:{name:"boolean"},description:"isPrev"},total:{required:!0,tsType:{name:"number"},description:"total?"}}};try{DynamicPagination.displayName="DynamicPagination",DynamicPagination.__docgenInfo={description:"",displayName:"DynamicPagination",props:{isNext:{defaultValue:null,description:"isNext",name:"isNext",required:!0,type:{name:"boolean"}},isPrev:{defaultValue:null,description:"isPrev",name:"isPrev",required:!0,type:{name:"boolean"}},total:{defaultValue:null,description:"total?",name:"total",required:!0,type:{name:"number"}},use:{defaultValue:{value:"page"},description:"use",name:"use",required:!1,type:{name:"enum",value:[{value:'"page"'},{value:'"counter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/next-pagination/dynamic.tsx#DynamicPagination"]={docgenInfo:DynamicPagination.__docgenInfo,name:"DynamicPagination",path:"src/component/next-pagination/dynamic.tsx#DynamicPagination"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/next-pagination/dynamicHook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DynamicListContext,q:()=>usePage});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_next_list_cart_cartStore__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/next-list/cart/cartStore.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function usePage(current){var _useCartStore=(0,_next_list_cart_cartStore__WEBPACK_IMPORTED_MODULE_2__.x)((function(state){return[state.setCartItems]})),initListData=((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useCartStore,1)[0],{currentIndex:null!=current?current:1,isAscending:!0,cursors:{}}),_React$useReducer=react__WEBPACK_IMPORTED_MODULE_1__.useReducer((function listReducer(state,action){switch(action.type){case"isAscending":return _objectSpread(_objectSpread({},state),{},{isAscending:!0});case"isDescending":return _objectSpread(_objectSpread({},state),{},{isAscending:!1});case"next-page":return _objectSpread(_objectSpread({},state),{},{currentIndex:action.payload?state.currentIndex+1:state.currentIndex});case"prev-page":return _objectSpread(_objectSpread({},state),{},{currentIndex:action.payload?state.currentIndex-1:state.currentIndex});case"set-specified":return _objectSpread(_objectSpread({},state),{},{currentIndex:action.payload});case"record-cursor":return _objectSpread(_objectSpread({},state),{},{cursors:_objectSpread(_objectSpread({},state.cursors),action.payload)});case"reset":return _objectSpread(_objectSpread({},state),initListData);default:return state}}),initListData),_React$useReducer2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_React$useReducer,2);return{listState:_React$useReducer2[0],listDispatch:_React$useReducer2[1]}}var DynamicListContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);try{usePage.displayName="usePage",usePage.__docgenInfo={description:"",displayName:"usePage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/next-pagination/dynamicHook.tsx#usePage"]={docgenInfo:usePage.__docgenInfo,name:"usePage",path:"src/component/next-pagination/dynamicHook.tsx#usePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/store/logger.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>logger});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),logger=function loggerImpl(f,name){return function(set,get,store){var loggedSet=function loggedSet(){var _console;set.apply(void 0,arguments),(_console=console).log.apply(_console,(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(name?["".concat(name,":")]:[]).concat([get()]))};return store.setState=loggedSet,f(loggedSet,get,store)}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/component/next-pagination/dynamic-transition.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*transition animation for dynamic pagination***************************************/\n.dynamic-page-left-enter {\n  transform: translateX(300%);\n}\n.dynamic-page-left-enter-active {\n  transform: translateX(50%);\n  transition: transform 500ms ease-in-out;\n  \n}\n.dynamic-page-left-exit {\n  transform: translate(-50%);\n}\n.dynamic-page-left-exit-active {\n  transform: translateX(-300%);\n  transition: transform 500ms ease-in-out;\n}\n\n.dynamic-page-right-enter {\n  transform: translateX(-300%);\n}\n.dynamic-page-right-enter-active {\n  transform: translateX(-50%);\n  transition: transform 500ms ease-in-out;\n  \n}\n.dynamic-page-right-exit {\n  transform: translate(50%);\n}\n.dynamic-page-right-exit-active {\n  transform: translateX(300%);\n  transition: transform 500ms ease-in-out;\n}","",{version:3,sources:["webpack://./src/component/next-pagination/dynamic-transition.css"],names:[],mappings:"AAAA,oFAAoF;AACpF;EACE,2BAA2B;AAC7B;AACA;EACE,0BAA0B;EAC1B,uCAAuC;;AAEzC;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,2BAA2B;EAC3B,uCAAuC;;AAEzC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC",sourcesContent:["/*transition animation for dynamic pagination***************************************/\r\n.dynamic-page-left-enter {\r\n  transform: translateX(300%);\r\n}\r\n.dynamic-page-left-enter-active {\r\n  transform: translateX(50%);\r\n  transition: transform 500ms ease-in-out;\r\n  \r\n}\r\n.dynamic-page-left-exit {\r\n  transform: translate(-50%);\r\n}\r\n.dynamic-page-left-exit-active {\r\n  transform: translateX(-300%);\r\n  transition: transform 500ms ease-in-out;\r\n}\r\n\r\n.dynamic-page-right-enter {\r\n  transform: translateX(-300%);\r\n}\r\n.dynamic-page-right-enter-active {\r\n  transform: translateX(-50%);\r\n  transition: transform 500ms ease-in-out;\r\n  \r\n}\r\n.dynamic-page-right-exit {\r\n  transform: translate(50%);\r\n}\r\n.dynamic-page-right-exit-active {\r\n  transform: translateX(300%);\r\n  transition: transform 500ms ease-in-out;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/component/next-pagination/dynamic-transition.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_dynamic_transition_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/component/next-pagination/dynamic-transition.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_dynamic_transition_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_dynamic_transition_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_dynamic_transition_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_dynamic_transition_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var h=__webpack_require__("./node_modules/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./node_modules/use-sync-external-store/shim/with-selector.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")},"./node_modules/zustand/esm/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ue:()=>create});var console=__webpack_require__("./node_modules/console-browserify/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState,getState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),listeners.clear()}};return state=createState(setState,getState,api),api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/react/index.js"),with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js"),esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const{useSyncExternalStoreWithSelector}=with_selector;let didWarnAboutEqualityFn=!1;const createImpl=createState=>{"function"!=typeof createState&&esm_console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>function useStore(api,selector=api.getState,equalityFn){equalityFn&&!didWarnAboutEqualityFn&&(esm_console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),didWarnAboutEqualityFn=!0);const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getState,selector,equalityFn);return(0,react.useDebugValue)(slice),slice}(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl}}]);