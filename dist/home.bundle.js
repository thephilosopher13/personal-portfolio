/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homepageModule = (() => {
    const div = document.createElement('div')
    const a = document.createElement('a')

    const appenderFunction = (parent, array) => {
        array.forEach(child => {
            parent.appendChild(child)
        })
    }

    const createHeader = () => {
        const header = document.createElement('header')
        const headerLinkList = document.createElement('ul')
        const headerListItemTemplate = document.createElement('li')
        const home = headerListItemTemplate.cloneNode()
        const about = headerListItemTemplate.cloneNode()
        const projects = headerListItemTemplate.cloneNode()
        const contact = headerListItemTemplate.cloneNode()
        const arrayOfItems = [home, about, projects, contact]

        header.id = 'header'

        arrayOfItems.forEach(item => {
            item.classList.add('link')
        })

        appenderFunction(headerLinkList, arrayOfItems)
        header.appendChild()

        return header

    }

    const createFooter = () => {
        const footer = document.createElement('footer')
        footer.id = 'footer'
        footer.textContent = '© 2023 Designed and coded by Enzo Coloquio'
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageModule);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBob21lcGFnZU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICBjb25zdCBhcHBlbmRlckZ1bmN0aW9uID0gKHBhcmVudCwgYXJyYXkpID0+IHtcbiAgICAgICAgYXJyYXkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgICBjb25zdCBoZWFkZXJMaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgY29uc3QgaGVhZGVyTGlzdEl0ZW1UZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29uc3QgaG9tZSA9IGhlYWRlckxpc3RJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKClcbiAgICAgICAgY29uc3QgYWJvdXQgPSBoZWFkZXJMaXN0SXRlbVRlbXBsYXRlLmNsb25lTm9kZSgpXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gaGVhZGVyTGlzdEl0ZW1UZW1wbGF0ZS5jbG9uZU5vZGUoKVxuICAgICAgICBjb25zdCBjb250YWN0ID0gaGVhZGVyTGlzdEl0ZW1UZW1wbGF0ZS5jbG9uZU5vZGUoKVxuICAgICAgICBjb25zdCBhcnJheU9mSXRlbXMgPSBbaG9tZSwgYWJvdXQsIHByb2plY3RzLCBjb250YWN0XVxuXG4gICAgICAgIGhlYWRlci5pZCA9ICdoZWFkZXInXG5cbiAgICAgICAgYXJyYXlPZkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGFwcGVuZGVyRnVuY3Rpb24oaGVhZGVyTGlua0xpc3QsIGFycmF5T2ZJdGVtcylcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKClcblxuICAgICAgICByZXR1cm4gaGVhZGVyXG5cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgICAgIGZvb3Rlci5pZCA9ICdmb290ZXInXG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICfCqSAyMDIzIERlc2lnbmVkIGFuZCBjb2RlZCBieSBFbnpvIENvbG9xdWlvJ1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlTW9kdWxlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9