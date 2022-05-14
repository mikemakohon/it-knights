export class RenderUI {
  renderListItem = (listItem) => {
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
  renderList = (container, listItems) => {
    const listItemsHtml = listItems.map((item) => this.renderListItem(item));
    container.innerHTML = listItemsHtml.join("");
  };
}
