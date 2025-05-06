/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/resources/scripts/Theme.js":
/*!****************************************!*\
  !*** ./src/resources/scripts/Theme.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var evx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! evx */ "./node_modules/evx/dist/evx.es.js");
/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-closest */ "./node_modules/element-closest/index.mjs");
/* harmony import */ var _lib_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Queue */ "./src/resources/scripts/lib/Queue.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var _components_MethodCall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MethodCall */ "./src/resources/scripts/components/MethodCall.js");
/* harmony import */ var _components_MegaMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MegaMenu */ "./src/resources/scripts/components/MegaMenu.js");
/* harmony import */ var _components_ClassChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ClassChange */ "./src/resources/scripts/components/ClassChange.js");
/* harmony import */ var _components_SlideToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SlideToggle */ "./src/resources/scripts/components/SlideToggle.js");
/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AddToCart */ "./src/resources/scripts/components/AddToCart.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Product */ "./src/resources/scripts/components/Product.js");
/* harmony import */ var _components_NumberSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/NumberSelector */ "./src/resources/scripts/components/NumberSelector.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Cart */ "./src/resources/scripts/components/Cart.js");
/* harmony import */ var _components_StickyElem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/StickyElem */ "./src/resources/scripts/components/StickyElem.js");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LoadMore */ "./src/resources/scripts/components/LoadMore.js");
/* harmony import */ var _components_LockScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LockScroll */ "./src/resources/scripts/components/LockScroll.js");
/* harmony import */ var _components_ObjectFit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ObjectFit */ "./src/resources/scripts/components/ObjectFit.js");
/* harmony import */ var _components_SideCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/SideCart */ "./src/resources/scripts/components/SideCart.js");
/* harmony import */ var _components_Quicklink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Quicklink */ "./src/resources/scripts/components/Quicklink.js");
/* harmony import */ var _components_AjaxSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/AjaxSearch */ "./src/resources/scripts/components/AjaxSearch.js");
/* harmony import */ var _components_SetCSSVar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/SetCSSVar */ "./src/resources/scripts/components/SetCSSVar.js");
/* harmony import */ var _components_LazyLoad__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/LazyLoad */ "./src/resources/scripts/components/LazyLoad.js");
/* harmony import */ var _components_LazyLoadTrigger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/LazyLoadTrigger */ "./src/resources/scripts/components/LazyLoadTrigger.js");
/* harmony import */ var _components_KeenSlider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/KeenSlider */ "./src/resources/scripts/components/KeenSlider.js");
/* harmony import */ var _components_CountryProvinceSelector__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/CountryProvinceSelector */ "./src/resources/scripts/components/CountryProvinceSelector.js");
/* harmony import */ var _components_SlideToggleGroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/SlideToggleGroup */ "./src/resources/scripts/components/SlideToggleGroup.js");
/* harmony import */ var _components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/AnnouncementBar */ "./src/resources/scripts/components/AnnouncementBar.js");
/* harmony import */ var _components_StickyPosition__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/StickyPosition */ "./src/resources/scripts/components/StickyPosition.js");
/* harmony import */ var _components_RecommendedProducts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/RecommendedProducts */ "./src/resources/scripts/components/RecommendedProducts.js");
/* harmony import */ var _components_HeaderGroup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/HeaderGroup */ "./src/resources/scripts/components/HeaderGroup.js");




const {
  detect
} = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");

























const components = {
  'header-group': _components_HeaderGroup__WEBPACK_IMPORTED_MODULE_28__["default"],
  'recommended-products': _components_RecommendedProducts__WEBPACK_IMPORTED_MODULE_27__["default"],
  'sticky-position': _components_StickyPosition__WEBPACK_IMPORTED_MODULE_26__["default"],
  'announcement-bar': _components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_25__["default"],
  'lazy-load': _components_LazyLoad__WEBPACK_IMPORTED_MODULE_20__["default"],
  'lazy-load-trigger': _components_LazyLoadTrigger__WEBPACK_IMPORTED_MODULE_21__["default"],
  'set-css-var': _components_SetCSSVar__WEBPACK_IMPORTED_MODULE_19__["default"],
  'quicklink': _components_Quicklink__WEBPACK_IMPORTED_MODULE_17__["default"],
  'keen-slider': _components_KeenSlider__WEBPACK_IMPORTED_MODULE_22__["default"],
  'product': _components_Product__WEBPACK_IMPORTED_MODULE_9__["default"],
  'method-call': _components_MethodCall__WEBPACK_IMPORTED_MODULE_4__["default"],
  'mega-menus': _components_MegaMenu__WEBPACK_IMPORTED_MODULE_5__["default"],
  'class-change': _components_ClassChange__WEBPACK_IMPORTED_MODULE_6__["default"],
  'slide-toggle': _components_SlideToggle__WEBPACK_IMPORTED_MODULE_7__["default"],
  'toggle-group': _components_SlideToggleGroup__WEBPACK_IMPORTED_MODULE_24__["default"],
  'add-to-cart': _components_AddToCart__WEBPACK_IMPORTED_MODULE_8__["default"],
  'number-selector': _components_NumberSelector__WEBPACK_IMPORTED_MODULE_10__["default"],
  'cart': _components_Cart__WEBPACK_IMPORTED_MODULE_11__["default"],
  'sticky': _components_StickyElem__WEBPACK_IMPORTED_MODULE_12__["default"],
  'load-more': _components_LoadMore__WEBPACK_IMPORTED_MODULE_13__["default"],
  'lock-scroll': _components_LockScroll__WEBPACK_IMPORTED_MODULE_14__["default"],
  'object-fit': _components_ObjectFit__WEBPACK_IMPORTED_MODULE_15__["default"],
  'side-cart': _components_SideCart__WEBPACK_IMPORTED_MODULE_16__["default"],
  'ajax-search': _components_AjaxSearch__WEBPACK_IMPORTED_MODULE_18__["default"],
  'country-province-selector': _components_CountryProvinceSelector__WEBPACK_IMPORTED_MODULE_23__["default"]
};
const options = {
  turbolinks: false
};
const state = {
  eventQueue: new _lib_Queue__WEBPACK_IMPORTED_MODULE_2__["default"](),
  ajaxCache: []
};
class Theme {
  constructor() {
    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state;
    let passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._options = {
      ...passedOptions,
      ...options
    };
    let themeInfoElem = document.querySelector('[data-theme-information]');
    if (themeInfoElem) {
      ctx = {
        ...ctx,
        ...JSON.parse(themeInfoElem.innerHTML)
      };
    }
    this._ctx = (0,evx__WEBPACK_IMPORTED_MODULE_0__.create)(ctx);
    this._viewportEvent();
    this._bodyScrollListen();
    this._runHooks();
    this._browserDetect();
    this._components = [];
  }
  _browserDetect() {
    const browser = detect();
    if (browser) {
      document.body.classList.add(`browser--${_lib_Helpers__WEBPACK_IMPORTED_MODULE_3__["default"].handleize(browser.name)}`);
      document.body.classList.add(`os--${_lib_Helpers__WEBPACK_IMPORTED_MODULE_3__["default"].handleize(browser.os)}`);
    }
  }
  _viewportEvent() {
    window.addEventListener('resize', () => {
      this._viewportLogic();
    }, {
      passive: true
    });
    this._viewportLogic();
  }
  _bodyScrollListen() {
    const targetNode = document.body;
    const config = {
      attributes: true,
      childList: false,
      subtree: false
    };
    const callback = function (mutationsList, observer) {
      document.documentElement.style.setProperty('--scroll-gap-right', getComputedStyle(document.body).paddingRight);
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  _viewportLogic() {
    let vh = window.innerHeight * 0.01;
    let vw = document.body.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  mountComponents() {
    let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    for (let componentKey in components) {
      if (components.hasOwnProperty(componentKey)) {
        let selector = `[data-${componentKey}]`;
        let elements = container.querySelectorAll(selector);
        for (let elem of elements) {
          this.mountComponent(componentKey, componentKey, elem);
        }
      }
    }
    window.__Theme = this;
    window.__ThemeComponents = this._components;
    this._ctx.emit('radiant--mounted');
  }
  unmountComponents() {
    let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    for (var i = this._components.length - 1; i >= 0; i--) {
      let component = this._components[i];
      if (container.contains(component.elem)) {
        let componentObj = component.component;
        if (typeof componentObj.unmount === 'function') {
          componentObj.unmount();
        }
        component = null;
        componentObj = null;
        this._components.splice(i, 1);
      }
    }
  }
  mountComponent(type, dataAttr, elem) {
    let optionStr = elem.getAttribute(`data-${dataAttr}`).trim();
    let options = {};
    if (optionStr.startsWith('{') || optionStr.startsWith('[')) {
      options = JSON.parse(optionStr);
    }
    let compInstance = new components[type](elem, this, options, this._ctx);
    this._components.push({
      type: type,
      elem: elem,
      id: compInstance._options.id,
      component: compInstance
    });
    try {
      compInstance.mount();
    } catch (e) {
      console.error(`-----ERROR IN COMPONENT----- \ntype: ${type}\nelement and stack trace below:`);
      console.error(elem);
      console.error(e);
    }
  }
  getOptions() {
    return this._options;
  }
  getComponent(id) {
    return this._components.find(component => component.id === id);
  }
  getComponentByElem(elem) {
    return this._components.find(component => component.elem === elem);
  }
  _runHooks() {
    this._ctx.on('cart-item-added', state => {
      if (window.pintrk) {
        pintrk('track', 'addtocart', {
          value: state.lastItemAdded.item.price / 100.00,
          order_quantity: state.lastItemAdded.quantity
        });
      }
      if (window.fbq) {
        fbq('track', 'AddToCart');
      }
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/AddToCart.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/AddToCart.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToCart)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/AjaxApi */ "./src/resources/scripts/lib/AjaxApi.js");


class AddToCart extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        redirect: null,
        addingText: 'Adding...',
        addedText: null,
        waitFor: 1500,
        openSideCart: true
      },
      ...this._options
    };
    this._variantIdElem = this._elem.querySelector('[name="id"]');
    this._sellingPlanIdElems = this._elem.querySelectorAll('[name="selling_plan"]');
    this._quantityElem = this._elem.querySelector('[name="quantity"]');
    this._submitElems = this._elem.nodeName === 'FORM' ? this._elem.querySelectorAll('[type="submit"]') : [this._elem];
    this._propertyElems = this._elem.querySelectorAll('[name^="properties"]');
    this._extraProductsInput = this._elem.querySelector('[data-extra-products]');
    this._globalExtraProducts = document.querySelector('[data-extra-atc-products]') ? JSON.parse(document.querySelector('[data-extra-atc-products]').innerHTML) : [];
  }
  mount() {
    this._addListeners();
  }
  _getProperties() {
    this._propertyElems = this._elem.querySelectorAll('[name^="properties"]');
    let properties = {};
    let propElems = Array.from(this._propertyElems).filter(elem => !elem.hasAttribute('disabled') && elem.value.length > 0);
    for (let elem of propElems) {
      properties[elem.getAttribute('name').match(/^properties\[(.+)\]$/)[1]] = elem.value;
    }
    if (propElems.length === 0 && this._elem.dataset.properties) {
      properties = JSON.parse(this._elem.dataset.properties);
    }
    return properties;
  }
  _addListeners() {
    let event = null;
    if (this._elem.nodeName === 'FORM') {
      event = 'submit';
    } else {
      event = 'click';
    }
    this._elem.addEventListener(event, async e => {
      e.preventDefault();
      //let originalText = this._submitElem.innerHTML
      //this._submitElem.innerHTML = this._options.addingText
      for (let elem of this._submitElems) {
        elem.classList.add('radiant--adding-to-cart');
      }
      if (this._options.addedText) {
        for (let elem of this._submitElems) {
          elem.style.minWidth = `${elem.getBoundingClientRect().width}px`;
        }
      }
      let variantId = this._variantIdElem ? this._variantIdElem.value : this._elem.dataset.variantId;
      let quantity = this._quantityElem ? Number(this._quantityElem.value) : Number(this._elem.dataset.quantity);
      let selling_plan = this._elem.dataset.sellingPlan || '';
      if (this._sellingPlanIdElems) {
        for (let elem of this._sellingPlanIdElems) {
          if (elem.checked) {
            selling_plan = elem.value;
          }
        }
      }
      let properties = this._getProperties();
      let items = [{
        id: variantId,
        quantity: quantity,
        properties: properties,
        selling_plan: selling_plan
      }];

      // Add extra products to every atc (if quantity is less)
      if (this._globalExtraProducts.length) {
        let cart = await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_1__["default"].getCart();
        let globalProductsToAdd = this._globalExtraProducts.filter(product => {
          let item = cart.items.find(item => `${item.variant_id}` === `${product.id}`);
          if (item && item.quantity >= product.quantity) {
            return false;
          }
          return true;
        }).map(product => {
          let item = cart.items.find(item => `${item.variant_id}` === `${product.id}`);
          if (item && item.quantity < product.quantity) {
            product.quantity -= item.quantity;
          }
          return product;
        });
        items = [...globalProductsToAdd, ...items];
      }
      if (this._extraProductsInput && this._extraProductsInput.value) {
        let extraProducts = JSON.parse(this._extraProductsInput.value);
        for (let prod of extraProducts) {
          items.push({
            id: prod.id,
            quantity: Number(prod.quantity || 1),
            properties: prod.properties || {},
            selling_plan: prod.selling_plan
          });
        }
      }
      if (this._options.showCompleteRoutine) {
        this._ctx.emit('show-complete-routine-popup', null, {
          handle: this._options.handle
        });
      }
      try {
        let data = await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_1__["default"].addToCart({
          items: items
        }, this._ctx.getState());
        for (let item of data.items) {
          let matching = items.find(it => `${it.id}` === `${item.variant_id}`);
          this._ctx.emit('cart-atc', null, {
            item: item,
            quantity: matching.quantity,
            properties: matching.properties
          });
        }
      } catch (e) {
        console.error("ERROR");
        console.error(e.response.data);
        alert(e.response.data.description);
      }
      this._ctx.emit('cart-item-added');
      if (this._options.openSideCart) {
        this._ctx.emit('show-side-cart');
      }
      if (!this._options.redirect) {
        for (let elem of this._submitElems) {
          elem.classList.remove('radiant--adding-to-cart');
          elem.classList.add('radiant--added-to-cart');
        }
        if (this._options.addedText) {
          for (let elem of this._submitElems) {
            elem.innerHTML = this._options.addedText;
          }
        }
        setTimeout(() => {
          //this._submitElem.innerHTML = originalText
          for (let elem of this._submitElems) {
            elem.classList.remove('radiant--added-to-cart');
          }
        }, this._options.waitFor);
      }
      if (this._options.redirect) {
        window.location = this._options.redirect;
      }
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/AjaxSearch.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/AjaxSearch.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AjaxSearch)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



class AjaxSearch extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._response = null;
    this._form = this._elem.querySelector('[data-ajax-search-form]');
    this._triggers = this._elem.querySelectorAll('[data-ajax-search-trigger]');
    this._input = this._elem.querySelector('[data-ajax-search-input]');
    this._results = this._elem.querySelector('[data-ajax-search-results]');
    this._clearTrigger = null;
    this._exitTrigger = this._elem.querySelector('[data-ajax-search-exit]');
    this._loading = false;
  }
  async mount() {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      this._submitForm();
    });
    this._input.addEventListener('input', () => {
      if (this._input.value.length === 0) {
        this._clearSearch();
      }
    });
    this._input.addEventListener('input', _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].debounce(() => {
      if (this._input.value.length !== 0) {
        this._submitForm();
      }
    }, 300));
    this._exitTrigger.addEventListener('click', e => {
      e.preventDefault();
      this._clearSearch();
    });
    if (this._input.value) {
      this._elem.classList.add('open');
      this._submitForm();
    }
    for (let trigger of this._triggers) {
      trigger.addEventListener('click', e => {
        this._elem.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this._input.value = trigger.dataset.ajaxSearchTrigger;
        this._submitForm();
      });
    }
  }
  async _submitForm() {
    if (this._loading) return false;
    let valid = this._form.reportValidity();
    if (valid) {
      this._loading = true;
      this._elem.classList.add('ajax-search--loading');
      let url = `/search?view=ajax&q=${this._input.value}&type=product`;
      if (this._input.value.split(" ").length === 1) {
        url += `&options[prefix]=last`;
      }
      let {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
      let parser = new DOMParser();
      let html = parser.parseFromString(data, 'text/html');
      let fetchedElem = html.querySelector('[data-ajax-search-results]');
      this._results.innerHTML = fetchedElem.innerHTML;
      this._clearTrigger = this._elem.querySelector('[data-ajax-search-clear]');
      this._clearTrigger.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        this._clearSearch();
      });
      this._theme.mountComponents(this._results);
      this._ctx.emit('radiant--scroll-lock-elem', null, this._elem);
      this._ctx.emit('radiant--lazy-load-update');
      this._ctx.emit('radiant--quicklink-listen-to', null, this._results);
      this._elem.classList.remove('ajax-search--loading');
      this._loading = false;
    }
  }
  _clearSearch() {
    this._results.innerHTML = '';
    this._input.value = '';
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/AnnouncementBar.js":
/*!*************************************************************!*\
  !*** ./src/resources/scripts/components/AnnouncementBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnnouncementBar)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class AnnouncementBar extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._announcementBar = this._elem.querySelector('.announcement-bar');
  }
  mount() {
    if (this._options.sticky) {
      window.addEventListener('scroll', e => {
        let sticky = this._announcementBar.offsetTop;
        if (window.pageYOffset > sticky) {
          this._announcementBar.classList.add("sticky");
        } else {
          this._announcementBar.classList.remove("sticky");
        }
      }, {
        passive: true
      });
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/Cart.js":
/*!**************************************************!*\
  !*** ./src/resources/scripts/components/Cart.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var rivets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rivets */ "./node_modules/rivets/dist/rivets.js");
/* harmony import */ var rivets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rivets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AjaxApi */ "./src/resources/scripts/lib/AjaxApi.js");




class Cart extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._setup();
    this._doEditorListeners();
  }
  _setup() {
    this._data = {
      cart: {},
      upsellLoading: true,
      samplesLoading: true,
      hasUpsell: true
    };
    this._upsellAdded = false;
    this._upsellHandles = [];
    this._upsellOptions = document.querySelector('[data-upsell-options]') ? JSON.parse(document.querySelector('[data-upsell-options]').innerHTML) : {
      enabled: false,
      limit: 5,
      handles: []
    };
    this._upsellArea = document.querySelector('[data-cart-upsell-inner]');
    this._upsellOptions.handles = this._upsellOptions.handles.map(item => {
      return {
        handle: item
      };
    });
    this._shippingThresholdOptions = document.querySelector('[data-shipping-threshold-options]') ? JSON.parse(document.querySelector('[data-shipping-threshold-options]').innerHTML) : {
      enabled: false
    };
    this._renderAreas = document.querySelectorAll('[data-cart-mount]');
    this._jquery = window.$ || null;
    this._binds = [];
  }
  _binders() {
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().binders)['style-*'] = function (el, value) {
      el.style.setProperty(this.args[0], value);
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getSrcSet = (src, size) => {
      return src ? `${_lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getSizedImageUrl(src, size)} 1x, ${_lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getSizedImageUrl(src, size + '@2x')} 2x` : '';
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getSizedImage = (src, size) => {
      return src ? _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getSizedImageUrl(src, size) : '';
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).money = value => {
      return _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].formatMoney(value, this._ctx.getState());
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).length = arr => {
      return arr ? arr.length : 0;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).eq = (val, val2) => {
      return val === val2;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).gt = (val, val2) => {
      return val > val2;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getUrl = handle => {
      return `/products/${handle}`;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getImage = (product, variant) => {
      return variant.featured_image ? variant.featured_image.src : product.featured_image;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).pluralize = (count, one, multiple) => {
      return count === 1 ? one : multiple;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).sampleAdded = item => {
      let sampleItems = this._sampleItems();
      return sampleItems.find(cItem => cItem.handle === item.handle);
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getProps = item => {
      let props = [];
      for (let key in item.properties) {
        if (key.charAt(0) === '_' || key === 'Preview') continue;
        let name = key.charAt(0).toUpperCase() + key.slice(1);
        let value = item.properties[key];
        if (value.includes('https://cdn.shopify.com')) {
          value = `<img src="${value}" />`;
        }
        props.push({
          name: name,
          value: value
        });
      }
      return props;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).hasVariants = item => {
      return item.variants && item.variants[0].title !== 'Default Title';
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).hasFreeShipping = count => {
      let threshold = this._shippingThresholdOptions.threshold * 100.00;
      return count >= threshold;
    };
    (rivets__WEBPACK_IMPORTED_MODULE_1___default().formatters).getShippingNotice = count => {
      let threshold = this._shippingThresholdOptions.threshold * 100.00;
      let under = this._shippingThresholdOptions.under;
      let reachedNotice = this._shippingThresholdOptions.reached;
      let remaining = threshold - count;
      under = under.replace('[x]', _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].formatMoney(remaining, this._ctx.getState()));
      return count >= threshold ? reachedNotice : under;
    };
  }
  async mount() {
    this._data.cart = await this.prepareData(JSON.parse(this._elem.innerHTML));
    this._prepareUpsellData();
    if (typeof window.BOLD !== 'undefined' && typeof window.BOLD.common !== 'undefined' && typeof window.BOLD.common.cartDoctor !== 'undefined') {
      // NOTE: "cart" should be the variable containing the cart JSON data
      this._data.cart = window.BOLD.common.cartDoctor.fix(this._data.cart);
    }
    this._data.cartBackup = {
      ...this._data.cart
    };
    this._ctx.on('cart-item-added', async () => {
      this._data.cart.loading = true;
      await this._refresh();
      this._ctx.emit('cart-item-added--refreshed');
    });
    this._binders();
    this._render();
    window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
    window.KlarnaOnsiteService.push({
      eventName: 'refresh-placements'
    });
    if (window.BOLD && BOLD.common && BOLD.common.eventEmitter && typeof BOLD.common.eventEmitter.emit === 'function') {
      BOLD.common.eventEmitter.emit('BOLD_COMMON_cart_loaded', this._data.cart);
    }
    if (!window.SwymCallbacks) {
      window.SwymCallbacks = [];
    }
    window.SwymCallbacks.push(() => {
      var replayAddToCartOriginalFn = _swat.replayAddToCart;
      let instance = this;
      window._swat.replayAddToCart = function () {
        //save the successCallback
        var successCallbackFn = arguments[2];
        arguments[2] = function (data) {
          let item = JSON.parse(data);
          if (successCallbackFn) {
            successCallbackFn(data);
            instance._ctx.emit('cart-item-added', {
              lastItemAdded: {
                item: item,
                quantity: item.quantity,
                properties: item.properties
              }
            });
          }
          ;
        };
        //call the orginal fn
        replayAddToCartOriginalFn.apply(this, arguments);
      };
    });
  }
  async prepareData(data) {
    this._upsellHandles = [];
    let promises = [];
    for (const [i, item] of data.items.entries()) {
      promises.push(new Promise(async (res, rej) => {
        item.index = i + 1;
        let data = await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].getCustomProduct(item.handle, this._ctx.getState());
        item.product = data.product;
        item.product.metafields = data.metafields;
        item.originalItem = {
          ...item
        };
        item.variant = item.product.variants.find(variant => variant.id === item.variant_id);
        res();
      }));
    }
    await Promise.all(promises);
    data.loading = false;
    this._upsellHandles = this._upsellOptions.handles;

    // Remove duplicates
    this._upsellHandles = this._upsellHandles.filter((item, index) => {
      let otherIndex = this._upsellHandles.map(item => item.handle).indexOf(item.handle);
      return otherIndex === index;
    });
    // Remove already in cart
    this._upsellHandles = this._upsellHandles.filter(obj => {
      if (obj.variantId) {
        return !data.items.some(item => obj.variant_id === item.variant_id);
      } else {
        return !data.items.some(item => obj.handle === item.handle);
      }
    });
    if (this._upsellOptions.limit > 0) {
      this._upsellHandles = this._upsellHandles.slice(0, this._upsellOptions.limit);
    }
    this._data.hasUpsell = this._upsellHandles.length > 0 && this._upsellOptions.enabled && this._upsellOptions.limit > 0;
    console.log("CART ITEMS");
    console.dir(this._data);
    return data;
  }
  async _prepareUpsellData() {
    if (!this._upsellOptions.enabled) {
      return false;
    }
    this._data.upsellLoading = true;
    let results = [];
    let promises = [];
    for (let handleObj of this._upsellHandles) {
      promises.push(new Promise(async (res, rej) => {
        try {
          let handle = handleObj.handle;
          let data = await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].getCustomProduct(handle, this._ctx.getState());
          let item = data.product;
          item.metafields = data.metafields;
          item.options = data.options;
          if (handleObj.variantId) {
            item.currentVariant = item.variants.find(variant => Number(variant.id) == Number(handleObj.variantId));
          }
          if (handleObj.preferredOptions) {
            item.currentVariant = item.variants.find(variant => {
              return variant.options.every(option => handleObj.preferredOptions.includes(option));
            });
            if (!item.currentVariant) {
              item.currentVariant = item.variants.find(variant => {
                return variant.options.some(option => handleObj.preferredOptions.includes(option));
              });
            }
          }
          if (!item.currentVariant || !item.currentVariant.available) {
            item.currentVariant = item.variants.find(variant => variant.available);
          }
          item.quantity = 1;
          if (item.currentVariant && item.options) {
            for (let option of item.options) {
              option.selectedValue = item.currentVariant.options[option.position - 1];
            }
          }
          if (item.available) {
            results.push(item);
          }
          res();
        } catch (e) {
          console.log(e);
          res();
        }
      }));
    }
    await Promise.all(promises);
    results = results.sort((a, b) => {
      let indexA = this._upsellHandles.map(item => item.handle).indexOf(a.handle);
      let indexB = this._upsellHandles.map(item => item.handle).indexOf(b.handle);
      return indexA - indexB;
    });
    this._data.hasUpsell = results.length > 0;
    this._data.upsellProducts = results;
    this._data.upsellLoading = false;
    this._upsellArea.style.minHeight = `${this._upsellArea.scrollHeight}px`;
    console.log("UPSELL ITEMS:");
    console.dir(this._data.upsellProducts);
  }
  _render() {
    for (let cartSection of this._renderAreas) {
      this._binds.push(rivets__WEBPACK_IMPORTED_MODULE_1___default().bind(cartSection, this._getModel(cartSection)));
    }
    this._data.cart.loading = false;
    for (let cartSection of this._renderAreas) {
      cartSection.classList.add('rendered');
    }
  }
  unmount() {
    console.log('unmount cart');
    for (let bind of this._binds) {
      bind.unbind();
    }
  }
  _getModel(cartSection) {
    return {
      data: this._data,
      controller: {
        removeItem: async (e, model) => {
          e.preventDefault();
          model.data.cart.loading = true;
          let item = model.item;
          await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].removeCartItem(item.index, this._ctx.getState());
          this._refresh();
        },
        updateQuantity: async (e, model) => {
          e.preventDefault();
          if (model.item.quantity.length && isNaN(parseInt(model.item.quantity))) {
            model.item.quantity = 1;
            return false;
          }
          if (model.item.quantity.length) {
            model.data.cart.loading = true;
            var newQuantity = model.item.quantity;
            try {
              await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].updateCartItem(model.item.index, newQuantity, {}, this._ctx.getState());
              this._refresh();
            } catch (err) {
              model.data.cart.loading = false;
              this._data.errorMessage = `All ${model.item.title} are currently in your cart`;
            }
          }
        },
        incrementQuantity: async (e, model) => {
          e.preventDefault();
          model.data.cart.loading = true;
          var newQuantity = model.item.quantity + 1;
          try {
            await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].updateCartItem(model.item.index, newQuantity, {}, this._ctx.getState());
            this._refresh();
          } catch (err) {
            model.data.cart.loading = false;
            this._data.errorMessage = `All ${model.item.title} are currently in your cart`;
          }
        },
        decrementQuantity: async (e, model) => {
          e.preventDefault();
          model.data.cart.loading = true;
          var newQuantity = model.item.quantity - 1;
          try {
            await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].updateCartItem(model.item.index, newQuantity, {}, this._ctx.getState());
            this._refresh();
          } catch (err) {
            model.data.cart.loading = false;
            this._data.errorMessage = `All ${model.item.title} are currently in your cart`;
          }
        },
        clearError: (e, model) => {
          e.preventDefault();
          model.data.errorMessage = null;
        },
        addUpsellItem: async (e, model) => {
          e.preventDefault();
          let product = model.item;
          let variant = product.currentVariant;
          model.data.cart.loading = true;
          this._upsellAdded = true;
          let properties = {};
          if (product.metafields['is_preorder'] === 1) {
            properties["_is-preorder"] = 'Yes';
          }
          let obj = {
            id: `${variant.id}`,
            quantity: product.quantity,
            properties: properties
          };
          if (variant.requires_selling_plan) {
            obj.selling_plan = variant.selling_plan_allocations[0].selling_plan_id;
          }
          let data = await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].addToCart(obj, this._ctx.getState());
          this._ctx.emit('cart-item-added', {
            lastItemAdded: {
              item: data,
              quantity: product.quantity,
              properties: properties
            }
          });
        },
        incrementUpsellQuantity: (e, model) => {
          e.preventDefault();
          model.item.quantity++;
        },
        decrementUpsellQuantity: (e, model) => {
          e.preventDefault();
          if (model.item.quantity > 1) {
            model.item.quantity--;
          }
        }
      }
    };
  }
  async _refresh() {
    this._data.cart = await this.prepareData(await _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_3__["default"].getCart(this._ctx.getState()));
    this._prepareUpsellData();
    if (typeof window.BOLD !== 'undefined' && typeof window.BOLD.common !== 'undefined' && typeof window.BOLD.common.cartDoctor !== 'undefined') {
      // NOTE: "cart" should be the variable containing the cart JSON data
      this._data.cart = window.BOLD.common.cartDoctor.fix(this._data.cart);
    }
    this._data.cartBackup = {
      ...this._data.cart
    };
    if (window.Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }
    window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
    window.KlarnaOnsiteService.push({
      eventName: 'refresh-placements'
    });
    if (window.BOLD && BOLD.common && BOLD.common.eventEmitter && typeof BOLD.common.eventEmitter.emit === 'function') {
      BOLD.common.eventEmitter.emit('BOLD_COMMON_cart_loaded', this._data.cart);
    }
  }
  _getVariant(selectedOptions, variants) {
    let theVariant = false;
    for (let variant of variants) {
      let foundVariant = variant;
      for (let [index, option] of selectedOptions.entries()) {
        if (variant[`option${index + 1}`] !== option) {
          foundVariant = false;
        }
      }
      if (foundVariant) {
        theVariant = foundVariant;
        break;
      }
    }
    return theVariant;
  }
  _getUpdatesMap() {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._data.cart.items;
    return items.map(item => item.quantity);
  }
  _doEditorListeners() {
    document.addEventListener('shopify:section:unload', e => {
      this.unmount();
    });
    document.addEventListener('shopify:section:load', e => {
      this._setup();
      this.mount();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./src/resources/scripts/components/ClassChange.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/ClassChange.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassChange)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class ClassChange extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._elem.addEventListener(option.on, e => {
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    if (option.target.includes('closest:')) {
      let parentSelector = option.target.split('closest:')[1].trim();
      if (option.subTarget) {
        this._elem.closest(parentSelector).querySelector(option.subTarget).classList[option.method](option.class);
      } else {
        this._elem.closest(parentSelector).classList[option.method](option.class);
      }
    } else if (option.target === 'this') {
      this._elem.classList[option.method](option.class);
    } else {
      let targets = document.querySelectorAll(option.target);
      for (let target of targets) {
        target.classList[option.method](option.class);
      }
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/CountryProvinceSelector.js":
/*!*********************************************************************!*\
  !*** ./src/resources/scripts/components/CountryProvinceSelector.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountryProvinceSelector)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class CountryProvinceSelector extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._countryEl = this._elem.querySelector('[data-country-selector]');
    this._provinceEl = this._elem.querySelector('[data-province-selector]');
    this._provinceContainer = this._elem.querySelector('[data-province-container]');
  }
  mount() {
    this._countryEl.addEventListener('change', e => {
      this._countryHandler();
    });
    this._initCountry();
    this._initProvince();
  }
  _initCountry() {
    var t = this._countryEl.getAttribute('data-default');
    this._setSelectorByValue(this._countryEl, t);
    this._countryHandler();
  }
  _initProvince() {
    var t = this._provinceEl.getAttribute('data-default');
    t && this._provinceEl.options.length > 0 && this._setSelectorByValue(this._provinceEl, t);
  }
  _countryHandler() {
    var t = this._countryEl.options[this._countryEl.selectedIndex];
    var e = t.getAttribute('data-provinces');
    var n = JSON.parse(e);
    this._clearOptions(this._provinceEl);
    if (n && n.length === 0) {
      this._provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < n.length; i++) {
        t = document.createElement('option');
        t.value = n[i][0];
        t.innerHTML = n[i][1];
        this._provinceEl.appendChild(t);
      }
      this._provinceContainer.style.display = '';
    }
  }
  _setSelectorByValue(t, e) {
    for (var n = 0, i = t.options.length; n < i; n++) {
      var o = t.options[n];
      if (e === o.value || e === o.innerHTML) {
        t.selectedIndex = n;
        return n;
      }
    }
  }
  _clearOptions(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/HeaderGroup.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/HeaderGroup.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderGroup)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class HeaderGroup extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    this._doScrollCalculations();
    document.body.style.paddingTop = this._elem.getBoundingClientRect().height + 'px';
    window.addEventListener('resize', e => {
      document.body.style.paddingTop = this._elem.getBoundingClientRect().height + 'px';
    }, {
      passive: true
    });
    window.addEventListener('scroll', e => {
      this._doScrollCalculations();
    }, {
      passive: true
    });
  }
  _doScrollCalculations() {
    if (window.scrollY === 0) {
      this._elem.classList.remove('is-scrolled');
      document.body.classList.remove('header-is-scrolled');
    } else {
      this._elem.classList.add('is-scrolled');
      document.body.classList.add('header-is-scrolled');
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/KeenSlider.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/KeenSlider.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeenSliderComp)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var evx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evx */ "./node_modules/evx/dist/evx.es.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.es.js");




class KeenSliderComp extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    options = {
      ...{
        dragSpeed: 1,
        autoplaySpeed: 5000,
        duration: 500,
        arrowSvg: `
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        `
      },
      ...options
    };
    let optionsCopy = {
      ...options
    };
    super(elem, theme, options, ctx);
    this._slider = null;
    this._autoplayInterval = null;
    this.shouldAutoplay = false;
    this._localCtx = (0,evx__WEBPACK_IMPORTED_MODULE_1__.create)();
    this._isMounted = false;
    this._addedListener = false;
    super.reinitOnResize(optionsCopy);
  }
  mount() {
    if (this._options.mount === false) {
      return false;
    }
    if (this._options.enableWhen && !this._addedListener) {
      window.addEventListener('resize', e => {
        if (matchMedia(`only screen and ${this._options.enableWhen}`).matches && !this._isMounted) {
          this.mount();
        } else if (!matchMedia(`only screen and ${this._options.enableWhen}`).matches && this._isMounted) {
          this.unmount();
          this._isMounted = false;
        }
      }, {
        passive: true
      });
      this._addedListener = true;
    }
    if (this._options.enableWhen && !matchMedia(`only screen and ${this._options.enableWhen}`).matches) {
      return false;
    }
    this._convertOldOptions();
    this._slidesPerView = typeof this._options.slides === 'object' ? this._options.slides.perView || this._options.slides.number : this._options.slides;
    this._elem.classList.add('keen-slider');
    for (let elem of this._elem.children) {
      if (elem.hasAttribute('data-keen-dots') || elem.hasAttribute('data-keen-nav')) continue;
      elem.classList.add('keen-slider__slide');
      if (this._options.fade) {
        elem.classList.add('fader-slide');
      }
    }
    this._slides = this._elem.querySelectorAll('.keen-slider__slide');

    // AS NAV FOR
    if (this._options.asNavFor) {
      this._ctx.on('radiant--mounted', e => {
        this._parentSlider = this._theme.getComponent(this._options.asNavFor);
        this._parentSlider = this._parentSlider.component;
        this._parentSlider._localCtx.on('slide-change', (state, data) => {
          const next = data.slider.track.details.rel || 0;
          this._slider.moveToIdx(Math.min(this._slider.track.details.maxIdx, next));
        });
      });
    }
    if (this._options.arrows) this._createArrows();
    if (this._slides.length === this._slidesPerView) {
      this._options.loop = false;
      this._options.controls = false;
    }
    if (!this._prevArrow) this._prevArrow = this._elem.querySelector('[data-keen-prev]');
    if (!this._nextArrow) this._nextArrow = this._elem.querySelector('[data-keen-next]');
    this._options.animationStarted = slider => {
      this._localCtx.emit('animation-started', null, {
        slider: slider
      });
    };
    this._options.slideChanged = slider => {
      this.updateClasses(slider);
      this.updateFadeHeight(slider);
      this._localCtx.emit('slide-change', null, {
        slider: slider
      });
      this.adaptiveHeight(slider);
      if (this._isMounted) this.scrollRevealFix(slider);
      this._pauseVideos();
      if (this._options.playVideos) this._playVideos(slider);
      if (this._options.setSlideCount) this._setSlideCount(slider);
      this._doSlideCSSVars(slider);
      if (this._options.asNavFor && this._parentSlider) {
        let parentSlider = this._parentSlider._slider;
        console.log(this._slider);
        const next = this._slider.track.details.rel || 0;
        parentSlider.moveToIdx(Math.min(parentSlider.track.details.maxIdx, next));
      }
    };
    this._options.created = slider => {
      this._elem.classList.add('keen-slider--ready');
      if (this._options.dots && this._slides.length > 1) this._createDots(slider);
      this._dotsContainer = this._options.dotsContainer ? document.querySelector(this._options.dotsContainer) || this._elem : this._elem;
      this._dots = this._dotsContainer.querySelectorAll('[data-dot]');
      for (let dot of this._dots) {
        dot.addEventListener('click', e => {
          e.preventDefault();
          this.goToSlide(Number(dot.dataset.dot), false);
          if (this._parentSlider) {
            this._parentSlider.goToSlide(Number(dot.dataset.dot));
          }
        });
      }
      this.updateClasses(slider);
      this.updateFadeHeight(slider);
      this.adaptiveHeight(slider);
      this._doSlideCSSVars(slider);
      if (this._options.autoplay) this._setupAutoplay(slider);
      if (this._options.autoplayWhenVisibleOnly) this._doAutoplayOnScroll();
      if (this._options.alignArrowsTo) this.alignArrows();
      if (this._options.arrowKeyNavigation) this._addArrowKeyEvents();
      if (this._options.playVideos) this._playVideos(slider);
      if (this._options.setSlideCount) this._setSlideCount(slider);
      if (this._options.focusOnSelect) this.focusOnSelect(slider);
      window.addEventListener('resize', e => {
        this.updateFadeHeight();
        this.adaptiveHeight();
        if (this._options.alignArrowsTo) {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
            this.alignArrows();
          });
        }
      }, {
        passive: true
      });
    };
    this._options.dragStarted = () => {
      this.shouldAutoplay = false;
    };
    this._options.dragEnded = () => {
      this.shouldAutoplay = true;
    };
    if (this._options.fade) {
      this._options.detailsChanged = slider => this.fader(slider);
      this._options.renderMode = 'custom';
    }
    this._slider = new keen_slider__WEBPACK_IMPORTED_MODULE_3__["default"](this._elem, this._options);
    if (this._prevArrow) this._prevArrow.addEventListener('click', e => this.goToPrev(e));
    if (this._nextArrow) this._nextArrow.addEventListener('click', e => this.goToNext(e));
    this._isMounted = true;
    if (this._options.triggerOnMount) {
      this._ctx.emit(this._options.triggerOnMount);
    }
  }
  focusOnSelect() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    for (let [index, slide] of this._slides.entries()) {
      slide.addEventListener('click', e => {
        this.goToSlide(index);
      });
    }
  }
  _setSlideCount() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slideCountParentElem = document.querySelector(this._options.setSlideCount);
    let totalElem = slideCountParentElem.querySelector('[data-slide-total]');
    let currentElem = slideCountParentElem.querySelector('[data-slide-current]');
    totalElem.innerHTML = slider.details().size;
    currentElem.innerHTML = slider.details().relativeSlide + 1;
    if (this.isAtEnd(slider) && slider.details().relativeSlide == 0) {
      slideCountParentElem.classList.add('hide');
    }
  }
  unmount() {
    if (this._slider) {
      this._slider.destroy();
    }
    if (this._navContainer && this._navContainer.parentNode) {
      this._navContainer.parentNode.removeChild(this._navContainer);
    }
    let dots = this._elem.querySelector('[data-keen-dots]');
    if (dots) {
      dots.parentNode.removeChild(dots);
    }
    this._elem.classList.remove('keen-slider');
    for (let elem of this._elem.children) {
      elem.classList.remove('keen-slider__slide');
      elem.classList.remove('fader-slide');
      elem.removeAttribute('style');
    }
    this._elem.style.height = '';
  }
  _setupAutoplay(slider) {
    if (!this._options.autoplay) {
      clearTimeout(this.autoplayTimeout);
      return false;
    }
    this.shouldAutoplay = true;
    this.shouldAutoplayVisible = true;
    if (this._options.pauseAutoplayOnHover) {
      this._elem.addEventListener('mouseover', e => {
        this.shouldAutoplay = false;
        clearTimeout(this.autoplayTimeout);
      });
      this._elem.addEventListener('mouseout', e => {
        this.shouldAutoplay = true;
        this.autoplay();
      });
    }
    this.autoplay();
    slider.on('dragStarted', () => {
      if (this.autoplayTimeout) clearTimeout(this.autoplayTimeout);
    });
    slider.on('animationEnded', () => {
      this.autoplay();
    });
    slider.on('updated', () => {
      this.autoplay();
    });
  }
  autoplay() {
    clearTimeout(this.autoplayTimeout);
    this.autoplayTimeout = setTimeout(() => {
      if (!this.shouldAutoplay || !this.shouldAutoplayVisible) return;
      if (this._slider) {
        if (this.isAtEnd() && !this._options.loop) {
          this.goToSlide(0);
        } else {
          this._slider.next();
        }
      }
    }, this._options.autoplaySpeed);
  }
  _doAutoplayOnScroll() {
    if (!this._options.autoplay) return false;
    let visibleCheck = () => {
      if (_lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].isInViewport(this._elem) && this.shouldAutoplayVisible == false) {
        this.shouldAutoplayVisible = true;
        this.autoplay();
      } else {
        this.shouldAutoplayVisible = false;
        if (this.autoplayTimeout) clearTimeout(this.autoplayTimeout);
      }
    };
    window.addEventListener('scroll', e => {
      visibleCheck();
    }, {
      passive: true
    });
    visibleCheck();
  }
  _doSlideCSSVars() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slide = this.getActiveSlideElem(slider);
    if (slide && slide.dataset.slideCssVars) {
      let varArr = JSON.parse(slide.dataset.slideCssVars);
      for (let cssVar of varArr) {
        this._elem.style.setProperty(cssVar.name, cssVar.value);
      }
    }
  }
  _addArrowKeyEvents() {
    document.addEventListener('keydown', e => {
      let ev = e || window.event;
      if (ev.keyCode === 37) {
        // left arrow
        this._slider.prev();
      } else if (ev.keyCode === 39) {
        // right arrow
        this._slider.next();
      }
    });
  }
  _createArrows() {
    var e = document.createElement('ul');
    e.classList.add('keen-nav');
    e.setAttribute('data-keen-nav', true);
    e.innerHTML = `
        <li>
          <button data-keen-prev class="keen-arrow-prev keen-arrow" aria-label="Previous Slide">
            <span class="keen-arrow-inner">
              ${this._options.arrowSvg || ''}
            </span>
          </button>
        </li>
        <li>
          <button data-keen-next class="keen-arrow-next keen-arrow" aria-label="Next Slide">
            <span class="keen-arrow-inner">
              ${this._options.arrowSvg || ''}
            </span>
          </button>
        </li>
    `;
    this._navContainer = e;
    this._prevArrow = this._navContainer.querySelector('[data-keen-prev]');
    this._nextArrow = this._navContainer.querySelector('[data-keen-next]');
    if (this._options.appendArrows) {
      let toAppend = document.querySelector(this._options.appendArrows);
      if (toAppend) toAppend.appendChild(e);
    } else {
      this._elem.appendChild(e);
    }
  }
  _createDots(slider) {
    var e = document.createElement('ul');
    e.classList.add('keen-dots');
    e.setAttribute('data-keen-dots', true);
    let dotsToMake = slider.track.details.slidesLength;
    for (let i = 0; i < dotsToMake; i++) {
      e.innerHTML += `
        <li>
          <button data-dot='${i}'></button>
        </li>
      `;
    }
    this._elem.classList.add('keen--dotted');
    this._elem.appendChild(e);
  }
  _playVideos() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    this._pauseVideos();
    _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
      let active = this.getActiveSlideElem();
      let activeVideo = active.querySelector('video');
      if (activeVideo) {
        if (activeVideo.hasAttribute('[data-lazy]') && !activeVideo.classList.contains('loaded')) {
          activeVideo.addEventListener('ffc--loaded', e => {
            console.log('loaded Event');
            activeVideo.play();
          });
        } else {
          activeVideo.play();
        }
      }
    });
  }
  _pauseVideos() {
    let videos = this._elem.querySelectorAll('video');
    for (let video of videos) {
      video.pause();
    }
  }
  fader() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    for (let [index, slide] of slider.slides.entries()) {
      slide.style.opacity = slider.track.details.slides[index].portion;
    }
  }
  goToSlide(index) {
    let dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!this._slider) return;
    let duration = dontAnimate ? 0 : this._options.duration;
    let nearest = false;
    if (this._options.loop && this._slider.track.details.slides.length > 2) {
      nearest = true;
    }
    this._slider.moveToIdx(index, nearest, duration);
  }
  goToPrev(e) {
    e.preventDefault();
    this._slider.prev();
  }
  goToNext(e) {
    e.preventDefault();
    this._slider.next();
  }
  scrollRevealFix() {
    for (let slide of this._slides) {
      if (slide.hasAttribute('data-sr-id') || slide.hasAttribute('data-reveal')) {
        slide.style.removeProperty('opacity');
        slide.style.removeProperty('transition');
        slide.style.removeProperty('visibility');
        slide.removeAttribute('data-sr-id');
        slide.removeAttribute('data-reveal');
      }
    }
  }
  getActiveSlideElem() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slideIndex = slider.track.details.rel;
    for (let [index, slide] of this._slides.entries()) {
      if (index === slideIndex) {
        return slide;
      }
    }
    return false;
  }
  adaptiveHeight() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    if (!this._options.adaptiveHeight || !slider) return false;
    this._elem.classList.add('keen--adaptive-height');
    _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
      let slide = slider.track.details.rel;
      let height = 0;
      height += parseFloat(getComputedStyle(this._elem).paddingBottom);
      height += parseFloat(getComputedStyle(this._elem).paddingTop);
      let activeSlide = this.getActiveSlideElem(slider);
      if (!activeSlide) return;
      height += activeSlide.clientHeight;
      this._elem.style.height = `${height}px`;
    });
  }
  updateFadeHeight() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    if (!this._options.fade || !slider) return false;
    let slide = slider.track.details.rel;
    let height = 0;
    height += parseFloat(getComputedStyle(this._elem).paddingBottom);
    height += parseFloat(getComputedStyle(this._elem).paddingTop);
    let activeSlide = this.getActiveSlideElem(slider);
    if (!activeSlide) return;
    height += activeSlide.getBoundingClientRect().height;
    this._elem.style.height = `${height}px`;
    if (!this._elem.classList.contains('fade-slider')) {
      this._elem.classList.add('fade-slider');
    }
  }
  alignArrows() {
    if (!this._options.alignArrowsTo || !this._navContainer) return false;
    let elem = this._elem.querySelector(this._options.alignArrowsTo);
    this._navContainer.style.top = `${elem.clientHeight / 2}px`;
  }
  updateClasses(slider) {
    if (!slider) return false;
    let slide = slider.track.details.rel;
    let maxSlides = slider.track.details.slides.length;
    let perView = this._slidesPerView;
    let endSlide = slide + perView;
    let canSlide = perView !== maxSlides;
    if (this._prevArrow && !this._options.loop) {
      if (slide === 0 || !canSlide) {
        this._prevArrow.setAttribute('disabled', 'disabled');
      } else {
        this._prevArrow.removeAttribute('disabled');
      }
    }
    if (this._nextArrow && !this._options.loop) {
      if (this.isAtEnd(slider) || !canSlide) {
        this._nextArrow.setAttribute('disabled', 'disabled');
      } else {
        this._nextArrow.removeAttribute('disabled');
      }
    }
    if (this._dots) {
      let dotIndex = slide;
      for (let dot of this._dots) {
        dot.classList.remove('active');
        if (Number(dot.dataset.dot) === dotIndex) {
          dot.classList.add('active');
        }
      }
    }
    let activeSlide = this.getActiveSlideElem(slider);
    for (let slide of this._slides) {
      slide.classList.remove('active');
    }
    if (activeSlide) {
      activeSlide.classList.add('active');
    }
    let idx = slider.track.details.maxIdx;
    let totalSlides = idx === Infinity ? maxSlides : idx + 1;
    this._elem.style.setProperty('--current-slide', slide + 1);
    this._elem.style.setProperty('--total-slides', totalSlides);
    if (this._options.progressSelector) {
      let progressElem = document.querySelector(this._options.progressSelector);
      progressElem.style.setProperty('--current-slide', slide + 1);
      progressElem.style.setProperty('--total-slides', totalSlides);
      if (totalSlides === 1) {
        progressElem.classList.add('hide');
      }
    }
  }
  isAtEnd() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slide = slider.track.details.rel;
    let idx = slider.track.details.maxIdx;
    let maxSlides = slider.track.details.slides.length;
    let totalSlides = idx === Infinity ? maxSlides : idx + 1;
    return slide + 1 >= totalSlides;
  }
  refresh() {
    return this._slider.refresh();
  }
  resize() {
    return this._slider.resize();
  }
  _convertOldOptions() {
    if (this._options.slidesPerView) {
      this._options.slides = this._options.slides || {};
      this._options.slides.perView = this._options.slidesPerView;
      delete this._options.slidesPerView;
    }
    if (this._options.spacing) {
      this._options.slides.spacing = this._options.spacing;
    }
  }
  update() {
    this.unmount();
    setTimeout(() => {
      this.mount();
    }, 100);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LazyLoad.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/LazyLoad.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyLoadComp)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);


class LazyLoadComp extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        elements_selector: '[data-lazy]',
        callback_loaded: e => {
          if (e.parentNode.nodeName === 'PICTURE') {
            e.parentNode.classList.add('loaded');
          }
          if (e.nodeName === 'VIDEO') {
            this._ctx.emit('radiant--video-loaded', null, e);
          }
        },
        callback_error: e => {
          if (e.parentNode.nodeName === 'PICTURE') {
            e.parentNode.classList.add('error');
          }
        },
        threshold: 500
      },
      ...this._options
    };
    this._lazyLoad = null;
  }
  mount() {
    this._lazyLoad = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default())(this._options);
    this._ctx.on('radiant--lazy-load-update', e => {
      this._lazyLoad.update();
    });
    this._ctx.on('radiant--lazy-load-elem', (state, elem) => {
      vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default().load(elem, this._options);
    });
    document.addEventListener('radiant--lazy-load-update', e => {
      this._lazyLoad.update();
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LazyLoadTrigger.js":
/*!*************************************************************!*\
  !*** ./src/resources/scripts/components/LazyLoadTrigger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyLoadTrigger)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class LazyLoadTrigger extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._eventListener = e => {
        this._eventLogic(option, e);
      };
      this._elem.addEventListener(option.on, this._eventListener, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _lazyLoadElem(option, elem) {
    this._ctx.emit('radiant--lazy-load-elem', null, elem);
    if (this._eventListener) {
      this._elem.removeEventListener(option.on, this._eventListener);
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    let elem = null;
    if (option.target.includes('closest:')) {
      let parentSelector = option.target.split('closest:')[1].trim();
      if (option.subTarget) {
        elem = this._elem.closest(parentSelector).querySelector(option.subTarget);
      } else {
        elem = this._elem.closest(parentSelector);
      }
      this._lazyLoadElem(option, elem);
    } else if (option.target === 'this') {
      elem = this._elem;
      if (option.subTarget) {
        elem = this._elem.querySelector(option.subTarget);
      }
      this._lazyLoadElem(option, elem);
    } else {
      let targets = document.querySelectorAll(option.target);
      for (let target of targets) {
        this._lazyLoadElem(option, target);
      }
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LoadMore.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/LoadMore.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadMore)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


class LoadMore extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._loadMoreContainer = this._elem.querySelector('[data-load-more-container]');
    this._loadMoreTriggerContainer = this._elem.querySelector('[data-load-more-trigger-container]');
    this._loadMoreTrigger = this._loadMoreTriggerContainer ? this._loadMoreTriggerContainer.querySelector('[data-load-more-trigger]') : null;
    this._loadPreviousTriggerContainer = this._elem.querySelector('[data-load-previous-trigger-container]');
    this._loadPreviousTrigger = this._loadPreviousTriggerContainer ? this._loadPreviousTriggerContainer.querySelector('[data-load-previous-trigger]') : null;
    this._loading = false;
    this._originalText = this._loadMoreTrigger ? this._loadMoreTrigger.innerHTML : '';
    this._pageNumber = this._options.basePage;
    this._currentPage = this._options.basePage;
    this._baseURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }
  async mount() {
    if (this._loadMoreTrigger) {
      this._loadMoreTrigger.addEventListener('click', e => {
        e.preventDefault();
        this._load(this._loadMoreTrigger, this._loadMoreTriggerContainer, 'next');
      });
    }
    if (this._loadPreviousTrigger) {
      this._loadPreviousTrigger.addEventListener('click', e => {
        e.preventDefault();
        this._load(this._loadPreviousTrigger, this._loadPreviousTriggerContainer, 'previous');
      });
    }
    if (this._options.historyState) {
      requestAnimationFrame(this._trackScroll.bind(this));
    }
    if (this._options.infiniteScroll) {
      this._setupInfiniteScroll();
    }
  }
  async _load(trigger, container, type) {
    if (this._loading) return false;
    this._loading = true;
    container.classList.add('radiant--loading');
    trigger.innerHTML = this._options.loadingText;
    let {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(trigger.getAttribute('href'));
    if (type == 'next') {
      this._pageNumber++;
    } else {
      this._pageNumber--;
    }
    let parser = new DOMParser();
    let html = parser.parseFromString(data, 'text/html');
    let items = html.querySelectorAll('[data-load-more-container] > *');
    let fragment = document.createDocumentFragment();
    for (let item of items) {
      fragment.appendChild(item);
      item.setAttribute('data-page-number', this._pageNumber);
    }
    this._theme.mountComponents(fragment);
    let newLoadMoreTrigger = null;
    if (type === 'next') {
      this._loadMoreContainer.appendChild(fragment);
      newLoadMoreTrigger = html.querySelector('[data-load-more-trigger]');
    } else {
      this._loadMoreContainer.prepend(fragment);
      newLoadMoreTrigger = html.querySelector('[data-load-previous-trigger]');
    }
    if (newLoadMoreTrigger) {
      trigger.setAttribute('href', newLoadMoreTrigger.getAttribute('href'));
    } else {
      container.parentNode.removeChild(container);
    }
    this._loading = false;
    container.classList.remove('radiant--loading');
    trigger.innerHTML = this._originalText;
    this._ctx.emit('radiant--lazy-load-update');
    this._ctx.emit('radiant--quicklink-listen-to', null, this._elem);
  }
  _setupInfiniteScroll() {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          if (this._loadMoreTriggerContainer && entry.target === this._loadMoreTriggerContainer) {
            console.log("LOAD MORE");
            this._load(this._loadMoreTrigger, this._loadMoreTriggerContainer, 'next');
          } else if (this._loadPreviousTriggerContainer && entry.target === this._loadPreviousTriggerContainer) {
            console.log("LOAD PREV");
            this._load(this._loadPreviousTrigger, this._loadPreviousTriggerContainer, 'prev');
          }
        }
      }
    }, {
      threshold: 0,
      rootMargin: "500px"
    });
    if (this._loadMoreTriggerContainer) {
      observer.observe(this._loadMoreTriggerContainer);
    }
    if (this._loadPreviousTriggerContainer) {
      observer.observe(this._loadPreviousTriggerContainer);
    }
  }
  _trackScroll() {
    let firstElemInView = null;
    for (let elem of this._loadMoreContainer.children) {
      if (elem.getBoundingClientRect().top >= 0) {
        firstElemInView = elem;
        break;
      }
    }
    if (firstElemInView) {
      let pageNumber = firstElemInView.getAttribute('data-page-number');
      if (pageNumber && Number(pageNumber) !== this._currentPage) {
        this._currentPage = Number(pageNumber);
        this._updateHistoryState();
      } else if (!pageNumber && this._currentPage !== this._options.basePage) {
        this._currentPage = this._options.basePage;
        this._updateHistoryState();
      }
    }
    requestAnimationFrame(this._trackScroll.bind(this));
  }
  _updateHistoryState() {
    let newurl = `${this._baseURL}?page=${this._currentPage}`;
    window.history.replaceState({
      path: newurl
    }, '', newurl);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LockScroll.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/LockScroll.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LockScroll)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class LockScroll extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  async mount() {
    let {
      disableBodyScroll,
      enableBodyScroll,
      clearAllBodyScrollLocks
    } = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(__webpack_require__, /*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"));
    this._disableBodyScroll = disableBodyScroll;
    this._enableBodyScroll = enableBodyScroll;
    this._clearAllBodyScrollLocks = clearAllBodyScrollLocks;
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
    this._ctx.on('radiant--scroll-lock-elem', (state, data) => {
      this._lockScroll(data);
    });
    this._ctx.on('radiant--clear-all-scroll-locks', (state, data) => {
      this._clearAllBodyScrollLocks();
      let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
      for (let elem of lockedElems) {
        elem.removeAttribute('data-is-locked');
      }
    });
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        let target = document.querySelector(option.target);
        let hasClickedOtherLockScroll = _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].hasParentWithSelector(e.target, '[data-lock-scroll]');
        if (hasClickedOtherLockScroll && !clickIsInside && !hasClickedExclude) {
          target.removeAttribute('data-is-locked');
        }
        if (!target.hasAttribute('data-is-locked')) {
          return false;
        }
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._elem.addEventListener(option.on, e => {
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    this._clearAllBodyScrollLocks();
    let target = document.querySelector(option.target);
    if (option.method === 'lockScroll') {
      this._lockScroll(target);
    } else if (option.method === 'toggleScroll') {
      if (!target.hasAttribute('data-is-locked')) {
        this._disableBodyScroll(target, {
          reserveScrollBarGap: true
        });
        target.setAttribute('data-is-locked', true);
      } else {
        this._clearAllBodyScrollLocks();
        target.removeAttribute('data-is-locked');
      }
    } else {
      let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
      for (let elem of lockedElems) {
        elem.removeAttribute('data-is-locked');
      }
    }
  }
  _lockScroll(elem) {
    this._clearAllBodyScrollLocks();
    let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
    for (let elem of lockedElems) {
      elem.removeAttribute('data-is-locked');
    }
    this._disableBodyScroll(elem, {
      reserveScrollBarGap: true
    });
    elem.setAttribute('data-is-locked', true);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/MegaMenu.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/MegaMenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class MegaMenu extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        historyState: false
      },
      ...this._options
    };
    this._navItems = this._elem.querySelectorAll('[data-nav-item]');
    this._megaMenus = this._elem.querySelectorAll('[data-mega-menu]');
    this._timeout = null;
  }
  mount() {
    for (let navItem of this._navItems) {
      navItem.addEventListener('mouseenter', e => {
        if (this._timeout) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        for (let megaMenu of this._megaMenus) {
          megaMenu.classList.remove('open');
          let navItem = megaMenu.previousElementSibling;
          megaMenu.classList.remove('open');
          navItem.classList.remove('dropdown-open');
        }
        let megaMenu = navItem.nextElementSibling;
        if (megaMenu.hasAttribute('data-mega-menu')) {
          megaMenu.classList.add('open');
          navItem.classList.add('dropdown-open');
        }
      });
      navItem.addEventListener('mouseleave', e => {
        this._timeout = setTimeout(() => {
          let megaMenu = navItem.nextElementSibling;
          if (megaMenu.hasAttribute('data-mega-menu')) {
            megaMenu.classList.remove('open');
            navItem.classList.remove('dropdown-open');
          }
        }, 500);
      });
    }
    for (let megaMenu of this._megaMenus) {
      let megaMenuInner = megaMenu.querySelector('[data-mega-menu-inner]');
      megaMenuInner.addEventListener('mouseenter', e => {
        if (this._timeout) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        let navItem = megaMenu.previousElementSibling;
        megaMenu.classList.add('open');
        navItem.classList.add('dropdown-open');
      });
      megaMenuInner.addEventListener('mouseleave', e => {
        let navItem = megaMenu.previousElementSibling;
        megaMenu.classList.remove('open');
        navItem.classList.remove('dropdown-open');
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenu);

/***/ }),

/***/ "./src/resources/scripts/components/MethodCall.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/MethodCall.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MethodCall)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class MethodCall extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    this._elem.addEventListener(option.on, async e => {
      if (option.preventDefault) {
        e.preventDefault();
      }
      if (option.onlyThisElem && e.target !== this._elem) {
        return false;
      }
      let comp = this._theme.getComponent(option.componentId).component;
      comp[option.method](...option.args);
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/NumberSelector.js":
/*!************************************************************!*\
  !*** ./src/resources/scripts/components/NumberSelector.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberSelector)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class NumberSelector extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._input = this._elem.querySelector('[data-input]');
    this._minus = this._elem.querySelector('[data-minus]');
    this._plus = this._elem.querySelector('[data-plus]');
    this._max = this._input.getAttribute('max') ? Number(this._input.getAttribute('max')) : null;
    this._min = this._input.getAttribute('min') ? Number(this._input.getAttribute('min')) : null;
  }
  mount() {
    this._input.addEventListener('input', e => {
      let currentValue = Number(this._input.value);
      if (this._min && currentValue < this._min) {
        this._input.value = this._min;
      }
      if (this._max && currentValue > this._max) {
        this._input.value = this._max;
      }
    });
    this._minus.addEventListener('click', e => {
      e.preventDefault();
      let newValue = Number(this._input.value) - 1;
      if (this._min && newValue < this._min) {
        return false;
      }
      this._input.value = newValue;
    });
    this._plus.addEventListener('click', e => {
      e.preventDefault();
      let newValue = Number(this._input.value) + 1;
      if (this._max && newValue > this._max) {
        return false;
      }
      this._input.value = newValue;
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/ObjectFit.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/ObjectFit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectFit)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class ObjectFit extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  async mount() {
    let objectFitImages = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(__webpack_require__, /*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js", 23));
    objectFitImages.default();
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/Product.js":
/*!*****************************************************!*\
  !*** ./src/resources/scripts/components/Product.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class Product extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        historyState: true
      },
      ...this._options
    };
    this._product = this._elem.querySelector('[data-product-json]') ? JSON.parse(this._elem.querySelector('[data-product-json]').innerHTML) : null;
    this._variantOptionTriggers = this._elem.querySelectorAll('[data-variant-option-trigger]');
    this._variant = null;
    this._sellingPlan = null;
    this._masterSelects = this._elem.querySelectorAll('[data-master-select]');
    this._priceWrappers = this._elem.querySelectorAll('[data-product-prices]');
    this._prices = this._elem.querySelectorAll('[data-price]');
    this._priceVaries = this._elem.querySelectorAll('[data-price-varies]');
    this._comparePrices = this._elem.querySelectorAll('[data-compare-price]');
    this._images = this._elem.querySelectorAll('[data-product-image]');
    this._addToCarts = this._elem.querySelectorAll('[data-submit]');
    this._addToCartHTML = Array.from(this._addToCarts).map(elem => {
      let textElem = elem.querySelector('[data-submit-text]') || elem;
      return textElem.innerHTML;
    });
    this._quantityInput = this._elem.querySelector('[data-quantity-input]');
    this._quantitySelects = this._elem.querySelectorAll('[data-quantity]');
    this._variantRadios = this._elem.querySelectorAll('[data-variant-id]');
    this._extraProductsInput = this._elem.querySelector('[data-extra-products]');
    this._extraProductRadios = this._elem.querySelectorAll('[data-extra-product]');
    this._sellingPlanInput = this._elem.querySelector('[data-selling-plan]');
    this._atcAreas = this._elem.querySelectorAll('[data-atc-area]');
    this._oosAreas = this._elem.querySelectorAll('[data-oos-area]');
  }
  mount() {
    if (this._product === null) {
      return false;
    }

    // this._variant = this._getVariantFromOptions()

    // for (let optionSelector of this._variantOptionTriggers) {
    //   optionSelector.addEventListener('change', e => {
    //     this._onSelectChange()
    //   })
    // }

    // for (let optionSelector of this._variantRadios) {
    //   optionSelector.addEventListener('change', e => {
    //     this._onSelectChange()
    //   })
    // }

    // for (let optionSelector of this._masterSelects) {
    //   optionSelector.addEventListener('change', e => {
    //     this._onSelectChange()
    //   })
    // }

    // for (let optionSelector of this._extraProductRadios) {
    //   optionSelector.addEventListener('change', e => {
    //     this._onExtraProductRadioChange()
    //   })
    // }

    // for (let quantitySwitch of this._quantitySelects) {
    //   quantitySwitch.addEventListener('change', e => {
    //     if (quantitySwitch.checked) {
    //       this._quantityInput.value = quantitySwitch.dataset.quantity
    //     }
    //   })
    // }

    // this._onSelectChange()
  }
  _onExtraProductRadioChange() {
    let extraProducts = [];
    for (let radio of this._extraProductRadios) {
      if (radio.checked) {
        let obj = JSON.parse(radio.dataset.extraProduct);
        extraProducts.push({
          id: obj.id,
          quantity: obj.quantity,
          selling_plan: obj.selling_plan
        });
      }
    }
    if (this._extraProductsInput) {
      this._extraProductsInput.value = JSON.stringify(extraProducts);
    }
  }
  _linkedOptions(variant) {
    for (let optionSelector of this._variantOptionTriggers) {
      optionSelector.removeAttribute('disabled');
      for (let prodVariant of this._product.variants) {
        if (prodVariant.option1 === variant.option1 && optionSelector.value === prodVariant.option2 && !prodVariant.available) {
          optionSelector.setAttribute('disabled', 'disabled');
        }
      }
    }
  }
  _onSelectChange() {
    let variant = this._getVariantFromOptions();
    this._updateAddToCartState(variant);
    if (!variant) {
      return;
    }
    this._updateMasterSelect(variant);
    this._updateProductPrices(variant);
    this._switchToVariantImage(variant);
    this._onExtraProductRadioChange();
    this._updateSellingPlan(variant);
    this._updateAtcAreas(variant);
    // this._linkedOptions(variant)
    this._variant = variant;
    if (this._options.historyState) {
      this._updateHistoryState(variant);
    }
  }
  _updateAtcAreas(variant) {
    for (let area of this._atcAreas) {
      if (variant.available) {
        area.classList.remove('hide');
      } else {
        area.classList.add('hide');
      }
    }
    for (let area of this._oosAreas) {
      if (variant.available) {
        area.classList.add('hide');
      } else {
        area.classList.remove('hide');
      }
    }
  }
  _updateSellingPlan(variant) {
    if (!this._sellingPlanInput) return false;
    this._sellingPlanInput.value = '';
    this._sellingPlan = null;
    if (variant.selling_plan_allocations.length > 0) {
      this._sellingPlan = variant.selling_plan_allocations[0].selling_plan_id;
      this._sellingPlanInput.value = this._sellingPlan;
    }
  }
  _updateHistoryState(variant) {
    if (!history.replaceState || !variant) {
      return;
    }
    let newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?variant=${variant.id}`;
    if (this._sellingPlan) {
      newurl += `&selling_plan=${this._sellingPlan}`;
    }
    window.history.replaceState({
      path: newurl
    }, '', newurl);
  }
  _updateAddToCartState(variant) {
    if (!variant && this._product.available) {
      for (let addToCart of this._addToCarts) {
        addToCart.setAttribute('disabled', 'disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._ctx.getState().locale.makeASelection;
      }
      return;
    }
    if (!variant) {
      return;
    }
    if (variant.available) {
      for (let [i, addToCart] of this._addToCarts.entries()) {
        addToCart.removeAttribute('disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._addToCartHTML[i];
      }
    } else {
      for (let addToCart of this._addToCarts) {
        addToCart.setAttribute('disabled', 'disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._ctx.getState().locale.soldOut;
      }
    }
  }
  _switchToVariantImage(variant) {
    for (let productImage of this._images) {
      if (productImage.dataset.productImage) {
        let idArray = productImage.dataset.productImage.split(',');
        if (idArray.includes(variant.id.toString())) {
          let mainSlider = this._theme.getComponent('mainProductSlider');
          if (mainSlider) {
            mainSlider.component.goToSlide(productImage.dataset.index);
          }
        }
      }
    }
  }
  _updateProductPrices(variant) {
    for (let varies of this._priceVaries) {
      varies.classList.add('hide');
    }
    for (let productPrice of this._prices) {
      if (variant.compare_at_price > variant.price) {
        productPrice.classList.add('on-sale');
      } else {
        productPrice.classList.remove('on-sale');
      }
      productPrice.innerHTML = this._formatMoney(variant.price);
    }
    for (let productComparePrice of this._comparePrices) {
      if (variant.compare_at_price > variant.price) {
        productComparePrice.classList.remove('hide');
        productComparePrice.innerHTML = this._formatMoney(variant.compare_at_price);
      } else {
        productComparePrice.classList.add('hide');
        productComparePrice.innerHTML = '';
      }
    }
  }
  _formatMoney(price) {
    return _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].formatMoney(price, this._ctx.getState());
  }
  _updateMasterSelect(variant) {
    for (let originalSelector of this._masterSelects) {
      originalSelector.value = variant.id;
    }
  }
  _getCurrentOptions() {
    let currentOptions = [];
    for (let optionSelector of this._variantOptionTriggers) {
      let type = optionSelector.getAttribute('type');
      let currentOption = {};
      let alreadyDone = false;
      for (let option of currentOptions) {
        if (option.index === optionSelector.dataset.index) {
          alreadyDone = true;
        }
      }
      if (alreadyDone) continue;
      if (type === 'radio' || type === 'checkbox') {
        if (optionSelector.checked) {
          currentOption.value = optionSelector.value;
          currentOption.index = optionSelector.dataset.index;
          currentOptions.push(currentOption);
        } else {
          currentOptions.push(false);
        }
      } else {
        currentOption.value = optionSelector.value;
        currentOption.index = optionSelector.dataset.index;
        currentOptions.push(currentOption);
      }
    }
    currentOptions = _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].compact(currentOptions);
    return currentOptions;
  }
  _getVariantFromOptions() {
    let selectedValues = this._getCurrentOptions();
    let variants = this._product.variants;
    let found = false;
    for (let radio of this._variantRadios) {
      if (radio.checked) {
        return this._product.variants.find(variant => `${variant.id}` === radio.dataset.variantId);
      }
    }
    if (selectedValues.length > 0) {
      for (let variant of variants) {
        var satisfied = true;
        for (let option of selectedValues) {
          if (satisfied) {
            satisfied = option.value === variant[option.index];
          }
        }
        if (satisfied) {
          found = variant;
        }
      }
    }
    if (!found) {
      return this._product.variants.find(variant => `${variant.id}` === `${this._masterSelects[0].value}`);
    }
    return found || null;
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/Quicklink.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/Quicklink.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quicklink)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class Quicklink extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        limit: 50,
        ignores: [url => {
          let toTest = url.replace(document.location.origin, '');
          let toIgnore = ['/account/logout', '/account/login', '/cart/clear', '/cart/add', '/cart/update', '/cart/change', '/pages/privacy-policy', '/pages/policies', '/#swym-wishlist', '/search', '/#', '/#main', '/checkout'];
          let ignoring = toIgnore.some(urlToIgnore => toTest.includes(urlToIgnore));
          return ignoring;
        }]
      },
      ...this._options
    };
  }
  async mount() {
    let quicklink = await __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(__webpack_require__, /*! quicklink */ "./node_modules/quicklink/dist/quicklink.mjs"));
    window.addEventListener('load', async e => {
      this._options.el = this._elem;
      quicklink.listen(this._options);
    });
    this._ctx.on('radiant--quicklink-listen-to', (state, elem) => {
      console.log(elem);
      this._options.el = elem;
      quicklink.listen(this._options);
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/RecommendedProducts.js":
/*!*****************************************************************!*\
  !*** ./src/resources/scripts/components/RecommendedProducts.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecommendedProducts)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


class RecommendedProducts extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._container = this._elem.querySelector('[data-recommended-products-container]');
  }
  async mount() {
    let url = `${this._options.baseUrl}?section_id=product-recommendations&product_id=${this._options.productId}&limit=${this._options.limit}&intent=${this._options.intent}`;
    let {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);
    let parser = new DOMParser();
    let html = parser.parseFromString(data, 'text/html');
    let items = html.querySelectorAll('[data-recommended-item]');
    let fragment = document.createDocumentFragment();
    if (items.length === 0) {
      this._elem.parentElement.remove();
    }
    for (let item of items) {
      fragment.appendChild(item);
    }
    this._theme.mountComponents(fragment);
    this._container.append(fragment);
    this._ctx.emit('radiant--lazy-load-update');
    this._ctx.emit('radiant--quicklink-listen-to', null, this._container);
    if (this._options.compToMount) {
      let compObj = this._theme.getComponent(this._options.compToMount);
      if (compObj) {
        compObj.component._options.mount = true;
        compObj.component.mount();
      }
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SetCSSVar.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/SetCSSVar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetCSSVar)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class SetCSSVar extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
        if (option.updateOnResize === true) {
          window.addEventListener('resize', e => {
            this._optionLogic(option);
          }, {
            passive: true
          });
        }
      }
    } else {
      this._optionLogic(this._options);
      if (this._options.updateOnResize === true) {
        window.addEventListener('resize', e => {
          this._optionLogic(this._options);
        }, {
          passive: true
        });
      }
    }
  }
  _optionLogic(option) {
    let toGet = document.querySelector(option.selector);
    let dimensions = toGet.getBoundingClientRect();
    let setOn = [document.documentElement];
    if (option.setOn) {
      setOn = document.querySelectorAll(option.setOn);
    }
    for (let toSet of setOn) {
      toSet.style.setProperty(option.var, `${Math.round(dimensions[option.get])}px`);
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SideCart.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/SideCart.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class SideCart extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
  }
  async mount() {
    this._ctx.on('show-side-cart', async () => {
      this.showSideCart();
    });
    let params = new URLSearchParams(window.location.search);
    if (params.has('show-cart')) {
      this.showSideCart();
    }
    this._doEditorListeners();
  }
  showSideCart() {
    this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
    this._elem.classList.add('shown');
    this._ctx.on('cart-item-added--refreshed', (state, data) => {
      this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
      if (this._elem.classList.contains('shown')) {
        this._ctx.emit('radiant--scroll-lock-elem', null, this._scrollArea);
      }
    });
  }
  _doEditorListeners() {
    document.addEventListener('shopify:section:select', e => {
      if (e.target.contains(this._elem)) {
        this._elem.classList.add('shown');
      }
    });
    document.addEventListener('shopify:section:deselect', e => {
      if (e.target.contains(this._elem)) {
        this._elem.classList.remove('shown');
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideCart);

/***/ }),

/***/ "./src/resources/scripts/components/SlideToggle.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/SlideToggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideToggle)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class SlideToggle extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    this._elem.addEventListener(option.on, async e => {
      if (option.preventDefault) {
        e.preventDefault();
      }
      let target = document.querySelector(option.selector);
      let method = null;
      if (option.method === 'slideDown') {
        method = '_slideDown';
      } else if (option.method === 'slideUp') {
        method = '_slideUp';
      } else {
        method = this._elem.classList.contains('open') ? '_slideUp' : '_slideDown';
      }
      if (option.useQueue) {
        this._ctx.getState().eventQueue.add(async () => {
          return await this[method](target);
        });
      } else {
        await this[method](target);
      }
    });
  }
  _slideDown(elem) {
    return new Promise((resolve, reject) => {
      elem.style.maxHeight = 'none';
      let scrollHeight = elem.scrollHeight;
      elem.style.maxHeight = '0px';
      this._elem.classList.add('open');
      elem.dataset.transitioning = true;
      let openEvent = e => {
        if (e.propertyName === 'max-height') {
          elem.dataset.transitioning = false;
          elem.style.maxHeight = 'none';
          elem.classList.add('open');
          elem.removeEventListener('transitionend', openEvent, false);
          resolve();
        }
      };
      elem.addEventListener('transitionend', openEvent, false);
      _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].nextFrame(() => {
        elem.style.maxHeight = `${scrollHeight}px`;
      });
    });
  }
  _slideUp(elem) {
    return new Promise((resolve, reject) => {
      elem.style.maxHeight = `${elem.scrollHeight}px`;
      this._elem.classList.remove('open');
      elem.dataset.transitioning = true;
      let closeEvent = e => {
        if (e.propertyName === 'max-height') {
          elem.removeEventListener('transitionend', closeEvent, false);
          elem.dataset.transitioning = false;
          resolve();
        }
      };
      elem.addEventListener('transitionend', closeEvent, false);
      _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].nextFrame(() => {
        elem.style.maxHeight = `0px`;
        elem.classList.remove('open');
      });
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SlideToggleGroup.js":
/*!**************************************************************!*\
  !*** ./src/resources/scripts/components/SlideToggleGroup.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideToggleGroup)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class SlideToggleGroup extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        closeOthers: true
      },
      ...this._options
    };
    this._toggleItems = this._elem.querySelectorAll('[data-toggle-item]');
  }
  mount() {
    if (this._options.closeOnOutsideClick && matchMedia('only screen and (min-width: 835px)').matches) {
      document.addEventListener('click', e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        if (clickIsInside) return false;
        for (let item of this._toggleItems) {
          let elemToSlide = item.querySelector('[data-toggle-elem]');
          if (item.classList.contains('open')) {
            _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, item);
          }
        }
      }, {
        passive: true
      });
    }
    for (let item of this._toggleItems) {
      let trigger = item.querySelector('[data-toggle-trigger]');
      trigger.addEventListener('click', e => {
        e.preventDefault();
        let elemToSlide = item.querySelector('[data-toggle-elem]');
        if (!elemToSlide) {
          elemToSlide = this._elem.querySelector(`[data-toggle-elem="${item.dataset.toggleItem}"]`);
        }
        if (elemToSlide.dataset.transitioning === 'true') {
          return false;
        }
        if (item.classList.contains('open')) {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, item);
        } else {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideDown(elemToSlide, item);
        }
        if (this._options.closeOthers) {
          let otherToggles = this._elem.querySelectorAll('[data-toggle-item]');
          for (let otherItem of otherToggles) {
            if (otherItem !== item && otherItem.classList.contains('open') && otherItem.dataset.transitioning !== 'true' && !otherItem.contains(item)) {
              let elemToSlide = otherItem.querySelector('[data-toggle-elem]');
              if (!elemToSlide) {
                elemToSlide = this._elem.querySelector(`[data-toggle-elem="${otherItem.dataset.toggleItem}"]`);
              }
              _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, otherItem);
            }
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/StickyElem.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/StickyElem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyElem)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

let hcSticky = null;
class StickyElem extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._sticky = null;
    this._options = options;
    this._selector = this._options.top;
  }
  async mount() {
    hcSticky = await __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(__webpack_require__, /*! hc-sticky */ "./node_modules/hc-sticky/dist/hc-sticky.js", 23));
    hcSticky = hcSticky.default;
    if (typeof this._selector === 'string') {
      this._options.top = document.querySelector(this._selector).getBoundingClientRect().height;
    }
    this._sticky = new hcSticky(this._elem, this._options);
    if (typeof this._selector === 'string') {
      window.addEventListener('resize', e => {
        this._options.top = document.querySelector(this._selector).getBoundingClientRect().height;
        this._sticky.update(this._options);
      }, {
        passive: true
      });
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/StickyPosition.js":
/*!************************************************************!*\
  !*** ./src/resources/scripts/components/StickyPosition.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyPosition)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class StickyPosition extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._currentScrollY = window.scrollY;
    this._currentDirection = 'down';
    this._lastScrollY = 0;
  }
  async mount() {
    this._assignVariables();
    this._setProperty();
    const observer = new MutationObserver((list, observer) => {
      this._setProperty();
    });
    observer.observe(this._elem, {
      subtree: true,
      childList: true
    });
    window.addEventListener('scroll', e => {
      this._assignVariables();
      this._setProperty();
    }, {
      passive: true
    });
  }
  _assignVariables() {
    this._currentScrollY = window.scrollY;
    this._currentDirection = this._currentScrollY > this._lastScrollY ? 'down' : 'up';
    this._lastScrollY = window.scrollY;
  }
  _setProperty() {
    let offset = window.innerHeight - this._elem.clientHeight;
    let atBottom = this._elem.offsetTop === this._elem.parentElement.clientHeight - this._elem.clientHeight;
    if (offset < 0 && this._currentDirection === 'down') {
      this._elem.style.setProperty('--sticky-offset', `${offset}px`);
    } else {
      this._elem.style.setProperty('--sticky-offset', `0px`);
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/inherited/Component.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/inherited/Component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");

class Component {
  constructor(elem, theme, options, ctx) {
    this._theme = theme;
    this._elem = elem;
    this._ctx = ctx;
    this._options = options;
    this._originalOptions = {
      ...this._options
    };
    this._addedResizeListener = false;
    this._optionsCheck(true);
  }
  _optionsCheck(firstRun) {
    if (Array.isArray(this._options)) return false;
    let newOptions = {
      ...this._originalOptions
    };
    newOptions.usingSettingsFor = 'desktop';
    if (this._originalOptions.responsive && this._originalOptions.responsive.length) {
      for (let optionsObj of this._originalOptions.responsive) {
        if (matchMedia(`only screen and (max-width: ${optionsObj.breakpoint})`).matches) {
          newOptions = {
            ...this._originalOptions,
            ...optionsObj.settings
          };
          newOptions.usingSettingsFor = optionsObj.breakpoint;
        }
      }
    }
    if (firstRun) {
      this._options = newOptions;
    } else if (this._options.usingSettingsFor !== newOptions.usingSettingsFor) {
      this._options = newOptions;
      return true;
    }
    return false;
  }
  reinitOnResize() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this._addedResizeListener) return;
    if (options) this._originalOptions = options;
    window.addEventListener('resize', e => {
      let changed = this._optionsCheck();
      if (changed) {
        this.unmount();
        this.mount();
        _lib_Helpers__WEBPACK_IMPORTED_MODULE_0__["default"].nextFrame(() => {
          if (typeof this.update === 'function') {
            this.update();
          }
        });
      }
    }, {
      passive: true
    });
    this._addedResizeListener = true;
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/AjaxApi.js":
/*!**********************************************!*\
  !*** ./src/resources/scripts/lib/AjaxApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AjaxApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/resources/scripts/lib/Helpers.js");


let endpoints = {
  cart: {
    clear: '/cart/clear.json',
    get: '/cart.json',
    add: '/cart/add.js',
    change: '/cart/change.js',
    update: '/cart/update.js'
  },
  product: {
    get: '/products/[handle].json',
    getCustom: '/products/[handle]?view=json'
  }
};
class AjaxApi {
  static async getCart() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.get));
    return result.data;
  }
  static async addToCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.add), options);
    return result.data;
  }
  static async changeCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.change), options);
    return result.data;
  }
  static async updateCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.update), options);
    return result.data;
  }
  static async emptyCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.clear), options);
    return result.data;
  }
  static async updateCartItem(id, quantity) {
    let props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return await AjaxApi.changeCart({
      line: `${id}`,
      quantity: quantity,
      properties: props
    }, state);
  }
  static async removeCartItem(id) {
    return await AjaxApi.updateCartItem(id, 0);
  }
  static async getProduct(handle) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let endpoint = endpoints.product.get.replace('[handle]', handle);
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoint));
    return result.data.product;
  }
  static async getCustomProduct(handle) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let endpoint = endpoints.product.getCustom.replace('[handle]', handle);
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoint), {
      responseType: 'json'
    });
    return typeof result.data === 'object' ? result.data : JSON.parse(result.data);
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/Helpers.js":
/*!**********************************************!*\
  !*** ./src/resources/scripts/lib/Helpers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helpers)
/* harmony export */ });
class Helpers {
  static formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';
    if (isNaN(number) || number == null) {
      return 0;
    }
    number = (number / 100.0).toFixed(precision);
    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    const centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }
  static isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return distance.top >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  static hasParentWithSelector(element, selector) {
    if (element.matches(selector)) return element;
    return element.parentElement && Helpers.hasParentWithSelector(element.parentElement, selector);
  }
  static debounce(callback, wait) {
    var _this = this;
    let timeout;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const context = _this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }
  static getParameterByName(name) {
    let url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  static compact(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];
    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  static isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }
  static formatMoney(cents, state) {
    let format = state.moneyFormat;
    if (cents === 0) return state.locale.free;
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    switch (format.match(placeholderRegex)[1]) {
      case 'amount':
        value = Helpers.formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = Helpers.formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = Helpers.formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = Helpers.formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = Helpers.formatWithDelimiters(cents, 0, ' ');
        break;
    }
    return format.replace(placeholderRegex, value).replace(".00", "").replace(',00', '');
  }
  static getSizedImageUrl(src, size) {
    if (size === null || src === null) {
      return src;
    }
    if (size === 'master') {
      return Helpers.removeProtocol(src);
    }
    var match = src.match(/\.(webp|jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return Helpers.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }
  static removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }
  static getEndpoint(endpoint) {
    if (endpoint.includes('?')) {
      return `${endpoint}&v=${Math.random()}`;
    } else {
      return `${endpoint}?v=${Math.random()}`;
    }
  }
  static nextFrame(callback) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(callback);
    });
  }
  static slideDown(elem, mainElem) {
    elem.style.maxHeight = 'none';
    let scrollHeight = elem.scrollHeight;
    elem.style.maxHeight = '0px';
    mainElem.classList.add('open');
    elem.classList.add('open');
    elem.dataset.transitioning = true;
    elem.dataset.lastEvent = 'slideDown';
    let openEvent = e => {
      if (e.propertyName === 'max-height' && elem.dataset.lastEvent == 'slideDown') {
        elem.dataset.transitioning = false;
        elem.style.maxHeight = 'none';
        elem.removeEventListener('transitionend', openEvent, false);
      }
    };
    elem.addEventListener('transitionend', openEvent, false);
    Helpers.nextFrame(() => {
      elem.style.maxHeight = `${scrollHeight}px`;
    });
  }
  static slideUp(elem, mainElem) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
    mainElem.classList.remove('open');
    elem.dataset.transitioning = true;
    elem.dataset.lastEvent = 'slideUp';
    let closeEvent = e => {
      if (e.propertyName === 'max-height' && elem.dataset.lastEvent == 'slideUp') {
        elem.classList.remove('open');
        elem.dataset.transitioning = false;
        elem.removeEventListener('transitionend', closeEvent, false);
      }
    };
    elem.addEventListener('transitionend', closeEvent, false);
    Helpers.nextFrame(() => {
      elem.style.maxHeight = `0px`;
    });
  }
  static handleize(str) {
    str = str.toLowerCase();
    var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];

    // For the old browsers
    for (var i = 0; i < toReplace.length; ++i) {
      str = str.replace(toReplace[i], "");
    }
    str = str.replace(/\W+/g, "-");
    if (str.charAt(str.length - 1) == "-") {
      str = str.replace(/-+\z/, "");
    }
    if (str.charAt(0) == "-") {
      str = str.replace(/\A-+/, "");
    }
    return str;
  }
  static copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/Queue.js":
/*!********************************************!*\
  !*** ./src/resources/scripts/lib/Queue.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Queue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  onInit() {}
  add(job) {
    this.queue.push(job);
    if (!this.processing) {
      this.process();
    }
  }
  async process() {
    this.processing = true;
    if (this.queue.length === 0) {
      this.processing = false;
      return false;
    } else {
      let job = this.queue.shift();
      await job();
      this.process();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);

/***/ }),

/***/ "./src/resources/styles/radiant.scss":
/*!*******************************************!*\
  !*** ./src/resources/styles/radiant.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "radiant.css.liquid");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BotInfo: () => (/* binding */ BotInfo),
/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),
/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),
/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),
/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),
/* harmony export */   browserName: () => (/* binding */ browserName),
/* harmony export */   detect: () => (/* binding */ detect),
/* harmony export */   detectOS: () => (/* binding */ detectOS),
/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),
/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}


/***/ }),

/***/ "./node_modules/evx/dist/evx.es.js":
/*!*****************************************!*\
  !*** ./node_modules/evx/dist/evx.es.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ a),
/* harmony export */   emit: () => (/* binding */ r),
/* harmony export */   getState: () => (/* binding */ u),
/* harmony export */   hydrate: () => (/* binding */ o),
/* harmony export */   on: () => (/* binding */ c)
/* harmony export */ });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,e,c){return(r=n,r.reduce(function(n,t,e){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,e){return n.concat(t[e]||[])},[]).map(function(n){return n(e,c)});var r},e=a(),c=e.on,r=e.emit,o=e.hydrate,u=e.getState;function a(e){void 0===e&&(e={});var c={};return{getState:function(){return Object.assign({},e)},hydrate:function(r){return n(r),Object.assign(e,r),function(){var n=["*"].concat(Object.keys(r));t(n,c,e)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return c[n]=(c[n]||[]).concat(t)}),function(){return n.map(function(n){return c[n].splice(c[n].indexOf(t),1)})}},emit:function(r,o,u){var a=("*"===r?[]:["*"]).concat(r);(o="function"==typeof o?o(e):o)&&(n(o),Object.assign(e,o),a=a.concat(Object.keys(o))),t(a,c,e,u)}}}
//# sourceMappingURL=evx.es.js.map


/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.es.js":
/*!****************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
var n=function(){return n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},n.apply(this,arguments)};function t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function e(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function r(){return Date.now()}function a(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function o(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function u(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function d(n,t,i){return Math.min(Math.max(n,t),i)}function l(n){return(n>0?1:0)-(n<0?1:0)||+n}function f(n){var t=n.getBoundingClientRect();return{height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function p(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function v(n){return Math.round(1e6*n)/1e6}function h(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function m(n){var i,e,a,o,u,s,c,f,h,m,g,b,x,k,y=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var i=Math.floor(Math.abs(v(n/e))),r=v((n%e+e)%e);r===e&&(r=0);var a=l(n),o=c.indexOf(t([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,u=a+o;e=A(u);var c=A(u-s*l(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),v(e)}function A(n,t){if(null==t&&(t=v(T)),!D(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,u=O(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/s)*e;return v(l-d-l+c[u]+f+(o===s?e:0))}function D(n){return L(n)===n}function L(n){return d(n,h,m)}function S(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var i;i=t-T,w.push({distance:i,timestamp:r()}),w.length>6&&(w=w.slice(-6)),T=v(t);var e=H().abs;if(e!==M){var a=null!==M;M=e,a&&n.emit("slideChanged")}}function H(t){var r=t?null:function(){if(s){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-u[0][2],r=0-(i<0&&n?e-Math.abs(i):i),c=0,d=z(T),f=d.abs,p=d.rel,v=u[p][2],y=u.map((function(t,i){var a=r+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*l(-a));var u=i-p,d=l(u),h=u+f;n&&(-1===d&&a>v&&(h+=s),1===d&&a<v&&(h-=s),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+t[0]+t[1],x=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:h,distance:o.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}}));return f=L(f),p=O(f),{abs:L(f),length:a,max:k,maxIdx:m,min:x,minIdx:h,position:T,progress:n?t/e:T/a,rel:p,slides:y,slidesLength:e}}}();return i.details=r,n.emit("detailsChanged"),r}return i={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[p(n,"size",1),p(n,"spacing",0),p(n,"origin",0)]})),s=u.length){e=v(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=s-1;a=v(e+u[0][2]-u[i][0]-u[i][2]-u[i][1]),c=u.reduce((function(n,i){if(!n)return[0];var e=u[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=v(r),n.push(r),(!t||t<r)&&(f=n.length-1),t=r,n}),null),0===a&&(f=0),c.push(v(e))}}(),!s)return H(!0);var i;!function(){var t=n.options.range,i=n.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",y):f;var e=p(t,"min",null),r=p(t,"max",null);null!==e&&(h=e),null!==r&&(m=r),x=h===-1/0?h:n.track.idxToDist(h||0,!0,0),k=m===y?m:I(m,!0,0),null===r&&(b=m),p(t,"align",!1)&&m!==y&&0===u[O(m)][2]&&(k-=1-u[O(m)][0],m=E(k-T)),x=v(x),k=v(k)}(),i=t,Number(i)===i?C(A(L(t))):H()},to:_,velocity:function(){var n=r(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(l(e)!==l(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function g(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function f(n){return d(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return e?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,i=n.track,e=v();r=l(e);var u=n.track.details,s=[];if(e||!t){var d=m(e),h=d.dist,g=d.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var k=u.position,y=k+h;if(y<a||y>o){var w=y<a?a-k:o-k,M=0,T=e;if(l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=l(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),l(e.idxToDist(c,!0))!==s&&(c+=s),c=f(c);var d=e.idxToDist(c,!0);n.animator.start([{distance:d,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||h()})),n.on("dragged",(function(){i=n.track.details.abs}))}function b(n){var t,i,e,r,a,f,p,v,h,m,g,b,x,k,y,w,M,T,C=c();function E(t){if(f&&v===t.id){var o=D(t);if(h){if(!A(t))return I(t);m=o,h=!1,n.emit("dragChecked")}if(w)return m=o;u(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=d(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,l=r*o,f=Math.abs(c*l),p=Math.max(0,1-f/a*2);return p*p*t}(p(m-o)/r*e);i=l(c);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&s(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=o,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=D(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-e)<=Math.abs(x-i);return x=i,k=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function O(n){b&&(s(n),u(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,p="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";o("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",s),C.add(n,"mousedown",s),C.add(n,"touchstart",s)}))}(),C.add(t,"dragstart",(function(n){u(n)})),C.add(t,"click",O,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&u(n)}));var r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,y=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&y&&s)return w=!0;y=!1,u(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function x(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===p(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function k(t,i){return function(e){var r,u,s,d,l,v,h=c();function m(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var i=t?s.breakpoints[t]:s;return e.options=n(n({},s),i),m(),I(),A(),C(),!0}function x(n){var t=f(n);return(e.options.vertical?t.height:t.width)/e.size||1}function k(){return e.options.trackConfig.length}function y(t){for(var a in r=!1,s=n(n({},i),t),h.purge(),u=e.size,d=[],s.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,d.push(o),h.add(o,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return y(n),void M(t);I(),A();var i=k();C(),k()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:p(n,"number",i,!0),a=[],o=p(n,"perView",1,!0),u=p(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=p(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=f(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=o(e.options.selector,e.container)}e.container=(v=o(t,l||document)).length?v[0]:null,e.destroy=function(){h.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,y(e.options)}}var y=function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=m(i),i.animator=h(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,t([k(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,b,g],e||[],!0))}catch(n){console.error(n)}};


/***/ }),

/***/ "./node_modules/rivets/dist/rivets.js":
/*!********************************************!*\
  !*** ./node_modules/rivets/dist/rivets.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Rivets.js
// version: 0.9.6
// author: Michael Richards
// license: MIT
(function() {
  var Rivets, bindMethod, jQuery, unbindMethod, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Rivets = {
    options: ['prefix', 'templateDelimiters', 'rootInterface', 'preloadData', 'handler', 'executeFunctions'],
    extensions: ['binders', 'formatters', 'components', 'adapters'],
    "public": {
      binders: {},
      components: {},
      formatters: {},
      adapters: {},
      prefix: 'rv',
      templateDelimiters: ['{', '}'],
      rootInterface: '.',
      preloadData: true,
      executeFunctions: false,
      iterationAlias: function(modelName) {
        return '%' + modelName + '%';
      },
      handler: function(context, ev, binding) {
        return this.call(context, ev, binding.view.models);
      },
      configure: function(options) {
        var descriptor, key, option, value;
        if (options == null) {
          options = {};
        }
        for (option in options) {
          value = options[option];
          if (option === 'binders' || option === 'components' || option === 'formatters' || option === 'adapters') {
            for (key in value) {
              descriptor = value[key];
              Rivets[option][key] = descriptor;
            }
          } else {
            Rivets["public"][option] = value;
          }
        }
      },
      bind: function(el, models, options) {
        var view;
        if (models == null) {
          models = {};
        }
        if (options == null) {
          options = {};
        }
        view = new Rivets.View(el, models, options);
        view.bind();
        return view;
      },
      init: function(component, el, data) {
        var scope, template, view;
        if (data == null) {
          data = {};
        }
        if (el == null) {
          el = document.createElement('div');
        }
        component = Rivets["public"].components[component];
        template = component.template.call(this, el);
        if (template instanceof HTMLElement) {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
          el.appendChild(template);
        } else {
          el.innerHTML = template;
        }
        scope = component.initialize.call(this, el, data);
        view = new Rivets.View(el, scope);
        view.bind();
        return view;
      }
    }
  };

  if (window['jQuery'] || window['$']) {
    jQuery = window['jQuery'] || window['$'];
    _ref = 'on' in jQuery.prototype ? ['on', 'off'] : ['bind', 'unbind'], bindMethod = _ref[0], unbindMethod = _ref[1];
    Rivets.Util = {
      bindEvent: function(el, event, handler) {
        return jQuery(el)[bindMethod](event, handler);
      },
      unbindEvent: function(el, event, handler) {
        return jQuery(el)[unbindMethod](event, handler);
      },
      getInputValue: function(el) {
        var $el;
        $el = jQuery(el);
        if ($el.attr('type') === 'checkbox') {
          return $el.is(':checked');
        } else {
          return $el.val();
        }
      }
    };
  } else {
    Rivets.Util = {
      bindEvent: (function() {
        if ('addEventListener' in window) {
          return function(el, event, handler) {
            return el.addEventListener(event, handler, false);
          };
        }
        return function(el, event, handler) {
          return el.attachEvent('on' + event, handler);
        };
      })(),
      unbindEvent: (function() {
        if ('removeEventListener' in window) {
          return function(el, event, handler) {
            return el.removeEventListener(event, handler, false);
          };
        }
        return function(el, event, handler) {
          return el.detachEvent('on' + event, handler);
        };
      })(),
      getInputValue: function(el) {
        var o, _i, _len, _results;
        if (el.type === 'checkbox') {
          return el.checked;
        } else if (el.type === 'select-multiple') {
          _results = [];
          for (_i = 0, _len = el.length; _i < _len; _i++) {
            o = el[_i];
            if (o.selected) {
              _results.push(o.value);
            }
          }
          return _results;
        } else {
          return el.value;
        }
      }
    };
  }

  Rivets.TypeParser = (function() {
    function TypeParser() {}

    TypeParser.types = {
      primitive: 0,
      keypath: 1
    };

    TypeParser.parse = function(string) {
      if (/^'.*'$|^".*"$/.test(string)) {
        return {
          type: this.types.primitive,
          value: string.slice(1, -1)
        };
      } else if (string === 'true') {
        return {
          type: this.types.primitive,
          value: true
        };
      } else if (string === 'false') {
        return {
          type: this.types.primitive,
          value: false
        };
      } else if (string === 'null') {
        return {
          type: this.types.primitive,
          value: null
        };
      } else if (string === 'undefined') {
        return {
          type: this.types.primitive,
          value: void 0
        };
      } else if (string === '') {
        return {
          type: this.types.primitive,
          value: void 0
        };
      } else if (isNaN(Number(string)) === false) {
        return {
          type: this.types.primitive,
          value: Number(string)
        };
      } else {
        return {
          type: this.types.keypath,
          value: string
        };
      }
    };

    return TypeParser;

  })();

  Rivets.TextTemplateParser = (function() {
    function TextTemplateParser() {}

    TextTemplateParser.types = {
      text: 0,
      binding: 1
    };

    TextTemplateParser.parse = function(template, delimiters) {
      var index, lastIndex, lastToken, length, substring, tokens, value;
      tokens = [];
      length = template.length;
      index = 0;
      lastIndex = 0;
      while (lastIndex < length) {
        index = template.indexOf(delimiters[0], lastIndex);
        if (index < 0) {
          tokens.push({
            type: this.types.text,
            value: template.slice(lastIndex)
          });
          break;
        } else {
          if (index > 0 && lastIndex < index) {
            tokens.push({
              type: this.types.text,
              value: template.slice(lastIndex, index)
            });
          }
          lastIndex = index + delimiters[0].length;
          index = template.indexOf(delimiters[1], lastIndex);
          if (index < 0) {
            substring = template.slice(lastIndex - delimiters[1].length);
            lastToken = tokens[tokens.length - 1];
            if ((lastToken != null ? lastToken.type : void 0) === this.types.text) {
              lastToken.value += substring;
            } else {
              tokens.push({
                type: this.types.text,
                value: substring
              });
            }
            break;
          }
          value = template.slice(lastIndex, index).trim();
          tokens.push({
            type: this.types.binding,
            value: value
          });
          lastIndex = index + delimiters[1].length;
        }
      }
      return tokens;
    };

    return TextTemplateParser;

  })();

  Rivets.View = (function() {
    function View(els, models, options) {
      var k, option, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5;
      this.els = els;
      this.models = models;
      if (options == null) {
        options = {};
      }
      this.update = __bind(this.update, this);
      this.publish = __bind(this.publish, this);
      this.sync = __bind(this.sync, this);
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.select = __bind(this.select, this);
      this.traverse = __bind(this.traverse, this);
      this.build = __bind(this.build, this);
      this.buildBinding = __bind(this.buildBinding, this);
      this.bindingRegExp = __bind(this.bindingRegExp, this);
      this.options = __bind(this.options, this);
      if (!(this.els.jquery || this.els instanceof Array)) {
        this.els = [this.els];
      }
      _ref1 = Rivets.extensions;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        option = _ref1[_i];
        this[option] = {};
        if (options[option]) {
          _ref2 = options[option];
          for (k in _ref2) {
            v = _ref2[k];
            this[option][k] = v;
          }
        }
        _ref3 = Rivets["public"][option];
        for (k in _ref3) {
          v = _ref3[k];
          if ((_base = this[option])[k] == null) {
            _base[k] = v;
          }
        }
      }
      _ref4 = Rivets.options;
      for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
        option = _ref4[_j];
        this[option] = (_ref5 = options[option]) != null ? _ref5 : Rivets["public"][option];
      }
      this.build();
    }

    View.prototype.options = function() {
      var option, options, _i, _len, _ref1;
      options = {};
      _ref1 = Rivets.extensions.concat(Rivets.options);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        option = _ref1[_i];
        options[option] = this[option];
      }
      return options;
    };

    View.prototype.bindingRegExp = function() {
      return new RegExp("^" + this.prefix + "-");
    };

    View.prototype.buildBinding = function(binding, node, type, declaration) {
      var context, ctx, dependencies, keypath, options, pipe, pipes;
      options = {};
      pipes = (function() {
        var _i, _len, _ref1, _results;
        _ref1 = declaration.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g);
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          pipe = _ref1[_i];
          _results.push(pipe.trim());
        }
        return _results;
      })();
      context = (function() {
        var _i, _len, _ref1, _results;
        _ref1 = pipes.shift().split('<');
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          ctx = _ref1[_i];
          _results.push(ctx.trim());
        }
        return _results;
      })();
      keypath = context.shift();
      options.formatters = pipes;
      if (dependencies = context.shift()) {
        options.dependencies = dependencies.split(/\s+/);
      }
      return this.bindings.push(new Rivets[binding](this, node, type, keypath, options));
    };

    View.prototype.build = function() {
      var el, parse, _i, _len, _ref1;
      this.bindings = [];
      parse = (function(_this) {
        return function(node) {
          var block, childNode, delimiters, n, parser, text, token, tokens, _i, _j, _len, _len1, _ref1;
          if (node.nodeType === 3) {
            parser = Rivets.TextTemplateParser;
            if (delimiters = _this.templateDelimiters) {
              if ((tokens = parser.parse(node.data, delimiters)).length) {
                if (!(tokens.length === 1 && tokens[0].type === parser.types.text)) {
                  for (_i = 0, _len = tokens.length; _i < _len; _i++) {
                    token = tokens[_i];
                    text = document.createTextNode(token.value);
                    node.parentNode.insertBefore(text, node);
                    if (token.type === 1) {
                      _this.buildBinding('TextBinding', text, null, token.value);
                    }
                  }
                  node.parentNode.removeChild(node);
                }
              }
            }
          } else if (node.nodeType === 1) {
            block = _this.traverse(node);
          }
          if (!block) {
            _ref1 = (function() {
              var _k, _len1, _ref1, _results;
              _ref1 = node.childNodes;
              _results = [];
              for (_k = 0, _len1 = _ref1.length; _k < _len1; _k++) {
                n = _ref1[_k];
                _results.push(n);
              }
              return _results;
            })();
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              childNode = _ref1[_j];
              parse(childNode);
            }
          }
        };
      })(this);
      _ref1 = this.els;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        el = _ref1[_i];
        parse(el);
      }
      this.bindings.sort(function(a, b) {
        var _ref2, _ref3;
        return (((_ref2 = b.binder) != null ? _ref2.priority : void 0) || 0) - (((_ref3 = a.binder) != null ? _ref3.priority : void 0) || 0);
      });
    };

    View.prototype.traverse = function(node) {
      var attribute, attributes, binder, bindingRegExp, block, identifier, regexp, type, value, _i, _j, _len, _len1, _ref1, _ref2, _ref3;
      bindingRegExp = this.bindingRegExp();
      block = node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE';
      _ref1 = node.attributes;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attribute = _ref1[_i];
        if (bindingRegExp.test(attribute.name)) {
          type = attribute.name.replace(bindingRegExp, '');
          if (!(binder = this.binders[type])) {
            _ref2 = this.binders;
            for (identifier in _ref2) {
              value = _ref2[identifier];
              if (identifier !== '*' && identifier.indexOf('*') !== -1) {
                regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
                if (regexp.test(type)) {
                  binder = value;
                }
              }
            }
          }
          binder || (binder = this.binders['*']);
          if (binder.block) {
            block = true;
            attributes = [attribute];
          }
        }
      }
      _ref3 = attributes || node.attributes;
      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
        attribute = _ref3[_j];
        if (bindingRegExp.test(attribute.name)) {
          type = attribute.name.replace(bindingRegExp, '');
          this.buildBinding('Binding', node, type, attribute.value);
        }
      }
      if (!block) {
        type = node.nodeName.toLowerCase();
        if (this.components[type] && !node._bound) {
          this.bindings.push(new Rivets.ComponentBinding(this, node, type));
          block = true;
        }
      }
      return block;
    };

    View.prototype.select = function(fn) {
      var binding, _i, _len, _ref1, _results;
      _ref1 = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        if (fn(binding)) {
          _results.push(binding);
        }
      }
      return _results;
    };

    View.prototype.bind = function() {
      var binding, _i, _len, _ref1;
      _ref1 = this.bindings;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        binding.bind();
      }
    };

    View.prototype.unbind = function() {
      var binding, _i, _len, _ref1;
      _ref1 = this.bindings;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        binding.unbind();
      }
    };

    View.prototype.sync = function() {
      var binding, _i, _len, _ref1;
      _ref1 = this.bindings;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        if (typeof binding.sync === "function") {
          binding.sync();
        }
      }
    };

    View.prototype.publish = function() {
      var binding, _i, _len, _ref1;
      _ref1 = this.select(function(b) {
        var _ref1;
        return (_ref1 = b.binder) != null ? _ref1.publishes : void 0;
      });
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        binding.publish();
      }
    };

    View.prototype.update = function(models) {
      var binding, key, model, _i, _len, _ref1;
      if (models == null) {
        models = {};
      }
      for (key in models) {
        model = models[key];
        this.models[key] = model;
      }
      _ref1 = this.bindings;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        binding = _ref1[_i];
        if (typeof binding.update === "function") {
          binding.update(models);
        }
      }
    };

    return View;

  })();

  Rivets.Binding = (function() {
    function Binding(view, el, type, keypath, options) {
      this.view = view;
      this.el = el;
      this.type = type;
      this.keypath = keypath;
      this.options = options != null ? options : {};
      this.getValue = __bind(this.getValue, this);
      this.update = __bind(this.update, this);
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.publish = __bind(this.publish, this);
      this.sync = __bind(this.sync, this);
      this.set = __bind(this.set, this);
      this.eventHandler = __bind(this.eventHandler, this);
      this.formattedValue = __bind(this.formattedValue, this);
      this.parseFormatterArguments = __bind(this.parseFormatterArguments, this);
      this.parseTarget = __bind(this.parseTarget, this);
      this.observe = __bind(this.observe, this);
      this.setBinder = __bind(this.setBinder, this);
      this.formatters = this.options.formatters || [];
      this.dependencies = [];
      this.formatterObservers = {};
      this.model = void 0;
      this.setBinder();
    }

    Binding.prototype.setBinder = function() {
      var identifier, regexp, value, _ref1;
      if (!(this.binder = this.view.binders[this.type])) {
        _ref1 = this.view.binders;
        for (identifier in _ref1) {
          value = _ref1[identifier];
          if (identifier !== '*' && identifier.indexOf('*') !== -1) {
            regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
            if (regexp.test(this.type)) {
              this.binder = value;
              this.args = new RegExp("^" + (identifier.replace(/\*/g, '(.+)')) + "$").exec(this.type);
              this.args.shift();
            }
          }
        }
      }
      this.binder || (this.binder = this.view.binders['*']);
      if (this.binder instanceof Function) {
        return this.binder = {
          routine: this.binder
        };
      }
    };

    Binding.prototype.observe = function(obj, keypath, callback) {
      return Rivets.sightglass(obj, keypath, callback, {
        root: this.view.rootInterface,
        adapters: this.view.adapters
      });
    };

    Binding.prototype.parseTarget = function() {
      var token;
      token = Rivets.TypeParser.parse(this.keypath);
      if (token.type === Rivets.TypeParser.types.primitive) {
        return this.value = token.value;
      } else {
        this.observer = this.observe(this.view.models, this.keypath, this.sync);
        return this.model = this.observer.target;
      }
    };

    Binding.prototype.parseFormatterArguments = function(args, formatterIndex) {
      var ai, arg, observer, processedArgs, _base, _i, _len;
      args = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = args.length; _i < _len; _i++) {
          arg = args[_i];
          _results.push(Rivets.TypeParser.parse(arg));
        }
        return _results;
      })();
      processedArgs = [];
      for (ai = _i = 0, _len = args.length; _i < _len; ai = ++_i) {
        arg = args[ai];
        processedArgs.push(arg.type === Rivets.TypeParser.types.primitive ? arg.value : ((_base = this.formatterObservers)[formatterIndex] || (_base[formatterIndex] = {}), !(observer = this.formatterObservers[formatterIndex][ai]) ? (observer = this.observe(this.view.models, arg.value, this.sync), this.formatterObservers[formatterIndex][ai] = observer) : void 0, observer.value()));
      }
      return processedArgs;
    };

    Binding.prototype.formattedValue = function(value) {
      var args, fi, formatter, id, processedArgs, _i, _len, _ref1, _ref2;
      _ref1 = this.formatters;
      for (fi = _i = 0, _len = _ref1.length; _i < _len; fi = ++_i) {
        formatter = _ref1[fi];
        args = formatter.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g);
        id = args.shift();
        formatter = this.view.formatters[id];
        processedArgs = this.parseFormatterArguments(args, fi);
        if ((formatter != null ? formatter.read : void 0) instanceof Function) {
          value = (_ref2 = formatter.read).call.apply(_ref2, [this.model, value].concat(__slice.call(processedArgs)));
        } else if (formatter instanceof Function) {
          value = formatter.call.apply(formatter, [this.model, value].concat(__slice.call(processedArgs)));
        }
      }
      return value;
    };

    Binding.prototype.eventHandler = function(fn) {
      var binding, handler;
      handler = (binding = this).view.handler;
      return function(ev) {
        return handler.call(fn, this, ev, binding);
      };
    };

    Binding.prototype.set = function(value) {
      var _ref1;
      value = value instanceof Function && !this.binder["function"] && Rivets["public"].executeFunctions ? this.formattedValue(value.call(this.model)) : this.formattedValue(value);
      return (_ref1 = this.binder.routine) != null ? _ref1.call(this, this.el, value) : void 0;
    };

    Binding.prototype.sync = function() {
      var dependency, observer;
      return this.set((function() {
        var _i, _j, _len, _len1, _ref1, _ref2, _ref3;
        if (this.observer) {
          if (this.model !== this.observer.target) {
            _ref1 = this.dependencies;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              observer = _ref1[_i];
              observer.unobserve();
            }
            this.dependencies = [];
            if (((this.model = this.observer.target) != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
              _ref3 = this.options.dependencies;
              for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
                dependency = _ref3[_j];
                observer = this.observe(this.model, dependency, this.sync);
                this.dependencies.push(observer);
              }
            }
          }
          return this.observer.value();
        } else {
          return this.value;
        }
      }).call(this));
    };

    Binding.prototype.publish = function() {
      var args, fi, fiReversed, formatter, id, lastformatterIndex, processedArgs, value, _i, _len, _ref1, _ref2, _ref3;
      if (this.observer) {
        value = this.getValue(this.el);
        lastformatterIndex = this.formatters.length - 1;
        _ref1 = this.formatters.slice(0).reverse();
        for (fiReversed = _i = 0, _len = _ref1.length; _i < _len; fiReversed = ++_i) {
          formatter = _ref1[fiReversed];
          fi = lastformatterIndex - fiReversed;
          args = formatter.split(/\s+/);
          id = args.shift();
          processedArgs = this.parseFormatterArguments(args, fi);
          if ((_ref2 = this.view.formatters[id]) != null ? _ref2.publish : void 0) {
            value = (_ref3 = this.view.formatters[id]).publish.apply(_ref3, [value].concat(__slice.call(processedArgs)));
          }
        }
        return this.observer.setValue(value);
      }
    };

    Binding.prototype.bind = function() {
      var dependency, observer, _i, _len, _ref1, _ref2, _ref3;
      this.parseTarget();
      if ((_ref1 = this.binder.bind) != null) {
        _ref1.call(this, this.el);
      }
      if ((this.model != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
        _ref3 = this.options.dependencies;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          dependency = _ref3[_i];
          observer = this.observe(this.model, dependency, this.sync);
          this.dependencies.push(observer);
        }
      }
      if (this.view.preloadData) {
        return this.sync();
      }
    };

    Binding.prototype.unbind = function() {
      var ai, args, fi, observer, _i, _len, _ref1, _ref2, _ref3, _ref4;
      if ((_ref1 = this.binder.unbind) != null) {
        _ref1.call(this, this.el);
      }
      if ((_ref2 = this.observer) != null) {
        _ref2.unobserve();
      }
      _ref3 = this.dependencies;
      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
        observer = _ref3[_i];
        observer.unobserve();
      }
      this.dependencies = [];
      _ref4 = this.formatterObservers;
      for (fi in _ref4) {
        args = _ref4[fi];
        for (ai in args) {
          observer = args[ai];
          observer.unobserve();
        }
      }
      return this.formatterObservers = {};
    };

    Binding.prototype.update = function(models) {
      var _ref1, _ref2;
      if (models == null) {
        models = {};
      }
      this.model = (_ref1 = this.observer) != null ? _ref1.target : void 0;
      return (_ref2 = this.binder.update) != null ? _ref2.call(this, models) : void 0;
    };

    Binding.prototype.getValue = function(el) {
      if (this.binder && (this.binder.getValue != null)) {
        return this.binder.getValue.call(this, el);
      } else {
        return Rivets.Util.getInputValue(el);
      }
    };

    return Binding;

  })();

  Rivets.ComponentBinding = (function(_super) {
    __extends(ComponentBinding, _super);

    function ComponentBinding(view, el, type) {
      var attribute, bindingRegExp, propertyName, token, _i, _len, _ref1, _ref2;
      this.view = view;
      this.el = el;
      this.type = type;
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.locals = __bind(this.locals, this);
      this.component = this.view.components[this.type];
      this["static"] = {};
      this.observers = {};
      this.upstreamObservers = {};
      bindingRegExp = view.bindingRegExp();
      _ref1 = this.el.attributes || [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attribute = _ref1[_i];
        if (!bindingRegExp.test(attribute.name)) {
          propertyName = this.camelCase(attribute.name);
          token = Rivets.TypeParser.parse(attribute.value);
          if (__indexOf.call((_ref2 = this.component["static"]) != null ? _ref2 : [], propertyName) >= 0) {
            this["static"][propertyName] = attribute.value;
          } else if (token.type === Rivets.TypeParser.types.primitive) {
            this["static"][propertyName] = token.value;
          } else {
            this.observers[propertyName] = attribute.value;
          }
        }
      }
    }

    ComponentBinding.prototype.sync = function() {};

    ComponentBinding.prototype.update = function() {};

    ComponentBinding.prototype.publish = function() {};

    ComponentBinding.prototype.locals = function() {
      var key, observer, result, value, _ref1, _ref2;
      result = {};
      _ref1 = this["static"];
      for (key in _ref1) {
        value = _ref1[key];
        result[key] = value;
      }
      _ref2 = this.observers;
      for (key in _ref2) {
        observer = _ref2[key];
        result[key] = observer.value();
      }
      return result;
    };

    ComponentBinding.prototype.camelCase = function(string) {
      return string.replace(/-([a-z])/g, function(grouped) {
        return grouped[1].toUpperCase();
      });
    };

    ComponentBinding.prototype.bind = function() {
      var k, key, keypath, observer, option, options, scope, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
      if (!this.bound) {
        _ref1 = this.observers;
        for (key in _ref1) {
          keypath = _ref1[key];
          this.observers[key] = this.observe(this.view.models, keypath, ((function(_this) {
            return function(key) {
              return function() {
                return _this.componentView.models[key] = _this.observers[key].value();
              };
            };
          })(this)).call(this, key));
        }
        this.bound = true;
      }
      if (this.componentView != null) {
        this.componentView.bind();
      } else {
        this.el.innerHTML = this.component.template.call(this);
        scope = this.component.initialize.call(this, this.el, this.locals());
        this.el._bound = true;
        options = {};
        _ref2 = Rivets.extensions;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          option = _ref2[_i];
          options[option] = {};
          if (this.component[option]) {
            _ref3 = this.component[option];
            for (k in _ref3) {
              v = _ref3[k];
              options[option][k] = v;
            }
          }
          _ref4 = this.view[option];
          for (k in _ref4) {
            v = _ref4[k];
            if ((_base = options[option])[k] == null) {
              _base[k] = v;
            }
          }
        }
        _ref5 = Rivets.options;
        for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
          option = _ref5[_j];
          options[option] = (_ref6 = this.component[option]) != null ? _ref6 : this.view[option];
        }
        this.componentView = new Rivets.View(Array.prototype.slice.call(this.el.childNodes), scope, options);
        this.componentView.bind();
        _ref7 = this.observers;
        for (key in _ref7) {
          observer = _ref7[key];
          this.upstreamObservers[key] = this.observe(this.componentView.models, key, ((function(_this) {
            return function(key, observer) {
              return function() {
                return observer.setValue(_this.componentView.models[key]);
              };
            };
          })(this)).call(this, key, observer));
        }
      }
    };

    ComponentBinding.prototype.unbind = function() {
      var key, observer, _ref1, _ref2, _ref3;
      _ref1 = this.upstreamObservers;
      for (key in _ref1) {
        observer = _ref1[key];
        observer.unobserve();
      }
      _ref2 = this.observers;
      for (key in _ref2) {
        observer = _ref2[key];
        observer.unobserve();
      }
      return (_ref3 = this.componentView) != null ? _ref3.unbind.call(this) : void 0;
    };

    return ComponentBinding;

  })(Rivets.Binding);

  Rivets.TextBinding = (function(_super) {
    __extends(TextBinding, _super);

    function TextBinding(view, el, type, keypath, options) {
      this.view = view;
      this.el = el;
      this.type = type;
      this.keypath = keypath;
      this.options = options != null ? options : {};
      this.sync = __bind(this.sync, this);
      this.formatters = this.options.formatters || [];
      this.dependencies = [];
      this.formatterObservers = {};
    }

    TextBinding.prototype.binder = {
      routine: function(node, value) {
        return node.data = value != null ? value : '';
      }
    };

    TextBinding.prototype.sync = function() {
      return TextBinding.__super__.sync.apply(this, arguments);
    };

    return TextBinding;

  })(Rivets.Binding);

  Rivets["public"].binders.text = function(el, value) {
    if (el.textContent != null) {
      return el.textContent = value != null ? value : '';
    } else {
      return el.innerText = value != null ? value : '';
    }
  };

  Rivets["public"].binders.html = function(el, value) {
    return el.innerHTML = value != null ? value : '';
  };

  Rivets["public"].binders.show = function(el, value) {
    return el.style.display = value ? '' : 'none';
  };

  Rivets["public"].binders.hide = function(el, value) {
    return el.style.display = value ? 'none' : '';
  };

  Rivets["public"].binders.enabled = function(el, value) {
    return el.disabled = !value;
  };

  Rivets["public"].binders.disabled = function(el, value) {
    return el.disabled = !!value;
  };

  Rivets["public"].binders.checked = {
    publishes: true,
    priority: 2000,
    bind: function(el) {
      return Rivets.Util.bindEvent(el, 'change', this.publish);
    },
    unbind: function(el) {
      return Rivets.Util.unbindEvent(el, 'change', this.publish);
    },
    routine: function(el, value) {
      var _ref1;
      if (el.type === 'radio') {
        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) === (value != null ? value.toString() : void 0);
      } else {
        return el.checked = !!value;
      }
    }
  };

  Rivets["public"].binders.unchecked = {
    publishes: true,
    priority: 2000,
    bind: function(el) {
      return Rivets.Util.bindEvent(el, 'change', this.publish);
    },
    unbind: function(el) {
      return Rivets.Util.unbindEvent(el, 'change', this.publish);
    },
    routine: function(el, value) {
      var _ref1;
      if (el.type === 'radio') {
        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) !== (value != null ? value.toString() : void 0);
      } else {
        return el.checked = !value;
      }
    }
  };

  Rivets["public"].binders.value = {
    publishes: true,
    priority: 3000,
    bind: function(el) {
      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
        this.event = el.tagName === 'SELECT' ? 'change' : 'input';
        return Rivets.Util.bindEvent(el, this.event, this.publish);
      }
    },
    unbind: function(el) {
      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
        return Rivets.Util.unbindEvent(el, this.event, this.publish);
      }
    },
    routine: function(el, value) {
      var o, _i, _len, _ref1, _ref2, _ref3, _results;
      if (el.tagName === 'INPUT' && el.type === 'radio') {
        return el.setAttribute('value', value);
      } else if (window.jQuery != null) {
        el = jQuery(el);
        if ((value != null ? value.toString() : void 0) !== ((_ref1 = el.val()) != null ? _ref1.toString() : void 0)) {
          return el.val(value != null ? value : '');
        }
      } else {
        if (el.type === 'select-multiple') {
          if (value != null) {
            _results = [];
            for (_i = 0, _len = el.length; _i < _len; _i++) {
              o = el[_i];
              _results.push(o.selected = (_ref2 = o.value, __indexOf.call(value, _ref2) >= 0));
            }
            return _results;
          }
        } else if ((value != null ? value.toString() : void 0) !== ((_ref3 = el.value) != null ? _ref3.toString() : void 0)) {
          return el.value = value != null ? value : '';
        }
      }
    }
  };

  Rivets["public"].binders["if"] = {
    block: true,
    priority: 4000,
    bind: function(el) {
      var attr, declaration;
      if (this.marker == null) {
        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
        declaration = el.getAttribute(attr);
        this.marker = document.createComment(" rivets: " + this.type + " " + declaration + " ");
        this.bound = false;
        el.removeAttribute(attr);
        el.parentNode.insertBefore(this.marker, el);
        return el.parentNode.removeChild(el);
      }
    },
    unbind: function() {
      if (this.nested) {
        this.nested.unbind();
        return this.bound = false;
      }
    },
    routine: function(el, value) {
      var key, model, models, _ref1;
      if (!!value === !this.bound) {
        if (value) {
          models = {};
          _ref1 = this.view.models;
          for (key in _ref1) {
            model = _ref1[key];
            models[key] = model;
          }
          (this.nested || (this.nested = new Rivets.View(el, models, this.view.options()))).bind();
          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
          return this.bound = true;
        } else {
          el.parentNode.removeChild(el);
          this.nested.unbind();
          return this.bound = false;
        }
      }
    },
    update: function(models) {
      var _ref1;
      return (_ref1 = this.nested) != null ? _ref1.update(models) : void 0;
    }
  };

  Rivets["public"].binders.unless = {
    block: true,
    priority: 4000,
    bind: function(el) {
      return Rivets["public"].binders["if"].bind.call(this, el);
    },
    unbind: function() {
      return Rivets["public"].binders["if"].unbind.call(this);
    },
    routine: function(el, value) {
      return Rivets["public"].binders["if"].routine.call(this, el, !value);
    },
    update: function(models) {
      return Rivets["public"].binders["if"].update.call(this, models);
    }
  };

  Rivets["public"].binders['on-*'] = {
    "function": true,
    priority: 1000,
    unbind: function(el) {
      if (this.handler) {
        return Rivets.Util.unbindEvent(el, this.args[0], this.handler);
      }
    },
    routine: function(el, value) {
      if (this.handler) {
        Rivets.Util.unbindEvent(el, this.args[0], this.handler);
      }
      return Rivets.Util.bindEvent(el, this.args[0], this.handler = this.eventHandler(value));
    }
  };

  Rivets["public"].binders['each-*'] = {
    block: true,
    priority: 4000,
    bind: function(el) {
      var attr, view, _i, _len, _ref1;
      if (this.marker == null) {
        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
        this.marker = document.createComment(" rivets: " + this.type + " ");
        this.iterated = [];
        el.removeAttribute(attr);
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      } else {
        _ref1 = this.iterated;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          view = _ref1[_i];
          view.bind();
        }
      }
    },
    unbind: function(el) {
      var view, _i, _len, _ref1;
      if (this.iterated != null) {
        _ref1 = this.iterated;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          view = _ref1[_i];
          view.unbind();
        }
      }
    },
    routine: function(el, collection) {
      var binding, data, i, index, key, model, modelName, options, previous, template, view, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3;
      modelName = this.args[0];
      collection = collection || [];
      if (this.iterated.length > collection.length) {
        _ref1 = Array(this.iterated.length - collection.length);
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          i = _ref1[_i];
          view = this.iterated.pop();
          view.unbind();
          this.marker.parentNode.removeChild(view.els[0]);
        }
      }
      for (index = _j = 0, _len1 = collection.length; _j < _len1; index = ++_j) {
        model = collection[index];
        data = {
          index: index
        };
        data[Rivets["public"].iterationAlias(modelName)] = index;
        data[modelName] = model;
        if (this.iterated[index] == null) {
          _ref2 = this.view.models;
          for (key in _ref2) {
            model = _ref2[key];
            if (data[key] == null) {
              data[key] = model;
            }
          }
          previous = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker;
          options = this.view.options();
          options.preloadData = true;
          template = el.cloneNode(true);
          view = new Rivets.View(template, data, options);
          view.bind();
          this.iterated.push(view);
          this.marker.parentNode.insertBefore(template, previous.nextSibling);
        } else if (this.iterated[index].models[modelName] !== model) {
          this.iterated[index].update(data);
        }
      }
      if (el.nodeName === 'OPTION') {
        _ref3 = this.view.bindings;
        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
          binding = _ref3[_k];
          if (binding.el === this.marker.parentNode && binding.type === 'value') {
            binding.sync();
          }
        }
      }
    },
    update: function(models) {
      var data, key, model, view, _i, _len, _ref1;
      data = {};
      for (key in models) {
        model = models[key];
        if (key !== this.args[0]) {
          data[key] = model;
        }
      }
      _ref1 = this.iterated;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        view = _ref1[_i];
        view.update(data);
      }
    }
  };

  Rivets["public"].binders['class-*'] = function(el, value) {
    var elClass;
    elClass = " " + el.className + " ";
    if (!value === (elClass.indexOf(" " + this.args[0] + " ") !== -1)) {
      return el.className = value ? "" + el.className + " " + this.args[0] : elClass.replace(" " + this.args[0] + " ", ' ').trim();
    }
  };

  Rivets["public"].binders['*'] = function(el, value) {
    if (value != null) {
      return el.setAttribute(this.type, value);
    } else {
      return el.removeAttribute(this.type);
    }
  };

  Rivets["public"].formatters['call'] = function() {
    var args, value;
    value = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return value.call.apply(value, [this].concat(__slice.call(args)));
  };

  Rivets["public"].adapters['.'] = {
    id: '_rv',
    counter: 0,
    weakmap: {},
    weakReference: function(obj) {
      var id, _base, _name;
      if (!obj.hasOwnProperty(this.id)) {
        id = this.counter++;
        Object.defineProperty(obj, this.id, {
          value: id
        });
      }
      return (_base = this.weakmap)[_name = obj[this.id]] || (_base[_name] = {
        callbacks: {}
      });
    },
    cleanupWeakReference: function(ref, id) {
      if (!Object.keys(ref.callbacks).length) {
        if (!(ref.pointers && Object.keys(ref.pointers).length)) {
          return delete this.weakmap[id];
        }
      }
    },
    stubFunction: function(obj, fn) {
      var map, original, weakmap;
      original = obj[fn];
      map = this.weakReference(obj);
      weakmap = this.weakmap;
      return obj[fn] = function() {
        var callback, k, r, response, _i, _len, _ref1, _ref2, _ref3, _ref4;
        response = original.apply(obj, arguments);
        _ref1 = map.pointers;
        for (r in _ref1) {
          k = _ref1[r];
          _ref4 = (_ref2 = (_ref3 = weakmap[r]) != null ? _ref3.callbacks[k] : void 0) != null ? _ref2 : [];
          for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
            callback = _ref4[_i];
            callback();
          }
        }
        return response;
      };
    },
    observeMutations: function(obj, ref, keypath) {
      var fn, functions, map, _base, _i, _len;
      if (Array.isArray(obj)) {
        map = this.weakReference(obj);
        if (map.pointers == null) {
          map.pointers = {};
          functions = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
          for (_i = 0, _len = functions.length; _i < _len; _i++) {
            fn = functions[_i];
            this.stubFunction(obj, fn);
          }
        }
        if ((_base = map.pointers)[ref] == null) {
          _base[ref] = [];
        }
        if (__indexOf.call(map.pointers[ref], keypath) < 0) {
          return map.pointers[ref].push(keypath);
        }
      }
    },
    unobserveMutations: function(obj, ref, keypath) {
      var idx, map, pointers;
      if (Array.isArray(obj) && (obj[this.id] != null)) {
        if (map = this.weakmap[obj[this.id]]) {
          if (pointers = map.pointers[ref]) {
            if ((idx = pointers.indexOf(keypath)) >= 0) {
              pointers.splice(idx, 1);
            }
            if (!pointers.length) {
              delete map.pointers[ref];
            }
            return this.cleanupWeakReference(map, obj[this.id]);
          }
        }
      }
    },
    observe: function(obj, keypath, callback) {
      var callbacks, desc, value;
      callbacks = this.weakReference(obj).callbacks;
      if (callbacks[keypath] == null) {
        callbacks[keypath] = [];
        desc = Object.getOwnPropertyDescriptor(obj, keypath);
        if (!((desc != null ? desc.get : void 0) || (desc != null ? desc.set : void 0))) {
          value = obj[keypath];
          Object.defineProperty(obj, keypath, {
            enumerable: true,
            get: function() {
              return value;
            },
            set: (function(_this) {
              return function(newValue) {
                var cb, map, _i, _len, _ref1;
                if (newValue !== value) {
                  _this.unobserveMutations(value, obj[_this.id], keypath);
                  value = newValue;
                  if (map = _this.weakmap[obj[_this.id]]) {
                    callbacks = map.callbacks;
                    if (callbacks[keypath]) {
                      _ref1 = callbacks[keypath].slice();
                      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                        cb = _ref1[_i];
                        if (__indexOf.call(callbacks[keypath], cb) >= 0) {
                          cb();
                        }
                      }
                    }
                    return _this.observeMutations(newValue, obj[_this.id], keypath);
                  }
                }
              };
            })(this)
          });
        }
      }
      if (__indexOf.call(callbacks[keypath], callback) < 0) {
        callbacks[keypath].push(callback);
      }
      return this.observeMutations(obj[keypath], obj[this.id], keypath);
    },
    unobserve: function(obj, keypath, callback) {
      var callbacks, idx, map;
      if (map = this.weakmap[obj[this.id]]) {
        if (callbacks = map.callbacks[keypath]) {
          if ((idx = callbacks.indexOf(callback)) >= 0) {
            callbacks.splice(idx, 1);
            if (!callbacks.length) {
              delete map.callbacks[keypath];
              this.unobserveMutations(obj[keypath], obj[this.id], keypath);
            }
          }
          return this.cleanupWeakReference(map, obj[this.id]);
        }
      }
    },
    get: function(obj, keypath) {
      return obj[keypath];
    },
    set: function(obj, keypath, value) {
      return obj[keypath] = value;
    }
  };

  Rivets.factory = function(sightglass) {
    Rivets.sightglass = sightglass;
    Rivets["public"]._ = Rivets;
    return Rivets["public"];
  };

  if (typeof ( true && module !== null ? module.exports : void 0) === 'object') {
    module.exports = Rivets.factory(__webpack_require__(/*! sightglass */ "./node_modules/sightglass/index.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! sightglass */ "./node_modules/sightglass/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(sightglass) {
      return this.rivets = Rivets.factory(sightglass);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/sightglass/index.js":
/*!******************************************!*\
  !*** ./node_modules/sightglass/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  // Public sightglass interface.
  function sightglass(obj, keypath, callback, options) {
    return new Observer(obj, keypath, callback, options)
  }

  // Batteries not included.
  sightglass.adapters = {}

  // Constructs a new keypath observer and kicks things off.
  function Observer(obj, keypath, callback, options) {
    this.options = options || {}
    this.options.adapters = this.options.adapters || {}
    this.obj = obj
    this.keypath = keypath
    this.callback = callback
    this.objectPath = []
    this.update = this.update.bind(this)
    this.parse()

    if (isObject(this.target = this.realize())) {
      this.set(true, this.key, this.target, this.callback)
    }
  }

  // Tokenizes the provided keypath string into interface + path tokens for the
  // observer to work with.
  Observer.tokenize = function(keypath, interfaces, root) {
    var tokens = []
    var current = {i: root, path: ''}
    var index, chr

    for (index = 0; index < keypath.length; index++) {
      chr = keypath.charAt(index)

      if (!!~interfaces.indexOf(chr)) {
        tokens.push(current)
        current = {i: chr, path: ''}
      } else {
        current.path += chr
      }
    }

    tokens.push(current)
    return tokens
  }

  // Parses the keypath using the interfaces defined on the view. Sets variables
  // for the tokenized keypath as well as the end key.
  Observer.prototype.parse = function() {
    var interfaces = this.interfaces()
    var root, path

    if (!interfaces.length) {
      error('Must define at least one adapter interface.')
    }

    if (!!~interfaces.indexOf(this.keypath[0])) {
      root = this.keypath[0]
      path = this.keypath.substr(1)
    } else {
      if (typeof (root = this.options.root || sightglass.root) === 'undefined') {
        error('Must define a default root adapter.')
      }

      path = this.keypath
    }

    this.tokens = Observer.tokenize(path, interfaces, root)
    this.key = this.tokens.pop()
  }

  // Realizes the full keypath, attaching observers for every key and correcting
  // old observers to any changed objects in the keypath.
  Observer.prototype.realize = function() {
    var current = this.obj
    var unreached = false
    var prev

    this.tokens.forEach(function(token, index) {
      if (isObject(current)) {
        if (typeof this.objectPath[index] !== 'undefined') {
          if (current !== (prev = this.objectPath[index])) {
            this.set(false, token, prev, this.update)
            this.set(true, token, current, this.update)
            this.objectPath[index] = current
          }
        } else {
          this.set(true, token, current, this.update)
          this.objectPath[index] = current
        }

        current = this.get(token, current)
      } else {
        if (unreached === false) {
          unreached = index
        }

        if (prev = this.objectPath[index]) {
          this.set(false, token, prev, this.update)
        }
      }
    }, this)

    if (unreached !== false) {
      this.objectPath.splice(unreached)
    }

    return current
  }

  // Updates the keypath. This is called when any intermediary key is changed.
  Observer.prototype.update = function() {
    var next, oldValue

    if ((next = this.realize()) !== this.target) {
      if (isObject(this.target)) {
        this.set(false, this.key, this.target, this.callback)
      }

      if (isObject(next)) {
        this.set(true, this.key, next, this.callback)
      }

      oldValue = this.value()
      this.target = next

      // Always call callback if value is a function. If not a function, call callback only if value changed
      if (this.value() instanceof Function || this.value() !== oldValue) this.callback()
    }
  }

  // Reads the current end value of the observed keypath. Returns undefined if
  // the full keypath is unreachable.
  Observer.prototype.value = function() {
    if (isObject(this.target)) {
      return this.get(this.key, this.target)
    }
  }

  // Sets the current end value of the observed keypath. Calling setValue when
  // the full keypath is unreachable is a no-op.
  Observer.prototype.setValue = function(value) {
    if (isObject(this.target)) {
      this.adapter(this.key).set(this.target, this.key.path, value)
    }
  }

  // Gets the provided key on an object.
  Observer.prototype.get = function(key, obj) {
    return this.adapter(key).get(obj, key.path)
  }

  // Observes or unobserves a callback on the object using the provided key.
  Observer.prototype.set = function(active, key, obj, callback) {
    var action = active ? 'observe' : 'unobserve'
    this.adapter(key)[action](obj, key.path, callback)
  }

  // Returns an array of all unique adapter interfaces available.
  Observer.prototype.interfaces = function() {
    var interfaces = Object.keys(this.options.adapters)

    Object.keys(sightglass.adapters).forEach(function(i) {
      if (!~interfaces.indexOf(i)) {
        interfaces.push(i)
      }
    })

    return interfaces
  }

  // Convenience function to grab the adapter for a specific key.
  Observer.prototype.adapter = function(key) {
    return this.options.adapters[key.i] ||
      sightglass.adapters[key.i]
  }

  // Unobserves the entire keypath.
  Observer.prototype.unobserve = function() {
    var obj

    this.tokens.forEach(function(token, index) {
      if (obj = this.objectPath[index]) {
        this.set(false, token, obj, this.update)
      }
    }, this)

    if (isObject(this.target)) {
      this.set(false, this.key, this.target, this.callback)
    }
  }

  // Check if a value is an object than can be observed.
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null
  }

  // Error thrower.
  function error(message) {
    throw new Error('[sightglass] ' + message)
  }

  // Export module for Node and the browser.
  if ( true && module.exports) {
    module.exports = sightglass
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return this.sightglass = sightglass
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}).call(this);


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){""!==t&&(o?n.classList.add(t):n.className+=(n.className?" ":"")+t)},M=function(n,t){""!==t&&(o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


/***/ }),

/***/ "./node_modules/element-closest/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/element-closest/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function polyfill(window) {
  var ElementPrototype = window.Element.prototype;

  if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (polyfill);
//# sourceMappingURL=index.mjs.map


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js?v=13230713112&enable_js_minification=1";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "RADIANT-SKELETON-THEME:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkRADIANT_SKELETON_THEME"] = self["webpackChunkRADIANT_SKELETON_THEME"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./src/resources/scripts/radiant.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_radiant_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/radiant.scss */ "./src/resources/styles/radiant.scss");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/resources/scripts/Theme.js");
__webpack_require__.p = window.__webpack_public_path__;



smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default().polyfill();
let theme = new _Theme__WEBPACK_IMPORTED_MODULE_2__["default"]();
theme.mountComponents();
document.addEventListener('shopify:section:unload', e => {
  theme.unmountComponents(e.target);
});
document.addEventListener('shopify:section:load', e => {
  theme.mountComponents(e.target);
  theme._ctx.emit('radiant--lazy-load-update');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hmQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVvQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7OztBQzkzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7QUNoYkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL1RoZW1lLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9BZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0FqYXhTZWFyY2guanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0Fubm91bmNlbWVudEJhci5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvQ2xhc3NDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0NvdW50cnlQcm92aW5jZVNlbGVjdG9yLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9IZWFkZXJHcm91cC5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvS2VlblNsaWRlci5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTGF6eUxvYWQuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0xhenlMb2FkVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTG9hZE1vcmUuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0xvY2tTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL01lZ2FNZW51LmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9NZXRob2RDYWxsLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9OdW1iZXJTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvT2JqZWN0Rml0LmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9RdWlja2xpbmsuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1JlY29tbWVuZGVkUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1NldENTU1Zhci5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvU2lkZUNhcnQuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1NsaWRlVG9nZ2xlLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9TbGlkZVRvZ2dsZUdyb3VwLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9TdGlja3lFbGVtLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9TdGlja3lQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2luaGVyaXRlZC9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9saWIvQWpheEFwaS5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2xpYi9IZWxwZXJzLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvbGliL1F1ZXVlLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3N0eWxlcy9yYWRpYW50LnNjc3MiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1icm93c2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZXZ4L2Rpc3QvZXZ4LmVzLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMva2Vlbi1zbGlkZXIva2Vlbi1zbGlkZXIuZXMuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9yaXZldHMvZGlzdC9yaXZldHMuanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9zaWdodGdsYXNzL2luZGV4LmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvc21vb3Roc2Nyb2xsLXBvbHlmaWxsL2Rpc3Qvc21vb3Roc2Nyb2xsLmpzIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1sYXp5bG9hZC9kaXN0L2xhenlsb2FkLm1pbi5qcyIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xvc2VzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vUkFESUFOVC1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9SQURJQU5ULVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1JBRElBTlQtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvcmFkaWFudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdldngnXG5pbXBvcnQgJ2VsZW1lbnQtY2xvc2VzdCdcbmltcG9ydCBRdWV1ZSBmcm9tICcuL2xpYi9RdWV1ZSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vbGliL0hlbHBlcnMnXG5cbmNvbnN0IHsgZGV0ZWN0IH0gPSByZXF1aXJlKCdkZXRlY3QtYnJvd3NlcicpO1xuXG5pbXBvcnQgTWV0aG9kQ2FsbCBmcm9tICcuL2NvbXBvbmVudHMvTWV0aG9kQ2FsbCdcbmltcG9ydCBNZWdhTWVudSBmcm9tICcuL2NvbXBvbmVudHMvTWVnYU1lbnUnXG5pbXBvcnQgQ2xhc3NDaGFuZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NsYXNzQ2hhbmdlJ1xuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZVRvZ2dsZSdcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9jb21wb25lbnRzL0FkZFRvQ2FydCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0J1xuaW1wb3J0IE51bWJlclNlbGVjdG9yIGZyb20gJy4vY29tcG9uZW50cy9OdW1iZXJTZWxlY3RvcidcbmltcG9ydCBDYXJ0IGZyb20gJy4vY29tcG9uZW50cy9DYXJ0J1xuaW1wb3J0IFN0aWNreUVsZW0gZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreUVsZW0nXG5pbXBvcnQgTG9hZE1vcmUgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRNb3JlJ1xuaW1wb3J0IExvY2tTY3JvbGwgZnJvbSAnLi9jb21wb25lbnRzL0xvY2tTY3JvbGwnXG5pbXBvcnQgT2JqZWN0Rml0IGZyb20gJy4vY29tcG9uZW50cy9PYmplY3RGaXQnXG5pbXBvcnQgU2lkZUNhcnQgZnJvbSAnLi9jb21wb25lbnRzL1NpZGVDYXJ0J1xuaW1wb3J0IFF1aWNrbGluayBmcm9tICcuL2NvbXBvbmVudHMvUXVpY2tsaW5rJ1xuaW1wb3J0IEFqYXhTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL0FqYXhTZWFyY2gnXG5pbXBvcnQgU2V0Q1NTVmFyIGZyb20gJy4vY29tcG9uZW50cy9TZXRDU1NWYXInXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAnLi9jb21wb25lbnRzL0xhenlMb2FkJ1xuaW1wb3J0IExhenlMb2FkVHJpZ2dlciBmcm9tICcuL2NvbXBvbmVudHMvTGF6eUxvYWRUcmlnZ2VyJ1xuaW1wb3J0IEtlZW5TbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL0tlZW5TbGlkZXInXG5pbXBvcnQgQ291bnRyeVByb3ZpbmNlU2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50cnlQcm92aW5jZVNlbGVjdG9yJ1xuaW1wb3J0IFNsaWRlVG9nZ2xlR3JvdXAgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlVG9nZ2xlR3JvdXAnXG5pbXBvcnQgQW5ub3VuY2VtZW50QmFyIGZyb20gJy4vY29tcG9uZW50cy9Bbm5vdW5jZW1lbnRCYXInXG5pbXBvcnQgU3RpY2t5UG9zaXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreVBvc2l0aW9uJ1xuaW1wb3J0IFJlY29tbWVuZGVkUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1JlY29tbWVuZGVkUHJvZHVjdHMnXG5pbXBvcnQgSGVhZGVyR3JvdXAgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlckdyb3VwJ1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICAnaGVhZGVyLWdyb3VwJzogSGVhZGVyR3JvdXAsXG4gICdyZWNvbW1lbmRlZC1wcm9kdWN0cyc6IFJlY29tbWVuZGVkUHJvZHVjdHMsXG4gICdzdGlja3ktcG9zaXRpb24nOiBTdGlja3lQb3NpdGlvbixcbiAgJ2Fubm91bmNlbWVudC1iYXInOiBBbm5vdW5jZW1lbnRCYXIsXG4gICdsYXp5LWxvYWQnOiBMYXp5TG9hZCxcbiAgJ2xhenktbG9hZC10cmlnZ2VyJzogTGF6eUxvYWRUcmlnZ2VyLFxuICAnc2V0LWNzcy12YXInOiBTZXRDU1NWYXIsXG4gICdxdWlja2xpbmsnOiBRdWlja2xpbmssXG4gICdrZWVuLXNsaWRlcic6IEtlZW5TbGlkZXIsXG4gICdwcm9kdWN0JzogUHJvZHVjdCxcbiAgJ21ldGhvZC1jYWxsJzogTWV0aG9kQ2FsbCxcbiAgJ21lZ2EtbWVudXMnOiBNZWdhTWVudSxcbiAgJ2NsYXNzLWNoYW5nZSc6IENsYXNzQ2hhbmdlLFxuICAnc2xpZGUtdG9nZ2xlJzogU2xpZGVUb2dnbGUsXG4gICd0b2dnbGUtZ3JvdXAnOiBTbGlkZVRvZ2dsZUdyb3VwLFxuICAnYWRkLXRvLWNhcnQnOiBBZGRUb0NhcnQsXG4gICdudW1iZXItc2VsZWN0b3InOiBOdW1iZXJTZWxlY3RvcixcbiAgJ2NhcnQnOiBDYXJ0LFxuICAnc3RpY2t5JzogU3RpY2t5RWxlbSxcbiAgJ2xvYWQtbW9yZSc6IExvYWRNb3JlLFxuICAnbG9jay1zY3JvbGwnOiBMb2NrU2Nyb2xsLFxuICAnb2JqZWN0LWZpdCc6IE9iamVjdEZpdCxcbiAgJ3NpZGUtY2FydCc6IFNpZGVDYXJ0LFxuICAnYWpheC1zZWFyY2gnOiBBamF4U2VhcmNoLFxuICAnY291bnRyeS1wcm92aW5jZS1zZWxlY3Rvcic6IENvdW50cnlQcm92aW5jZVNlbGVjdG9yXG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHR1cmJvbGlua3M6IGZhbHNlXG59XG5cbmNvbnN0IHN0YXRlID0ge1xuICBldmVudFF1ZXVlOiBuZXcgUXVldWUoKSxcbiAgYWpheENhY2hlOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yIChjdHggPSBzdGF0ZSwgcGFzc2VkT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi5wYXNzZWRPcHRpb25zLCAuLi5vcHRpb25zfVxuICAgIGxldCB0aGVtZUluZm9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGhlbWUtaW5mb3JtYXRpb25dJylcbiAgICBpZiAodGhlbWVJbmZvRWxlbSkge1xuICAgICAgY3R4ID0gey4uLmN0eCwgLi4uSlNPTi5wYXJzZSh0aGVtZUluZm9FbGVtLmlubmVySFRNTCl9XG4gICAgfVxuICAgIHRoaXMuX2N0eCA9IGNyZWF0ZShjdHgpXG4gICAgdGhpcy5fdmlld3BvcnRFdmVudCgpXG4gICAgdGhpcy5fYm9keVNjcm9sbExpc3RlbigpXG4gICAgdGhpcy5fcnVuSG9va3MoKVxuICAgIHRoaXMuX2Jyb3dzZXJEZXRlY3QoKVxuICAgIHRoaXMuX2NvbXBvbmVudHMgPSBbXVxuICB9XG5cbiAgX2Jyb3dzZXJEZXRlY3QgKCkge1xuICAgIGNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKVxuICAgIGlmIChicm93c2VyKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYGJyb3dzZXItLSR7SGVscGVycy5oYW5kbGVpemUoYnJvd3Nlci5uYW1lKX1gKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGBvcy0tJHtIZWxwZXJzLmhhbmRsZWl6ZShicm93c2VyLm9zKX1gKVxuICAgIH1cbiAgfVxuXG4gIF92aWV3cG9ydEV2ZW50ICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5fdmlld3BvcnRMb2dpYygpXG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgdGhpcy5fdmlld3BvcnRMb2dpYygpXG4gIH1cblxuICBfYm9keVNjcm9sbExpc3RlbiAoKSB7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmJvZHlcbiAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIHN1YnRyZWU6IGZhbHNlIH07XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Nyb2xsLWdhcC1yaWdodCcsZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5wYWRkaW5nUmlnaHQpXG4gICAgfTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiAgfVxuXG4gIF92aWV3cG9ydExvZ2ljICgpIHtcbiAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgIGxldCB2dyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAwLjAxO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZ3JywgYCR7dnd9cHhgKTtcbiAgfVxuXG4gIG1vdW50Q29tcG9uZW50cyAoY29udGFpbmVyID0gZG9jdW1lbnQpIHtcbiAgICBmb3IgKGxldCBjb21wb25lbnRLZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoY29tcG9uZW50S2V5KSkge1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBgW2RhdGEtJHtjb21wb25lbnRLZXl9XWBcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIGZvciAobGV0IGVsZW0gb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50KGNvbXBvbmVudEtleSwgY29tcG9uZW50S2V5LCBlbGVtKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5fX1RoZW1lID0gdGhpc1xuICAgIHdpbmRvdy5fX1RoZW1lQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudHNcblxuICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1tb3VudGVkJylcbiAgfVxuXG4gIHVubW91bnRDb21wb25lbnRzIChjb250YWluZXIgPSBkb2N1bWVudCkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLl9jb21wb25lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fY29tcG9uZW50c1tpXVxuXG4gICAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtKSkge1xuICAgICAgICBsZXQgY29tcG9uZW50T2JqID0gY29tcG9uZW50LmNvbXBvbmVudFxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudE9iai51bm1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY29tcG9uZW50T2JqLnVubW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgY29tcG9uZW50T2JqID0gbnVsbFxuICAgICAgICB0aGlzLl9jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdW50Q29tcG9uZW50ICh0eXBlLCBkYXRhQXR0ciwgZWxlbSkge1xuICAgIGxldCBvcHRpb25TdHIgPSBlbGVtLmdldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyfWApLnRyaW0oKVxuICAgIGxldCBvcHRpb25zID0ge31cbiAgICBpZiAob3B0aW9uU3RyLnN0YXJ0c1dpdGgoJ3snKSB8fCBvcHRpb25TdHIuc3RhcnRzV2l0aCgnWycpKSB7XG4gICAgICBvcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25TdHIpXG4gICAgfVxuICAgIGxldCBjb21wSW5zdGFuY2UgPSBuZXcgY29tcG9uZW50c1t0eXBlXShlbGVtLCB0aGlzLCBvcHRpb25zLCB0aGlzLl9jdHgpXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBlbGVtOiBlbGVtLFxuICAgICAgaWQ6IGNvbXBJbnN0YW5jZS5fb3B0aW9ucy5pZCxcbiAgICAgIGNvbXBvbmVudDogY29tcEluc3RhbmNlXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICBjb21wSW5zdGFuY2UubW91bnQoKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgLS0tLS1FUlJPUiBJTiBDT01QT05FTlQtLS0tLSBcXG50eXBlOiAke3R5cGV9XFxuZWxlbWVudCBhbmQgc3RhY2sgdHJhY2UgYmVsb3c6YClcbiAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICBnZXRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50IChpZCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzLmZpbmQoY29tcG9uZW50ID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpXG4gIH1cblxuICBnZXRDb21wb25lbnRCeUVsZW0gKGVsZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQuZWxlbSA9PT0gZWxlbSlcbiAgfVxuXG4gIF9ydW5Ib29rcyAoKSB7XG4gICAgdGhpcy5fY3R4Lm9uKCdjYXJ0LWl0ZW0tYWRkZWQnLCBzdGF0ZSA9PiB7XG4gICAgICBpZiAod2luZG93LnBpbnRyaykge1xuICAgICAgICBwaW50cmsoJ3RyYWNrJywgJ2FkZHRvY2FydCcsIHtcbiAgICAgICAgICB2YWx1ZTogc3RhdGUubGFzdEl0ZW1BZGRlZC5pdGVtLnByaWNlIC8gMTAwLjAwLFxuICAgICAgICAgIG9yZGVyX3F1YW50aXR5OiBzdGF0ZS5sYXN0SXRlbUFkZGVkLnF1YW50aXR5IFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5mYnEpIHtcbiAgICAgICAgZmJxKCd0cmFjaycsICdBZGRUb0NhcnQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5pbXBvcnQgQWpheEFwaSBmcm9tICcuLi9saWIvQWpheEFwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9DYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICAgIHRoaXMuX29wdGlvbnMgPSB7Li4ue1xuICAgICAgcmVkaXJlY3Q6IG51bGwsXG4gICAgICBhZGRpbmdUZXh0OiAnQWRkaW5nLi4uJyxcbiAgICAgIGFkZGVkVGV4dDogbnVsbCxcbiAgICAgIHdhaXRGb3I6IDE1MDAsXG4gICAgICBvcGVuU2lkZUNhcnQ6IHRydWVcbiAgICB9LCAuLi50aGlzLl9vcHRpb25zfVxuICAgIHRoaXMuX3ZhcmlhbnRJZEVsZW0gPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKVxuICAgIHRoaXMuX3NlbGxpbmdQbGFuSWRFbGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzZWxsaW5nX3BsYW5cIl0nKVxuXG4gICAgdGhpcy5fcXVhbnRpdHlFbGVtID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInF1YW50aXR5XCJdJylcbiAgICB0aGlzLl9zdWJtaXRFbGVtcyA9IHRoaXMuX2VsZW0ubm9kZU5hbWUgPT09ICdGT1JNJyA/IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJzdWJtaXRcIl0nKSA6IFt0aGlzLl9lbGVtXVxuICAgIHRoaXMuX3Byb3BlcnR5RWxlbXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXj1cInByb3BlcnRpZXNcIl0nKVxuXG4gICAgdGhpcy5fZXh0cmFQcm9kdWN0c0lucHV0ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1leHRyYS1wcm9kdWN0c10nKVxuXG4gICAgdGhpcy5fZ2xvYmFsRXh0cmFQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV4dHJhLWF0Yy1wcm9kdWN0c10nKSA/IEpTT04ucGFyc2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXh0cmEtYXRjLXByb2R1Y3RzXScpLmlubmVySFRNTCkgOiBbXVxuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIHRoaXMuX2FkZExpc3RlbmVycygpXG4gIH1cblxuICBfZ2V0UHJvcGVydGllcyAoKSB7XG4gICAgdGhpcy5fcHJvcGVydHlFbGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWVePVwicHJvcGVydGllc1wiXScpXG4gICAgbGV0IHByb3BlcnRpZXMgPSB7fVxuICAgIGxldCBwcm9wRWxlbXMgPSBBcnJheS5mcm9tKHRoaXMuX3Byb3BlcnR5RWxlbXMpLmZpbHRlcihlbGVtID0+ICFlbGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtLnZhbHVlLmxlbmd0aCA+IDApXG4gICAgZm9yIChsZXQgZWxlbSBvZiBwcm9wRWxlbXMpIHtcbiAgICAgIHByb3BlcnRpZXNbZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5tYXRjaCgvXnByb3BlcnRpZXNcXFsoLispXFxdJC8pWzFdXSA9IGVsZW0udmFsdWVcbiAgICB9XG5cbiAgICBpZiAocHJvcEVsZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9lbGVtLmRhdGFzZXQucHJvcGVydGllcykge1xuICAgICAgcHJvcGVydGllcyA9IEpTT04ucGFyc2UodGhpcy5fZWxlbS5kYXRhc2V0LnByb3BlcnRpZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNcbiAgfVxuXG4gIF9hZGRMaXN0ZW5lcnMgKCkge1xuICAgIGxldCBldmVudCA9IG51bGxcbiAgICBpZiAodGhpcy5fZWxlbS5ub2RlTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICBldmVudCA9ICdzdWJtaXQnXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50ID0gJ2NsaWNrJ1xuICAgIH0gXG4gICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBhc3luYyBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgLy9sZXQgb3JpZ2luYWxUZXh0ID0gdGhpcy5fc3VibWl0RWxlbS5pbm5lckhUTUxcbiAgICAgIC8vdGhpcy5fc3VibWl0RWxlbS5pbm5lckhUTUwgPSB0aGlzLl9vcHRpb25zLmFkZGluZ1RleHRcbiAgICAgIGZvciAobGV0IGVsZW0gb2YgdGhpcy5fc3VibWl0RWxlbXMpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdyYWRpYW50LS1hZGRpbmctdG8tY2FydCcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmFkZGVkVGV4dCkge1xuICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX3N1Ym1pdEVsZW1zKSB7XG4gICAgICAgICAgZWxlbS5zdHlsZS5taW5XaWR0aCA9IGAke2VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHZhcmlhbnRJZCA9IHRoaXMuX3ZhcmlhbnRJZEVsZW0gPyB0aGlzLl92YXJpYW50SWRFbGVtLnZhbHVlIDogdGhpcy5fZWxlbS5kYXRhc2V0LnZhcmlhbnRJZFxuICAgICAgbGV0IHF1YW50aXR5ID0gdGhpcy5fcXVhbnRpdHlFbGVtID8gTnVtYmVyKHRoaXMuX3F1YW50aXR5RWxlbS52YWx1ZSkgOiBOdW1iZXIodGhpcy5fZWxlbS5kYXRhc2V0LnF1YW50aXR5KVxuICAgICAgbGV0IHNlbGxpbmdfcGxhbiA9IHRoaXMuX2VsZW0uZGF0YXNldC5zZWxsaW5nUGxhbiB8fCAnJ1xuXG4gICAgICBpZiAodGhpcy5fc2VsbGluZ1BsYW5JZEVsZW1zKSB7XG4gICAgICAgIGZvciAobGV0IGVsZW0gb2YgdGhpcy5fc2VsbGluZ1BsYW5JZEVsZW1zKSB7XG4gICAgICAgICAgaWYgKGVsZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsbGluZ19wbGFuID0gZWxlbS52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMuX2dldFByb3BlcnRpZXMoKVxuXG4gICAgICBsZXQgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNlbGxpbmdfcGxhbjogc2VsbGluZ19wbGFuXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgICAgLy8gQWRkIGV4dHJhIHByb2R1Y3RzIHRvIGV2ZXJ5IGF0YyAoaWYgcXVhbnRpdHkgaXMgbGVzcylcbiAgICAgIGlmICh0aGlzLl9nbG9iYWxFeHRyYVByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICBsZXQgY2FydCA9IGF3YWl0IEFqYXhBcGkuZ2V0Q2FydCgpXG4gICAgICAgIGxldCBnbG9iYWxQcm9kdWN0c1RvQWRkID0gdGhpcy5fZ2xvYmFsRXh0cmFQcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW0gPSBjYXJ0Lml0ZW1zLmZpbmQoaXRlbSA9PiBgJHtpdGVtLnZhcmlhbnRfaWR9YCA9PT0gYCR7cHJvZHVjdC5pZH1gKVxuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucXVhbnRpdHkgPj0gcHJvZHVjdC5xdWFudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pLm1hcChwcm9kdWN0ID0+IHsgXG4gICAgICAgICAgbGV0IGl0ZW0gPSBjYXJ0Lml0ZW1zLmZpbmQoaXRlbSA9PiBgJHtpdGVtLnZhcmlhbnRfaWR9YCA9PT0gYCR7cHJvZHVjdC5pZH1gKVxuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucXVhbnRpdHkgPCBwcm9kdWN0LnF1YW50aXR5KSB7XG4gICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5IC09IGl0ZW0ucXVhbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb2R1Y3RcbiAgICAgICAgfSlcblxuICAgICAgICBpdGVtcyA9IFsuLi5nbG9iYWxQcm9kdWN0c1RvQWRkLCAuLi5pdGVtc11cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2V4dHJhUHJvZHVjdHNJbnB1dCAmJiB0aGlzLl9leHRyYVByb2R1Y3RzSW5wdXQudmFsdWUpIHtcbiAgICAgICAgbGV0IGV4dHJhUHJvZHVjdHMgPSBKU09OLnBhcnNlKHRoaXMuX2V4dHJhUHJvZHVjdHNJbnB1dC52YWx1ZSlcblxuICAgICAgICBmb3IgKGxldCBwcm9kIG9mIGV4dHJhUHJvZHVjdHMpIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBwcm9kLmlkLFxuICAgICAgICAgICAgcXVhbnRpdHk6IE51bWJlcihwcm9kLnF1YW50aXR5IHx8IDEpLFxuICAgICAgICAgICAgcHJvcGVydGllczogcHJvZC5wcm9wZXJ0aWVzIHx8IHt9LFxuICAgICAgICAgICAgc2VsbGluZ19wbGFuOiBwcm9kLnNlbGxpbmdfcGxhblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2hvd0NvbXBsZXRlUm91dGluZSkge1xuICAgICAgICB0aGlzLl9jdHguZW1pdCgnc2hvdy1jb21wbGV0ZS1yb3V0aW5lLXBvcHVwJywgbnVsbCwgeyBoYW5kbGU6IHRoaXMuX29wdGlvbnMuaGFuZGxlIH0pXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgQWpheEFwaS5hZGRUb0NhcnQoe1xuICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICB9LCB0aGlzLl9jdHguZ2V0U3RhdGUoKSlcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEuaXRlbXMpIHtcbiAgICAgICAgICBsZXQgbWF0Y2hpbmcgPSBpdGVtcy5maW5kKGl0ID0+IGAke2l0LmlkfWAgPT09IGAke2l0ZW0udmFyaWFudF9pZH1gKVxuICAgICAgICAgIHRoaXMuX2N0eC5lbWl0KCdjYXJ0LWF0YycsIG51bGwsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICBxdWFudGl0eTogbWF0Y2hpbmcucXVhbnRpdHksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBtYXRjaGluZy5wcm9wZXJ0aWVzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1JcIilcbiAgICAgICAgY29uc29sZS5lcnJvcihlLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGFsZXJ0KGUucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY3R4LmVtaXQoJ2NhcnQtaXRlbS1hZGRlZCcpXG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLm9wZW5TaWRlQ2FydCkge1xuICAgICAgICB0aGlzLl9jdHguZW1pdCgnc2hvdy1zaWRlLWNhcnQnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX29wdGlvbnMucmVkaXJlY3QpIHtcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiB0aGlzLl9zdWJtaXRFbGVtcykge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncmFkaWFudC0tYWRkaW5nLXRvLWNhcnQnKVxuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncmFkaWFudC0tYWRkZWQtdG8tY2FydCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hZGRlZFRleHQpIHtcbiAgICAgICAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX3N1Ym1pdEVsZW1zKSB7XG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRoaXMuX29wdGlvbnMuYWRkZWRUZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL3RoaXMuX3N1Ym1pdEVsZW0uaW5uZXJIVE1MID0gb3JpZ2luYWxUZXh0XG4gICAgICAgICAgZm9yIChsZXQgZWxlbSBvZiB0aGlzLl9zdWJtaXRFbGVtcykge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpYW50LS1hZGRlZC10by1jYXJ0JylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuX29wdGlvbnMud2FpdEZvcilcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMucmVkaXJlY3QpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5fb3B0aW9ucy5yZWRpcmVjdFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4U2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICAgIHRoaXMuX3Jlc3BvbnNlID0gbnVsbFxuICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtZm9ybV0nKVxuICAgICAgdGhpcy5fdHJpZ2dlcnMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFqYXgtc2VhcmNoLXRyaWdnZXJdJylcbiAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hamF4LXNlYXJjaC1pbnB1dF0nKVxuICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtcmVzdWx0c10nKVxuICAgICAgdGhpcy5fY2xlYXJUcmlnZ2VyID0gbnVsbFxuICAgICAgdGhpcy5fZXhpdFRyaWdnZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFqYXgtc2VhcmNoLWV4aXRdJylcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIGFzeW5jIG1vdW50ICgpIHtcbiAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLl9zdWJtaXRGb3JtKClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIEhlbHBlcnMuZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faW5wdXQudmFsdWUubGVuZ3RoICE9PSAgMCkge1xuICAgICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0oKVxuICAgICAgICB9XG4gICAgICB9LCAzMDApKVxuXG4gICAgICB0aGlzLl9leGl0VHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnb3BlbicpXG4gICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0oKVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlcnMpIHtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX2VsZW0uc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gdHJpZ2dlci5kYXRhc2V0LmFqYXhTZWFyY2hUcmlnZ2VyXG4gICAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX3N1Ym1pdEZvcm0gKCkge1xuICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHJldHVybiBmYWxzZVxuXG4gICAgICBsZXQgdmFsaWQgPSB0aGlzLl9mb3JtLnJlcG9ydFZhbGlkaXR5KClcblxuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnYWpheC1zZWFyY2gtLWxvYWRpbmcnKVxuXG4gICAgICAgIGxldCB1cmwgPSBgL3NlYXJjaD92aWV3PWFqYXgmcT0ke3RoaXMuX2lucHV0LnZhbHVlfSZ0eXBlPXByb2R1Y3RgXG5cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB1cmwgKz0gYCZvcHRpb25zW3ByZWZpeF09bGFzdGBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpXG4gICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICAgICAgbGV0IGh0bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKVxuICAgICAgICBsZXQgZmV0Y2hlZEVsZW0gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFqYXgtc2VhcmNoLXJlc3VsdHNdJylcbiAgICAgICAgdGhpcy5fcmVzdWx0cy5pbm5lckhUTUwgPSBmZXRjaGVkRWxlbS5pbm5lckhUTUxcblxuICAgICAgICB0aGlzLl9jbGVhclRyaWdnZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFqYXgtc2VhcmNoLWNsZWFyXScpXG5cbiAgICAgICAgdGhpcy5fY2xlYXJUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLl90aGVtZS5tb3VudENvbXBvbmVudHModGhpcy5fcmVzdWx0cylcblxuICAgICAgICB0aGlzLl9jdHguZW1pdCgncmFkaWFudC0tc2Nyb2xsLWxvY2stZWxlbScsIG51bGwsIHRoaXMuX2VsZW0pXG4gICAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1sYXp5LWxvYWQtdXBkYXRlJylcbiAgICAgICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLXF1aWNrbGluay1saXN0ZW4tdG8nLCBudWxsLCB0aGlzLl9yZXN1bHRzKVxuXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWpheC1zZWFyY2gtLWxvYWRpbmcnKVxuICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY2xlYXJTZWFyY2ggKCkge1xuICAgICAgdGhpcy5fcmVzdWx0cy5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSAnJ1xuICAgIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFubm91bmNlbWVudEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICB0aGlzLl9hbm5vdW5jZW1lbnRCYXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5hbm5vdW5jZW1lbnQtYmFyJylcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zdGlja3kpIHtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgICBsZXQgc3RpY2t5ID0gdGhpcy5fYW5ub3VuY2VtZW50QmFyLm9mZnNldFRvcFxuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICAgIHRoaXMuX2Fubm91bmNlbWVudEJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Fubm91bmNlbWVudEJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgICB9XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5pbXBvcnQgcml2ZXRzIGZyb20gJ3JpdmV0cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xuaW1wb3J0IEFqYXhBcGkgZnJvbSAnLi4vbGliL0FqYXhBcGknXG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgdGhpcy5fc2V0dXAoKVxuICAgIHRoaXMuX2RvRWRpdG9yTGlzdGVuZXJzKClcbiAgfVxuXG4gIF9zZXR1cCAoKSB7XG4gICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgIGNhcnQ6IHt9LFxuICAgICAgdXBzZWxsTG9hZGluZzogdHJ1ZSxcbiAgICAgIHNhbXBsZXNMb2FkaW5nOiB0cnVlLFxuICAgICAgaGFzVXBzZWxsOiB0cnVlXG4gICAgfVxuICAgIHRoaXMuX3Vwc2VsbEFkZGVkID0gZmFsc2VcbiAgICB0aGlzLl91cHNlbGxIYW5kbGVzID0gW11cbiAgICB0aGlzLl91cHNlbGxPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXBzZWxsLW9wdGlvbnNdJykgPyBKU09OLnBhcnNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVwc2VsbC1vcHRpb25zXScpLmlubmVySFRNTCkgOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGxpbWl0OiA1LFxuICAgICAgaGFuZGxlczogW11cbiAgICB9XG5cbiAgICB0aGlzLl91cHNlbGxBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FydC11cHNlbGwtaW5uZXJdJylcblxuICAgIHRoaXMuX3Vwc2VsbE9wdGlvbnMuaGFuZGxlcyA9IHRoaXMuX3Vwc2VsbE9wdGlvbnMuaGFuZGxlcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGU6IGl0ZW1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc2hpcHBpbmdUaHJlc2hvbGRPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2hpcHBpbmctdGhyZXNob2xkLW9wdGlvbnNdJykgPyBKU09OLnBhcnNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNoaXBwaW5nLXRocmVzaG9sZC1vcHRpb25zXScpLmlubmVySFRNTCkgOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlckFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2FydC1tb3VudF0nKVxuICAgIHRoaXMuX2pxdWVyeSA9IHdpbmRvdy4kIHx8IG51bGxcblxuICAgIHRoaXMuX2JpbmRzID0gW11cblxuICB9XG4gIFxuICBfYmluZGVycyAoKSB7XG4gICAgcml2ZXRzLmJpbmRlcnNbJ3N0eWxlLSonXSA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5hcmdzWzBdLCB2YWx1ZSlcbiAgICB9XG5cbiAgICByaXZldHMuZm9ybWF0dGVycy5nZXRTcmNTZXQgPSAoc3JjLCBzaXplKSA9PiB7XG4gICAgICByZXR1cm4gc3JjID8gYCR7SGVscGVycy5nZXRTaXplZEltYWdlVXJsKHNyYywgc2l6ZSl9IDF4LCAke0hlbHBlcnMuZ2V0U2l6ZWRJbWFnZVVybChzcmMsIHNpemUgKyAnQDJ4Jyl9IDJ4YCA6ICcnXG4gICAgfSBcblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLmdldFNpemVkSW1hZ2UgPSAoc3JjLCBzaXplKSA9PiB7XG4gICAgICByZXR1cm4gc3JjID8gSGVscGVycy5nZXRTaXplZEltYWdlVXJsKHNyYywgc2l6ZSkgOiAnJ1xuICAgIH1cblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLm1vbmV5ID0gKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gSGVscGVycy5mb3JtYXRNb25leSh2YWx1ZSwgdGhpcy5fY3R4LmdldFN0YXRlKCkpXG4gICAgfVxuXG4gICAgcml2ZXRzLmZvcm1hdHRlcnMubGVuZ3RoID0gKGFycikgPT4ge1xuICAgICAgcmV0dXJuIGFyciA/IGFyci5sZW5ndGggOiAwXG4gICAgfVxuXG4gICAgcml2ZXRzLmZvcm1hdHRlcnMuZXEgPSAodmFsLCB2YWwyKSA9PiB7XG4gICAgICByZXR1cm4gdmFsID09PSB2YWwyXG4gICAgfVxuXG4gICAgcml2ZXRzLmZvcm1hdHRlcnMuZ3QgPSAodmFsLCB2YWwyKSA9PiB7XG4gICAgICByZXR1cm4gdmFsID4gdmFsMlxuICAgIH1cblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLmdldFVybCA9IChoYW5kbGUpID0+IHtcbiAgICAgIHJldHVybiBgL3Byb2R1Y3RzLyR7aGFuZGxlfWBcbiAgICB9XG5cbiAgICByaXZldHMuZm9ybWF0dGVycy5nZXRJbWFnZSA9IChwcm9kdWN0LCB2YXJpYW50KSA9PiB7XG4gICAgICByZXR1cm4gdmFyaWFudC5mZWF0dXJlZF9pbWFnZSA/IHZhcmlhbnQuZmVhdHVyZWRfaW1hZ2Uuc3JjIDogcHJvZHVjdC5mZWF0dXJlZF9pbWFnZVxuICAgIH1cblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLnBsdXJhbGl6ZSA9IChjb3VudCwgb25lLCBtdWx0aXBsZSkgPT4ge1xuICAgICAgcmV0dXJuIGNvdW50ID09PSAxID8gb25lIDogbXVsdGlwbGVcbiAgICB9XG5cbiAgICByaXZldHMuZm9ybWF0dGVycy5zYW1wbGVBZGRlZCA9IChpdGVtKSA9PiB7XG4gICAgICBsZXQgc2FtcGxlSXRlbXMgPSB0aGlzLl9zYW1wbGVJdGVtcygpXG5cbiAgICAgIHJldHVybiBzYW1wbGVJdGVtcy5maW5kKGNJdGVtID0+IGNJdGVtLmhhbmRsZSA9PT0gaXRlbS5oYW5kbGUpXG4gICAgfVxuXG4gICAgcml2ZXRzLmZvcm1hdHRlcnMuZ2V0UHJvcHMgPSAoaXRlbSkgPT4ge1xuICAgICAgbGV0IHByb3BzID0gW11cbiAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQXQoMCkgPT09ICdfJyB8fCBrZXkgPT09ICdQcmV2aWV3JykgY29udGludWVcbiAgICAgICAgICBsZXQgbmFtZSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnByb3BlcnRpZXNba2V5XVxuXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20nKSkge1xuICAgICAgICAgIHZhbHVlID0gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiAvPmBcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLnB1c2goeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wc1xuICAgIH1cblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLmhhc1ZhcmlhbnRzID0gKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnZhcmlhbnRzICYmIGl0ZW0udmFyaWFudHNbMF0udGl0bGUgIT09ICdEZWZhdWx0IFRpdGxlJ1xuICAgIH1cblxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzLmhhc0ZyZWVTaGlwcGluZyA9IChjb3VudCkgPT4ge1xuICAgICAgbGV0IHRocmVzaG9sZCA9IHRoaXMuX3NoaXBwaW5nVGhyZXNob2xkT3B0aW9ucy50aHJlc2hvbGQgKiAxMDAuMDBcbiAgICAgIHJldHVybiBjb3VudCA+PSB0aHJlc2hvbGRcbiAgICB9XG4gICAgXG4gICAgcml2ZXRzLmZvcm1hdHRlcnMuZ2V0U2hpcHBpbmdOb3RpY2UgPSAoY291bnQpID0+IHtcbiAgICAgIGxldCB0aHJlc2hvbGQgPSB0aGlzLl9zaGlwcGluZ1RocmVzaG9sZE9wdGlvbnMudGhyZXNob2xkICogMTAwLjAwXG4gICAgICBsZXQgdW5kZXIgPSB0aGlzLl9zaGlwcGluZ1RocmVzaG9sZE9wdGlvbnMudW5kZXJcbiAgICAgIGxldCByZWFjaGVkTm90aWNlID0gdGhpcy5fc2hpcHBpbmdUaHJlc2hvbGRPcHRpb25zLnJlYWNoZWRcblxuICAgICAgbGV0IHJlbWFpbmluZyA9IHRocmVzaG9sZCAtIGNvdW50XG4gICAgICB1bmRlciA9IHVuZGVyLnJlcGxhY2UoJ1t4XScsIEhlbHBlcnMuZm9ybWF0TW9uZXkocmVtYWluaW5nLCB0aGlzLl9jdHguZ2V0U3RhdGUoKSkpXG4gICAgICByZXR1cm4gY291bnQgPj0gdGhyZXNob2xkID8gcmVhY2hlZE5vdGljZSA6IHVuZGVyXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbW91bnQgKCkge1xuICAgIHRoaXMuX2RhdGEuY2FydCA9IGF3YWl0IHRoaXMucHJlcGFyZURhdGEoSlNPTi5wYXJzZSh0aGlzLl9lbGVtLmlubmVySFRNTCkpXG4gICAgdGhpcy5fcHJlcGFyZVVwc2VsbERhdGEoKVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuQk9MRCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgJiYgdHlwZW9mIHdpbmRvdy5CT0xELmNvbW1vbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgJiYgdHlwZW9mIHdpbmRvdy5CT0xELmNvbW1vbi5jYXJ0RG9jdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAvLyBOT1RFOiBcImNhcnRcIiBzaG91bGQgYmUgdGhlIHZhcmlhYmxlIGNvbnRhaW5pbmcgdGhlIGNhcnQgSlNPTiBkYXRhXG4gICAgICAgICB0aGlzLl9kYXRhLmNhcnQgPSB3aW5kb3cuQk9MRC5jb21tb24uY2FydERvY3Rvci5maXgodGhpcy5fZGF0YS5jYXJ0KTtcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgdGhpcy5fZGF0YS5jYXJ0QmFja3VwID0gey4uLnRoaXMuX2RhdGEuY2FydH1cblxuICAgICAgIHRoaXMuX2N0eC5vbignY2FydC1pdGVtLWFkZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLl9kYXRhLmNhcnQubG9hZGluZyA9IHRydWVcbiAgICAgICAgYXdhaXQgdGhpcy5fcmVmcmVzaCgpXG4gICAgICAgIHRoaXMuX2N0eC5lbWl0KCdjYXJ0LWl0ZW0tYWRkZWQtLXJlZnJlc2hlZCcpXG4gICAgICB9KVxuXG4gICAgICAgdGhpcy5fYmluZGVycygpXG4gICAgICAgdGhpcy5fcmVuZGVyKClcblxuICAgICAgIHdpbmRvdy5LbGFybmFPbnNpdGVTZXJ2aWNlID0gd2luZG93LktsYXJuYU9uc2l0ZVNlcnZpY2UgfHwgW11cbiAgICAgICB3aW5kb3cuS2xhcm5hT25zaXRlU2VydmljZS5wdXNoKHsgZXZlbnROYW1lOiAncmVmcmVzaC1wbGFjZW1lbnRzJyB9KVxuXG4gICAgICAgaWYod2luZG93LkJPTEQgJiYgQk9MRC5jb21tb24gJiYgQk9MRC5jb21tb24uZXZlbnRFbWl0dGVyICYmIHR5cGVvZiBCT0xELmNvbW1vbi5ldmVudEVtaXR0ZXIuZW1pdCA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgIEJPTEQuY29tbW9uLmV2ZW50RW1pdHRlci5lbWl0KCdCT0xEX0NPTU1PTl9jYXJ0X2xvYWRlZCcsIHRoaXMuX2RhdGEuY2FydCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LlN3eW1DYWxsYmFja3MpIHtcbiAgICAgICAgd2luZG93LlN3eW1DYWxsYmFja3MgPSBbXTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5Td3ltQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuICAgICAgICB2YXIgcmVwbGF5QWRkVG9DYXJ0T3JpZ2luYWxGbiA9IF9zd2F0LnJlcGxheUFkZFRvQ2FydDtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpc1xuICAgICAgICB3aW5kb3cuX3N3YXQucmVwbGF5QWRkVG9DYXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIC8vc2F2ZSB0aGUgc3VjY2Vzc0NhbGxiYWNrXG4gICAgICAgICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tGbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgYXJndW1lbnRzWzJdID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2tGbikge1xuICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrRm4oZGF0YSk7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZS5fY3R4LmVtaXQoJ2NhcnQtaXRlbS1hZGRlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW1BZGRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogaXRlbS5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL2NhbGwgdGhlIG9yZ2luYWwgZm5cbiAgICAgICAgICAgICAgcmVwbGF5QWRkVG9DYXJ0T3JpZ2luYWxGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHByZXBhcmVEYXRhIChkYXRhKSB7XG4gICAgICB0aGlzLl91cHNlbGxIYW5kbGVzID0gW11cblxuICAgICAgbGV0IHByb21pc2VzID0gW11cblxuICAgICAgZm9yIChjb25zdCBbaSwgaXRlbV0gb2YgZGF0YS5pdGVtcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSAoIGFzeW5jIChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpICsgMVxuICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgQWpheEFwaS5nZXRDdXN0b21Qcm9kdWN0KGl0ZW0uaGFuZGxlLCB0aGlzLl9jdHguZ2V0U3RhdGUoKSlcbiAgICAgICAgICBpdGVtLnByb2R1Y3QgPSBkYXRhLnByb2R1Y3RcbiAgICAgICAgICBpdGVtLnByb2R1Y3QubWV0YWZpZWxkcyA9IGRhdGEubWV0YWZpZWxkc1xuICAgICAgICAgIGl0ZW0ub3JpZ2luYWxJdGVtID0geyAuLi5pdGVtIH1cblxuICAgICAgICAgIGl0ZW0udmFyaWFudCA9IGl0ZW0ucHJvZHVjdC52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gdmFyaWFudC5pZCA9PT0gaXRlbS52YXJpYW50X2lkKVxuXG4gICAgICAgICAgcmVzKClcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgZGF0YS5sb2FkaW5nID0gZmFsc2VcblxuICAgICAgdGhpcy5fdXBzZWxsSGFuZGxlcyA9IHRoaXMuX3Vwc2VsbE9wdGlvbnMuaGFuZGxlc1xuXG4gICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzXG4gICAgICAgIHRoaXMuX3Vwc2VsbEhhbmRsZXMgPSB0aGlzLl91cHNlbGxIYW5kbGVzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgb3RoZXJJbmRleCA9IHRoaXMuX3Vwc2VsbEhhbmRsZXMubWFwKGl0ZW0gPT4gaXRlbS5oYW5kbGUpLmluZGV4T2YoaXRlbS5oYW5kbGUpXG4gICAgICAgICAgcmV0dXJuIG90aGVySW5kZXggPT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJlbW92ZSBhbHJlYWR5IGluIGNhcnRcbiAgICAgICAgdGhpcy5fdXBzZWxsSGFuZGxlcyA9IHRoaXMuX3Vwc2VsbEhhbmRsZXMuZmlsdGVyKG9iaiA9PiB7XG4gICAgICAgICAgaWYgKG9iai52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHJldHVybiAhZGF0YS5pdGVtcy5zb21lKGl0ZW0gPT4gb2JqLnZhcmlhbnRfaWQgPT09IGl0ZW0udmFyaWFudF9pZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICFkYXRhLml0ZW1zLnNvbWUoaXRlbSA9PiBvYmouaGFuZGxlID09PSBpdGVtLmhhbmRsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLl91cHNlbGxPcHRpb25zLmxpbWl0ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Vwc2VsbEhhbmRsZXMgPSB0aGlzLl91cHNlbGxIYW5kbGVzLnNsaWNlKDAsIHRoaXMuX3Vwc2VsbE9wdGlvbnMubGltaXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhLmhhc1Vwc2VsbCA9IHRoaXMuX3Vwc2VsbEhhbmRsZXMubGVuZ3RoID4gMCAmJiB0aGlzLl91cHNlbGxPcHRpb25zLmVuYWJsZWQgJiYgdGhpcy5fdXBzZWxsT3B0aW9ucy5saW1pdCA+IDBcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkNBUlQgSVRFTVNcIilcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy5fZGF0YSlcblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuXG4gICAgICBhc3luYyBfcHJlcGFyZVVwc2VsbERhdGEgKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Vwc2VsbE9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEudXBzZWxsTG9hZGluZyA9IHRydWVcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGhhbmRsZU9iaiBvZiB0aGlzLl91cHNlbGxIYW5kbGVzKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGxldCBoYW5kbGUgPSBoYW5kbGVPYmouaGFuZGxlXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgQWpheEFwaS5nZXRDdXN0b21Qcm9kdWN0KGhhbmRsZSwgdGhpcy5fY3R4LmdldFN0YXRlKCkpXG4gICAgICAgICAgICAgIGxldCBpdGVtID0gZGF0YS5wcm9kdWN0XG4gICAgICAgICAgICAgIGl0ZW0ubWV0YWZpZWxkcyA9IGRhdGEubWV0YWZpZWxkc1xuICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBkYXRhLm9wdGlvbnNcblxuICAgICAgICAgICAgICBpZiAoaGFuZGxlT2JqLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudFZhcmlhbnQgPSBpdGVtLnZhcmlhbnRzLmZpbmQodmFyaWFudCA9PiBOdW1iZXIodmFyaWFudC5pZCkgPT0gTnVtYmVyKGhhbmRsZU9iai52YXJpYW50SWQpKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGhhbmRsZU9iai5wcmVmZXJyZWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50VmFyaWFudCA9IGl0ZW0udmFyaWFudHMuZmluZCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YXJpYW50Lm9wdGlvbnMuZXZlcnkoIG9wdGlvbiA9PiBoYW5kbGVPYmoucHJlZmVycmVkT3B0aW9ucy5pbmNsdWRlcyhvcHRpb24pKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY3VycmVudFZhcmlhbnQpIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudFZhcmlhbnQgPSBpdGVtLnZhcmlhbnRzLmZpbmQodmFyaWFudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YXJpYW50Lm9wdGlvbnMuc29tZSggb3B0aW9uID0+IGhhbmRsZU9iai5wcmVmZXJyZWRPcHRpb25zLmluY2x1ZGVzKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXRlbS5jdXJyZW50VmFyaWFudCB8fCAhaXRlbS5jdXJyZW50VmFyaWFudC5hdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnRWYXJpYW50ID0gaXRlbS52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gdmFyaWFudC5hdmFpbGFibGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXRlbS5xdWFudGl0eSA9IDFcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJlbnRWYXJpYW50ICYmIGl0ZW0ub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBpdGVtLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZFZhbHVlID0gaXRlbS5jdXJyZW50VmFyaWFudC5vcHRpb25zW29wdGlvbi5wb3NpdGlvbiAtIDFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW0uYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXMoKVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgIHJlcygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGxldCBpbmRleEEgPSB0aGlzLl91cHNlbGxIYW5kbGVzLm1hcChpdGVtID0+IGl0ZW0uaGFuZGxlKS5pbmRleE9mKGEuaGFuZGxlKVxuICAgICAgICAgIGxldCBpbmRleEIgPSB0aGlzLl91cHNlbGxIYW5kbGVzLm1hcChpdGVtID0+IGl0ZW0uaGFuZGxlKS5pbmRleE9mKGIuaGFuZGxlKVxuICAgICAgICAgIHJldHVybiBpbmRleEEgLSBpbmRleEJcbiAgICAgICAgfSlcblxuICAgICAgICBcblxuICAgICAgICB0aGlzLl9kYXRhLmhhc1Vwc2VsbCA9IHJlc3VsdHMubGVuZ3RoID4gMFxuICAgICAgICB0aGlzLl9kYXRhLnVwc2VsbFByb2R1Y3RzID0gcmVzdWx0c1xuICAgICAgICB0aGlzLl9kYXRhLnVwc2VsbExvYWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMuX3Vwc2VsbEFyZWEuc3R5bGUubWluSGVpZ2h0ID0gYCR7dGhpcy5fdXBzZWxsQXJlYS5zY3JvbGxIZWlnaHR9cHhgXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVUFNFTEwgSVRFTVM6XCIpXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuX2RhdGEudXBzZWxsUHJvZHVjdHMpXG4gICAgICB9XG5cbiAgICAgIF9yZW5kZXIgKCkge1xuICAgICAgICBmb3IgKGxldCBjYXJ0U2VjdGlvbiBvZiB0aGlzLl9yZW5kZXJBcmVhcykge1xuICAgICAgICAgIHRoaXMuX2JpbmRzLnB1c2gocml2ZXRzLmJpbmQoY2FydFNlY3Rpb24sIHRoaXMuX2dldE1vZGVsKGNhcnRTZWN0aW9uKSkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhLmNhcnQubG9hZGluZyA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgY2FydFNlY3Rpb24gb2YgdGhpcy5fcmVuZGVyQXJlYXMpIHtcbiAgICAgICAgICBjYXJ0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyZW5kZXJlZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdW5tb3VudCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50IGNhcnQnKVxuXG4gICAgICAgIGZvciAobGV0IGJpbmQgb2YgdGhpcy5fYmluZHMpIHtcbiAgICAgICAgICBiaW5kLnVuYmluZCgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2dldE1vZGVsIChjYXJ0U2VjdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgICAgICAgY29udHJvbGxlcjoge1xuICAgICAgICAgICAgcmVtb3ZlSXRlbTogYXN5bmMgKGUsIG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBtb2RlbC5kYXRhLmNhcnQubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBtb2RlbC5pdGVtXG4gICAgICAgICAgICAgIGF3YWl0IEFqYXhBcGkucmVtb3ZlQ2FydEl0ZW0oaXRlbS5pbmRleCwgdGhpcy5fY3R4LmdldFN0YXRlKCkpXG4gICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2goKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVF1YW50aXR5OiBhc3luYyAoZSwgbW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGlmIChtb2RlbC5pdGVtLnF1YW50aXR5Lmxlbmd0aCAmJiBpc05hTihwYXJzZUludChtb2RlbC5pdGVtLnF1YW50aXR5KSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5pdGVtLnF1YW50aXR5ID0gMVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtb2RlbC5pdGVtLnF1YW50aXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1vZGVsLmRhdGEuY2FydC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHZhciBuZXdRdWFudGl0eSA9IG1vZGVsLml0ZW0ucXVhbnRpdHlcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBhd2FpdCBBamF4QXBpLnVwZGF0ZUNhcnRJdGVtKG1vZGVsLml0ZW0uaW5kZXgsIG5ld1F1YW50aXR5LCB7fSwgdGhpcy5fY3R4LmdldFN0YXRlKCkpXG4gICAgICAgICAgICAgICAgICB0aGlzLl9yZWZyZXNoKClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsLmRhdGEuY2FydC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuZXJyb3JNZXNzYWdlID0gYEFsbCAke21vZGVsLml0ZW0udGl0bGV9IGFyZSBjdXJyZW50bHkgaW4geW91ciBjYXJ0YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY3JlbWVudFF1YW50aXR5OiBhc3luYyAoZSwgbW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIG1vZGVsLmRhdGEuY2FydC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICB2YXIgbmV3UXVhbnRpdHkgPSBtb2RlbC5pdGVtLnF1YW50aXR5ICsgMVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQWpheEFwaS51cGRhdGVDYXJ0SXRlbShtb2RlbC5pdGVtLmluZGV4LCBuZXdRdWFudGl0eSwge30sIHRoaXMuX2N0eC5nZXRTdGF0ZSgpKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2goKVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5kYXRhLmNhcnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YS5lcnJvck1lc3NhZ2UgPSBgQWxsICR7bW9kZWwuaXRlbS50aXRsZX0gYXJlIGN1cnJlbnRseSBpbiB5b3VyIGNhcnRgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWNyZW1lbnRRdWFudGl0eTogYXN5bmMgKGUsIG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBtb2RlbC5kYXRhLmNhcnQubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgdmFyIG5ld1F1YW50aXR5ID0gbW9kZWwuaXRlbS5xdWFudGl0eSAtIDFcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IEFqYXhBcGkudXBkYXRlQ2FydEl0ZW0obW9kZWwuaXRlbS5pbmRleCwgbmV3UXVhbnRpdHksIHt9LCB0aGlzLl9jdHguZ2V0U3RhdGUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZyZXNoKClcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuZGF0YS5jYXJ0LmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuZXJyb3JNZXNzYWdlID0gYEFsbCAke21vZGVsLml0ZW0udGl0bGV9IGFyZSBjdXJyZW50bHkgaW4geW91ciBjYXJ0YFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJFcnJvcjogKGUsIG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBtb2RlbC5kYXRhLmVycm9yTWVzc2FnZSA9IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRVcHNlbGxJdGVtOiBhc3luYyAoZSwgbW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gbW9kZWwuaXRlbVxuICAgICAgICAgICAgICBsZXQgdmFyaWFudCA9IHByb2R1Y3QuY3VycmVudFZhcmlhbnRcbiAgICAgICAgICAgICAgbW9kZWwuZGF0YS5jYXJ0LmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgIHRoaXMuX3Vwc2VsbEFkZGVkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0ge31cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0Lm1ldGFmaWVsZHNbJ2lzX3ByZW9yZGVyJ10gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW1wiX2lzLXByZW9yZGVyXCJdID0gJ1llcydcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGAke3ZhcmlhbnQuaWR9YCxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodmFyaWFudC5yZXF1aXJlc19zZWxsaW5nX3BsYW4pIHtcbiAgICAgICAgICAgICAgICBvYmouc2VsbGluZ19wbGFuID0gdmFyaWFudC5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbnNbMF0uc2VsbGluZ19wbGFuX2lkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgQWpheEFwaS5hZGRUb0NhcnQob2JqLCB0aGlzLl9jdHguZ2V0U3RhdGUoKSlcblxuICAgICAgICAgICAgICB0aGlzLl9jdHguZW1pdCgnY2FydC1pdGVtLWFkZGVkJywge1xuICAgICAgICAgICAgICAgIGxhc3RJdGVtQWRkZWQ6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW06IGRhdGEsXG4gICAgICAgICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5jcmVtZW50VXBzZWxsUXVhbnRpdHk6IChlLCBtb2RlbCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgbW9kZWwuaXRlbS5xdWFudGl0eSsrXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVjcmVtZW50VXBzZWxsUXVhbnRpdHk6IChlLCBtb2RlbCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgaWYgKG1vZGVsLml0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuaXRlbS5xdWFudGl0eS0tXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXN5bmMgX3JlZnJlc2ggKCkge1xuICAgICAgICB0aGlzLl9kYXRhLmNhcnQgPSBhd2FpdCB0aGlzLnByZXBhcmVEYXRhKGF3YWl0IEFqYXhBcGkuZ2V0Q2FydCh0aGlzLl9jdHguZ2V0U3RhdGUoKSkpXG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZVVwc2VsbERhdGEoKVxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkJPTEQgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAmJiB0eXBlb2Ygd2luZG93LkJPTEQuY29tbW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgJiYgdHlwZW9mIHdpbmRvdy5CT0xELmNvbW1vbi5jYXJ0RG9jdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAvLyBOT1RFOiBcImNhcnRcIiBzaG91bGQgYmUgdGhlIHZhcmlhYmxlIGNvbnRhaW5pbmcgdGhlIGNhcnQgSlNPTiBkYXRhXG4gICAgICAgICB0aGlzLl9kYXRhLmNhcnQgPSB3aW5kb3cuQk9MRC5jb21tb24uY2FydERvY3Rvci5maXgodGhpcy5fZGF0YS5jYXJ0KTtcbiAgICAgICB9XG5cbiAgICAgICB0aGlzLl9kYXRhLmNhcnRCYWNrdXAgPSB7Li4udGhpcy5fZGF0YS5jYXJ0fVxuXG4gICAgICAgaWYgKHdpbmRvdy5TaG9waWZ5ICYmIFNob3BpZnkuU3RvcmVmcm9udEV4cHJlc3NCdXR0b25zKSB7XG4gICAgICAgIFNob3BpZnkuU3RvcmVmcm9udEV4cHJlc3NCdXR0b25zLmluaXRpYWxpemUoKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuS2xhcm5hT25zaXRlU2VydmljZSA9IHdpbmRvdy5LbGFybmFPbnNpdGVTZXJ2aWNlIHx8IFtdXG4gICAgICB3aW5kb3cuS2xhcm5hT25zaXRlU2VydmljZS5wdXNoKHsgZXZlbnROYW1lOiAncmVmcmVzaC1wbGFjZW1lbnRzJyB9KVxuXG4gICAgICBpZih3aW5kb3cuQk9MRCAmJiBCT0xELmNvbW1vbiAmJiBCT0xELmNvbW1vbi5ldmVudEVtaXR0ZXIgJiYgdHlwZW9mIEJPTEQuY29tbW9uLmV2ZW50RW1pdHRlci5lbWl0ID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgQk9MRC5jb21tb24uZXZlbnRFbWl0dGVyLmVtaXQoJ0JPTERfQ09NTU9OX2NhcnRfbG9hZGVkJywgdGhpcy5fZGF0YS5jYXJ0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0VmFyaWFudCAoc2VsZWN0ZWRPcHRpb25zLCB2YXJpYW50cykge1xuICAgICAgbGV0IHRoZVZhcmlhbnQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgdmFyaWFudCBvZiB2YXJpYW50cykge1xuICAgICAgICBsZXQgZm91bmRWYXJpYW50ID0gdmFyaWFudFxuICAgICAgICBmb3IgKGxldCBbaW5kZXgsIG9wdGlvbl0gb2Ygc2VsZWN0ZWRPcHRpb25zLmVudHJpZXMoKSkge1xuICAgICAgICAgIGlmICh2YXJpYW50W2BvcHRpb24ke2luZGV4ICsgMX1gXSAhPT0gb3B0aW9uKSB7XG4gICAgICAgICAgICBmb3VuZFZhcmlhbnQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmRWYXJpYW50KSB7XG4gICAgICAgICAgdGhlVmFyaWFudCA9IGZvdW5kVmFyaWFudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGVWYXJpYW50XG4gICAgfVxuXG4gICAgX2dldFVwZGF0ZXNNYXAgKGl0ZW1zID0gdGhpcy5fZGF0YS5jYXJ0Lml0ZW1zKSB7XG4gICAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5xdWFudGl0eSlcbiAgICB9XG5cbiAgICBfZG9FZGl0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOnVubG9hZCcsIGUgPT4ge1xuICAgICAgICB0aGlzLnVubW91bnQoKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOmxvYWQnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fc2V0dXAoKVxuICAgICAgICB0aGlzLm1vdW50KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ2FydFxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc0NoYW5nZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICBfb3B0aW9uTG9naWMob3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24ub24pIHtcbiAgICAgIG9wdGlvbi5vbiA9ICdjbGljaydcbiAgICB9XG5cbiAgICBpZiAob3B0aW9uLndoZW5PdXRzaWRlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgZSA9PiB7XG4gICAgICAgIGxldCBjbGlja0lzSW5zaWRlID0gdGhpcy5fZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgdGhpcy5fZWxlbSA9PT0gZS50YXJnZXRcbiAgICAgICAgbGV0IHRvRXhjbHVkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9uLndoZW5PdXRzaWRlRXhjZXB0KVxuICAgICAgICBsZXQgaGFzQ2xpY2tlZEV4Y2x1ZGUgPSBBcnJheS5mcm9tKHRvRXhjbHVkZSkuc29tZShlbGVtID0+IGVsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IGVsZW0gPT09IGUudGFyZ2V0KVxuXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlIHx8IGhhc0NsaWNrZWRFeGNsdWRlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLl9ldmVudExvZ2ljKG9wdGlvbiwgZSlcbiAgICAgIFxuICAgICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcihvcHRpb24ub24sIGUgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudExvZ2ljKG9wdGlvbiwgZSlcbiAgICAgIH0sIG9wdGlvbi5wcmV2ZW50RGVmYXVsdCA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudExvZ2ljIChvcHRpb24sIGUpIHtcbiAgICBpZiAob3B0aW9uLm9ubHlUaGlzRWxlbSAmJiBlLnRhcmdldCAhPT0gdGhpcy5fZWxlbSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIFxuICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChvcHRpb24udGFyZ2V0LmluY2x1ZGVzKCdjbG9zZXN0OicpKSB7XG4gICAgICBsZXQgcGFyZW50U2VsZWN0b3IgPSBvcHRpb24udGFyZ2V0LnNwbGl0KCdjbG9zZXN0OicpWzFdLnRyaW0oKVxuICAgICAgaWYgKG9wdGlvbi5zdWJUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZWxlbS5jbG9zZXN0KHBhcmVudFNlbGVjdG9yKS5xdWVyeVNlbGVjdG9yKG9wdGlvbi5zdWJUYXJnZXQpLmNsYXNzTGlzdFtvcHRpb24ubWV0aG9kXShvcHRpb24uY2xhc3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbGVtLmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpLmNsYXNzTGlzdFtvcHRpb24ubWV0aG9kXShvcHRpb24uY2xhc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb24udGFyZ2V0ID09PSAndGhpcycpIHtcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0W29wdGlvbi5tZXRob2RdKG9wdGlvbi5jbGFzcylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi50YXJnZXQpXG4gICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0W29wdGlvbi5tZXRob2RdKG9wdGlvbi5jbGFzcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlQcm92aW5jZVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICAgIHRoaXMuX2NvdW50cnlFbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY291bnRyeS1zZWxlY3Rvcl0nKVxuICAgIHRoaXMuX3Byb3ZpbmNlRWwgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb3ZpbmNlLXNlbGVjdG9yXScpXG4gICAgdGhpcy5fcHJvdmluY2VDb250YWluZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb3ZpbmNlLWNvbnRhaW5lcl0nKVxuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIHRoaXMuX2NvdW50cnlFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIHRoaXMuX2NvdW50cnlIYW5kbGVyKClcbiAgICB9KVxuICAgIHRoaXMuX2luaXRDb3VudHJ5KClcbiAgICB0aGlzLl9pbml0UHJvdmluY2UoKVxuICB9XG5cbiAgX2luaXRDb3VudHJ5ICgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2NvdW50cnlFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdCcpXG4gICAgdGhpcy5fc2V0U2VsZWN0b3JCeVZhbHVlKHRoaXMuX2NvdW50cnlFbCwgdClcbiAgICB0aGlzLl9jb3VudHJ5SGFuZGxlcigpXG4gIH1cblxuICBfaW5pdFByb3ZpbmNlICgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3Byb3ZpbmNlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKVxuICAgIHQgJiYgdGhpcy5fcHJvdmluY2VFbC5vcHRpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5fc2V0U2VsZWN0b3JCeVZhbHVlKHRoaXMuX3Byb3ZpbmNlRWwsIHQpXG4gIH1cblxuICBfY291bnRyeUhhbmRsZXIgKCkge1xuICAgIHZhciB0ID0gdGhpcy5fY291bnRyeUVsLm9wdGlvbnNbdGhpcy5fY291bnRyeUVsLnNlbGVjdGVkSW5kZXhdXG4gICAgdmFyIGUgPSB0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm92aW5jZXMnKVxuICAgIHZhciBuID0gSlNPTi5wYXJzZShlKVxuXG4gICAgdGhpcy5fY2xlYXJPcHRpb25zKHRoaXMuX3Byb3ZpbmNlRWwpXG4gICAgaWYgKG4gJiYgbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX3Byb3ZpbmNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICB0LnZhbHVlID0gbltpXVswXVxuICAgICAgICB0LmlubmVySFRNTCA9IG5baV1bMV1cbiAgICAgICAgdGhpcy5fcHJvdmluY2VFbC5hcHBlbmRDaGlsZCh0KVxuICAgICAgfVxuICAgICAgdGhpcy5fcHJvdmluY2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgfVxuICB9XG5cbiAgX3NldFNlbGVjdG9yQnlWYWx1ZSAodCwgZSkge1xuICAgIGZvciAodmFyIG4gPSAwLCBpID0gdC5vcHRpb25zLmxlbmd0aDsgbiA8IGk7IG4rKykge1xuICAgICAgdmFyIG8gPSB0Lm9wdGlvbnNbbl1cbiAgICAgIGlmIChlID09PSBvLnZhbHVlIHx8IGUgPT09IG8uaW5uZXJIVE1MKSB7XG4gICAgICAgIHQuc2VsZWN0ZWRJbmRleCA9IG5cbiAgICAgICAgcmV0dXJuIG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJPcHRpb25zICh0KSB7XG4gICAgZm9yICg7IHQuZmlyc3RDaGlsZDspIHQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIHRoaXMuX2RvU2Nyb2xsQ2FsY3VsYXRpb25zKClcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuX2VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuX2VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcbiAgICAgXG4gICAgICB0aGlzLl9kb1Njcm9sbENhbGN1bGF0aW9ucygpXG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gIH1cblxuICBfZG9TY3JvbGxDYWxjdWxhdGlvbnMgKCkge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA9PT0gMCkge1xuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zY3JvbGxlZCcpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1pcy1zY3JvbGxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaXMtc2Nyb2xsZWQnKVxuICAgIH0gICAgXG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdldngnXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi9saWIvSGVscGVycydcbmltcG9ydCBLZWVuU2xpZGVyIGZyb20gJ2tlZW4tc2xpZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZWVuU2xpZGVyQ29tcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgLi4ue1xuICAgICAgICBkcmFnU3BlZWQ6IDEsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGFycm93U3ZnOiBgXG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwibTguMjUgNC41IDcuNSA3LjUtNy41IDcuNVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9XG4gICAgbGV0IG9wdGlvbnNDb3B5ID0geyAuLi5vcHRpb25zIH1cbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICAgIHRoaXMuX3NsaWRlciA9IG51bGxcbiAgICB0aGlzLl9hdXRvcGxheUludGVydmFsID0gbnVsbFxuICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBmYWxzZVxuICAgIHRoaXMuX2xvY2FsQ3R4ID0gY3JlYXRlKClcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICAgIHRoaXMuX2FkZGVkTGlzdGVuZXIgPSBmYWxzZVxuICAgIHN1cGVyLnJlaW5pdE9uUmVzaXplKG9wdGlvbnNDb3B5KVxuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMubW91bnQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVXaGVuICYmICF0aGlzLl9hZGRlZExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKS5tYXRjaGVzICYmXG4gICAgICAgICAgICAhdGhpcy5faXNNb3VudGVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLm1vdW50KClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIW1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKVxuICAgICAgICAgICAgICAubWF0Y2hlcyAmJlxuICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnVubW91bnQoKVxuICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgICApXG4gICAgICB0aGlzLl9hZGRlZExpc3RlbmVyID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuZW5hYmxlV2hlbiAmJlxuICAgICAgIW1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLl9jb252ZXJ0T2xkT3B0aW9ucygpXG5cbiAgICB0aGlzLl9zbGlkZXNQZXJWaWV3ID1cbiAgICAgIHR5cGVvZiB0aGlzLl9vcHRpb25zLnNsaWRlcyA9PT0gJ29iamVjdCdcbiAgICAgICAgPyB0aGlzLl9vcHRpb25zLnNsaWRlcy5wZXJWaWV3IHx8IHRoaXMuX29wdGlvbnMuc2xpZGVzLm51bWJlclxuICAgICAgICA6IHRoaXMuX29wdGlvbnMuc2xpZGVzXG5cbiAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2tlZW4tc2xpZGVyJylcbiAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX2VsZW0uY2hpbGRyZW4pIHtcbiAgICAgIGlmIChcbiAgICAgICAgZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2Vlbi1kb3RzJykgfHxcbiAgICAgICAgZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2Vlbi1uYXYnKVxuICAgICAgKVxuICAgICAgICBjb250aW51ZVxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdrZWVuLXNsaWRlcl9fc2xpZGUnKVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZmFkZSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2ZhZGVyLXNsaWRlJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2xpZGVzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcua2Vlbi1zbGlkZXJfX3NsaWRlJylcblxuICAgIC8vIEFTIE5BViBGT1JcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgdGhpcy5fY3R4Lm9uKCdyYWRpYW50LS1tb3VudGVkJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX3BhcmVudFNsaWRlciA9IHRoaXMuX3RoZW1lLmdldENvbXBvbmVudCh0aGlzLl9vcHRpb25zLmFzTmF2Rm9yKVxuICAgICAgICB0aGlzLl9wYXJlbnRTbGlkZXIgPSB0aGlzLl9wYXJlbnRTbGlkZXIuY29tcG9uZW50XG5cbiAgICAgICAgdGhpcy5fcGFyZW50U2xpZGVyLl9sb2NhbEN0eC5vbignc2xpZGUtY2hhbmdlJywgKHN0YXRlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IGRhdGEuc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsIHx8IDBcbiAgICAgICAgICB0aGlzLl9zbGlkZXIubW92ZVRvSWR4KFxuICAgICAgICAgICAgTWF0aC5taW4odGhpcy5fc2xpZGVyLnRyYWNrLmRldGFpbHMubWF4SWR4LCBuZXh0KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYXJyb3dzKSB0aGlzLl9jcmVhdGVBcnJvd3MoKVxuXG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IHRoaXMuX3NsaWRlc1BlclZpZXcpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubG9vcCA9IGZhbHNlXG4gICAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2xzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3ByZXZBcnJvdylcbiAgICAgIHRoaXMuX3ByZXZBcnJvdyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEta2Vlbi1wcmV2XScpXG4gICAgaWYgKCF0aGlzLl9uZXh0QXJyb3cpXG4gICAgICB0aGlzLl9uZXh0QXJyb3cgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWtlZW4tbmV4dF0nKVxuXG4gICAgdGhpcy5fb3B0aW9ucy5hbmltYXRpb25TdGFydGVkID0gc2xpZGVyID0+IHtcbiAgICAgIHRoaXMuX2xvY2FsQ3R4LmVtaXQoJ2FuaW1hdGlvbi1zdGFydGVkJywgbnVsbCwgeyBzbGlkZXI6IHNsaWRlciB9KVxuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnMuc2xpZGVDaGFuZ2VkID0gc2xpZGVyID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NlcyhzbGlkZXIpXG4gICAgICB0aGlzLnVwZGF0ZUZhZGVIZWlnaHQoc2xpZGVyKVxuICAgICAgdGhpcy5fbG9jYWxDdHguZW1pdCgnc2xpZGUtY2hhbmdlJywgbnVsbCwgeyBzbGlkZXI6IHNsaWRlciB9KVxuICAgICAgdGhpcy5hZGFwdGl2ZUhlaWdodChzbGlkZXIpXG4gICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB0aGlzLnNjcm9sbFJldmVhbEZpeChzbGlkZXIpXG5cbiAgICAgIHRoaXMuX3BhdXNlVmlkZW9zKClcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnBsYXlWaWRlb3MpIHRoaXMuX3BsYXlWaWRlb3Moc2xpZGVyKVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2V0U2xpZGVDb3VudCkgdGhpcy5fc2V0U2xpZGVDb3VudChzbGlkZXIpXG5cbiAgICAgIHRoaXMuX2RvU2xpZGVDU1NWYXJzKHNsaWRlcilcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXNOYXZGb3IgJiYgdGhpcy5fcGFyZW50U2xpZGVyKSB7XG4gICAgICAgIGxldCBwYXJlbnRTbGlkZXIgPSB0aGlzLl9wYXJlbnRTbGlkZXIuX3NsaWRlclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zbGlkZXIpXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9zbGlkZXIudHJhY2suZGV0YWlscy5yZWwgfHwgMFxuICAgICAgICBwYXJlbnRTbGlkZXIubW92ZVRvSWR4KFxuICAgICAgICAgIE1hdGgubWluKHBhcmVudFNsaWRlci50cmFjay5kZXRhaWxzLm1heElkeCwgbmV4dClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnMuY3JlYXRlZCA9IHNsaWRlciA9PiB7XG4gICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2tlZW4tc2xpZGVyLS1yZWFkeScpXG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmRvdHMgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpXG4gICAgICAgIHRoaXMuX2NyZWF0ZURvdHMoc2xpZGVyKVxuXG4gICAgICB0aGlzLl9kb3RzQ29udGFpbmVyID0gdGhpcy5fb3B0aW9ucy5kb3RzQ29udGFpbmVyXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9vcHRpb25zLmRvdHNDb250YWluZXIpIHx8IHRoaXMuX2VsZW1cbiAgICAgICAgOiB0aGlzLl9lbGVtXG4gICAgICB0aGlzLl9kb3RzID0gdGhpcy5fZG90c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kb3RdJylcblxuICAgICAgZm9yIChsZXQgZG90IG9mIHRoaXMuX2RvdHMpIHtcbiAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5nb1RvU2xpZGUoTnVtYmVyKGRvdC5kYXRhc2V0LmRvdCksIGZhbHNlKVxuXG4gICAgICAgICAgaWYgKHRoaXMuX3BhcmVudFNsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50U2xpZGVyLmdvVG9TbGlkZShOdW1iZXIoZG90LmRhdGFzZXQuZG90KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NlcyhzbGlkZXIpXG4gICAgICB0aGlzLnVwZGF0ZUZhZGVIZWlnaHQoc2xpZGVyKVxuICAgICAgdGhpcy5hZGFwdGl2ZUhlaWdodChzbGlkZXIpXG4gICAgICB0aGlzLl9kb1NsaWRlQ1NTVmFycyhzbGlkZXIpXG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9wbGF5KSB0aGlzLl9zZXR1cEF1dG9wbGF5KHNsaWRlcilcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9wbGF5V2hlblZpc2libGVPbmx5KSB0aGlzLl9kb0F1dG9wbGF5T25TY3JvbGwoKVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYWxpZ25BcnJvd3NUbykgdGhpcy5hbGlnbkFycm93cygpXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hcnJvd0tleU5hdmlnYXRpb24pIHRoaXMuX2FkZEFycm93S2V5RXZlbnRzKClcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnBsYXlWaWRlb3MpIHRoaXMuX3BsYXlWaWRlb3Moc2xpZGVyKVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2V0U2xpZGVDb3VudCkgdGhpcy5fc2V0U2xpZGVDb3VudChzbGlkZXIpXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5mb2N1c09uU2VsZWN0KSB0aGlzLmZvY3VzT25TZWxlY3Qoc2xpZGVyKVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmFkZUhlaWdodCgpXG4gICAgICAgICAgdGhpcy5hZGFwdGl2ZUhlaWdodCgpXG5cbiAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hbGlnbkFycm93c1RvKSB7XG4gICAgICAgICAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYWxpZ25BcnJvd3MoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9ucy5kcmFnU3RhcnRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnMuZHJhZ0VuZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zaG91bGRBdXRvcGxheSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5mYWRlKSB7XG4gICAgICB0aGlzLl9vcHRpb25zLmRldGFpbHNDaGFuZ2VkID0gc2xpZGVyID0+IHRoaXMuZmFkZXIoc2xpZGVyKVxuICAgICAgdGhpcy5fb3B0aW9ucy5yZW5kZXJNb2RlID0gJ2N1c3RvbSdcbiAgICB9XG5cbiAgICB0aGlzLl9zbGlkZXIgPSBuZXcgS2VlblNsaWRlcih0aGlzLl9lbGVtLCB0aGlzLl9vcHRpb25zKVxuXG4gICAgaWYgKHRoaXMuX3ByZXZBcnJvdylcbiAgICAgIHRoaXMuX3ByZXZBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5nb1RvUHJldihlKSlcbiAgICBpZiAodGhpcy5fbmV4dEFycm93KVxuICAgICAgdGhpcy5fbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmdvVG9OZXh0KGUpKVxuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMudHJpZ2dlck9uTW91bnQpIHtcbiAgICAgIHRoaXMuX2N0eC5lbWl0KHRoaXMuX29wdGlvbnMudHJpZ2dlck9uTW91bnQpXG4gICAgfVxuICB9XG5cbiAgZm9jdXNPblNlbGVjdChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcbiAgICBmb3IgKGxldCBbaW5kZXgsIHNsaWRlXSBvZiB0aGlzLl9zbGlkZXMuZW50cmllcygpKSB7XG4gICAgICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0aGlzLmdvVG9TbGlkZShpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3NldFNsaWRlQ291bnQoc2xpZGVyID0gdGhpcy5fc2xpZGVyKSB7XG4gICAgbGV0IHNsaWRlQ291bnRQYXJlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX29wdGlvbnMuc2V0U2xpZGVDb3VudFxuICAgIClcbiAgICBsZXQgdG90YWxFbGVtID0gc2xpZGVDb3VudFBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGUtdG90YWxdJylcbiAgICBsZXQgY3VycmVudEVsZW0gPSBzbGlkZUNvdW50UGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZS1jdXJyZW50XScpXG5cbiAgICB0b3RhbEVsZW0uaW5uZXJIVE1MID0gc2xpZGVyLmRldGFpbHMoKS5zaXplXG4gICAgY3VycmVudEVsZW0uaW5uZXJIVE1MID0gc2xpZGVyLmRldGFpbHMoKS5yZWxhdGl2ZVNsaWRlICsgMVxuXG4gICAgaWYgKHRoaXMuaXNBdEVuZChzbGlkZXIpICYmIHNsaWRlci5kZXRhaWxzKCkucmVsYXRpdmVTbGlkZSA9PSAwKSB7XG4gICAgICBzbGlkZUNvdW50UGFyZW50RWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9zbGlkZXIpIHtcbiAgICAgIHRoaXMuX3NsaWRlci5kZXN0cm95KClcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hdkNvbnRhaW5lciAmJiB0aGlzLl9uYXZDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5fbmF2Q29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fbmF2Q29udGFpbmVyKVxuICAgIH1cbiAgICBsZXQgZG90cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEta2Vlbi1kb3RzXScpXG4gICAgaWYgKGRvdHMpIHtcbiAgICAgIGRvdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb3RzKVxuICAgIH1cbiAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2tlZW4tc2xpZGVyJylcbiAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX2VsZW0uY2hpbGRyZW4pIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgna2Vlbi1zbGlkZXJfX3NsaWRlJylcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZXItc2xpZGUnKVxuICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICB9XG4gICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSAnJ1xuICB9XG5cbiAgX3NldHVwQXV0b3BsYXkoc2xpZGVyKSB7XG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvcGxheVRpbWVvdXQpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnNob3VsZEF1dG9wbGF5ID0gdHJ1ZVxuICAgIHRoaXMuc2hvdWxkQXV0b3BsYXlWaXNpYmxlID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucGF1c2VBdXRvcGxheU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBmYWxzZVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvcGxheVRpbWVvdXQpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSB0cnVlXG4gICAgICAgIHRoaXMuYXV0b3BsYXkoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmF1dG9wbGF5KClcblxuICAgIHNsaWRlci5vbignZHJhZ1N0YXJ0ZWQnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5hdXRvcGxheVRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLmF1dG9wbGF5VGltZW91dClcbiAgICB9KVxuXG4gICAgc2xpZGVyLm9uKCdhbmltYXRpb25FbmRlZCcsICgpID0+IHtcbiAgICAgIHRoaXMuYXV0b3BsYXkoKVxuICAgIH0pXG5cbiAgICBzbGlkZXIub24oJ3VwZGF0ZWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmF1dG9wbGF5KClcbiAgICB9KVxuICB9XG5cbiAgYXV0b3BsYXkoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXlUaW1lb3V0KVxuICAgIHRoaXMuYXV0b3BsYXlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b3BsYXkgfHwgIXRoaXMuc2hvdWxkQXV0b3BsYXlWaXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKHRoaXMuX3NsaWRlcikge1xuICAgICAgICBpZiAodGhpcy5pc0F0RW5kKCkgJiYgIXRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgICAgIHRoaXMuZ29Ub1NsaWRlKDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2xpZGVyLm5leHQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcy5fb3B0aW9ucy5hdXRvcGxheVNwZWVkKVxuICB9XG5cbiAgX2RvQXV0b3BsYXlPblNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuYXV0b3BsYXkpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHZpc2libGVDaGVjayA9ICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgSGVscGVycy5pc0luVmlld3BvcnQodGhpcy5fZWxlbSkgJiZcbiAgICAgICAgdGhpcy5zaG91bGRBdXRvcGxheVZpc2libGUgPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNob3VsZEF1dG9wbGF5VmlzaWJsZSA9IHRydWVcbiAgICAgICAgdGhpcy5hdXRvcGxheSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3VsZEF1dG9wbGF5VmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5VGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXlUaW1lb3V0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3Njcm9sbCcsXG4gICAgICBlID0+IHtcbiAgICAgICAgdmlzaWJsZUNoZWNrKClcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgIClcbiAgICB2aXNpYmxlQ2hlY2soKVxuICB9XG5cbiAgX2RvU2xpZGVDU1NWYXJzKHNsaWRlciA9IHRoaXMuX3NsaWRlcikge1xuICAgIGxldCBzbGlkZSA9IHRoaXMuZ2V0QWN0aXZlU2xpZGVFbGVtKHNsaWRlcilcblxuICAgIGlmIChzbGlkZSAmJiBzbGlkZS5kYXRhc2V0LnNsaWRlQ3NzVmFycykge1xuICAgICAgbGV0IHZhckFyciA9IEpTT04ucGFyc2Uoc2xpZGUuZGF0YXNldC5zbGlkZUNzc1ZhcnMpXG5cbiAgICAgIGZvciAobGV0IGNzc1ZhciBvZiB2YXJBcnIpIHtcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIubmFtZSwgY3NzVmFyLnZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBcnJvd0tleUV2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBsZXQgZXYgPSBlIHx8IHdpbmRvdy5ldmVudFxuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIC8vIGxlZnQgYXJyb3dcbiAgICAgICAgdGhpcy5fc2xpZGVyLnByZXYoKVxuICAgICAgfSBlbHNlIGlmIChldi5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICB0aGlzLl9zbGlkZXIubmV4dCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9jcmVhdGVBcnJvd3MoKSB7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZS5jbGFzc0xpc3QuYWRkKCdrZWVuLW5hdicpXG4gICAgZS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2Vlbi1uYXYnLCB0cnVlKVxuICAgIGUuaW5uZXJIVE1MID0gYFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLWtlZW4tcHJldiBjbGFzcz1cImtlZW4tYXJyb3ctcHJldiBrZWVuLWFycm93XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzIFNsaWRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtlZW4tYXJyb3ctaW5uZXJcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLl9vcHRpb25zLmFycm93U3ZnIHx8ICcnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLWtlZW4tbmV4dCBjbGFzcz1cImtlZW4tYXJyb3ctbmV4dCBrZWVuLWFycm93XCIgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2Vlbi1hcnJvdy1pbm5lclwiPlxuICAgICAgICAgICAgICAke3RoaXMuX29wdGlvbnMuYXJyb3dTdmcgfHwgJyd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgYFxuICAgIHRoaXMuX25hdkNvbnRhaW5lciA9IGVcbiAgICB0aGlzLl9wcmV2QXJyb3cgPSB0aGlzLl9uYXZDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEta2Vlbi1wcmV2XScpXG4gICAgdGhpcy5fbmV4dEFycm93ID0gdGhpcy5fbmF2Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWtlZW4tbmV4dF0nKVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYXBwZW5kQXJyb3dzKSB7XG4gICAgICBsZXQgdG9BcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX29wdGlvbnMuYXBwZW5kQXJyb3dzKVxuICAgICAgaWYgKHRvQXBwZW5kKSB0b0FwcGVuZC5hcHBlbmRDaGlsZChlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtLmFwcGVuZENoaWxkKGUpXG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZURvdHMoc2xpZGVyKSB7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZS5jbGFzc0xpc3QuYWRkKCdrZWVuLWRvdHMnKVxuICAgIGUuc2V0QXR0cmlidXRlKCdkYXRhLWtlZW4tZG90cycsIHRydWUpXG5cbiAgICBsZXQgZG90c1RvTWFrZSA9IHNsaWRlci50cmFjay5kZXRhaWxzLnNsaWRlc0xlbmd0aFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzVG9NYWtlOyBpKyspIHtcbiAgICAgIGUuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24gZGF0YS1kb3Q9JyR7aX0nPjwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgYFxuICAgIH1cblxuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgna2Vlbi0tZG90dGVkJylcbiAgICB0aGlzLl9lbGVtLmFwcGVuZENoaWxkKGUpXG4gIH1cblxuICBfcGxheVZpZGVvcyhzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcbiAgICB0aGlzLl9wYXVzZVZpZGVvcygpXG5cbiAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XG4gICAgICBsZXQgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmVTbGlkZUVsZW0oKVxuICAgICAgbGV0IGFjdGl2ZVZpZGVvID0gYWN0aXZlLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJylcblxuICAgICAgaWYgKGFjdGl2ZVZpZGVvKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhY3RpdmVWaWRlby5oYXNBdHRyaWJ1dGUoJ1tkYXRhLWxhenldJykgJiZcbiAgICAgICAgICAhYWN0aXZlVmlkZW8uY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkZWQnKVxuICAgICAgICApIHtcbiAgICAgICAgICBhY3RpdmVWaWRlby5hZGRFdmVudExpc3RlbmVyKCdmZmMtLWxvYWRlZCcsIGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBFdmVudCcpXG4gICAgICAgICAgICBhY3RpdmVWaWRlby5wbGF5KClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2ZVZpZGVvLnBsYXkoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9wYXVzZVZpZGVvcygpIHtcbiAgICBsZXQgdmlkZW9zID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpXG4gICAgZm9yIChsZXQgdmlkZW8gb2YgdmlkZW9zKSB7XG4gICAgICB2aWRlby5wYXVzZSgpXG4gICAgfVxuICB9XG5cbiAgZmFkZXIoc2xpZGVyID0gdGhpcy5fc2xpZGVyKSB7XG4gICAgZm9yIChsZXQgW2luZGV4LCBzbGlkZV0gb2Ygc2xpZGVyLnNsaWRlcy5lbnRyaWVzKCkpIHtcbiAgICAgIHNsaWRlLnN0eWxlLm9wYWNpdHkgPSBzbGlkZXIudHJhY2suZGV0YWlscy5zbGlkZXNbaW5kZXhdLnBvcnRpb25cbiAgICB9XG4gIH1cblxuICBnb1RvU2xpZGUoaW5kZXgsIGRvbnRBbmltYXRlID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX3NsaWRlcikgcmV0dXJuXG5cbiAgICBsZXQgZHVyYXRpb24gPSBkb250QW5pbWF0ZSA/IDAgOiB0aGlzLl9vcHRpb25zLmR1cmF0aW9uXG5cbiAgICBsZXQgbmVhcmVzdCA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sb29wICYmIHRoaXMuX3NsaWRlci50cmFjay5kZXRhaWxzLnNsaWRlcy5sZW5ndGggPiAyKSB7XG4gICAgICBuZWFyZXN0ID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLl9zbGlkZXIubW92ZVRvSWR4KGluZGV4LCBuZWFyZXN0LCBkdXJhdGlvbilcbiAgfVxuXG4gIGdvVG9QcmV2KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLl9zbGlkZXIucHJldigpXG4gIH1cblxuICBnb1RvTmV4dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5fc2xpZGVyLm5leHQoKVxuICB9XG5cbiAgc2Nyb2xsUmV2ZWFsRml4KCkge1xuICAgIGZvciAobGV0IHNsaWRlIG9mIHRoaXMuX3NsaWRlcykge1xuICAgICAgaWYgKFxuICAgICAgICBzbGlkZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKSB8fFxuICAgICAgICBzbGlkZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtcmV2ZWFsJylcbiAgICAgICkge1xuICAgICAgICBzbGlkZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpXG4gICAgICAgIHNsaWRlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcbiAgICAgICAgc2xpZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Zpc2liaWxpdHknKVxuICAgICAgICBzbGlkZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKVxuICAgICAgICBzbGlkZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcmV2ZWFsJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBY3RpdmVTbGlkZUVsZW0oc2xpZGVyID0gdGhpcy5fc2xpZGVyKSB7XG4gICAgbGV0IHNsaWRlSW5kZXggPSBzbGlkZXIudHJhY2suZGV0YWlscy5yZWxcblxuICAgIGZvciAobGV0IFtpbmRleCwgc2xpZGVdIG9mIHRoaXMuX3NsaWRlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gc2xpZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gc2xpZGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGFkYXB0aXZlSGVpZ2h0KHNsaWRlciA9IHRoaXMuX3NsaWRlcikge1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5hZGFwdGl2ZUhlaWdodCB8fCAhc2xpZGVyKSByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgna2Vlbi0tYWRhcHRpdmUtaGVpZ2h0JylcblxuICAgIEhlbHBlcnMubmV4dEZyYW1lKCgpID0+IHtcbiAgICAgIGxldCBzbGlkZSA9IHNsaWRlci50cmFjay5kZXRhaWxzLnJlbFxuXG4gICAgICBsZXQgaGVpZ2h0ID0gMFxuXG4gICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLnBhZGRpbmdCb3R0b20pXG4gICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLnBhZGRpbmdUb3ApXG5cbiAgICAgIGxldCBhY3RpdmVTbGlkZSA9IHRoaXMuZ2V0QWN0aXZlU2xpZGVFbGVtKHNsaWRlcilcblxuICAgICAgaWYgKCFhY3RpdmVTbGlkZSkgcmV0dXJuXG5cbiAgICAgIGhlaWdodCArPSBhY3RpdmVTbGlkZS5jbGllbnRIZWlnaHRcbiAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVGYWRlSGVpZ2h0KHNsaWRlciA9IHRoaXMuX3NsaWRlcikge1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5mYWRlIHx8ICFzbGlkZXIpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHNsaWRlID0gc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsXG5cbiAgICBsZXQgaGVpZ2h0ID0gMFxuXG4gICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5wYWRkaW5nQm90dG9tKVxuICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbSkucGFkZGluZ1RvcClcblxuICAgIGxldCBhY3RpdmVTbGlkZSA9IHRoaXMuZ2V0QWN0aXZlU2xpZGVFbGVtKHNsaWRlcilcbiAgICBpZiAoIWFjdGl2ZVNsaWRlKSByZXR1cm5cblxuICAgIGhlaWdodCArPSBhY3RpdmVTbGlkZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgaWYgKCF0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucygnZmFkZS1zbGlkZXInKSkge1xuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdmYWRlLXNsaWRlcicpXG4gICAgfVxuICB9XG5cbiAgYWxpZ25BcnJvd3MoKSB7XG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmFsaWduQXJyb3dzVG8gfHwgIXRoaXMuX25hdkNvbnRhaW5lcikgcmV0dXJuIGZhbHNlXG4gICAgbGV0IGVsZW0gPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fb3B0aW9ucy5hbGlnbkFycm93c1RvKVxuICAgIHRoaXMuX25hdkNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtlbGVtLmNsaWVudEhlaWdodCAvIDJ9cHhgXG4gIH1cblxuICB1cGRhdGVDbGFzc2VzKHNsaWRlcikge1xuICAgIGlmICghc2xpZGVyKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCBzbGlkZSA9IHNsaWRlci50cmFjay5kZXRhaWxzLnJlbFxuICAgIGxldCBtYXhTbGlkZXMgPSBzbGlkZXIudHJhY2suZGV0YWlscy5zbGlkZXMubGVuZ3RoXG4gICAgbGV0IHBlclZpZXcgPSB0aGlzLl9zbGlkZXNQZXJWaWV3XG4gICAgbGV0IGVuZFNsaWRlID0gc2xpZGUgKyBwZXJWaWV3XG5cbiAgICBsZXQgY2FuU2xpZGUgPSBwZXJWaWV3ICE9PSBtYXhTbGlkZXNcblxuICAgIGlmICh0aGlzLl9wcmV2QXJyb3cgJiYgIXRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgaWYgKHNsaWRlID09PSAwIHx8ICFjYW5TbGlkZSkge1xuICAgICAgICB0aGlzLl9wcmV2QXJyb3cuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wcmV2QXJyb3cucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25leHRBcnJvdyAmJiAhdGhpcy5fb3B0aW9ucy5sb29wKSB7XG4gICAgICBpZiAodGhpcy5pc0F0RW5kKHNsaWRlcikgfHwgIWNhblNsaWRlKSB7XG4gICAgICAgIHRoaXMuX25leHRBcnJvdy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX25leHRBcnJvdy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZG90cykge1xuICAgICAgbGV0IGRvdEluZGV4ID0gc2xpZGVcblxuICAgICAgZm9yIChsZXQgZG90IG9mIHRoaXMuX2RvdHMpIHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cbiAgICAgICAgaWYgKE51bWJlcihkb3QuZGF0YXNldC5kb3QpID09PSBkb3RJbmRleCkge1xuICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVNsaWRlID0gdGhpcy5nZXRBY3RpdmVTbGlkZUVsZW0oc2xpZGVyKVxuXG4gICAgZm9yIChsZXQgc2xpZGUgb2YgdGhpcy5fc2xpZGVzKSB7XG4gICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVTbGlkZSkge1xuICAgICAgYWN0aXZlU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gc2xpZGVyLnRyYWNrLmRldGFpbHMubWF4SWR4XG4gICAgbGV0IHRvdGFsU2xpZGVzID0gaWR4ID09PSBJbmZpbml0eSA/IG1heFNsaWRlcyA6IGlkeCArIDFcblxuICAgIHRoaXMuX2VsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1zbGlkZScsIHNsaWRlICsgMSlcbiAgICB0aGlzLl9lbGVtLnN0eWxlLnNldFByb3BlcnR5KCctLXRvdGFsLXNsaWRlcycsIHRvdGFsU2xpZGVzKVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucHJvZ3Jlc3NTZWxlY3Rvcikge1xuICAgICAgbGV0IHByb2dyZXNzRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fb3B0aW9ucy5wcm9ncmVzc1NlbGVjdG9yKVxuICAgICAgcHJvZ3Jlc3NFbGVtLnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtc2xpZGUnLCBzbGlkZSArIDEpXG4gICAgICBwcm9ncmVzc0VsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tdG90YWwtc2xpZGVzJywgdG90YWxTbGlkZXMpXG5cbiAgICAgIGlmICh0b3RhbFNsaWRlcyA9PT0gMSkge1xuICAgICAgICBwcm9ncmVzc0VsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNBdEVuZChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcbiAgICBsZXQgc2xpZGUgPSBzbGlkZXIudHJhY2suZGV0YWlscy5yZWxcbiAgICBsZXQgaWR4ID0gc2xpZGVyLnRyYWNrLmRldGFpbHMubWF4SWR4XG4gICAgbGV0IG1heFNsaWRlcyA9IHNsaWRlci50cmFjay5kZXRhaWxzLnNsaWRlcy5sZW5ndGhcbiAgICBsZXQgdG90YWxTbGlkZXMgPSBpZHggPT09IEluZmluaXR5ID8gbWF4U2xpZGVzIDogaWR4ICsgMVxuXG4gICAgcmV0dXJuIHNsaWRlICsgMSA+PSB0b3RhbFNsaWRlc1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVyLnJlZnJlc2goKVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXIucmVzaXplKClcbiAgfVxuXG4gIF9jb252ZXJ0T2xkT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zbGlkZXNQZXJWaWV3KSB7XG4gICAgICB0aGlzLl9vcHRpb25zLnNsaWRlcyA9IHRoaXMuX29wdGlvbnMuc2xpZGVzIHx8IHt9XG4gICAgICB0aGlzLl9vcHRpb25zLnNsaWRlcy5wZXJWaWV3ID0gdGhpcy5fb3B0aW9ucy5zbGlkZXNQZXJWaWV3XG4gICAgICBkZWxldGUgdGhpcy5fb3B0aW9ucy5zbGlkZXNQZXJWaWV3XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc3BhY2luZykge1xuICAgICAgdGhpcy5fb3B0aW9ucy5zbGlkZXMuc3BhY2luZyA9IHRoaXMuX29wdGlvbnMuc3BhY2luZ1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVubW91bnQoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1vdW50KClcbiAgICB9LCAxMDApXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcbmltcG9ydCBMYXp5TG9hZCBmcm9tICd2YW5pbGxhLWxhenlsb2FkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZENvbXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi57XG4gICAgICBlbGVtZW50c19zZWxlY3RvcjogJ1tkYXRhLWxhenldJyxcbiAgICAgIGNhbGxiYWNrX2xvYWRlZDogZSA9PiB7XG4gICAgICAgIGlmIChlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdQSUNUVVJFJykge1xuICAgICAgICAgIGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLXZpZGVvLWxvYWRlZCcsIG51bGwsIGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYWxsYmFja19lcnJvcjogZSA9PiB7XG4gICAgICAgIGlmIChlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdQSUNUVVJFJykge1xuICAgICAgICAgIGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aHJlc2hvbGQ6IDUwMFxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XG4gICAgdGhpcy5fbGF6eUxvYWQgPSBudWxsXG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgdGhpcy5fbGF6eUxvYWQgPSBuZXcgTGF6eUxvYWQodGhpcy5fb3B0aW9ucylcblxuICAgIHRoaXMuX2N0eC5vbigncmFkaWFudC0tbGF6eS1sb2FkLXVwZGF0ZScsIGUgPT4ge1xuICAgICAgdGhpcy5fbGF6eUxvYWQudXBkYXRlKClcbiAgICB9KVxuXG4gICAgdGhpcy5fY3R4Lm9uKCdyYWRpYW50LS1sYXp5LWxvYWQtZWxlbScsIChzdGF0ZSwgZWxlbSkgPT4ge1xuICAgICAgTGF6eUxvYWQubG9hZChlbGVtLCB0aGlzLl9vcHRpb25zKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyYWRpYW50LS1sYXp5LWxvYWQtdXBkYXRlJywgZSA9PiB7XG4gICAgICB0aGlzLl9sYXp5TG9hZC51cGRhdGUoKVxuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICBfb3B0aW9uTG9naWMob3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24ub24pIHtcbiAgICAgIG9wdGlvbi5vbiA9ICdjbGljaydcbiAgICB9XG5cbiAgICBpZiAob3B0aW9uLndoZW5PdXRzaWRlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgZSA9PiB7XG4gICAgICAgIGxldCBjbGlja0lzSW5zaWRlID0gdGhpcy5fZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgdGhpcy5fZWxlbSA9PT0gZS50YXJnZXRcbiAgICAgICAgbGV0IHRvRXhjbHVkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9uLndoZW5PdXRzaWRlRXhjZXB0KVxuICAgICAgICBsZXQgaGFzQ2xpY2tlZEV4Y2x1ZGUgPSBBcnJheS5mcm9tKHRvRXhjbHVkZSkuc29tZShlbGVtID0+IGVsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IGVsZW0gPT09IGUudGFyZ2V0KVxuXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlIHx8IGhhc0NsaWNrZWRFeGNsdWRlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLl9ldmVudExvZ2ljKG9wdGlvbiwgZSlcbiAgICAgIFxuICAgICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBlID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRMb2dpYyhvcHRpb24sIGUpXG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCB0aGlzLl9ldmVudExpc3RlbmVyLCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICBfbGF6eUxvYWRFbGVtIChvcHRpb24sIGVsZW0pIHtcbiAgICB0aGlzLl9jdHguZW1pdCgncmFkaWFudC0tbGF6eS1sb2FkLWVsZW0nLCBudWxsLCBlbGVtKVxuICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9lbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCB0aGlzLl9ldmVudExpc3RlbmVyKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudExvZ2ljIChvcHRpb24sIGUpIHtcbiAgICBpZiAob3B0aW9uLm9ubHlUaGlzRWxlbSAmJiBlLnRhcmdldCAhPT0gdGhpcy5fZWxlbSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIFxuICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGxldCBlbGVtID0gbnVsbFxuXG4gICAgaWYgKG9wdGlvbi50YXJnZXQuaW5jbHVkZXMoJ2Nsb3Nlc3Q6JykpIHtcbiAgICAgIGxldCBwYXJlbnRTZWxlY3RvciA9IG9wdGlvbi50YXJnZXQuc3BsaXQoJ2Nsb3Nlc3Q6JylbMV0udHJpbSgpXG4gICAgICBpZiAob3B0aW9uLnN1YlRhcmdldCkge1xuICAgICAgICBlbGVtID0gdGhpcy5fZWxlbS5jbG9zZXN0KHBhcmVudFNlbGVjdG9yKS5xdWVyeVNlbGVjdG9yKG9wdGlvbi5zdWJUYXJnZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtID0gdGhpcy5fZWxlbS5jbG9zZXN0KHBhcmVudFNlbGVjdG9yKVxuICAgICAgfVxuICAgICAgdGhpcy5fbGF6eUxvYWRFbGVtKG9wdGlvbiwgZWxlbSlcbiAgICB9IGVsc2UgaWYgKG9wdGlvbi50YXJnZXQgPT09ICd0aGlzJykge1xuICAgICAgZWxlbSA9IHRoaXMuX2VsZW1cbiAgICAgIGlmIChvcHRpb24uc3ViVGFyZ2V0KSB7XG4gICAgICAgIGVsZW0gPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uLnN1YlRhcmdldClcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhenlMb2FkRWxlbShvcHRpb24sIGVsZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb24udGFyZ2V0KVxuICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgdGhpcy5fbGF6eUxvYWRFbGVtKG9wdGlvbiwgdGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZE1vcmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgdGhpcy5fbG9hZE1vcmVDb250YWluZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxvYWQtbW9yZS1jb250YWluZXJdJylcblxuICAgIHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1tb3JlLXRyaWdnZXItY29udGFpbmVyXScpXG4gICAgdGhpcy5fbG9hZE1vcmVUcmlnZ2VyID0gdGhpcy5fbG9hZE1vcmVUcmlnZ2VyQ29udGFpbmVyID8gdGhpcy5fbG9hZE1vcmVUcmlnZ2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxvYWQtbW9yZS10cmlnZ2VyXScpIDogbnVsbFxuXG4gICAgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1wcmV2aW91cy10cmlnZ2VyLWNvbnRhaW5lcl0nKVxuICAgIHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXIgPSB0aGlzLl9sb2FkUHJldmlvdXNUcmlnZ2VyQ29udGFpbmVyID8gdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2FkLXByZXZpb3VzLXRyaWdnZXJdJykgOiBudWxsXG5cblxuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZVxuICAgIHRoaXMuX29yaWdpbmFsVGV4dCA9IHRoaXMuX2xvYWRNb3JlVHJpZ2dlciA/IHRoaXMuX2xvYWRNb3JlVHJpZ2dlci5pbm5lckhUTUwgOiAnJ1xuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSB0aGlzLl9vcHRpb25zLmJhc2VQYWdlXG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSB0aGlzLl9vcHRpb25zLmJhc2VQYWdlXG5cbiAgICB0aGlzLl9iYXNlVVJMID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gIH1cblxuICBhc3luYyBtb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRNb3JlVHJpZ2dlcikge1xuICAgICAgdGhpcy5fbG9hZE1vcmVUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fbG9hZCh0aGlzLl9sb2FkTW9yZVRyaWdnZXIsIHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lciwgJ25leHQnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlcikge1xuICAgICAgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2xvYWQodGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlciwgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lciwgJ3ByZXZpb3VzJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaGlzdG9yeVN0YXRlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fdHJhY2tTY3JvbGwuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgdGhpcy5fc2V0dXBJbmZpbml0ZVNjcm9sbCgpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2xvYWQgKHRyaWdnZXIsIGNvbnRhaW5lciwgdHlwZSkge1xuICAgIGlmICh0aGlzLl9sb2FkaW5nKSByZXR1cm4gZmFsc2VcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JhZGlhbnQtLWxvYWRpbmcnKVxuXG4gICAgdHJpZ2dlci5pbm5lckhUTUwgPSB0aGlzLl9vcHRpb25zLmxvYWRpbmdUZXh0XG5cbiAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcblxuICAgIGlmICh0eXBlID09ICduZXh0Jykge1xuICAgICAgdGhpcy5fcGFnZU51bWJlcisrXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhZ2VOdW1iZXItLVxuICAgIH1cblxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICBsZXQgaHRtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZGF0YSwgJ3RleHQvaHRtbCcpXG5cbiAgICBsZXQgaXRlbXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxvYWQtbW9yZS1jb250YWluZXJdID4gKicpXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UtbnVtYmVyJywgdGhpcy5fcGFnZU51bWJlcilcbiAgICB9XG5cbiAgICB0aGlzLl90aGVtZS5tb3VudENvbXBvbmVudHMoZnJhZ21lbnQpXG5cbiAgICBsZXQgbmV3TG9hZE1vcmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgIHRoaXMuX2xvYWRNb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuICAgICAgbmV3TG9hZE1vcmVUcmlnZ2VyID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2FkLW1vcmUtdHJpZ2dlcl0nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2FkTW9yZUNvbnRhaW5lci5wcmVwZW5kKGZyYWdtZW50KVxuICAgICAgbmV3TG9hZE1vcmVUcmlnZ2VyID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2FkLXByZXZpb3VzLXRyaWdnZXJdJylcbiAgICB9XG5cbiAgICBpZiAobmV3TG9hZE1vcmVUcmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnaHJlZicsIG5ld0xvYWRNb3JlVHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2VcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpYW50LS1sb2FkaW5nJylcblxuICAgIHRyaWdnZXIuaW5uZXJIVE1MID0gdGhpcy5fb3JpZ2luYWxUZXh0XG5cbiAgICB0aGlzLl9jdHguZW1pdCgncmFkaWFudC0tbGF6eS1sb2FkLXVwZGF0ZScpXG4gICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLXF1aWNrbGluay1saXN0ZW4tdG8nLCBudWxsLCB0aGlzLl9lbGVtKVxuICB9XG5cbiAgX3NldHVwSW5maW5pdGVTY3JvbGwgKCkge1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lciAmJiBlbnRyeS50YXJnZXQgPT09IHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT0FEIE1PUkVcIilcbiAgICAgICAgICAgIHRoaXMuX2xvYWQodGhpcy5fbG9hZE1vcmVUcmlnZ2VyLCB0aGlzLl9sb2FkTW9yZVRyaWdnZXJDb250YWluZXIsICduZXh0JylcbiAgICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9sb2FkUHJldmlvdXNUcmlnZ2VyQ29udGFpbmVyICYmIGVudHJ5LnRhcmdldCA9PT0gdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT0FEIFBSRVZcIilcbiAgICAgICAgICAgIHRoaXMuX2xvYWQodGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlciwgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lciwgJ3ByZXYnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIHJvb3RNYXJnaW46IFwiNTAwcHhcIlxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fbG9hZE1vcmVUcmlnZ2VyQ29udGFpbmVyKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lcikge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9sb2FkUHJldmlvdXNUcmlnZ2VyQ29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIF90cmFja1Njcm9sbCAoKSB7XG4gICAgbGV0IGZpcnN0RWxlbUluVmlldyA9IG51bGxcbiAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX2xvYWRNb3JlQ29udGFpbmVyLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gMCkge1xuICAgICAgICBmaXJzdEVsZW1JblZpZXcgPSBlbGVtXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoZmlyc3RFbGVtSW5WaWV3KSB7XG4gICAgICBsZXQgcGFnZU51bWJlciA9IGZpcnN0RWxlbUluVmlldy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1udW1iZXInKVxuICAgICAgaWYgKHBhZ2VOdW1iZXIgJiYgTnVtYmVyKHBhZ2VOdW1iZXIpICE9PSB0aGlzLl9jdXJyZW50UGFnZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZSA9IE51bWJlcihwYWdlTnVtYmVyKVxuICAgICAgICB0aGlzLl91cGRhdGVIaXN0b3J5U3RhdGUoKVxuICAgICAgfSBlbHNlIGlmICghcGFnZU51bWJlciAmJiB0aGlzLl9jdXJyZW50UGFnZSAhPT0gdGhpcy5fb3B0aW9ucy5iYXNlUGFnZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZSA9IHRoaXMuX29wdGlvbnMuYmFzZVBhZ2VcbiAgICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeVN0YXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fdHJhY2tTY3JvbGwuYmluZCh0aGlzKSlcbiAgfVxuXG4gIF91cGRhdGVIaXN0b3J5U3RhdGUgKCkge1xuICAgIGxldCBuZXd1cmwgPSBgJHt0aGlzLl9iYXNlVVJMfT9wYWdlPSR7dGhpcy5fY3VycmVudFBhZ2V9YFxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHBhdGg6IG5ld3VybCB9LCAnJywgbmV3dXJsKVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2tTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gIH1cblxuICBhc3luYyBtb3VudCAoKSB7XG4gICAgbGV0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwsIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzIH0gPSBhd2FpdCBpbXBvcnQoJ2JvZHktc2Nyb2xsLWxvY2snKVxuXG4gICAgdGhpcy5fZGlzYWJsZUJvZHlTY3JvbGwgPSBkaXNhYmxlQm9keVNjcm9sbFxuICAgIHRoaXMuX2VuYWJsZUJvZHlTY3JvbGwgPSBlbmFibGVCb2R5U2Nyb2xsXG4gICAgdGhpcy5fY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgPSBjbGVhckFsbEJvZHlTY3JvbGxMb2Nrc1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5fb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9vcHRpb25Mb2dpYyhvcHRpb24pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKHRoaXMuX29wdGlvbnMpXG4gICAgfVxuXG4gICAgdGhpcy5fY3R4Lm9uKCdyYWRpYW50LS1zY3JvbGwtbG9jay1lbGVtJywgKHN0YXRlLCBkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9sb2NrU2Nyb2xsKGRhdGEpXG4gICAgfSlcblxuICAgIHRoaXMuX2N0eC5vbigncmFkaWFudC0tY2xlYXItYWxsLXNjcm9sbC1sb2NrcycsIChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKVxuXG4gICAgICBsZXQgbG9ja2VkRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pcy1sb2NrZWQ9XCJ0cnVlXCJdJylcbiAgICAgIGZvciAobGV0IGVsZW0gb2YgbG9ja2VkRWxlbXMpIHtcbiAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX29wdGlvbkxvZ2ljKG9wdGlvbikge1xuICAgIGlmICghb3B0aW9uLm9uKSB7XG4gICAgICBvcHRpb24ub24gPSAnY2xpY2snXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi53aGVuT3V0c2lkZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihvcHRpb24ub24sIGUgPT4ge1xuICAgICAgICBsZXQgY2xpY2tJc0luc2lkZSA9IHRoaXMuX2VsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IHRoaXMuX2VsZW0gPT09IGUudGFyZ2V0XG4gICAgICAgIGxldCB0b0V4Y2x1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi53aGVuT3V0c2lkZUV4Y2VwdClcbiAgICAgICAgbGV0IGhhc0NsaWNrZWRFeGNsdWRlID0gQXJyYXkuZnJvbSh0b0V4Y2x1ZGUpLnNvbWUoZWxlbSA9PiBlbGVtLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlbGVtID09PSBlLnRhcmdldClcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24udGFyZ2V0KVxuXG4gICAgICAgIGxldCBoYXNDbGlja2VkT3RoZXJMb2NrU2Nyb2xsID0gSGVscGVycy5oYXNQYXJlbnRXaXRoU2VsZWN0b3IoZS50YXJnZXQsICdbZGF0YS1sb2NrLXNjcm9sbF0nKVxuXG4gICAgICAgIGlmIChoYXNDbGlja2VkT3RoZXJMb2NrU2Nyb2xsICYmICFjbGlja0lzSW5zaWRlICYmICFoYXNDbGlja2VkRXhjbHVkZSkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWNrSXNJbnNpZGUgfHwgaGFzQ2xpY2tlZEV4Y2x1ZGUpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHRoaXMuX2V2ZW50TG9naWMob3B0aW9uLCBlKVxuICAgICAgXG4gICAgICB9LCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgZSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50TG9naWMob3B0aW9uLCBlKVxuICAgICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgX2V2ZW50TG9naWMob3B0aW9uLCBlKSB7XG4gICAgaWYgKG9wdGlvbi5vbmx5VGhpc0VsZW0gJiYgZS50YXJnZXQgIT09IHRoaXMuX2VsZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyQWxsQm9keVNjcm9sbExvY2tzKClcblxuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbi50YXJnZXQpXG5cbiAgICBpZiAob3B0aW9uLm1ldGhvZCA9PT0gJ2xvY2tTY3JvbGwnKSB7XG4gICAgICB0aGlzLl9sb2NrU2Nyb2xsKHRhcmdldClcbiAgICB9IGVsc2UgaWYgKG9wdGlvbi5tZXRob2QgPT09ICd0b2dnbGVTY3JvbGwnKSB7XG4gICAgICBpZiAoIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJykpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0LCB7IHJlc2VydmVTY3JvbGxCYXJHYXA6IHRydWUgfSlcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnLCB0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKVxuICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWlzLWxvY2tlZCcpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsb2NrZWRFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlzLWxvY2tlZD1cInRydWVcIl0nKVxuICAgICAgZm9yIChsZXQgZWxlbSBvZiBsb2NrZWRFbGVtcykge1xuICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9sb2NrU2Nyb2xsKGVsZW0pIHtcbiAgICB0aGlzLl9jbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpXG4gICAgbGV0IGxvY2tlZEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaXMtbG9ja2VkPVwidHJ1ZVwiXScpXG4gICAgZm9yIChsZXQgZWxlbSBvZiBsb2NrZWRFbGVtcykge1xuICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJylcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fZGlzYWJsZUJvZHlTY3JvbGwoZWxlbSwgeyByZXNlcnZlU2Nyb2xsQmFyR2FwOiB0cnVlIH0pXG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJywgdHJ1ZSlcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcblxuY2xhc3MgTWVnYU1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi57XG4gICAgICBoaXN0b3J5U3RhdGU6IGZhbHNlXG4gICAgfSwgLi4udGhpcy5fb3B0aW9uc31cbiAgICB0aGlzLl9uYXZJdGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmF2LWl0ZW1dJylcbiAgICB0aGlzLl9tZWdhTWVudXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1lZ2EtbWVudV0nKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0aGlzLl9uYXZJdGVtcykge1xuICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG1lZ2FNZW51IG9mIHRoaXMuX21lZ2FNZW51cykge1xuICAgICAgICAgIG1lZ2FNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxuICAgICAgICAgIGxldCBuYXZJdGVtID0gbWVnYU1lbnUucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIG1lZ2FNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxuICAgICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tb3BlbicpXG4gICAgICAgIH0gXG4gICAgICAgIGxldCBtZWdhTWVudSA9IG5hdkl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIGlmIChtZWdhTWVudS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWVnYS1tZW51JykpIHtcbiAgICAgICAgICBtZWdhTWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IG1lZ2FNZW51ID0gbmF2SXRlbS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICBpZiAobWVnYU1lbnUuaGFzQXR0cmlidXRlKCdkYXRhLW1lZ2EtbWVudScpKSB7XG4gICAgICAgICAgICBtZWdhTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcbiAgICAgICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tb3BlbicpXG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZvciAobGV0IG1lZ2FNZW51IG9mIHRoaXMuX21lZ2FNZW51cykge1xuICAgICAgbGV0IG1lZ2FNZW51SW5uZXIgPSBtZWdhTWVudS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZWdhLW1lbnUtaW5uZXJdJylcbiAgICAgIG1lZ2FNZW51SW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmF2SXRlbSA9IG1lZ2FNZW51LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LmFkZCgnb3BlbicpXG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBtZWdhTWVudUlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICBsZXQgbmF2SXRlbSA9IG1lZ2FNZW51LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tb3BlbicpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRob2RDYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuX29wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uTG9naWMob3B0aW9uKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vcHRpb25Mb2dpYyh0aGlzLl9vcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIF9vcHRpb25Mb2dpYyhvcHRpb24pIHtcbiAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCBhc3luYyBlID0+IHtcbiAgICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb24ub25seVRoaXNFbGVtICYmIGUudGFyZ2V0ICE9PSB0aGlzLl9lbGVtKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgY29tcCA9IHRoaXMuX3RoZW1lLmdldENvbXBvbmVudChvcHRpb24uY29tcG9uZW50SWQpLmNvbXBvbmVudFxuICAgICAgY29tcFtvcHRpb24ubWV0aG9kXSguLi5vcHRpb24uYXJncylcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtaW5wdXRdJylcbiAgICB0aGlzLl9taW51cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbWludXNdJylcbiAgICB0aGlzLl9wbHVzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbHVzXScpXG4gICAgdGhpcy5fbWF4ID0gdGhpcy5faW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSA/IE51bWJlcih0aGlzLl9pbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpKSA6IG51bGxcbiAgICB0aGlzLl9taW4gPSB0aGlzLl9pbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpID8gTnVtYmVyKHRoaXMuX2lucHV0LmdldEF0dHJpYnV0ZSgnbWluJykpIDogbnVsbFxuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICBsZXQgY3VycmVudFZhbHVlID0gTnVtYmVyKHRoaXMuX2lucHV0LnZhbHVlKVxuICAgICAgaWYgKHRoaXMuX21pbiAmJiBjdXJyZW50VmFsdWUgPCB0aGlzLl9taW4pIHtcbiAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSB0aGlzLl9taW5cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9tYXggJiYgY3VycmVudFZhbHVlID4gdGhpcy5fbWF4KSB7XG4gICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gdGhpcy5fbWF4XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX21pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBuZXdWYWx1ZSA9IE51bWJlcih0aGlzLl9pbnB1dC52YWx1ZSkgLSAxXG4gICAgICBpZiAodGhpcy5fbWluICYmIG5ld1ZhbHVlIDwgdGhpcy5fbWluKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBuZXdWYWx1ZVxuICAgIH0pXG5cbiAgICB0aGlzLl9wbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBuZXdWYWx1ZSA9IE51bWJlcih0aGlzLl9pbnB1dC52YWx1ZSkgKyAxXG4gICAgICBpZiAodGhpcy5fbWF4ICYmIG5ld1ZhbHVlID4gdGhpcy5fbWF4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBuZXdWYWx1ZVxuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdEZpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgfVxuXG4gIGFzeW5jIG1vdW50ICgpIHtcbiAgICBsZXQgb2JqZWN0Rml0SW1hZ2VzID0gYXdhaXQgaW1wb3J0KCdvYmplY3QtZml0LWltYWdlcycpXG4gICAgb2JqZWN0Rml0SW1hZ2VzLmRlZmF1bHQoKVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgICAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICAgICAgICB0aGlzLl9vcHRpb25zID0gey4uLntcbiAgICAgICAgICBoaXN0b3J5U3RhdGU6IHRydWVcbiAgICAgICAgfSwgLi4udGhpcy5fb3B0aW9uc31cbiAgICAgICAgdGhpcy5fcHJvZHVjdCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1qc29uXScpID8gSlNPTi5wYXJzZSh0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtanNvbl0nKS5pbm5lckhUTUwpIDogbnVsbFxuICAgICAgICB0aGlzLl92YXJpYW50T3B0aW9uVHJpZ2dlcnMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uLXRyaWdnZXJdJylcbiAgICAgICAgdGhpcy5fdmFyaWFudCA9IG51bGxcbiAgICAgICAgdGhpcy5fc2VsbGluZ1BsYW4gPSBudWxsXG4gICAgICAgIHRoaXMuX21hc3RlclNlbGVjdHMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1hc3Rlci1zZWxlY3RdJylcbiAgICAgICAgdGhpcy5fcHJpY2VXcmFwcGVycyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1wcmljZXNdJylcbiAgICAgICAgdGhpcy5fcHJpY2VzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcmljZV0nKVxuICAgICAgICB0aGlzLl9wcmljZVZhcmllcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJpY2UtdmFyaWVzXScpXG4gICAgICAgIHRoaXMuX2NvbXBhcmVQcmljZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbXBhcmUtcHJpY2VdJylcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ltYWdlcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1pbWFnZV0nKVxuICAgICAgICB0aGlzLl9hZGRUb0NhcnRzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdWJtaXRdJylcbiAgICAgICAgdGhpcy5fYWRkVG9DYXJ0SFRNTCA9IEFycmF5LmZyb20odGhpcy5fYWRkVG9DYXJ0cykubWFwKGVsZW0gPT4ge1xuICAgICAgICAgIGxldCB0ZXh0RWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc3VibWl0LXRleHRdJykgfHwgZWxlbVxuICAgICAgICAgIHJldHVybiB0ZXh0RWxlbS5pbm5lckhUTUxcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLl9xdWFudGl0eUlucHV0ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1xdWFudGl0eS1pbnB1dF0nKVxuICAgICAgICB0aGlzLl9xdWFudGl0eVNlbGVjdHMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXF1YW50aXR5XScpXG4gICAgICAgIHRoaXMuX3ZhcmlhbnRSYWRpb3MgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhcmlhbnQtaWRdJylcblxuICAgICAgICB0aGlzLl9leHRyYVByb2R1Y3RzSW5wdXQgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV4dHJhLXByb2R1Y3RzXScpXG4gICAgICAgIHRoaXMuX2V4dHJhUHJvZHVjdFJhZGlvcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXh0cmEtcHJvZHVjdF0nKVxuXG4gICAgICAgIHRoaXMuX3NlbGxpbmdQbGFuSW5wdXQgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGxpbmctcGxhbl0nKVxuXG4gICAgICAgIHRoaXMuX2F0Y0FyZWFzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdGMtYXJlYV0nKVxuICAgICAgICB0aGlzLl9vb3NBcmVhcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb29zLWFyZWFdJylcbiAgICB9XG5cbiAgICBtb3VudCAoKSB7XG4gICAgICBpZiAodGhpcy5fcHJvZHVjdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5fdmFyaWFudCA9IHRoaXMuX2dldFZhcmlhbnRGcm9tT3B0aW9ucygpXG5cbiAgICAgIC8vIGZvciAobGV0IG9wdGlvblNlbGVjdG9yIG9mIHRoaXMuX3ZhcmlhbnRPcHRpb25UcmlnZ2Vycykge1xuICAgICAgLy8gICBvcHRpb25TZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIC8vICAgICB0aGlzLl9vblNlbGVjdENoYW5nZSgpXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGZvciAobGV0IG9wdGlvblNlbGVjdG9yIG9mIHRoaXMuX3ZhcmlhbnRSYWRpb3MpIHtcbiAgICAgIC8vICAgb3B0aW9uU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAvLyAgICAgdGhpcy5fb25TZWxlY3RDaGFuZ2UoKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuXG4gICAgICAvLyBmb3IgKGxldCBvcHRpb25TZWxlY3RvciBvZiB0aGlzLl9tYXN0ZXJTZWxlY3RzKSB7XG4gICAgICAvLyAgIG9wdGlvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgLy8gICAgIHRoaXMuX29uU2VsZWN0Q2hhbmdlKClcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH1cblxuICAgICAgLy8gZm9yIChsZXQgb3B0aW9uU2VsZWN0b3Igb2YgdGhpcy5fZXh0cmFQcm9kdWN0UmFkaW9zKSB7XG4gICAgICAvLyAgIG9wdGlvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgLy8gICAgIHRoaXMuX29uRXh0cmFQcm9kdWN0UmFkaW9DaGFuZ2UoKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuXG4gICAgICAvLyBmb3IgKGxldCBxdWFudGl0eVN3aXRjaCBvZiB0aGlzLl9xdWFudGl0eVNlbGVjdHMpIHtcbiAgICAgIC8vICAgcXVhbnRpdHlTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAvLyAgICAgaWYgKHF1YW50aXR5U3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgIC8vICAgICAgIHRoaXMuX3F1YW50aXR5SW5wdXQudmFsdWUgPSBxdWFudGl0eVN3aXRjaC5kYXRhc2V0LnF1YW50aXR5XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLl9vblNlbGVjdENoYW5nZSgpXG4gICAgfVxuXG4gICAgX29uRXh0cmFQcm9kdWN0UmFkaW9DaGFuZ2UgKCkge1xuICAgICAgbGV0IGV4dHJhUHJvZHVjdHMgPSBbXVxuXG4gICAgICBmb3IgKGxldCByYWRpbyBvZiB0aGlzLl9leHRyYVByb2R1Y3RSYWRpb3MpIHtcbiAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShyYWRpby5kYXRhc2V0LmV4dHJhUHJvZHVjdClcbiAgICAgICAgICBleHRyYVByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IG9iai5pZCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBvYmoucXVhbnRpdHksXG4gICAgICAgICAgICBzZWxsaW5nX3BsYW46IG9iai5zZWxsaW5nX3BsYW5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9leHRyYVByb2R1Y3RzSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fZXh0cmFQcm9kdWN0c0lucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZXh0cmFQcm9kdWN0cylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGlua2VkT3B0aW9ucyAodmFyaWFudCkge1xuICAgICAgZm9yIChsZXQgb3B0aW9uU2VsZWN0b3Igb2YgdGhpcy5fdmFyaWFudE9wdGlvblRyaWdnZXJzKSB7XG4gICAgICAgIG9wdGlvblNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICBmb3IgKGxldCBwcm9kVmFyaWFudCBvZiB0aGlzLl9wcm9kdWN0LnZhcmlhbnRzKSB7XG4gICAgICAgICAgaWYgKHByb2RWYXJpYW50Lm9wdGlvbjEgPT09IHZhcmlhbnQub3B0aW9uMSAmJiBvcHRpb25TZWxlY3Rvci52YWx1ZSA9PT0gcHJvZFZhcmlhbnQub3B0aW9uMiAmJiAhcHJvZFZhcmlhbnQuYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBvcHRpb25TZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TZWxlY3RDaGFuZ2UgKCkge1xuICAgICAgbGV0IHZhcmlhbnQgPSB0aGlzLl9nZXRWYXJpYW50RnJvbU9wdGlvbnMoKVxuXG4gICAgICB0aGlzLl91cGRhdGVBZGRUb0NhcnRTdGF0ZSh2YXJpYW50KVxuICAgICAgaWYgKCF2YXJpYW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl91cGRhdGVNYXN0ZXJTZWxlY3QodmFyaWFudClcbiAgICAgIHRoaXMuX3VwZGF0ZVByb2R1Y3RQcmljZXModmFyaWFudClcbiAgICAgIHRoaXMuX3N3aXRjaFRvVmFyaWFudEltYWdlKHZhcmlhbnQpXG4gICAgICB0aGlzLl9vbkV4dHJhUHJvZHVjdFJhZGlvQ2hhbmdlKClcbiAgICAgIHRoaXMuX3VwZGF0ZVNlbGxpbmdQbGFuKHZhcmlhbnQpXG4gICAgICB0aGlzLl91cGRhdGVBdGNBcmVhcyh2YXJpYW50KVxuICAgICAgLy8gdGhpcy5fbGlua2VkT3B0aW9ucyh2YXJpYW50KVxuICAgICAgdGhpcy5fdmFyaWFudCA9IHZhcmlhbnRcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaGlzdG9yeVN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeVN0YXRlKHZhcmlhbnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZUF0Y0FyZWFzICh2YXJpYW50KSB7XG4gICAgICBmb3IgKGxldCBhcmVhIG9mIHRoaXMuX2F0Y0FyZWFzKSB7XG4gICAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICAgIGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBhcmVhIG9mIHRoaXMuX29vc0FyZWFzKSB7XG4gICAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVTZWxsaW5nUGxhbiAodmFyaWFudCkge1xuICAgICAgaWYgKCF0aGlzLl9zZWxsaW5nUGxhbklucHV0KSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy5fc2VsbGluZ1BsYW5JbnB1dC52YWx1ZSA9ICcnXG4gICAgICB0aGlzLl9zZWxsaW5nUGxhbiA9IG51bGxcblxuICAgICAgaWYgKHZhcmlhbnQuc2VsbGluZ19wbGFuX2FsbG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2VsbGluZ1BsYW4gPSB2YXJpYW50LnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uc1swXS5zZWxsaW5nX3BsYW5faWRcbiAgICAgICAgdGhpcy5fc2VsbGluZ1BsYW5JbnB1dC52YWx1ZSA9IHRoaXMuX3NlbGxpbmdQbGFuXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZUhpc3RvcnlTdGF0ZSAodmFyaWFudCkge1xuICAgICAgaWYgKCFoaXN0b3J5LnJlcGxhY2VTdGF0ZSB8fCAhdmFyaWFudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBuZXd1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT92YXJpYW50PSR7dmFyaWFudC5pZH1gXG5cbiAgICAgIGlmICh0aGlzLl9zZWxsaW5nUGxhbikge1xuICAgICAgICBuZXd1cmwgKz0gYCZzZWxsaW5nX3BsYW49JHt0aGlzLl9zZWxsaW5nUGxhbn1gXG4gICAgICB9XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybClcbiAgICB9XG5cbiAgICBfdXBkYXRlQWRkVG9DYXJ0U3RhdGUgKHZhcmlhbnQpIHtcbiAgICAgIGlmICghdmFyaWFudCAmJiB0aGlzLl9wcm9kdWN0LmF2YWlsYWJsZSkge1xuICAgICAgICBmb3IgKGxldCBhZGRUb0NhcnQgb2YgdGhpcy5fYWRkVG9DYXJ0cykge1xuICAgICAgICAgIGFkZFRvQ2FydC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICBsZXQgYWRkVG9DYXJ0VGV4dCA9IGFkZFRvQ2FydC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdWJtaXQtdGV4dF0nKSB8fCBhZGRUb0NhcnRcbiAgICAgICAgICBhZGRUb0NhcnRUZXh0LmlubmVySFRNTCA9IHRoaXMuX2N0eC5nZXRTdGF0ZSgpLmxvY2FsZS5tYWtlQVNlbGVjdGlvblxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhcmlhbnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICBmb3IgKGxldCBbaSwgYWRkVG9DYXJ0XSBvZiB0aGlzLl9hZGRUb0NhcnRzLmVudHJpZXMoKSkge1xuICAgICAgICAgIGFkZFRvQ2FydC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICBsZXQgYWRkVG9DYXJ0VGV4dCA9IGFkZFRvQ2FydC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdWJtaXQtdGV4dF0nKSB8fCBhZGRUb0NhcnRcbiAgICAgICAgICBhZGRUb0NhcnRUZXh0LmlubmVySFRNTCA9IHRoaXMuX2FkZFRvQ2FydEhUTUxbaV1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgYWRkVG9DYXJ0IG9mIHRoaXMuX2FkZFRvQ2FydHMpIHtcbiAgICAgICAgICBhZGRUb0NhcnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgbGV0IGFkZFRvQ2FydFRleHQgPSBhZGRUb0NhcnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3VibWl0LXRleHRdJykgfHwgYWRkVG9DYXJ0XG4gICAgICAgICAgYWRkVG9DYXJ0VGV4dC5pbm5lckhUTUwgPSB0aGlzLl9jdHguZ2V0U3RhdGUoKS5sb2NhbGUuc29sZE91dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3N3aXRjaFRvVmFyaWFudEltYWdlICh2YXJpYW50KSB7XG4gICAgICBmb3IgKGxldCBwcm9kdWN0SW1hZ2Ugb2YgdGhpcy5faW1hZ2VzKSB7XG4gICAgICAgIGlmIChwcm9kdWN0SW1hZ2UuZGF0YXNldC5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICBsZXQgaWRBcnJheSA9IHByb2R1Y3RJbWFnZS5kYXRhc2V0LnByb2R1Y3RJbWFnZS5zcGxpdCgnLCcpXG4gICAgICAgICAgaWYgKGlkQXJyYXkuaW5jbHVkZXModmFyaWFudC5pZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgbGV0IG1haW5TbGlkZXIgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnQoJ21haW5Qcm9kdWN0U2xpZGVyJylcbiAgICAgICAgICAgIGlmIChtYWluU2xpZGVyKSB7XG4gICAgICAgICAgICAgIG1haW5TbGlkZXIuY29tcG9uZW50LmdvVG9TbGlkZShwcm9kdWN0SW1hZ2UuZGF0YXNldC5pbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlUHJvZHVjdFByaWNlcyAodmFyaWFudCkge1xuICAgICAgZm9yIChsZXQgdmFyaWVzIG9mIHRoaXMuX3ByaWNlVmFyaWVzKSB7XG4gICAgICAgIHZhcmllcy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgcHJvZHVjdFByaWNlIG9mIHRoaXMuX3ByaWNlcykge1xuICAgICAgICBpZiAodmFyaWFudC5jb21wYXJlX2F0X3ByaWNlID4gdmFyaWFudC5wcmljZSkge1xuICAgICAgICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdvbi1zYWxlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9kdWN0UHJpY2UuY2xhc3NMaXN0LnJlbW92ZSgnb24tc2FsZScpXG4gICAgICAgIH1cbiAgICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IHRoaXMuX2Zvcm1hdE1vbmV5KHZhcmlhbnQucHJpY2UpXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHByb2R1Y3RDb21wYXJlUHJpY2Ugb2YgdGhpcy5fY29tcGFyZVByaWNlcykge1xuICAgICAgICBpZiAodmFyaWFudC5jb21wYXJlX2F0X3ByaWNlID4gdmFyaWFudC5wcmljZSkge1xuICAgICAgICAgIHByb2R1Y3RDb21wYXJlUHJpY2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgcHJvZHVjdENvbXBhcmVQcmljZS5pbm5lckhUTUwgPSB0aGlzLl9mb3JtYXRNb25leSh2YXJpYW50LmNvbXBhcmVfYXRfcHJpY2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvZHVjdENvbXBhcmVQcmljZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICBwcm9kdWN0Q29tcGFyZVByaWNlLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9ybWF0TW9uZXkgKHByaWNlKSB7XG4gICAgICByZXR1cm4gSGVscGVycy5mb3JtYXRNb25leShwcmljZSwgdGhpcy5fY3R4LmdldFN0YXRlKCkpXG4gICAgfVxuXG4gICAgX3VwZGF0ZU1hc3RlclNlbGVjdCAodmFyaWFudCkge1xuICAgICAgZm9yIChsZXQgb3JpZ2luYWxTZWxlY3RvciBvZiB0aGlzLl9tYXN0ZXJTZWxlY3RzKSB7XG4gICAgICAgIG9yaWdpbmFsU2VsZWN0b3IudmFsdWUgPSB2YXJpYW50LmlkXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEN1cnJlbnRPcHRpb25zICgpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IFtdXG4gICAgICBmb3IgKGxldCBvcHRpb25TZWxlY3RvciBvZiB0aGlzLl92YXJpYW50T3B0aW9uVHJpZ2dlcnMpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBvcHRpb25TZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbiA9IHt9XG4gICAgICAgIGxldCBhbHJlYWR5RG9uZSA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBjdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgIGlmIChvcHRpb24uaW5kZXggPT09IG9wdGlvblNlbGVjdG9yLmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgICAgIGFscmVhZHlEb25lID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxyZWFkeURvbmUpIGNvbnRpbnVlXG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nIHx8IHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBpZiAob3B0aW9uU2VsZWN0b3IuY2hlY2tlZCkge1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbi52YWx1ZSA9IG9wdGlvblNlbGVjdG9yLnZhbHVlXG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uLmluZGV4ID0gb3B0aW9uU2VsZWN0b3IuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMucHVzaChjdXJyZW50T3B0aW9uKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5wdXNoKGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uLnZhbHVlID0gb3B0aW9uU2VsZWN0b3IudmFsdWVcbiAgICAgICAgICBjdXJyZW50T3B0aW9uLmluZGV4ID0gb3B0aW9uU2VsZWN0b3IuZGF0YXNldC5pbmRleFxuICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnB1c2goY3VycmVudE9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3VycmVudE9wdGlvbnMgPSBIZWxwZXJzLmNvbXBhY3QoY3VycmVudE9wdGlvbnMpXG4gICAgICByZXR1cm4gY3VycmVudE9wdGlvbnNcbiAgICB9XG5cbiAgICBfZ2V0VmFyaWFudEZyb21PcHRpb25zICgpIHtcbiAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuX2dldEN1cnJlbnRPcHRpb25zKClcbiAgICAgIGxldCB2YXJpYW50cyA9IHRoaXMuX3Byb2R1Y3QudmFyaWFudHNcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IHJhZGlvIG9mIHRoaXMuX3ZhcmlhbnRSYWRpb3MpIHtcbiAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdC52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gYCR7dmFyaWFudC5pZH1gID09PSByYWRpby5kYXRhc2V0LnZhcmlhbnRJZClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgICAgdmFyIHNhdGlzZmllZCA9IHRydWVcblxuICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3RlZFZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHNhdGlzZmllZCkge1xuICAgICAgICAgICAgICBzYXRpc2ZpZWQgPSAob3B0aW9uLnZhbHVlID09PSB2YXJpYW50W29wdGlvbi5pbmRleF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNhdGlzZmllZCkge1xuICAgICAgICAgICAgZm91bmQgPSB2YXJpYW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3QudmFyaWFudHMuZmluZCh2YXJpYW50ID0+IGAke3ZhcmlhbnQuaWR9YCA9PT0gYCR7dGhpcy5fbWFzdGVyU2VsZWN0c1swXS52YWx1ZX1gKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm91bmQgfHwgbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrbGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICB0aGlzLl9vcHRpb25zID0gey4uLntcbiAgICAgIGxpbWl0OiA1MCxcbiAgICAgIGlnbm9yZXM6IFtcbiAgICAgICAgdXJsID0+IHtcbiAgICAgICAgICBsZXQgdG9UZXN0ID0gdXJsLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLCAnJylcbiAgICAgICAgICBsZXQgdG9JZ25vcmUgPSBbXG4gICAgICAgICAgJy9hY2NvdW50L2xvZ291dCcsXG4gICAgICAgICAgJy9hY2NvdW50L2xvZ2luJyxcbiAgICAgICAgICAnL2NhcnQvY2xlYXInLFxuICAgICAgICAgICcvY2FydC9hZGQnLFxuICAgICAgICAgICcvY2FydC91cGRhdGUnLFxuICAgICAgICAgICcvY2FydC9jaGFuZ2UnLFxuICAgICAgICAgICcvcGFnZXMvcHJpdmFjeS1wb2xpY3knLFxuICAgICAgICAgICcvcGFnZXMvcG9saWNpZXMnLFxuICAgICAgICAgICcvI3N3eW0td2lzaGxpc3QnLFxuICAgICAgICAgICcvc2VhcmNoJyxcbiAgICAgICAgICAnLyMnLFxuICAgICAgICAgICcvI21haW4nLFxuICAgICAgICAgICcvY2hlY2tvdXQnXG4gICAgICAgICAgXVxuICAgICAgICAgIGxldCBpZ25vcmluZyA9IHRvSWdub3JlLnNvbWUodXJsVG9JZ25vcmUgPT4gdG9UZXN0LmluY2x1ZGVzKHVybFRvSWdub3JlKSlcblxuICAgICAgICAgIHJldHVybiBpZ25vcmluZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSwgLi4udGhpcy5fb3B0aW9uc31cbiAgfVxuXG4gIGFzeW5jIG1vdW50ICgpIHtcbiAgICBsZXQgcXVpY2tsaW5rID0gYXdhaXQgaW1wb3J0KCdxdWlja2xpbmsnKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyBlID0+IHtcbiAgICAgIHRoaXMuX29wdGlvbnMuZWwgPSB0aGlzLl9lbGVtXG4gICAgICBxdWlja2xpbmsubGlzdGVuKHRoaXMuX29wdGlvbnMpXG4gICAgfSlcblxuICAgIHRoaXMuX2N0eC5vbigncmFkaWFudC0tcXVpY2tsaW5rLWxpc3Rlbi10bycsIChzdGF0ZSwgZWxlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbSlcbiAgICAgIHRoaXMuX29wdGlvbnMuZWwgPSBlbGVtXG4gICAgICBxdWlja2xpbmsubGlzdGVuKHRoaXMuX29wdGlvbnMpXG4gICAgfSlcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kZWRQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcbiAgICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlY29tbWVuZGVkLXByb2R1Y3RzLWNvbnRhaW5lcl0nKVxuICAgIH1cblxuICAgIGFzeW5jIG1vdW50ICgpIHtcbiAgICAgIGxldCB1cmwgPSBgJHt0aGlzLl9vcHRpb25zLmJhc2VVcmx9P3NlY3Rpb25faWQ9cHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMmcHJvZHVjdF9pZD0ke3RoaXMuX29wdGlvbnMucHJvZHVjdElkfSZsaW1pdD0ke3RoaXMuX29wdGlvbnMubGltaXR9JmludGVudD0ke3RoaXMuX29wdGlvbnMuaW50ZW50fWBcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpXG5cbiAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICAgIGxldCBodG1sID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhkYXRhLCAndGV4dC9odG1sJylcblxuICAgICAgbGV0IGl0ZW1zID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZWNvbW1lbmRlZC1pdGVtXScpXG4gICAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90aGVtZS5tb3VudENvbXBvbmVudHMoZnJhZ21lbnQpXG5cbiAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoZnJhZ21lbnQpXG5cbiAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1sYXp5LWxvYWQtdXBkYXRlJylcbiAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1xdWlja2xpbmstbGlzdGVuLXRvJywgbnVsbCwgdGhpcy5fY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5jb21wVG9Nb3VudCkge1xuICAgICAgICBsZXQgY29tcE9iaiA9IHRoaXMuX3RoZW1lLmdldENvbXBvbmVudCh0aGlzLl9vcHRpb25zLmNvbXBUb01vdW50KVxuICAgICAgICBpZiAoY29tcE9iaikge1xuICAgICAgICAgIGNvbXBPYmouY29tcG9uZW50Ll9vcHRpb25zLm1vdW50ID0gdHJ1ZVxuICAgICAgICAgIGNvbXBPYmouY29tcG9uZW50Lm1vdW50KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldENTU1ZhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcblxuICAgICAgICBpZiAob3B0aW9uLnVwZGF0ZU9uUmVzaXplID09PSB0cnVlKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTG9naWMob3B0aW9uKVxuICAgICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMudXBkYXRlT25SZXNpemUgPT09IHRydWUpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xuICAgICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKHRoaXMuX29wdGlvbnMpXG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vcHRpb25Mb2dpYyhvcHRpb24pIHtcbiAgICBsZXQgdG9HZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbi5zZWxlY3RvcilcbiAgICBsZXQgZGltZW5zaW9ucyA9IHRvR2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBsZXQgc2V0T24gPSBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XVxuXG4gICAgaWYgKG9wdGlvbi5zZXRPbikge1xuICAgICAgc2V0T24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi5zZXRPbilcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0b1NldCBvZiBzZXRPbikge1xuICAgICAgdG9TZXQuc3R5bGUuc2V0UHJvcGVydHkob3B0aW9uLnZhcixgJHtNYXRoLnJvdW5kKGRpbWVuc2lvbnNbb3B0aW9uLmdldF0pfXB4YClcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5cbmNsYXNzIFNpZGVDYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgICAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxuICAgICAgICB0aGlzLl9zY3JvbGxBcmVhID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zaWRlLWNhcnQtaXRlbXNdJylcbiAgICB9XG5cbiAgICBhc3luYyBtb3VudCAoKSB7XG4gICAgICAgIHRoaXMuX2N0eC5vbignc2hvdy1zaWRlLWNhcnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlQ2FydCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHBhcmFtcy5oYXMoJ3Nob3ctY2FydCcpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlQ2FydCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kb0VkaXRvckxpc3RlbmVycygpXG4gICAgfVxuXG4gICAgc2hvd1NpZGVDYXJ0ICgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQXJlYSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc2lkZS1jYXJ0LWl0ZW1zXScpXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnc2hvd24nKVxuICAgICAgICB0aGlzLl9jdHgub24oJ2NhcnQtaXRlbS1hZGRlZC0tcmVmcmVzaGVkJywgKHN0YXRlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxBcmVhID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zaWRlLWNhcnQtaXRlbXNdJylcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvd24nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1zY3JvbGwtbG9jay1lbGVtJywgbnVsbCwgdGhpcy5fc2Nyb2xsQXJlYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfZG9FZGl0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOnNlbGVjdCcsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY29udGFpbnModGhpcy5fZWxlbSkpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3Nob3duJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOmRlc2VsZWN0JywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jb250YWlucyh0aGlzLl9lbGVtKSkge1xuICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUNhcnRcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZVRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICBfb3B0aW9uTG9naWMob3B0aW9uKSB7XG4gICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgYXN5bmMgZSA9PiB7XG4gICAgICBpZiAob3B0aW9uLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24uc2VsZWN0b3IpXG4gICAgICBsZXQgbWV0aG9kID0gbnVsbFxuICAgICAgXG4gICAgICBpZiAob3B0aW9uLm1ldGhvZCA9PT0gJ3NsaWRlRG93bicpIHtcbiAgICAgICAgbWV0aG9kID0gJ19zbGlkZURvd24nXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbi5tZXRob2QgPT09ICdzbGlkZVVwJykge1xuICAgICAgICBtZXRob2QgPSAnX3NsaWRlVXAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRob2QgPSB0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpID8gJ19zbGlkZVVwJyA6ICdfc2xpZGVEb3duJ1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9uLnVzZVF1ZXVlKSB7XG4gICAgICAgIHRoaXMuX2N0eC5nZXRTdGF0ZSgpLmV2ZW50UXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpc1ttZXRob2RdKHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXNbbWV0aG9kXSh0YXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9zbGlkZURvd24gKGVsZW0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSdcbiAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSBlbGVtLnNjcm9sbEhlaWdodFxuICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAnMHB4J1xuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICAgIGVsZW0uZGF0YXNldC50cmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgICBsZXQgb3BlbkV2ZW50ID0gZSA9PiB7XG4gICAgICAgICAgaWYgKGUucHJvcGVydHlOYW1lID09PSAnbWF4LWhlaWdodCcpIHtcbiAgICAgICAgICAgIGVsZW0uZGF0YXNldC50cmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb3BlbkV2ZW50LCBmYWxzZSlcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9wZW5FdmVudCwgZmFsc2UpXG4gICAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7c2Nyb2xsSGVpZ2h0fXB4YFxuICAgICAgfSlcbiAgICB9KVxuICB9IFxuXG4gIF9zbGlkZVVwIChlbGVtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZWxlbS5zY3JvbGxIZWlnaHR9cHhgXG4gICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxuICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICAgIGxldCBjbG9zZUV2ZW50ID0gZSA9PiB7XG4gICAgICAgIGlmIChlLnByb3BlcnR5TmFtZSA9PT0gJ21heC1oZWlnaHQnKSB7XG4gICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xvc2VFdmVudCwgZmFsc2UpXG4gICAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbG9zZUV2ZW50LCBmYWxzZSlcbiAgICAgIEhlbHBlcnMubmV4dEZyYW1lKCgpID0+IHtcbiAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgMHB4YFxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi9saWIvSGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVUb2dnbGVHcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICB0aGlzLl9vcHRpb25zID0gey4uLntcbiAgICAgIGNsb3NlT3RoZXJzOiB0cnVlXG4gICAgfSwgLi4udGhpcy5fb3B0aW9uc31cbiAgICB0aGlzLl90b2dnbGVJdGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLWl0ZW1dJylcbiAgfVxuXG4gIG1vdW50ICgpIHtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsb3NlT25PdXRzaWRlQ2xpY2sgJiYgbWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzNXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxldCBjbGlja0lzSW5zaWRlID0gdGhpcy5fZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgdGhpcy5fZWxlbSA9PT0gZS50YXJnZXRcbiAgICAgICAgXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuX3RvZ2dsZUl0ZW1zKSB7XG4gICAgICAgICAgbGV0IGVsZW1Ub1NsaWRlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGUtZWxlbV0nKVxuICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBIZWxwZXJzLnNsaWRlVXAoZWxlbVRvU2xpZGUsIGl0ZW0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuX3RvZ2dsZUl0ZW1zKSB7XG5cbiAgICAgIGxldCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGUtdHJpZ2dlcl0nKVxuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGxldCBlbGVtVG9TbGlkZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlLWVsZW1dJylcblxuICAgICAgICBpZiAoIWVsZW1Ub1NsaWRlKSB7XG4gICAgICAgICAgZWxlbVRvU2xpZGUgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZS1lbGVtPVwiJHtpdGVtLmRhdGFzZXQudG9nZ2xlSXRlbX1cIl1gKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZWxlbVRvU2xpZGUuZGF0YXNldC50cmFuc2l0aW9uaW5nID09PSAndHJ1ZScpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgSGVscGVycy5zbGlkZVVwKGVsZW1Ub1NsaWRlLCBpdGVtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEhlbHBlcnMuc2xpZGVEb3duKGVsZW1Ub1NsaWRlLCBpdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuY2xvc2VPdGhlcnMpIHtcbiAgICAgICAgICBsZXQgb3RoZXJUb2dnbGVzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtaXRlbV0nKVxuXG4gICAgICAgICAgZm9yIChsZXQgb3RoZXJJdGVtIG9mIG90aGVyVG9nZ2xlcykge1xuICAgICAgICAgICAgaWYgKG90aGVySXRlbSAhPT0gaXRlbSAmJiBvdGhlckl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykgJiYgb3RoZXJJdGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyAhPT0gJ3RydWUnICYmICFvdGhlckl0ZW0uY29udGFpbnMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgbGV0IGVsZW1Ub1NsaWRlID0gb3RoZXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZS1lbGVtXScpXG5cbiAgICAgICAgICAgICAgaWYgKCFlbGVtVG9TbGlkZSkge1xuICAgICAgICAgICAgICAgIGVsZW1Ub1NsaWRlID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGUtZWxlbT1cIiR7b3RoZXJJdGVtLmRhdGFzZXQudG9nZ2xlSXRlbX1cIl1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBIZWxwZXJzLnNsaWRlVXAoZWxlbVRvU2xpZGUsIG90aGVySXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuXG5sZXQgaGNTdGlja3kgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUVsZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXG4gICAgdGhpcy5fc3RpY2t5ID0gbnVsbFxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5fc2VsZWN0b3IgPSB0aGlzLl9vcHRpb25zLnRvcFxuICB9XG5cbiAgYXN5bmMgbW91bnQgKCkge1xuICAgIGhjU3RpY2t5ID0gYXdhaXQgaW1wb3J0KCdoYy1zdGlja3knKVxuICAgIGhjU3RpY2t5ID0gaGNTdGlja3kuZGVmYXVsdFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMudG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZWxlY3RvcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgfVxuICAgIHRoaXMuX3N0aWNreSA9IG5ldyBoY1N0aWNreSh0aGlzLl9lbGVtLCB0aGlzLl9vcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy50b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3NlbGVjdG9yKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgdGhpcy5fc3RpY2t5LnVwZGF0ZSh0aGlzLl9vcHRpb25zKVxuICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3lQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcbiAgICB0aGlzLl9jdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZXG4gICAgdGhpcy5fY3VycmVudERpcmVjdGlvbiA9ICdkb3duJ1xuICAgIHRoaXMuX2xhc3RTY3JvbGxZID0gMFxuICB9XG5cbiAgYXN5bmMgbW91bnQgKCkge1xuICAgIHRoaXMuX2Fzc2lnblZhcmlhYmxlcygpXG5cbiAgICB0aGlzLl9zZXRQcm9wZXJ0eSgpXG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChsaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5fc2V0UHJvcGVydHkoKVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5fZWxlbSwge1xuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgdGhpcy5fYXNzaWduVmFyaWFibGVzKClcbiAgICAgIHRoaXMuX3NldFByb3BlcnR5KClcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgfVxuXG4gIF9hc3NpZ25WYXJpYWJsZXMgKCkge1xuICAgIHRoaXMuX2N1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFlcbiAgICB0aGlzLl9jdXJyZW50RGlyZWN0aW9uID0gdGhpcy5fY3VycmVudFNjcm9sbFkgPiB0aGlzLl9sYXN0U2Nyb2xsWSA/ICdkb3duJyA6ICd1cCdcbiAgICB0aGlzLl9sYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZXG4gIH1cblxuICBfc2V0UHJvcGVydHkgKCkge1xuICAgIGxldCBvZmZzZXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLl9lbGVtLmNsaWVudEhlaWdodFxuXG4gICAgbGV0IGF0Qm90dG9tID0gdGhpcy5fZWxlbS5vZmZzZXRUb3AgPT09ICh0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5fZWxlbS5jbGllbnRIZWlnaHQpXG5cbiAgICBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLl9jdXJyZW50RGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHRoaXMuX2VsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tc3RpY2t5LW9mZnNldCcsYCR7b2Zmc2V0fXB4YClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdGlja3ktb2Zmc2V0JywgYDBweGApXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZVxuICAgIHRoaXMuX2VsZW0gPSBlbGVtXG4gICAgdGhpcy5fY3R4ID0gY3R4XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLl9vcmlnaW5hbE9wdGlvbnMgPSB7Li4udGhpcy5fb3B0aW9uc31cblxuICAgIHRoaXMuX2FkZGVkUmVzaXplTGlzdGVuZXIgPSBmYWxzZVxuICAgIHRoaXMuX29wdGlvbnNDaGVjayh0cnVlKVxuICB9XG5cbiAgX29wdGlvbnNDaGVjayAoZmlyc3RSdW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9vcHRpb25zKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgbmV3T3B0aW9ucyA9IHsuLi50aGlzLl9vcmlnaW5hbE9wdGlvbnN9XG4gICAgbmV3T3B0aW9ucy51c2luZ1NldHRpbmdzRm9yID0gJ2Rlc2t0b3AnXG5cbiAgICBpZiAodGhpcy5fb3JpZ2luYWxPcHRpb25zLnJlc3BvbnNpdmUgJiYgdGhpcy5fb3JpZ2luYWxPcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBvcHRpb25zT2JqIG9mIHRoaXMuX29yaWdpbmFsT3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGlmIChtYXRjaE1lZGlhKGBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtvcHRpb25zT2JqLmJyZWFrcG9pbnR9KWApLm1hdGNoZXMpIHtcbiAgICAgICAgICBuZXdPcHRpb25zID0gey4uLnRoaXMuX29yaWdpbmFsT3B0aW9ucywgLi4ub3B0aW9uc09iai5zZXR0aW5nc31cbiAgICAgICAgICBuZXdPcHRpb25zLnVzaW5nU2V0dGluZ3NGb3IgPSBvcHRpb25zT2JqLmJyZWFrcG9pbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaXJzdFJ1bikge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IG5ld09wdGlvbnNcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMudXNpbmdTZXR0aW5nc0ZvciAhPT0gbmV3T3B0aW9ucy51c2luZ1NldHRpbmdzRm9yKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9uc1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgICBcbiAgfVxuXG5cbiAgcmVpbml0T25SZXNpemUgKG9wdGlvbnMgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLl9hZGRlZFJlc2l6ZUxpc3RlbmVyKSByZXR1cm5cbiAgICBpZiAob3B0aW9ucykgdGhpcy5fb3JpZ2luYWxPcHRpb25zID0gb3B0aW9uc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcbiAgICAgIGxldCBjaGFuZ2VkID0gdGhpcy5fb3B0aW9uc0NoZWNrKClcblxuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy51bm1vdW50KClcbiAgICAgICAgdGhpcy5tb3VudCgpXG5cbiAgICAgICAgSGVscGVycy5uZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy51cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB0aGlzLl9hZGRlZFJlc2l6ZUxpc3RlbmVyID0gdHJ1ZVxuICB9XG5cblxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycydcblxubGV0IGVuZHBvaW50cyA9IHtcbiAgY2FydDoge1xuICAgIGNsZWFyOiAnL2NhcnQvY2xlYXIuanNvbicsXG4gICAgZ2V0OiAnL2NhcnQuanNvbicsXG4gICAgYWRkOiAnL2NhcnQvYWRkLmpzJyxcbiAgICBjaGFuZ2U6ICcvY2FydC9jaGFuZ2UuanMnLFxuICAgIHVwZGF0ZTogJy9jYXJ0L3VwZGF0ZS5qcydcbiAgfSxcbiAgcHJvZHVjdDoge1xuICAgIGdldDogJy9wcm9kdWN0cy9baGFuZGxlXS5qc29uJyxcbiAgICBnZXRDdXN0b206ICcvcHJvZHVjdHMvW2hhbmRsZV0/dmlldz1qc29uJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhBcGkge1xuICBzdGF0aWMgYXN5bmMgZ2V0Q2FydCAoc3RhdGUgPSBmYWxzZSkge1xuICAgIGxldCByb290VVJMID0gc3RhdGUgPyBzdGF0ZS5yb290VVJMIDogJydcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHJvb3RVUkwgKyBIZWxwZXJzLmdldEVuZHBvaW50KGVuZHBvaW50cy5jYXJ0LmdldCkpXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgYWRkVG9DYXJ0IChvcHRpb25zLCBzdGF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHJvb3RVUkwgKyBIZWxwZXJzLmdldEVuZHBvaW50KGVuZHBvaW50cy5jYXJ0LmFkZCksIG9wdGlvbnMpXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY2hhbmdlQ2FydCAob3B0aW9ucywgc3RhdGUgPSBmYWxzZSkge1xuICAgIGxldCByb290VVJMID0gc3RhdGUgPyBzdGF0ZS5yb290VVJMIDogJydcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChyb290VVJMICsgSGVscGVycy5nZXRFbmRwb2ludChlbmRwb2ludHMuY2FydC5jaGFuZ2UpLCBvcHRpb25zKVxuICAgIHJldHVybiByZXN1bHQuZGF0YVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcnQgKG9wdGlvbnMsIHN0YXRlID0gZmFsc2UpIHtcbiAgICBsZXQgcm9vdFVSTCA9IHN0YXRlID8gc3RhdGUucm9vdFVSTCA6ICcnXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3Qocm9vdFVSTCArIEhlbHBlcnMuZ2V0RW5kcG9pbnQoZW5kcG9pbnRzLmNhcnQudXBkYXRlKSwgb3B0aW9ucylcbiAgICByZXR1cm4gcmVzdWx0LmRhdGFcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBlbXB0eUNhcnQgKG9wdGlvbnMsIHN0YXRlID0gZmFsc2UpIHtcbiAgICBsZXQgcm9vdFVSTCA9IHN0YXRlID8gc3RhdGUucm9vdFVSTCA6ICcnXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3Qocm9vdFVSTCArIEhlbHBlcnMuZ2V0RW5kcG9pbnQoZW5kcG9pbnRzLmNhcnQuY2xlYXIpLCBvcHRpb25zKVxuICAgIHJldHVybiByZXN1bHQuZGF0YVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcnRJdGVtIChpZCwgcXVhbnRpdHksIHByb3BzID0ge30sIHN0YXRlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gYXdhaXQgQWpheEFwaS5jaGFuZ2VDYXJ0KHtcbiAgICAgIGxpbmU6IGAke2lkfWAsXG4gICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICAgIH0sIHN0YXRlKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHJlbW92ZUNhcnRJdGVtIChpZCkge1xuICAgIHJldHVybiBhd2FpdCBBamF4QXBpLnVwZGF0ZUNhcnRJdGVtKGlkLCAwKVxuICB9IFxuXG4gIHN0YXRpYyBhc3luYyBnZXRQcm9kdWN0IChoYW5kbGUsIHN0YXRlID0gZmFsc2UpIHtcbiAgICBsZXQgcm9vdFVSTCA9IHN0YXRlID8gc3RhdGUucm9vdFVSTCA6ICcnXG4gICAgbGV0IGVuZHBvaW50ID0gZW5kcG9pbnRzLnByb2R1Y3QuZ2V0LnJlcGxhY2UoJ1toYW5kbGVdJywgaGFuZGxlKVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQocm9vdFVSTCArIEhlbHBlcnMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpKVxuICAgIHJldHVybiByZXN1bHQuZGF0YS5wcm9kdWN0XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q3VzdG9tUHJvZHVjdCAoaGFuZGxlLCBzdGF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xuICAgIGxldCBlbmRwb2ludCA9IGVuZHBvaW50cy5wcm9kdWN0LmdldEN1c3RvbS5yZXBsYWNlKCdbaGFuZGxlXScsIGhhbmRsZSlcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHJvb3RVUkwgKyBIZWxwZXJzLmdldEVuZHBvaW50KGVuZHBvaW50KSwgeyByZXNwb25zZVR5cGU6ICdqc29uJyB9KVxuICAgIHJldHVybiB0eXBlb2YgcmVzdWx0LmRhdGEgPT09ICdvYmplY3QnID8gcmVzdWx0LmRhdGEgOiBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG4gIHN0YXRpYyBmb3JtYXRXaXRoRGVsaW1pdGVycyAobnVtYmVyLCBwcmVjaXNpb24sIHRob3VzYW5kcywgZGVjaW1hbCkge1xuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCAyXG4gICAgdGhvdXNhbmRzID0gdGhvdXNhbmRzIHx8ICcsJ1xuICAgIGRlY2ltYWwgPSBkZWNpbWFsIHx8ICcuJ1xuXG4gICAgaWYgKGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbnVtYmVyID0gKG51bWJlciAvIDEwMC4wKS50b0ZpeGVkKHByZWNpc2lvbilcblxuICAgIGNvbnN0IHBhcnRzID0gbnVtYmVyLnNwbGl0KCcuJylcbiAgICBjb25zdCBkb2xsYXJzQW1vdW50ID0gcGFydHNbMF0ucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEnICsgdGhvdXNhbmRzKVxuICAgIGNvbnN0IGNlbnRzQW1vdW50ID0gcGFydHNbMV0gPyAoZGVjaW1hbCArIHBhcnRzWzFdKSA6ICcnXG5cbiAgICByZXR1cm4gZG9sbGFyc0Ftb3VudCArIGNlbnRzQW1vdW50XG4gIH1cblxuICBzdGF0aWMgaXNJblZpZXdwb3J0IChlbGVtKSB7XG4gICAgdmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgZGlzdGFuY2UudG9wID49IDAgJiZcbiAgICAgIGRpc3RhbmNlLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGhhc1BhcmVudFdpdGhTZWxlY3RvciAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gZWxlbWVudDtcbiAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgSGVscGVycy5oYXNQYXJlbnRXaXRoU2VsZWN0b3IoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBzZWxlY3RvcilcbiAgfVxuXG4gIHN0YXRpYyBkZWJvdW5jZShjYWxsYmFjaywgd2FpdCkge1xuICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpO1xuICAgICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXG4gICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhY3QgKGFycmF5KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGhcbiAgICB2YXIgcmVzSW5kZXggPSAwXG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHN0YXRpYyBpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0IChlbCkge1xuICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgLy8gRE9NUmVjdCB7IHg6IDgsIHk6IDgsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCB0b3A6IDgsIHJpZ2h0OiAxMDgsIGJvdHRvbTogMTA4LCBsZWZ0OiA4IH1cbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMyNTkzMy9kZXRlcm1pbmUtd2hldGhlci10d28tZGF0ZS1yYW5nZXMtb3ZlcmxhcFxuICAgICAgY29uc3QgdmVydEluVmlldyA9IChyZWN0LnRvcCA8PSB3aW5kb3dIZWlnaHQpICYmICgocmVjdC50b3AgKyByZWN0LmhlaWdodCkgPj0gMCk7XG4gICAgICBjb25zdCBob3JJblZpZXcgPSAocmVjdC5sZWZ0IDw9IHdpbmRvd1dpZHRoKSAmJiAoKHJlY3QubGVmdCArIHJlY3Qud2lkdGgpID49IDApO1xuXG4gICAgICByZXR1cm4gKHZlcnRJblZpZXcgJiYgaG9ySW5WaWV3KTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRNb25leSAoY2VudHMsIHN0YXRlKSB7XG5cbiAgICBsZXQgZm9ybWF0ID0gc3RhdGUubW9uZXlGb3JtYXRcblxuICAgIGlmIChjZW50cyA9PT0gMCkgcmV0dXJuIHN0YXRlLmxvY2FsZS5mcmVlXG5cbiAgICBpZiAodHlwZW9mIGNlbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgY2VudHMgPSBjZW50cy5yZXBsYWNlKCcuJywgJycpXG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gJydcbiAgICBjb25zdCBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9L1xuXG4gICAgc3dpdGNoKGZvcm1hdC5tYXRjaChwbGFjZWhvbGRlclJlZ2V4KVsxXSkge1xuICAgICAgY2FzZSAnYW1vdW50JzpcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHMnOlxuICAgICAgICB2YWx1ZSA9IEhlbHBlcnMuZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Ftb3VudF93aXRoX2NvbW1hX3NlcGFyYXRvcic6XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5mb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMiwgJy4nLCAnLCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvcic6XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5mb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCwgJy4nLCAnLCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX3NwYWNlX3NlcGFyYXRvcic6XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5mb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCwgJyAnKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZShwbGFjZWhvbGRlclJlZ2V4LCB2YWx1ZSkucmVwbGFjZShcIi4wMFwiLCBcIlwiKS5yZXBsYWNlKCcsMDAnLCAnJylcbiAgfVxuXG4gIHN0YXRpYyBnZXRTaXplZEltYWdlVXJsIChzcmMsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSA9PT0gbnVsbCB8fCBzcmMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBzcmNcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA9PT0gJ21hc3RlcicpIHtcbiAgICAgIHJldHVybiBIZWxwZXJzLnJlbW92ZVByb3RvY29sKHNyYylcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2ggPSBzcmMubWF0Y2goL1xcLih3ZWJwfGpwZ3xqcGVnfGdpZnxwbmd8Ym1wfGJpdG1hcHx0aWZmfHRpZikoXFw/dj1cXGQrKT8kL2kpXG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBwcmVmaXggPSBzcmMuc3BsaXQobWF0Y2hbMF0pXG4gICAgICB2YXIgc3VmZml4ID0gbWF0Y2hbMF1cblxuICAgICAgcmV0dXJuIEhlbHBlcnMucmVtb3ZlUHJvdG9jb2wocHJlZml4WzBdICsgJ18nICsgc2l6ZSArIHN1ZmZpeClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlUHJvdG9jb2wgKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9odHRwKHMpPzovLCAnJylcbiAgfVxuXG4gIHN0YXRpYyBnZXRFbmRwb2ludCAoZW5kcG9pbnQpIHtcbiAgICBpZiAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgcmV0dXJuIGAke2VuZHBvaW50fSZ2PSR7TWF0aC5yYW5kb20oKX1gIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7ZW5kcG9pbnR9P3Y9JHtNYXRoLnJhbmRvbSgpfWAgXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5leHRGcmFtZSAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNsaWRlRG93biAoZWxlbSwgbWFpbkVsZW0pIHtcbiAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdub25lJ1xuICAgIGxldCBzY3JvbGxIZWlnaHQgPSBlbGVtLnNjcm9sbEhlaWdodFxuICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJzBweCdcbiAgICBtYWluRWxlbS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxuICAgIGVsZW0uZGF0YXNldC50cmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIGVsZW0uZGF0YXNldC5sYXN0RXZlbnQgPSAnc2xpZGVEb3duJ1xuXG4gICAgbGV0IG9wZW5FdmVudCA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5wcm9wZXJ0eU5hbWUgPT09ICdtYXgtaGVpZ2h0JyAmJiBlbGVtLmRhdGFzZXQubGFzdEV2ZW50ID09ICdzbGlkZURvd24nKSB7XG4gICAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnXG4gICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb3BlbkV2ZW50LCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvcGVuRXZlbnQsIGZhbHNlKVxuICAgIEhlbHBlcnMubmV4dEZyYW1lKCgpID0+IHtcbiAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7c2Nyb2xsSGVpZ2h0fXB4YFxuICAgIH0pXG4gIH0gXG5cbiAgc3RhdGljIHNsaWRlVXAgKGVsZW0sIG1haW5FbGVtKSB7XG4gICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtlbGVtLnNjcm9sbEhlaWdodH1weGBcbiAgICBtYWluRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcbiAgICBlbGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICBlbGVtLmRhdGFzZXQubGFzdEV2ZW50ID0gJ3NsaWRlVXAnXG5cbiAgICBsZXQgY2xvc2VFdmVudCA9IGUgPT4ge1xuICAgICAgaWYgKGUucHJvcGVydHlOYW1lID09PSAnbWF4LWhlaWdodCcgJiYgZWxlbS5kYXRhc2V0Lmxhc3RFdmVudCA9PSAnc2xpZGVVcCcpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcbiAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbG9zZUV2ZW50LCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xvc2VFdmVudCwgZmFsc2UpXG4gICAgSGVscGVycy5uZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgMHB4YFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlaXplIChzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcblxuICAgIHZhciB0b1JlcGxhY2UgPSBbJ1wiJywgXCInXCIsIFwiXFxcXFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIl07XG4gICAgXG4gICAgLy8gRm9yIHRoZSBvbGQgYnJvd3NlcnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvUmVwbGFjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSh0b1JlcGxhY2VbaV0sIFwiXCIpXG4gICAgfVxuXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcVysvZywgXCItXCIpXG5cbiAgICBpZiAoc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkgPT0gXCItXCIpIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0rXFx6LywgXCJcIilcbiAgICB9XG5cbiAgICBpZiAoc3RyLmNoYXJBdCgwKSA9PSBcIi1cIikge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxBLSsvLCBcIlwiKVxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHN0YXRpYyBjb3B5VG9DbGlwYm9hcmQgKHN0cikge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGVsLnZhbHVlID0gc3RyXG4gICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKVxuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuICAgIGVsLnNlbGVjdCgpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpXG4gIH1cbn0iLCJjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnF1ZXVlID0gW11cbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2VcbiAgICB9XG5cbiAgICBvbkluaXQgKCkge1xuICAgIH1cblxuICAgIGFkZCAoam9iKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChqb2IpXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2VzcyAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgam9iID0gdGhpcy5xdWV1ZS5zaGlmdCgpXG4gICAgICAgICAgICBhd2FpdCBqb2IoKVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVldWVcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyYWRpYW50LmNzcy5saXF1aWRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgQnJvd3NlckluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlckluZm8obmFtZSwgdmVyc2lvbiwgb3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcyA9IG9zO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnJvd3Nlcic7XG4gICAgfVxuICAgIHJldHVybiBCcm93c2VySW5mbztcbn0oKSk7XG5leHBvcnQgeyBCcm93c2VySW5mbyB9O1xudmFyIE5vZGVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVJbmZvKHZlcnNpb24pIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy50eXBlID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMub3MgPSBwcm9jZXNzLnBsYXRmb3JtO1xuICAgIH1cbiAgICByZXR1cm4gTm9kZUluZm87XG59KCkpO1xuZXhwb3J0IHsgTm9kZUluZm8gfTtcbnZhciBTZWFyY2hCb3REZXZpY2VJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIGJvdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMuYm90ID0gYm90O1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm90LWRldmljZSc7XG4gICAgfVxuICAgIHJldHVybiBTZWFyY2hCb3REZXZpY2VJbmZvO1xufSgpKTtcbmV4cG9ydCB7IFNlYXJjaEJvdERldmljZUluZm8gfTtcbnZhciBCb3RJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdEluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QnO1xuICAgICAgICB0aGlzLmJvdCA9IHRydWU7IC8vIE5PVEU6IGRlcHJlY2F0ZWQgdGVzdCBuYW1lIGluc3RlYWRcbiAgICAgICAgdGhpcy5uYW1lID0gJ2JvdCc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQm90SW5mbztcbn0oKSk7XG5leHBvcnQgeyBCb3RJbmZvIH07XG52YXIgUmVhY3ROYXRpdmVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0TmF0aXZlSW5mbygpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ3JlYWN0LW5hdGl2ZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9zID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0TmF0aXZlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBSZWFjdE5hdGl2ZUluZm8gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbnZhciBTRUFSQ0hCT1hfVUFfUkVHRVggPSAvYWxleGF8Ym90fGNyYXdsKGVyfGluZyl8ZmFjZWJvb2tleHRlcm5hbGhpdHxmZWVkYnVybmVyfGdvb2dsZSB3ZWIgcHJldmlld3xuYWdpb3N8cG9zdHJhbmt8cGluZ2RvbXxzbHVycHxzcGlkZXJ8eWFob28hfHlhbmRleC87XG52YXIgU0VBUkNIQk9UX09TX1JFR0VYID0gLyhudWhrfGN1cmx8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFza1xcIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS87XG52YXIgUkVRVUlSRURfVkVSU0lPTl9QQVJUUyA9IDM7XG52YXIgdXNlckFnZW50UnVsZXMgPSBbXG4gICAgWydhb2wnLCAvQU9MU2hpZWxkXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlJywgL0VkZ2VcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UtaW9zJywgL0VkZ2lPU1xcLyhbMC05XFwuX10rKS9dLFxuICAgIFsneWFuZGV4YnJvd3NlcicsIC9ZYUJyb3dzZXJcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2tha2FvdGFsaycsIC9LQUtBT1RBTEtcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnc2Ftc3VuZycsIC9TYW1zdW5nQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydzaWxrJywgL1xcYlNpbGtcXC8oWzAtOS5fLV0rKVxcYi9dLFxuICAgIFsnbWl1aScsIC9NaXVpQnJvd3NlclxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnYmVha2VyJywgL0JlYWtlckJyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnZWRnZS1jaHJvbWl1bScsIC9FZGdBP1xcLyhbMC05XFwuXSspL10sXG4gICAgW1xuICAgICAgICAnY2hyb21pdW0td2VidmlldycsXG4gICAgICAgIC8oPyFDaHJvbS4qT1BSKXd2XFwpLipDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpLyxcbiAgICBdLFxuICAgIFsnY2hyb21lJywgLyg/IUNocm9tLipPUFIpQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGhhbnRvbWpzJywgL1BoYW50b21KU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydjcmlvcycsIC9DcmlPU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydmaXJlZm94JywgL0ZpcmVmb3hcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnZnhpb3MnLCAvRnhpT1NcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEtbWluaScsIC9PcGVyYSBNaW5pLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhJywgL09wZXJhXFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ29wZXJhJywgL09QUlxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydwaWUnLCAvXk1pY3Jvc29mdCBQb2NrZXQgSW50ZXJuZXQgRXhwbG9yZXJcXC8oXFxkK1xcLlxcZCspJC9dLFxuICAgIFsncGllJywgL15Nb3ppbGxhXFwvXFxkXFwuXFxkK1xcc1xcKGNvbXBhdGlibGU7XFxzKD86TVNQP0lFfE1TSW50ZXJuZXQgRXhwbG9yZXIpIChcXGQrXFwuXFxkKyk7LipXaW5kb3dzIENFLipcXCkkL10sXG4gICAgWyduZXRmcm9udCcsIC9eTW96aWxsYVxcL1xcZFxcLlxcZCsuKk5ldEZyb250XFwvKFxcZC5cXGQpL10sXG4gICAgWydpZScsIC9UcmlkZW50XFwvN1xcLjAuKnJ2XFw6KFswLTlcXC5dKykuKlxcKS4qR2Vja28kL10sXG4gICAgWydpZScsIC9NU0lFXFxzKFswLTlcXC5dKyk7LipUcmlkZW50XFwvWzQtN10uMC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyg3XFwuMCkvXSxcbiAgICBbJ2JiMTAnLCAvQkIxMDtcXHNUb3VjaC4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydhbmRyb2lkJywgL0FuZHJvaWRcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKk1vYmlsZS4qU2FmYXJpLiovXSxcbiAgICBbJ3NhZmFyaScsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipTYWZhcmkvXSxcbiAgICBbJ2ZhY2Vib29rJywgL0ZCW0FTXVZcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnaW5zdGFncmFtJywgL0luc3RhZ3JhbVxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipNb2JpbGUvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKkdlY2tvXFwpJC9dLFxuICAgIFsnY3VybCcsIC9eY3VybFxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnc2VhcmNoYm90JywgU0VBUkNIQk9YX1VBX1JFR0VYXSxcbl07XG52YXIgb3BlcmF0aW5nU3lzdGVtUnVsZXMgPSBbXG4gICAgWydpT1MnLCAvaVAoaG9uZXxvZHxhZCkvXSxcbiAgICBbJ0FuZHJvaWQgT1MnLCAvQW5kcm9pZC9dLFxuICAgIFsnQmxhY2tCZXJyeSBPUycsIC9CbGFja0JlcnJ5fEJCMTAvXSxcbiAgICBbJ1dpbmRvd3MgTW9iaWxlJywgL0lFTW9iaWxlL10sXG4gICAgWydBbWF6b24gT1MnLCAvS2luZGxlL10sXG4gICAgWydXaW5kb3dzIDMuMTEnLCAvV2luMTYvXSxcbiAgICBbJ1dpbmRvd3MgOTUnLCAvKFdpbmRvd3MgOTUpfChXaW45NSl8KFdpbmRvd3NfOTUpL10sXG4gICAgWydXaW5kb3dzIDk4JywgLyhXaW5kb3dzIDk4KXwoV2luOTgpL10sXG4gICAgWydXaW5kb3dzIDIwMDAnLCAvKFdpbmRvd3MgTlQgNS4wKXwoV2luZG93cyAyMDAwKS9dLFxuICAgIFsnV2luZG93cyBYUCcsIC8oV2luZG93cyBOVCA1LjEpfChXaW5kb3dzIFhQKS9dLFxuICAgIFsnV2luZG93cyBTZXJ2ZXIgMjAwMycsIC8oV2luZG93cyBOVCA1LjIpL10sXG4gICAgWydXaW5kb3dzIFZpc3RhJywgLyhXaW5kb3dzIE5UIDYuMCkvXSxcbiAgICBbJ1dpbmRvd3MgNycsIC8oV2luZG93cyBOVCA2LjEpL10sXG4gICAgWydXaW5kb3dzIDgnLCAvKFdpbmRvd3MgTlQgNi4yKS9dLFxuICAgIFsnV2luZG93cyA4LjEnLCAvKFdpbmRvd3MgTlQgNi4zKS9dLFxuICAgIFsnV2luZG93cyAxMCcsIC8oV2luZG93cyBOVCAxMC4wKS9dLFxuICAgIFsnV2luZG93cyBNRScsIC9XaW5kb3dzIE1FL10sXG4gICAgWydXaW5kb3dzIENFJywgL1dpbmRvd3MgQ0V8V2luQ0V8TWljcm9zb2Z0IFBvY2tldCBJbnRlcm5ldCBFeHBsb3Jlci9dLFxuICAgIFsnT3BlbiBCU0QnLCAvT3BlbkJTRC9dLFxuICAgIFsnU3VuIE9TJywgL1N1bk9TL10sXG4gICAgWydDaHJvbWUgT1MnLCAvQ3JPUy9dLFxuICAgIFsnTGludXgnLCAvKExpbnV4KXwoWDExKS9dLFxuICAgIFsnTWFjIE9TJywgLyhNYWNfUG93ZXJQQyl8KE1hY2ludG9zaCkvXSxcbiAgICBbJ1FOWCcsIC9RTlgvXSxcbiAgICBbJ0JlT1MnLCAvQmVPUy9dLFxuICAgIFsnT1MvMicsIC9PU1xcLzIvXSxcbl07XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0KHVzZXJBZ2VudCkge1xuICAgIGlmICghIXVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQodXNlckFnZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFjdE5hdGl2ZUluZm8oKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE5vZGVWZXJzaW9uKCk7XG59XG5mdW5jdGlvbiBtYXRjaFVzZXJBZ2VudCh1YSkge1xuICAgIC8vIG9wdGVkIGZvciB1c2luZyByZWR1Y2UgaGVyZSByYXRoZXIgdGhhbiBBcnJheSNmaXJzdCB3aXRoIGEgcmVnZXgudGVzdCBjYWxsXG4gICAgLy8gdGhpcyBpcyBwcmltYXJpbHkgYmVjYXVzZSB1c2luZyB0aGUgcmVkdWNlIHdlIG9ubHkgcGVyZm9ybSB0aGUgcmVnZXhcbiAgICAvLyBleGVjdXRpb24gb25jZSByYXRoZXIgdGhhbiBvbmNlIGZvciB0aGUgdGVzdCBhbmQgZm9yIHRoZSBleGVjIGFnYWluIGJlbG93XG4gICAgLy8gcHJvYmFibHkgc29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgYmVuY2htYXJrZWQgdGhvdWdoXG4gICAgcmV0dXJuICh1YSAhPT0gJycgJiZcbiAgICAgICAgdXNlckFnZW50UnVsZXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVkLCBfYSkge1xuICAgICAgICAgICAgdmFyIGJyb3dzZXIgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdWFNYXRjaCA9IHJlZ2V4LmV4ZWModWEpO1xuICAgICAgICAgICAgcmV0dXJuICEhdWFNYXRjaCAmJiBbYnJvd3NlciwgdWFNYXRjaF07XG4gICAgICAgIH0sIGZhbHNlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYnJvd3Nlck5hbWUodWEpIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoVXNlckFnZW50KHVhKTtcbiAgICByZXR1cm4gZGF0YSA/IGRhdGFbMF0gOiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXNlckFnZW50KHVhKSB7XG4gICAgdmFyIG1hdGNoZWRSdWxlID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIGlmICghbWF0Y2hlZFJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBuYW1lID0gbWF0Y2hlZFJ1bGVbMF0sIG1hdGNoID0gbWF0Y2hlZFJ1bGVbMV07XG4gICAgaWYgKG5hbWUgPT09ICdzZWFyY2hib3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQm90SW5mbygpO1xuICAgIH1cbiAgICAvLyBEbyBub3QgdXNlIFJlZ0V4cCBmb3Igc3BsaXQgb3BlcmF0aW9uIGFzIHNvbWUgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBpdCAoU2VlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvY3Jvc3MtYnJvd3Nlci1zcGxpdClcbiAgICB2YXIgdmVyc2lvblBhcnRzID0gbWF0Y2hbMV0gJiYgbWF0Y2hbMV0uc3BsaXQoJy4nKS5qb2luKCdfJykuc3BsaXQoJ18nKS5zbGljZSgwLCAzKTtcbiAgICBpZiAodmVyc2lvblBhcnRzKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uUGFydHMubGVuZ3RoIDwgUkVRVUlSRURfVkVSU0lPTl9QQVJUUykge1xuICAgICAgICAgICAgdmVyc2lvblBhcnRzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB2ZXJzaW9uUGFydHMsIHRydWUpLCBjcmVhdGVWZXJzaW9uUGFydHMoUkVRVUlSRURfVkVSU0lPTl9QQVJUUyAtIHZlcnNpb25QYXJ0cy5sZW5ndGgpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmVyc2lvblBhcnRzID0gW107XG4gICAgfVxuICAgIHZhciB2ZXJzaW9uID0gdmVyc2lvblBhcnRzLmpvaW4oJy4nKTtcbiAgICB2YXIgb3MgPSBkZXRlY3RPUyh1YSk7XG4gICAgdmFyIHNlYXJjaEJvdE1hdGNoID0gU0VBUkNIQk9UX09TX1JFR0VYLmV4ZWModWEpO1xuICAgIGlmIChzZWFyY2hCb3RNYXRjaCAmJiBzZWFyY2hCb3RNYXRjaFsxXSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIHNlYXJjaEJvdE1hdGNoWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0T1ModWEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGNvdW50ID0gb3BlcmF0aW5nU3lzdGVtUnVsZXMubGVuZ3RoOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIHZhciBfYSA9IG9wZXJhdGluZ1N5c3RlbVJ1bGVzW2lpXSwgb3MgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVWZXJzaW9uKCkge1xuICAgIHZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9uO1xuICAgIHJldHVybiBpc05vZGUgPyBuZXcgTm9kZUluZm8ocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDEpKSA6IG51bGw7XG59XG5mdW5jdGlvbiBjcmVhdGVWZXJzaW9uUGFydHMoY291bnQpIHtcbiAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKCcwJyk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCJ2YXIgbj1mdW5jdGlvbihuKXtpZihcIm9iamVjdFwiIT10eXBlb2YodD1uKXx8QXJyYXkuaXNBcnJheSh0KSl0aHJvd1wic3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdFwiO3ZhciB0fSx0PWZ1bmN0aW9uKG4sdCxlLGMpe3JldHVybihyPW4sci5yZWR1Y2UoZnVuY3Rpb24obix0LGUpe3JldHVybiBuLmluZGV4T2YodCk+LTE/bjpuLmNvbmNhdCh0KX0sW10pKS5yZWR1Y2UoZnVuY3Rpb24obixlKXtyZXR1cm4gbi5jb25jYXQodFtlXXx8W10pfSxbXSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuKGUsYyl9KTt2YXIgcn0sZT1hKCksYz1lLm9uLHI9ZS5lbWl0LG89ZS5oeWRyYXRlLHU9ZS5nZXRTdGF0ZTtmdW5jdGlvbiBhKGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgYz17fTtyZXR1cm57Z2V0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxlKX0saHlkcmF0ZTpmdW5jdGlvbihyKXtyZXR1cm4gbihyKSxPYmplY3QuYXNzaWduKGUsciksZnVuY3Rpb24oKXt2YXIgbj1bXCIqXCJdLmNvbmNhdChPYmplY3Qua2V5cyhyKSk7dChuLGMsZSl9fSxvbjpmdW5jdGlvbihuLHQpe3JldHVybihuPVtdLmNvbmNhdChuKSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBjW25dPShjW25dfHxbXSkuY29uY2F0KHQpfSksZnVuY3Rpb24oKXtyZXR1cm4gbi5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGNbbl0uc3BsaWNlKGNbbl0uaW5kZXhPZih0KSwxKX0pfX0sZW1pdDpmdW5jdGlvbihyLG8sdSl7dmFyIGE9KFwiKlwiPT09cj9bXTpbXCIqXCJdKS5jb25jYXQocik7KG89XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9vKGUpOm8pJiYobihvKSxPYmplY3QuYXNzaWduKGUsbyksYT1hLmNvbmNhdChPYmplY3Qua2V5cyhvKSkpLHQoYSxjLGUsdSl9fX1leHBvcnR7YyBhcyBvbixyIGFzIGVtaXQsbyBhcyBoeWRyYXRlLHUgYXMgZ2V0U3RhdGUsYSBhcyBjcmVhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZ4LmVzLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQsaT0xLGU9YXJndW1lbnRzLmxlbmd0aDtpPGU7aSsrKWZvcih2YXIgciBpbiB0PWFyZ3VtZW50c1tpXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKSYmKG5bcl09dFtyXSk7cmV0dXJuIG59LG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiB0KG4sdCxpKXtpZihpfHwyPT09YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIGUscj0wLGE9dC5sZW5ndGg7cjxhO3IrKykhZSYmciBpbiB0fHwoZXx8KGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCwwLHIpKSxlW3JdPXRbcl0pO3JldHVybiBuLmNvbmNhdChlfHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KSl9ZnVuY3Rpb24gaShuKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobil9ZnVuY3Rpb24gZShuLHQpe3ZhciBpPU1hdGguZmxvb3Iobik7cmV0dXJuIGk9PT10fHxpKzE9PT10P246dH1mdW5jdGlvbiByKCl7cmV0dXJuIERhdGUubm93KCl9ZnVuY3Rpb24gYShuLHQsaSl7aWYodD1cImRhdGEta2Vlbi1zbGlkZXItXCIrdCxudWxsPT09aSlyZXR1cm4gbi5yZW1vdmVBdHRyaWJ1dGUodCk7bi5zZXRBdHRyaWJ1dGUodCxpfHxcIlwiKX1mdW5jdGlvbiBvKG4sdCl7cmV0dXJuIHQ9dHx8ZG9jdW1lbnQsXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bih0KSksQXJyYXkuaXNBcnJheShuKT9uOlwic3RyaW5nXCI9PXR5cGVvZiBuP2kodC5xdWVyeVNlbGVjdG9yQWxsKG4pKTpuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/W25dOm4gaW5zdGFuY2VvZiBOb2RlTGlzdD9pKG4pOltdfWZ1bmN0aW9uIHUobil7bi5yYXcmJihuPW4ucmF3KSxuLmNhbmNlbGFibGUmJiFuLmRlZmF1bHRQcmV2ZW50ZWQmJm4ucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBzKG4pe24ucmF3JiYobj1uLnJhdyksbi5zdG9wUHJvcGFnYXRpb24mJm4uc3RvcFByb3BhZ2F0aW9uKCl9ZnVuY3Rpb24gYygpe3ZhciBuPVtdO3JldHVybnthZGQ6ZnVuY3Rpb24odCxpLGUscil7dC5hZGRMaXN0ZW5lcj90LmFkZExpc3RlbmVyKGUpOnQuYWRkRXZlbnRMaXN0ZW5lcihpLGUsciksbi5wdXNoKFt0LGksZSxyXSl9LGlucHV0OmZ1bmN0aW9uKG4sdCxpLGUpe3RoaXMuYWRkKG4sdCxmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24odCl7dC5uYXRpdmVFdmVudCYmKHQ9dC5uYXRpdmVFdmVudCk7dmFyIGk9dC5jaGFuZ2VkVG91Y2hlc3x8W10sZT10LnRhcmdldFRvdWNoZXN8fFtdLHI9dC5kZXRhaWwmJnQuZGV0YWlsLng/dC5kZXRhaWw6bnVsbDtyZXR1cm4gbih7aWQ6cj9yLmlkZW50aWZpZXI/ci5pZGVudGlmaWVyOlwiaVwiOmVbMF0/ZVswXT9lWzBdLmlkZW50aWZpZXI6XCJlXCI6XCJkXCIsaWRDaGFuZ2VkOnI/ci5pZGVudGlmaWVyP3IuaWRlbnRpZmllcjpcImlcIjppWzBdP2lbMF0/aVswXS5pZGVudGlmaWVyOlwiZVwiOlwiZFwiLHJhdzp0LHg6ciYmci54P3IueDplWzBdP2VbMF0uc2NyZWVuWDpyP3IueDp0LnBhZ2VYLHk6ciYmci55P3IueTplWzBdP2VbMF0uc2NyZWVuWTpyP3IueTp0LnBhZ2VZfSl9fShpKSxlKX0scHVyZ2U6ZnVuY3Rpb24oKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe25bMF0ucmVtb3ZlTGlzdGVuZXI/blswXS5yZW1vdmVMaXN0ZW5lcihuWzJdKTpuWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoblsxXSxuWzJdLG5bM10pfSkpLG49W119fX1mdW5jdGlvbiBkKG4sdCxpKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobix0KSxpKX1mdW5jdGlvbiBsKG4pe3JldHVybihuPjA/MTowKS0objwwPzE6MCl8fCtufWZ1bmN0aW9uIGYobil7dmFyIHQ9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57aGVpZ2h0OmUodC5oZWlnaHQsbi5vZmZzZXRIZWlnaHQpLHdpZHRoOmUodC53aWR0aCxuLm9mZnNldFdpZHRoKX19ZnVuY3Rpb24gcChuLHQsaSxlKXt2YXIgcj1uJiZuW3RdO3JldHVybiBudWxsPT1yP2k6ZSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yKCk6cn1mdW5jdGlvbiB2KG4pe3JldHVybiBNYXRoLnJvdW5kKDFlNipuKS8xZTZ9ZnVuY3Rpb24gaChuKXt2YXIgdCxpLGUscixhLG87ZnVuY3Rpb24gdSh0KXtvfHwobz10KSxzKCEwKTt2YXIgYT10LW87YT5lJiYoYT1lKTt2YXIgbD1yW2ldO2lmKGxbM108YSlyZXR1cm4gaSsrLHUodCk7dmFyIGY9bFsyXSxwPWxbNF0sdj1sWzBdLGg9bFsxXSooMCxsWzVdKSgwPT09cD8xOihhLWYpL3ApO2lmKGgmJm4udHJhY2sudG8oditoKSxhPGUpcmV0dXJuIGQoKTtvPW51bGwscyghMSksYyhudWxsKSxuLmVtaXQoXCJhbmltYXRpb25FbmRlZFwiKX1mdW5jdGlvbiBzKG4pe3QuYWN0aXZlPW59ZnVuY3Rpb24gYyhuKXt0LnRhcmdldElkeD1ufWZ1bmN0aW9uIGQoKXt2YXIgbjtuPXUsYT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG4pfWZ1bmN0aW9uIGwoKXt2YXIgdDt0PWEsd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHMoITEpLGMobnVsbCksbyYmbi5lbWl0KFwiYW5pbWF0aW9uU3RvcHBlZFwiKSxvPW51bGx9cmV0dXJuIHQ9e2FjdGl2ZTohMSxzdGFydDpmdW5jdGlvbih0KXtpZihsKCksbi50cmFjay5kZXRhaWxzKXt2YXIgYT0wLG89bi50cmFjay5kZXRhaWxzLnBvc2l0aW9uO2k9MCxlPTAscj10Lm1hcCgoZnVuY3Rpb24obil7dmFyIHQsaT1OdW1iZXIobykscj1udWxsIT09KHQ9bi5lYXJseUV4aXQpJiZ2b2lkIDAhPT10P3Q6bi5kdXJhdGlvbix1PW4uZWFzaW5nLHM9bi5kaXN0YW5jZSp1KHIvbi5kdXJhdGlvbil8fDA7bys9czt2YXIgYz1lO3JldHVybiBlKz1yLGErPXMsW2ksbi5kaXN0YW5jZSxjLGUsbi5kdXJhdGlvbix1XX0pKSxjKG4udHJhY2suZGlzdFRvSWR4KGEpKSxkKCksbi5lbWl0KFwiYW5pbWF0aW9uU3RhcnRlZFwiKX19LHN0b3A6bCx0YXJnZXRJZHg6bnVsbH19ZnVuY3Rpb24gbShuKXt2YXIgaSxlLGEsbyx1LHMsYyxmLGgsbSxnLGIseCxrLHk9MS8wLHc9W10sTT1udWxsLFQ9MDtmdW5jdGlvbiBDKG4pe18oVCtuKX1mdW5jdGlvbiBFKG4pe3ZhciB0PXooVCtuKS5hYnM7cmV0dXJuIEQodCk/dDpudWxsfWZ1bmN0aW9uIHoobil7dmFyIGk9TWF0aC5mbG9vcihNYXRoLmFicyh2KG4vZSkpKSxyPXYoKG4lZStlKSVlKTtyPT09ZSYmKHI9MCk7dmFyIGE9bChuKSxvPWMuaW5kZXhPZih0KFtdLGMsITApLnJlZHVjZSgoZnVuY3Rpb24obix0KXtyZXR1cm4gTWF0aC5hYnModC1yKTxNYXRoLmFicyhuLXIpP3Q6bn0pKSksdT1vO3JldHVybiBhPDAmJmkrKyxvPT09cyYmKHU9MCxpKz1hPjA/MTotMSkse2Ficzp1K2kqcyphLG9yaWdpbjpvLHJlbDp1fX1mdW5jdGlvbiBJKG4sdCxpKXt2YXIgZTtpZih0fHwhUygpKXJldHVybiBBKG4saSk7aWYoIUQobikpcmV0dXJuIG51bGw7dmFyIHI9eihudWxsIT1pP2k6VCksYT1yLmFicyxvPW4tci5yZWwsdT1hK287ZT1BKHUpO3ZhciBjPUEodS1zKmwobykpO3JldHVybihudWxsIT09YyYmTWF0aC5hYnMoYyk8TWF0aC5hYnMoZSl8fG51bGw9PT1lKSYmKGU9YyksdihlKX1mdW5jdGlvbiBBKG4sdCl7aWYobnVsbD09dCYmKHQ9dihUKSksIUQobil8fG51bGw9PT1uKXJldHVybiBudWxsO249TWF0aC5yb3VuZChuKTt2YXIgaT16KHQpLHI9aS5hYnMsYT1pLnJlbCxvPWkub3JpZ2luLHU9TyhuKSxkPSh0JWUrZSklZSxsPWNbb10sZj1NYXRoLmZsb29yKChuLShyLWEpKS9zKSplO3JldHVybiB2KGwtZC1sK2NbdV0rZisobz09PXM/ZTowKSl9ZnVuY3Rpb24gRChuKXtyZXR1cm4gTChuKT09PW59ZnVuY3Rpb24gTChuKXtyZXR1cm4gZChuLGgsbSl9ZnVuY3Rpb24gUygpe3JldHVybiBvLmxvb3B9ZnVuY3Rpb24gTyhuKXtyZXR1cm4obiVzK3MpJXN9ZnVuY3Rpb24gXyh0KXt2YXIgaTtpPXQtVCx3LnB1c2goe2Rpc3RhbmNlOmksdGltZXN0YW1wOnIoKX0pLHcubGVuZ3RoPjYmJih3PXcuc2xpY2UoLTYpKSxUPXYodCk7dmFyIGU9SCgpLmFicztpZihlIT09TSl7dmFyIGE9bnVsbCE9PU07TT1lLGEmJm4uZW1pdChcInNsaWRlQ2hhbmdlZFwiKX19ZnVuY3Rpb24gSCh0KXt2YXIgcj10P251bGw6ZnVuY3Rpb24oKXtpZihzKXt2YXIgbj1TKCksdD1uPyhUJWUrZSklZTpULGk9KG4/VCVlOlQpLXVbMF1bMl0scj0wLShpPDAmJm4/ZS1NYXRoLmFicyhpKTppKSxjPTAsZD16KFQpLGY9ZC5hYnMscD1kLnJlbCx2PXVbcF1bMl0seT11Lm1hcCgoZnVuY3Rpb24odCxpKXt2YXIgYT1yK2M7KGE8MC10WzBdfHxhPjEpJiYoYSs9KE1hdGguYWJzKGEpPmUtMSYmbj9lOjApKmwoLWEpKTt2YXIgdT1pLXAsZD1sKHUpLGg9dStmO24mJigtMT09PWQmJmE+diYmKGgrPXMpLDE9PT1kJiZhPHYmJihoLT1zKSxudWxsIT09ZyYmaDxnJiYoYSs9ZSksbnVsbCE9PWImJmg+YiYmKGEtPWUpKTt2YXIgbT1hK3RbMF0rdFsxXSx4PU1hdGgubWF4KGE+PTAmJm08PTE/MTptPDB8fGE+MT8wOmE8MD9NYXRoLm1pbigxLCh0WzBdK2EpL3RbMF0pOigxLWEpL3RbMF0sMCk7cmV0dXJuIGMrPXRbMF0rdFsxXSx7YWJzOmgsZGlzdGFuY2U6by5ydGw/LTEqYSsxLXRbMF06YSxwb3J0aW9uOngsc2l6ZTp0WzBdfX0pKTtyZXR1cm4gZj1MKGYpLHA9TyhmKSx7YWJzOkwoZiksbGVuZ3RoOmEsbWF4OmssbWF4SWR4Om0sbWluOngsbWluSWR4OmgscG9zaXRpb246VCxwcm9ncmVzczpuP3QvZTpUL2EscmVsOnAsc2xpZGVzOnksc2xpZGVzTGVuZ3RoOmV9fX0oKTtyZXR1cm4gaS5kZXRhaWxzPXIsbi5lbWl0KFwiZGV0YWlsc0NoYW5nZWRcIikscn1yZXR1cm4gaT17YWJzVG9SZWw6TyxhZGQ6QyxkZXRhaWxzOm51bGwsZGlzdFRvSWR4OkUsaWR4VG9EaXN0OkksaW5pdDpmdW5jdGlvbih0KXtpZihmdW5jdGlvbigpe2lmKG89bi5vcHRpb25zLHU9KG8udHJhY2tDb25maWd8fFtdKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltwKG4sXCJzaXplXCIsMSkscChuLFwic3BhY2luZ1wiLDApLHAobixcIm9yaWdpblwiLDApXX0pKSxzPXUubGVuZ3RoKXtlPXYodS5yZWR1Y2UoKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4rdFswXSt0WzFdfSksMCkpO3ZhciB0LGk9cy0xO2E9dihlK3VbMF1bMl0tdVtpXVswXS11W2ldWzJdLXVbaV1bMV0pLGM9dS5yZWR1Y2UoKGZ1bmN0aW9uKG4saSl7aWYoIW4pcmV0dXJuWzBdO3ZhciBlPXVbbi5sZW5ndGgtMV0scj1uW24ubGVuZ3RoLTFdKyhlWzBdK2VbMl0pK2VbMV07cmV0dXJuIHItPWlbMl0sbltuLmxlbmd0aC0xXT5yJiYocj1uW24ubGVuZ3RoLTFdKSxyPXYociksbi5wdXNoKHIpLCghdHx8dDxyKSYmKGY9bi5sZW5ndGgtMSksdD1yLG59KSxudWxsKSwwPT09YSYmKGY9MCksYy5wdXNoKHYoZSkpfX0oKSwhcylyZXR1cm4gSCghMCk7dmFyIGk7IWZ1bmN0aW9uKCl7dmFyIHQ9bi5vcHRpb25zLnJhbmdlLGk9bi5vcHRpb25zLmxvb3A7Zz1oPWk/cChpLFwibWluXCIsLTEvMCk6MCxiPW09aT9wKGksXCJtYXhcIix5KTpmO3ZhciBlPXAodCxcIm1pblwiLG51bGwpLHI9cCh0LFwibWF4XCIsbnVsbCk7bnVsbCE9PWUmJihoPWUpLG51bGwhPT1yJiYobT1yKSx4PWg9PT0tMS8wP2g6bi50cmFjay5pZHhUb0Rpc3QoaHx8MCwhMCwwKSxrPW09PT15P206SShtLCEwLDApLG51bGw9PT1yJiYoYj1tKSxwKHQsXCJhbGlnblwiLCExKSYmbSE9PXkmJjA9PT11W08obSldWzJdJiYoay09MS11W08obSldWzBdLG09RShrLVQpKSx4PXYoeCksaz12KGspfSgpLGk9dCxOdW1iZXIoaSk9PT1pP0MoQShMKHQpKSk6SCgpfSx0bzpfLHZlbG9jaXR5OmZ1bmN0aW9uKCl7dmFyIG49cigpLHQ9dy5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7dmFyIGU9aS5kaXN0YW5jZSxyPWkudGltZXN0YW1wO3JldHVybiBuLXI+MjAwfHwobChlKSE9PWwodC5kaXN0YW5jZSkmJnQuZGlzdGFuY2UmJih0PXtkaXN0YW5jZTowLGxhc3RUaW1lc3RhbXA6MCx0aW1lOjB9KSx0LnRpbWUmJih0LmRpc3RhbmNlKz1lKSx0Lmxhc3RUaW1lc3RhbXAmJih0LnRpbWUrPXItdC5sYXN0VGltZXN0YW1wKSx0Lmxhc3RUaW1lc3RhbXA9ciksdH0pLHtkaXN0YW5jZTowLGxhc3RUaW1lc3RhbXA6MCx0aW1lOjB9KTtyZXR1cm4gdC5kaXN0YW5jZS90LnRpbWV8fDB9fX1mdW5jdGlvbiBnKG4pe3ZhciB0LGksZSxyLGEsbyx1LHM7ZnVuY3Rpb24gYyhuKXtyZXR1cm4gMipufWZ1bmN0aW9uIGYobil7cmV0dXJuIGQobix1LHMpfWZ1bmN0aW9uIHAobil7cmV0dXJuIDEtTWF0aC5wb3coMS1uLDMpfWZ1bmN0aW9uIHYoKXtyZXR1cm4gZT9uLnRyYWNrLnZlbG9jaXR5KCk6MH1mdW5jdGlvbiBoKCl7YigpO3ZhciB0PVwiZnJlZS1zbmFwXCI9PT1uLm9wdGlvbnMubW9kZSxpPW4udHJhY2ssZT12KCk7cj1sKGUpO3ZhciB1PW4udHJhY2suZGV0YWlscyxzPVtdO2lmKGV8fCF0KXt2YXIgZD1tKGUpLGg9ZC5kaXN0LGc9ZC5kdXI7aWYoZz1jKGcpLGgqPXIsdCl7dmFyIHg9aS5pZHhUb0Rpc3QoaS5kaXN0VG9JZHgoaCksITApO3gmJihoPXgpfXMucHVzaCh7ZGlzdGFuY2U6aCxkdXJhdGlvbjpnLGVhc2luZzpwfSk7dmFyIGs9dS5wb3NpdGlvbix5PWsraDtpZih5PGF8fHk+byl7dmFyIHc9eTxhP2EtazpvLWssTT0wLFQ9ZTtpZihsKHcpPT09cil7dmFyIEM9TWF0aC5taW4oTWF0aC5hYnModykvTWF0aC5hYnMoaCksMSksRT1mdW5jdGlvbihuKXtyZXR1cm4gMS1NYXRoLnBvdygxLW4sMS8zKX0oQykqZztzWzBdLmVhcmx5RXhpdD1FLFQ9ZSooMS1DKX1lbHNlIHNbMF0uZWFybHlFeGl0PTAsTSs9dzt2YXIgej1tKFQsMTAwKSxJPXouZGlzdCpyO24ub3B0aW9ucy5ydWJiZXJiYW5kJiYocy5wdXNoKHtkaXN0YW5jZTpJLGR1cmF0aW9uOmMoei5kdXIpLGVhc2luZzpwfSkscy5wdXNoKHtkaXN0YW5jZTotSStNLGR1cmF0aW9uOjUwMCxlYXNpbmc6cH0pKX1uLmFuaW1hdG9yLnN0YXJ0KHMpfWVsc2Ugbi5tb3ZlVG9JZHgoZih1LmFicyksITAse2R1cmF0aW9uOjUwMCxlYXNpbmc6ZnVuY3Rpb24obil7cmV0dXJuIDErLS1uKm4qbipuKm59fSl9ZnVuY3Rpb24gbShuLHQpe3ZvaWQgMD09PXQmJih0PTFlMyk7dmFyIGk9MTQ3ZS05KyhuPU1hdGguYWJzKG4pKS90O3JldHVybntkaXN0Ok1hdGgucG93KG4sMikvaSxkdXI6bi9pfX1mdW5jdGlvbiBnKCl7dmFyIHQ9bi50cmFjay5kZXRhaWxzO3QmJihhPXQubWluLG89dC5tYXgsdT10Lm1pbklkeCxzPXQubWF4SWR4KX1mdW5jdGlvbiBiKCl7bi5hbmltYXRvci5zdG9wKCl9bi5vbihcInVwZGF0ZWRcIixnKSxuLm9uKFwib3B0aW9uc0NoYW5nZWRcIixnKSxuLm9uKFwiY3JlYXRlZFwiLGcpLG4ub24oXCJkcmFnU3RhcnRlZFwiLChmdW5jdGlvbigpe2U9ITEsYigpLHQ9aT1uLnRyYWNrLmRldGFpbHMuYWJzfSkpLG4ub24oXCJkcmFnQ2hlY2tlZFwiLChmdW5jdGlvbigpe2U9ITB9KSksbi5vbihcImRyYWdFbmRlZFwiLChmdW5jdGlvbigpe3ZhciBlPW4ub3B0aW9ucy5tb2RlO1wic25hcFwiPT09ZSYmZnVuY3Rpb24oKXt2YXIgZT1uLnRyYWNrLHI9bi50cmFjay5kZXRhaWxzLHU9ci5wb3NpdGlvbixzPWwodigpKTsodT5vfHx1PGEpJiYocz0wKTt2YXIgYz10K3M7MD09PXIuc2xpZGVzW2UuYWJzVG9SZWwoYyldLnBvcnRpb24mJihjLT1zKSx0IT09aSYmKGM9aSksbChlLmlkeFRvRGlzdChjLCEwKSkhPT1zJiYoYys9cyksYz1mKGMpO3ZhciBkPWUuaWR4VG9EaXN0KGMsITApO24uYW5pbWF0b3Iuc3RhcnQoW3tkaXN0YW5jZTpkLGR1cmF0aW9uOjUwMCxlYXNpbmc6ZnVuY3Rpb24obil7cmV0dXJuIDErLS1uKm4qbipuKm59fV0pfSgpLFwiZnJlZVwiIT09ZSYmXCJmcmVlLXNuYXBcIiE9PWV8fGgoKX0pKSxuLm9uKFwiZHJhZ2dlZFwiLChmdW5jdGlvbigpe2k9bi50cmFjay5kZXRhaWxzLmFic30pKX1mdW5jdGlvbiBiKG4pe3ZhciB0LGksZSxyLGEsZixwLHYsaCxtLGcsYix4LGsseSx3LE0sVCxDPWMoKTtmdW5jdGlvbiBFKHQpe2lmKGYmJnY9PT10LmlkKXt2YXIgbz1EKHQpO2lmKGgpe2lmKCFBKHQpKXJldHVybiBJKHQpO209byxoPSExLG4uZW1pdChcImRyYWdDaGVja2VkXCIpfWlmKHcpcmV0dXJuIG09bzt1KHQpO3ZhciBjPWZ1bmN0aW9uKHQpe2lmKE09PT0tMS8wJiZUPT09MS8wKXJldHVybiB0O3ZhciBlPW4udHJhY2suZGV0YWlscyxvPWUubGVuZ3RoLHU9ZS5wb3NpdGlvbixzPWQodCxNLXUsVC11KTtpZigwPT09bylyZXR1cm4gMDtpZighbi5vcHRpb25zLnJ1YmJlcmJhbmQpcmV0dXJuIHM7aWYodTw9VCYmdT49TSlyZXR1cm4gdDtpZih1PE0mJmk+MHx8dT5UJiZpPDApcmV0dXJuIHQ7dmFyIGM9KHU8TT91LU06dS1UKS9vLGw9cipvLGY9TWF0aC5hYnMoYypsKSxwPU1hdGgubWF4KDAsMS1mL2EqMik7cmV0dXJuIHAqcCp0fShwKG0tbykvciplKTtpPWwoYyk7dmFyIHg9bi50cmFjay5kZXRhaWxzLnBvc2l0aW9uOyh4Pk0mJng8VHx8eD09PU0mJmk+MHx8eD09PVQmJmk8MCkmJnModCksZys9YywhYiYmTWF0aC5hYnMoZypyKT41JiYoYj0hMCksbi50cmFjay5hZGQoYyksbT1vLG4uZW1pdChcImRyYWdnZWRcIil9fWZ1bmN0aW9uIHoodCl7IWYmJm4udHJhY2suZGV0YWlscyYmbi50cmFjay5kZXRhaWxzLmxlbmd0aCYmKGc9MCxmPSEwLGI9ITEsaD0hMCx2PXQuaWQsQSh0KSxtPUQodCksbi5lbWl0KFwiZHJhZ1N0YXJ0ZWRcIikpfWZ1bmN0aW9uIEkodCl7ZiYmdj09PXQuaWRDaGFuZ2VkJiYoZj0hMSxuLmVtaXQoXCJkcmFnRW5kZWRcIikpfWZ1bmN0aW9uIEEobil7dmFyIHQ9TCgpLGk9dD9uLnk6bi54LGU9dD9uLng6bi55LHI9dm9pZCAwIT09eCYmdm9pZCAwIT09ayYmTWF0aC5hYnMoay1lKTw9TWF0aC5hYnMoeC1pKTtyZXR1cm4geD1pLGs9ZSxyfWZ1bmN0aW9uIEQobil7cmV0dXJuIEwoKT9uLnk6bi54fWZ1bmN0aW9uIEwoKXtyZXR1cm4gbi5vcHRpb25zLnZlcnRpY2FsfWZ1bmN0aW9uIFMoKXtyPW4uc2l6ZSxhPUwoKT93aW5kb3cuaW5uZXJIZWlnaHQ6d2luZG93LmlubmVyV2lkdGg7dmFyIHQ9bi50cmFjay5kZXRhaWxzO3QmJihNPXQubWluLFQ9dC5tYXgpfWZ1bmN0aW9uIE8obil7YiYmKHMobiksdShuKSl9ZnVuY3Rpb24gXygpe2lmKEMucHVyZ2UoKSxuLm9wdGlvbnMuZHJhZyYmIW4ub3B0aW9ucy5kaXNhYmxlZCl7dmFyIGk7aT1uLm9wdGlvbnMuZHJhZ1NwZWVkfHwxLHA9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pOmZ1bmN0aW9uKG4pe3JldHVybiBuKml9LGU9bi5vcHRpb25zLnJ0bD8tMToxLFMoKSx0PW4uY29udGFpbmVyLGZ1bmN0aW9uKCl7dmFyIG49XCJkYXRhLWtlZW4tc2xpZGVyLWNsaWNrYWJsZVwiO28oXCJbXCIuY29uY2F0KG4sXCJdOm5vdChbXCIpLmNvbmNhdChuLFwiPWZhbHNlXSlcIiksdCkubWFwKChmdW5jdGlvbihuKXtDLmFkZChuLFwiZHJhZ3N0YXJ0XCIscyksQy5hZGQobixcIm1vdXNlZG93blwiLHMpLEMuYWRkKG4sXCJ0b3VjaHN0YXJ0XCIscyl9KSl9KCksQy5hZGQodCxcImRyYWdzdGFydFwiLChmdW5jdGlvbihuKXt1KG4pfSkpLEMuYWRkKHQsXCJjbGlja1wiLE8se2NhcHR1cmU6ITB9KSxDLmlucHV0KHQsXCJrc0RyYWdTdGFydFwiLHopLEMuaW5wdXQodCxcImtzRHJhZ1wiLEUpLEMuaW5wdXQodCxcImtzRHJhZ0VuZFwiLEkpLEMuaW5wdXQodCxcIm1vdXNlZG93blwiLHopLEMuaW5wdXQodCxcIm1vdXNlbW92ZVwiLEUpLEMuaW5wdXQodCxcIm1vdXNlbGVhdmVcIixJKSxDLmlucHV0KHQsXCJtb3VzZXVwXCIsSSksQy5pbnB1dCh0LFwidG91Y2hzdGFydFwiLHose3Bhc3NpdmU6ITB9KSxDLmlucHV0KHQsXCJ0b3VjaG1vdmVcIixFLHtwYXNzaXZlOiExfSksQy5pbnB1dCh0LFwidG91Y2hlbmRcIixJKSxDLmlucHV0KHQsXCJ0b3VjaGNhbmNlbFwiLEkpLEMuYWRkKHdpbmRvdyxcIndoZWVsXCIsKGZ1bmN0aW9uKG4pe2YmJnUobil9KSk7dmFyIHI9XCJkYXRhLWtlZW4tc2xpZGVyLXNjcm9sbGFibGVcIjtvKFwiW1wiLmNvbmNhdChyLFwiXTpub3QoW1wiKS5jb25jYXQocixcIj1mYWxzZV0pXCIpLG4uY29udGFpbmVyKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXt2YXIgdDtDLmlucHV0KG4sXCJ0b3VjaHN0YXJ0XCIsKGZ1bmN0aW9uKG4pe3Q9RChuKSx3PSEwLHk9ITB9KSx7cGFzc2l2ZTohMH0pLEMuaW5wdXQobixcInRvdWNobW92ZVwiLChmdW5jdGlvbihpKXt2YXIgZT1MKCkscj1lP24uc2Nyb2xsSGVpZ2h0LW4uY2xpZW50SGVpZ2h0Om4uc2Nyb2xsV2lkdGgtbi5jbGllbnRXaWR0aCxhPXQtRChpKSxvPWU/bi5zY3JvbGxUb3A6bi5zY3JvbGxMZWZ0LHM9ZSYmXCJzY3JvbGxcIj09PW4uc3R5bGUub3ZlcmZsb3dZfHwhZSYmXCJzY3JvbGxcIj09PW4uc3R5bGUub3ZlcmZsb3dYO2lmKHQ9RChpKSwoYTwwJiZvPjB8fGE+MCYmbzxyKSYmeSYmcylyZXR1cm4gdz0hMDt5PSExLHUoaSksdz0hMX0pKSxDLmlucHV0KG4sXCJ0b3VjaGVuZFwiLChmdW5jdGlvbigpe3c9ITF9KSl9KG4pfSkpfX1uLm9uKFwidXBkYXRlZFwiLFMpLG4ub24oXCJvcHRpb25zQ2hhbmdlZFwiLF8pLG4ub24oXCJjcmVhdGVkXCIsXyksbi5vbihcImRlc3Ryb3llZFwiLEMucHVyZ2UpfWZ1bmN0aW9uIHgobil7dmFyIHQsaSxlPW51bGw7ZnVuY3Rpb24gcih0LGksZSl7bi5hbmltYXRvci5hY3RpdmU/byh0LGksZSk6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3JldHVybiBvKHQsaSxlKX0pKX1mdW5jdGlvbiBhKCl7cighMSwhMSxpKX1mdW5jdGlvbiBvKGkscixhKXt2YXIgbz0wLHU9bi5zaXplLGQ9bi50cmFjay5kZXRhaWxzO2lmKGQmJnQpe3ZhciBsPWQuc2xpZGVzO3QuZm9yRWFjaCgoZnVuY3Rpb24obix0KXtpZihpKSFlJiZyJiZzKG4sbnVsbCxhKSxjKG4sbnVsbCxhKTtlbHNle2lmKCFsW3RdKXJldHVybjt2YXIgZD1sW3RdLnNpemUqdTshZSYmciYmcyhuLGQsYSksYyhuLGxbdF0uZGlzdGFuY2UqdS1vLGEpLG8rPWR9fSkpfX1mdW5jdGlvbiB1KHQpe3JldHVyblwicGVyZm9ybWFuY2VcIj09PW4ub3B0aW9ucy5yZW5kZXJNb2RlP01hdGgucm91bmQodCk6dH1mdW5jdGlvbiBzKG4sdCxpKXt2YXIgZT1pP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiO251bGwhPT10JiYodD11KHQpK1wicHhcIiksbi5zdHlsZVtcIm1pbi1cIitlXT10LG4uc3R5bGVbXCJtYXgtXCIrZV09dH1mdW5jdGlvbiBjKG4sdCxpKXtpZihudWxsIT09dCl7dD11KHQpO3ZhciBlPWk/dDowO3Q9XCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoaT8wOnQsXCJweCwgXCIpLmNvbmNhdChlLFwicHgsIDApXCIpfW4uc3R5bGUudHJhbnNmb3JtPXQsbi5zdHlsZVtcIi13ZWJraXQtdHJhbnNmb3JtXCJdPXR9ZnVuY3Rpb24gZCgpe3QmJihvKCEwLCEwLGkpLHQ9bnVsbCksbi5vbihcImRldGFpbHNDaGFuZ2VkXCIsYSwhMCl9ZnVuY3Rpb24gbCgpe3IoITEsITAsaSl9ZnVuY3Rpb24gZigpe2QoKSxpPW4ub3B0aW9ucy52ZXJ0aWNhbCxuLm9wdGlvbnMuZGlzYWJsZWR8fFwiY3VzdG9tXCI9PT1uLm9wdGlvbnMucmVuZGVyTW9kZXx8KGU9XCJhdXRvXCI9PT1wKG4ub3B0aW9ucy5zbGlkZXMsXCJwZXJWaWV3XCIsbnVsbCksbi5vbihcImRldGFpbHNDaGFuZ2VkXCIsYSksKHQ9bi5zbGlkZXMpLmxlbmd0aCYmbCgpKX1uLm9uKFwiY3JlYXRlZFwiLGYpLG4ub24oXCJvcHRpb25zQ2hhbmdlZFwiLGYpLG4ub24oXCJiZWZvcmVPcHRpb25zQ2hhbmdlZFwiLChmdW5jdGlvbigpe2QoKX0pKSxuLm9uKFwidXBkYXRlZFwiLGwpLG4ub24oXCJkZXN0cm95ZWRcIixkKX1mdW5jdGlvbiBrKHQsaSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByLHUscyxkLGwsdixoPWMoKTtmdW5jdGlvbiBtKG4pe3ZhciB0O2EoZS5jb250YWluZXIsXCJyZXZlcnNlXCIsXCJydGxcIiE9PSh0PWUuY29udGFpbmVyLHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcImRpcmVjdGlvblwiKSl8fG4/bnVsbDpcIlwiKSxhKGUuY29udGFpbmVyLFwidlwiLGUub3B0aW9ucy52ZXJ0aWNhbCYmIW4/XCJcIjpudWxsKSxhKGUuY29udGFpbmVyLFwiZGlzYWJsZWRcIixlLm9wdGlvbnMuZGlzYWJsZWQmJiFuP1wiXCI6bnVsbCl9ZnVuY3Rpb24gZygpe2IoKSYmTSgpfWZ1bmN0aW9uIGIoKXt2YXIgdD1udWxsO2lmKGQuZm9yRWFjaCgoZnVuY3Rpb24obil7bi5tYXRjaGVzJiYodD1uLl9fbWVkaWEpfSkpLHQ9PT1yKXJldHVybiExO3J8fGUuZW1pdChcImJlZm9yZU9wdGlvbnNDaGFuZ2VkXCIpLHI9dDt2YXIgaT10P3MuYnJlYWtwb2ludHNbdF06cztyZXR1cm4gZS5vcHRpb25zPW4obih7fSxzKSxpKSxtKCksSSgpLEEoKSxDKCksITB9ZnVuY3Rpb24geChuKXt2YXIgdD1mKG4pO3JldHVybihlLm9wdGlvbnMudmVydGljYWw/dC5oZWlnaHQ6dC53aWR0aCkvZS5zaXplfHwxfWZ1bmN0aW9uIGsoKXtyZXR1cm4gZS5vcHRpb25zLnRyYWNrQ29uZmlnLmxlbmd0aH1mdW5jdGlvbiB5KHQpe2Zvcih2YXIgYSBpbiByPSExLHM9bihuKHt9LGkpLHQpLGgucHVyZ2UoKSx1PWUuc2l6ZSxkPVtdLHMuYnJlYWtwb2ludHN8fFtdKXt2YXIgbz13aW5kb3cubWF0Y2hNZWRpYShhKTtvLl9fbWVkaWE9YSxkLnB1c2gobyksaC5hZGQobyxcImNoYW5nZVwiLGcpfWguYWRkKHdpbmRvdyxcIm9yaWVudGF0aW9uY2hhbmdlXCIseiksaC5hZGQod2luZG93LFwicmVzaXplXCIsRSksYigpfWZ1bmN0aW9uIHcobil7ZS5hbmltYXRvci5zdG9wKCk7dmFyIHQ9ZS50cmFjay5kZXRhaWxzO2UudHJhY2suaW5pdChudWxsIT1uP246dD90LmFiczowKX1mdW5jdGlvbiBNKG4pe3cobiksZS5lbWl0KFwib3B0aW9uc0NoYW5nZWRcIil9ZnVuY3Rpb24gVChuLHQpe2lmKG4pcmV0dXJuIHkobiksdm9pZCBNKHQpO0koKSxBKCk7dmFyIGk9aygpO0MoKSxrKCkhPT1pP00odCk6dyh0KSxlLmVtaXQoXCJ1cGRhdGVkXCIpfWZ1bmN0aW9uIEMoKXt2YXIgbj1lLm9wdGlvbnMuc2xpZGVzO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIGUub3B0aW9ucy50cmFja0NvbmZpZz1uKGUuc2l6ZSxlLnNsaWRlcyk7Zm9yKHZhciB0PWUuc2xpZGVzLGk9dC5sZW5ndGgscj1cIm51bWJlclwiPT10eXBlb2Ygbj9uOnAobixcIm51bWJlclwiLGksITApLGE9W10sbz1wKG4sXCJwZXJWaWV3XCIsMSwhMCksdT1wKG4sXCJzcGFjaW5nXCIsMCwhMCkvZS5zaXplfHwwLHM9XCJhdXRvXCI9PT1vP3U6dS9vLGM9cChuLFwib3JpZ2luXCIsXCJhdXRvXCIpLGQ9MCxsPTA7bDxyO2wrKyl7dmFyIGY9XCJhdXRvXCI9PT1vP3godFtsXSk6MS9vLXUrcyx2PVwiY2VudGVyXCI9PT1jPy41LWYvMjpcImF1dG9cIj09PWM/MDpjO2EucHVzaCh7b3JpZ2luOnYsc2l6ZTpmLHNwYWNpbmc6dX0pLGQrPWZ9aWYoZCs9dSooci0xKSxcImF1dG9cIj09PWMmJiFlLm9wdGlvbnMubG9vcCYmMSE9PW8pe3ZhciBoPTA7YS5tYXAoKGZ1bmN0aW9uKG4pe3ZhciB0PWQtaDtyZXR1cm4gaCs9bi5zaXplK3UsdD49MXx8KG4ub3JpZ2luPTEtdC0oZD4xPzA6MS1kKSksbn0pKX1lLm9wdGlvbnMudHJhY2tDb25maWc9YX1mdW5jdGlvbiBFKCl7SSgpO3ZhciBuPWUuc2l6ZTtlLm9wdGlvbnMuZGlzYWJsZWR8fG49PT11fHwodT1uLFQoKSl9ZnVuY3Rpb24geigpe0UoKSxzZXRUaW1lb3V0KEUsNTAwKSxzZXRUaW1lb3V0KEUsMmUzKX1mdW5jdGlvbiBJKCl7dmFyIG49ZihlLmNvbnRhaW5lcik7ZS5zaXplPShlLm9wdGlvbnMudmVydGljYWw/bi5oZWlnaHQ6bi53aWR0aCl8fDF9ZnVuY3Rpb24gQSgpe2Uuc2xpZGVzPW8oZS5vcHRpb25zLnNlbGVjdG9yLGUuY29udGFpbmVyKX1lLmNvbnRhaW5lcj0odj1vKHQsbHx8ZG9jdW1lbnQpKS5sZW5ndGg/dlswXTpudWxsLGUuZGVzdHJveT1mdW5jdGlvbigpe2gucHVyZ2UoKSxlLmVtaXQoXCJkZXN0cm95ZWRcIiksbSghMCl9LGUucHJldj1mdW5jdGlvbigpe2UubW92ZVRvSWR4KGUudHJhY2suZGV0YWlscy5hYnMtMSwhMCl9LGUubmV4dD1mdW5jdGlvbigpe2UubW92ZVRvSWR4KGUudHJhY2suZGV0YWlscy5hYnMrMSwhMCl9LGUudXBkYXRlPVQseShlLm9wdGlvbnMpfX12YXIgeT1mdW5jdGlvbihuLGksZSl7dHJ5e3JldHVybiBmdW5jdGlvbihuLHQpe3ZhciBpLGU9e307cmV0dXJuIGk9e2VtaXQ6ZnVuY3Rpb24obil7ZVtuXSYmZVtuXS5mb3JFYWNoKChmdW5jdGlvbihuKXtuKGkpfSkpO3ZhciB0PWkub3B0aW9ucyYmaS5vcHRpb25zW25dO3QmJnQoaSl9LG1vdmVUb0lkeDpmdW5jdGlvbihuLHQsZSl7dmFyIHI9aS50cmFjay5pZHhUb0Rpc3Qobix0KTtpZihyKXt2YXIgYT1pLm9wdGlvbnMuZGVmYXVsdEFuaW1hdGlvbjtpLmFuaW1hdG9yLnN0YXJ0KFt7ZGlzdGFuY2U6cixkdXJhdGlvbjpwKGV8fGEsXCJkdXJhdGlvblwiLDUwMCksZWFzaW5nOnAoZXx8YSxcImVhc2luZ1wiLChmdW5jdGlvbihuKXtyZXR1cm4gMSstLW4qbipuKm4qbn0pKX1dKX19LG9uOmZ1bmN0aW9uKG4sdCxpKXt2b2lkIDA9PT1pJiYoaT0hMSksZVtuXXx8KGVbbl09W10pO3ZhciByPWVbbl0uaW5kZXhPZih0KTtyPi0xP2kmJmRlbGV0ZSBlW25dW3JdOml8fGVbbl0ucHVzaCh0KX0sb3B0aW9uczpufSxmdW5jdGlvbigpe2lmKGkudHJhY2s9bShpKSxpLmFuaW1hdG9yPWgoaSksdClmb3IodmFyIG49MCxlPXQ7bjxlLmxlbmd0aDtuKyspKDAsZVtuXSkoaSk7aS50cmFjay5pbml0KGkub3B0aW9ucy5pbml0aWFsfHwwKSxpLmVtaXQoXCJjcmVhdGVkXCIpfSgpLGl9KGksdChbayhuLHtkcmFnOiEwLG1vZGU6XCJzbmFwXCIscmVuZGVyTW9kZTpcInByZWNpc2lvblwiLHJ1YmJlcmJhbmQ6ITAsc2VsZWN0b3I6XCIua2Vlbi1zbGlkZXJfX3NsaWRlXCJ9KSx4LGIsZ10sZXx8W10sITApKX1jYXRjaChuKXtjb25zb2xlLmVycm9yKG4pfX07ZXhwb3J0e3kgYXMgZGVmYXVsdH07XG4iLCIvLyBSaXZldHMuanNcbi8vIHZlcnNpb246IDAuOS42XG4vLyBhdXRob3I6IE1pY2hhZWwgUmljaGFyZHNcbi8vIGxpY2Vuc2U6IE1JVFxuKGZ1bmN0aW9uKCkge1xuICB2YXIgUml2ZXRzLCBiaW5kTWV0aG9kLCBqUXVlcnksIHVuYmluZE1ldGhvZCwgX3JlZixcbiAgICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICAgIF9fc2xpY2UgPSBbXS5zbGljZSxcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuICBSaXZldHMgPSB7XG4gICAgb3B0aW9uczogWydwcmVmaXgnLCAndGVtcGxhdGVEZWxpbWl0ZXJzJywgJ3Jvb3RJbnRlcmZhY2UnLCAncHJlbG9hZERhdGEnLCAnaGFuZGxlcicsICdleGVjdXRlRnVuY3Rpb25zJ10sXG4gICAgZXh0ZW5zaW9uczogWydiaW5kZXJzJywgJ2Zvcm1hdHRlcnMnLCAnY29tcG9uZW50cycsICdhZGFwdGVycyddLFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIGJpbmRlcnM6IHt9LFxuICAgICAgY29tcG9uZW50czoge30sXG4gICAgICBmb3JtYXR0ZXJzOiB7fSxcbiAgICAgIGFkYXB0ZXJzOiB7fSxcbiAgICAgIHByZWZpeDogJ3J2JyxcbiAgICAgIHRlbXBsYXRlRGVsaW1pdGVyczogWyd7JywgJ30nXSxcbiAgICAgIHJvb3RJbnRlcmZhY2U6ICcuJyxcbiAgICAgIHByZWxvYWREYXRhOiB0cnVlLFxuICAgICAgZXhlY3V0ZUZ1bmN0aW9uczogZmFsc2UsXG4gICAgICBpdGVyYXRpb25BbGlhczogZnVuY3Rpb24obW9kZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJScgKyBtb2RlbE5hbWUgKyAnJSc7XG4gICAgICB9LFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24oY29udGV4dCwgZXYsIGJpbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChjb250ZXh0LCBldiwgYmluZGluZy52aWV3Lm1vZGVscyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJlOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yLCBrZXksIG9wdGlvbiwgdmFsdWU7XG4gICAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgIHZhbHVlID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICAgIGlmIChvcHRpb24gPT09ICdiaW5kZXJzJyB8fCBvcHRpb24gPT09ICdjb21wb25lbnRzJyB8fCBvcHRpb24gPT09ICdmb3JtYXR0ZXJzJyB8fCBvcHRpb24gPT09ICdhZGFwdGVycycpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICBSaXZldHNbb3B0aW9uXVtrZXldID0gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUml2ZXRzW1wicHVibGljXCJdW29wdGlvbl0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiaW5kOiBmdW5jdGlvbihlbCwgbW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB2aWV3O1xuICAgICAgICBpZiAobW9kZWxzID09IG51bGwpIHtcbiAgICAgICAgICBtb2RlbHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZpZXcgPSBuZXcgUml2ZXRzLlZpZXcoZWwsIG1vZGVscywgb3B0aW9ucyk7XG4gICAgICAgIHZpZXcuYmluZCgpO1xuICAgICAgICByZXR1cm4gdmlldztcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbihjb21wb25lbnQsIGVsLCBkYXRhKSB7XG4gICAgICAgIHZhciBzY29wZSwgdGVtcGxhdGUsIHZpZXc7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsID09IG51bGwpIHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudCA9IFJpdmV0c1tcInB1YmxpY1wiXS5jb21wb25lbnRzW2NvbXBvbmVudF07XG4gICAgICAgIHRlbXBsYXRlID0gY29tcG9uZW50LnRlbXBsYXRlLmNhbGwodGhpcywgZWwpO1xuICAgICAgICBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChlbC5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHNjb3BlID0gY29tcG9uZW50LmluaXRpYWxpemUuY2FsbCh0aGlzLCBlbCwgZGF0YSk7XG4gICAgICAgIHZpZXcgPSBuZXcgUml2ZXRzLlZpZXcoZWwsIHNjb3BlKTtcbiAgICAgICAgdmlldy5iaW5kKCk7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAod2luZG93WydqUXVlcnknXSB8fCB3aW5kb3dbJyQnXSkge1xuICAgIGpRdWVyeSA9IHdpbmRvd1snalF1ZXJ5J10gfHwgd2luZG93WyckJ107XG4gICAgX3JlZiA9ICdvbicgaW4galF1ZXJ5LnByb3RvdHlwZSA/IFsnb24nLCAnb2ZmJ10gOiBbJ2JpbmQnLCAndW5iaW5kJ10sIGJpbmRNZXRob2QgPSBfcmVmWzBdLCB1bmJpbmRNZXRob2QgPSBfcmVmWzFdO1xuICAgIFJpdmV0cy5VdGlsID0ge1xuICAgICAgYmluZEV2ZW50OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeShlbClbYmluZE1ldGhvZF0oZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgfSxcbiAgICAgIHVuYmluZEV2ZW50OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeShlbClbdW5iaW5kTWV0aG9kXShldmVudCwgaGFuZGxlcik7XG4gICAgICB9LFxuICAgICAgZ2V0SW5wdXRWYWx1ZTogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyICRlbDtcbiAgICAgICAgJGVsID0galF1ZXJ5KGVsKTtcbiAgICAgICAgaWYgKCRlbC5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICByZXR1cm4gJGVsLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAkZWwudmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIFJpdmV0cy5VdGlsID0ge1xuICAgICAgYmluZEV2ZW50OiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKCksXG4gICAgICB1bmJpbmRFdmVudDogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9KSgpLFxuICAgICAgZ2V0SW5wdXRWYWx1ZTogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIG8sIF9pLCBfbGVuLCBfcmVzdWx0cztcbiAgICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2hlY2tlZDtcbiAgICAgICAgfSBlbHNlIGlmIChlbC50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBlbC5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgbyA9IGVsW19pXTtcbiAgICAgICAgICAgIGlmIChvLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goby52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZWwudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgUml2ZXRzLlR5cGVQYXJzZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gVHlwZVBhcnNlcigpIHt9XG5cbiAgICBUeXBlUGFyc2VyLnR5cGVzID0ge1xuICAgICAgcHJpbWl0aXZlOiAwLFxuICAgICAga2V5cGF0aDogMVxuICAgIH07XG5cbiAgICBUeXBlUGFyc2VyLnBhcnNlID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoL14nLionJHxeXCIuKlwiJC8udGVzdChzdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlcy5wcmltaXRpdmUsXG4gICAgICAgICAgdmFsdWU6IHN0cmluZy5zbGljZSgxLCAtMSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVzLnByaW1pdGl2ZSxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzdHJpbmcgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVzLnByaW1pdGl2ZSxcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nID09PSAnbnVsbCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVzLnByaW1pdGl2ZSxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlcy5wcmltaXRpdmUsXG4gICAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlcy5wcmltaXRpdmUsXG4gICAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihOdW1iZXIoc3RyaW5nKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlcy5wcmltaXRpdmUsXG4gICAgICAgICAgdmFsdWU6IE51bWJlcihzdHJpbmcpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZXMua2V5cGF0aCxcbiAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBUeXBlUGFyc2VyO1xuXG4gIH0pKCk7XG5cbiAgUml2ZXRzLlRleHRUZW1wbGF0ZVBhcnNlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBUZXh0VGVtcGxhdGVQYXJzZXIoKSB7fVxuXG4gICAgVGV4dFRlbXBsYXRlUGFyc2VyLnR5cGVzID0ge1xuICAgICAgdGV4dDogMCxcbiAgICAgIGJpbmRpbmc6IDFcbiAgICB9O1xuXG4gICAgVGV4dFRlbXBsYXRlUGFyc2VyLnBhcnNlID0gZnVuY3Rpb24odGVtcGxhdGUsIGRlbGltaXRlcnMpIHtcbiAgICAgIHZhciBpbmRleCwgbGFzdEluZGV4LCBsYXN0VG9rZW4sIGxlbmd0aCwgc3Vic3RyaW5nLCB0b2tlbnMsIHZhbHVlO1xuICAgICAgdG9rZW5zID0gW107XG4gICAgICBsZW5ndGggPSB0ZW1wbGF0ZS5sZW5ndGg7XG4gICAgICBpbmRleCA9IDA7XG4gICAgICBsYXN0SW5kZXggPSAwO1xuICAgICAgd2hpbGUgKGxhc3RJbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoZGVsaW1pdGVyc1swXSwgbGFzdEluZGV4KTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZXMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0ZW1wbGF0ZS5zbGljZShsYXN0SW5kZXgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBsYXN0SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVzLnRleHQsXG4gICAgICAgICAgICAgIHZhbHVlOiB0ZW1wbGF0ZS5zbGljZShsYXN0SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgZGVsaW1pdGVyc1swXS5sZW5ndGg7XG4gICAgICAgICAgaW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKGRlbGltaXRlcnNbMV0sIGxhc3RJbmRleCk7XG4gICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgc3Vic3RyaW5nID0gdGVtcGxhdGUuc2xpY2UobGFzdEluZGV4IC0gZGVsaW1pdGVyc1sxXS5sZW5ndGgpO1xuICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgobGFzdFRva2VuICE9IG51bGwgPyBsYXN0VG9rZW4udHlwZSA6IHZvaWQgMCkgPT09IHRoaXMudHlwZXMudGV4dCkge1xuICAgICAgICAgICAgICBsYXN0VG9rZW4udmFsdWUgKz0gc3Vic3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZXMudGV4dCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3Vic3RyaW5nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gdGVtcGxhdGUuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpO1xuICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZXMuYmluZGluZyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgZGVsaW1pdGVyc1sxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfTtcblxuICAgIHJldHVybiBUZXh0VGVtcGxhdGVQYXJzZXI7XG5cbiAgfSkoKTtcblxuICBSaXZldHMuVmlldyA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBWaWV3KGVscywgbW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICB2YXIgaywgb3B0aW9uLCB2LCBfYmFzZSwgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZjEsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9yZWY1O1xuICAgICAgdGhpcy5lbHMgPSBlbHM7XG4gICAgICB0aGlzLm1vZGVscyA9IG1vZGVscztcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgICAgdGhpcy5wdWJsaXNoID0gX19iaW5kKHRoaXMucHVibGlzaCwgdGhpcyk7XG4gICAgICB0aGlzLnN5bmMgPSBfX2JpbmQodGhpcy5zeW5jLCB0aGlzKTtcbiAgICAgIHRoaXMudW5iaW5kID0gX19iaW5kKHRoaXMudW5iaW5kLCB0aGlzKTtcbiAgICAgIHRoaXMuYmluZCA9IF9fYmluZCh0aGlzLmJpbmQsIHRoaXMpO1xuICAgICAgdGhpcy5zZWxlY3QgPSBfX2JpbmQodGhpcy5zZWxlY3QsIHRoaXMpO1xuICAgICAgdGhpcy50cmF2ZXJzZSA9IF9fYmluZCh0aGlzLnRyYXZlcnNlLCB0aGlzKTtcbiAgICAgIHRoaXMuYnVpbGQgPSBfX2JpbmQodGhpcy5idWlsZCwgdGhpcyk7XG4gICAgICB0aGlzLmJ1aWxkQmluZGluZyA9IF9fYmluZCh0aGlzLmJ1aWxkQmluZGluZywgdGhpcyk7XG4gICAgICB0aGlzLmJpbmRpbmdSZWdFeHAgPSBfX2JpbmQodGhpcy5iaW5kaW5nUmVnRXhwLCB0aGlzKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9fYmluZCh0aGlzLm9wdGlvbnMsIHRoaXMpO1xuICAgICAgaWYgKCEodGhpcy5lbHMuanF1ZXJ5IHx8IHRoaXMuZWxzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHRoaXMuZWxzID0gW3RoaXMuZWxzXTtcbiAgICAgIH1cbiAgICAgIF9yZWYxID0gUml2ZXRzLmV4dGVuc2lvbnM7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG9wdGlvbiA9IF9yZWYxW19pXTtcbiAgICAgICAgdGhpc1tvcHRpb25dID0ge307XG4gICAgICAgIGlmIChvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgICAgICBfcmVmMiA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgICBmb3IgKGsgaW4gX3JlZjIpIHtcbiAgICAgICAgICAgIHYgPSBfcmVmMltrXTtcbiAgICAgICAgICAgIHRoaXNbb3B0aW9uXVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZWYzID0gUml2ZXRzW1wicHVibGljXCJdW29wdGlvbl07XG4gICAgICAgIGZvciAoayBpbiBfcmVmMykge1xuICAgICAgICAgIHYgPSBfcmVmM1trXTtcbiAgICAgICAgICBpZiAoKF9iYXNlID0gdGhpc1tvcHRpb25dKVtrXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBfYmFzZVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfcmVmNCA9IFJpdmV0cy5vcHRpb25zO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjQubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIG9wdGlvbiA9IF9yZWY0W19qXTtcbiAgICAgICAgdGhpc1tvcHRpb25dID0gKF9yZWY1ID0gb3B0aW9uc1tvcHRpb25dKSAhPSBudWxsID8gX3JlZjUgOiBSaXZldHNbXCJwdWJsaWNcIl1bb3B0aW9uXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBWaWV3LnByb3RvdHlwZS5vcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9uLCBvcHRpb25zLCBfaSwgX2xlbiwgX3JlZjE7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgICBfcmVmMSA9IFJpdmV0cy5leHRlbnNpb25zLmNvbmNhdChSaXZldHMub3B0aW9ucyk7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG9wdGlvbiA9IF9yZWYxW19pXTtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gdGhpc1tvcHRpb25dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlLmJpbmRpbmdSZWdFeHAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlwiICsgdGhpcy5wcmVmaXggKyBcIi1cIik7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlLmJ1aWxkQmluZGluZyA9IGZ1bmN0aW9uKGJpbmRpbmcsIG5vZGUsIHR5cGUsIGRlY2xhcmF0aW9uKSB7XG4gICAgICB2YXIgY29udGV4dCwgY3R4LCBkZXBlbmRlbmNpZXMsIGtleXBhdGgsIG9wdGlvbnMsIHBpcGUsIHBpcGVzO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgcGlwZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaSwgX2xlbiwgX3JlZjEsIF9yZXN1bHRzO1xuICAgICAgICBfcmVmMSA9IGRlY2xhcmF0aW9uLm1hdGNoKC8oKD86J1teJ10qJykqKD86KD86W15cXHwnXSooPzonW14nXSonKStbXlxcfCddKikrfFteXFx8XSspKXxeJC9nKTtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIHBpcGUgPSBfcmVmMVtfaV07XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChwaXBlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfSkoKTtcbiAgICAgIGNvbnRleHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaSwgX2xlbiwgX3JlZjEsIF9yZXN1bHRzO1xuICAgICAgICBfcmVmMSA9IHBpcGVzLnNoaWZ0KCkuc3BsaXQoJzwnKTtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIGN0eCA9IF9yZWYxW19pXTtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKGN0eC50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pKCk7XG4gICAgICBrZXlwYXRoID0gY29udGV4dC5zaGlmdCgpO1xuICAgICAgb3B0aW9ucy5mb3JtYXR0ZXJzID0gcGlwZXM7XG4gICAgICBpZiAoZGVwZW5kZW5jaWVzID0gY29udGV4dC5zaGlmdCgpKSB7XG4gICAgICAgIG9wdGlvbnMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzLnNwbGl0KC9cXHMrLyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5ncy5wdXNoKG5ldyBSaXZldHNbYmluZGluZ10odGhpcywgbm9kZSwgdHlwZSwga2V5cGF0aCwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICBWaWV3LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsLCBwYXJzZSwgX2ksIF9sZW4sIF9yZWYxO1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xuICAgICAgcGFyc2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB2YXIgYmxvY2ssIGNoaWxkTm9kZSwgZGVsaW1pdGVycywgbiwgcGFyc2VyLCB0ZXh0LCB0b2tlbiwgdG9rZW5zLCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmMTtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgcGFyc2VyID0gUml2ZXRzLlRleHRUZW1wbGF0ZVBhcnNlcjtcbiAgICAgICAgICAgIGlmIChkZWxpbWl0ZXJzID0gX3RoaXMudGVtcGxhdGVEZWxpbWl0ZXJzKSB7XG4gICAgICAgICAgICAgIGlmICgodG9rZW5zID0gcGFyc2VyLnBhcnNlKG5vZGUuZGF0YSwgZGVsaW1pdGVycykpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghKHRva2Vucy5sZW5ndGggPT09IDEgJiYgdG9rZW5zWzBdLnR5cGUgPT09IHBhcnNlci50eXBlcy50ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSB0b2tlbnMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbX2ldO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRleHQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkQmluZGluZygnVGV4dEJpbmRpbmcnLCB0ZXh0LCBudWxsLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGJsb2NrID0gX3RoaXMudHJhdmVyc2Uobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIF9yZWYxID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgX2ssIF9sZW4xLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICAgICAgICAgIF9yZWYxID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKF9rID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9rIDwgX2xlbjE7IF9rKyspIHtcbiAgICAgICAgICAgICAgICBuID0gX3JlZjFbX2tdO1xuICAgICAgICAgICAgICAgIF9yZXN1bHRzLnB1c2gobik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYxLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBfcmVmMVtfal07XG4gICAgICAgICAgICAgIHBhcnNlKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICBfcmVmMSA9IHRoaXMuZWxzO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBlbCA9IF9yZWYxW19pXTtcbiAgICAgICAgcGFyc2UoZWwpO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kaW5ncy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIF9yZWYyLCBfcmVmMztcbiAgICAgICAgcmV0dXJuICgoKF9yZWYyID0gYi5iaW5kZXIpICE9IG51bGwgPyBfcmVmMi5wcmlvcml0eSA6IHZvaWQgMCkgfHwgMCkgLSAoKChfcmVmMyA9IGEuYmluZGVyKSAhPSBudWxsID8gX3JlZjMucHJpb3JpdHkgOiB2b2lkIDApIHx8IDApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSwgYXR0cmlidXRlcywgYmluZGVyLCBiaW5kaW5nUmVnRXhwLCBibG9jaywgaWRlbnRpZmllciwgcmVnZXhwLCB0eXBlLCB2YWx1ZSwgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZjEsIF9yZWYyLCBfcmVmMztcbiAgICAgIGJpbmRpbmdSZWdFeHAgPSB0aGlzLmJpbmRpbmdSZWdFeHAoKTtcbiAgICAgIGJsb2NrID0gbm9kZS5ub2RlTmFtZSA9PT0gJ1NDUklQVCcgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ1NUWUxFJztcbiAgICAgIF9yZWYxID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBhdHRyaWJ1dGUgPSBfcmVmMVtfaV07XG4gICAgICAgIGlmIChiaW5kaW5nUmVnRXhwLnRlc3QoYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgICAgdHlwZSA9IGF0dHJpYnV0ZS5uYW1lLnJlcGxhY2UoYmluZGluZ1JlZ0V4cCwgJycpO1xuICAgICAgICAgIGlmICghKGJpbmRlciA9IHRoaXMuYmluZGVyc1t0eXBlXSkpIHtcbiAgICAgICAgICAgIF9yZWYyID0gdGhpcy5iaW5kZXJzO1xuICAgICAgICAgICAgZm9yIChpZGVudGlmaWVyIGluIF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gX3JlZjJbaWRlbnRpZmllcl07XG4gICAgICAgICAgICAgIGlmIChpZGVudGlmaWVyICE9PSAnKicgJiYgaWRlbnRpZmllci5pbmRleE9mKCcqJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cChcIl5cIiArIChpZGVudGlmaWVyLnJlcGxhY2UoL1xcKi9nLCAnLisnKSkgKyBcIiRcIik7XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICBiaW5kZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYmluZGVyIHx8IChiaW5kZXIgPSB0aGlzLmJpbmRlcnNbJyonXSk7XG4gICAgICAgICAgaWYgKGJpbmRlci5ibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IFthdHRyaWJ1dGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3JlZjMgPSBhdHRyaWJ1dGVzIHx8IG5vZGUuYXR0cmlidXRlcztcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYzLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICBhdHRyaWJ1dGUgPSBfcmVmM1tfal07XG4gICAgICAgIGlmIChiaW5kaW5nUmVnRXhwLnRlc3QoYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgICAgdHlwZSA9IGF0dHJpYnV0ZS5uYW1lLnJlcGxhY2UoYmluZGluZ1JlZ0V4cCwgJycpO1xuICAgICAgICAgIHRoaXMuYnVpbGRCaW5kaW5nKCdCaW5kaW5nJywgbm9kZSwgdHlwZSwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICB0eXBlID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzW3R5cGVdICYmICFub2RlLl9ib3VuZCkge1xuICAgICAgICAgIHRoaXMuYmluZGluZ3MucHVzaChuZXcgUml2ZXRzLkNvbXBvbmVudEJpbmRpbmcodGhpcywgbm9kZSwgdHlwZSkpO1xuICAgICAgICAgIGJsb2NrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH07XG5cbiAgICBWaWV3LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihmbikge1xuICAgICAgdmFyIGJpbmRpbmcsIF9pLCBfbGVuLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3M7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBiaW5kaW5nID0gX3JlZjFbX2ldO1xuICAgICAgICBpZiAoZm4oYmluZGluZykpIHtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaSwgX2xlbiwgX3JlZjE7XG4gICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3M7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGJpbmRpbmcgPSBfcmVmMVtfaV07XG4gICAgICAgIGJpbmRpbmcuYmluZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBWaWV3LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaSwgX2xlbiwgX3JlZjE7XG4gICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3M7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGJpbmRpbmcgPSBfcmVmMVtfaV07XG4gICAgICAgIGJpbmRpbmcudW5iaW5kKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlLnN5bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaSwgX2xlbiwgX3JlZjE7XG4gICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3M7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGJpbmRpbmcgPSBfcmVmMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgYmluZGluZy5zeW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBiaW5kaW5nLnN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBWaWV3LnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmluZGluZywgX2ksIF9sZW4sIF9yZWYxO1xuICAgICAgX3JlZjEgPSB0aGlzLnNlbGVjdChmdW5jdGlvbihiKSB7XG4gICAgICAgIHZhciBfcmVmMTtcbiAgICAgICAgcmV0dXJuIChfcmVmMSA9IGIuYmluZGVyKSAhPSBudWxsID8gX3JlZjEucHVibGlzaGVzIDogdm9pZCAwO1xuICAgICAgfSk7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGJpbmRpbmcgPSBfcmVmMVtfaV07XG4gICAgICAgIGJpbmRpbmcucHVibGlzaCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBrZXksIG1vZGVsLCBfaSwgX2xlbiwgX3JlZjE7XG4gICAgICBpZiAobW9kZWxzID09IG51bGwpIHtcbiAgICAgICAgbW9kZWxzID0ge307XG4gICAgICB9XG4gICAgICBmb3IgKGtleSBpbiBtb2RlbHMpIHtcbiAgICAgICAgbW9kZWwgPSBtb2RlbHNba2V5XTtcbiAgICAgICAgdGhpcy5tb2RlbHNba2V5XSA9IG1vZGVsO1xuICAgICAgfVxuICAgICAgX3JlZjEgPSB0aGlzLmJpbmRpbmdzO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBiaW5kaW5nID0gX3JlZjFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmcudXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBiaW5kaW5nLnVwZGF0ZShtb2RlbHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBWaWV3O1xuXG4gIH0pKCk7XG5cbiAgUml2ZXRzLkJpbmRpbmcgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZyh2aWV3LCBlbCwgdHlwZSwga2V5cGF0aCwgb3B0aW9ucykge1xuICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLmtleXBhdGggPSBrZXlwYXRoO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucyA6IHt9O1xuICAgICAgdGhpcy5nZXRWYWx1ZSA9IF9fYmluZCh0aGlzLmdldFZhbHVlLCB0aGlzKTtcbiAgICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICAgIHRoaXMudW5iaW5kID0gX19iaW5kKHRoaXMudW5iaW5kLCB0aGlzKTtcbiAgICAgIHRoaXMuYmluZCA9IF9fYmluZCh0aGlzLmJpbmQsIHRoaXMpO1xuICAgICAgdGhpcy5wdWJsaXNoID0gX19iaW5kKHRoaXMucHVibGlzaCwgdGhpcyk7XG4gICAgICB0aGlzLnN5bmMgPSBfX2JpbmQodGhpcy5zeW5jLCB0aGlzKTtcbiAgICAgIHRoaXMuc2V0ID0gX19iaW5kKHRoaXMuc2V0LCB0aGlzKTtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gX19iaW5kKHRoaXMuZXZlbnRIYW5kbGVyLCB0aGlzKTtcbiAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSBfX2JpbmQodGhpcy5mb3JtYXR0ZWRWYWx1ZSwgdGhpcyk7XG4gICAgICB0aGlzLnBhcnNlRm9ybWF0dGVyQXJndW1lbnRzID0gX19iaW5kKHRoaXMucGFyc2VGb3JtYXR0ZXJBcmd1bWVudHMsIHRoaXMpO1xuICAgICAgdGhpcy5wYXJzZVRhcmdldCA9IF9fYmluZCh0aGlzLnBhcnNlVGFyZ2V0LCB0aGlzKTtcbiAgICAgIHRoaXMub2JzZXJ2ZSA9IF9fYmluZCh0aGlzLm9ic2VydmUsIHRoaXMpO1xuICAgICAgdGhpcy5zZXRCaW5kZXIgPSBfX2JpbmQodGhpcy5zZXRCaW5kZXIsIHRoaXMpO1xuICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcnMgfHwgW107XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuICAgICAgdGhpcy5mb3JtYXR0ZXJPYnNlcnZlcnMgPSB7fTtcbiAgICAgIHRoaXMubW9kZWwgPSB2b2lkIDA7XG4gICAgICB0aGlzLnNldEJpbmRlcigpO1xuICAgIH1cblxuICAgIEJpbmRpbmcucHJvdG90eXBlLnNldEJpbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGlkZW50aWZpZXIsIHJlZ2V4cCwgdmFsdWUsIF9yZWYxO1xuICAgICAgaWYgKCEodGhpcy5iaW5kZXIgPSB0aGlzLnZpZXcuYmluZGVyc1t0aGlzLnR5cGVdKSkge1xuICAgICAgICBfcmVmMSA9IHRoaXMudmlldy5iaW5kZXJzO1xuICAgICAgICBmb3IgKGlkZW50aWZpZXIgaW4gX3JlZjEpIHtcbiAgICAgICAgICB2YWx1ZSA9IF9yZWYxW2lkZW50aWZpZXJdO1xuICAgICAgICAgIGlmIChpZGVudGlmaWVyICE9PSAnKicgJiYgaWRlbnRpZmllci5pbmRleE9mKCcqJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZWdleHAgPSBuZXcgUmVnRXhwKFwiXlwiICsgKGlkZW50aWZpZXIucmVwbGFjZSgvXFwqL2csICcuKycpKSArIFwiJFwiKTtcbiAgICAgICAgICAgIGlmIChyZWdleHAudGVzdCh0aGlzLnR5cGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMuYmluZGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuYXJncyA9IG5ldyBSZWdFeHAoXCJeXCIgKyAoaWRlbnRpZmllci5yZXBsYWNlKC9cXCovZywgJyguKyknKSkgKyBcIiRcIikuZXhlYyh0aGlzLnR5cGUpO1xuICAgICAgICAgICAgICB0aGlzLmFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYmluZGVyIHx8ICh0aGlzLmJpbmRlciA9IHRoaXMudmlldy5iaW5kZXJzWycqJ10pO1xuICAgICAgaWYgKHRoaXMuYmluZGVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGVyID0ge1xuICAgICAgICAgIHJvdXRpbmU6IHRoaXMuYmluZGVyXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbihvYmosIGtleXBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gUml2ZXRzLnNpZ2h0Z2xhc3Mob2JqLCBrZXlwYXRoLCBjYWxsYmFjaywge1xuICAgICAgICByb290OiB0aGlzLnZpZXcucm9vdEludGVyZmFjZSxcbiAgICAgICAgYWRhcHRlcnM6IHRoaXMudmlldy5hZGFwdGVyc1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLnBhcnNlVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdG9rZW47XG4gICAgICB0b2tlbiA9IFJpdmV0cy5UeXBlUGFyc2VyLnBhcnNlKHRoaXMua2V5cGF0aCk7XG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gUml2ZXRzLlR5cGVQYXJzZXIudHlwZXMucHJpbWl0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gdGhpcy5vYnNlcnZlKHRoaXMudmlldy5tb2RlbHMsIHRoaXMua2V5cGF0aCwgdGhpcy5zeW5jKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwgPSB0aGlzLm9ic2VydmVyLnRhcmdldDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmluZGluZy5wcm90b3R5cGUucGFyc2VGb3JtYXR0ZXJBcmd1bWVudHMgPSBmdW5jdGlvbihhcmdzLCBmb3JtYXR0ZXJJbmRleCkge1xuICAgICAgdmFyIGFpLCBhcmcsIG9ic2VydmVyLCBwcm9jZXNzZWRBcmdzLCBfYmFzZSwgX2ksIF9sZW47XG4gICAgICBhcmdzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX2ksIF9sZW4sIF9yZXN1bHRzO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyZ3MubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICBhcmcgPSBhcmdzW19pXTtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKFJpdmV0cy5UeXBlUGFyc2VyLnBhcnNlKGFyZykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pKCk7XG4gICAgICBwcm9jZXNzZWRBcmdzID0gW107XG4gICAgICBmb3IgKGFpID0gX2kgPSAwLCBfbGVuID0gYXJncy5sZW5ndGg7IF9pIDwgX2xlbjsgYWkgPSArK19pKSB7XG4gICAgICAgIGFyZyA9IGFyZ3NbYWldO1xuICAgICAgICBwcm9jZXNzZWRBcmdzLnB1c2goYXJnLnR5cGUgPT09IFJpdmV0cy5UeXBlUGFyc2VyLnR5cGVzLnByaW1pdGl2ZSA/IGFyZy52YWx1ZSA6ICgoX2Jhc2UgPSB0aGlzLmZvcm1hdHRlck9ic2VydmVycylbZm9ybWF0dGVySW5kZXhdIHx8IChfYmFzZVtmb3JtYXR0ZXJJbmRleF0gPSB7fSksICEob2JzZXJ2ZXIgPSB0aGlzLmZvcm1hdHRlck9ic2VydmVyc1tmb3JtYXR0ZXJJbmRleF1bYWldKSA/IChvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZSh0aGlzLnZpZXcubW9kZWxzLCBhcmcudmFsdWUsIHRoaXMuc3luYyksIHRoaXMuZm9ybWF0dGVyT2JzZXJ2ZXJzW2Zvcm1hdHRlckluZGV4XVthaV0gPSBvYnNlcnZlcikgOiB2b2lkIDAsIG9ic2VydmVyLnZhbHVlKCkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzZWRBcmdzO1xuICAgIH07XG5cbiAgICBCaW5kaW5nLnByb3RvdHlwZS5mb3JtYXR0ZWRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgYXJncywgZmksIGZvcm1hdHRlciwgaWQsIHByb2Nlc3NlZEFyZ3MsIF9pLCBfbGVuLCBfcmVmMSwgX3JlZjI7XG4gICAgICBfcmVmMSA9IHRoaXMuZm9ybWF0dGVycztcbiAgICAgIGZvciAoZmkgPSBfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgZmkgPSArK19pKSB7XG4gICAgICAgIGZvcm1hdHRlciA9IF9yZWYxW2ZpXTtcbiAgICAgICAgYXJncyA9IGZvcm1hdHRlci5tYXRjaCgvW15cXHMnXSt8JyhbXiddfCdbXlxcc10pKid8XCIoW15cIl18XCJbXlxcc10pKlwiL2cpO1xuICAgICAgICBpZCA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgZm9ybWF0dGVyID0gdGhpcy52aWV3LmZvcm1hdHRlcnNbaWRdO1xuICAgICAgICBwcm9jZXNzZWRBcmdzID0gdGhpcy5wYXJzZUZvcm1hdHRlckFyZ3VtZW50cyhhcmdzLCBmaSk7XG4gICAgICAgIGlmICgoZm9ybWF0dGVyICE9IG51bGwgPyBmb3JtYXR0ZXIucmVhZCA6IHZvaWQgMCkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIHZhbHVlID0gKF9yZWYyID0gZm9ybWF0dGVyLnJlYWQpLmNhbGwuYXBwbHkoX3JlZjIsIFt0aGlzLm1vZGVsLCB2YWx1ZV0uY29uY2F0KF9fc2xpY2UuY2FsbChwcm9jZXNzZWRBcmdzKSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdHRlciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXR0ZXIuY2FsbC5hcHBseShmb3JtYXR0ZXIsIFt0aGlzLm1vZGVsLCB2YWx1ZV0uY29uY2F0KF9fc2xpY2UuY2FsbChwcm9jZXNzZWRBcmdzKSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLmV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB2YXIgYmluZGluZywgaGFuZGxlcjtcbiAgICAgIGhhbmRsZXIgPSAoYmluZGluZyA9IHRoaXMpLnZpZXcuaGFuZGxlcjtcbiAgICAgIHJldHVybiBmdW5jdGlvbihldikge1xuICAgICAgICByZXR1cm4gaGFuZGxlci5jYWxsKGZuLCB0aGlzLCBldiwgYmluZGluZyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBCaW5kaW5nLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIF9yZWYxO1xuICAgICAgdmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmICF0aGlzLmJpbmRlcltcImZ1bmN0aW9uXCJdICYmIFJpdmV0c1tcInB1YmxpY1wiXS5leGVjdXRlRnVuY3Rpb25zID8gdGhpcy5mb3JtYXR0ZWRWYWx1ZSh2YWx1ZS5jYWxsKHRoaXMubW9kZWwpKSA6IHRoaXMuZm9ybWF0dGVkVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIChfcmVmMSA9IHRoaXMuYmluZGVyLnJvdXRpbmUpICE9IG51bGwgPyBfcmVmMS5jYWxsKHRoaXMsIHRoaXMuZWwsIHZhbHVlKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgQmluZGluZy5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlcGVuZGVuY3ksIG9ic2VydmVyO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWYxLCBfcmVmMiwgX3JlZjM7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZWwgIT09IHRoaXMub2JzZXJ2ZXIudGFyZ2V0KSB7XG4gICAgICAgICAgICBfcmVmMSA9IHRoaXMuZGVwZW5kZW5jaWVzO1xuICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICBvYnNlcnZlciA9IF9yZWYxW19pXTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuICAgICAgICAgICAgaWYgKCgodGhpcy5tb2RlbCA9IHRoaXMub2JzZXJ2ZXIudGFyZ2V0KSAhPSBudWxsKSAmJiAoKF9yZWYyID0gdGhpcy5vcHRpb25zLmRlcGVuZGVuY2llcykgIT0gbnVsbCA/IF9yZWYyLmxlbmd0aCA6IHZvaWQgMCkpIHtcbiAgICAgICAgICAgICAgX3JlZjMgPSB0aGlzLm9wdGlvbnMuZGVwZW5kZW5jaWVzO1xuICAgICAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMy5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmN5ID0gX3JlZjNbX2pdO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlKHRoaXMubW9kZWwsIGRlcGVuZGVuY3ksIHRoaXMuc3luYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaChvYnNlcnZlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIudmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSkuY2FsbCh0aGlzKSk7XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBmaSwgZmlSZXZlcnNlZCwgZm9ybWF0dGVyLCBpZCwgbGFzdGZvcm1hdHRlckluZGV4LCBwcm9jZXNzZWRBcmdzLCB2YWx1ZSwgX2ksIF9sZW4sIF9yZWYxLCBfcmVmMiwgX3JlZjM7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUodGhpcy5lbCk7XG4gICAgICAgIGxhc3Rmb3JtYXR0ZXJJbmRleCA9IHRoaXMuZm9ybWF0dGVycy5sZW5ndGggLSAxO1xuICAgICAgICBfcmVmMSA9IHRoaXMuZm9ybWF0dGVycy5zbGljZSgwKS5yZXZlcnNlKCk7XG4gICAgICAgIGZvciAoZmlSZXZlcnNlZCA9IF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBmaVJldmVyc2VkID0gKytfaSkge1xuICAgICAgICAgIGZvcm1hdHRlciA9IF9yZWYxW2ZpUmV2ZXJzZWRdO1xuICAgICAgICAgIGZpID0gbGFzdGZvcm1hdHRlckluZGV4IC0gZmlSZXZlcnNlZDtcbiAgICAgICAgICBhcmdzID0gZm9ybWF0dGVyLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgaWQgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvY2Vzc2VkQXJncyA9IHRoaXMucGFyc2VGb3JtYXR0ZXJBcmd1bWVudHMoYXJncywgZmkpO1xuICAgICAgICAgIGlmICgoX3JlZjIgPSB0aGlzLnZpZXcuZm9ybWF0dGVyc1tpZF0pICE9IG51bGwgPyBfcmVmMi5wdWJsaXNoIDogdm9pZCAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IChfcmVmMyA9IHRoaXMudmlldy5mb3JtYXR0ZXJzW2lkXSkucHVibGlzaC5hcHBseShfcmVmMywgW3ZhbHVlXS5jb25jYXQoX19zbGljZS5jYWxsKHByb2Nlc3NlZEFyZ3MpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmluZGluZy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlcGVuZGVuY3ksIG9ic2VydmVyLCBfaSwgX2xlbiwgX3JlZjEsIF9yZWYyLCBfcmVmMztcbiAgICAgIHRoaXMucGFyc2VUYXJnZXQoKTtcbiAgICAgIGlmICgoX3JlZjEgPSB0aGlzLmJpbmRlci5iaW5kKSAhPSBudWxsKSB7XG4gICAgICAgIF9yZWYxLmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMubW9kZWwgIT0gbnVsbCkgJiYgKChfcmVmMiA9IHRoaXMub3B0aW9ucy5kZXBlbmRlbmNpZXMpICE9IG51bGwgPyBfcmVmMi5sZW5ndGggOiB2b2lkIDApKSB7XG4gICAgICAgIF9yZWYzID0gdGhpcy5vcHRpb25zLmRlcGVuZGVuY2llcztcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIGRlcGVuZGVuY3kgPSBfcmVmM1tfaV07XG4gICAgICAgICAgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmUodGhpcy5tb2RlbCwgZGVwZW5kZW5jeSwgdGhpcy5zeW5jKTtcbiAgICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlldy5wcmVsb2FkRGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFpLCBhcmdzLCBmaSwgb2JzZXJ2ZXIsIF9pLCBfbGVuLCBfcmVmMSwgX3JlZjIsIF9yZWYzLCBfcmVmNDtcbiAgICAgIGlmICgoX3JlZjEgPSB0aGlzLmJpbmRlci51bmJpbmQpICE9IG51bGwpIHtcbiAgICAgICAgX3JlZjEuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgIH1cbiAgICAgIGlmICgoX3JlZjIgPSB0aGlzLm9ic2VydmVyKSAhPSBudWxsKSB7XG4gICAgICAgIF9yZWYyLnVub2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgICAgX3JlZjMgPSB0aGlzLmRlcGVuZGVuY2llcztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZjMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2ZXIgPSBfcmVmM1tfaV07XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgICAgIF9yZWY0ID0gdGhpcy5mb3JtYXR0ZXJPYnNlcnZlcnM7XG4gICAgICBmb3IgKGZpIGluIF9yZWY0KSB7XG4gICAgICAgIGFyZ3MgPSBfcmVmNFtmaV07XG4gICAgICAgIGZvciAoYWkgaW4gYXJncykge1xuICAgICAgICAgIG9ic2VydmVyID0gYXJnc1thaV07XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlck9ic2VydmVycyA9IHt9O1xuICAgIH07XG5cbiAgICBCaW5kaW5nLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAgIHZhciBfcmVmMSwgX3JlZjI7XG4gICAgICBpZiAobW9kZWxzID09IG51bGwpIHtcbiAgICAgICAgbW9kZWxzID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsID0gKF9yZWYxID0gdGhpcy5vYnNlcnZlcikgIT0gbnVsbCA/IF9yZWYxLnRhcmdldCA6IHZvaWQgMDtcbiAgICAgIHJldHVybiAoX3JlZjIgPSB0aGlzLmJpbmRlci51cGRhdGUpICE9IG51bGwgPyBfcmVmMi5jYWxsKHRoaXMsIG1vZGVscykgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIEJpbmRpbmcucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmICh0aGlzLmJpbmRlciAmJiAodGhpcy5iaW5kZXIuZ2V0VmFsdWUgIT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGVyLmdldFZhbHVlLmNhbGwodGhpcywgZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJpdmV0cy5VdGlsLmdldElucHV0VmFsdWUoZWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gQmluZGluZztcblxuICB9KSgpO1xuXG4gIFJpdmV0cy5Db21wb25lbnRCaW5kaW5nID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21wb25lbnRCaW5kaW5nLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50QmluZGluZyh2aWV3LCBlbCwgdHlwZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmluZGluZ1JlZ0V4cCwgcHJvcGVydHlOYW1lLCB0b2tlbiwgX2ksIF9sZW4sIF9yZWYxLCBfcmVmMjtcbiAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy51bmJpbmQgPSBfX2JpbmQodGhpcy51bmJpbmQsIHRoaXMpO1xuICAgICAgdGhpcy5iaW5kID0gX19iaW5kKHRoaXMuYmluZCwgdGhpcyk7XG4gICAgICB0aGlzLmxvY2FscyA9IF9fYmluZCh0aGlzLmxvY2FscywgdGhpcyk7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IHRoaXMudmlldy5jb21wb25lbnRzW3RoaXMudHlwZV07XG4gICAgICB0aGlzW1wic3RhdGljXCJdID0ge307XG4gICAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICAgICAgdGhpcy51cHN0cmVhbU9ic2VydmVycyA9IHt9O1xuICAgICAgYmluZGluZ1JlZ0V4cCA9IHZpZXcuYmluZGluZ1JlZ0V4cCgpO1xuICAgICAgX3JlZjEgPSB0aGlzLmVsLmF0dHJpYnV0ZXMgfHwgW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IF9yZWYxW19pXTtcbiAgICAgICAgaWYgKCFiaW5kaW5nUmVnRXhwLnRlc3QoYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5jYW1lbENhc2UoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgIHRva2VuID0gUml2ZXRzLlR5cGVQYXJzZXIucGFyc2UoYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICBpZiAoX19pbmRleE9mLmNhbGwoKF9yZWYyID0gdGhpcy5jb21wb25lbnRbXCJzdGF0aWNcIl0pICE9IG51bGwgPyBfcmVmMiA6IFtdLCBwcm9wZXJ0eU5hbWUpID49IDApIHtcbiAgICAgICAgICAgIHRoaXNbXCJzdGF0aWNcIl1bcHJvcGVydHlOYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFJpdmV0cy5UeXBlUGFyc2VyLnR5cGVzLnByaW1pdGl2ZSkge1xuICAgICAgICAgICAgdGhpc1tcInN0YXRpY1wiXVtwcm9wZXJ0eU5hbWVdID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW3Byb3BlcnR5TmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ29tcG9uZW50QmluZGluZy5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBDb21wb25lbnRCaW5kaW5nLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgQ29tcG9uZW50QmluZGluZy5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBDb21wb25lbnRCaW5kaW5nLnByb3RvdHlwZS5sb2NhbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXksIG9ic2VydmVyLCByZXN1bHQsIHZhbHVlLCBfcmVmMSwgX3JlZjI7XG4gICAgICByZXN1bHQgPSB7fTtcbiAgICAgIF9yZWYxID0gdGhpc1tcInN0YXRpY1wiXTtcbiAgICAgIGZvciAoa2V5IGluIF9yZWYxKSB7XG4gICAgICAgIHZhbHVlID0gX3JlZjFba2V5XTtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIF9yZWYyID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICBmb3IgKGtleSBpbiBfcmVmMikge1xuICAgICAgICBvYnNlcnZlciA9IF9yZWYyW2tleV07XG4gICAgICAgIHJlc3VsdFtrZXldID0gb2JzZXJ2ZXIudmFsdWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENvbXBvbmVudEJpbmRpbmcucHJvdG90eXBlLmNhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihncm91cGVkKSB7XG4gICAgICAgIHJldHVybiBncm91cGVkWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQ29tcG9uZW50QmluZGluZy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGssIGtleSwga2V5cGF0aCwgb2JzZXJ2ZXIsIG9wdGlvbiwgb3B0aW9ucywgc2NvcGUsIHYsIF9iYXNlLCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmMSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX3JlZjUsIF9yZWY2LCBfcmVmNztcbiAgICAgIGlmICghdGhpcy5ib3VuZCkge1xuICAgICAgICBfcmVmMSA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICBmb3IgKGtleSBpbiBfcmVmMSkge1xuICAgICAgICAgIGtleXBhdGggPSBfcmVmMVtrZXldO1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2tleV0gPSB0aGlzLm9ic2VydmUodGhpcy52aWV3Lm1vZGVscywga2V5cGF0aCwgKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbXBvbmVudFZpZXcubW9kZWxzW2tleV0gPSBfdGhpcy5vYnNlcnZlcnNba2V5XS52YWx1ZSgpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKSkuY2FsbCh0aGlzLCBrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFZpZXcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFZpZXcuYmluZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmNvbXBvbmVudC50ZW1wbGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICBzY29wZSA9IHRoaXMuY29tcG9uZW50LmluaXRpYWxpemUuY2FsbCh0aGlzLCB0aGlzLmVsLCB0aGlzLmxvY2FscygpKTtcbiAgICAgICAgdGhpcy5lbC5fYm91bmQgPSB0cnVlO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIF9yZWYyID0gUml2ZXRzLmV4dGVuc2lvbnM7XG4gICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZjIubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICBvcHRpb24gPSBfcmVmMltfaV07XG4gICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0ge307XG4gICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50W29wdGlvbl0pIHtcbiAgICAgICAgICAgIF9yZWYzID0gdGhpcy5jb21wb25lbnRbb3B0aW9uXTtcbiAgICAgICAgICAgIGZvciAoayBpbiBfcmVmMykge1xuICAgICAgICAgICAgICB2ID0gX3JlZjNba107XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXVtrXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF9yZWY0ID0gdGhpcy52aWV3W29wdGlvbl07XG4gICAgICAgICAgZm9yIChrIGluIF9yZWY0KSB7XG4gICAgICAgICAgICB2ID0gX3JlZjRba107XG4gICAgICAgICAgICBpZiAoKF9iYXNlID0gb3B0aW9uc1tvcHRpb25dKVtrXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIF9iYXNlW2tdID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3JlZjUgPSBSaXZldHMub3B0aW9ucztcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjUubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgb3B0aW9uID0gX3JlZjVbX2pdO1xuICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IChfcmVmNiA9IHRoaXMuY29tcG9uZW50W29wdGlvbl0pICE9IG51bGwgPyBfcmVmNiA6IHRoaXMudmlld1tvcHRpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50VmlldyA9IG5ldyBSaXZldHMuVmlldyhBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkTm9kZXMpLCBzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Vmlldy5iaW5kKCk7XG4gICAgICAgIF9yZWY3ID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgIGZvciAoa2V5IGluIF9yZWY3KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBfcmVmN1trZXldO1xuICAgICAgICAgIHRoaXMudXBzdHJlYW1PYnNlcnZlcnNba2V5XSA9IHRoaXMub2JzZXJ2ZSh0aGlzLmNvbXBvbmVudFZpZXcubW9kZWxzLCBrZXksICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihrZXksIG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuc2V0VmFsdWUoX3RoaXMuY29tcG9uZW50Vmlldy5tb2RlbHNba2V5XSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpKS5jYWxsKHRoaXMsIGtleSwgb2JzZXJ2ZXIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBDb21wb25lbnRCaW5kaW5nLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXksIG9ic2VydmVyLCBfcmVmMSwgX3JlZjIsIF9yZWYzO1xuICAgICAgX3JlZjEgPSB0aGlzLnVwc3RyZWFtT2JzZXJ2ZXJzO1xuICAgICAgZm9yIChrZXkgaW4gX3JlZjEpIHtcbiAgICAgICAgb2JzZXJ2ZXIgPSBfcmVmMVtrZXldO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoKTtcbiAgICAgIH1cbiAgICAgIF9yZWYyID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICBmb3IgKGtleSBpbiBfcmVmMikge1xuICAgICAgICBvYnNlcnZlciA9IF9yZWYyW2tleV07XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChfcmVmMyA9IHRoaXMuY29tcG9uZW50VmlldykgIT0gbnVsbCA/IF9yZWYzLnVuYmluZC5jYWxsKHRoaXMpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29tcG9uZW50QmluZGluZztcblxuICB9KShSaXZldHMuQmluZGluZyk7XG5cbiAgUml2ZXRzLlRleHRCaW5kaW5nID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0QmluZGluZywgX3N1cGVyKTtcblxuICAgIGZ1bmN0aW9uIFRleHRCaW5kaW5nKHZpZXcsIGVsLCB0eXBlLCBrZXlwYXRoLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMua2V5cGF0aCA9IGtleXBhdGg7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gICAgICB0aGlzLnN5bmMgPSBfX2JpbmQodGhpcy5zeW5jLCB0aGlzKTtcbiAgICAgIHRoaXMuZm9ybWF0dGVycyA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXJzIHx8IFtdO1xuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgICAgIHRoaXMuZm9ybWF0dGVyT2JzZXJ2ZXJzID0ge307XG4gICAgfVxuXG4gICAgVGV4dEJpbmRpbmcucHJvdG90eXBlLmJpbmRlciA9IHtcbiAgICAgIHJvdXRpbmU6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmRhdGEgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAnJztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVGV4dEJpbmRpbmcucHJvdG90eXBlLnN5bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBUZXh0QmluZGluZy5fX3N1cGVyX18uc3luYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGV4dEJpbmRpbmc7XG5cbiAgfSkoUml2ZXRzLkJpbmRpbmcpO1xuXG4gIFJpdmV0c1tcInB1YmxpY1wiXS5iaW5kZXJzLnRleHQgPSBmdW5jdGlvbihlbCwgdmFsdWUpIHtcbiAgICBpZiAoZWwudGV4dENvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsLnRleHRDb250ZW50ID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbC5pbm5lclRleHQgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAnJztcbiAgICB9XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnMuaHRtbCA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgIHJldHVybiBlbC5pbm5lckhUTUwgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAnJztcbiAgfTtcblxuICBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVycy5zaG93ID0gZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICcnIDogJ25vbmUnO1xuICB9O1xuXG4gIFJpdmV0c1tcInB1YmxpY1wiXS5iaW5kZXJzLmhpZGUgPSBmdW5jdGlvbihlbCwgdmFsdWUpIHtcbiAgICByZXR1cm4gZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJ25vbmUnIDogJyc7XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnMuZW5hYmxlZCA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgIHJldHVybiBlbC5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgfTtcblxuICBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVycy5kaXNhYmxlZCA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgIHJldHVybiBlbC5kaXNhYmxlZCA9ICEhdmFsdWU7XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnMuY2hlY2tlZCA9IHtcbiAgICBwdWJsaXNoZXM6IHRydWUsXG4gICAgcHJpb3JpdHk6IDIwMDAsXG4gICAgYmluZDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiBSaXZldHMuVXRpbC5iaW5kRXZlbnQoZWwsICdjaGFuZ2UnLCB0aGlzLnB1Ymxpc2gpO1xuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIFJpdmV0cy5VdGlsLnVuYmluZEV2ZW50KGVsLCAnY2hhbmdlJywgdGhpcy5wdWJsaXNoKTtcbiAgICB9LFxuICAgIHJvdXRpbmU6IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgICAgdmFyIF9yZWYxO1xuICAgICAgaWYgKGVsLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNoZWNrZWQgPSAoKF9yZWYxID0gZWwudmFsdWUpICE9IG51bGwgPyBfcmVmMS50b1N0cmluZygpIDogdm9pZCAwKSA9PT0gKHZhbHVlICE9IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogdm9pZCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnMudW5jaGVja2VkID0ge1xuICAgIHB1Ymxpc2hlczogdHJ1ZSxcbiAgICBwcmlvcml0eTogMjAwMCxcbiAgICBiaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIFJpdmV0cy5VdGlsLmJpbmRFdmVudChlbCwgJ2NoYW5nZScsIHRoaXMucHVibGlzaCk7XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gUml2ZXRzLlV0aWwudW5iaW5kRXZlbnQoZWwsICdjaGFuZ2UnLCB0aGlzLnB1Ymxpc2gpO1xuICAgIH0sXG4gICAgcm91dGluZTogZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgICB2YXIgX3JlZjE7XG4gICAgICBpZiAoZWwudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICByZXR1cm4gZWwuY2hlY2tlZCA9ICgoX3JlZjEgPSBlbC52YWx1ZSkgIT0gbnVsbCA/IF9yZWYxLnRvU3RyaW5nKCkgOiB2b2lkIDApICE9PSAodmFsdWUgIT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2b2lkIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsLmNoZWNrZWQgPSAhdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFJpdmV0c1tcInB1YmxpY1wiXS5iaW5kZXJzLnZhbHVlID0ge1xuICAgIHB1Ymxpc2hlczogdHJ1ZSxcbiAgICBwcmlvcml0eTogMzAwMCxcbiAgICBiaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgaWYgKCEoZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAncmFkaW8nKSkge1xuICAgICAgICB0aGlzLmV2ZW50ID0gZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgICAgIHJldHVybiBSaXZldHMuVXRpbC5iaW5kRXZlbnQoZWwsIHRoaXMuZXZlbnQsIHRoaXMucHVibGlzaCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAoIShlbC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsLnR5cGUgPT09ICdyYWRpbycpKSB7XG4gICAgICAgIHJldHVybiBSaXZldHMuVXRpbC51bmJpbmRFdmVudChlbCwgdGhpcy5ldmVudCwgdGhpcy5wdWJsaXNoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJvdXRpbmU6IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgICAgdmFyIG8sIF9pLCBfbGVuLCBfcmVmMSwgX3JlZjIsIF9yZWYzLCBfcmVzdWx0cztcbiAgICAgIGlmIChlbC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5qUXVlcnkgIT0gbnVsbCkge1xuICAgICAgICBlbCA9IGpRdWVyeShlbCk7XG4gICAgICAgIGlmICgodmFsdWUgIT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2b2lkIDApICE9PSAoKF9yZWYxID0gZWwudmFsKCkpICE9IG51bGwgPyBfcmVmMS50b1N0cmluZygpIDogdm9pZCAwKSkge1xuICAgICAgICAgIHJldHVybiBlbC52YWwodmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogJycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gZWwubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgICAgbyA9IGVsW19pXTtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChvLnNlbGVjdGVkID0gKF9yZWYyID0gby52YWx1ZSwgX19pbmRleE9mLmNhbGwodmFsdWUsIF9yZWYyKSA+PSAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCh2YWx1ZSAhPSBudWxsID8gdmFsdWUudG9TdHJpbmcoKSA6IHZvaWQgMCkgIT09ICgoX3JlZjMgPSBlbC52YWx1ZSkgIT0gbnVsbCA/IF9yZWYzLnRvU3RyaW5nKCkgOiB2b2lkIDApKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLnZhbHVlID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnNbXCJpZlwiXSA9IHtcbiAgICBibG9jazogdHJ1ZSxcbiAgICBwcmlvcml0eTogNDAwMCxcbiAgICBiaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGF0dHIsIGRlY2xhcmF0aW9uO1xuICAgICAgaWYgKHRoaXMubWFya2VyID09IG51bGwpIHtcbiAgICAgICAgYXR0ciA9IFt0aGlzLnZpZXcucHJlZml4LCB0aGlzLnR5cGVdLmpvaW4oJy0nKS5yZXBsYWNlKCctLScsICctJyk7XG4gICAgICAgIGRlY2xhcmF0aW9uID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCIgcml2ZXRzOiBcIiArIHRoaXMudHlwZSArIFwiIFwiICsgZGVjbGFyYXRpb24gKyBcIiBcIik7XG4gICAgICAgIHRoaXMuYm91bmQgPSBmYWxzZTtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm1hcmtlciwgZWwpO1xuICAgICAgICByZXR1cm4gZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMubmVzdGVkKSB7XG4gICAgICAgIHRoaXMubmVzdGVkLnVuYmluZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgcm91dGluZTogZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgICB2YXIga2V5LCBtb2RlbCwgbW9kZWxzLCBfcmVmMTtcbiAgICAgIGlmICghIXZhbHVlID09PSAhdGhpcy5ib3VuZCkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBtb2RlbHMgPSB7fTtcbiAgICAgICAgICBfcmVmMSA9IHRoaXMudmlldy5tb2RlbHM7XG4gICAgICAgICAgZm9yIChrZXkgaW4gX3JlZjEpIHtcbiAgICAgICAgICAgIG1vZGVsID0gX3JlZjFba2V5XTtcbiAgICAgICAgICAgIG1vZGVsc1trZXldID0gbW9kZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgICh0aGlzLm5lc3RlZCB8fCAodGhpcy5uZXN0ZWQgPSBuZXcgUml2ZXRzLlZpZXcoZWwsIG1vZGVscywgdGhpcy52aWV3Lm9wdGlvbnMoKSkpKS5iaW5kKCk7XG4gICAgICAgICAgdGhpcy5tYXJrZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIHRoaXMubWFya2VyLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ib3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgdGhpcy5uZXN0ZWQudW5iaW5kKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAgIHZhciBfcmVmMTtcbiAgICAgIHJldHVybiAoX3JlZjEgPSB0aGlzLm5lc3RlZCkgIT0gbnVsbCA/IF9yZWYxLnVwZGF0ZShtb2RlbHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfTtcblxuICBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVycy51bmxlc3MgPSB7XG4gICAgYmxvY2s6IHRydWUsXG4gICAgcHJpb3JpdHk6IDQwMDAsXG4gICAgYmluZDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVyc1tcImlmXCJdLmJpbmQuY2FsbCh0aGlzLCBlbCk7XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFJpdmV0c1tcInB1YmxpY1wiXS5iaW5kZXJzW1wiaWZcIl0udW5iaW5kLmNhbGwodGhpcyk7XG4gICAgfSxcbiAgICByb3V0aW5lOiBmdW5jdGlvbihlbCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVyc1tcImlmXCJdLnJvdXRpbmUuY2FsbCh0aGlzLCBlbCwgIXZhbHVlKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgICByZXR1cm4gUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnNbXCJpZlwiXS51cGRhdGUuY2FsbCh0aGlzLCBtb2RlbHMpO1xuICAgIH1cbiAgfTtcblxuICBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVyc1snb24tKiddID0ge1xuICAgIFwiZnVuY3Rpb25cIjogdHJ1ZSxcbiAgICBwcmlvcml0eTogMTAwMCxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAodGhpcy5oYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBSaXZldHMuVXRpbC51bmJpbmRFdmVudChlbCwgdGhpcy5hcmdzWzBdLCB0aGlzLmhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcm91dGluZTogZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5oYW5kbGVyKSB7XG4gICAgICAgIFJpdmV0cy5VdGlsLnVuYmluZEV2ZW50KGVsLCB0aGlzLmFyZ3NbMF0sIHRoaXMuaGFuZGxlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gUml2ZXRzLlV0aWwuYmluZEV2ZW50KGVsLCB0aGlzLmFyZ3NbMF0sIHRoaXMuaGFuZGxlciA9IHRoaXMuZXZlbnRIYW5kbGVyKHZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIFJpdmV0c1tcInB1YmxpY1wiXS5iaW5kZXJzWydlYWNoLSonXSA9IHtcbiAgICBibG9jazogdHJ1ZSxcbiAgICBwcmlvcml0eTogNDAwMCxcbiAgICBiaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGF0dHIsIHZpZXcsIF9pLCBfbGVuLCBfcmVmMTtcbiAgICAgIGlmICh0aGlzLm1hcmtlciA9PSBudWxsKSB7XG4gICAgICAgIGF0dHIgPSBbdGhpcy52aWV3LnByZWZpeCwgdGhpcy50eXBlXS5qb2luKCctJykucmVwbGFjZSgnLS0nLCAnLScpO1xuICAgICAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCIgcml2ZXRzOiBcIiArIHRoaXMudHlwZSArIFwiIFwiKTtcbiAgICAgICAgdGhpcy5pdGVyYXRlZCA9IFtdO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubWFya2VyLCBlbCk7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3JlZjEgPSB0aGlzLml0ZXJhdGVkO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgdmlldyA9IF9yZWYxW19pXTtcbiAgICAgICAgICB2aWV3LmJpbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIHZpZXcsIF9pLCBfbGVuLCBfcmVmMTtcbiAgICAgIGlmICh0aGlzLml0ZXJhdGVkICE9IG51bGwpIHtcbiAgICAgICAgX3JlZjEgPSB0aGlzLml0ZXJhdGVkO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgdmlldyA9IF9yZWYxW19pXTtcbiAgICAgICAgICB2aWV3LnVuYmluZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByb3V0aW5lOiBmdW5jdGlvbihlbCwgY29sbGVjdGlvbikge1xuICAgICAgdmFyIGJpbmRpbmcsIGRhdGEsIGksIGluZGV4LCBrZXksIG1vZGVsLCBtb2RlbE5hbWUsIG9wdGlvbnMsIHByZXZpb3VzLCB0ZW1wbGF0ZSwgdmlldywgX2ksIF9qLCBfaywgX2xlbiwgX2xlbjEsIF9sZW4yLCBfcmVmMSwgX3JlZjIsIF9yZWYzO1xuICAgICAgbW9kZWxOYW1lID0gdGhpcy5hcmdzWzBdO1xuICAgICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgW107XG4gICAgICBpZiAodGhpcy5pdGVyYXRlZC5sZW5ndGggPiBjb2xsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBfcmVmMSA9IEFycmF5KHRoaXMuaXRlcmF0ZWQubGVuZ3RoIC0gY29sbGVjdGlvbi5sZW5ndGgpO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgaSA9IF9yZWYxW19pXTtcbiAgICAgICAgICB2aWV3ID0gdGhpcy5pdGVyYXRlZC5wb3AoKTtcbiAgICAgICAgICB2aWV3LnVuYmluZCgpO1xuICAgICAgICAgIHRoaXMubWFya2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmlldy5lbHNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGluZGV4ID0gX2ogPSAwLCBfbGVuMSA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBfaiA8IF9sZW4xOyBpbmRleCA9ICsrX2opIHtcbiAgICAgICAgbW9kZWwgPSBjb2xsZWN0aW9uW2luZGV4XTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YVtSaXZldHNbXCJwdWJsaWNcIl0uaXRlcmF0aW9uQWxpYXMobW9kZWxOYW1lKV0gPSBpbmRleDtcbiAgICAgICAgZGF0YVttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIGlmICh0aGlzLml0ZXJhdGVkW2luZGV4XSA9PSBudWxsKSB7XG4gICAgICAgICAgX3JlZjIgPSB0aGlzLnZpZXcubW9kZWxzO1xuICAgICAgICAgIGZvciAoa2V5IGluIF9yZWYyKSB7XG4gICAgICAgICAgICBtb2RlbCA9IF9yZWYyW2tleV07XG4gICAgICAgICAgICBpZiAoZGF0YVtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGF0YVtrZXldID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZXZpb3VzID0gdGhpcy5pdGVyYXRlZC5sZW5ndGggPyB0aGlzLml0ZXJhdGVkW3RoaXMuaXRlcmF0ZWQubGVuZ3RoIC0gMV0uZWxzWzBdIDogdGhpcy5tYXJrZXI7XG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMudmlldy5vcHRpb25zKCk7XG4gICAgICAgICAgb3B0aW9ucy5wcmVsb2FkRGF0YSA9IHRydWU7XG4gICAgICAgICAgdGVtcGxhdGUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgdmlldyA9IG5ldyBSaXZldHMuVmlldyh0ZW1wbGF0ZSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgdmlldy5iaW5kKCk7XG4gICAgICAgICAgdGhpcy5pdGVyYXRlZC5wdXNoKHZpZXcpO1xuICAgICAgICAgIHRoaXMubWFya2VyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBwcmV2aW91cy5uZXh0U2libGluZyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pdGVyYXRlZFtpbmRleF0ubW9kZWxzW21vZGVsTmFtZV0gIT09IG1vZGVsKSB7XG4gICAgICAgICAgdGhpcy5pdGVyYXRlZFtpbmRleF0udXBkYXRlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgIF9yZWYzID0gdGhpcy52aWV3LmJpbmRpbmdzO1xuICAgICAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmMy5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcbiAgICAgICAgICBiaW5kaW5nID0gX3JlZjNbX2tdO1xuICAgICAgICAgIGlmIChiaW5kaW5nLmVsID09PSB0aGlzLm1hcmtlci5wYXJlbnROb2RlICYmIGJpbmRpbmcudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgYmluZGluZy5zeW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG1vZGVscykge1xuICAgICAgdmFyIGRhdGEsIGtleSwgbW9kZWwsIHZpZXcsIF9pLCBfbGVuLCBfcmVmMTtcbiAgICAgIGRhdGEgPSB7fTtcbiAgICAgIGZvciAoa2V5IGluIG1vZGVscykge1xuICAgICAgICBtb2RlbCA9IG1vZGVsc1trZXldO1xuICAgICAgICBpZiAoa2V5ICE9PSB0aGlzLmFyZ3NbMF0pIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSBtb2RlbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3JlZjEgPSB0aGlzLml0ZXJhdGVkO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICB2aWV3ID0gX3JlZjFbX2ldO1xuICAgICAgICB2aWV3LnVwZGF0ZShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmJpbmRlcnNbJ2NsYXNzLSonXSA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSkge1xuICAgIHZhciBlbENsYXNzO1xuICAgIGVsQ2xhc3MgPSBcIiBcIiArIGVsLmNsYXNzTmFtZSArIFwiIFwiO1xuICAgIGlmICghdmFsdWUgPT09IChlbENsYXNzLmluZGV4T2YoXCIgXCIgKyB0aGlzLmFyZ3NbMF0gKyBcIiBcIikgIT09IC0xKSkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTmFtZSA9IHZhbHVlID8gXCJcIiArIGVsLmNsYXNzTmFtZSArIFwiIFwiICsgdGhpcy5hcmdzWzBdIDogZWxDbGFzcy5yZXBsYWNlKFwiIFwiICsgdGhpcy5hcmdzWzBdICsgXCIgXCIsICcgJykudHJpbSgpO1xuICAgIH1cbiAgfTtcblxuICBSaXZldHNbXCJwdWJsaWNcIl0uYmluZGVyc1snKiddID0gZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBlbC5zZXRBdHRyaWJ1dGUodGhpcy50eXBlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy50eXBlKTtcbiAgICB9XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmZvcm1hdHRlcnNbJ2NhbGwnXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgcmV0dXJuIHZhbHVlLmNhbGwuYXBwbHkodmFsdWUsIFt0aGlzXS5jb25jYXQoX19zbGljZS5jYWxsKGFyZ3MpKSk7XG4gIH07XG5cbiAgUml2ZXRzW1wicHVibGljXCJdLmFkYXB0ZXJzWycuJ10gPSB7XG4gICAgaWQ6ICdfcnYnLFxuICAgIGNvdW50ZXI6IDAsXG4gICAgd2Vha21hcDoge30sXG4gICAgd2Vha1JlZmVyZW5jZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgaWQsIF9iYXNlLCBfbmFtZTtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHRoaXMuaWQpKSB7XG4gICAgICAgIGlkID0gdGhpcy5jb3VudGVyKys7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHRoaXMuaWQsIHtcbiAgICAgICAgICB2YWx1ZTogaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKF9iYXNlID0gdGhpcy53ZWFrbWFwKVtfbmFtZSA9IG9ialt0aGlzLmlkXV0gfHwgKF9iYXNlW19uYW1lXSA9IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7fVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGVhbnVwV2Vha1JlZmVyZW5jZTogZnVuY3Rpb24ocmVmLCBpZCkge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhyZWYuY2FsbGJhY2tzKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCEocmVmLnBvaW50ZXJzICYmIE9iamVjdC5rZXlzKHJlZi5wb2ludGVycykubGVuZ3RoKSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgdGhpcy53ZWFrbWFwW2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3R1YkZ1bmN0aW9uOiBmdW5jdGlvbihvYmosIGZuKSB7XG4gICAgICB2YXIgbWFwLCBvcmlnaW5hbCwgd2Vha21hcDtcbiAgICAgIG9yaWdpbmFsID0gb2JqW2ZuXTtcbiAgICAgIG1hcCA9IHRoaXMud2Vha1JlZmVyZW5jZShvYmopO1xuICAgICAgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgIHJldHVybiBvYmpbZm5dID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjYWxsYmFjaywgaywgciwgcmVzcG9uc2UsIF9pLCBfbGVuLCBfcmVmMSwgX3JlZjIsIF9yZWYzLCBfcmVmNDtcbiAgICAgICAgcmVzcG9uc2UgPSBvcmlnaW5hbC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICAgIF9yZWYxID0gbWFwLnBvaW50ZXJzO1xuICAgICAgICBmb3IgKHIgaW4gX3JlZjEpIHtcbiAgICAgICAgICBrID0gX3JlZjFbcl07XG4gICAgICAgICAgX3JlZjQgPSAoX3JlZjIgPSAoX3JlZjMgPSB3ZWFrbWFwW3JdKSAhPSBudWxsID8gX3JlZjMuY2FsbGJhY2tzW2tdIDogdm9pZCAwKSAhPSBudWxsID8gX3JlZjIgOiBbXTtcbiAgICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWY0Lmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IF9yZWY0W19pXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBvYnNlcnZlTXV0YXRpb25zOiBmdW5jdGlvbihvYmosIHJlZiwga2V5cGF0aCkge1xuICAgICAgdmFyIGZuLCBmdW5jdGlvbnMsIG1hcCwgX2Jhc2UsIF9pLCBfbGVuO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBtYXAgPSB0aGlzLndlYWtSZWZlcmVuY2Uob2JqKTtcbiAgICAgICAgaWYgKG1hcC5wb2ludGVycyA9PSBudWxsKSB7XG4gICAgICAgICAgbWFwLnBvaW50ZXJzID0ge307XG4gICAgICAgICAgZnVuY3Rpb25zID0gWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NvcnQnLCAncmV2ZXJzZScsICdzcGxpY2UnXTtcbiAgICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGZ1bmN0aW9ucy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgZm4gPSBmdW5jdGlvbnNbX2ldO1xuICAgICAgICAgICAgdGhpcy5zdHViRnVuY3Rpb24ob2JqLCBmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoX2Jhc2UgPSBtYXAucG9pbnRlcnMpW3JlZl0gPT0gbnVsbCkge1xuICAgICAgICAgIF9iYXNlW3JlZl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19pbmRleE9mLmNhbGwobWFwLnBvaW50ZXJzW3JlZl0sIGtleXBhdGgpIDwgMCkge1xuICAgICAgICAgIHJldHVybiBtYXAucG9pbnRlcnNbcmVmXS5wdXNoKGtleXBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1bm9ic2VydmVNdXRhdGlvbnM6IGZ1bmN0aW9uKG9iaiwgcmVmLCBrZXlwYXRoKSB7XG4gICAgICB2YXIgaWR4LCBtYXAsIHBvaW50ZXJzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSAmJiAob2JqW3RoaXMuaWRdICE9IG51bGwpKSB7XG4gICAgICAgIGlmIChtYXAgPSB0aGlzLndlYWttYXBbb2JqW3RoaXMuaWRdXSkge1xuICAgICAgICAgIGlmIChwb2ludGVycyA9IG1hcC5wb2ludGVyc1tyZWZdKSB7XG4gICAgICAgICAgICBpZiAoKGlkeCA9IHBvaW50ZXJzLmluZGV4T2Yoa2V5cGF0aCkpID49IDApIHtcbiAgICAgICAgICAgICAgcG9pbnRlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBvaW50ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBkZWxldGUgbWFwLnBvaW50ZXJzW3JlZl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhbnVwV2Vha1JlZmVyZW5jZShtYXAsIG9ialt0aGlzLmlkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvYnNlcnZlOiBmdW5jdGlvbihvYmosIGtleXBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY2FsbGJhY2tzLCBkZXNjLCB2YWx1ZTtcbiAgICAgIGNhbGxiYWNrcyA9IHRoaXMud2Vha1JlZmVyZW5jZShvYmopLmNhbGxiYWNrcztcbiAgICAgIGlmIChjYWxsYmFja3Nba2V5cGF0aF0gPT0gbnVsbCkge1xuICAgICAgICBjYWxsYmFja3Nba2V5cGF0aF0gPSBbXTtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlwYXRoKTtcbiAgICAgICAgaWYgKCEoKGRlc2MgIT0gbnVsbCA/IGRlc2MuZ2V0IDogdm9pZCAwKSB8fCAoZGVzYyAhPSBudWxsID8gZGVzYy5zZXQgOiB2b2lkIDApKSkge1xuICAgICAgICAgIHZhbHVlID0gb2JqW2tleXBhdGhdO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleXBhdGgsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNiLCBtYXAsIF9pLCBfbGVuLCBfcmVmMTtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpcy51bm9ic2VydmVNdXRhdGlvbnModmFsdWUsIG9ialtfdGhpcy5pZF0sIGtleXBhdGgpO1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXAgPSBfdGhpcy53ZWFrbWFwW29ialtfdGhpcy5pZF1dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA9IG1hcC5jYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Nba2V5cGF0aF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICBfcmVmMSA9IGNhbGxiYWNrc1trZXlwYXRoXS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZjEubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiID0gX3JlZjFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9faW5kZXhPZi5jYWxsKGNhbGxiYWNrc1trZXlwYXRoXSwgY2IpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9ic2VydmVNdXRhdGlvbnMobmV3VmFsdWUsIG9ialtfdGhpcy5pZF0sIGtleXBhdGgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChfX2luZGV4T2YuY2FsbChjYWxsYmFja3Nba2V5cGF0aF0sIGNhbGxiYWNrKSA8IDApIHtcbiAgICAgICAgY2FsbGJhY2tzW2tleXBhdGhdLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZU11dGF0aW9ucyhvYmpba2V5cGF0aF0sIG9ialt0aGlzLmlkXSwga2V5cGF0aCk7XG4gICAgfSxcbiAgICB1bm9ic2VydmU6IGZ1bmN0aW9uKG9iaiwga2V5cGF0aCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBjYWxsYmFja3MsIGlkeCwgbWFwO1xuICAgICAgaWYgKG1hcCA9IHRoaXMud2Vha21hcFtvYmpbdGhpcy5pZF1dKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3MgPSBtYXAuY2FsbGJhY2tzW2tleXBhdGhdKSB7XG4gICAgICAgICAgaWYgKChpZHggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjaykpID49IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBkZWxldGUgbWFwLmNhbGxiYWNrc1trZXlwYXRoXTtcbiAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmVNdXRhdGlvbnMob2JqW2tleXBhdGhdLCBvYmpbdGhpcy5pZF0sIGtleXBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhbnVwV2Vha1JlZmVyZW5jZShtYXAsIG9ialt0aGlzLmlkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXlwYXRoKSB7XG4gICAgICByZXR1cm4gb2JqW2tleXBhdGhdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihvYmosIGtleXBhdGgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleXBhdGhdID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIFJpdmV0cy5mYWN0b3J5ID0gZnVuY3Rpb24oc2lnaHRnbGFzcykge1xuICAgIFJpdmV0cy5zaWdodGdsYXNzID0gc2lnaHRnbGFzcztcbiAgICBSaXZldHNbXCJwdWJsaWNcIl0uXyA9IFJpdmV0cztcbiAgICByZXR1cm4gUml2ZXRzW1wicHVibGljXCJdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsID8gbW9kdWxlLmV4cG9ydHMgOiB2b2lkIDApID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gUml2ZXRzLmZhY3RvcnkocmVxdWlyZSgnc2lnaHRnbGFzcycpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydzaWdodGdsYXNzJ10sIGZ1bmN0aW9uKHNpZ2h0Z2xhc3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnJpdmV0cyA9IFJpdmV0cy5mYWN0b3J5KHNpZ2h0Z2xhc3MpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucml2ZXRzID0gUml2ZXRzLmZhY3Rvcnkoc2lnaHRnbGFzcyk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgLy8gUHVibGljIHNpZ2h0Z2xhc3MgaW50ZXJmYWNlLlxuICBmdW5jdGlvbiBzaWdodGdsYXNzKG9iaiwga2V5cGF0aCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmVyKG9iaiwga2V5cGF0aCwgY2FsbGJhY2ssIG9wdGlvbnMpXG4gIH1cblxuICAvLyBCYXR0ZXJpZXMgbm90IGluY2x1ZGVkLlxuICBzaWdodGdsYXNzLmFkYXB0ZXJzID0ge31cblxuICAvLyBDb25zdHJ1Y3RzIGEgbmV3IGtleXBhdGggb2JzZXJ2ZXIgYW5kIGtpY2tzIHRoaW5ncyBvZmYuXG4gIGZ1bmN0aW9uIE9ic2VydmVyKG9iaiwga2V5cGF0aCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdGhpcy5vcHRpb25zLmFkYXB0ZXJzID0gdGhpcy5vcHRpb25zLmFkYXB0ZXJzIHx8IHt9XG4gICAgdGhpcy5vYmogPSBvYmpcbiAgICB0aGlzLmtleXBhdGggPSBrZXlwYXRoXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgdGhpcy5vYmplY3RQYXRoID0gW11cbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnBhcnNlKClcblxuICAgIGlmIChpc09iamVjdCh0aGlzLnRhcmdldCA9IHRoaXMucmVhbGl6ZSgpKSkge1xuICAgICAgdGhpcy5zZXQodHJ1ZSwgdGhpcy5rZXksIHRoaXMudGFyZ2V0LCB0aGlzLmNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRva2VuaXplcyB0aGUgcHJvdmlkZWQga2V5cGF0aCBzdHJpbmcgaW50byBpbnRlcmZhY2UgKyBwYXRoIHRva2VucyBmb3IgdGhlXG4gIC8vIG9ic2VydmVyIHRvIHdvcmsgd2l0aC5cbiAgT2JzZXJ2ZXIudG9rZW5pemUgPSBmdW5jdGlvbihrZXlwYXRoLCBpbnRlcmZhY2VzLCByb290KSB7XG4gICAgdmFyIHRva2VucyA9IFtdXG4gICAgdmFyIGN1cnJlbnQgPSB7aTogcm9vdCwgcGF0aDogJyd9XG4gICAgdmFyIGluZGV4LCBjaHJcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGtleXBhdGgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjaHIgPSBrZXlwYXRoLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCEhfmludGVyZmFjZXMuaW5kZXhPZihjaHIpKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKGN1cnJlbnQpXG4gICAgICAgIGN1cnJlbnQgPSB7aTogY2hyLCBwYXRoOiAnJ31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQucGF0aCArPSBjaHJcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2tlbnMucHVzaChjdXJyZW50KVxuICAgIHJldHVybiB0b2tlbnNcbiAgfVxuXG4gIC8vIFBhcnNlcyB0aGUga2V5cGF0aCB1c2luZyB0aGUgaW50ZXJmYWNlcyBkZWZpbmVkIG9uIHRoZSB2aWV3LiBTZXRzIHZhcmlhYmxlc1xuICAvLyBmb3IgdGhlIHRva2VuaXplZCBrZXlwYXRoIGFzIHdlbGwgYXMgdGhlIGVuZCBrZXkuXG4gIE9ic2VydmVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5pbnRlcmZhY2VzKClcbiAgICB2YXIgcm9vdCwgcGF0aFxuXG4gICAgaWYgKCFpbnRlcmZhY2VzLmxlbmd0aCkge1xuICAgICAgZXJyb3IoJ011c3QgZGVmaW5lIGF0IGxlYXN0IG9uZSBhZGFwdGVyIGludGVyZmFjZS4nKVxuICAgIH1cblxuICAgIGlmICghIX5pbnRlcmZhY2VzLmluZGV4T2YodGhpcy5rZXlwYXRoWzBdKSkge1xuICAgICAgcm9vdCA9IHRoaXMua2V5cGF0aFswXVxuICAgICAgcGF0aCA9IHRoaXMua2V5cGF0aC5zdWJzdHIoMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiAocm9vdCA9IHRoaXMub3B0aW9ucy5yb290IHx8IHNpZ2h0Z2xhc3Mucm9vdCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVycm9yKCdNdXN0IGRlZmluZSBhIGRlZmF1bHQgcm9vdCBhZGFwdGVyLicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggPSB0aGlzLmtleXBhdGhcbiAgICB9XG5cbiAgICB0aGlzLnRva2VucyA9IE9ic2VydmVyLnRva2VuaXplKHBhdGgsIGludGVyZmFjZXMsIHJvb3QpXG4gICAgdGhpcy5rZXkgPSB0aGlzLnRva2Vucy5wb3AoKVxuICB9XG5cbiAgLy8gUmVhbGl6ZXMgdGhlIGZ1bGwga2V5cGF0aCwgYXR0YWNoaW5nIG9ic2VydmVycyBmb3IgZXZlcnkga2V5IGFuZCBjb3JyZWN0aW5nXG4gIC8vIG9sZCBvYnNlcnZlcnMgdG8gYW55IGNoYW5nZWQgb2JqZWN0cyBpbiB0aGUga2V5cGF0aC5cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLnJlYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMub2JqXG4gICAgdmFyIHVucmVhY2hlZCA9IGZhbHNlXG4gICAgdmFyIHByZXZcblxuICAgIHRoaXMudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odG9rZW4sIGluZGV4KSB7XG4gICAgICBpZiAoaXNPYmplY3QoY3VycmVudCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9iamVjdFBhdGhbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmIChjdXJyZW50ICE9PSAocHJldiA9IHRoaXMub2JqZWN0UGF0aFtpbmRleF0pKSB7XG4gICAgICAgICAgICB0aGlzLnNldChmYWxzZSwgdG9rZW4sIHByZXYsIHRoaXMudXBkYXRlKVxuICAgICAgICAgICAgdGhpcy5zZXQodHJ1ZSwgdG9rZW4sIGN1cnJlbnQsIHRoaXMudXBkYXRlKVxuICAgICAgICAgICAgdGhpcy5vYmplY3RQYXRoW2luZGV4XSA9IGN1cnJlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXQodHJ1ZSwgdG9rZW4sIGN1cnJlbnQsIHRoaXMudXBkYXRlKVxuICAgICAgICAgIHRoaXMub2JqZWN0UGF0aFtpbmRleF0gPSBjdXJyZW50XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXQodG9rZW4sIGN1cnJlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodW5yZWFjaGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHVucmVhY2hlZCA9IGluZGV4XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldiA9IHRoaXMub2JqZWN0UGF0aFtpbmRleF0pIHtcbiAgICAgICAgICB0aGlzLnNldChmYWxzZSwgdG9rZW4sIHByZXYsIHRoaXMudXBkYXRlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcylcblxuICAgIGlmICh1bnJlYWNoZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm9iamVjdFBhdGguc3BsaWNlKHVucmVhY2hlZClcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgLy8gVXBkYXRlcyB0aGUga2V5cGF0aC4gVGhpcyBpcyBjYWxsZWQgd2hlbiBhbnkgaW50ZXJtZWRpYXJ5IGtleSBpcyBjaGFuZ2VkLlxuICBPYnNlcnZlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5leHQsIG9sZFZhbHVlXG5cbiAgICBpZiAoKG5leHQgPSB0aGlzLnJlYWxpemUoKSkgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICBpZiAoaXNPYmplY3QodGhpcy50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuc2V0KGZhbHNlLCB0aGlzLmtleSwgdGhpcy50YXJnZXQsIHRoaXMuY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIGlmIChpc09iamVjdChuZXh0KSkge1xuICAgICAgICB0aGlzLnNldCh0cnVlLCB0aGlzLmtleSwgbmV4dCwgdGhpcy5jYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgb2xkVmFsdWUgPSB0aGlzLnZhbHVlKClcbiAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFxuXG4gICAgICAvLyBBbHdheXMgY2FsbCBjYWxsYmFjayBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLiBJZiBub3QgYSBmdW5jdGlvbiwgY2FsbCBjYWxsYmFjayBvbmx5IGlmIHZhbHVlIGNoYW5nZWRcbiAgICAgIGlmICh0aGlzLnZhbHVlKCkgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fCB0aGlzLnZhbHVlKCkgIT09IG9sZFZhbHVlKSB0aGlzLmNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBSZWFkcyB0aGUgY3VycmVudCBlbmQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIGtleXBhdGguIFJldHVybnMgdW5kZWZpbmVkIGlmXG4gIC8vIHRoZSBmdWxsIGtleXBhdGggaXMgdW5yZWFjaGFibGUuXG4gIE9ic2VydmVyLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmtleSwgdGhpcy50YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgLy8gU2V0cyB0aGUgY3VycmVudCBlbmQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIGtleXBhdGguIENhbGxpbmcgc2V0VmFsdWUgd2hlblxuICAvLyB0aGUgZnVsbCBrZXlwYXRoIGlzIHVucmVhY2hhYmxlIGlzIGEgbm8tb3AuXG4gIE9ic2VydmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMudGFyZ2V0KSkge1xuICAgICAgdGhpcy5hZGFwdGVyKHRoaXMua2V5KS5zZXQodGhpcy50YXJnZXQsIHRoaXMua2V5LnBhdGgsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHMgdGhlIHByb3ZpZGVkIGtleSBvbiBhbiBvYmplY3QuXG4gIE9ic2VydmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIoa2V5KS5nZXQob2JqLCBrZXkucGF0aClcbiAgfVxuXG4gIC8vIE9ic2VydmVzIG9yIHVub2JzZXJ2ZXMgYSBjYWxsYmFjayBvbiB0aGUgb2JqZWN0IHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXG4gIE9ic2VydmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihhY3RpdmUsIGtleSwgb2JqLCBjYWxsYmFjaykge1xuICAgIHZhciBhY3Rpb24gPSBhY3RpdmUgPyAnb2JzZXJ2ZScgOiAndW5vYnNlcnZlJ1xuICAgIHRoaXMuYWRhcHRlcihrZXkpW2FjdGlvbl0ob2JqLCBrZXkucGF0aCwgY2FsbGJhY2spXG4gIH1cblxuICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB1bmlxdWUgYWRhcHRlciBpbnRlcmZhY2VzIGF2YWlsYWJsZS5cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLmludGVyZmFjZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5hZGFwdGVycylcblxuICAgIE9iamVjdC5rZXlzKHNpZ2h0Z2xhc3MuYWRhcHRlcnMpLmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgaWYgKCF+aW50ZXJmYWNlcy5pbmRleE9mKGkpKSB7XG4gICAgICAgIGludGVyZmFjZXMucHVzaChpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW50ZXJmYWNlc1xuICB9XG5cbiAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gZ3JhYiB0aGUgYWRhcHRlciBmb3IgYSBzcGVjaWZpYyBrZXkuXG4gIE9ic2VydmVyLnByb3RvdHlwZS5hZGFwdGVyID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hZGFwdGVyc1trZXkuaV0gfHxcbiAgICAgIHNpZ2h0Z2xhc3MuYWRhcHRlcnNba2V5LmldXG4gIH1cblxuICAvLyBVbm9ic2VydmVzIHRoZSBlbnRpcmUga2V5cGF0aC5cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmpcblxuICAgIHRoaXMudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odG9rZW4sIGluZGV4KSB7XG4gICAgICBpZiAob2JqID0gdGhpcy5vYmplY3RQYXRoW2luZGV4XSkge1xuICAgICAgICB0aGlzLnNldChmYWxzZSwgdG9rZW4sIG9iaiwgdGhpcy51cGRhdGUpXG4gICAgICB9XG4gICAgfSwgdGhpcylcblxuICAgIGlmIChpc09iamVjdCh0aGlzLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0KGZhbHNlLCB0aGlzLmtleSwgdGhpcy50YXJnZXQsIHRoaXMuY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBvYmplY3QgdGhhbiBjYW4gYmUgb2JzZXJ2ZWQuXG4gIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcbiAgfVxuXG4gIC8vIEVycm9yIHRocm93ZXIuXG4gIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzaWdodGdsYXNzXSAnICsgbWVzc2FnZSlcbiAgfVxuXG4gIC8vIEV4cG9ydCBtb2R1bGUgZm9yIE5vZGUgYW5kIHRoZSBicm93c2VyLlxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNpZ2h0Z2xhc3NcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnaHRnbGFzcyA9IHNpZ2h0Z2xhc3NcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc2lnaHRnbGFzcyA9IHNpZ2h0Z2xhc3NcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiIsIi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixwPVwiYXBwbGllZFwiLG09XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIscCxtXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7XCJcIiE9PXQmJihvP24uY2xhc3NMaXN0LmFkZCh0KTpuLmNsYXNzTmFtZSs9KG4uY2xhc3NOYW1lP1wiIFwiOlwiXCIpK3QpfSxNPWZ1bmN0aW9uKG4sdCl7XCJcIiE9PXQmJihvP24uY2xhc3NMaXN0LnJlbW92ZSh0KTpuLmNsYXNzTmFtZT1uLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIrdCtcIihcXFxccyt8JClcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIikpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4scCksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQsbSksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxwbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sbW49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09bX0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fHBuKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1wbihuKSxibihlKS5maWx0ZXIobW4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxwbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7cG4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XG4iLCJmdW5jdGlvbiBwb2x5ZmlsbCh3aW5kb3cpIHtcbiAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgaWYgKHR5cGVvZiBFbGVtZW50UHJvdG90eXBlLm1hdGNoZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICBFbGVtZW50UHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnRQcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcztcbiAgICAgIHZhciBlbGVtZW50cyA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICB3aGlsZSAoZWxlbWVudHNbaW5kZXhdICYmIGVsZW1lbnRzW2luZGV4XSAhPT0gZWxlbWVudCkge1xuICAgICAgICArK2luZGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQm9vbGVhbihlbGVtZW50c1tpbmRleF0pO1xuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIEVsZW1lbnRQcm90b3R5cGUuY2xvc2VzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIEVsZW1lbnRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcztcblxuICAgICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2x5ZmlsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qcz92PTEzMjMwNzEzMTEyJmVuYWJsZV9qc19taW5pZmljYXRpb249MVwiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiUkFESUFOVC1TS0VMRVRPTi1USEVNRTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtSQURJQU5UX1NLRUxFVE9OX1RIRU1FXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1JBRElBTlRfU0tFTEVUT05fVEhFTUVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93Ll9fd2VicGFja19wdWJsaWNfcGF0aF9fXG5cbmltcG9ydCAnLi4vc3R5bGVzL3JhZGlhbnQuc2NzcydcbmltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAnc21vb3Roc2Nyb2xsLXBvbHlmaWxsJztcbmltcG9ydCBUaGVtZSBmcm9tICcuL1RoZW1lJ1xuXG5zbW9vdGhzY3JvbGwucG9seWZpbGwoKTtcblxubGV0IHRoZW1lID0gbmV3IFRoZW1lKClcbnRoZW1lLm1vdW50Q29tcG9uZW50cygpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6c2VjdGlvbjp1bmxvYWQnLCBlID0+IHtcbiAgdGhlbWUudW5tb3VudENvbXBvbmVudHMoZS50YXJnZXQpXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaG9waWZ5OnNlY3Rpb246bG9hZCcsIGUgPT4ge1xuICB0aGVtZS5tb3VudENvbXBvbmVudHMoZS50YXJnZXQpXG4gIHRoZW1lLl9jdHguZW1pdCgncmFkaWFudC0tbGF6eS1sb2FkLXVwZGF0ZScpXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==