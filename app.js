const loadData = () => JSON.parse(localStorage.getItem("items")) || [];
const saveData = (updItems) =>
  localStorage.setItem("items", JSON.stringify(updItems));

const renderListItem = (listItem) => {
  return `<li class="item" data-id="${listItem.id}"
          <label><span class="${listItem.isChecked ? "checked" : ""}">${
    listItem.title
  }</span><input type="checkbox" class="item-toggle" ${
    listItem.isChecked ? "checked" : ""
  }>
          </label>
          <button class="item-remove">x</button>
          </li> 
          `;
};

const renderList = (listItems) => {
  const listItemsHtml = listItems.map(renderListItem);
  return listItemsHtml.join("");
};

const app = () => {
  const data = loadData();
  const list = new Todolist(data);
  const input = document.querySelector(".item-input");
  const listContainer = document.querySelector(".list-output");
  const submitButton = document.querySelector(".item-submit");
  const removeAllButton = document.querySelector(".item-remove-all");

  const render = () => {
    listContainer.innerHTML = renderList(list.items);
  };

  const addListItem = () => {
    const inputValue = input.value;
    if (inputValue === "") {
      alert(`You'd better fill in the input first`);
      return;
    }
    list.addItem(inputValue);
    render();
    saveData(list.items);
    input.value = "";
  };

  submitButton.addEventListener("click", addListItem);

  const removeListItem = (itemId) => {
    list.removeItem(itemId);
    saveData(list.items);
    render();
  };

  listContainer.addEventListener("click", (e) => {
    const elementId = parseInt(e.target.closest(".item").dataset.id);
    if (e.target.classList.contains("item-toggle")) {
      list.toggleItem(elementId);
      saveData(list.items);
      render();
    }
    if (e.target.classList.contains("item-remove")) {
      removeListItem(elementId);
      saveData(list.items);
    }
  });

  const removeAllItems = () => {
    saveData(list.setItems([]));
    localStorage.clear();
    render();
  };

  removeAllButton.addEventListener("click", removeAllItems);

  return {
    render,
  };
};

const myApp = app();
myApp.render();
