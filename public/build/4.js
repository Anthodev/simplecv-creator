(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VAvatar/VAvatar.sass */ "./node_modules/vuetify/src/components/VAvatar/VAvatar.sass");
/* harmony import */ var _src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/measurable */ "./node_modules/vuetify/lib/mixins/measurable/index.js");
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/roundable */ "./node_modules/vuetify/lib/mixins/roundable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
 // Mixins



 // Utilities



/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__["default"]).extend({
  name: 'v-avatar',
  props: {
    left: Boolean,
    right: Boolean,
    size: {
      type: [Number, String],
      default: 48
    }
  },
  computed: {
    classes() {
      return {
        'v-avatar--left': this.left,
        'v-avatar--right': this.right,
        ...this.roundedClasses
      };
    },

    styles() {
      return {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size),
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.size),
        ...this.measurableStyles
      };
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-avatar',
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    };
    return h('div', this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));
//# sourceMappingURL=VAvatar.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VAvatar/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VAvatar/index.js ***!
  \**************************************************************/
/*! exports provided: VAvatar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAvatar", function() { return _VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCheckbox/VSimpleCheckbox.sass */ "./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass");
/* harmony import */ var _src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");



 // Mixins


 // Utilities



/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-simple-checkbox',
  functional: true,
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: { ..._mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.props,
    ..._mixins_themeable__WEBPACK_IMPORTED_MODULE_5__["default"].options.props,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    }
  },

  render(h, {
    props,
    data,
    listeners
  }) {
    const children = [];

    if (props.ripple && !props.disabled) {
      const ripple = h('div', _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.setTextColor(props.color, {
        staticClass: 'v-input--selection-controls__ripple',
        directives: [{
          name: 'ripple',
          value: {
            center: true
          }
        }]
      }));
      children.push(ripple);
    }

    let icon = props.offIcon;
    if (props.indeterminate) icon = props.indeterminateIcon;else if (props.value) icon = props.onIcon;
    children.push(h(_VIcon__WEBPACK_IMPORTED_MODULE_3__["VIcon"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.setTextColor(props.value && props.color, {
      props: {
        disabled: props.disabled,
        dark: props.dark,
        light: props.light
      }
    }), icon));
    const classes = {
      'v-simple-checkbox': true,
      'v-simple-checkbox--disabled': props.disabled
    };
    return h('div', Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_6__["default"])(data, {
      class: classes,
      on: {
        click: e => {
          e.stopPropagation();

          if (data.on && data.on.input && !props.disabled) {
            Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["wrapInArray"])(data.on.input).forEach(f => f(!props.value));
          }
        }
      }
    }), children);
  }

}));
//# sourceMappingURL=VSimpleCheckbox.js.map

/***/ }),

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

/***/ "./node_modules/vuetify/lib/components/VList/VList.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VList_VList_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VList/VList.sass */ "./node_modules/vuetify/src/components/VList/VList.sass");
/* harmony import */ var _src_components_VList_VList_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VList_VList_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VSheet/VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
// Styles
 // Components


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].extend().extend({
  name: 'v-list',

  provide() {
    return {
      isInList: true,
      list: this
    };
  },

  inject: {
    isInMenu: {
      default: false
    },
    isInNav: {
      default: false
    }
  },
  props: {
    dense: Boolean,
    disabled: Boolean,
    expand: Boolean,
    flat: Boolean,
    nav: Boolean,
    rounded: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },
  data: () => ({
    groups: []
  }),
  computed: {
    classes() {
      return { ..._VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        'v-list--dense': this.dense,
        'v-list--disabled': this.disabled,
        'v-list--flat': this.flat,
        'v-list--nav': this.nav,
        'v-list--rounded': this.rounded,
        'v-list--subheader': this.subheader,
        'v-list--two-line': this.twoLine,
        'v-list--three-line': this.threeLine
      };
    }

  },
  methods: {
    register(content) {
      this.groups.push(content);
    },

    unregister(content) {
      const index = this.groups.findIndex(g => g._uid === content._uid);
      if (index > -1) this.groups.splice(index, 1);
    },

    listClick(uid) {
      if (this.expand) return;

      for (const group of this.groups) {
        group.toggle(uid);
      }
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-list',
      class: this.classes,
      style: this.styles,
      attrs: {
        role: this.isInNav || this.isInMenu ? undefined : 'list',
        ...this.attrs$
      }
    };
    return h(this.tag, this.setBackgroundColor(this.color, data), [this.$slots.default]);
  }

}));
//# sourceMappingURL=VList.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListGroup.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListGroup.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VList_VListGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VList/VListGroup.sass */ "./node_modules/vuetify/src/components/VList/VListGroup.sass");
/* harmony import */ var _src_components_VList_VListGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VList_VListGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _VListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VListItem */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var _VListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VListItemIcon */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/bootable */ "./node_modules/vuetify/lib/mixins/bootable/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Components



 // Mixins





 // Directives

 // Transitions

 // Utils



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_11__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_bootable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_8__["inject"])('list'), _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend().extend({
  name: 'v-list-group',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: '$expand'
    },
    color: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean,
    group: String,
    noAction: Boolean,
    prependIcon: String,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    subGroup: Boolean
  },
  computed: {
    classes() {
      return {
        'v-list-group--active': this.isActive,
        'v-list-group--disabled': this.disabled,
        'v-list-group--no-action': this.noAction,
        'v-list-group--sub-group': this.subGroup
      };
    }

  },
  watch: {
    isActive(val) {
      /* istanbul ignore else */
      if (!this.subGroup && val) {
        this.list && this.list.listClick(this._uid);
      }
    },

    $route: 'onRouteChange'
  },

  created() {
    this.list && this.list.register(this);

    if (this.group && this.$route && this.value == null) {
      this.isActive = this.matchRoute(this.$route.path);
    }
  },

  beforeDestroy() {
    this.list && this.list.unregister(this);
  },

  methods: {
    click(e) {
      if (this.disabled) return;
      this.isBooted = true;
      this.$emit('click', e);
      this.$nextTick(() => this.isActive = !this.isActive);
    },

    genIcon(icon) {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], icon);
    },

    genAppendIcon() {
      const icon = !this.subGroup ? this.appendIcon : false;
      if (!icon && !this.$slots.appendIcon) return null;
      return this.$createElement(_VListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        staticClass: 'v-list-group__header__append-icon'
      }, [this.$slots.appendIcon || this.genIcon(icon)]);
    },

    genHeader() {
      return this.$createElement(_VListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        staticClass: 'v-list-group__header',
        attrs: {
          'aria-expanded': String(this.isActive),
          role: 'button'
        },
        class: {
          [this.activeClass]: this.isActive
        },
        props: {
          inputValue: this.isActive
        },
        directives: [{
          name: 'ripple',
          value: this.ripple
        }],
        on: { ...this.listeners$,
          click: this.click
        }
      }, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()]);
    },

    genItems() {
      return this.showLazyContent(() => [this.$createElement('div', {
        staticClass: 'v-list-group__items',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["getSlot"])(this))]);
    },

    genPrependIcon() {
      const icon = this.subGroup && this.prependIcon == null ? '$subgroup' : this.prependIcon;
      if (!icon && !this.$slots.prependIcon) return null;
      return this.$createElement(_VListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        staticClass: 'v-list-group__header__prepend-icon'
      }, [this.$slots.prependIcon || this.genIcon(icon)]);
    },

    onRouteChange(to) {
      /* istanbul ignore if */
      if (!this.group) return;
      const isActive = this.matchRoute(to.path);
      /* istanbul ignore else */

      if (isActive && this.isActive !== isActive) {
        this.list && this.list.listClick(this._uid);
      }

      this.isActive = isActive;
    },

    toggle(uid) {
      const isActive = this._uid === uid;
      if (isActive) this.isBooted = true;
      this.$nextTick(() => this.isActive = isActive);
    },

    matchRoute(to) {
      return to.match(this.group) !== null;
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.isActive && this.color, {
      staticClass: 'v-list-group',
      class: this.classes
    }), [this.genHeader(), h(_transitions__WEBPACK_IMPORTED_MODULE_10__["VExpandTransition"], this.genItems())]);
  }

}));
//# sourceMappingURL=VListGroup.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListItem.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VList_VListItem_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VList/VListItem.sass */ "./node_modules/vuetify/src/components/VList/VListItem.sass");
/* harmony import */ var _src_components_VList_VListItem_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VList_VListItem_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins





 // Directives

 // Utilities


 // Types


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_9__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_3__["factory"])('listItemGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_5__["factory"])('inputValue'));
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend().extend({
  name: 'v-list-item',
  directives: {
    Ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  inheritAttrs: false,
  inject: {
    isInGroup: {
      default: false
    },
    isInList: {
      default: false
    },
    isInMenu: {
      default: false
    },
    isInNav: {
      default: false
    }
  },
  props: {
    activeClass: {
      type: String,

      default() {
        if (!this.listItemGroup) return '';
        return this.listItemGroup.activeClass;
      }

    },
    dense: Boolean,
    inactive: Boolean,
    link: Boolean,
    selectable: {
      type: Boolean
    },
    tag: {
      type: String,
      default: 'div'
    },
    threeLine: Boolean,
    twoLine: Boolean,
    value: null
  },
  data: () => ({
    proxyClass: 'v-list-item--active'
  }),
  computed: {
    classes() {
      return {
        'v-list-item': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.classes.call(this),
        'v-list-item--dense': this.dense,
        'v-list-item--disabled': this.disabled,
        'v-list-item--link': this.isClickable && !this.inactive,
        'v-list-item--selectable': this.selectable,
        'v-list-item--three-line': this.threeLine,
        'v-list-item--two-line': this.twoLine,
        ...this.themeClasses
      };
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.isClickable.call(this) || this.listItemGroup);
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('avatar')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__["removed"])('avatar', this);
    }
  },

  methods: {
    click(e) {
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    },

    genAttrs() {
      const attrs = {
        'aria-disabled': this.disabled ? true : undefined,
        tabindex: this.isClickable && !this.disabled ? 0 : -1,
        ...this.$attrs
      };

      if (this.$attrs.hasOwnProperty('role')) {// do nothing, role already provided
      } else if (this.isInNav) {// do nothing, role is inherit
      } else if (this.isInGroup) {
        attrs.role = 'listitem';
        attrs['aria-selected'] = String(this.isActive);
      } else if (this.isInMenu) {
        attrs.role = this.isClickable ? 'menuitem' : undefined;
        attrs.id = attrs.id || `list-item-${this._uid}`;
      } else if (this.isInList) {
        attrs.role = 'listitem';
      }

      return attrs;
    }

  },

  render(h) {
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      ...this.genAttrs()
    };
    data[this.to ? 'nativeOn' : 'on'] = { ...data[this.to ? 'nativeOn' : 'on'],
      keydown: e => {
        /* istanbul ignore else */
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    if (this.inactive) tag = 'div';

    if (this.inactive && this.to) {
      data.on = data.nativeOn;
      delete data.nativeOn;
    }

    const children = this.$scopedSlots.default ? this.$scopedSlots.default({
      active: this.isActive,
      toggle: this.toggle
    }) : this.$slots.default;
    return h(tag, this.setTextColor(this.color, data), children);
  }

}));
//# sourceMappingURL=VListItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListItemAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListItemAction.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
// Types

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'v-list-item-action',
  functional: true,

  render(h, {
    data,
    children = []
  }) {
    data.staticClass = data.staticClass ? `v-list-item__action ${data.staticClass}` : 'v-list-item__action';
    const filteredChild = children.filter(VNode => {
      return VNode.isComment === false && VNode.text !== ' ';
    });
    if (filteredChild.length > 1) data.staticClass += ' v-list-item__action--stack';
    return h('div', data, children);
  }

}));
//# sourceMappingURL=VListItemAction.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
// Components

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'v-list-item-avatar',
  props: {
    horizontal: Boolean,
    size: {
      type: [Number, String],
      default: 40
    }
  },
  computed: {
    classes() {
      return {
        'v-list-item__avatar--horizontal': this.horizontal,
        ..._VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"].options.computed.classes.call(this),
        'v-avatar--tile': this.tile || this.horizontal
      };
    }

  },

  render(h) {
    const render = _VAvatar__WEBPACK_IMPORTED_MODULE_0__["default"].options.render.call(this, h);
    render.data = render.data || {};
    render.data.staticClass += ' v-list-item__avatar';
    return render;
  }

}));
//# sourceMappingURL=VListItemAvatar.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListItemGroup.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListItemGroup.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VList_VListItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VList/VListItemGroup.sass */ "./node_modules/vuetify/src/components/VList/VListItemGroup.sass");
/* harmony import */ var _src_components_VList_VListItemGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VList_VListItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VItemGroup/VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Extensions

 // Mixins

 // Utilities


/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__["BaseItemGroup"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
  name: 'v-list-item-group',

  provide() {
    return {
      isInGroup: true,
      listItemGroup: this
    };
  },

  computed: {
    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__["BaseItemGroup"].options.computed.classes.call(this),
        'v-list-item-group': true
      };
    }

  },
  methods: {
    genData() {
      return this.setTextColor(this.color, { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__["BaseItemGroup"].options.methods.genData.call(this),
        attrs: {
          role: 'listbox'
        }
      });
    }

  }
}));
//# sourceMappingURL=VListItemGroup.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/VListItemIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
// Types

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'v-list-item-icon',
  functional: true,

  render(h, {
    data,
    children
  }) {
    data.staticClass = `v-list-item__icon ${data.staticClass || ''}`.trim();
    return h('div', data, children);
  }

}));
//# sourceMappingURL=VListItemIcon.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VList/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VList/index.js ***!
  \************************************************************/
/*! exports provided: VListItemActionText, VListItemContent, VListItemTitle, VListItemSubtitle, VList, VListGroup, VListItem, VListItemAction, VListItemAvatar, VListItemIcon, VListItemGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VListItemActionText", function() { return VListItemActionText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VListItemContent", function() { return VListItemContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VListItemTitle", function() { return VListItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VListItemSubtitle", function() { return VListItemSubtitle; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VList", function() { return _VList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _VListGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VListGroup */ "./node_modules/vuetify/lib/components/VList/VListGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListGroup", function() { return _VListGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _VListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VListItem */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListItem", function() { return _VListItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _VListItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VListItemGroup */ "./node_modules/vuetify/lib/components/VList/VListItemGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListItemGroup", function() { return _VListItemGroup__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _VListItemAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VListItemAction */ "./node_modules/vuetify/lib/components/VList/VListItemAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListItemAction", function() { return _VListItemAction__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _VListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VListItemAvatar */ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListItemAvatar", function() { return _VListItemAvatar__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _VListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VListItemIcon */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VListItemIcon", function() { return _VListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"]; });









const VListItemActionText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["createSimpleFunctional"])('v-list-item__action-text', 'span');
const VListItemContent = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["createSimpleFunctional"])('v-list-item__content', 'div');
const VListItemTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["createSimpleFunctional"])('v-list-item__title', 'div');
const VListItemSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["createSimpleFunctional"])('v-list-item__subtitle', 'div');

/* harmony default export */ __webpack_exports__["default"] = ({
  $_vuetify_subcomponents: {
    VList: _VList__WEBPACK_IMPORTED_MODULE_1__["default"],
    VListGroup: _VListGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    VListItem: _VListItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    VListItemAction: _VListItemAction__WEBPACK_IMPORTED_MODULE_5__["default"],
    VListItemActionText,
    VListItemAvatar: _VListItemAvatar__WEBPACK_IMPORTED_MODULE_6__["default"],
    VListItemContent,
    VListItemGroup: _VListItemGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    VListItemIcon: _VListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"],
    VListItemSubtitle,
    VListItemTitle
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMenu/VMenu.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMenu/VMenu.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VMenu/VMenu.sass */ "./node_modules/vuetify/src/components/VMenu/VMenu.sass");
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VThemeProvider */ "./node_modules/vuetify/lib/components/VThemeProvider/index.js");
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/activatable */ "./node_modules/vuetify/lib/mixins/activatable/index.js");
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/delayable */ "./node_modules/vuetify/lib/mixins/delayable/index.js");
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/dependent */ "./node_modules/vuetify/lib/mixins/dependent/index.js");
/* harmony import */ var _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/detachable */ "./node_modules/vuetify/lib/mixins/detachable/index.js");
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/menuable */ "./node_modules/vuetify/lib/mixins/menuable/index.js");
/* harmony import */ var _mixins_returnable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/returnable */ "./node_modules/vuetify/lib/mixins/returnable/index.js");
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/roundable */ "./node_modules/vuetify/lib/mixins/roundable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/resize */ "./node_modules/vuetify/lib/directives/resize/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Components

 // Mixins









 // Directives


 // Utilities




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_13__["default"])(_mixins_dependent__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_returnable__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_10__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend({
  name: 'v-menu',

  provide() {
    return {
      isInMenu: true,
      // Pass theme through to default slot
      theme: this.theme
    };
  },

  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_11__["default"],
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    auto: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    disableKeys: Boolean,
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    offsetX: Boolean,
    offsetY: Boolean,
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: Boolean,
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: [Boolean, String],
      default: 'v-menu-transition'
    }
  },

  data() {
    return {
      calculatedTopAuto: 0,
      defaultOffset: 8,
      hasJustFocused: false,
      listIndex: -1,
      resizeTimeout: 0,
      selectedIndex: null,
      tiles: []
    };
  },

  computed: {
    activeTile() {
      return this.tiles[this.listIndex];
    },

    calculatedLeft() {
      const menuWidth = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
      if (!this.auto) return this.calcLeft(menuWidth) || '0';
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(this.calcXOverflow(this.calcLeftAuto(), menuWidth)) || '0';
    },

    calculatedMaxHeight() {
      const height = this.auto ? '200px' : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(this.maxHeight);
      return height || '0';
    },

    calculatedMaxWidth() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(this.maxWidth) || '0';
    },

    calculatedMinWidth() {
      if (this.minWidth) {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(this.minWidth) || '0';
      }

      const minWidth = Math.min(this.dimensions.activator.width + Number(this.nudgeWidth) + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0));
      const calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth)) ? minWidth : parseInt(this.calculatedMaxWidth);
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(Math.min(calculatedMaxWidth, minWidth)) || '0';
    },

    calculatedTop() {
      const top = !this.auto ? this.calcTop() : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__["convertToUnit"])(this.calcYOverflow(this.calculatedTopAuto));
      return top || '0';
    },

    hasClickableTiles() {
      return Boolean(this.tiles.find(tile => tile.tabIndex > -1));
    },

    styles() {
      return {
        maxHeight: this.calculatedMaxHeight,
        minWidth: this.calculatedMinWidth,
        maxWidth: this.calculatedMaxWidth,
        top: this.calculatedTop,
        left: this.calculatedLeft,
        transformOrigin: this.origin,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },
  watch: {
    isActive(val) {
      if (!val) this.listIndex = -1;
    },

    isContentActive(val) {
      this.hasJustFocused = val;
    },

    listIndex(next, prev) {
      if (next in this.tiles) {
        const tile = this.tiles[next];
        tile.classList.add('v-list-item--highlighted');
        this.$refs.content.scrollTop = tile.offsetTop - tile.clientHeight;
      }

      prev in this.tiles && this.tiles[prev].classList.remove('v-list-item--highlighted');
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_14__["removed"])('full-width', this);
    }
  },

  mounted() {
    this.isActive && this.callActivate();
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(() => {
        // Once transitioning, calculate scroll and top position
        this.startTransition().then(() => {
          if (this.$refs.content) {
            this.calculatedTopAuto = this.calcTopAuto();
            this.auto && (this.$refs.content.scrollTop = this.calcScrollPosition());
          }
        });
      });
    },

    calcScrollPosition() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');
      const maxScrollTop = $el.scrollHeight - $el.offsetHeight;
      return activeTile ? Math.min(maxScrollTop, Math.max(0, activeTile.offsetTop - $el.offsetHeight / 2 + activeTile.offsetHeight / 2)) : $el.scrollTop;
    },

    calcLeftAuto() {
      return parseInt(this.dimensions.activator.left - this.defaultOffset * 2);
    },

    calcTopAuto() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');

      if (!activeTile) {
        this.selectedIndex = null;
      }

      if (this.offsetY || !activeTile) {
        return this.computedTop;
      }

      this.selectedIndex = Array.from(this.tiles).indexOf(activeTile);
      const tileDistanceFromMenuTop = activeTile.offsetTop - this.calcScrollPosition();
      const firstTileOffsetTop = $el.querySelector('.v-list-item').offsetTop;
      return this.computedTop - tileDistanceFromMenuTop - firstTileOffsetTop - 1;
    },

    changeListIndex(e) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (!this.isActive || !this.hasClickableTiles) {
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].tab) {
        this.isActive = false;
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].down) {
        this.nextTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].up) {
        this.prevTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].enter && this.listIndex !== -1) {
        this.tiles[this.listIndex].click();
      } else {
        return;
      } // One of the conditions was met, prevent default action (#2988)


      e.preventDefault();
    },

    closeConditional(e) {
      const target = e.target;
      return this.isActive && !this._isDestroyed && this.closeOnClick && !this.$refs.content.contains(target);
    },

    genActivatorAttributes() {
      const attributes = _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genActivatorAttributes.call(this);

      if (this.activeTile && this.activeTile.id) {
        return { ...attributes,
          'aria-activedescendant': this.activeTile.id
        };
      }

      return attributes;
    },

    genActivatorListeners() {
      const listeners = _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__["default"].options.methods.genActivatorListeners.call(this);

      if (!this.disableKeys) {
        listeners.keydown = this.onKeyDown;
      }

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [content]);
    },

    genDirectives() {
      const directives = [{
        name: 'show',
        value: this.isContentActive
      }]; // Do not add click outside for hover menu

      if (!this.openOnHover && this.closeOnClick) {
        directives.push({
          name: 'click-outside',
          value: {
            handler: () => {
              this.isActive = false;
            },
            closeConditional: this.closeConditional,
            include: () => [this.$el, ...this.getOpenDependentElements()]
          }
        });
      }

      return directives;
    },

    genContent() {
      const options = {
        attrs: { ...this.getScopeIdAttrs(),
          role: 'role' in this.$attrs ? this.$attrs.role : 'menu'
        },
        staticClass: 'v-menu__content',
        class: { ...this.rootThemeClasses,
          ...this.roundedClasses,
          'v-menu__content--auto': this.auto,
          'v-menu__content--fixed': this.activatorFixed,
          menuable__content__active: this.isActive,
          [this.contentClass.trim()]: true
        },
        style: this.styles,
        directives: this.genDirectives(),
        ref: 'content',
        on: {
          click: e => {
            const target = e.target;
            if (target.getAttribute('disabled')) return;
            if (this.closeOnContentClick) this.isActive = false;
          },
          keydown: this.onKeyDown
        }
      };

      if (this.$listeners.scroll) {
        options.on = options.on || {};
        options.on.scroll = this.$listeners.scroll;
      }

      if (!this.disabled && this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseenter = this.mouseEnterHandler;
      }

      if (this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseleave = this.mouseLeaveHandler;
      }

      return this.$createElement('div', options, this.getContentSlot());
    },

    getTiles() {
      if (!this.$refs.content) return;
      this.tiles = Array.from(this.$refs.content.querySelectorAll('.v-list-item'));
    },

    mouseEnterHandler() {
      this.runDelay('open', () => {
        if (this.hasJustFocused) return;
        this.hasJustFocused = true;
        this.isActive = true;
      });
    },

    mouseLeaveHandler(e) {
      // Prevent accidental re-activation
      this.runDelay('close', () => {
        if (this.$refs.content.contains(e.relatedTarget)) return;
        requestAnimationFrame(() => {
          this.isActive = false;
          this.callDeactivate();
        });
      });
    },

    nextTile() {
      const tile = this.tiles[this.listIndex + 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = -1;
        this.nextTile();
        return;
      }

      this.listIndex++;
      if (tile.tabIndex === -1) this.nextTile();
    },

    prevTile() {
      const tile = this.tiles[this.listIndex - 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = this.tiles.length;
        this.prevTile();
        return;
      }

      this.listIndex--;
      if (tile.tabIndex === -1) this.prevTile();
    },

    onKeyDown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].esc) {
        // Wait for dependent elements to close first
        setTimeout(() => {
          this.isActive = false;
        });
        const activator = this.getActivator();
        this.$nextTick(() => activator && activator.focus());
      } else if (!this.isActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].up, _util_helpers__WEBPACK_IMPORTED_MODULE_15__["keyCodes"].down].includes(e.keyCode)) {
        this.isActive = true;
      } // Allow for isActive watcher to generate tile list


      this.$nextTick(() => this.changeListIndex(e));
    },

    onResize() {
      if (!this.isActive) return; // Account for screen resize
      // and orientation change
      // eslint-disable-next-line no-unused-expressions

      this.$refs.content.offsetWidth;
      this.updateDimensions(); // When resizing to a smaller width
      // content width is evaluated before
      // the new activator width has been
      // set, causing it to not size properly
      // hacky but will revisit in the future

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.updateDimensions, 100);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-menu',
      class: {
        'v-menu--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      directives: [{
        arg: '500',
        name: 'resize',
        value: this.onResize
      }]
    };
    return h('div', data, [!this.activator && this.genActivator(), this.showLazyContent(() => [this.$createElement(_VThemeProvider__WEBPACK_IMPORTED_MODULE_1__["VThemeProvider"], {
      props: {
        root: true,
        light: this.light,
        dark: this.dark
      }
    }, [this.genTransition()])])]);
  }

}));
//# sourceMappingURL=VMenu.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMenu/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMenu/index.js ***!
  \************************************************************/
/*! exports provided: VMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMenu", function() { return _VMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/VSelect.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/VSelect.js ***!
  \****************************************************************/
/*! exports provided: defaultMenuProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenuProps", function() { return defaultMenuProps; });
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VTextField/VTextField.sass */ "./node_modules/vuetify/src/components/VTextField/VTextField.sass");
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VSelect/VSelect.sass */ "./node_modules/vuetify/src/components/VSelect/VSelect.sass");
/* harmony import */ var _src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var _VSelectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VSelectList */ "./node_modules/vuetify/lib/components/VSelect/VSelectList.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VTextField/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var _mixins_comparable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/comparable */ "./node_modules/vuetify/lib/mixins/comparable/index.js");
/* harmony import */ var _mixins_filterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/filterable */ "./node_modules/vuetify/lib/mixins/filterable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles

 // Components



 // Extensions


 // Mixins


 // Directives

 // Utilities



 // Types


