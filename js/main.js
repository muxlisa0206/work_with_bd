let usersContent = document.getElementById("users-content");


getData("users", (users) => {
  usersContent.innerHTML = "";
  users.map((user) => {
    usersContent.innerHTML += `
        <div id="user-card" class="max-w-[350px] w-full backdrop-blur-lg bg-white/20 rounded-2xl p-[10px] flex flex-col gap-3">
          <div>
            <h1 class="font-bold text-[20px]">${user.name}</h1>
            <h1 class="font-bold text-[white]">${user.username}</h1>
          </div>
          <div class="flex flex-col gap-2">
            <h1>Email: <a href="#" class="underline text-[blue]">${user.email}</a></h1>
            <h2>Website: <a href="#" class="underline text-[blue]">${user.website}</a></h2>
            <h4>Address: <a href="#" class="underline text-[blue]">${user.address.city}</a></h4>
            <h1 class="line-clamp-1">Phone: <a href="#" class="underline text-[blue]">${user.phone}</a></h1>
          </div>
          <div class="flex items-center justify-between mt-[10px]">
            <a href="../pages/todos.html?userId=${user.id}" class="inline-block text-[orangered] px-[8px] py-[4px] rounded-[4px] bg-white/40 hover:bg-[#B2FBFE] transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">Todos</a>
            <a href="../pages/posts.html?userId=${user.id}" class="inline-block text-[orangered] px-[8px] py-[4px] rounded-[4px] bg-white/40 hover:bg-[#B2FBFE] transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">Posts</a>
            <a href="../pages/galarey.html?userId=${user.id}" class="inline-block text-[orangered] px-[8px] py-[4px] rounded-[4px] bg-white/40 hover:bg-[#B2FBFE] transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">Galarey</a>
          </div>
      </div>
    `;
  });
});
