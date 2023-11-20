"use strict";(self.webpackChunknext_components=self.webpackChunknext_components||[]).push([[8350],{"./src/stories/filter/withStore.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectDefault:()=>SelectDefault,default:()=>withStore_stories});var _SelectDefault$parame,_SelectDefault$parame2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),customDropdown=__webpack_require__("./src/component/dropdown/customDropdown.tsx"),select_select=__webpack_require__("./src/component/select/select.tsx"),index_esm=__webpack_require__("./node_modules/react-icons/fa6/index.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),hook=__webpack_require__("./src/component/next-dnd-list/hook.ts"),defaultClickable=__webpack_require__("./src/component/dropdown/defaultClickable.tsx"),addSort=__webpack_require__("./src/component/next-dnd-list/addSort.tsx"),badge=__webpack_require__("./src/component/badge/badge.tsx"),customAbsDrop=__webpack_require__("./src/component/dropdown/customAbsDrop.tsx"),store=__webpack_require__("./src/component/next-dnd-list/store.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;function FilterNSort(_ref){(0,esm_extends.Z)({},((0,objectDestructuringEmpty.Z)(_ref),_ref));var filterNSort=react.useContext(hook.n),_useSortStore=(0,store.W)((function(state){return[state.sort,state.setSortGroup]})),_useSortStore2=(0,slicedToArray.Z)(_useSortStore,2),sort=_useSortStore2[0],setSortGroup=_useSortStore2[1];console.log("rerender filter");var _React$useState=react.useState(""),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),tag=_React$useState2[0],setTag=_React$useState2[1];return __jsx("div",{className:"flex flex-row justify-start items-start gap-3"},__jsx(select_select.P,{height:"tiny",items:[{id:"todolist",title:"Todo List"},{id:"onprogress",title:"OnProgress"},{id:"completed",title:"Completed"}],index:0,onChange:function onChange(e){null==filterNSort||filterNSort.filterDispatch({type:"set-category",payload:e.target.value})}}),__jsx("div",{className:"w-32"},__jsx(customDropdown.a,{title:"Filter by Tags",clickable:defaultClickable.R,isAbs:!0,className:"top-10 -left-[64px]"},__jsx("div",{className:"w-64 shadow-md"},__jsx("div",{className:"relative flex"},__jsx("input",{type:"text",className:["border-none outline-none focus:border-none focus:outline-none focus:ring-0 flex-1 p-1 pr-8 min-w-[100px]","bg-transparent dark:text-white focus:caret-black"].join(" "),value:tag,onChange:function handleChange(evt){setTag(evt.target.value)},onKeyDown:function handleKeyDown(evt){"Enter"===evt.key&&tag&&(null==filterNSort||filterNSort.filterDispatch({type:"create-tag",payload:evt.target.value}),setTag(""))},placeholder:"Add new tag..."}),__jsx(index_esm.Wxb,{className:["w-6 h-auto text-gray-700 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-200","cursor-pointer absolute right-1 bottom-[2px]"].join(" "),onClick:function handleTagAdd(){null==filterNSort||filterNSort.filterDispatch({type:"create-tag",payload:tag}),setTag("")}})),__jsx("main",{className:"w-full pt-1 flex flex-col justify-start items-start gap-1 min-h-[200px] max-h-[400px] overflow-auto bg-gray-100"},null==filterNSort?void 0:filterNSort.filterState.tags.map((function(item,index){return __jsx("div",{key:"item-".concat(index),className:"px-2 flex flex-row justify-between items-center w-full hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"},__jsx("div",{className:"flex-1 flex items-center rounded "},__jsx("input",{id:"checkbox-item-".concat(index),type:"checkbox",value:"",checked:-1!==(null==filterNSort?void 0:filterNSort.filterState.filterTags.indexOf(item.content)),className:["w-4 h-4 text-brand-secondary bg-gray-100 border-gray-300 rounded focus:ring-violet-300 focus:ring-2","dark:text-violet-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"].join(" "),onChange:function onChange(e){e.target.checked?null==filterNSort||filterNSort.filterDispatch({type:"select-filter-tags",payload:item.content}):null==filterNSort||filterNSort.filterDispatch({type:"deselect-filter-tags",payload:item.content})}}),__jsx("label",{htmlFor:"checkbox-item-".concat(index),className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"},__jsx(badge.C,{actual:item.content,color:item.color}))),__jsx("div",{className:"relative"},__jsx(customAbsDrop.c,{clickable:function clickable(){return(0,index_esm.Blh)({})},id:0,className:"right-0"},__jsx("div",{className:"flex flex-row justify-start items-center gap-2 p-1 bg-ele-error rounded-md hover:bg-ele-error/80 text-white text-sm",onClick:function onClick(e){e.stopPropagation(),null==filterNSort||filterNSort.filterDispatch({type:"delete-tag",payload:item.content})}},__jsx(index_esm.Z2m,{className:"w-4 h-auto"}),__jsx("span",null,"Delete")))))})))))),__jsx("div",{className:"w-[1px] h-8 bg-gray-300/40"}),__jsx(customDropdown.a,{title:"Sort by ...",clickable:defaultClickable.R,isAbs:!0,className:"top-10 -left-[78px]"},__jsx("div",{className:"flex flex-col justify-start items-start bg-gray-200 dark:bg-gray-600 rounded-md w-64 shadow-md"},sort.map((function(item,i){return __jsx("div",{key:i,className:"flex flex-row justify-between items-center p-2 w-full bg-gray-200 dark:bg-gray-600 "},__jsx("span",{className:"flex flex-row justify-start items-center gap-1"},__jsx(index_esm.wNu,{className:"dark:text-gray-200 text-gray-50 cursor-move"}),__jsx(select_select.P,{height:"tiny",items:[{id:"date",title:"Date"},{id:"tags",title:"Tags"}],index:i,selectKey:"type",onChange:function onChange(e){}}),__jsx(select_select.P,{height:"tiny",items:[{id:"asc",title:"Ascending"},{id:"dsc",title:"Descending"}],index:i,selectKey:"order",onChange:function onChange(e){}})),__jsx(index_esm._0w,{className:"dark:text-gray-200 cursor-pointer text-gray-500 w-4 h-auto hover:bg-gray-300",onClick:function onClick(e){return function handleDeleteSort(e,i){console.log(i),setSortGroup((function(prev){return prev.filter((function(_,index){return index!==i}))}))}(0,i)}}))})),__jsx("div",{className:"w-full relative"},__jsx(customAbsDrop.c,{title:"Add Sort",clickable:addSort.S,id:0,className:"top-20"},__jsx("div",{className:"-mt-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 min-h-[200px] p-2 w-64 rounded-md shadow-md"},["date","tags"].map((function(el,index){return __jsx("p",{key:"other-".concat(index),onClick:function onClick(){return function handleCreateSort(num){setSortGroup((function(prev){return prev.concat({type:num,order:0})}))}(index)},className:"cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-1 rounded-sm "},["date","tags"][index])}))))))))}FilterNSort.displayName="FilterNSort",FilterNSort.__docgenInfo={description:"",methods:[],displayName:"FilterNSort"};try{FilterNSort.displayName="FilterNSort",FilterNSort.__docgenInfo={description:"",displayName:"FilterNSort",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/next-dnd-list/filterNsortWithStore.tsx#FilterNSort"]={docgenInfo:FilterNSort.__docgenInfo,name:"FilterNSort",path:"src/component/next-dnd-list/filterNsortWithStore.tsx#FilterNSort"})}catch(__react_docgen_typescript_loader_error){}var withStore_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function FilterNSortWrapper(props){var _useFilterNSort=(0,hook.K)(),filterState=_useFilterNSort.filterState,filterDispatch=_useFilterNSort.filterDispatch;return withStore_stories_jsx(hook.n.Provider,{value:{filterState,filterDispatch}},withStore_stories_jsx(FilterNSort,null))}FilterNSortWrapper.displayName="FilterNSortWrapper";const withStore_stories={title:"UI/Filter/filterAndSortWithStore",component:FilterNSortWrapper,parameters:{layout:"padded"}};var SelectDefault={args:{}};SelectDefault.parameters=_objectSpread(_objectSpread({},SelectDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectDefault$parame=SelectDefault.parameters)||void 0===_SelectDefault$parame?void 0:_SelectDefault$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_SelectDefault$parame2=SelectDefault.parameters)||void 0===_SelectDefault$parame2||null===(_SelectDefault$parame2=_SelectDefault$parame2.docs)||void 0===_SelectDefault$parame2?void 0:_SelectDefault$parame2.source)})})},"./src/component/dropdown/customAbsDrop.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>CustomAbsDrop});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),console=(__webpack_require__("./src/component/avatar/avatar.css"),__webpack_require__("./node_modules/console-browserify/index.js")),_excluded=["children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function CustomAbsDrop(_ref){var children=_ref.children,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),checked=_React$useState2[0],setChecked=_React$useState2[1],popupRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),labelRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleOutsideClick=function handleOutsideClick(event){var _labelRef$current;null!==(_labelRef$current=labelRef.current)&&void 0!==_labelRef$current&&_labelRef$current.contains(event.target)||setChecked(!1)};return document.addEventListener("click",handleOutsideClick),function(){document.removeEventListener("click",handleOutsideClick)}}),[]),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("label",{className:"inline-flex flex-col items-end cursor-pointer p-2 w-full",ref:labelRef},__jsx("input",{type:"checkbox",checked,onChange:console.log,className:"sr-only peer",onClick:function onClick(){return setChecked(!checked)}}),__jsx("span",{className:"w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2"},props.clickable(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)))),__jsx("div",{ref:popupRef,id:"delete-dropdown-".concat(props.id),className:["z-50 absolute",props.className].join(" ")},__jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Z,{in:checked,timeout:300,classNames:"avatar",unmountOnExit:!0},children)))}CustomAbsDrop.__docgenInfo={description:"",methods:[],displayName:"CustomAbsDrop",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"children"},clickable:{required:!0,tsType:{name:"FC"},description:"Clickable"},id:{required:!0,tsType:{name:"number"},description:"id"},className:{required:!1,tsType:{name:"string"},description:"className"}},composes:["Record"]};try{CustomAbsDrop.displayName="CustomAbsDrop",CustomAbsDrop.__docgenInfo={description:"",displayName:"CustomAbsDrop",props:{children:{defaultValue:null,description:"children",name:"children",required:!0,type:{name:"ReactNode"}},clickable:{defaultValue:null,description:"Clickable",name:"clickable",required:!0,type:{name:"FC"}},id:{defaultValue:null,description:"id",name:"id",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"className",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/dropdown/customAbsDrop.tsx#CustomAbsDrop"]={docgenInfo:CustomAbsDrop.__docgenInfo,name:"CustomAbsDrop",path:"src/component/dropdown/customAbsDrop.tsx#CustomAbsDrop"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/dropdown/customDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>CustomDropdown});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_defaultClickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/dropdown/defaultClickable.tsx"),react_transition_group__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/component/avatar/avatar.css"),__webpack_require__("./src/utils/index.ts")),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["index","clickable","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function CustomDropdown(_ref){var _ref$index=_ref.index,index=void 0===_ref$index?0:_ref$index,_ref$clickable=_ref.clickable,clickable=void 0===_ref$clickable?_defaultClickable__WEBPACK_IMPORTED_MODULE_3__.R:_ref$clickable,children=_ref.children,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!0),_React$useState2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_React$useState,2),hidden=_React$useState2[0],setHidden=_React$useState2[1],dropdownRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),childRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState({}),_React$useState4=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_React$useState3,2),style=_React$useState4[0],setStyle=_React$useState4[1];react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleOutsideClick=function handleOutsideClick(event){console.log(event.target),dropdownRef.current&&dropdownRef.current.contains(event.target)||(0,_utils__WEBPACK_IMPORTED_MODULE_5__.zZ)(event.target,{attr:"data-click",value:"abs"})||setHidden(!0)};return document.addEventListener("click",handleOutsideClick),function(){document.removeEventListener("click",handleOutsideClick)}}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){console.log("hidden status: ".concat(hidden))}),[hidden]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:["flex flex-col justify-center items-center gap-2 relative"].join(" "),ref:dropdownRef},clickable(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({handler:function handler(){var calculateFixedPos=function(){var _ref2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){var _dropdownRef$current,_position$top,_position$bottom,_position$right,_props$childHeight,position,spaceAbove,spaceBelow,spaceBelowBottom,spaceRight,spaceLeft,calendarHeight;return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:position=null===(_dropdownRef$current=dropdownRef.current)||void 0===_dropdownRef$current?void 0:_dropdownRef$current.getBoundingClientRect(),spaceAbove=null==position?void 0:position.top,spaceBelow=window.innerHeight-(null!==(_position$top=null==position?void 0:position.top)&&void 0!==_position$top?_position$top:0),spaceBelowBottom=window.innerHeight-(null!==(_position$bottom=null==position?void 0:position.bottom)&&void 0!==_position$bottom?_position$bottom:0),spaceRight=window.innerWidth-(null!==(_position$right=null==position?void 0:position.right)&&void 0!==_position$right?_position$right:0),spaceLeft=null==position?void 0:position.left,calendarHeight=null!==(_props$childHeight=props.childHeight)&&void 0!==_props$childHeight?_props$childHeight:0,spaceBelow>=calendarHeight||spaceBelow>=spaceAbove?props.covered?setStyle({top:"".concat(null==position?void 0:position.top,"px"),left:"".concat(spaceLeft,"px")}):setStyle({top:"".concat(null==position?void 0:position.bottom,"px"),right:"".concat(spaceRight,"px")}):props.covered?setStyle({bottom:"".concat(spaceBelowBottom,"px"),left:"".concat(spaceLeft,"px")}):setStyle({bottom:"".concat(spaceBelow,"px"),right:"".concat(spaceRight,"px")});case 8:case"end":return _context.stop()}}),_callee)})));return function calculateFixedPos(){return _ref2.apply(this,arguments)}}(),calculateAbsPos=function(){var _ref3=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee2(){var _dropdownRef$current2,_position$top2,_position$bottom2,_position$right2,_props$childHeight2,position,spaceAbove,spaceBelow,calendarHeight,_props$pos$top,_props$pos,_props$pos$right,_props$pos2,_props$pos$top2,_props$pos3,_props$pos$right2,_props$pos4;return C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:position=null===(_dropdownRef$current2=dropdownRef.current)||void 0===_dropdownRef$current2?void 0:_dropdownRef$current2.getBoundingClientRect(),spaceAbove=null==position?void 0:position.top,spaceBelow=window.innerHeight-(null!==(_position$top2=null==position?void 0:position.top)&&void 0!==_position$top2?_position$top2:0),window.innerHeight-(null!==(_position$bottom2=null==position?void 0:position.bottom)&&void 0!==_position$bottom2?_position$bottom2:0),window.innerWidth-(null!==(_position$right2=null==position?void 0:position.right)&&void 0!==_position$right2?_position$right2:0),null==position?void 0:position.left,calendarHeight=null!==(_props$childHeight2=props.childHeight)&&void 0!==_props$childHeight2?_props$childHeight2:0,setStyle(spaceBelow>=calendarHeight||spaceBelow>=spaceAbove?{top:"".concat(null!==(_props$pos$top=null===(_props$pos=props.pos)||void 0===_props$pos?void 0:_props$pos.top)&&void 0!==_props$pos$top?_props$pos$top:40,"px"),right:"".concat(null!==(_props$pos$right=null===(_props$pos2=props.pos)||void 0===_props$pos2?void 0:_props$pos2.right)&&void 0!==_props$pos$right?_props$pos$right:0,"px")}:{top:"".concat(null!==(_props$pos$top2=null===(_props$pos3=props.pos)||void 0===_props$pos3?void 0:_props$pos3.top)&&void 0!==_props$pos$top2?_props$pos$top2:40,"px"),right:"".concat(null!==(_props$pos$right2=null===(_props$pos4=props.pos)||void 0===_props$pos4?void 0:_props$pos4.right)&&void 0!==_props$pos$right2?_props$pos$right2:0,"px")});case 8:case"end":return _context2.stop()}}),_callee2)})));return function calculateAbsPos(){return _ref3.apply(this,arguments)}}();props.isAbs?calculateAbsPos():!1===props.isAbs?calculateFixedPos():calculateAbsPos(),setHidden(!1)},index},props)),__jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_9__.Z,{in:!hidden,timeout:300,classNames:"top"in style?"avatar":"avatar-reverse",unmountOnExit:!0},__jsx("div",{id:"dropdownBgHover",ref:childRef,className:["z-20 bg-white rounded-lg shadow dark:bg-gray-700 w-fit",hidden?"hidden":"block",props.isAbs?"absolute":!1===props.isAbs?"fixed":"",props.className].join(" "),style},children))))}CustomDropdown.__docgenInfo={description:"",methods:[],displayName:"CustomDropdown",props:{index:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"number"},description:"index"},clickable:{defaultValue:{value:"DefaultClickable",computed:!0},required:!1,tsType:{name:"FC"},description:"clickable"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"children"},isAbs:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"isAbs"},className:{required:!1,tsType:{name:"string"},description:"className"},pos:{required:!1,tsType:{name:"signature",type:"object",raw:"{top: number, right: number}",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]}},description:"pos"},childHeight:{required:!1,tsType:{name:"number"},description:"childHeight"}},composes:["Record"]};try{CustomDropdown.displayName="CustomDropdown",CustomDropdown.__docgenInfo={description:"",displayName:"CustomDropdown",props:{children:{defaultValue:null,description:"children",name:"children",required:!0,type:{name:"ReactNode"}},clickable:{defaultValue:null,description:"clickable",name:"clickable",required:!0,type:{name:"FC"}},isAbs:{defaultValue:null,description:"isAbs",name:"isAbs",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"className",name:"className",required:!1,type:{name:"string"}},pos:{defaultValue:null,description:"pos",name:"pos",required:!1,type:{name:"{ top: number; right: number; }"}},childHeight:{defaultValue:null,description:"childHeight",name:"childHeight",required:!1,type:{name:"number"}},index:{defaultValue:{value:"0"},description:"index",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/dropdown/customDropdown.tsx#CustomDropdown"]={docgenInfo:CustomDropdown.__docgenInfo,name:"CustomDropdown",path:"src/component/dropdown/customDropdown.tsx#CustomDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/dropdown/defaultClickable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DefaultClickable});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["handler"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function DefaultClickable(_ref){var handler=_ref.handler,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("button",{id:"dropdownBgHoverButton","data-dropdown-toggle":"dropdownBgHover",className:["group/btn bg-transparent border-gray-300 dark:focus:border-violet-500 border font-medium rounded-lg text-sm px-1 h-8 text-center inline-flex items-center justify-between","text-black dark:text-white dark:border-gray-600","focus:ring-violet-500 focus:ring-1"].join(" "),type:"button",onClick:handler},__jsx("span",{className:["block px-1 py-1 rounded-lg cursor-pointer","inline-flex items-center gap-2"].join(" ")},props.title),__jsx("span",{className:"shrink-0 transition duration-300 group-focus/btn:-rotate-180"},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},__jsx("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}))))}DefaultClickable.displayName="DefaultClickable",DefaultClickable.__docgenInfo={description:"",methods:[],displayName:"DefaultClickable"};try{DefaultClickable.displayName="DefaultClickable",DefaultClickable.__docgenInfo={description:"",displayName:"DefaultClickable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/dropdown/defaultClickable.tsx#DefaultClickable"]={docgenInfo:DefaultClickable.__docgenInfo,name:"DefaultClickable",path:"src/component/dropdown/defaultClickable.tsx#DefaultClickable"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/next-dnd-list/addSort.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>AddSort});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/fa6/index.esm.js"),_excluded=["title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function AddSort(_ref){var title=_ref.title,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",{className:["cursor-pointer dark:text-gray-200 text-gray-600 p-2 pl-3 w-full flex flex-row items-center gap-1 text-sm hover:bg-gray-300 dark:hover:bg-gray-500","hover:rounded-md"].join(" "),onClick:props.handler},__jsx(react_icons_fa6__WEBPACK_IMPORTED_MODULE_2__.wEH,null),__jsx("span",null,title))}AddSort.displayName="AddSort",AddSort.__docgenInfo={description:"",methods:[],displayName:"AddSort"};try{AddSort.displayName="AddSort",AddSort.__docgenInfo={description:"",displayName:"AddSort",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/next-dnd-list/addSort.tsx#AddSort"]={docgenInfo:AddSort.__docgenInfo,name:"AddSort",path:"src/component/next-dnd-list/addSort.tsx#AddSort"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jo:()=>graphqlFetch,zZ:()=>searchParentNode});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),graphqlFetch=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(url,query,variables,options){var res;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query,variables}),next:{revalidate:10},signal:null==options?void 0:options.signal});case 2:return res=_context.sent,_context.next=5,res.json();case 5:return _context.abrupt("return",_context.sent.data);case 6:case"end":return _context.stop()}}),_callee)})));return function graphqlFetch(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}(),searchParentNode=function searchParentNode(ele,data){if(ele.getAttribute(data.attr)===data.value)return!0;for(var parent=ele.parentElement;null!==parent;){if(parent.getAttribute(data.attr)===data.value)return!0;parent=parent.parentElement}return!1}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/component/avatar/avatar.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* avatar css */\n.avatar-enter {\n  opacity: 0;\n  transform:translateY(-10%);\n}\n.avatar-enter-active {\n  opacity: 1;\n  transform:translateY(0);\n  transition: opacity 300ms, transform 300ms;\n}\n.avatar-exit {\n  opacity: 1;\n  transform:translateY(0);\n}\n.avatar-exit-active {\n  opacity: 0;\n  transform:translateY(-10%);\n  transition: opacity 300ms, transform 300ms;\n}\n/* avatar reverse css */\n.avatar-reverse-enter {\n  opacity: 0;\n  transform:translateY(10%);\n}\n.avatar-reverse-enter-active {\n  opacity: 1;\n  transform:translateY(0);\n  transition: opacity 300ms, transform 300ms;\n}\n.avatar-reverse-exit {\n  opacity: 1;\n  transform:translateY(0);\n}\n.avatar-reverse-exit-active {\n  opacity: 0;\n  transform:translateY(10%);\n  transition: opacity 300ms, transform 300ms;\n}","",{version:3,sources:["webpack://./src/component/avatar/avatar.css"],names:[],mappings:"AAAA,eAAe;AACf;EACE,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,UAAU;EACV,uBAAuB;EACvB,0CAA0C;AAC5C;AACA;EACE,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,0BAA0B;EAC1B,0CAA0C;AAC5C;AACA,uBAAuB;AACvB;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,uBAAuB;EACvB,0CAA0C;AAC5C;AACA;EACE,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,0CAA0C;AAC5C",sourcesContent:["/* avatar css */\r\n.avatar-enter {\r\n  opacity: 0;\r\n  transform:translateY(-10%);\r\n}\r\n.avatar-enter-active {\r\n  opacity: 1;\r\n  transform:translateY(0);\r\n  transition: opacity 300ms, transform 300ms;\r\n}\r\n.avatar-exit {\r\n  opacity: 1;\r\n  transform:translateY(0);\r\n}\r\n.avatar-exit-active {\r\n  opacity: 0;\r\n  transform:translateY(-10%);\r\n  transition: opacity 300ms, transform 300ms;\r\n}\r\n/* avatar reverse css */\r\n.avatar-reverse-enter {\r\n  opacity: 0;\r\n  transform:translateY(10%);\r\n}\r\n.avatar-reverse-enter-active {\r\n  opacity: 1;\r\n  transform:translateY(0);\r\n  transition: opacity 300ms, transform 300ms;\r\n}\r\n.avatar-reverse-exit {\r\n  opacity: 1;\r\n  transform:translateY(0);\r\n}\r\n.avatar-reverse-exit-active {\r\n  opacity: 0;\r\n  transform:translateY(10%);\r\n  transition: opacity 300ms, transform 300ms;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/component/avatar/avatar.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_avatar_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/component/avatar/avatar.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_avatar_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_avatar_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_avatar_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_avatar_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);