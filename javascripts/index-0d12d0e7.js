/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,a,u){return jQuery.easing[jQuery.easing.def](n,e,t,a,u)},easeInQuad:function(n,e,t,a,u){return a*(e/=u)*e+t},easeOutQuad:function(n,e,t,a,u){return-a*(e/=u)*(e-2)+t},easeInOutQuad:function(n,e,t,a,u){return(e/=u/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,a,u){return a*(e/=u)*e*e+t},easeOutCubic:function(n,e,t,a,u){return a*((e=e/u-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,a,u){return(e/=u/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,a,u){return a*(e/=u)*e*e*e+t},easeOutQuart:function(n,e,t,a,u){return-a*((e=e/u-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,a,u){return(e/=u/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,a,u){return a*(e/=u)*e*e*e*e+t},easeOutQuint:function(n,e,t,a,u){return a*((e=e/u-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,a,u){return(e/=u/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,a,u){return-a*Math.cos(e/u*(Math.PI/2))+a+t},easeOutSine:function(n,e,t,a,u){return a*Math.sin(e/u*(Math.PI/2))+t},easeInOutSine:function(n,e,t,a,u){return-a/2*(Math.cos(Math.PI*e/u)-1)+t},easeInExpo:function(n,e,t,a,u){return 0==e?t:a*Math.pow(2,10*(e/u-1))+t},easeOutExpo:function(n,e,t,a,u){return e==u?t+a:a*(-Math.pow(2,-10*e/u)+1)+t},easeInOutExpo:function(n,e,t,a,u){return 0==e?t:e==u?t+a:(e/=u/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,a,u){return-a*(Math.sqrt(1-(e/=u)*e)-1)+t},easeOutCirc:function(n,e,t,a,u){return a*Math.sqrt(1-(e=e/u-1)*e)+t},easeInOutCirc:function(n,e,t,a,u){return(e/=u/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,a,u){var r=1.70158,s=0,i=a;if(0==e)return t;if(1==(e/=u))return t+a;if(s||(s=.3*u),i<Math.abs(a)){i=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/i);return-(i*Math.pow(2,10*(e-=1))*Math.sin(2*(e*u-r)*Math.PI/s))+t},easeOutElastic:function(n,e,t,a,u){var r=1.70158,s=0,i=a;if(0==e)return t;if(1==(e/=u))return t+a;if(s||(s=.3*u),i<Math.abs(a)){i=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/i);return i*Math.pow(2,-10*e)*Math.sin(2*(e*u-r)*Math.PI/s)+a+t},easeInOutElastic:function(n,e,t,a,u){var r=1.70158,s=0,i=a;if(0==e)return t;if(2==(e/=u/2))return t+a;if(s||(s=.3*u*1.5),i<Math.abs(a)){i=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/i);return 1>e?-.5*i*Math.pow(2,10*(e-=1))*Math.sin(2*(e*u-r)*Math.PI/s)+t:i*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*u-r)*Math.PI/s)*.5+a+t},easeInBack:function(n,e,t,a,u,r){return void 0==r&&(r=1.70158),a*(e/=u)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,a,u,r){return void 0==r&&(r=1.70158),a*((e=e/u-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,a,u,r){return void 0==r&&(r=1.70158),(e/=u/2)<1?a/2*e*e*(((r*=1.525)+1)*e-r)+t:a/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,a,u){return a-jQuery.easing.easeOutBounce(n,u-e,0,a,u)+t},easeOutBounce:function(n,e,t,a,u){return(e/=u)<1/2.75?7.5625*a*e*e+t:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,a,u){return u/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,a,u)+t:.5*jQuery.easing.easeOutBounce(n,2*e-u,0,a,u)+.5*a+t}}),/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
function(n){"use strict";function e(n){return new RegExp("(^|\\s+)"+n+"(\\s+|$)")}function t(n,e){var t=a(n,e)?r:u;t(n,e)}var a,u,r;"classList"in document.documentElement?(a=function(n,e){return n.classList.contains(e)},u=function(n,e){n.classList.add(e)},r=function(n,e){n.classList.remove(e)}):(a=function(n,t){return e(t).test(n.className)},u=function(n,e){a(n,e)||(n.className=n.className+" "+e)},r=function(n,t){n.className=n.className.replace(e(t)," ")});var s={hasClass:a,addClass:u,removeClass:r,toggleClass:t,has:a,add:u,remove:r,toggle:t};"function"==typeof define&&define.amd?define(s):n.classie=s}(window);/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function n(){window.addEventListener("scroll",function(){r||(r=!0,setTimeout(e,250))},!1)}function e(){var n=t();n>=s?classie.add(u,"navbar-shrink"):classie.remove(u,"navbar-shrink"),r=!1}function t(){return window.pageYOffset||a.scrollTop}var a=document.documentElement,u=document.querySelector(".navbar-default"),r=!1,s=300;n()}();/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(function(){$("a.page-scroll").bind("click",function(n){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1500,"easeInOutExpo"),n.preventDefault()})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(document).ready(function(){var n=["b3-11bc8fa7.jpg","b4-8a6e3ae2.jpg"];$(".jumbotron").css({"background-image":"url(/images/"+n[Math.floor(Math.random()*n.length)]+")"})}),$(document).on("hidden.bs.modal",function(){$(".modal:visible").length&&$("body").addClass("modal-open")});