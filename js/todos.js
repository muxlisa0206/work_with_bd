let todosContent = document.getElementById("todos-content");

let query = new URLSearchParams(location.search);

let id = query.get("userId");
console.log(id);

getData("todos", (todos) => {
  todosContent.innerHTML = "";
  let res = todos.filter((el) => el.userId === +id);
  console.log(res);
  

  res.map((todos) => {
    todosContent.innerHTML += `
      <div class="backdrop-blur-lg bg-white/20 rounded-2xl p-[20px] flex justify-between items-center">
            <h1>${todos.title}</h1>
            ${
                todos.completed ? '✔️' : '❌'
            }
        </div>
    `
  });
});