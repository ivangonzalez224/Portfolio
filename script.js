//* **** Mobile Menu*****/
const menuButton = document.querySelector('.navBtnMenu');
const mobileMenu = document.querySelector('.nav__mobile_menu');
const navMenu = document.querySelector('.header_bar');
const mobileMenuOptions = document.querySelectorAll('.nav_btn_list');
const navBtnMobileClosed = document.querySelector('.nav__btn_mobile_closed');

// Contact form //
const form = document.getElementById('contact_form');
const emailInput = document.getElementById('emailInput');

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
// Mobile Menu //

// card object data //
const cardProjectDesk = {
  name: ['Multi-Post Stories', 'Profesional Art Printing Data', 'Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data', 'Data Dashboard Healthcare', 'Website Portfolio'],
  description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard."],
  featureImage: ['images/works1.png', './images/imgProject1.svg', './images/placeholderCard2.svg', './images/placeholderCard3.svg', './images/placeholderCard1.png', './images/placeholderCard2.svg', './images/placeholderCard3.svg'],
  linkRef: [
    'https://developer.mozilla.org/es/docs/Web/CSS',
    'https://developer.mozilla.org/es/docs/Web/HTML',
    'https://getbootstrap.com/',
    'https://www.ruby-lang.org/es/',
  ],
  titles: [
    'CSS definition web page',
    'HTML definition web page',
    'Bootstrap definition web page',
    'Ruby definition web page',
  ],
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  linkLive: ['https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/', 'https://ivangonzalez224.github.io/portfolio.io/'],
  linkSource: ['https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io', 'https://github.com/ivangonzalez224/portfolio.io'],
};
// card object data //
const [name0] = cardProjectDesk.name;
const [descrip0] = cardProjectDesk.description;
const [feat0] = cardProjectDesk.featureImage;

const projectsSection = document.querySelector('.works');
const wrapperSection = document.querySelector('.wrapperProjects');
const popupMain = document.querySelector('.popup_main');

// Create popup window //
const popupDiv = document.createElement('div');
popupDiv.className = 'popup_div';
const popupTopDiv = document.createElement('div');
popupDiv.className = 'popup_topDiv';
const popuptitleDiv = document.createElement('div');
popuptitleDiv.className = 'popup_divTitle';
const popupTitle = document.createElement('h2');
popupTitle.innerText = name0;
const popupBtnClosed = document.createElement('a');
popupBtnClosed.className = 'poppup_btnClosed';
const popupImgBtnClosed = document.createElement('img');
popupImgBtnClosed.src = 'images/closedPopup.svg';
popupImgBtnClosed.alt = 'popup closed button';
const popupTechUl = document.createElement('ul');
popupTechUl.className = 'popup_tech_ul';
popupMain.appendChild(popupDiv);
popupDiv.appendChild(popupTopDiv);
popupTopDiv.appendChild(popuptitleDiv);
popuptitleDiv.appendChild(popupTitle);
popuptitleDiv.appendChild(popupBtnClosed);
popupBtnClosed.appendChild(popupImgBtnClosed);
popupTopDiv.appendChild(popupTechUl);
for (let j = 0; j < cardProjectDesk.technologies.length; j += 1) {
  const popuplistTech = document.createElement('li');
  const popupAnchorTech = document.createElement('a');
  popupAnchorTech.href = cardProjectDesk.linkRef[j];
  popupAnchorTech.innerText = cardProjectDesk.technologies[j];
  popupAnchorTech.title = cardProjectDesk.titles[j];
  popupTechUl.appendChild(popuplistTech);
  popuplistTech.appendChild(popupAnchorTech);
}
const popupContentDiv = document.createElement('div');
popupContentDiv.className = 'popup_contentDiv';
const popupMainProjectImg = document.createElement('img');
popupMainProjectImg.className = 'popup_mainImg';
popupMainProjectImg.src = 'images/imgPopupProj.svg';
const popupContentRight = document.createElement('div');
popupContentRight.className = 'popup_contentRight';
const popupDescrip = document.createElement('p');
popupDescrip.innerText = descrip0;
const popupBtnsUl = document.createElement('ul');
const popuplistLive = document.createElement('li');
const popupBtnLive = document.createElement('a');
popupBtnLive.className = 'popup_btnSee';
const popupLiveImg = document.createElement('img');
popupLiveImg.src = 'images/imgLive.svg';
popupBtnLive.innerText = 'See live';
popupBtnLive.title = 'live demo link';
const popupListGit = document.createElement('li');
const popupBtnGit = document.createElement('a');
popupBtnGit.className = 'popup_btnSee';
const popupSourceImg = document.createElement('img');
popupSourceImg.src = 'images/imgSourceGitHub.svg';
popupBtnGit.innerText = 'See source';
popupBtnGit.title = 'git source link';
popupDiv.appendChild(popupContentDiv);
popupContentDiv.appendChild(popupMainProjectImg);
popupContentDiv.appendChild(popupContentRight);
popupContentRight.appendChild(popupDescrip);
popupContentRight.appendChild(popupBtnsUl);
popupBtnsUl.appendChild(popuplistLive);
popuplistLive.appendChild(popupBtnLive);
popuplistLive.appendChild(popupLiveImg);
popupBtnsUl.appendChild(popupListGit);
popupListGit.appendChild(popupBtnGit);
popupListGit.appendChild(popupSourceImg);

