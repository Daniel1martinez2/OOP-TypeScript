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
    //Constructor
    function File(size, name, length) {
        this.isPlaying = false;
        this.size = size;
        this.name = name;
        this.length = length;
    }
    //Methods
    File.prototype.play = function (playNext) {
        var _this = this;
        this.isPlaying = true;
        console.log("<<<<<<<<<<<The file ".concat(this.name, " is playing \uD83D\uDE03 ").concat(this.isPlaying));
        setTimeout(function () {
            _this.isPlaying = false;
            console.log(">>>>>>>>>The file ".concat(_this.name, " has end \uD83D\uDE2B ").concat(_this.isPlaying));
            playNext();
        }, this.length);
    };
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
    Object.defineProperty(File.prototype, "getterIsPlaying", {
        get: function () {
            return this.isPlaying;
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
    function Image(size, name, length, width, height, resolution) {
        var _this = _super.call(this, size, name, length) || this;
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
    function Song(size, name, length, artist) {
        var _this = _super.call(this, size, name, length) || this;
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


var my_song = new _Song__WEBPACK_IMPORTED_MODULE_0__.Song(23, "californication", 2000, "Red hot chilli pepper");
var my_image = new _Image__WEBPACK_IMPORTED_MODULE_1__.Image(10, "001", 1000, 20, 10, 300);
// Not call it, my_song.getterName() 🚩
// console.log(my_song.getterName);
// my_song.setterName = "another name"
// console.log(my_song.getterName);
//Define the main array which will contain the whole data
var files = [my_song, my_image];
var currentIndex = 0;
var playNext = function () {
    currentIndex++;
    if (!files[currentIndex]) {
        console.log("End of playList");
        return;
    }
    ;
    files[currentIndex].play(playNext);
};
//Start the list
files[currentIndex].play(playNext);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTDRCO0FBQ0U7QUFHOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUMvRSxJQUFNLFFBQVEsR0FBRyxJQUFJLHlDQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV6RCx1Q0FBdUM7QUFDdkMsbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFFbkMseURBQXlEO0FBQ3pELElBQU0sS0FBSyxHQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUVyQixJQUFNLFFBQVEsR0FBRztJQUNiLFlBQVksRUFBRyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLE9BQU87S0FDVjtJQUFBLENBQUM7SUFDRixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxnQkFBZ0I7QUFDaEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLXR5cGUtYXBwLy4vc3JjL0ZpbGUudHMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvLi9zcmMvSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvLi9zcmMvU29uZy50cyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay10eXBlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay10eXBlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2stdHlwZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay10eXBlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLXR5cGUtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWxle1xuICAvL0RlZmluZSB0aGUgdHlwZXNcbiAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XG4gIHByaXZhdGUgbmFtZTpzdHJpbmc7XG4gIHByaXZhdGUgbGVuZ3RoOm51bWJlcjtcbiAgcHJpdmF0ZSBpc1BsYXlpbmc6IGJvb2xlYW47IFxuICAvL0NvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHNpemU6bnVtYmVyLCBuYW1lOnN0cmluZywgbGVuZ3RoOiBudW1iZXIpe1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgLy9NZXRob2RzXG4gIHB1YmxpYyBwbGF5KCBwbGF5TmV4dDogKCkgPT4gdm9pZCApe1xuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTsgXG4gICAgY29uc29sZS5sb2coYDw8PDw8PDw8PDw8VGhlIGZpbGUgJHt0aGlzLm5hbWV9IGlzIHBsYXlpbmcg8J+YgyAke3RoaXMuaXNQbGF5aW5nfWApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKGA+Pj4+Pj4+Pj5UaGUgZmlsZSAke3RoaXMubmFtZX0gaGFzIGVuZCDwn5irICR7dGhpcy5pc1BsYXlpbmd9YCk7XG4gICAgICBwbGF5TmV4dCgpO1xuICAgIH0sIHRoaXMubGVuZ3RoKVxuICB9XG4gIC8vR2V0dGVyc1xuICBnZXQgZ2V0dGVyU2l6ZSgpOm51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZVxuICB9XG4gIGdldCBnZXR0ZXJOYW1lKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cbiAgZ2V0IGdldHRlcklzUGxheWluZygpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzUGxheWluZztcbiAgfVxuICAvL1NldHRlcnNcbiAgc2V0IHNldHRlck5hbWUodmFsdWU6c3RyaW5nKXsgLy9ObyBuZWVkIGEgcmV0dXJuIHN0YXRlbWVudFxuICAgIHRoaXMubmFtZSA9IHZhbHVlXG4gIH1cbn0iLCJpbXBvcnQgeyBGaWxlIH0gZnJvbSAnLi9GaWxlJztcbmltcG9ydCB7IFZpc3VhbEZpbGUgfSBmcm9tICcuL2ludGVyZmFjZXMvVmlzdWFsRmlsZSc7XG5leHBvcnQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBGaWxlIGltcGxlbWVudHMgVmlzdWFsRmlsZSB7XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyByZXNvbHV0aW9uOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNpemU6bnVtYmVyLFxuICAgIG5hbWU6c3RyaW5nLCBcbiAgICBsZW5ndGg6bnVtYmVyLCBcbiAgICB3aWR0aDpudW1iZXIsXG4gICAgaGVpZ2h0Om51bWJlcixcbiAgICByZXNvbHV0aW9uOm51bWJlclxuICApe1xuICAgIHN1cGVyKHNpemUsbmFtZSxsZW5ndGgpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuICB9XG4gIHB1YmxpYyBnZXRBcmVhU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cbn0iLCJpbXBvcnQge0ZpbGV9IGZyb20gJy4vRmlsZSc7IFxuZXhwb3J0IGNsYXNzIFNvbmcgZXh0ZW5kcyBGaWxlIHtcbiAgYXJ0aXN0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciwgbmFtZTogc3RyaW5nLCBsZW5ndGg6bnVtYmVyLCBhcnRpc3Q6IHN0cmluZykge1xuICAgIHN1cGVyKHNpemUsIG5hbWUsIGxlbmd0aCk7XG4gICAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEZpbGUgfSBmcm9tICcuL0ZpbGUnO1xuaW1wb3J0IHtTb25nfSBmcm9tICcuL1NvbmcnOyBcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4vSW1hZ2UnO1xuXG5cbmNvbnN0IG15X3NvbmcgPSBuZXcgU29uZygyMywgXCJjYWxpZm9ybmljYXRpb25cIiwgMjAwMCwgXCJSZWQgaG90IGNoaWxsaSBwZXBwZXJcIik7XG5jb25zdCBteV9pbWFnZSA9IG5ldyBJbWFnZSgxMCwgXCIwMDFcIiwgMTAwMCwgMjAsIDEwLCAzMDApO1xuXG4vLyBOb3QgY2FsbCBpdCwgbXlfc29uZy5nZXR0ZXJOYW1lKCkg8J+aqVxuLy8gY29uc29sZS5sb2cobXlfc29uZy5nZXR0ZXJOYW1lKTtcbi8vIG15X3Nvbmcuc2V0dGVyTmFtZSA9IFwiYW5vdGhlciBuYW1lXCJcbi8vIGNvbnNvbGUubG9nKG15X3NvbmcuZ2V0dGVyTmFtZSk7XG5cbi8vRGVmaW5lIHRoZSBtYWluIGFycmF5IHdoaWNoIHdpbGwgY29udGFpbiB0aGUgd2hvbGUgZGF0YVxuY29uc3QgZmlsZXM6IEZpbGVbXSA9IFtteV9zb25nLCBteV9pbWFnZV07XG5sZXQgY3VycmVudEluZGV4ID0gMDtcblxuY29uc3QgcGxheU5leHQgPSAoKSA9PiB7XG4gICAgY3VycmVudEluZGV4ICsrO1xuICAgIGlmICghZmlsZXNbY3VycmVudEluZGV4XSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVuZCBvZiBwbGF5TGlzdFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgZmlsZXNbY3VycmVudEluZGV4XS5wbGF5KHBsYXlOZXh0KTtcbn1cblxuLy9TdGFydCB0aGUgbGlzdFxuZmlsZXNbY3VycmVudEluZGV4XS5wbGF5KHBsYXlOZXh0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==