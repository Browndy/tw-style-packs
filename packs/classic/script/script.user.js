// ==UserScript==
// @name            Tribalwars Classic Map
// @namespace       *
// @include         https://de*.die-staemme.de*screen=map*
// @grant           none
// ==/UserScript==

TWMap.graphics = "https://raw.githubusercontent.com/Browndy/tw-map-packs/master/packs/classic/graphics/";
TWMap.graphics += TWMap.classic_gfx ? "" : "n_";

$("a[id^='map']")[0].style.backgroundImage = 'url(' + TWMap.graphics + 'gras4.png)'

$("img[id^='map_village']").each(function() {
	var path = this.src.split("/");
	var fileName = path[path.length -1];
	this.src = TWMap.graphics + fileName;
});