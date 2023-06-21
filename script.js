const menuButton = document.querySelector(".navBtnMenu");
const mobileMenu = document.querySelector(".nav__mobile_menu");
const navMenu = document.querySelector(".header_bar");
const mobileMenuOptions = document.querySelectorAll(".nav_btn_list");
const navBtnMobileClosed = document.querySelector(".nav__btn_mobile_closed");
menuButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  navMenu.style.display = "none";
});
for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener("click", () => {
    mobileMenu.style.display = "none";
    navMenu.style.display = "block";
  });
}
navBtnMobileClosed.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  navMenu.style.display = "block";
});
// object for Main Work card
const cardProjectMob = {
  name: "Multi-Post Stories",
  decription:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry" +
    "s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featureImage: "images/works1.png",
  linkRef: [
    "https://developer.mozilla.org/es/docs/Web/CSS",
    "https://developer.mozilla.org/es/docs/Web/HTML",
    "https://getbootstrap.com/",
    "https://www.ruby-lang.org/es/",
  ],
  titles: [
    "CSS definition web page",
    "HTML definition web page",
    "Bootstrap definition web page",
    "Ruby definition web page",
  ],
  technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
  linkLive: "",
  linkSource: "",
};
// other card object
const cardProjectMob2 = {
  name: "Profesional Art Printing Data",
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry" +
    "s standard.",
  featureImage: "images/placeholderCard1.png",
  linkRef: [
    "https://developer.mozilla.org/es/docs/Web/HTML",
    "https://getbootstrap.com/",
    "https://www.ruby-lang.org/es/",
  ],
  titles: [
    "HTML definition web page",
    "Bootstrap definition web page",
    "Ruby definition web page",
  ],
  technologies: ["HTML", "Bootstrap", "Ruby"],
  linkLive: "",
  linkSource: ""
};
const projectsSection = document.querySelector(".works");
const wrapperSection = document.querySelector(".wrapperProjects");

//** Main Works ** //
const mainWorks = document.createElement("div");
mainWorks.className = "mainWorks";

//***** Works Top ***** //
const worksTop = document.createElement("div");
worksTop.className = "works__top";
const worksTitle = document.createElement("div");
const titleProjects = document.createElement("h2");
titleProjects.className = "title_projects";
titleProjects.innerText = "My Recent Works";
const workslineTop = document.createElement("div");
workslineTop.className = "workslineTop";
projectsSection.appendChild(wrapperSection);
wrapperSection.appendChild(mainWorks);
mainWorks.appendChild(worksTop);
worksTop.appendChild(worksTitle);
worksTitle.appendChild(titleProjects);
worksTop.appendChild(workslineTop);
//***** Works Top ***** //

//***** Works Card 1 ***** //
const worksCard1 = document.createElement("div");
worksCard1.className = "worksCard worksCard_1";
const imageCard1 = document.createElement("img");
imageCard1.src = cardProjectMob.featureImage;
const rightBlock = document.createElement("div");
rightBlock.className = "rightBlock";
const spanRightBlock = document.createElement("span");
spanRightBlock.innerHTML = cardProjectMob.name;
const pRightBlock = document.createElement("p");
pRightBlock.innerText = cardProjectMob.decription;
const worksLanguages = document.createElement("div");
worksLanguages.className = "worksLanguages";
const languagesItems = document.createElement("ul");
languagesItems.className = "languagesItems";
const langItemsList = document.createElement("li");
const worksBtnSee = document.createElement("a");
worksBtnSee.className = "worksBtnSee";
worksBtnSee.title = "Multi-Post Stories project link";
worksBtnSee.innerText = "See Project";
mainWorks.appendChild(worksCard1);
worksCard1.appendChild(imageCard1);
worksCard1.appendChild(rightBlock);
rightBlock.appendChild(spanRightBlock);
rightBlock.appendChild(pRightBlock);
rightBlock.appendChild(worksLanguages);
worksLanguages.appendChild(languagesItems);
//***** Create technologies ***** //
for (let i = 0; i < cardProjectMob.technologies.length; i++) {
  const langItemsList = document.createElement("li");
  const languageAnchor = document.createElement("a");
  languageAnchor.className = "languageAnchor";
  languageAnchor.title = cardProjectMob.titles[i];
  languageAnchor.href = cardProjectMob.linkRef[i];
  languageAnchor.innerText = cardProjectMob.technologies[i];
  languagesItems.appendChild(langItemsList);
  langItemsList.appendChild(languageAnchor);
}
rightBlock.appendChild(worksBtnSee);
//***** Works Card 1 ***** //
// created another card
//Other card for loop
for (let i = 0; i < 6; i++) {
  const worksCardGrid = document.createElement("div");
  worksCardGrid.className = "worksCard worksCard_2 worksCard_mob";
  mainWorks.appendChild(worksCardGrid);
  const detailProject = document.createElement("div");
  detailProject.className = "detail_project";
  const spanCardMob2 = document.createElement("span");
  const pCardMob2 = document.createElement("p");
  const worksLanguages = document.createElement("div");
  worksLanguages.className = "worksLanguages";
  const languageItemMob2 = document.createElement("ul");
  languageItemMob2.className = "languagesItems languagesItems_2";
  worksCardGrid.appendChild(detailProject);
  detailProject.appendChild(spanCardMob2);
  detailProject.appendChild(pCardMob2);
  detailProject.appendChild(worksLanguages);
  worksLanguages.appendChild(languageItemMob2);
  for (let i = 0; i < cardProjectMob2.technologies.length; i++) {
    let listContentMob2 = document.createElement("li");
    let anchorContentMob2 = document.createElement("a");
    languageItemMob2.appendChild(listContentMob2);
    listContentMob2.appendChild(anchorContentMob2);
    pCardMob2.innerText = cardProjectMob2.description;
    spanCardMob2.innerText = cardProjectMob2.name;
    anchorContentMob2 = cardProjectMob2.titles[i];
    anchorContentMob2.href = cardProjectMob2.linkRef[i];
    anchorContentMob2.innerText = cardProjectMob2.technologies[i];
    anchorContentMob2.title = cardProjectMob2.titles[i];
  }
  const worksBtnSee2 = document.createElement("a");
  worksBtnSee2.className = "worksBtnSee_2";
  worksBtnSee2.innerText = 'See project';
  worksCardGrid.appendChild(worksBtnSee2);
}
//creating anchor tag
menuButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  navMenu.style.display = "none";
});

for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener("click", () => {
    mobileMenu.style.display = "none";
    navMenu.style.display = "block";
  });
}
navBtnMobileClosed.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  navMenu.style.display = "block";
});