// Main Works //
const mainWorks = document.createElement('div');
mainWorks.className = 'mainWorks';

// Works Top //
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
// Works Top //

// Works Card 1 //
const worksCard1 = document.createElement('div');
worksCard1.className = 'worksCard worksCard_1';
const imageCard1 = document.createElement('img');
imageCard1.src = feat0;
const rightBlock = document.createElement('div');
rightBlock.className = 'rightBlock';
const spanRightBlock = document.createElement('span');
spanRightBlock.innerHTML = name0;
const pRightBlock = document.createElement('p');
pRightBlock.innerText = descrip0;
const worksLanguages = document.createElement('div');
worksLanguages.className = 'worksLanguages';
const languagesItems = document.createElement('ul');
languagesItems.className = 'languagesItems';
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
// Create technologies buttons//
for (let i = 0; i < cardProjectDesk.technologies.length; i += 1) {
  const langItemsList = document.createElement('li');
  const languageAnchor = document.createElement('a');
  languageAnchor.className = 'languageAnchor';
  languageAnchor.title = cardProjectDesk.titles[i];
  languageAnchor.href = cardProjectDesk.linkRef[i];
  languageAnchor.innerText = cardProjectDesk.technologies[i];
  languagesItems.appendChild(langItemsList);
  langItemsList.appendChild(languageAnchor);
}
rightBlock.appendChild(worksBtnSee);
// Works Card 1 //

// create secondary cards //
for (let i = 0; i < 6; i += 1) {
  const worksCardGrid = document.createElement('div');
  worksCardGrid.className = 'worksCard worksCard_2 worksCard_mob';
  const detailProject = document.createElement('div');
  detailProject.className = 'detail_project';
  const spanCardMob2 = document.createElement('span');
  spanCardMob2.innerText = cardProjectDesk.name[i];
  const pCardMob2 = document.createElement('p');
  pCardMob2.innerText = cardProjectDesk.description[i];
  const worksLanguages = document.createElement('div');
  worksLanguages.className = 'worksLanguages';
  const languageItemsMob2 = document.createElement('ul');
  languageItemsMob2.className = 'languagesItems languagesItems_2';
  mainWorks.appendChild(worksCardGrid);
  worksCardGrid.appendChild(detailProject);
  detailProject.appendChild(spanCardMob2);
  detailProject.appendChild(pCardMob2);
  detailProject.appendChild(worksLanguages);
  worksLanguages.appendChild(languageItemsMob2);
  // Create technologies buttons for secondary cards//
  for (let j = 1; j < cardProjectDesk.technologies.length; j += 1) {
    const listContentMob2 = document.createElement('li');
    const anchorContentMob2 = document.createElement('a');
    anchorContentMob2.href = cardProjectDesk.linkRef[j];
    anchorContentMob2.innerText = cardProjectDesk.technologies[j];
    anchorContentMob2.title = cardProjectDesk.titles[j];
    languageItemsMob2.appendChild(listContentMob2);
    listContentMob2.appendChild(anchorContentMob2);
  }
  const worksBtnSee2 = document.createElement('a');
  // worksBtnSee2.id = i;
  worksBtnSee2.className = 'worksBtnSee_2';
  worksBtnSee2.innerText = 'See project';
  worksBtnSee2.title = 'Profesional Art Printing Data project link';
  worksCardGrid.appendChild(worksBtnSee2);
}
const worksCardDesk = document.createElement('div');
worksCardDesk.className = 'worksCard_desk';
mainWorks.appendChild(worksCardDesk);

