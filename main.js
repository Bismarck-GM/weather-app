/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/main.scss?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ requiredArgs\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getHours/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getHours\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n;\n\n/**\n * @name getHours\n * @category Hour Helpers\n * @summary Get the hours of the given date.\n *\n * @description\n * Get the hours of the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the hours\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Get the hours of 29 February 2012 11:45:00:\n * var result = getHours(new Date(2012, 1, 29, 11, 45))\n * //=> 11\n */\n\nfunction getHours(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);\n  var hours = date.getHours();\n  return hours;\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/getHours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ toDate\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n;\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_backgroundGradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backgroundGradient */ \"./src/modules/backgroundGradient.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n;\n\n\n\n\nconst form = document.getElementById('form');\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.toggleSearchBar)();\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.toggleLoadingAnimation)();\n  const inputValue = document.getElementById('search-input');\n  (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.default)(inputValue.value);\n  inputValue.value = '';\n});\n\nconst switcher = document.getElementById('switch-measurement');\n\n(0,_modules_backgroundGradient__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n;\n\n\nconst digestAPIDATA = async (APIDATA) => {\n  try {\n    const digestedData = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.normalizeApiData)(APIDATA);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleLoadingAnimation)();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createWeatherCard)(digestedData);\n  } catch (err) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleSearchBar)();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorSearchBar)();\n  }\n  return null;\n};\n\nconst getWeather = async (inputString) => {\n  const APICALL = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.processInputStringToApiCall)(inputString);\n  try {\n    const response = await fetch(APICALL);\n    if (response.status !== 200) {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleLoadingAnimation)();\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleSearchBar)();\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorSearchBar)();\n    } else {\n      const APIDATA = await response.json();\n      digestAPIDATA(APIDATA);\n    }\n  } catch (err) {\n    console.log(err);\n  }\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/backgroundGradient.js":
/*!*******************************************!*\
  !*** ./src/modules/backgroundGradient.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var date_fns_getHours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/getHours */ \"./node_modules/date-fns/esm/getHours/index.js\");\n// http://suncalc.net/\n// gradient colors from https://cdpn.io/rDEAl\n\n;\n\nconst momentOfDay = (hour) => {\n  let momentOfDay = '';\n  if (hour >= 22 && hour <= 5) {\n    momentOfDay = 'night';\n  } else if (hour >= 10 && hour <= 17) {\n    momentOfDay = 'day';\n  } else {\n    momentOfDay = 'ds';\n  }\n  return momentOfDay;\n};\n\nconsole.log(new Date());\nlet hour = (0,date_fns_getHours__WEBPACK_IMPORTED_MODULE_0__.default)(new Date());\nlet timeOfDay = momentOfDay(hour);\nlet inx = -1;\n\nconst updateTime = () => {\n  hour = (0,date_fns_getHours__WEBPACK_IMPORTED_MODULE_0__.default)(new Date());\n  return hour;\n};\n\nconst grads = [\n  [{ color: '00000c', position: 0 }, { color: '00000c', position: 0 }],\n  [{ color: '020111', position: 85 }, { color: '191621', position: 100 }],\n  [{ color: '020111', position: 60 }, { color: '20202c', position: 100 }],\n  [{ color: '020111', position: 10 }, { color: '3a3a52', position: 100 }],\n  [{ color: '20202c', position: 0 }, { color: '515175', position: 100 }],\n  [{ color: '40405c', position: 0 }, { color: '6f71aa', position: 80 }, { color: '8a76ab', position: 100 }],\n  [{ color: '4a4969', position: 0 }, { color: '7072ab', position: 50 }, { color: 'cd82a0', position: 100 }],\n  [{ color: '757abf', position: 0 }, { color: '8583be', position: 60 }, { color: 'eab0d1', position: 100 }],\n  [{ color: '82addb', position: 0 }, { color: 'ebb2b1', position: 100 }],\n  [{ color: '94c5f8', position: 1 }, { color: 'a6e6ff', position: 70 }, { color: 'b1b5ea', position: 100 }],\n  [{ color: 'b7eaff', position: 0 }, { color: '94dfff', position: 100 }],\n  [{ color: '9be2fe', position: 0 }, { color: '67d1fb', position: 100 }],\n  [{ color: '90dffe', position: 0 }, { color: '38a3d1', position: 100 }],\n  [{ color: '57c1eb', position: 0 }, { color: '246fa8', position: 100 }],\n  [{ color: '2d91c2', position: 0 }, { color: '1e528e', position: 100 }],\n  [{ color: '2473ab', position: 0 }, { color: '1e528e', position: 70 }, { color: '5b7983', position: 100 }],\n  [{ color: '1e528e', position: 0 }, { color: '265889', position: 50 }, { color: '9da671', position: 100 }],\n  [{ color: '1e528e', position: 0 }, { color: '728a7c', position: 50 }, { color: 'e9ce5d', position: 100 }],\n  [{ color: '154277', position: 0 }, { color: '576e71', position: 30 }, { color: 'e1c45e', position: 70 }, { color: 'b26339', position: 100 }],\n  [{ color: '163C52', position: 0 }, { color: '4F4F47', position: 30 }, { color: 'C5752D', position: 60 }, { color: 'B7490F', position: 80 }, { color: '2F1107', position: 100 }],\n  [{ color: '071B26', position: 0 }, { color: '071B26', position: 30 }, { color: '8A3B12', position: 80 }, { color: '240E03', position: 100 }],\n  [{ color: '010A10', position: 30 }, { color: '59230B', position: 80 }, { color: '2F1107', position: 100 }],\n  [{ color: '090401', position: 50 }, { color: '4B1D06', position: 100 }],\n  [{ color: '00000c', position: 80 }, { color: '150800', position: 100 }],\n];\n\nconst toCSSGradient = (data) => {\n  let css = 'linear-gradient(to bottom, ';\n  const len = data.length;\n\n  for (let i = 0; i < len; i += 1) {\n    const item = data[i];\n    css += ` #${item.color} ${item.position}%`;\n    if (i < len - 1) css += ',';\n  }\n  return `${css})`;\n};\n\nconst setCSSGradientByIndex = (nInx) => {\n  if (nInx !== inx) {\n    inx = nInx;\n    const data = grads[inx];\n    if (data == null) return;\n    // convert data to gradient\n    const css = toCSSGradient(data);\n    // update the background\n    const mainBody = document.querySelector('#main-body');\n    mainBody.style.backgroundImage = `${css}`;\n    mainBody.style.backgroundImage = `-webkit-${css}`;\n    mainBody.style.backgroundImage = `-moz-${css}`;\n  }\n  hour = (0,date_fns_getHours__WEBPACK_IMPORTED_MODULE_0__.default)(new Date());\n};\n\nconst updateBackgroundsBasedOnNow = () => {\n  setCSSGradientByIndex(updateTime());\n};\n\n// First run to load background.\n\nconst h = updateTime();\nsetCSSGradientByIndex(h);\n\nsetInterval(() => { updateBackgroundsBasedOnNow(); }, 60 * 1000);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBackgroundsBasedOnNow);\n\n//# sourceURL=webpack://weather-app/./src/modules/backgroundGradient.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! namespace exports */
