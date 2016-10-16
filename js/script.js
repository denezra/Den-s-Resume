window.addEventListener('load', function() {
	let button = [];

	for (var i = 1; i <= 3; i++) {
		button[i] = document.querySelectorAll('.button'+i);
		button[i][0].addEventListener('mouseenter', btnFunc)
		button[i][0].addEventListener('mouseleave', btnFunc)
	};

	function btnFunc(e) {
		let a = e.target.classList[4],
				b = e.type;
		if(b === 'mouseenter') {
			$('section.container').addClass('section-height');
			if(a === 'button1') {
				$('.personal-detail').addClass('fade-in');
			} else if(a === 'button2') {
				$('.education-detail').addClass('fade-in');
			} else if(a === 'button3') {
				$('.experience-detail').addClass('fade-in');
			}
		} else if(b === 'mouseleave') {
			if(a === 'button1') {
				$('.personal-detail').removeClass('fade-in');
			} else if(a === 'button2') {
				$('.education-detail').removeClass('fade-in');
			} else if(a === 'button3') {
				$('.experience-detail').removeClass('fade-in');
			}
			$('section.container').removeClass('section-height');
		}
		e.preventDefault()
	};

});