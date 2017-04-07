import {bindable, customElement, inject} from "aurelia-framework";

@inject(Element)
export class NextInputText {

  @bindable label;
  @bindable inputId;
  @bindable value;
  @bindable placeholder;

  constructor(Element) {
    this.element = Element;
  }

  bind() {
    // Default empty placeholder
    if(!this.placeholder) {
      this.placeholder = '';
    }
  }

  onBlur(event) {
    let blurEvent;
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
  }

}
