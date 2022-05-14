export class DataManager {
  constructor() {
    this.uri = "http://localhost:3000/items/";
    this.data = [];
  }
  loadData = async (container) => {
    try {
      const response = await fetch(this.uri);
      this.data = await response.json();
      return this.data;
    } catch (err) {
      container.innerText = `${err.message}`;
    }
  };
  addItemData = (item) => {
    fetch(this.uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch((err) => console.log(err.message));
  };
  removeItemData = (itemId) => {
    fetch(this.uri + itemId, { method: "DELETE" });
  };
  toggleItemData = (id) => {
    const element = this.data.find((item) => item.id === id);
    const state = !element.isChecked;
    fetch(this.uri + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isChecked: state }),
    });
  };
}
