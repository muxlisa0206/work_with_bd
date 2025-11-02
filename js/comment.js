let postComment = document.getElementById("post-comment");

let query = new URLSearchParams(location.search);

let id = query.get("postId");
console.log(id);

getData("comments", (comments) =>{
    console.log(comments);
    
    let res = comments.filter((el) => el.postId === +id)
    console.log(res);
    
    res.map((el)=>{
        postComment.innerHTML +=`
            <div class="backdrop-blur-lg bg-white/20 rounded-2xl p-[20px] flex flex-col gap-3"">
                <h1 class="text-[orangered] text-[18px]">${el.email}</h1>
                <div>
                    <p class="text-white font-bold">${el.name}</p>
                    <p>${el.body}</p>
                </div>
        </div>
        `
    })
})