for (let i = 1; i < 7; i += 1) {
  const worksCardDeskAux = document.createElement('div');
  worksCardDeskAux.className = 'worksCard worksCard_2 worksCard_desk_aux';
  worksCardDeskAux.style.backgroundImage = `url(${cardProjectDesk.featureImage[i]})`;
  const detailProjectDesk = document.createElement('div');
  detailProjectDesk.className = 'detail_project';
  const spanCardDesk = document.createElement('span');
  spanCardDesk.innerText = cardProjectDesk.name[i];
  const pCardDesk = document.createElement('p');
  pCardDesk.innerText = cardProjectDesk.description[i];
  const worksLanguagesDesk = document.createElement('div');
  worksLanguagesDesk.className = 'worksLanguages';
  const languageItemsDesk = document.createElement('ul');
  languageItemsDesk.className = 'languagesItems languagesItems_2';
  worksCardDesk.appendChild(worksCardDeskAux);
  worksCardDeskAux.appendChild(detailProjectDesk);
  const worksBtnSee2Desk = document.createElement('a');
  worksBtnSee2Desk.innerText = 'See project';
  worksBtnSee2Desk.title = `${cardProjectDesk.name[i]} link`;
  worksBtnSee2Desk.id = i;
  worksBtnSee2Desk.addEventListener('click', () => {
    popupMain.style.display = 'block';
    popupTitle.innerText = cardProjectDesk.name[worksBtnSee2Desk.id];
    popupDescrip.innerText = cardProjectDesk.description[worksBtnSee2Desk.id];
    popupBtnLive.href = cardProjectDesk.linkLive[worksBtnSee2Desk.id];
    popupBtnGit.href = cardProjectDesk.linkSource[worksBtnSee2Desk.id];
  });
  if (i > 1) {
    detailProjectDesk.appendChild(spanCardDesk);
    detailProjectDesk.appendChild(pCardDesk);
    detailProjectDesk.appendChild(worksLanguagesDesk);
    worksLanguagesDesk.appendChild(languageItemsDesk);
    worksBtnSee2Desk.className = 'worksBtnSee_2';
  } else {
    worksBtnSee2Desk.className = 'worksBtnSee_2 worksBtnSee_3';
  }
  // Create technologies buttons for secondary cards //
  for (let j = 1; j < cardProjectDesk.technologies.length; j += 1) {
    const listContentDesk = document.createElement('li');
    const anchorContentDesk = document.createElement('a');
    anchorContentDesk.href = cardProjectDesk.linkRef[j];
    anchorContentDesk.innerText = cardProjectDesk.technologies[j];
    anchorContentDesk.title = cardProjectDesk.titles[j];
    languageItemsDesk.appendChild(listContentDesk);
    listContentDesk.appendChild(anchorContentDesk);
  }
  worksCardDeskAux.appendChild(worksBtnSee2Desk);
}

// closing button popup
document.querySelector('.poppup_btnClosed').addEventListener('click', () => {
  popupMain.style.display = 'none';
  document.querySelector('.popupMainDiv').style.display = 'none';
});
worksBtnSee.addEventListener('click', () => {
  popupMain.style.display = 'flex';
  document.querySelector('.popupMainDiv').style.display = 'flex';
});
const allBtns = document.querySelectorAll('.worksBtnSee_2');
allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupMain.style.display = 'flex';
    document.querySelector('.popupMainDiv').style.display = 'flex';
  });
});
// validate email field //
form.addEventListener('submit', (event) => {
  const emailchecking = emailInput.value.toLowerCase();
  if (emailInput.value !== emailchecking) {
    event.preventDefault();
    document.querySelector('.errorMessage').innerHTML = 'Please enter an email in lowercase only';
  }
});