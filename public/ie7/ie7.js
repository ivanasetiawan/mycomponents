/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'component\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-arrow-up': '&#xe600;',
		'i-arrow-down': '&#xe601;',
		'i-switch': '&#xe602;',
		'i-earth': '&#xe603;',
		'i-link': '&#xe604;',
		'i-flag': '&#xe605;',
		'i-file-xml': '&#xe606;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
