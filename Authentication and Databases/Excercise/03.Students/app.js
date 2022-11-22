(async function () {
    const formElement = document.querySelector("form");

    formElement.addEventListener("submit", addStudent);

    const getStudents = await fetch("http://localhost:3030/jsonstore/collections/students");
    const data = await getStudents.json();
    Object.values(data).forEach((student) => renderStudents(student));
})();
function renderStudents(student) {
    const tbodyElement = document.querySelector("#results > tbody");
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
  `;
    tbodyElement.appendChild(trElement);
}
async function addStudent(ev) {
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(new FormData(ev.currentTarget));
    await fetch("http://localhost:3030/jsonstore/collections/students", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    });
}
