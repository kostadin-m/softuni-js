function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
        set: function (value) {
            let [name, lastname] = value.split(" ");
            if (lastName === undefined) {
                return;
            }
            this.firstName = name;
            this.lastName = lastname;
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    });
}
