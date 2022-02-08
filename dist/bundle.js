/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/File.ts":
/*!*********************!*\
  !*** ./src/File.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": () => (/* binding */ File)
/* harmony export */ });
var File = /** @class */ (function () {
    function File(size, name) {
        this.size = size;
        this.name = name;
    }
    Object.defineProperty(File.prototype, "getterSize", {
        //Getters
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "getterName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "setterName", {
        //Setters
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return File;
}());



/***/ }),

/***/ "./src/Image.ts":
/*!**********************!*\
  !*** ./src/Image.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/File.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(size, name, width, height, resolution) {
        var _this = _super.call(this, size, name) || this;
        _this.width = width;
        _this.height = height;
        _this.resolution = resolution;
        return _this;
    }
    Image.prototype.getAreaSize = function () {
        return this.width * this.height;
    };
    return Image;
}(_File__WEBPACK_IMPORTED_MODULE_0__.File));



/***/ }),

/***/ "./src/Song.ts":
/*!*********************!*\
  !*** ./src/Song.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Song": () => (/* binding */ Song)
/* harmony export */ });
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/File.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Song = /** @class */ (function (_super) {
    __extends(Song, _super);
    function Song(size, name, artist) {
        var _this = _super.call(this, size, name) || this;
        _this.artist = artist;
        return _this;
    }
    return Song;
}(_File__WEBPACK_IMPORTED_MODULE_0__.File));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Song */ "./src/Song.ts");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./src/Image.ts");


var my_song = new _Song__WEBPACK_IMPORTED_MODULE_0__.Song(23, "californication", "Red hot chillo pepper");
// Not call it, my_song.getterName() 🚩
console.log(my_song.getterName);
my_song.setterName = "another name";
console.log(my_song.getterName);
var my_image = new _Image__WEBPACK_IMPORTED_MODULE_1__.Image(10, "001", 20, 10, 300);
console.log(my_image.getAreaSize());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHRSxjQUFZLElBQVcsRUFBRSxJQUFXO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBSSw0QkFBVTtRQURkLFNBQVM7YUFDVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDbEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw0QkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTtRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFVO1FBRGQsU0FBUzthQUNULFVBQWUsS0FBWTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUs7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjZCO0FBRTlCO0lBQTJCLHlCQUFJO0lBSTdCLGVBQ0UsSUFBVyxFQUNYLElBQVcsRUFDWCxLQUFZLEVBQ1osTUFBYSxFQUNiLFVBQWlCO1FBTG5CLFlBT0Usa0JBQU0sSUFBSSxFQUFDLElBQUksQ0FBQyxTQUlqQjtRQUhDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDOztJQUMvQixDQUFDO0lBQ00sMkJBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0FuQjBCLHVDQUFJLEdBbUI5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjJCO0FBQzVCO0lBQTBCLHdCQUFJO0lBRTVCLGNBQVksSUFBWSxFQUFFLElBQVksRUFBRSxNQUFjO1FBQXRELFlBQ0Usa0JBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUVsQjtRQURDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztJQUN2QixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FOeUIsdUNBQUksR0FNN0I7Ozs7Ozs7O1VDUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDRTtBQUU5QixJQUFNLE9BQU8sR0FBRyxJQUFJLHVDQUFJLENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDekUsdUNBQXVDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsY0FBYztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVoQyxJQUFNLFFBQVEsR0FBRyxJQUFJLHlDQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay10eXBlLWFwcC8uL3NyYy9GaWxlLnRzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLXR5cGUtYXBwLy4vc3JjL0ltYWdlLnRzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLXR5cGUtYXBwLy4vc3JjL1NvbmcudHMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLXR5cGUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay10eXBlLWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsZXtcbiAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XG4gIHByaXZhdGUgbmFtZTpzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHNpemU6bnVtYmVyLCBuYW1lOnN0cmluZyl7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIC8vR2V0dGVyc1xuICBnZXQgZ2V0dGVyU2l6ZSgpOm51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZVxuICB9XG4gIGdldCBnZXR0ZXJOYW1lKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cbiAgLy9TZXR0ZXJzXG4gIHNldCBzZXR0ZXJOYW1lKHZhbHVlOnN0cmluZyl7IC8vTm8gbmVlZCBhIHJldHVybiBzdGF0ZW1lbnRcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZVxuICB9XG59IiwiaW1wb3J0IHsgRmlsZSB9IGZyb20gJy4vRmlsZSc7XG5pbXBvcnQgeyBWaXN1YWxGaWxlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL1Zpc3VhbEZpbGUnO1xuZXhwb3J0IGNsYXNzIEltYWdlIGV4dGVuZHMgRmlsZSBpbXBsZW1lbnRzIFZpc3VhbEZpbGUge1xuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgcmVzb2x1dGlvbjogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzaXplOm51bWJlcixcbiAgICBuYW1lOnN0cmluZywgXG4gICAgd2lkdGg6bnVtYmVyLFxuICAgIGhlaWdodDpudW1iZXIsXG4gICAgcmVzb2x1dGlvbjpudW1iZXJcbiAgKXtcbiAgICBzdXBlcihzaXplLG5hbWUpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuICB9XG4gIHB1YmxpYyBnZXRBcmVhU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cbn0iLCJpbXBvcnQge0ZpbGV9IGZyb20gJy4vRmlsZSc7IFxuZXhwb3J0IGNsYXNzIFNvbmcgZXh0ZW5kcyBGaWxlIHtcbiAgYXJ0aXN0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciwgbmFtZTogc3RyaW5nLCBhcnRpc3Q6IHN0cmluZykge1xuICAgIHN1cGVyKHNpemUsIG5hbWUpO1xuICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1Nvbmd9IGZyb20gJy4vU29uZyc7IFxuaW1wb3J0IHtJbWFnZX0gZnJvbSAnLi9JbWFnZSc7XG5cbmNvbnN0IG15X3NvbmcgPSBuZXcgU29uZygyMywgXCJjYWxpZm9ybmljYXRpb25cIiwgXCJSZWQgaG90IGNoaWxsbyBwZXBwZXJcIik7XG4vLyBOb3QgY2FsbCBpdCwgbXlfc29uZy5nZXR0ZXJOYW1lKCkg8J+aqVxuY29uc29sZS5sb2cobXlfc29uZy5nZXR0ZXJOYW1lKTtcbm15X3Nvbmcuc2V0dGVyTmFtZSA9IFwiYW5vdGhlciBuYW1lXCJcbmNvbnNvbGUubG9nKG15X3NvbmcuZ2V0dGVyTmFtZSk7XG5cbmNvbnN0IG15X2ltYWdlID0gbmV3IEltYWdlKDEwLCBcIjAwMVwiLCAyMCwgMTAsIDMwMCk7XG5jb25zb2xlLmxvZyhteV9pbWFnZS5nZXRBcmVhU2l6ZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=