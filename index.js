const elCards = document.querySelector("#cards");
const elTemplate = document.querySelector("#template");
const errorMassage = document.querySelector("#errorText");

let todos = [];

function renderPost(array, parent = elCards) {
  parent.textContent = "";
  array.forEach((todo) => {
    const template = elTemplate.textContent.cloneNode(true);
    const title = template.querySelector(".card-title");
    const text = template.querySelector(".card-text");

    title.textContent = todo.name;
    text.textContent = todo.capital;

    parent.appendChild(template);
  });
}
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    todos = data;
    console.log(data);
    renderPost(todos);
  })
  .catch((err) => {
    errorMassage.textContent = "Ma'lumot topilmadi!";
  });
