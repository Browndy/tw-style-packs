// ==UserScript==
// @author          Browndy
// @name            Tribalwars Classic Map
// @homepage        https://gist.github.com/Browndy/550af7a1c4d505fc118a5c1b2df95f38/raw/script.user.js
// @namespace       *
// @include         https://de*.die-staemme.de*screen=map*
// @grant           GM_addStyle
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at          document-end
// ==/UserScript==

var map = typeof unsafeWindow != 'undefined' ? unsafeWindow.TWMap : window.TWMap;

map.graphics = "https://raw.githubusercontent.com/Browndy/tw-style-packs/master/packs/classic/graphics/";
map.graphics += map.night ? "n_" : "";

$("#map")[0].style.backgroundImage = 'url(' + map.graphics + 'gras4.png)'

$("img[id^='map_village']").each(function() {
	var path = this.src.split("/");
	var fileName = path[path.length -1];
	this.src = map.graphics + fileName;
});


// document-idle
window.addEventListener ("load", function() {
    if (game_data.player.is_guest === undefined) return;
    $("#map_container")[0].children[0].remove();
});

