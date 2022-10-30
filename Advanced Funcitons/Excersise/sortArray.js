function sortArray(array, sortType) {
    switch (sortType) {
        case "asc":
            array.sort((a, b) => {
                return a - b;
            });
            break;
        case "desc":
            array.sort(function (a, b) {
                return b - a;
            });
    }
    return array;
}