const defaultMenuProps = {
  closeOnClick: false,
  closeOnContentClick: false,
  disableKeys: true,
  openOnClick: false,
  maxHeight: 304
}; // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_13__["default"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_comparable__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_filterable__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend().extend({
  name: 'v-select',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    appendIcon: {
      type: String,
      default: '$dropdown'
    },
    attach: {
      type: null,
      default: false
    },
    cacheItems: Boolean,
    chips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    disableLookup: Boolean,
    eager: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemColor: {
      type: String,
      default: 'primary'
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => defaultMenuProps
    },
    multiple: Boolean,
    openOnClear: Boolean,
    returnObject: Boolean,
    smallChips: Boolean
  },

  data() {
    return {
      cachedItems: this.cacheItems ? this.items : [],
      menuIsBooted: false,
      isMenuActive: false,
      lastItem: 20,
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      lazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      selectedIndex: -1,
      selectedItems: [],
      keyboardLookupPrefix: '',
      keyboardLookupLastTime: 0
    };
  },

  computed: {
    /* All items that the select has */
    allItems() {
      return this.filterDuplicates(this.cachedItems.concat(this.items));
    },

    classes() {
      return { ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"].options.computed.classes.call(this),
        'v-select': true,
        'v-select--chips': this.hasChips,
        'v-select--chips--small': this.smallChips,
        'v-select--is-menu-active': this.isMenuActive,
        'v-select--is-multi': this.multiple
      };
    },

    /* Used by other components to overwrite */
    computedItems() {
      return this.allItems;
    },

    computedOwns() {
      return `list-${this._uid}`;
    },

    computedCounterValue() {
      return this.multiple ? this.selectedItems.length : (this.getText(this.selectedItems[0]) || '').toString().length;
    },

    directives() {
      return this.isFocused ? [{
        name: 'click-outside',
        value: {
          handler: this.blur,
          closeConditional: this.closeConditional
        }
      }] : undefined;
    },

    dynamicHeight() {
      return 'auto';
    },

    hasChips() {
      return this.chips || this.smallChips;
    },

    hasSlot() {
      return Boolean(this.hasChips || this.$scopedSlots.selection);
    },

    isDirty() {
      return this.selectedItems.length > 0;
    },

    listData() {
      const scopeId = this.$vnode && this.$vnode.context.$options._scopeId;
      const attrs = scopeId ? {
        [scopeId]: true
      } : {};
      return {
        attrs: { ...attrs,
          id: this.computedOwns
        },
        props: {
          action: this.multiple,
          color: this.itemColor,
          dense: this.dense,
          hideSelected: this.hideSelected,
          items: this.virtualizedItems,
          itemDisabled: this.itemDisabled,
          itemText: this.itemText,
          itemValue: this.itemValue,
          noDataText: this.$vuetify.lang.t(this.noDataText),
          selectedItems: this.selectedItems
        },
        on: {
          select: this.selectItem
        },
        scopedSlots: {
          item: this.$scopedSlots.item
        }
      };
    },

    staticList() {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        Object(_util_console__WEBPACK_IMPORTED_MODULE_12__["consoleError"])('assert: staticList should not be called if slots are used');
      }

      return this.$createElement(_VSelectList__WEBPACK_IMPORTED_MODULE_4__["default"], this.listData);
    },

    virtualizedItems() {
      return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem);
    },

    menuCanShow: () => true,

    $_menuProps() {
      let normalisedProps = typeof this.menuProps === 'string' ? this.menuProps.split(',') : this.menuProps;

      if (Array.isArray(normalisedProps)) {
        normalisedProps = normalisedProps.reduce((acc, p) => {
          acc[p.trim()] = true;
          return acc;
        }, {});
      }

      return { ...defaultMenuProps,
        eager: this.eager,
        value: this.menuCanShow && this.isMenuActive,
        nudgeBottom: normalisedProps.offsetY ? 1 : 0,
        ...normalisedProps
      };
    }

  },
  watch: {
    internalValue(val) {
      this.initialValue = val;
      this.setSelectedItems();
    },

    isMenuActive(val) {
      window.setTimeout(() => this.onMenuActiveChange(val));
    },

    items: {
      immediate: true,

      handler(val) {
        if (this.cacheItems) {
          // Breaks vue-test-utils if
          // this isn't calculated
          // on the next tick
          this.$nextTick(() => {
            this.cachedItems = this.filterDuplicates(this.cachedItems.concat(val));
          });
        }

        this.setSelectedItems();
      }

    }
  },
  methods: {
    /** @public */
    blur(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"].options.methods.blur.call(this, e);
      this.isMenuActive = false;
      this.isFocused = false;
      this.selectedIndex = -1;
    },

    /** @public */
    activateMenu() {
      if (!this.isInteractive || this.isMenuActive) return;
      this.isMenuActive = true;
    },

    clearableCallback() {
      this.setValue(this.multiple ? [] : undefined);
      this.setMenuIndex(-1);
      this.$nextTick(() => this.$refs.input && this.$refs.input.focus());
      if (this.openOnClear) this.isMenuActive = true;
    },

    closeConditional(e) {
      if (!this.isMenuActive) return true;
      return !this._isDestroyed && ( // Click originates from outside the menu content
      // Multiple selects don't close when an item is clicked
      !this.getContent() || !this.getContent().contains(e.target)) && // Click originates from outside the element
      this.$el && !this.$el.contains(e.target) && e.target !== this.$el;
    },

    filterDuplicates(arr) {
      const uniqueValues = new Map();

      for (let index = 0; index < arr.length; ++index) {
        const item = arr[index];
        const val = this.getValue(item); // TODO: comparator

        !uniqueValues.has(val) && uniqueValues.set(val, item);
      }

      return Array.from(uniqueValues.values());
    },

    findExistingIndex(item) {
      const itemValue = this.getValue(item);
      return (this.internalValue || []).findIndex(i => this.valueComparator(this.getValue(i), itemValue));
    },

    getContent() {
      return this.$refs.menu && this.$refs.menu.$refs.content;
    },

    genChipSelection(item, index) {
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        staticClass: 'v-chip--select',
        attrs: {
          tabindex: -1
        },
        props: {
          close: this.deletableChips && !isDisabled,
          disabled: isDisabled,
          inputValue: index === this.selectedIndex,
          small: this.smallChips
        },
        on: {
          click: e => {
            if (isDisabled) return;
            e.stopPropagation();
            this.selectedIndex = index;
          },
          'click:close': () => this.onChipInput(item)
        },
        key: JSON.stringify(this.getValue(item))
      }, this.getText(item));
    },

    genCommaSelection(item, index, last) {
      const color = index === this.selectedIndex && this.computedColor;
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-select__selection v-select__selection--comma',
        class: {
          'v-select__selection--disabled': isDisabled
        },
        key: JSON.stringify(this.getValue(item))
      }), `${this.getText(item)}${last ? '' : ', '}`);
    },

    genDefaultSlot() {
      const selections = this.genSelections();
      const input = this.genInput(); // If the return is an empty array
      // push the input

      if (Array.isArray(selections)) {
        selections.push(input); // Otherwise push it into children
      } else {
        selections.children = selections.children || [];
        selections.children.push(input);
      }

      return [this.genFieldset(), this.$createElement('div', {
        staticClass: 'v-select__slot',
        directives: this.directives
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, selections, this.suffix ? this.genAffix('suffix') : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()];
    },

    genIcon(type, cb, extraData) {
      const icon = _VInput__WEBPACK_IMPORTED_MODULE_5__["default"].options.methods.genIcon.call(this, type, cb, extraData);

      if (type === 'append') {
        // Don't allow the dropdown icon to be focused
        icon.children[0].data = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_10__["default"])(icon.children[0].data, {
          attrs: {
            tabindex: icon.children[0].componentOptions.listeners && '-1',
            'aria-hidden': 'true',
            'aria-label': undefined
          }
        });
      }

      return icon;
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"].options.methods.genInput.call(this);
      delete input.data.attrs.name;
      input.data = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_10__["default"])(input.data, {
        domProps: {
          value: null
        },
        attrs: {
          readonly: true,
          type: 'text',
          'aria-readonly': String(this.isReadonly),
          'aria-activedescendant': Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__["getObjectValueByPath"])(this.$refs.menu, 'activeTile.id'),
          autocomplete: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__["getObjectValueByPath"])(input.data, 'attrs.autocomplete', 'off')
        },
        on: {
          keypress: this.onKeyPress
        }
      });
      return input;
    },

    genHiddenInput() {
      return this.$createElement('input', {
        domProps: {
          value: this.lazyValue
        },
        attrs: {
          type: 'hidden',
          name: this.attrs$.name
        }
      });
    },

    genInputSlot() {
      const render = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"].options.methods.genInputSlot.call(this);
      render.data.attrs = { ...render.data.attrs,
        role: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isMenuActive),
        'aria-owns': this.computedOwns
      };
      return render;
    },

    genList() {
      // If there's no slots, we can use a cached VNode to improve performance
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        return this.genListWithSlot();
      } else {
        return this.staticList;
      }
    },

    genListWithSlot() {
      const slots = ['prepend-item', 'no-data', 'append-item'].filter(slotName => this.$slots[slotName]).map(slotName => this.$createElement('template', {
        slot: slotName
      }, this.$slots[slotName])); // Requires destructuring due to Vue
      // modifying the `on` property when passed
      // as a referenced object

      return this.$createElement(_VSelectList__WEBPACK_IMPORTED_MODULE_4__["default"], { ...this.listData
      }, slots);
    },

    genMenu() {
      const props = this.$_menuProps;
      props.activator = this.$refs['input-slot']; // Attach to root el so that
      // menu covers prepend/append icons

      if ( // TODO: make this a computed property or helper or something
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) {
          props.attach = this.$el;
        } else {
        props.attach = this.attach;
      }

      return this.$createElement(_VMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attrs: {
          role: undefined
        },
        props,
        on: {
          input: val => {
            this.isMenuActive = val;
            this.isFocused = val;
          },
          scroll: this.onScroll
        },
        ref: 'menu'
      }, [this.genList()]);
    },

    genSelections() {
      let length = this.selectedItems.length;
      const children = new Array(length);
      let genSelection;

      if (this.$scopedSlots.selection) {
        genSelection = this.genSlotSelection;
      } else if (this.hasChips) {
        genSelection = this.genChipSelection;
      } else {
        genSelection = this.genCommaSelection;
      }

      while (length--) {
        children[length] = genSelection(this.selectedItems[length], length, length === children.length - 1);
      }

      return this.$createElement('div', {
        staticClass: 'v-select__selections'
      }, children);
    },

    genSlotSelection(item, index) {
      return this.$scopedSlots.selection({
        attrs: {
          class: 'v-chip--select'
        },
        parent: this,
        item,
        index,
        select: e => {
          e.stopPropagation();
          this.selectedIndex = index;
        },
        selected: index === this.selectedIndex,
        disabled: !this.isInteractive
      });
    },

    getMenuIndex() {
      return this.$refs.menu ? this.$refs.menu.listIndex : -1;
    },

    getDisabled(item) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__["getPropertyFromItem"])(item, this.itemDisabled, false);
    },

    getText(item) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__["getPropertyFromItem"])(item, this.itemText, item);
    },

    getValue(item) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__["getPropertyFromItem"])(item, this.itemValue, this.getText(item));
    },

    onBlur(e) {
      e && this.$emit('blur', e);
    },

    onChipInput(item) {
      if (this.multiple) this.selectItem(item);else this.setValue(null); // If all items have been deleted,
      // open `v-menu`

      if (this.selectedItems.length === 0) {
        this.isMenuActive = true;
      } else {
        this.isMenuActive = false;
      }

      this.selectedIndex = -1;
    },

    onClick(e) {
      if (!this.isInteractive) return;

      if (!this.isAppendInner(e.target)) {
        this.isMenuActive = true;
      }

      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit('focus');
      }

      this.$emit('click', e);
    },

    onEscDown(e) {
      e.preventDefault();

      if (this.isMenuActive) {
        e.stopPropagation();
        this.isMenuActive = false;
      }
    },

    onKeyPress(e) {
      if (this.multiple || !this.isInteractive || this.disableLookup) return;
      const KEYBOARD_LOOKUP_THRESHOLD = 1000; // milliseconds

      const now = performance.now();

      if (now - this.keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        this.keyboardLookupPrefix = '';
      }

      this.keyboardLookupPrefix += e.key.toLowerCase();
      this.keyboardLookupLastTime = now;
      const index = this.allItems.findIndex(item => {
        const text = (this.getText(item) || '').toString();
        return text.toLowerCase().startsWith(this.keyboardLookupPrefix);
      });
      const item = this.allItems[index];

      if (index !== -1) {
        this.lastItem = Math.max(this.lastItem, index + 5);
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.$nextTick(() => this.$refs.menu.getTiles());
        setTimeout(() => this.setMenuIndex(index));
      }
    },

    onKeyDown(e) {
      if (this.isReadonly && e.keyCode !== _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].tab) return;
      const keyCode = e.keyCode;
      const menu = this.$refs.menu; // If enter, space, open menu

      if ([_util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].enter, _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].space].includes(keyCode)) this.activateMenu();
      this.$emit('keydown', e);
      if (!menu) return; // If menu is active, allow default
      // listIndex change from menu

      if (this.isMenuActive && keyCode !== _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].tab) {
        this.$nextTick(() => {
          menu.changeListIndex(e);
          this.$emit('update:list-index', menu.listIndex);
        });
      } // If menu is not active, up and down can do
      // one of 2 things. If multiple, opens the
      // menu, if not, will cycle through all
      // available options


      if (!this.isMenuActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].up, _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].down].includes(keyCode)) return this.onUpDown(e); // If escape deactivate the menu

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].esc) return this.onEscDown(e); // If tab - select item or close menu

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].tab) return this.onTabDown(e); // If space preventDefault

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].space) return this.onSpaceDown(e);
    },

    onMenuActiveChange(val) {
      // If menu is closing and mulitple
      // or menuIndex is already set
      // skip menu index recalculation
      if (this.multiple && !val || this.getMenuIndex() > -1) return;
      const menu = this.$refs.menu;
      if (!menu || !this.isDirty) return; // When menu opens, set index of first active item

      for (let i = 0; i < menu.tiles.length; i++) {
        if (menu.tiles[i].getAttribute('aria-selected') === 'true') {
          this.setMenuIndex(i);
          break;
        }
      }
    },

    onMouseUp(e) {
      if (this.hasMouseDown && e.which !== 3 && this.isInteractive) {
        // If append inner is present
        // and the target is itself
        // or inside, toggle menu
        if (this.isAppendInner(e.target)) {
          this.$nextTick(() => this.isMenuActive = !this.isMenuActive); // If user is clicking in the container
          // and field is enclosed, activate it
        } else if (this.isEnclosed) {
          this.isMenuActive = true;
        }
      }

      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"].options.methods.onMouseUp.call(this, e);
    },

    onScroll() {
      if (!this.isMenuActive) {
        requestAnimationFrame(() => this.getContent().scrollTop = 0);
      } else {
        if (this.lastItem > this.computedItems.length) return;
        const showMoreItems = this.getContent().scrollHeight - (this.getContent().scrollTop + this.getContent().clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },

    onSpaceDown(e) {
      e.preventDefault();
    },

    onTabDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      const activeTile = menu.activeTile; // An item that is selected by
      // menu-index should toggled

      if (!this.multiple && activeTile && this.isMenuActive) {
        e.preventDefault();
        e.stopPropagation();
        activeTile.click();
      } else {
        // If we make it here,
        // the user has no selected indexes
        // and is probably tabbing out
        this.blur(e);
      }
    },

    onUpDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      e.preventDefault(); // Multiple selects do not cycle their value
      // when pressing up or down, instead activate
      // the menu

      if (this.multiple) return this.activateMenu();
      const keyCode = e.keyCode; // Cycle through available values to achieve
      // select native behavior

      menu.isBooted = true;
      window.requestAnimationFrame(() => {
        menu.getTiles();
        _util_helpers__WEBPACK_IMPORTED_MODULE_11__["keyCodes"].up === keyCode ? menu.prevTile() : menu.nextTile();
        menu.activeTile && menu.activeTile.click();
      });
    },

    selectItem(item) {
      if (!this.multiple) {
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.isMenuActive = false;
      } else {
        const internalValue = (this.internalValue || []).slice();
        const i = this.findExistingIndex(item);
        i !== -1 ? internalValue.splice(i, 1) : internalValue.push(item);
        this.setValue(internalValue.map(i => {
          return this.returnObject ? i : this.getValue(i);
        })); // When selecting multiple
        // adjust menu after each
        // selection

        this.$nextTick(() => {
          this.$refs.menu && this.$refs.menu.updateDimensions();
        }); // We only need to reset list index for multiple
        // to keep highlight when an item is toggled
        // on and off

        if (!this.multiple) return;
        const listIndex = this.getMenuIndex();
        this.setMenuIndex(-1); // There is no item to re-highlight
        // when selections are hidden

        if (this.hideSelected) return;
        this.$nextTick(() => this.setMenuIndex(listIndex));
      }
    },

    setMenuIndex(index) {
      this.$refs.menu && (this.$refs.menu.listIndex = index);
    },

    setSelectedItems() {
      const selectedItems = [];
      const values = !this.multiple || !Array.isArray(this.internalValue) ? [this.internalValue] : this.internalValue;

      for (const value of values) {
        const index = this.allItems.findIndex(v => this.valueComparator(this.getValue(v), this.getValue(value)));

        if (index > -1) {
          selectedItems.push(this.allItems[index]);
        }
      }

      this.selectedItems = selectedItems;
    },

    setValue(value) {
      const oldValue = this.internalValue;
      this.internalValue = value;
      value !== oldValue && this.$emit('change', value);
    },

    isAppendInner(target) {
      // return true if append inner is present
      // and the target is itself or inside
      const appendInner = this.$refs['append-inner'];
      return appendInner && (appendInner === target || appendInner.contains(target));
    }

  }
}));
//# sourceMappingURL=VSelect.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/VSelectList.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/VSelectList.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VCheckbox_VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VCheckbox/VSimpleCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js");
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Components



 // Directives

 // Mixins


 // Helpers

 // Types


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__["default"]).extend({
  name: 'v-select-list',
  // https://github.com/vuejs/vue/issues/6872
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    action: Boolean,
    dense: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    noDataText: String,
    noFilter: Boolean,
    searchInput: null,
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    parsedItems() {
      return this.selectedItems.map(item => this.getValue(item));
    },

    tileActiveClass() {
      return Object.keys(this.setTextColor(this.color).class || {}).join(' ');
    },

    staticNoDataTile() {
      const tile = {
        attrs: {
          role: undefined
        },
        on: {
          mousedown: e => e.preventDefault()
        }
      };
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItem"], tile, [this.genTileContent(this.noDataText)]);
    }

  },
  methods: {
    genAction(item, inputValue) {
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItemAction"], [this.$createElement(_VCheckbox_VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_0__["default"], {
        props: {
          color: this.color,
          value: inputValue
        },
        on: {
          input: () => this.$emit('select', item)
        }
      })]);
    },

    genDivider(props) {
      return this.$createElement(_VDivider__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props
      });
    },

    genFilteredText(text) {
      text = text || '';
      if (!this.searchInput || this.noFilter) return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["escapeHTML"])(text);
      const {
        start,
        middle,
        end
      } = this.getMaskedCharacters(text);
      return `${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["escapeHTML"])(start)}${this.genHighlight(middle)}${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["escapeHTML"])(end)}`;
    },

    genHeader(props) {
      return this.$createElement(_VSubheader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props
      }, props.header);
    },

    genHighlight(text) {
      return `<span class="v-list-item__mask">${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["escapeHTML"])(text)}</span>`;
    },

    getMaskedCharacters(text) {
      const searchInput = (this.searchInput || '').toString().toLocaleLowerCase();
      const index = text.toLocaleLowerCase().indexOf(searchInput);
      if (index < 0) return {
        start: '',
        middle: text,
        end: ''
      };
      const start = text.slice(0, index);
      const middle = text.slice(index, index + searchInput.length);
      const end = text.slice(index + searchInput.length);
      return {
        start,
        middle,
        end
      };
    },

    genTile({
      item,
      index,
      disabled = null,
      value = false
    }) {
      if (!value) value = this.hasItem(item);

      if (item === Object(item)) {
        disabled = disabled !== null ? disabled : this.getDisabled(item);
      }

      const tile = {
        attrs: {
          // Default behavior in list does not
          // contain aria-selected by default
          'aria-selected': String(value),
          id: `list-item-${this._uid}-${index}`,
          role: 'option'
        },
        on: {
          mousedown: e => {
            // Prevent onBlur from being called
            e.preventDefault();
          },
          click: () => disabled || this.$emit('select', item)
        },
        props: {
          activeClass: this.tileActiveClass,
          disabled,
          ripple: true,
          inputValue: value
        }
      };

      if (!this.$scopedSlots.item) {
        return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItem"], tile, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(item, value) : null, this.genTileContent(item, index)]);
      }

      const parent = this;
      const scopedSlot = this.$scopedSlots.item({
        parent,
        item,
        attrs: { ...tile.attrs,
          ...tile.props
        },
        on: tile.on
      });
      return this.needsTile(scopedSlot) ? this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItem"], tile, scopedSlot) : scopedSlot;
    },

    genTileContent(item, index = 0) {
      const innerHTML = this.genFilteredText(this.getText(item));
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItemContent"], [this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VListItemTitle"], {
        domProps: {
          innerHTML
        }
      })]);
    },

    hasItem(item) {
      return this.parsedItems.indexOf(this.getValue(item)) > -1;
    },

    needsTile(slot) {
      return slot.length !== 1 || slot[0].componentOptions == null || slot[0].componentOptions.Ctor.options.name !== 'v-list-item';
    },

    getDisabled(item) {
      return Boolean(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getPropertyFromItem"])(item, this.itemDisabled, false));
    },

    getText(item) {
      return String(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getPropertyFromItem"])(item, this.itemText, item));
    },

    getValue(item) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getPropertyFromItem"])(item, this.itemValue, this.getText(item));
    }

  },

  render() {
    const children = [];
    const itemsLength = this.items.length;

    for (let index = 0; index < itemsLength; index++) {
      const item = this.items[index];
      if (this.hideSelected && this.hasItem(item)) continue;
      if (item == null) children.push(this.genTile({
        item,
        index
      }));else if (item.header) children.push(this.genHeader(item));else if (item.divider) children.push(this.genDivider(item));else children.push(this.genTile({
        item,
        index
      }));
    }

    children.length || children.push(this.$slots['no-data'] || this.staticNoDataTile);
    this.$slots['prepend-item'] && children.unshift(this.$slots['prepend-item']);
    this.$slots['append-item'] && children.push(this.$slots['append-item']);
    return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_3__["VList"], {
      staticClass: 'v-select-list',
      class: this.themeClasses,
      attrs: {
        role: 'listbox',
        tabindex: -1
      },
      props: {
        dense: this.dense
      }
    }, children);
  }

}));
//# sourceMappingURL=VSelectList.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/index.js ***!
  \**************************************************************/
/*! exports provided: VSelect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSelect", function() { return _VSelect__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSelect__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSubheader/VSubheader.sass */ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass");
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins



