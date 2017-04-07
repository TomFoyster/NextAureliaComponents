define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NextInputText = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var NextInputText = exports.NextInputText = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = (_class2 = function () {
    function NextInputText(Element) {
      _classCallCheck(this, NextInputText);

      _initDefineProp(this, 'label', _descriptor, this);

      _initDefineProp(this, 'inputId', _descriptor2, this);

      _initDefineProp(this, 'value', _descriptor3, this);

      _initDefineProp(this, 'placeholder', _descriptor4, this);

      this.element = Element;
    }

    NextInputText.prototype.bind = function bind() {
      if (!this.placeholder) {
        this.placeholder = '';
      }
    };

    NextInputText.prototype.onBlur = function onBlur(event) {
      var blurEvent = void 0;
      if (window.CustomEvent) {
        blurEvent = new CustomEvent('blur', {
          detail: { value: event.target.value }, bubbles: true
        });
      } else {
        blurEvent = document.createEvent('CustomEvent');
        blurEvent.initCustomEvent('blur', true, true, {
          detail: { value: event.target.value }
        });
      }
      this.element.dispatchEvent(blurEvent);
    };

    return NextInputText;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'inputId', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});