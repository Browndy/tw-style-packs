// ==UserScript==
// @author          Browndy
// @name            Tribalwars Classic Map
// @namespace       *
// @include         https://de*.die-staemme.de*screen=map*
// @grant           GM_addStyle
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at          document-end
// ==/UserScript==

var map = typeof unsafeWindow != 'undefined' ? unsafeWindow.TWMap : window.TWMap;

map.graphics = "https://raw.githubusercontent.com/Browndy/tw-map-packs/master/packs/classic/graphics/";
map.graphics += map.night ? "n_" : "";

$("#map")[0].style.backgroundImage = 'url(' + map.graphics + 'gras4.png)'

$("#map").find("img").each(function() {
	var path = this.src.split("/");
	var fileName = path[path.length -1];
	this.src = map.graphics + fileName;
});