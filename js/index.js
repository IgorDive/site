;(function() {
				let statusElemMenu = document.querySelectorAll('li');
				let currentState = statusElemMenu[0];
				let topBorderServices = document.getElementById('services').offsetTop;
				let topBorderSolutions = document.getElementById('solutions').offsetTop;
				let topBorderPortfolio = document.getElementById('portfolio').offsetTop;
				let topBorderContacts = document.getElementById('contacts').offsetTop;

				let topBorderTeam = document.getElementById('team').offsetTop;
				let screenHeight = document.documentElement.clientHeight;
				let massOfTitles = document.querySelectorAll('.back-title');
				let heightOfTitle = massOfTitles[0].clientHeight;
				let heightH2 = document.querySelector('h2').clientHeight;
				let ratioOfParallax = 0.71*heightH2 / screenHeight; 

				
				window.addEventListener('scroll', changeStatusNav, false);

							
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