/*! export createWeatherCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayErrorSearchBar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleLoadingAnimation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleSearchBar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWeatherCard\": () => /* binding */ createWeatherCard,\n/* harmony export */   \"toggleSearchBar\": () => /* binding */ toggleSearchBar,\n/* harmony export */   \"toggleLoadingAnimation\": () => /* binding */ toggleLoadingAnimation,\n/* harmony export */   \"displayErrorSearchBar\": () => /* binding */ displayErrorSearchBar\n/* harmony export */ });\n/* <div class=\"row h-100 w-100 align-items-center justify-content-center m-0 position-absolute\">\n<div class=\"col-12 col-md-6 col-lg-4\">\n  <div class=\"weather-card one\">\n    <div class=\"top\">\n      <div class=\"wrapper\">\n        <h1 class=\"heading\">Clear night</h1>\n        <h3 class=\"location\">Dhaka, Bangladesh</h3>\n        <i class=\"wi wi-owm-200\"></i>\n        <p class=\"temp\">\n          <span class=\"temp-value\">20</span>\n          <span class=\"deg\">°</span>\n          <span class=\"temp-type\">C</span>\n        </p>\n        <table class=\"table-temp\">\n          <tr>\n            <th>Feels Like:</th>\n            <th>Max. Temp:</th>\n            <th>Min. Temp:</th>\n          </tr>\n          <tr>\n            <td><sup>°</sup><span class=\"temp-type\">C</span></td>\n            <td><sup>°</sup><span class=\"temp-type\">C</span></td>\n            <td><sup>°</sup><span class=\"temp-type\">C</span></td>\n          </tr>\n        </table>\n\n        <hr>\n        <table class=\"table-humidity\">\n          <tr>\n            <th>Humidity</th>\n            <th>Pressure</th>\n          </tr>\n          <tr>\n            <td>20%</td>\n            <td>1000</td>\n          </tr>\n        </table>\n        <hr>\n        <h4>Wind</h4>\n        <i class=\"wi wi-wind from-360-deg\"></i>\n        <table class=\"table-wind\">\n          <tr>\n            <th>From</th>\n            <th>Speed</th>\n          </tr>\n          <tr>\n            <td>Northerly</td>\n            <td>18-28 Km/h</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n</div> */\n\n// cityName: \"Santa Fe\"\n// countryCode: \"AR\"\n// countryName: \"Argentina\"\n// humidity: 63\n// pressure: 1010\n// temperatures: {temp: 84.2, feels_like: 84.2, temp_min: 84.2, temp_max: 84.2, sea_level: 213.8, …}\n// weather: {id: 500, main: \"Rain\", description: \"Light rain\", icon: \"10d\"}\n// wind: {speed: 3.9, deg: 150, speedText: \"20-28 Km/h\", directionText: \"South Easterly\"}\nconst toggleSearchBar = () => {\n  const searchBar = document.getElementById('search-container');\n  if (searchBar.classList.contains('animate__zoomIn')) {\n    searchBar.classList.remove('animate__zoomIn');\n    searchBar.classList.add('fadeOut');\n  } else {\n    searchBar.classList.remove('animate__fadeOut');\n    searchBar.classList.add('animate__zoomIn');\n    searchBar.focus();\n  }\n};\n\nconst toggleLoadingAnimation = () => {\n  const loadingAn = document.getElementById('loading-animation');\n  loadingAn.classList.toggle('d-none');\n};\n\nconst displayErrorSearchBar = () => {\n  const errorBox = document.querySelector('.invalid-feedback');\n  errorBox.classList.add('d-block');\n};\n\nfunction createEl(type, cl = '') {\n  const el = document.createElement(type);\n  if (cl !== '') {\n    el.classList += cl;\n  }\n  return el;\n}\n\nfunction switchStatus() {\n  return document.getElementById('switch-measurement').checked;\n}\n\nfunction getTempSign() {\n  let sign = '';\n  if (switchStatus()) {\n    sign = 'C';\n  } else {\n    sign = 'F';\n  }\n  return sign;\n}\n\nconst createWeatherCard = (data) => {\n  const sup = document.createElement('sup');\n  sup.innerText = '°';\n\n  const tempType = createEl('span', 'temp-type');\n  tempType.innerText = getTempSign();\n\n  const hr = document.createElement('hr');\n  const hr2 = document.createElement('hr');\n\n  const row = document.getElementById('main-container');\n  row.innerHTML = '';\n  const col = createEl('div', 'col-12 col-md-6 col-lg-4');\n  const weatherCard = createEl('div', 'weather-card');\n  const wcTop = createEl('div', 'top');\n\n  const wrapper = createEl('div', 'wrapper');\n\n  const heading = createEl('h1', 'heading');\n  heading.innerText = `${data.weather.description}`;\n\n  const location = createEl('h3', 'location');\n  location.innerText = `${data.cityName}, ${data.countryName}`;\n\n  const mainIcon = createEl('i', `wi wi-owm-${data.weather.id}`);\n\n  const temp = createEl('p', 'temp');\n  const tempValue = createEl('span', 'temp-value');\n  tempValue.innerText = `${data.temperatures.temp}`;\n  const tempDegree = createEl('span', 'deg');\n  tempDegree.innerText = '°';\n\n  temp.append(tempValue, tempDegree, tempType);\n\n  const tableTemp = createEl('table', 'table-temp');\n  const tableTempHeader = createEl('tr');\n  const feelsLikeH = createEl('th');\n  feelsLikeH.innerText = 'Feels Like';\n  const maxTempH = createEl('th');\n  maxTempH.innerText = 'Max. Temp';\n  const minTempH = createEl('th');\n  minTempH.innerText = 'Min. Temp';\n  tableTempHeader.append(feelsLikeH, maxTempH, minTempH);\n\n  const tableTempInfo = createEl('tr');\n  const feelsLike = createEl('td');\n  feelsLike.innerText = `${data.temperatures.feels_like} °${getTempSign()}`;\n  const maxTemp = createEl('td');\n  maxTemp.innerText = `${data.temperatures.temp_max} °${getTempSign()}`;\n  const minTemp = createEl('td');\n  minTemp.innerText = `${data.temperatures.temp_min} °${getTempSign()}`;\n  tableTempInfo.append(feelsLike, maxTemp, minTemp);\n\n  tableTemp.append(tableTempHeader, tableTempInfo);\n\n  const tableHumidity = createEl('table', 'table-humidity');\n\n  const tableHumHeader = createEl('tr');\n  const humidityH = createEl('th');\n  humidityH.innerText = 'Humidity';\n  const pressureH = createEl('th');\n  pressureH.innerText = 'Pressure';\n  tableHumHeader.append(humidityH, pressureH);\n\n  const tableHumInfo = createEl('tr');\n  const humidity = createEl('td');\n  humidity.innerText = `% ${data.humidity}`;\n  const pressure = createEl('td');\n  pressure.innerText = `${data.pressure} hPa`;\n  tableHumInfo.append(humidity, pressure);\n\n  tableHumidity.append(tableHumHeader, tableHumInfo);\n\n  const windTitle = createEl('h4');\n  windTitle.innerText = 'Wind';\n  const windIcon = createEl('i', `wi wi-wind from-${data.wind.deg}-deg`);\n\n  const tableWind = createEl('table', 'table-wind');\n\n  const tableWindHeader = createEl('tr');\n  const windDirectionH = createEl('th');\n  windDirectionH.innerText = 'From';\n  const windSpeedH = createEl('th');\n  windSpeedH.innerText = 'Speed';\n  tableWindHeader.append(windDirectionH, windSpeedH);\n\n  const tableWindInfo = createEl('tr');\n  const windDirection = createEl('td');\n  windDirection.innerText = `${data.wind.directionText}`;\n  const windSpeed = createEl('td');\n  windSpeed.innerText = `${data.wind.speedText}`;\n  tableWindInfo.append(windDirection, windSpeed);\n\n  tableWind.append(tableWindHeader, tableWindInfo);\n\n  wrapper.append(\n    heading,\n    location,\n    mainIcon,\n    temp,\n    tableTemp,\n    hr,\n    tableHumidity,\n    hr2,\n    windTitle,\n    windIcon,\n    tableWind,\n  );\n\n  wcTop.appendChild(wrapper);\n  weatherCard.appendChild(wcTop);\n  col.appendChild(weatherCard);\n  col.classList.add('animate__animated', 'animate__fadeIn');\n  row.appendChild(col);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/*! namespace exports */
/*! export normalizeApiData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processInputStringToApiCall [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"normalizeApiData\": () => /* binding */ normalizeApiData,\n/* harmony export */   \"processInputStringToApiCall\": () => /* binding */ processInputStringToApiCall\n/* harmony export */ });\n/* harmony import */ var _isoCountries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoCountries */ \"./src/modules/isoCountries.js\");\n;\n\nconst APIKEY = '49eaa4abf6e4f3d9db8f20bfed37ffca';\n\nconst windBeaufortToKmh = (windSpeed) => {\n  // return (Math.round(0.836 * Math.sqrt(windSpeed ** 3) * 100) / 100) * 3.6; Beaufort to MS to KMH\n  const speedRange = [\n    '< 1 Km/h',\n    '1-5 Km/h',\n    '6-11 Km/h',\n    '12-19 Km/h',\n    '20-28 Km/h',\n    '29-38 Km/h',\n    '39-49 Km/h',\n    '50-61 Km/h',\n    '62-74 Km/h',\n    '75-88 Km/h',\n    '89-102 Km/h',\n    '103-117 Km/h',\n    '>= 118 Km/h',\n  ];\n  return speedRange[Math.round(windSpeed)];\n};\n\nconst capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);\n\nconst splitCityCountryString = (string) => {\n  const [cityName, countryName] = [string.split(',')[0].trim(), string.split(',')[1].trim()];\n  return [cityName, countryName];\n};\n\nconst capitalizeFirstLetterAllWords = (string) => {\n  const splitStr = string.toLowerCase().split(' ');\n  for (let i = 0; i < splitStr.length; i += 1) {\n    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);\n  }\n  return splitStr.join(' ');\n};\n\nconst processInputStringToApiCall = (inputString) => {\n  let APICALL = '';\n  if (inputString.indexOf(',') !== -1) {\n    const strArr = splitCityCountryString(inputString);\n    strArr[1] = (0,_isoCountries__WEBPACK_IMPORTED_MODULE_0__.getCountryCode)(capitalizeFirstLetterAllWords(strArr[1]));\n    APICALL = `https://api.openweathermap.org/data/2.5/weather?q=${strArr[0]},${strArr[1]}&appid=${APIKEY}`;\n  }\n  if (inputString.indexOf(',') === -1) {\n    APICALL = `https://api.openweathermap.org/data/2.5/weather?q=${inputString}&appid=${APIKEY}`;\n  }\n  console.log(APICALL);\n  return APICALL;\n};\n\nconst toTextualDescription = (degree) => {\n  const sectors = [\n    'Northerly',\n    'North Easterly',\n    'Easterly',\n    'South Easterly',\n    'Southerly',\n    'South Westerly',\n    'Westerly',\n    'North Westerly'];\n  degree += 22.5;\n\n  if (degree < 0) {\n    degree = (360 - Math.abs(degree)) % 360;\n  } else {\n    degree %= 360;\n  }\n  const which = parseInt(degree / 45, 10);\n  return sectors[which];\n};\n\nconst switchStatus = () => document.getElementById('switch-measurement').checked;\n\nconst normalizeTempMetric = (temperature) => Math.floor(temperature / 10);\n\nconst normalizeTempFahrenheit = (temperatures) => (\n  normalizeTempMetric(temperatures) * (9 / 5) + 32);\n\nconst digestTemperatures = (temperatureObject) => {\n  const response = {};\n  Object.keys(temperatureObject).forEach((key) => {\n    if (switchStatus()) {\n      response[key] = normalizeTempMetric(temperatureObject[key]);\n    } else {\n      response[key] = normalizeTempFahrenheit(temperatureObject[key]);\n    }\n  });\n  return response;\n};\n\nconst destructData = (APIDATA) => {\n  const [{ pressure, humidity, ...temperatures }, cityName, countryCode, weather, { wind }] = [\n    APIDATA.main,\n    APIDATA.name,\n    APIDATA.sys.country,\n    APIDATA.weather[0],\n    APIDATA];\n  const digestedData = {\n    temperatures,\n    pressure,\n    humidity,\n    cityName,\n    countryCode,\n    weather,\n    wind,\n  };\n  return digestedData;\n};\n\nconst normalizeApiData = (APIDATA) => {\n  const data = destructData(APIDATA);\n  data.temperatures = digestTemperatures(data.temperatures);\n  data.countryName = (0,_isoCountries__WEBPACK_IMPORTED_MODULE_0__.getCountryName)(data.countryCode);\n  data.wind.speedText = windBeaufortToKmh(data.wind.speed);\n  data.wind.directionText = toTextualDescription(data.wind.deg);\n  data.weather.description = capitalizeFirstLetter(data.weather.description);\n  console.log(data);\n  return data;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/isoCountries.js":
/*!*************************************!*\
  !*** ./src/modules/isoCountries.js ***!
  \*************************************/
