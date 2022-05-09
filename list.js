class List {
  constructor(data) {
    this.data = data;
    this.sortedData = [];
    this.currentData = [...this.data.slice(0, 7)];
    this.numberOfItems = this.data.length;
    this.numberPerPage = 7;
    this.currentPage = 1;
    this.numberOfPages = Math.ceil(this.numberOfItems / this.numberPerPage);
  }
}
