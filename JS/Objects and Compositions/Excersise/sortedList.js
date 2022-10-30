function createSortedList() {
  let validIndex = (index) => {
    return index < obj.size && index >= 0;
  };
  let obj = {
    list: [],
    add: (el) => {
      obj.list.push(el);
      obj.sort();
      obj.size += 1;
    },
    remove: (index) => {
      if (validIndex(index) == true) {
        obj.list.splice(index, 1);
        obj.sort();
        obj.size -= 1;
      }
      return "";
    },
    get: (index) => {
      if (validIndex(index) == true) {
        return obj.list[index];
      }
      return "";
    },
    size: 0,
    sort: () => {
      obj.list.sort((a, b) => {
        return a - b;
      });
    },
  };
  return obj;
}
