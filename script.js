const menuButton = document.querySelector('.navBtnMenu');
const mobileMenu = document.querySelector('.nav__mobile_menu');
const navMenu = document.querySelector('.header_bar');
const mobileMenuOptions = document.querySelectorAll('.nav_btn_list');
const navBtnMobileClosed = document.querySelector('.nav__btn_mobile_closed');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  navMenu.style.display = 'none';
});

for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navMenu.style.display = 'block';
  });
}

navBtnMobileClosed.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navMenu.style.display = 'block';
});

const cardProjectMob = {name: 'Multi-Post Stories', decription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry'+'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', featureImage: 'images/works1.png', linkRef: ['https://developer.mozilla.org/es/docs/Web/CSS', 'https://developer.mozilla.org/es/docs/Web/HTML', 'https://getbootstrap.com/', 'https://www.ruby-lang.org/es/'], titles: ['CSS definition web page','HTML definition web page', 'Bootstrap definition web page', 'Ruby definition web page'], technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'], linkLive: '', linkSource:''};
const projectsSection = document.querySelector('.works');
const wrapperSection = document.querySelector('.wrapperProjects');

//** Main Works ** //
const mainWorks = document.createElement('div');
mainWorks.className = 'mainWorks';

//***** Works Top ***** //
const worksTop = document.createElement('div');
worksTop.className = 'works__top';
const worksTitle = document.createElement('div');
const titleProjects = document.createElement('h2');
titleProjects.className = 'title_projects';
titleProjects.innerText = 'My Recent Works';
const workslineTop = document.createElement('div');
workslineTop.className = 'workslineTop';

projectsSection.appendChild(wrapperSection);
wrapperSection.appendChild(mainWorks);
mainWorks.appendChild(worksTop);

worksTop.appendChild(worksTitle);
worksTitle.appendChild(titleProjects);
worksTop.appendChild(workslineTop);
//***** Works Top ***** //

//***** Works Card 1 ***** //
const worksCard1 = document.createElement('div');
worksCard1.className = 'worksCard worksCard_1';
const imageCard1 = document.createElement('img');
imageCard1.src = cardProjectMob.featureImage;
const rightBlock = document.createElement('div');
rightBlock.className = 'rightBlock';
const spanRightBlock = document.createElement('span');
spanRightBlock.innerHTML = cardProjectMob.name;
const pRightBlock = document.createElement('p');
pRightBlock.innerText = cardProjectMob.decription;
const worksLanguages = document.createElement('div');
worksLanguages.className = 'worksLanguages';
const languagesItems = document.createElement('ul');
languagesItems.className = 'languagesItems';
const langItemsList = document.createElement('li');
const worksBtnSee = document.createElement('a');
worksBtnSee.className = 'worksBtnSee';
worksBtnSee.title = 'Multi-Post Stories project link';
worksBtnSee.innerText = 'See Project';
mainWorks.appendChild(worksCard1);
worksCard1.appendChild(imageCard1);
worksCard1.appendChild(rightBlock);
rightBlock.appendChild(spanRightBlock);
rightBlock.appendChild(pRightBlock);
rightBlock.appendChild(worksLanguages);
worksLanguages.appendChild(languagesItems); 
//***** Create technologies ***** //
for (let i=0;i<cardProjectMob.technologies.length;i++) {
	const langItemsList = document.createElement('li');
	const languageAnchor = document.createElement('a');
	languageAnchor.className = 'languageAnchor';
	languageAnchor.title = cardProjectMob.titles[i];
	languageAnchor.href = cardProjectMob.linkRef[i];
	languageAnchor.innerText = cardProjectMob.technologies[i];
	languagesItems.appendChild(langItemsList);
	langItemsList.appendChild(languageAnchor);
}
rightBlock.appendChild(worksBtnSee);
//***** Works Card 1 ***** //

const worksCardDesk = document.createElement('div');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  navMenu.style.display = 'none';
});

for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navMenu.style.display = 'block';
  });
}

navBtnMobileClosed.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navMenu.style.display = 'block';
});
