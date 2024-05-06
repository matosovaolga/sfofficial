import {
  common_exports,
  init_common
} from "./chunk-JZPUI6H7.js";
import {
  core_exports,
  init_core
} from "./chunk-CMBRPMDO.js";
import "./chunk-NNHZS5WN.js";
import "./chunk-UMWIXZIX.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-C7ZVMB2C.js";

// node_modules/ngx-owl-carousel/src/owl-child.component.js
var require_owl_child_component = __commonJS({
  "node_modules/ngx-owl-carousel/src/owl-child.component.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    };
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var OwlChild = function() {
      function OwlChild2(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === "undefined" && typeof jQuery !== "undefined") {
          $ = jQuery;
        }
      }
      OwlChild2.prototype.ngOnInit = function() {
        if (typeof window !== "undefined" && $ && typeof $.fn.owlCarousel === "function") {
          this.$owl = $(this.el.nativeElement);
        }
      };
      OwlChild2.prototype.ngAfterViewInit = function() {
        this.initOwl();
      };
      OwlChild2.prototype.initOwl = function() {
        var _this = this;
        if (this.$owl) {
          var options = {};
          Object.assign(options, this.options);
          if (this.currentSlideIndex) {
            options.startPosition = this.currentSlideIndex;
          }
          this.$owl.owlCarousel(options);
          this.$owl.on("changed.owl.carousel", function(event) {
            _this.currentSlideIndex = event.item.index;
          });
        }
      };
      OwlChild2.prototype.trigger = function(action, options) {
        if (this.$owl) {
          this.$owl.trigger(action, options);
        }
      };
      OwlChild2.prototype.ngOnDestroy = function() {
        this.destroyOwl();
        delete this.$owl;
      };
      OwlChild2.prototype.destroyOwl = function() {
        if (this.$owl) {
          this.$owl.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-hidden").find(".owl-stage:empty, .owl-item:empty").remove();
        }
      };
      __decorate([
        core_1.HostBinding("class.owl-carousel"),
        __metadata("design:type", Object)
      ], OwlChild2.prototype, "owlClass", void 0);
      __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
      ], OwlChild2.prototype, "options", void 0);
      OwlChild2 = __decorate([
        core_1.Component({
          selector: "owl-carousel-child",
          template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
      ], OwlChild2);
      return OwlChild2;
    }();
    exports.OwlChild = OwlChild;
  }
});

// node_modules/ngx-owl-carousel/src/owl-carousel.component.js
var require_owl_carousel_component = __commonJS({
  "node_modules/ngx-owl-carousel/src/owl-carousel.component.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    };
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var owl_child_component_1 = require_owl_child_component();
    var OwlCarousel = function() {
      function OwlCarousel2(differs) {
        this.differs = differs;
        this.carouselClasses = "";
        this.options = {};
      }
      Object.defineProperty(OwlCarousel2.prototype, "items", {
        set: function(coll) {
          this._items = coll;
          if (coll && !this.differ) {
            this.differ = this.differs.find(coll).create(null);
          }
        },
        enumerable: true,
        configurable: true
      });
      OwlCarousel2.prototype.ngDoCheck = function() {
        if (this.differ) {
          var changes = this.differ.diff(this._items);
          if (changes) {
            var changed_1 = false;
            var changedFn = function() {
              changed_1 = true;
            };
            changes.forEachAddedItem(changedFn);
            changes.forEachMovedItem(changedFn);
            changes.forEachRemovedItem(changedFn);
            if (changed_1) {
              this.reInit();
            }
          }
        }
      };
      OwlCarousel2.prototype.reInit = function() {
        var _this = this;
        if (this.$owlChild.$owl) {
          this.$owlChild.$owl.css("display", "none");
        }
        setTimeout(function() {
          _this.$owlChild.destroyOwl();
          if (_this.$owlChild.$owl) {
            var itemLength = _this._items && _this._items.length;
            if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
              _this.$owlChild.currentSlideIndex = itemLength;
            }
            _this.$owlChild.$owl.css("display", "block");
          }
          _this.$owlChild.initOwl();
        }, 0);
      };
      OwlCarousel2.prototype.refresh = function() {
        this.trigger("refresh.owl.carousel");
      };
      OwlCarousel2.prototype.next = function(options) {
        this.trigger("next.owl.carousel", options);
      };
      OwlCarousel2.prototype.previous = function(options) {
        this.trigger("prev.owl.carousel", options);
      };
      OwlCarousel2.prototype.to = function(options) {
        this.trigger("to.owl.carousel", options);
      };
      OwlCarousel2.prototype.trigger = function(action, options) {
        this.$owlChild.trigger(action, options);
      };
      __decorate([
        core_1.ViewChild("owl"),
        __metadata("design:type", owl_child_component_1.OwlChild)
      ], OwlCarousel2.prototype, "$owlChild", void 0);
      __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
      ], OwlCarousel2.prototype, "carouselClasses", void 0);
      __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
      ], OwlCarousel2.prototype, "options", void 0);
      __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
      ], OwlCarousel2.prototype, "items", null);
      OwlCarousel2 = __decorate([
        core_1.Component({
          selector: "owl-carousel",
          template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" ><ng-content></ng-content></owl-carousel-child>'
        }),
        __metadata("design:paramtypes", [core_1.IterableDiffers])
      ], OwlCarousel2);
      return OwlCarousel2;
    }();
    exports.OwlCarousel = OwlCarousel;
  }
});

// node_modules/ngx-owl-carousel/index.js
var require_ngx_owl_carousel = __commonJS({
  "node_modules/ngx-owl-carousel/index.js"(exports) {
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    };
    function __export(m) {
      for (var p in m)
        if (!exports.hasOwnProperty(p))
          exports[p] = m[p];
    }
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var common_1 = (init_common(), __toCommonJS(common_exports));
    var owl_carousel_component_1 = require_owl_carousel_component();
    var owl_child_component_1 = require_owl_child_component();
    __export(require_owl_carousel_component());
    var OwlModule = function() {
      function OwlModule2() {
      }
      OwlModule2 = __decorate([
        core_1.NgModule({
          imports: [
            common_1.CommonModule
          ],
          declarations: [
            owl_carousel_component_1.OwlCarousel,
            owl_child_component_1.OwlChild
          ],
          exports: [
            owl_carousel_component_1.OwlCarousel
          ]
        }),
        __metadata("design:paramtypes", [])
      ], OwlModule2);
      return OwlModule2;
    }();
    exports.OwlModule = OwlModule;
  }
});
export default require_ngx_owl_carousel();
//# sourceMappingURL=ngx-owl-carousel.js.map
