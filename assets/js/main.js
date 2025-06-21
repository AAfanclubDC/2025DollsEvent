/*
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$document = $(document);

	// Breakpoints.
		breakpoints({
			desktop:   [ '737px',   null     ],
			wide:      [ '1201px',  null     ],
			narrow:    [ '737px',   '1200px' ],
			narrower:  [ '737px',   '1000px' ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.

		// Height hack.
		/*
			var $sc = $('#sidebar, #content'), tid;

			$window
				.on('resize', function() {
					window.clearTimeout(tid);
					tid = window.setTimeout(function() {
						$sc.css('min-height', $document.height());
					}, 100);
				})
				.on('load', function() {
					$window.trigger('resize');
				})
				.trigger('resize');
		*/

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#sidebar" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Sidebar
			$('#sidebar')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'sidebar-visible'
				});
		// Blocks
		$(function() {
		  const colors = [
			{bg: '#ffb3b3', border: '#ff6666'},
			{bg: '#b3d9ff', border: '#3399ff'},
			{bg: '#b3ffcc', border: '#33cc66'},
			{bg: '#ffd9b3', border: '#ff9933'},
			{bg: '#e6b3ff', border: '#9933ff'}
		  ];
		  
		  $('.square-button').each(function() {
		    const c = colors[Math.floor(Math.random() * colors.length)];
		    $(this).css({
			'background-color': c.bg,
			'border-color': c.border
		    });
		  });
		});

})(jQuery);
