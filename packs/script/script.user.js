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
// @run-at          document-start
// ==/UserScript==

'use strict';

const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

// classic, new, new_skins
win.TWCM_pack = "new";

win.$.ajaxSetup({cache: true});
win.$.getScript("https://browndy.github.io/DieStämme-Stuff/TW%20Classic%20Map/TWClassicMap.js");
