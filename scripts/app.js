import { RenderUI } from "./RenderUI.js";
import { DataManager } from "./DataManager.js";

const app = () => {
  const input = document.querySelector(".item-input");
  const submitButton = document.querySelector(".item-submit");
  const removeAllButton = document.querySelector(".item-remove-all");
  const listContainer = document.querySelector(".list-output");
  const messageContainer = document.querySelector(".message");

  const dataManager = new DataManager();
  const renderer = new RenderUI();

  const loadInitialData = async () => {
    const loadedData = await dataManager.loadData(messageContainer);
    renderer.renderList(listContainer, loadedData);
  };

  loadInitialData();

  const addListItem = () => {
    const inputValue = input.value;
    if (inputValue === "") {
      alert(`You'd better fill in the input first`);
      return;
    }
    const item = {
      id: new Date().getTime(),
      title: inputValue,
      isChecked: false,
    };
    dataManager.addItemData(item);
    input.value = "";
  };

  submitButton.addEventListener("click", addListItem);

  const removeListItem = (itemId) => {
    dataManager.removeItemData(itemId);
  };

  listContainer.addEventListener("click", (e) => {
    const elementId = parseInt(e.target.closest(".item").dataset.id);
    if (e.target.classList.contains("item-toggle")) {
      dataManager.toggleItemData(elementId);
    }
    if (e.target.classList.contains("item-remove")) {
      removeListItem(elementId);
    }
  });

  const removeAllItems = () => {
    // dataManager.data.forEach((item) => removeListItem(item.id));
    dataManager.removeAllData();
  };

  removeAllButton.addEventListener("click", removeAllItems);
};

const myApp = app();
