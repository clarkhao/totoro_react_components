"use strict";(self.webpackChunknext_components=self.webpackChunknext_components||[]).push([[6949],{"./src/stories/list/fitlerList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterListDefault:()=>FilterListDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FilterListDefault$pa,_FilterListDefault$pa2,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_component_next_list_withFilter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/next-list/withFilter.tsx"),__jsx=__webpack_require__("./node_modules/react/index.js").createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/List/FilterList",component:_component_next_list_withFilter__WEBPACK_IMPORTED_MODULE_2__.c,tags:["autodocs"],parameters:{layout:"fullscreen"}};var FilterListDefault={args:{},decorators:[function(Story){return __jsx("div",{className:"px-2"},__jsx(Story,null))}]};FilterListDefault.parameters=_objectSpread(_objectSpread({},FilterListDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FilterListDefault$pa=FilterListDefault.parameters)||void 0===_FilterListDefault$pa?void 0:_FilterListDefault$pa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  decorators: [Story => <div className="px-2">\r\n        <Story />\r\n      </div>]\n}'},null===(_FilterListDefault$pa2=FilterListDefault.parameters)||void 0===_FilterListDefault$pa2||null===(_FilterListDefault$pa2=_FilterListDefault$pa2.docs)||void 0===_FilterListDefault$pa2?void 0:_FilterListDefault$pa2.source)})})},"./src/component/fitler/filterClient.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>FilterClient});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fi__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),_select_select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/component/select/select.tsx"),_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/fitler/hook.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function FilterClient(_ref){var props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref),_ref)),filter=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_hook__WEBPACK_IMPORTED_MODULE_2__.f);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:["flex flex-row gap-4  bg-white dark:bg-gray-800 dark:border-gray-700 px-2 mb-6"].join(" ")},props.items?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:__jsx("p",null,"Loading...")},__jsx(_select_select__WEBPACK_IMPORTED_MODULE_1__.P,{items:props.items,title:"Choose Category",id:"category",onChange:function onChange(e){console.log(e.target.value);var index=Number.isNaN(+e.target.value)?0:+e.target.value;null==filter||filter.filterDispatch({type:"set-selected",payload:index})}})),__jsx("div",{className:"h-8 xs:h-14 flex-1"},__jsx("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search"),__jsx("div",{className:"relative"},__jsx("div",{className:" absolute xs:flex hidden inset-y-0 left-0 items-center pl-3 pointer-events-none"},__jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSearch,null)),__jsx("input",{type:"search",id:"default-search",className:"block w-full h-8 xs:h-14 xs:pl-10 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-brand-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-violet-500",placeholder:"Search Product",required:!0,value:null==filter?void 0:filter.filterState.search,onChange:function onChange(e){null==filter||filter.filterDispatch({type:"set-search",payload:e.target.value})}}),__jsx("button",{className:"text-white absolute right-0 bottom-0 bg-brand-secondary-light hover:bg-brand-secondary focus:outline-none font-medium rounded-tr-lg rounded-br-lg text-sm h-8 xs:h-14 px-4 py-1 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800",onClick:function onClick(){console.log("hello")}},"Search")))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"h-12 mb-6 flex-1 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 "}),__jsx("div",{className:"w-96 mb-6 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700"}))))}FilterClient.__docgenInfo={description:"",methods:[],displayName:"FilterClient"};try{FilterClient.displayName="FilterClient",FilterClient.__docgenInfo={description:"",displayName:"FilterClient",props:{items:{defaultValue:null,description:"items",name:"items",required:!0,type:{name:"{ id: string; title: string; }[] | undefined"}},isTopBarFixed:{defaultValue:null,description:"isTopBarFixed?",name:"isTopBarFixed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/fitler/filterClient.tsx#FilterClient"]={docgenInfo:FilterClient.__docgenInfo,name:"FilterClient",path:"src/component/fitler/filterClient.tsx#FilterClient"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/next-list/withFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>WithFilterList});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),hook=__webpack_require__("./src/component/fitler/hook.ts"),filterClient=__webpack_require__("./src/component/fitler/filterClient.tsx"),query="#graphql\n  query {\n    collections(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          handle\n          title\n          description\n          image {\n            id\n            url\n          }\n        }\n      }\n    }\n  }\n  ",list=__webpack_require__("./src/component/next-list/list.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;function WithFilterList(_ref){var props=(0,esm_extends.Z)({},((0,objectDestructuringEmpty.Z)(_ref),_ref)),_useFilter=(0,hook.L)(),filterState=_useFilter.filterState,filterDispatch=_useFilter.filterDispatch,_React$useState=react.useState(void 0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),data=_React$useState2[0],setData=_React$useState2[1],_React$useState3=react.useState(),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),setError=(_React$useState4[0],_React$useState4[1]);react.useEffect((function(){(0,utils.Jo)("https://mock.shop/api",query).then(function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(res){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:res.collections&&setData([{id:"",title:"All"}].concat(res.collections.edges.map((function(el){return{id:el.node.id,title:el.node.title}}))));case 1:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}()).catch((function(err){console.log(err.message),setError(err)}))}),[]);var categoryQuery=react.useMemo((function(){var _data$filter$map$,id=null!==(_data$filter$map$=null==data?void 0:data.filter((function(_,index){return index===filterState.selected})).map((function(el){return el.id}))[0])&&void 0!==_data$filter$map$?_data$filter$map$:"";return console.log(id),'#graphql\n    query GetProducts ($page: Int!, $cursor: String) {\n      collection(id: "'.concat(id,'") {\n        products(first: $page, after: $cursor) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n            endCursor\n          }\n          edges {\n            node {\n              id\n              title\n              variants(first: 1) {\n                edges {\n                  node {\n                    id\n                    price {\n                      amount\n                      currencyCode\n                    }\n                  }\n                }\n              }\n              images(first: 5) {\n                edges {\n                  node {\n                    url\n                    width\n                    height\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n   ')}),[filterState.selected,data]);return __jsx(react.Fragment,null,__jsx(hook.f.Provider,{value:{filterState,filterDispatch}},__jsx(filterClient.R,{items:data,isTopBarFixed:props.isTopBarFixed}),0===filterState.selected?__jsx(list.d,{url:"https://mock.shop/api",renderWays:"infinite",fromCollections:!1,query:list.J}):__jsx(list.d,{url:"https://mock.shop/api",renderWays:"infinite",fromCollections:!0,query:categoryQuery})))}WithFilterList.__docgenInfo={description:"",methods:[],displayName:"WithFilterList",props:{isTopBarFixed:{required:!1,tsType:{name:"boolean"},description:"isTopBarFixed?"}}};try{WithFilterList.displayName="WithFilterList",WithFilterList.__docgenInfo={description:"",displayName:"WithFilterList",props:{isTopBarFixed:{defaultValue:null,description:"isTopBarFixed?",name:"isTopBarFixed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/next-list/withFilter.tsx#WithFilterList"]={docgenInfo:WithFilterList.__docgenInfo,name:"WithFilterList",path:"src/component/next-list/withFilter.tsx#WithFilterList"})}catch(__react_docgen_typescript_loader_error){}}}]);