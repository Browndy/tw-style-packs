// ==UserScript==
// @name            Tribalwars Classic Map
// @version         1.1
// @author          Browndy
// @description     Allows usage of older Map-Skins
// @namespace       *
// @match           https://*.die-staemme.de/game.php?*screen=map*
// @match           https://*.die-staemme.de/guest.php?*screen=map*
// @match           https://*.tribalwars.net/game.php?*screen=map*
// @match           https://*.tribalwars.net/guest.php?*screen=map*
// @run-at          document-end
// ==/UserScript==

(function () {
	'use strict';

	const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	const map = typeof unsafeWindow != 'undefined' ? unsafeWindow.TWMap : window.TWMap;

	// classic, new, new_skins
	win.TWCM_pack = "new";

	win.$.ajaxSetup({cache: true});
	win.$.getScript("https://github.com/Browndy/tw-style-packs/blob/master/packs/script/TWClassicMap.js");
})();
