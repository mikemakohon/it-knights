class Todolist {
  constructor(initialData) {
    this.items = initialData;
  }
  getId = () => {
    let maxId = 0;
    this.items.forEach((item) => {
      if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
  };
  addItem = (title) => {
    const newItem = {
      id: this.getId(),
      title,
      isChecked: false,
    };
    this.items.push(newItem);
    return newItem;
  };
  removeItem = (id) =>
    (this.items = this.items.filter((item) => item.id !== id));
  toggleItem = (id) => {
    const element = this.items.find((item) => item.id === id);
    if (!element) {
      console.warn(`ID not found ${id}`);
      return;
    }
    element.isChecked = !element.isChecked;
    return element.isChecked;
  };
  setItems = (newItems) => {
    this.items = newItems;
  };
}
