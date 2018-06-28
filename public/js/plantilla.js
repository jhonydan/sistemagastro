// Avoid `console` errors in browsers that lack a console.
// (function() {
//     var method;
//     var noop = function () {};
//     var methods = [
//         'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
//         'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
//         'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
//         'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
//     ];
//     var length = methods.length;
//     var console = (window.console = window.console || {});

//     while (length--) {
//         method = methods[length];

//         // Only stub undefined methods.
//         if (!console[method]) {
//             console[method] = noop;
//         }
//     }
// }());

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(e){var n=this,i=!1;return t(this).one(s.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||s.triggerTransitionEnd(n)},e),this}var i=!1,s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(e){return e="function"==typeof t.escapeSelector?t.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return t(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(i.end)},supportsTransitionEnd:function(){return Boolean(i)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,n,i){for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var o=i[r],a=n[r],l=a&&s.isElement(a)?"element":e(a);if(!new RegExp(o).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+o+'".')}}};return i=!window.QUnit&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,s.supportsTransitionEnd()&&(t.event.special[s.TRANSITION_END]={bindType:i.end,delegateType:i.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),s}(e),a=function(t){var e="alert",n="bs.alert",i="."+n,r=t.fn[e],a={CLOSE:"close"+i,CLOSED:"closed"+i,CLICK_DATA_API:"click"+i+".data-api"},l="alert",h="fade",c="show",u=function(){function e(t){this._element=t}var i=e.prototype;return i.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},i.dispose=function(){t.removeData(this._element,n),this._element=null},i._getRootElement=function(e){var n=o.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l)[0]),i},i._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},i._removeElement=function(e){var n=this;t(e).removeClass(c),o.supportsTransitionEnd()&&t(e).hasClass(h)?t(e).one(o.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},i._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(n);r||(r=new e(this),s.data(n,r)),"close"===i&&r[i](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),e}();return t(document).on(a.CLICK_DATA_API,'[data-dismiss="alert"]',u._handleDismiss(new u)),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=r,u._jQueryInterface},u}(e),l=function(t){var e="button",n="bs.button",i="."+n,r=".data-api",o=t.fn[e],a="active",l="btn",h="focus",c='[data-toggle^="button"]',u='[data-toggle="buttons"]',f="input",d=".active",_=".btn",g={CLICK_DATA_API:"click"+i+r,FOCUS_BLUR_DATA_API:"focus"+i+r+" blur"+i+r},m=function(){function e(t){this._element=t}var i=e.prototype;return i.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(u)[0];if(i){var s=t(this._element).find(f)[0];if(s){if("radio"===s.type)if(s.checked&&t(this._element).hasClass(a))e=!1;else{var r=t(i).find(d)[0];r&&t(r).removeClass(a)}if(e){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!t(this._element).hasClass(a),t(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(a)),e&&t(this._element).toggleClass(a)},i.dispose=function(){t.removeData(this._element,n),this._element=null},e._jQueryInterface=function(i){return this.each(function(){var s=t(this).data(n);s||(s=new e(this),t(this).data(n,s)),"toggle"===i&&s[i]()})},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),e}();return t(document).on(g.CLICK_DATA_API,c,function(e){e.preventDefault();var n=e.target;t(n).hasClass(l)||(n=t(n).closest(_)),m._jQueryInterface.call(t(n),"toggle")}).on(g.FOCUS_BLUR_DATA_API,c,function(e){var n=t(e.target).closest(_)[0];t(n).toggleClass(h,/^focus(in)?$/.test(e.type))}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),h=function(t){var e="carousel",n="bs.carousel",i="."+n,a=t.fn[e],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",u="prev",f="left",d="right",_={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},g="carousel",m="active",p="slide",v="carousel-item-right",E="carousel-item-left",T="carousel-item-next",y="carousel-item-prev",C={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},I=function(){function a(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(C.INDICATORS)[0],this._addEventListeners()}var I=a.prototype;return I.next=function(){this._isSliding||this._slide(c)},I.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},I.prev=function(){this._isSliding||this._slide(u)},I.pause=function(e){e||(this._isPaused=!0),t(this._element).find(C.NEXT_PREV)[0]&&o.supportsTransitionEnd()&&(o.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},I.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},I.to=function(e){var n=this;this._activeElement=t(this._element).find(C.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(_.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?c:u;this._slide(s,this._items[e])}},I.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},I._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},I._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(_.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(_.MOUSEENTER,function(t){return e.pause(t)}).on(_.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(_.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},I._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},I._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(C.ITEM)),this._items.indexOf(e)},I._getItemByDirection=function(t,e){var n=t===c,i=t===u,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===u?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},I._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0]),r=t.Event(_.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},I._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(m)}},I._slide=function(e,n){var i,s,r,a=this,l=t(this._element).find(C.ACTIVE_ITEM)[0],h=this._getItemIndex(l),u=n||l&&this._getItemByDirection(e,l),g=this._getItemIndex(u),I=Boolean(this._interval);if(e===c?(i=E,s=T,r=f):(i=v,s=y,r=d),u&&t(u).hasClass(m))this._isSliding=!1;else{if(!this._triggerSlideEvent(u,r).isDefaultPrevented()&&l&&u){this._isSliding=!0,I&&this.pause(),this._setActiveIndicatorElement(u);var A=t.Event(_.SLID,{relatedTarget:u,direction:r,from:h,to:g});o.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(u).addClass(s),o.reflow(u),t(l).addClass(i),t(u).addClass(i),t(l).one(o.TRANSITION_END,function(){t(u).removeClass(i+" "+s).addClass(m),t(l).removeClass(m+" "+s+" "+i),a._isSliding=!1,setTimeout(function(){return t(a._element).trigger(A)},0)}).emulateTransitionEnd(600)):(t(l).removeClass(m),t(u).addClass(m),this._isSliding=!1,t(this._element).trigger(A)),I&&this.cycle()}}},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},l,t(this).data());"object"==typeof e&&(s=r({},s,e));var o="string"==typeof e?e:s.slide;if(i||(i=new a(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof o){if("undefined"==typeof i[o])throw new Error('No method named "'+o+'"');i[o]()}else s.interval&&(i.pause(),i.cycle())})},a._dataApiClickHandler=function(e){var i=o.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(g)){var l=r({},t(s).data(),t(this).data()),h=this.getAttribute("data-slide-to");h&&(l.interval=!1),a._jQueryInterface.call(t(s),l),h&&t(s).data(n).to(h),e.preventDefault()}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(_.CLICK_DATA_API,C.DATA_SLIDE,I._dataApiClickHandler),t(window).on(_.LOAD_DATA_API,function(){t(C.DATA_RIDE).each(function(){var e=t(this);I._jQueryInterface.call(e,e.data())})}),t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),c=function(t){var e="collapse",n="bs.collapse",i="."+n,a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},u="show",f="collapse",d="collapsing",_="collapsed",g="width",m="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],a=o.getSelectorFromElement(r);null!==a&&t(a).filter(e).length>0&&this._triggerArray.push(r)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var a=i.prototype;return a.toggle=function(){t(this._element).hasClass(u)?this.hide():this.show()},a.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u)){var s,r;if(this._parent&&((s=t.makeArray(t(this._parent).children().children(p.ACTIVES))).length||(s=null)),!(s&&(r=t(s).data(n))&&r._isTransitioning)){var a=t.Event(c.SHOW);if(t(this._element).trigger(a),!a.isDefaultPrevented()){s&&(i._jQueryInterface.call(t(s),"hide"),r||t(s).data(n,null));var l=this._getDimension();t(this._element).removeClass(f).addClass(d),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(_).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(d).addClass(f).addClass(u),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(o.supportsTransitionEnd()){var g="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(o.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[g]+"px"}else h()}}}},a.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",o.reflow(this._element),t(this._element).addClass(d).removeClass(f).removeClass(u),this._triggerArray.length)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],a=o.getSelectorFromElement(r);if(null!==a){t(a).hasClass(u)||t(r).addClass(_).attr("aria-expanded",!1)}}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)};this._element.style[i]="",o.supportsTransitionEnd()?t(this._element).one(o.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.setTransitioning=function(t){this._isTransitioning=t},a.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a._getConfig=function(t){return t=r({},l,t),t.toggle=Boolean(t.toggle),o.typeCheckConfig(e,t,h),t},a._getDimension=function(){return t(this._element).hasClass(g)?g:m},a._getParent=function(){var e=this,n=null;o.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},a._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u);n.length&&t(n).toggleClass(_,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=o.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),a=r({},l,s.data(),"object"==typeof e&&e);if(!o&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),o||(o=new i(this,a),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new Error('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return l}}]),i}();return t(document).on(c.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=o.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();v._jQueryInterface.call(e,s)})}),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=a,v._jQueryInterface},v}(e),u=function(t){var e="dropdown",i="bs.dropdown",a="."+i,l=".data-api",h=t.fn[e],c=new RegExp("38|40|27"),u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+l,KEYDOWN_DATA_API:"keydown"+a+l,KEYUP_DATA_API:"keyup"+a+l},f="disabled",d="show",_="dropup",g="dropright",m="dropleft",p="dropdown-menu-right",v="dropdown-menu-left",E="position-static",T='[data-toggle="dropdown"]',y=".dropdown form",C=".dropdown-menu",I=".navbar-nav",A=".dropdown-menu .dropdown-item:not(.disabled)",b="top-start",D="top-end",S="bottom-start",w="bottom-end",N="right-start",O="left-start",k={offset:0,flip:!0,boundary:"scrollParent"},P={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var h=l.prototype;return h.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(f)){var e=l._getParentFromElement(this._element),i=t(this._menu).hasClass(d);if(l._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(u.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(_)&&(t(this._menu).hasClass(v)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(E),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&!t(e).closest(I).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(d),t(e).toggleClass(d).trigger(t.Event(u.SHOWN,s))}}}},h.dispose=function(){t.removeData(this._element,i),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},h.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},h._addEventListeners=function(){var e=this;t(this._element).on(u.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},h._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},h._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(C)[0]}return this._menu},h._getPlacement=function(){var e=t(this._element).parent(),n=S;return e.hasClass(_)?(n=b,t(this._menu).hasClass(p)&&(n=D)):e.hasClass(g)?n=N:e.hasClass(m)?n=O:t(this._menu).hasClass(p)&&(n=w),n},h._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},h._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;return{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new l(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(T)),s=0;s<n.length;s++){var r=l._getParentFromElement(n[s]),o=t(n[s]).data(i),a={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(d)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var c=t.Event(u.HIDE,a);t(r).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(d),t(r).removeClass(d).trigger(t.Event(u.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n,i=o.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(C).length)):c.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(f))){var n=l._getParentFromElement(this),i=t(n).hasClass(d);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(A).get();if(s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(T)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return k}},{key:"DefaultType",get:function(){return P}}]),l}();return t(document).on(u.KEYDOWN_DATA_API,T,L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,C,L._dataApiKeydownHandler).on(u.CLICK_DATA_API+" "+u.KEYUP_DATA_API,L._clearMenus).on(u.CLICK_DATA_API,T,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(u.CLICK_DATA_API,y,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=h,L._jQueryInterface},L}(e),f=function(t){var e="modal",n="bs.modal",i="."+n,a=t.fn.modal,l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},u="modal-scrollbar-measure",f="modal-backdrop",d="modal-open",_="fade",g="show",m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function a(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=a.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){o.supportsTransitionEnd()&&t(this._element).hasClass(_)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(d),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,m.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(c.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=o.supportsTransitionEnd()&&t(this._element).hasClass(_);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(g),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),s?t(this._element).one(o.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},p._showElement=function(e){var n=this,i=o.supportsTransitionEnd()&&t(this._element).hasClass(_);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&o.reflow(this._element),t(this._element).addClass(g),this._config.focus&&this._enforceFocus();var s=t.Event(c.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(o.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(d),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(_)?_:"";if(this._isShown&&this._config.backdrop){var s=o.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=f,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&o.reflow(this._backdrop),t(this._backdrop).addClass(g),!e)return;if(!s)return void e();t(this._backdrop).one(o.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(g);var r=function(){n._removeBackdrop(),e&&e()};o.supportsTransitionEnd()&&t(this._element).hasClass(_)?t(this._backdrop).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(m.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(m.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(m.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(m.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),o=r({},a.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new a(this,o),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new Error('No method named "'+e+'"');s[e](i)}else o.show&&s.show(i)})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(c.CLICK_DATA_API,m.DATA_TOGGLE,function(e){var i,s=this,a=o.getSelectorFromElement(this);a&&(i=t(a)[0]);var l=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var h=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||h.one(c.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),l,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=a,p._jQueryInterface},p}(e),d=function(t){var e="tooltip",i="bs.tooltip",a="."+i,l=t.fn[e],h=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},u={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d="show",_="out",g={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,INSERTED:"inserted"+a,CLICK:"click"+a,FOCUSIN:"focusin"+a,FOCUSOUT:"focusout"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a},m="fade",p="show",v=".tooltip-inner",E=".arrow",T="hover",y="focus",C="click",I="manual",A=function(){function l(t,e){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var A=l.prototype;return A.enable=function(){this._isEnabled=!0},A.disable=function(){this._isEnabled=!1},A.toggleEnabled=function(){this._isEnabled=!this._isEnabled},A.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},A.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},A.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=o.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(r).addClass(m);var h="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var u=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(u),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:E},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var f=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===_&&e._leave(null,e)};o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(this.tip).one(o.TRANSITION_END,f).emulateTransitionEnd(l._TRANSITION_DURATION):f()}},A.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==d&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[C]=!1,this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(i).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},A.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},A.isWithContent=function(){return Boolean(this.getTitle())},A.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},A.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},A.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(v),this.getTitle()),e.removeClass(m+" "+p)},A.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},A.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},A._getAttachment=function(t){return u[t.toUpperCase()]},A._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==I){var i=n===T?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===T?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},A._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},A._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?y:T]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===d?n._hoverState=d:(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d&&n.show()},n.config.delay.show):n.show())},A._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?y:T]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=_,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===_&&n.hide()},n.config.delay.hide):n.hide())},A._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},A._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},A._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},A._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(h);null!==n&&n.length>0&&e.removeClass(n.join(""))},A._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},A._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(m),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new l(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return a}},{key:"DefaultType",get:function(){return c}}]),l}();return t.fn[e]=A._jQueryInterface,t.fn[e].Constructor=A,t.fn[e].noConflict=function(){return t.fn[e]=l,A._jQueryInterface},A}(e),_=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},d.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},d.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",_=".popover-body",g={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},m=function(r){function o(){return r.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(o,r);var d=o.prototype;return d.isWithContent=function(){return this.getTitle()||this._getContent()},d.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},d.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},d.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(_),n),e.removeClass(c+" "+u)},d._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},d._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new o(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),o}(d);return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),g=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,a=t.fn[e],l={offset:10,method:"auto",target:""},h={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},u="dropdown-item",f="active",d={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},_="offset",g="position",m=function(){function a(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+d.NAV_LINKS+","+this._config.target+" "+d.LIST_ITEMS+","+this._config.target+" "+d.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(c.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var m=a.prototype;return m.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?g:_,i="auto"===this._config.method?n:this._config.method,s=i===g?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();t.makeArray(t(this._selector)).map(function(e){var n,r=o.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},m.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},m._getConfig=function(n){if("string"!=typeof(n=r({},l,n)).target){var i=t(n.target).attr("id");i||(i=o.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return o.typeCheckConfig(e,n,h),n},m._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},m._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},m._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},m._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},m._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(u)?(i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f),i.addClass(f)):(i.addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS+", "+d.LIST_ITEMS).addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)),t(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:e})},m._clear=function(){t(this._selector).filter(d.ACTIVE).removeClass(f)},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new a(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return l}}]),a}();return t(window).on(c.LOAD_DATA_API,function(){for(var e=t.makeArray(t(d.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(e),m=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},a="dropdown-menu",l="active",h="disabled",c="fade",u="show",f=".dropdown",d=".nav, .list-group",_=".active",g="> li > .active",m='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",v="> .dropdown-menu .active",E=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(l)||t(this._element).hasClass(h))){var n,i,s=t(this._element).closest(d)[0],a=o.getSelectorFromElement(this._element);if(s){var c="UL"===s.nodeName?g:_;i=(i=t.makeArray(t(s).find(c)))[i.length-1]}var u=t.Event(r.HIDE,{relatedTarget:this._element}),f=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(u),t(this._element).trigger(f),!f.isDefaultPrevented()&&!u.isDefaultPrevented()){a&&(n=t(a)[0]),this._activate(this._element,s);var m=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,m):m()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(g):t(n).children(_))[0],a=i&&o.supportsTransitionEnd()&&r&&t(r).hasClass(c),l=function(){return s._transitionComplete(e,r,i)};r&&a?t(r).one(o.TRANSITION_END,l).emulateTransitionEnd(150):l()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(u+" "+l);var s=t(n.parentNode).find(v)[0];s&&t(s).removeClass(l),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(l),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),o.reflow(e),t(e).addClass(u),e.parentNode&&t(e.parentNode).hasClass(a)){var r=t(e).closest(f)[0];r&&t(r).find(p).addClass(l),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new Error('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),n}();return t(document).on(r.CLICK_DATA_API,m,function(e){e.preventDefault(),E._jQueryInterface.call(t(this),"show")}),t.fn.tab=E._jQueryInterface,t.fn.tab.Constructor=E,t.fn.tab.noConflict=function(){return t.fn.tab=i,E._jQueryInterface},E}(e);!function(t){if("undefined"==typeof t)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=o,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=f,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=d,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



/**
@license jQuery Toggles v3.1.5
Copyright 2012 - 2015 Simon Tabor - MIT License
https://github.com/simontabor/jquery-toggles / http://simontabor.com/labs/toggles
*/

(function(root) {

  var factory = function($) {

var Toggles = root['Toggles'] = function(el, opts) {
  var self = this;

  if (typeof opts === 'boolean' && el.data('toggles')) {
    el.data('toggles').toggle(opts);
    return;
  }

  var dataAttr = [ 'on', 'drag', 'click', 'width', 'height', 'animate', 'easing', 'type', 'checkbox' ];
  var dataOpts = {};
  for (var i = 0; i < dataAttr.length; i++) {
    var opt = el.data('toggle-' + dataAttr[i]);
    if (typeof opt !== 'undefined') dataOpts[dataAttr[i]] = opt;
  }

  // extend default opts with the users options
  opts = self.opts = $.extend({
    // can the toggle be dragged
    'drag': true,
    // can it be clicked to toggle
    'click': true,
    'text': {
      // text for the ON/OFF position
      'on': 'ON',
      'off': 'OFF'
    },
    // is the toggle ON on init
    'on': false,
    // animation time (ms)
    'animate': 250,
     // animation transition,
    'easing': 'swing',
    // the checkbox to toggle (for use in forms)
    'checkbox': null,
    // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
    'clicker': null,
    // width used if not set in css
    'width': 50,
    // height if not set in css
    'height': 20,
    // defaults to a compact toggle, other option is 'select' where both options are shown at once
    'type': 'compact',
    // the event name to fire when we toggle
    'event': 'toggle'
  }, opts || {}, dataOpts);

  self.el = el;

  el.data('toggles', self);

  self.selectType = opts['type'] === 'select';

  // make checkbox a jquery element
  self.checkbox = $(opts['checkbox']);

  // leave as undefined if not set
  if (opts['clicker']) self.clicker = $(opts['clicker']);

  self.createEl();
  self.bindEvents();

  // set active to the opposite of what we want, so toggle will run properly
  self['active'] = !opts['on'];

  // toggle the toggle to the correct state with no animation and no event
  self.toggle(opts['on'], true, true);
};

Toggles.prototype.createEl = function() {
  var self = this;

  var height = self.el.height();
  var width = self.el.width();

  // if the element doesnt have an explicit height/width in css, set them
  if (!height) self.el.height(height = self.opts['height']);
  if (!width) self.el.width(width = self.opts['width']);

  self.h = height;
  self.w = width;

  var div = function(name) {
    return $('<div class="toggle-' + name +'">');
  };

  self.els = {
    // wrapper inside toggle
    slide: div('slide'),

    // inside slide, this bit moves
    inner: div('inner'),

    // the on/off divs
    on: div('on'),
    off: div('off'),

    // the grip to drag the toggle
    blob: div('blob')
  };

  var halfHeight = height / 2;
  var onOffWidth = width - halfHeight;

  var isSelect = self.selectType;

  // set up the CSS for the individual elements
  self.els.on
    .css({
      height: height,
      width: onOffWidth,
      textIndent: isSelect ? '' : -halfHeight,
      lineHeight: height + 'px'
    })
    .html(self.opts['text']['on']);

  self.els.off
    .css({
      height: height,
      width: onOffWidth,
      marginLeft: isSelect ? '' : -halfHeight,
      textIndent: isSelect ? '' : halfHeight,
      lineHeight: height + 'px'
    })
    .html(self.opts['text']['off']);

  self.els.blob.css({
    height: height,
    width: height,
    marginLeft: -halfHeight
  });

  self.els.inner.css({
    width: width * 2 - height,
    marginLeft: (isSelect || self['active']) ? 0 : -width + height
  });

  if (self.selectType) {
    self.els.slide.addClass('toggle-select');
    self.el.css('width', onOffWidth * 2);
    self.els.blob.hide();
  }

  // construct the toggle
  self.els.inner.append(self.els.on, self.els.blob, self.els.off);
  self.els.slide.html(self.els.inner);
  self.el.html(self.els.slide);
};

Toggles.prototype.bindEvents = function() {
  var self = this;

  // evt handler for click events
  var clickHandler = function(e) {

    // if the target isn't the blob or dragging is disabled, toggle!
    if (e['target'] !== self.els.blob[0] || !self.opts['drag']) {
      self.toggle();
    }
  };

  // if click is enabled and toggle isn't within the clicker element (stops double binding)
  if (self.opts['click'] && (!self.opts['clicker'] || !self.opts['clicker'].has(self.el).length)) {
    self.el.on('click', clickHandler);
  }

  // setup the clicker element
  if (self.opts['clicker']) {
    self.opts['clicker'].on('click', clickHandler);
  }

  // bind up dragging stuff
  if (self.opts['drag'] && !self.selectType) self.bindDrag();
};

Toggles.prototype.bindDrag = function() {
  var self = this;

  // time to begin the dragging parts/blob clicks
  var diff;
  var slideLimit = (self.w - self.h) / 4;

  // fired on mouseup and mouseleave events
  var upLeave = function(e) {
    self.el.off('mousemove');
    self.els.slide.off('mouseleave');
    self.els.blob.off('mouseup');

    if (!diff && self.opts['click'] && e.type !== 'mouseleave') {
      self.toggle();
      return;
    }

    var overBound = self['active'] ? diff < -slideLimit : diff > slideLimit;
    if (overBound) {
      // dragged far enough, toggle
      self.toggle();
    } else {
      // reset to previous state
      self.els.inner.stop().animate({
        marginLeft: self['active'] ? 0 : -self.w + self.h
      }, self.opts['animate'] / 2);
    }
  };

  var wh = -self.w + self.h;

  self.els.blob.on('mousedown', function(e) {

    // reset diff
    diff = 0;

    self.els.blob.off('mouseup');
    self.els.slide.off('mouseleave');
    var cursor = e.pageX;

    self.el.on('mousemove', self.els.blob, function(e) {
      diff = e.pageX - cursor;
      var marginLeft;


      if (self['active']) {

        marginLeft = diff;

        // keep it within the limits
        if (diff > 0) marginLeft = 0;
        if (diff < wh) marginLeft = wh;
      } else {

        marginLeft = diff + wh;

        if (diff < 0) marginLeft = wh;
        if (diff > -wh) marginLeft = 0;

      }

      self.els.inner.css('margin-left',marginLeft);
    });

    self.els.blob.on('mouseup', upLeave);
    self.els.slide.on('mouseleave', upLeave);
  });
};

Toggles.prototype.toggle = function(state, noAnimate, noEvent) {
  var self = this;

  // check we arent already in the desired state
  if (self['active'] === state) return;

  var active = self['active'] = !self['active'];

  self.el.data('toggle-active', active);

  self.els.off.toggleClass('active', !active);
  self.els.on.toggleClass('active', active);
  self.checkbox.prop('checked', active);

  if (!noEvent) self.el.trigger(self.opts['event'], active);

  if (self.selectType) return;

  var margin = active ? 0 : -self.w + self.h;

  // move the toggle!
  self.els.inner.stop().animate({
    'marginLeft': margin
  }, noAnimate ? 0 : self.opts['animate']);
};

    $.fn['toggles'] = function(opts) {
      return this.each(function() {
        new Toggles($(this), opts);
      });
    };
  };

  if (typeof define === 'function' && define['amd']) {
    define(['jquery'], factory);
  } else {
    factory(root['jQuery'] || root['Zepto'] || root['ender'] || root['$'] || $);
  }

})(this);


$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* MIT license */
var colorNames = require(5);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"5":5}],2:[function(require,module,exports){
/* MIT license */
var convert = require(4);
var string = require(1);

var Color = function (obj) {
    if (obj instanceof Color) {
        return obj;
    }
    if (!(this instanceof Color)) {
        return new Color(obj);
    }

    this.values = {
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        hwb: [0, 0, 0],
        cmyk: [0, 0, 0, 0],
        alpha: 1
    };

    // parse Color() argument
    var vals;
    if (typeof obj === 'string') {
        vals = string.getRgba(obj);
        if (vals) {
            this.setValues('rgb', vals);
        } else if (vals = string.getHsla(obj)) {
            this.setValues('hsl', vals);
        } else if (vals = string.getHwb(obj)) {
            this.setValues('hwb', vals);
        } else {
            throw new Error('Unable to parse color from string "' + obj + '"');
        }
    } else if (typeof obj === 'object') {
        vals = obj;
        if (vals.r !== undefined || vals.red !== undefined) {
            this.setValues('rgb', vals);
        } else if (vals.l !== undefined || vals.lightness !== undefined) {
            this.setValues('hsl', vals);
        } else if (vals.v !== undefined || vals.value !== undefined) {
            this.setValues('hsv', vals);
        } else if (vals.w !== undefined || vals.whiteness !== undefined) {
            this.setValues('hwb', vals);
        } else if (vals.c !== undefined || vals.cyan !== undefined) {
            this.setValues('cmyk', vals);
        } else {
            throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
        }
    }
};

Color.prototype = {
    rgb: function () {
        return this.setSpace('rgb', arguments);
    },
    hsl: function () {
        return this.setSpace('hsl', arguments);
    },
    hsv: function () {
        return this.setSpace('hsv', arguments);
    },
    hwb: function () {
        return this.setSpace('hwb', arguments);
    },
    cmyk: function () {
        return this.setSpace('cmyk', arguments);
    },

    rgbArray: function () {
        return this.values.rgb;
    },
    hslArray: function () {
        return this.values.hsl;
    },
    hsvArray: function () {
        return this.values.hsv;
    },
    hwbArray: function () {
        var values = this.values;
        if (values.alpha !== 1) {
            return values.hwb.concat([values.alpha]);
        }
        return values.hwb;
    },
    cmykArray: function () {
        return this.values.cmyk;
    },
    rgbaArray: function () {
        var values = this.values;
        return values.rgb.concat([values.alpha]);
    },
    hslaArray: function () {
        var values = this.values;
        return values.hsl.concat([values.alpha]);
    },
    alpha: function (val) {
        if (val === undefined) {
            return this.values.alpha;
        }
        this.setValues('alpha', val);
        return this;
    },

    red: function (val) {
        return this.setChannel('rgb', 0, val);
    },
    green: function (val) {
        return this.setChannel('rgb', 1, val);
    },
    blue: function (val) {
        return this.setChannel('rgb', 2, val);
    },
    hue: function (val) {
        if (val) {
            val %= 360;
            val = val < 0 ? 360 + val : val;
        }
        return this.setChannel('hsl', 0, val);
    },
    saturation: function (val) {
        return this.setChannel('hsl', 1, val);
    },
    lightness: function (val) {
        return this.setChannel('hsl', 2, val);
    },
    saturationv: function (val) {
        return this.setChannel('hsv', 1, val);
    },
    whiteness: function (val) {
        return this.setChannel('hwb', 1, val);
    },
    blackness: function (val) {
        return this.setChannel('hwb', 2, val);
    },
    value: function (val) {
        return this.setChannel('hsv', 2, val);
    },
    cyan: function (val) {
        return this.setChannel('cmyk', 0, val);
    },
    magenta: function (val) {
        return this.setChannel('cmyk', 1, val);
    },
    yellow: function (val) {
        return this.setChannel('cmyk', 2, val);
    },
    black: function (val) {
        return this.setChannel('cmyk', 3, val);
    },

    hexString: function () {
        return string.hexString(this.values.rgb);
    },
    rgbString: function () {
        return string.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
        return string.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
        return string.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
        return string.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
        return string.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
        return string.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
        return string.keyword(this.values.rgb, this.values.alpha);
    },

    rgbNumber: function () {
        var rgb = this.values.rgb;
        return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
    },

    luminosity: function () {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        var rgb = this.values.rgb;
        var lum = [];
        for (var i = 0; i < rgb.length; i++) {
            var chan = rgb[i] / 255;
            lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },

    contrast: function (color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        var lum1 = this.luminosity();
        var lum2 = color2.luminosity();
        if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
    },

    level: function (color2) {
        var contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
            return 'AAA';
        }

        return (contrastRatio >= 4.5) ? 'AA' : '';
    },

    dark: function () {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        var rgb = this.values.rgb;
        var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq < 128;
    },

    light: function () {
        return !this.dark();
    },

    negate: function () {
        var rgb = [];
        for (var i = 0; i < 3; i++) {
            rgb[i] = 255 - this.values.rgb[i];
        }
        this.setValues('rgb', rgb);
        return this;
    },

    lighten: function (ratio) {
        var hsl = this.values.hsl;
        hsl[2] += hsl[2] * ratio;
        this.setValues('hsl', hsl);
        return this;
    },

    darken: function (ratio) {
        var hsl = this.values.hsl;
        hsl[2] -= hsl[2] * ratio;
        this.setValues('hsl', hsl);
        return this;
    },

    saturate: function (ratio) {
        var hsl = this.values.hsl;
        hsl[1] += hsl[1] * ratio;
        this.setValues('hsl', hsl);
        return this;
    },

    desaturate: function (ratio) {
        var hsl = this.values.hsl;
        hsl[1] -= hsl[1] * ratio;
        this.setValues('hsl', hsl);
        return this;
    },

    whiten: function (ratio) {
        var hwb = this.values.hwb;
        hwb[1] += hwb[1] * ratio;
        this.setValues('hwb', hwb);
        return this;
    },

    blacken: function (ratio) {
        var hwb = this.values.hwb;
        hwb[2] += hwb[2] * ratio;
        this.setValues('hwb', hwb);
        return this;
    },

    greyscale: function () {
        var rgb = this.values.rgb;
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        this.setValues('rgb', [val, val, val]);
        return this;
    },

    clearer: function (ratio) {
        var alpha = this.values.alpha;
        this.setValues('alpha', alpha - (alpha * ratio));
        return this;
    },

    opaquer: function (ratio) {
        var alpha = this.values.alpha;
        this.setValues('alpha', alpha + (alpha * ratio));
        return this;
    },

    rotate: function (degrees) {
        var hsl = this.values.hsl;
        var hue = (hsl[0] + degrees) % 360;
        hsl[0] = hue < 0 ? 360 + hue : hue;
        this.setValues('hsl', hsl);
        return this;
    },

    /**
     * Ported from sass implementation in C
     * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
     */
    mix: function (mixinColor, weight) {
        var color1 = this;
        var color2 = mixinColor;
        var p = weight === undefined ? 0.5 : weight;

        var w = 2 * p - 1;
        var a = color1.alpha() - color2.alpha();

        var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
        var w2 = 1 - w1;

        return this
            .rgb(
                w1 * color1.red() + w2 * color2.red(),
                w1 * color1.green() + w2 * color2.green(),
                w1 * color1.blue() + w2 * color2.blue()
            )
            .alpha(color1.alpha() * p + color2.alpha() * (1 - p));
    },

    toJSON: function () {
        return this.rgb();
    },

    clone: function () {
        // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
        // making the final build way to big to embed in Chart.js. So let's do it manually,
        // assuming that values to clone are 1 dimension arrays containing only numbers,
        // except 'alpha' which is a number.
        var result = new Color();
        var source = this.values;
        var target = result.values;
        var value, type;

        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                value = source[prop];
                type = ({}).toString.call(value);
                if (type === '[object Array]') {
                    target[prop] = value.slice(0);
                } else if (type === '[object Number]') {
                    target[prop] = value;
                } else {
                    console.error('unexpected color value:', value);
                }
            }
        }

        return result;
    }
};

Color.prototype.spaces = {
    rgb: ['red', 'green', 'blue'],
    hsl: ['hue', 'saturation', 'lightness'],
    hsv: ['hue', 'saturation', 'value'],
    hwb: ['hue', 'whiteness', 'blackness'],
    cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
    var values = this.values;
    var vals = {};

    for (var i = 0; i < space.length; i++) {
        vals[space.charAt(i)] = values[space][i];
    }

    if (values.alpha !== 1) {
        vals.a = values.alpha;
    }

    // {r: 255, g: 255, b: 255, a: 0.4}
    return vals;
};

Color.prototype.setValues = function (space, vals) {
    var values = this.values;
    var spaces = this.spaces;
    var maxes = this.maxes;
    var alpha = 1;
    var i;

    if (space === 'alpha') {
        alpha = vals;
    } else if (vals.length) {
        // [10, 10, 10]
        values[space] = vals.slice(0, space.length);
        alpha = vals[space.length];
    } else if (vals[space.charAt(0)] !== undefined) {
        // {r: 10, g: 10, b: 10}
        for (i = 0; i < space.length; i++) {
            values[space][i] = vals[space.charAt(i)];
        }

        alpha = vals.a;
    } else if (vals[spaces[space][0]] !== undefined) {
        // {red: 10, green: 10, blue: 10}
        var chans = spaces[space];

        for (i = 0; i < space.length; i++) {
            values[space][i] = vals[chans[i]];
        }

        alpha = vals.alpha;
    }

    values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

    if (space === 'alpha') {
        return false;
    }

    var capped;

    // cap values of the space prior converting all values
    for (i = 0; i < space.length; i++) {
        capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
        values[space][i] = Math.round(capped);
    }

    // convert to all the other color spaces
    for (var sname in spaces) {
        if (sname !== space) {
            values[sname] = convert[space][sname](values[space]);
        }
    }

    return true;
};

Color.prototype.setSpace = function (space, args) {
    var vals = args[0];

    if (vals === undefined) {
        // color.rgb()
        return this.getValues(space);
    }

    // color.rgb(10, 10, 10)
    if (typeof vals === 'number') {
        vals = Array.prototype.slice.call(args);
    }

    this.setValues(space, vals);
    return this;
};

Color.prototype.setChannel = function (space, index, val) {
    var svalues = this.values[space];
    if (val === undefined) {
        // color.red()
        return svalues[index];
    } else if (val === svalues[index]) {
        // color.red(color.red())
        return this;
    }

    // color.red(100)
    svalues[index] = val;
    this.setValues(space, svalues);

    return this;
};

if (typeof window !== 'undefined') {
    window.Color = Color;
}

module.exports = Color;

},{"1":1,"4":4}],3:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],4:[function(require,module,exports){
var conversions = require(3);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) {
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);

      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);
   }

   return this.setValues(space, values);
};

/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"3":3}],5:[function(require,module,exports){
module.exports = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
};
},{}],6:[function(require,module,exports){
//! moment.js
//! version : 2.16.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof value === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.16.0';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(28)();

require(26)(Chart);
require(22)(Chart);
require(25)(Chart);
require(21)(Chart);
require(23)(Chart);
require(24)(Chart);
require(29)(Chart);
require(33)(Chart);
require(31)(Chart);
require(34)(Chart);
require(32)(Chart);
require(35)(Chart);
require(30)(Chart);
require(27)(Chart);
require(36)(Chart);

require(37)(Chart);
require(38)(Chart);
require(39)(Chart);
require(40)(Chart);

require(43)(Chart);
require(41)(Chart);
require(42)(Chart);
require(44)(Chart);
require(45)(Chart);
require(46)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

window.Chart = module.exports = Chart;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"39":39,"40":40,"41":41,"42":42,"43":43,"44":44,"45":45,"46":46,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.Bar = function(context, config) {
        config.type = 'bar';

        return new Chart(context, config);
    };

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.Bubble = function(context, config) {
        config.type = 'bubble';
        return new Chart(context, config);
    };

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.Doughnut = function(context, config) {
        config.type = 'doughnut';

        return new Chart(context, config);
    };

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.Line = function(context, config) {
        config.type = 'line';

        return new Chart(context, config);
    };

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.PolarArea = function(context, config) {
        config.type = 'polarArea';

        return new Chart(context, config);
    };

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    Chart.Radar = function(context, config) {
        config.type = 'radar';

        return new Chart(context, config);
    };

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var defaultConfig = {
        hover: {
            mode: 'single'
        },

        scales: {
            xAxes: [{
                type: 'linear', // scatter should not use a category axis
                position: 'bottom',
                id: 'x-axis-1' // need an ID so datasets can reference the scale
            }],
            yAxes: [{
                type: 'linear',
                position: 'left',
                id: 'y-axis-1'
            }]
        },

        tooltips: {
            callbacks: {
                title: function() {
                    // Title doesn't make sense for scatter since we format the data as a point
                    return '';
                },
                label: function(tooltipItem) {
                    return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                }
            }
        }
    };

    // Register the default config for this type
    Chart.defaults.scatter = defaultConfig;

    // Scatter charts use line controllers
    Chart.controllers.scatter = Chart.controllers.line;

    Chart.Scatter = function(context, config) {
        config.type = 'scatter';
        return new Chart(context, config);
    };

};

},{}],15:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.bar = {
        hover: {
            mode: 'label'
        },

        scales: {
            xAxes: [{
                type: 'category',

                // Specific to Bar Controller
                categoryPercentage: 0.8,
                barPercentage: 0.9,

                // grid line settings
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                type: 'linear'
            }]
        }
    };

    Chart.controllers.bar = Chart.DatasetController.extend({

        dataElementType: Chart.elements.Rectangle,

        initialize: function(chart, datasetIndex) {
            Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

            // Use this to indicate that this is a bar dataset.
            this.getMeta().bar = true;
        },

        // Get the number of datasets that display bars. We use this to correctly calculate the bar width
        getBarCount: function() {
            var me = this;
            var barCount = 0;
            helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
                var meta = me.chart.getDatasetMeta(datasetIndex);
                if (meta.bar && me.chart.isDatasetVisible(datasetIndex)) {
                    ++barCount;
                }
            }, me);
            return barCount;
        },

        update: function(reset) {
            var me = this;
            helpers.each(me.getMeta().data, function(rectangle, index) {
                me.updateElement(rectangle, index, reset);
            }, me);
        },

        updateElement: function(rectangle, index, reset) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var yScale = me.getScaleForId(meta.yAxisID);
            var scaleBase = yScale.getBasePixel();
            var rectangleElementOptions = me.chart.options.elements.rectangle;
            var custom = rectangle.custom || {};
            var dataset = me.getDataset();

            rectangle._xScale = xScale;
            rectangle._yScale = yScale;
            rectangle._datasetIndex = me.index;
            rectangle._index = index;

            var ruler = me.getRuler(index);
            rectangle._model = {
                x: me.calculateBarX(index, me.index, ruler),
                y: reset ? scaleBase : me.calculateBarY(index, me.index),

                // Tooltip
                label: me.chart.data.labels[index],
                datasetLabel: dataset.label,

                // Appearance
                base: reset ? scaleBase : me.calculateBarBase(me.index, index),
                width: me.calculateBarWidth(ruler),
                backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
                borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
                borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
                borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
            };

            rectangle.pivot();
        },

        calculateBarBase: function(datasetIndex, index) {
            var me = this;
            var meta = me.getMeta();
            var yScale = me.getScaleForId(meta.yAxisID);
            var base = 0;

            if (yScale.options.stacked) {
                var chart = me.chart;
                var datasets = chart.data.datasets;
                var value = Number(datasets[datasetIndex].data[index]);

                for (var i = 0; i < datasetIndex; i++) {
                    var currentDs = datasets[i];
                    var currentDsMeta = chart.getDatasetMeta(i);
                    if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
                        var currentVal = Number(currentDs.data[index]);
                        base += value < 0 ? Math.min(currentVal, 0) : Math.max(currentVal, 0);
                    }
                }

                return yScale.getPixelForValue(base);
            }

            return yScale.getBasePixel();
        },

        getRuler: function(index) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var datasetCount = me.getBarCount();

            var tickWidth;

            if (xScale.options.type === 'category') {
                tickWidth = xScale.getPixelForTick(index + 1) - xScale.getPixelForTick(index);
            } else {
                // Average width
                tickWidth = xScale.width / xScale.ticks.length;
            }
            var categoryWidth = tickWidth * xScale.options.categoryPercentage;
            var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
            var fullBarWidth = categoryWidth / datasetCount;

            if (xScale.ticks.length !== me.chart.data.labels.length) {
                var perc = xScale.ticks.length / me.chart.data.labels.length;
                fullBarWidth = fullBarWidth * perc;
            }

            var barWidth = fullBarWidth * xScale.options.barPercentage;
            var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

            return {
                datasetCount: datasetCount,
                tickWidth: tickWidth,
                categoryWidth: categoryWidth,
                categorySpacing: categorySpacing,
                fullBarWidth: fullBarWidth,
                barWidth: barWidth,
                barSpacing: barSpacing
            };
        },

        calculateBarWidth: function(ruler) {
            var xScale = this.getScaleForId(this.getMeta().xAxisID);
            if (xScale.options.barThickness) {
                return xScale.options.barThickness;
            }
            return xScale.options.stacked ? ruler.categoryWidth : ruler.barWidth;
        },

        // Get bar index from the given dataset index accounting for the fact that not all bars are visible
        getBarIndex: function(datasetIndex) {
            var barIndex = 0;
            var meta, j;

            for (j = 0; j < datasetIndex; ++j) {
                meta = this.chart.getDatasetMeta(j);
                if (meta.bar && this.chart.isDatasetVisible(j)) {
                    ++barIndex;
                }
            }

            return barIndex;
        },

        calculateBarX: function(index, datasetIndex, ruler) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var barIndex = me.getBarIndex(datasetIndex);
            var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
            leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;

            if (xScale.options.stacked) {
                return leftTick + (ruler.categoryWidth / 2) + ruler.categorySpacing;
            }

            return leftTick +
                (ruler.barWidth / 2) +
                ruler.categorySpacing +
                (ruler.barWidth * barIndex) +
                (ruler.barSpacing / 2) +
                (ruler.barSpacing * barIndex);
        },

        calculateBarY: function(index, datasetIndex) {
            var me = this;
            var meta = me.getMeta();
            var yScale = me.getScaleForId(meta.yAxisID);
            var value = Number(me.getDataset().data[index]);

            if (yScale.options.stacked) {

                var sumPos = 0,
                    sumNeg = 0;

                for (var i = 0; i < datasetIndex; i++) {
                    var ds = me.chart.data.datasets[i];
                    var dsMeta = me.chart.getDatasetMeta(i);
                    if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i)) {
                        var stackedVal = Number(ds.data[index]);
                        if (stackedVal < 0) {
                            sumNeg += stackedVal || 0;
                        } else {
                            sumPos += stackedVal || 0;
                        }
                    }
                }

                if (value < 0) {
                    return yScale.getPixelForValue(sumNeg + value);
                }
                return yScale.getPixelForValue(sumPos + value);
            }

            return yScale.getPixelForValue(value);
        },

        draw: function(ease) {
            var me = this;
            var easingDecimal = ease || 1;
            var metaData = me.getMeta().data;
            var dataset = me.getDataset();
            var i, len;

            for (i = 0, len = metaData.length; i < len; ++i) {
                var d = dataset.data[i];
                if (d !== null && d !== undefined && !isNaN(d)) {
                    metaData[i].transition(easingDecimal).draw();
                }
            }
        },

        setHoverStyle: function(rectangle) {
            var dataset = this.chart.data.datasets[rectangle._datasetIndex];
            var index = rectangle._index;

            var custom = rectangle.custom || {};
            var model = rectangle._model;
            model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
            model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
            model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
        },

        removeHoverStyle: function(rectangle) {
            var dataset = this.chart.data.datasets[rectangle._datasetIndex];
            var index = rectangle._index;
            var custom = rectangle.custom || {};
            var model = rectangle._model;
            var rectangleElementOptions = this.chart.options.elements.rectangle;

            model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
            model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
            model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
        }

    });


    // including horizontalBar in the bar file, instead of a file of its own
    // it extends bar (like pie extends doughnut)
    Chart.defaults.horizontalBar = {
        hover: {
            mode: 'label'
        },

        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }],
            yAxes: [{
                position: 'left',
                type: 'category',

                // Specific to Horizontal Bar Controller
                categoryPercentage: 0.8,
                barPercentage: 0.9,

                // grid line settings
                gridLines: {
                    offsetGridLines: true
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: 'left'
            }
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItems, data) {
                    // Pick first xLabel for now
                    var title = '';

                    if (tooltipItems.length > 0) {
                        if (tooltipItems[0].yLabel) {
                            title = tooltipItems[0].yLabel;
                        } else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
                            title = data.labels[tooltipItems[0].index];
                        }
                    }

                    return title;
                },
                label: function(tooltipItem, data) {
                    var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.xLabel;
                }
            }
        }
    };

    Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
        updateElement: function(rectangle, index, reset) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var yScale = me.getScaleForId(meta.yAxisID);
            var scaleBase = xScale.getBasePixel();
            var custom = rectangle.custom || {};
            var dataset = me.getDataset();
            var rectangleElementOptions = me.chart.options.elements.rectangle;

            rectangle._xScale = xScale;
            rectangle._yScale = yScale;
            rectangle._datasetIndex = me.index;
            rectangle._index = index;

            var ruler = me.getRuler(index);
            rectangle._model = {
                x: reset ? scaleBase : me.calculateBarX(index, me.index),
                y: me.calculateBarY(index, me.index, ruler),

                // Tooltip
                label: me.chart.data.labels[index],
                datasetLabel: dataset.label,

                // Appearance
                base: reset ? scaleBase : me.calculateBarBase(me.index, index),
                height: me.calculateBarHeight(ruler),
                backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
                borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
                borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
                borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
            };
            rectangle.draw = function() {
                var ctx = this._chart.ctx;
                var vm = this._view;

                var halfHeight = vm.height / 2,
                    topY = vm.y - halfHeight,
                    bottomY = vm.y + halfHeight,
                    right = vm.base - (vm.base - vm.x),
                    halfStroke = vm.borderWidth / 2;

                // Canvas doesn't allow us to stroke inside the width so we can
                // adjust the sizes to fit if we're setting a stroke on the line
                if (vm.borderWidth) {
                    topY += halfStroke;
                    bottomY -= halfStroke;
                    right += halfStroke;
                }

                ctx.beginPath();

                ctx.fillStyle = vm.backgroundColor;
                ctx.strokeStyle = vm.borderColor;
                ctx.lineWidth = vm.borderWidth;

                // Corner points, from bottom-left to bottom-right clockwise
                // | 1 2 |
                // | 0 3 |
                var corners = [
                    [vm.base, bottomY],
                    [vm.base, topY],
                    [right, topY],
                    [right, bottomY]
                ];

                // Find first (starting) corner with fallback to 'bottom'
                var borders = ['bottom', 'left', 'top', 'right'];
                var startCorner = borders.indexOf(vm.borderSkipped, 0);
                if (startCorner === -1) {
                    startCorner = 0;
                }

                function cornerAt(cornerIndex) {
                    return corners[(startCorner + cornerIndex) % 4];
                }

                // Draw rectangle from 'startCorner'
                ctx.moveTo.apply(ctx, cornerAt(0));
                for (var i = 1; i < 4; i++) {
                    ctx.lineTo.apply(ctx, cornerAt(i));
                }

                ctx.fill();
                if (vm.borderWidth) {
                    ctx.stroke();
                }
            };

            rectangle.pivot();
        },

        calculateBarBase: function(datasetIndex, index) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var base = 0;

            if (xScale.options.stacked) {
                var chart = me.chart;
                var datasets = chart.data.datasets;
                var value = Number(datasets[datasetIndex].data[index]);

                for (var i = 0; i < datasetIndex; i++) {
                    var currentDs = datasets[i];
                    var currentDsMeta = chart.getDatasetMeta(i);
                    if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i)) {
                        var currentVal = Number(currentDs.data[index]);
                        base += value < 0 ? Math.min(currentVal, 0) : Math.max(currentVal, 0);
                    }
                }

                return xScale.getPixelForValue(base);
            }

            return xScale.getBasePixel();
        },

        getRuler: function(index) {
            var me = this;
            var meta = me.getMeta();
            var yScale = me.getScaleForId(meta.yAxisID);
            var datasetCount = me.getBarCount();

            var tickHeight;
            if (yScale.options.type === 'category') {
                tickHeight = yScale.getPixelForTick(index + 1) - yScale.getPixelForTick(index);
            } else {
                // Average width
                tickHeight = yScale.width / yScale.ticks.length;
            }
            var categoryHeight = tickHeight * yScale.options.categoryPercentage;
            var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
            var fullBarHeight = categoryHeight / datasetCount;

            if (yScale.ticks.length !== me.chart.data.labels.length) {
                var perc = yScale.ticks.length / me.chart.data.labels.length;
                fullBarHeight = fullBarHeight * perc;
            }

            var barHeight = fullBarHeight * yScale.options.barPercentage;
            var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);

            return {
                datasetCount: datasetCount,
                tickHeight: tickHeight,
                categoryHeight: categoryHeight,
                categorySpacing: categorySpacing,
                fullBarHeight: fullBarHeight,
                barHeight: barHeight,
                barSpacing: barSpacing
            };
        },

        calculateBarHeight: function(ruler) {
            var me = this;
            var yScale = me.getScaleForId(me.getMeta().yAxisID);
            if (yScale.options.barThickness) {
                return yScale.options.barThickness;
            }
            return yScale.options.stacked ? ruler.categoryHeight : ruler.barHeight;
        },

        calculateBarX: function(index, datasetIndex) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var value = Number(me.getDataset().data[index]);

            if (xScale.options.stacked) {

                var sumPos = 0,
                    sumNeg = 0;

                for (var i = 0; i < datasetIndex; i++) {
                    var ds = me.chart.data.datasets[i];
                    var dsMeta = me.chart.getDatasetMeta(i);
                    if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i)) {
                        var stackedVal = Number(ds.data[index]);
                        if (stackedVal < 0) {
                            sumNeg += stackedVal || 0;
                        } else {
                            sumPos += stackedVal || 0;
                        }
                    }
                }

                if (value < 0) {
                    return xScale.getPixelForValue(sumNeg + value);
                }
                return xScale.getPixelForValue(sumPos + value);
            }

            return xScale.getPixelForValue(value);
        },

        calculateBarY: function(index, datasetIndex, ruler) {
            var me = this;
            var meta = me.getMeta();
            var yScale = me.getScaleForId(meta.yAxisID);
            var barIndex = me.getBarIndex(datasetIndex);
            var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
            topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;

            if (yScale.options.stacked) {
                return topTick + (ruler.categoryHeight / 2) + ruler.categorySpacing;
            }

            return topTick +
                (ruler.barHeight / 2) +
                ruler.categorySpacing +
                (ruler.barHeight * barIndex) +
                (ruler.barSpacing / 2) +
                (ruler.barSpacing * barIndex);
        }
    });
};

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.bubble = {
        hover: {
            mode: 'single'
        },

        scales: {
            xAxes: [{
                type: 'linear', // bubble should probably use a linear scale by default
                position: 'bottom',
                id: 'x-axis-0' // need an ID so datasets can reference the scale
            }],
            yAxes: [{
                type: 'linear',
                position: 'left',
                id: 'y-axis-0'
            }]
        },

        tooltips: {
            callbacks: {
                title: function() {
                    // Title doesn't make sense for scatter since we format the data as a point
                    return '';
                },
                label: function(tooltipItem, data) {
                    var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
                }
            }
        }
    };

    Chart.controllers.bubble = Chart.DatasetController.extend({

        dataElementType: Chart.elements.Point,

        update: function(reset) {
            var me = this;
            var meta = me.getMeta();
            var points = meta.data;

            // Update Points
            helpers.each(points, function(point, index) {
                me.updateElement(point, index, reset);
            });
        },

        updateElement: function(point, index, reset) {
            var me = this;
            var meta = me.getMeta();
            var xScale = me.getScaleForId(meta.xAxisID);
            var yScale = me.getScaleForId(meta.yAxisID);

            var custom = point.custom || {};
            var dataset = me.getDataset();
            var data = dataset.data[index];
            var pointElementOptions = me.chart.options.elements.point;
            var dsIndex = me.index;

            helpers.extend(point, {
                // Utility
                _xScale: xScale,
                _yScale: yScale,
                _datasetIndex: dsIndex,
                _index: index,

                // Desired view properties
                _model: {
                    x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
                    y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
                    // Appearance
                    radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),

                    // Tooltip
                    hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
                }
            });

            // Trick to reset the styles of the point
            Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);

            var model = point._model;
            model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));

            point.pivot();
        },

        getRadius: function(value) {
            return value.r || this.chart.options.elements.point.radius;
        },

        setHoverStyle: function(point) {
            var me = this;
            Chart.DatasetController.prototype.setHoverStyle.call(me, point);

            // Radius
            var dataset = me.chart.data.datasets[point._datasetIndex];
            var index = point._index;
            var custom = point.custom || {};
            var model = point._model;
            model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
        },

        removeHoverStyle: function(point) {
            var me = this;
            Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);

            var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
            var custom = point.custom || {};
            var model = point._model;

            model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
        }
    });
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers,
        defaults = Chart.defaults;

    defaults.doughnut = {
        animation: {
            // Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,
            // Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false
        },
        aspectRatio: 1,
        hover: {
            mode: 'single'
        },
        legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');

            var data = chart.data;
            var datasets = data.datasets;
            var labels = data.labels;

            if (datasets.length) {
                for (var i = 0; i < datasets[0].data.length; ++i) {
                    text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
                    if (labels[i]) {
                        text.push(labels[i]);
                    }
                    text.push('</li>');
                }
            }

            text.push('</ul>');
            return text.join('');
        },
        legend: {
            labels: {
                generateLabels: function(chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function(label, i) {
                            var meta = chart.getDatasetMeta(0);
                            var ds = data.datasets[0];
                            var arc = meta.data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            return {
                                text: label,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                                // Extra data used for toggling the correct item
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },

            onClick: function(e, legendItem) {
                var index = legendItem.index;
                var chart = this.chart;
                var i, ilen, meta;

                for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
                    meta = chart.getDatasetMeta(i);
                    // toggle visibility of index if exists
                    if (meta.data[index]) {
                        meta.data[index].hidden = !meta.data[index].hidden;
                    }
                }

                chart.update();
            }
        },

        // The percentage of the chart that we cut out of the middle.
        cutoutPercentage: 50,

        // The rotation of the chart, where the first data arc begins.
        rotation: Math.PI * -0.5,

        // The total circumference of the chart.
        circumference: Math.PI * 2.0,

        // Need to override these to give a nice default
        tooltips: {
            callbacks: {
                title: function() {
                    return '';
                },
                label: function(tooltipItem, data) {
                    var dataLabel = data.labels[tooltipItem.index];
                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

                    if (helpers.isArray(dataLabel)) {
                        // show value on first line of multiline label
                        // need to clone because we are changing the value
                        dataLabel = dataLabel.slice();
                        dataLabel[0] += value;
                    } else {
                        dataLabel += value;
                    }

                    return dataLabel;
                }
            }
        }
    };

    defaults.pie = helpers.clone(defaults.doughnut);
    helpers.extend(defaults.pie, {
        cutoutPercentage: 0
    });


    Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

        dataElementType: Chart.elements.Arc,

        linkScales: helpers.noop,

        // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
        getRingIndex: function(datasetIndex) {
            var ringIndex = 0;

            for (var j = 0; j < datasetIndex; ++j) {
                if (this.chart.isDatasetVisible(j)) {
                    ++ringIndex;
                }
            }

            return ringIndex;
        },

        update: function(reset) {
            var me = this;
            var chart = me.chart,
                chartArea = chart.chartArea,
                opts = chart.options,
                arcOpts = opts.elements.arc,
                availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
                availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
                minSize = Math.min(availableWidth, availableHeight),
                offset = {
                    x: 0,
                    y: 0
                },
                meta = me.getMeta(),
                cutoutPercentage = opts.cutoutPercentage,
                circumference = opts.circumference;

            // If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
            if (circumference < Math.PI * 2.0) {
                var startAngle = opts.rotation % (Math.PI * 2.0);
                startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
                var endAngle = startAngle + circumference;
                var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
                var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
                var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
                var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
                var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
                var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
                var cutout = cutoutPercentage / 100.0;
                var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
                var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
                var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
                minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
                offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
            }

            chart.borderWidth = me.getMaxBorderWidth(meta.data);
            chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
            chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 1, 0);
            chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
            chart.offsetX = offset.x * chart.outerRadius;
            chart.offsetY = offset.y * chart.outerRadius;

            meta.total = me.calculateTotal();

            me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
            me.innerRadius = me.outerRadius - chart.radiusLength;

            helpers.each(meta.data, function(arc, index) {
                me.updateElement(arc, index, reset);
            });
        },

        updateElement: function(arc, index, reset) {
            var me = this;
            var chart = me.chart,
                chartArea = chart.chartArea,
                opts = chart.options,
                animationOpts = opts.animation,
                centerX = (chartArea.left + chartArea.right) / 2,
                centerY = (chartArea.top + chartArea.bottom) / 2,
                startAngle = opts.rotation, // non reset case handled later
                endAngle = opts.rotation, // non reset case handled later
                dataset = me.getDataset(),
                circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
                innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
                outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
                valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

            helpers.extend(arc, {
                // Utility
                _datasetIndex: me.index,
                _index: index,

                // Desired view properties
                _model: {
                    x: centerX + chart.offsetX,
                    y: centerY + chart.offsetY,
                    startAngle: startAngle,
                    endAngle: endAngle,
                    circumference: circumference,
                    outerRadius: outerRadius,
                    innerRadius: innerRadius,
                    label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
                }
            });

            var model = arc._model;
            // Resets the visual styles
            this.removeHoverStyle(arc);

            // Set correct angles if not resetting
            if (!reset || !animationOpts.animateRotate) {
                if (index === 0) {
                    model.startAngle = opts.rotation;
                } else {
                    model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
                }

                model.endAngle = model.startAngle + model.circumference;
            }

            arc.pivot();
        },

        removeHoverStyle: function(arc) {
            Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
        },

        calculateTotal: function() {
            var dataset = this.getDataset();
            var meta = this.getMeta();
            var total = 0;
            var value;

            helpers.each(meta.data, function(element, index) {
                value = dataset.data[index];
                if (!isNaN(value) && !element.hidden) {
                    total += Math.abs(value);
                }
            });

            /* if (total === 0) {
                total = NaN;
            }*/

            return total;
        },

        calculateCircumference: function(value) {
            var total = this.getMeta().total;
            if (total > 0 && !isNaN(value)) {
                return (Math.PI * 2.0) * (value / total);
            }
            return 0;
        },

        // gets the max border or hover width to properly scale pie charts
        getMaxBorderWidth: function(elements) {
            var max = 0,
                index = this.index,
                length = elements.length,
                borderWidth,
                hoverWidth;

            for (var i = 0; i < length; i++) {
                borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
                hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

                max = borderWidth > max ? borderWidth : max;
                max = hoverWidth > max ? hoverWidth : max;
            }
            return max;
        }
    });
};

},{}],18:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.line = {
        showLines: true,
        spanGaps: false,

        hover: {
            mode: 'label'
        },

        scales: {
            xAxes: [{
                type: 'category',
                id: 'x-axis-0'
            }],
            yAxes: [{
                type: 'linear',
                id: 'y-axis-0'
            }]
        }
    };

    function lineEnabled(dataset, options) {
        return helpers.getValueOrDefault(dataset.showLine, options.showLines);
    }

    Chart.controllers.line = Chart.DatasetController.extend({

        datasetElementType: Chart.elements.Line,

        dataElementType: Chart.elements.Point,

        update: function(reset) {
            var me = this;
            var meta = me.getMeta();
            var line = meta.dataset;
            var points = meta.data || [];
            var options = me.chart.options;
            var lineElementOptions = options.elements.line;
            var scale = me.getScaleForId(meta.yAxisID);
            var i, ilen, custom;
            var dataset = me.getDataset();
            var showLine = lineEnabled(dataset, options);

            // Update Line
            if (showLine) {
                custom = line.custom || {};

                // Compatibility: If the properties are defined with only the old name, use those values
                if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
                    dataset.lineTension = dataset.tension;
                }

                // Utility
                line._scale = scale;
                line._datasetIndex = me.index;
                // Data
                line._children = points;
                // Model
                line._model = {
                    // Appearance
                    // The default behavior of lines is to break at null values, according
                    // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
                    // This option gives lines the ability to span gaps
                    spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
                    tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
                    backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
                    borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
                    borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
                    borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
                    borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
                    borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
                    borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
                    fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
                    steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
                    cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
                    // Scale
                    scaleTop: scale.top,
                    scaleBottom: scale.bottom,
                    scaleZero: scale.getBasePixel()
                };

                line.pivot();
            }

            // Update Points
            for (i=0, ilen=points.length; i<ilen; ++i) {
                me.updateElement(points[i], i, reset);
            }

            if (showLine && line._model.tension !== 0) {
                me.updateBezierControlPoints();
            }

            // Now pivot the point for animation
            for (i=0, ilen=points.length; i<ilen; ++i) {
                points[i].pivot();
            }
        },

        getPointBackgroundColor: function(point, index) {
            var backgroundColor = this.chart.options.elements.point.backgroundColor;
            var dataset = this.getDataset();
            var custom = point.custom || {};

            if (custom.backgroundColor) {
                backgroundColor = custom.backgroundColor;
            } else if (dataset.pointBackgroundColor) {
                backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
            } else if (dataset.backgroundColor) {
                backgroundColor = dataset.backgroundColor;
            }

            return backgroundColor;
        },

        getPointBorderColor: function(point, index) {
            var borderColor = this.chart.options.elements.point.borderColor;
            var dataset = this.getDataset();
            var custom = point.custom || {};

            if (custom.borderColor) {
                borderColor = custom.borderColor;
            } else if (dataset.pointBorderColor) {
                borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
            } else if (dataset.borderColor) {
                borderColor = dataset.borderColor;
            }

            return borderColor;
        },

        getPointBorderWidth: function(point, index) {
            var borderWidth = this.chart.options.elements.point.borderWidth;
            var dataset = this.getDataset();
            var custom = point.custom || {};

            if (custom.borderWidth) {
                borderWidth = custom.borderWidth;
            } else if (dataset.pointBorderWidth) {
                borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
            } else if (dataset.borderWidth) {
                borderWidth = dataset.borderWidth;
            }

            return borderWidth;
        },

        updateElement: function(point, index, reset) {
            var me = this;
            var meta = me.getMeta();
            var custom = point.custom || {};
            var dataset = me.getDataset();
            var datasetIndex = me.index;
            var value = dataset.data[index];
            var yScale = me.getScaleForId(meta.yAxisID);
            var xScale = me.getScaleForId(meta.xAxisID);
            var pointOptions = me.chart.options.elements.point;
            var x, y;
            var labels = me.chart.data.labels || [];
            var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;

            // Compatibility: If the properties are defined with only the old name, use those values
            if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
                dataset.pointRadius = dataset.radius;
            }
            if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
                dataset.pointHitRadius = dataset.hitRadius;
            }

            x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
            y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

            // Utility
            point._xScale = xScale;
            point._yScale = yScale;
            point._datasetIndex = datasetIndex;
            point._index = index;

            // Desired view properties
            point._model = {
                x: x,
                y: y,
                skip: custom.skip || isNaN(x) || isNaN(y),
                // Appearance
                radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
                pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
                backgroundColor: me.getPointBackgroundColor(point, index),
                borderColor: me.getPointBorderColor(point, index),
                borderWidth: me.getPointBorderWidth(point, index),
                tension: meta.dataset._model ? meta.dataset._model.tension : 0,
                steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
                // Tooltip
                hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
            };
        },

        calculatePointY: function(value, index, datasetIndex) {
            var me = this;
            var chart = me.chart;
            var meta = me.getMeta();
            var yScale = me.getScaleForId(meta.yAxisID);
            var sumPos = 0;
            var sumNeg = 0;
            var i, ds, dsMeta;

            if (yScale.options.stacked) {
                for (i = 0; i < datasetIndex; i++) {
                    ds = chart.data.datasets[i];
                    dsMeta = chart.getDatasetMeta(i);
                    if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
                        var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
                        if (stackedRightValue < 0) {
                            sumNeg += stackedRightValue || 0;
                        } else {
                            sumPos += stackedRightValue || 0;
                        }
                    }
                }

                var rightValue = Number(yScale.getRightValue(value));
                if (rightValue < 0) {
                    return yScale.getPixelForValue(sumNeg + rightValue);
                }
                return yScale.getPixelForValue(sumPos + rightValue);
            }

            return yScale.getPixelForValue(value);
        },

        updateBezierControlPoints: function() {
            var me = this;
            var meta = me.getMeta();
            var area = me.chart.chartArea;
            var points = (meta.data || []);
            var i, ilen, point, model, controlPoints;

            // Only consider points that are drawn in case the spanGaps option is used
            if (meta.dataset._model.spanGaps) {
                points = points.filter(function(pt) {
                    return !pt._model.skip;
                });
            }

            function capControlPoint(pt, min, max) {
                return Math.max(Math.min(pt, max), min);
            }

            if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
                helpers.splineCurveMonotone(points);
            } else {
                for (i = 0, ilen = points.length; i < ilen; ++i) {
                    point = points[i];
                    model = point._model;
                    controlPoints = helpers.splineCurve(
                        helpers.previousItem(points, i)._model,
                        model,
                        helpers.nextItem(points, i)._model,
                        meta.dataset._model.tension
                    );
                    model.controlPointPreviousX = controlPoints.previous.x;
                    model.controlPointPreviousY = controlPoints.previous.y;
                    model.controlPointNextX = controlPoints.next.x;
                    model.controlPointNextY = controlPoints.next.y;
                }
            }

            if (me.chart.options.elements.line.capBezierPoints) {
                for (i = 0, ilen = points.length; i < ilen; ++i) {
                    model = points[i]._model;
                    model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
                    model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
                    model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
                    model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
                }
            }
        },

        draw: function(ease) {
            var me = this;
            var meta = me.getMeta();
            var points = meta.data || [];
            var easingDecimal = ease || 1;
            var i, ilen;

            // Transition Point Locations
            for (i=0, ilen=points.length; i<ilen; ++i) {
                points[i].transition(easingDecimal);
            }

            // Transition and Draw the line
            if (lineEnabled(me.getDataset(), me.chart.options)) {
                meta.dataset.transition(easingDecimal).draw();
            }

            // Draw the points
            for (i=0, ilen=points.length; i<ilen; ++i) {
                points[i].draw();
            }
        },

        setHoverStyle: function(point) {
            // Point
            var dataset = this.chart.data.datasets[point._datasetIndex];
            var index = point._index;
            var custom = point.custom || {};
            var model = point._model;

            model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
            model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
            model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
            model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
        },

        removeHoverStyle: function(point) {
            var me = this;
            var dataset = me.chart.data.datasets[point._datasetIndex];
            var index = point._index;
            var custom = point.custom || {};
            var model = point._model;

            // Compatibility: If the properties are defined with only the old name, use those values
            if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
                dataset.pointRadius = dataset.radius;
            }

            model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
            model.backgroundColor = me.getPointBackgroundColor(point, index);
            model.borderColor = me.getPointBorderColor(point, index);
            model.borderWidth = me.getPointBorderWidth(point, index);
        }
    });
};

},{}],19:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.polarArea = {

        scale: {
            type: 'radialLinear',
            lineArc: true, // so that lines are circular
            ticks: {
                beginAtZero: true
            }
        },

        // Boolean - Whether to animate the rotation of the chart
        animation: {
            animateRotate: true,
            animateScale: true
        },

        startAngle: -0.5 * Math.PI,
        aspectRatio: 1,
        legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');

            var data = chart.data;
            var datasets = data.datasets;
            var labels = data.labels;

            if (datasets.length) {
                for (var i = 0; i < datasets[0].data.length; ++i) {
                    text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
                    if (labels[i]) {
                        text.push(labels[i]);
                    }
                    text.push('</li>');
                }
            }

            text.push('</ul>');
            return text.join('');
        },
        legend: {
            labels: {
                generateLabels: function(chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function(label, i) {
                            var meta = chart.getDatasetMeta(0);
                            var ds = data.datasets[0];
                            var arc = meta.data[i];
                            var custom = arc.custom || {};
                            var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            return {
                                text: label,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                                // Extra data used for toggling the correct item
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },

            onClick: function(e, legendItem) {
                var index = legendItem.index;
                var chart = this.chart;
                var i, ilen, meta;

                for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
                    meta = chart.getDatasetMeta(i);
                    meta.data[index].hidden = !meta.data[index].hidden;
                }

                chart.update();
            }
        },

        // Need to override these to give a nice default
        tooltips: {
            callbacks: {
                title: function() {
                    return '';
                },
                label: function(tooltipItem, data) {
                    return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
                }
            }
        }
    };

    Chart.controllers.polarArea = Chart.DatasetController.extend({

        dataElementType: Chart.elements.Arc,

        linkScales: helpers.noop,

        update: function(reset) {
            var me = this;
            var chart = me.chart;
            var chartArea = chart.chartArea;
            var meta = me.getMeta();
            var opts = chart.options;
            var arcOpts = opts.elements.arc;
            var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
            chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
            chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

            me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
            me.innerRadius = me.outerRadius - chart.radiusLength;

            meta.count = me.countVisibleElements();

            helpers.each(meta.data, function(arc, index) {
                me.updateElement(arc, index, reset);
            });
        },

        updateElement: function(arc, index, reset) {
            var me = this;
            var chart = me.chart;
            var dataset = me.getDataset();
            var opts = chart.options;
            var animationOpts = opts.animation;
            var scale = chart.scale;
            var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
            var labels = chart.data.labels;

            var circumference = me.calculateCircumference(dataset.data[index]);
            var centerX = scale.xCenter;
            var centerY = scale.yCenter;

            // If there is NaN data before us, we need to calculate the starting angle correctly.
            // We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
            var visibleCount = 0;
            var meta = me.getMeta();
            for (var i = 0; i < index; ++i) {
                if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
                    ++visibleCount;
                }
            }

            // var negHalfPI = -0.5 * Math.PI;
            var datasetStartAngle = opts.startAngle;
            var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
            var startAngle = datasetStartAngle + (circumference * visibleCount);
            var endAngle = startAngle + (arc.hidden ? 0 : circumference);

            var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

            helpers.extend(arc, {
                // Utility
                _datasetIndex: me.index,
                _index: index,
                _scale: scale,

                // Desired view properties
                _model: {
                    x: centerX,
                    y: centerY,
                    innerRadius: 0,
                    outerRadius: reset ? resetRadius : distance,
                    startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
                    endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
                    label: getValueAtIndexOrDefault(labels, index, labels[index])
                }
            });

            // Apply border and fill style
            me.removeHoverStyle(arc);

            arc.pivot();
        },

        removeHoverStyle: function(arc) {
            Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
        },

        countVisibleElements: function() {
            var dataset = this.getDataset();
            var meta = this.getMeta();
            var count = 0;

            helpers.each(meta.data, function(element, index) {
                if (!isNaN(dataset.data[index]) && !element.hidden) {
                    count++;
                }
            });

            return count;
        },

        calculateCircumference: function(value) {
            var count = this.getMeta().count;
            if (count > 0 && !isNaN(value)) {
                return (2 * Math.PI) / count;
            }
            return 0;
        }
    });
};

},{}],20:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.radar = {
        aspectRatio: 1,
        scale: {
            type: 'radialLinear'
        },
        elements: {
            line: {
                tension: 0 // no bezier in radar
            }
        }
    };

    Chart.controllers.radar = Chart.DatasetController.extend({

        datasetElementType: Chart.elements.Line,

        dataElementType: Chart.elements.Point,

        linkScales: helpers.noop,

        update: function(reset) {
            var me = this;
            var meta = me.getMeta();
            var line = meta.dataset;
            var points = meta.data;
            var custom = line.custom || {};
            var dataset = me.getDataset();
            var lineElementOptions = me.chart.options.elements.line;
            var scale = me.chart.scale;

            // Compatibility: If the properties are defined with only the old name, use those values
            if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
                dataset.lineTension = dataset.tension;
            }

            helpers.extend(meta.dataset, {
                // Utility
                _datasetIndex: me.index,
                // Data
                _children: points,
                _loop: true,
                // Model
                _model: {
                    // Appearance
                    tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
                    backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
                    borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
                    borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
                    fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
                    borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
                    borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
                    borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
                    borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),

                    // Scale
                    scaleTop: scale.top,
                    scaleBottom: scale.bottom,
                    scaleZero: scale.getBasePosition()
                }
            });

            meta.dataset.pivot();

            // Update Points
            helpers.each(points, function(point, index) {
                me.updateElement(point, index, reset);
            }, me);

            // Update bezier control points
            me.updateBezierControlPoints();
        },
        updateElement: function(point, index, reset) {
            var me = this;
            var custom = point.custom || {};
            var dataset = me.getDataset();
            var scale = me.chart.scale;
            var pointElementOptions = me.chart.options.elements.point;
            var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

            helpers.extend(point, {
                // Utility
                _datasetIndex: me.index,
                _index: index,
                _scale: scale,

                // Desired view properties
                _model: {
                    x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
                    y: reset ? scale.yCenter : pointPosition.y,

                    // Appearance
                    tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.tension, me.chart.options.elements.line.tension),
                    radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
                    backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
                    borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
                    borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
                    pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

                    // Tooltip
                    hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
                }
            });

            point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
        },
        updateBezierControlPoints: function() {
            var chartArea = this.chart.chartArea;
            var meta = this.getMeta();

            helpers.each(meta.data, function(point, index) {
                var model = point._model;
                var controlPoints = helpers.splineCurve(
                    helpers.previousItem(meta.data, index, true)._model,
                    model,
                    helpers.nextItem(meta.data, index, true)._model,
                    model.tension
                );

                // Prevent the bezier going outside of the bounds of the graph
                model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
                model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

                model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
                model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

                // Now pivot the point for animation
                point.pivot();
            });
        },

        draw: function(ease) {
            var meta = this.getMeta();
            var easingDecimal = ease || 1;

            // Transition Point Locations
            helpers.each(meta.data, function(point) {
                point.transition(easingDecimal);
            });

            // Transition and Draw the line
            meta.dataset.transition(easingDecimal).draw();

            // Draw the points
            helpers.each(meta.data, function(point) {
                point.draw();
            });
        },

        setHoverStyle: function(point) {
            // Point
            var dataset = this.chart.data.datasets[point._datasetIndex];
            var custom = point.custom || {};
            var index = point._index;
            var model = point._model;

            model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
            model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
            model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
            model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
        },

        removeHoverStyle: function(point) {
            var dataset = this.chart.data.datasets[point._datasetIndex];
            var custom = point.custom || {};
            var index = point._index;
            var model = point._model;
            var pointElementOptions = this.chart.options.elements.point;

            model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
            model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
            model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
            model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
        }
    });
};

},{}],21:[function(require,module,exports){
/* global window: false */
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.global.animation = {
        duration: 1000,
        easing: 'easeOutQuart',
        onProgress: helpers.noop,
        onComplete: helpers.noop
    };

    Chart.Animation = Chart.Element.extend({
        currentStep: null, // the current animation step
        numSteps: 60, // default number of steps
        easing: '', // the easing to use for this animation
        render: null, // render function used by the animation service

        onAnimationProgress: null, // user specified callback to fire on each step of the animation
        onAnimationComplete: null // user specified callback to fire when the animation finishes
    });

    Chart.animationService = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        request: null,

        /**
         * @function Chart.animationService.addAnimation
         * @param chartInstance {ChartController} the chart to animate
         * @param animationObject {IAnimation} the animation that we will animate
         * @param duration {Number} length of animation in ms
         * @param lazy {Boolean} if true, the chart is not marked as animating to enable more responsive interactions
         */
        addAnimation: function(chartInstance, animationObject, duration, lazy) {
            var me = this;

            if (!lazy) {
                chartInstance.animating = true;
            }

            for (var index = 0; index < me.animations.length; ++index) {
                if (me.animations[index].chartInstance === chartInstance) {
                    // replacing an in progress animation
                    me.animations[index].animationObject = animationObject;
                    return;
                }
            }

            me.animations.push({
                chartInstance: chartInstance,
                animationObject: animationObject
            });

            // If there are no animations queued, manually kickstart a digest, for lack of a better word
            if (me.animations.length === 1) {
                me.requestAnimationFrame();
            }
        },
        // Cancel the animation for a given chart instance
        cancelAnimation: function(chartInstance) {
            var index = helpers.findIndex(this.animations, function(animationWrapper) {
                return animationWrapper.chartInstance === chartInstance;
            });

            if (index !== -1) {
                this.animations.splice(index, 1);
                chartInstance.animating = false;
            }
        },
        requestAnimationFrame: function() {
            var me = this;
            if (me.request === null) {
                // Skip animation frame requests until the active one is executed.
                // This can happen when processing mouse events, e.g. 'mousemove'
                // and 'mouseout' events will trigger multiple renders.
                me.request = helpers.requestAnimFrame.call(window, function() {
                    me.request = null;
                    me.startDigest();
                });
            }
        },
        startDigest: function() {
            var me = this;

            var startTime = Date.now();
            var framesToDrop = 0;

            if (me.dropFrames > 1) {
                framesToDrop = Math.floor(me.dropFrames);
                me.dropFrames = me.dropFrames % 1;
            }

            var i = 0;
            while (i < me.animations.length) {
                if (me.animations[i].animationObject.currentStep === null) {
                    me.animations[i].animationObject.currentStep = 0;
                }

                me.animations[i].animationObject.currentStep += 1 + framesToDrop;

                if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
                    me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
                }

                me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
                if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
                    me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
                }

                if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
                    if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
                        me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
                    }

                    // executed the last frame. Remove the animation.
                    me.animations[i].chartInstance.animating = false;

                    me.animations.splice(i, 1);
                } else {
                    ++i;
                }
            }

            var endTime = Date.now();
            var dropFrames = (endTime - startTime) / me.frameDuration;

            me.dropFrames += dropFrames;

            // Do we have more stuff to animate?
            if (me.animations.length > 0) {
                me.requestAnimationFrame();
            }
        }
    };
};

},{}],22:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
    // Global Chart canvas helpers object for drawing items to canvas
    var helpers = Chart.canvasHelpers = {};

    helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
        var type, edgeLength, xOffset, yOffset, height, size;

        if (typeof pointStyle === 'object') {
            type = pointStyle.toString();
            if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
                ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
                return;
            }
        }

        if (isNaN(radius) || radius <= 0) {
            return;
        }

        switch (pointStyle) {
        // Default includes circle
        default:
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            break;
        case 'triangle':
            ctx.beginPath();
            edgeLength = 3 * radius / Math.sqrt(3);
            height = edgeLength * Math.sqrt(3) / 2;
            ctx.moveTo(x - edgeLength / 2, y + height / 3);
            ctx.lineTo(x + edgeLength / 2, y + height / 3);
            ctx.lineTo(x, y - 2 * height / 3);
            ctx.closePath();
            ctx.fill();
            break;
        case 'rect':
            size = 1 / Math.SQRT2 * radius;
            ctx.beginPath();
            ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
            ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
            break;
        case 'rectRot':
            size = 1 / Math.SQRT2 * radius;
            ctx.beginPath();
            ctx.moveTo(x - size, y);
            ctx.lineTo(x, y + size);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x, y - size);
            ctx.closePath();
            ctx.fill();
            break;
        case 'cross':
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.lineTo(x, y - radius);
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.closePath();
            break;
        case 'crossRot':
            ctx.beginPath();
            xOffset = Math.cos(Math.PI / 4) * radius;
            yOffset = Math.sin(Math.PI / 4) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x - xOffset, y + yOffset);
            ctx.lineTo(x + xOffset, y - yOffset);
            ctx.closePath();
            break;
        case 'star':
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.lineTo(x, y - radius);
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            xOffset = Math.cos(Math.PI / 4) * radius;
            yOffset = Math.sin(Math.PI / 4) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x - xOffset, y + yOffset);
            ctx.lineTo(x + xOffset, y - yOffset);
            ctx.closePath();
            break;
        case 'line':
            ctx.beginPath();
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.closePath();
            break;
        case 'dash':
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + radius, y);
            ctx.closePath();
            break;
        }

        ctx.stroke();
    };
};

},{}],23:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    // Create a dictionary of chart types, to allow for extension of existing types
    Chart.types = {};

    // Store a reference to each instance - allowing us to globally resize chart instances on window resize.
    // Destroy method on the chart will remove the instance of the chart from this reference.
    Chart.instances = {};

    // Controllers available for dataset visualization eg. bar, line, slice, etc.
    Chart.controllers = {};

    /**
     * The "used" size is the final value of a dimension property after all calculations have
     * been performed. This method uses the computed style of `element` but returns undefined
     * if the computed style is not expressed in pixels. That can happen in some cases where
     * `element` has a size relative to its parent and this last one is not yet displayed,
     * for example because of `display: none` on a parent node.
     * TODO(SB) Move this method in the upcoming core.platform class.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
     * @returns {Number} Size in pixels or undefined if unknown.
     */
    function readUsedSize(element, property) {
        var value = helpers.getStyle(element, property);
        var matches = value && value.match(/(\d+)px/);
        return matches? Number(matches[1]) : undefined;
    }

    /**
     * Initializes the canvas style and render size without modifying the canvas display size,
     * since responsiveness is handled by the controller.resize() method. The config is used
     * to determine the aspect ratio to apply in case no explicit height has been specified.
     * TODO(SB) Move this method in the upcoming core.platform class.
     */
    function initCanvas(canvas, config) {
        var style = canvas.style;

        // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
        // returns null or '' if no explicit value has been set to the canvas attribute.
        var renderHeight = canvas.getAttribute('height');
        var renderWidth = canvas.getAttribute('width');

        // Chart.js modifies some canvas values that we want to restore on destroy
        canvas._chartjs = {
            initial: {
                height: renderHeight,
                width: renderWidth,
                style: {
                    display: style.display,
                    height: style.height,
                    width: style.width
                }
            }
        };

        // Force canvas to display as block to avoid extra space caused by inline
        // elements, which would interfere with the responsive resize process.
        // https://github.com/chartjs/Chart.js/issues/2538
        style.display = style.display || 'block';

        if (renderWidth === null || renderWidth === '') {
            var displayWidth = readUsedSize(canvas, 'width');
            if (displayWidth !== undefined) {
                canvas.width = displayWidth;
            }
        }

        if (renderHeight === null || renderHeight === '') {
            if (canvas.style.height === '') {
                // If no explicit render height and style height, let's apply the aspect ratio,
                // which one can be specified by the user but also by charts as default option
                // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
                canvas.height = canvas.width / (config.options.aspectRatio || 2);
            } else {
                var displayHeight = readUsedSize(canvas, 'height');
                if (displayWidth !== undefined) {
                    canvas.height = displayHeight;
                }
            }
        }

        return canvas;
    }

    /**
     * Restores the canvas initial state, such as render/display sizes and style.
     * TODO(SB) Move this method in the upcoming core.platform class.
     */
    function releaseCanvas(canvas) {
        if (!canvas._chartjs) {
            return;
        }

        var initial = canvas._chartjs.initial;
        ['height', 'width'].forEach(function(prop) {
            var value = initial[prop];
            if (value === undefined || value === null) {
                canvas.removeAttribute(prop);
            } else {
                canvas.setAttribute(prop, value);
            }
        });

        helpers.each(initial.style || {}, function(value, key) {
            canvas.style[key] = value;
        });

        // The canvas render size might have been changed (and thus the state stack discarded),
        // we can't use save() and restore() to restore the initial state. So make sure that at
        // least the canvas context is reset to the default state by setting the canvas width.
        // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
        canvas.width = canvas.width;

        delete canvas._chartjs;
    }

    /**
     * TODO(SB) Move this method in the upcoming core.platform class.
     */
    function acquireContext(item, config) {
        if (typeof item === 'string') {
            item = document.getElementById(item);
        } else if (item.length) {
            // Support for array based queries (such as jQuery)
            item = item[0];
        }

        if (item && item.canvas) {
            // Support for any object associated to a canvas (including a context2d)
            item = item.canvas;
        }

        if (item instanceof HTMLCanvasElement) {
            // To prevent canvas fingerprinting, some add-ons undefine the getContext
            // method, for example: https://github.com/kkapsner/CanvasBlocker
            // https://github.com/chartjs/Chart.js/issues/2807
            var context = item.getContext && item.getContext('2d');
            if (context instanceof CanvasRenderingContext2D) {
                initCanvas(item, config);
                return context;
            }
        }

        return null;
    }

    /**
     * Initializes the given config with global and chart default values.
     */
    function initConfig(config) {
        config = config || {};

        // Do NOT use configMerge() for the data object because this method merges arrays
        // and so would change references to labels and datasets, preventing data updates.
        var data = config.data = config.data || {};
        data.datasets = data.datasets || [];
        data.labels = data.labels || [];

        config.options = helpers.configMerge(
            Chart.defaults.global,
            Chart.defaults[config.type],
            config.options || {});

        return config;
    }

    /**
     * @class Chart.Controller
     * The main controller of a chart.
     */
    Chart.Controller = function(item, config, instance) {
        var me = this;

        config = initConfig(config);

        var context = acquireContext(item, config);
        var canvas = context && context.canvas;
        var height = canvas && canvas.height;
        var width = canvas && canvas.width;

        instance.ctx = context;
        instance.canvas = canvas;
        instance.config = config;
        instance.width = width;
        instance.height = height;
        instance.aspectRatio = height? width / height : null;

        me.id = helpers.uid();
        me.chart = instance;
        me.config = config;
        me.options = config.options;
        me._bufferedRender = false;

        // Add the chart instance to the global namespace
        Chart.instances[me.id] = me;

        Object.defineProperty(me, 'data', {
            get: function() {
                return me.config.data;
            }
        });

        if (!context || !canvas) {
            // The given item is not a compatible context2d element, let's return before finalizing
            // the chart initialization but after setting basic chart / controller properties that
            // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
            // https://github.com/chartjs/Chart.js/issues/2807
            console.error("Failed to create chart: can't acquire context from the given item");
            return me;
        }

        helpers.retinaScale(instance);

        // Responsiveness is currently based on the use of an iframe, however this method causes
        // performance issues and could be troublesome when used with ad blockers. So make sure
        // that the user is still able to create a chart without iframe when responsive is false.
        // See https://github.com/chartjs/Chart.js/issues/2210
        if (me.options.responsive) {
            helpers.addResizeListener(canvas.parentNode, function() {
                me.resize();
            });

            // Initial resize before chart draws (must be silent to preserve initial animations).
            me.resize(true);
        }

        me.initialize();

        return me;
    };

    helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller */ {
        initialize: function() {
            var me = this;

            // Before init plugin notification
            Chart.plugins.notify('beforeInit', [me]);

            me.bindEvents();

            // Make sure controllers are built first so that each dataset is bound to an axis before the scales
            // are built
            me.ensureScalesHaveIDs();
            me.buildOrUpdateControllers();
            me.buildScales();
            me.updateLayout();
            me.resetElements();
            me.initToolTip();
            me.update();

            // After init plugin notification
            Chart.plugins.notify('afterInit', [me]);

            return me;
        },

        clear: function() {
            helpers.clear(this.chart);
            return this;
        },

        stop: function() {
            // Stops any current animation loop occurring
            Chart.animationService.cancelAnimation(this);
            return this;
        },

        resize: function(silent) {
            var me = this;
            var chart = me.chart;
            var options = me.options;
            var canvas = chart.canvas;
            var aspectRatio = (options.maintainAspectRatio && chart.aspectRatio) || null;

            // the canvas render width and height will be casted to integers so make sure that
            // the canvas display style uses the same integer values to avoid blurring effect.
            var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
            var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));

            if (chart.width === newWidth && chart.height === newHeight) {
                return;
            }

            canvas.width = chart.width = newWidth;
            canvas.height = chart.height = newHeight;
            canvas.style.width = newWidth + 'px';
            canvas.style.height = newHeight + 'px';

            helpers.retinaScale(chart);

            // Notify any plugins about the resize
            var newSize = {width: newWidth, height: newHeight};
            Chart.plugins.notify('resize', [me, newSize]);

            // Notify of resize
            if (me.options.onResize) {
                me.options.onResize(me, newSize);
            }

            if (!silent) {
                me.stop();
                me.update(me.options.responsiveAnimationDuration);
            }
        },

        ensureScalesHaveIDs: function() {
            var options = this.options;
            var scalesOptions = options.scales || {};
            var scaleOptions = options.scale;

            helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
                xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
            });

            helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
                yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
            });

            if (scaleOptions) {
                scaleOptions.id = scaleOptions.id || 'scale';
            }
        },

        /**
         * Builds a map of scale ID to scale object for future lookup.
         */
        buildScales: function() {
            var me = this;
            var options = me.options;
            var scales = me.scales = {};
            var items = [];

            if (options.scales) {
                items = items.concat(
                    (options.scales.xAxes || []).map(function(xAxisOptions) {
                        return {options: xAxisOptions, dtype: 'category'};
                    }),
                    (options.scales.yAxes || []).map(function(yAxisOptions) {
                        return {options: yAxisOptions, dtype: 'linear'};
                    })
                );
            }

            if (options.scale) {
                items.push({options: options.scale, dtype: 'radialLinear', isDefault: true});
            }

            helpers.each(items, function(item) {
                var scaleOptions = item.options;
                var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
                var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
                if (!scaleClass) {
                    return;
                }

                var scale = new scaleClass({
                    id: scaleOptions.id,
                    options: scaleOptions,
                    ctx: me.chart.ctx,
                    chart: me
                });

                scales[scale.id] = scale;

                // TODO(SB): I think we should be able to remove this custom case (options.scale)
                // and consider it as a regular scale part of the "scales"" map only! This would
                // make the logic easier and remove some useless? custom code.
                if (item.isDefault) {
                    me.scale = scale;
                }
            });

            Chart.scaleService.addScalesToLayout(this);
        },

        updateLayout: function() {
            Chart.layoutService.update(this, this.chart.width, this.chart.height);
        },

        buildOrUpdateControllers: function() {
            var me = this;
            var types = [];
            var newControllers = [];

            helpers.each(me.data.datasets, function(dataset, datasetIndex) {
                var meta = me.getDatasetMeta(datasetIndex);
                if (!meta.type) {
                    meta.type = dataset.type || me.config.type;
                }

                types.push(meta.type);

                if (meta.controller) {
                    meta.controller.updateIndex(datasetIndex);
                } else {
                    meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
                    newControllers.push(meta.controller);
                }
            }, me);

            if (types.length > 1) {
                for (var i = 1; i < types.length; i++) {
                    if (types[i] !== types[i - 1]) {
                        me.isCombo = true;
                        break;
                    }
                }
            }

            return newControllers;
        },

        /**
         * Reset the elements of all datasets
         * @method resetElements
         * @private
         */
        resetElements: function() {
            var me = this;
            helpers.each(me.data.datasets, function(dataset, datasetIndex) {
                me.getDatasetMeta(datasetIndex).controller.reset();
            }, me);
        },

        /**
        * Resets the chart back to it's state before the initial animation
        * @method reset
        */
        reset: function() {
            this.resetElements();
            this.tooltip.initialize();
        },

        update: function(animationDuration, lazy) {
            var me = this;
            Chart.plugins.notify('beforeUpdate', [me]);

            // In case the entire data object changed
            me.tooltip._data = me.data;

            // Make sure dataset controllers are updated and new controllers are reset
            var newControllers = me.buildOrUpdateControllers();

            // Make sure all dataset controllers have correct meta data counts
            helpers.each(me.data.datasets, function(dataset, datasetIndex) {
                me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
            }, me);

            Chart.layoutService.update(me, me.chart.width, me.chart.height);

            // Apply changes to the datasets that require the scales to have been calculated i.e BorderColor changes
            Chart.plugins.notify('afterScaleUpdate', [me]);

            // Can only reset the new controllers after the scales have been updated
            helpers.each(newControllers, function(controller) {
                controller.reset();
            });

            me.updateDatasets();

            // Do this before render so that any plugins that need final scale updates can use it
            Chart.plugins.notify('afterUpdate', [me]);

            if (me._bufferedRender) {
                me._bufferedRequest = {
                    lazy: lazy,
                    duration: animationDuration
                };
            } else {
                me.render(animationDuration, lazy);
            }
        },

        /**
         * @method beforeDatasetsUpdate
         * @description Called before all datasets are updated. If a plugin returns false,
         * the datasets update will be cancelled until another chart update is triggered.
         * @param {Object} instance the chart instance being updated.
         * @returns {Boolean} false to cancel the datasets update.
         * @memberof Chart.PluginBase
         * @since version 2.1.5
         * @instance
         */

        /**
         * @method afterDatasetsUpdate
         * @description Called after all datasets have been updated. Note that this
         * extension will not be called if the datasets update has been cancelled.
         * @param {Object} instance the chart instance being updated.
         * @memberof Chart.PluginBase
         * @since version 2.1.5
         * @instance
         */

        /**
         * Updates all datasets unless a plugin returns false to the beforeDatasetsUpdate
         * extension, in which case no datasets will be updated and the afterDatasetsUpdate
         * notification will be skipped.
         * @protected
         * @instance
         */
        updateDatasets: function() {
            var me = this;
            var i, ilen;

            if (Chart.plugins.notify('beforeDatasetsUpdate', [me])) {
                for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
                    me.getDatasetMeta(i).controller.update();
                }

                Chart.plugins.notify('afterDatasetsUpdate', [me]);
            }
        },

        render: function(duration, lazy) {
            var me = this;
            Chart.plugins.notify('beforeRender', [me]);

            var animationOptions = me.options.animation;
            if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
                var animation = new Chart.Animation();
                animation.numSteps = (duration || animationOptions.duration) / 16.66; // 60 fps
                animation.easing = animationOptions.easing;

                // render function
                animation.render = function(chartInstance, animationObject) {
                    var easingFunction = helpers.easingEffects[animationObject.easing];
                    var stepDecimal = animationObject.currentStep / animationObject.numSteps;
                    var easeDecimal = easingFunction(stepDecimal);

                    chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
                };

                // user events
                animation.onAnimationProgress = animationOptions.onProgress;
                animation.onAnimationComplete = animationOptions.onComplete;

                Chart.animationService.addAnimation(me, animation, duration, lazy);
            } else {
                me.draw();
                if (animationOptions && animationOptions.onComplete && animationOptions.onComplete.call) {
                    animationOptions.onComplete.call(me);
                }
            }
            return me;
        },

        draw: function(ease) {
            var me = this;
            var easingDecimal = ease || 1;
            me.clear();

            Chart.plugins.notify('beforeDraw', [me, easingDecimal]);

            // Draw all the scales
            helpers.each(me.boxes, function(box) {
                box.draw(me.chartArea);
            }, me);
            if (me.scale) {
                me.scale.draw();
            }

            Chart.plugins.notify('beforeDatasetsDraw', [me, easingDecimal]);

            // Draw each dataset via its respective controller (reversed to support proper line stacking)
            helpers.each(me.data.datasets, function(dataset, datasetIndex) {
                if (me.isDatasetVisible(datasetIndex)) {
                    me.getDatasetMeta(datasetIndex).controller.draw(ease);
                }
            }, me, true);

            Chart.plugins.notify('afterDatasetsDraw', [me, easingDecimal]);

            // Finally draw the tooltip
            me.tooltip.transition(easingDecimal).draw();

            Chart.plugins.notify('afterDraw', [me, easingDecimal]);
        },

        // Get the single element that was clicked on
        // @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
        getElementAtEvent: function(e) {
            return Chart.Interaction.modes.single(this, e);
        },

        getElementsAtEvent: function(e) {
            return Chart.Interaction.modes.label(this, e, {intersect: true});
        },

        getElementsAtXAxis: function(e) {
            return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
        },

        getElementsAtEventForMode: function(e, mode, options) {
            var method = Chart.Interaction.modes[mode];
            if (typeof method === 'function') {
                return method(this, e, options);
            }

            return [];
        },

        getDatasetAtEvent: function(e) {
            return Chart.Interaction.modes.dataset(this, e);
        },

        getDatasetMeta: function(datasetIndex) {
            var me = this;
            var dataset = me.data.datasets[datasetIndex];
            if (!dataset._meta) {
                dataset._meta = {};
            }

            var meta = dataset._meta[me.id];
            if (!meta) {
                meta = dataset._meta[me.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,           // See isDatasetVisible() comment
                    xAxisID: null,
                    yAxisID: null
                };
            }

            return meta;
        },

        getVisibleDatasetCount: function() {
            var count = 0;
            for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
                if (this.isDatasetVisible(i)) {
                    count++;
                }
            }
            return count;
        },

        isDatasetVisible: function(datasetIndex) {
            var meta = this.getDatasetMeta(datasetIndex);

            // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
            // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
            return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
        },

        generateLegend: function() {
            return this.options.legendCallback(this);
        },

        destroy: function() {
            var me = this;
            var canvas = me.chart.canvas;
            var meta, i, ilen;

            me.stop();

            // dataset controllers need to cleanup associated data
            for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
                meta = me.getDatasetMeta(i);
                if (meta.controller) {
                    meta.controller.destroy();
                    meta.controller = null;
                }
            }

            if (canvas) {
                helpers.unbindEvents(me, me.events);
                helpers.removeResizeListener(canvas.parentNode);
                helpers.clear(me.chart);
                releaseCanvas(canvas);
                me.chart.canvas = null;
                me.chart.ctx = null;
            }

            Chart.plugins.notify('destroy', [me]);

            delete Chart.instances[me.id];
        },

        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
        },

        initToolTip: function() {
            var me = this;
            me.tooltip = new Chart.Tooltip({
                _chart: me.chart,
                _chartInstance: me,
                _data: me.data,
                _options: me.options.tooltips
            }, me);
            me.tooltip.initialize();
        },

        bindEvents: function() {
            var me = this;
            helpers.bindEvents(me, me.options.events, function(evt) {
                me.eventHandler(evt);
            });
        },

        updateHoverStyle: function(elements, mode, enabled) {
            var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
            var element, i, ilen;

            for (i=0, ilen=elements.length; i<ilen; ++i) {
                element = elements[i];
                if (element) {
                    this.getDatasetMeta(element._datasetIndex).controller[method](element);
                }
            }
        },

        eventHandler: function(e) {
            var me = this;
            var legend = me.legend;
            var tooltip = me.tooltip;
            var hoverOptions = me.options.hover;

            // Buffer any update calls so that renders do not occur
            me._bufferedRender = true;
            me._bufferedRequest = null;

            var changed = me.handleEvent(e);
            changed |= legend && legend.handleEvent(e);
            changed |= tooltip && tooltip.handleEvent(e);

            var bufferedRequest = me._bufferedRequest;
            if (bufferedRequest) {
                // If we have an update that was triggered, we need to do a normal render
                me.render(bufferedRequest.duration, bufferedRequest.lazy);
            } else if (changed && !me.animating) {
                // If entering, leaving, or changing elements, animate the change via pivot
                me.stop();

                // We only need to render at this point. Updating will cause scales to be
                // recomputed generating flicker & using more memory than necessary.
                me.render(hoverOptions.animationDuration, true);
            }

            me._bufferedRender = false;
            me._bufferedRequest = null;

            return me;
        },

        /**
         * Handle an event
         * @private
         * param e {Event} the event to handle
         * @return {Boolean} true if the chart needs to re-render
         */
        handleEvent: function(e) {
            var me = this;
            var options = me.options || {};
            var hoverOptions = options.hover;
            var changed = false;

            me.lastActive = me.lastActive || [];

            // Find Active Elements for hover and tooltips
            if (e.type === 'mouseout') {
                me.active = [];
            } else {
                me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
            }

            // On Hover hook
            if (hoverOptions.onHover) {
                hoverOptions.onHover.call(me, me.active);
            }

            if (e.type === 'mouseup' || e.type === 'click') {
                if (options.onClick) {
                    options.onClick.call(me, e, me.active);
                }
            }

            // Remove styling for last active (even if it may still be active)
            if (me.lastActive.length) {
                me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
            }

            // Built in hover styling
            if (me.active.length && hoverOptions.mode) {
                me.updateHoverStyle(me.active, hoverOptions.mode, true);
            }

            changed = !helpers.arrayEquals(me.active, me.lastActive);

            // Remember Last Actives
            me.lastActive = me.active;

            return changed;
        }
    });
};

},{}],24:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

    /**
     * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
     * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
     * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
     */
    function listenArrayEvents(array, listener) {
        if (array._chartjs) {
            array._chartjs.listeners.push(listener);
            return;
        }

        Object.defineProperty(array, '_chartjs', {
            configurable: true,
            enumerable: false,
            value: {
                listeners: [listener]
            }
        });

        arrayEvents.forEach(function(key) {
            var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
            var base = array[key];

            Object.defineProperty(array, key, {
                configurable: true,
                enumerable: false,
                value: function() {
                    var args = Array.prototype.slice.call(arguments);
                    var res = base.apply(this, args);

                    helpers.each(array._chartjs.listeners, function(object) {
                        if (typeof object[method] === 'function') {
                            object[method].apply(object, args);
                        }
                    });

                    return res;
                }
            });
        });
    }

    /**
     * Removes the given array event listener and cleanup extra attached properties (such as
     * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
     */
    function unlistenArrayEvents(array, listener) {
        var stub = array._chartjs;
        if (!stub) {
            return;
        }

        var listeners = stub.listeners;
        var index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1);
        }

        if (listeners.length > 0) {
            return;
        }

        arrayEvents.forEach(function(key) {
            delete array[key];
        });

        delete array._chartjs;
    }

    // Base class for all dataset controllers (line, bar, etc)
    Chart.DatasetController = function(chart, datasetIndex) {
        this.initialize(chart, datasetIndex);
    };

    helpers.extend(Chart.DatasetController.prototype, {

        /**
         * Element type used to generate a meta dataset (e.g. Chart.element.Line).
         * @type {Chart.core.element}
         */
        datasetElementType: null,

        /**
         * Element type used to generate a meta data (e.g. Chart.element.Point).
         * @type {Chart.core.element}
         */
        dataElementType: null,

        initialize: function(chart, datasetIndex) {
            var me = this;
            me.chart = chart;
            me.index = datasetIndex;
            me.linkScales();
            me.addElements();
        },

        updateIndex: function(datasetIndex) {
            this.index = datasetIndex;
        },

        linkScales: function() {
            var me = this;
            var meta = me.getMeta();
            var dataset = me.getDataset();

            if (meta.xAxisID === null) {
                meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
            }
            if (meta.yAxisID === null) {
                meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
            }
        },

        getDataset: function() {
            return this.chart.data.datasets[this.index];
        },

        getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
        },

        getScaleForId: function(scaleID) {
            return this.chart.scales[scaleID];
        },

        reset: function() {
            this.update(true);
        },

        /**
         * @private
         */
        destroy: function() {
            if (this._data) {
                unlistenArrayEvents(this._data, this);
            }
        },

        createMetaDataset: function() {
            var me = this;
            var type = me.datasetElementType;
            return type && new type({
                _chart: me.chart.chart,
                _datasetIndex: me.index
            });
        },

        createMetaData: function(index) {
            var me = this;
            var type = me.dataElementType;
            return type && new type({
                _chart: me.chart.chart,
                _datasetIndex: me.index,
                _index: index
            });
        },

        addElements: function() {
            var me = this;
            var meta = me.getMeta();
            var data = me.getDataset().data || [];
            var metaData = meta.data;
            var i, ilen;

            for (i=0, ilen=data.length; i<ilen; ++i) {
                metaData[i] = metaData[i] || me.createMetaData(i);
            }

            meta.dataset = meta.dataset || me.createMetaDataset();
        },

        addElementAndReset: function(index) {
            var element = this.createMetaData(index);
            this.getMeta().data.splice(index, 0, element);
            this.updateElement(element, index, true);
        },

        buildOrUpdateElements: function() {
            var me = this;
            var dataset = me.getDataset();
            var data = dataset.data || (dataset.data = []);

            // In order to correctly handle data addition/deletion animation (an thus simulate
            // real-time charts), we need to monitor these data modifications and synchronize
            // the internal meta data accordingly.
            if (me._data !== data) {
                if (me._data) {
                    // This case happens when the user replaced the data array instance.
                    unlistenArrayEvents(me._data, me);
                }

                listenArrayEvents(data, me);
                me._data = data;
            }

            // Re-sync meta data in case the user replaced the data array or if we missed
            // any updates and so make sure that we handle number of datapoints changing.
            me.resyncElements();
        },

        update: helpers.noop,

        draw: function(ease) {
            var easingDecimal = ease || 1;
            var i, len;
            var metaData = this.getMeta().data;
            for (i = 0, len = metaData.length; i < len; ++i) {
                metaData[i].transition(easingDecimal).draw();
            }
        },

        removeHoverStyle: function(element, elementOpts) {
            var dataset = this.chart.data.datasets[element._datasetIndex],
                index = element._index,
                custom = element.custom || {},
                valueOrDefault = helpers.getValueAtIndexOrDefault,
                model = element._model;

            model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
            model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
            model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
        },

        setHoverStyle: function(element) {
            var dataset = this.chart.data.datasets[element._datasetIndex],
                index = element._index,
                custom = element.custom || {},
                valueOrDefault = helpers.getValueAtIndexOrDefault,
                getHoverColor = helpers.getHoverColor,
                model = element._model;

            model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
            model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
            model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
        },

        /**
         * @private
         */
        resyncElements: function() {
            var me = this;
            var meta = me.getMeta();
            var data = me.getDataset().data;
            var numMeta = meta.data.length;
            var numData = data.length;

            if (numData < numMeta) {
                meta.data.splice(numData, numMeta - numData);
            } else if (numData > numMeta) {
                me.insertElements(numMeta, numData - numMeta);
            }
        },

        /**
         * @private
         */
        insertElements: function(start, count) {
            for (var i=0; i<count; ++i) {
                this.addElementAndReset(start + i);
            }
        },

        /**
         * @private
         */
        onDataPush: function() {
            this.insertElements(this.getDataset().data.length-1, arguments.length);
        },

        /**
         * @private
         */
        onDataPop: function() {
            this.getMeta().data.pop();
        },

        /**
         * @private
         */
        onDataShift: function() {
            this.getMeta().data.shift();
        },

        /**
         * @private
         */
        onDataSplice: function(start, count) {
            this.getMeta().data.splice(start, count);
            this.insertElements(start, arguments.length - 2);
        },

        /**
         * @private
         */
        onDataUnshift: function() {
            this.insertElements(0, arguments.length);
        }
    });

    Chart.DatasetController.extend = helpers.inherits;
};

},{}],25:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.elements = {};

    Chart.Element = function(configuration) {
        helpers.extend(this, configuration);
        this.initialize.apply(this, arguments);
    };

    helpers.extend(Chart.Element.prototype, {

        initialize: function() {
            this.hidden = false;
        },

        pivot: function() {
            var me = this;
            if (!me._view) {
                me._view = helpers.clone(me._model);
            }
            me._start = helpers.clone(me._view);
            return me;
        },

        transition: function(ease) {
            var me = this;

            if (!me._view) {
                me._view = helpers.clone(me._model);
            }

            // No animation -> No Transition
            if (ease === 1) {
                me._view = me._model;
                me._start = null;
                return me;
            }

            if (!me._start) {
                me.pivot();
            }

            helpers.each(me._model, function(value, key) {

                if (key[0] === '_') {
                    // Only non-underscored properties
                // Init if doesn't exist
                } else if (!me._view.hasOwnProperty(key)) {
                    if (typeof value === 'number' && !isNaN(me._view[key])) {
                        me._view[key] = value * ease;
                    } else {
                        me._view[key] = value;
                    }
                // No unnecessary computations
                } else if (value === me._view[key]) {
                    // It's the same! Woohoo!
                // Color transitions if possible
                } else if (typeof value === 'string') {
                    try {
                        var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
                        me._view[key] = color.rgbString();
                    } catch (err) {
                        me._view[key] = value;
                    }
                // Number transitions
                } else if (typeof value === 'number') {
                    var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
                    me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
                // Everything else
                } else {
                    me._view[key] = value;
                }
            }, me);

            return me;
        },

        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            };
        },

        hasValue: function() {
            return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
        }
    });

    Chart.Element.extend = helpers.inherits;

};

},{}],26:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(2);

module.exports = function(Chart) {
    // Global Chart helpers object for utility methods and classes
    var helpers = Chart.helpers = {};

    // -- Basic js utility methods
    helpers.each = function(loopable, callback, self, reverse) {
        // Check to see if null or undefined firstly.
        var i, len;
        if (helpers.isArray(loopable)) {
            len = loopable.length;
            if (reverse) {
                for (i = len - 1; i >= 0; i--) {
                    callback.call(self, loopable[i], i);
                }
            } else {
                for (i = 0; i < len; i++) {
                    callback.call(self, loopable[i], i);
                }
            }
        } else if (typeof loopable === 'object') {
            var keys = Object.keys(loopable);
            len = keys.length;
            for (i = 0; i < len; i++) {
                callback.call(self, loopable[keys[i]], keys[i]);
            }
        }
    };
    helpers.clone = function(obj) {
        var objClone = {};
        helpers.each(obj, function(value, key) {
            if (helpers.isArray(value)) {
                objClone[key] = value.slice(0);
            } else if (typeof value === 'object' && value !== null) {
                objClone[key] = helpers.clone(value);
            } else {
                objClone[key] = value;
            }
        });
        return objClone;
    };
    helpers.extend = function(base) {
        var setFn = function(value, key) {
            base[key] = value;
        };
        for (var i = 1, ilen = arguments.length; i < ilen; i++) {
            helpers.each(arguments[i], setFn);
        }
        return base;
    };
    // Need a special merge function to chart configs since they are now grouped
    helpers.configMerge = function(_base) {
        var base = helpers.clone(_base);
        helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
            helpers.each(extension, function(value, key) {
                var baseHasProperty = base.hasOwnProperty(key);
                var baseVal = baseHasProperty ? base[key] : {};

                if (key === 'scales') {
                    // Scale config merging is complex. Add our own function here for that
                    base[key] = helpers.scaleMerge(baseVal, value);
                } else if (key === 'scale') {
                    // Used in polar area & radar charts since there is only one scale
                    base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
                } else if (baseHasProperty
                        && typeof baseVal === 'object'
                        && !helpers.isArray(baseVal)
                        && baseVal !== null
                        && typeof value === 'object'
                        && !helpers.isArray(value)) {
                    // If we are overwriting an object with an object, do a merge of the properties.
                    base[key] = helpers.configMerge(baseVal, value);
                } else {
                    // can just overwrite the value in this case
                    base[key] = value;
                }
            });
        });

        return base;
    };
    helpers.scaleMerge = function(_base, extension) {
        var base = helpers.clone(_base);

        helpers.each(extension, function(value, key) {
            if (key === 'xAxes' || key === 'yAxes') {
                // These properties are arrays of items
                if (base.hasOwnProperty(key)) {
                    helpers.each(value, function(valueObj, index) {
                        var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
                        var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
                        if (index >= base[key].length || !base[key][index].type) {
                            base[key].push(helpers.configMerge(axisDefaults, valueObj));
                        } else if (valueObj.type && valueObj.type !== base[key][index].type) {
                            // Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
                            base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
                        } else {
                            // Type is the same
                            base[key][index] = helpers.configMerge(base[key][index], valueObj);
                        }
                    });
                } else {
                    base[key] = [];
                    helpers.each(value, function(valueObj) {
                        var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
                        base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
                    });
                }
            } else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
                // If we are overwriting an object with an object, do a merge of the properties.
                base[key] = helpers.configMerge(base[key], value);

            } else {
                // can just overwrite the value in this case
                base[key] = value;
            }
        });

        return base;
    };
    helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
        if (value === undefined || value === null) {
            return defaultValue;
        }

        if (helpers.isArray(value)) {
            return index < value.length ? value[index] : defaultValue;
        }

        return value;
    };
    helpers.getValueOrDefault = function(value, defaultValue) {
        return value === undefined ? defaultValue : value;
    };
    helpers.indexOf = Array.prototype.indexOf?
        function(array, item) {
            return array.indexOf(item);
        }:
        function(array, item) {
            for (var i = 0, ilen = array.length; i < ilen; ++i) {
                if (array[i] === item) {
                    return i;
                }
            }
            return -1;
        };
    helpers.where = function(collection, filterCallback) {
        if (helpers.isArray(collection) && Array.prototype.filter) {
            return collection.filter(filterCallback);
        }
        var filtered = [];

        helpers.each(collection, function(item) {
            if (filterCallback(item)) {
                filtered.push(item);
            }
        });

        return filtered;
    };
    helpers.findIndex = Array.prototype.findIndex?
        function(array, callback, scope) {
            return array.findIndex(callback, scope);
        } :
        function(array, callback, scope) {
            scope = scope === undefined? array : scope;
            for (var i = 0, ilen = array.length; i < ilen; ++i) {
                if (callback.call(scope, array[i], i, array)) {
                    return i;
                }
            }
            return -1;
        };
    helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
        // Default to start of the array
        if (startIndex === undefined || startIndex === null) {
            startIndex = -1;
        }
        for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
            var currentItem = arrayToSearch[i];
            if (filterCallback(currentItem)) {
                return currentItem;
            }
        }
    };
    helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
        // Default to end of the array
        if (startIndex === undefined || startIndex === null) {
            startIndex = arrayToSearch.length;
        }
        for (var i = startIndex - 1; i >= 0; i--) {
            var currentItem = arrayToSearch[i];
            if (filterCallback(currentItem)) {
                return currentItem;
            }
        }
    };
    helpers.inherits = function(extensions) {
        // Basic javascript inheritance based on the model created in Backbone.js
        var me = this;
        var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
            return me.apply(this, arguments);
        };

        var Surrogate = function() {
            this.constructor = ChartElement;
        };
        Surrogate.prototype = me.prototype;
        ChartElement.prototype = new Surrogate();

        ChartElement.extend = helpers.inherits;

        if (extensions) {
            helpers.extend(ChartElement.prototype, extensions);
        }

        ChartElement.__super__ = me.prototype;

        return ChartElement;
    };
    helpers.noop = function() {};
    helpers.uid = (function() {
        var id = 0;
        return function() {
            return id++;
        };
    }());
    // -- Math methods
    helpers.isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    helpers.almostEquals = function(x, y, epsilon) {
        return Math.abs(x - y) < epsilon;
    };
    helpers.max = function(array) {
        return array.reduce(function(max, value) {
            if (!isNaN(value)) {
                return Math.max(max, value);
            }
            return max;
        }, Number.NEGATIVE_INFINITY);
    };
    helpers.min = function(array) {
        return array.reduce(function(min, value) {
            if (!isNaN(value)) {
                return Math.min(min, value);
            }
            return min;
        }, Number.POSITIVE_INFINITY);
    };
    helpers.sign = Math.sign?
        function(x) {
            return Math.sign(x);
        } :
        function(x) {
            x = +x; // convert to a number
            if (x === 0 || isNaN(x)) {
                return x;
            }
            return x > 0 ? 1 : -1;
        };
    helpers.log10 = Math.log10?
        function(x) {
            return Math.log10(x);
        } :
        function(x) {
            return Math.log(x) / Math.LN10;
        };
    helpers.toRadians = function(degrees) {
        return degrees * (Math.PI / 180);
    };
    helpers.toDegrees = function(radians) {
        return radians * (180 / Math.PI);
    };
    // Gets the angle from vertical upright to the point about a centre.
    helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
        var distanceFromXCenter = anglePoint.x - centrePoint.x,
            distanceFromYCenter = anglePoint.y - centrePoint.y,
            radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

        var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

        if (angle < (-0.5 * Math.PI)) {
            angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
        }

        return {
            angle: angle,
            distance: radialDistanceFromCenter
        };
    };
    helpers.distanceBetweenPoints = function(pt1, pt2) {
        return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    };
    helpers.aliasPixel = function(pixelWidth) {
        return (pixelWidth % 2 === 0) ? 0 : 0.5;
    };
    helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
        // Props to Rob Spencer at scaled innovation for his post on splining between points
        // http://scaledinnovation.com/analytics/splines/aboutSplines.html

        // This function must also respect "skipped" points

        var previous = firstPoint.skip ? middlePoint : firstPoint,
            current = middlePoint,
            next = afterPoint.skip ? middlePoint : afterPoint;

        var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
        var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

        var s01 = d01 / (d01 + d12);
        var s12 = d12 / (d01 + d12);

        // If all points are the same, s01 & s02 will be inf
        s01 = isNaN(s01) ? 0 : s01;
        s12 = isNaN(s12) ? 0 : s12;

        var fa = t * s01; // scaling factor for triangle Ta
        var fb = t * s12;

        return {
            previous: {
                x: current.x - fa * (next.x - previous.x),
                y: current.y - fa * (next.y - previous.y)
            },
            next: {
                x: current.x + fb * (next.x - previous.x),
                y: current.y + fb * (next.y - previous.y)
            }
        };
    };
    helpers.EPSILON = Number.EPSILON || 1e-14;
    helpers.splineCurveMonotone = function(points) {
        // This function calculates BÃ©zier control points in a similar way than |splineCurve|,
        // but preserves monotonicity of the provided data and ensures no local extremums are added
        // between the dataset discrete points due to the interpolation.
        // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

        var pointsWithTangents = (points || []).map(function(point) {
            return {
                model: point._model,
                deltaK: 0,
                mK: 0
            };
        });

        // Calculate slopes (deltaK) and initialize tangents (mK)
        var pointsLen = pointsWithTangents.length;
        var i, pointBefore, pointCurrent, pointAfter;
        for (i = 0; i < pointsLen; ++i) {
            pointCurrent = pointsWithTangents[i];
            if (pointCurrent.model.skip) {
                continue;
            }

            pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
            pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
            if (pointAfter && !pointAfter.model.skip) {
                pointCurrent.deltaK = (pointAfter.model.y - pointCurrent.model.y) / (pointAfter.model.x - pointCurrent.model.x);
            }

            if (!pointBefore || pointBefore.model.skip) {
                pointCurrent.mK = pointCurrent.deltaK;
            } else if (!pointAfter || pointAfter.model.skip) {
                pointCurrent.mK = pointBefore.deltaK;
            } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
                pointCurrent.mK = 0;
            } else {
                pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
            }
        }

        // Adjust tangents to ensure monotonic properties
        var alphaK, betaK, tauK, squaredMagnitude;
        for (i = 0; i < pointsLen - 1; ++i) {
            pointCurrent = pointsWithTangents[i];
            pointAfter = pointsWithTangents[i + 1];
            if (pointCurrent.model.skip || pointAfter.model.skip) {
                continue;
            }

            if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
                pointCurrent.mK = pointAfter.mK = 0;
                continue;
            }

            alphaK = pointCurrent.mK / pointCurrent.deltaK;
            betaK = pointAfter.mK / pointCurrent.deltaK;
            squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
            if (squaredMagnitude <= 9) {
                continue;
            }

            tauK = 3 / Math.sqrt(squaredMagnitude);
            pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
            pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
        }

        // Compute control points
        var deltaX;
        for (i = 0; i < pointsLen; ++i) {
            pointCurrent = pointsWithTangents[i];
            if (pointCurrent.model.skip) {
                continue;
            }

            pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
            pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
            if (pointBefore && !pointBefore.model.skip) {
                deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
                pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
                pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
            }
            if (pointAfter && !pointAfter.model.skip) {
                deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
                pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
                pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
            }
        }
    };
    helpers.nextItem = function(collection, index, loop) {
        if (loop) {
            return index >= collection.length - 1 ? collection[0] : collection[index + 1];
        }
        return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
    };
    helpers.previousItem = function(collection, index, loop) {
        if (loop) {
            return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
        }
        return index <= 0 ? collection[0] : collection[index - 1];
    };
    // Implementation of the nice number algorithm used in determining where axis labels will go
    helpers.niceNum = function(range, round) {
        var exponent = Math.floor(helpers.log10(range));
        var fraction = range / Math.pow(10, exponent);
        var niceFraction;

        if (round) {
            if (fraction < 1.5) {
                niceFraction = 1;
            } else if (fraction < 3) {
                niceFraction = 2;
            } else if (fraction < 7) {
                niceFraction = 5;
            } else {
                niceFraction = 10;
            }
        } else if (fraction <= 1.0) {
            niceFraction = 1;
        } else if (fraction <= 2) {
            niceFraction = 2;
        } else if (fraction <= 5) {
            niceFraction = 5;
        } else {
            niceFraction = 10;
        }

        return niceFraction * Math.pow(10, exponent);
    };
    // Easing functions adapted from Robert Penner's easing equations
    // http://www.robertpenner.com/easing/
    var easingEffects = helpers.easingEffects = {
        linear: function(t) {
            return t;
        },
        easeInQuad: function(t) {
            return t * t;
        },
        easeOutQuad: function(t) {
            return -1 * t * (t - 2);
        },
        easeInOutQuad: function(t) {
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * t * t;
            }
            return -1 / 2 * ((--t) * (t - 2) - 1);
        },
        easeInCubic: function(t) {
            return t * t * t;
        },
        easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
        },
        easeInOutCubic: function(t) {
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * t * t * t;
            }
            return 1 / 2 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function(t) {
            return t * t * t * t;
        },
        easeOutQuart: function(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
        },
        easeInOutQuart: function(t) {
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * t * t * t * t;
            }
            return -1 / 2 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t;
        },
        easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
        },
        easeInOutQuint: function(t) {
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * t * t * t * t * t;
            }
            return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
        },
        easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
        },
        easeInOutSine: function(t) {
            return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
        },
        easeInExpo: function(t) {
            return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
        },
        easeOutExpo: function(t) {
            return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
        },
        easeInOutExpo: function(t) {
            if (t === 0) {
                return 0;
            }
            if (t === 1) {
                return 1;
            }
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * Math.pow(2, 10 * (t - 1));
            }
            return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
        },
        easeInCirc: function(t) {
            if (t >= 1) {
                return t;
            }
            return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
        },
        easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
        },
        easeInOutCirc: function(t) {
            if ((t /= 1 / 2) < 1) {
                return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
            }
            return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if ((t /= 1) === 1) {
                return 1;
            }
            if (!p) {
                p = 1 * 0.3;
            }
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
        },
        easeOutElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if ((t /= 1) === 1) {
                return 1;
            }
            if (!p) {
                p = 1 * 0.3;
            }
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
        },
        easeInOutElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if ((t /= 1 / 2) === 2) {
                return 1;
            }
            if (!p) {
                p = 1 * (0.3 * 1.5);
            }
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            if (t < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
        },
        easeInBack: function(t) {
            var s = 1.70158;
            return 1 * (t /= 1) * t * ((s + 1) * t - s);
        },
        easeOutBack: function(t) {
            var s = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
        },
        easeInOutBack: function(t) {
            var s = 1.70158;
            if ((t /= 1 / 2) < 1) {
                return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
            }
            return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
        },
        easeInBounce: function(t) {
            return 1 - easingEffects.easeOutBounce(1 - t);
        },
        easeOutBounce: function(t) {
            if ((t /= 1) < (1 / 2.75)) {
                return 1 * (7.5625 * t * t);
            } else if (t < (2 / 2.75)) {
                return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
            } else if (t < (2.5 / 2.75)) {
                return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
            }
            return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
        },
        easeInOutBounce: function(t) {
            if (t < 1 / 2) {
                return easingEffects.easeInBounce(t * 2) * 0.5;
            }
            return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
        }
    };
    // Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    helpers.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    }());
    helpers.cancelAnimFrame = (function() {
        return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function(callback) {
                return window.clearTimeout(callback, 1000 / 60);
            };
    }());
    // -- DOM methods
    helpers.getRelativePosition = function(evt, chart) {
        var mouseX, mouseY;
        var e = evt.originalEvent || evt,
            canvas = evt.currentTarget || evt.srcElement,
            boundingRect = canvas.getBoundingClientRect();

        var touches = e.touches;
        if (touches && touches.length > 0) {
            mouseX = touches[0].clientX;
            mouseY = touches[0].clientY;

        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        // Scale mouse coordinates into canvas coordinates
        // by following the pattern laid out by 'jerryj' in the comments of
        // http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
        var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
        var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
        var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
        var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
        var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
        var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

        // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
        // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
        mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
        mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

        return {
            x: mouseX,
            y: mouseY
        };

    };
    helpers.addEvent = function(node, eventType, method) {
        if (node.addEventListener) {
            node.addEventListener(eventType, method);
        } else if (node.attachEvent) {
            node.attachEvent('on' + eventType, method);
        } else {
            node['on' + eventType] = method;
        }
    };
    helpers.removeEvent = function(node, eventType, handler) {
        if (node.removeEventListener) {
            node.removeEventListener(eventType, handler, false);
        } else if (node.detachEvent) {
            node.detachEvent('on' + eventType, handler);
        } else {
            node['on' + eventType] = helpers.noop;
        }
    };
    helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
        // Create the events object if it's not already present
        var events = chartInstance.events = chartInstance.events || {};

        helpers.each(arrayOfEvents, function(eventName) {
            events[eventName] = function() {
                handler.apply(chartInstance, arguments);
            };
            helpers.addEvent(chartInstance.chart.canvas, eventName, events[eventName]);
        });
    };
    helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
        var canvas = chartInstance.chart.canvas;
        helpers.each(arrayOfEvents, function(handler, eventName) {
            helpers.removeEvent(canvas, eventName, handler);
        });
    };

    // Private helper function to convert max-width/max-height values that may be percentages into a number
    function parseMaxStyle(styleValue, node, parentProperty) {
        var valueInPixels;
        if (typeof(styleValue) === 'string') {
            valueInPixels = parseInt(styleValue, 10);

            if (styleValue.indexOf('%') !== -1) {
                // percentage * size in dimension
                valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
            }
        } else {
            valueInPixels = styleValue;
        }

        return valueInPixels;
    }

    /**
     * Returns if the given value contains an effective constraint.
     * @private
     */
    function isConstrainedValue(value) {
        return value !== undefined && value !== null && value !== 'none';
    }

    // Private helper to get a constraint dimension
    // @param domNode : the node to check the constraint on
    // @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
    // @param percentageProperty : property of parent to use when calculating width as a percentage
    // @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
    function getConstraintDimension(domNode, maxStyle, percentageProperty) {
        var view = document.defaultView;
        var parentNode = domNode.parentNode;
        var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
        var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
        var hasCNode = isConstrainedValue(constrainedNode);
        var hasCContainer = isConstrainedValue(constrainedContainer);
        var infinity = Number.POSITIVE_INFINITY;

        if (hasCNode || hasCContainer) {
            return Math.min(
                hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
                hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
        }

        return 'none';
    }
    // returns Number or undefined if no constraint
    helpers.getConstraintWidth = function(domNode) {
        return getConstraintDimension(domNode, 'max-width', 'clientWidth');
    };
    // returns Number or undefined if no constraint
    helpers.getConstraintHeight = function(domNode) {
        return getConstraintDimension(domNode, 'max-height', 'clientHeight');
    };
    helpers.getMaximumWidth = function(domNode) {
        var container = domNode.parentNode;
        var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
        var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
        var w = container.clientWidth - paddingLeft - paddingRight;
        var cw = helpers.getConstraintWidth(domNode);
        return isNaN(cw)? w : Math.min(w, cw);
    };
    helpers.getMaximumHeight = function(domNode) {
        var container = domNode.parentNode;
        var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
        var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
        var h = container.clientHeight - paddingTop - paddingBottom;
        var ch = helpers.getConstraintHeight(domNode);
        return isNaN(ch)? h : Math.min(h, ch);
    };
    helpers.getStyle = function(el, property) {
        return el.currentStyle ?
            el.currentStyle[property] :
            document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
    };
    helpers.retinaScale = function(chart) {
        var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
        if (pixelRatio === 1) {
            return;
        }

        var canvas = chart.canvas;
        var height = chart.height;
        var width = chart.width;

        canvas.height = height * pixelRatio;
        canvas.width = width * pixelRatio;
        chart.ctx.scale(pixelRatio, pixelRatio);

        // If no style has been set on the canvas, the render size is used as display size,
        // making the chart visually bigger, so let's enforce it to the "correct" values.
        // See https://github.com/chartjs/Chart.js/issues/3575
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
    };
    // -- Canvas methods
    helpers.clear = function(chart) {
        chart.ctx.clearRect(0, 0, chart.width, chart.height);
    };
    helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
        return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
    };
    helpers.longestText = function(ctx, font, arrayOfThings, cache) {
        cache = cache || {};
        var data = cache.data = cache.data || {};
        var gc = cache.garbageCollect = cache.garbageCollect || [];

        if (cache.font !== font) {
            data = cache.data = {};
            gc = cache.garbageCollect = [];
            cache.font = font;
        }

        ctx.font = font;
        var longest = 0;
        helpers.each(arrayOfThings, function(thing) {
            // Undefined strings and arrays should not be measured
            if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
                longest = helpers.measureText(ctx, data, gc, longest, thing);
            } else if (helpers.isArray(thing)) {
                // if it is an array lets measure each element
                // to do maybe simplify this function a bit so we can do this more recursively?
                helpers.each(thing, function(nestedThing) {
                    // Undefined strings and arrays should not be measured
                    if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
                        longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
                    }
                });
            }
        });

        var gcLen = gc.length / 2;
        if (gcLen > arrayOfThings.length) {
            for (var i = 0; i < gcLen; i++) {
                delete data[gc[i]];
            }
            gc.splice(0, gcLen);
        }
        return longest;
    };
    helpers.measureText = function(ctx, data, gc, longest, string) {
        var textWidth = data[string];
        if (!textWidth) {
            textWidth = data[string] = ctx.measureText(string).width;
            gc.push(string);
        }
        if (textWidth > longest) {
            longest = textWidth;
        }
        return longest;
    };
    helpers.numberOfLabelLines = function(arrayOfThings) {
        var numberOfLines = 1;
        helpers.each(arrayOfThings, function(thing) {
            if (helpers.isArray(thing)) {
                if (thing.length > numberOfLines) {
                    numberOfLines = thing.length;
                }
            }
        });
        return numberOfLines;
    };
    helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    };
    helpers.color = function(c) {
        if (!color) {
            console.error('Color.js not found!');
            return c;
        }

        /* global CanvasGradient */
        if (c instanceof CanvasGradient) {
            return color(Chart.defaults.global.defaultColor);
        }

        return color(c);
    };
    helpers.addResizeListener = function(node, callback) {
        var iframe = document.createElement('iframe');
        iframe.className = 'chartjs-hidden-iframe';
        iframe.style.cssText =
            'display:block;'+
            'overflow:hidden;'+
            'border:0;'+
            'margin:0;'+
            'top:0;'+
            'left:0;'+
            'bottom:0;'+
            'right:0;'+
            'height:100%;'+
            'width:100%;'+
            'position:absolute;'+
            'pointer-events:none;'+
            'z-index:-1;';

        // Prevent the iframe to gain focus on tab.
        // https://github.com/chartjs/Chart.js/issues/3090
        iframe.tabIndex = -1;

        // Let's keep track of this added iframe and thus avoid DOM query when removing it.
        var stub = node._chartjs = {
            resizer: iframe,
            ticking: false
        };

        // Throttle the callback notification until the next animation frame.
        var notify = function() {
            if (!stub.ticking) {
                stub.ticking = true;
                helpers.requestAnimFrame.call(window, function() {
                    if (stub.resizer) {
                        stub.ticking = false;
                        return callback();
                    }
                });
            }
        };

        // If the iframe is re-attached to the DOM, the resize listener is removed because the
        // content is reloaded, so make sure to install the handler after the iframe is loaded.
        // https://github.com/chartjs/Chart.js/issues/3521
        helpers.addEvent(iframe, 'load', function() {
            helpers.addEvent(iframe.contentWindow || iframe, 'resize', notify);

            // The iframe size might have changed while loading, which can also
            // happen if the size has been changed while detached from the DOM.
            notify();
        });

        node.insertBefore(iframe, node.firstChild);
    };
    helpers.removeResizeListener = function(node) {
        if (!node || !node._chartjs) {
            return;
        }

        var iframe = node._chartjs.resizer;
        if (iframe) {
            iframe.parentNode.removeChild(iframe);
            node._chartjs.resizer = null;
        }

        delete node._chartjs;
    };
    helpers.isArray = Array.isArray?
        function(obj) {
            return Array.isArray(obj);
        } :
        function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    // ! @see http://stackoverflow.com/a/14853974
    helpers.arrayEquals = function(a0, a1) {
        var i, ilen, v0, v1;

        if (!a0 || !a1 || a0.length !== a1.length) {
            return false;
        }

        for (i = 0, ilen=a0.length; i < ilen; ++i) {
            v0 = a0[i];
            v1 = a1[i];

            if (v0 instanceof Array && v1 instanceof Array) {
                if (!helpers.arrayEquals(v0, v1)) {
                    return false;
                }
            } else if (v0 !== v1) {
                // NOTE: two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }

        return true;
    };
    helpers.callCallback = function(fn, args, _tArg) {
        if (fn && typeof fn.call === 'function') {
            fn.apply(_tArg, args);
        }
    };
    helpers.getHoverColor = function(colorValue) {
        /* global CanvasPattern */
        return (colorValue instanceof CanvasPattern) ?
            colorValue :
            helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
    };
};

},{"2":2}],27:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
    var helpers = Chart.helpers;

    /**
     * Helper function to traverse all of the visible elements in the chart
     * @param chart {chart} the chart
     * @param handler {Function} the callback to execute for each visible item
     */
    function parseVisibleItems(chart, handler) {
        var datasets = chart.data.datasets;
        var meta, i, j, ilen, jlen;

        for (i = 0, ilen = datasets.length; i < ilen; ++i) {
            if (!chart.isDatasetVisible(i)) {
                continue;
            }

            meta = chart.getDatasetMeta(i);
            for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
                var element = meta.data[j];
                if (!element._view.skip) {
                    handler(element);
                }
            }
        }
    }

    /**
     * Helper function to get the items that intersect the event position
     * @param items {ChartElement[]} elements to filter
     * @param position {Point} the point to be nearest to
     * @return {ChartElement[]} the nearest items
     */
    function getIntersectItems(chart, position) {
        var elements = [];

        parseVisibleItems(chart, function(element) {
            if (element.inRange(position.x, position.y)) {
                elements.push(element);
            }
        });

        return elements;
    }

    /**
     * Helper function to get the items nearest to the event position considering all visible items in teh chart
     * @param chart {Chart} the chart to look at elements from
     * @param position {Point} the point to be nearest to
     * @param intersect {Boolean} if true, only consider items that intersect the position
     * @param distanceMetric {Function} Optional function to provide the distance between
     * @return {ChartElement[]} the nearest items
     */
    function getNearestItems(chart, position, intersect, distanceMetric) {
        var minDistance = Number.POSITIVE_INFINITY;
        var nearestItems = [];

        if (!distanceMetric) {
            distanceMetric = helpers.distanceBetweenPoints;
        }

        parseVisibleItems(chart, function(element) {
            if (intersect && !element.inRange(position.x, position.y)) {
                return;
            }

            var center = element.getCenterPoint();
            var distance = distanceMetric(position, center);

            if (distance < minDistance) {
                nearestItems = [element];
                minDistance = distance;
            } else if (distance === minDistance) {
                // Can have multiple items at the same distance in which case we sort by size
                nearestItems.push(element);
            }
        });

        return nearestItems;
    }

    function indexMode(chart, e, options) {
        var position = helpers.getRelativePosition(e, chart.chart);
        var distanceMetric = function(pt1, pt2) {
            return Math.abs(pt1.x - pt2.x);
        };
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
        var elements = [];

        if (!items.length) {
            return [];
        }

        chart.data.datasets.forEach(function(dataset, datasetIndex) {
            if (chart.isDatasetVisible(datasetIndex)) {
                var meta = chart.getDatasetMeta(datasetIndex),
                    element = meta.data[items[0]._index];

                // don't count items that are skipped (null data)
                if (element && !element._view.skip) {
                    elements.push(element);
                }
            }
        });

        return elements;
    }

    /**
     * @interface IInteractionOptions
     */
    /**
     * If true, only consider items that intersect the point
     * @name IInterfaceOptions#boolean
     * @type Boolean
     */

    /**
     * @namespace Chart.Interaction
     * Contains interaction related functions
     */
    Chart.Interaction = {
        // Helper function for different modes
        modes: {
            single: function(chart, e) {
                var position = helpers.getRelativePosition(e, chart.chart);
                var elements = [];

                parseVisibleItems(chart, function(element) {
                    if (element.inRange(position.x, position.y)) {
                        elements.push(element);
                        return elements;
                    }
                });

                return elements.slice(0, 1);
            },

            /**
             * @function Chart.Interaction.modes.label
             * @deprecated since version 2.4.0
             */
            label: indexMode,

            /**
             * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
             * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
             * @function Chart.Interaction.modes.index
             * @since v2.4.0
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @param options {IInteractionOptions} options to use during interaction
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            index: indexMode,

            /**
             * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
             * If the options.intersect is false, we find the nearest item and return the items in that dataset
             * @function Chart.Interaction.modes.dataset
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @param options {IInteractionOptions} options to use during interaction
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            dataset: function(chart, e, options) {
                var position = helpers.getRelativePosition(e, chart.chart);
                var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);

                if (items.length > 0) {
                    items = chart.getDatasetMeta(items[0]._datasetIndex).data;
                }

                return items;
            },

            /**
             * @function Chart.Interaction.modes.x-axis
             * @deprecated since version 2.4.0. Use index mode and intersect == true
             */
            'x-axis': function(chart, e) {
                return indexMode(chart, e, true);
            },

            /**
             * Point mode returns all elements that hit test based on the event position
             * of the event
             * @function Chart.Interaction.modes.intersect
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            point: function(chart, e) {
                var position = helpers.getRelativePosition(e, chart.chart);
                return getIntersectItems(chart, position);
            },

            /**
             * nearest mode returns the element closest to the point
             * @function Chart.Interaction.modes.intersect
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @param options {IInteractionOptions} options to use
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            nearest: function(chart, e, options) {
                var position = helpers.getRelativePosition(e, chart.chart);
                var nearestItems = getNearestItems(chart, position, options.intersect);

                // We have multiple items at the same distance from the event. Now sort by smallest
                if (nearestItems.length > 1) {
                    nearestItems.sort(function(a, b) {
                        var sizeA = a.getArea();
                        var sizeB = b.getArea();
                        var ret = sizeA - sizeB;

                        if (ret === 0) {
                            // if equal sort by dataset index
                            ret = a._datasetIndex - b._datasetIndex;
                        }

                        return ret;
                    });
                }

                // Return only 1 item
                return nearestItems.slice(0, 1);
            },

            /**
             * x mode returns the elements that hit-test at the current x coordinate
             * @function Chart.Interaction.modes.x
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @param options {IInteractionOptions} options to use
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            x: function(chart, e, options) {
                var position = helpers.getRelativePosition(e, chart.chart);
                var items = [];
                var intersectsItem = false;

                parseVisibleItems(chart, function(element) {
                    if (element.inXRange(position.x)) {
                        items.push(element);
                    }

                    if (element.inRange(position.x, position.y)) {
                        intersectsItem = true;
                    }
                });

                // If we want to trigger on an intersect and we don't have any items
                // that intersect the position, return nothing
                if (options.intersect && !intersectsItem) {
                    items = [];
                }
                return items;
            },

            /**
             * y mode returns the elements that hit-test at the current y coordinate
             * @function Chart.Interaction.modes.y
             * @param chart {chart} the chart we are returning items from
             * @param e {Event} the event we are find things at
             * @param options {IInteractionOptions} options to use
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
             */
            y: function(chart, e, options) {
                var position = helpers.getRelativePosition(e, chart.chart);
                var items = [];
                var intersectsItem = false;

                parseVisibleItems(chart, function(element) {
                    if (element.inYRange(position.y)) {
                        items.push(element);
                    }

                    if (element.inRange(position.x, position.y)) {
                        intersectsItem = true;
                    }
                });

                // If we want to trigger on an intersect and we don't have any items
                // that intersect the position, return nothing
                if (options.intersect && !intersectsItem) {
                    items = [];
                }
                return items;
            }
        }
    };
};

},{}],28:[function(require,module,exports){
'use strict';

module.exports = function() {

    // Occupy the global variable of Chart, and create a simple base class
    var Chart = function(item, config) {
        this.controller = new Chart.Controller(item, config, this);
        return this.controller;
    };

    // Globally expose the defaults to allow for user updating/changing
    Chart.defaults = {
        global: {
            responsive: true,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: true,
            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
            hover: {
                onHover: null,
                mode: 'nearest',
                intersect: true,
                animationDuration: 400
            },
            onClick: null,
            defaultColor: 'rgba(0,0,0,0.1)',
            defaultFontColor: '#666',
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: 'normal',
            showLines: true,

            // Element defaults defined in element extensions
            elements: {},

            // Legend callback string
            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');

                return text.join('');
            }
        }
    };

    Chart.Chart = Chart;

    return Chart;
};

},{}],29:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    // The layout service is very self explanatory.  It's responsible for the layout within a chart.
    // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
    // It is this service's responsibility of carrying out that layout.
    Chart.layoutService = {
        defaults: {},

        // Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
        addBox: function(chartInstance, box) {
            if (!chartInstance.boxes) {
                chartInstance.boxes = [];
            }
            chartInstance.boxes.push(box);
        },

        removeBox: function(chartInstance, box) {
            if (!chartInstance.boxes) {
                return;
            }
            chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
        },

        // The most important function
        update: function(chartInstance, width, height) {

            if (!chartInstance) {
                return;
            }

            var layoutOptions = chartInstance.options.layout;
            var padding = layoutOptions ? layoutOptions.padding : null;

            var leftPadding = 0;
            var rightPadding = 0;
            var topPadding = 0;
            var bottomPadding = 0;

            if (!isNaN(padding)) {
                // options.layout.padding is a number. assign to all
                leftPadding = padding;
                rightPadding = padding;
                topPadding = padding;
                bottomPadding = padding;
            } else {
                leftPadding = padding.left || 0;
                rightPadding = padding.right || 0;
                topPadding = padding.top || 0;
                bottomPadding = padding.bottom || 0;
            }

            var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
                return box.options.position === 'left';
            });
            var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
                return box.options.position === 'right';
            });
            var topBoxes = helpers.where(chartInstance.boxes, function(box) {
                return box.options.position === 'top';
            });
            var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
                return box.options.position === 'bottom';
            });

            // Boxes that overlay the chartarea such as the radialLinear scale
            var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
                return box.options.position === 'chartArea';
            });

            // Ensure that full width boxes are at the very top / bottom
            topBoxes.sort(function(a, b) {
                return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
            });
            bottomBoxes.sort(function(a, b) {
                return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
            });

            // Essentially we now have any number of boxes on each of the 4 sides.
            // Our canvas looks like the following.
            // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
            // B1 is the bottom axis
            // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
            // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
            // an error will be thrown.
            //
            // |----------------------------------------------------|
            // |                  T1 (Full Width)                   |
            // |----------------------------------------------------|
            // |    |    |                 T2                  |    |
            // |    |----|-------------------------------------|----|
            // |    |    | C1 |                           | C2 |    |
            // |    |    |----|                           |----|    |
            // |    |    |                                     |    |
            // | L1 | L2 |           ChartArea (C0)            | R1 |
            // |    |    |                                     |    |
            // |    |    |----|                           |----|    |
            // |    |    | C3 |                           | C4 |    |
            // |    |----|-------------------------------------|----|
            // |    |    |                 B1                  |    |
            // |----------------------------------------------------|
            // |                  B2 (Full Width)                   |
            // |----------------------------------------------------|
            //
            // What we do to find the best sizing, we do the following
            // 1. Determine the minimum size of the chart area.
            // 2. Split the remaining width equally between each vertical axis
            // 3. Split the remaining height equally between each horizontal axis
            // 4. Give each layout the maximum size it can be. The layout will return it's minimum size
            // 5. Adjust the sizes of each axis based on it's minimum reported size.
            // 6. Refit each axis
            // 7. Position each axis in the final location
            // 8. Tell the chart the final location of the chart area
            // 9. Tell any axes that overlay the chart area the positions of the chart area

            // Step 1
            var chartWidth = width - leftPadding - rightPadding;
            var chartHeight = height - topPadding - bottomPadding;
            var chartAreaWidth = chartWidth / 2; // min 50%
            var chartAreaHeight = chartHeight / 2; // min 50%

            // Step 2
            var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

            // Step 3
            var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

            // Step 4
            var maxChartAreaWidth = chartWidth;
            var maxChartAreaHeight = chartHeight;
            var minBoxSizes = [];

            function getMinimumBoxSize(box) {
                var minSize;
                var isHorizontal = box.isHorizontal();

                if (isHorizontal) {
                    minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
                    maxChartAreaHeight -= minSize.height;
                } else {
                    minSize = box.update(verticalBoxWidth, chartAreaHeight);
                    maxChartAreaWidth -= minSize.width;
                }

                minBoxSizes.push({
                    horizontal: isHorizontal,
                    minSize: minSize,
                    box: box
                });
            }

            helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

            // At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
            // be if the axes are drawn at their minimum sizes.

            // Steps 5 & 6
            var totalLeftBoxesWidth = leftPadding;
            var totalRightBoxesWidth = rightPadding;
            var totalTopBoxesHeight = topPadding;
            var totalBottomBoxesHeight = bottomPadding;

            // Function to fit a box
            function fitBox(box) {
                var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
                    return minBox.box === box;
                });

                if (minBoxSize) {
                    if (box.isHorizontal()) {
                        var scaleMargin = {
                            left: totalLeftBoxesWidth,
                            right: totalRightBoxesWidth,
                            top: 0,
                            bottom: 0
                        };

                        // Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
                        // on the margin. Sometimes they need to increase in size slightly
                        box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
                    } else {
                        box.update(minBoxSize.minSize.width, maxChartAreaHeight);
                    }
                }
            }

            // Update, and calculate the left and right margins for the horizontal boxes
            helpers.each(leftBoxes.concat(rightBoxes), fitBox);

            helpers.each(leftBoxes, function(box) {
                totalLeftBoxesWidth += box.width;
            });

            helpers.each(rightBoxes, function(box) {
                totalRightBoxesWidth += box.width;
            });

            // Set the Left and Right margins for the horizontal boxes
            helpers.each(topBoxes.concat(bottomBoxes), fitBox);

            // Figure out how much margin is on the top and bottom of the vertical boxes
            helpers.each(topBoxes, function(box) {
                totalTopBoxesHeight += box.height;
            });

            helpers.each(bottomBoxes, function(box) {
                totalBottomBoxesHeight += box.height;
            });

            function finalFitVerticalBox(box) {
                var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
                    return minSize.box === box;
                });

                var scaleMargin = {
                    left: 0,
                    right: 0,
                    top: totalTopBoxesHeight,
                    bottom: totalBottomBoxesHeight
                };

                if (minBoxSize) {
                    box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
                }
            }

            // Let the left layout know the final margin
            helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

            // Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
            totalLeftBoxesWidth = leftPadding;
            totalRightBoxesWidth = rightPadding;
            totalTopBoxesHeight = topPadding;
            totalBottomBoxesHeight = bottomPadding;

            helpers.each(leftBoxes, function(box) {
                totalLeftBoxesWidth += box.width;
            });

            helpers.each(rightBoxes, function(box) {
                totalRightBoxesWidth += box.width;
            });

            helpers.each(topBoxes, function(box) {
                totalTopBoxesHeight += box.height;
            });
            helpers.each(bottomBoxes, function(box) {
                totalBottomBoxesHeight += box.height;
            });

            // Figure out if our chart area changed. This would occur if the dataset layout label rotation
            // changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
            // without calling `fit` again
            var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
            var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

            if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
                helpers.each(leftBoxes, function(box) {
                    box.height = newMaxChartAreaHeight;
                });

                helpers.each(rightBoxes, function(box) {
                    box.height = newMaxChartAreaHeight;
                });

                helpers.each(topBoxes, function(box) {
                    if (!box.options.fullWidth) {
                        box.width = newMaxChartAreaWidth;
                    }
                });

                helpers.each(bottomBoxes, function(box) {
                    if (!box.options.fullWidth) {
                        box.width = newMaxChartAreaWidth;
                    }
                });

                maxChartAreaHeight = newMaxChartAreaHeight;
                maxChartAreaWidth = newMaxChartAreaWidth;
            }

            // Step 7 - Position the boxes
            var left = leftPadding;
            var top = topPadding;

            function placeBox(box) {
                if (box.isHorizontal()) {
                    box.left = box.options.fullWidth ? leftPadding : totalLeftBoxesWidth;
                    box.right = box.options.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
                    box.top = top;
                    box.bottom = top + box.height;

                    // Move to next point
                    top = box.bottom;

                } else {

                    box.left = left;
                    box.right = left + box.width;
                    box.top = totalTopBoxesHeight;
                    box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

                    // Move to next point
                    left = box.right;
                }
            }

            helpers.each(leftBoxes.concat(topBoxes), placeBox);

            // Account for chart width and height
            left += maxChartAreaWidth;
            top += maxChartAreaHeight;

            helpers.each(rightBoxes, placeBox);
            helpers.each(bottomBoxes, placeBox);

            // Step 8
            chartInstance.chartArea = {
                left: totalLeftBoxesWidth,
                top: totalTopBoxesHeight,
                right: totalLeftBoxesWidth + maxChartAreaWidth,
                bottom: totalTopBoxesHeight + maxChartAreaHeight
            };

            // Step 9
            helpers.each(chartAreaBoxes, function(box) {
                box.left = chartInstance.chartArea.left;
                box.top = chartInstance.chartArea.top;
                box.right = chartInstance.chartArea.right;
                box.bottom = chartInstance.chartArea.bottom;

                box.update(maxChartAreaWidth, maxChartAreaHeight);
            });
        }
    };
};

},{}],30:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;
    var noop = helpers.noop;

    Chart.defaults.global.legend = {

        display: true,
        position: 'top',
        fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
        reverse: false,

        // a callback that will handle
        onClick: function(e, legendItem) {
            var index = legendItem.datasetIndex;
            var ci = this.chart;
            var meta = ci.getDatasetMeta(index);

            // See controller.isDatasetVisible comment
            meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

            // We hid a dataset ... rerender the chart
            ci.update();
        },

        onHover: null,

        labels: {
            boxWidth: 40,
            padding: 10,
            // Generates labels shown in the legend
            // Valid properties to return:
            // text : text to display
            // fillStyle : fill of coloured box
            // strokeStyle: stroke of coloured box
            // hidden : if this legend item refers to a hidden item
            // lineCap : cap style for line
            // lineDash
            // lineDashOffset :
            // lineJoin :
            // lineWidth :
            generateLabels: function(chart) {
                var data = chart.data;
                return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
                    return {
                        text: dataset.label,
                        fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
                        hidden: !chart.isDatasetVisible(i),
                        lineCap: dataset.borderCapStyle,
                        lineDash: dataset.borderDash,
                        lineDashOffset: dataset.borderDashOffset,
                        lineJoin: dataset.borderJoinStyle,
                        lineWidth: dataset.borderWidth,
                        strokeStyle: dataset.borderColor,
                        pointStyle: dataset.pointStyle,

                        // Below is extra data used for toggling the datasets
                        datasetIndex: i
                    };
                }, this) : [];
            }
        }
    };

    /**
     * Helper function to get the box width based on the usePointStyle option
     * @param labelopts {Object} the label options on the legend
     * @param fontSize {Number} the label font size
     * @return {Number} width of the color box area
     */
    function getBoxWidth(labelOpts, fontSize) {
        return labelOpts.usePointStyle ?
            fontSize * Math.SQRT2 :
            labelOpts.boxWidth;
    }

    Chart.Legend = Chart.Element.extend({

        initialize: function(config) {
            helpers.extend(this, config);

            // Contains hit boxes for each dataset (in dataset order)
            this.legendHitBoxes = [];

            // Are we in doughnut mode which has a different data type
            this.doughnutMode = false;
        },

        // These methods are ordered by lifecycle. Utilities then follow.
        // Any function defined here is inherited by all legend types.
        // Any function can be extended by the legend type

        beforeUpdate: noop,
        update: function(maxWidth, maxHeight, margins) {
            var me = this;

            // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
            me.beforeUpdate();

            // Absorb the master measurements
            me.maxWidth = maxWidth;
            me.maxHeight = maxHeight;
            me.margins = margins;

            // Dimensions
            me.beforeSetDimensions();
            me.setDimensions();
            me.afterSetDimensions();
            // Labels
            me.beforeBuildLabels();
            me.buildLabels();
            me.afterBuildLabels();

            // Fit
            me.beforeFit();
            me.fit();
            me.afterFit();
            //
            me.afterUpdate();

            return me.minSize;
        },
        afterUpdate: noop,

        //

        beforeSetDimensions: noop,
        setDimensions: function() {
            var me = this;
            // Set the unconstrained dimension before label rotation
            if (me.isHorizontal()) {
                // Reset position before calculating rotation
                me.width = me.maxWidth;
                me.left = 0;
                me.right = me.width;
            } else {
                me.height = me.maxHeight;

                // Reset position before calculating rotation
                me.top = 0;
                me.bottom = me.height;
            }

            // Reset padding
            me.paddingLeft = 0;
            me.paddingTop = 0;
            me.paddingRight = 0;
            me.paddingBottom = 0;

            // Reset minSize
            me.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: noop,

        //

        beforeBuildLabels: noop,
        buildLabels: function() {
            var me = this;
            me.legendItems = me.options.labels.generateLabels.call(me, me.chart);
            if (me.options.reverse) {
                me.legendItems.reverse();
            }
        },
        afterBuildLabels: noop,

        //

        beforeFit: noop,
        fit: function() {
            var me = this;
            var opts = me.options;
            var labelOpts = opts.labels;
            var display = opts.display;

            var ctx = me.ctx;

            var globalDefault = Chart.defaults.global,
                itemOrDefault = helpers.getValueOrDefault,
                fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
                fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
                fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
                labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

            // Reset hit boxes
            var hitboxes = me.legendHitBoxes = [];

            var minSize = me.minSize;
            var isHorizontal = me.isHorizontal();

            if (isHorizontal) {
                minSize.width = me.maxWidth; // fill all the width
                minSize.height = display ? 10 : 0;
            } else {
                minSize.width = display ? 10 : 0;
                minSize.height = me.maxHeight; // fill all the height
            }

            // Increase sizes here
            if (display) {
                ctx.font = labelFont;

                if (isHorizontal) {
                    // Labels

                    // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
                    var lineWidths = me.lineWidths = [0];
                    var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';

                    helpers.each(me.legendItems, function(legendItem, i) {
                        var boxWidth = getBoxWidth(labelOpts, fontSize);
                        var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

                        if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
                            totalHeight += fontSize + (labelOpts.padding);
                            lineWidths[lineWidths.length] = me.left;
                        }

                        // Store the hitbox width and height here. Final position will be updated in `draw`
                        hitboxes[i] = {
                            left: 0,
                            top: 0,
                            width: width,
                            height: fontSize
                        };

                        lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
                    });

                    minSize.height += totalHeight;

                } else {
                    var vPadding = labelOpts.padding;
                    var columnWidths = me.columnWidths = [];
                    var totalWidth = labelOpts.padding;
                    var currentColWidth = 0;
                    var currentColHeight = 0;
                    var itemHeight = fontSize + vPadding;

                    helpers.each(me.legendItems, function(legendItem, i) {
                        var boxWidth = getBoxWidth(labelOpts, fontSize);
                        var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

                        // If too tall, go to new column
                        if (currentColHeight + itemHeight > minSize.height) {
                            totalWidth += currentColWidth + labelOpts.padding;
                            columnWidths.push(currentColWidth); // previous column width

                            currentColWidth = 0;
                            currentColHeight = 0;
                        }

                        // Get max width
                        currentColWidth = Math.max(currentColWidth, itemWidth);
                        currentColHeight += itemHeight;

                        // Store the hitbox width and height here. Final position will be updated in `draw`
                        hitboxes[i] = {
                            left: 0,
                            top: 0,
                            width: itemWidth,
                            height: fontSize
                        };
                    });

                    totalWidth += currentColWidth;
                    columnWidths.push(currentColWidth);
                    minSize.width += totalWidth;
                }
            }

            me.width = minSize.width;
            me.height = minSize.height;
        },
        afterFit: noop,

        // Shared Methods
        isHorizontal: function() {
            return this.options.position === 'top' || this.options.position === 'bottom';
        },

        // Actually draw the legend on the canvas
        draw: function() {
            var me = this;
            var opts = me.options;
            var labelOpts = opts.labels;
            var globalDefault = Chart.defaults.global,
                lineDefault = globalDefault.elements.line,
                legendWidth = me.width,
                lineWidths = me.lineWidths;

            if (opts.display) {
                var ctx = me.ctx,
                    cursor,
                    itemOrDefault = helpers.getValueOrDefault,
                    fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
                    fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
                    fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
                    fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
                    labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                // Canvas setup
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = fontColor; // for strikethrough effect
                ctx.fillStyle = fontColor; // render in correct colour
                ctx.font = labelFont;

                var boxWidth = getBoxWidth(labelOpts, fontSize),
                    hitboxes = me.legendHitBoxes;

                // current position
                var drawLegendBox = function(x, y, legendItem) {
                    if (isNaN(boxWidth) || boxWidth <= 0) {
                        return;
                    }

                    // Set the ctx for the box
                    ctx.save();

                    ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
                    ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
                    ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
                    ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
                    ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
                    ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
                    var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

                    if (ctx.setLineDash) {
                        // IE 9 and 10 do not support line dash
                        ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
                    }

                    if (opts.labels && opts.labels.usePointStyle) {
                        // Recalculate x and y for drawPoint() because its expecting
                        // x and y to be center of figure (instead of top left)
                        var radius = fontSize * Math.SQRT2 / 2;
                        var offSet = radius / Math.SQRT2;
                        var centerX = x + offSet;
                        var centerY = y + offSet;

                        // Draw pointStyle as legend symbol
                        Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
                    } else {
                        // Draw box as legend symbol
                        if (!isLineWidthZero) {
                            ctx.strokeRect(x, y, boxWidth, fontSize);
                        }
                        ctx.fillRect(x, y, boxWidth, fontSize);
                    }

                    ctx.restore();
                };
                var fillText = function(x, y, legendItem, textWidth) {
                    ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);

                    if (legendItem.hidden) {
                        // Strikethrough the text if hidden
                        ctx.beginPath();
                        ctx.lineWidth = 2;
                        ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
                        ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
                        ctx.stroke();
                    }
                };

                // Horizontal
                var isHorizontal = me.isHorizontal();
                if (isHorizontal) {
                    cursor = {
                        x: me.left + ((legendWidth - lineWidths[0]) / 2),
                        y: me.top + labelOpts.padding,
                        line: 0
                    };
                } else {
                    cursor = {
                        x: me.left + labelOpts.padding,
                        y: me.top + labelOpts.padding,
                        line: 0
                    };
                }

                var itemHeight = fontSize + labelOpts.padding;
                helpers.each(me.legendItems, function(legendItem, i) {
                    var textWidth = ctx.measureText(legendItem.text).width,
                        width = boxWidth + (fontSize / 2) + textWidth,
                        x = cursor.x,
                        y = cursor.y;

                    if (isHorizontal) {
                        if (x + width >= legendWidth) {
                            y = cursor.y += itemHeight;
                            cursor.line++;
                            x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
                        }
                    } else if (y + itemHeight > me.bottom) {
                        x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
                        y = cursor.y = me.top;
                        cursor.line++;
                    }

                    drawLegendBox(x, y, legendItem);

                    hitboxes[i].left = x;
                    hitboxes[i].top = y;

                    // Fill the actual label
                    fillText(x, y, legendItem, textWidth);

                    if (isHorizontal) {
                        cursor.x += width + (labelOpts.padding);
                    } else {
                        cursor.y += itemHeight;
                    }

                });
            }
        },

        /**
         * Handle an event
         * @private
         * @param e {Event} the event to handle
         * @return {Boolean} true if a change occured
         */
        handleEvent: function(e) {
            var me = this;
            var opts = me.options;
            var type = e.type === 'mouseup' ? 'click' : e.type;
            var changed = false;

            if (type === 'mousemove') {
                if (!opts.onHover) {
                    return;
                }
            } else if (type === 'click') {
                if (!opts.onClick) {
                    return;
                }
            } else {
                return;
            }

            var position = helpers.getRelativePosition(e, me.chart.chart),
                x = position.x,
                y = position.y;

            if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
                // See if we are touching one of the dataset boxes
                var lh = me.legendHitBoxes;
                for (var i = 0; i < lh.length; ++i) {
                    var hitBox = lh[i];

                    if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
                        // Touching an element
                        if (type === 'click') {
                            opts.onClick.call(me, e, me.legendItems[i]);
                            changed = true;
                            break;
                        } else if (type === 'mousemove') {
                            opts.onHover.call(me, e, me.legendItems[i]);
                            changed = true;
                            break;
                        }
                    }
                }
            }

            return changed;
        }
    });

    // Register the legend plugin
    Chart.plugins.register({
        beforeInit: function(chartInstance) {
            var opts = chartInstance.options;
            var legendOpts = opts.legend;

            if (legendOpts) {
                chartInstance.legend = new Chart.Legend({
                    ctx: chartInstance.chart.ctx,
                    options: legendOpts,
                    chart: chartInstance
                });

                Chart.layoutService.addBox(chartInstance, chartInstance.legend);
            }
        }
    });
};

},{}],31:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var noop = Chart.helpers.noop;

    /**
     * The plugin service singleton
     * @namespace Chart.plugins
     * @since 2.1.0
     */
    Chart.plugins = {
        _plugins: [],

        /**
         * Registers the given plugin(s) if not already registered.
         * @param {Array|Object} plugins plugin instance(s).
         */
        register: function(plugins) {
            var p = this._plugins;
            ([]).concat(plugins).forEach(function(plugin) {
                if (p.indexOf(plugin) === -1) {
                    p.push(plugin);
                }
            });
        },

        /**
         * Unregisters the given plugin(s) only if registered.
         * @param {Array|Object} plugins plugin instance(s).
         */
        unregister: function(plugins) {
            var p = this._plugins;
            ([]).concat(plugins).forEach(function(plugin) {
                var idx = p.indexOf(plugin);
                if (idx !== -1) {
                    p.splice(idx, 1);
                }
            });
        },

        /**
         * Remove all registered plugins.
         * @since 2.1.5
         */
        clear: function() {
            this._plugins = [];
        },

        /**
         * Returns the number of registered plugins?
         * @returns {Number}
         * @since 2.1.5
         */
        count: function() {
            return this._plugins.length;
        },

        /**
         * Returns all registered plugin instances.
         * @returns {Array} array of plugin objects.
         * @since 2.1.5
         */
        getAll: function() {
            return this._plugins;
        },

        /**
         * Calls registered plugins on the specified extension, with the given args. This
         * method immediately returns as soon as a plugin explicitly returns false. The
         * returned value can be used, for instance, to interrupt the current action.
         * @param {String} extension the name of the plugin method to call (e.g. 'beforeUpdate').
         * @param {Array} [args] extra arguments to apply to the extension call.
         * @returns {Boolean} false if any of the plugins return false, else returns true.
         */
        notify: function(extension, args) {
            var plugins = this._plugins;
            var ilen = plugins.length;
            var i, plugin;

            for (i=0; i<ilen; ++i) {
                plugin = plugins[i];
                if (typeof plugin[extension] === 'function') {
                    if (plugin[extension].apply(plugin, args || []) === false) {
                        return false;
                    }
                }
            }

            return true;
        }
    };

    /**
     * Plugin extension methods.
     * @interface Chart.PluginBase
     * @since 2.1.0
     */
    Chart.PluginBase = Chart.Element.extend({
        // Called at start of chart init
        beforeInit: noop,

        // Called at end of chart init
        afterInit: noop,

        // Called at start of update
        beforeUpdate: noop,

        // Called at end of update
        afterUpdate: noop,

        // Called at start of draw
        beforeDraw: noop,

        // Called at end of draw
        afterDraw: noop,

        // Called during destroy
        destroy: noop
    });

    /**
     * Provided for backward compatibility, use Chart.plugins instead
     * @namespace Chart.pluginService
     * @deprecated since version 2.1.5
     * @todo remove me at version 3
     */
    Chart.pluginService = Chart.plugins;
};

},{}],32:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.scale = {
        display: true,
        position: 'left',

        // grid line settings
        gridLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: 'rgba(0,0,0,0.25)',
            offsetGridLines: false,
            borderDash: [],
            borderDashOffset: 0.0
        },

        // scale label
        scaleLabel: {
            // actual label
            labelString: '',

            // display property
            display: false
        },

        // label settings
        ticks: {
            beginAtZero: false,
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            padding: 10,
            reverse: false,
            display: true,
            autoSkip: true,
            autoSkipPadding: 0,
            labelOffset: 0,
            // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
            callback: Chart.Ticks.formatters.values
        }
    };

    Chart.Scale = Chart.Element.extend({

        // These methods are ordered by lifecycle. Utilities then follow.
        // Any function defined here is inherited by all scale types.
        // Any function can be extended by the scale type

        beforeUpdate: function() {
            helpers.callCallback(this.options.beforeUpdate, [this]);
        },
        update: function(maxWidth, maxHeight, margins) {
            var me = this;

            // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
            me.beforeUpdate();

            // Absorb the master measurements
            me.maxWidth = maxWidth;
            me.maxHeight = maxHeight;
            me.margins = helpers.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, margins);

            // Dimensions
            me.beforeSetDimensions();
            me.setDimensions();
            me.afterSetDimensions();

            // Data min/max
            me.beforeDataLimits();
            me.determineDataLimits();
            me.afterDataLimits();

            // Ticks
            me.beforeBuildTicks();
            me.buildTicks();
            me.afterBuildTicks();

            me.beforeTickToLabelConversion();
            me.convertTicksToLabels();
            me.afterTickToLabelConversion();

            // Tick Rotation
            me.beforeCalculateTickRotation();
            me.calculateTickRotation();
            me.afterCalculateTickRotation();
            // Fit
            me.beforeFit();
            me.fit();
            me.afterFit();
            //
            me.afterUpdate();

            return me.minSize;

        },
        afterUpdate: function() {
            helpers.callCallback(this.options.afterUpdate, [this]);
        },

        //

        beforeSetDimensions: function() {
            helpers.callCallback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function() {
            var me = this;
            // Set the unconstrained dimension before label rotation
            if (me.isHorizontal()) {
                // Reset position before calculating rotation
                me.width = me.maxWidth;
                me.left = 0;
                me.right = me.width;
            } else {
                me.height = me.maxHeight;

                // Reset position before calculating rotation
                me.top = 0;
                me.bottom = me.height;
            }

            // Reset padding
            me.paddingLeft = 0;
            me.paddingTop = 0;
            me.paddingRight = 0;
            me.paddingBottom = 0;
        },
        afterSetDimensions: function() {
            helpers.callCallback(this.options.afterSetDimensions, [this]);
        },

        // Data limits
        beforeDataLimits: function() {
            helpers.callCallback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: helpers.noop,
        afterDataLimits: function() {
            helpers.callCallback(this.options.afterDataLimits, [this]);
        },

        //
        beforeBuildTicks: function() {
            helpers.callCallback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: helpers.noop,
        afterBuildTicks: function() {
            helpers.callCallback(this.options.afterBuildTicks, [this]);
        },

        beforeTickToLabelConversion: function() {
            helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function() {
            var me = this;
            // Convert ticks to strings
            var tickOpts = me.options.ticks;
            me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
        },
        afterTickToLabelConversion: function() {
            helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
        },

        //

        beforeCalculateTickRotation: function() {
            helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function() {
            var me = this;
            var context = me.ctx;
            var globalDefaults = Chart.defaults.global;
            var optionTicks = me.options.ticks;

            // Get the width of each grid by calculating the difference
            // between x offsets between 0 and 1.
            var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
            var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
            var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
            var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
            context.font = tickLabelFont;

            var firstWidth = context.measureText(me.ticks[0]).width;
            var lastWidth = context.measureText(me.ticks[me.ticks.length - 1]).width;
            var firstRotated;

            me.labelRotation = optionTicks.minRotation || 0;
            me.paddingRight = 0;
            me.paddingLeft = 0;

            if (me.options.display) {
                if (me.isHorizontal()) {
                    me.paddingRight = lastWidth / 2 + 3;
                    me.paddingLeft = firstWidth / 2 + 3;

                    if (!me.longestTextCache) {
                        me.longestTextCache = {};
                    }
                    var originalLabelWidth = helpers.longestText(context, tickLabelFont, me.ticks, me.longestTextCache);
                    var labelWidth = originalLabelWidth;
                    var cosRotation;
                    var sinRotation;

                    // Allow 3 pixels x2 padding either side for label readability
                    // only the index matters for a dataset scale, but we want a consistent interface between scales
                    var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

                    // Max label rotation can be set or default to 90 - also act as a loop counter
                    while (labelWidth > tickWidth && me.labelRotation < optionTicks.maxRotation) {
                        cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
                        sinRotation = Math.sin(helpers.toRadians(me.labelRotation));

                        firstRotated = cosRotation * firstWidth;

                        // We're right aligning the text now.
                        if (firstRotated + tickFontSize / 2 > me.yLabelWidth) {
                            me.paddingLeft = firstRotated + tickFontSize / 2;
                        }

                        me.paddingRight = tickFontSize / 2;

                        if (sinRotation * originalLabelWidth > me.maxHeight) {
                            // go back one step
                            me.labelRotation--;
                            break;
                        }

                        me.labelRotation++;
                        labelWidth = cosRotation * originalLabelWidth;
                    }
                }
            }

            if (me.margins) {
                me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
                me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
            }
        },
        afterCalculateTickRotation: function() {
            helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
        },

        //

        beforeFit: function() {
            helpers.callCallback(this.options.beforeFit, [this]);
        },
        fit: function() {
            var me = this;
            // Reset
            var minSize = me.minSize = {
                width: 0,
                height: 0
            };

            var opts = me.options;
            var globalDefaults = Chart.defaults.global;
            var tickOpts = opts.ticks;
            var scaleLabelOpts = opts.scaleLabel;
            var gridLineOpts = opts.gridLines;
            var display = opts.display;
            var isHorizontal = me.isHorizontal();

            var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
            var tickFontStyle = helpers.getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
            var tickFontFamily = helpers.getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
            var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

            var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabelOpts.fontSize, globalDefaults.defaultFontSize);

            var tickMarkLength = opts.gridLines.tickMarkLength;

            // Width
            if (isHorizontal) {
                // subtract the margins to line up with the chartArea if we are a full width scale
                minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
            } else {
                minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
            }

            // height
            if (isHorizontal) {
                minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
            } else {
                minSize.height = me.maxHeight; // fill all the height
            }

            // Are we showing a title for the scale?
            if (scaleLabelOpts.display && display) {
                if (isHorizontal) {
                    minSize.height += (scaleLabelFontSize * 1.5);
                } else {
                    minSize.width += (scaleLabelFontSize * 1.5);
                }
            }

            if (tickOpts.display && display) {
                // Don't bother fitting the ticks if we are not showing them
                if (!me.longestTextCache) {
                    me.longestTextCache = {};
                }

                var largestTextWidth = helpers.longestText(me.ctx, tickLabelFont, me.ticks, me.longestTextCache);
                var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
                var lineSpace = tickFontSize * 0.5;

                if (isHorizontal) {
                    // A horizontal axis is more constrained by the height.
                    me.longestLabelWidth = largestTextWidth;

                    // TODO - improve this calculation
                    var labelHeight = (Math.sin(helpers.toRadians(me.labelRotation)) * me.longestLabelWidth) + (tickFontSize * tallestLabelHeightInLines) + (lineSpace * tallestLabelHeightInLines);

                    minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
                    me.ctx.font = tickLabelFont;

                    var firstLabelWidth = me.ctx.measureText(me.ticks[0]).width;
                    var lastLabelWidth = me.ctx.measureText(me.ticks[me.ticks.length - 1]).width;

                    // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
                    // by the font height
                    var cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
                    var sinRotation = Math.sin(helpers.toRadians(me.labelRotation));
                    me.paddingLeft = me.labelRotation !== 0 ? (cosRotation * firstLabelWidth) + 3 : firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
                    me.paddingRight = me.labelRotation !== 0 ? (sinRotation * (tickFontSize / 2)) + 3 : lastLabelWidth / 2 + 3; // when rotated
                } else {
                    // A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
                    var maxLabelWidth = me.maxWidth - minSize.width;

                    // Account for padding
                    var mirror = tickOpts.mirror;
                    if (!mirror) {
                        largestTextWidth += me.options.ticks.padding;
                    } else {
                        // If mirrored text is on the inside so don't expand
                        largestTextWidth = 0;
                    }

                    if (largestTextWidth < maxLabelWidth) {
                        // We don't need all the room
                        minSize.width += largestTextWidth;
                    } else {
                        // Expand to max size
                        minSize.width = me.maxWidth;
                    }

                    me.paddingTop = tickFontSize / 2;
                    me.paddingBottom = tickFontSize / 2;
                }
            }

            if (me.margins) {
                me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
                me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
                me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
                me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
            }

            me.width = minSize.width;
            me.height = minSize.height;

        },
        afterFit: function() {
            helpers.callCallback(this.options.afterFit, [this]);
        },

        // Shared Methods
        isHorizontal: function() {
            return this.options.position === 'top' || this.options.position === 'bottom';
        },
        isFullWidth: function() {
            return (this.options.fullWidth);
        },

        // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
        getRightValue: function(rawValue) {
            // Null and undefined values first
            if (rawValue === null || typeof(rawValue) === 'undefined') {
                return NaN;
            }
            // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
            if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
                return NaN;
            }
            // If it is in fact an object, dive in one more level
            if (typeof(rawValue) === 'object') {
                if ((rawValue instanceof Date) || (rawValue.isValid)) {
                    return rawValue;
                }
                return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
            }

            // Value is good, return it
            return rawValue;
        },

        // Used to get the value to display in the tooltip for the data at the given index
        // function getLabelForIndex(index, datasetIndex)
        getLabelForIndex: helpers.noop,

        // Used to get data value locations.  Value can either be an index or a numerical value
        getPixelForValue: helpers.noop,

        // Used to get the data value from a given pixel. This is the inverse of getPixelForValue
        getValueForPixel: helpers.noop,

        // Used for tick location, should
        getPixelForTick: function(index, includeOffset) {
            var me = this;
            if (me.isHorizontal()) {
                var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
                var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
                var pixel = (tickWidth * index) + me.paddingLeft;

                if (includeOffset) {
                    pixel += tickWidth / 2;
                }

                var finalVal = me.left + Math.round(pixel);
                finalVal += me.isFullWidth() ? me.margins.left : 0;
                return finalVal;
            }
            var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
            return me.top + (index * (innerHeight / (me.ticks.length - 1)));
        },

        // Utility for getting the pixel location of a percentage of scale
        getPixelForDecimal: function(decimal /* , includeOffset*/) {
            var me = this;
            if (me.isHorizontal()) {
                var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
                var valueOffset = (innerWidth * decimal) + me.paddingLeft;

                var finalVal = me.left + Math.round(valueOffset);
                finalVal += me.isFullWidth() ? me.margins.left : 0;
                return finalVal;
            }
            return me.top + (decimal * me.height);
        },

        getBasePixel: function() {
            var me = this;
            var min = me.min;
            var max = me.max;

            return me.getPixelForValue(
                me.beginAtZero? 0:
                min < 0 && max < 0? max :
                min > 0 && max > 0? min :
                0);
        },

        // Actually draw the scale on the canvas
        // @param {rectangle} chartArea : the area of the chart to draw full grid lines on
        draw: function(chartArea) {
            var me = this;
            var options = me.options;
            if (!options.display) {
                return;
            }

            var context = me.ctx;
            var globalDefaults = Chart.defaults.global;
            var optionTicks = options.ticks;
            var gridLines = options.gridLines;
            var scaleLabel = options.scaleLabel;

            var isRotated = me.labelRotation !== 0;
            var skipRatio;
            var useAutoskipper = optionTicks.autoSkip;
            var isHorizontal = me.isHorizontal();

            // figure out the maximum number of gridlines to show
            var maxTicks;
            if (optionTicks.maxTicksLimit) {
                maxTicks = optionTicks.maxTicksLimit;
            }

            var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
            var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
            var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
            var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
            var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
            var tl = gridLines.tickMarkLength;
            var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
            var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);

            var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
            var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabel.fontSize, globalDefaults.defaultFontSize);
            var scaleLabelFontStyle = helpers.getValueOrDefault(scaleLabel.fontStyle, globalDefaults.defaultFontStyle);
            var scaleLabelFontFamily = helpers.getValueOrDefault(scaleLabel.fontFamily, globalDefaults.defaultFontFamily);
            var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

            var labelRotationRadians = helpers.toRadians(me.labelRotation);
            var cosRotation = Math.cos(labelRotationRadians);
            var longestRotatedLabel = me.longestLabelWidth * cosRotation;

            // Make sure we draw text in the correct color and font
            context.fillStyle = tickFontColor;

            var itemsToDraw = [];

            if (isHorizontal) {
                skipRatio = false;

                // Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
                // See #2584
                if (isRotated) {
                    longestRotatedLabel /= 2;
                }

                if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
                    skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
                }

                // if they defined a max number of optionTicks,
                // increase skipRatio until that number is met
                if (maxTicks && me.ticks.length > maxTicks) {
                    while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
                        if (!skipRatio) {
                            skipRatio = 1;
                        }
                        skipRatio += 1;
                    }
                }

                if (!useAutoskipper) {
                    skipRatio = false;
                }
            }


            var xTickStart = options.position === 'right' ? me.left : me.right - tl;
            var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
            var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
            var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

            helpers.each(me.ticks, function(label, index) {
                // If the callback returned a null or undefined value, do not draw this line
                if (label === undefined || label === null) {
                    return;
                }

                var isLastTick = me.ticks.length === index + 1;

                // Since we always show the last tick,we need may need to hide the last shown one before
                var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
                if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
                    return;
                }

                var lineWidth, lineColor;
                if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
                    // Draw the first index specially
                    lineWidth = gridLines.zeroLineWidth;
                    lineColor = gridLines.zeroLineColor;
                } else {
                    lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
                    lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
                }

                // Common properties
                var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
                var textAlign = 'middle';
                var textBaseline = 'middle';

                if (isHorizontal) {
                    if (!isRotated) {
                        textBaseline = options.position === 'top' ? 'bottom' : 'top';
                    }

                    textAlign = isRotated ? 'right' : 'center';

                    var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
                    labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)
                    labelY = (isRotated) ? me.top + 12 : options.position === 'top' ? me.bottom - tl : me.top + tl;

                    tx1 = tx2 = x1 = x2 = xLineValue;
                    ty1 = yTickStart;
                    ty2 = yTickEnd;
                    y1 = chartArea.top;
                    y2 = chartArea.bottom;
                } else {
                    if (options.position === 'left') {
                        if (optionTicks.mirror) {
                            labelX = me.right + optionTicks.padding;
                            textAlign = 'left';
                        } else {
                            labelX = me.right - optionTicks.padding;
                            textAlign = 'right';
                        }
                    // right side
                    } else if (optionTicks.mirror) {
                        labelX = me.left - optionTicks.padding;
                        textAlign = 'right';
                    } else {
                        labelX = me.left + optionTicks.padding;
                        textAlign = 'left';
                    }

                    var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
                    yLineValue += helpers.aliasPixel(lineWidth);
                    labelY = me.getPixelForTick(index, gridLines.offsetGridLines);

                    tx1 = xTickStart;
                    tx2 = xTickEnd;
                    x1 = chartArea.left;
                    x2 = chartArea.right;
                    ty1 = ty2 = y1 = y2 = yLineValue;
                }

                itemsToDraw.push({
                    tx1: tx1,
                    ty1: ty1,
                    tx2: tx2,
                    ty2: ty2,
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    labelX: labelX,
                    labelY: labelY,
                    glWidth: lineWidth,
                    glColor: lineColor,
                    glBorderDash: borderDash,
                    glBorderDashOffset: borderDashOffset,
                    rotation: -1 * labelRotationRadians,
                    label: label,
                    textBaseline: textBaseline,
                    textAlign: textAlign
                });
            });

            // Draw all of the tick labels, tick marks, and grid lines at the correct places
            helpers.each(itemsToDraw, function(itemToDraw) {
                if (gridLines.display) {
                    context.save();
                    context.lineWidth = itemToDraw.glWidth;
                    context.strokeStyle = itemToDraw.glColor;
                    if (context.setLineDash) {
                        context.setLineDash(itemToDraw.glBorderDash);
                        context.lineDashOffset = itemToDraw.glBorderDashOffset;
                    }

                    context.beginPath();

                    if (gridLines.drawTicks) {
                        context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
                        context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
                    }

                    if (gridLines.drawOnChartArea) {
                        context.moveTo(itemToDraw.x1, itemToDraw.y1);
                        context.lineTo(itemToDraw.x2, itemToDraw.y2);
                    }

                    context.stroke();
                    context.restore();
                }

                if (optionTicks.display) {
                    context.save();
                    context.translate(itemToDraw.labelX, itemToDraw.labelY);
                    context.rotate(itemToDraw.rotation);
                    context.font = tickLabelFont;
                    context.textBaseline = itemToDraw.textBaseline;
                    context.textAlign = itemToDraw.textAlign;

                    var label = itemToDraw.label;
                    if (helpers.isArray(label)) {
                        for (var i = 0, y = -(label.length - 1)*tickFontSize*0.75; i < label.length; ++i) {
                            // We just make sure the multiline element is a string here..
                            context.fillText('' + label[i], 0, y);
                            // apply same lineSpacing as calculated @ L#320
                            y += (tickFontSize * 1.5);
                        }
                    } else {
                        context.fillText(label, 0, 0);
                    }
                    context.restore();
                }
            });

            if (scaleLabel.display) {
                // Draw the scale label
                var scaleLabelX;
                var scaleLabelY;
                var rotation = 0;

                if (isHorizontal) {
                    scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
                    scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFontSize / 2) : me.top + (scaleLabelFontSize / 2);
                } else {
                    var isLeft = options.position === 'left';
                    scaleLabelX = isLeft ? me.left + (scaleLabelFontSize / 2) : me.right - (scaleLabelFontSize / 2);
                    scaleLabelY = me.top + ((me.bottom - me.top) / 2);
                    rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
                }

                context.save();
                context.translate(scaleLabelX, scaleLabelY);
                context.rotate(rotation);
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillStyle = scaleLabelFontColor; // render in correct colour
                context.font = scaleLabelFont;
                context.fillText(scaleLabel.labelString, 0, 0);
                context.restore();
            }

            if (gridLines.drawBorder) {
                // Draw the line at the edge of the axis
                context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
                context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
                var x1 = me.left,
                    x2 = me.right,
                    y1 = me.top,
                    y2 = me.bottom;

                var aliasPixel = helpers.aliasPixel(context.lineWidth);
                if (isHorizontal) {
                    y1 = y2 = options.position === 'top' ? me.bottom : me.top;
                    y1 += aliasPixel;
                    y2 += aliasPixel;
                } else {
                    x1 = x2 = options.position === 'left' ? me.right : me.left;
                    x1 += aliasPixel;
                    x2 += aliasPixel;
                }

                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();
            }
        }
    });
};

},{}],33:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.scaleService = {
        // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
        // use the new chart options to grab the correct scale
        constructors: {},
        // Use a registration function so that we can move to an ES6 map when we no longer need to support
        // old browsers

        // Scale config defaults
        defaults: {},
        registerScaleType: function(type, scaleConstructor, defaults) {
            this.constructors[type] = scaleConstructor;
            this.defaults[type] = helpers.clone(defaults);
        },
        getScaleConstructor: function(type) {
            return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
        },
        getScaleDefaults: function(type) {
            // Return the scale defaults merged with the global settings so that we always use the latest ones
            return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
        },
        updateScaleDefaults: function(type, additions) {
            var defaults = this.defaults;
            if (defaults.hasOwnProperty(type)) {
                defaults[type] = helpers.extend(defaults[type], additions);
            }
        },
        addScalesToLayout: function(chartInstance) {
            // Adds each scale to the chart.boxes array to be sized accordingly
            helpers.each(chartInstance.scales, function(scale) {
                Chart.layoutService.addBox(chartInstance, scale);
            });
        }
    };
};

},{}],34:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    /**
     * Namespace to hold static tick generation functions
     * @namespace Chart.Ticks
     */
    Chart.Ticks = {
        /**
         * Namespace to hold generators for different types of ticks
         * @namespace Chart.Ticks.generators
         */
        generators: {
            /**
             * Interface for the options provided to the numeric tick generator
             * @interface INumericTickGenerationOptions
             */
            /**
             * The maximum number of ticks to display
             * @name INumericTickGenerationOptions#maxTicks
             * @type Number
             */
            /**
             * The distance between each tick.
             * @name INumericTickGenerationOptions#stepSize
             * @type Number
             * @optional
             */
            /**
             * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
             * @name INumericTickGenerationOptions#min
             * @type Number
             * @optional
             */
            /**
             * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
             * @name INumericTickGenerationOptions#max
             * @type Number
             * @optional
             */

            /**
             * Generate a set of linear ticks
             * @method Chart.Ticks.generators.linear
             * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
             * @param dataRange {IRange} the range of the data
             * @returns {Array<Number>} array of tick values
             */
            linear: function(generationOptions, dataRange) {
                var ticks = [];
                // To get a "nice" value for the tick spacing, we will use the appropriately named
                // "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
                // for details.

                var spacing;
                if (generationOptions.stepSize && generationOptions.stepSize > 0) {
                    spacing = generationOptions.stepSize;
                } else {
                    var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
                    spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
                }
                var niceMin = Math.floor(dataRange.min / spacing) * spacing;
                var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

                // If min, max and stepSize is set and they make an evenly spaced scale use it.
                if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
                    var minMaxDeltaDivisibleByStepSize = ((generationOptions.max - generationOptions.min) % generationOptions.stepSize) === 0;
                    if (minMaxDeltaDivisibleByStepSize) {
                        niceMin = generationOptions.min;
                        niceMax = generationOptions.max;
                    }
                }

                var numSpaces = (niceMax - niceMin) / spacing;
                // If very close to our rounded value, use it.
                if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
                    numSpaces = Math.round(numSpaces);
                } else {
                    numSpaces = Math.ceil(numSpaces);
                }

                // Put the values into the ticks array
                ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
                for (var j = 1; j < numSpaces; ++j) {
                    ticks.push(niceMin + (j * spacing));
                }
                ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

                return ticks;
            },

            /**
             * Generate a set of logarithmic ticks
             * @method Chart.Ticks.generators.logarithmic
             * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
             * @param dataRange {IRange} the range of the data
             * @returns {Array<Number>} array of tick values
             */
            logarithmic: function(generationOptions, dataRange) {
                var ticks = [];
                var getValueOrDefault = helpers.getValueOrDefault;

                // Figure out what the max number of ticks we can support it is based on the size of
                // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
                // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
                // the graph
                var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

                while (tickVal < dataRange.max) {
                    ticks.push(tickVal);

                    var exp;
                    var significand;

                    if (tickVal === 0) {
                        exp = Math.floor(helpers.log10(dataRange.minNotZero));
                        significand = Math.round(dataRange.minNotZero / Math.pow(10, exp));
                    } else {
                        exp = Math.floor(helpers.log10(tickVal));
                        significand = Math.floor(tickVal / Math.pow(10, exp)) + 1;
                    }

                    if (significand === 10) {
                        significand = 1;
                        ++exp;
                    }

                    tickVal = significand * Math.pow(10, exp);
                }

                var lastTick = getValueOrDefault(generationOptions.max, tickVal);
                ticks.push(lastTick);

                return ticks;
            }
        },

        /**
         * Namespace to hold formatters for different types of ticks
         * @namespace Chart.Ticks.formatters
         */
        formatters: {
            /**
             * Formatter for value labels
             * @method Chart.Ticks.formatters.values
             * @param value the value to display
             * @return {String|Array} the label to display
             */
            values: function(value) {
                return helpers.isArray(value) ? value : '' + value;
            },

            /**
             * Formatter for linear numeric ticks
             * @method Chart.Ticks.formatters.linear
             * @param tickValue {Number} the value to be formatted
             * @param index {Number} the position of the tickValue parameter in the ticks array
             * @param ticks {Array<Number>} the list of ticks being converted
             * @return {String} string representation of the tickValue parameter
             */
            linear: function(tickValue, index, ticks) {
                // If we have lots of ticks, don't use the ones
                var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

                // If we have a number like 2.5 as the delta, figure out how many decimal places we need
                if (Math.abs(delta) > 1) {
                    if (tickValue !== Math.floor(tickValue)) {
                        // not an integer
                        delta = tickValue - Math.floor(tickValue);
                    }
                }

                var logDelta = helpers.log10(Math.abs(delta));
                var tickString = '';

                if (tickValue !== 0) {
                    var numDecimal = -1 * Math.floor(logDelta);
                    numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
                    tickString = tickValue.toFixed(numDecimal);
                } else {
                    tickString = '0'; // never show decimal places for 0
                }

                return tickString;
            },

            logarithmic: function(tickValue, index, ticks) {
                var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

                if (tickValue === 0) {
                    return '0';
                } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
                    return tickValue.toExponential();
                }
                return '';
            }
        }
    };
};

},{}],35:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    Chart.defaults.global.title = {
        display: false,
        position: 'top',
        fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

        fontStyle: 'bold',
        padding: 10,

        // actual title
        text: ''
    };

    var noop = helpers.noop;
    Chart.Title = Chart.Element.extend({

        initialize: function(config) {
            var me = this;
            helpers.extend(me, config);
            me.options = helpers.configMerge(Chart.defaults.global.title, config.options);

            // Contains hit boxes for each dataset (in dataset order)
            me.legendHitBoxes = [];
        },

        // These methods are ordered by lifecycle. Utilities then follow.

        beforeUpdate: function() {
            var chartOpts = this.chart.options;
            if (chartOpts && chartOpts.title) {
                this.options = helpers.configMerge(Chart.defaults.global.title, chartOpts.title);
            }
        },
        update: function(maxWidth, maxHeight, margins) {
            var me = this;

            // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
            me.beforeUpdate();

            // Absorb the master measurements
            me.maxWidth = maxWidth;
            me.maxHeight = maxHeight;
            me.margins = margins;

            // Dimensions
            me.beforeSetDimensions();
            me.setDimensions();
            me.afterSetDimensions();
            // Labels
            me.beforeBuildLabels();
            me.buildLabels();
            me.afterBuildLabels();

            // Fit
            me.beforeFit();
            me.fit();
            me.afterFit();
            //
            me.afterUpdate();

            return me.minSize;

        },
        afterUpdate: noop,

        //

        beforeSetDimensions: noop,
        setDimensions: function() {
            var me = this;
            // Set the unconstrained dimension before label rotation
            if (me.isHorizontal()) {
                // Reset position before calculating rotation
                me.width = me.maxWidth;
                me.left = 0;
                me.right = me.width;
            } else {
                me.height = me.maxHeight;

                // Reset position before calculating rotation
                me.top = 0;
                me.bottom = me.height;
            }

            // Reset padding
            me.paddingLeft = 0;
            me.paddingTop = 0;
            me.paddingRight = 0;
            me.paddingBottom = 0;

            // Reset minSize
            me.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: noop,

        //

        beforeBuildLabels: noop,
        buildLabels: noop,
        afterBuildLabels: noop,

        //

        beforeFit: noop,
        fit: function() {
            var me = this,
                valueOrDefault = helpers.getValueOrDefault,
                opts = me.options,
                globalDefaults = Chart.defaults.global,
                display = opts.display,
                fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
                minSize = me.minSize;

            if (me.isHorizontal()) {
                minSize.width = me.maxWidth; // fill all the width
                minSize.height = display ? fontSize + (opts.padding * 2) : 0;
            } else {
                minSize.width = display ? fontSize + (opts.padding * 2) : 0;
                minSize.height = me.maxHeight; // fill all the height
            }

            me.width = minSize.width;
            me.height = minSize.height;

        },
        afterFit: noop,

        // Shared Methods
        isHorizontal: function() {
            var pos = this.options.position;
            return pos === 'top' || pos === 'bottom';
        },

        // Actually draw the title block on the canvas
        draw: function() {
            var me = this,
                ctx = me.ctx,
                valueOrDefault = helpers.getValueOrDefault,
                opts = me.options,
                globalDefaults = Chart.defaults.global;

            if (opts.display) {
                var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
                    fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
                    fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
                    titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
                    rotation = 0,
                    titleX,
                    titleY,
                    top = me.top,
                    left = me.left,
                    bottom = me.bottom,
                    right = me.right,
                    maxWidth;

                ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
                ctx.font = titleFont;

                // Horizontal
                if (me.isHorizontal()) {
                    titleX = left + ((right - left) / 2); // midpoint of the width
                    titleY = top + ((bottom - top) / 2); // midpoint of the height
                    maxWidth = right - left;
                } else {
                    titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
                    titleY = top + ((bottom - top) / 2);
                    maxWidth = bottom - top;
                    rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
                }

                ctx.save();
                ctx.translate(titleX, titleY);
                ctx.rotate(rotation);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(opts.text, 0, 0, maxWidth);
                ctx.restore();
            }
        }
    });

    // Register the title plugin
    Chart.plugins.register({
        beforeInit: function(chartInstance) {
            var opts = chartInstance.options;
            var titleOpts = opts.title;

            if (titleOpts) {
                chartInstance.titleBlock = new Chart.Title({
                    ctx: chartInstance.chart.ctx,
                    options: titleOpts,
                    chart: chartInstance
                });

                Chart.layoutService.addBox(chartInstance, chartInstance.titleBlock);
            }
        }
    });
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    /**
     * Helper method to merge the opacity into a color
     */
    function mergeOpacity(colorString, opacity) {
        var color = helpers.color(colorString);
        return color.alpha(opacity * color.alpha()).rgbaString();
    }

    Chart.defaults.global.tooltips = {
        enabled: true,
        custom: null,
        mode: 'nearest',
        position: 'average',
        intersect: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFontStyle: 'bold',
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleFontColor: '#fff',
        titleAlign: 'left',
        bodySpacing: 2,
        bodyFontColor: '#fff',
        bodyAlign: 'left',
        footerFontStyle: 'bold',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFontColor: '#fff',
        footerAlign: 'left',
        yPadding: 6,
        xPadding: 6,
        caretSize: 5,
        cornerRadius: 6,
        multiKeyBackground: '#fff',
        displayColors: true,
        callbacks: {
            // Args are: (tooltipItems, data)
            beforeTitle: helpers.noop,
            title: function(tooltipItems, data) {
                // Pick first xLabel for now
                var title = '';
                var labels = data.labels;
                var labelCount = labels ? labels.length : 0;

                if (tooltipItems.length > 0) {
                    var item = tooltipItems[0];

                    if (item.xLabel) {
                        title = item.xLabel;
                    } else if (labelCount > 0 && item.index < labelCount) {
                        title = labels[item.index];
                    }
                }

                return title;
            },
            afterTitle: helpers.noop,

            // Args are: (tooltipItems, data)
            beforeBody: helpers.noop,

            // Args are: (tooltipItem, data)
            beforeLabel: helpers.noop,
            label: function(tooltipItem, data) {
                var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ': ' + tooltipItem.yLabel;
            },
            labelColor: function(tooltipItem, chartInstance) {
                var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
                var activeElement = meta.data[tooltipItem.index];
                var view = activeElement._view;
                return {
                    borderColor: view.borderColor,
                    backgroundColor: view.backgroundColor
                };
            },
            afterLabel: helpers.noop,

            // Args are: (tooltipItems, data)
            afterBody: helpers.noop,

            // Args are: (tooltipItems, data)
            beforeFooter: helpers.noop,
            footer: helpers.noop,
            afterFooter: helpers.noop
        }
    };

    // Helper to push or concat based on if the 2nd parameter is an array or not
    function pushOrConcat(base, toPush) {
        if (toPush) {
            if (helpers.isArray(toPush)) {
                // base = base.concat(toPush);
                Array.prototype.push.apply(base, toPush);
            } else {
                base.push(toPush);
            }
        }

        return base;
    }

    // Private helper to create a tooltip item model
    // @param element : the chart element (point, arc, bar) to create the tooltip item for
    // @return : new tooltip item
    function createTooltipItem(element) {
        var xScale = element._xScale;
        var yScale = element._yScale || element._scale; // handle radar || polarArea charts
        var index = element._index,
            datasetIndex = element._datasetIndex;

        return {
            xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
            yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
            index: index,
            datasetIndex: datasetIndex,
            x: element._model.x,
            y: element._model.y
        };
    }

    /**
     * Helper to get the reset model for the tooltip
     * @param tooltipOpts {Object} the tooltip options
     */
    function getBaseModel(tooltipOpts) {
        var globalDefaults = Chart.defaults.global;
        var getValueOrDefault = helpers.getValueOrDefault;

        return {
            // Positioning
            xPadding: tooltipOpts.xPadding,
            yPadding: tooltipOpts.yPadding,
            xAlign: tooltipOpts.xAlign,
            yAlign: tooltipOpts.yAlign,

            // Body
            bodyFontColor: tooltipOpts.bodyFontColor,
            _bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
            _bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
            _bodyAlign: tooltipOpts.bodyAlign,
            bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
            bodySpacing: tooltipOpts.bodySpacing,

            // Title
            titleFontColor: tooltipOpts.titleFontColor,
            _titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
            _titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
            titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
            _titleAlign: tooltipOpts.titleAlign,
            titleSpacing: tooltipOpts.titleSpacing,
            titleMarginBottom: tooltipOpts.titleMarginBottom,

            // Footer
            footerFontColor: tooltipOpts.footerFontColor,
            _footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
            _footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
            footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
            _footerAlign: tooltipOpts.footerAlign,
            footerSpacing: tooltipOpts.footerSpacing,
            footerMarginTop: tooltipOpts.footerMarginTop,

            // Appearance
            caretSize: tooltipOpts.caretSize,
            cornerRadius: tooltipOpts.cornerRadius,
            backgroundColor: tooltipOpts.backgroundColor,
            opacity: 0,
            legendColorBackground: tooltipOpts.multiKeyBackground,
            displayColors: tooltipOpts.displayColors
        };
    }

    /**
     * Get the size of the tooltip
     */
    function getTooltipSize(tooltip, model) {
        var ctx = tooltip._chart.ctx;

        var height = model.yPadding * 2; // Tooltip Padding
        var width = 0;

        // Count of all lines in the body
        var body = model.body;
        var combinedBodyLength = body.reduce(function(count, bodyItem) {
            return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
        }, 0);
        combinedBodyLength += model.beforeBody.length + model.afterBody.length;

        var titleLineCount = model.title.length;
        var footerLineCount = model.footer.length;
        var titleFontSize = model.titleFontSize,
            bodyFontSize = model.bodyFontSize,
            footerFontSize = model.footerFontSize;

        height += titleLineCount * titleFontSize; // Title Lines
        height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
        height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
        height += combinedBodyLength * bodyFontSize; // Body Lines
        height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
        height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
        height += footerLineCount * (footerFontSize); // Footer Lines
        height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

        // Title width
        var widthPadding = 0;
        var maxLineWidth = function(line) {
            width = Math.max(width, ctx.measureText(line).width + widthPadding);
        };

        ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
        helpers.each(model.title, maxLineWidth);

        // Body width
        ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
        helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

        // Body lines may include some extra width due to the color box
        widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
        helpers.each(body, function(bodyItem) {
            helpers.each(bodyItem.before, maxLineWidth);
            helpers.each(bodyItem.lines, maxLineWidth);
            helpers.each(bodyItem.after, maxLineWidth);
        });

        // Reset back to 0
        widthPadding = 0;

        // Footer width
        ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
        helpers.each(model.footer, maxLineWidth);

        // Add padding
        width += 2 * model.xPadding;

        return {
            width: width,
            height: height
        };
    }

    /**
     * Helper to get the alignment of a tooltip given the size
     */
    function determineAlignment(tooltip, size) {
        var model = tooltip._model;
        var chart = tooltip._chart;
        var chartArea = tooltip._chartInstance.chartArea;
        var xAlign = 'center';
        var yAlign = 'center';

        if (model.y < size.height) {
            yAlign = 'top';
        } else if (model.y > (chart.height - size.height)) {
            yAlign = 'bottom';
        }

        var lf, rf; // functions to determine left, right alignment
        var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
        var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
        var midX = (chartArea.left + chartArea.right) / 2;
        var midY = (chartArea.top + chartArea.bottom) / 2;

        if (yAlign === 'center') {
            lf = function(x) {
                return x <= midX;
            };
            rf = function(x) {
                return x > midX;
            };
        } else {
            lf = function(x) {
                return x <= (size.width / 2);
            };
            rf = function(x) {
                return x >= (chart.width - (size.width / 2));
            };
        }

        olf = function(x) {
            return x + size.width > chart.width;
        };
        orf = function(x) {
            return x - size.width < 0;
        };
        yf = function(y) {
            return y <= midY ? 'top' : 'bottom';
        };

        if (lf(model.x)) {
            xAlign = 'left';

            // Is tooltip too wide and goes over the right side of the chart.?
            if (olf(model.x)) {
                xAlign = 'center';
                yAlign = yf(model.y);
            }
        } else if (rf(model.x)) {
            xAlign = 'right';

            // Is tooltip too wide and goes outside left edge of canvas?
            if (orf(model.x)) {
                xAlign = 'center';
                yAlign = yf(model.y);
            }
        }

        var opts = tooltip._options;
        return {
            xAlign: opts.xAlign ? opts.xAlign : xAlign,
            yAlign: opts.yAlign ? opts.yAlign : yAlign
        };
    }

    /**
     * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
     */
    function getBackgroundPoint(vm, size, alignment) {
        // Background Position
        var x = vm.x;
        var y = vm.y;

        var caretSize = vm.caretSize,
            caretPadding = vm.caretPadding,
            cornerRadius = vm.cornerRadius,
            xAlign = alignment.xAlign,
            yAlign = alignment.yAlign,
            paddingAndSize = caretSize + caretPadding,
            radiusAndPadding = cornerRadius + caretPadding;

        if (xAlign === 'right') {
            x -= size.width;
        } else if (xAlign === 'center') {
            x -= (size.width / 2);
        }

        if (yAlign === 'top') {
            y += paddingAndSize;
        } else if (yAlign === 'bottom') {
            y -= size.height + paddingAndSize;
        } else {
            y -= (size.height / 2);
        }

        if (yAlign === 'center') {
            if (xAlign === 'left') {
                x += paddingAndSize;
            } else if (xAlign === 'right') {
                x -= paddingAndSize;
            }
        } else if (xAlign === 'left') {
            x -= radiusAndPadding;
        } else if (xAlign === 'right') {
            x += radiusAndPadding;
        }

        return {
            x: x,
            y: y
        };
    }

    Chart.Tooltip = Chart.Element.extend({
        initialize: function() {
            this._model = getBaseModel(this._options);
        },

        // Get the title
        // Args are: (tooltipItem, data)
        getTitle: function() {
            var me = this;
            var opts = me._options;
            var callbacks = opts.callbacks;

            var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
                title = callbacks.title.apply(me, arguments),
                afterTitle = callbacks.afterTitle.apply(me, arguments);

            var lines = [];
            lines = pushOrConcat(lines, beforeTitle);
            lines = pushOrConcat(lines, title);
            lines = pushOrConcat(lines, afterTitle);

            return lines;
        },

        // Args are: (tooltipItem, data)
        getBeforeBody: function() {
            var lines = this._options.callbacks.beforeBody.apply(this, arguments);
            return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
        },

        // Args are: (tooltipItem, data)
        getBody: function(tooltipItems, data) {
            var me = this;
            var callbacks = me._options.callbacks;
            var bodyItems = [];

            helpers.each(tooltipItems, function(tooltipItem) {
                var bodyItem = {
                    before: [],
                    lines: [],
                    after: []
                };
                pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
                pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
                pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

                bodyItems.push(bodyItem);
            });

            return bodyItems;
        },

        // Args are: (tooltipItem, data)
        getAfterBody: function() {
            var lines = this._options.callbacks.afterBody.apply(this, arguments);
            return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
        },

        // Get the footer and beforeFooter and afterFooter lines
        // Args are: (tooltipItem, data)
        getFooter: function() {
            var me = this;
            var callbacks = me._options.callbacks;

            var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
            var footer = callbacks.footer.apply(me, arguments);
            var afterFooter = callbacks.afterFooter.apply(me, arguments);

            var lines = [];
            lines = pushOrConcat(lines, beforeFooter);
            lines = pushOrConcat(lines, footer);
            lines = pushOrConcat(lines, afterFooter);

            return lines;
        },

        update: function(changed) {
            var me = this;
            var opts = me._options;

            // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
            // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
            // which breaks any animations.
            var existingModel = me._model;
            var model = me._model = getBaseModel(opts);
            var active = me._active;

            var data = me._data;
            var chartInstance = me._chartInstance;

            // In the case where active.length === 0 we need to keep these at existing values for good animations
            var alignment = {
                xAlign: existingModel.xAlign,
                yAlign: existingModel.yAlign
            };
            var backgroundPoint = {
                x: existingModel.x,
                y: existingModel.y
            };
            var tooltipSize = {
                width: existingModel.width,
                height: existingModel.height
            };
            var tooltipPosition = {
                x: existingModel.caretX,
                y: existingModel.caretY
            };

            var i, len;

            if (active.length) {
                model.opacity = 1;

                var labelColors = [];
                tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);

                var tooltipItems = [];
                for (i = 0, len = active.length; i < len; ++i) {
                    tooltipItems.push(createTooltipItem(active[i]));
                }

                // If the user provided a filter function, use it to modify the tooltip items
                if (opts.filter) {
                    tooltipItems = tooltipItems.filter(function(a) {
                        return opts.filter(a, data);
                    });
                }

                // If the user provided a sorting function, use it to modify the tooltip items
                if (opts.itemSort) {
                    tooltipItems = tooltipItems.sort(function(a, b) {
                        return opts.itemSort(a, b, data);
                    });
                }

                // Determine colors for boxes
                helpers.each(tooltipItems, function(tooltipItem) {
                    labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
                });

                // Build the Text Lines
                model.title = me.getTitle(tooltipItems, data);
                model.beforeBody = me.getBeforeBody(tooltipItems, data);
                model.body = me.getBody(tooltipItems, data);
                model.afterBody = me.getAfterBody(tooltipItems, data);
                model.footer = me.getFooter(tooltipItems, data);

                // Initial positioning and colors
                model.x = Math.round(tooltipPosition.x);
                model.y = Math.round(tooltipPosition.y);
                model.caretPadding = helpers.getValueOrDefault(tooltipPosition.padding, 2);
                model.labelColors = labelColors;

                // data points
                model.dataPoints = tooltipItems;

                // We need to determine alignment of the tooltip
                tooltipSize = getTooltipSize(this, model);
                alignment = determineAlignment(this, tooltipSize);
                // Final Size and Position
                backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
            } else {
                model.opacity = 0;
            }

            model.xAlign = alignment.xAlign;
            model.yAlign = alignment.yAlign;
            model.x = backgroundPoint.x;
            model.y = backgroundPoint.y;
            model.width = tooltipSize.width;
            model.height = tooltipSize.height;

            // Point where the caret on the tooltip points to
            model.caretX = tooltipPosition.x;
            model.caretY = tooltipPosition.y;

            me._model = model;

            if (changed && opts.custom) {
                opts.custom.call(me, model);
            }

            return me;
        },
        drawCaret: function(tooltipPoint, size, opacity) {
            var vm = this._view;
            var ctx = this._chart.ctx;
            var x1, x2, x3;
            var y1, y2, y3;
            var caretSize = vm.caretSize;
            var cornerRadius = vm.cornerRadius;
            var xAlign = vm.xAlign,
                yAlign = vm.yAlign;
            var ptX = tooltipPoint.x,
                ptY = tooltipPoint.y;
            var width = size.width,
                height = size.height;

            if (yAlign === 'center') {
                // Left or right side
                if (xAlign === 'left') {
                    x1 = ptX;
                    x2 = x1 - caretSize;
                    x3 = x1;
                } else {
                    x1 = ptX + width;
                    x2 = x1 + caretSize;
                    x3 = x1;
                }

                y2 = ptY + (height / 2);
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            } else {
                if (xAlign === 'left') {
                    x1 = ptX + cornerRadius;
                    x2 = x1 + caretSize;
                    x3 = x2 + caretSize;
                } else if (xAlign === 'right') {
                    x1 = ptX + width - cornerRadius;
                    x2 = x1 - caretSize;
                    x3 = x2 - caretSize;
                } else {
                    x2 = ptX + (width / 2);
                    x1 = x2 - caretSize;
                    x3 = x2 + caretSize;
                }

                if (yAlign === 'top') {
                    y1 = ptY;
                    y2 = y1 - caretSize;
                    y3 = y1;
                } else {
                    y1 = ptY + height;
                    y2 = y1 + caretSize;
                    y3 = y1;
                }
            }

            ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.closePath();
            ctx.fill();
        },
        drawTitle: function(pt, vm, ctx, opacity) {
            var title = vm.title;

            if (title.length) {
                ctx.textAlign = vm._titleAlign;
                ctx.textBaseline = 'top';

                var titleFontSize = vm.titleFontSize,
                    titleSpacing = vm.titleSpacing;

                ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
                ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

                var i, len;
                for (i = 0, len = title.length; i < len; ++i) {
                    ctx.fillText(title[i], pt.x, pt.y);
                    pt.y += titleFontSize + titleSpacing; // Line Height and spacing

                    if (i + 1 === title.length) {
                        pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
                    }
                }
            }
        },
        drawBody: function(pt, vm, ctx, opacity) {
            var bodyFontSize = vm.bodyFontSize;
            var bodySpacing = vm.bodySpacing;
            var body = vm.body;

            ctx.textAlign = vm._bodyAlign;
            ctx.textBaseline = 'top';

            var textColor = mergeOpacity(vm.bodyFontColor, opacity);
            ctx.fillStyle = textColor;
            ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

            // Before Body
            var xLinePadding = 0;
            var fillLineOfText = function(line) {
                ctx.fillText(line, pt.x + xLinePadding, pt.y);
                pt.y += bodyFontSize + bodySpacing;
            };

            // Before body lines
            helpers.each(vm.beforeBody, fillLineOfText);

            var drawColorBoxes = vm.displayColors;
            xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

            // Draw body lines now
            helpers.each(body, function(bodyItem, i) {
                helpers.each(bodyItem.before, fillLineOfText);

                helpers.each(bodyItem.lines, function(line) {
                    // Draw Legend-like boxes if needed
                    if (drawColorBoxes) {
                        // Fill a white rect so that colours merge nicely if the opacity is < 1
                        ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
                        ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

                        // Border
                        ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
                        ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

                        // Inner square
                        ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
                        ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);

                        ctx.fillStyle = textColor;
                    }

                    fillLineOfText(line);
                });

                helpers.each(bodyItem.after, fillLineOfText);
            });

            // Reset back to 0 for after body
            xLinePadding = 0;

            // After body lines
            helpers.each(vm.afterBody, fillLineOfText);
            pt.y -= bodySpacing; // Remove last body spacing
        },
        drawFooter: function(pt, vm, ctx, opacity) {
            var footer = vm.footer;

            if (footer.length) {
                pt.y += vm.footerMarginTop;

                ctx.textAlign = vm._footerAlign;
                ctx.textBaseline = 'top';

                ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
                ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

                helpers.each(footer, function(line) {
                    ctx.fillText(line, pt.x, pt.y);
                    pt.y += vm.footerFontSize + vm.footerSpacing;
                });
            }
        },
        drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
            ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
            helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
            ctx.fill();
        },
        draw: function() {
            var ctx = this._chart.ctx;
            var vm = this._view;

            if (vm.opacity === 0) {
                return;
            }

            var tooltipSize = {
                width: vm.width,
                height: vm.height
            };
            var pt = {
                x: vm.x,
                y: vm.y
            };

            // IE11/Edge does not like very small opacities, so snap to 0
            var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

            if (this._options.enabled) {
                // Draw Background
                this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

                // Draw Caret
                this.drawCaret(pt, tooltipSize, opacity);

                // Draw Title, Body, and Footer
                pt.x += vm.xPadding;
                pt.y += vm.yPadding;

                // Titles
                this.drawTitle(pt, vm, ctx, opacity);

                // Body
                this.drawBody(pt, vm, ctx, opacity);

                // Footer
                this.drawFooter(pt, vm, ctx, opacity);
            }
        },

        /**
         * Handle an event
         * @private
         * @param e {Event} the event to handle
         * @returns {Boolean} true if the tooltip changed
         */
        handleEvent: function(e) {
            var me = this;
            var options = me._options;
            var changed = false;

            me._lastActive = me._lastActive || [];

            // Find Active Elements for tooltips
            if (e.type === 'mouseout') {
                me._active = [];
            } else {
                me._active = me._chartInstance.getElementsAtEventForMode(e, options.mode, options);
            }

            // Remember Last Actives
            changed = !helpers.arrayEquals(me._active, me._lastActive);
            me._lastActive = me._active;

            if (options.enabled || options.custom) {
                me._eventPosition = helpers.getRelativePosition(e, me._chart);

                var model = me._model;
                me.update(true);
                me.pivot();

                // See if our tooltip position changed
                changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
            }

            return changed;
        }
    });

    /**
     * @namespace Chart.Tooltip.positioners
     */
    Chart.Tooltip.positioners = {
        /**
         * Average mode places the tooltip at the average position of the elements shown
         * @function Chart.Tooltip.positioners.average
         * @param elements {ChartElement[]} the elements being displayed in the tooltip
         * @returns {Point} tooltip position
         */
        average: function(elements) {
            if (!elements.length) {
                return false;
            }

            var i, len;
            var x = 0;
            var y = 0;
            var count = 0;

            for (i = 0, len = elements.length; i < len; ++i) {
                var el = elements[i];
                if (el && el.hasValue()) {
                    var pos = el.tooltipPosition();
                    x += pos.x;
                    y += pos.y;
                    ++count;
                }
            }

            return {
                x: Math.round(x / count),
                y: Math.round(y / count)
            };
        },

        /**
         * Gets the tooltip position nearest of the item nearest to the event position
         * @function Chart.Tooltip.positioners.nearest
         * @param elements {Chart.Element[]} the tooltip elements
         * @param eventPosition {Point} the position of the event in canvas coordinates
         * @returns {Point} the tooltip position
         */
        nearest: function(elements, eventPosition) {
            var x = eventPosition.x;
            var y = eventPosition.y;

            var nearestElement;
            var minDistance = Number.POSITIVE_INFINITY;
            var i, len;
            for (i = 0, len = elements.length; i < len; ++i) {
                var el = elements[i];
                if (el && el.hasValue()) {
                    var center = el.getCenterPoint();
                    var d = helpers.distanceBetweenPoints(eventPosition, center);

                    if (d < minDistance) {
                        minDistance = d;
                        nearestElement = el;
                    }
                }
            }

            if (nearestElement) {
                var tp = nearestElement.tooltipPosition();
                x = tp.x;
                y = tp.y;
            }

            return {
                x: x,
                y: y
            };
        }
    };
};

},{}],37:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers,
        globalOpts = Chart.defaults.global;

    globalOpts.elements.arc = {
        backgroundColor: globalOpts.defaultColor,
        borderColor: '#fff',
        borderWidth: 2
    };

    Chart.elements.Arc = Chart.Element.extend({
        inLabelRange: function(mouseX) {
            var vm = this._view;

            if (vm) {
                return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
            }
            return false;
        },
        inRange: function(chartX, chartY) {
            var vm = this._view;

            if (vm) {
                var pointRelativePosition = helpers.getAngleFromPoint(vm, {
                        x: chartX,
                        y: chartY
                    }),
                    angle = pointRelativePosition.angle,
                    distance = pointRelativePosition.distance;

                // Sanitise angle range
                var startAngle = vm.startAngle;
                var endAngle = vm.endAngle;
                while (endAngle < startAngle) {
                    endAngle += 2.0 * Math.PI;
                }
                while (angle > endAngle) {
                    angle -= 2.0 * Math.PI;
                }
                while (angle < startAngle) {
                    angle += 2.0 * Math.PI;
                }

                // Check if within the range of the open/close angle
                var betweenAngles = (angle >= startAngle && angle <= endAngle),
                    withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

                return (betweenAngles && withinRadius);
            }
            return false;
        },
        getCenterPoint: function() {
            var vm = this._view;
            var halfAngle = (vm.startAngle + vm.endAngle) / 2;
            var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
            return {
                x: vm.x + Math.cos(halfAngle) * halfRadius,
                y: vm.y + Math.sin(halfAngle) * halfRadius
            };
        },
        getArea: function() {
            var vm = this._view;
            return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
        },
        tooltipPosition: function() {
            var vm = this._view;

            var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
                rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
            return {
                x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
                y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
            };
        },
        draw: function() {

            var ctx = this._chart.ctx,
                vm = this._view,
                sA = vm.startAngle,
                eA = vm.endAngle;

            ctx.beginPath();

            ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
            ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

            ctx.closePath();
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = vm.borderWidth;

            ctx.fillStyle = vm.backgroundColor;

            ctx.fill();
            ctx.lineJoin = 'bevel';

            if (vm.borderWidth) {
                ctx.stroke();
            }
        }
    });
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;
    var globalDefaults = Chart.defaults.global;

    Chart.defaults.global.elements.line = {
        tension: 0.4,
        backgroundColor: globalDefaults.defaultColor,
        borderWidth: 3,
        borderColor: globalDefaults.defaultColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        capBezierPoints: true,
        fill: true, // do we fill in the area between the line and its base axis
    };

    Chart.elements.Line = Chart.Element.extend({
        draw: function() {
            var me = this;
            var vm = me._view;
            var spanGaps = vm.spanGaps;
            var fillPoint = vm.scaleZero;
            var loop = me._loop;

            // Handle different fill modes for cartesian lines
            if (!loop) {
                if (vm.fill === 'top') {
                    fillPoint = vm.scaleTop;
                } else if (vm.fill === 'bottom') {
                    fillPoint = vm.scaleBottom;
                }
            }

            var ctx = me._chart.ctx;
            ctx.save();

            // Helper function to draw a line to a point
            function lineToPoint(previousPoint, point) {
                var pointVM = point._view;
                if (point._view.steppedLine === true) {
                    ctx.lineTo(pointVM.x, previousPoint._view.y);
                    ctx.lineTo(pointVM.x, pointVM.y);
                } else if (point._view.tension === 0) {
                    ctx.lineTo(pointVM.x, pointVM.y);
                } else {
                    ctx.bezierCurveTo(
                        previousPoint._view.controlPointNextX,
                        previousPoint._view.controlPointNextY,
                        pointVM.controlPointPreviousX,
                        pointVM.controlPointPreviousY,
                        pointVM.x,
                        pointVM.y
                    );
                }
            }

            var points = me._children.slice(); // clone array
            var lastDrawnIndex = -1;

            // If we are looping, adding the first point again
            if (loop && points.length) {
                points.push(points[0]);
            }

            var index, current, previous, currentVM;

            // Fill Line
            if (points.length && vm.fill) {
                ctx.beginPath();

                for (index = 0; index < points.length; ++index) {
                    current = points[index];
                    previous = helpers.previousItem(points, index);
                    currentVM = current._view;

                    // First point moves to it's starting position no matter what
                    if (index === 0) {
                        if (loop) {
                            ctx.moveTo(fillPoint.x, fillPoint.y);
                        } else {
                            ctx.moveTo(currentVM.x, fillPoint);
                        }

                        if (!currentVM.skip) {
                            lastDrawnIndex = index;
                            ctx.lineTo(currentVM.x, currentVM.y);
                        }
                    } else {
                        previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

                        if (currentVM.skip) {
                            // Only do this if this is the first point that is skipped
                            if (!spanGaps && lastDrawnIndex === (index - 1)) {
                                if (loop) {
                                    ctx.lineTo(fillPoint.x, fillPoint.y);
                                } else {
                                    ctx.lineTo(previous._view.x, fillPoint);
                                }
                            }
                        } else {
                            if (lastDrawnIndex !== (index - 1)) {
                                // There was a gap and this is the first point after the gap. If we've never drawn a point, this is a special case.
                                // If the first data point is NaN, then there is no real gap to skip
                                if (spanGaps && lastDrawnIndex !== -1) {
                                    // We are spanning the gap, so simple draw a line to this point
                                    lineToPoint(previous, current);
                                } else if (loop) {
                                    ctx.lineTo(currentVM.x, currentVM.y);
                                } else {
                                    ctx.lineTo(currentVM.x, fillPoint);
                                    ctx.lineTo(currentVM.x, currentVM.y);
                                }
                            } else {
                                // Line to next point
                                lineToPoint(previous, current);
                            }
                            lastDrawnIndex = index;
                        }
                    }
                }

                if (!loop && lastDrawnIndex !== -1) {
                    ctx.lineTo(points[lastDrawnIndex]._view.x, fillPoint);
                }

                ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
                ctx.closePath();
                ctx.fill();
            }

            // Stroke Line Options
            var globalOptionLineElements = globalDefaults.elements.line;
            ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

            // IE 9 and 10 do not support line dash
            if (ctx.setLineDash) {
                ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
            }

            ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
            ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
            ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
            ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

            // Stroke Line
            ctx.beginPath();
            lastDrawnIndex = -1;

            for (index = 0; index < points.length; ++index) {
                current = points[index];
                previous = helpers.previousItem(points, index);
                currentVM = current._view;

                // First point moves to it's starting position no matter what
                if (index === 0) {
                    if (!currentVM.skip) {
                        ctx.moveTo(currentVM.x, currentVM.y);
                        lastDrawnIndex = index;
                    }
                } else {
                    previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

                    if (!currentVM.skip) {
                        if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
                            // There was a gap and this is the first point after the gap
                            ctx.moveTo(currentVM.x, currentVM.y);
                        } else {
                            // Line to next point
                            lineToPoint(previous, current);
                        }
                        lastDrawnIndex = index;
                    }
                }
            }

            ctx.stroke();
            ctx.restore();
        }
    });
};

},{}],39:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers,
        globalOpts = Chart.defaults.global,
        defaultColor = globalOpts.defaultColor;

    globalOpts.elements.point = {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: defaultColor,
        borderWidth: 1,
        borderColor: defaultColor,
        // Hover
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
    };

    function xRange(mouseX) {
        var vm = this._view;
        return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
    }

    function yRange(mouseY) {
        var vm = this._view;
        return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
    }

    Chart.elements.Point = Chart.Element.extend({
        inRange: function(mouseX, mouseY) {
            var vm = this._view;
            return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
        },

        inLabelRange: xRange,
        inXRange: xRange,
        inYRange: yRange,

        getCenterPoint: function() {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y
            };
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function() {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y,
                padding: vm.radius + vm.borderWidth
            };
        },
        draw: function() {
            var vm = this._view;
            var ctx = this._chart.ctx;
            var pointStyle = vm.pointStyle;
            var radius = vm.radius;
            var x = vm.x;
            var y = vm.y;

            if (vm.skip) {
                return;
            }

            ctx.strokeStyle = vm.borderColor || defaultColor;
            ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
            ctx.fillStyle = vm.backgroundColor || defaultColor;

            Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
        }
    });
};

},{}],40:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var globalOpts = Chart.defaults.global;

    globalOpts.elements.rectangle = {
        backgroundColor: globalOpts.defaultColor,
        borderWidth: 0,
        borderColor: globalOpts.defaultColor,
        borderSkipped: 'bottom'
    };

    function isVertical(bar) {
        return bar._view.width !== undefined;
    }

    /**
     * Helper function to get the bounds of the bar regardless of the orientation
     * @private
     * @param bar {Chart.Element.Rectangle} the bar
     * @return {Bounds} bounds of the bar
     */
    function getBarBounds(bar) {
        var vm = bar._view;
        var x1, x2, y1, y2;

        if (isVertical(bar)) {
            // vertical
            var halfWidth = vm.width / 2;
            x1 = vm.x - halfWidth;
            x2 = vm.x + halfWidth;
            y1 = Math.min(vm.y, vm.base);
            y2 = Math.max(vm.y, vm.base);
        } else {
            // horizontal bar
            var halfHeight = vm.height / 2;
            x1 = Math.min(vm.x, vm.base);
            x2 = Math.max(vm.x, vm.base);
            y1 = vm.y - halfHeight;
            y2 = vm.y + halfHeight;
        }

        return {
            left: x1,
            top: y1,
            right: x2,
            bottom: y2
        };
    }

    Chart.elements.Rectangle = Chart.Element.extend({
        draw: function() {
            var ctx = this._chart.ctx;
            var vm = this._view;

            var halfWidth = vm.width / 2,
                leftX = vm.x - halfWidth,
                rightX = vm.x + halfWidth,
                top = vm.base - (vm.base - vm.y),
                halfStroke = vm.borderWidth / 2;

            // Canvas doesn't allow us to stroke inside the width so we can
            // adjust the sizes to fit if we're setting a stroke on the line
            if (vm.borderWidth) {
                leftX += halfStroke;
                rightX -= halfStroke;
                top += halfStroke;
            }

            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = vm.borderWidth;

            // Corner points, from bottom-left to bottom-right clockwise
            // | 1 2 |
            // | 0 3 |
            var corners = [
                [leftX, vm.base],
                [leftX, top],
                [rightX, top],
                [rightX, vm.base]
            ];

            // Find first (starting) corner with fallback to 'bottom'
            var borders = ['bottom', 'left', 'top', 'right'];
            var startCorner = borders.indexOf(vm.borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }

            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }

            // Draw rectangle from 'startCorner'
            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);

            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                ctx.lineTo(corner[0], corner[1]);
            }

            ctx.fill();
            if (vm.borderWidth) {
                ctx.stroke();
            }
        },
        height: function() {
            var vm = this._view;
            return vm.base - vm.y;
        },
        inRange: function(mouseX, mouseY) {
            var inRange = false;

            if (this._view) {
                var bounds = getBarBounds(this);
                inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
            }

            return inRange;
        },
        inLabelRange: function(mouseX, mouseY) {
            var me = this;
            if (!me._view) {
                return false;
            }

            var inRange = false;
            var bounds = getBarBounds(me);

            if (isVertical(me)) {
                inRange = mouseX >= bounds.left && mouseX <= bounds.right;
            } else {
                inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
            }

            return inRange;
        },
        inXRange: function(mouseX) {
            var bounds = getBarBounds(this);
            return mouseX >= bounds.left && mouseX <= bounds.right;
        },
        inYRange: function(mouseY) {
            var bounds = getBarBounds(this);
            return mouseY >= bounds.top && mouseY <= bounds.bottom;
        },
        getCenterPoint: function() {
            var vm = this._view;
            var x, y;
            if (isVertical(this)) {
                x = vm.x;
                y = (vm.y + vm.base) / 2;
            } else {
                x = (vm.x + vm.base) / 2;
                y = vm.y;
            }

            return {x: x, y: y};
        },
        getArea: function() {
            var vm = this._view;
            return vm.width * Math.abs(vm.y - vm.base);
        },
        tooltipPosition: function() {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y
            };
        }
    });

};

},{}],41:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;
    // Default config for a category scale
    var defaultConfig = {
        position: 'bottom'
    };

    var DatasetScale = Chart.Scale.extend({
        /**
        * Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
        * else fall back to data.labels
        * @private
        */
        getLabels: function() {
            var data = this.chart.data;
            return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
        },
        // Implement this so that
        determineDataLimits: function() {
            var me = this;
            var labels = me.getLabels();
            me.minIndex = 0;
            me.maxIndex = labels.length - 1;
            var findIndex;

            if (me.options.ticks.min !== undefined) {
                // user specified min value
                findIndex = helpers.indexOf(labels, me.options.ticks.min);
                me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
            }

            if (me.options.ticks.max !== undefined) {
                // user specified max value
                findIndex = helpers.indexOf(labels, me.options.ticks.max);
                me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
            }

            me.min = labels[me.minIndex];
            me.max = labels[me.maxIndex];
        },

        buildTicks: function() {
            var me = this;
            var labels = me.getLabels();
            // If we are viewing some subset of labels, slice the original array
            me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
        },

        getLabelForIndex: function(index, datasetIndex) {
            var me = this;
            var data = me.chart.data;
            var isHorizontal = me.isHorizontal();

            if ((data.xLabels && isHorizontal) || (data.yLabels && !isHorizontal)) {
                return me.getRightValue(data.datasets[datasetIndex].data[index]);
            }
            return me.ticks[index];
        },

        // Used to get data value locations.  Value can either be an index or a numerical value
        getPixelForValue: function(value, index, datasetIndex, includeOffset) {
            var me = this;
            // 1 is added because we need the length but we have the indexes
            var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

            if (value !== undefined && isNaN(index)) {
                var labels = me.getLabels();
                var idx = labels.indexOf(value);
                index = idx !== -1 ? idx : index;
            }

            if (me.isHorizontal()) {
                var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
                var valueWidth = innerWidth / offsetAmt;
                var widthOffset = (valueWidth * (index - me.minIndex)) + me.paddingLeft;

                if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
                    widthOffset += (valueWidth / 2);
                }

                return me.left + Math.round(widthOffset);
            }
            var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
            var valueHeight = innerHeight / offsetAmt;
            var heightOffset = (valueHeight * (index - me.minIndex)) + me.paddingTop;

            if (me.options.gridLines.offsetGridLines && includeOffset) {
                heightOffset += (valueHeight / 2);
            }

            return me.top + Math.round(heightOffset);
        },
        getPixelForTick: function(index, includeOffset) {
            return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
        },
        getValueForPixel: function(pixel) {
            var me = this;
            var value;
            var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
            var horz = me.isHorizontal();
            var innerDimension = horz ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
            var valueDimension = innerDimension / offsetAmt;

            pixel -= horz ? me.left : me.top;

            if (me.options.gridLines.offsetGridLines) {
                pixel -= (valueDimension / 2);
            }
            pixel -= horz ? me.paddingLeft : me.paddingTop;

            if (pixel <= 0) {
                value = 0;
            } else {
                value = Math.round(pixel / valueDimension);
            }

            return value;
        },
        getBasePixel: function() {
            return this.bottom;
        }
    });

    Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],42:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    var defaultConfig = {
        position: 'left',
        ticks: {
            callback: Chart.Ticks.formatters.linear
        }
    };

    var LinearScale = Chart.LinearScaleBase.extend({
        determineDataLimits: function() {
            var me = this;
            var opts = me.options;
            var chart = me.chart;
            var data = chart.data;
            var datasets = data.datasets;
            var isHorizontal = me.isHorizontal();

            function IDMatches(meta) {
                return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
            }

            // First Calculate the range
            me.min = null;
            me.max = null;

            if (opts.stacked) {
                var valuesPerType = {};

                helpers.each(datasets, function(dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (valuesPerType[meta.type] === undefined) {
                        valuesPerType[meta.type] = {
                            positiveValues: [],
                            negativeValues: []
                        };
                    }

                    // Store these per type
                    var positiveValues = valuesPerType[meta.type].positiveValues;
                    var negativeValues = valuesPerType[meta.type].negativeValues;

                    if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                        helpers.each(dataset.data, function(rawValue, index) {
                            var value = +me.getRightValue(rawValue);
                            if (isNaN(value) || meta.data[index].hidden) {
                                return;
                            }

                            positiveValues[index] = positiveValues[index] || 0;
                            negativeValues[index] = negativeValues[index] || 0;

                            if (opts.relativePoints) {
                                positiveValues[index] = 100;
                            } else if (value < 0) {
                                negativeValues[index] += value;
                            } else {
                                positiveValues[index] += value;
                            }
                        });
                    }
                });

                helpers.each(valuesPerType, function(valuesForType) {
                    var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
                    var minVal = helpers.min(values);
                    var maxVal = helpers.max(values);
                    me.min = me.min === null ? minVal : Math.min(me.min, minVal);
                    me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
                });

            } else {
                helpers.each(datasets, function(dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                        helpers.each(dataset.data, function(rawValue, index) {
                            var value = +me.getRightValue(rawValue);
                            if (isNaN(value) || meta.data[index].hidden) {
                                return;
                            }

                            if (me.min === null) {
                                me.min = value;
                            } else if (value < me.min) {
                                me.min = value;
                            }

                            if (me.max === null) {
                                me.max = value;
                            } else if (value > me.max) {
                                me.max = value;
                            }
                        });
                    }
                });
            }

            // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
            this.handleTickRangeOptions();
        },
        getTickLimit: function() {
            var maxTicks;
            var me = this;
            var tickOpts = me.options.ticks;

            if (me.isHorizontal()) {
                maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
            } else {
                // The factor of 2 used to scale the font size has been experimentally determined.
                var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
                maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
            }

            return maxTicks;
        },
        // Called after the ticks are built. We need
        handleDirectionalChanges: function() {
            if (!this.isHorizontal()) {
                // We are in a vertical orientation. The top value is the highest. So reverse the array
                this.ticks.reverse();
            }
        },
        getLabelForIndex: function(index, datasetIndex) {
            return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
        },
        // Utils
        getPixelForValue: function(value) {
            // This must be called after fit has been run so that
            // this.left, this.top, this.right, and this.bottom have been defined
            var me = this;
            var paddingLeft = me.paddingLeft;
            var paddingBottom = me.paddingBottom;
            var start = me.start;

            var rightValue = +me.getRightValue(value);
            var pixel;
            var innerDimension;
            var range = me.end - start;

            if (me.isHorizontal()) {
                innerDimension = me.width - (paddingLeft + me.paddingRight);
                pixel = me.left + (innerDimension / range * (rightValue - start));
                return Math.round(pixel + paddingLeft);
            }
            innerDimension = me.height - (me.paddingTop + paddingBottom);
            pixel = (me.bottom - paddingBottom) - (innerDimension / range * (rightValue - start));
            return Math.round(pixel);
        },
        getValueForPixel: function(pixel) {
            var me = this;
            var isHorizontal = me.isHorizontal();
            var paddingLeft = me.paddingLeft;
            var paddingBottom = me.paddingBottom;
            var innerDimension = isHorizontal ? me.width - (paddingLeft + me.paddingRight) : me.height - (me.paddingTop + paddingBottom);
            var offset = (isHorizontal ? pixel - me.left - paddingLeft : me.bottom - paddingBottom - pixel) / innerDimension;
            return me.start + ((me.end - me.start) * offset);
        },
        getPixelForTick: function(index) {
            return this.getPixelForValue(this.ticksAsNumbers[index]);
        }
    });
    Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{}],43:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers,
        noop = helpers.noop;

    Chart.LinearScaleBase = Chart.Scale.extend({
        handleTickRangeOptions: function() {
            var me = this;
            var opts = me.options;
            var tickOpts = opts.ticks;

            // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
            // do nothing since that would make the chart weird. If the user really wants a weird chart
            // axis, they can manually override it
            if (tickOpts.beginAtZero) {
                var minSign = helpers.sign(me.min);
                var maxSign = helpers.sign(me.max);

                if (minSign < 0 && maxSign < 0) {
                    // move the top up to 0
                    me.max = 0;
                } else if (minSign > 0 && maxSign > 0) {
                    // move the bottom down to 0
                    me.min = 0;
                }
            }

            if (tickOpts.min !== undefined) {
                me.min = tickOpts.min;
            } else if (tickOpts.suggestedMin !== undefined) {
                me.min = Math.min(me.min, tickOpts.suggestedMin);
            }

            if (tickOpts.max !== undefined) {
                me.max = tickOpts.max;
            } else if (tickOpts.suggestedMax !== undefined) {
                me.max = Math.max(me.max, tickOpts.suggestedMax);
            }

            if (me.min === me.max) {
                me.max++;

                if (!tickOpts.beginAtZero) {
                    me.min--;
                }
            }
        },
        getTickLimit: noop,
        handleDirectionalChanges: noop,

        buildTicks: function() {
            var me = this;
            var opts = me.options;
            var tickOpts = opts.ticks;

            // Figure out what the max number of ticks we can support it is based on the size of
            // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
            // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
            // the graph. Make sure we always have at least 2 ticks
            var maxTicks = me.getTickLimit();
            maxTicks = Math.max(2, maxTicks);

            var numericGeneratorOptions = {
                maxTicks: maxTicks,
                min: tickOpts.min,
                max: tickOpts.max,
                stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
            };
            var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);

            me.handleDirectionalChanges();

            // At this point, we need to update our max and min given the tick values since we have expanded the
            // range of the scale
            me.max = helpers.max(ticks);
            me.min = helpers.min(ticks);

            if (tickOpts.reverse) {
                ticks.reverse();

                me.start = me.max;
                me.end = me.min;
            } else {
                me.start = me.min;
                me.end = me.max;
            }
        },
        convertTicksToLabels: function() {
            var me = this;
            me.ticksAsNumbers = me.ticks.slice();
            me.zeroLineIndex = me.ticks.indexOf(0);

            Chart.Scale.prototype.convertTicksToLabels.call(me);
        }
    });
};

},{}],44:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;

    var defaultConfig = {
        position: 'left',

        // label settings
        ticks: {
            callback: Chart.Ticks.formatters.logarithmic
        }
    };

    var LogarithmicScale = Chart.Scale.extend({
        determineDataLimits: function() {
            var me = this;
            var opts = me.options;
            var tickOpts = opts.ticks;
            var chart = me.chart;
            var data = chart.data;
            var datasets = data.datasets;
            var getValueOrDefault = helpers.getValueOrDefault;
            var isHorizontal = me.isHorizontal();
            function IDMatches(meta) {
                return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
            }

            // Calculate Range
            me.min = null;
            me.max = null;
            me.minNotZero = null;

            if (opts.stacked) {
                var valuesPerType = {};

                helpers.each(datasets, function(dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                        if (valuesPerType[meta.type] === undefined) {
                            valuesPerType[meta.type] = [];
                        }

                        helpers.each(dataset.data, function(rawValue, index) {
                            var values = valuesPerType[meta.type];
                            var value = +me.getRightValue(rawValue);
                            if (isNaN(value) || meta.data[index].hidden) {
                                return;
                            }

                            values[index] = values[index] || 0;

                            if (opts.relativePoints) {
                                values[index] = 100;
                            } else {
                                // Don't need to split positive and negative since the log scale can't handle a 0 crossing
                                values[index] += value;
                            }
                        });
                    }
                });

                helpers.each(valuesPerType, function(valuesForType) {
                    var minVal = helpers.min(valuesForType);
                    var maxVal = helpers.max(valuesForType);
                    me.min = me.min === null ? minVal : Math.min(me.min, minVal);
                    me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
                });

            } else {
                helpers.each(datasets, function(dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                        helpers.each(dataset.data, function(rawValue, index) {
                            var value = +me.getRightValue(rawValue);
                            if (isNaN(value) || meta.data[index].hidden) {
                                return;
                            }

                            if (me.min === null) {
                                me.min = value;
                            } else if (value < me.min) {
                                me.min = value;
                            }

                            if (me.max === null) {
                                me.max = value;
                            } else if (value > me.max) {
                                me.max = value;
                            }

                            if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
                                me.minNotZero = value;
                            }
                        });
                    }
                });
            }

            me.min = getValueOrDefault(tickOpts.min, me.min);
            me.max = getValueOrDefault(tickOpts.max, me.max);

            if (me.min === me.max) {
                if (me.min !== 0 && me.min !== null) {
                    me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
                    me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
                } else {
                    me.min = 1;
                    me.max = 10;
                }
            }
        },
        buildTicks: function() {
            var me = this;
            var opts = me.options;
            var tickOpts = opts.ticks;

            var generationOptions = {
                min: tickOpts.min,
                max: tickOpts.max
            };
            var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);

            if (!me.isHorizontal()) {
                // We are in a vertical orientation. The top value is the highest. So reverse the array
                ticks.reverse();
            }

            // At this point, we need to update our max and min given the tick values since we have expanded the
            // range of the scale
            me.max = helpers.max(ticks);
            me.min = helpers.min(ticks);

            if (tickOpts.reverse) {
                ticks.reverse();

                me.start = me.max;
                me.end = me.min;
            } else {
                me.start = me.min;
                me.end = me.max;
            }
        },
        convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice();

            Chart.Scale.prototype.convertTicksToLabels.call(this);
        },
        // Get the correct tooltip label
        getLabelForIndex: function(index, datasetIndex) {
            return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
        },
        getPixelForTick: function(index) {
            return this.getPixelForValue(this.tickValues[index]);
        },
        getPixelForValue: function(value) {
            var me = this;
            var innerDimension;
            var pixel;

            var start = me.start;
            var newVal = +me.getRightValue(value);
            var range;
            var paddingTop = me.paddingTop;
            var paddingBottom = me.paddingBottom;
            var paddingLeft = me.paddingLeft;
            var opts = me.options;
            var tickOpts = opts.ticks;

            if (me.isHorizontal()) {
                range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
                if (newVal === 0) {
                    pixel = me.left + paddingLeft;
                } else {
                    innerDimension = me.width - (paddingLeft + me.paddingRight);
                    pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
                    pixel += paddingLeft;
                }
            } else {
                // Bottom - top since pixels increase downward on a screen
                innerDimension = me.height - (paddingTop + paddingBottom);
                if (start === 0 && !tickOpts.reverse) {
                    range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
                    if (newVal === start) {
                        pixel = me.bottom - paddingBottom;
                    } else if (newVal === me.minNotZero) {
                        pixel = me.bottom - paddingBottom - innerDimension * 0.02;
                    } else {
                        pixel = me.bottom - paddingBottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
                    }
                } else if (me.end === 0 && tickOpts.reverse) {
                    range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
                    if (newVal === me.end) {
                        pixel = me.top + paddingTop;
                    } else if (newVal === me.minNotZero) {
                        pixel = me.top + paddingTop + innerDimension * 0.02;
                    } else {
                        pixel = me.top + paddingTop + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
                    }
                } else {
                    range = helpers.log10(me.end) - helpers.log10(start);
                    innerDimension = me.height - (paddingTop + paddingBottom);
                    pixel = (me.bottom - paddingBottom) - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
                }
            }
            return pixel;
        },
        getValueForPixel: function(pixel) {
            var me = this;
            var range = helpers.log10(me.end) - helpers.log10(me.start);
            var value, innerDimension;

            if (me.isHorizontal()) {
                innerDimension = me.width - (me.paddingLeft + me.paddingRight);
                value = me.start * Math.pow(10, (pixel - me.left - me.paddingLeft) * range / innerDimension);
            } else {  // todo: if start === 0
                innerDimension = me.height - (me.paddingTop + me.paddingBottom);
                value = Math.pow(10, (me.bottom - me.paddingBottom - pixel) * range / innerDimension) / me.start;
            }
            return value;
        }
    });
    Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{}],45:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

    var helpers = Chart.helpers;
    var globalDefaults = Chart.defaults.global;

    var defaultConfig = {
        display: true,

        // Boolean - Whether to animate scaling the chart from the centre
        animate: true,
        lineArc: false,
        position: 'chartArea',

        angleLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1
        },

        // label settings
        ticks: {
            // Boolean - Show a backdrop to the scale label
            showLabelBackdrop: true,

            // String - The colour of the label backdrop
            backdropColor: 'rgba(255,255,255,0.75)',

            // Number - The backdrop padding above & below the label in pixels
            backdropPaddingY: 2,

            // Number - The backdrop padding to the side of the label in pixels
            backdropPaddingX: 2,

            callback: Chart.Ticks.formatters.linear
        },

        pointLabels: {
            // Number - Point label font size in pixels
            fontSize: 10,

            // Function - Used to convert point labels
            callback: function(label) {
                return label;
            }
        }
    };

    var LinearRadialScale = Chart.LinearScaleBase.extend({
        getValueCount: function() {
            return this.chart.data.labels.length;
        },
        setDimensions: function() {
            var me = this;
            var opts = me.options;
            var tickOpts = opts.ticks;
            // Set the unconstrained dimension before label rotation
            me.width = me.maxWidth;
            me.height = me.maxHeight;
            me.xCenter = Math.round(me.width / 2);
            me.yCenter = Math.round(me.height / 2);

            var minSize = helpers.min([me.height, me.width]);
            var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
            me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
        },
        determineDataLimits: function() {
            var me = this;
            var chart = me.chart;
            me.min = null;
            me.max = null;


            helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
                if (chart.isDatasetVisible(datasetIndex)) {
                    var meta = chart.getDatasetMeta(datasetIndex);

                    helpers.each(dataset.data, function(rawValue, index) {
                        var value = +me.getRightValue(rawValue);
                        if (isNaN(value) || meta.data[index].hidden) {
                            return;
                        }

                        if (me.min === null) {
                            me.min = value;
                        } else if (value < me.min) {
                            me.min = value;
                        }

                        if (me.max === null) {
                            me.max = value;
                        } else if (value > me.max) {
                            me.max = value;
                        }
                    });
                }
            });

            // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
            me.handleTickRangeOptions();
        },
        getTickLimit: function() {
            var tickOpts = this.options.ticks;
            var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
            return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
        },
        convertTicksToLabels: function() {
            var me = this;
            Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

            // Point labels
            me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
        },
        getLabelForIndex: function(index, datasetIndex) {
            return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
        },
        fit: function() {
            /*
             * Right, this is really confusing and there is a lot of maths going on here
             * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
             *
             * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
             *
             * Solution:
             *
             * We assume the radius of the polygon is half the size of the canvas at first
             * at each index we check if the text overlaps.
             *
             * Where it does, we store that angle and that index.
             *
             * After finding the largest index and angle we calculate how much we need to remove
             * from the shape radius to move the point inwards by that x.
             *
             * We average the left and right distances to get the maximum shape radius that can fit in the box
             * along with labels.
             *
             * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
             * on each side, removing that from the size, halving it and adding the left x protrusion width.
             *
             * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
             * and position it in the most space efficient manner
             *
             * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
             */

            var pointLabels = this.options.pointLabels;
            var pointLabelFontSize = helpers.getValueOrDefault(pointLabels.fontSize, globalDefaults.defaultFontSize);
            var pointLabeFontStyle = helpers.getValueOrDefault(pointLabels.fontStyle, globalDefaults.defaultFontStyle);
            var pointLabeFontFamily = helpers.getValueOrDefault(pointLabels.fontFamily, globalDefaults.defaultFontFamily);
            var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

            // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
            // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
            var largestPossibleRadius = helpers.min([(this.height / 2 - pointLabelFontSize - 5), this.width / 2]),
                pointPosition,
                i,
                textWidth,
                halfTextWidth,
                furthestRight = this.width,
                furthestRightIndex,
                furthestRightAngle,
                furthestLeft = 0,
                furthestLeftIndex,
                furthestLeftAngle,
                xProtrusionLeft,
                xProtrusionRight,
                radiusReductionRight,
                radiusReductionLeft;
            this.ctx.font = pointLabeFont;

            for (i = 0; i < this.getValueCount(); i++) {
                // 5px to space the text slightly out - similar to what we do in the draw function.
                pointPosition = this.getPointPosition(i, largestPossibleRadius);
                textWidth = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : '').width + 5;

                // Add quarter circle to make degree 0 mean top of circle
                var angleRadians = this.getIndexAngle(i) + (Math.PI / 2);
                var angle = (angleRadians * 360 / (2 * Math.PI)) % 360;

                if (angle === 0 || angle === 180) {
                    // At angle 0 and 180, we're at exactly the top/bottom
                    // of the radar chart, so text will be aligned centrally, so we'll half it and compare
                    // w/left and right text sizes
                    halfTextWidth = textWidth / 2;
                    if (pointPosition.x + halfTextWidth > furthestRight) {
                        furthestRight = pointPosition.x + halfTextWidth;
                        furthestRightIndex = i;
                    }
                    if (pointPosition.x - halfTextWidth < furthestLeft) {
                        furthestLeft = pointPosition.x - halfTextWidth;
                        furthestLeftIndex = i;
                    }
                } else if (angle < 180) {
                    // Less than half the values means we'll left align the text
                    if (pointPosition.x + textWidth > furthestRight) {
                        furthestRight = pointPosition.x + textWidth;
                        furthestRightIndex = i;
                    }
                // More than half the values means we'll right align the text
                } else if (pointPosition.x - textWidth < furthestLeft) {
                    furthestLeft = pointPosition.x - textWidth;
                    furthestLeftIndex = i;
                }
            }

            xProtrusionLeft = furthestLeft;
            xProtrusionRight = Math.ceil(furthestRight - this.width);

            furthestRightAngle = this.getIndexAngle(furthestRightIndex);
            furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

            radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
            radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);

            // Ensure we actually need to reduce the size of the chart
            radiusReductionRight = (helpers.isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
            radiusReductionLeft = (helpers.isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

            this.drawingArea = Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2);
            this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
        },
        setCenterPoint: function(leftMovement, rightMovement) {
            var me = this;
            var maxRight = me.width - rightMovement - me.drawingArea,
                maxLeft = leftMovement + me.drawingArea;

            me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
            // Always vertically in the centre as the text height doesn't change
            me.yCenter = Math.round((me.height / 2) + me.top);
        },

        getIndexAngle: function(index) {
            var angleMultiplier = (Math.PI * 2) / this.getValueCount();
            var startAngle = this.chart.options && this.chart.options.startAngle ?
                this.chart.options.startAngle :
                0;

            var startAngleRadians = startAngle * Math.PI * 2 / 360;

            // Start from the top instead of right, so remove a quarter of the circle
            return index * angleMultiplier - (Math.PI / 2) + startAngleRadians;
        },
        getDistanceFromCenterForValue: function(value) {
            var me = this;

            if (value === null) {
                return 0; // null always in center
            }

            // Take into account half font size + the yPadding of the top value
            var scalingFactor = me.drawingArea / (me.max - me.min);
            if (me.options.reverse) {
                return (me.max - value) * scalingFactor;
            }
            return (value - me.min) * scalingFactor;
        },
        getPointPosition: function(index, distanceFromCenter) {
            var me = this;
            var thisAngle = me.getIndexAngle(index);
            return {
                x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
                y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
            };
        },
        getPointPositionForValue: function(index, value) {
            return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
        },

        getBasePosition: function() {
            var me = this;
            var min = me.min;
            var max = me.max;

            return me.getPointPositionForValue(0,
                me.beginAtZero? 0:
                min < 0 && max < 0? max :
                min > 0 && max > 0? min :
                0);
        },

        draw: function() {
            var me = this;
            var opts = me.options;
            var gridLineOpts = opts.gridLines;
            var tickOpts = opts.ticks;
            var angleLineOpts = opts.angleLines;
            var pointLabelOpts = opts.pointLabels;
            var getValueOrDefault = helpers.getValueOrDefault;

            if (opts.display) {
                var ctx = me.ctx;

                // Tick Font
                var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
                var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
                var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
                var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

                helpers.each(me.ticks, function(label, index) {
                    // Don't draw a centre value (if it is minimum)
                    if (index > 0 || opts.reverse) {
                        var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
                        var yHeight = me.yCenter - yCenterOffset;

                        // Draw circular lines around the scale
                        if (gridLineOpts.display && index !== 0) {
                            ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
                            ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

                            if (opts.lineArc) {
                                // Draw circular arcs between the points
                                ctx.beginPath();
                                ctx.arc(me.xCenter, me.yCenter, yCenterOffset, 0, Math.PI * 2);
                                ctx.closePath();
                                ctx.stroke();
                            } else {
                                // Draw straight lines connecting each index
                                ctx.beginPath();
                                for (var i = 0; i < me.getValueCount(); i++) {
                                    var pointPosition = me.getPointPosition(i, yCenterOffset);
                                    if (i === 0) {
                                        ctx.moveTo(pointPosition.x, pointPosition.y);
                                    } else {
                                        ctx.lineTo(pointPosition.x, pointPosition.y);
                                    }
                                }
                                ctx.closePath();
                                ctx.stroke();
                            }
                        }

                        if (tickOpts.display) {
                            var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
                            ctx.font = tickLabelFont;

                            if (tickOpts.showLabelBackdrop) {
                                var labelWidth = ctx.measureText(label).width;
                                ctx.fillStyle = tickOpts.backdropColor;
                                ctx.fillRect(
                                    me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
                                    yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
                                    labelWidth + tickOpts.backdropPaddingX * 2,
                                    tickFontSize + tickOpts.backdropPaddingY * 2
                                );
                            }

                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillStyle = tickFontColor;
                            ctx.fillText(label, me.xCenter, yHeight);
                        }
                    }
                });

                if (!opts.lineArc) {
                    ctx.lineWidth = angleLineOpts.lineWidth;
                    ctx.strokeStyle = angleLineOpts.color;

                    var outerDistance = me.getDistanceFromCenterForValue(opts.reverse ? me.min : me.max);

                    // Point Label Font
                    var pointLabelFontSize = getValueOrDefault(pointLabelOpts.fontSize, globalDefaults.defaultFontSize);
                    var pointLabeFontStyle = getValueOrDefault(pointLabelOpts.fontStyle, globalDefaults.defaultFontStyle);
                    var pointLabeFontFamily = getValueOrDefault(pointLabelOpts.fontFamily, globalDefaults.defaultFontFamily);
                    var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

                    for (var i = me.getValueCount() - 1; i >= 0; i--) {
                        if (angleLineOpts.display) {
                            var outerPosition = me.getPointPosition(i, outerDistance);
                            ctx.beginPath();
                            ctx.moveTo(me.xCenter, me.yCenter);
                            ctx.lineTo(outerPosition.x, outerPosition.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        // Extra 3px out for some label spacing
                        var pointLabelPosition = me.getPointPosition(i, outerDistance + 5);

                        // Keep this in loop since we may support array properties here
                        var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
                        ctx.font = pointLabeFont;
                        ctx.fillStyle = pointLabelFontColor;

                        var pointLabels = me.pointLabels;

                        // Add quarter circle to make degree 0 mean top of circle
                        var angleRadians = this.getIndexAngle(i) + (Math.PI / 2);
                        var angle = (angleRadians * 360 / (2 * Math.PI)) % 360;

                        if (angle === 0 || angle === 180) {
                            ctx.textAlign = 'center';
                        } else if (angle < 180) {
                            ctx.textAlign = 'left';
                        } else {
                            ctx.textAlign = 'right';
                        }

                        // Set the correct text baseline based on outer positioning
                        if (angle === 90 || angle === 270) {
                            ctx.textBaseline = 'middle';
                        } else if (angle > 270 || angle < 90) {
                            ctx.textBaseline = 'bottom';
                        } else {
                            ctx.textBaseline = 'top';
                        }

                        ctx.fillText(pointLabels[i] ? pointLabels[i] : '', pointLabelPosition.x, pointLabelPosition.y);
                    }
                }
            }
        }
    });
    Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{}],46:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(6);
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

    var helpers = Chart.helpers;
    var time = {
        units: [{
            name: 'millisecond',
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        }, {
            name: 'second',
            steps: [1, 2, 5, 10, 30]
        }, {
            name: 'minute',
            steps: [1, 2, 5, 10, 30]
        }, {
            name: 'hour',
            steps: [1, 2, 3, 6, 12]
        }, {
            name: 'day',
            steps: [1, 2, 5]
        }, {
            name: 'week',
            maxStep: 4
        }, {
            name: 'month',
            maxStep: 3
        }, {
            name: 'quarter',
            maxStep: 4
        }, {
            name: 'year',
            maxStep: false
        }]
    };

    var defaultConfig = {
        position: 'bottom',

        time: {
            parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
            format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
            unit: false, // false == automatic or override with week, month, year, etc.
            round: false, // none, or override with week, month, year, etc.
            displayFormat: false, // DEPRECATED
            isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
            minUnit: 'millisecond',

            // defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
            displayFormats: {
                millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
                second: 'h:mm:ss a', // 11:20:01 AM
                minute: 'h:mm:ss a', // 11:20:01 AM
                hour: 'MMM D, hA', // Sept 4, 5PM
                day: 'll', // Sep 4 2015
                week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                month: 'MMM YYYY', // Sept 2015
                quarter: '[Q]Q - YYYY', // Q3
                year: 'YYYY' // 2015
            }
        },
        ticks: {
            autoSkip: false
        }
    };

    var TimeScale = Chart.Scale.extend({
        initialize: function() {
            if (!moment) {
                throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
            }

            Chart.Scale.prototype.initialize.call(this);
        },
        getLabelMoment: function(datasetIndex, index) {
            if (datasetIndex === null || index === null) {
                return null;
            }

            if (typeof this.labelMoments[datasetIndex] !== 'undefined') {
                return this.labelMoments[datasetIndex][index];
            }

            return null;
        },
        getLabelDiff: function(datasetIndex, index) {
            var me = this;
            if (datasetIndex === null || index === null) {
                return null;
            }

            if (me.labelDiffs === undefined) {
                me.buildLabelDiffs();
            }

            if (typeof me.labelDiffs[datasetIndex] !== 'undefined') {
                return me.labelDiffs[datasetIndex][index];
            }

            return null;
        },
        getMomentStartOf: function(tick) {
            var me = this;
            if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
                return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
            }
            return tick.clone().startOf(me.tickUnit);
        },
        determineDataLimits: function() {
            var me = this;
            me.labelMoments = [];

            // Only parse these once. If the dataset does not have data as x,y pairs, we will use
            // these
            var scaleLabelMoments = [];
            if (me.chart.data.labels && me.chart.data.labels.length > 0) {
                helpers.each(me.chart.data.labels, function(label) {
                    var labelMoment = me.parseTime(label);

                    if (labelMoment.isValid()) {
                        if (me.options.time.round) {
                            labelMoment.startOf(me.options.time.round);
                        }
                        scaleLabelMoments.push(labelMoment);
                    }
                }, me);

                me.firstTick = moment.min.call(me, scaleLabelMoments);
                me.lastTick = moment.max.call(me, scaleLabelMoments);
            } else {
                me.firstTick = null;
                me.lastTick = null;
            }

            helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
                var momentsForDataset = [];
                var datasetVisible = me.chart.isDatasetVisible(datasetIndex);

                if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
                    helpers.each(dataset.data, function(value) {
                        var labelMoment = me.parseTime(me.getRightValue(value));

                        if (labelMoment.isValid()) {
                            if (me.options.time.round) {
                                labelMoment.startOf(me.options.time.round);
                            }
                            momentsForDataset.push(labelMoment);

                            if (datasetVisible) {
                                // May have gone outside the scale ranges, make sure we keep the first and last ticks updated
                                me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
                                me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
                            }
                        }
                    }, me);
                } else {
                    // We have no labels. Use the ones from the scale
                    momentsForDataset = scaleLabelMoments;
                }

                me.labelMoments.push(momentsForDataset);
            }, me);

            // Set these after we've done all the data
            if (me.options.time.min) {
                me.firstTick = me.parseTime(me.options.time.min);
            }

            if (me.options.time.max) {
                me.lastTick = me.parseTime(me.options.time.max);
            }

            // We will modify these, so clone for later
            me.firstTick = (me.firstTick || moment()).clone();
            me.lastTick = (me.lastTick || moment()).clone();
        },
        buildLabelDiffs: function() {
            var me = this;
            me.labelDiffs = [];
            var scaleLabelDiffs = [];
            // Parse common labels once
            if (me.chart.data.labels && me.chart.data.labels.length > 0) {
                helpers.each(me.chart.data.labels, function(label) {
                    var labelMoment = me.parseTime(label);

                    if (labelMoment.isValid()) {
                        if (me.options.time.round) {
                            labelMoment.startOf(me.options.time.round);
                        }
                        scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
                    }
                }, me);
            }

            helpers.each(me.chart.data.datasets, function(dataset) {
                var diffsForDataset = [];

                if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
                    helpers.each(dataset.data, function(value) {
                        var labelMoment = me.parseTime(me.getRightValue(value));

                        if (labelMoment.isValid()) {
                            if (me.options.time.round) {
                                labelMoment.startOf(me.options.time.round);
                            }
                            diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
                        }
                    }, me);
                } else {
                    // We have no labels. Use common ones
                    diffsForDataset = scaleLabelDiffs;
                }

                me.labelDiffs.push(diffsForDataset);
            }, me);
        },
        buildTicks: function() {
            var me = this;

            me.ctx.save();
            var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
            var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
            var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
            var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
            me.ctx.font = tickLabelFont;

            me.ticks = [];
            me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
            me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

            // Set unit override if applicable
            if (me.options.time.unit) {
                me.tickUnit = me.options.time.unit || 'day';
                me.displayFormat = me.options.time.displayFormats[me.tickUnit];
                me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
                me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
            } else {
                // Determine the smallest needed unit of the time
                var innerWidth = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);

                // Crude approximation of what the label length might be
                var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
                var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
                var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
                var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
                tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
                var labelCapacity = innerWidth / (tickLabelWidth);

                // Start as small as possible
                me.tickUnit = me.options.time.minUnit;
                me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
                me.displayFormat = me.options.time.displayFormats[me.tickUnit];

                var unitDefinitionIndex = 0;
                var unitDefinition = time.units[unitDefinitionIndex];

                // While we aren't ideal and we don't have units left
                while (unitDefinitionIndex < time.units.length) {
                    // Can we scale this unit. If `false` we can scale infinitely
                    me.unitScale = 1;

                    if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
                        // Use one of the predefined steps
                        for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
                            if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
                                me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
                                break;
                            }
                        }

                        break;
                    } else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
                        // We have a max step. Scale this unit
                        me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
                        break;
                    } else {
                        // Move to the next unit up
                        ++unitDefinitionIndex;
                        unitDefinition = time.units[unitDefinitionIndex];

                        me.tickUnit = unitDefinition.name;
                        var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
                        var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
                        me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
                        me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
                    }
                }
            }

            var roundedStart;

            // Only round the first tick if we have no hard minimum
            if (!me.options.time.min) {
                me.firstTick = me.getMomentStartOf(me.firstTick);
                roundedStart = me.firstTick;
            } else {
                roundedStart = me.getMomentStartOf(me.firstTick);
            }

            // Only round the last tick if we have no hard maximum
            if (!me.options.time.max) {
                var roundedEnd = me.getMomentStartOf(me.lastTick);
                var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
                if (delta < 0) {
                    // Do not use end of because we need me to be in the next time unit
                    me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
                } else if (delta >= 0) {
                    me.lastTick = roundedEnd;
                }

                me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
            }

            // Tick displayFormat override
            if (me.options.time.displayFormat) {
                me.displayFormat = me.options.time.displayFormat;
            }

            // first tick. will have been rounded correctly if options.time.min is not specified
            me.ticks.push(me.firstTick.clone());

            // For every unit in between the first and last moment, create a moment and add it to the ticks tick
            for (var i = 1; i <= me.scaleSizeInUnits; ++i) {
                var newTick = roundedStart.clone().add(i, me.tickUnit);

                // Are we greater than the max time
                if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
                    break;
                }

                if (i % me.unitScale === 0) {
                    me.ticks.push(newTick);
                }
            }

            // Always show the right tick
            var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
            if (diff !== 0 || me.scaleSizeInUnits === 0) {
                // this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
                // but the last tick was not rounded.
                if (me.options.time.max) {
                    me.ticks.push(me.lastTick.clone());
                    me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
                } else {
                    me.ticks.push(me.lastTick.clone());
                    me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
                }
            }

            me.ctx.restore();

            // Invalidate label diffs cache
            me.labelDiffs = undefined;
        },
        // Get tooltip label
        getLabelForIndex: function(index, datasetIndex) {
            var me = this;
            var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';

            if (typeof me.chart.data.datasets[datasetIndex].data[0] === 'object') {
                label = me.getRightValue(me.chart.data.datasets[datasetIndex].data[index]);
            }

            // Format nicely
            if (me.options.time.tooltipFormat) {
                label = me.parseTime(label).format(me.options.time.tooltipFormat);
            }

            return label;
        },
        // Function to format an individual tick mark
        tickFormatFunction: function(tick, index, ticks) {
            var formattedTick = tick.format(this.displayFormat);
            var tickOpts = this.options.ticks;
            var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);

            if (callback) {
                return callback(formattedTick, index, ticks);
            }
            return formattedTick;
        },
        convertTicksToLabels: function() {
            var me = this;
            me.tickMoments = me.ticks;
            me.ticks = me.ticks.map(me.tickFormatFunction, me);
        },
        getPixelForValue: function(value, index, datasetIndex) {
            var me = this;
            var offset = null;
            if (index !== undefined && datasetIndex !== undefined) {
                offset = me.getLabelDiff(datasetIndex, index);
            }

            if (offset === null) {
                if (!value || !value.isValid) {
                    // not already a moment object
                    value = me.parseTime(me.getRightValue(value));
                }
                if (value && value.isValid && value.isValid()) {
                    offset = value.diff(me.firstTick, me.tickUnit, true);
                }
            }

            if (offset !== null) {
                var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;

                if (me.isHorizontal()) {
                    var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
                    var valueOffset = (innerWidth * decimal) + me.paddingLeft;

                    return me.left + Math.round(valueOffset);
                }
                var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
                var heightOffset = (innerHeight * decimal) + me.paddingTop;

                return me.top + Math.round(heightOffset);
            }
        },
        getPixelForTick: function(index) {
            return this.getPixelForValue(this.tickMoments[index], null, null);
        },
        getValueForPixel: function(pixel) {
            var me = this;
            var innerDimension = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
            var offset = (pixel - (me.isHorizontal() ? me.left + me.paddingLeft : me.top + me.paddingTop)) / innerDimension;
            offset *= me.scaleSizeInUnits;
            return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
        },
        parseTime: function(label) {
            var me = this;
            if (typeof me.options.time.parser === 'string') {
                return moment(label, me.options.time.parser);
            }
            if (typeof me.options.time.parser === 'function') {
                return me.options.time.parser(label);
            }
            // Date objects
            if (typeof label.getMonth === 'function' || typeof label === 'number') {
                return moment(label);
            }
            // Moment support
            if (label.isValid && label.isValid()) {
                return label;
            }
            // Custom parsing (return an instance of moment)
            if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
                console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
                return me.options.time.format(label);
            }
            // Moment format parsing
            return moment(label, me.options.time.format);
        }
    });
    Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);

};

},{"6":6}]},{},[7])(7)
});
( function ( $ ) {
    "use strict";


// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

    var elements = 27
    var data1 = []
    var data2 = []
    var data3 = []

    for (var i = 0; i <= elements; i++) {
      data1.push(random(50, 200))
      data2.push(random(80, 100))
      data3.push(65)
    }


    //Traffic Chart
    var ctx = document.getElementById( "trafficChart" );
    //ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [
            {
              label: 'My First dataset',
              backgroundColor: convertHex(brandInfo, 10),
              borderColor: brandInfo,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: data1
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'transparent',
              borderColor: brandSuccess,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: data2
          },
          {
              label: 'My Third dataset',
              backgroundColor: 'transparent',
              borderColor: brandDanger,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              borderDash: [8, 5],
              data: data3
          }
          ]
        },
        options: {
            //   maintainAspectRatio: true,
            //   legend: {
            //     display: false
            // },
            // scales: {
            //     xAxes: [{
            //       display: false,
            //       categoryPercentage: 1,
            //       barPercentage: 0.5
            //     }],
            //     yAxes: [ {
            //         display: false
            //     } ]
            // }


            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                  gridLines: {
                    drawOnChartArea: false
                  }
                }],
                yAxes: [ {
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250
                      },
                      gridLines: {
                        display: true
                      }
                } ]
            },
            elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
              }
          }


        }
    } );


} )( jQuery );
( function ( $ ) {
    "use strict";


    // Counter Number
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });





    //WidgetChart 1
    var ctx = document.getElementById( "widgetChart1" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );


    //WidgetChart 2
    var ctx = document.getElementById( "widgetChart2" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Dataset',
                backgroundColor: '#63c2de',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );



    //WidgetChart 3
    var ctx = document.getElementById( "widgetChart3" );
    ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            // tooltips: {
            //     mode: 'index',
            //     titleFontSize: 12,
            //     titleFontColor: '#000',
            //     bodyFontColor: '#000',
            //     backgroundColor: '#fff',
            //     titleFontFamily: 'Montserrat',
            //     bodyFontFamily: 'Montserrat',
            //     cornerRadius: 3,
            //     intersect: false,
            // },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );


    //WidgetChart 4
    var ctx = document.getElementById( "widgetChart4" );
    ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [
                {
                    label: "My First dataset",
                    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    //borderWidth: "0",
                    backgroundColor: "rgba(255,255,255,.3)"
                }
            ]
        },
        options: {
              maintainAspectRatio: true,
              legend: {
                display: false
            },
            scales: {
                xAxes: [{
                  display: false,
                  categoryPercentage: 1,
                  barPercentage: 0.5
                }],
                yAxes: [ {
                    display: false
                } ]
            }
        }
    } );



} )( jQuery );
/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */

var VectorCanvas = function (width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }
      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }
  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }
  if (minValue) {
    this.setMin(minValue);
  }
  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function (params) {
  params = params || {};
  var map = this;
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if( !mapData){
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;

  this.container = params.container;

  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;

  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);

  this.width = params.container.width();
  this.height = params.container.height();

  this.resize();

  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if(newWidth && newHeight){
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();

      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if(mapPins){
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });

  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);

  this.makeDraggable();

  this.rootGroup = this.canvas.createGroup(true);

  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });

    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = jQuery.Event('labelShow.jqvmap'),
      regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');

    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);
      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }
      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);

      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {

    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');

    code = code.toLowerCase();

    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if ( !params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if ( !mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if(left < 0) {
          left = e.pageX + 15;
        }
        if(top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);

  this.canvas.canvas.appendChild(this.rootGroup);

  this.applyTransform();

  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for(var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if(params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };

    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if(params.showLabels){
    this.pinHandlers = false;

    var pins = {};
    for (key in map.countries){
      if (typeof map.countries[key] !== 'function') {
        if( !params.pins || !params.pins[key] ){
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };

    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};

JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function(){

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
      typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new JQVMap(defaultParams);

      this.data('mapObject', map);

      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);

      return map;
    }
  };

})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;
  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }
  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;
  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }
  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;
  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }
  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;
  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }
  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }
  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;
  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }
  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;
  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }
  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function(){
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function(){
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function(cc){
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function(){
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && (cc in this.hoverColors)) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
  }
};

JQVMap.prototype.isSelected = function(cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;

  self.isMoving = false;
  self.isMovingTimeout = false;

  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;

  this.container.mousemove(function (e) {

    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;

      self.applyTransform();

      oldPageX = e.pageX;
      oldPageY = e.pageY;

      self.isMoving = true;
      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;

  }).mousedown(function (e) {

    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;

    return false;

  }).mouseup(function () {

    mouseDown = false;

    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);

    return false;

  }).mouseout(function () {

    if(mouseDown && self.isMoving){

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);

      return false;
    }
  });

  jQuery(this.container).bind('touchmove', function (e) {

    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {

        if(touchX === touches[0].pageX && touchY === touches[0].pageY){
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;

        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;

        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;

    } else if (touches.length === 2) {

      if (lastTouchCount === 2) {
        scale = Math.sqrt(
            Math.pow(touches[0].pageX - touches[1].pageX, 2) +
            Math.pow(touches[0].pageY - touches[1].pageY, 2)
          ) / touchStartDistance;

        self.setScale(
          touchStartScale * scale,
          touchCenterX,
          touchCenterY
        );

        e.preventDefault();

      } else {

        offset = jQuery(self.container).offset();
        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;

        touchStartDistance = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        );
      }
    }

    lastTouchCount = touches.length;
  });

  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });

  jQuery(this.container).bind('touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function(pins, pinMode){
  var map = this;

  if(!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
    pinMode = 'content';
  }

  if(pinMode === 'content') {//treat pin as content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else { //treat pin as id of an html content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }
      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();
  if(!this.pinHandlers){
    this.pinHandlers = true;
    var positionFix = function(){
      map.positionPins();
    };
    this.container.bind('zoomIn', positionFix)
      .bind('zoomOut', positionFix)
      .bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);
    var bbox = countryObj[0].getBBox();

    var scale = map.scale;
    var rootCoords = map.canvas.rootGroup.getBoundingClientRect();
    var mapCoords = map.container[0].getBoundingClientRect();
    var coords = {
      left: rootCoords.left - mapCoords.left,
      top: rootCoords.top - mapCoords.top
    };

    var middleX = (bbox.x * scale) + ((bbox.width * scale) / 2);
    var middleY = (bbox.y * scale) + ((bbox.height * scale) / 2);

    pinObj.css({
      left: coords.left + middleX - (pinObj.width() / 2),
      top: coords.top + middleY - (pinObj.height() / 2)
    });
  });
};

JQVMap.prototype.removePin = function(cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function(){
  this.container.find('.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }
  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;
  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }
  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);
    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }
  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);
  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);

    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);

    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }
  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }
    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }
    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);

    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';

    node.appendChild(scale);

    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };
    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };
    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
    };
  }
  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0, cy = 0, ctrlx, ctrly;

  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;

  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';
    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');
      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }
      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }
  this.width = width;
  this.height = height;
};

/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */

var VectorCanvas=function(a,b,c){if(this.mode=window.SVGAngle?"svg":"vml",this.params=c,"svg"===this.mode)this.createSvgNode=function(a){return document.createElementNS(this.svgns,a)};else{try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),this.createVmlNode=function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(d){this.createVmlNode=function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}"svg"===this.mode?this.canvas=this.createSvgNode("svg"):(this.canvas=this.createVmlNode("group"),this.canvas.style.position="absolute"),this.setSize(a,b)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:"svg",width:0,height:0,canvas:null};var ColorScale=function(a,b,c,d){a&&this.setColors(a),b&&this.setNormalizeFunction(b),c&&this.setMin(c),c&&this.setMax(d)};ColorScale.prototype={colors:[]};var JQVMap=function(a){a=a||{};var b,c=this,d=JQVMap.maps[a.map];if(!d)throw new Error('Invalid "'+a.map+'" map parameter. Please make sure you have loaded this map file in your HTML.');this.selectedRegions=[],this.multiSelectRegion=a.multiSelectRegion,this.container=a.container,this.defaultWidth=d.width,this.defaultHeight=d.height,this.color=a.color,this.selectedColor=a.selectedColor,this.hoverColor=a.hoverColor,this.hoverColors=a.hoverColors,this.hoverOpacity=a.hoverOpacity,this.setBackgroundColor(a.backgroundColor),this.width=a.container.width(),this.height=a.container.height(),this.resize(),jQuery(window).resize(function(){var d=a.container.width(),e=a.container.height();if(d&&e){c.width=d,c.height=e,c.resize(),c.canvas.setSize(c.width,c.height),c.applyTransform();var f=jQuery.Event("resize.jqvmap");jQuery(a.container).trigger(f,[d,e]),b&&(jQuery(".jqvmap-pin").remove(),c.pinHandlers=!1,c.placePins(b.pins,b.mode))}}),this.canvas=new VectorCanvas(this.width,this.height,a),a.container.append(this.canvas.canvas),this.makeDraggable(),this.rootGroup=this.canvas.createGroup(!0),this.index=JQVMap.mapIndex,this.label=jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide(),a.enableZoom&&(jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(a.container),jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(a.container)),c.countries=[];for(var e in d.paths){var f=this.canvas.createPath({path:d.paths[e].path});f.setFill(this.color),f.id=c.getCountryId(e),c.countries[e]=f,"svg"===this.canvas.mode?f.setAttribute("class","jqvmap-region"):jQuery(f).addClass("jqvmap-region"),jQuery(this.rootGroup).append(f)}if(jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","mouseover mouseout",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("labelShow.jqvmap"),h=jQuery.Event("regionMouseOver.jqvmap");f=f.toLowerCase(),"mouseover"===b.type?(jQuery(a.container).trigger(h,[f,d.paths[f].name]),h.isDefaultPrevented()||c.highlight(f,e),a.showTooltip&&(c.label.text(d.paths[f].name),jQuery(a.container).trigger(g,[c.label,f]),g.isDefaultPrevented()||(c.label.show(),c.labelWidth=c.label.width(),c.labelHeight=c.label.height()))):(c.unhighlight(f,e),c.label.hide(),jQuery(a.container).trigger("regionMouseOut.jqvmap",[f,d.paths[f].name]))}),jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","click",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("regionClick.jqvmap");if(f=f.toLowerCase(),jQuery(a.container).trigger(g,[f,d.paths[f].name]),!a.multiSelectRegion&&!g.isDefaultPrevented())for(var h in d.paths)c.countries[h].currentFillColor=c.countries[h].getOriginalFill(),c.countries[h].setFill(c.countries[h].getOriginalFill());g.isDefaultPrevented()||(c.isSelected(f)?c.deselect(f,e):c.select(f,e))}),a.showTooltip&&a.container.mousemove(function(a){if(c.label.is(":visible")){var b=a.pageX-15-c.labelWidth,d=a.pageY-15-c.labelHeight;0>b&&(b=a.pageX+15),0>d&&(d=a.pageY+15),c.label.css({left:b,top:d})}}),this.setColors(a.colors),this.canvas.canvas.appendChild(this.rootGroup),this.applyTransform(),this.colorScale=new ColorScale(a.scaleColors,a.normalizeFunction,a.valueMin,a.valueMax),a.values&&(this.values=a.values,this.setValues(a.values)),a.selectedRegions)if(a.selectedRegions instanceof Array)for(var g in a.selectedRegions)this.select(a.selectedRegions[g].toLowerCase());else this.select(a.selectedRegions.toLowerCase());if(this.bindZoomButtons(),a.pins&&(b={pins:a.pins,mode:a.pinMode},this.pinHandlers=!1,this.placePins(a.pins,a.pinMode)),a.showLabels){this.pinHandlers=!1;var h={};for(e in c.countries)"function"!=typeof c.countries[e]&&(a.pins&&a.pins[e]||(h[e]=e.toUpperCase()));b={pins:h,mode:"content"},this.placePins(h,"content")}JQVMap.mapIndex++};JQVMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1},JQVMap.xlink="http://www.w3.org/1999/xlink",JQVMap.mapIndex=1,JQVMap.maps={},function(){var a={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegions:1,multiSelectRegion:1},b={onLabelShow:"labelShow",onLoad:"load",onRegionOver:"regionMouseOver",onRegionOut:"regionMouseOut",onRegionClick:"regionClick",onRegionSelect:"regionSelect",onRegionDeselect:"regionDeselect",onResize:"resize"};jQuery.fn.vectorMap=function(c){var d={map:"world_en",backgroundColor:"#a5bfdd",color:"#f4f3f0",hoverColor:"#c9dfaf",hoverColors:{},selectedColor:"#c9dfaf",scaleColors:["#b6d6ff","#005ace"],normalizeFunction:"linear",enableZoom:!0,showTooltip:!0,borderColor:"#818181",borderWidth:1,borderOpacity:.25,selectedRegions:null,multiSelectRegion:!1},e=this.data("mapObject");if("addMap"===c)JQVMap.maps[arguments[1]]=arguments[2];else{if("set"!==c||!a[arguments[1]]){if("string"==typeof c&&"function"==typeof e[c])return e[c].apply(e,Array.prototype.slice.call(arguments,1));jQuery.extend(d,c),d.container=this,this.css({position:"relative",overflow:"hidden"}),e=new JQVMap(d),this.data("mapObject",e),this.unbind(".jqvmap");for(var f in b)d[f]&&this.bind(b[f]+".jqvmap",d[f]);var g=jQuery.Event("load.jqvmap");return jQuery(d.container).trigger(g,e),e}e["set"+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(e,Array.prototype.slice.call(arguments,2))}}}(jQuery),ColorScale.arrayToRgb=function(a){for(var b,c="#",d=0;d<a.length;d++)b=a[d].toString(16),c+=1===b.length?"0"+b:b;return c},ColorScale.prototype.getColor=function(a){"function"==typeof this.normalize&&(a=this.normalize(a));for(var b,c=[],d=0,e=0;e<this.colors.length-1;e++)b=this.vectorLength(this.vectorSubtract(this.colors[e+1],this.colors[e])),c.push(b),d+=b;var f=(this.maxValue-this.minValue)/d;for(e=0;e<c.length;e++)c[e]*=f;for(e=0,a-=this.minValue;a-c[e]>=0;)a-=c[e],e++;var g;for(g=e===this.colors.length-1?this.vectorToNum(this.colors[e]).toString(16):this.vectorToNum(this.vectorAdd(this.colors[e],this.vectorMult(this.vectorSubtract(this.colors[e+1],this.colors[e]),a/c[e]))).toString(16);g.length<6;)g="0"+g;return"#"+g},ColorScale.rgbToArray=function(a){return a=a.substr(1),[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)]},ColorScale.prototype.setColors=function(a){for(var b=0;b<a.length;b++)a[b]=ColorScale.rgbToArray(a[b]);this.colors=a},ColorScale.prototype.setMax=function(a){this.clearMaxValue=a,"function"==typeof this.normalize?this.maxValue=this.normalize(a):this.maxValue=a},ColorScale.prototype.setMin=function(a){this.clearMinValue=a,"function"==typeof this.normalize?this.minValue=this.normalize(a):this.minValue=a},ColorScale.prototype.setNormalizeFunction=function(a){"polynomial"===a?this.normalize=function(a){return Math.pow(a,.2)}:"linear"===a?delete this.normalize:this.normalize=a,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},ColorScale.prototype.vectorAdd=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]+b[d];return c},ColorScale.prototype.vectorLength=function(a){for(var b=0,c=0;c<a.length;c++)b+=a[c]*a[c];return Math.sqrt(b)},ColorScale.prototype.vectorMult=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]*b;return c},ColorScale.prototype.vectorSubtract=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]-b[d];return c},ColorScale.prototype.vectorToNum=function(a){for(var b=0,c=0;c<a.length;c++)b+=Math.round(a[c])*Math.pow(256,a.length-c-1);return b},JQVMap.prototype.applyTransform=function(){var a,b,c,d;this.defaultWidth*this.scale<=this.width?(a=(this.width-this.defaultWidth*this.scale)/(2*this.scale),c=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(a=0,c=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(b=(this.height-this.defaultHeight*this.scale)/(2*this.scale),d=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(b=0,d=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>b?this.transY=b:this.transY<d&&(this.transY=d),this.transX>a?this.transX=a:this.transX<c&&(this.transX=c),this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},JQVMap.prototype.bindZoomButtons=function(){var a=this;this.container.find(".jqvmap-zoomin").click(function(){a.zoomIn()}),this.container.find(".jqvmap-zoomout").click(function(){a.zoomOut()})},JQVMap.prototype.deselect=function(a,b){if(a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a))this.selectedRegions.splice(this.selectIndex(a),1),jQuery(this.container).trigger("regionDeselect.jqvmap",[a]),b.currentFillColor=b.getOriginalFill(),b.setFill(b.getOriginalFill());else for(var c in this.countries)this.selectedRegions.splice(this.selectedRegions.indexOf(c),1),this.countries[c].currentFillColor=this.color,this.countries[c].setFill(this.color)},JQVMap.prototype.getCountryId=function(a){return"jqvmap"+this.index+"_"+a},JQVMap.prototype.getPin=function(a){var b=jQuery("#"+this.getPinId(a));return b.html()},JQVMap.prototype.getPinId=function(a){return this.getCountryId(a)+"_pin"},JQVMap.prototype.getPins=function(){var a=this.container.find(".jqvmap-pin"),b={};return jQuery.each(a,function(a,c){c=jQuery(c);var d=c.attr("for").toLowerCase(),e=c.html();b[d]=e}),JSON.stringify(b)},JQVMap.prototype.highlight=function(a,b){b=b||jQuery("#"+this.getCountryId(a))[0],this.hoverOpacity?b.setOpacity(this.hoverOpacity):this.hoverColors&&a in this.hoverColors?(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColors[a])):this.hoverColor&&(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColor))},JQVMap.prototype.isSelected=function(a){return this.selectIndex(a)>=0},JQVMap.prototype.makeDraggable=function(){var a,b,c=!1,d=this;d.isMoving=!1,d.isMovingTimeout=!1;var e,f,g,h,i,j,k;this.container.mousemove(function(e){return c&&(d.transX-=(a-e.pageX)/d.scale,d.transY-=(b-e.pageY)/d.scale,d.applyTransform(),a=e.pageX,b=e.pageY,d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout),d.container.trigger("drag")),!1}).mousedown(function(d){return c=!0,a=d.pageX,b=d.pageY,!1}).mouseup(function(){return c=!1,clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){d.isMoving=!1},100),!1}).mouseout(function(){return c&&d.isMoving?(clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){c=!1,d.isMoving=!1},100),!1):void 0}),jQuery(this.container).bind("touchmove",function(a){var b,c,l,m,n=a.originalEvent.touches;if(1===n.length){if(1===e){if(j===n[0].pageX&&k===n[0].pageY)return;l=d.transX,m=d.transY,d.transX-=(j-n[0].pageX)/d.scale,d.transY-=(k-n[0].pageY)/d.scale,d.applyTransform(),(l!==d.transX||m!==d.transY)&&a.preventDefault(),d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout)}j=n[0].pageX,k=n[0].pageY}else 2===n.length&&(2===e?(c=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))/h,d.setScale(i*c,f,g),a.preventDefault()):(b=jQuery(d.container).offset(),f=n[0].pageX>n[1].pageX?n[1].pageX+(n[0].pageX-n[1].pageX)/2:n[0].pageX+(n[1].pageX-n[0].pageX)/2,g=n[0].pageY>n[1].pageY?n[1].pageY+(n[0].pageY-n[1].pageY)/2:n[0].pageY+(n[1].pageY-n[0].pageY)/2,f-=b.left,g-=b.top,i=d.scale,h=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))));e=n.length}),jQuery(this.container).bind("touchstart",function(){e=0}),jQuery(this.container).bind("touchend",function(){e=0})},JQVMap.prototype.placePins=function(a,b){var c=this;if((!b||"content"!==b&&"id"!==b)&&(b="content"),"content"===b?jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute">'+b+"</div>")}}):jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute"></div>'),e.append(jQuery("#"+b))}}),this.positionPins(),!this.pinHandlers){this.pinHandlers=!0;var d=function(){c.positionPins()};this.container.bind("zoomIn",d).bind("zoomOut",d).bind("drag",d)}},JQVMap.prototype.positionPins=function(){var a=this,b=this.container.find(".jqvmap-pin");jQuery.each(b,function(b,c){c=jQuery(c);var d=a.getCountryId(c.attr("for").toLowerCase()),e=jQuery("#"+d),f=e[0].getBBox(),g=a.scale,h=a.canvas.rootGroup.getBoundingClientRect(),i=a.container[0].getBoundingClientRect(),j={left:h.left-i.left,top:h.top-i.top},k=f.x*g+f.width*g/2,l=f.y*g+f.height*g/2;c.css({left:j.left+k-c.width()/2,top:j.top+l-c.height()/2})})},JQVMap.prototype.removePin=function(a){a=a.toLowerCase(),jQuery("#"+this.getPinId(a)).remove()},JQVMap.prototype.removePins=function(){this.container.find(".jqvmap-pin").remove()},JQVMap.prototype.reset=function(){for(var a in this.countries)this.countries[a].setFill(this.color);this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},JQVMap.prototype.resize=function(){var a=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/a,this.transX*=this.baseScale/a,this.transY*=this.baseScale/a},JQVMap.prototype.select=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a)||(this.multiSelectRegion?this.selectedRegions.push(a):this.selectedRegions=[a],jQuery(this.container).trigger("regionSelect.jqvmap",[a]),this.selectedColor&&b&&(b.currentFillColor=this.selectedColor,b.setFill(this.selectedColor)))},JQVMap.prototype.selectIndex=function(a){a=a.toLowerCase();for(var b=0;b<this.selectedRegions.length;b++)if(a===this.selectedRegions[b])return b;return-1},JQVMap.prototype.setBackgroundColor=function(a){this.container.css("background-color",a)},JQVMap.prototype.setColors=function(a,b){if("string"==typeof a)this.countries[a].setFill(b),this.countries[a].setAttribute("original",b);else{var c=a;for(var d in c)this.countries[d]&&(this.countries[d].setFill(c[d]),this.countries[d].setAttribute("original",c[d]))}},JQVMap.prototype.setNormalizeFunction=function(a){this.colorScale.setNormalizeFunction(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setScale=function(a){this.scale=a,this.applyTransform()},JQVMap.prototype.setScaleColors=function(a){this.colorScale.setColors(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setValues=function(a){var b,c=0,d=Number.MAX_VALUE;for(var e in a)e=e.toLowerCase(),b=parseFloat(a[e]),isNaN(b)||(b>c&&(c=a[e]),d>b&&(d=b));d===c&&c++,this.colorScale.setMin(d),this.colorScale.setMax(c);var f={};for(e in a)e=e.toLowerCase(),b=parseFloat(a[e]),f[e]=isNaN(b)?this.color:this.colorScale.getColor(b);this.setColors(f),this.values=a},JQVMap.prototype.unhighlight=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],b.setOpacity(1),b.currentFillColor&&b.setFill(b.currentFillColor)},JQVMap.prototype.zoomIn=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep<a.zoomMaxStep){a.transX-=(a.width/a.scale-a.width/(a.scale*a.zoomStep))/2,a.transY-=(a.height/a.scale-a.height/(a.scale*a.zoomStep))/2,a.setScale(a.scale*a.zoomStep),a.zoomCurStep++;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)-b),a.container.trigger("zoomIn")}},JQVMap.prototype.zoomOut=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep>1){a.transX+=(a.width/(a.scale/a.zoomStep)-a.width/a.scale)/2,a.transY+=(a.height/(a.scale/a.zoomStep)-a.height/a.scale)/2,a.setScale(a.scale/a.zoomStep),a.zoomCurStep--;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)+b),a.container.trigger("zoomOut")}},VectorCanvas.prototype.applyTransformParams=function(a,b,c){"svg"===this.mode?this.rootGroup.setAttribute("transform","scale("+a+") translate("+b+", "+c+")"):(this.rootGroup.coordorigin=this.width-b+","+(this.height-c),this.rootGroup.coordsize=this.width/a+","+this.height/a)},VectorCanvas.prototype.createGroup=function(a){var b;return"svg"===this.mode?b=this.createSvgNode("g"):(b=this.createVmlNode("group"),b.style.width=this.width+"px",b.style.height=this.height+"px",b.style.left="0px",b.style.top="0px",b.coordorigin="0 0",b.coordsize=this.width+" "+this.height),a&&(this.rootGroup=b),b},VectorCanvas.prototype.createPath=function(a){var b;if("svg"===this.mode)b=this.createSvgNode("path"),b.setAttribute("d",a.path),null!==this.params.borderColor&&b.setAttribute("stroke",this.params.borderColor),this.params.borderWidth>0&&(b.setAttribute("stroke-width",this.params.borderWidth),b.setAttribute("stroke-linecap","round"),b.setAttribute("stroke-linejoin","round")),this.params.borderOpacity>0&&b.setAttribute("stroke-opacity",this.params.borderOpacity),b.setFill=function(a){this.setAttribute("fill",a),null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getAttribute("fill")},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.setAttribute("fill-opacity",a)};else{b=this.createVmlNode("shape"),b.coordorigin="0 0",b.coordsize=this.width+" "+this.height,b.style.width=this.width+"px",b.style.height=this.height+"px",b.fillcolor=JQVMap.defaultFillColor,b.stroked=!1,b.path=VectorCanvas.pathSvgToVml(a.path);var c=this.createVmlNode("skew");c.on=!0,c.matrix="0.01,0,0,0.01,0,0",c.offset="0,0",b.appendChild(c);var d=this.createVmlNode("fill");b.appendChild(d),b.setFill=function(a){this.getElementsByTagName("fill")[0].color=a,null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getElementsByTagName("fill")[0].color},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.getElementsByTagName("fill")[0].opacity=parseInt(100*a,10)+"%"}}return b},VectorCanvas.prototype.pathSvgToVml=function(a){var b,c,d="",e=0,f=0;return a.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(a,g,h){h=h.replace(/(\d)-/g,"$1,-").replace(/\s+/g,",").split(","),h[0]||h.shift();for(var i=0,j=h.length;j>i;i++)h[i]=Math.round(100*h[i]);switch(g){case"m":e+=h[0],f+=h[1],d="t"+h.join(",");break;case"M":e=h[0],f=h[1],d="m"+h.join(",");break;case"l":e+=h[0],f+=h[1],d="r"+h.join(",");break;case"L":e=h[0],f=h[1],d="l"+h.join(",");break;case"h":e+=h[0],d="r"+h[0]+",0";break;case"H":e=h[0],d="l"+e+","+f;break;case"v":f+=h[0],d="r0,"+h[0];break;case"V":f=h[0],d="l"+e+","+f;break;case"c":b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"C":b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",");break;case"s":h.unshift(f-c),h.unshift(e-b),b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"S":h.unshift(f+f-c),h.unshift(e+e-b),b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",")}return d}).replace(/z/g,"")},VectorCanvas.prototype.setSize=function(a,b){if("svg"===this.mode)this.canvas.setAttribute("width",a),this.canvas.setAttribute("height",b);else if(this.canvas.style.width=a+"px",this.canvas.style.height=b+"px",this.canvas.coordsize=a+" "+b,this.canvas.coordorigin="0 0",this.rootGroup){for(var c=this.rootGroup.getElementsByTagName("shape"),d=0,e=c.length;e>d;d++)c[d].coordsize=a+" "+b,c[d].style.width=a+"px",c[d].style.height=b+"px";this.rootGroup.coordsize=a+" "+b,this.rootGroup.style.width=a+"px",this.rootGroup.style.height=b+"px"}this.width=a,this.height=b};
var sample_data = {"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};
/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"paths":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});
/*!
* sweetalert2 v7.24.1
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var consolePrefix = 'SweetAlert2:';

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};

var isThenable = function isThenable(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.24.1";

var argsToParams = function argsToParams(args) {
  var params = {};
  switch (_typeof(args[0])) {
    case 'string':
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;
          case 'undefined':
            break;
          default:
            error('Unexpected type of ' + name + '! Expected "string", got ' + _typeof(args[index]));
        }
      });
      break;

    case 'object':
      _extends(params, args[0]);
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }
  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousBodyPadding: null
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
  return elementByClass(swalClasses.actions);
};

var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};

var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  // https://github.com/jkup/focusable/blob/master/index.js
  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = ('\n <div aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">\n       <span class="' + swalClasses['icon-text'] + '">?</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">\n       <span class="' + swalClasses['icon-text'] + '">!</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">\n       <span class="' + swalClasses['icon-text'] + '">i</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

/*
 * Add modal + backdrop to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(content, swalClasses.textarea);

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var oldInputVal = void 0; // IE11 workaround, see #1109 for details
  var resetValidationError = function resetValidationError(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationError();
    }
    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function (e) {
    resetValidationError(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationError(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
    target.innerHTML = '';
    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  } else {}
  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var globalState = {};

// Restore previous active (focused) element
var restoreActiveElement = function restoreActiveElement() {
  var x = window.scrollX;
  var y = window.scrollY;
  globalState.restoreFocusTimeout = setTimeout(function () {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    }
  }, 100); // issues/900
  if (typeof x !== 'undefined' && typeof y !== 'undefined') {
    // IE doesn't have scrollX/scrollY support
    window.scrollTo(x, y);
  }
};

/*
 * Global function to close sweetAlert
 */
var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement();
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */
var isVisible$1 = function isVisible() {
  return !!getPopup();
};

/*
 * Global function to click 'Confirm' button
 */
var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Swal, [null].concat(args)))();
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return new (Function.prototype.bind.apply(NoNewKeywordSwal, [null].concat(args)))();
    }
    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };
  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), { constructor: NoNewKeywordSwal });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }
  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

/**
 * Is valid parameter
 * @param {String} paramName
 */
var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

var deprecationWarning = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.';
var defaults$1 = {};

function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults = function (_ParentSwal) {
    inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      classCallCheck(this, SwalWithGlobalDefaults);
      return possibleConstructorReturn(this, (SwalWithGlobalDefaults.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults)).apply(this, arguments));
    }

    createClass(SwalWithGlobalDefaults, [{
      key: '_main',
      value: function _main(params) {
        return get(SwalWithGlobalDefaults.prototype.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults.prototype), '_main', this).call(this, _extends({}, defaults$1, params));
      }
    }], [{
      key: 'setDefaults',
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);
        if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }
        showWarningsForParams(params);
        // assign valid params from `params` to `defaults`
        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults$1[param] = params[param];
          }
        });
      }
    }, {
      key: 'resetDefaults',
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults$1 = {};
      }
    }]);
    return SwalWithGlobalDefaults;
  }(ParentSwal);

  // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var Swal = this;
  return withNoNewKeyword(function (_Swal) {
    inherits(MixinSwal, _Swal);

    function MixinSwal() {
      classCallCheck(this, MixinSwal);
      return possibleConstructorReturn(this, (MixinSwal.__proto__ || Object.getPrototypeOf(MixinSwal)).apply(this, arguments));
    }

    createClass(MixinSwal, [{
      key: '_main',
      value: function _main(params) {
        return get(MixinSwal.prototype.__proto__ || Object.getPrototypeOf(MixinSwal.prototype), '_main', this).call(this, _extends({}, mixinParams, params));
      }
    }]);
    return MixinSwal;
  }(Swal));
}

// private global state for the queue feature
var currentSteps = [];

/*
 * Global function for chaining sweetAlert popups
 */
var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;
  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }
  return currentSteps.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var showLoading = function showLoading() {
  var popup = getPopup();
  if (!popup) {
    Swal('');
  }
  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;
  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }
  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, { value: _Symbol('WeakMap') });
  }
  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], { configurable: true, value: v });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);
    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);
    case 'checkbox':
      return domCache.popup.querySelector('.' + swalClasses.checkbox + ' input');
    case 'radio':
      return domCache.popup.querySelector('.' + swalClasses.radio + ' input:checked') || domCache.popup.querySelector('.' + swalClasses.radio + ' input:first-child');
    case 'range':
      return domCache.popup.querySelector('.' + swalClasses.range + ' input');
    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}

function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}

function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}

function enableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}

function disableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

// Show block with validation error
function showValidationError(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
  domCache.validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
  show(domCache.validationError);

  var input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

// Hide block with validation error
function resetValidationError() {
  var domCache = privateProps.domCache.get(this);
  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

var Timer = function Timer(callback, delay) {
  classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;
  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };
  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };
  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }
    return remaining;
  };
  this.getStateRunning = function () {
    return running;
  };
  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address')
    );
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL')
    );
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  }

  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background;
  }
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent().querySelector('#' + swalClasses.content);
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();
  var footer = getFooter();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, content);

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i = 0; _i < icons.length; _i++) {
    hide(icons[_i]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      addClass(icon, 'swal2-animate-' + params.type + '-icon');
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }

    // Loading state
    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // Footer
  parseHtmlToContainer(params.footer, footer);

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  if (!globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }
  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);
  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams);

  // clear the previous timer
  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  }

  // clear the restore focus timeout
  clearTimeout(globalState.restoreFocusTimeout);

  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);

  var constructor = this.constructor;

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method
      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    };

    // Close on timer
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    }

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = _this.getInput();
      if (!input) {
        return null;
      }
      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });
        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();
            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;

      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();
            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });
                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();
                    _this.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();
            dismissWith(constructor.DismissReason.cancel);
          }
          break;
        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function (e) {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }
        constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== domCache.container) {
          return;
        }
        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    }

    // Reverse buttons (Confirm on the right side)
    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
      // no visible focusable elements, focus the popup
      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();
    _this.hideLoading();
    _this.resetValidationError();

    if (innerParams.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(domCache.content, swalClasses.input);
        input.value = innerParams.inputValue;
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(domCache.content, swalClasses.file);
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(domCache.content, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = innerParams.inputValue;
        rangeInput.type = innerParams.input;
        rangeOutput.value = innerParams.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(domCache.content, swalClasses.select);
        select.innerHTML = '';
        if (innerParams.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = innerParams.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                optionValue = _ref2[0],
                optionLabel = _ref2[1];

            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = optionLabel;
            if (innerParams.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }
            select.appendChild(option);
          });
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(domCache.content, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref3) {
            var _ref4 = slicedToArray(_ref3, 2),
                radioValue = _ref4[0],
                radioLabel = _ref4[1];

            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (innerParams.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }
            radioLabelElement.innerHTML = radioLabel;
            radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
            radio.appendChild(radioLabelElement);
          });
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);
        var checkboxInput = _this.getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(innerParams.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = innerParams.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(domCache.content, swalClasses.textarea);
        textarea.value = innerParams.inputValue;
        textarea.placeholder = innerParams.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + innerParams.input + '"');
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };
      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(innerParams.inputOptions));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	_main: _main
});

var currentInstance = void 0;

// SweetAlert constructor
function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  currentInstance = this;

  var outerParams = Object.freeze(this.constructor.argsToParams(args));

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);
  privateProps.promise.set(this, promise);
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};
SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};
SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
};

// Assign instance methods from src/instanceMethods/*.js to prototype
_extends(SweetAlert.prototype, instanceMethods);

// Assign static methods from src/staticMethods/*.js to constructor
_extends(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});

SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@-webkit-keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n" +
"  flex-direction: column;\n" +
"  align-items: stretch; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: flex-end;\n" +
"    height: 2.2em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n" +
"    justify-content: center; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n" +
"    height: 2em;\n" +
"    margin: .3125em auto;\n" +
"    font-size: 1em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n" +
"    font-size: 1em; }\n" +
"\n" +
"body.swal2-toast-shown > .swal2-container {\n" +
"  position: fixed;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-shown {\n" +
"    background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n" +
"    top: auto;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    left: auto; }\n" +
"\n" +
".swal2-popup.swal2-toast {\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  width: auto;\n" +
"  padding: 0.625em;\n" +
"  box-shadow: 0 0 0.625em #d9d9d9;\n" +
"  overflow-y: hidden; }\n" +
"  .swal2-popup.swal2-toast .swal2-header {\n" +
"    flex-direction: row; }\n" +
"  .swal2-popup.swal2-toast .swal2-title {\n" +
"    justify-content: flex-start;\n" +
"    margin: 0 .6em;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-close {\n" +
"    position: initial; }\n" +
"  .swal2-popup.swal2-toast .swal2-content {\n" +
"    justify-content: flex-start;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-icon {\n" +
"    width: 2em;\n" +
"    min-width: 2em;\n" +
"    height: 2em;\n" +
"    margin: 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
"      font-size: 2em;\n" +
"      font-weight: bold;\n" +
"      line-height: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      top: .875em;\n" +
"      width: 1.375em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-actions {\n" +
"    height: auto;\n" +
"    margin: 0 .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .3125em .625em;\n" +
"    font-size: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
"      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
"  .swal2-popup.swal2-toast .swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 2em;\n" +
"      height: 2.8125em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.25em;\n" +
"        left: -.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 2em 2em;\n" +
"                transform-origin: 2em 2em;\n" +
"        border-radius: 4em 0 0 4em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.25em;\n" +
"        left: .9375em;\n" +
"        -webkit-transform-origin: 0 2em;\n" +
"                transform-origin: 0 2em;\n" +
"        border-radius: 0 4em 4em 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
"      top: 0;\n" +
"      left: .4375em;\n" +
"      width: .4375em;\n" +
"      height: 2.6875em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
"      height: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 1.125em;\n" +
"        left: .1875em;\n" +
"        width: .75em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: .9375em;\n" +
"        right: .1875em;\n" +
"        width: 1.375em; }\n" +
"  .swal2-popup.swal2-toast.swal2-show {\n" +
"    -webkit-animation: showSweetToast .5s;\n" +
"            animation: showSweetToast .5s; }\n" +
"  .swal2-popup.swal2-toast.swal2-hide {\n" +
"    -webkit-animation: hideSweetToast .2s forwards;\n" +
"            animation: hideSweetToast .2s forwards; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
"    -webkit-animation: animate-toast-success-tip .75s;\n" +
"            animation: animate-toast-success-tip .75s; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
"    -webkit-animation: animate-toast-success-long .75s;\n" +
"            animation: animate-toast-success-long .75s; }\n" +
"\n" +
"@-webkit-keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"@keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
"  overflow-y: hidden; }\n" +
"\n" +
"body.swal2-height-auto {\n" +
"  height: auto !important; }\n" +
"\n" +
"body.swal2-no-backdrop .swal2-shown {\n" +
"  top: auto;\n" +
"  right: auto;\n" +
"  bottom: auto;\n" +
"  left: auto;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
"    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
"    top: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
"    top: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
"    right: 0;\n" +
"    bottom: 0; }\n" +
"\n" +
".swal2-container {\n" +
"  display: flex;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  padding: 10px;\n" +
"  background-color: transparent;\n" +
"  z-index: 1060;\n" +
"  overflow-x: hidden;\n" +
"  -webkit-overflow-scrolling: touch; }\n" +
"  .swal2-container.swal2-top {\n" +
"    align-items: flex-start; }\n" +
"  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-center {\n" +
"    align-items: center; }\n" +
"  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
"    align-items: center;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
"    align-items: center;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-bottom {\n" +
"    align-items: flex-end; }\n" +
"  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-content: center;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-column {\n" +
"    flex: 1;\n" +
"    flex-direction: column; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
"      align-items: center; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
"      align-items: flex-start; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
"      align-items: flex-end; }\n" +
"    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
"      display: flex !important;\n" +
"      flex: 1;\n" +
"      align-content: center;\n" +
"      justify-content: center; }\n" +
"  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n" +
"    margin: auto; }\n" +
"  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"    .swal2-container .swal2-modal {\n" +
"      margin: 0 !important; } }\n" +
"  .swal2-container.swal2-fade {\n" +
"    transition: background-color .1s; }\n" +
"  .swal2-container.swal2-shown {\n" +
"    background-color: rgba(0, 0, 0, 0.4); }\n" +
"\n" +
".swal2-popup {\n" +
"  display: none;\n" +
"  position: relative;\n" +
"  flex-direction: column;\n" +
"  justify-content: center;\n" +
"  width: 32em;\n" +
"  max-width: 100%;\n" +
"  padding: 1.25em;\n" +
"  border-radius: 0.3125em;\n" +
"  background: #fff;\n" +
"  font-family: inherit;\n" +
"  font-size: 1rem;\n" +
"  box-sizing: border-box; }\n" +
"  .swal2-popup:focus {\n" +
"    outline: none; }\n" +
"  .swal2-popup.swal2-loading {\n" +
"    overflow-y: hidden; }\n" +
"  .swal2-popup .swal2-header {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"    align-items: center; }\n" +
"  .swal2-popup .swal2-title {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    max-width: 100%;\n" +
"    margin: 0 0 0.4em;\n" +
"    padding: 0;\n" +
"    color: #595959;\n" +
"    font-size: 1.875em;\n" +
"    font-weight: 600;\n" +
"    text-align: center;\n" +
"    text-transform: none;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup .swal2-actions {\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    margin: 1.25em auto 0; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
"      opacity: .4; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
"      width: 2.5em;\n" +
"      height: 2.5em;\n" +
"      margin: .46875em;\n" +
"      padding: 0;\n" +
"      border: .25em solid transparent;\n" +
"      border-radius: 100%;\n" +
"      border-color: transparent;\n" +
"      background-color: transparent !important;\n" +
"      color: transparent;\n" +
"      cursor: default;\n" +
"      box-sizing: border-box;\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"      -webkit-user-select: none;\n" +
"         -moz-user-select: none;\n" +
"          -ms-user-select: none;\n" +
"              user-select: none; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
"      margin-right: 30px;\n" +
"      margin-left: 30px; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
"      display: inline-block;\n" +
"      width: 15px;\n" +
"      height: 15px;\n" +
"      margin-left: 5px;\n" +
"      border: 3px solid #999999;\n" +
"      border-radius: 50%;\n" +
"      border-right-color: transparent;\n" +
"      box-shadow: 1px 1px 1px #fff;\n" +
"      content: '';\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
"  .swal2-popup .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .625em 2em;\n" +
"    font-weight: 500;\n" +
"    box-shadow: none; }\n" +
"    .swal2-popup .swal2-styled:not([disabled]) {\n" +
"      cursor: pointer; }\n" +
"    .swal2-popup .swal2-styled.swal2-confirm {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #3085d6;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled.swal2-cancel {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #aaa;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled:focus {\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
"    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
"      border: 0; }\n" +
"  .swal2-popup .swal2-footer {\n" +
"    justify-content: center;\n" +
"    margin: 1.25em 0 0;\n" +
"    padding-top: 1em;\n" +
"    border-top: 1px solid #eee;\n" +
"    color: #545454;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup .swal2-image {\n" +
"    max-width: 100%;\n" +
"    margin: 1.25em auto; }\n" +
"  .swal2-popup .swal2-close {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    justify-content: center;\n" +
"    width: 1.2em;\n" +
"    height: 1.2em;\n" +
"    padding: 0;\n" +
"    transition: color 0.1s ease-out;\n" +
"    border: none;\n" +
"    border-radius: 0;\n" +
"    background: transparent;\n" +
"    color: #cccccc;\n" +
"    font-family: serif;\n" +
"    font-size: 2.5em;\n" +
"    line-height: 1.2;\n" +
"    cursor: pointer;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-close:hover {\n" +
"      -webkit-transform: none;\n" +
"              transform: none;\n" +
"      color: #f27474; }\n" +
"  .swal2-popup > .swal2-input,\n" +
"  .swal2-popup > .swal2-file,\n" +
"  .swal2-popup > .swal2-textarea,\n" +
"  .swal2-popup > .swal2-select,\n" +
"  .swal2-popup > .swal2-radio,\n" +
"  .swal2-popup > .swal2-checkbox {\n" +
"    display: none; }\n" +
"  .swal2-popup .swal2-content {\n" +
"    justify-content: center;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em;\n" +
"    font-weight: 300;\n" +
"    line-height: normal;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup #swal2-content {\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea,\n" +
"  .swal2-popup .swal2-select,\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    margin: 1em auto; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    width: 100%;\n" +
"    transition: border-color .3s, box-shadow .3s;\n" +
"    border: 1px solid #d9d9d9;\n" +
"    border-radius: 0.1875em;\n" +
"    font-size: 1.125em;\n" +
"    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
"    box-sizing: border-box; }\n" +
"    .swal2-popup .swal2-input.swal2-inputerror,\n" +
"    .swal2-popup .swal2-file.swal2-inputerror,\n" +
"    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
"      border-color: #f27474 !important;\n" +
"      box-shadow: 0 0 2px #f27474 !important; }\n" +
"    .swal2-popup .swal2-input:focus,\n" +
"    .swal2-popup .swal2-file:focus,\n" +
"    .swal2-popup .swal2-textarea:focus {\n" +
"      border: 1px solid #b4dbed;\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 3px #c4e6f5; }\n" +
"    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::placeholder,\n" +
"    .swal2-popup .swal2-file::placeholder,\n" +
"    .swal2-popup .swal2-textarea::placeholder {\n" +
"      color: #cccccc; }\n" +
"  .swal2-popup .swal2-range input {\n" +
"    width: 80%; }\n" +
"  .swal2-popup .swal2-range output {\n" +
"    width: 20%;\n" +
"    font-weight: 600;\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-range input,\n" +
"  .swal2-popup .swal2-range output {\n" +
"    height: 2.625em;\n" +
"    margin: 1em auto;\n" +
"    padding: 0;\n" +
"    font-size: 1.125em;\n" +
"    line-height: 2.625em; }\n" +
"  .swal2-popup .swal2-input {\n" +
"    height: 2.625em;\n" +
"    padding: 0.75em; }\n" +
"    .swal2-popup .swal2-input[type='number'] {\n" +
"      max-width: 10em; }\n" +
"  .swal2-popup .swal2-file {\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    height: 6.75em;\n" +
"    padding: 0.75em; }\n" +
"  .swal2-popup .swal2-select {\n" +
"    min-width: 50%;\n" +
"    max-width: 100%;\n" +
"    padding: .375em .625em;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    align-items: center;\n" +
"    justify-content: center; }\n" +
"    .swal2-popup .swal2-radio label,\n" +
"    .swal2-popup .swal2-checkbox label {\n" +
"      margin: 0 .6em;\n" +
"      font-size: 1.125em; }\n" +
"    .swal2-popup .swal2-radio input,\n" +
"    .swal2-popup .swal2-checkbox input {\n" +
"      margin: 0 .4em; }\n" +
"  .swal2-popup .swal2-validationerror {\n" +
"    display: none;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    padding: 0.625em;\n" +
"    background: #f0f0f0;\n" +
"    color: #666666;\n" +
"    font-size: 1em;\n" +
"    font-weight: 300;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-validationerror::before {\n" +
"      display: inline-block;\n" +
"      width: 1.5em;\n" +
"      min-width: 1.5em;\n" +
"      height: 1.5em;\n" +
"      margin: 0 .625em;\n" +
"      border-radius: 50%;\n" +
"      background-color: #f27474;\n" +
"      color: #fff;\n" +
"      font-weight: 600;\n" +
"      line-height: 1.5em;\n" +
"      text-align: center;\n" +
"      content: '!';\n" +
"      zoom: normal; }\n" +
"\n" +
"@supports (-ms-accelerator: true) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@-moz-document url-prefix() {\n" +
"  .swal2-close:focus {\n" +
"    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n" +
"\n" +
".swal2-icon {\n" +
"  position: relative;\n" +
"  justify-content: center;\n" +
"  width: 5em;\n" +
"  height: 5em;\n" +
"  margin: 1.25em auto 1.875em;\n" +
"  border: .25em solid transparent;\n" +
"  border-radius: 50%;\n" +
"  line-height: 5em;\n" +
"  cursor: default;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  zoom: normal; }\n" +
"  .swal2-icon-text {\n" +
"    font-size: 3.75em; }\n" +
"  .swal2-icon.swal2-error {\n" +
"    border-color: #f27474; }\n" +
"    .swal2-icon.swal2-error .swal2-x-mark {\n" +
"      position: relative;\n" +
"      flex-grow: 1; }\n" +
"    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      top: 2.3125em;\n" +
"      width: 2.9375em;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #f27474; }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: 1.0625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: 1em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"  .swal2-icon.swal2-warning {\n" +
"    border-color: #facea8;\n" +
"    color: #f8bb86; }\n" +
"  .swal2-icon.swal2-info {\n" +
"    border-color: #9de0f6;\n" +
"    color: #3fc3ee; }\n" +
"  .swal2-icon.swal2-question {\n" +
"    border-color: #c9dae1;\n" +
"    color: #87adbd; }\n" +
"  .swal2-icon.swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 3.75em;\n" +
"      height: 7.5em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.4375em;\n" +
"        left: -2.0635em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 3.75em 3.75em;\n" +
"                transform-origin: 3.75em 3.75em;\n" +
"        border-radius: 7.5em 0 0 7.5em; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.6875em;\n" +
"        left: 1.875em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 0 3.75em;\n" +
"                transform-origin: 0 3.75em;\n" +
"        border-radius: 0 7.5em 7.5em 0; }\n" +
"    .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      position: absolute;\n" +
"      top: -.25em;\n" +
"      left: -.25em;\n" +
"      width: 100%;\n" +
"      height: 100%;\n" +
"      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
"      border-radius: 50%;\n" +
"      z-index: 2;\n" +
"      box-sizing: content-box; }\n" +
"    .swal2-icon.swal2-success .swal2-success-fix {\n" +
"      position: absolute;\n" +
"      top: .5em;\n" +
"      left: 1.625em;\n" +
"      width: .4375em;\n" +
"      height: 5.625em;\n" +
"      -webkit-transform: rotate(-45deg);\n" +
"              transform: rotate(-45deg);\n" +
"      z-index: 1; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #a5dc86;\n" +
"      z-index: 2; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 2.875em;\n" +
"        left: .875em;\n" +
"        width: 1.5625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: 2.375em;\n" +
"        right: .5em;\n" +
"        width: 2.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"\n" +
".swal2-progresssteps {\n" +
"  align-items: center;\n" +
"  margin: 0 0 1.25em;\n" +
"  padding: 0;\n" +
"  font-weight: 600; }\n" +
"  .swal2-progresssteps li {\n" +
"    display: inline-block;\n" +
"    position: relative; }\n" +
"  .swal2-progresssteps .swal2-progresscircle {\n" +
"    width: 2em;\n" +
"    height: 2em;\n" +
"    border-radius: 2em;\n" +
"    background: #3085d6;\n" +
"    color: #fff;\n" +
"    line-height: 2em;\n" +
"    text-align: center;\n" +
"    z-index: 20; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
"      margin-left: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
"      margin-right: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
"      background: #3085d6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
"        background: #add8e6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
"        background: #add8e6; }\n" +
"  .swal2-progresssteps .swal2-progressline {\n" +
"    width: 2.5em;\n" +
"    height: .4em;\n" +
"    margin: 0 -1px;\n" +
"    background: #3085d6;\n" +
"    z-index: 10; }\n" +
"\n" +
"[class^='swal2'] {\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"\n" +
".swal2-show {\n" +
"  -webkit-animation: swal2-show 0.3s;\n" +
"          animation: swal2-show 0.3s; }\n" +
"  .swal2-show.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
".swal2-hide {\n" +
"  -webkit-animation: swal2-hide 0.15s forwards;\n" +
"          animation: swal2-hide 0.15s forwards; }\n" +
"  .swal2-hide.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
"[dir='rtl'] .swal2-close {\n" +
"  right: auto;\n" +
"  left: 0; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-tip {\n" +
"  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
"          animation: swal2-animate-success-line-tip 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-long {\n" +
"  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
"          animation: swal2-animate-success-line-long 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
"  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
"          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
"\n" +
".swal2-animate-error-icon {\n" +
"  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
"          animation: swal2-animate-error-icon 0.5s; }\n" +
"  .swal2-animate-error-icon .swal2-x-mark {\n" +
"    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
"            animation: swal2-animate-error-x-mark 0.5s; }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }");