declare function Tippy(element: Element | HTMLElement, options?: tippy.TippyOptions): tippy.TippyInstance;

declare namespace tippy {
  interface TippyOptions {
    position?: string;
    trigger?: string;
    interactive?: boolean;
    interactiveBorder?: number;
    delay?: number;
    hideDelay?: number;
    animation?: "shift" | "perspective" | "fade" | "scale";
    arrow?: boolean;
    arrowSize?: "small" | "regular" | "big";
    animateFill?: boolean;
    duration?: number;
    hideDuration?: number;
    html?: false | string | Element | HTMLElement;
    size?: "small" | "regular" | "big";
    distance?: number;
    theme?: "dark" | "light" | "transparent";
    offset?: number;
    hideOnClick?: boolean | "persistent";
    multiple?: boolean;
    followCursor?: boolean;
    inertia?: boolean;
    flipDuration?: number;
    sticky?: boolean;
    stickyDuration?: number;
    appendTo?: Element | HTMLElement;
    zIndex?: number;
    popperOptions?: Object;

    beforeShown?: Function;
    shown?: Function;
    beforeHidden?: Function;
    hidden?: Function;
    wait?: (show: Function, event: Event) => void;
  }

  interface TippyInstance extends Object {
    show(popper: Element | HTMLElement);
    hide(popper: Element | HTMLElement);
    update(popper: Element | HTMLElement);
    destroy(popper: Element | HTMLElement);

    getPopperElement(refElement: Element | HTMLElement): Element | HTMLElement;
  }
}

declare module "tippy.js" {
  export default Tippy;
}
