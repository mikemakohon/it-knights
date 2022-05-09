"use strict";

const cardContainer = document.querySelector(".card-container");
let searchType = document.querySelector(".searchbar");
let searchTypeValue = searchType.value;
let searchInput = document.querySelector(".searchInput");
const ascButtonSort = document.querySelector(".sort-asc");
const descButtonSort = document.querySelector(".sort-desc");
const paginationPage = document.querySelector(".page");

const list = new List(data);

function getEmailTemplate(email) {
  return `<div class="mail-card">
          <h4>${email.author}</h4>
          <a href="">${email.title}</a>
          <p>${email.createdAt}</p>
          <p class="toggle hidden">${email.emailText}</p>
          </div>
          `;
}

function renderList(data) {
  const dataHTML = data.map((email) => getEmailTemplate(email)).join("");
  cardContainer.innerHTML = dataHTML;
}

// renderList(list.data);

cardContainer.addEventListener("click", (e) => {
  const element = e.target.closest(".mail-card");
  element.querySelector(".toggle").classList.toggle("hidden");
});

searchType.addEventListener("change", () => {
  searchTypeValue = searchType.value;
});

searchInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    list.currentData = [
      ...list.data.filter((email) =>
        email[`${searchTypeValue}`].includes(value)
      ),
    ];
  } else {
    buildPage(1);
  }
  renderList(list.currentData);
});

ascButtonSort.addEventListener("click", () => {
  list.sortedData = [
    ...list.currentData.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ),
  ];
  renderList(list.sortedData);
});
descButtonSort.addEventListener("click", () => {
  list.sortedData = [
    ...list.currentData.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ),
  ];
  renderList(list.sortedData);
});

function buildPage(currentPage) {
  const trimStart = (currentPage - 1) * list.numberPerPage;
  const trimEnd = trimStart + list.numberPerPage;
  list.currentData = [...list.data.slice(trimStart, trimEnd)];
  renderList(list.currentData);
}

paginationPage.innerHTML = list.currentPage;
buildPage(list.currentPage);

document.querySelector(".prev-page").addEventListener("click", () => {
  list.currentPage > 1 ? list.currentPage-- : list.currentPage;
  paginationPage.innerHTML = list.currentPage;
  buildPage(list.currentPage);
});

document.querySelector(".next-page").addEventListener("click", () => {
  list.currentPage < list.numberOfPages ? list.currentPage++ : list.currentPage;
  paginationPage.innerHTML = list.currentPage;
  buildPage(list.currentPage);
});
