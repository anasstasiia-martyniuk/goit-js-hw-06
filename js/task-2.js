class Storage{
  #items;
  
  constructor(items) {
    this.#items = items;
  }
  
  getItems() {
    return this.#items;
  }
  
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  
  removeItem(itemToRemove) {
    for(const item of this.#items) {
      if(item == itemToRemove) {
      this.#items.splice(      this.#items.indexOf(item),this.#items.indexOf(item));
      }
    }
  return this.#items;}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
