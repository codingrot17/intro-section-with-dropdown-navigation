const arrowParent = document.querySelector('.arrow_parent');

arrowParent.addEventListener('mouseover', function down() {
  const arrow = document.querySelector('.arrow');
  arrow.src = 'images/icon-arrow-up.svg';
});

arrowParent.addEventListener('mouseout', function down() {
  const arrow = document.querySelector('.arrow');
  arrow.src = 'images/icon-arrow-down.svg';
});

const arrowParent2 = document.querySelector('.arrow_parent2');

arrowParent2.addEventListener('mouseover', function down() {
  const arrow2 = document.querySelector('.arrow2');
  arrow2.src = 'images/icon-arrow-up.svg';
});

arrowParent2.addEventListener('mouseout', function down() {
  const arrow2 = document.querySelector('.arrow2');
  arrow2.src = 'images/icon-arrow-down.svg';
});


const menuIcon = document.getElementById('icon');
const closeIcon = document.getElementById('close_icon');
const menu_bar = document.getElementById('navigation');
const transparent_bar = document.querySelector('.transparent_background');

menuIcon.addEventListener('click', () =>{
  menuIcon.style.display="none";
  closeIcon.style.display="block";
  menu_bar.style.display="block";
  transparent_bar.style.display="block";
});

closeIcon.addEventListener('click', () =>{
  closeIcon.style.display="none";
  menuIcon.style.display="inline";
  menu_bar.style.display="none";
  transparent_bar.style.display="none";
});

const firstFeature = document.getElementById('first_feature');
const secondFeature = document.getElementById('second_feature');
const featureNav = document.getElementById('feature_nav');

firstFeature.addEventListener('click', () =>{
  firstFeature.style.display='none';
  secondFeature.style.display='block';
  featureNav.style.display='block';
});

secondFeature.addEventListener('click', () => {
  firstFeature.style.display='block';
  secondFeature.style.display='none';
  featureNav.style.display='none';
})

const firstCompany = document.getElementById('first_company');
const secondCompany = document.getElementById('second_company');
const companyNav = document.getElementById('company_nav');

firstCompany.addEventListener('click', () =>{
  firstCompany.style.display='none';
  secondCompany.style.display='block';
  companyNav.style.display='block';
});

secondCompany.addEventListener('click', () => {
  firstCompany.style.display='block';
  secondCompany.style.display='none';
  companyNav.style.display='none';
})