/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Google Chrome",slug:"chrome",version:"0.1.3"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",COLOR_GAB_GREEN="#21cf7b",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDReddit=function(){var s=[];function a(){var t=document.querySelectorAll('a[data-click-id="comments"][data-test-id="comments-page-link-num-comments"]');if(!t)return!1;for(var e=0;e<t.length;e++){var r=t[e],n=c(r);if(n&&!(-1<s.indexOf(n))){s.push(n);var o=r.parentElement;o.style.setProperty("width","100%","important");var i=p();o.appendChild(i),i.onclick=l.bind(null,n)}}setTimeout(a,2e3)}function p(){var t=document.createElement("a");return t.textContent="Dissent This",t.style.setProperty("display","block","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("height","20px","important"),t.style.setProperty("width","80px","important"),t.style.setProperty("background-color",COLOR_GAB_GREEN,"important"),t.style.setProperty("border-radius","2px","important"),t.style.setProperty("right","6px","important"),t.style.setProperty("bottom","6px","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("top","auto","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("font-size","12px","important"),t.style.setProperty("text-align","center","important"),t.style.setProperty("line-height","20px","important"),t}function l(t){var e=window.innerHeight;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}function c(t){if(!t)return null;var e=t.getAttribute("href");return e&&isString(e)?"https://www.reddit.com"+e:null}this.init=function(){a()}};ready(function(){setTimeout(function(){(new GDReddit).init()},150)});