function extensibleObject() {
    function extend(object) {
        Object.keys(object).forEach((x) => {
            if (typeof object[x] == "function") {
                this.__proto__[x] = object[x];
            } else {
                this[x] = object[x];
            }
        });
    }
    return { extend };
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () {},
    extensionMethodaa: function () {},
    extensionProperty: "someString",
};
myObj.extend(template);
console.log(myObj);
