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
    html?: false | string;
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
  }

  interface TippyInstance extends Object {
    show(instance: tippy.TippyInstance);
    hide(instance: tippy.TippyInstance);
    update(instance: tippy.TippyInstance);
    destroy(instance: tippy.TippyInstance);
  }
}

declare module "tippy.js" {
  export default Tippy;
}
