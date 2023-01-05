//function initRepoNavbar() {
// https://www.youtube.com/watch?v=gor5BvT2z88&ab_channel=KarlHadwen
// https://www.youtube.com/watch?v=7YeOjmpQUnU&ab_channel=CodingShiksha
//enumerates the properties of arishorts repo using Github API, then stores a string url for each repo

//******************Leave comments in here for possible reference*********************/
// function CarouselRepos(urlname, reponame) {
//   this.urlname = urlname;
//   this.reponame = reponame;
// }
//*************************************************************************************/
var aRepoArray = [];
var bRepoArray = [];
// var myOtherRepoArray = [];
// var myOtherOtherRepoObj = {};
function generateRepoAnchors() {
  fetch("https://api.github.com/users/arishorts/repos")
    .then((result) => result.json())
    .then((data) => {
      const myAPIObjects = Object.assign(data);
      const containerDivEl = document.getElementById("carousel");
      for (let key in myAPIObjects) {
        let urlnames = `https://arishorts.github.io/${myAPIObjects[key].name}/`;
        let reponames = myAPIObjects[key].name;
        let aRepo = urlnames;
        let bRepo = reponames;
        // myOtherOtherRepoObj = { ...aRepo };
        // console.log(myOtherOtherRepoObj);
        aRepoArray.push(aRepo);
        bRepoArray.push(bRepo);
        //console.log(myOtherRepoArray);
        //myRepoArray.push({ urlname: urlnames, reponame: reponames });
        const aEl = document.createElement("a");
        const spanEl = document.createElement("span");
        aEl.id = `carousel__item ${Number(key) + 1}`;
        aEl.href = urlnames;
        divEl.classList.add("carousel__item--text");
        divEl.innerHTML = reponames;
        containerDivEl.appendChild(aEl);
        aEl.appendChild(divEl);
      }
      let firstaEl = document.getElementById("carousel__item 1");
      firstaEl.id = "carousel__item carousel__item--visible";
    });

  //setInterval(changeElements, 1000);
}
generateRepoAnchors();

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;
console.log(totalSlides);

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
