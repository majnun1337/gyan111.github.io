( function ( $ ) {
	'use strict';

	var orInScript = {
		id: 'or-inscript',
		name: 'ଇନସ୍କ୍ରିପ୍ଟ',
		description: 'InScript keyboard for Odia script',
		date: '2012-10-14',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ 'X', '\u0B01' ],
			[ 'x', '\u0B02' ],
			[ '_', '\u0B03' ],
			[ 'D', '\u0B05' ],
			[ 'E', '\u0B06' ],
			[ 'F', '\u0B07' ],
			[ 'R', '\u0B08' ],
			[ 'G', '\u0B09' ],
			[ 'T', '\u0B0A' ],
			[ '\\+', '\u0B0B' ],
			[ 'S', '\u0B0F' ],
			[ 'W', '\u0B10' ],
			[ 'A', '\u0B13' ],
			[ 'Q', '\u0B14' ],
			[ 'k', '\u0B15' ],
			[ 'K', '\u0B16' ],
			[ 'i', '\u0B17' ],
			[ 'I', '\u0B18' ],
			[ 'U', '\u0B19' ],
			[ ';', '\u0B1A' ],
			[ '\\:', '\u0B1B' ],
			[ 'p', '\u0B1C' ],
			[ 'P', '\u0B1D' ],
			[ '\\}', '\u0B1E' ],
			[ '\'', '\u0B1F' ],
			[ '"', '\u0B20' ],
			[ '\\[', '\u0B21' ],
			[ '\\{', '\u0B22' ],
			[ 'C', '\u0B23' ],
			[ 'l', '\u0B24' ],
			[ 'L', '\u0B25' ],
			[ 'o', '\u0B26' ],
			[ 'O', '\u0B27' ],
			[ 'v', '\u0B28' ],
			[ 'h', '\u0B2A' ],
			[ 'H', '\u0B2B' ],
			[ 'y', '\u0B2C' ],
			[ 'Y', '\u0B2D' ],
			[ 'c', '\u0B2E' ],
			[ '\\?', '\u0B2F' ],
			[ 'j', '\u0B30' ],
			[ 'n', '\u0B32' ],
			[ 'N', '\u0B33' ],
			[ 'M', '\u0B36' ],
			[ '\\<', '\u0B37' ],
			[ 'm', '\u0B38' ],
			[ 'u', '\u0B39' ],
			[ '\\]', '\u0B3C' ],
			[ 'e', '\u0B3E' ],
			[ 'f', '\u0B3F' ],
			[ 'r', '\u0B40' ],
			[ 'g', '\u0B41' ],
			[ 't', '\u0B42' ],
			[ '\\=', '\u0B43' ],
			[ 's', '\u0B47' ],
			[ 'w', '\u0B48' ],
			[ 'a', '\u0B4B' ],
			[ 'q', '\u0B4C' ],
			[ 'd', '\u0B4D' ],
			[ '/', '\u0B5F' ],
			[ '\\>', '\u0B64' ],
			[ '0', '\u0B66' ],
			[ '1', '\u0B67' ],
			[ '2', '\u0B68' ],
			[ '3', '\u0B69' ],
			[ '4', '\u0B6A' ],
			[ '5', '\u0B6B' ],
			[ '6', '\u0B6C' ],
			[ '7', '\u0B6D' ],
			[ '8', '\u0B6E' ],
			[ '9', '\u0B6F' ],
			[ 'b', '\u0B71' ],
			[ '\\(', '\u200D' ],
			[ '\\)', '\u200C' ] ],

		patterns_x: [
			[ 'F', '\u0B0C' ],
			[ 'b', '\u0B35' ],
			[ '\\>', '\u0B3D' ],
			[ '\\=', '\u0B44' ],
			[ '\\[', '\u0B5C' ],
			[ '\\{', '\u0B5D' ],
			[ '\\+', '\u0B60' ],
			[ 'R', '\u0B61' ],
			[ 'f', '\u0B62' ],
			[ 'r', '\u0B63' ],
			[ '\\.', '\u0B65' ],
			[ 'x', '\u0B70' ],
			[ '\\$', '\u20B9' ] ]

	};

	$.ime.register( orInScript );
}( jQuery ) );
