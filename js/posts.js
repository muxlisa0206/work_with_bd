let userPosts = document.getElementById("user-posts");

let query = new URLSearchParams(location.search);

let id = query.get("userId");
console.log(id);

getData("posts", (posts) => {
  userPosts.innerHTML = "";
  let res = posts.filter((el) => el.userId === +id);

  res.map((post) => {
    userPosts.innerHTML += `
      <div class="backdrop-blur-lg bg-white/20 rounded-2xl p-[20px] flex flex-col gap-3">
        <div class="flex flex-col">
          <h2 class="text-white font-bold">${post.title}</h2>
          <h4>Description: ${post.body}</h4>
        </div>
        <a href="/pages/comment.html?postId=${post.id}" 
           class="text-white font-bold text-[18px] py-2 px-8 w-full rounded-[4px] bg-white/10 hover:bg-[#B2FBFE] hover:text-[#125858] duration-500 max-w-[150px]  flex items-center justify-center">
           Comments
        </a>
      </div>
    `
  });
});
