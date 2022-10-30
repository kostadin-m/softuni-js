function filterEmployes(list, criteriaString) {
    let employes = JSON.parse(list);
    let [prop, value] = criteriaString.split("-");
    employes
        .filter((x) => x[prop] == value || prop == "all")
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach((x) => console.log(x));
}