/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__["default"]
/* @vue/component */
).extend({
  name: 'v-subheader',
  props: {
    inset: Boolean
  },

  render(h) {
    return h('div', {
      staticClass: 'v-subheader',
      class: {
        'v-subheader--inset': this.inset,
        ...this.themeClasses
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VSubheader.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/index.js ***!
  \*****************************************************************/
/*! exports provided: VSubheader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSubheader", function() { return _VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
// Mixins

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'v-theme-provider',
  props: {
    root: Boolean
  },
  computed: {
    isDark() {
      return this.root ? this.rootIsDark : _mixins_themeable__WEBPACK_IMPORTED_MODULE_0__["default"].options.computed.isDark.call(this);
    }

  },

  render() {
    /* istanbul ignore next */
    return this.$slots.default && this.$slots.default.find(node => !node.isComment && node.text !== ' ');
  }

}));
//# sourceMappingURL=VThemeProvider.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VThemeProvider/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VThemeProvider/index.js ***!
  \*********************************************************************/
/*! exports provided: VThemeProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VThemeProvider */ "./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VThemeProvider", function() { return _VThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/directives/click-outside/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/directives/click-outside/index.js ***!
  \********************************************************************/
/*! exports provided: ClickOutside, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return ClickOutside; });
function defaultConditional() {
  return true;
}

function directive(e, el, binding) {
  const handler = typeof binding.value === 'function' ? binding.value : binding.value.handler;
  const isActive = typeof binding.value === 'object' && binding.value.closeConditional || defaultConditional; // The include element callbacks below can be expensive
  // so we should avoid calling them when we're not active.
  // Explicitly check for false to allow fallback compatibility
  // with non-toggleable components

  if (!e || isActive(e) === false) return; // If click was triggered programmaticaly (domEl.click()) then
  // it shouldn't be treated as click-outside
  // Chrome/Firefox support isTrusted property
  // IE/Edge support pointerType property (empty if not triggered
  // by pointing device)

  if ('isTrusted' in e && !e.isTrusted || 'pointerType' in e && !e.pointerType) return; // Check if additional elements were passed to be included in check
  // (click must be outside all included elements, if any)

  const elements = (typeof binding.value === 'object' && binding.value.include || (() => []))(); // Add the root element for the component this directive was defined on


  elements.push(el); // Check if it's a click outside our elements, and then if our callback returns true.
  // Non-toggleable components should take action in their callback and return falsy.
  // Toggleable can return true if it wants to deactivate.
  // Note that, because we're in the capture phase, this callback will occur before
  // the bubbling click event on any outside elements.

  !elements.some(el => el.contains(e.target)) && setTimeout(() => {
    isActive(e) && handler && handler(e);
  }, 0);
}

const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  inserted(el, binding) {
    const onClick = e => directive(e, el, binding); // iOS does not recognize click events on document
    // or body, this is the entire purpose of the v-app
    // component and [data-app], stop removing this


    const app = document.querySelector('[data-app]') || document.body; // This is only for unit tests

    app.addEventListener('click', onClick, true);
    el._clickOutside = onClick;
  },

  unbind(el) {
    if (!el._clickOutside) return;
    const app = document.querySelector('[data-app]') || document.body; // This is only for unit tests

    app && app.removeEventListener('click', el._clickOutside, true);
    delete el._clickOutside;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (ClickOutside);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/activatable/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/activatable/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delayable */ "./node_modules/vuetify/lib/mixins/delayable/index.js");
/* harmony import */ var _toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Mixins

 // Utilities




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_delayable__WEBPACK_IMPORTED_MODULE_0__["default"], _toggleable__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend({
  name: 'activatable',
  props: {
    activator: {
      default: null,
      validator: val => {
        return ['string', 'object'].includes(typeof val);
      }
    },
    disabled: Boolean,
    internalActivator: Boolean,
    openOnHover: Boolean,
    openOnFocus: Boolean
  },
  data: () => ({
    // Do not use this directly, call getActivator() instead
    activatorElement: null,
    activatorNode: [],
    events: ['click', 'mouseenter', 'mouseleave', 'focus'],
    listeners: {}
  }),
  watch: {
    activator: 'resetActivator',
    openOnFocus: 'resetActivator',
    openOnHover: 'resetActivator'
  },

  mounted() {
    const slotType = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlotType"])(this, 'activator', true);

    if (slotType && ['v-slot', 'normal'].includes(slotType)) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_4__["consoleError"])(`The activator slot must be bound, try '<template v-slot:activator="{ on }"><v-btn v-on="on">'`, this);
    }

    this.addActivatorEvents();
  },

  beforeDestroy() {
    this.removeActivatorEvents();
  },

  methods: {
    addActivatorEvents() {
      if (!this.activator || this.disabled || !this.getActivator()) return;
      this.listeners = this.genActivatorListeners();
      const keys = Object.keys(this.listeners);

      for (const key of keys) {
        this.getActivator().addEventListener(key, this.listeners[key]);
      }
    },

    genActivator() {
      const node = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this, 'activator', Object.assign(this.getValueProxy(), {
        on: this.genActivatorListeners(),
        attrs: this.genActivatorAttributes()
      })) || [];
      this.activatorNode = node;
      return node;
    },

    genActivatorAttributes() {
      return {
        role: 'button',
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },

    genActivatorListeners() {
      if (this.disabled) return {};
      const listeners = {};

      if (this.openOnHover) {
        listeners.mouseenter = e => {
          this.getActivator(e);
          this.runDelay('open');
        };

        listeners.mouseleave = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      } else {
        listeners.click = e => {
          const activator = this.getActivator(e);
          if (activator) activator.focus();
          e.stopPropagation();
          this.isActive = !this.isActive;
        };
      }

      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          e.stopPropagation();
          this.isActive = !this.isActive;
        };
      }

      return listeners;
    },

    getActivator(e) {
      // If we've already fetched the activator, re-use
      if (this.activatorElement) return this.activatorElement;
      let activator = null;

      if (this.activator) {
        const target = this.internalActivator ? this.$el : document;

        if (typeof this.activator === 'string') {
          // Selector
          activator = target.querySelector(this.activator);
        } else if (this.activator.$el) {
          // Component (ref)
          activator = this.activator.$el;
        } else {
          // HTMLElement | Element
          activator = this.activator;
        }
      } else if (this.activatorNode.length === 1 || this.activatorNode.length && !e) {
        // Use the contents of the activator slot
        // There's either only one element in it or we
        // don't have a click event to use as a last resort
        const vm = this.activatorNode[0].componentInstance;

        if (vm && vm.$options.mixins && //                         Activatable is indirectly used via Menuable
        vm.$options.mixins.some(m => m.options && ['activatable', 'menuable'].includes(m.options.name))) {
          // Activator is actually another activatible component, use its activator (#8846)
          activator = vm.getActivator();
        } else {
          activator = this.activatorNode[0].elm;
        }
      } else if (e) {
        // Activated by a click or focus event
        activator = e.currentTarget || e.target;
      }

      this.activatorElement = activator;
      return this.activatorElement;
    },

    getContentSlot() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["getSlot"])(this, 'default', this.getValueProxy(), true);
    },

    getValueProxy() {
      const self = this;
      return {
        get value() {
          return self.isActive;
        },

        set value(isActive) {
          self.isActive = isActive;
        }

      };
    },

    removeActivatorEvents() {
      if (!this.activator || !this.activatorElement) return;
      const keys = Object.keys(this.listeners);

      for (const key of keys) {
        this.activatorElement.removeEventListener(key, this.listeners[key]);
      }

      this.listeners = {};
    },

    resetActivator() {
      this.removeActivatorEvents();
      this.activatorElement = null;
      this.getActivator();
      this.addActivatorEvents();
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/comparable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/comparable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: _util_helpers__WEBPACK_IMPORTED_MODULE_1__["deepEqual"]
    }
  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/delayable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/delayable/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/**
 * Delayable
 *
 * @mixin
 *
 * Changes the open or close delay time for elements
 */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend().extend({
  name: 'delayable',
  props: {
    openDelay: {
      type: [Number, String],
      default: 0
    },
    closeDelay: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    openTimeout: undefined,
    closeTimeout: undefined
  }),
  methods: {
    /**
     * Clear any pending delay timers from executing
     */
    clearDelay() {
      clearTimeout(this.openTimeout);
      clearTimeout(this.closeTimeout);
    },

    /**
     * Runs callback after a specified delay
     */
    runDelay(type, cb) {
      this.clearDelay();
      const delay = parseInt(this[`${type}Delay`], 10);
      this[`${type}Timeout`] = setTimeout(cb || (() => {
        this.isActive = {
          open: true,
          close: false
        }[type];
      }), delay);
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/dependent/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/dependent/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");


function searchChildren(children) {
  const results = [];

  for (let index = 0; index < children.length; index++) {
    const child = children[index];

    if (child.isActive && child.isDependent) {
      results.push(child);
    } else {
      results.push(...searchChildren(child.$children));
    }
  }

  return results;
}
/* @vue/component */


/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])().extend({
  name: 'dependent',

  data() {
    return {
      closeDependents: true,
      isActive: false,
      isDependent: true
    };
  },

  watch: {
    isActive(val) {
      if (val) return;
      const openDependents = this.getOpenDependents();

      for (let index = 0; index < openDependents.length; index++) {
        openDependents[index].isActive = false;
      }
    }

  },
  methods: {
    getOpenDependents() {
      if (this.closeDependents) return searchChildren(this.$children);
      return [];
    },

    getOpenDependentElements() {
      const result = [];
      const openDependents = this.getOpenDependents();

      for (let index = 0; index < openDependents.length; index++) {
        result.push(...openDependents[index].getClickableDependentElements());
      }

      return result;
    },

    getClickableDependentElements() {
      const result = [this.$el];
      if (this.$refs.content) result.push(this.$refs.content);
      if (this.overlay) result.push(this.overlay.$el);
      result.push(...this.getOpenDependentElements());
      return result;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/detachable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/detachable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootable */ "./node_modules/vuetify/lib/mixins/bootable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Mixins
 // Utilities





function validateAttachTarget(val) {
  const type = typeof val;
  if (type === 'boolean' || type === 'string') return true;
  return val.nodeType === Node.ELEMENT_NODE;
}
/* @vue/component */


/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_bootable__WEBPACK_IMPORTED_MODULE_0__["default"]).extend({
  name: 'detachable',
  props: {
    attach: {
      default: false,
      validator: validateAttachTarget
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    activatorNode: null,
    hasDetached: false
  }),
  watch: {
    attach() {
      this.hasDetached = false;
      this.initDetach();
    },

    hasContent() {
      this.$nextTick(this.initDetach);
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      if (this.activatorNode) {
        const activator = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
        activator.forEach(node => {
          if (!node.elm) return;
          if (!this.$el.parentNode) return;
          const target = this.$el === this.$el.parentNode.firstChild ? this.$el : this.$el.nextSibling;
          this.$el.parentNode.insertBefore(node.elm, target);
        });
      }
    });
  },

  mounted() {
    this.hasContent && this.initDetach();
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    // IE11 Fix
    try {
      if (this.$refs.content && this.$refs.content.parentNode) {
        this.$refs.content.parentNode.removeChild(this.$refs.content);
      }

      if (this.activatorNode) {
        const activator = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
        activator.forEach(node => {
          node.elm && node.elm.parentNode && node.elm.parentNode.removeChild(node.elm);
        });
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    getScopeIdAttrs() {
      const scopeId = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getObjectValueByPath"])(this.$vnode, 'context.$options._scopeId');
      return scopeId && {
        [scopeId]: ''
      };
    },

    initDetach() {
      if (this._isDestroyed || !this.$refs.content || this.hasDetached || // Leave menu in place if attached
      // and dev has not changed target
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) return;
      let target;

      if (this.attach === false) {
        // Default, detach to app
        target = document.querySelector('[data-app]');
      } else if (typeof this.attach === 'string') {
        // CSS selector
        target = document.querySelector(this.attach);
      } else {
        // DOM Element
        target = this.attach;
      }

      if (!target) {
        Object(_util_console__WEBPACK_IMPORTED_MODULE_3__["consoleWarn"])(`Unable to locate target ${this.attach || '[data-app]'}`, this);
        return;
      }

      target.appendChild(this.$refs.content);
      this.hasDetached = true;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/filterable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/filterable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'filterable',
  props: {
    noDataText: {
      type: String,
      default: '$vuetify.noDataText'
    }
  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/menuable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/menuable/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _stackable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stackable */ "./node_modules/vuetify/lib/mixins/stackable/index.js");
/* harmony import */ var _activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activatable */ "./node_modules/vuetify/lib/mixins/activatable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Mixins


 // Utilities


 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(_stackable__WEBPACK_IMPORTED_MODULE_1__["default"], _positionable__WEBPACK_IMPORTED_MODULE_0__["default"], _activatable__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend().extend({
  name: 'menuable',
  props: {
    allowOverflow: Boolean,
    light: Boolean,
    dark: Boolean,
    maxWidth: {
      type: [Number, String],
      default: 'auto'
    },
    minWidth: [Number, String],
    nudgeBottom: {
      type: [Number, String],
      default: 0
    },
    nudgeLeft: {
      type: [Number, String],
      default: 0
    },
    nudgeRight: {
      type: [Number, String],
      default: 0
    },
    nudgeTop: {
      type: [Number, String],
      default: 0
    },
    nudgeWidth: {
      type: [Number, String],
      default: 0
    },
    offsetOverflow: Boolean,
    openOnClick: Boolean,
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    absoluteX: 0,
    absoluteY: 0,
    activatedBy: null,
    activatorFixed: false,
    dimensions: {
      activator: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0,
        offsetLeft: 0
      },
      content: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0
      }
    },
    hasJustFocused: false,
    hasWindow: false,
    inputActivator: false,
    isContentActive: false,
    pageWidth: 0,
    pageYOffset: 0,
    stackClass: 'v-menu__content--active',
    stackMinZIndex: 6
  }),
  computed: {
    computedLeft() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      const activatorLeft = (this.attach !== false ? a.offsetLeft : a.left) || 0;
      const minWidth = Math.max(a.width, c.width);
      let left = 0;
      left += this.left ? activatorLeft - (minWidth - a.width) : activatorLeft;

      if (this.offsetX) {
        const maxWidth = isNaN(Number(this.maxWidth)) ? a.width : Math.min(a.width, Number(this.maxWidth));
        left += this.left ? -maxWidth : a.width;
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return left;
    },

    computedTop() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      let top = 0;
      if (this.top) top += a.height - c.height;
      if (this.attach !== false) top += a.offsetTop;else top += a.top + this.pageYOffset;
      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return top;
    },

    hasActivator() {
      return !!this.$slots.activator || !!this.$scopedSlots.activator || !!this.activator || !!this.inputActivator;
    }

  },
  watch: {
    disabled(val) {
      val && this.callDeactivate();
    },

    isActive(val) {
      if (this.disabled) return;
      val ? this.callActivate() : this.callDeactivate();
    },

    positionX: 'updateDimensions',
    positionY: 'updateDimensions'
  },

  beforeMount() {
    this.hasWindow = typeof window !== 'undefined';
  },

  methods: {
    absolutePosition() {
      return {
        offsetTop: 0,
        offsetLeft: 0,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },

    activate() {},

    calcLeft(menuWidth) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.attach !== false ? this.computedLeft : this.calcXOverflow(this.computedLeft, menuWidth));
    },

    calcTop() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["convertToUnit"])(this.attach !== false ? this.computedTop : this.calcYOverflow(this.computedTop));
    },

    calcXOverflow(left, menuWidth) {
      const xOverflow = left + menuWidth - this.pageWidth + 12;

      if ((!this.left || this.right) && xOverflow > 0) {
        left = Math.max(left - xOverflow, 0);
      } else {
        left = Math.max(left, 12);
      }

      return left + this.getOffsetLeft();
    },

    calcYOverflow(top) {
      const documentHeight = this.getInnerHeight();
      const toTop = this.pageYOffset + documentHeight;
      const activator = this.dimensions.activator;
      const contentHeight = this.dimensions.content.height;
      const totalHeight = top + contentHeight;
      const isOverflowing = toTop < totalHeight; // If overflowing bottom and offset
      // TODO: set 'bottom' position instead of 'top'

      if (isOverflowing && this.offsetOverflow && // If we don't have enough room to offset
      // the overflow, don't offset
      activator.top > contentHeight) {
        top = this.pageYOffset + (activator.top - contentHeight); // If overflowing bottom
      } else if (isOverflowing && !this.allowOverflow) {
        top = toTop - contentHeight - 12; // If overflowing top
      } else if (top < this.pageYOffset && !this.allowOverflow) {
        top = this.pageYOffset + 12;
      }

      return top < 12 ? 12 : top;
    },

    callActivate() {
      if (!this.hasWindow) return;
      this.activate();
    },

    callDeactivate() {
      this.isContentActive = false;
      this.deactivate();
    },

    checkForPageYOffset() {
      if (this.hasWindow) {
        this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop();
      }
    },

    checkActivatorFixed() {
      if (this.attach !== false) return;
      let el = this.getActivator();

      while (el) {
        if (window.getComputedStyle(el).position === 'fixed') {
          this.activatorFixed = true;
          return;
        }

        el = el.offsetParent;
      }

      this.activatorFixed = false;
    },

    deactivate() {},

    genActivatorListeners() {
      const listeners = _activatable__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genActivatorListeners.call(this);
      const onClick = listeners.click;

      listeners.click = e => {
        if (this.openOnClick) {
          onClick && onClick(e);
        }

        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY;
      };

      return listeners;
    },

    getInnerHeight() {
      if (!this.hasWindow) return 0;
      return window.innerHeight || document.documentElement.clientHeight;
    },

    getOffsetLeft() {
      if (!this.hasWindow) return 0;
      return window.pageXOffset || document.documentElement.scrollLeft;
    },

    getOffsetTop() {
      if (!this.hasWindow) return 0;
      return window.pageYOffset || document.documentElement.scrollTop;
    },

    getRoundedBoundedClientRect(el) {
      const rect = el.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        bottom: Math.round(rect.bottom),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    },

    measure(el) {
      if (!el || !this.hasWindow) return null;
      const rect = this.getRoundedBoundedClientRect(el); // Account for activator margin

      if (this.attach !== false) {
        const style = window.getComputedStyle(el);
        rect.left = parseInt(style.marginLeft);
        rect.top = parseInt(style.marginTop);
      }

      return rect;
    },

    sneakPeek(cb) {
      requestAnimationFrame(() => {
        const el = this.$refs.content;

        if (!el || el.style.display !== 'none') {
          cb();
          return;
        }

        el.style.display = 'inline-block';
        cb();
        el.style.display = 'none';
      });
    },

    startTransition() {
      return new Promise(resolve => requestAnimationFrame(() => {
        this.isContentActive = this.hasJustFocused = this.isActive;
        resolve();
      }));
    },

    updateDimensions() {
      this.hasWindow = typeof window !== 'undefined';
      this.checkActivatorFixed();
      this.checkForPageYOffset();
      this.pageWidth = document.documentElement.clientWidth;
      const dimensions = {
        activator: { ...this.dimensions.activator
        },
        content: { ...this.dimensions.content
        }
      }; // Activator should already be shown

      if (!this.hasActivator || this.absolute) {
        dimensions.activator = this.absolutePosition();
      } else {
        const activator = this.getActivator();
        if (!activator) return;
        dimensions.activator = this.measure(activator);
        dimensions.activator.offsetLeft = activator.offsetLeft;

        if (this.attach !== false) {
          // account for css padding causing things to not line up
          // this is mostly for v-autocomplete, hopefully it won't break anything
          dimensions.activator.offsetTop = activator.offsetTop;
        } else {
          dimensions.activator.offsetTop = 0;
        }
      } // Display and hide to get dimensions


      this.sneakPeek(() => {
        this.$refs.content && (dimensions.content = this.measure(this.$refs.content));
        this.dimensions = dimensions;
      });
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/returnable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/returnable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'returnable',
  props: {
    returnValue: null
  },
  data: () => ({
    isActive: false,
    originalValue: null
  }),
  watch: {
    isActive(val) {
      if (val) {
        this.originalValue = this.returnValue;
      } else {
        this.$emit('update:return-value', this.originalValue);
      }
    }

  },
  methods: {
    save(value) {
      this.originalValue = value;
      setTimeout(() => {
        this.isActive = false;
      });
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/stackable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/stackable/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend().extend({
  name: 'stackable',

  data() {
    return {
      stackElement: null,
      stackExclude: null,
      stackMinZIndex: 0,
      isActive: false
    };
  },

  computed: {
    activeZIndex() {
      if (typeof window === 'undefined') return 0;
      const content = this.stackElement || this.$refs.content; // Return current zindex if not active

      const index = !this.isActive ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getZIndex"])(content) : this.getMaxZIndex(this.stackExclude || [content]) + 2;
      if (index == null) return index; // Return max current z-index (excluding self) + 2
      // (2 to leave room for an overlay below, if needed)

      return parseInt(index);
    }

  },
  methods: {
    getMaxZIndex(exclude = []) {
      const base = this.$el; // Start with lowest allowed z-index or z-index of
      // base component's element, whichever is greater

      const zis = [this.stackMinZIndex, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getZIndex"])(base)]; // Convert the NodeList to an array to
      // prevent an Edge bug with Symbol.iterator
      // https://github.com/vuetifyjs/vuetify/issues/2146

      const activeElements = [...document.getElementsByClassName('v-menu__content--active'), ...document.getElementsByClassName('v-dialog__content--active')]; // Get z-index for all active dialogs

      for (let index = 0; index < activeElements.length; index++) {
        if (!exclude.includes(activeElements[index])) {
          zis.push(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getZIndex"])(activeElements[index]));
        }
      }

      return Math.max(...zis);
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VAvatar/VAvatar.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VAvatar/VAvatar.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass":
/*!****************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ }),

/***/ "./node_modules/vuetify/src/components/VList/VList.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VList/VList.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VList/VListGroup.sass":
/*!*******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VList/VListGroup.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VList/VListItem.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VList/VListItem.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VList/VListItemGroup.sass":
/*!***********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VList/VListItemGroup.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VMenu/VMenu.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VMenu/VMenu.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSelect/VSelect.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSelect/VSelect.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSubheader/VSubheader.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WQXZhdGFyL1ZBdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkF2YXRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDaGlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZGaWxlSW5wdXQvVkZpbGVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WRmlsZUlucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QvVkxpc3RJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0SXRlbUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdC9WTGlzdEl0ZW1BdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QvVkxpc3RJdGVtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QvVkxpc3RJdGVtSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WTWVudS9WTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WU2VsZWN0L1ZTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdWJoZWFkZXIvVlN1YmhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvY29tcG9uZW50cy9WU3ViaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUaGVtZVByb3ZpZGVyL1ZUaGVtZVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUaGVtZVByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL21peGlucy9hY3RpdmF0YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvbWl4aW5zL2NvbXBhcmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL21peGlucy9kZWxheWFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL21peGlucy9kZXBlbmRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvbGliL21peGlucy9kZXRhY2hhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9taXhpbnMvZmlsdGVyYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvbWl4aW5zL21lbnVhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L2xpYi9taXhpbnMvcmV0dXJuYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9saWIvbWl4aW5zL3N0YWNrYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXZhdGFyL1ZBdmF0YXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoaXAvVkNoaXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WRmlsZUlucHV0L1ZGaWxlSW5wdXQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGlzdC9WTGlzdC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0R3JvdXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGlzdC9WTGlzdEl0ZW0uc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGlzdC9WTGlzdEl0ZW1Hcm91cC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZW51L1ZNZW51LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlN1YmhlYWRlci9WU3ViaGVhZGVyLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7O0FBRVA7QUFDRTtBQUNGOztBQUVJO0FBQ1o7QUFDeEIsMkhBQU0sQ0FBQyx5REFBUyxFQUFFLDBEQUFVLEVBQUUseURBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixtRUFBYTtBQUM3QixrQkFBa0IsbUVBQWE7QUFDL0IsZUFBZSxtRUFBYTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7QUFDSCxpQzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFzQjtBQUN5QjtBQUMvQzs7QUFFZSwwR0FBRztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsOERBQThEOztBQUU5RCxxQ0FBcUMsK0RBQVM7QUFDOUMsc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUEsd0NBQXdDLCtEQUFTLFFBQVE7QUFDekQ7QUFDQTs7QUFFQSw4SkFBOEo7O0FBRTlKLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQSxtQkFBbUIsK0RBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7QUFDSCxpQzs7Ozs7Ozs7Ozs7QUNuREEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBdmF0YXIvVkF2YXRhci5zYXNzXCI7IC8vIE1peGluc1xuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnO1xuaW1wb3J0IE1lYXN1cmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lYXN1cmFibGUnO1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucyc7XG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBNZWFzdXJhYmxlLCBSb3VuZGFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWF2YXRhcicsXG4gIHByb3BzOiB7XG4gICAgbGVmdDogQm9vbGVhbixcbiAgICByaWdodDogQm9vbGVhbixcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNDhcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWF2YXRhci0tbGVmdCc6IHRoaXMubGVmdCxcbiAgICAgICAgJ3YtYXZhdGFyLS1yaWdodCc6IHRoaXMucmlnaHQsXG4gICAgICAgIC4uLnRoaXMucm91bmRlZENsYXNzZXNcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLnNpemUpLFxuICAgICAgICBtaW5XaWR0aDogY29udmVydFRvVW5pdCh0aGlzLnNpemUpLFxuICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLnNpemUpLFxuICAgICAgICAuLi50aGlzLm1lYXN1cmFibGVTdHlsZXNcbiAgICAgIH07XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyKGgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWF2YXRhcicsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVyc1xuICAgIH07XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCB0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZBdmF0YXIuanMubWFwIiwiaW1wb3J0IFZBdmF0YXIgZnJvbSAnLi9WQXZhdGFyJztcbmV4cG9ydCB7IFZBdmF0YXIgfTtcbmV4cG9ydCBkZWZhdWx0IFZBdmF0YXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94LnNhc3NcIjtcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICcuLi9WSWNvbic7IC8vIE1peGluc1xuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnO1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnO1xuaW1wb3J0IHsgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNpbXBsZS1jaGVja2JveCcsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGVcbiAgfSxcbiAgcHJvcHM6IHsgLi4uQ29sb3JhYmxlLm9wdGlvbnMucHJvcHMsXG4gICAgLi4uVGhlbWVhYmxlLm9wdGlvbnMucHJvcHMsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgdmFsdWU6IEJvb2xlYW4sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveEluZGV0ZXJtaW5hdGUnXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbidcbiAgICB9LFxuICAgIG9mZkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPZmYnXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcihoLCB7XG4gICAgcHJvcHMsXG4gICAgZGF0YSxcbiAgICBsaXN0ZW5lcnNcbiAgfSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICBpZiAocHJvcHMucmlwcGxlICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgY29uc3QgcmlwcGxlID0gaCgnZGl2JywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0LS1zZWxlY3Rpb24tY29udHJvbHNfX3JpcHBsZScsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3JpcHBsZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0pKTtcbiAgICAgIGNoaWxkcmVuLnB1c2gocmlwcGxlKTtcbiAgICB9XG5cbiAgICBsZXQgaWNvbiA9IHByb3BzLm9mZkljb247XG4gICAgaWYgKHByb3BzLmluZGV0ZXJtaW5hdGUpIGljb24gPSBwcm9wcy5pbmRldGVybWluYXRlSWNvbjtlbHNlIGlmIChwcm9wcy52YWx1ZSkgaWNvbiA9IHByb3BzLm9uSWNvbjtcbiAgICBjaGlsZHJlbi5wdXNoKGgoVkljb24sIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLnZhbHVlICYmIHByb3BzLmNvbG9yLCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIGRhcms6IHByb3BzLmRhcmssXG4gICAgICAgIGxpZ2h0OiBwcm9wcy5saWdodFxuICAgICAgfVxuICAgIH0pLCBpY29uKSk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICd2LXNpbXBsZS1jaGVja2JveCc6IHRydWUsXG4gICAgICAndi1zaW1wbGUtY2hlY2tib3gtLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuICAgIHJldHVybiBoKCdkaXYnLCBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIGlmIChkYXRhLm9uICYmIGRhdGEub24uaW5wdXQgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB3cmFwSW5BcnJheShkYXRhLm9uLmlucHV0KS5mb3JFYWNoKGYgPT4gZighcHJvcHMudmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgY2hpbGRyZW4pO1xuICB9XG5cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VlNpbXBsZUNoZWNrYm94LmpzLm1hcCIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoaXAvVkNoaXAuc2Fzc1wiO1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucyc7IC8vIENvbXBvbmVudHNcblxuaW1wb3J0IHsgVkV4cGFuZFhUcmFuc2l0aW9uIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJzsgLy8gTWl4aW5zXG5cbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSc7XG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJztcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSc7XG5pbXBvcnQgeyBmYWN0b3J5IGFzIFRvZ2dsZWFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnO1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSc7XG5pbXBvcnQgU2l6ZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3NpemVhYmxlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUsIFNpemVhYmxlLCBSb3V0YWJsZSwgVGhlbWVhYmxlLCBHcm91cGFibGVGYWN0b3J5KCdjaGlwR3JvdXAnKSwgVG9nZ2xlYWJsZUZhY3RvcnkoJ2lucHV0VmFsdWUnKSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY2hpcCcsXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcblxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaXBHcm91cCkgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlwR3JvdXAuYWN0aXZlQ2xhc3M7XG4gICAgICB9XG5cbiAgICB9LFxuICAgIGNsb3NlOiBCb29sZWFuLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkZWxldGUnXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBkcmFnZ2FibGU6IEJvb2xlYW4sXG4gICAgZmlsdGVyOiBCb29sZWFuLFxuICAgIGZpbHRlckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY29tcGxldGUnXG4gICAgfSxcbiAgICBsYWJlbDogQm9vbGVhbixcbiAgICBsaW5rOiBCb29sZWFuLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIHBpbGw6IEJvb2xlYW4sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3BhbidcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtY2hpcC0tYWN0aXZlJ1xuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2hpcCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jaGlwLS1jbGlja2FibGUnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jaGlwLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNoaXAtLWRyYWdnYWJsZSc6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAndi1jaGlwLS1sYWJlbCc6IHRoaXMubGFiZWwsXG4gICAgICAgICd2LWNoaXAtLWxpbmsnOiB0aGlzLmlzTGluayxcbiAgICAgICAgJ3YtY2hpcC0tbm8tY29sb3InOiAhdGhpcy5jb2xvcixcbiAgICAgICAgJ3YtY2hpcC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi1jaGlwLS1waWxsJzogdGhpcy5waWxsLFxuICAgICAgICAndi1jaGlwLS1yZW1vdmFibGUnOiB0aGlzLmhhc0Nsb3NlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5zaXplYWJsZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBoYXNDbG9zZSgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuY2xvc2UpO1xuICAgIH0sXG5cbiAgICBpc0NsaWNrYWJsZSgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNDbGlja2FibGUuY2FsbCh0aGlzKSB8fCB0aGlzLmNoaXBHcm91cCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICBjb25zdCBicmVha2luZ1Byb3BzID0gW1snb3V0bGluZScsICdvdXRsaW5lZCddLCBbJ3NlbGVjdGVkJywgJ2lucHV0LXZhbHVlJ10sIFsndmFsdWUnLCAnYWN0aXZlJ10sIFsnQGlucHV0JywgJ0BhY3RpdmUuc3luYyddXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKTtcbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2soZSkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgIHRoaXMuY2hpcEdyb3VwICYmIHRoaXMudG9nZ2xlKCk7XG4gICAgfSxcblxuICAgIGdlbkZpbHRlcigpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19maWx0ZXInLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBsZWZ0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLmZpbHRlckljb24pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkV4cGFuZFhUcmFuc2l0aW9uLCBjaGlsZHJlbik7XG4gICAgfSxcblxuICAgIGdlbkNsb3NlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXBfX2Nsb3NlJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICBzaXplOiAxOFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjbG9zZScpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuY2xvc2VJY29uKTtcbiAgICB9LFxuXG4gICAgZ2VuQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY29udGVudCdcbiAgICAgIH0sIFt0aGlzLmZpbHRlciAmJiB0aGlzLmdlbkZpbHRlcigpLCB0aGlzLiRzbG90cy5kZWZhdWx0LCB0aGlzLmhhc0Nsb3NlICYmIHRoaXMuZ2VuQ2xvc2UoKV0pO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcihoKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbdGhpcy5nZW5Db250ZW50KCldO1xuICAgIGxldCB7XG4gICAgICB0YWcsXG4gICAgICBkYXRhXG4gICAgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKTtcbiAgICBkYXRhLmF0dHJzID0geyAuLi5kYXRhLmF0dHJzLFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgIHRhYmluZGV4OiB0aGlzLmNoaXBHcm91cCAmJiAhdGhpcy5kaXNhYmxlZCA/IDAgOiBkYXRhLmF0dHJzLnRhYmluZGV4XG4gICAgfTtcbiAgICBkYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICBuYW1lOiAnc2hvdycsXG4gICAgICB2YWx1ZTogdGhpcy5hY3RpdmVcbiAgICB9KTtcbiAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSk7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLnRleHRDb2xvciB8fCB0aGlzLm91dGxpbmVkICYmIHRoaXMuY29sb3I7XG4gICAgcmV0dXJuIGgodGFnLCB0aGlzLnNldFRleHRDb2xvcihjb2xvciwgZGF0YSksIGNoaWxkcmVuKTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZDaGlwLmpzLm1hcCIsImltcG9ydCBWQ2hpcCBmcm9tICcuL1ZDaGlwJztcbmV4cG9ydCB7IFZDaGlwIH07XG5leHBvcnQgZGVmYXVsdCBWQ2hpcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkZpbGVJbnB1dC9WRmlsZUlucHV0LnNhc3NcIjsgLy8gRXh0ZW5zaW9uc1xuXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkJzsgLy8gQ29tcG9uZW50c1xuXG5pbXBvcnQgeyBWQ2hpcCB9IGZyb20gJy4uL1ZDaGlwJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCB7IGRlZXBFcXVhbCwgaHVtYW5SZWFkYWJsZUZpbGVTaXplLCB3cmFwSW5BcnJheSB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5pbXBvcnQgeyBjb25zb2xlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnO1xuaW1wb3J0IHsgbWVyZ2VTdHlsZXMgfSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBWVGV4dEZpZWxkLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWZpbGUtaW5wdXQnLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICd2YWx1ZScsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgY2hpcHM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgY291bnRlclNpemVTdHJpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckdnVldGlmeS5maWxlSW5wdXQuY291bnRlclNpemUnXG4gICAgfSxcbiAgICBjb3VudGVyU3RyaW5nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkuZmlsZUlucHV0LmNvdW50ZXInXG4gICAgfSxcbiAgICBoaWRlSW5wdXQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRmaWxlJ1xuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgc2hvd1NpemU6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdib29sZWFuJyB8fCBbMTAwMCwgMTAyNF0uaW5jbHVkZXModik7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuLFxuICAgIHRydW5jYXRlTGVuZ3RoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMjJcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdmaWxlJ1xuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRvcjogdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHdyYXBJbkFycmF5KHZhbCkuZXZlcnkodiA9PiB2ICE9IG51bGwgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7IC4uLlZUZXh0RmllbGQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LWZpbGUtaW5wdXQnOiB0cnVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb3VudCA9IHRoaXMuaXNNdWx0aXBsZSAmJiB0aGlzLmxhenlWYWx1ZSA/IHRoaXMubGF6eVZhbHVlLmxlbmd0aCA6IHRoaXMubGF6eVZhbHVlIGluc3RhbmNlb2YgRmlsZSA/IDEgOiAwO1xuICAgICAgaWYgKCF0aGlzLnNob3dTaXplKSByZXR1cm4gdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5jb3VudGVyU3RyaW5nLCBmaWxlQ291bnQpO1xuICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLmludGVybmFsQXJyYXlWYWx1ZS5yZWR1Y2UoKGJ5dGVzLCB7XG4gICAgICAgIHNpemUgPSAwXG4gICAgICB9KSA9PiB7XG4gICAgICAgIHJldHVybiBieXRlcyArIHNpemU7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmxhbmcudCh0aGlzLmNvdW50ZXJTaXplU3RyaW5nLCBmaWxlQ291bnQsIGh1bWFuUmVhZGFibGVGaWxlU2l6ZShieXRlcywgdGhpcy5iYXNlID09PSAxMDI0KSk7XG4gICAgfSxcblxuICAgIGludGVybmFsQXJyYXlWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB3cmFwSW5BcnJheSh0aGlzLmludGVybmFsVmFsdWUpO1xuICAgIH0sXG5cbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMubGF6eVZhbHVlKTtcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBpc0RpcnR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxBcnJheVZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcblxuICAgIGlzTGFiZWxBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5O1xuICAgIH0sXG5cbiAgICBpc011bHRpcGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpO1xuICAgIH0sXG5cbiAgICB0ZXh0KCkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlydHkpIHJldHVybiBbdGhpcy5wbGFjZWhvbGRlcl07XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEFycmF5VmFsdWUubWFwKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICAgIHNpemUgPSAwXG4gICAgICAgIH0gPSBmaWxlO1xuICAgICAgICBjb25zdCB0cnVuY2F0ZWRUZXh0ID0gdGhpcy50cnVuY2F0ZVRleHQobmFtZSk7XG4gICAgICAgIHJldHVybiAhdGhpcy5zaG93U2l6ZSA/IHRydW5jYXRlZFRleHQgOiBgJHt0cnVuY2F0ZWRUZXh0fSAoJHtodW1hblJlYWRhYmxlRmlsZVNpemUoc2l6ZSwgdGhpcy5iYXNlID09PSAxMDI0KX0pYDtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiYXNlKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnNob3dTaXplICE9PSAnYm9vbGVhbicgPyB0aGlzLnNob3dTaXplIDogdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBoYXNDaGlwcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaXBzIHx8IHRoaXMuc21hbGxDaGlwcztcbiAgICB9XG5cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByZWFkb25seToge1xuICAgICAgaGFuZGxlcih2KSB7XG4gICAgICAgIGlmICh2ID09PSB0cnVlKSBjb25zb2xlRXJyb3IoJ3JlYWRvbmx5IGlzIG5vdCBzdXBwb3J0ZWQgb24gPHYtZmlsZS1pbnB1dD4nLCB0aGlzKTtcbiAgICAgIH0sXG5cbiAgICAgIGltbWVkaWF0ZTogdHJ1ZVxuICAgIH0sXG5cbiAgICB2YWx1ZSh2KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IHYgOiB2ID8gW3ZdIDogW107XG5cbiAgICAgIGlmICghZGVlcEVxdWFsKHZhbHVlLCB0aGlzLiRyZWZzLmlucHV0LmZpbGVzKSkge1xuICAgICAgICAvLyBXaGVuIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkIHByb2dyYW1hdGljYWxseSwgY2xlYXIgdGhlXG4gICAgICAgIC8vIGludGVybmFsIGlucHV0J3MgdmFsdWUgc28gdGhhdCB0aGUgYG9uSW5wdXRgIGhhbmRsZXJcbiAgICAgICAgLy8gY2FuIGJlIHRyaWdnZXJlZCBhZ2FpbiBpZiB0aGUgdXNlciByZS1zZWxlY3RzIHRoZSBleGFjdFxuICAgICAgICAvLyBzYW1lIGZpbGUocykuIElkZWFsbHksIGBpbnB1dC5maWxlc2Agc2hvdWxkIGJlXG4gICAgICAgIC8vIG1hbmlwdWxhdGVkIGRpcmVjdGx5IGJ1dCB0aGF0IHByb3BlcnR5IGlzIHJlYWRvbmx5LlxuICAgICAgICB0aGlzLiRyZWZzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhcmFibGVDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0sXG5cbiAgICBnZW5DaGlwcygpIHtcbiAgICAgIGlmICghdGhpcy5pc0RpcnR5KSByZXR1cm4gW107XG4gICAgICByZXR1cm4gdGhpcy50ZXh0Lm1hcCgodGV4dCwgaW5kZXgpID0+IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNoaXAsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzbWFsbDogdGhpcy5zbWFsbENoaXBzXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9IHRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgICAgICAgICAgIGludGVybmFsVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGludGVybmFsVmFsdWU7IC8vIFRyaWdnZXIgdGhlIHdhdGNoZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFt0ZXh0XSkpO1xuICAgIH0sXG5cbiAgICBnZW5Db250cm9sKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuQ29udHJvbC5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5oaWRlSW5wdXQpIHtcbiAgICAgICAgcmVuZGVyLmRhdGEuc3R5bGUgPSBtZXJnZVN0eWxlcyhyZW5kZXIuZGF0YS5zdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9LFxuXG4gICAgZ2VuSW5wdXQoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0LmNhbGwodGhpcyk7IC8vIFdlIHNob3VsZCBub3QgYmUgc2V0dGluZyB2YWx1ZVxuICAgICAgLy8gcHJvZ3JhbW1hdGljYWxseSBvbiB0aGUgaW5wdXRcbiAgICAgIC8vIHdoZW4gaXQgaXMgdXNpbmcgdHlwZT1cImZpbGVcIlxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YS5kb21Qcm9wcy52YWx1ZTsgLy8gVGhpcyBzb2x2ZXMgYW4gaXNzdWUgaW4gU2FmYXJpIHdoZXJlXG4gICAgICAvLyBub3RoaW5nIGhhcHBlbnMgd2hlbiBhZGRpbmcgYSBmaWxlXG4gICAgICAvLyBkbyB0byB0aGUgaW5wdXQgZXZlbnQgbm90IGZpcmluZ1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy83OTQxXG5cbiAgICAgIGRlbGV0ZSBpbnB1dC5kYXRhLm9uLmlucHV0O1xuICAgICAgaW5wdXQuZGF0YS5vbi5jaGFuZ2UgPSB0aGlzLm9uSW5wdXQ7XG4gICAgICByZXR1cm4gW3RoaXMuZ2VuU2VsZWN0aW9ucygpLCBpbnB1dF07XG4gICAgfSxcblxuICAgIGdlblByZXBlbmRTbG90KCkge1xuICAgICAgaWYgKCF0aGlzLnByZXBlbmRJY29uKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdlbkljb24oJ3ByZXBlbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMuaW5wdXQuY2xpY2soKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIFtpY29uXSk7XG4gICAgfSxcblxuICAgIGdlblNlbGVjdGlvblRleHQoKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCA8IDIpIHJldHVybiB0aGlzLnRleHQ7XG4gICAgICBpZiAodGhpcy5zaG93U2l6ZSAmJiAhdGhpcy5jb3VudGVyKSByZXR1cm4gW3RoaXMuY29tcHV0ZWRDb3VudGVyVmFsdWVdO1xuICAgICAgcmV0dXJuIFt0aGlzLiR2dWV0aWZ5LmxhbmcudCh0aGlzLmNvdW50ZXJTdHJpbmcsIGxlbmd0aCldO1xuICAgIH0sXG5cbiAgICBnZW5TZWxlY3Rpb25zKCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICAgICAgaWYgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEFycmF5VmFsdWUuZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbikgcmV0dXJuO1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dFtpbmRleF0sXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmhhc0NoaXBzICYmIHRoaXMuaXNEaXJ0eSA/IHRoaXMuZ2VuQ2hpcHMoKSA6IHRoaXMuZ2VuU2VsZWN0aW9uVGV4dCgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWZpbGUtaW5wdXRfX3RleHQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LWZpbGUtaW5wdXRfX3RleHQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5pc0RpcnR5LFxuICAgICAgICAgICd2LWZpbGUtaW5wdXRfX3RleHQtLWNoaXBzJzogdGhpcy5oYXNDaGlwcyAmJiAhdGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9LFxuXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5UZXh0RmllbGRTbG90LmNhbGwodGhpcyk7XG4gICAgICBub2RlLmRhdGEub24gPSB7IC4uLihub2RlLmRhdGEub24gfHwge30pLFxuICAgICAgICBjbGljazogKCkgPT4gdGhpcy4kcmVmcy5pbnB1dC5jbGljaygpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIG9uSW5wdXQoZSkge1xuICAgICAgY29uc3QgZmlsZXMgPSBbLi4uKGUudGFyZ2V0LmZpbGVzIHx8IFtdKV07XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmlzTXVsdGlwbGUgPyBmaWxlcyA6IGZpbGVzWzBdOyAvLyBTZXQgaW5pdGlhbFZhbHVlIGhlcmUgb3RoZXJ3aXNlIGlzRm9jdXNlZFxuICAgICAgLy8gd2F0Y2hlciBpbiBWVGV4dEZpZWxkIHdpbGwgZW1pdCBhIGNoYW5nZVxuICAgICAgLy8gZXZlbnQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBibHVycmVkXG5cbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlO1xuICAgIH0sXG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpO1xuICAgIH0sXG5cbiAgICB0cnVuY2F0ZVRleHQoc3RyKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA8IE51bWJlcih0aGlzLnRydW5jYXRlTGVuZ3RoKSkgcmV0dXJuIHN0cjtcbiAgICAgIGNvbnN0IGNoYXJzS2VlcE9uZVNpZGUgPSBNYXRoLmZsb29yKChOdW1iZXIodGhpcy50cnVuY2F0ZUxlbmd0aCkgLSAxKSAvIDIpO1xuICAgICAgcmV0dXJuIGAke3N0ci5zbGljZSgwLCBjaGFyc0tlZXBPbmVTaWRlKX3igKYke3N0ci5zbGljZShzdHIubGVuZ3RoIC0gY2hhcnNLZWVwT25lU2lkZSl9YDtcbiAgICB9XG5cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WRmlsZUlucHV0LmpzLm1hcCIsImltcG9ydCBWRmlsZUlucHV0IGZyb20gJy4vVkZpbGVJbnB1dCc7XG5leHBvcnQgeyBWRmlsZUlucHV0IH07XG5leHBvcnQgZGVmYXVsdCBWRmlsZUlucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGlzdC9WTGlzdC5zYXNzXCI7IC8vIENvbXBvbmVudHNcblxuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0Jztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IFZTaGVldC5leHRlbmQoKS5leHRlbmQoe1xuICBuYW1lOiAndi1saXN0JyxcblxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTGlzdDogdHJ1ZSxcbiAgICAgIGxpc3Q6IHRoaXNcbiAgICB9O1xuICB9LFxuXG4gIGluamVjdDoge1xuICAgIGlzSW5NZW51OiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaXNJbk5hdjoge1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXhwYW5kOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgbmF2OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3ViaGVhZGVyOiBCb29sZWFuLFxuICAgIHRocmVlTGluZTogQm9vbGVhbixcbiAgICB0d29MaW5lOiBCb29sZWFuXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZ3JvdXBzOiBbXVxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHsgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1saXN0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICd2LWxpc3QtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3YtbGlzdC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtbGlzdC0tbmF2JzogdGhpcy5uYXYsXG4gICAgICAgICd2LWxpc3QtLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICd2LWxpc3QtLXN1YmhlYWRlcic6IHRoaXMuc3ViaGVhZGVyLFxuICAgICAgICAndi1saXN0LS10d28tbGluZSc6IHRoaXMudHdvTGluZSxcbiAgICAgICAgJ3YtbGlzdC0tdGhyZWUtbGluZSc6IHRoaXMudGhyZWVMaW5lXG4gICAgICB9O1xuICAgIH1cblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVnaXN0ZXIoY29udGVudCkge1xuICAgICAgdGhpcy5ncm91cHMucHVzaChjb250ZW50KTtcbiAgICB9LFxuXG4gICAgdW5yZWdpc3Rlcihjb250ZW50KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmZpbmRJbmRleChnID0+IGcuX3VpZCA9PT0gY29udGVudC5fdWlkKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0sXG5cbiAgICBsaXN0Q2xpY2sodWlkKSB7XG4gICAgICBpZiAodGhpcy5leHBhbmQpIHJldHVybjtcblxuICAgICAgZm9yIChjb25zdCBncm91cCBvZiB0aGlzLmdyb3Vwcykge1xuICAgICAgICBncm91cC50b2dnbGUodWlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbGlzdCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogdGhpcy5pc0luTmF2IHx8IHRoaXMuaXNJbk1lbnUgPyB1bmRlZmluZWQgOiAnbGlzdCcsXG4gICAgICAgIC4uLnRoaXMuYXR0cnMkXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaCh0aGlzLnRhZywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSksIFt0aGlzLiRzbG90cy5kZWZhdWx0XSk7XG4gIH1cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WTGlzdC5qcy5tYXAiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0R3JvdXAuc2Fzc1wiOyAvLyBDb21wb25lbnRzXG5cbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbic7XG5pbXBvcnQgVkxpc3RJdGVtIGZyb20gJy4vVkxpc3RJdGVtJztcbmltcG9ydCBWTGlzdEl0ZW1JY29uIGZyb20gJy4vVkxpc3RJdGVtSWNvbic7IC8vIE1peGluc1xuXG5pbXBvcnQgQmluZHNBdHRycyBmcm9tICcuLi8uLi9taXhpbnMvYmluZHMtYXR0cnMnO1xuaW1wb3J0IEJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9ib290YWJsZSc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnO1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnO1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJzsgLy8gRGlyZWN0aXZlc1xuXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJzsgLy8gVHJhbnNpdGlvbnNcblxuaW1wb3J0IHsgVkV4cGFuZFRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucyc7IC8vIFV0aWxzXG5cbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnO1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKEJpbmRzQXR0cnMsIEJvb3RhYmxlLCBDb2xvcmFibGUsIFJlZ2lzdHJhYmxlSW5qZWN0KCdsaXN0JyksIFRvZ2dsZWFibGUpO1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoKS5leHRlbmQoe1xuICBuYW1lOiAndi1saXN0LWdyb3VwJyxcbiAgZGlyZWN0aXZlczoge1xuICAgIHJpcHBsZVxuICB9LFxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgYXBwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRleHBhbmQnXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBncm91cDogU3RyaW5nLFxuICAgIG5vQWN0aW9uOiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHN1Ykdyb3VwOiBCb29sZWFuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWxpc3QtZ3JvdXAtLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICd2LWxpc3QtZ3JvdXAtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3YtbGlzdC1ncm91cC0tbm8tYWN0aW9uJzogdGhpcy5ub0FjdGlvbixcbiAgICAgICAgJ3YtbGlzdC1ncm91cC0tc3ViLWdyb3VwJzogdGhpcy5zdWJHcm91cFxuICAgICAgfTtcbiAgICB9XG5cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSh2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoIXRoaXMuc3ViR3JvdXAgJiYgdmFsKSB7XG4gICAgICAgIHRoaXMubGlzdCAmJiB0aGlzLmxpc3QubGlzdENsaWNrKHRoaXMuX3VpZCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgICRyb3V0ZTogJ29uUm91dGVDaGFuZ2UnXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxpc3QgJiYgdGhpcy5saXN0LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuZ3JvdXAgJiYgdGhpcy4kcm91dGUgJiYgdGhpcy52YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5tYXRjaFJvdXRlKHRoaXMuJHJvdXRlLnBhdGgpO1xuICAgIH1cbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMubGlzdCAmJiB0aGlzLmxpc3QudW5yZWdpc3Rlcih0aGlzKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2soZSkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHRoaXMuaXNCb290ZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZSk7XG4gICAgfSxcblxuICAgIGdlbkljb24oaWNvbikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIGljb24pO1xuICAgIH0sXG5cbiAgICBnZW5BcHBlbmRJY29uKCkge1xuICAgICAgY29uc3QgaWNvbiA9ICF0aGlzLnN1Ykdyb3VwID8gdGhpcy5hcHBlbmRJY29uIDogZmFsc2U7XG4gICAgICBpZiAoIWljb24gJiYgIXRoaXMuJHNsb3RzLmFwcGVuZEljb24pIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtSWNvbiwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbGlzdC1ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbidcbiAgICAgIH0sIFt0aGlzLiRzbG90cy5hcHBlbmRJY29uIHx8IHRoaXMuZ2VuSWNvbihpY29uKV0pO1xuICAgIH0sXG5cbiAgICBnZW5IZWFkZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWxpc3QtZ3JvdXBfX2hlYWRlcicsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc0FjdGl2ZSksXG4gICAgICAgICAgcm9sZTogJ2J1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbdGhpcy5hY3RpdmVDbGFzc106IHRoaXMuaXNBY3RpdmVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLmlzQWN0aXZlXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3JpcHBsZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucmlwcGxlXG4gICAgICAgIH1dLFxuICAgICAgICBvbjogeyAuLi50aGlzLmxpc3RlbmVycyQsXG4gICAgICAgICAgY2xpY2s6IHRoaXMuY2xpY2tcbiAgICAgICAgfVxuICAgICAgfSwgW3RoaXMuZ2VuUHJlcGVuZEljb24oKSwgdGhpcy4kc2xvdHMuYWN0aXZhdG9yLCB0aGlzLmdlbkFwcGVuZEljb24oKV0pO1xuICAgIH0sXG5cbiAgICBnZW5JdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbGlzdC1ncm91cF9faXRlbXMnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZVxuICAgICAgICB9XVxuICAgICAgfSwgZ2V0U2xvdCh0aGlzKSldKTtcbiAgICB9LFxuXG4gICAgZ2VuUHJlcGVuZEljb24oKSB7XG4gICAgICBjb25zdCBpY29uID0gdGhpcy5zdWJHcm91cCAmJiB0aGlzLnByZXBlbmRJY29uID09IG51bGwgPyAnJHN1Ymdyb3VwJyA6IHRoaXMucHJlcGVuZEljb247XG4gICAgICBpZiAoIWljb24gJiYgIXRoaXMuJHNsb3RzLnByZXBlbmRJY29uKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0SXRlbUljb24sIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWxpc3QtZ3JvdXBfX2hlYWRlcl9fcHJlcGVuZC1pY29uJ1xuICAgICAgfSwgW3RoaXMuJHNsb3RzLnByZXBlbmRJY29uIHx8IHRoaXMuZ2VuSWNvbihpY29uKV0pO1xuICAgIH0sXG5cbiAgICBvblJvdXRlQ2hhbmdlKHRvKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdGhpcy5ncm91cCkgcmV0dXJuO1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLm1hdGNoUm91dGUodG8ucGF0aCk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgICBpZiAoaXNBY3RpdmUgJiYgdGhpcy5pc0FjdGl2ZSAhPT0gaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5saXN0ICYmIHRoaXMubGlzdC5saXN0Q2xpY2sodGhpcy5fdWlkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIH0sXG5cbiAgICB0b2dnbGUodWlkKSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX3VpZCA9PT0gdWlkO1xuICAgICAgaWYgKGlzQWN0aXZlKSB0aGlzLmlzQm9vdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZSk7XG4gICAgfSxcblxuICAgIG1hdGNoUm91dGUodG8pIHtcbiAgICAgIHJldHVybiB0by5tYXRjaCh0aGlzLmdyb3VwKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLmlzQWN0aXZlICYmIHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1saXN0LWdyb3VwJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXNcbiAgICB9KSwgW3RoaXMuZ2VuSGVhZGVyKCksIGgoVkV4cGFuZFRyYW5zaXRpb24sIHRoaXMuZ2VuSXRlbXMoKSldKTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZMaXN0R3JvdXAuanMubWFwIiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGlzdC9WTGlzdEl0ZW0uc2Fzc1wiOyAvLyBNaXhpbnNcblxuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJztcbmltcG9ydCBSb3V0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91dGFibGUnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSc7XG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBUb2dnbGVhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJzsgLy8gRGlyZWN0aXZlc1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSc7IC8vIFR5cGVzXG5cbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnO1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhDb2xvcmFibGUsIFJvdXRhYmxlLCBUaGVtZWFibGUsIEdyb3VwYWJsZUZhY3RvcnkoJ2xpc3RJdGVtR3JvdXAnKSwgVG9nZ2xlYWJsZUZhY3RvcnkoJ2lucHV0VmFsdWUnKSk7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCgpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWxpc3QtaXRlbScsXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBSaXBwbGVcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgaW5qZWN0OiB7XG4gICAgaXNJbkdyb3VwOiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaXNJbkxpc3Q6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpc0luTWVudToge1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGlzSW5OYXY6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG5cbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0SXRlbUdyb3VwKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RJdGVtR3JvdXAuYWN0aXZlQ2xhc3M7XG4gICAgICB9XG5cbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGluYWN0aXZlOiBCb29sZWFuLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgc2VsZWN0YWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhblxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH0sXG4gICAgdGhyZWVMaW5lOiBCb29sZWFuLFxuICAgIHR3b0xpbmU6IEJvb2xlYW4sXG4gICAgdmFsdWU6IG51bGxcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBwcm94eUNsYXNzOiAndi1saXN0LWl0ZW0tLWFjdGl2ZSdcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWxpc3QtaXRlbSc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1saXN0LWl0ZW0tLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtbGlzdC1pdGVtLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWxpc3QtaXRlbS0tbGluayc6IHRoaXMuaXNDbGlja2FibGUgJiYgIXRoaXMuaW5hY3RpdmUsXG4gICAgICAgICd2LWxpc3QtaXRlbS0tc2VsZWN0YWJsZSc6IHRoaXMuc2VsZWN0YWJsZSxcbiAgICAgICAgJ3YtbGlzdC1pdGVtLS10aHJlZS1saW5lJzogdGhpcy50aHJlZUxpbmUsXG4gICAgICAgICd2LWxpc3QtaXRlbS0tdHdvLWxpbmUnOiB0aGlzLnR3b0xpbmUsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBpc0NsaWNrYWJsZSgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNDbGlja2FibGUuY2FsbCh0aGlzKSB8fCB0aGlzLmxpc3RJdGVtR3JvdXApO1xuICAgIH1cblxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2F2YXRhcicpKSB7XG4gICAgICByZW1vdmVkKCdhdmF0YXInLCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrKGUpIHtcbiAgICAgIGlmIChlLmRldGFpbCkgdGhpcy4kZWwuYmx1cigpO1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgIHRoaXMudG8gfHwgdGhpcy50b2dnbGUoKTtcbiAgICB9LFxuXG4gICAgZ2VuQXR0cnMoKSB7XG4gICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdGFiaW5kZXg6IHRoaXMuaXNDbGlja2FibGUgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogLTEsXG4gICAgICAgIC4uLnRoaXMuJGF0dHJzXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JvbGUnKSkgey8vIGRvIG5vdGhpbmcsIHJvbGUgYWxyZWFkeSBwcm92aWRlZFxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSW5OYXYpIHsvLyBkbyBub3RoaW5nLCByb2xlIGlzIGluaGVyaXRcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0luR3JvdXApIHtcbiAgICAgICAgYXR0cnMucm9sZSA9ICdsaXN0aXRlbSc7XG4gICAgICAgIGF0dHJzWydhcmlhLXNlbGVjdGVkJ10gPSBTdHJpbmcodGhpcy5pc0FjdGl2ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbk1lbnUpIHtcbiAgICAgICAgYXR0cnMucm9sZSA9IHRoaXMuaXNDbGlja2FibGUgPyAnbWVudWl0ZW0nIDogdW5kZWZpbmVkO1xuICAgICAgICBhdHRycy5pZCA9IGF0dHJzLmlkIHx8IGBsaXN0LWl0ZW0tJHt0aGlzLl91aWR9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0luTGlzdCkge1xuICAgICAgICBhdHRycy5yb2xlID0gJ2xpc3RpdGVtJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcihoKSB7XG4gICAgbGV0IHtcbiAgICAgIHRhZyxcbiAgICAgIGRhdGFcbiAgICB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpO1xuICAgIGRhdGEuYXR0cnMgPSB7IC4uLmRhdGEuYXR0cnMsXG4gICAgICAuLi50aGlzLmdlbkF0dHJzKClcbiAgICB9O1xuICAgIGRhdGFbdGhpcy50byA/ICduYXRpdmVPbicgOiAnb24nXSA9IHsgLi4uZGF0YVt0aGlzLnRvID8gJ25hdGl2ZU9uJyA6ICdvbiddLFxuICAgICAga2V5ZG93bjogZSA9PiB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyKSB0aGlzLmNsaWNrKGUpO1xuICAgICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5pbmFjdGl2ZSkgdGFnID0gJ2Rpdic7XG5cbiAgICBpZiAodGhpcy5pbmFjdGl2ZSAmJiB0aGlzLnRvKSB7XG4gICAgICBkYXRhLm9uID0gZGF0YS5uYXRpdmVPbjtcbiAgICAgIGRlbGV0ZSBkYXRhLm5hdGl2ZU9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2NvcGVkU2xvdHMuZGVmYXVsdCA/IHRoaXMuJHNjb3BlZFNsb3RzLmRlZmF1bHQoe1xuICAgICAgYWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0pIDogdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBjaGlsZHJlbik7XG4gIH1cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WTGlzdEl0ZW0uanMubWFwIiwiLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1saXN0LWl0ZW0tYWN0aW9uJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICByZW5kZXIoaCwge1xuICAgIGRhdGEsXG4gICAgY2hpbGRyZW4gPSBbXVxuICB9KSB7XG4gICAgZGF0YS5zdGF0aWNDbGFzcyA9IGRhdGEuc3RhdGljQ2xhc3MgPyBgdi1saXN0LWl0ZW1fX2FjdGlvbiAke2RhdGEuc3RhdGljQ2xhc3N9YCA6ICd2LWxpc3QtaXRlbV9fYWN0aW9uJztcbiAgICBjb25zdCBmaWx0ZXJlZENoaWxkID0gY2hpbGRyZW4uZmlsdGVyKFZOb2RlID0+IHtcbiAgICAgIHJldHVybiBWTm9kZS5pc0NvbW1lbnQgPT09IGZhbHNlICYmIFZOb2RlLnRleHQgIT09ICcgJztcbiAgICB9KTtcbiAgICBpZiAoZmlsdGVyZWRDaGlsZC5sZW5ndGggPiAxKSBkYXRhLnN0YXRpY0NsYXNzICs9ICcgdi1saXN0LWl0ZW1fX2FjdGlvbi0tc3RhY2snO1xuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBjaGlsZHJlbik7XG4gIH1cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WTGlzdEl0ZW1BY3Rpb24uanMubWFwIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZBdmF0YXIgZnJvbSAnLi4vVkF2YXRhcic7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBWQXZhdGFyLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWxpc3QtaXRlbS1hdmF0YXInLFxuICBwcm9wczoge1xuICAgIGhvcml6b250YWw6IEJvb2xlYW4sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDQwXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1saXN0LWl0ZW1fX2F2YXRhci0taG9yaXpvbnRhbCc6IHRoaXMuaG9yaXpvbnRhbCxcbiAgICAgICAgLi4uVkF2YXRhci5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtYXZhdGFyLS10aWxlJzogdGhpcy50aWxlIHx8IHRoaXMuaG9yaXpvbnRhbFxuICAgICAgfTtcbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIGNvbnN0IHJlbmRlciA9IFZBdmF0YXIub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKTtcbiAgICByZW5kZXIuZGF0YSA9IHJlbmRlci5kYXRhIHx8IHt9O1xuICAgIHJlbmRlci5kYXRhLnN0YXRpY0NsYXNzICs9ICcgdi1saXN0LWl0ZW1fX2F2YXRhcic7XG4gICAgcmV0dXJuIHJlbmRlcjtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZMaXN0SXRlbUF2YXRhci5qcy5tYXAiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMaXN0L1ZMaXN0SXRlbUdyb3VwLnNhc3NcIjsgLy8gRXh0ZW5zaW9uc1xuXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwIH0gZnJvbSAnLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJzsgLy8gTWl4aW5zXG5cbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSc7IC8vIFV0aWxpdGllc1xuXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IG1peGlucyhCYXNlSXRlbUdyb3VwLCBDb2xvcmFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWxpc3QtaXRlbS1ncm91cCcsXG5cbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNJbkdyb3VwOiB0cnVlLFxuICAgICAgbGlzdEl0ZW1Hcm91cDogdGhpc1xuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHsgLi4uQmFzZUl0ZW1Hcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtbGlzdC1pdGVtLWdyb3VwJzogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdlbkRhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwgeyAuLi5CYXNlSXRlbUdyb3VwLm9wdGlvbnMubWV0aG9kcy5nZW5EYXRhLmNhbGwodGhpcyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcm9sZTogJ2xpc3Rib3gnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZMaXN0SXRlbUdyb3VwLmpzLm1hcCIsIi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbGlzdC1pdGVtLWljb24nLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHJlbmRlcihoLCB7XG4gICAgZGF0YSxcbiAgICBjaGlsZHJlblxuICB9KSB7XG4gICAgZGF0YS5zdGF0aWNDbGFzcyA9IGB2LWxpc3QtaXRlbV9faWNvbiAke2RhdGEuc3RhdGljQ2xhc3MgfHwgJyd9YC50cmltKCk7XG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkcmVuKTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZMaXN0SXRlbUljb24uanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5pbXBvcnQgVkxpc3QgZnJvbSAnLi9WTGlzdCc7XG5pbXBvcnQgVkxpc3RHcm91cCBmcm9tICcuL1ZMaXN0R3JvdXAnO1xuaW1wb3J0IFZMaXN0SXRlbSBmcm9tICcuL1ZMaXN0SXRlbSc7XG5pbXBvcnQgVkxpc3RJdGVtR3JvdXAgZnJvbSAnLi9WTGlzdEl0ZW1Hcm91cCc7XG5pbXBvcnQgVkxpc3RJdGVtQWN0aW9uIGZyb20gJy4vVkxpc3RJdGVtQWN0aW9uJztcbmltcG9ydCBWTGlzdEl0ZW1BdmF0YXIgZnJvbSAnLi9WTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IFZMaXN0SXRlbUljb24gZnJvbSAnLi9WTGlzdEl0ZW1JY29uJztcbmV4cG9ydCBjb25zdCBWTGlzdEl0ZW1BY3Rpb25UZXh0ID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1saXN0LWl0ZW1fX2FjdGlvbi10ZXh0JywgJ3NwYW4nKTtcbmV4cG9ydCBjb25zdCBWTGlzdEl0ZW1Db250ZW50ID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1saXN0LWl0ZW1fX2NvbnRlbnQnLCAnZGl2Jyk7XG5leHBvcnQgY29uc3QgVkxpc3RJdGVtVGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWxpc3QtaXRlbV9fdGl0bGUnLCAnZGl2Jyk7XG5leHBvcnQgY29uc3QgVkxpc3RJdGVtU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWxpc3QtaXRlbV9fc3VidGl0bGUnLCAnZGl2Jyk7XG5leHBvcnQgeyBWTGlzdCwgVkxpc3RHcm91cCwgVkxpc3RJdGVtLCBWTGlzdEl0ZW1BY3Rpb24sIFZMaXN0SXRlbUF2YXRhciwgVkxpc3RJdGVtSWNvbiwgVkxpc3RJdGVtR3JvdXAgfTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWTGlzdCxcbiAgICBWTGlzdEdyb3VwLFxuICAgIFZMaXN0SXRlbSxcbiAgICBWTGlzdEl0ZW1BY3Rpb24sXG4gICAgVkxpc3RJdGVtQWN0aW9uVGV4dCxcbiAgICBWTGlzdEl0ZW1BdmF0YXIsXG4gICAgVkxpc3RJdGVtQ29udGVudCxcbiAgICBWTGlzdEl0ZW1Hcm91cCxcbiAgICBWTGlzdEl0ZW1JY29uLFxuICAgIFZMaXN0SXRlbVN1YnRpdGxlLFxuICAgIFZMaXN0SXRlbVRpdGxlXG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZNZW51L1ZNZW51LnNhc3NcIjsgLy8gQ29tcG9uZW50c1xuXG5pbXBvcnQgeyBWVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL1ZUaGVtZVByb3ZpZGVyJzsgLy8gTWl4aW5zXG5cbmltcG9ydCBBY3RpdmF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYWN0aXZhdGFibGUnO1xuaW1wb3J0IERlbGF5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZGVsYXlhYmxlJztcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCc7XG5pbXBvcnQgRGV0YWNoYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZGV0YWNoYWJsZSc7XG5pbXBvcnQgTWVudWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lbnVhYmxlJztcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJztcbmltcG9ydCBSb3VuZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdW5kYWJsZSc7XG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSc7XG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnOyAvLyBEaXJlY3RpdmVzXG5cbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJztcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnOyAvLyBVdGlsaXRpZXNcblxuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucyc7XG5pbXBvcnQgeyByZW1vdmVkIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJztcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJztcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoRGVwZW5kZW50LCBEZWxheWFibGUsIERldGFjaGFibGUsIE1lbnVhYmxlLCBSZXR1cm5hYmxlLCBSb3VuZGFibGUsIFRvZ2dsZWFibGUsIFRoZW1lYWJsZSk7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1lbnUnLFxuXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzSW5NZW51OiB0cnVlLFxuICAgICAgLy8gUGFzcyB0aGVtZSB0aHJvdWdoIHRvIGRlZmF1bHQgc2xvdFxuICAgICAgdGhlbWU6IHRoaXMudGhlbWVcbiAgICB9O1xuICB9LFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBDbGlja091dHNpZGUsXG4gICAgUmVzaXplXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYXV0bzogQm9vbGVhbixcbiAgICBjbG9zZU9uQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZU9uQ29udGVudENsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nXG4gICAgfSxcbiAgICBvZmZzZXRYOiBCb29sZWFuLFxuICAgIG9mZnNldFk6IEJvb2xlYW4sXG4gICAgb3Blbk9uQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBvcGVuT25Ib3ZlcjogQm9vbGVhbixcbiAgICBvcmlnaW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCdcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJ1xuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwsXG4gICAgICB0aWxlczogW11cbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYWN0aXZlVGlsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XTtcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlZExlZnQoKSB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpO1xuICAgICAgaWYgKCF0aGlzLmF1dG8pIHJldHVybiB0aGlzLmNhbGNMZWZ0KG1lbnVXaWR0aCkgfHwgJzAnO1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5jYWxjWE92ZXJmbG93KHRoaXMuY2FsY0xlZnRBdXRvKCksIG1lbnVXaWR0aCkpIHx8ICcwJztcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlZE1heEhlaWdodCgpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYXV0byA/ICcyMDBweCcgOiBjb252ZXJ0VG9Vbml0KHRoaXMubWF4SGVpZ2h0KTtcbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnO1xuICAgIH0sXG5cbiAgICBjYWxjdWxhdGVkTWF4V2lkdGgoKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCc7XG4gICAgfSxcblxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCgpIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1pbih0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICsgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgKyAodGhpcy5hdXRvID8gMTYgOiAwKSwgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMCkpO1xuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKSA/IG1pbldpZHRoIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpO1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQoTWF0aC5taW4oY2FsY3VsYXRlZE1heFdpZHRoLCBtaW5XaWR0aCkpIHx8ICcwJztcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlZFRvcCgpIHtcbiAgICAgIGNvbnN0IHRvcCA9ICF0aGlzLmF1dG8gPyB0aGlzLmNhbGNUb3AoKSA6IGNvbnZlcnRUb1VuaXQodGhpcy5jYWxjWU92ZXJmbG93KHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8pKTtcbiAgICAgIHJldHVybiB0b3AgfHwgJzAnO1xuICAgIH0sXG5cbiAgICBoYXNDbGlja2FibGVUaWxlcygpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpO1xuICAgIH0sXG5cbiAgICBzdHlsZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4XG4gICAgICB9O1xuICAgIH1cblxuICB9LFxuICB3YXRjaDoge1xuICAgIGlzQWN0aXZlKHZhbCkge1xuICAgICAgaWYgKCF2YWwpIHRoaXMubGlzdEluZGV4ID0gLTE7XG4gICAgfSxcblxuICAgIGlzQ29udGVudEFjdGl2ZSh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWw7XG4gICAgfSxcblxuICAgIGxpc3RJbmRleChuZXh0LCBwcmV2KSB7XG4gICAgICBpZiAobmV4dCBpbiB0aGlzLnRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVzW25leHRdO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc2Nyb2xsVG9wID0gdGlsZS5vZmZzZXRUb3AgLSB0aWxlLmNsaWVudEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcHJldiBpbiB0aGlzLnRpbGVzICYmIHRoaXMudGlsZXNbcHJldl0uY2xhc3NMaXN0LnJlbW92ZSgndi1saXN0LWl0ZW0tLWhpZ2hsaWdodGVkJyk7XG4gICAgfVxuXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7IC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIE9uY2UgdHJhbnNpdGlvbmluZywgY2FsY3VsYXRlIHNjcm9sbCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRUcmFuc2l0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMuY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVkVG9wQXV0byA9IHRoaXMuY2FsY1RvcEF1dG8oKTtcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2FsY1Njcm9sbFBvc2l0aW9uKCkge1xuICAgICAgY29uc3QgJGVsID0gdGhpcy4kcmVmcy5jb250ZW50O1xuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICByZXR1cm4gYWN0aXZlVGlsZSA/IE1hdGgubWluKG1heFNjcm9sbFRvcCwgTWF0aC5tYXgoMCwgYWN0aXZlVGlsZS5vZmZzZXRUb3AgLSAkZWwub2Zmc2V0SGVpZ2h0IC8gMiArIGFjdGl2ZVRpbGUub2Zmc2V0SGVpZ2h0IC8gMikpIDogJGVsLnNjcm9sbFRvcDtcbiAgICB9LFxuXG4gICAgY2FsY0xlZnRBdXRvKCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IubGVmdCAtIHRoaXMuZGVmYXVsdE9mZnNldCAqIDIpO1xuICAgIH0sXG5cbiAgICBjYWxjVG9wQXV0bygpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudDtcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKTtcblxuICAgICAgaWYgKCFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9mZnNldFkgfHwgIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRUb3A7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKTtcbiAgICAgIGNvbnN0IHRpbGVEaXN0YW5jZUZyb21NZW51VG9wID0gYWN0aXZlVGlsZS5vZmZzZXRUb3AgLSB0aGlzLmNhbGNTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy52LWxpc3QtaXRlbScpLm9mZnNldFRvcDtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VMaXN0SW5kZXgoZSkge1xuICAgICAgLy8gRm9yIGluZmluaXRlIHNjcm9sbCBhbmQgYXV0b2NvbXBsZXRlLCByZS1ldmFsdWF0ZSBjaGlsZHJlblxuICAgICAgdGhpcy5nZXRUaWxlcygpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnRhYikge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy51cCkge1xuICAgICAgICB0aGlzLnByZXZUaWxlKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIgJiYgdGhpcy5saXN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXhdLmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIE9uZSBvZiB0aGUgY29uZGl0aW9ucyB3YXMgbWV0LCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uICgjMjk4OClcblxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIGNsb3NlQ29uZGl0aW9uYWwoZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSAmJiAhdGhpcy5faXNEZXN0cm95ZWQgJiYgdGhpcy5jbG9zZU9uQ2xpY2sgJiYgIXRoaXMuJHJlZnMuY29udGVudC5jb250YWlucyh0YXJnZXQpO1xuICAgIH0sXG5cbiAgICBnZW5BY3RpdmF0b3JBdHRyaWJ1dGVzKCkge1xuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IEFjdGl2YXRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JBdHRyaWJ1dGVzLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVRpbGUgJiYgdGhpcy5hY3RpdmVUaWxlLmlkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9LFxuXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gTWVudWFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93bjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuXG4gICAgZ2VuVHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdlbkNvbnRlbnQoKTtcbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gY29udGVudDtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBbY29udGVudF0pO1xuICAgIH0sXG5cbiAgICBnZW5EaXJlY3RpdmVzKCkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlXG4gICAgICB9XTsgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG5cbiAgICAgIGlmICghdGhpcy5vcGVuT25Ib3ZlciAmJiB0aGlzLmNsb3NlT25DbGljaykge1xuICAgICAgICBkaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdjbGljay1vdXRzaWRlJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VDb25kaXRpb25hbDogdGhpcy5jbG9zZUNvbmRpdGlvbmFsLFxuICAgICAgICAgICAgaW5jbHVkZTogKCkgPT4gW3RoaXMuJGVsLCAuLi50aGlzLmdldE9wZW5EZXBlbmRlbnRFbGVtZW50cygpXVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICAgIH0sXG5cbiAgICBnZW5Db250ZW50KCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYXR0cnM6IHsgLi4udGhpcy5nZXRTY29wZUlkQXR0cnMoKSxcbiAgICAgICAgICByb2xlOiAncm9sZScgaW4gdGhpcy4kYXR0cnMgPyB0aGlzLiRhdHRycy5yb2xlIDogJ21lbnUnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51X19jb250ZW50JyxcbiAgICAgICAgY2xhc3M6IHsgLi4udGhpcy5yb290VGhlbWVDbGFzc2VzLFxuICAgICAgICAgIC4uLnRoaXMucm91bmRlZENsYXNzZXMsXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tYXV0byc6IHRoaXMuYXV0byxcbiAgICAgICAgICAndi1tZW51X19jb250ZW50LS1maXhlZCc6IHRoaXMuYWN0aXZhdG9yRml4ZWQsXG4gICAgICAgICAgbWVudWFibGVfX2NvbnRlbnRfX2FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgICBbdGhpcy5jb250ZW50Q2xhc3MudHJpbSgpXTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZ2VuRGlyZWN0aXZlcygpLFxuICAgICAgICByZWY6ICdjb250ZW50JyxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uQ29udGVudENsaWNrKSB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5vbi5zY3JvbGwgPSB0aGlzLiRsaXN0ZW5lcnMuc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge307XG4gICAgICAgIG9wdGlvbnMub24ubW91c2VsZWF2ZSA9IHRoaXMubW91c2VMZWF2ZUhhbmRsZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpO1xuICAgIH0sXG5cbiAgICBnZXRUaWxlcygpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5jb250ZW50KSByZXR1cm47XG4gICAgICB0aGlzLnRpbGVzID0gQXJyYXkuZnJvbSh0aGlzLiRyZWZzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnYtbGlzdC1pdGVtJykpO1xuICAgIH0sXG5cbiAgICBtb3VzZUVudGVySGFuZGxlcigpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBtb3VzZUxlYXZlSGFuZGxlcihlKSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG5leHRUaWxlKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggKyAxXTtcblxuICAgICAgaWYgKCF0aWxlKSB7XG4gICAgICAgIGlmICghdGhpcy50aWxlcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5uZXh0VGlsZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdEluZGV4Kys7XG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKTtcbiAgICB9LFxuXG4gICAgcHJldlRpbGUoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCAtIDFdO1xuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IHRoaXMudGlsZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnByZXZUaWxlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLTtcbiAgICAgIGlmICh0aWxlLnRhYkluZGV4ID09PSAtMSkgdGhpcy5wcmV2VGlsZSgpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpO1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiBhY3RpdmF0b3IgJiYgYWN0aXZhdG9yLmZvY3VzKCkpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0FjdGl2ZSAmJiBba2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd25dLmluY2x1ZGVzKGUua2V5Q29kZSkpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9IC8vIEFsbG93IGZvciBpc0FjdGl2ZSB3YXRjaGVyIHRvIGdlbmVyYXRlIHRpbGUgbGlzdFxuXG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuY2hhbmdlTGlzdEluZGV4KGUpKTtcbiAgICB9LFxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjsgLy8gQWNjb3VudCBmb3Igc2NyZWVuIHJlc2l6ZVxuICAgICAgLy8gYW5kIG9yaWVudGF0aW9uIGNoYW5nZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTsgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcihoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzogdGhpcy5hdHRhY2ggPT09ICcnIHx8IHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJ1xuICAgICAgfSxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIGFyZzogJzUwMCcsXG4gICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZVxuICAgICAgfV1cbiAgICB9O1xuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksIHRoaXMuc2hvd0xhenlDb250ZW50KCgpID0+IFt0aGlzLiRjcmVhdGVFbGVtZW50KFZUaGVtZVByb3ZpZGVyLCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICByb290OiB0cnVlLFxuICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgZGFyazogdGhpcy5kYXJrXG4gICAgICB9XG4gICAgfSwgW3RoaXMuZ2VuVHJhbnNpdGlvbigpXSldKV0pO1xuICB9XG5cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vk1lbnUuanMubWFwIiwiaW1wb3J0IFZNZW51IGZyb20gJy4vVk1lbnUnO1xuZXhwb3J0IHsgVk1lbnUgfTtcbmV4cG9ydCBkZWZhdWx0IFZNZW51O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2Fzc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnNhc3NcIjsgLy8gQ29tcG9uZW50c1xuXG5pbXBvcnQgVkNoaXAgZnJvbSAnLi4vVkNoaXAnO1xuaW1wb3J0IFZNZW51IGZyb20gJy4uL1ZNZW51JztcbmltcG9ydCBWU2VsZWN0TGlzdCBmcm9tICcuL1ZTZWxlY3RMaXN0JzsgLy8gRXh0ZW5zaW9uc1xuXG5pbXBvcnQgVklucHV0IGZyb20gJy4uL1ZJbnB1dCc7XG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnOyAvLyBNaXhpbnNcblxuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbXBhcmFibGUnO1xuaW1wb3J0IEZpbHRlcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2ZpbHRlcmFibGUnOyAvLyBEaXJlY3RpdmVzXG5cbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnO1xuaW1wb3J0IHsgZ2V0UHJvcGVydHlGcm9tSXRlbSwgZ2V0T2JqZWN0VmFsdWVCeVBhdGgsIGtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSc7IC8vIFR5cGVzXG5cbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIGNsb3NlT25DbGljazogZmFsc2UsXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlS2V5czogdHJ1ZSxcbiAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDMwNFxufTsgLy8gVHlwZXNcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhWVGV4dEZpZWxkLCBDb21wYXJhYmxlLCBGaWx0ZXJhYmxlKTtcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0JyxcbiAgZGlyZWN0aXZlczoge1xuICAgIENsaWNrT3V0c2lkZVxuICB9LFxuICBwcm9wczoge1xuICAgIGFwcGVuZEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZHJvcGRvd24nXG4gICAgfSxcbiAgICBhdHRhY2g6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY2FjaGVJdGVtczogQm9vbGVhbixcbiAgICBjaGlwczogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgZGVsZXRhYmxlQ2hpcHM6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUxvb2t1cDogQm9vbGVhbixcbiAgICBlYWdlcjogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGl0ZW1Db2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICBpdGVtRGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBGdW5jdGlvbl0sXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJ1xuICAgIH0sXG4gICAgbWVudVByb3BzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRNZW51UHJvcHNcbiAgICB9LFxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsZWFyOiBCb29sZWFuLFxuICAgIHJldHVybk9iamVjdDogQm9vbGVhbixcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuXG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FjaGVkSXRlbXM6IHRoaXMuY2FjaGVJdGVtcyA/IHRoaXMuaXRlbXMgOiBbXSxcbiAgICAgIG1lbnVJc0Jvb3RlZDogZmFsc2UsXG4gICAgICBpc01lbnVBY3RpdmU6IGZhbHNlLFxuICAgICAgbGFzdEl0ZW06IDIwLFxuICAgICAgLy8gQXMgbG9uZyBhcyBhIHZhbHVlIGlzIGRlZmluZWQsIHNob3cgaXRcbiAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgbXVsdGlwbGVcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGljaCBkZWZhdWx0IHRvIHByb3ZpZGVcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy52YWx1ZSA6IHRoaXMubXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IC0xLFxuICAgICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgICBrZXlib2FyZExvb2t1cFByZWZpeDogJycsXG4gICAgICBrZXlib2FyZExvb2t1cExhc3RUaW1lOiAwXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qIEFsbCBpdGVtcyB0aGF0IHRoZSBzZWxlY3QgaGFzICovXG4gICAgYWxsSXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJEdXBsaWNhdGVzKHRoaXMuY2FjaGVkSXRlbXMuY29uY2F0KHRoaXMuaXRlbXMpKTtcbiAgICB9LFxuXG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7IC4uLlZUZXh0RmllbGQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXNlbGVjdCc6IHRydWUsXG4gICAgICAgICd2LXNlbGVjdC0tY2hpcHMnOiB0aGlzLmhhc0NoaXBzLFxuICAgICAgICAndi1zZWxlY3QtLWNoaXBzLS1zbWFsbCc6IHRoaXMuc21hbGxDaGlwcyxcbiAgICAgICAgJ3Ytc2VsZWN0LS1pcy1tZW51LWFjdGl2ZSc6IHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICAndi1zZWxlY3QtLWlzLW11bHRpJzogdGhpcy5tdWx0aXBsZVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyogVXNlZCBieSBvdGhlciBjb21wb25lbnRzIHRvIG92ZXJ3cml0ZSAqL1xuICAgIGNvbXB1dGVkSXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxJdGVtcztcbiAgICB9LFxuXG4gICAgY29tcHV0ZWRPd25zKCkge1xuICAgICAgcmV0dXJuIGBsaXN0LSR7dGhpcy5fdWlkfWA7XG4gICAgfSxcblxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIDogKHRoaXMuZ2V0VGV4dCh0aGlzLnNlbGVjdGVkSXRlbXNbMF0pIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRm9jdXNlZCA/IFt7XG4gICAgICAgIG5hbWU6ICdjbGljay1vdXRzaWRlJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBoYW5kbGVyOiB0aGlzLmJsdXIsXG4gICAgICAgICAgY2xvc2VDb25kaXRpb25hbDogdGhpcy5jbG9zZUNvbmRpdGlvbmFsXG4gICAgICAgIH1cbiAgICAgIH1dIDogdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBkeW5hbWljSGVpZ2h0KCkge1xuICAgICAgcmV0dXJuICdhdXRvJztcbiAgICB9LFxuXG4gICAgaGFzQ2hpcHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHM7XG4gICAgfSxcblxuICAgIGhhc1Nsb3QoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhhc0NoaXBzIHx8IHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbik7XG4gICAgfSxcblxuICAgIGlzRGlydHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfSxcblxuICAgIGxpc3REYXRhKCkge1xuICAgICAgY29uc3Qgc2NvcGVJZCA9IHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLmNvbnRleHQuJG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICBjb25zdCBhdHRycyA9IHNjb3BlSWQgPyB7XG4gICAgICAgIFtzY29wZUlkXTogdHJ1ZVxuICAgICAgfSA6IHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXR0cnM6IHsgLi4uYXR0cnMsXG4gICAgICAgICAgaWQ6IHRoaXMuY29tcHV0ZWRPd25zXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWN0aW9uOiB0aGlzLm11bHRpcGxlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLml0ZW1Db2xvcixcbiAgICAgICAgICBkZW5zZTogdGhpcy5kZW5zZSxcbiAgICAgICAgICBoaWRlU2VsZWN0ZWQ6IHRoaXMuaGlkZVNlbGVjdGVkLFxuICAgICAgICAgIGl0ZW1zOiB0aGlzLnZpcnR1YWxpemVkSXRlbXMsXG4gICAgICAgICAgaXRlbURpc2FibGVkOiB0aGlzLml0ZW1EaXNhYmxlZCxcbiAgICAgICAgICBpdGVtVGV4dDogdGhpcy5pdGVtVGV4dCxcbiAgICAgICAgICBpdGVtVmFsdWU6IHRoaXMuaXRlbVZhbHVlLFxuICAgICAgICAgIG5vRGF0YVRleHQ6IHRoaXMuJHZ1ZXRpZnkubGFuZy50KHRoaXMubm9EYXRhVGV4dCksXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5zZWxlY3RlZEl0ZW1zXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2VsZWN0OiB0aGlzLnNlbGVjdEl0ZW1cbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IHtcbiAgICAgICAgICBpdGVtOiB0aGlzLiRzY29wZWRTbG90cy5pdGVtXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0YXRpY0xpc3QoKSB7XG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ25vLWRhdGEnXSB8fCB0aGlzLiRzbG90c1sncHJlcGVuZC1pdGVtJ10gfHwgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10pIHtcbiAgICAgICAgY29uc29sZUVycm9yKCdhc3NlcnQ6IHN0YXRpY0xpc3Qgc2hvdWxkIG5vdCBiZSBjYWxsZWQgaWYgc2xvdHMgYXJlIHVzZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlNlbGVjdExpc3QsIHRoaXMubGlzdERhdGEpO1xuICAgIH0sXG5cbiAgICB2aXJ0dWFsaXplZEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJF9tZW51UHJvcHMuYXV0byA/IHRoaXMuY29tcHV0ZWRJdGVtcyA6IHRoaXMuY29tcHV0ZWRJdGVtcy5zbGljZSgwLCB0aGlzLmxhc3RJdGVtKTtcbiAgICB9LFxuXG4gICAgbWVudUNhblNob3c6ICgpID0+IHRydWUsXG5cbiAgICAkX21lbnVQcm9wcygpIHtcbiAgICAgIGxldCBub3JtYWxpc2VkUHJvcHMgPSB0eXBlb2YgdGhpcy5tZW51UHJvcHMgPT09ICdzdHJpbmcnID8gdGhpcy5tZW51UHJvcHMuc3BsaXQoJywnKSA6IHRoaXMubWVudVByb3BzO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3JtYWxpc2VkUHJvcHMpKSB7XG4gICAgICAgIG5vcm1hbGlzZWRQcm9wcyA9IG5vcm1hbGlzZWRQcm9wcy5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGFjY1twLnRyaW0oKV0gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdE1lbnVQcm9wcyxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLm1lbnVDYW5TaG93ICYmIHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICBudWRnZUJvdHRvbTogbm9ybWFsaXNlZFByb3BzLm9mZnNldFkgPyAxIDogMCxcbiAgICAgICAgLi4ubm9ybWFsaXNlZFByb3BzXG4gICAgICB9O1xuICAgIH1cblxuICB9LFxuICB3YXRjaDoge1xuICAgIGludGVybmFsVmFsdWUodmFsKSB7XG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtcygpO1xuICAgIH0sXG5cbiAgICBpc01lbnVBY3RpdmUodmFsKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uTWVudUFjdGl2ZUNoYW5nZSh2YWwpKTtcbiAgICB9LFxuXG4gICAgaXRlbXM6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcblxuICAgICAgaGFuZGxlcih2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVJdGVtcykge1xuICAgICAgICAgIC8vIEJyZWFrcyB2dWUtdGVzdC11dGlscyBpZlxuICAgICAgICAgIC8vIHRoaXMgaXNuJ3QgY2FsY3VsYXRlZFxuICAgICAgICAgIC8vIG9uIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZEl0ZW1zID0gdGhpcy5maWx0ZXJEdXBsaWNhdGVzKHRoaXMuY2FjaGVkSXRlbXMuY29uY2F0KHZhbCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIoZSkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuYmx1ci5jYWxsKHRoaXMsIGUpO1xuICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICB9LFxuXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBhY3RpdmF0ZU1lbnUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbnRlcmFjdGl2ZSB8fCB0aGlzLmlzTWVudUFjdGl2ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBjbGVhcmFibGVDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKTtcbiAgICAgIHRoaXMuc2V0TWVudUluZGV4KC0xKTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpKTtcbiAgICAgIGlmICh0aGlzLm9wZW5PbkNsZWFyKSB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3NlQ29uZGl0aW9uYWwoZSkge1xuICAgICAgaWYgKCF0aGlzLmlzTWVudUFjdGl2ZSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gIXRoaXMuX2lzRGVzdHJveWVkICYmICggLy8gQ2xpY2sgb3JpZ2luYXRlcyBmcm9tIG91dHNpZGUgdGhlIG1lbnUgY29udGVudFxuICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkb24ndCBjbG9zZSB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxuICAgICAgIXRoaXMuZ2V0Q29udGVudCgpIHx8ICF0aGlzLmdldENvbnRlbnQoKS5jb250YWlucyhlLnRhcmdldCkpICYmIC8vIENsaWNrIG9yaWdpbmF0ZXMgZnJvbSBvdXRzaWRlIHRoZSBlbGVtZW50XG4gICAgICB0aGlzLiRlbCAmJiAhdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSB0aGlzLiRlbDtcbiAgICB9LFxuXG4gICAgZmlsdGVyRHVwbGljYXRlcyhhcnIpIHtcbiAgICAgIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFycltpbmRleF07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUoaXRlbSk7IC8vIFRPRE86IGNvbXBhcmF0b3JcblxuICAgICAgICAhdW5pcXVlVmFsdWVzLmhhcyh2YWwpICYmIHVuaXF1ZVZhbHVlcy5zZXQodmFsLCBpdGVtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlVmFsdWVzLnZhbHVlcygpKTtcbiAgICB9LFxuXG4gICAgZmluZEV4aXN0aW5nSW5kZXgoaXRlbSkge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtKTtcbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5maW5kSW5kZXgoaSA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcih0aGlzLmdldFZhbHVlKGkpLCBpdGVtVmFsdWUpKTtcbiAgICB9LFxuXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgJiYgdGhpcy4kcmVmcy5tZW51LiRyZWZzLmNvbnRlbnQ7XG4gICAgfSxcblxuICAgIGdlbkNoaXBTZWxlY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhdGhpcy5pc0ludGVyYWN0aXZlIHx8IHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWQ2hpcCwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcC0tc2VsZWN0JyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjbG9zZTogdGhpcy5kZWxldGFibGVDaGlwcyAmJiAhaXNEaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4LFxuICAgICAgICAgIHNtYWxsOiB0aGlzLnNtYWxsQ2hpcHNcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4gdGhpcy5vbkNoaXBJbnB1dChpdGVtKVxuICAgICAgICB9LFxuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoaXRlbSkpXG4gICAgICB9LCB0aGlzLmdldFRleHQoaXRlbSkpO1xuICAgIH0sXG5cbiAgICBnZW5Db21tYVNlbGVjdGlvbihpdGVtLCBpbmRleCwgbGFzdCkge1xuICAgICAgY29uc3QgY29sb3IgPSBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4ICYmIHRoaXMuY29tcHV0ZWRDb2xvcjtcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhdGhpcy5pc0ludGVyYWN0aXZlIHx8IHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSk7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9uIHYtc2VsZWN0X19zZWxlY3Rpb24tLWNvbW1hJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zZWxlY3RfX3NlbGVjdGlvbi0tZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgIH0pLCBgJHt0aGlzLmdldFRleHQoaXRlbSl9JHtsYXN0ID8gJycgOiAnLCAnfWApO1xuICAgIH0sXG5cbiAgICBnZW5EZWZhdWx0U2xvdCgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLmdlblNlbGVjdGlvbnMoKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZW5JbnB1dCgpOyAvLyBJZiB0aGUgcmV0dXJuIGlzIGFuIGVtcHR5IGFycmF5XG4gICAgICAvLyBwdXNoIHRoZSBpbnB1dFxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSkge1xuICAgICAgICBzZWxlY3Rpb25zLnB1c2goaW5wdXQpOyAvLyBPdGhlcndpc2UgcHVzaCBpdCBpbnRvIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuID0gc2VsZWN0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgICAgICAgc2VsZWN0aW9ucy5jaGlsZHJlbi5wdXNoKGlucHV0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFt0aGlzLmdlbkZpZWxkc2V0KCksIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2xvdCcsXG4gICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZGlyZWN0aXZlc1xuICAgICAgfSwgW3RoaXMuZ2VuTGFiZWwoKSwgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsIHNlbGVjdGlvbnMsIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLCB0aGlzLmdlbkNsZWFySWNvbigpLCB0aGlzLmdlbkljb25TbG90KCksIHRoaXMuZ2VuSGlkZGVuSW5wdXQoKV0pLCB0aGlzLmdlbk1lbnUoKSwgdGhpcy5nZW5Qcm9ncmVzcygpXTtcbiAgICB9LFxuXG4gICAgZ2VuSWNvbih0eXBlLCBjYiwgZXh0cmFEYXRhKSB7XG4gICAgICBjb25zdCBpY29uID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JY29uLmNhbGwodGhpcywgdHlwZSwgY2IsIGV4dHJhRGF0YSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnYXBwZW5kJykge1xuICAgICAgICAvLyBEb24ndCBhbGxvdyB0aGUgZHJvcGRvd24gaWNvbiB0byBiZSBmb2N1c2VkXG4gICAgICAgIGljb24uY2hpbGRyZW5bMF0uZGF0YSA9IG1lcmdlRGF0YShpY29uLmNoaWxkcmVuWzBdLmRhdGEsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFiaW5kZXg6IGljb24uY2hpbGRyZW5bMF0uY29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnMgJiYgJy0xJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcblxuICAgIGdlbklucHV0KCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dC5jYWxsKHRoaXMpO1xuICAgICAgZGVsZXRlIGlucHV0LmRhdGEuYXR0cnMubmFtZTtcbiAgICAgIGlucHV0LmRhdGEgPSBtZXJnZURhdGEoaW5wdXQuZGF0YSwge1xuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICdhcmlhLXJlYWRvbmx5JzogU3RyaW5nKHRoaXMuaXNSZWFkb25seSksXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGdldE9iamVjdFZhbHVlQnlQYXRoKHRoaXMuJHJlZnMubWVudSwgJ2FjdGl2ZVRpbGUuaWQnKSxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IGdldE9iamVjdFZhbHVlQnlQYXRoKGlucHV0LmRhdGEsICdhdHRycy5hdXRvY29tcGxldGUnLCAnb2ZmJylcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBrZXlwcmVzczogdGhpcy5vbktleVByZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH0sXG5cbiAgICBnZW5IaWRkZW5JbnB1dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sYXp5VmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmF0dHJzJC5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZW5JbnB1dFNsb3QoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dFNsb3QuY2FsbCh0aGlzKTtcbiAgICAgIHJlbmRlci5kYXRhLmF0dHJzID0geyAuLi5yZW5kZXIuZGF0YS5hdHRycyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ2xpc3Rib3gnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IFN0cmluZyh0aGlzLmlzTWVudUFjdGl2ZSksXG4gICAgICAgICdhcmlhLW93bnMnOiB0aGlzLmNvbXB1dGVkT3duc1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfSxcblxuICAgIGdlbkxpc3QoKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHNsb3RzLCB3ZSBjYW4gdXNlIGEgY2FjaGVkIFZOb2RlIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5MaXN0V2l0aFNsb3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpY0xpc3Q7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdlbkxpc3RXaXRoU2xvdCgpIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gWydwcmVwZW5kLWl0ZW0nLCAnbm8tZGF0YScsICdhcHBlbmQtaXRlbSddLmZpbHRlcihzbG90TmFtZSA9PiB0aGlzLiRzbG90c1tzbG90TmFtZV0pLm1hcChzbG90TmFtZSA9PiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgc2xvdDogc2xvdE5hbWVcbiAgICAgIH0sIHRoaXMuJHNsb3RzW3Nsb3ROYW1lXSkpOyAvLyBSZXF1aXJlcyBkZXN0cnVjdHVyaW5nIGR1ZSB0byBWdWVcbiAgICAgIC8vIG1vZGlmeWluZyB0aGUgYG9uYCBwcm9wZXJ0eSB3aGVuIHBhc3NlZFxuICAgICAgLy8gYXMgYSByZWZlcmVuY2VkIG9iamVjdFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWU2VsZWN0TGlzdCwgeyAuLi50aGlzLmxpc3REYXRhXG4gICAgICB9LCBzbG90cyk7XG4gICAgfSxcblxuICAgIGdlbk1lbnUoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMuJF9tZW51UHJvcHM7XG4gICAgICBwcm9wcy5hY3RpdmF0b3IgPSB0aGlzLiRyZWZzWydpbnB1dC1zbG90J107IC8vIEF0dGFjaCB0byByb290IGVsIHNvIHRoYXRcbiAgICAgIC8vIG1lbnUgY292ZXJzIHByZXBlbmQvYXBwZW5kIGljb25zXG5cbiAgICAgIGlmICggLy8gVE9ETzogbWFrZSB0aGlzIGEgY29tcHV0ZWQgcHJvcGVydHkgb3IgaGVscGVyIG9yIHNvbWV0aGluZ1xuICAgICAgdGhpcy5hdHRhY2ggPT09ICcnIHx8IC8vIElmIHVzZWQgYXMgYSBib29sZWFuIHByb3AgKDx2LW1lbnUgYXR0YWNoPilcbiAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IC8vIElmIGJvdW5kIHRvIGEgYm9vbGVhbiAoPHYtbWVudSA6YXR0YWNoPVwidHJ1ZVwiPilcbiAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyAvLyBJZiBib3VuZCBhcyBib29sZWFuIHByb3AgaW4gcHVnICh2LW1lbnUoYXR0YWNoKSlcbiAgICAgICkge1xuICAgICAgICAgIHByb3BzLmF0dGFjaCA9IHRoaXMuJGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLmF0dGFjaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVk1lbnUsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IHZhbCA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHZhbDtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdmFsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLm9uU2Nyb2xsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ21lbnUnXG4gICAgICB9LCBbdGhpcy5nZW5MaXN0KCldKTtcbiAgICB9LFxuXG4gICAgZ2VuU2VsZWN0aW9ucygpIHtcbiAgICAgIGxldCBsZW5ndGggPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgIGxldCBnZW5TZWxlY3Rpb247XG5cbiAgICAgIGlmICh0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pIHtcbiAgICAgICAgZ2VuU2VsZWN0aW9uID0gdGhpcy5nZW5TbG90U2VsZWN0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NoaXBzKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ2hpcFNlbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ29tbWFTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBjaGlsZHJlbltsZW5ndGhdID0gZ2VuU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtc1tsZW5ndGhdLCBsZW5ndGgsIGxlbmd0aCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3NlbGVjdGlvbnMnXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSxcblxuICAgIGdlblNsb3RTZWxlY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24oe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGNsYXNzOiAndi1jaGlwLS1zZWxlY3QnXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNlbGVjdDogZSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgIGRpc2FibGVkOiAhdGhpcy5pc0ludGVyYWN0aXZlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0TWVudUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubWVudSA/IHRoaXMuJHJlZnMubWVudS5saXN0SW5kZXggOiAtMTtcbiAgICB9LFxuXG4gICAgZ2V0RGlzYWJsZWQoaXRlbSkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgZ2V0VGV4dChpdGVtKSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1UZXh0LCBpdGVtKTtcbiAgICB9LFxuXG4gICAgZ2V0VmFsdWUoaXRlbSkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSk7XG4gICAgfSxcblxuICAgIG9uQmx1cihlKSB7XG4gICAgICBlICYmIHRoaXMuJGVtaXQoJ2JsdXInLCBlKTtcbiAgICB9LFxuXG4gICAgb25DaGlwSW5wdXQoaXRlbSkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtlbHNlIHRoaXMuc2V0VmFsdWUobnVsbCk7IC8vIElmIGFsbCBpdGVtcyBoYXZlIGJlZW4gZGVsZXRlZCxcbiAgICAgIC8vIG9wZW4gYHYtbWVudWBcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgfSxcblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgaWYgKCF0aGlzLmlzSW50ZXJhY3RpdmUpIHJldHVybjtcblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSk7XG4gICAgfSxcblxuICAgIG9uRXNjRG93bihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzTWVudUFjdGl2ZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVByZXNzKGUpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlIHx8ICF0aGlzLmlzSW50ZXJhY3RpdmUgfHwgdGhpcy5kaXNhYmxlTG9va3VwKSByZXR1cm47XG4gICAgICBjb25zdCBLRVlCT0FSRF9MT09LVVBfVEhSRVNIT0xEID0gMTAwMDsgLy8gbWlsbGlzZWNvbmRzXG5cbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICBpZiAobm93IC0gdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID4gS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCkge1xuICAgICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXggKz0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBMYXN0VGltZSA9IG5vdztcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAodGhpcy5nZXRUZXh0KGl0ZW0pIHx8ICcnKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5rZXlib2FyZExvb2t1cFByZWZpeCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFsbEl0ZW1zW2luZGV4XTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmxhc3RJdGVtID0gTWF0aC5tYXgodGhpcy5sYXN0SXRlbSwgaW5kZXggKyA1KTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnJldHVybk9iamVjdCA/IGl0ZW0gOiB0aGlzLmdldFZhbHVlKGl0ZW0pKTtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKCkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0TWVudUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAodGhpcy5pc1JlYWRvbmx5ICYmIGUua2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSByZXR1cm47XG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudTsgLy8gSWYgZW50ZXIsIHNwYWNlLCBvcGVuIG1lbnVcblxuICAgICAgaWYgKFtrZXlDb2Rlcy5lbnRlciwga2V5Q29kZXMuc3BhY2VdLmluY2x1ZGVzKGtleUNvZGUpKSB0aGlzLmFjdGl2YXRlTWVudSgpO1xuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm47IC8vIElmIG1lbnUgaXMgYWN0aXZlLCBhbGxvdyBkZWZhdWx0XG4gICAgICAvLyBsaXN0SW5kZXggY2hhbmdlIGZyb20gbWVudVxuXG4gICAgICBpZiAodGhpcy5pc01lbnVBY3RpdmUgJiYga2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBtZW51LmNoYW5nZUxpc3RJbmRleChlKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bGlzdC1pbmRleCcsIG1lbnUubGlzdEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIG1lbnUgaXMgbm90IGFjdGl2ZSwgdXAgYW5kIGRvd24gY2FuIGRvXG4gICAgICAvLyBvbmUgb2YgMiB0aGluZ3MuIElmIG11bHRpcGxlLCBvcGVucyB0aGVcbiAgICAgIC8vIG1lbnUsIGlmIG5vdCwgd2lsbCBjeWNsZSB0aHJvdWdoIGFsbFxuICAgICAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcblxuXG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlICYmIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoa2V5Q29kZSkpIHJldHVybiB0aGlzLm9uVXBEb3duKGUpOyAvLyBJZiBlc2NhcGUgZGVhY3RpdmF0ZSB0aGUgbWVudVxuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSByZXR1cm4gdGhpcy5vbkVzY0Rvd24oZSk7IC8vIElmIHRhYiAtIHNlbGVjdCBpdGVtIG9yIGNsb3NlIG1lbnVcblxuICAgICAgaWYgKGtleUNvZGUgPT09IGtleUNvZGVzLnRhYikgcmV0dXJuIHRoaXMub25UYWJEb3duKGUpOyAvLyBJZiBzcGFjZSBwcmV2ZW50RGVmYXVsdFxuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMuc3BhY2UpIHJldHVybiB0aGlzLm9uU3BhY2VEb3duKGUpO1xuICAgIH0sXG5cbiAgICBvbk1lbnVBY3RpdmVDaGFuZ2UodmFsKSB7XG4gICAgICAvLyBJZiBtZW51IGlzIGNsb3NpbmcgYW5kIG11bGl0cGxlXG4gICAgICAvLyBvciBtZW51SW5kZXggaXMgYWxyZWFkeSBzZXRcbiAgICAgIC8vIHNraXAgbWVudSBpbmRleCByZWNhbGN1bGF0aW9uXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhdmFsIHx8IHRoaXMuZ2V0TWVudUluZGV4KCkgPiAtMSkgcmV0dXJuO1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudTtcbiAgICAgIGlmICghbWVudSB8fCAhdGhpcy5pc0RpcnR5KSByZXR1cm47IC8vIFdoZW4gbWVudSBvcGVucywgc2V0IGluZGV4IG9mIGZpcnN0IGFjdGl2ZSBpdGVtXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudS50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWVudS50aWxlc1tpXS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgIGlmICh0aGlzLmhhc01vdXNlRG93biAmJiBlLndoaWNoICE9PSAzICYmIHRoaXMuaXNJbnRlcmFjdGl2ZSkge1xuICAgICAgICAvLyBJZiBhcHBlbmQgaW5uZXIgaXMgcHJlc2VudFxuICAgICAgICAvLyBhbmQgdGhlIHRhcmdldCBpcyBpdHNlbGZcbiAgICAgICAgLy8gb3IgaW5zaWRlLCB0b2dnbGUgbWVudVxuICAgICAgICBpZiAodGhpcy5pc0FwcGVuZElubmVyKGUudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaXNNZW51QWN0aXZlID0gIXRoaXMuaXNNZW51QWN0aXZlKTsgLy8gSWYgdXNlciBpcyBjbGlja2luZyBpbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgLy8gYW5kIGZpZWxkIGlzIGVuY2xvc2VkLCBhY3RpdmF0ZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlVXAuY2FsbCh0aGlzLCBlKTtcbiAgICB9LFxuXG4gICAgb25TY3JvbGwoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmdldENvbnRlbnQoKS5zY3JvbGxUb3AgPSAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RJdGVtID4gdGhpcy5jb21wdXRlZEl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzaG93TW9yZUl0ZW1zID0gdGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsSGVpZ2h0IC0gKHRoaXMuZ2V0Q29udGVudCgpLnNjcm9sbFRvcCArIHRoaXMuZ2V0Q29udGVudCgpLmNsaWVudEhlaWdodCkgPCAyMDA7XG5cbiAgICAgICAgaWYgKHNob3dNb3JlSXRlbXMpIHtcbiAgICAgICAgICB0aGlzLmxhc3RJdGVtICs9IDIwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uU3BhY2VEb3duKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuXG4gICAgb25UYWJEb3duKGUpIHtcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRyZWZzLm1lbnU7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybjtcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSBtZW51LmFjdGl2ZVRpbGU7IC8vIEFuIGl0ZW0gdGhhdCBpcyBzZWxlY3RlZCBieVxuICAgICAgLy8gbWVudS1pbmRleCBzaG91bGQgdG9nZ2xlZFxuXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgYWN0aXZlVGlsZSAmJiB0aGlzLmlzTWVudUFjdGl2ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGFjdGl2ZVRpbGUuY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIG1ha2UgaXQgaGVyZSxcbiAgICAgICAgLy8gdGhlIHVzZXIgaGFzIG5vIHNlbGVjdGVkIGluZGV4ZXNcbiAgICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHRhYmJpbmcgb3V0XG4gICAgICAgIHRoaXMuYmx1cihlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25VcERvd24oZSkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudTtcbiAgICAgIGlmICghbWVudSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBNdWx0aXBsZSBzZWxlY3RzIGRvIG5vdCBjeWNsZSB0aGVpciB2YWx1ZVxuICAgICAgLy8gd2hlbiBwcmVzc2luZyB1cCBvciBkb3duLCBpbnN0ZWFkIGFjdGl2YXRlXG4gICAgICAvLyB0aGUgbWVudVxuXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgcmV0dXJuIHRoaXMuYWN0aXZhdGVNZW51KCk7XG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlOyAvLyBDeWNsZSB0aHJvdWdoIGF2YWlsYWJsZSB2YWx1ZXMgdG8gYWNoaWV2ZVxuICAgICAgLy8gc2VsZWN0IG5hdGl2ZSBiZWhhdmlvclxuXG4gICAgICBtZW51LmlzQm9vdGVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBtZW51LmdldFRpbGVzKCk7XG4gICAgICAgIGtleUNvZGVzLnVwID09PSBrZXlDb2RlID8gbWVudS5wcmV2VGlsZSgpIDogbWVudS5uZXh0VGlsZSgpO1xuICAgICAgICBtZW51LmFjdGl2ZVRpbGUgJiYgbWVudS5hY3RpdmVUaWxlLmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnJldHVybk9iamVjdCA/IGl0ZW0gOiB0aGlzLmdldFZhbHVlKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsVmFsdWUgPSAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5zbGljZSgpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5maW5kRXhpc3RpbmdJbmRleChpdGVtKTtcbiAgICAgICAgaSAhPT0gLTEgPyBpbnRlcm5hbFZhbHVlLnNwbGljZShpLCAxKSA6IGludGVybmFsVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShpbnRlcm5hbFZhbHVlLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5PYmplY3QgPyBpIDogdGhpcy5nZXRWYWx1ZShpKTtcbiAgICAgICAgfSkpOyAvLyBXaGVuIHNlbGVjdGluZyBtdWx0aXBsZVxuICAgICAgICAvLyBhZGp1c3QgbWVudSBhZnRlciBlYWNoXG4gICAgICAgIC8vIHNlbGVjdGlvblxuXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUgJiYgdGhpcy4kcmVmcy5tZW51LnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgfSk7IC8vIFdlIG9ubHkgbmVlZCB0byByZXNldCBsaXN0IGluZGV4IGZvciBtdWx0aXBsZVxuICAgICAgICAvLyB0byBrZWVwIGhpZ2hsaWdodCB3aGVuIGFuIGl0ZW0gaXMgdG9nZ2xlZFxuICAgICAgICAvLyBvbiBhbmQgb2ZmXG5cbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IHRoaXMuZ2V0TWVudUluZGV4KCk7XG4gICAgICAgIHRoaXMuc2V0TWVudUluZGV4KC0xKTsgLy8gVGhlcmUgaXMgbm8gaXRlbSB0byByZS1oaWdobGlnaHRcbiAgICAgICAgLy8gd2hlbiBzZWxlY3Rpb25zIGFyZSBoaWRkZW5cblxuICAgICAgICBpZiAodGhpcy5oaWRlU2VsZWN0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgobGlzdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNldE1lbnVJbmRleChpbmRleCkge1xuICAgICAgdGhpcy4kcmVmcy5tZW51ICYmICh0aGlzLiRyZWZzLm1lbnUubGlzdEluZGV4ID0gaW5kZXgpO1xuICAgIH0sXG5cbiAgICBzZXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgY29uc3QgdmFsdWVzID0gIXRoaXMubXVsdGlwbGUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKSA/IFt0aGlzLmludGVybmFsVmFsdWVdIDogdGhpcy5pbnRlcm5hbFZhbHVlO1xuXG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxsSXRlbXMuZmluZEluZGV4KHYgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZSh2KSwgdGhpcy5nZXRWYWx1ZSh2YWx1ZSkpKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh0aGlzLmFsbEl0ZW1zW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtcztcbiAgICB9LFxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlO1xuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gICAgICB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBpc0FwcGVuZElubmVyKHRhcmdldCkge1xuICAgICAgLy8gcmV0dXJuIHRydWUgaWYgYXBwZW5kIGlubmVyIGlzIHByZXNlbnRcbiAgICAgIC8vIGFuZCB0aGUgdGFyZ2V0IGlzIGl0c2VsZiBvciBpbnNpZGVcbiAgICAgIGNvbnN0IGFwcGVuZElubmVyID0gdGhpcy4kcmVmc1snYXBwZW5kLWlubmVyJ107XG4gICAgICByZXR1cm4gYXBwZW5kSW5uZXIgJiYgKGFwcGVuZElubmVyID09PSB0YXJnZXQgfHwgYXBwZW5kSW5uZXIuY29udGFpbnModGFyZ2V0KSk7XG4gICAgfVxuXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VlNlbGVjdC5qcy5tYXAiLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlNpbXBsZUNoZWNrYm94IGZyb20gJy4uL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gnO1xuaW1wb3J0IFZEaXZpZGVyIGZyb20gJy4uL1ZEaXZpZGVyJztcbmltcG9ydCBWU3ViaGVhZGVyIGZyb20gJy4uL1ZTdWJoZWFkZXInO1xuaW1wb3J0IHsgVkxpc3QsIFZMaXN0SXRlbSwgVkxpc3RJdGVtQWN0aW9uLCBWTGlzdEl0ZW1Db250ZW50LCBWTGlzdEl0ZW1UaXRsZSB9IGZyb20gJy4uL1ZMaXN0JzsgLy8gRGlyZWN0aXZlc1xuXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJzsgLy8gTWl4aW5zXG5cbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSc7XG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnOyAvLyBIZWxwZXJzXG5cbmltcG9ydCB7IGVzY2FwZUhUTUwsIGdldFByb3BlcnR5RnJvbUl0ZW0gfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnOyAvLyBUeXBlc1xuXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUsIFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0LWxpc3QnLFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy82ODcyXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGVcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICBpdGVtRGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBGdW5jdGlvbl0sXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJ1xuICAgIH0sXG4gICAgbm9EYXRhVGV4dDogU3RyaW5nLFxuICAgIG5vRmlsdGVyOiBCb29sZWFuLFxuICAgIHNlYXJjaElucHV0OiBudWxsLFxuICAgIHNlbGVjdGVkSXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyc2VkSXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IHRoaXMuZ2V0VmFsdWUoaXRlbSkpO1xuICAgIH0sXG5cbiAgICB0aWxlQWN0aXZlQ2xhc3MoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvcikuY2xhc3MgfHwge30pLmpvaW4oJyAnKTtcbiAgICB9LFxuXG4gICAgc3RhdGljTm9EYXRhVGlsZSgpIHtcbiAgICAgIGNvbnN0IHRpbGUgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcm9sZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbW91c2Vkb3duOiBlID0+IGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtLCB0aWxlLCBbdGhpcy5nZW5UaWxlQ29udGVudCh0aGlzLm5vRGF0YVRleHQpXSk7XG4gICAgfVxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5BY3Rpb24oaXRlbSwgaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQWN0aW9uLCBbdGhpcy4kY3JlYXRlRWxlbWVudChWU2ltcGxlQ2hlY2tib3gsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiAoKSA9PiB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKVxuICAgICAgICB9XG4gICAgICB9KV0pO1xuICAgIH0sXG5cbiAgICBnZW5EaXZpZGVyKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRGl2aWRlciwge1xuICAgICAgICBwcm9wc1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdlbkZpbHRlcmVkVGV4dCh0ZXh0KSB7XG4gICAgICB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgICAgIGlmICghdGhpcy5zZWFyY2hJbnB1dCB8fCB0aGlzLm5vRmlsdGVyKSByZXR1cm4gZXNjYXBlSFRNTCh0ZXh0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIG1pZGRsZSxcbiAgICAgICAgZW5kXG4gICAgICB9ID0gdGhpcy5nZXRNYXNrZWRDaGFyYWN0ZXJzKHRleHQpO1xuICAgICAgcmV0dXJuIGAke2VzY2FwZUhUTUwoc3RhcnQpfSR7dGhpcy5nZW5IaWdobGlnaHQobWlkZGxlKX0ke2VzY2FwZUhUTUwoZW5kKX1gO1xuICAgIH0sXG5cbiAgICBnZW5IZWFkZXIocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTdWJoZWFkZXIsIHtcbiAgICAgICAgcHJvcHNcbiAgICAgIH0sIHByb3BzLmhlYWRlcik7XG4gICAgfSxcblxuICAgIGdlbkhpZ2hsaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidi1saXN0LWl0ZW1fX21hc2tcIj4ke2VzY2FwZUhUTUwodGV4dCl9PC9zcGFuPmA7XG4gICAgfSxcblxuICAgIGdldE1hc2tlZENoYXJhY3RlcnModGV4dCkge1xuICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSAodGhpcy5zZWFyY2hJbnB1dCB8fCAnJykudG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgaW5kZXggPSB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hJbnB1dCk7XG4gICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4ge1xuICAgICAgICBzdGFydDogJycsXG4gICAgICAgIG1pZGRsZTogdGV4dCxcbiAgICAgICAgZW5kOiAnJ1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGV4dC5zbGljZSgwLCBpbmRleCk7XG4gICAgICBjb25zdCBtaWRkbGUgPSB0ZXh0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaElucHV0Lmxlbmd0aCk7XG4gICAgICBjb25zdCBlbmQgPSB0ZXh0LnNsaWNlKGluZGV4ICsgc2VhcmNoSW5wdXQubGVuZ3RoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBtaWRkbGUsXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2VuVGlsZSh7XG4gICAgICBpdGVtLFxuICAgICAgaW5kZXgsXG4gICAgICBkaXNhYmxlZCA9IG51bGwsXG4gICAgICB2YWx1ZSA9IGZhbHNlXG4gICAgfSkge1xuICAgICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSB0aGlzLmhhc0l0ZW0oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtID09PSBPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgZGlzYWJsZWQgPSBkaXNhYmxlZCAhPT0gbnVsbCA/IGRpc2FibGVkIDogdGhpcy5nZXREaXNhYmxlZChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGlsZSA9IHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGluIGxpc3QgZG9lcyBub3RcbiAgICAgICAgICAvLyBjb250YWluIGFyaWEtc2VsZWN0ZWQgYnkgZGVmYXVsdFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgICBpZDogYGxpc3QtaXRlbS0ke3RoaXMuX3VpZH0tJHtpbmRleH1gLFxuICAgICAgICAgIHJvbGU6ICdvcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbW91c2Vkb3duOiBlID0+IHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgb25CbHVyIGZyb20gYmVpbmcgY2FsbGVkXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGljazogKCkgPT4gZGlzYWJsZWQgfHwgdGhpcy4kZW1pdCgnc2VsZWN0JywgaXRlbSlcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy50aWxlQWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICAgIGlucHV0VmFsdWU6IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICghdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFt0aGlzLmFjdGlvbiAmJiAhdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwID8gdGhpcy5nZW5BY3Rpb24oaXRlbSwgdmFsdWUpIDogbnVsbCwgdGhpcy5nZW5UaWxlQ29udGVudChpdGVtLCBpbmRleCldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcztcbiAgICAgIGNvbnN0IHNjb3BlZFNsb3QgPSB0aGlzLiRzY29wZWRTbG90cy5pdGVtKHtcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBpdGVtLFxuICAgICAgICBhdHRyczogeyAuLi50aWxlLmF0dHJzLFxuICAgICAgICAgIC4uLnRpbGUucHJvcHNcbiAgICAgICAgfSxcbiAgICAgICAgb246IHRpbGUub25cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMubmVlZHNUaWxlKHNjb3BlZFNsb3QpID8gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIHNjb3BlZFNsb3QpIDogc2NvcGVkU2xvdDtcbiAgICB9LFxuXG4gICAgZ2VuVGlsZUNvbnRlbnQoaXRlbSwgaW5kZXggPSAwKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmdlbkZpbHRlcmVkVGV4dCh0aGlzLmdldFRleHQoaXRlbSkpO1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQ29udGVudCwgW3RoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtVGl0bGUsIHtcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICBpbm5lckhUTUxcbiAgICAgICAgfVxuICAgICAgfSldKTtcbiAgICB9LFxuXG4gICAgaGFzSXRlbShpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZWRJdGVtcy5pbmRleE9mKHRoaXMuZ2V0VmFsdWUoaXRlbSkpID4gLTE7XG4gICAgfSxcblxuICAgIG5lZWRzVGlsZShzbG90KSB7XG4gICAgICByZXR1cm4gc2xvdC5sZW5ndGggIT09IDEgfHwgc2xvdFswXS5jb21wb25lbnRPcHRpb25zID09IG51bGwgfHwgc2xvdFswXS5jb21wb25lbnRPcHRpb25zLkN0b3Iub3B0aW9ucy5uYW1lICE9PSAndi1saXN0LWl0ZW0nO1xuICAgIH0sXG5cbiAgICBnZXREaXNhYmxlZChpdGVtKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbURpc2FibGVkLCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICBnZXRUZXh0KGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1UZXh0LCBpdGVtKSk7XG4gICAgfSxcblxuICAgIGdldFZhbHVlKGl0ZW0pIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVZhbHVlLCB0aGlzLmdldFRleHQoaXRlbSkpO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGNvbnN0IGl0ZW1zTGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgIGlmICh0aGlzLmhpZGVTZWxlY3RlZCAmJiB0aGlzLmhhc0l0ZW0oaXRlbSkpIGNvbnRpbnVlO1xuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkgY2hpbGRyZW4ucHVzaCh0aGlzLmdlblRpbGUoe1xuICAgICAgICBpdGVtLFxuICAgICAgICBpbmRleFxuICAgICAgfSkpO2Vsc2UgaWYgKGl0ZW0uaGVhZGVyKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuSGVhZGVyKGl0ZW0pKTtlbHNlIGlmIChpdGVtLmRpdmlkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5EaXZpZGVyKGl0ZW0pKTtlbHNlIGNoaWxkcmVuLnB1c2godGhpcy5nZW5UaWxlKHtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaW5kZXhcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5sZW5ndGggfHwgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuc3RhdGljTm9EYXRhVGlsZSk7XG4gICAgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnVuc2hpZnQodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddKTtcbiAgICB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSAmJiBjaGlsZHJlbi5wdXNoKHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddKTtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdCwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdC1saXN0JyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGVuc2U6IHRoaXMuZGVuc2VcbiAgICAgIH1cbiAgICB9LCBjaGlsZHJlbik7XG4gIH1cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WU2VsZWN0TGlzdC5qcy5tYXAiLCJpbXBvcnQgVlNlbGVjdCBmcm9tICcuL1ZTZWxlY3QnO1xuZXhwb3J0IHsgVlNlbGVjdCB9O1xuZXhwb3J0IGRlZmF1bHQgVlNlbGVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlN1YmhlYWRlci9WU3ViaGVhZGVyLnNhc3NcIjsgLy8gTWl4aW5zXG5cbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSc7XG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGVcbi8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXN1YmhlYWRlcicsXG4gIHByb3BzOiB7XG4gICAgaW5zZXQ6IEJvb2xlYW5cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3ViaGVhZGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LXN1YmhlYWRlci0taW5zZXQnOiB0aGlzLmluc2V0LFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3Nlc1xuICAgICAgfSxcbiAgICAgIGF0dHJzOiB0aGlzLiRhdHRycyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnNcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZTdWJoZWFkZXIuanMubWFwIiwiaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi9WU3ViaGVhZGVyJztcbmV4cG9ydCB7IFZTdWJoZWFkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFZTdWJoZWFkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBNaXhpbnNcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSc7XG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZWFibGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGhlbWUtcHJvdmlkZXInLFxuICBwcm9wczoge1xuICAgIHJvb3Q6IEJvb2xlYW5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0RhcmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290ID8gdGhpcy5yb290SXNEYXJrIDogVGhlbWVhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNEYXJrLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHRoaXMuJHNsb3RzLmRlZmF1bHQgJiYgdGhpcy4kc2xvdHMuZGVmYXVsdC5maW5kKG5vZGUgPT4gIW5vZGUuaXNDb21tZW50ICYmIG5vZGUudGV4dCAhPT0gJyAnKTtcbiAgfVxuXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZUaGVtZVByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCBWVGhlbWVQcm92aWRlciBmcm9tICcuL1ZUaGVtZVByb3ZpZGVyJztcbmV4cG9ydCB7IFZUaGVtZVByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBWVGhlbWVQcm92aWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImZ1bmN0aW9uIGRlZmF1bHRDb25kaXRpb25hbCgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShlLCBlbCwgYmluZGluZykge1xuICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIGJpbmRpbmcudmFsdWUgPT09ICdmdW5jdGlvbicgPyBiaW5kaW5nLnZhbHVlIDogYmluZGluZy52YWx1ZS5oYW5kbGVyO1xuICBjb25zdCBpc0FjdGl2ZSA9IHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSAnb2JqZWN0JyAmJiBiaW5kaW5nLnZhbHVlLmNsb3NlQ29uZGl0aW9uYWwgfHwgZGVmYXVsdENvbmRpdGlvbmFsOyAvLyBUaGUgaW5jbHVkZSBlbGVtZW50IGNhbGxiYWNrcyBiZWxvdyBjYW4gYmUgZXhwZW5zaXZlXG4gIC8vIHNvIHdlIHNob3VsZCBhdm9pZCBjYWxsaW5nIHRoZW0gd2hlbiB3ZSdyZSBub3QgYWN0aXZlLlxuICAvLyBFeHBsaWNpdGx5IGNoZWNrIGZvciBmYWxzZSB0byBhbGxvdyBmYWxsYmFjayBjb21wYXRpYmlsaXR5XG4gIC8vIHdpdGggbm9uLXRvZ2dsZWFibGUgY29tcG9uZW50c1xuXG4gIGlmICghZSB8fCBpc0FjdGl2ZShlKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gSWYgY2xpY2sgd2FzIHRyaWdnZXJlZCBwcm9ncmFtbWF0aWNhbHkgKGRvbUVsLmNsaWNrKCkpIHRoZW5cbiAgLy8gaXQgc2hvdWxkbid0IGJlIHRyZWF0ZWQgYXMgY2xpY2stb3V0c2lkZVxuICAvLyBDaHJvbWUvRmlyZWZveCBzdXBwb3J0IGlzVHJ1c3RlZCBwcm9wZXJ0eVxuICAvLyBJRS9FZGdlIHN1cHBvcnQgcG9pbnRlclR5cGUgcHJvcGVydHkgKGVtcHR5IGlmIG5vdCB0cmlnZ2VyZWRcbiAgLy8gYnkgcG9pbnRpbmcgZGV2aWNlKVxuXG4gIGlmICgnaXNUcnVzdGVkJyBpbiBlICYmICFlLmlzVHJ1c3RlZCB8fCAncG9pbnRlclR5cGUnIGluIGUgJiYgIWUucG9pbnRlclR5cGUpIHJldHVybjsgLy8gQ2hlY2sgaWYgYWRkaXRpb25hbCBlbGVtZW50cyB3ZXJlIHBhc3NlZCB0byBiZSBpbmNsdWRlZCBpbiBjaGVja1xuICAvLyAoY2xpY2sgbXVzdCBiZSBvdXRzaWRlIGFsbCBpbmNsdWRlZCBlbGVtZW50cywgaWYgYW55KVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gKHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSAnb2JqZWN0JyAmJiBiaW5kaW5nLnZhbHVlLmluY2x1ZGUgfHwgKCgpID0+IFtdKSkoKTsgLy8gQWRkIHRoZSByb290IGVsZW1lbnQgZm9yIHRoZSBjb21wb25lbnQgdGhpcyBkaXJlY3RpdmUgd2FzIGRlZmluZWQgb25cblxuXG4gIGVsZW1lbnRzLnB1c2goZWwpOyAvLyBDaGVjayBpZiBpdCdzIGEgY2xpY2sgb3V0c2lkZSBvdXIgZWxlbWVudHMsIGFuZCB0aGVuIGlmIG91ciBjYWxsYmFjayByZXR1cm5zIHRydWUuXG4gIC8vIE5vbi10b2dnbGVhYmxlIGNvbXBvbmVudHMgc2hvdWxkIHRha2UgYWN0aW9uIGluIHRoZWlyIGNhbGxiYWNrIGFuZCByZXR1cm4gZmFsc3kuXG4gIC8vIFRvZ2dsZWFibGUgY2FuIHJldHVybiB0cnVlIGlmIGl0IHdhbnRzIHRvIGRlYWN0aXZhdGUuXG4gIC8vIE5vdGUgdGhhdCwgYmVjYXVzZSB3ZSdyZSBpbiB0aGUgY2FwdHVyZSBwaGFzZSwgdGhpcyBjYWxsYmFjayB3aWxsIG9jY3VyIGJlZm9yZVxuICAvLyB0aGUgYnViYmxpbmcgY2xpY2sgZXZlbnQgb24gYW55IG91dHNpZGUgZWxlbWVudHMuXG5cbiAgIWVsZW1lbnRzLnNvbWUoZWwgPT4gZWwuY29udGFpbnMoZS50YXJnZXQpKSAmJiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpc0FjdGl2ZShlKSAmJiBoYW5kbGVyICYmIGhhbmRsZXIoZSk7XG4gIH0sIDApO1xufVxuXG5leHBvcnQgY29uc3QgQ2xpY2tPdXRzaWRlID0ge1xuICAvLyBbZGF0YS1hcHBdIG1heSBub3QgYmUgZm91bmRcbiAgLy8gaWYgdXNpbmcgYmluZCwgaW5zZXJ0ZWQgbWFrZXNcbiAgLy8gc3VyZSB0aGF0IHRoZSByb290IGVsZW1lbnQgaXNcbiAgLy8gYXZhaWxhYmxlLCBpT1MgZG9lcyBub3Qgc3VwcG9ydFxuICAvLyBjbGlja3Mgb24gYm9keVxuICBpbnNlcnRlZChlbCwgYmluZGluZykge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSBlID0+IGRpcmVjdGl2ZShlLCBlbCwgYmluZGluZyk7IC8vIGlPUyBkb2VzIG5vdCByZWNvZ25pemUgY2xpY2sgZXZlbnRzIG9uIGRvY3VtZW50XG4gICAgLy8gb3IgYm9keSwgdGhpcyBpcyB0aGUgZW50aXJlIHB1cnBvc2Ugb2YgdGhlIHYtYXBwXG4gICAgLy8gY29tcG9uZW50IGFuZCBbZGF0YS1hcHBdLCBzdG9wIHJlbW92aW5nIHRoaXNcblxuXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXBwXScpIHx8IGRvY3VtZW50LmJvZHk7IC8vIFRoaXMgaXMgb25seSBmb3IgdW5pdCB0ZXN0c1xuXG4gICAgYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgZWwuX2NsaWNrT3V0c2lkZSA9IG9uQ2xpY2s7XG4gIH0sXG5cbiAgdW5iaW5kKGVsKSB7XG4gICAgaWYgKCFlbC5fY2xpY2tPdXRzaWRlKSByZXR1cm47XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXBwXScpIHx8IGRvY3VtZW50LmJvZHk7IC8vIFRoaXMgaXMgb25seSBmb3IgdW5pdCB0ZXN0c1xuXG4gICAgYXBwICYmIGFwcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLl9jbGlja091dHNpZGUsIHRydWUpO1xuICAgIGRlbGV0ZSBlbC5fY2xpY2tPdXRzaWRlO1xuICB9XG5cbn07XG5leHBvcnQgZGVmYXVsdCBDbGlja091dHNpZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBNaXhpbnNcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vZGVsYXlhYmxlJztcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uL3RvZ2dsZWFibGUnOyAvLyBVdGlsaXRpZXNcblxuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucyc7XG5pbXBvcnQgeyBnZXRTbG90LCBnZXRTbG90VHlwZSB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5pbXBvcnQgeyBjb25zb2xlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnO1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhEZWxheWFibGUsIFRvZ2dsZWFibGUpO1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAnYWN0aXZhdGFibGUnLFxuICBwcm9wczoge1xuICAgIGFjdGl2YXRvcjoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIFsnc3RyaW5nJywgJ29iamVjdCddLmluY2x1ZGVzKHR5cGVvZiB2YWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgaW50ZXJuYWxBY3RpdmF0b3I6IEJvb2xlYW4sXG4gICAgb3Blbk9uSG92ZXI6IEJvb2xlYW4sXG4gICAgb3Blbk9uRm9jdXM6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICAvLyBEbyBub3QgdXNlIHRoaXMgZGlyZWN0bHksIGNhbGwgZ2V0QWN0aXZhdG9yKCkgaW5zdGVhZFxuICAgIGFjdGl2YXRvckVsZW1lbnQ6IG51bGwsXG4gICAgYWN0aXZhdG9yTm9kZTogW10sXG4gICAgZXZlbnRzOiBbJ2NsaWNrJywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsICdmb2N1cyddLFxuICAgIGxpc3RlbmVyczoge31cbiAgfSksXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZhdG9yOiAncmVzZXRBY3RpdmF0b3InLFxuICAgIG9wZW5PbkZvY3VzOiAncmVzZXRBY3RpdmF0b3InLFxuICAgIG9wZW5PbkhvdmVyOiAncmVzZXRBY3RpdmF0b3InXG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICBjb25zdCBzbG90VHlwZSA9IGdldFNsb3RUeXBlKHRoaXMsICdhY3RpdmF0b3InLCB0cnVlKTtcblxuICAgIGlmIChzbG90VHlwZSAmJiBbJ3Ytc2xvdCcsICdub3JtYWwnXS5pbmNsdWRlcyhzbG90VHlwZSkpIHtcbiAgICAgIGNvbnNvbGVFcnJvcihgVGhlIGFjdGl2YXRvciBzbG90IG11c3QgYmUgYm91bmQsIHRyeSAnPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uIH1cIj48di1idG4gdi1vbj1cIm9uXCI+J2AsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQWN0aXZhdG9yRXZlbnRzKCk7XG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUFjdGl2YXRvckV2ZW50cygpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRBY3RpdmF0b3JFdmVudHMoKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdG9yIHx8IHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuZ2V0QWN0aXZhdG9yKCkpIHJldHVybjtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMoKTtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycyk7XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoKS5hZGRFdmVudExpc3RlbmVyKGtleSwgdGhpcy5saXN0ZW5lcnNba2V5XSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdlbkFjdGl2YXRvcigpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBnZXRTbG90KHRoaXMsICdhY3RpdmF0b3InLCBPYmplY3QuYXNzaWduKHRoaXMuZ2V0VmFsdWVQcm94eSgpLCB7XG4gICAgICAgIG9uOiB0aGlzLmdlbkFjdGl2YXRvckxpc3RlbmVycygpLFxuICAgICAgICBhdHRyczogdGhpcy5nZW5BY3RpdmF0b3JBdHRyaWJ1dGVzKClcbiAgICAgIH0pKSB8fCBbXTtcbiAgICAgIHRoaXMuYWN0aXZhdG9yTm9kZSA9IG5vZGU7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogU3RyaW5nKHRoaXMuaXNBY3RpdmUpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHt9O1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0ge307XG5cbiAgICAgIGlmICh0aGlzLm9wZW5PbkhvdmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5tb3VzZWVudGVyID0gZSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoZSk7XG4gICAgICAgICAgdGhpcy5ydW5EZWxheSgnb3BlbicpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3RlbmVycy5tb3VzZWxlYXZlID0gZSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoZSk7XG4gICAgICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVycy5jbGljayA9IGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKGUpO1xuICAgICAgICAgIGlmIChhY3RpdmF0b3IpIGFjdGl2YXRvci5mb2N1cygpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Gb2N1cykge1xuICAgICAgICBsaXN0ZW5lcnMuZm9jdXMgPSBlID0+IHtcbiAgICAgICAgICB0aGlzLmdldEFjdGl2YXRvcihlKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuXG4gICAgZ2V0QWN0aXZhdG9yKGUpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZmV0Y2hlZCB0aGUgYWN0aXZhdG9yLCByZS11c2VcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRvckVsZW1lbnQpIHJldHVybiB0aGlzLmFjdGl2YXRvckVsZW1lbnQ7XG4gICAgICBsZXQgYWN0aXZhdG9yID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZhdG9yKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaW50ZXJuYWxBY3RpdmF0b3IgPyB0aGlzLiRlbCA6IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hY3RpdmF0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gU2VsZWN0b3JcbiAgICAgICAgICBhY3RpdmF0b3IgPSB0YXJnZXQucXVlcnlTZWxlY3Rvcih0aGlzLmFjdGl2YXRvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmF0b3IuJGVsKSB7XG4gICAgICAgICAgLy8gQ29tcG9uZW50IChyZWYpXG4gICAgICAgICAgYWN0aXZhdG9yID0gdGhpcy5hY3RpdmF0b3IuJGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEhUTUxFbGVtZW50IHwgRWxlbWVudFxuICAgICAgICAgIGFjdGl2YXRvciA9IHRoaXMuYWN0aXZhdG9yO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZhdG9yTm9kZS5sZW5ndGggPT09IDEgfHwgdGhpcy5hY3RpdmF0b3JOb2RlLmxlbmd0aCAmJiAhZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBhY3RpdmF0b3Igc2xvdFxuICAgICAgICAvLyBUaGVyZSdzIGVpdGhlciBvbmx5IG9uZSBlbGVtZW50IGluIGl0IG9yIHdlXG4gICAgICAgIC8vIGRvbid0IGhhdmUgYSBjbGljayBldmVudCB0byB1c2UgYXMgYSBsYXN0IHJlc29ydFxuICAgICAgICBjb25zdCB2bSA9IHRoaXMuYWN0aXZhdG9yTm9kZVswXS5jb21wb25lbnRJbnN0YW5jZTtcblxuICAgICAgICBpZiAodm0gJiYgdm0uJG9wdGlvbnMubWl4aW5zICYmIC8vICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2YXRhYmxlIGlzIGluZGlyZWN0bHkgdXNlZCB2aWEgTWVudWFibGVcbiAgICAgICAgdm0uJG9wdGlvbnMubWl4aW5zLnNvbWUobSA9PiBtLm9wdGlvbnMgJiYgWydhY3RpdmF0YWJsZScsICdtZW51YWJsZSddLmluY2x1ZGVzKG0ub3B0aW9ucy5uYW1lKSkpIHtcbiAgICAgICAgICAvLyBBY3RpdmF0b3IgaXMgYWN0dWFsbHkgYW5vdGhlciBhY3RpdmF0aWJsZSBjb21wb25lbnQsIHVzZSBpdHMgYWN0aXZhdG9yICgjODg0NilcbiAgICAgICAgICBhY3RpdmF0b3IgPSB2bS5nZXRBY3RpdmF0b3IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmF0b3IgPSB0aGlzLmFjdGl2YXRvck5vZGVbMF0uZWxtO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUpIHtcbiAgICAgICAgLy8gQWN0aXZhdGVkIGJ5IGEgY2xpY2sgb3IgZm9jdXMgZXZlbnRcbiAgICAgICAgYWN0aXZhdG9yID0gZS5jdXJyZW50VGFyZ2V0IHx8IGUudGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2YXRvckVsZW1lbnQgPSBhY3RpdmF0b3I7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmF0b3JFbGVtZW50O1xuICAgIH0sXG5cbiAgICBnZXRDb250ZW50U2xvdCgpIHtcbiAgICAgIHJldHVybiBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgdGhpcy5nZXRWYWx1ZVByb3h5KCksIHRydWUpO1xuICAgIH0sXG5cbiAgICBnZXRWYWx1ZVByb3h5KCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaXNBY3RpdmU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHZhbHVlKGlzQWN0aXZlKSB7XG4gICAgICAgICAgc2VsZi5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbW92ZUFjdGl2YXRvckV2ZW50cygpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0b3IgfHwgIXRoaXMuYWN0aXZhdG9yRWxlbWVudCkgcmV0dXJuO1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICB0aGlzLmFjdGl2YXRvckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMubGlzdGVuZXJzW2tleV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIH0sXG5cbiAgICByZXNldEFjdGl2YXRvcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZhdG9yRXZlbnRzKCk7XG4gICAgICB0aGlzLmFjdGl2YXRvckVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoKTtcbiAgICAgIHRoaXMuYWRkQWN0aXZhdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJztcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnY29tcGFyYWJsZScsXG4gIHByb3BzOiB7XG4gICAgdmFsdWVDb21wYXJhdG9yOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGRlZXBFcXVhbFxuICAgIH1cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vKipcbiAqIERlbGF5YWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIENoYW5nZXMgdGhlIG9wZW4gb3IgY2xvc2UgZGVsYXkgdGltZSBmb3IgZWxlbWVudHNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKCkuZXh0ZW5kKHtcbiAgbmFtZTogJ2RlbGF5YWJsZScsXG4gIHByb3BzOiB7XG4gICAgb3BlbkRlbGF5OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgY2xvc2VEZWxheToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgb3BlblRpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICBjbG9zZVRpbWVvdXQ6IHVuZGVmaW5lZFxuICB9KSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIENsZWFyIGFueSBwZW5kaW5nIGRlbGF5IHRpbWVycyBmcm9tIGV4ZWN1dGluZ1xuICAgICAqL1xuICAgIGNsZWFyRGVsYXkoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuVGltZW91dCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVvdXQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGEgc3BlY2lmaWVkIGRlbGF5XG4gICAgICovXG4gICAgcnVuRGVsYXkodHlwZSwgY2IpIHtcbiAgICAgIHRoaXMuY2xlYXJEZWxheSgpO1xuICAgICAgY29uc3QgZGVsYXkgPSBwYXJzZUludCh0aGlzW2Ake3R5cGV9RGVsYXlgXSwgMTApO1xuICAgICAgdGhpc1tgJHt0eXBlfVRpbWVvdXRgXSA9IHNldFRpbWVvdXQoY2IgfHwgKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHtcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIGNsb3NlOiBmYWxzZVxuICAgICAgICB9W3R5cGVdO1xuICAgICAgfSksIGRlbGF5KTtcbiAgICB9XG5cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJztcblxuZnVuY3Rpb24gc2VhcmNoQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XTtcblxuICAgIGlmIChjaGlsZC5pc0FjdGl2ZSAmJiBjaGlsZC5pc0RlcGVuZGVudCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cy5wdXNoKC4uLnNlYXJjaENoaWxkcmVuKGNoaWxkLiRjaGlsZHJlbikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cblxuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoKS5leHRlbmQoe1xuICBuYW1lOiAnZGVwZW5kZW50JyxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbG9zZURlcGVuZGVudHM6IHRydWUsXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICBpc0RlcGVuZGVudDogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSh2YWwpIHtcbiAgICAgIGlmICh2YWwpIHJldHVybjtcbiAgICAgIGNvbnN0IG9wZW5EZXBlbmRlbnRzID0gdGhpcy5nZXRPcGVuRGVwZW5kZW50cygpO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3BlbkRlcGVuZGVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIG9wZW5EZXBlbmRlbnRzW2luZGV4XS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0T3BlbkRlcGVuZGVudHMoKSB7XG4gICAgICBpZiAodGhpcy5jbG9zZURlcGVuZGVudHMpIHJldHVybiBzZWFyY2hDaGlsZHJlbih0aGlzLiRjaGlsZHJlbik7XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcblxuICAgIGdldE9wZW5EZXBlbmRlbnRFbGVtZW50cygpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgY29uc3Qgb3BlbkRlcGVuZGVudHMgPSB0aGlzLmdldE9wZW5EZXBlbmRlbnRzKCk7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcGVuRGVwZW5kZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goLi4ub3BlbkRlcGVuZGVudHNbaW5kZXhdLmdldENsaWNrYWJsZURlcGVuZGVudEVsZW1lbnRzKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBnZXRDbGlja2FibGVEZXBlbmRlbnRFbGVtZW50cygpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFt0aGlzLiRlbF07XG4gICAgICBpZiAodGhpcy4kcmVmcy5jb250ZW50KSByZXN1bHQucHVzaCh0aGlzLiRyZWZzLmNvbnRlbnQpO1xuICAgICAgaWYgKHRoaXMub3ZlcmxheSkgcmVzdWx0LnB1c2godGhpcy5vdmVybGF5LiRlbCk7XG4gICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldE9wZW5EZXBlbmRlbnRFbGVtZW50cygpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gTWl4aW5zXG5pbXBvcnQgQm9vdGFibGUgZnJvbSAnLi4vYm9vdGFibGUnOyAvLyBVdGlsaXRpZXNcblxuaW1wb3J0IHsgZ2V0T2JqZWN0VmFsdWVCeVBhdGggfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucyc7XG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXR0YWNoVGFyZ2V0KHZhbCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiB2YWwubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cblxuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQm9vdGFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICdkZXRhY2hhYmxlJyxcbiAgcHJvcHM6IHtcbiAgICBhdHRhY2g6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZUF0dGFjaFRhcmdldFxuICAgIH0sXG4gICAgY29udGVudENsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhY3RpdmF0b3JOb2RlOiBudWxsLFxuICAgIGhhc0RldGFjaGVkOiBmYWxzZVxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICBhdHRhY2goKSB7XG4gICAgICB0aGlzLmhhc0RldGFjaGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmluaXREZXRhY2goKTtcbiAgICB9LFxuXG4gICAgaGFzQ29udGVudCgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMuaW5pdERldGFjaCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdG9yTm9kZSkge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSBBcnJheS5pc0FycmF5KHRoaXMuYWN0aXZhdG9yTm9kZSkgPyB0aGlzLmFjdGl2YXRvck5vZGUgOiBbdGhpcy5hY3RpdmF0b3JOb2RlXTtcbiAgICAgICAgYWN0aXZhdG9yLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgaWYgKCFub2RlLmVsbSkgcmV0dXJuO1xuICAgICAgICAgIGlmICghdGhpcy4kZWwucGFyZW50Tm9kZSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuJGVsID09PSB0aGlzLiRlbC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQgPyB0aGlzLiRlbCA6IHRoaXMuJGVsLm5leHRTaWJsaW5nO1xuICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUuZWxtLCB0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaGFzQ29udGVudCAmJiB0aGlzLmluaXREZXRhY2goKTtcbiAgfSxcblxuICBkZWFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAvLyBJRTExIEZpeFxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy5jb250ZW50ICYmIHRoaXMuJHJlZnMuY29udGVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJHJlZnMuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2YXRvck5vZGUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9yID0gQXJyYXkuaXNBcnJheSh0aGlzLmFjdGl2YXRvck5vZGUpID8gdGhpcy5hY3RpdmF0b3JOb2RlIDogW3RoaXMuYWN0aXZhdG9yTm9kZV07XG4gICAgICAgIGFjdGl2YXRvci5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIG5vZGUuZWxtICYmIG5vZGUuZWxtLnBhcmVudE5vZGUgJiYgbm9kZS5lbG0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlLmVsbSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2V0U2NvcGVJZEF0dHJzKCkge1xuICAgICAgY29uc3Qgc2NvcGVJZCA9IGdldE9iamVjdFZhbHVlQnlQYXRoKHRoaXMuJHZub2RlLCAnY29udGV4dC4kb3B0aW9ucy5fc2NvcGVJZCcpO1xuICAgICAgcmV0dXJuIHNjb3BlSWQgJiYge1xuICAgICAgICBbc2NvcGVJZF06ICcnXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBpbml0RGV0YWNoKCkge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICF0aGlzLiRyZWZzLmNvbnRlbnQgfHwgdGhpcy5oYXNEZXRhY2hlZCB8fCAvLyBMZWF2ZSBtZW51IGluIHBsYWNlIGlmIGF0dGFjaGVkXG4gICAgICAvLyBhbmQgZGV2IGhhcyBub3QgY2hhbmdlZCB0YXJnZXRcbiAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fCAvLyBJZiB1c2VkIGFzIGEgYm9vbGVhbiBwcm9wICg8di1tZW51IGF0dGFjaD4pXG4gICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fCAvLyBJZiBib3VuZCB0byBhIGJvb2xlYW4gKDx2LW1lbnUgOmF0dGFjaD1cInRydWVcIj4pXG4gICAgICB0aGlzLmF0dGFjaCA9PT0gJ2F0dGFjaCcgLy8gSWYgYm91bmQgYXMgYm9vbGVhbiBwcm9wIGluIHB1ZyAodi1tZW51KGF0dGFjaCkpXG4gICAgICApIHJldHVybjtcbiAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRGVmYXVsdCwgZGV0YWNoIHRvIGFwcFxuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hcHBdJyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmF0dGFjaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gQ1NTIHNlbGVjdG9yXG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hdHRhY2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRE9NIEVsZW1lbnRcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy5hdHRhY2g7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGVXYXJuKGBVbmFibGUgdG8gbG9jYXRlIHRhcmdldCAke3RoaXMuYXR0YWNoIHx8ICdbZGF0YS1hcHBdJ31gLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy4kcmVmcy5jb250ZW50KTtcbiAgICAgIHRoaXMuaGFzRGV0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnZmlsdGVyYWJsZScsXG4gIHByb3BzOiB7XG4gICAgbm9EYXRhVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5Lm5vRGF0YVRleHQnXG4gICAgfVxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIE1peGluc1xuaW1wb3J0IFBvc2l0aW9uYWJsZSBmcm9tICcuLi9wb3NpdGlvbmFibGUnO1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnO1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uL2FjdGl2YXRhYmxlJzsgLy8gVXRpbGl0aWVzXG5cbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnO1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7IC8vIFR5cGVzXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoU3RhY2thYmxlLCBQb3NpdGlvbmFibGUsIEFjdGl2YXRhYmxlKTtcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKCkuZXh0ZW5kKHtcbiAgbmFtZTogJ21lbnVhYmxlJyxcbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bydcbiAgICB9LFxuICAgIG1pbldpZHRoOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG51ZGdlQm90dG9tOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbnVkZ2VMZWZ0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIG51ZGdlVG9wOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbnVkZ2VXaWR0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgcG9zaXRpb25ZOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwsXG4gICAgYWN0aXZhdG9yRml4ZWQ6IGZhbHNlLFxuICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgIGFjdGl2YXRvcjoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRMZWZ0OiAwXG4gICAgICB9LFxuICAgICAgY29udGVudDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgaGFzV2luZG93OiBmYWxzZSxcbiAgICBpbnB1dEFjdGl2YXRvcjogZmFsc2UsXG4gICAgaXNDb250ZW50QWN0aXZlOiBmYWxzZSxcbiAgICBwYWdlV2lkdGg6IDAsXG4gICAgcGFnZVlPZmZzZXQ6IDAsXG4gICAgc3RhY2tDbGFzczogJ3YtbWVudV9fY29udGVudC0tYWN0aXZlJyxcbiAgICBzdGFja01pblpJbmRleDogNlxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZExlZnQoKSB7XG4gICAgICBjb25zdCBhID0gdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvcjtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudDtcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwO1xuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1heChhLndpZHRoLCBjLndpZHRoKTtcbiAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdDtcblxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSkgPyBhLndpZHRoIDogTWF0aC5taW4oYS53aWR0aCwgTnVtYmVyKHRoaXMubWF4V2lkdGgpKTtcbiAgICAgICAgbGVmdCArPSB0aGlzLmxlZnQgPyAtbWF4V2lkdGggOiBhLndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5udWRnZUxlZnQpIGxlZnQgLT0gcGFyc2VJbnQodGhpcy5udWRnZUxlZnQpO1xuICAgICAgaWYgKHRoaXMubnVkZ2VSaWdodCkgbGVmdCArPSBwYXJzZUludCh0aGlzLm51ZGdlUmlnaHQpO1xuICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfSxcblxuICAgIGNvbXB1dGVkVG9wKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3I7XG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQ7XG4gICAgICBsZXQgdG9wID0gMDtcbiAgICAgIGlmICh0aGlzLnRvcCkgdG9wICs9IGEuaGVpZ2h0IC0gYy5oZWlnaHQ7XG4gICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB0b3AgKz0gYS5vZmZzZXRUb3A7ZWxzZSB0b3AgKz0gYS50b3AgKyB0aGlzLnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHRoaXMub2Zmc2V0WSkgdG9wICs9IHRoaXMudG9wID8gLWEuaGVpZ2h0IDogYS5oZWlnaHQ7XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApO1xuICAgICAgaWYgKHRoaXMubnVkZ2VCb3R0b20pIHRvcCArPSBwYXJzZUludCh0aGlzLm51ZGdlQm90dG9tKTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfSxcblxuICAgIGhhc0FjdGl2YXRvcigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzLmFjdGl2YXRvciB8fCAhIXRoaXMuJHNjb3BlZFNsb3RzLmFjdGl2YXRvciB8fCAhIXRoaXMuYWN0aXZhdG9yIHx8ICEhdGhpcy5pbnB1dEFjdGl2YXRvcjtcbiAgICB9XG5cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkaXNhYmxlZCh2YWwpIHtcbiAgICAgIHZhbCAmJiB0aGlzLmNhbGxEZWFjdGl2YXRlKCk7XG4gICAgfSxcblxuICAgIGlzQWN0aXZlKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhbCA/IHRoaXMuY2FsbEFjdGl2YXRlKCkgOiB0aGlzLmNhbGxEZWFjdGl2YXRlKCk7XG4gICAgfSxcblxuICAgIHBvc2l0aW9uWDogJ3VwZGF0ZURpbWVuc2lvbnMnLFxuICAgIHBvc2l0aW9uWTogJ3VwZGF0ZURpbWVuc2lvbnMnXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWJzb2x1dGVQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBhY3RpdmF0ZSgpIHt9LFxuXG4gICAgY2FsY0xlZnQobWVudVdpZHRoKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2UgPyB0aGlzLmNvbXB1dGVkTGVmdCA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSk7XG4gICAgfSxcblxuICAgIGNhbGNUb3AoKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2UgPyB0aGlzLmNvbXB1dGVkVG9wIDogdGhpcy5jYWxjWU92ZXJmbG93KHRoaXMuY29tcHV0ZWRUb3ApKTtcbiAgICB9LFxuXG4gICAgY2FsY1hPdmVyZmxvdyhsZWZ0LCBtZW51V2lkdGgpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyO1xuXG4gICAgICBpZiAoKCF0aGlzLmxlZnQgfHwgdGhpcy5yaWdodCkgJiYgeE92ZXJmbG93ID4gMCkge1xuICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCAtIHhPdmVyZmxvdywgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCwgMTIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgIH0sXG5cbiAgICBjYWxjWU92ZXJmbG93KHRvcCkge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCk7XG4gICAgICBjb25zdCB0b1RvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyBkb2N1bWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3I7XG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0b3AgKyBjb250ZW50SGVpZ2h0O1xuICAgICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IHRvVG9wIDwgdG90YWxIZWlnaHQ7IC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuXG4gICAgICBpZiAoaXNPdmVyZmxvd2luZyAmJiB0aGlzLm9mZnNldE92ZXJmbG93ICYmIC8vIElmIHdlIGRvbid0IGhhdmUgZW5vdWdoIHJvb20gdG8gb2Zmc2V0XG4gICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgYWN0aXZhdG9yLnRvcCA+IGNvbnRlbnRIZWlnaHQpIHtcbiAgICAgICAgdG9wID0gdGhpcy5wYWdlWU9mZnNldCArIChhY3RpdmF0b3IudG9wIC0gY29udGVudEhlaWdodCk7IC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbVxuICAgICAgfSBlbHNlIGlmIChpc092ZXJmbG93aW5nICYmICF0aGlzLmFsbG93T3ZlcmZsb3cpIHtcbiAgICAgICAgdG9wID0gdG9Ub3AgLSBjb250ZW50SGVpZ2h0IC0gMTI7IC8vIElmIG92ZXJmbG93aW5nIHRvcFxuICAgICAgfSBlbHNlIGlmICh0b3AgPCB0aGlzLnBhZ2VZT2Zmc2V0ICYmICF0aGlzLmFsbG93T3ZlcmZsb3cpIHtcbiAgICAgICAgdG9wID0gdGhpcy5wYWdlWU9mZnNldCArIDEyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcDtcbiAgICB9LFxuXG4gICAgY2FsbEFjdGl2YXRlKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuO1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH0sXG5cbiAgICBjYWxsRGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICB9LFxuXG4gICAgY2hlY2tGb3JQYWdlWU9mZnNldCgpIHtcbiAgICAgIGlmICh0aGlzLmhhc1dpbmRvdykge1xuICAgICAgICB0aGlzLnBhZ2VZT2Zmc2V0ID0gdGhpcy5hY3RpdmF0b3JGaXhlZCA/IDAgOiB0aGlzLmdldE9mZnNldFRvcCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjaGVja0FjdGl2YXRvckZpeGVkKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgbGV0IGVsID0gdGhpcy5nZXRBY3RpdmF0b3IoKTtcblxuICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRvckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmF0b3JGaXhlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlKCkge30sXG5cbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBBY3RpdmF0YWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuQWN0aXZhdG9yTGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgICBjb25zdCBvbkNsaWNrID0gbGlzdGVuZXJzLmNsaWNrO1xuXG4gICAgICBsaXN0ZW5lcnMuY2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3Blbk9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFic29sdXRlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG5cbiAgICBnZXRJbm5lckhlaWdodCgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH0sXG5cbiAgICBnZXRPZmZzZXRMZWZ0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH0sXG5cbiAgICBnZXRPZmZzZXRUb3AoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9LFxuXG4gICAgZ2V0Um91bmRlZEJvdW5kZWRDbGllbnRSZWN0KGVsKSB7XG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IE1hdGgucm91bmQocmVjdC50b3ApLFxuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHJlY3QubGVmdCksXG4gICAgICAgIGJvdHRvbTogTWF0aC5yb3VuZChyZWN0LmJvdHRvbSksXG4gICAgICAgIHJpZ2h0OiBNYXRoLnJvdW5kKHJlY3QucmlnaHQpLFxuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChyZWN0LndpZHRoKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHJlY3QuaGVpZ2h0KVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWVhc3VyZShlbCkge1xuICAgICAgaWYgKCFlbCB8fCAhdGhpcy5oYXNXaW5kb3cpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Um91bmRlZEJvdW5kZWRDbGllbnRSZWN0KGVsKTsgLy8gQWNjb3VudCBmb3IgYWN0aXZhdG9yIG1hcmdpblxuXG4gICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0KTtcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3ApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdDtcbiAgICB9LFxuXG4gICAgc25lYWtQZWVrKGNiKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuJHJlZnMuY29udGVudDtcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjYigpO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0YXJ0VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gdGhpcy5oYXNKdXN0Rm9jdXNlZCA9IHRoaXMuaXNBY3RpdmU7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlRGltZW5zaW9ucygpIHtcbiAgICAgIHRoaXMuaGFzV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKTtcbiAgICAgIHRoaXMuY2hlY2tGb3JQYWdlWU9mZnNldCgpO1xuICAgICAgdGhpcy5wYWdlV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBkaW1lbnNpb25zID0ge1xuICAgICAgICBhY3RpdmF0b3I6IHsgLi4udGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvclxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiB7IC4uLnRoaXMuZGltZW5zaW9ucy5jb250ZW50XG4gICAgICAgIH1cbiAgICAgIH07IC8vIEFjdGl2YXRvciBzaG91bGQgYWxyZWFkeSBiZSBzaG93blxuXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZhdG9yIHx8IHRoaXMuYWJzb2x1dGUpIHtcbiAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3IgPSB0aGlzLmFic29sdXRlUG9zaXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKCk7XG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm47XG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yID0gdGhpcy5tZWFzdXJlKGFjdGl2YXRvcik7XG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdDtcblxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3Iub2Zmc2V0VG9wID0gMDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEaXNwbGF5IGFuZCBoaWRlIHRvIGdldCBkaW1lbnNpb25zXG5cblxuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAncmV0dXJuYWJsZScsXG4gIHByb3BzOiB7XG4gICAgcmV0dXJuVmFsdWU6IG51bGxcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgb3JpZ2luYWxWYWx1ZTogbnVsbFxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSh2YWwpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFZhbHVlID0gdGhpcy5yZXR1cm5WYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpyZXR1cm4tdmFsdWUnLCB0aGlzLm9yaWdpbmFsVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5vcmlnaW5hbFZhbHVlID0gdmFsdWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZ2V0WkluZGV4IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJztcbi8qIEB2dWUvY29tcG9uZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoKS5leHRlbmQoe1xuICBuYW1lOiAnc3RhY2thYmxlJyxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFja0VsZW1lbnQ6IG51bGwsXG4gICAgICBzdGFja0V4Y2x1ZGU6IG51bGwsXG4gICAgICBzdGFja01pblpJbmRleDogMCxcbiAgICAgIGlzQWN0aXZlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3RpdmVaSW5kZXgoKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwO1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuc3RhY2tFbGVtZW50IHx8IHRoaXMuJHJlZnMuY29udGVudDsgLy8gUmV0dXJuIGN1cnJlbnQgemluZGV4IGlmIG5vdCBhY3RpdmVcblxuICAgICAgY29uc3QgaW5kZXggPSAhdGhpcy5pc0FjdGl2ZSA/IGdldFpJbmRleChjb250ZW50KSA6IHRoaXMuZ2V0TWF4WkluZGV4KHRoaXMuc3RhY2tFeGNsdWRlIHx8IFtjb250ZW50XSkgKyAyO1xuICAgICAgaWYgKGluZGV4ID09IG51bGwpIHJldHVybiBpbmRleDsgLy8gUmV0dXJuIG1heCBjdXJyZW50IHotaW5kZXggKGV4Y2x1ZGluZyBzZWxmKSArIDJcbiAgICAgIC8vICgyIHRvIGxlYXZlIHJvb20gZm9yIGFuIG92ZXJsYXkgYmVsb3csIGlmIG5lZWRlZClcblxuICAgICAgcmV0dXJuIHBhcnNlSW50KGluZGV4KTtcbiAgICB9XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldE1heFpJbmRleChleGNsdWRlID0gW10pIHtcbiAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLiRlbDsgLy8gU3RhcnQgd2l0aCBsb3dlc3QgYWxsb3dlZCB6LWluZGV4IG9yIHotaW5kZXggb2ZcbiAgICAgIC8vIGJhc2UgY29tcG9uZW50J3MgZWxlbWVudCwgd2hpY2hldmVyIGlzIGdyZWF0ZXJcblxuICAgICAgY29uc3QgemlzID0gW3RoaXMuc3RhY2tNaW5aSW5kZXgsIGdldFpJbmRleChiYXNlKV07IC8vIENvbnZlcnQgdGhlIE5vZGVMaXN0IHRvIGFuIGFycmF5IHRvXG4gICAgICAvLyBwcmV2ZW50IGFuIEVkZ2UgYnVnIHdpdGggU3ltYm9sLml0ZXJhdG9yXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzIxNDZcblxuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndi1tZW51X19jb250ZW50LS1hY3RpdmUnKSwgLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndi1kaWFsb2dfX2NvbnRlbnQtLWFjdGl2ZScpXTsgLy8gR2V0IHotaW5kZXggZm9yIGFsbCBhY3RpdmUgZGlhbG9nc1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWN0aXZlRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyhhY3RpdmVFbGVtZW50c1tpbmRleF0pKSB7XG4gICAgICAgICAgemlzLnB1c2goZ2V0WkluZGV4KGFjdGl2ZUVsZW1lbnRzW2luZGV4XSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBNYXRoLm1heCguLi56aXMpO1xuICAgIH1cblxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=