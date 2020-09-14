(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/vuetify/lib/components/VChip/VChip.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VChip/VChip.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VChip/VChip.sass */ "./node_modules/vuetify/src/components/VChip/VChip.sass");
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/sizeable */ "./node_modules/vuetify/lib/mixins/sizeable/index.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__["factory"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__["factory"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__["default"].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__["breaking"])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__["VExpandXTransition"], children);
    },

    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));
//# sourceMappingURL=VChip.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VChip/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VChip/index.js ***!
  \************************************************************/
/*! exports provided: VChip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VChip", function() { return _VChip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VChip__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VFileInput/VFileInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VFileInput/VFileInput.sass */ "./node_modules/vuetify/src/components/VFileInput/VFileInput.sass");
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["default"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["wrapInArray"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return { ..._VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },

    computedCounterValue() {
      const fileCount = this.isMultiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["humanReadableFileSize"])(bytes, this.base === 1024));
    },

    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["wrapInArray"])(this.internalValue);
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }

    },

    isDirty() {
      return this.internalArrayValue.length > 0;
    },

    isLabelActive() {
      return this.isDirty;
    },

    isMultiple() {
      return this.$attrs.hasOwnProperty('multiple');
    },

    text() {
      if (!this.isDirty) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["humanReadableFileSize"])(size, this.base === 1024)})`;
      });
    },

    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },

    hasChips() {
      return this.chips || this.smallChips;
    }

  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__["consoleError"])('readonly is not supported on <v-file-input>', this);
      },

      immediate: true
    },

    value(v) {
      const value = this.isMultiple ? v : v ? [v] : [];

      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["deepEqual"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }

  },
  methods: {
    clearableCallback() {
      this.internalValue = this.isMultiple ? [] : undefined;
      this.$refs.input.value = '';
    },

    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__["VChip"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },

    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genControl.call(this);

      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__["mergeStyles"])(render.data.style, {
          display: 'none'
        });
      }

      return render;
    },

    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genInput.call(this); // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // do to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },

    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },

    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },

    genSelections() {
      const children = [];

      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }

      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },

    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genTextFieldSlot.call(this);
      node.data.on = { ...(node.data.on || {}),
        click: () => this.$refs.input.click()
      };
      return node;
    },

    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.isMultiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },

    onKeyDown(e) {
      this.$emit('keydown', e);
    },

    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }

  }
}));
//# sourceMappingURL=VFileInput.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VFileInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VFileInput/index.js ***!
  \*****************************************************************/
/*! exports provided: VFileInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VFileInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/VFileInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VFileInput", function() { return _VFileInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VFileInput__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VChip/VChip.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VChip/VChip.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VFileInput/VFileInput.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VFileInput/VFileInput.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2hpcC9WQ2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2hpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WRmlsZUlucHV0L1ZGaWxlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkZpbGVJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hpcC9WQ2hpcC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZGaWxlSW5wdXQvVkZpbGVJbnB1dC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tEO0FBQ1g7O0FBRWE7QUFDdkI7O0FBRWtCO0FBQ3NCO0FBQ3RCO0FBQ3dCO0FBQzFCO0FBQ0E7O0FBRUM7QUFDOUM7O0FBRWUsMkhBQU0sQ0FBQyx5REFBUyxFQUFFLHdEQUFRLEVBQUUsd0RBQVEsRUFBRSx5REFBUyxFQUFFLGlFQUFnQixlQUFlLGtFQUFpQjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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cG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnNhc3NcIjtcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnOyAvLyBDb21wb25lbnRzXG5cbmltcG9ydCB7IFZFeHBhbmRYVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJztcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbic7IC8vIE1peGluc1xuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSc7XG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBUb2dnbGVhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJztcbmltcG9ydCBSb3V0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91dGFibGUnO1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL21peGlucy9zaXplYWJsZSc7IC8vIFV0aWxpdGllc1xuXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSc7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBTaXplYWJsZSwgUm91dGFibGUsIFRoZW1lYWJsZSwgR3JvdXBhYmxlRmFjdG9yeSgnY2hpcEdyb3VwJyksIFRvZ2dsZWFibGVGYWN0b3J5KCdpbnB1dFZhbHVlJykpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNoaXAnLFxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG5cbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlwR3JvdXApIHJldHVybiAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpcEdyb3VwLmFjdGl2ZUNsYXNzO1xuICAgICAgfVxuXG4gICAgfSxcbiAgICBjbG9zZTogQm9vbGVhbixcbiAgICBjbG9zZUljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZGVsZXRlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuICAgIGZpbHRlcjogQm9vbGVhbixcbiAgICBmaWx0ZXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJ1xuICAgIH0sXG4gICAgbGFiZWw6IEJvb2xlYW4sXG4gICAgbGluazogQm9vbGVhbixcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBwaWxsOiBCb29sZWFuLFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NwYW4nXG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgICB2YWx1ZTogbnVsbFxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHByb3h5Q2xhc3M6ICd2LWNoaXAtLWFjdGl2ZSdcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNoaXAnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2hpcC0tY2xpY2thYmxlJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2hpcC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jaGlwLS1kcmFnZ2FibGUnOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgICAgJ3YtY2hpcC0tbGFiZWwnOiB0aGlzLmxhYmVsLFxuICAgICAgICAndi1jaGlwLS1saW5rJzogdGhpcy5pc0xpbmssXG4gICAgICAgICd2LWNoaXAtLW5vLWNvbG9yJzogIXRoaXMuY29sb3IsXG4gICAgICAgICd2LWNoaXAtLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ3YtY2hpcC0tcGlsbCc6IHRoaXMucGlsbCxcbiAgICAgICAgJ3YtY2hpcC0tcmVtb3ZhYmxlJzogdGhpcy5oYXNDbG9zZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuc2l6ZWFibGVDbGFzc2VzLFxuICAgICAgICAuLi50aGlzLmdyb3VwQ2xhc3Nlc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgaGFzQ2xvc2UoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmNsb3NlKTtcbiAgICB9LFxuXG4gICAgaXNDbGlja2FibGUoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihSb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmlzQ2xpY2thYmxlLmNhbGwodGhpcykgfHwgdGhpcy5jaGlwR3JvdXApO1xuICAgIH1cblxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtbJ291dGxpbmUnLCAnb3V0bGluZWQnXSwgWydzZWxlY3RlZCcsICdpbnB1dC12YWx1ZSddLCBbJ3ZhbHVlJywgJ2FjdGl2ZSddLCBbJ0BpbnB1dCcsICdAYWN0aXZlLnN5bmMnXV07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrKGUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSk7XG4gICAgICB0aGlzLmNoaXBHcm91cCAmJiB0aGlzLnRvZ2dsZSgpO1xuICAgIH0sXG5cbiAgICBnZW5GaWx0ZXIoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fZmlsdGVyJyxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbGVmdDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5maWx0ZXJJY29uKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZFeHBhbmRYVHJhbnNpdGlvbiwgY2hpbGRyZW4pO1xuICAgIH0sXG5cbiAgICBnZW5DbG9zZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19jbG9zZScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgc2l6ZTogMThcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2s6Y2xvc2UnKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTphY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmNsb3NlSWNvbik7XG4gICAgfSxcblxuICAgIGdlbkNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXBfX2NvbnRlbnQnXG4gICAgICB9LCBbdGhpcy5maWx0ZXIgJiYgdGhpcy5nZW5GaWx0ZXIoKSwgdGhpcy4kc2xvdHMuZGVmYXVsdCwgdGhpcy5oYXNDbG9zZSAmJiB0aGlzLmdlbkNsb3NlKCldKTtcbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXTtcbiAgICBsZXQge1xuICAgICAgdGFnLFxuICAgICAgZGF0YVxuICAgIH0gPSB0aGlzLmdlbmVyYXRlUm91dGVMaW5rKCk7XG4gICAgZGF0YS5hdHRycyA9IHsgLi4uZGF0YS5hdHRycyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICB0YWJpbmRleDogdGhpcy5jaGlwR3JvdXAgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogZGF0YS5hdHRycy50YWJpbmRleFxuICAgIH07XG4gICAgZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgdmFsdWU6IHRoaXMuYWN0aXZlXG4gICAgfSk7XG4gICAgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpO1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy50ZXh0Q29sb3IgfHwgdGhpcy5vdXRsaW5lZCAmJiB0aGlzLmNvbG9yO1xuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIGRhdGEpLCBjaGlsZHJlbik7XG4gIH1cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WQ2hpcC5qcy5tYXAiLCJpbXBvcnQgVkNoaXAgZnJvbSAnLi9WQ2hpcCc7XG5leHBvcnQgeyBWQ2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgVkNoaXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZGaWxlSW5wdXQvVkZpbGVJbnB1dC5zYXNzXCI7IC8vIEV4dGVuc2lvbnNcblxuaW1wb3J0IFZUZXh0RmllbGQgZnJvbSAnLi4vVlRleHRGaWVsZCc7IC8vIENvbXBvbmVudHNcblxuaW1wb3J0IHsgVkNoaXAgfSBmcm9tICcuLi9WQ2hpcCc7IC8vIFV0aWxpdGllc1xuXG5pbXBvcnQgeyBkZWVwRXF1YWwsIGh1bWFuUmVhZGFibGVGaWxlU2l6ZSwgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29uc29sZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJztcbmltcG9ydCB7IG1lcmdlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnO1xuZXhwb3J0IGRlZmF1bHQgVlRleHRGaWVsZC5leHRlbmQoe1xuICBuYW1lOiAndi1maWxlLWlucHV0JyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAndmFsdWUnLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIGNoaXBzOiBCb29sZWFuLFxuICAgIGNsZWFyYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGNvdW50ZXJTaXplU3RyaW5nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkuZmlsZUlucHV0LmNvdW50ZXJTaXplJ1xuICAgIH0sXG4gICAgY291bnRlclN0cmluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5LmZpbGVJbnB1dC5jb3VudGVyJ1xuICAgIH0sXG4gICAgaGlkZUlucHV0OiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgcHJlcGVuZEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZmlsZSdcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHNob3dTaXplOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnYm9vbGVhbicgfHwgWzEwMDAsIDEwMjRdLmluY2x1ZGVzKHYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc21hbGxDaGlwczogQm9vbGVhbixcbiAgICB0cnVuY2F0ZUxlbmd0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIyXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZmlsZSdcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICB2YWxpZGF0b3I6IHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB3cmFwSW5BcnJheSh2YWwpLmV2ZXJ5KHYgPT4gdiAhPSBudWxsICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4geyAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1maWxlLWlucHV0JzogdHJ1ZVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWRDb3VudGVyVmFsdWUoKSB7XG4gICAgICBjb25zdCBmaWxlQ291bnQgPSB0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5sYXp5VmFsdWUgPyB0aGlzLmxhenlWYWx1ZS5sZW5ndGggOiB0aGlzLmxhenlWYWx1ZSBpbnN0YW5jZW9mIEZpbGUgPyAxIDogMDtcbiAgICAgIGlmICghdGhpcy5zaG93U2l6ZSkgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkubGFuZy50KHRoaXMuY291bnRlclN0cmluZywgZmlsZUNvdW50KTtcbiAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5pbnRlcm5hbEFycmF5VmFsdWUucmVkdWNlKChieXRlcywge1xuICAgICAgICBzaXplID0gMFxuICAgICAgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYnl0ZXMgKyBzaXplO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5jb3VudGVyU2l6ZVN0cmluZywgZmlsZUNvdW50LCBodW1hblJlYWRhYmxlRmlsZVNpemUoYnl0ZXMsIHRoaXMuYmFzZSA9PT0gMTAyNCkpO1xuICAgIH0sXG5cbiAgICBpbnRlcm5hbEFycmF5VmFsdWUoKSB7XG4gICAgICByZXR1cm4gd3JhcEluQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKTtcbiAgICB9LFxuXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWU7XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmxhenlWYWx1ZSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgaXNEaXJ0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsQXJyYXlWYWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG5cbiAgICBpc0xhYmVsQWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eTtcbiAgICB9LFxuXG4gICAgaXNNdWx0aXBsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnbXVsdGlwbGUnKTtcbiAgICB9LFxuXG4gICAgdGV4dCgpIHtcbiAgICAgIGlmICghdGhpcy5pc0RpcnR5KSByZXR1cm4gW3RoaXMucGxhY2Vob2xkZXJdO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxBcnJheVZhbHVlLm1hcChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgICBzaXplID0gMFxuICAgICAgICB9ID0gZmlsZTtcbiAgICAgICAgY29uc3QgdHJ1bmNhdGVkVGV4dCA9IHRoaXMudHJ1bmNhdGVUZXh0KG5hbWUpO1xuICAgICAgICByZXR1cm4gIXRoaXMuc2hvd1NpemUgPyB0cnVuY2F0ZWRUZXh0IDogYCR7dHJ1bmNhdGVkVGV4dH0gKCR7aHVtYW5SZWFkYWJsZUZpbGVTaXplKHNpemUsIHRoaXMuYmFzZSA9PT0gMTAyNCl9KWA7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgYmFzZSgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5zaG93U2l6ZSAhPT0gJ2Jvb2xlYW4nID8gdGhpcy5zaG93U2l6ZSA6IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgaGFzQ2hpcHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHM7XG4gICAgfVxuXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIGhhbmRsZXIodikge1xuICAgICAgICBpZiAodiA9PT0gdHJ1ZSkgY29uc29sZUVycm9yKCdyZWFkb25seSBpcyBub3Qgc3VwcG9ydGVkIG9uIDx2LWZpbGUtaW5wdXQ+JywgdGhpcyk7XG4gICAgICB9LFxuXG4gICAgICBpbW1lZGlhdGU6IHRydWVcbiAgICB9LFxuXG4gICAgdmFsdWUodikge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlzTXVsdGlwbGUgPyB2IDogdiA/IFt2XSA6IFtdO1xuXG4gICAgICBpZiAoIWRlZXBFcXVhbCh2YWx1ZSwgdGhpcy4kcmVmcy5pbnB1dC5maWxlcykpIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgaW5wdXQgdmFsdWUgaXMgY2hhbmdlZCBwcm9ncmFtYXRpY2FsbHksIGNsZWFyIHRoZVxuICAgICAgICAvLyBpbnRlcm5hbCBpbnB1dCdzIHZhbHVlIHNvIHRoYXQgdGhlIGBvbklucHV0YCBoYW5kbGVyXG4gICAgICAgIC8vIGNhbiBiZSB0cmlnZ2VyZWQgYWdhaW4gaWYgdGhlIHVzZXIgcmUtc2VsZWN0cyB0aGUgZXhhY3RcbiAgICAgICAgLy8gc2FtZSBmaWxlKHMpLiBJZGVhbGx5LCBgaW5wdXQuZmlsZXNgIHNob3VsZCBiZVxuICAgICAgICAvLyBtYW5pcHVsYXRlZCBkaXJlY3RseSBidXQgdGhhdCBwcm9wZXJ0eSBpcyByZWFkb25seS5cbiAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xlYXJhYmxlQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmlzTXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQudmFsdWUgPSAnJztcbiAgICB9LFxuXG4gICAgZ2VuQ2hpcHMoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXJ0eSkgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIHRoaXMudGV4dC5tYXAoKHRleHQsIGluZGV4KSA9PiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDaGlwLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc21hbGw6IHRoaXMuc21hbGxDaGlwc1xuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdjbGljazpjbG9zZSc6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVmFsdWUgPSB0aGlzLmludGVybmFsVmFsdWU7XG4gICAgICAgICAgICBpbnRlcm5hbFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBpbnRlcm5hbFZhbHVlOyAvLyBUcmlnZ2VyIHRoZSB3YXRjaGVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbdGV4dF0pKTtcbiAgICB9LFxuXG4gICAgZ2VuQ29udHJvbCgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMuaGlkZUlucHV0KSB7XG4gICAgICAgIHJlbmRlci5kYXRhLnN0eWxlID0gbWVyZ2VTdHlsZXMocmVuZGVyLmRhdGEuc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfSxcblxuICAgIGdlbklucHV0KCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dC5jYWxsKHRoaXMpOyAvLyBXZSBzaG91bGQgbm90IGJlIHNldHRpbmcgdmFsdWVcbiAgICAgIC8vIHByb2dyYW1tYXRpY2FsbHkgb24gdGhlIGlucHV0XG4gICAgICAvLyB3aGVuIGl0IGlzIHVzaW5nIHR5cGU9XCJmaWxlXCJcblxuICAgICAgZGVsZXRlIGlucHV0LmRhdGEuZG9tUHJvcHMudmFsdWU7IC8vIFRoaXMgc29sdmVzIGFuIGlzc3VlIGluIFNhZmFyaSB3aGVyZVxuICAgICAgLy8gbm90aGluZyBoYXBwZW5zIHdoZW4gYWRkaW5nIGEgZmlsZVxuICAgICAgLy8gZG8gdG8gdGhlIGlucHV0IGV2ZW50IG5vdCBmaXJpbmdcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNzk0MVxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YS5vbi5pbnB1dDtcbiAgICAgIGlucHV0LmRhdGEub24uY2hhbmdlID0gdGhpcy5vbklucHV0O1xuICAgICAgcmV0dXJuIFt0aGlzLmdlblNlbGVjdGlvbnMoKSwgaW5wdXRdO1xuICAgIH0sXG5cbiAgICBnZW5QcmVwZW5kU2xvdCgpIHtcbiAgICAgIGlmICghdGhpcy5wcmVwZW5kSWNvbikgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBpY29uID0gdGhpcy5nZW5JY29uKCdwcmVwZW5kJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0LmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ3ByZXBlbmQnLCAnb3V0ZXInLCBbaWNvbl0pO1xuICAgIH0sXG5cbiAgICBnZW5TZWxlY3Rpb25UZXh0KCkge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCAyKSByZXR1cm4gdGhpcy50ZXh0O1xuICAgICAgaWYgKHRoaXMuc2hvd1NpemUgJiYgIXRoaXMuY291bnRlcikgcmV0dXJuIFt0aGlzLmNvbXB1dGVkQ291bnRlclZhbHVlXTtcbiAgICAgIHJldHVybiBbdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5jb3VudGVyU3RyaW5nLCBsZW5ndGgpXTtcbiAgICB9LFxuXG4gICAgZ2VuU2VsZWN0aW9ucygpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICAgIGlmICh0aGlzLmlzRGlydHkgJiYgdGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxBcnJheVZhbHVlLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pIHJldHVybjtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbih7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHRbaW5kZXhdLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5oYXNDaGlwcyAmJiB0aGlzLmlzRGlydHkgPyB0aGlzLmdlbkNoaXBzKCkgOiB0aGlzLmdlblNlbGVjdGlvblRleHQoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1maWxlLWlucHV0X190ZXh0JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1maWxlLWlucHV0X190ZXh0LS1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMuaXNEaXJ0eSxcbiAgICAgICAgICAndi1maWxlLWlucHV0X190ZXh0LS1jaGlwcyc6IHRoaXMuaGFzQ2hpcHMgJiYgIXRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvblxuICAgICAgICB9XG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSxcblxuICAgIGdlblRleHRGaWVsZFNsb3QoKSB7XG4gICAgICBjb25zdCBub2RlID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuVGV4dEZpZWxkU2xvdC5jYWxsKHRoaXMpO1xuICAgICAgbm9kZS5kYXRhLm9uID0geyAuLi4obm9kZS5kYXRhLm9uIHx8IHt9KSxcbiAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuJHJlZnMuaW5wdXQuY2xpY2soKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvbklucHV0KGUpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gWy4uLihlLnRhcmdldC5maWxlcyB8fCBbXSldO1xuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGhpcy5pc011bHRpcGxlID8gZmlsZXMgOiBmaWxlc1swXTsgLy8gU2V0IGluaXRpYWxWYWx1ZSBoZXJlIG90aGVyd2lzZSBpc0ZvY3VzZWRcbiAgICAgIC8vIHdhdGNoZXIgaW4gVlRleHRGaWVsZCB3aWxsIGVtaXQgYSBjaGFuZ2VcbiAgICAgIC8vIGV2ZW50IHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgYmx1cnJlZFxuXG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKTtcbiAgICB9LFxuXG4gICAgdHJ1bmNhdGVUZXh0KHN0cikge1xuICAgICAgaWYgKHN0ci5sZW5ndGggPCBOdW1iZXIodGhpcy50cnVuY2F0ZUxlbmd0aCkpIHJldHVybiBzdHI7XG4gICAgICBjb25zdCBjaGFyc0tlZXBPbmVTaWRlID0gTWF0aC5mbG9vcigoTnVtYmVyKHRoaXMudHJ1bmNhdGVMZW5ndGgpIC0gMSkgLyAyKTtcbiAgICAgIHJldHVybiBgJHtzdHIuc2xpY2UoMCwgY2hhcnNLZWVwT25lU2lkZSl94oCmJHtzdHIuc2xpY2Uoc3RyLmxlbmd0aCAtIGNoYXJzS2VlcE9uZVNpZGUpfWA7XG4gICAgfVxuXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VkZpbGVJbnB1dC5qcy5tYXAiLCJpbXBvcnQgVkZpbGVJbnB1dCBmcm9tICcuL1ZGaWxlSW5wdXQnO1xuZXhwb3J0IHsgVkZpbGVJbnB1dCB9O1xuZXhwb3J0IGRlZmF1bHQgVkZpbGVJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=