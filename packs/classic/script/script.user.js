// ==UserScript==
// @name            Tribalwars Classic Map
// @version         1.0
// @author          Browndy
// @description     *
// @homepage        https://gist.github.com/Browndy/550af7a1c4d505fc118a5c1b2df95f38/raw/script.user.js
// @namespace       *
// @match           https://*.die-staemme.de/game.php?*&screen=map*
// @run-at          document-end
// ==/UserScript==

var map = typeof unsafeWindow != 'undefined' ? unsafeWindow.TWMap : window.TWMap;

map.graphics = "https://raw.githubusercontent.com/Browndy/tw-style-packs/master/packs/classic/graphics/";
map.graphics += map.night ? "n_" : "";


// document-idle
window.addEventListener ("load", function() {
	map.reload()
    if (game_data.player.is_guest === undefined) return;
    $("#map_container")[0].children[0].remove();
});
