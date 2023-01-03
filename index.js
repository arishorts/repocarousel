//function initRepoNavbar() {

//enumerates the properties of arishorts repo using Github API, then stores a string url for each repo

function generateRepoAnchors() {
  let myRepoArray = [];
  fetch("https://api.github.com/users/arishorts/repos")
    .then((result) => result.json())
    .then((data) => {
      const myAPIObjects = Object.assign(data);
      const bodyEl = document.querySelector("body");
      for (let key in myAPIObjects) {
        let urlnames = `https://arishorts.github.io/${myAPIObjects[key].name}/`;
        let reponames = myAPIObjects[key].name;
        myRepoArray.push({ urlname: urlnames, reponame: reponames });
        const aEl = document.createElement("a");
        const divEl = document.createElement("div");
        aEl.innerHTML = reponames;
        aEl.href = urlnames;
        bodyEl.appendChild(divEl);
        divEl.appendChild(aEl);
      }
    });
}
generateRepoAnchors();
