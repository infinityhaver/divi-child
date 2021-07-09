/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_slick_carousel__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_slick_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_script_loader_slick_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aos__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aos__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fancyapps_fancybox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fancyapps_fancybox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fancyapps_fancybox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_slick_carousel_slick_slick_theme_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_slick_carousel_slick_slick_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_slick_carousel_slick_slick_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_entry_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_entry_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_entry_scss__);
// import 'script-loader!jquery';






jQuery(document).ready(function ($) {

	// animate on scroll init
	__WEBPACK_IMPORTED_MODULE_1_aos___default.a.init({ once: true, duration: 700 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2)(__webpack_require__(3))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "/*\n     _ _      _       _\n ___| (_) ___| | __  (_)___\n/ __| | |/ __| |/ /  | / __|\n\\__ \\ | | (__|   < _ | \\__ \\\n|___/_|_|\\___|_|\\_(_)/ |___/\n                   |__/\n\n Version: 1.8.1\n  Author: Ken Wheeler\n Website: http://kenwheeler.github.io\n    Docs: http://kenwheeler.github.io/slick\n    Repo: http://github.com/kenwheeler/slick\n  Issues: http://github.com/kenwheeler/slick/issues\n\n */\n/* global window, document, define, jQuery, setInterval, clearInterval */\n;(function(factory) {\n    'use strict';\n    if (typeof define === 'function' && define.amd) {\n        define(['jquery'], factory);\n    } else if (typeof exports !== 'undefined') {\n        module.exports = factory(require('jquery'));\n    } else {\n        factory(jQuery);\n    }\n\n}(function($) {\n    'use strict';\n    var Slick = window.Slick || {};\n\n    Slick = (function() {\n\n        var instanceUid = 0;\n\n        function Slick(element, settings) {\n\n            var _ = this, dataSettings;\n\n            _.defaults = {\n                accessibility: true,\n                adaptiveHeight: false,\n                appendArrows: $(element),\n                appendDots: $(element),\n                arrows: true,\n                asNavFor: null,\n                prevArrow: '<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\">Previous</button>',\n                nextArrow: '<button class=\"slick-next\" aria-label=\"Next\" type=\"button\">Next</button>',\n                autoplay: false,\n                autoplaySpeed: 3000,\n                centerMode: false,\n                centerPadding: '50px',\n                cssEase: 'ease',\n                customPaging: function(slider, i) {\n                    return $('<button type=\"button\" />').text(i + 1);\n                },\n                dots: false,\n                dotsClass: 'slick-dots',\n                draggable: true,\n                easing: 'linear',\n                edgeFriction: 0.35,\n                fade: false,\n                focusOnSelect: false,\n                focusOnChange: false,\n                infinite: true,\n                initialSlide: 0,\n                lazyLoad: 'ondemand',\n                mobileFirst: false,\n                pauseOnHover: true,\n                pauseOnFocus: true,\n                pauseOnDotsHover: false,\n                respondTo: 'window',\n                responsive: null,\n                rows: 1,\n                rtl: false,\n                slide: '',\n                slidesPerRow: 1,\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                speed: 500,\n                swipe: true,\n                swipeToSlide: false,\n                touchMove: true,\n                touchThreshold: 5,\n                useCSS: true,\n                useTransform: true,\n                variableWidth: false,\n                vertical: false,\n                verticalSwiping: false,\n                waitForAnimate: true,\n                zIndex: 1000\n            };\n\n            _.initials = {\n                animating: false,\n                dragging: false,\n                autoPlayTimer: null,\n                currentDirection: 0,\n                currentLeft: null,\n                currentSlide: 0,\n                direction: 1,\n                $dots: null,\n                listWidth: null,\n                listHeight: null,\n                loadIndex: 0,\n                $nextArrow: null,\n                $prevArrow: null,\n                scrolling: false,\n                slideCount: null,\n                slideWidth: null,\n                $slideTrack: null,\n                $slides: null,\n                sliding: false,\n                slideOffset: 0,\n                swipeLeft: null,\n                swiping: false,\n                $list: null,\n                touchObject: {},\n                transformsEnabled: false,\n                unslicked: false\n            };\n\n            $.extend(_, _.initials);\n\n            _.activeBreakpoint = null;\n            _.animType = null;\n            _.animProp = null;\n            _.breakpoints = [];\n            _.breakpointSettings = [];\n            _.cssTransitions = false;\n            _.focussed = false;\n            _.interrupted = false;\n            _.hidden = 'hidden';\n            _.paused = true;\n            _.positionProp = null;\n            _.respondTo = null;\n            _.rowCount = 1;\n            _.shouldClick = true;\n            _.$slider = $(element);\n            _.$slidesCache = null;\n            _.transformType = null;\n            _.transitionType = null;\n            _.visibilityChange = 'visibilitychange';\n            _.windowWidth = 0;\n            _.windowTimer = null;\n\n            dataSettings = $(element).data('slick') || {};\n\n            _.options = $.extend({}, _.defaults, settings, dataSettings);\n\n            _.currentSlide = _.options.initialSlide;\n\n            _.originalSettings = _.options;\n\n            if (typeof document.mozHidden !== 'undefined') {\n                _.hidden = 'mozHidden';\n                _.visibilityChange = 'mozvisibilitychange';\n            } else if (typeof document.webkitHidden !== 'undefined') {\n                _.hidden = 'webkitHidden';\n                _.visibilityChange = 'webkitvisibilitychange';\n            }\n\n            _.autoPlay = $.proxy(_.autoPlay, _);\n            _.autoPlayClear = $.proxy(_.autoPlayClear, _);\n            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);\n            _.changeSlide = $.proxy(_.changeSlide, _);\n            _.clickHandler = $.proxy(_.clickHandler, _);\n            _.selectHandler = $.proxy(_.selectHandler, _);\n            _.setPosition = $.proxy(_.setPosition, _);\n            _.swipeHandler = $.proxy(_.swipeHandler, _);\n            _.dragHandler = $.proxy(_.dragHandler, _);\n            _.keyHandler = $.proxy(_.keyHandler, _);\n\n            _.instanceUid = instanceUid++;\n\n            // A simple way to check for HTML strings\n            // Strict HTML recognition (must start with <)\n            // Extracted from jQuery v1.11 source\n            _.htmlExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*)$/;\n\n\n            _.registerBreakpoints();\n            _.init(true);\n\n        }\n\n        return Slick;\n\n    }());\n\n    Slick.prototype.activateADA = function() {\n        var _ = this;\n\n        _.$slideTrack.find('.slick-active').attr({\n            'aria-hidden': 'false'\n        }).find('a, input, button, select').attr({\n            'tabindex': '0'\n        });\n\n    };\n\n    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {\n\n        var _ = this;\n\n        if (typeof(index) === 'boolean') {\n            addBefore = index;\n            index = null;\n        } else if (index < 0 || (index >= _.slideCount)) {\n            return false;\n        }\n\n        _.unload();\n\n        if (typeof(index) === 'number') {\n            if (index === 0 && _.$slides.length === 0) {\n                $(markup).appendTo(_.$slideTrack);\n            } else if (addBefore) {\n                $(markup).insertBefore(_.$slides.eq(index));\n            } else {\n                $(markup).insertAfter(_.$slides.eq(index));\n            }\n        } else {\n            if (addBefore === true) {\n                $(markup).prependTo(_.$slideTrack);\n            } else {\n                $(markup).appendTo(_.$slideTrack);\n            }\n        }\n\n        _.$slides = _.$slideTrack.children(this.options.slide);\n\n        _.$slideTrack.children(this.options.slide).detach();\n\n        _.$slideTrack.append(_.$slides);\n\n        _.$slides.each(function(index, element) {\n            $(element).attr('data-slick-index', index);\n        });\n\n        _.$slidesCache = _.$slides;\n\n        _.reinit();\n\n    };\n\n    Slick.prototype.animateHeight = function() {\n        var _ = this;\n        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {\n            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);\n            _.$list.animate({\n                height: targetHeight\n            }, _.options.speed);\n        }\n    };\n\n    Slick.prototype.animateSlide = function(targetLeft, callback) {\n\n        var animProps = {},\n            _ = this;\n\n        _.animateHeight();\n\n        if (_.options.rtl === true && _.options.vertical === false) {\n            targetLeft = -targetLeft;\n        }\n        if (_.transformsEnabled === false) {\n            if (_.options.vertical === false) {\n                _.$slideTrack.animate({\n                    left: targetLeft\n                }, _.options.speed, _.options.easing, callback);\n            } else {\n                _.$slideTrack.animate({\n                    top: targetLeft\n                }, _.options.speed, _.options.easing, callback);\n            }\n\n        } else {\n\n            if (_.cssTransitions === false) {\n                if (_.options.rtl === true) {\n                    _.currentLeft = -(_.currentLeft);\n                }\n                $({\n                    animStart: _.currentLeft\n                }).animate({\n                    animStart: targetLeft\n                }, {\n                    duration: _.options.speed,\n                    easing: _.options.easing,\n                    step: function(now) {\n                        now = Math.ceil(now);\n                        if (_.options.vertical === false) {\n                            animProps[_.animType] = 'translate(' +\n                                now + 'px, 0px)';\n                            _.$slideTrack.css(animProps);\n                        } else {\n                            animProps[_.animType] = 'translate(0px,' +\n                                now + 'px)';\n                            _.$slideTrack.css(animProps);\n                        }\n                    },\n                    complete: function() {\n                        if (callback) {\n                            callback.call();\n                        }\n                    }\n                });\n\n            } else {\n\n                _.applyTransition();\n                targetLeft = Math.ceil(targetLeft);\n\n                if (_.options.vertical === false) {\n                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';\n                } else {\n                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';\n                }\n                _.$slideTrack.css(animProps);\n\n                if (callback) {\n                    setTimeout(function() {\n\n                        _.disableTransition();\n\n                        callback.call();\n                    }, _.options.speed);\n                }\n\n            }\n\n        }\n\n    };\n\n    Slick.prototype.getNavTarget = function() {\n\n        var _ = this,\n            asNavFor = _.options.asNavFor;\n\n        if ( asNavFor && asNavFor !== null ) {\n            asNavFor = $(asNavFor).not(_.$slider);\n        }\n\n        return asNavFor;\n\n    };\n\n    Slick.prototype.asNavFor = function(index) {\n\n        var _ = this,\n            asNavFor = _.getNavTarget();\n\n        if ( asNavFor !== null && typeof asNavFor === 'object' ) {\n            asNavFor.each(function() {\n                var target = $(this).slick('getSlick');\n                if(!target.unslicked) {\n                    target.slideHandler(index, true);\n                }\n            });\n        }\n\n    };\n\n    Slick.prototype.applyTransition = function(slide) {\n\n        var _ = this,\n            transition = {};\n\n        if (_.options.fade === false) {\n            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;\n        } else {\n            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;\n        }\n\n        if (_.options.fade === false) {\n            _.$slideTrack.css(transition);\n        } else {\n            _.$slides.eq(slide).css(transition);\n        }\n\n    };\n\n    Slick.prototype.autoPlay = function() {\n\n        var _ = this;\n\n        _.autoPlayClear();\n\n        if ( _.slideCount > _.options.slidesToShow ) {\n            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );\n        }\n\n    };\n\n    Slick.prototype.autoPlayClear = function() {\n\n        var _ = this;\n\n        if (_.autoPlayTimer) {\n            clearInterval(_.autoPlayTimer);\n        }\n\n    };\n\n    Slick.prototype.autoPlayIterator = function() {\n\n        var _ = this,\n            slideTo = _.currentSlide + _.options.slidesToScroll;\n\n        if ( !_.paused && !_.interrupted && !_.focussed ) {\n\n            if ( _.options.infinite === false ) {\n\n                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {\n                    _.direction = 0;\n                }\n\n                else if ( _.direction === 0 ) {\n\n                    slideTo = _.currentSlide - _.options.slidesToScroll;\n\n                    if ( _.currentSlide - 1 === 0 ) {\n                        _.direction = 1;\n                    }\n\n                }\n\n            }\n\n            _.slideHandler( slideTo );\n\n        }\n\n    };\n\n    Slick.prototype.buildArrows = function() {\n\n        var _ = this;\n\n        if (_.options.arrows === true ) {\n\n            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');\n            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');\n\n            if( _.slideCount > _.options.slidesToShow ) {\n\n                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');\n                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');\n\n                if (_.htmlExpr.test(_.options.prevArrow)) {\n                    _.$prevArrow.prependTo(_.options.appendArrows);\n                }\n\n                if (_.htmlExpr.test(_.options.nextArrow)) {\n                    _.$nextArrow.appendTo(_.options.appendArrows);\n                }\n\n                if (_.options.infinite !== true) {\n                    _.$prevArrow\n                        .addClass('slick-disabled')\n                        .attr('aria-disabled', 'true');\n                }\n\n            } else {\n\n                _.$prevArrow.add( _.$nextArrow )\n\n                    .addClass('slick-hidden')\n                    .attr({\n                        'aria-disabled': 'true',\n                        'tabindex': '-1'\n                    });\n\n            }\n\n        }\n\n    };\n\n    Slick.prototype.buildDots = function() {\n\n        var _ = this,\n            i, dot;\n\n        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {\n\n            _.$slider.addClass('slick-dotted');\n\n            dot = $('<ul />').addClass(_.options.dotsClass);\n\n            for (i = 0; i <= _.getDotCount(); i += 1) {\n                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));\n            }\n\n            _.$dots = dot.appendTo(_.options.appendDots);\n\n            _.$dots.find('li').first().addClass('slick-active');\n\n        }\n\n    };\n\n    Slick.prototype.buildOut = function() {\n\n        var _ = this;\n\n        _.$slides =\n            _.$slider\n                .children( _.options.slide + ':not(.slick-cloned)')\n                .addClass('slick-slide');\n\n        _.slideCount = _.$slides.length;\n\n        _.$slides.each(function(index, element) {\n            $(element)\n                .attr('data-slick-index', index)\n                .data('originalStyling', $(element).attr('style') || '');\n        });\n\n        _.$slider.addClass('slick-slider');\n\n        _.$slideTrack = (_.slideCount === 0) ?\n            $('<div class=\"slick-track\"/>').appendTo(_.$slider) :\n            _.$slides.wrapAll('<div class=\"slick-track\"/>').parent();\n\n        _.$list = _.$slideTrack.wrap(\n            '<div class=\"slick-list\"/>').parent();\n        _.$slideTrack.css('opacity', 0);\n\n        if (_.options.centerMode === true || _.options.swipeToSlide === true) {\n            _.options.slidesToScroll = 1;\n        }\n\n        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');\n\n        _.setupInfinite();\n\n        _.buildArrows();\n\n        _.buildDots();\n\n        _.updateDots();\n\n\n        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);\n\n        if (_.options.draggable === true) {\n            _.$list.addClass('draggable');\n        }\n\n    };\n\n    Slick.prototype.buildRows = function() {\n\n        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;\n\n        newSlides = document.createDocumentFragment();\n        originalSlides = _.$slider.children();\n\n        if(_.options.rows > 0) {\n\n            slidesPerSection = _.options.slidesPerRow * _.options.rows;\n            numOfSlides = Math.ceil(\n                originalSlides.length / slidesPerSection\n            );\n\n            for(a = 0; a < numOfSlides; a++){\n                var slide = document.createElement('div');\n                for(b = 0; b < _.options.rows; b++) {\n                    var row = document.createElement('div');\n                    for(c = 0; c < _.options.slidesPerRow; c++) {\n                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));\n                        if (originalSlides.get(target)) {\n                            row.appendChild(originalSlides.get(target));\n                        }\n                    }\n                    slide.appendChild(row);\n                }\n                newSlides.appendChild(slide);\n            }\n\n            _.$slider.empty().append(newSlides);\n            _.$slider.children().children().children()\n                .css({\n                    'width':(100 / _.options.slidesPerRow) + '%',\n                    'display': 'inline-block'\n                });\n\n        }\n\n    };\n\n    Slick.prototype.checkResponsive = function(initial, forceUpdate) {\n\n        var _ = this,\n            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;\n        var sliderWidth = _.$slider.width();\n        var windowWidth = window.innerWidth || $(window).width();\n\n        if (_.respondTo === 'window') {\n            respondToWidth = windowWidth;\n        } else if (_.respondTo === 'slider') {\n            respondToWidth = sliderWidth;\n        } else if (_.respondTo === 'min') {\n            respondToWidth = Math.min(windowWidth, sliderWidth);\n        }\n\n        if ( _.options.responsive &&\n            _.options.responsive.length &&\n            _.options.responsive !== null) {\n\n            targetBreakpoint = null;\n\n            for (breakpoint in _.breakpoints) {\n                if (_.breakpoints.hasOwnProperty(breakpoint)) {\n                    if (_.originalSettings.mobileFirst === false) {\n                        if (respondToWidth < _.breakpoints[breakpoint]) {\n                            targetBreakpoint = _.breakpoints[breakpoint];\n                        }\n                    } else {\n                        if (respondToWidth > _.breakpoints[breakpoint]) {\n                            targetBreakpoint = _.breakpoints[breakpoint];\n                        }\n                    }\n                }\n            }\n\n            if (targetBreakpoint !== null) {\n                if (_.activeBreakpoint !== null) {\n                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {\n                        _.activeBreakpoint =\n                            targetBreakpoint;\n                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {\n                            _.unslick(targetBreakpoint);\n                        } else {\n                            _.options = $.extend({}, _.originalSettings,\n                                _.breakpointSettings[\n                                    targetBreakpoint]);\n                            if (initial === true) {\n                                _.currentSlide = _.options.initialSlide;\n                            }\n                            _.refresh(initial);\n                        }\n                        triggerBreakpoint = targetBreakpoint;\n                    }\n                } else {\n                    _.activeBreakpoint = targetBreakpoint;\n                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {\n                        _.unslick(targetBreakpoint);\n                    } else {\n                        _.options = $.extend({}, _.originalSettings,\n                            _.breakpointSettings[\n                                targetBreakpoint]);\n                        if (initial === true) {\n                            _.currentSlide = _.options.initialSlide;\n                        }\n                        _.refresh(initial);\n                    }\n                    triggerBreakpoint = targetBreakpoint;\n                }\n            } else {\n                if (_.activeBreakpoint !== null) {\n                    _.activeBreakpoint = null;\n                    _.options = _.originalSettings;\n                    if (initial === true) {\n                        _.currentSlide = _.options.initialSlide;\n                    }\n                    _.refresh(initial);\n                    triggerBreakpoint = targetBreakpoint;\n                }\n            }\n\n            // only trigger breakpoints during an actual break. not on initialize.\n            if( !initial && triggerBreakpoint !== false ) {\n                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);\n            }\n        }\n\n    };\n\n    Slick.prototype.changeSlide = function(event, dontAnimate) {\n\n        var _ = this,\n            $target = $(event.currentTarget),\n            indexOffset, slideOffset, unevenOffset;\n\n        // If target is a link, prevent default action.\n        if($target.is('a')) {\n            event.preventDefault();\n        }\n\n        // If target is not the <li> element (ie: a child), find the <li>.\n        if(!$target.is('li')) {\n            $target = $target.closest('li');\n        }\n\n        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);\n        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;\n\n        switch (event.data.message) {\n\n            case 'previous':\n                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;\n                if (_.slideCount > _.options.slidesToShow) {\n                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);\n                }\n                break;\n\n            case 'next':\n                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;\n                if (_.slideCount > _.options.slidesToShow) {\n                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);\n                }\n                break;\n\n            case 'index':\n                var index = event.data.index === 0 ? 0 :\n                    event.data.index || $target.index() * _.options.slidesToScroll;\n\n                _.slideHandler(_.checkNavigable(index), false, dontAnimate);\n                $target.children().trigger('focus');\n                break;\n\n            default:\n                return;\n        }\n\n    };\n\n    Slick.prototype.checkNavigable = function(index) {\n\n        var _ = this,\n            navigables, prevNavigable;\n\n        navigables = _.getNavigableIndexes();\n        prevNavigable = 0;\n        if (index > navigables[navigables.length - 1]) {\n            index = navigables[navigables.length - 1];\n        } else {\n            for (var n in navigables) {\n                if (index < navigables[n]) {\n                    index = prevNavigable;\n                    break;\n                }\n                prevNavigable = navigables[n];\n            }\n        }\n\n        return index;\n    };\n\n    Slick.prototype.cleanUpEvents = function() {\n\n        var _ = this;\n\n        if (_.options.dots && _.$dots !== null) {\n\n            $('li', _.$dots)\n                .off('click.slick', _.changeSlide)\n                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))\n                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));\n\n            if (_.options.accessibility === true) {\n                _.$dots.off('keydown.slick', _.keyHandler);\n            }\n        }\n\n        _.$slider.off('focus.slick blur.slick');\n\n        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {\n            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);\n            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);\n\n            if (_.options.accessibility === true) {\n                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);\n                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);\n            }\n        }\n\n        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);\n        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);\n        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);\n        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);\n\n        _.$list.off('click.slick', _.clickHandler);\n\n        $(document).off(_.visibilityChange, _.visibility);\n\n        _.cleanUpSlideEvents();\n\n        if (_.options.accessibility === true) {\n            _.$list.off('keydown.slick', _.keyHandler);\n        }\n\n        if (_.options.focusOnSelect === true) {\n            $(_.$slideTrack).children().off('click.slick', _.selectHandler);\n        }\n\n        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);\n\n        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);\n\n        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);\n\n        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);\n\n    };\n\n    Slick.prototype.cleanUpSlideEvents = function() {\n\n        var _ = this;\n\n        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));\n        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));\n\n    };\n\n    Slick.prototype.cleanUpRows = function() {\n\n        var _ = this, originalSlides;\n\n        if(_.options.rows > 0) {\n            originalSlides = _.$slides.children().children();\n            originalSlides.removeAttr('style');\n            _.$slider.empty().append(originalSlides);\n        }\n\n    };\n\n    Slick.prototype.clickHandler = function(event) {\n\n        var _ = this;\n\n        if (_.shouldClick === false) {\n            event.stopImmediatePropagation();\n            event.stopPropagation();\n            event.preventDefault();\n        }\n\n    };\n\n    Slick.prototype.destroy = function(refresh) {\n\n        var _ = this;\n\n        _.autoPlayClear();\n\n        _.touchObject = {};\n\n        _.cleanUpEvents();\n\n        $('.slick-cloned', _.$slider).detach();\n\n        if (_.$dots) {\n            _.$dots.remove();\n        }\n\n        if ( _.$prevArrow && _.$prevArrow.length ) {\n\n            _.$prevArrow\n                .removeClass('slick-disabled slick-arrow slick-hidden')\n                .removeAttr('aria-hidden aria-disabled tabindex')\n                .css('display','');\n\n            if ( _.htmlExpr.test( _.options.prevArrow )) {\n                _.$prevArrow.remove();\n            }\n        }\n\n        if ( _.$nextArrow && _.$nextArrow.length ) {\n\n            _.$nextArrow\n                .removeClass('slick-disabled slick-arrow slick-hidden')\n                .removeAttr('aria-hidden aria-disabled tabindex')\n                .css('display','');\n\n            if ( _.htmlExpr.test( _.options.nextArrow )) {\n                _.$nextArrow.remove();\n            }\n        }\n\n\n        if (_.$slides) {\n\n            _.$slides\n                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')\n                .removeAttr('aria-hidden')\n                .removeAttr('data-slick-index')\n                .each(function(){\n                    $(this).attr('style', $(this).data('originalStyling'));\n                });\n\n            _.$slideTrack.children(this.options.slide).detach();\n\n            _.$slideTrack.detach();\n\n            _.$list.detach();\n\n            _.$slider.append(_.$slides);\n        }\n\n        _.cleanUpRows();\n\n        _.$slider.removeClass('slick-slider');\n        _.$slider.removeClass('slick-initialized');\n        _.$slider.removeClass('slick-dotted');\n\n        _.unslicked = true;\n\n        if(!refresh) {\n            _.$slider.trigger('destroy', [_]);\n        }\n\n    };\n\n    Slick.prototype.disableTransition = function(slide) {\n\n        var _ = this,\n            transition = {};\n\n        transition[_.transitionType] = '';\n\n        if (_.options.fade === false) {\n            _.$slideTrack.css(transition);\n        } else {\n            _.$slides.eq(slide).css(transition);\n        }\n\n    };\n\n    Slick.prototype.fadeSlide = function(slideIndex, callback) {\n\n        var _ = this;\n\n        if (_.cssTransitions === false) {\n\n            _.$slides.eq(slideIndex).css({\n                zIndex: _.options.zIndex\n            });\n\n            _.$slides.eq(slideIndex).animate({\n                opacity: 1\n            }, _.options.speed, _.options.easing, callback);\n\n        } else {\n\n            _.applyTransition(slideIndex);\n\n            _.$slides.eq(slideIndex).css({\n                opacity: 1,\n                zIndex: _.options.zIndex\n            });\n\n            if (callback) {\n                setTimeout(function() {\n\n                    _.disableTransition(slideIndex);\n\n                    callback.call();\n                }, _.options.speed);\n            }\n\n        }\n\n    };\n\n    Slick.prototype.fadeSlideOut = function(slideIndex) {\n\n        var _ = this;\n\n        if (_.cssTransitions === false) {\n\n            _.$slides.eq(slideIndex).animate({\n                opacity: 0,\n                zIndex: _.options.zIndex - 2\n            }, _.options.speed, _.options.easing);\n\n        } else {\n\n            _.applyTransition(slideIndex);\n\n            _.$slides.eq(slideIndex).css({\n                opacity: 0,\n                zIndex: _.options.zIndex - 2\n            });\n\n        }\n\n    };\n\n    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {\n\n        var _ = this;\n\n        if (filter !== null) {\n\n            _.$slidesCache = _.$slides;\n\n            _.unload();\n\n            _.$slideTrack.children(this.options.slide).detach();\n\n            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);\n\n            _.reinit();\n\n        }\n\n    };\n\n    Slick.prototype.focusHandler = function() {\n\n        var _ = this;\n\n        _.$slider\n            .off('focus.slick blur.slick')\n            .on('focus.slick blur.slick', '*', function(event) {\n\n            event.stopImmediatePropagation();\n            var $sf = $(this);\n\n            setTimeout(function() {\n\n                if( _.options.pauseOnFocus ) {\n                    _.focussed = $sf.is(':focus');\n                    _.autoPlay();\n                }\n\n            }, 0);\n\n        });\n    };\n\n    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {\n\n        var _ = this;\n        return _.currentSlide;\n\n    };\n\n    Slick.prototype.getDotCount = function() {\n\n        var _ = this;\n\n        var breakPoint = 0;\n        var counter = 0;\n        var pagerQty = 0;\n\n        if (_.options.infinite === true) {\n            if (_.slideCount <= _.options.slidesToShow) {\n                 ++pagerQty;\n            } else {\n                while (breakPoint < _.slideCount) {\n                    ++pagerQty;\n                    breakPoint = counter + _.options.slidesToScroll;\n                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;\n                }\n            }\n        } else if (_.options.centerMode === true) {\n            pagerQty = _.slideCount;\n        } else if(!_.options.asNavFor) {\n            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);\n        }else {\n            while (breakPoint < _.slideCount) {\n                ++pagerQty;\n                breakPoint = counter + _.options.slidesToScroll;\n                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;\n            }\n        }\n\n        return pagerQty - 1;\n\n    };\n\n    Slick.prototype.getLeft = function(slideIndex) {\n\n        var _ = this,\n            targetLeft,\n            verticalHeight,\n            verticalOffset = 0,\n            targetSlide,\n            coef;\n\n        _.slideOffset = 0;\n        verticalHeight = _.$slides.first().outerHeight(true);\n\n        if (_.options.infinite === true) {\n            if (_.slideCount > _.options.slidesToShow) {\n                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;\n                coef = -1\n\n                if (_.options.vertical === true && _.options.centerMode === true) {\n                    if (_.options.slidesToShow === 2) {\n                        coef = -1.5;\n                    } else if (_.options.slidesToShow === 1) {\n                        coef = -2\n                    }\n                }\n                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;\n            }\n            if (_.slideCount % _.options.slidesToScroll !== 0) {\n                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {\n                    if (slideIndex > _.slideCount) {\n                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;\n                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;\n                    } else {\n                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;\n                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;\n                    }\n                }\n            }\n        } else {\n            if (slideIndex + _.options.slidesToShow > _.slideCount) {\n                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;\n                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;\n            }\n        }\n\n        if (_.slideCount <= _.options.slidesToShow) {\n            _.slideOffset = 0;\n            verticalOffset = 0;\n        }\n\n        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {\n            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);\n        } else if (_.options.centerMode === true && _.options.infinite === true) {\n            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;\n        } else if (_.options.centerMode === true) {\n            _.slideOffset = 0;\n            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);\n        }\n\n        if (_.options.vertical === false) {\n            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;\n        } else {\n            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;\n        }\n\n        if (_.options.variableWidth === true) {\n\n            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {\n                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);\n            } else {\n                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);\n            }\n\n            if (_.options.rtl === true) {\n                if (targetSlide[0]) {\n                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;\n                } else {\n                    targetLeft =  0;\n                }\n            } else {\n                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;\n            }\n\n            if (_.options.centerMode === true) {\n                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {\n                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);\n                } else {\n                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);\n                }\n\n                if (_.options.rtl === true) {\n                    if (targetSlide[0]) {\n                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;\n                    } else {\n                        targetLeft =  0;\n                    }\n                } else {\n                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;\n                }\n\n                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;\n            }\n        }\n\n        return targetLeft;\n\n    };\n\n    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {\n\n        var _ = this;\n\n        return _.options[option];\n\n    };\n\n    Slick.prototype.getNavigableIndexes = function() {\n\n        var _ = this,\n            breakPoint = 0,\n            counter = 0,\n            indexes = [],\n            max;\n\n        if (_.options.infinite === false) {\n            max = _.slideCount;\n        } else {\n            breakPoint = _.options.slidesToScroll * -1;\n            counter = _.options.slidesToScroll * -1;\n            max = _.slideCount * 2;\n        }\n\n        while (breakPoint < max) {\n            indexes.push(breakPoint);\n            breakPoint = counter + _.options.slidesToScroll;\n            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;\n        }\n\n        return indexes;\n\n    };\n\n    Slick.prototype.getSlick = function() {\n\n        return this;\n\n    };\n\n    Slick.prototype.getSlideCount = function() {\n\n        var _ = this,\n            slidesTraversed, swipedSlide, centerOffset;\n\n        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;\n\n        if (_.options.swipeToSlide === true) {\n            _.$slideTrack.find('.slick-slide').each(function(index, slide) {\n                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {\n                    swipedSlide = slide;\n                    return false;\n                }\n            });\n\n            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;\n\n            return slidesTraversed;\n\n        } else {\n            return _.options.slidesToScroll;\n        }\n\n    };\n\n    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {\n\n        var _ = this;\n\n        _.changeSlide({\n            data: {\n                message: 'index',\n                index: parseInt(slide)\n            }\n        }, dontAnimate);\n\n    };\n\n    Slick.prototype.init = function(creation) {\n\n        var _ = this;\n\n        if (!$(_.$slider).hasClass('slick-initialized')) {\n\n            $(_.$slider).addClass('slick-initialized');\n\n            _.buildRows();\n            _.buildOut();\n            _.setProps();\n            _.startLoad();\n            _.loadSlider();\n            _.initializeEvents();\n            _.updateArrows();\n            _.updateDots();\n            _.checkResponsive(true);\n            _.focusHandler();\n\n        }\n\n        if (creation) {\n            _.$slider.trigger('init', [_]);\n        }\n\n        if (_.options.accessibility === true) {\n            _.initADA();\n        }\n\n        if ( _.options.autoplay ) {\n\n            _.paused = false;\n            _.autoPlay();\n\n        }\n\n    };\n\n    Slick.prototype.initADA = function() {\n        var _ = this,\n                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),\n                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {\n                    return (val >= 0) && (val < _.slideCount);\n                });\n\n        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({\n            'aria-hidden': 'true',\n            'tabindex': '-1'\n        }).find('a, input, button, select').attr({\n            'tabindex': '-1'\n        });\n\n        if (_.$dots !== null) {\n            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {\n                var slideControlIndex = tabControlIndexes.indexOf(i);\n\n                $(this).attr({\n                    'role': 'tabpanel',\n                    'id': 'slick-slide' + _.instanceUid + i,\n                    'tabindex': -1\n                });\n\n                if (slideControlIndex !== -1) {\n                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex\n                   if ($('#' + ariaButtonControl).length) {\n                     $(this).attr({\n                         'aria-describedby': ariaButtonControl\n                     });\n                   }\n                }\n            });\n\n            _.$dots.attr('role', 'tablist').find('li').each(function(i) {\n                var mappedSlideIndex = tabControlIndexes[i];\n\n                $(this).attr({\n                    'role': 'presentation'\n                });\n\n                $(this).find('button').first().attr({\n                    'role': 'tab',\n                    'id': 'slick-slide-control' + _.instanceUid + i,\n                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,\n                    'aria-label': (i + 1) + ' of ' + numDotGroups,\n                    'aria-selected': null,\n                    'tabindex': '-1'\n                });\n\n            }).eq(_.currentSlide).find('button').attr({\n                'aria-selected': 'true',\n                'tabindex': '0'\n            }).end();\n        }\n\n        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {\n          if (_.options.focusOnChange) {\n            _.$slides.eq(i).attr({'tabindex': '0'});\n          } else {\n            _.$slides.eq(i).removeAttr('tabindex');\n          }\n        }\n\n        _.activateADA();\n\n    };\n\n    Slick.prototype.initArrowEvents = function() {\n\n        var _ = this;\n\n        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {\n            _.$prevArrow\n               .off('click.slick')\n               .on('click.slick', {\n                    message: 'previous'\n               }, _.changeSlide);\n            _.$nextArrow\n               .off('click.slick')\n               .on('click.slick', {\n                    message: 'next'\n               }, _.changeSlide);\n\n            if (_.options.accessibility === true) {\n                _.$prevArrow.on('keydown.slick', _.keyHandler);\n                _.$nextArrow.on('keydown.slick', _.keyHandler);\n            }\n        }\n\n    };\n\n    Slick.prototype.initDotEvents = function() {\n\n        var _ = this;\n\n        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {\n            $('li', _.$dots).on('click.slick', {\n                message: 'index'\n            }, _.changeSlide);\n\n            if (_.options.accessibility === true) {\n                _.$dots.on('keydown.slick', _.keyHandler);\n            }\n        }\n\n        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {\n\n            $('li', _.$dots)\n                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))\n                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));\n\n        }\n\n    };\n\n    Slick.prototype.initSlideEvents = function() {\n\n        var _ = this;\n\n        if ( _.options.pauseOnHover ) {\n\n            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));\n            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));\n\n        }\n\n    };\n\n    Slick.prototype.initializeEvents = function() {\n\n        var _ = this;\n\n        _.initArrowEvents();\n\n        _.initDotEvents();\n        _.initSlideEvents();\n\n        _.$list.on('touchstart.slick mousedown.slick', {\n            action: 'start'\n        }, _.swipeHandler);\n        _.$list.on('touchmove.slick mousemove.slick', {\n            action: 'move'\n        }, _.swipeHandler);\n        _.$list.on('touchend.slick mouseup.slick', {\n            action: 'end'\n        }, _.swipeHandler);\n        _.$list.on('touchcancel.slick mouseleave.slick', {\n            action: 'end'\n        }, _.swipeHandler);\n\n        _.$list.on('click.slick', _.clickHandler);\n\n        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));\n\n        if (_.options.accessibility === true) {\n            _.$list.on('keydown.slick', _.keyHandler);\n        }\n\n        if (_.options.focusOnSelect === true) {\n            $(_.$slideTrack).children().on('click.slick', _.selectHandler);\n        }\n\n        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));\n\n        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));\n\n        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);\n\n        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);\n        $(_.setPosition);\n\n    };\n\n    Slick.prototype.initUI = function() {\n\n        var _ = this;\n\n        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {\n\n            _.$prevArrow.show();\n            _.$nextArrow.show();\n\n        }\n\n        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {\n\n            _.$dots.show();\n\n        }\n\n    };\n\n    Slick.prototype.keyHandler = function(event) {\n\n        var _ = this;\n         //Dont slide if the cursor is inside the form fields and arrow keys are pressed\n        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {\n            if (event.keyCode === 37 && _.options.accessibility === true) {\n                _.changeSlide({\n                    data: {\n                        message: _.options.rtl === true ? 'next' :  'previous'\n                    }\n                });\n            } else if (event.keyCode === 39 && _.options.accessibility === true) {\n                _.changeSlide({\n                    data: {\n                        message: _.options.rtl === true ? 'previous' : 'next'\n                    }\n                });\n            }\n        }\n\n    };\n\n    Slick.prototype.lazyLoad = function() {\n\n        var _ = this,\n            loadRange, cloneRange, rangeStart, rangeEnd;\n\n        function loadImages(imagesScope) {\n\n            $('img[data-lazy]', imagesScope).each(function() {\n\n                var image = $(this),\n                    imageSource = $(this).attr('data-lazy'),\n                    imageSrcSet = $(this).attr('data-srcset'),\n                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),\n                    imageToLoad = document.createElement('img');\n\n                imageToLoad.onload = function() {\n\n                    image\n                        .animate({ opacity: 0 }, 100, function() {\n\n                            if (imageSrcSet) {\n                                image\n                                    .attr('srcset', imageSrcSet );\n\n                                if (imageSizes) {\n                                    image\n                                        .attr('sizes', imageSizes );\n                                }\n                            }\n\n                            image\n                                .attr('src', imageSource)\n                                .animate({ opacity: 1 }, 200, function() {\n                                    image\n                                        .removeAttr('data-lazy data-srcset data-sizes')\n                                        .removeClass('slick-loading');\n                                });\n                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);\n                        });\n\n                };\n\n                imageToLoad.onerror = function() {\n\n                    image\n                        .removeAttr( 'data-lazy' )\n                        .removeClass( 'slick-loading' )\n                        .addClass( 'slick-lazyload-error' );\n\n                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);\n\n                };\n\n                imageToLoad.src = imageSource;\n\n            });\n\n        }\n\n        if (_.options.centerMode === true) {\n            if (_.options.infinite === true) {\n                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);\n                rangeEnd = rangeStart + _.options.slidesToShow + 2;\n            } else {\n                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));\n                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;\n            }\n        } else {\n            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;\n            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);\n            if (_.options.fade === true) {\n                if (rangeStart > 0) rangeStart--;\n                if (rangeEnd <= _.slideCount) rangeEnd++;\n            }\n        }\n\n        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);\n\n        if (_.options.lazyLoad === 'anticipated') {\n            var prevSlide = rangeStart - 1,\n                nextSlide = rangeEnd,\n                $slides = _.$slider.find('.slick-slide');\n\n            for (var i = 0; i < _.options.slidesToScroll; i++) {\n                if (prevSlide < 0) prevSlide = _.slideCount - 1;\n                loadRange = loadRange.add($slides.eq(prevSlide));\n                loadRange = loadRange.add($slides.eq(nextSlide));\n                prevSlide--;\n                nextSlide++;\n            }\n        }\n\n        loadImages(loadRange);\n\n        if (_.slideCount <= _.options.slidesToShow) {\n            cloneRange = _.$slider.find('.slick-slide');\n            loadImages(cloneRange);\n        } else\n        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {\n            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);\n            loadImages(cloneRange);\n        } else if (_.currentSlide === 0) {\n            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);\n            loadImages(cloneRange);\n        }\n\n    };\n\n    Slick.prototype.loadSlider = function() {\n\n        var _ = this;\n\n        _.setPosition();\n\n        _.$slideTrack.css({\n            opacity: 1\n        });\n\n        _.$slider.removeClass('slick-loading');\n\n        _.initUI();\n\n        if (_.options.lazyLoad === 'progressive') {\n            _.progressiveLazyLoad();\n        }\n\n    };\n\n    Slick.prototype.next = Slick.prototype.slickNext = function() {\n\n        var _ = this;\n\n        _.changeSlide({\n            data: {\n                message: 'next'\n            }\n        });\n\n    };\n\n    Slick.prototype.orientationChange = function() {\n\n        var _ = this;\n\n        _.checkResponsive();\n        _.setPosition();\n\n    };\n\n    Slick.prototype.pause = Slick.prototype.slickPause = function() {\n\n        var _ = this;\n\n        _.autoPlayClear();\n        _.paused = true;\n\n    };\n\n    Slick.prototype.play = Slick.prototype.slickPlay = function() {\n\n        var _ = this;\n\n        _.autoPlay();\n        _.options.autoplay = true;\n        _.paused = false;\n        _.focussed = false;\n        _.interrupted = false;\n\n    };\n\n    Slick.prototype.postSlide = function(index) {\n\n        var _ = this;\n\n        if( !_.unslicked ) {\n\n            _.$slider.trigger('afterChange', [_, index]);\n\n            _.animating = false;\n\n            if (_.slideCount > _.options.slidesToShow) {\n                _.setPosition();\n            }\n\n            _.swipeLeft = null;\n\n            if ( _.options.autoplay ) {\n                _.autoPlay();\n            }\n\n            if (_.options.accessibility === true) {\n                _.initADA();\n\n                if (_.options.focusOnChange) {\n                    var $currentSlide = $(_.$slides.get(_.currentSlide));\n                    $currentSlide.attr('tabindex', 0).focus();\n                }\n            }\n\n        }\n\n    };\n\n    Slick.prototype.prev = Slick.prototype.slickPrev = function() {\n\n        var _ = this;\n\n        _.changeSlide({\n            data: {\n                message: 'previous'\n            }\n        });\n\n    };\n\n    Slick.prototype.preventDefault = function(event) {\n\n        event.preventDefault();\n\n    };\n\n    Slick.prototype.progressiveLazyLoad = function( tryCount ) {\n\n        tryCount = tryCount || 1;\n\n        var _ = this,\n            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),\n            image,\n            imageSource,\n            imageSrcSet,\n            imageSizes,\n            imageToLoad;\n\n        if ( $imgsToLoad.length ) {\n\n            image = $imgsToLoad.first();\n            imageSource = image.attr('data-lazy');\n            imageSrcSet = image.attr('data-srcset');\n            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');\n            imageToLoad = document.createElement('img');\n\n            imageToLoad.onload = function() {\n\n                if (imageSrcSet) {\n                    image\n                        .attr('srcset', imageSrcSet );\n\n                    if (imageSizes) {\n                        image\n                            .attr('sizes', imageSizes );\n                    }\n                }\n\n                image\n                    .attr( 'src', imageSource )\n                    .removeAttr('data-lazy data-srcset data-sizes')\n                    .removeClass('slick-loading');\n\n                if ( _.options.adaptiveHeight === true ) {\n                    _.setPosition();\n                }\n\n                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);\n                _.progressiveLazyLoad();\n\n            };\n\n            imageToLoad.onerror = function() {\n\n                if ( tryCount < 3 ) {\n\n                    /**\n                     * try to load the image 3 times,\n                     * leave a slight delay so we don't get\n                     * servers blocking the request.\n                     */\n                    setTimeout( function() {\n                        _.progressiveLazyLoad( tryCount + 1 );\n                    }, 500 );\n\n                } else {\n\n                    image\n                        .removeAttr( 'data-lazy' )\n                        .removeClass( 'slick-loading' )\n                        .addClass( 'slick-lazyload-error' );\n\n                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);\n\n                    _.progressiveLazyLoad();\n\n                }\n\n            };\n\n            imageToLoad.src = imageSource;\n\n        } else {\n\n            _.$slider.trigger('allImagesLoaded', [ _ ]);\n\n        }\n\n    };\n\n    Slick.prototype.refresh = function( initializing ) {\n\n        var _ = this, currentSlide, lastVisibleIndex;\n\n        lastVisibleIndex = _.slideCount - _.options.slidesToShow;\n\n        // in non-infinite sliders, we don't want to go past the\n        // last visible index.\n        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {\n            _.currentSlide = lastVisibleIndex;\n        }\n\n        // if less slides than to show, go to start.\n        if ( _.slideCount <= _.options.slidesToShow ) {\n            _.currentSlide = 0;\n\n        }\n\n        currentSlide = _.currentSlide;\n\n        _.destroy(true);\n\n        $.extend(_, _.initials, { currentSlide: currentSlide });\n\n        _.init();\n\n        if( !initializing ) {\n\n            _.changeSlide({\n                data: {\n                    message: 'index',\n                    index: currentSlide\n                }\n            }, false);\n\n        }\n\n    };\n\n    Slick.prototype.registerBreakpoints = function() {\n\n        var _ = this, breakpoint, currentBreakpoint, l,\n            responsiveSettings = _.options.responsive || null;\n\n        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {\n\n            _.respondTo = _.options.respondTo || 'window';\n\n            for ( breakpoint in responsiveSettings ) {\n\n                l = _.breakpoints.length-1;\n\n                if (responsiveSettings.hasOwnProperty(breakpoint)) {\n                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;\n\n                    // loop through the breakpoints and cut out any existing\n                    // ones with the same breakpoint number, we don't want dupes.\n                    while( l >= 0 ) {\n                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {\n                            _.breakpoints.splice(l,1);\n                        }\n                        l--;\n                    }\n\n                    _.breakpoints.push(currentBreakpoint);\n                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;\n\n                }\n\n            }\n\n            _.breakpoints.sort(function(a, b) {\n                return ( _.options.mobileFirst ) ? a-b : b-a;\n            });\n\n        }\n\n    };\n\n    Slick.prototype.reinit = function() {\n\n        var _ = this;\n\n        _.$slides =\n            _.$slideTrack\n                .children(_.options.slide)\n                .addClass('slick-slide');\n\n        _.slideCount = _.$slides.length;\n\n        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {\n            _.currentSlide = _.currentSlide - _.options.slidesToScroll;\n        }\n\n        if (_.slideCount <= _.options.slidesToShow) {\n            _.currentSlide = 0;\n        }\n\n        _.registerBreakpoints();\n\n        _.setProps();\n        _.setupInfinite();\n        _.buildArrows();\n        _.updateArrows();\n        _.initArrowEvents();\n        _.buildDots();\n        _.updateDots();\n        _.initDotEvents();\n        _.cleanUpSlideEvents();\n        _.initSlideEvents();\n\n        _.checkResponsive(false, true);\n\n        if (_.options.focusOnSelect === true) {\n            $(_.$slideTrack).children().on('click.slick', _.selectHandler);\n        }\n\n        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);\n\n        _.setPosition();\n        _.focusHandler();\n\n        _.paused = !_.options.autoplay;\n        _.autoPlay();\n\n        _.$slider.trigger('reInit', [_]);\n\n    };\n\n    Slick.prototype.resize = function() {\n\n        var _ = this;\n\n        if ($(window).width() !== _.windowWidth) {\n            clearTimeout(_.windowDelay);\n            _.windowDelay = window.setTimeout(function() {\n                _.windowWidth = $(window).width();\n                _.checkResponsive();\n                if( !_.unslicked ) { _.setPosition(); }\n            }, 50);\n        }\n    };\n\n    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {\n\n        var _ = this;\n\n        if (typeof(index) === 'boolean') {\n            removeBefore = index;\n            index = removeBefore === true ? 0 : _.slideCount - 1;\n        } else {\n            index = removeBefore === true ? --index : index;\n        }\n\n        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {\n            return false;\n        }\n\n        _.unload();\n\n        if (removeAll === true) {\n            _.$slideTrack.children().remove();\n        } else {\n            _.$slideTrack.children(this.options.slide).eq(index).remove();\n        }\n\n        _.$slides = _.$slideTrack.children(this.options.slide);\n\n        _.$slideTrack.children(this.options.slide).detach();\n\n        _.$slideTrack.append(_.$slides);\n\n        _.$slidesCache = _.$slides;\n\n        _.reinit();\n\n    };\n\n    Slick.prototype.setCSS = function(position) {\n\n        var _ = this,\n            positionProps = {},\n            x, y;\n\n        if (_.options.rtl === true) {\n            position = -position;\n        }\n        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';\n        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';\n\n        positionProps[_.positionProp] = position;\n\n        if (_.transformsEnabled === false) {\n            _.$slideTrack.css(positionProps);\n        } else {\n            positionProps = {};\n            if (_.cssTransitions === false) {\n                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';\n                _.$slideTrack.css(positionProps);\n            } else {\n                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';\n                _.$slideTrack.css(positionProps);\n            }\n        }\n\n    };\n\n    Slick.prototype.setDimensions = function() {\n\n        var _ = this;\n\n        if (_.options.vertical === false) {\n            if (_.options.centerMode === true) {\n                _.$list.css({\n                    padding: ('0px ' + _.options.centerPadding)\n                });\n            }\n        } else {\n            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);\n            if (_.options.centerMode === true) {\n                _.$list.css({\n                    padding: (_.options.centerPadding + ' 0px')\n                });\n            }\n        }\n\n        _.listWidth = _.$list.width();\n        _.listHeight = _.$list.height();\n\n\n        if (_.options.vertical === false && _.options.variableWidth === false) {\n            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);\n            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));\n\n        } else if (_.options.variableWidth === true) {\n            _.$slideTrack.width(5000 * _.slideCount);\n        } else {\n            _.slideWidth = Math.ceil(_.listWidth);\n            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));\n        }\n\n        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();\n        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);\n\n    };\n\n    Slick.prototype.setFade = function() {\n\n        var _ = this,\n            targetLeft;\n\n        _.$slides.each(function(index, element) {\n            targetLeft = (_.slideWidth * index) * -1;\n            if (_.options.rtl === true) {\n                $(element).css({\n                    position: 'relative',\n                    right: targetLeft,\n                    top: 0,\n                    zIndex: _.options.zIndex - 2,\n                    opacity: 0\n                });\n            } else {\n                $(element).css({\n                    position: 'relative',\n                    left: targetLeft,\n                    top: 0,\n                    zIndex: _.options.zIndex - 2,\n                    opacity: 0\n                });\n            }\n        });\n\n        _.$slides.eq(_.currentSlide).css({\n            zIndex: _.options.zIndex - 1,\n            opacity: 1\n        });\n\n    };\n\n    Slick.prototype.setHeight = function() {\n\n        var _ = this;\n\n        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {\n            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);\n            _.$list.css('height', targetHeight);\n        }\n\n    };\n\n    Slick.prototype.setOption =\n    Slick.prototype.slickSetOption = function() {\n\n        /**\n         * accepts arguments in format of:\n         *\n         *  - for changing a single option's value:\n         *     .slick(\"setOption\", option, value, refresh )\n         *\n         *  - for changing a set of responsive options:\n         *     .slick(\"setOption\", 'responsive', [{}, ...], refresh )\n         *\n         *  - for updating multiple values at once (not responsive)\n         *     .slick(\"setOption\", { 'option': value, ... }, refresh )\n         */\n\n        var _ = this, l, item, option, value, refresh = false, type;\n\n        if( $.type( arguments[0] ) === 'object' ) {\n\n            option =  arguments[0];\n            refresh = arguments[1];\n            type = 'multiple';\n\n        } else if ( $.type( arguments[0] ) === 'string' ) {\n\n            option =  arguments[0];\n            value = arguments[1];\n            refresh = arguments[2];\n\n            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {\n\n                type = 'responsive';\n\n            } else if ( typeof arguments[1] !== 'undefined' ) {\n\n                type = 'single';\n\n            }\n\n        }\n\n        if ( type === 'single' ) {\n\n            _.options[option] = value;\n\n\n        } else if ( type === 'multiple' ) {\n\n            $.each( option , function( opt, val ) {\n\n                _.options[opt] = val;\n\n            });\n\n\n        } else if ( type === 'responsive' ) {\n\n            for ( item in value ) {\n\n                if( $.type( _.options.responsive ) !== 'array' ) {\n\n                    _.options.responsive = [ value[item] ];\n\n                } else {\n\n                    l = _.options.responsive.length-1;\n\n                    // loop through the responsive object and splice out duplicates.\n                    while( l >= 0 ) {\n\n                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {\n\n                            _.options.responsive.splice(l,1);\n\n                        }\n\n                        l--;\n\n                    }\n\n                    _.options.responsive.push( value[item] );\n\n                }\n\n            }\n\n        }\n\n        if ( refresh ) {\n\n            _.unload();\n            _.reinit();\n\n        }\n\n    };\n\n    Slick.prototype.setPosition = function() {\n\n        var _ = this;\n\n        _.setDimensions();\n\n        _.setHeight();\n\n        if (_.options.fade === false) {\n            _.setCSS(_.getLeft(_.currentSlide));\n        } else {\n            _.setFade();\n        }\n\n        _.$slider.trigger('setPosition', [_]);\n\n    };\n\n    Slick.prototype.setProps = function() {\n\n        var _ = this,\n            bodyStyle = document.body.style;\n\n        _.positionProp = _.options.vertical === true ? 'top' : 'left';\n\n        if (_.positionProp === 'top') {\n            _.$slider.addClass('slick-vertical');\n        } else {\n            _.$slider.removeClass('slick-vertical');\n        }\n\n        if (bodyStyle.WebkitTransition !== undefined ||\n            bodyStyle.MozTransition !== undefined ||\n            bodyStyle.msTransition !== undefined) {\n            if (_.options.useCSS === true) {\n                _.cssTransitions = true;\n            }\n        }\n\n        if ( _.options.fade ) {\n            if ( typeof _.options.zIndex === 'number' ) {\n                if( _.options.zIndex < 3 ) {\n                    _.options.zIndex = 3;\n                }\n            } else {\n                _.options.zIndex = _.defaults.zIndex;\n            }\n        }\n\n        if (bodyStyle.OTransform !== undefined) {\n            _.animType = 'OTransform';\n            _.transformType = '-o-transform';\n            _.transitionType = 'OTransition';\n            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;\n        }\n        if (bodyStyle.MozTransform !== undefined) {\n            _.animType = 'MozTransform';\n            _.transformType = '-moz-transform';\n            _.transitionType = 'MozTransition';\n            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;\n        }\n        if (bodyStyle.webkitTransform !== undefined) {\n            _.animType = 'webkitTransform';\n            _.transformType = '-webkit-transform';\n            _.transitionType = 'webkitTransition';\n            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;\n        }\n        if (bodyStyle.msTransform !== undefined) {\n            _.animType = 'msTransform';\n            _.transformType = '-ms-transform';\n            _.transitionType = 'msTransition';\n            if (bodyStyle.msTransform === undefined) _.animType = false;\n        }\n        if (bodyStyle.transform !== undefined && _.animType !== false) {\n            _.animType = 'transform';\n            _.transformType = 'transform';\n            _.transitionType = 'transition';\n        }\n        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);\n    };\n\n\n    Slick.prototype.setSlideClasses = function(index) {\n\n        var _ = this,\n            centerOffset, allSlides, indexOffset, remainder;\n\n        allSlides = _.$slider\n            .find('.slick-slide')\n            .removeClass('slick-active slick-center slick-current')\n            .attr('aria-hidden', 'true');\n\n        _.$slides\n            .eq(index)\n            .addClass('slick-current');\n\n        if (_.options.centerMode === true) {\n\n            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;\n\n            centerOffset = Math.floor(_.options.slidesToShow / 2);\n\n            if (_.options.infinite === true) {\n\n                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {\n                    _.$slides\n                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)\n                        .addClass('slick-active')\n                        .attr('aria-hidden', 'false');\n\n                } else {\n\n                    indexOffset = _.options.slidesToShow + index;\n                    allSlides\n                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)\n                        .addClass('slick-active')\n                        .attr('aria-hidden', 'false');\n\n                }\n\n                if (index === 0) {\n\n                    allSlides\n                        .eq(allSlides.length - 1 - _.options.slidesToShow)\n                        .addClass('slick-center');\n\n                } else if (index === _.slideCount - 1) {\n\n                    allSlides\n                        .eq(_.options.slidesToShow)\n                        .addClass('slick-center');\n\n                }\n\n            }\n\n            _.$slides\n                .eq(index)\n                .addClass('slick-center');\n\n        } else {\n\n            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {\n\n                _.$slides\n                    .slice(index, index + _.options.slidesToShow)\n                    .addClass('slick-active')\n                    .attr('aria-hidden', 'false');\n\n            } else if (allSlides.length <= _.options.slidesToShow) {\n\n                allSlides\n                    .addClass('slick-active')\n                    .attr('aria-hidden', 'false');\n\n            } else {\n\n                remainder = _.slideCount % _.options.slidesToShow;\n                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;\n\n                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {\n\n                    allSlides\n                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)\n                        .addClass('slick-active')\n                        .attr('aria-hidden', 'false');\n\n                } else {\n\n                    allSlides\n                        .slice(indexOffset, indexOffset + _.options.slidesToShow)\n                        .addClass('slick-active')\n                        .attr('aria-hidden', 'false');\n\n                }\n\n            }\n\n        }\n\n        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {\n            _.lazyLoad();\n        }\n    };\n\n    Slick.prototype.setupInfinite = function() {\n\n        var _ = this,\n            i, slideIndex, infiniteCount;\n\n        if (_.options.fade === true) {\n            _.options.centerMode = false;\n        }\n\n        if (_.options.infinite === true && _.options.fade === false) {\n\n            slideIndex = null;\n\n            if (_.slideCount > _.options.slidesToShow) {\n\n                if (_.options.centerMode === true) {\n                    infiniteCount = _.options.slidesToShow + 1;\n                } else {\n                    infiniteCount = _.options.slidesToShow;\n                }\n\n                for (i = _.slideCount; i > (_.slideCount -\n                        infiniteCount); i -= 1) {\n                    slideIndex = i - 1;\n                    $(_.$slides[slideIndex]).clone(true).attr('id', '')\n                        .attr('data-slick-index', slideIndex - _.slideCount)\n                        .prependTo(_.$slideTrack).addClass('slick-cloned');\n                }\n                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {\n                    slideIndex = i;\n                    $(_.$slides[slideIndex]).clone(true).attr('id', '')\n                        .attr('data-slick-index', slideIndex + _.slideCount)\n                        .appendTo(_.$slideTrack).addClass('slick-cloned');\n                }\n                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {\n                    $(this).attr('id', '');\n                });\n\n            }\n\n        }\n\n    };\n\n    Slick.prototype.interrupt = function( toggle ) {\n\n        var _ = this;\n\n        if( !toggle ) {\n            _.autoPlay();\n        }\n        _.interrupted = toggle;\n\n    };\n\n    Slick.prototype.selectHandler = function(event) {\n\n        var _ = this;\n\n        var targetElement =\n            $(event.target).is('.slick-slide') ?\n                $(event.target) :\n                $(event.target).parents('.slick-slide');\n\n        var index = parseInt(targetElement.attr('data-slick-index'));\n\n        if (!index) index = 0;\n\n        if (_.slideCount <= _.options.slidesToShow) {\n\n            _.slideHandler(index, false, true);\n            return;\n\n        }\n\n        _.slideHandler(index);\n\n    };\n\n    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {\n\n        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,\n            _ = this, navTarget;\n\n        sync = sync || false;\n\n        if (_.animating === true && _.options.waitForAnimate === true) {\n            return;\n        }\n\n        if (_.options.fade === true && _.currentSlide === index) {\n            return;\n        }\n\n        if (sync === false) {\n            _.asNavFor(index);\n        }\n\n        targetSlide = index;\n        targetLeft = _.getLeft(targetSlide);\n        slideLeft = _.getLeft(_.currentSlide);\n\n        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;\n\n        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {\n            if (_.options.fade === false) {\n                targetSlide = _.currentSlide;\n                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {\n                    _.animateSlide(slideLeft, function() {\n                        _.postSlide(targetSlide);\n                    });\n                } else {\n                    _.postSlide(targetSlide);\n                }\n            }\n            return;\n        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {\n            if (_.options.fade === false) {\n                targetSlide = _.currentSlide;\n                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {\n                    _.animateSlide(slideLeft, function() {\n                        _.postSlide(targetSlide);\n                    });\n                } else {\n                    _.postSlide(targetSlide);\n                }\n            }\n            return;\n        }\n\n        if ( _.options.autoplay ) {\n            clearInterval(_.autoPlayTimer);\n        }\n\n        if (targetSlide < 0) {\n            if (_.slideCount % _.options.slidesToScroll !== 0) {\n                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);\n            } else {\n                animSlide = _.slideCount + targetSlide;\n            }\n        } else if (targetSlide >= _.slideCount) {\n            if (_.slideCount % _.options.slidesToScroll !== 0) {\n                animSlide = 0;\n            } else {\n                animSlide = targetSlide - _.slideCount;\n            }\n        } else {\n            animSlide = targetSlide;\n        }\n\n        _.animating = true;\n\n        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);\n\n        oldSlide = _.currentSlide;\n        _.currentSlide = animSlide;\n\n        _.setSlideClasses(_.currentSlide);\n\n        if ( _.options.asNavFor ) {\n\n            navTarget = _.getNavTarget();\n            navTarget = navTarget.slick('getSlick');\n\n            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {\n                navTarget.setSlideClasses(_.currentSlide);\n            }\n\n        }\n\n        _.updateDots();\n        _.updateArrows();\n\n        if (_.options.fade === true) {\n            if (dontAnimate !== true) {\n\n                _.fadeSlideOut(oldSlide);\n\n                _.fadeSlide(animSlide, function() {\n                    _.postSlide(animSlide);\n                });\n\n            } else {\n                _.postSlide(animSlide);\n            }\n            _.animateHeight();\n            return;\n        }\n\n        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {\n            _.animateSlide(targetLeft, function() {\n                _.postSlide(animSlide);\n            });\n        } else {\n            _.postSlide(animSlide);\n        }\n\n    };\n\n    Slick.prototype.startLoad = function() {\n\n        var _ = this;\n\n        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {\n\n            _.$prevArrow.hide();\n            _.$nextArrow.hide();\n\n        }\n\n        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {\n\n            _.$dots.hide();\n\n        }\n\n        _.$slider.addClass('slick-loading');\n\n    };\n\n    Slick.prototype.swipeDirection = function() {\n\n        var xDist, yDist, r, swipeAngle, _ = this;\n\n        xDist = _.touchObject.startX - _.touchObject.curX;\n        yDist = _.touchObject.startY - _.touchObject.curY;\n        r = Math.atan2(yDist, xDist);\n\n        swipeAngle = Math.round(r * 180 / Math.PI);\n        if (swipeAngle < 0) {\n            swipeAngle = 360 - Math.abs(swipeAngle);\n        }\n\n        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {\n            return (_.options.rtl === false ? 'left' : 'right');\n        }\n        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {\n            return (_.options.rtl === false ? 'left' : 'right');\n        }\n        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {\n            return (_.options.rtl === false ? 'right' : 'left');\n        }\n        if (_.options.verticalSwiping === true) {\n            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {\n                return 'down';\n            } else {\n                return 'up';\n            }\n        }\n\n        return 'vertical';\n\n    };\n\n    Slick.prototype.swipeEnd = function(event) {\n\n        var _ = this,\n            slideCount,\n            direction;\n\n        _.dragging = false;\n        _.swiping = false;\n\n        if (_.scrolling) {\n            _.scrolling = false;\n            return false;\n        }\n\n        _.interrupted = false;\n        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;\n\n        if ( _.touchObject.curX === undefined ) {\n            return false;\n        }\n\n        if ( _.touchObject.edgeHit === true ) {\n            _.$slider.trigger('edge', [_, _.swipeDirection() ]);\n        }\n\n        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {\n\n            direction = _.swipeDirection();\n\n            switch ( direction ) {\n\n                case 'left':\n                case 'down':\n\n                    slideCount =\n                        _.options.swipeToSlide ?\n                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :\n                            _.currentSlide + _.getSlideCount();\n\n                    _.currentDirection = 0;\n\n                    break;\n\n                case 'right':\n                case 'up':\n\n                    slideCount =\n                        _.options.swipeToSlide ?\n                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :\n                            _.currentSlide - _.getSlideCount();\n\n                    _.currentDirection = 1;\n\n                    break;\n\n                default:\n\n\n            }\n\n            if( direction != 'vertical' ) {\n\n                _.slideHandler( slideCount );\n                _.touchObject = {};\n                _.$slider.trigger('swipe', [_, direction ]);\n\n            }\n\n        } else {\n\n            if ( _.touchObject.startX !== _.touchObject.curX ) {\n\n                _.slideHandler( _.currentSlide );\n                _.touchObject = {};\n\n            }\n\n        }\n\n    };\n\n    Slick.prototype.swipeHandler = function(event) {\n\n        var _ = this;\n\n        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {\n            return;\n        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {\n            return;\n        }\n\n        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?\n            event.originalEvent.touches.length : 1;\n\n        _.touchObject.minSwipe = _.listWidth / _.options\n            .touchThreshold;\n\n        if (_.options.verticalSwiping === true) {\n            _.touchObject.minSwipe = _.listHeight / _.options\n                .touchThreshold;\n        }\n\n        switch (event.data.action) {\n\n            case 'start':\n                _.swipeStart(event);\n                break;\n\n            case 'move':\n                _.swipeMove(event);\n                break;\n\n            case 'end':\n                _.swipeEnd(event);\n                break;\n\n        }\n\n    };\n\n    Slick.prototype.swipeMove = function(event) {\n\n        var _ = this,\n            edgeWasHit = false,\n            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;\n\n        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;\n\n        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {\n            return false;\n        }\n\n        curLeft = _.getLeft(_.currentSlide);\n\n        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;\n        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;\n\n        _.touchObject.swipeLength = Math.round(Math.sqrt(\n            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));\n\n        verticalSwipeLength = Math.round(Math.sqrt(\n            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));\n\n        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {\n            _.scrolling = true;\n            return false;\n        }\n\n        if (_.options.verticalSwiping === true) {\n            _.touchObject.swipeLength = verticalSwipeLength;\n        }\n\n        swipeDirection = _.swipeDirection();\n\n        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {\n            _.swiping = true;\n            event.preventDefault();\n        }\n\n        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);\n        if (_.options.verticalSwiping === true) {\n            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;\n        }\n\n\n        swipeLength = _.touchObject.swipeLength;\n\n        _.touchObject.edgeHit = false;\n\n        if (_.options.infinite === false) {\n            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {\n                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;\n                _.touchObject.edgeHit = true;\n            }\n        }\n\n        if (_.options.vertical === false) {\n            _.swipeLeft = curLeft + swipeLength * positionOffset;\n        } else {\n            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;\n        }\n        if (_.options.verticalSwiping === true) {\n            _.swipeLeft = curLeft + swipeLength * positionOffset;\n        }\n\n        if (_.options.fade === true || _.options.touchMove === false) {\n            return false;\n        }\n\n        if (_.animating === true) {\n            _.swipeLeft = null;\n            return false;\n        }\n\n        _.setCSS(_.swipeLeft);\n\n    };\n\n    Slick.prototype.swipeStart = function(event) {\n\n        var _ = this,\n            touches;\n\n        _.interrupted = true;\n\n        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {\n            _.touchObject = {};\n            return false;\n        }\n\n        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {\n            touches = event.originalEvent.touches[0];\n        }\n\n        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;\n        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;\n\n        _.dragging = true;\n\n    };\n\n    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {\n\n        var _ = this;\n\n        if (_.$slidesCache !== null) {\n\n            _.unload();\n\n            _.$slideTrack.children(this.options.slide).detach();\n\n            _.$slidesCache.appendTo(_.$slideTrack);\n\n            _.reinit();\n\n        }\n\n    };\n\n    Slick.prototype.unload = function() {\n\n        var _ = this;\n\n        $('.slick-cloned', _.$slider).remove();\n\n        if (_.$dots) {\n            _.$dots.remove();\n        }\n\n        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {\n            _.$prevArrow.remove();\n        }\n\n        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {\n            _.$nextArrow.remove();\n        }\n\n        _.$slides\n            .removeClass('slick-slide slick-active slick-visible slick-current')\n            .attr('aria-hidden', 'true')\n            .css('width', '');\n\n    };\n\n    Slick.prototype.unslick = function(fromBreakpoint) {\n\n        var _ = this;\n        _.$slider.trigger('unslick', [_, fromBreakpoint]);\n        _.destroy();\n\n    };\n\n    Slick.prototype.updateArrows = function() {\n\n        var _ = this,\n            centerOffset;\n\n        centerOffset = Math.floor(_.options.slidesToShow / 2);\n\n        if ( _.options.arrows === true &&\n            _.slideCount > _.options.slidesToShow &&\n            !_.options.infinite ) {\n\n            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');\n            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');\n\n            if (_.currentSlide === 0) {\n\n                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');\n                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');\n\n            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {\n\n                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');\n                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');\n\n            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {\n\n                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');\n                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');\n\n            }\n\n        }\n\n    };\n\n    Slick.prototype.updateDots = function() {\n\n        var _ = this;\n\n        if (_.$dots !== null) {\n\n            _.$dots\n                .find('li')\n                    .removeClass('slick-active')\n                    .end();\n\n            _.$dots\n                .find('li')\n                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))\n                .addClass('slick-active');\n\n        }\n\n    };\n\n    Slick.prototype.visibility = function() {\n\n        var _ = this;\n\n        if ( _.options.autoplay ) {\n\n            if ( document[_.hidden] ) {\n\n                _.interrupted = true;\n\n            } else {\n\n                _.interrupted = false;\n\n            }\n\n        }\n\n    };\n\n    $.fn.slick = function() {\n        var _ = this,\n            opt = arguments[0],\n            args = Array.prototype.slice.call(arguments, 1),\n            l = _.length,\n            i,\n            ret;\n        for (i = 0; i < l; i++) {\n            if (typeof opt == 'object' || typeof opt == 'undefined')\n                _[i].slick = new Slick(_[i], opt);\n            else\n                ret = _[i].slick[opt].apply(_[i].slick, args);\n            if (typeof ret != 'undefined') return ret;\n        }\n        return _;\n    };\n\n}));\n"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);