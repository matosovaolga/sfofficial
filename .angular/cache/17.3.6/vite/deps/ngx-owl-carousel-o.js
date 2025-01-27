import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-OJF3IBOA.js";
import "./chunk-4DGP5SAW.js";
import "./chunk-CWP3LZT6.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-XYTYAWHS.js";
import {
  CommonModule,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-JZPUI6H7.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  init_core,
  init_operators,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate
} from "./chunk-CMBRPMDO.js";
import {
  Subject,
  delay,
  filter,
  first,
  from,
  fromEvent,
  init_esm5,
  map,
  merge,
  of,
  skip,
  switchMap,
  take,
  tap,
  toArray
} from "./chunk-NNHZS5WN.js";
import "./chunk-UMWIXZIX.js";
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-C7ZVMB2C.js";

// node_modules/ngx-owl-carousel-o/fesm2022/ngx-owl-carousel-o.mjs
init_core();
init_core();
init_common();
init_common();
init_esm5();
init_operators();
var _c0 = (a0, a1, a2, a3, a4) => ({
  "width": a0,
  "transform": a1,
  "transition": a2,
  "padding-left": a3,
  "padding-right": a4
});
var _c1 = (a0, a1, a2, a3) => ({
  "width": a0,
  "margin-left": a1,
  "margin-right": a2,
  "left": a3
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function StageComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const slide_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", slide_r2.tplRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c2, ctx_r2.preparePublicSlide(slide_r2), i_r5));
  }
}
function StageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
      const slide_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear(slide_r2.id));
    });
    ɵɵtemplate(2, StageComponent_ng_container_2_2_Template, 1, 5, null, 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngClass", slide_r2.classes)("ngStyle", ɵɵpureFunction4(4, _c1, slide_r2.width + "px", slide_r2.marginL ? slide_r2.marginL + "px" : "", slide_r2.marginR ? slide_r2.marginR + "px" : "", slide_r2.left))("@autoHeight", slide_r2.heightState);
    ɵɵadvance();
    ɵɵproperty("ngIf", slide_r2.load);
  }
}
var _c3 = (a0, a1, a2, a3, a4) => ({
  "owl-rtl": a0,
  "owl-loaded": a1,
  "owl-responsive": a2,
  "owl-drag": a3,
  "owl-grab": a4
});
var _c4 = (a0, a1) => ({
  "isMouseDragable": a0,
  "isTouchDragable": a1
});
var _c5 = (a0) => ({
  "disabled": a0
});
var _c6 = (a0, a1) => ({
  "active": a0,
  "owl-dot-text": a1
});
function CarouselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "owl-stage", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("owlDraggable", ɵɵpureFunction2(3, _c4, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
  }
}
function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
      const dot_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.moveByDot(dot_r5.id));
    });
    ɵɵelement(1, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dot_r5 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c6, dot_r5.active, dot_r5.showInnerContent));
    ɵɵadvance();
    ɵɵproperty("innerHTML", dot_r5.innerContent, ɵɵsanitizeHtml);
  }
}
function CarouselComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6)(2, "div", 7);
    ɵɵlistener("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prev());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵlistener("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.next());
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 9);
    ɵɵtemplate(5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.disabled));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.htmlText, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.htmlText, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(13, _c5, ctx_r1.dotsData == null ? null : ctx_r1.dotsData.disabled));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.dotsData == null ? null : ctx_r1.dotsData.dots);
  }
}
var OwlCarouselOConfig = class {
  constructor() {
    __publicField(this, "items", 3);
    __publicField(this, "skip_validateItems", false);
    __publicField(this, "loop", false);
    __publicField(this, "center", false);
    __publicField(this, "rewind", false);
    __publicField(this, "mouseDrag", true);
    __publicField(this, "touchDrag", true);
    __publicField(this, "pullDrag", true);
    __publicField(this, "freeDrag", false);
    __publicField(this, "margin", 0);
    __publicField(this, "stagePadding", 0);
    __publicField(this, "merge", false);
    __publicField(this, "mergeFit", true);
    __publicField(this, "autoWidth", false);
    __publicField(this, "startPosition", 0);
    __publicField(this, "rtl", false);
    __publicField(this, "smartSpeed", 250);
    __publicField(this, "fluidSpeed", false);
    __publicField(this, "dragEndSpeed", false);
    __publicField(this, "responsive", {});
    __publicField(this, "responsiveRefreshRate", 200);
    // defaults to Navigation
    __publicField(this, "nav", false);
    __publicField(this, "navText", ["prev", "next"]);
    __publicField(this, "navSpeed", false);
    __publicField(this, "slideBy", 1);
    // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
    __publicField(this, "dots", true);
    __publicField(this, "dotsEach", false);
    __publicField(this, "dotsData", false);
    __publicField(this, "dotsSpeed", false);
    // defaults to Autoplay
    __publicField(this, "autoplay", false);
    __publicField(this, "autoplayTimeout", 5e3);
    __publicField(this, "autoplayHoverPause", false);
    __publicField(this, "autoplaySpeed", false);
    __publicField(this, "autoplayMouseleaveTimeout", 1);
    // defaults to LazyLoading
    __publicField(this, "lazyLoad", false);
    __publicField(this, "lazyLoadEager", 0);
    // defaults to Animate
    __publicField(this, "slideTransition", "");
    __publicField(this, "animateOut", false);
    __publicField(this, "animateIn", false);
    // defaults to AutoHeight
    __publicField(this, "autoHeight", false);
    // defaults to Hash
    __publicField(this, "URLhashListener", false);
  }
};
var OwlOptionsMockedTypes = class {
  constructor() {
    __publicField(this, "items", "number");
    __publicField(this, "skip_validateItems", "boolean");
    __publicField(this, "loop", "boolean");
    __publicField(this, "center", "boolean");
    __publicField(this, "rewind", "boolean");
    __publicField(this, "mouseDrag", "boolean");
    __publicField(this, "touchDrag", "boolean");
    __publicField(this, "pullDrag", "boolean");
    __publicField(this, "freeDrag", "boolean");
    __publicField(this, "margin", "number");
    __publicField(this, "stagePadding", "number");
    __publicField(this, "merge", "boolean");
    __publicField(this, "mergeFit", "boolean");
    __publicField(this, "autoWidth", "boolean");
    __publicField(this, "startPosition", "number|string");
    __publicField(this, "rtl", "boolean");
    __publicField(this, "smartSpeed", "number");
    __publicField(this, "fluidSpeed", "boolean");
    __publicField(this, "dragEndSpeed", "number|boolean");
    __publicField(this, "responsive", {});
    __publicField(this, "responsiveRefreshRate", "number");
    // defaults to Navigation
    __publicField(this, "nav", "boolean");
    __publicField(this, "navText", "string[]");
    __publicField(this, "navSpeed", "number|boolean");
    __publicField(this, "slideBy", "number|string");
    // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
    __publicField(this, "dots", "boolean");
    __publicField(this, "dotsEach", "number|boolean");
    __publicField(this, "dotsData", "boolean");
    __publicField(this, "dotsSpeed", "number|boolean");
    // defaults to Autoplay
    __publicField(this, "autoplay", "boolean");
    __publicField(this, "autoplayTimeout", "number");
    __publicField(this, "autoplayHoverPause", "boolean");
    __publicField(this, "autoplaySpeed", "number|boolean");
    __publicField(this, "autoplayMouseleaveTimeout", "number");
    // defaults to LazyLoading
    __publicField(this, "lazyLoad", "boolean");
    __publicField(this, "lazyLoadEager", "number");
    // defaults to Animate
    __publicField(this, "slideTransition", "string");
    __publicField(this, "animateOut", "string|boolean");
    __publicField(this, "animateIn", "string|boolean");
    // defaults to AutoHeight
    __publicField(this, "autoHeight", "boolean");
    // defaults to Hash
    __publicField(this, "URLhashListener", "boolean");
  }
};
var _OwlLogger = class _OwlLogger {
  constructor(errorHandler) {
    __publicField(this, "errorHandler");
    this.errorHandler = errorHandler;
  }
  log(value, ...rest) {
    if (isDevMode()) {
      console.log(value, ...rest);
    }
  }
  error(error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    console.warn(value, ...rest);
  }
};
__publicField(_OwlLogger, "ɵfac", function OwlLogger_Factory(t) {
  return new (t || _OwlLogger)(ɵɵinject(ErrorHandler));
});
__publicField(_OwlLogger, "ɵprov", ɵɵdefineInjectable({
  token: _OwlLogger,
  factory: _OwlLogger.ɵfac
}));
var OwlLogger = _OwlLogger;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlLogger, [{
    type: Injectable
  }], () => [{
    type: ErrorHandler
  }], null);
})();
var Type;
(function(Type2) {
  Type2["Event"] = "event";
  Type2["State"] = "state";
})(Type || (Type = {}));
var Width;
(function(Width2) {
  Width2["Default"] = "default";
  Width2["Inner"] = "inner";
  Width2["Outer"] = "outer";
})(Width || (Width = {}));
var _CarouselService = class _CarouselService {
  constructor(logger) {
    __publicField(this, "logger");
    /**
     * Subject for passing data needed for managing View
     */
    __publicField(this, "_viewSettingsShipper$", new Subject());
    /**
     * Subject for notification when the carousel got initializes
     */
    __publicField(this, "_initializedCarousel$", new Subject());
    /**
     * Subject for notification when the carousel's settings start changinf
     */
    __publicField(this, "_changeSettingsCarousel$", new Subject());
    /**
     * Subject for notification when the carousel's settings have changed
     */
    __publicField(this, "_changedSettingsCarousel$", new Subject());
    /**
     * Subject for notification when the carousel starts translating or moving
     */
    __publicField(this, "_translateCarousel$", new Subject());
    /**
     * Subject for notification when the carousel stopped translating or moving
     */
    __publicField(this, "_translatedCarousel$", new Subject());
    /**
     * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
     */
    __publicField(this, "_resizeCarousel$", new Subject());
    /**
     * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
     */
    __publicField(this, "_resizedCarousel$", new Subject());
    /**
     * Subject for notification when the refresh of carousel starts
     */
    __publicField(this, "_refreshCarousel$", new Subject());
    /**
     * Subject for notification when the refresh of carousel is ended
     */
    __publicField(this, "_refreshedCarousel$", new Subject());
    /**
     * Subject for notification when the dragging of carousel starts
     */
    __publicField(this, "_dragCarousel$", new Subject());
    /**
     * Subject for notification when the dragging of carousel is ended
     */
    __publicField(this, "_draggedCarousel$", new Subject());
    /**
     * Current settings for the carousel.
     */
    __publicField(this, "settings", {
      items: 0
    });
    /**
     * Initial data for setting classes to element .owl-carousel
     */
    __publicField(this, "owlDOMData", {
      rtl: false,
      isResponsive: false,
      isRefreshed: false,
      isLoaded: false,
      isLoading: false,
      isMouseDragable: false,
      isGrab: false,
      isTouchDragable: false
    });
    /**
     * Initial data of .owl-stage
     */
    __publicField(this, "stageData", {
      transform: "translate3d(0px,0px,0px)",
      transition: "0s",
      width: 0,
      paddingL: 0,
      paddingR: 0
    });
    /**
     *  Data of every slide
     */
    __publicField(this, "slidesData");
    /**
     * Data of navigation block
     */
    __publicField(this, "navData");
    /**
     * Data of dots block
     */
    __publicField(this, "dotsData");
    /**
     * Carousel width
     */
    __publicField(this, "_width");
    /**
     * All real items.
     */
    __publicField(this, "_items", []);
    // is equal to this.slides
    /**
     * Array with width of every slide.
     */
    __publicField(this, "_widths", []);
    /**
     * Currently suppressed events to prevent them from beeing retriggered.
     */
    __publicField(this, "_supress", {});
    /**
     * References to the running plugins of this carousel.
     */
    __publicField(this, "_plugins", {});
    /**
     * Absolute current position.
     */
    __publicField(this, "_current", null);
    /**
     * All cloned items.
     */
    __publicField(this, "_clones", []);
    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     */
    __publicField(this, "_mergers", []);
    /**
     * Animation speed in milliseconds.
     */
    __publicField(this, "_speed", null);
    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     */
    __publicField(this, "_coordinates", []);
    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     */
    __publicField(this, "_breakpoint", null);
    /**
     * Prefix for id of cloned slides
     */
    __publicField(this, "clonedIdPrefix", "cloned-");
    /**
     * Current options set by the caller including defaults.
     */
    __publicField(this, "_options", {});
    /**
     * Invalidated parts within the update process.
     */
    __publicField(this, "_invalidated", {});
    /**
     * Current state information and their tags.
     */
    __publicField(this, "_states", {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    });
    /**
         * Ordered list of workers for the update process.
     */
    __publicField(this, "_pipe", [
      // {
      //   filter: ['width', 'settings'],
      //   run: () => {
      //     this._width = this.carouselWindowWidth;
      //   }
      // },
      {
        filter: ["width", "items", "settings"],
        run: (cache) => {
          cache.current = this._items && this._items[this.relative(this._current)]?.id;
        }
      },
      // {
      //   filter: ['items', 'settings'],
      //   run: function() {
      //     // this.$stage.children('.cloned').remove();
      //   }
      // },
      {
        filter: ["width", "items", "settings"],
        run: (cache) => {
          const margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
            "margin-left": rtl ? margin : "",
            "margin-right": rtl ? "" : margin
          };
          if (!grid) {
            this.slidesData.forEach((slide) => {
              slide.marginL = css["margin-left"];
              slide.marginR = css["margin-right"];
            });
          }
          cache.css = css;
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: (cache) => {
          const width = +(this.width() / this.settings.items).toFixed(3) - this.settings.margin, grid = !this.settings.autoWidth, widths = [];
          let merge2 = null, iterator = this._items.length;
          cache.items = {
            merge: false,
            width
          };
          while (iterator-- > 0) {
            merge2 = this._mergers[iterator];
            merge2 = this.settings.mergeFit && Math.min(merge2, this.settings.items) || merge2;
            cache.items.merge = merge2 > 1 || cache.items.merge;
            widths[iterator] = !grid ? this._items[iterator].width ? this._items[iterator].width : width : width * merge2;
          }
          this._widths = widths;
          this.slidesData.forEach((slide, i) => {
            slide.width = this._widths[i];
            slide.marginR = cache.css["margin-right"];
            slide.marginL = cache.css["margin-left"];
          });
        }
      },
      {
        filter: ["items", "settings"],
        run: () => {
          const clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
          let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
          repeat /= 2;
          while (repeat-- > 0) {
            clones.push(this.normalize(clones.length / 2, true));
            append.push(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
            clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
            prepend.unshift(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
          }
          this._clones = clones;
          append = append.map((slide) => {
            slide.id = `${this.clonedIdPrefix}${slide.id}`;
            slide.isActive = false;
            slide.isCloned = true;
            return slide;
          });
          prepend = prepend.map((slide) => {
            slide.id = `${this.clonedIdPrefix}${slide.id}`;
            slide.isActive = false;
            slide.isCloned = true;
            return slide;
          });
          this.slidesData = prepend.concat(this.slidesData).concat(append);
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: () => {
          const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
          let iterator = -1, previous = 0, current = 0;
          while (++iterator < size) {
            previous = coordinates[iterator - 1] || 0;
            current = this._widths[this.relative(iterator)] + this.settings.margin;
            coordinates.push(previous + current * rtl);
          }
          this._coordinates = coordinates;
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: () => {
          const padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
            "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
            "padding-left": padding || "",
            "padding-right": padding || ""
          };
          this.stageData.width = css.width;
          this.stageData.paddingL = css["padding-left"];
          this.stageData.paddingR = css["padding-right"];
        }
      },
      {
        //   filter: [ 'width', 'items', 'settings' ],
        //   run: cache => {
        // 		// this method sets the width for every slide, but I set it in different way earlier
        // 		const grid = !this.settings.autoWidth,
        // 		items = this.$stage.children(); // use this.slidesData
        //     let iterator = this._coordinates.length;
        //     if (grid && cache.items.merge) {
        //       while (iterator--) {
        //         cache.css.width = this._widths[this.relative(iterator)];
        //         items.eq(iterator).css(cache.css);
        //       }
        //     } else if (grid) {
        //       cache.css.width = cache.items.width;
        //       items.css(cache.css);
        //     }
        //   }
        // }, {
        //   filter: [ 'items' ],
        //   run: function() {
        //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
        //   }
        // }, {
        filter: ["width", "items", "settings"],
        run: (cache) => {
          let current = cache.current ? this.slidesData.findIndex((slide) => slide.id === cache.current) : 0;
          current = Math.max(this.minimum(), Math.min(this.maximum(), current));
          this.reset(current);
        }
      },
      {
        filter: ["position"],
        run: () => {
          this.animate(this.coordinates(this._current));
        }
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: () => {
          const rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, matches = [];
          let begin, end, inner, outer, i, n;
          begin = this.coordinates(this.current());
          if (typeof begin === "number") {
            begin += padding;
          } else {
            begin = 0;
          }
          end = begin + this.width() * rtl;
          if (rtl === -1 && this.settings.center) {
            const result = this._coordinates.filter((element) => {
              return this.settings.items % 2 === 1 ? element >= begin : element > begin;
            });
            begin = result.length ? result[result.length - 1] : begin;
          }
          for (i = 0, n = this._coordinates.length; i < n; i++) {
            inner = Math.ceil(this._coordinates[i - 1] || 0);
            outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
            if (this._op(inner, "<=", begin) && this._op(inner, ">", end) || this._op(outer, "<", begin) && this._op(outer, ">", end)) {
              matches.push(i);
            }
          }
          this.slidesData.forEach((slide) => {
            slide.isActive = false;
            return slide;
          });
          matches.forEach((item) => {
            this.slidesData[item].isActive = true;
          });
          if (this.settings.center) {
            this.slidesData.forEach((slide) => {
              slide.isCentered = false;
              return slide;
            });
            this.slidesData[this.current()].isCentered = true;
          }
        }
      }
    ]);
    this.logger = logger;
  }
  // Is needed for tests
  get invalidated() {
    return this._invalidated;
  }
  // is needed for tests
  get states() {
    return this._states;
  }
  /**
   * Makes _viewSettingsShipper$ Subject become Observable
   * @returns Observable of _viewSettingsShipper$ Subject
   */
  getViewCurSettings() {
    return this._viewSettingsShipper$.asObservable();
  }
  /**
   * Makes _initializedCarousel$ Subject become Observable
   * @returns Observable of _initializedCarousel$ Subject
   */
  getInitializedState() {
    return this._initializedCarousel$.asObservable();
  }
  /**
   * Makes _changeSettingsCarousel$ Subject become Observable
   * @returns Observable of _changeSettingsCarousel$ Subject
   */
  getChangeState() {
    return this._changeSettingsCarousel$.asObservable();
  }
  /**
   * Makes _changedSettingsCarousel$ Subject become Observable
   * @returns Observable of _changedSettingsCarousel$ Subject
   */
  getChangedState() {
    return this._changedSettingsCarousel$.asObservable();
  }
  /**
   * Makes _translateCarousel$ Subject become Observable
   * @returns Observable of _translateCarousel$ Subject
   */
  getTranslateState() {
    return this._translateCarousel$.asObservable();
  }
  /**
   * Makes _translatedCarousel$ Subject become Observable
   * @returns Observable of _translatedCarousel$ Subject
   */
  getTranslatedState() {
    return this._translatedCarousel$.asObservable();
  }
  /**
   * Makes _resizeCarousel$ Subject become Observable
   * @returns Observable of _resizeCarousel$ Subject
   */
  getResizeState() {
    return this._resizeCarousel$.asObservable();
  }
  /**
   * Makes _resizedCarousel$ Subject become Observable
   * @returns Observable of _resizedCarousel$ Subject
   */
  getResizedState() {
    return this._resizedCarousel$.asObservable();
  }
  /**
   * Makes _refreshCarousel$ Subject become Observable
   * @returns Observable of _refreshCarousel$ Subject
   */
  getRefreshState() {
    return this._refreshCarousel$.asObservable();
  }
  /**
   * Makes _refreshedCarousel$ Subject become Observable
   * @returns Observable of _refreshedCarousel$ Subject
   */
  getRefreshedState() {
    return this._refreshedCarousel$.asObservable();
  }
  /**
   * Makes _dragCarousel$ Subject become Observable
   * @returns Observable of _dragCarousel$ Subject
   */
  getDragState() {
    return this._dragCarousel$.asObservable();
  }
  /**
   * Makes _draggedCarousel$ Subject become Observable
   * @returns Observable of _draggedCarousel$ Subject
   */
  getDraggedState() {
    return this._draggedCarousel$.asObservable();
  }
  /**
   * Setups custom options expanding default options
   * @param options custom options
   */
  setOptions(options) {
    const configOptions = new OwlCarouselOConfig();
    const checkedOptions = this._validateOptions(options, configOptions);
    this._options = __spreadValues(__spreadValues({}, configOptions), checkedOptions);
  }
  /**
   * Checks whether user's option are set properly. Cheking is based on typings;
   * @param options options set by user
   * @param configOptions default options
   * @returns checked and modified (if it's needed) user's options
   *
   * Notes:
   * 	- if user set option with wrong type, it'll be written in console
   */
  _validateOptions(options, configOptions) {
    const checkedOptions = __spreadValues({}, options);
    const mockedTypes = new OwlOptionsMockedTypes();
    const setRightOption = (type, key) => {
      this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
      return configOptions[key];
    };
    for (const key in checkedOptions) {
      if (checkedOptions.hasOwnProperty(key)) {
        if (mockedTypes[key] === "number") {
          if (this._isNumeric(checkedOptions[key])) {
            checkedOptions[key] = +checkedOptions[key];
            checkedOptions[key] = key === "items" ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        } else if (mockedTypes[key] === "boolean" && typeof checkedOptions[key] !== "boolean") {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|boolean" && !this._isNumberOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|string" && !this._isNumberOrString(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string|boolean" && !this._isStringOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string[]") {
          if (Array.isArray(checkedOptions[key])) {
            let isString = false;
            checkedOptions[key].forEach((element) => {
              isString = typeof element === "string" ? true : false;
            });
            if (!isString) {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
            ;
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        }
      }
    }
    return checkedOptions;
  }
  /**
   * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
   * @param items option items set by user
   * @param skip_validateItems option `skip_validateItems` set by user
   * @returns right number of items
   */
  _validateItems(items, skip_validateItems) {
    let result = items;
    if (items > this._items.length) {
      if (skip_validateItems) {
        this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled");
      } else {
        result = this._items.length;
        this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled");
      }
    } else {
      if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
        this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled");
      }
    }
    return result;
  }
  /**
   * Set current width of carousel
   * @param width width of carousel Window
   */
  setCarouselWidth(width) {
    this._width = width;
  }
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @param carouselWidth width of carousel
   * @param slides array of slides
   * @param options options set by user
   */
  setup(carouselWidth, slides, options) {
    this.setCarouselWidth(carouselWidth);
    this.setItems(slides);
    this._defineSlidesData();
    this.setOptions(options);
    this.settings = __spreadValues({}, this._options);
    this.setOptionsForViewport();
    this._trigger("change", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
    this.invalidate("settings");
    this._trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }
  /**
   * Set options for current viewport
   */
  setOptionsForViewport() {
    const viewport = this._width, overwrites = this._options.responsive;
    let match = -1;
    if (!Object.keys(overwrites).length) {
      return;
    }
    if (!viewport) {
      this.settings.items = 1;
      return;
    }
    for (const key in overwrites) {
      if (overwrites.hasOwnProperty(key)) {
        if (+key <= viewport && +key > match) {
          match = Number(key);
        }
      }
    }
    this.settings = __spreadProps(__spreadValues(__spreadValues({}, this._options), overwrites[match]), {
      items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
    });
    delete this.settings.responsive;
    this.owlDOMData.isResponsive = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    const mergers = [];
    this._items.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      mergers.push(mergeN);
    });
    this._mergers = mergers;
    this._breakpoint = match;
    this.invalidate("settings");
  }
  /**
   * Initializes the carousel.
   * @param slides array of CarouselSlideDirective
   */
  initialize(slides) {
    this.enter("initializing");
    this.owlDOMData.rtl = this.settings.rtl;
    if (this._mergers.length) {
      this._mergers = [];
    }
    slides.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      this._mergers.push(mergeN);
    });
    this._clones = [];
    this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
    this.invalidate("items");
    this.refresh();
    this.owlDOMData.isLoaded = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    this.sendChanges();
    this.leave("initializing");
    this._trigger("initialized");
  }
  /**
   * Sends all data needed for View
   */
  sendChanges() {
    this._viewSettingsShipper$.next({
      owlDOMData: this.owlDOMData,
      stageData: this.stageData,
      slidesData: this.slidesData,
      navData: this.navData,
      dotsData: this.dotsData
    });
  }
  /**
   * Updates option logic if necessery
   */
  _optionsLogic() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = 0;
      this.settings.merge = false;
    }
  }
  /**
   * Updates the view
   */
  update() {
    let i = 0;
    const n = this._pipe.length, filter2 = (item) => this._invalidated[item], cache = {};
    while (i < n) {
      const filteredPipe = this._pipe[i].filter.filter(filter2);
      if (this._invalidated.all || filteredPipe.length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this.slidesData.forEach((slide) => slide.classes = this.setCurSlideClasses(slide));
    this.sendChanges();
    this._invalidated = {};
    if (!this.is("valid")) {
      this.enter("valid");
    }
  }
  /**
   * Gets the width of the view.
   * @param [dimension=Width.Default] The dimension to return
   * @returns The width of the view in pixel.
   */
  width(dimension) {
    dimension = dimension || Width.Default;
    switch (dimension) {
      case Width.Inner:
      case Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  }
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   */
  refresh() {
    this.enter("refreshing");
    this._trigger("refresh");
    this._defineSlidesData();
    this.setOptionsForViewport();
    this._optionsLogic();
    this.update();
    this.leave("refreshing");
    this._trigger("refreshed");
  }
  /**
   * Checks window `resize` event.
   * @param curWidth width of .owl-carousel
   */
  onResize(curWidth) {
    if (!this._items.length) {
      return false;
    }
    this.setCarouselWidth(curWidth);
    this.enter("resizing");
    this._trigger("resize");
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this._trigger("resized");
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  prepareDragging(event) {
    let stage = null, transformArr;
    transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(",");
    stage = {
      x: +transformArr[0],
      y: +transformArr[1]
    };
    if (this.is("animating")) {
      this.invalidate("position");
    }
    if (event.type === "mousedown") {
      this.owlDOMData.isGrab = true;
    }
    this.speed(0);
    return stage;
  }
  /**
   * Enters into a 'dragging' state
   */
  enterDragging() {
    this.enter("dragging");
    this._trigger("drag");
  }
  /**
   * Defines new coords for .owl-stage while dragging it
   * @todo #261
   * @param event the event arguments.
   * @param dragData initial data got after starting dragging
   * @returns coords or false
   */
  defineNewCoordsDrag(event, dragData) {
    let minimum = null, maximum = null, pull = null;
    const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
    if (!this.is("dragging")) {
      return false;
    }
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = +this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    return stage;
  }
  /**
   * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
   * @todo #261
   * @todo Threshold for click event
   * @param event the event arguments.
   * @param dragObj the object with dragging settings and states
   * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
   */
  finishDragging(event, dragObj, clickAttacher) {
    const directions = ["right", "left"], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
    let currentSlideI, current, newCurrent;
    if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
      this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
      currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
      current = this.current();
      newCurrent = this.current(currentSlideI === -1 ? void 0 : currentSlideI);
      if (current !== newCurrent) {
        this.invalidate("position");
        this.update();
      }
      dragObj.direction = direction;
      if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - dragObj.time > 300) {
        clickAttacher();
      }
    }
    if (!this.is("dragging")) {
      return;
    }
    this.leave("dragging");
    this._trigger("dragged");
  }
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @param coordinate The coordinate in pixel.
   * @param direction The direction to check for the closest item. Ether `left` or `right`.
   * @returns The absolute position of the closest item.
   */
  closest(coordinate, direction) {
    const pull = 30, width = this.width();
    let coordinates = this.coordinates(), position = -1;
    if (this.settings.center) {
      coordinates = coordinates.map((item) => {
        if (item === 0) {
          item += 1e-6;
        }
        return item;
      });
    }
    for (let i = 0; i < coordinates.length; i++) {
      if (direction === "left" && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      } else if (direction === "right" && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
        position = i + 1;
      } else if (this._op(coordinate, "<", coordinates[i]) && this._op(coordinate, ">", coordinates[i + 1] || coordinates[i] - width)) {
        position = direction === "left" ? i + 1 : i;
      } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      }
      if (position !== -1) {
        break;
      }
      ;
    }
    if (!this.settings.loop) {
      if (this._op(coordinate, ">", coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this._op(coordinate, "<", coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  }
  /**
   * Animates the stage.
   * @todo #270
   * @param coordinate The coordinate in pixels.
   */
  animate(coordinate) {
    const animate2 = this.speed() > 0;
    if (this.is("animating")) {
      this.onTransitionEnd();
    }
    if (animate2) {
      this.enter("animating");
      this._trigger("translate");
    }
    this.stageData.transform = "translate3d(" + coordinate + "px,0px,0px)";
    this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "");
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param state The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  is(state2) {
    return this._states.current[state2] && this._states.current[state2] > 0;
  }
  /**
   * Sets the absolute position of the current item.
   * @param position The new absolute position or nothing to leave it unchanged.
   * @returns The absolute position of the current item.
   */
  current(position) {
    if (position === void 0) {
      return this._current;
    }
    if (this._items.length === 0) {
      return void 0;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      const event = this._trigger("change", {
        property: {
          name: "position",
          value: position
        }
      });
      this._current = position;
      this.invalidate("position");
      this._trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }
    return this._current;
  }
  /**
   * Invalidates the given part of the update routine.
   * @param part The part to invalidate.
   * @returns The invalidated parts.
   */
  invalidate(part) {
    if (typeof part === "string") {
      this._invalidated[part] = true;
      if (this.is("valid")) {
        this.leave("valid");
      }
    }
    return Object.keys(this._invalidated);
  }
  /**
   * Resets the absolute position of the current item.
   * @param position the absolute position of the new item.
   */
  reset(position) {
    position = this.normalize(position);
    if (position === void 0) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this._suppress(["translate", "translated"]);
    this.animate(this.coordinates(position));
    this._release(["translate", "translated"]);
  }
  /**
   * Normalizes an absolute or a relative position of an item.
   * @param position The absolute or relative position to normalize.
   * @param relative Whether the given position is relative or not.
   * @returns The normalized position.
   */
  normalize(position, relative) {
    const n = this._items.length, m = relative ? 0 : this._clones.length;
    if (!this._isNumeric(position) || n < 1) {
      position = void 0;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  }
  /**
   * Converts an absolute position of an item into a relative one.
   * @param position The absolute position to convert.
   * @returns The converted position.
   */
  relative(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  }
  /**
   * Gets the maximum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of maximum position
   */
  maximum(relative = false) {
    const settings = this.settings;
    let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this.slidesData[--iterator].width;
      elementWidth = this._width;
      while (iterator-- > 0) {
        reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  }
  /**
   * Gets the minimum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of minimum position
   */
  minimum(relative = false) {
    return relative ? 0 : this._clones.length / 2;
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  items(position) {
    if (position === void 0) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return [this._items[position]];
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  mergers(position) {
    if (position === void 0) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  }
  /**
   * Gets the absolute positions of clones for an item.
   * @param position The relative position of the item.
   * @returns The absolute positions of clones for the item or all if no position was given.
   */
  clones(position) {
    const odd = this._clones.length / 2, even = odd + this._items.length, map2 = (index) => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    if (position === void 0) {
      return this._clones.map((v, i) => map2(i));
    }
    return this._clones.map((v, i) => v === position ? map2(i) : null).filter((item) => item);
  }
  /**
   * Sets the current animation speed.
   * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns The current animation speed in milliseconds.
   */
  speed(speed) {
    if (speed !== void 0) {
      this._speed = speed;
    }
    return this._speed;
  }
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @param position The absolute position of the item within `minimum()` and `maximum()`.
   * @returns The coordinate of the item in pixel or all coordinates.
   */
  coordinates(position) {
    let multiplier = 1, newPosition = position - 1, coordinate, result;
    if (position === void 0) {
      result = this._coordinates.map((item, index) => {
        return this.coordinates(index);
      });
      return result;
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  }
  /**
   * Calculates the speed for a translation.
   * @param from The absolute position of the start item.
   * @param to The absolute position of the target item.
   * @param factor [factor=undefined] - The time factor in milliseconds.
   * @returns The time in milliseconds for the translation.
   */
  _duration(from2, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from2), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
  }
  /**
   * Slides to the specified item.
   * @param position The position of the item.
   * @param speed The time in milliseconds for the transition.
   */
  to(position, speed) {
    let current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
    const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        delayForLoop = 30;
        this.reset(current);
        this.sendChanges();
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    setTimeout(() => {
      this.speed(this._duration(current, position, speed));
      this.current(position);
      this.update();
    }, delayForLoop);
  }
  /**
   * Slides to the next item.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  }
  /**
   * Slides to the previous item.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  }
  /**
   * Handles the end of an animation.
   * @param event - The event arguments.
   */
  onTransitionEnd(event) {
    if (event !== void 0) {
      return false;
    }
    this.leave("animating");
    this._trigger("translated");
  }
  /**
   * Gets viewport width.
   * @returns - The width in pixel.
   */
  _viewport() {
    let width;
    if (this._width) {
      width = this._width;
    } else {
      this.logger.log("Can not detect viewport width.");
    }
    return width;
  }
  /**
   * Sets _items
   * @param content The list of slides put into CarouselSlideDirectives.
   */
  setItems(content) {
    this._items = content;
  }
  /**
   * Sets slidesData using this._items
   */
  _defineSlidesData() {
    let loadMap;
    if (this.slidesData && this.slidesData.length) {
      loadMap = /* @__PURE__ */ new Map();
      this.slidesData.forEach((item) => {
        if (item.load) {
          loadMap.set(item.id, item.load);
        }
      });
    }
    this.slidesData = this._items.map((slide) => {
      return {
        id: `${slide.id}`,
        isActive: false,
        tplRef: slide.tplRef,
        dataMerge: slide.dataMerge,
        width: 0,
        isCloned: false,
        load: loadMap ? loadMap.get(slide.id) : false,
        hashFragment: slide.dataHash
      };
    });
  }
  /**
   * Sets current classes for slide
   * @param slide Slide of carousel
   * @returns object with names of css-classes which are keys and true/false values
   */
  setCurSlideClasses(slide) {
    const currentClasses = {
      "active": slide.isActive,
      "center": slide.isCentered,
      "cloned": slide.isCloned,
      "animated": slide.isAnimated,
      "owl-animated-in": slide.isDefAnimatedIn,
      "owl-animated-out": slide.isDefAnimatedOut
    };
    if (this.settings.animateIn) {
      currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
    }
    if (this.settings.animateOut) {
      currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
    }
    return currentClasses;
  }
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @param a - The left side operand.
   * @param o - The operator.
   * @param b - The right side operand.
   * @returns true/false meaning right-to-left or left-to-right
   */
  _op(a, o, b) {
    const rtl = this.settings.rtl;
    switch (o) {
      case "<":
        return rtl ? a > b : a < b;
      case ">":
        return rtl ? a < b : a > b;
      case ">=":
        return rtl ? a <= b : a >= b;
      case "<=":
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  }
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @param name The event name.
   * @param data The event data.
   * @param namespace The event namespace.
   * @param state The state which is associated with the event.
   * @param enter Indicates if the call enters the specified state or not.
   */
  _trigger(name, data, namespace, state2, enter) {
    switch (name) {
      case "initialized":
        this._initializedCarousel$.next(name);
        break;
      case "change":
        this._changeSettingsCarousel$.next(data);
        break;
      case "changed":
        this._changedSettingsCarousel$.next(data);
        break;
      case "drag":
        this._dragCarousel$.next(name);
        break;
      case "dragged":
        this._draggedCarousel$.next(name);
        break;
      case "resize":
        this._resizeCarousel$.next(name);
        break;
      case "resized":
        this._resizedCarousel$.next(name);
        break;
      case "refresh":
        this._refreshCarousel$.next(name);
        break;
      case "refreshed":
        this._refreshedCarousel$.next(name);
        break;
      case "translate":
        this._translateCarousel$.next(name);
        break;
      case "translated":
        this._translatedCarousel$.next(name);
        break;
      default:
        break;
    }
  }
  /**
   * Enters a state.
   * @param name - The state name.
   */
  enter(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === void 0) {
        this._states.current[stateName] = 0;
      }
      this._states.current[stateName]++;
    });
  }
  /**
   * Leaves a state.
   * @param name - The state name.
   */
  leave(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
        this._states.current[stateName]--;
      }
    });
  }
  /**
   * Registers an event or state.
   * @param object - The event or state to register.
   */
  register(object) {
    if (object.type === Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
        return this._states.tags[object.name].indexOf(tag) === i;
      });
    }
  }
  /**
   * Suppresses events.
   * @param events The events to suppress.
   */
  _suppress(events) {
    events.forEach((event) => {
      this._supress[event] = true;
    });
  }
  /**
   * Releases suppressed events.
   * @param events The events to release.
   */
  _release(events) {
    events.forEach((event) => {
      delete this._supress[event];
    });
  }
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @param event The `mousedown` or `touchstart` event.
   * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
   */
  pointer(event) {
    const result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  }
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @param number The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number
   */
  _isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  /**
   * Determines whether value is number or boolean type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
   */
  _isNumberOrBoolean(value) {
    return this._isNumeric(value) || typeof value === "boolean";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isNumberOrString(value) {
    return this._isNumeric(value) || typeof value === "string";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isStringOrBoolean(value) {
    return typeof value === "string" || typeof value === "boolean";
  }
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  difference(first2, second) {
    if (null === first2 || null === second) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: first2.x - second.x,
      y: first2.y - second.y
    };
  }
};
__publicField(_CarouselService, "ɵfac", function CarouselService_Factory(t) {
  return new (t || _CarouselService)(ɵɵinject(OwlLogger));
});
__publicField(_CarouselService, "ɵprov", ɵɵdefineInjectable({
  token: _CarouselService,
  factory: _CarouselService.ɵfac
}));
var CarouselService = _CarouselService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [{
    type: OwlLogger
  }], null);
})();
var _NavigationService = class _NavigationService {
  constructor(carouselService) {
    __publicField(this, "carouselService");
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    __publicField(this, "navSubscription");
    /**
     * Indicates whether the plugin is initialized or not.
     */
    __publicField(this, "_initialized", false);
    /**
     * The current paging indexes.
     */
    __publicField(this, "_pages", []);
    /**
     * Data for navigation elements of the user interface.
     */
    __publicField(this, "_navData", {
      disabled: false,
      prev: {
        disabled: false,
        htmlText: ""
      },
      next: {
        disabled: false,
        htmlText: ""
      }
    });
    /**
     * Data for dot elements of the user interface.
     */
    __publicField(this, "_dotsData", {
      disabled: false,
      dots: []
    });
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((state2) => {
      this.initialize();
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(filter((data) => data.property.name === "position"), tap((data) => {
      this.update();
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap(() => {
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const navMerge$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.navSubscription = navMerge$.subscribe(() => {
    });
  }
  /**
     * Initializes the layout of the plugin and extends the carousel.
     */
  initialize() {
    this._navData.disabled = true;
    this._navData.prev.htmlText = this.carouselService.settings.navText[0];
    this._navData.next.htmlText = this.carouselService.settings.navText[1];
    this._dotsData.disabled = true;
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Calculates internal states and updates prop _pages
   */
  _updateNavPages() {
    let i, j, k;
    const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
    let size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
    size = +size;
    if (settings.slideBy !== "page") {
      settings.slideBy = Math.min(+settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy === "page") {
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this.carouselService.mergers(this.carouselService.relative(i));
      }
    }
    this._pages = pages;
  }
  /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     */
  draw() {
    let difference;
    const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
    this._navData.disabled = !settings.nav || disabled;
    this._dotsData.disabled = !settings.dots || disabled;
    if (settings.dots) {
      difference = this._pages.length - this._dotsData.dots.length;
      if (settings.dotsData && difference !== 0) {
        this._dotsData.dots = [];
        items.forEach((item) => {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${item.id}`,
            innerContent: item.dotContent,
            showInnerContent: true
          });
        });
      } else if (difference > 0) {
        const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
        for (let i = 0; i < difference; i++) {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${i + startI}`,
            innerContent: "",
            showInnerContent: false
          });
        }
      } else if (difference < 0) {
        this._dotsData.dots.splice(difference, Math.abs(difference));
      }
    }
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Updates navigation buttons's and dots's states
   */
  update() {
    this._updateNavButtons();
    this._updateDots();
  }
  /**
   * Changes state of nav buttons (disabled, enabled)
   */
  _updateNavButtons() {
    const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
    if (settings.nav) {
      this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
      this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
    }
    this.carouselService.navData = this._navData;
  }
  /**
   * Changes active dot if page becomes changed
   */
  _updateDots() {
    let curActiveDotI;
    if (!this.carouselService.settings.dots) {
      return;
    }
    this._dotsData.dots.forEach((item) => {
      if (item.active === true) {
        item.active = false;
      }
    });
    curActiveDotI = this._current();
    if (this._dotsData.dots.length) {
      this._dotsData.dots[curActiveDotI].active = true;
    }
    this.carouselService.dotsData = this._dotsData;
  }
  /**
     * Gets the current page position of the carousel.
     * @returns the current page position of the carousel
     */
  _current() {
    const current = this.carouselService.relative(this.carouselService.current());
    let finalCurrent;
    const pages = this._pages.filter((page, index) => {
      return page.start <= current && page.end >= current;
    }).pop();
    finalCurrent = this._pages.findIndex((page) => {
      return page.start === pages.start && page.end === pages.end;
    });
    return finalCurrent;
  }
  /**
     * Gets the current succesor/predecessor position.
   * @param sussessor position of slide
     * @returns the current succesor/predecessor position
     */
  _getPosition(successor) {
    let position, length;
    const settings = this.carouselService.settings;
    if (settings.slideBy === "page") {
      position = this._current();
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this.carouselService.relative(this.carouselService.current());
      length = this.carouselService.items().length;
      successor ? position += +settings.slideBy : position -= +settings.slideBy;
    }
    return position;
  }
  /**
     * Slides to the next item or page.
     * @param speed The time in milliseconds for the transition.
     */
  next(speed) {
    this.carouselService.to(this._getPosition(true), speed);
  }
  /**
   * Slides to the previous item or page.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    this.carouselService.to(this._getPosition(false), speed);
  }
  /**
   * Slides to the specified item or page.
   * @param position - The position of the item or page.
   * @param speed - The time in milliseconds for the transition.
   * @param standard - Whether to use the standard behaviour or not. Default meaning false
   */
  to(position, speed, standard) {
    let length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
    } else {
      this.carouselService.to(position, speed);
    }
  }
  /**
   * Moves carousel after user's clicking on any dots
   */
  moveByDot(dotId) {
    const index = this._dotsData.dots.findIndex((dot) => dotId === dot.id);
    this.to(index, this.carouselService.settings.dotsSpeed);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id id of slide
   */
  toSlideById(id) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.id === id && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
};
__publicField(_NavigationService, "ɵfac", function NavigationService_Factory(t) {
  return new (t || _NavigationService)(ɵɵinject(CarouselService));
});
__publicField(_NavigationService, "ɵprov", ɵɵdefineInjectable({
  token: _NavigationService,
  factory: _NavigationService.ɵfac
}));
var NavigationService = _NavigationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var WINDOW = new InjectionToken("WindowToken");
var WindowRef = class {
  get nativeWindow() {
    throw new Error("Not implemented.");
  }
};
var _BrowserWindowRef = class _BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  /**
   * @returns window object
   */
  get nativeWindow() {
    return window;
  }
};
__publicField(_BrowserWindowRef, "ɵfac", function BrowserWindowRef_Factory(t) {
  return new (t || _BrowserWindowRef)();
});
__publicField(_BrowserWindowRef, "ɵprov", ɵɵdefineInjectable({
  token: _BrowserWindowRef,
  factory: _BrowserWindowRef.ɵfac
}));
var BrowserWindowRef = _BrowserWindowRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserWindowRef, [{
    type: Injectable
  }], () => [], null);
})();
function windowFactory(browserWindowRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  const obj = {
    setTimeout: (func, time) => {
    },
    clearTimeout: (a) => {
    }
  };
  return obj;
}
var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
var DOCUMENT = new InjectionToken("DocumentToken");
var DocumentRef = class {
  get nativeDocument() {
    throw new Error("Not implemented.");
  }
};
var _BrowserDocumentRef = class _BrowserDocumentRef extends DocumentRef {
  constructor() {
    super();
  }
  /**
   * @returns Document object
   */
  get nativeDocument() {
    return document;
  }
};
__publicField(_BrowserDocumentRef, "ɵfac", function BrowserDocumentRef_Factory(t) {
  return new (t || _BrowserDocumentRef)();
});
__publicField(_BrowserDocumentRef, "ɵprov", ɵɵdefineInjectable({
  token: _BrowserDocumentRef,
  factory: _BrowserDocumentRef.ɵfac
}));
var BrowserDocumentRef = _BrowserDocumentRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserDocumentRef, [{
    type: Injectable
  }], () => [], null);
})();
function documentFactory(browserDocumentRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserDocumentRef.nativeDocument;
  }
  const doc = {
    hidden: false,
    visibilityState: "visible"
  };
  return doc;
}
var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
var documentProvider = {
  provide: DOCUMENT,
  useFactory: documentFactory,
  deps: [DocumentRef, PLATFORM_ID]
};
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
var _AutoplayService = class _AutoplayService {
  constructor(carouselService, winRef, docRef, ngZone) {
    __publicField(this, "carouselService");
    __publicField(this, "ngZone");
    /**
     * Subscrioption to merge Observables from CarouselService
     */
    __publicField(this, "autoplaySubscription");
    /**
     * The autoplay timeout.
     */
    __publicField(this, "_timeout", null);
    /**
     * Indicates whenever the autoplay is paused.
     */
    __publicField(this, "_paused", false);
    /**
     * Shows whether the code (the plugin) changed the option 'AutoplayTimeout' for own needs
     */
    __publicField(this, "_isArtificialAutoplayTimeout");
    /**
     * Shows whether the autoplay is paused for unlimited time by the developer.
     * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
     */
    __publicField(this, "_isAutoplayStopped", false);
    __publicField(this, "winRef");
    __publicField(this, "docRef");
    this.carouselService = carouselService;
    this.ngZone = ngZone;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }
  get isAutoplayStopped() {
    return this._isAutoplayStopped;
  }
  set isAutoplayStopped(value) {
    this._isAutoplayStopped = value;
  }
  ngOnDestroy() {
    this.autoplaySubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay) {
        this.play();
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      this._handleChangeObservable(data);
    }));
    const resized$ = this.carouselService.getResizedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
        this.play();
      } else {
        this.stop();
      }
    }));
    const autoplayMerge$ = merge(initializedCarousel$, changedSettings$, resized$);
    this.autoplaySubscription = autoplayMerge$.subscribe(() => {
    });
  }
  /**
     * Starts the autoplay.
     * @param timeout The interval before the next animation starts.
     * @param speed The animation speed for the animations.
     */
  play(timeout, speed) {
    if (this._paused) {
      this._paused = false;
      this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
    }
    if (this.carouselService.is("rotating")) {
      return;
    }
    this.carouselService.enter("rotating");
    this._setAutoPlayInterval();
  }
  /**
     * Gets a new timeout
     * @param timeout - The interval before the next animation starts.
     * @param speed - The animation speed for the animations.
     * @return
     */
  _getNextTimeout(timeout, speed) {
    if (this._timeout) {
      this.winRef.clearTimeout(this._timeout);
    }
    this._isArtificialAutoplayTimeout = timeout ? true : false;
    return this.ngZone.runOutsideAngular(() => {
      return this.winRef.setTimeout(() => {
        this.ngZone.run(() => {
          if (this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden) {
            return;
          }
          this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
        });
      }, timeout || this.carouselService.settings.autoplayTimeout);
    });
  }
  /**
     * Sets autoplay in motion.
     */
  _setAutoPlayInterval(timeout) {
    this._timeout = this._getNextTimeout(timeout);
  }
  /**
   * Stops the autoplay.
   */
  stop() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
    this.winRef.clearTimeout(this._timeout);
    this.carouselService.leave("rotating");
  }
  /**
     * Stops the autoplay.
     */
  pause() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
  }
  /**
   * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
   * @param data object with current position of carousel and type of change
   */
  _handleChangeObservable(data) {
    if (data.property.name === "settings") {
      if (this.carouselService.settings.autoplay) {
        this.play();
      } else {
        this.stop();
      }
    } else if (data.property.name === "position") {
      if (this.carouselService.settings.autoplay) {
        this._setAutoPlayInterval();
      }
    }
  }
  /**
   * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
   */
  _playAfterTranslated() {
    of("translated").pipe(switchMap((data) => this.carouselService.getTranslatedState()), first(), filter(() => this._isArtificialAutoplayTimeout), tap(() => this._setAutoPlayInterval())).subscribe(() => {
    });
  }
  /**
   * Starts pausing
   */
  startPausing() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.pause();
    }
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayingMouseLeave() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  /**
   * Starts playing after touch ends
   */
  startPlayingTouchEnd() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
};
__publicField(_AutoplayService, "ɵfac", function AutoplayService_Factory(t) {
  return new (t || _AutoplayService)(ɵɵinject(CarouselService), ɵɵinject(WINDOW), ɵɵinject(DOCUMENT), ɵɵinject(NgZone));
});
__publicField(_AutoplayService, "ɵprov", ɵɵdefineInjectable({
  token: _AutoplayService,
  factory: _AutoplayService.ɵfac
}));
var AutoplayService = _AutoplayService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var _LazyLoadService = class _LazyLoadService {
  constructor(carouselService) {
    __publicField(this, "carouselService");
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    __publicField(this, "lazyLoadSubscription");
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.lazyLoadSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
      this.carouselService.slidesData.forEach((item) => item.load = isLazyLoad ? true : false);
    }));
    const changeSettings$ = this.carouselService.getChangeState();
    const resizedCarousel$ = this.carouselService.getResizedState();
    const lazyLoadMerge$ = merge(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(tap((data) => this._defineLazyLoadSlides(data)));
    this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => {
    });
  }
  _defineLazyLoadSlides(data) {
    if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
      return;
    }
    if (data.property && data.property.name === "position" || data === "initialized" || data === "resized") {
      const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
      let n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (data.property && data.property.value !== void 0 ? data.property.value : this.carouselService.current()) + i;
      if (settings.lazyLoadEager > 0) {
        n += settings.lazyLoadEager;
        if (settings.loop) {
          position -= settings.lazyLoadEager;
          n++;
        }
      }
      while (i++ < n) {
        this._load(clones / 2 + this.carouselService.relative(position));
        if (clones) {
          this.carouselService.clones(this.carouselService.relative(position)).forEach((value) => this._load(value));
        }
        position++;
      }
    }
  }
  /**
     * Loads all resources of an item at the specified position.
     * @param position - The absolute position of the item.
     */
  _load(position) {
    if (this.carouselService.slidesData[position].load) {
      return;
    }
    this.carouselService.slidesData[position].load = true;
  }
};
__publicField(_LazyLoadService, "ɵfac", function LazyLoadService_Factory(t) {
  return new (t || _LazyLoadService)(ɵɵinject(CarouselService));
});
__publicField(_LazyLoadService, "ɵprov", ɵɵdefineInjectable({
  token: _LazyLoadService,
  factory: _LazyLoadService.ɵfac
}));
var LazyLoadService = _LazyLoadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var _AnimateService = class _AnimateService {
  constructor(carouselService) {
    __publicField(this, "carouselService");
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    __publicField(this, "animateSubscription");
    /**
     * s
     */
    __publicField(this, "swapping", true);
    /**
     * active slide before translating
     */
    __publicField(this, "previous");
    /**
     * new active slide after translating
     */
    __publicField(this, "next");
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.animateSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const changeSettings$ = this.carouselService.getChangeState().pipe(tap((data) => {
      if (data.property.name === "position") {
        this.previous = this.carouselService.current();
        this.next = data.property.value;
      }
    }));
    const dragCarousel$ = this.carouselService.getDragState();
    const draggedCarousel$ = this.carouselService.getDraggedState();
    const translatedCarousel$ = this.carouselService.getTranslatedState();
    const dragTranslatedMerge$ = merge(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(tap((data) => this.swapping = data === "translated"));
    const translateCarousel$ = this.carouselService.getTranslateState().pipe(tap((data) => {
      if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
        this._swap();
      }
    }));
    const animateMerge$ = merge(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
    this.animateSubscription = animateMerge$.subscribe(() => {
    });
  }
  /**
     * Toggles the animation classes whenever an translations starts.
     * @returns
     */
  _swap() {
    if (this.carouselService.settings.items !== 1) {
      return;
    }
    this.carouselService.speed(0);
    let left;
    const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
    if (this.carouselService.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === previous.id) {
          slide.left = `${left}px`;
          slide.isAnimated = true;
          slide.isDefAnimatedOut = true;
          slide.isCustomAnimatedOut = true;
        }
      });
    }
    if (incoming) {
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === next.id) {
          slide.isAnimated = true;
          slide.isDefAnimatedIn = true;
          slide.isCustomAnimatedIn = true;
        }
      });
    }
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.carouselService.slidesData.forEach((slide) => {
      if (slide.id === id) {
        slide.left = "";
        slide.isAnimated = false;
        slide.isDefAnimatedOut = false;
        slide.isCustomAnimatedOut = false;
        slide.isDefAnimatedIn = false;
        slide.isCustomAnimatedIn = false;
        slide.classes = this.carouselService.setCurSlideClasses(slide);
      }
    });
    this.carouselService.onTransitionEnd();
  }
};
__publicField(_AnimateService, "ɵfac", function AnimateService_Factory(t) {
  return new (t || _AnimateService)(ɵɵinject(CarouselService));
});
__publicField(_AnimateService, "ɵprov", ɵɵdefineInjectable({
  token: _AnimateService,
  factory: _AnimateService.ɵfac
}));
var AnimateService = _AnimateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var _AutoHeightService = class _AutoHeightService {
  constructor(carouselService) {
    __publicField(this, "carouselService");
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    __publicField(this, "autoHeightSubscription");
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoHeightSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      } else {
        this.carouselService.slidesData.forEach((slide) => slide.heightState = "full");
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight && data.property.name === "position") {
        this.update();
      }
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      }
    }));
    const autoHeight$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.autoHeightSubscription = autoHeight$.subscribe(() => {
    });
  }
  /**
   * Updates the prop 'heightState' of slides
   */
  update() {
    const items = this.carouselService.settings.items;
    let start = this.carouselService.current(), end = start + items;
    if (this.carouselService.settings.center) {
      start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
      end = items % 2 === 1 ? start + items : start + items + 1;
    }
    this.carouselService.slidesData.forEach((slide, i) => {
      slide.heightState = i >= start && i < end ? "full" : "nulled";
    });
  }
};
__publicField(_AutoHeightService, "ɵfac", function AutoHeightService_Factory(t) {
  return new (t || _AutoHeightService)(ɵɵinject(CarouselService));
});
__publicField(_AutoHeightService, "ɵprov", ɵɵdefineInjectable({
  token: _AutoHeightService,
  factory: _AutoHeightService.ɵfac
}));
var AutoHeightService = _AutoHeightService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var _HashService = class _HashService {
  constructor(carouselService, route, router) {
    __publicField(this, "carouselService");
    __publicField(this, "route");
    __publicField(this, "router");
    /**
     * Subscription to merge Observable from CarouselService
     */
    __publicField(this, "hashSubscription");
    /**
     * Current url fragment (hash)
     */
    __publicField(this, "currentHashFragment");
    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();
    if (!this.route) {
      this.route = {
        fragment: of("no route").pipe(take(1))
      };
    }
    ;
    if (!this.router) {
      this.router = {
        navigate: (commands, extras) => {
          return;
        }
      };
    }
  }
  ngOnDestroy() {
    this.hashSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => this.listenToRoute()));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.URLhashListener && data.property.name === "position") {
        const newCurSlide = this.carouselService.current();
        const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
        if (!newCurFragment || newCurFragment === this.currentHashFragment) {
          return;
        }
        this.router.navigate(["./"], {
          fragment: newCurFragment,
          relativeTo: this.route
        });
      }
    }));
    const hashFragment$ = merge(initializedCarousel$, changedSettings$);
    this.hashSubscription = hashFragment$.subscribe(() => {
    });
  }
  /**
   * rewinds carousel to slide which has the same hashFragment as fragment of current url
   * @param fragment fragment of url
   */
  rewind(fragment) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.hashFragment === fragment && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  /**
   * Initiate listening to ActivatedRoute.fragment
   */
  listenToRoute() {
    const count = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2;
    this.route.fragment.pipe(skip(count)).subscribe((fragment) => {
      this.currentHashFragment = fragment;
      this.rewind(fragment);
    });
  }
};
__publicField(_HashService, "ɵfac", function HashService_Factory(t) {
  return new (t || _HashService)(ɵɵinject(CarouselService), ɵɵinject(ActivatedRoute, 8), ɵɵinject(Router, 8));
});
__publicField(_HashService, "ɵprov", ɵɵdefineInjectable({
  token: _HashService,
  factory: _HashService.ɵfac
}));
var HashService = _HashService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: ActivatedRoute,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId = 0;
var _CarouselSlideDirective = class _CarouselSlideDirective {
  constructor(tplRef) {
    __publicField(this, "tplRef");
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     */
    __publicField(this, "id", `owl-slide-${nextId++}`);
    /**
     * Defines how much widths of common slide will current slide have
     * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
     */
    __publicField(this, "_dataMerge", 1);
    /**
     * Width of slide
     */
    __publicField(this, "width", 0);
    /**
     * Inner content of dot for certain slide; can be html-markup
     */
    __publicField(this, "dotContent", "");
    /**
     * Hash (fragment) of url which corresponds to certain slide
     */
    __publicField(this, "dataHash", "");
    this.tplRef = tplRef;
  }
  set dataMerge(data) {
    this._dataMerge = this.isNumeric(data) ? data : 1;
  }
  get dataMerge() {
    return this._dataMerge;
  }
  /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param - The input to be tested
     * @returns - An indication if the input is a Number or can be coerced to a Number
     */
  isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
};
__publicField(_CarouselSlideDirective, "ɵfac", function CarouselSlideDirective_Factory(t) {
  return new (t || _CarouselSlideDirective)(ɵɵdirectiveInject(TemplateRef));
});
__publicField(_CarouselSlideDirective, "ɵdir", ɵɵdefineDirective({
  type: _CarouselSlideDirective,
  selectors: [["ng-template", "carouselSlide", ""]],
  inputs: {
    id: "id",
    dataMerge: "dataMerge",
    width: "width",
    dotContent: "dotContent",
    dataHash: "dataHash"
  }
}));
var CarouselSlideDirective = _CarouselSlideDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[carouselSlide]"
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input
    }],
    dataMerge: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    dotContent: [{
      type: Input
    }],
    dataHash: [{
      type: Input
    }]
  });
})();
var _ResizeService = class _ResizeService {
  constructor(winRef, platformId) {
    __publicField(this, "resizeObservable$");
    this.resizeObservable$ = isPlatformBrowser(platformId) ? fromEvent(winRef, "resize") : new Subject().asObservable();
  }
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */
  get onResize$() {
    return this.resizeObservable$;
  }
};
__publicField(_ResizeService, "ɵfac", function ResizeService_Factory(t) {
  return new (t || _ResizeService)(ɵɵinject(WINDOW), ɵɵinject(PLATFORM_ID));
});
__publicField(_ResizeService, "ɵprov", ɵɵdefineInjectable({
  token: _ResizeService,
  factory: _ResizeService.ɵfac
}));
var ResizeService = _ResizeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _StageComponent = class _StageComponent {
  constructor(zone, el, renderer, carouselService, animateService) {
    __publicField(this, "zone");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "carouselService");
    __publicField(this, "animateService");
    /**
     * Object with settings which make carousel draggable by touch or mouse
     */
    __publicField(this, "owlDraggable");
    /**
     * Data of owl-stage
     */
    __publicField(this, "stageData");
    /**
     *  Data of every slide
     */
    __publicField(this, "slidesData");
    /**
     * Function wich will be returned after attaching listener to 'mousemove' event
     */
    __publicField(this, "listenerMouseMove");
    /**
     * Function wich will be returned after attaching listener to 'touchmove' event
     */
    __publicField(this, "listenerTouchMove");
    /**
     * Function wich will be returned after attaching listener to 'mousemove' event
     */
    __publicField(this, "listenerOneMouseMove");
    /**
     * Function wich will be returned after attaching listener to 'touchmove' event
     */
    __publicField(this, "listenerOneTouchMove");
    /**
     * Function wich will be returned after attaching listener to 'mouseup' event
     */
    __publicField(this, "listenerMouseUp");
    /**
     * Function wich will be returned after attaching listener to 'touchend' event
     */
    __publicField(this, "listenerTouchEnd");
    /**
     * Function wich will be returned after attaching listener to 'click' event
     */
    __publicField(this, "listenerOneClick");
    __publicField(this, "listenerATag");
    /**
     * Object with data needed for dragging
     */
    __publicField(this, "_drag", {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    });
    /**
     * Subject for notification when the carousel's rebuilding caused by resize event starts
     */
    __publicField(this, "_oneDragMove$", new Subject());
    /**
     * Subsctiption to _oneDragMove$ Subject
     */
    __publicField(this, "_oneMoveSubsription");
    __publicField(this, "preparePublicSlide", (slide) => {
      const newSlide = __spreadValues({}, slide);
      delete newSlide.tplRef;
      return newSlide;
    });
    /**
     * Passes this to _oneMouseTouchMove();
     */
    __publicField(this, "bindOneMouseTouchMove", (ev) => {
      this._oneMouseTouchMove(ev);
    });
    /**
     * Passes this to _onDragMove();
     */
    __publicField(this, "bindOnDragMove", (ev) => {
      this._onDragMove(ev);
    });
    /**
     * Passes this to _onDragMove();
     */
    __publicField(this, "bindOnDragEnd", (ev) => {
      this._onDragEnd(ev);
    });
    /**
     * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
     */
    __publicField(this, "_oneClickHandler", () => {
      this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => false);
      this.listenerOneClick();
    });
    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
  }
  onMouseDown(event) {
    if (this.owlDraggable.isMouseDragable) {
      this._onDragStart(event);
    }
  }
  onTouchStart(event) {
    if (event.targetTouches.length >= 2) {
      return false;
    }
    if (this.owlDraggable.isTouchDragable) {
      this._onDragStart(event);
    }
  }
  onTouchCancel(event) {
    this._onDragEnd(event);
  }
  onDragStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  onSelectStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  ngOnInit() {
    this._oneMoveSubsription = this._oneDragMove$.pipe(first()).subscribe(() => {
      this._sendChanges();
    });
  }
  ngOnDestroy() {
    this._oneMoveSubsription.unsubscribe();
  }
  /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @param event - The event arguments.
     */
  _onDragStart(event) {
    let stage = null;
    if (event.which === 3) {
      return;
    }
    stage = this._prepareDragging(event);
    this._drag.time = (/* @__PURE__ */ new Date()).getTime();
    this._drag.target = event.target;
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this._pointer(event);
    this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd);
    this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd);
    this.zone.runOutsideAngular(() => {
      this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove);
      this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove);
    });
  }
  /**
   * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
   * @param event event objech of mouse or touch event
   */
  _oneMouseTouchMove(event) {
    const delta = this._difference(this._drag.pointer, this._pointer(event));
    if (this.listenerATag) {
      this.listenerATag();
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is("valid")) {
      return;
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is("valid")) {
      return;
    }
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    this._drag.moving = true;
    this.blockClickAnchorInDragging(event);
    this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove);
    this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove);
    event.preventDefault();
    this._enterDragging();
    this._oneDragMove$.next(event);
  }
  /**
   * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
   * @param event event object
   */
  blockClickAnchorInDragging(event) {
    let target = event.target;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      this.listenerATag = this.renderer.listen(target, "click", () => false);
    }
  }
  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @param event - The event arguments.
   */
  _onDragMove(event) {
    let stage;
    const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
    if (stageOrExit === false) {
      return;
    }
    stage = stageOrExit;
    event.preventDefault();
    this._drag.stage.current = stage;
    this._animate(stage.x - this._drag.stage.start.x);
  }
  /**
   * Moves .owl-stage left-right
   * @param coordinate coordinate to be set to .owl-stage
   */
  _animate(coordinate) {
    this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${coordinate}px,0px,0px`);
    this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s");
  }
  /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @param event - The event arguments.
     */
  _onDragEnd(event) {
    this.carouselService.owlDOMData.isGrab = false;
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    if (this._drag.moving) {
      this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ``);
      this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1e3 + "s");
      this._finishDragging(event);
      this.listenerMouseMove();
      this.listenerTouchMove();
    }
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    this.listenerMouseUp();
    this.listenerTouchEnd();
  }
  /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param event - The event arguments.
     * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
     */
  _prepareDragging(event) {
    return this.carouselService.prepareDragging(event);
  }
  /**
   * Finishes dragging
   * @param event object event of 'mouseUp' of 'touchend' events
   */
  _finishDragging(event) {
    this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
  }
  /**
     * Gets unified pointer coordinates from event.
     * @param event The `mousedown` or `touchstart` event.
     * @returns Contains `x` and `y` coordinates of current pointer position.
     */
  _pointer(event) {
    return this.carouselService.pointer(event);
  }
  /**
     * Gets the difference of two vectors.
     * @param first The first vector.
     * @param second The second vector.
     * @returns The difference.
     */
  _difference(firstC, second) {
    return this.carouselService.difference(firstC, second);
  }
  /**
     * Checks whether the carousel is in a specific state or not.
     * @param specificState The state to check.
     * @returns The flag which indicates if the carousel is busy.
     */
  _is(specificState) {
    return this.carouselService.is(specificState);
  }
  /**
  * Enters a state.
  * @param name The state name.
  */
  _enter(name) {
    this.carouselService.enter(name);
  }
  /**
     * Sends all data needed for View.
     */
  _sendChanges() {
    this.carouselService.sendChanges();
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
     * Enters into a 'dragging' state
     */
  _enterDragging() {
    this.carouselService.enterDragging();
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.animateService.clear(id);
  }
};
__publicField(_StageComponent, "ɵfac", function StageComponent_Factory(t) {
  return new (t || _StageComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(AnimateService));
});
__publicField(_StageComponent, "ɵcmp", ɵɵdefineComponent({
  type: _StageComponent,
  selectors: [["owl-stage"]],
  hostBindings: function StageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
        return ctx.onTouchCancel($event);
      })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
        return ctx.onDragStart();
      })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
        return ctx.onSelectStart();
      });
    }
  },
  inputs: {
    owlDraggable: "owlDraggable",
    stageData: "stageData",
    slidesData: "slidesData"
  },
  decls: 3,
  vars: 8,
  consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "animationend", "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function StageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div", 0);
      ɵɵlistener("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
        return ctx.onTransitionEnd();
      });
      ɵɵtemplate(2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngStyle", ɵɵpureFunction5(2, _c0, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.slidesData);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2,
  data: {
    animation: [trigger("autoHeight", [state("nulled", style({
      height: 0
    })), state("full", style({
      height: "*"
    })), transition("full => nulled", [
      // style({height: '*'}),
      animate("700ms 350ms")
    ]), transition("nulled => full", [
      // style({height: 0}),
      animate(350)
    ])])]
  }
}));
var StageComponent = _StageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageComponent, [{
    type: Component,
    args: [{
      selector: "owl-stage",
      template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData.width + 'px',
                                        'transform': stageData.transform,
                                        'transition': stageData.transition,
                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',
                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()">
        <ng-container *ngFor="let slide of slidesData; let i = index">
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [@autoHeight]="slide.heightState">
            <ng-template *ngIf="slide.load" [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ $implicit: preparePublicSlide(slide), index: i }"></ng-template>
          </div><!-- /.owl-item -->
        </ng-container>
      </div><!-- /.owl-stage -->
    </div>
  `,
      animations: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: CarouselService
  }, {
    type: AnimateService
  }], {
    owlDraggable: [{
      type: Input
    }],
    stageData: [{
      type: Input
    }],
    slidesData: [{
      type: Input
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchCancel: [{
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    onDragStart: [{
      type: HostListener,
      args: ["dragstart"]
    }],
    onSelectStart: [{
      type: HostListener,
      args: ["selectstart"]
    }]
  });
})();
var _CarouselComponent = class _CarouselComponent {
  constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    __publicField(this, "el");
    __publicField(this, "resizeService");
    __publicField(this, "carouselService");
    __publicField(this, "navigationService");
    __publicField(this, "autoplayService");
    __publicField(this, "lazyLoadService");
    __publicField(this, "animateService");
    __publicField(this, "autoHeightService");
    __publicField(this, "hashService");
    __publicField(this, "logger");
    __publicField(this, "changeDetectorRef");
    __publicField(this, "slides");
    __publicField(this, "translated", new EventEmitter());
    __publicField(this, "dragging", new EventEmitter());
    __publicField(this, "change", new EventEmitter());
    __publicField(this, "changed", new EventEmitter());
    __publicField(this, "initialized", new EventEmitter());
    /**
     * Width of carousel window (tag with class .owl-carousel), in wich we can see moving sliders
     */
    __publicField(this, "carouselWindowWidth");
    /**
     * Subscription to 'resize' event
     */
    __publicField(this, "resizeSubscription");
    /**
     * Subscription merge Observable, which merges all Observables in the component except 'resize' Observable and this.slides.changes()
     */
    __publicField(this, "_allObservSubscription");
    /**
     * Subscription to `this.slides.changes().
     * It could be included in 'this._allObservSubscription', but that subcription get created during the initializing of component
     * and 'this.slides' are undefined at that moment. So it's needed to wait for initialization of content.
     */
    __publicField(this, "_slidesChangesSubscription");
    /**
     * Current settings for the carousel.
     */
    __publicField(this, "owlDOMData");
    /**
     * Data of owl-stage
     */
    __publicField(this, "stageData");
    /**
     *  Data of every slide
     */
    __publicField(this, "slidesData", []);
    /**
     * Data of navigation block
     */
    __publicField(this, "navData");
    /**
     * Data of dots block
     */
    __publicField(this, "dotsData");
    /**
     * Data, wich are passed out of carousel after ending of transioning of carousel
     */
    __publicField(this, "slidesOutputData");
    /**
     * Shows whether carousel is loaded of not.
     */
    __publicField(this, "carouselLoaded", false);
    /**
     * User's options
     */
    __publicField(this, "options");
    __publicField(this, "prevOptions");
    /**
     * Observable for getting current View Settings
     */
    __publicField(this, "_viewCurSettings$");
    /**
     * Observable for catching the end of transition of carousel
     */
    __publicField(this, "_translatedCarousel$");
    /**
     * Observable for catching the start of dragging of the carousel
     */
    __publicField(this, "_draggingCarousel$");
    /**
     * Observable for catching the start of changing of the carousel
     */
    __publicField(this, "_changeCarousel$");
    /**
     * Observable for catching the moment when the data about slides changed, more exactly when the position changed.
     */
    __publicField(this, "_changedCarousel$");
    /**
     * Observable for catching the initialization of changing the carousel
     */
    __publicField(this, "_initializedCarousel$");
    /**
     * Observable for merging all Observables and creating one subscription
     */
    __publicField(this, "_carouselMerge$");
    __publicField(this, "docRef");
    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.docRef = docRef;
  }
  onVisibilityChange(ev) {
    if (!this.carouselService.settings.autoplay)
      return;
    switch (this.docRef.visibilityState) {
      case "visible":
        !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
        break;
      case "hidden":
        this.autoplayService.pause();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.spyDataStreams();
    this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
  }
  ngOnChanges() {
    if (this.prevOptions !== this.options) {
      if (this.prevOptions && this.slides?.toArray().length) {
        this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
        this.carouselService.initialize(this.slides.toArray());
      } else if (this.prevOptions && !this.slides?.toArray().length) {
        this.carouselLoaded = false;
        this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
      } else {
        this.carouselLoaded = false;
      }
      this.prevOptions = this.options;
    }
  }
  ngAfterContentInit() {
    if (this.slides.toArray().length) {
      this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
      this.carouselService.initialize(this.slides.toArray());
      this._winResizeWatcher();
    } else {
      this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
    }
    this._slidesChangesSubscription = this.slides.changes.pipe(tap((slides) => {
      this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options);
      this.carouselService.initialize(slides.toArray());
      if (!slides.toArray().length) {
        this.carouselLoaded = false;
      }
      if (slides.toArray().length && !this.resizeSubscription) {
        this._winResizeWatcher();
      }
    })).subscribe(() => {
    });
  }
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this._slidesChangesSubscription) {
      this._slidesChangesSubscription.unsubscribe();
    }
    if (this._allObservSubscription) {
      this._allObservSubscription.unsubscribe();
    }
  }
  /**
   * Joins the observable login in one place: sets values to some observables, merges this observables and
   * subcribes to merge func
   */
  spyDataStreams() {
    this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(tap((data) => {
      this.owlDOMData = data.owlDOMData;
      this.stageData = data.stageData;
      this.slidesData = data.slidesData;
      if (!this.carouselLoaded) {
        this.carouselLoaded = true;
      }
      this.navData = data.navData;
      this.dotsData = data.dotsData;
      this.changeDetectorRef.markForCheck();
    }));
    this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.initialized.emit(this.slidesOutputData);
    }));
    this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.translated.emit(this.slidesOutputData);
    }));
    this._changeCarousel$ = this.carouselService.getChangeState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.change.emit(this.slidesOutputData);
    }));
    this._changedCarousel$ = this.carouselService.getChangeState().pipe(switchMap((value) => {
      const changedPosition = of(value).pipe(filter(() => value.property.name === "position"), switchMap(() => from(this.slidesData)), skip(value.property.value), take(this.carouselService.settings.items), map((slide) => {
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return __spreadProps(__spreadValues({}, slide), {
          id,
          isActive: true
        });
      }), toArray(), map((slides) => {
        return {
          slides,
          startPosition: this.carouselService.relative(value.property.value)
        };
      }));
      return merge(changedPosition);
    }), tap((slidesData) => {
      this.gatherTranslatedData();
      this.changed.emit(slidesData.slides.length ? slidesData : this.slidesOutputData);
    }));
    this._draggingCarousel$ = this.carouselService.getDragState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.dragging.emit({
        dragging: true,
        data: this.slidesOutputData
      });
    }), switchMap(() => this.carouselService.getDraggedState().pipe(map(() => !!this.carouselService.is("animating")))), switchMap((anim) => {
      if (anim) {
        return this.carouselService.getTranslatedState().pipe(first());
      } else {
        return of("not animating");
      }
    }), tap(() => {
      this.dragging.emit({
        dragging: false,
        data: this.slidesOutputData
      });
    }));
    this._carouselMerge$ = merge(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
    this._allObservSubscription = this._carouselMerge$.subscribe(() => {
    });
  }
  /**
   * Init subscription to resize event and attaches handler for this event
   */
  _winResizeWatcher() {
    if (Object.keys(this.carouselService._options.responsive).length) {
      this.resizeSubscription = this.resizeService.onResize$.pipe(filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), delay(this.carouselService.settings.responsiveRefreshRate)).subscribe(() => {
        this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth);
        this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
      });
    }
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Handler for click event, attached to next button
   */
  next() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.next(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to prev button
   */
  prev() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.prev(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to dots
   */
  moveByDot(dotId) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.moveByDot(dotId);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id fragment of url
   */
  to(id) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.toSlideById(id);
  }
  /**
   * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
   */
  gatherTranslatedData() {
    let startPosition;
    const clonedIdPrefix = this.carouselService.clonedIdPrefix;
    const activeSlides = this.slidesData.filter((slide) => slide.isActive === true).map((slide) => {
      const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
      return {
        id,
        width: slide.width,
        marginL: slide.marginL,
        marginR: slide.marginR,
        center: slide.isCentered
      };
    });
    startPosition = this.carouselService.relative(this.carouselService.current());
    this.slidesOutputData = {
      startPosition,
      slides: activeSlides
    };
  }
  /**
   * Starts pausing
   */
  startPausing() {
    this.autoplayService.startPausing();
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayML() {
    this.autoplayService.startPlayingMouseLeave();
  }
  /**
   * Starts playing after touch ends
   */
  startPlayTE() {
    this.autoplayService.startPlayingTouchEnd();
  }
  stopAutoplay() {
    this.autoplayService.isAutoplayStopped = true;
    this.autoplayService.stop();
  }
  startAutoplay() {
    this.autoplayService.isAutoplayStopped = false;
    this.autoplayService.play();
  }
};
__publicField(_CarouselComponent, "ɵfac", function CarouselComponent_Factory(t) {
  return new (t || _CarouselComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(AutoplayService), ɵɵdirectiveInject(LazyLoadService), ɵɵdirectiveInject(AnimateService), ɵɵdirectiveInject(AutoHeightService), ɵɵdirectiveInject(HashService), ɵɵdirectiveInject(OwlLogger), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT));
});
__publicField(_CarouselComponent, "ɵcmp", ɵɵdefineComponent({
  type: _CarouselComponent,
  selectors: [["owl-carousel-o"]],
  contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CarouselSlideDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slides = _t);
    }
  },
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
        return ctx.onVisibilityChange($event);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    options: "options"
  },
  outputs: {
    translated: "translated",
    dragging: "dragging",
    change: "change",
    changed: "changed",
    initialized: "initialized"
  },
  features: [ɵɵProvidersFeature([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 9,
  consts: [["owlCarousel", ""], [1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "click", "ngClass", "innerHTML"], [1, "owl-next", 3, "click", "ngClass", "innerHTML"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "click", "ngClass"], [3, "innerHTML"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵlistener("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.startPausing());
      })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.startPlayML());
      })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.startPausing());
      })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.startPlayTE());
      });
      ɵɵtemplate(2, CarouselComponent_div_2_Template, 2, 6, "div", 2)(3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction5(3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.carouselLoaded);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.slides.toArray().length);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, StageComponent],
  styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
  changeDetection: 0
}));
var CarouselComponent = _CarouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "owl-carousel-o",
      template: `
    <div class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData?.rtl,
                  'owl-loaded': owlDOMData?.isLoaded,
                  'owl-responsive': owlDOMData?.isResponsive,
                  'owl-drag': owlDOMData?.isMouseDragable,
                  'owl-grab': owlDOMData?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div *ngIf="carouselLoaded" class="owl-stage-outer">
        <owl-stage [owlDraggable]="{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}"
                    [stageData]="stageData"
                    [slidesData]="slidesData"></owl-stage>
      </div> <!-- /.owl-stage-outer -->
      <ng-container *ngIf="slides.toArray().length">
        <div class="owl-nav" [ngClass]="{'disabled': navData?.disabled}">
          <div class="owl-prev" [ngClass]="{'disabled': navData?.prev?.disabled}" (click)="prev()" [innerHTML]="navData?.prev?.htmlText"></div>
          <div class="owl-next" [ngClass]="{'disabled': navData?.next?.disabled}" (click)="next()" [innerHTML]="navData?.next?.htmlText"></div>
        </div> <!-- /.owl-nav -->
        <div class="owl-dots" [ngClass]="{'disabled': dotsData?.disabled}">
          <div *ngFor="let dot of dotsData?.dots" class="owl-dot" [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" (click)="moveByDot(dot.id)">
            <span [innerHTML]="dot.innerContent"></span>
          </div>
        </div> <!-- /.owl-dots -->
      </ng-container>
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".owl-theme{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ResizeService
  }, {
    type: CarouselService
  }, {
    type: NavigationService
  }, {
    type: AutoplayService
  }, {
    type: LazyLoadService
  }, {
    type: AnimateService
  }, {
    type: AutoHeightService
  }, {
    type: HashService
  }, {
    type: OwlLogger
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    slides: [{
      type: ContentChildren,
      args: [CarouselSlideDirective]
    }],
    translated: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    changed: [{
      type: Output
    }],
    initialized: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    onVisibilityChange: [{
      type: HostListener,
      args: ["document:visibilitychange", ["$event"]]
    }]
  });
})();
var _OwlRouterLinkDirective = class _OwlRouterLinkDirective {
  constructor(router, route, tabIndex, renderer, el) {
    __publicField(this, "router");
    __publicField(this, "route");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "queryParams");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "fragment");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "queryParamsHandling");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "preserveFragment");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "skipLocationChange");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "replaceUrl");
    __publicField(this, "stopLink", false);
    __publicField(this, "commands", []);
    // TODO(issue/24571): remove '!'.
    __publicField(this, "preserve");
    this.router = router;
    this.route = route;
    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, "tabindex", "0");
    }
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  /**
   * @deprecated 4.0.0 use `queryParamsHandling` instead.
   */
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  onClick() {
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    if (this.stopLink) {
      return false;
    }
    this.router.navigateByUrl(this.urlTree, extras);
    return true;
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
};
__publicField(_OwlRouterLinkDirective, "ɵfac", function OwlRouterLinkDirective_Factory(t) {
  return new (t || _OwlRouterLinkDirective)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
});
__publicField(_OwlRouterLinkDirective, "ɵdir", ɵɵdefineDirective({
  type: _OwlRouterLinkDirective,
  selectors: [["", "owlRouterLink", "", 5, "a"]],
  hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    queryParams: "queryParams",
    fragment: "fragment",
    queryParamsHandling: "queryParamsHandling",
    preserveFragment: "preserveFragment",
    skipLocationChange: "skipLocationChange",
    replaceUrl: "replaceUrl",
    stopLink: "stopLink",
    owlRouterLink: "owlRouterLink",
    preserveQueryParams: "preserveQueryParams"
  }
}));
var OwlRouterLinkDirective = _OwlRouterLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a)[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _OwlRouterLinkWithHrefDirective = class _OwlRouterLinkWithHrefDirective {
  constructor(router, route, locationStrategy) {
    __publicField(this, "router");
    __publicField(this, "route");
    __publicField(this, "locationStrategy");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "target");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "queryParams");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "fragment");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "queryParamsHandling");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "preserveFragment");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "skipLocationChange");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "replaceUrl");
    __publicField(this, "stopLink", false);
    __publicField(this, "commands", []);
    __publicField(this, "subscription");
    // TODO(issue/24571): remove '!'.
    __publicField(this, "preserve");
    // the url displayed on the anchor element.
    // TODO(issue/24571): remove '!'.
    __publicField(this, "href");
    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateTargetUrlAndHref();
      }
    });
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  ngOnChanges(changes) {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(button, ctrlKey, metaKey, shiftKey) {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }
    if (typeof this.target === "string" && this.target !== "_self") {
      return true;
    }
    if (this.stopLink) {
      return false;
    }
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    this.router.navigateByUrl(this.urlTree, extras);
    return false;
  }
  updateTargetUrlAndHref() {
    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
};
__publicField(_OwlRouterLinkWithHrefDirective, "ɵfac", function OwlRouterLinkWithHrefDirective_Factory(t) {
  return new (t || _OwlRouterLinkWithHrefDirective)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(LocationStrategy));
});
__publicField(_OwlRouterLinkWithHrefDirective, "ɵdir", ɵɵdefineDirective({
  type: _OwlRouterLinkWithHrefDirective,
  selectors: [["a", "owlRouterLink", ""]],
  hostVars: 2,
  hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("href", ctx.href, ɵɵsanitizeUrl);
      ɵɵattribute("target", ctx.target);
    }
  },
  inputs: {
    target: "target",
    queryParams: "queryParams",
    fragment: "fragment",
    queryParamsHandling: "queryParamsHandling",
    preserveFragment: "preserveFragment",
    skipLocationChange: "skipLocationChange",
    replaceUrl: "replaceUrl",
    stopLink: "stopLink",
    owlRouterLink: "owlRouterLink",
    preserveQueryParams: "preserveQueryParams"
  },
  features: [ɵɵNgOnChangesFeature]
}));
var OwlRouterLinkWithHrefDirective = _OwlRouterLinkWithHrefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkWithHrefDirective, [{
    type: Directive,
    args: [{
      selector: "a[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    href: [{
      type: HostBinding
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]]
    }]
  });
})();
function attrBoolValue(s) {
  return s === "" || !!s;
}
var SlidesOutputData = class {
  constructor() {
    __publicField(this, "startPosition");
    __publicField(this, "slides");
  }
};
var _CarouselModule = class _CarouselModule {
};
__publicField(_CarouselModule, "ɵfac", function CarouselModule_Factory(t) {
  return new (t || _CarouselModule)();
});
__publicField(_CarouselModule, "ɵmod", ɵɵdefineNgModule({
  type: _CarouselModule,
  declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
  imports: [CommonModule],
  exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective]
}));
__publicField(_CarouselModule, "ɵinj", ɵɵdefineInjector({
  providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
  imports: [CommonModule]
}));
var CarouselModule = _CarouselModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
        // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
        // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();
var SlideModel = class {
  constructor() {
    /**
     * Id of slide
     */
    __publicField(this, "id");
    /**
     * Active state of slide. If true slide gets css-class .active
     */
    __publicField(this, "isActive");
    /**
     * TemplateRef of slide. In other words its html-markup
     */
    __publicField(this, "tplRef");
    /**
     * Number of grid parts to be used
     */
    __publicField(this, "dataMerge");
    /**
     * Width of slide
     */
    __publicField(this, "width");
    /**
     * Css-rule 'margin-left'
     */
    __publicField(this, "marginL");
    /**
     * Css-rule 'margin-right'
     */
    __publicField(this, "marginR");
    /**
     * Make slide to be on center of the carousel
     */
    __publicField(this, "isCentered");
    /**
     * Mark slide to be on center of the carousel (has .center)
     */
    __publicField(this, "center");
    /**
     * Cloned slide. It's being used when 'loop'=true
     */
    __publicField(this, "isCloned");
    /**
     * Indicates whether slide should be lazy loaded
     */
    __publicField(this, "load");
    /**
     * Css-rule 'left'
     */
    __publicField(this, "left");
    /**
     * Changeable classes of slide
     */
    __publicField(this, "classes");
    /**
     * Shows whether slide could be animated and could have css-class '.animated'
     */
    __publicField(this, "isAnimated");
    /**
     * Shows whether slide could be animated-in and could have css-class '.owl-animated-in'
     */
    __publicField(this, "isDefAnimatedIn");
    /**
     * Shows whether slide could be animated-out and could have css-class '.owl-animated-out'
     */
    __publicField(this, "isDefAnimatedOut");
    /**
     * Shows whether slide could be animated-in and could have animation css-class defined by user
     */
    __publicField(this, "isCustomAnimatedIn");
    /**
     * Shows whether slide could be animated-out and could have animation css-class defined by user
     */
    __publicField(this, "isCustomAnimatedOut");
    /**
     * State for defining the height of slide.It's values could be 'full' and 'nulled'. 'Full' sets css-height to 'auto', 'nulled' sets height to '0'.
     */
    __publicField(this, "heightState");
    /**
     * Hash (fragment) of url which corresponds to slide
     */
    __publicField(this, "hashFragment");
  }
};
export {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective,
  OwlRouterLinkDirective,
  OwlRouterLinkWithHrefDirective,
  SlideModel,
  SlidesOutputData
};
//# sourceMappingURL=ngx-owl-carousel-o.js.map
