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
  const list = new Todolist([]);
  const uri = "http://localhost:3000/items/";
  const input = document.querySelector(".item-input");
  const listContainer = document.querySelector(".list-output");
  const submitButton = document.querySelector(".item-submit");
  const removeAllButton = document.querySelector(".item-remove-all");

  const render = () => {
    listContainer.innerHTML = renderList(list.items);
  };

  fetch(uri)
    .then((res) => res.json())
    .then((data) => (list.items = [...data]))
    .then(() => render())
    .catch((err) => console.log(err.message));

  const addListItem = () => {
    const inputValue = input.value;
    if (inputValue === "") {
      alert(`You'd better fill in the input first`);
      return;
    }
    const item = {
      id: list.getId(),
      title: inputValue,
      isChecked: false,
    };
    list.addItem(item.title);
    render();
    fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch((err) => console.log(err));
    input.value = "";
  };

  submitButton.addEventListener("click", addListItem);

  const removeListItem = (itemId) => {
    list.removeItem(itemId);
    fetch(uri + itemId, { method: "DELETE" });
    render();
  };

  listContainer.addEventListener("click", (e) => {
    const elementId = parseInt(e.target.closest(".item").dataset.id);
    if (e.target.classList.contains("item-toggle")) {
      fetch(uri + elementId, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isChecked: list.toggleItem(elementId) }),
      });
      render();
    }
    if (e.target.classList.contains("item-remove")) {
      removeListItem(elementId);
    }
  });

  const removeAllItems = () => {
    list.items.forEach((item) => removeListItem(item.id));
    render();
  };

  removeAllButton.addEventListener("click", removeAllItems);

  return {
    render,
  };
};

const myApp = app();
myApp.render();
