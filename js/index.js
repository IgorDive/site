;(function() {
	
	let statusElemMenu = document.querySelectorAll('li');
	let currentState = statusElemMenu[0];
	let topBorderServices = document.getElementById('services').offsetTop;
	let topBorderSolutions = document.getElementById('solutions').offsetTop;
	let topBorderPortfolio = document.getElementById('portfolio').offsetTop;
	let topBorderContacts = document.getElementById('contacts').offsetTop;
	let topBorderWrapOfCounters = document.querySelector('.wrapper-of-counters').offsetTop;
	let heightOfWrapOfCounters = document.querySelector('.wrapper-of-counters').offsetHeight;
	let valueOfCounters = [11, 83, 100, 82, 15, 60];
	let arrOfCounters = document.querySelectorAll('.counter');
	let arrOfCountersSpan = document.querySelectorAll('.counter>span');
	let currentValues = [0, 0, 0, 0, 0, 0];
	let growthRatio = 0.05;
	let key;
	let counter = 0;

	let topBorderTeam = document.getElementById('team').offsetTop;
	let screenHeight = document.documentElement.clientHeight;
	let massOfTitles = document.querySelectorAll('.back-title');
	let heightOfTitle = massOfTitles[0].clientHeight;
	let heightH2 = document.querySelector('h2').clientHeight;
	let ratioOfParallax = 0.71*heightH2 / screenHeight;

	let slider = document.querySelector('.slider-of-members');
	let rootSlider = document.querySelector('.slider');
	let wathWindow = document.querySelector('.slider-window-of-members');
	let btnRight = document.querySelector('.slider-button-right');
	let btnLeft = document.querySelector('.slider-button-left');
	let renderCounters = () => {
		if (currentValues[2] === valueOfCounters[2]) return window.clearInterval(key);

		currentValues.forEach( (v, i, arr) => {
			arr[i] = v + growthRatio * valueOfCounters[i];
		});

		arrOfCountersSpan.forEach( (c, i) => c.innerHTML = `${Math.round(currentValues[i])}` );	
	};

	let turnMembers = (e) => {
		
		if (e.target.dataset.button === "left") {
			if ( !parseFloat(getComputedStyle(slider).left) ) {
				btnLeft.style.opacity = 0.3;
				btnLeft.style.cursor = 'default';
				return;
			}
			let scrLeft = parseFloat(getComputedStyle(slider).left) + wathWindow.clientWidth;
			if (scrLeft > 0) { 
				slider.style.left = '0px';
				btnLeft.style.opacity = 0.3;
				btnLeft.style.cursor = 'default';
				return;
			}
			btnRight.style.opacity = 1;
			btnRight.style.cursor = '';
			slider.style.left = `${scrLeft}px`;
		}

		if (e.target.dataset.button === "right") {
			if ( parseFloat(getComputedStyle(slider).left) === wathWindow.offsetWidth - slider.offsetWidth) {
				btnRight.style.opacity = 0.3;
				btnRight.style.cursor = 'default';
				return;
			}

			let scrLeft = parseFloat(getComputedStyle(slider).left) - wathWindow.clientWidth;
			if (scrLeft < wathWindow.offsetWidth - slider.offsetWidth) {
				btnRight.style.opacity = 0.3;
				btnRight.style.cursor = 'default';
				slider.style.left = `${wathWindow.offsetWidth - slider.offsetWidth}px`;
				return;
			}
			
			btnLeft.style.opacity = 1;
			btnLeft.style.cursor = '';
			slider.style.left = `${scrLeft}px`;  
		}
	};

	let arrOfWrapperOfMember = document.querySelectorAll('.slider-wrapper-of-member');
	let assignWidthOfWrapperOfMember = () => {
		let currHeightOfMember = 0.874 * arrOfWrapperOfMember[0].offsetHeight;

		arrOfWrapperOfMember.forEach( w => w.style.width = `${currHeightOfMember}px` );
	};

	let addWChange = () => { slider.style.willChange = 'left' };
	let removeWChange = () => { slider.style.willChange = 'auto' }; 

	
	window.addEventListener('scroll', changeStatusNav, false);

	rootSlider.addEventListener('click', turnMembers, false);

	window.addEventListener('resize', assignWidthOfWrapperOfMember, false);

	btnLeft.addEventListener('mouseenter', addWChange, false);
	btnRight.addEventListener('mouseenter', addWChange, false);
	btnLeft.addEventListener('mouseleave', removeWChange, false);
	btnRight.addEventListener('mouseleave', removeWChange, false);

	assignWidthOfWrapperOfMember();
	btnLeft.style.opacity = 0.3;
	btnLeft.style.cursor = 'default';

				
	function changeStatusNav() {

		if (window.scrollY >= topBorderServices - screenHeight) {
				massOfTitles[0].style.top = `${(window.scrollY - topBorderServices + screenHeight) * ratioOfParallax - 0.8*heightOfTitle}px`;
			};
		if (window.scrollY >= topBorderSolutions - screenHeight) {
			massOfTitles[1].style.top = `${(window.scrollY - topBorderSolutions + screenHeight) * ratioOfParallax - 0.8*heightOfTitle}px`;
		};
		if (window.scrollY >= topBorderPortfolio - screenHeight) {
			massOfTitles[2].style.top = `${(window.scrollY - topBorderPortfolio + screenHeight) * ratioOfParallax - 0.8*heightOfTitle}px`;
		};
		if (window.scrollY >= topBorderTeam - screenHeight) {
			massOfTitles[3].style.top = `${(window.scrollY - topBorderTeam + screenHeight) * ratioOfParallax - 0.8*heightOfTitle}px`;
		};
		if (window.scrollY >= topBorderContacts - screenHeight) {
			massOfTitles[4].style.top = `${(window.scrollY - topBorderContacts + screenHeight) * ratioOfParallax - 0.8*heightOfTitle}px`;
		};


		if ( window.scrollY + screenHeight >= topBorderSolutions + topBorderWrapOfCounters + heightOfWrapOfCounters ) {
			if (!counter) {
				key =  window.setInterval(renderCounters, 50);
				arrOfCounters.forEach( c => c.classList.add('isVisible') );
				counter = 1;
			};
		};




		if (window.scrollY < topBorderServices - 1) {
			if (currentState === statusElemMenu[0]) return;

			for (let i = 0; i < statusElemMenu.length; i++) {
				statusElemMenu[i].className = '';
			};
			statusElemMenu[0].className = 'active';
			currentState = statusElemMenu[0];
		};
		if (window.scrollY >= topBorderServices - 1 && window.scrollY < topBorderSolutions - 1) {
			if (currentState === statusElemMenu[1]) return;

			for (let i = 0; i < statusElemMenu.length; i++) {
				statusElemMenu[i].className = '';
			};
			statusElemMenu[1].className = 'active';
			currentState = statusElemMenu[1];
		};
		if (window.scrollY >= topBorderSolutions - 1 && window.scrollY < topBorderPortfolio - 1) {
			if (currentState === statusElemMenu[2]) return;

			for (let i = 0; i < statusElemMenu.length; i++) {
				statusElemMenu[i].className = '';
			};
			statusElemMenu[2].className = 'active';
			currentState = statusElemMenu[2];
		};
		if (window.scrollY >= topBorderPortfolio - 1 && window.scrollY < topBorderContacts - 1) {
			if (currentState === statusElemMenu[3]) return;

			for (let i = 0; i < statusElemMenu.length; i++) {
				statusElemMenu[i].className = '';
			};
			statusElemMenu[3].className = 'active';
			currentState = statusElemMenu[3];
		};
		if (window.scrollY >= topBorderContacts - 1) {
			if (currentState === statusElemMenu[4]) return;

			for (let i = 0; i < statusElemMenu.length; i++) {
				statusElemMenu[i].className = '';
			};
			statusElemMenu[4].className = 'active';
			currentState = statusElemMenu[4];
		};			
	};
})();