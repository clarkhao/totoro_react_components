"use strict";(self.webpackChunknext_components=self.webpackChunknext_components||[]).push([[5918],{"./src/stories/richText/tagSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TagSelectDefault:()=>TagSelectDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TagSelectDefault$par,_TagSelectDefault$par2,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_component_richText_tagSelect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/richText/tagSelect.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/next-dnd-list/hook.ts"),_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/component/next-dnd-list/dndListHook.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function StoryTagSelect(_ref){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref),_ref));var _useFilterNSort=(0,_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__.K)(),filterState=_useFilterNSort.filterState,filterDispatch=_useFilterNSort.filterDispatch,_useDndList=(0,_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__.K)(),dndListState=_useDndList.dndListState,dndListDispatch=_useDndList.dndListDispatch;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){dndListDispatch({type:"create-item",payload:{content:"Hello World"}}),filterDispatch({type:"create-tag",payload:"Hello"}),filterDispatch({type:"create-tag",payload:"World"})}),[]),__jsx("div",{className:"w-full"},__jsx(_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__.n.Provider,{value:{filterState,filterDispatch}},__jsx(_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__.o.Provider,{value:{dndListState,dndListDispatch}},__jsx("div",{className:"w-[348px]"},__jsx(_component_richText_tagSelect__WEBPACK_IMPORTED_MODULE_2__.O,{index:0})))))}StoryTagSelect.displayName="StoryTagSelect";const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Input/TagSelect",component:StoryTagSelect,tags:["autodocs"],parameters:{layout:"padded"}};var TagSelectDefault={args:{}};TagSelectDefault.parameters=_objectSpread(_objectSpread({},TagSelectDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TagSelectDefault$par=TagSelectDefault.parameters)||void 0===_TagSelectDefault$par?void 0:_TagSelectDefault$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_TagSelectDefault$par2=TagSelectDefault.parameters)||void 0===_TagSelectDefault$par2||null===(_TagSelectDefault$par2=_TagSelectDefault$par2.docs)||void 0===_TagSelectDefault$par2?void 0:_TagSelectDefault$par2.source)})})},"./src/component/badge/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge,m:()=>getRandomColor});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["actual","isRemoved"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,getRandomColor=function getRandomColor(){var colors=["blue","dark","red","green","yellow","indigo","purple","pink"];return colors[Math.floor(Math.random()*colors.length)]};function Badge(_ref){var actual=_ref.actual,_ref$isRemoved=_ref.isRemoved,isRemoved=void 0!==_ref$isRemoved&&_ref$isRemoved,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded),content=actual.length>7?"".concat(actual.slice(0,7),"..."):actual;switch(props.color){case"blue":return isRemoved?__jsx("span",{id:"badge-dismiss-default",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300","data-dismiss-target":"#badge-dismiss-default","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"},content);case"dark":return isRemoved?__jsx("span",{id:"badge-dismiss-dark",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300","data-dismiss-target":"#badge-dismiss-dark","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"},content);case"red":return isRemoved?__jsx("span",{id:"badge-dismiss-red",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300","data-dismiss-target":"#badge-dismiss-red","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"},content);case"green":return isRemoved?__jsx("span",{id:"badge-dismiss-green",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300","data-dismiss-target":"#badge-dismiss-green","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"},content);case"yellow":return isRemoved?__jsx("span",{id:"badge-dismiss-yellow",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300","data-dismiss-target":"#badge-dismiss-yellow","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"},content);case"indigo":return isRemoved?__jsx("span",{id:"badge-dismiss-indigo",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300","data-dismiss-target":"#badge-dismiss-indigo","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"},content);case"purple":return isRemoved?__jsx("span",{id:"badge-dismiss-purple",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300","data-dismiss-target":"#badge-dismiss-purple","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"},content);default:return isRemoved?__jsx("span",{id:"badge-dismiss-pink",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300","data-dismiss-target":"#badge-dismiss-pink","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"},content)}}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{isRemoved:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"isRemoved"},actual:{required:!0,tsType:{name:"string"},description:"content"},color:{required:!0,tsType:{name:"union",raw:'| "blue"\r\n| "dark"\r\n| "red"\r\n| "green"\r\n| "yellow"\r\n| "indigo"\r\n| "purple"\r\n| "pink"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"red"'},{name:"literal",value:'"green"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"pink"'}]},description:"color"},removeHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"(str: string) => void",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"void"}}},description:"handler"}}};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{actual:{defaultValue:null,description:"content",name:"actual",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"color",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"dark"'},{value:'"red"'},{value:'"green"'},{value:'"yellow"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'}]}},isRemoved:{defaultValue:{value:"false"},description:"isRemoved",name:"isRemoved",required:!1,type:{name:"boolean"}},removeHandler:{defaultValue:null,description:"handler",name:"removeHandler",required:!1,type:{name:"((str: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/badge/badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/component/badge/badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/next-dnd-list/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFilterNSort,n:()=>FilterNSortContext});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/badge/badge.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function useFilterNSort(){var _React$useReducer=react__WEBPACK_IMPORTED_MODULE_1__.useReducer((function inputReducer(state,action){switch(action.type){case"set-category":return _objectSpread(_objectSpread({},state),{},{category:action.payload});case"create-tag":return _objectSpread(_objectSpread({},state),{},{tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags).map((function(el){return el.content})).includes(action.payload)?state.tags:[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags),[{content:action.payload,color:(0,_badge_badge__WEBPACK_IMPORTED_MODULE_2__.m)()}])});case"delete-tag":return _objectSpread(_objectSpread({},state),{},{tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags).filter((function(el){return el.content!==action.payload})),filterTags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags).filter((function(el){return el!==action.payload}))});case"select-filter-tags":return _objectSpread(_objectSpread({},state),{},{filterTags:[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags),[action.payload])});case"deselect-filter-tags":return _objectSpread(_objectSpread({},state),{},{filterTags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags).filter((function(el){return el!==action.payload}))});case"create-select-group":var payloadCreate=action.payload,isExisted=-1!==(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).map((function(el){return el.type})).indexOf(payloadCreate);return _objectSpread(_objectSpread({},state),{},{sort:isExisted?(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort):[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort),[{type:payloadCreate,order:0}])});case"delete-select-group":var payloadDel=action.payload;return _objectSpread(_objectSpread({},state),{},{sort:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).filter((function(_,i){return i!==payloadDel}))});case"update-select-group":var payloadUpdate=action.payload;return _objectSpread(_objectSpread({},state),{},{sort:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).map((function(el,i){return i===payloadUpdate.index?_objectSpread(_objectSpread({},el),{},(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},payloadUpdate.key,payloadUpdate.value)):el}))});default:return state}}),{category:0,tags:[],filterTags:[],sort:[]}),_React$useReducer2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useReducer,2),filterState=_React$useReducer2[0],filterDispatch=_React$useReducer2[1];return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){console.log(filterState)}),[filterState]),{filterState,filterDispatch}}var FilterNSortContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null)}}]);