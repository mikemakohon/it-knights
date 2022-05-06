"use strict";

const cardContainer = document.querySelector(".card-container");
let searchType = document.querySelector(".searchbar");
let searchTypeValue = searchType.value;
let searchInput = document.querySelector(".searchInput");
const ascButtonSort = document.querySelector(".sort-asc");
const descButtonSort = document.querySelector(".sort-desc");
let filteredData = [];
const paginationPage = document.querySelector(".page");

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
  // cardContainer.insertAdjacentHTML("beforeEnd", dataHTML);
  cardContainer.innerHTML = dataHTML;
}

// renderList(data);

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
    filteredData = [
      ...data.filter((email) => email[`${searchTypeValue}`].includes(value)),
    ];
  } else {
    renderList(data);
  }
  renderList(filteredData);
});

ascButtonSort.addEventListener("click", () => {
  let inputData = [];
  if (filteredData.length === 0) {
    inputData = [...data];
  } else {
    inputData = [...filteredData];
  }
  let sortedData = [
    ...inputData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  ];
  renderList(sortedData);
});

descButtonSort.addEventListener("click", () => {
  let inputData = [];
  if (filteredData.length === 0) {
    inputData = [...data];
  } else {
    inputData = [...filteredData];
  }
  let sortedData = [
    ...inputData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
  ];
  renderList(sortedData);
});

// Pagination
const numberOfItems = data.length;
const numberPerPage = 7;
let currentPage = 1;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

function buildPage(currentPage) {
  const trimStart = (currentPage - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;
  renderList(data.slice(trimStart, trimEnd));
}

buildPage(currentPage);

document.querySelector(".prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
  }
  paginationPage.innerHTML = currentPage;
  buildPage(currentPage);
});

document.querySelector(".next-page").addEventListener("click", () => {
  if (currentPage < numberOfPages) {
    currentPage++;
  }
  paginationPage.innerHTML = currentPage;
  buildPage(currentPage);
});

paginationPage.innerHTML = currentPage;
