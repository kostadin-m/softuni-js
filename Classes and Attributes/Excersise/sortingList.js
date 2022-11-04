class List {
    list = [];
    size = 0;
    add(num) {
        this.list.push(num);
        this._sort();
        this.size++;
    }
    remove(index) {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        this.list.splice(index, 1);
        this._sort();
        this.size--;
    }
    get(index) {
        if (index < 0 || index >= this.list.length) {
            return;
        }
        return this.list[index];
    }
    _sort() {
        this.list.sort((a, b) => {
            return a - b;
        });
    }
}