/*! namespace exports */
/*! export getCountryCode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCountryName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCountryName\": () => /* binding */ getCountryName,\n/* harmony export */   \"getCountryCode\": () => /* binding */ getCountryCode\n/* harmony export */ });\nconst isoCountries = {\n  AF: 'Afghanistan',\n  AX: 'Aland Islands',\n  AL: 'Albania',\n  DZ: 'Algeria',\n  AS: 'American Samoa',\n  AD: 'Andorra',\n  AO: 'Angola',\n  AI: 'Anguilla',\n  AQ: 'Antarctica',\n  AG: 'Antigua And Barbuda',\n  AR: 'Argentina',\n  AM: 'Armenia',\n  AW: 'Aruba',\n  AU: 'Australia',\n  AT: 'Austria',\n  AZ: 'Azerbaijan',\n  BS: 'Bahamas',\n  BH: 'Bahrain',\n  BD: 'Bangladesh',\n  BB: 'Barbados',\n  BY: 'Belarus',\n  BE: 'Belgium',\n  BZ: 'Belize',\n  BJ: 'Benin',\n  BM: 'Bermuda',\n  BT: 'Bhutan',\n  BO: 'Bolivia',\n  BA: 'Bosnia And Herzegovina',\n  BW: 'Botswana',\n  BV: 'Bouvet Island',\n  BR: 'Brazil',\n  IO: 'British Indian Ocean Territory',\n  BN: 'Brunei Darussalam',\n  BG: 'Bulgaria',\n  BF: 'Burkina Faso',\n  BI: 'Burundi',\n  KH: 'Cambodia',\n  CM: 'Cameroon',\n  CA: 'Canada',\n  CV: 'Cape Verde',\n  KY: 'Cayman Islands',\n  CF: 'Central African Republic',\n  TD: 'Chad',\n  CL: 'Chile',\n  CN: 'China',\n  CX: 'Christmas Island',\n  CC: 'Cocos (Keeling) Islands',\n  CO: 'Colombia',\n  KM: 'Comoros',\n  CG: 'Congo',\n  CD: 'Congo, Democratic Republic',\n  CK: 'Cook Islands',\n  CR: 'Costa Rica',\n  CI: 'Cote D\\'Ivoire',\n  HR: 'Croatia',\n  CU: 'Cuba',\n  CY: 'Cyprus',\n  CZ: 'Czech Republic',\n  DK: 'Denmark',\n  DJ: 'Djibouti',\n  DM: 'Dominica',\n  DO: 'Dominican Republic',\n  EC: 'Ecuador',\n  EG: 'Egypt',\n  SV: 'El Salvador',\n  GQ: 'Equatorial Guinea',\n  ER: 'Eritrea',\n  EE: 'Estonia',\n  ET: 'Ethiopia',\n  FK: 'Falkland Islands (Malvinas)',\n  FO: 'Faroe Islands',\n  FJ: 'Fiji',\n  FI: 'Finland',\n  FR: 'France',\n  GF: 'French Guiana',\n  PF: 'French Polynesia',\n  TF: 'French Southern Territories',\n  GA: 'Gabon',\n  GM: 'Gambia',\n  GE: 'Georgia',\n  DE: 'Germany',\n  GH: 'Ghana',\n  GI: 'Gibraltar',\n  GR: 'Greece',\n  GL: 'Greenland',\n  GD: 'Grenada',\n  GP: 'Guadeloupe',\n  GU: 'Guam',\n  GT: 'Guatemala',\n  GG: 'Guernsey',\n  GN: 'Guinea',\n  GW: 'Guinea-Bissau',\n  GY: 'Guyana',\n  HT: 'Haiti',\n  HM: 'Heard Island & Mcdonald Islands',\n  VA: 'Holy See (Vatican City State)',\n  HN: 'Honduras',\n  HK: 'Hong Kong',\n  HU: 'Hungary',\n  IS: 'Iceland',\n  IN: 'India',\n  ID: 'Indonesia',\n  IR: 'Iran, Islamic Republic Of',\n  IQ: 'Iraq',\n  IE: 'Ireland',\n  IM: 'Isle Of Man',\n  IL: 'Israel',\n  IT: 'Italy',\n  JM: 'Jamaica',\n  JP: 'Japan',\n  JE: 'Jersey',\n  JO: 'Jordan',\n  KZ: 'Kazakhstan',\n  KE: 'Kenya',\n  KI: 'Kiribati',\n  KR: 'Korea',\n  KW: 'Kuwait',\n  KG: 'Kyrgyzstan',\n  LA: 'Lao People\\'s Democratic Republic',\n  LV: 'Latvia',\n  LB: 'Lebanon',\n  LS: 'Lesotho',\n  LR: 'Liberia',\n  LY: 'Libyan Arab Jamahiriya',\n  LI: 'Liechtenstein',\n  LT: 'Lithuania',\n  LU: 'Luxembourg',\n  MO: 'Macao',\n  MK: 'Macedonia',\n  MG: 'Madagascar',\n  MW: 'Malawi',\n  MY: 'Malaysia',\n  MV: 'Maldives',\n  ML: 'Mali',\n  MT: 'Malta',\n  MH: 'Marshall Islands',\n  MQ: 'Martinique',\n  MR: 'Mauritania',\n  MU: 'Mauritius',\n  YT: 'Mayotte',\n  MX: 'Mexico',\n  FM: 'Micronesia, Federated States Of',\n  MD: 'Moldova',\n  MC: 'Monaco',\n  MN: 'Mongolia',\n  ME: 'Montenegro',\n  MS: 'Montserrat',\n  MA: 'Morocco',\n  MZ: 'Mozambique',\n  MM: 'Myanmar',\n  NA: 'Namibia',\n  NR: 'Nauru',\n  NP: 'Nepal',\n  NL: 'Netherlands',\n  AN: 'Netherlands Antilles',\n  NC: 'New Caledonia',\n  NZ: 'New Zealand',\n  NI: 'Nicaragua',\n  NE: 'Niger',\n  NG: 'Nigeria',\n  NU: 'Niue',\n  NF: 'Norfolk Island',\n  MP: 'Northern Mariana Islands',\n  NO: 'Norway',\n  OM: 'Oman',\n  PK: 'Pakistan',\n  PW: 'Palau',\n  PS: 'Palestinian Territory, Occupied',\n  PA: 'Panama',\n  PG: 'Papua New Guinea',\n  PY: 'Paraguay',\n  PE: 'Peru',\n  PH: 'Philippines',\n  PN: 'Pitcairn',\n  PL: 'Poland',\n  PT: 'Portugal',\n  PR: 'Puerto Rico',\n  QA: 'Qatar',\n  RE: 'Reunion',\n  RO: 'Romania',\n  RU: 'Russian Federation',\n  RW: 'Rwanda',\n  BL: 'Saint Barthelemy',\n  SH: 'Saint Helena',\n  KN: 'Saint Kitts And Nevis',\n  LC: 'Saint Lucia',\n  MF: 'Saint Martin',\n  PM: 'Saint Pierre And Miquelon',\n  VC: 'Saint Vincent And Grenadines',\n  WS: 'Samoa',\n  SM: 'San Marino',\n  ST: 'Sao Tome And Principe',\n  SA: 'Saudi Arabia',\n  SN: 'Senegal',\n  RS: 'Serbia',\n  SC: 'Seychelles',\n  SL: 'Sierra Leone',\n  SG: 'Singapore',\n  SK: 'Slovakia',\n  SI: 'Slovenia',\n  SB: 'Solomon Islands',\n  SO: 'Somalia',\n  ZA: 'South Africa',\n  GS: 'South Georgia And Sandwich Isl.',\n  ES: 'Spain',\n  LK: 'Sri Lanka',\n  SD: 'Sudan',\n  SR: 'Suriname',\n  SJ: 'Svalbard And Jan Mayen',\n  SZ: 'Swaziland',\n  SE: 'Sweden',\n  CH: 'Switzerland',\n  SY: 'Syrian Arab Republic',\n  TW: 'Taiwan',\n  TJ: 'Tajikistan',\n  TZ: 'Tanzania',\n  TH: 'Thailand',\n  TL: 'Timor-Leste',\n  TG: 'Togo',\n  TK: 'Tokelau',\n  TO: 'Tonga',\n  TT: 'Trinidad And Tobago',\n  TN: 'Tunisia',\n  TR: 'Turkey',\n  TM: 'Turkmenistan',\n  TC: 'Turks And Caicos Islands',\n  TV: 'Tuvalu',\n  UG: 'Uganda',\n  UA: 'Ukraine',\n  AE: 'United Arab Emirates',\n  GB: 'United Kingdom',\n  US: 'United States',\n  UM: 'United States Outlying Islands',\n  UY: 'Uruguay',\n  UZ: 'Uzbekistan',\n  VU: 'Vanuatu',\n  VE: 'Venezuela',\n  VN: 'Viet Nam',\n  VG: 'Virgin Islands, British',\n  VI: 'Virgin Islands, U.S.',\n  WF: 'Wallis And Futuna',\n  EH: 'Western Sahara',\n  YE: 'Yemen',\n  ZM: 'Zambia',\n  ZW: 'Zimbabwe',\n};\n\nconst getCountryName = (countryCode) => {\n  if (Object.prototype.hasOwnProperty.call(isoCountries, countryCode)) {\n    return isoCountries[countryCode];\n  }\n  return countryCode;\n};\n\nconst getCountryCode = (countryName) => {\n  console.log(countryName);\n  return Object.keys(isoCountries).find(key => isoCountries[key] === countryName);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/isoCountries.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;