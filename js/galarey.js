let galleryContent = document.getElementById("gallery-content");

let query = new URLSearchParams(location.search);

let id = +query.get("userId");
console.log(id);

getData("photos", (photos) => {    
  galleryContent.innerHTML = "";
  let res = photos.filter((el) => el.albumId === +id);

  console.log(res);
  
  res.map((photos) => {
    galleryContent.innerHTML += `
      <div class="max-w-[700px] w-full backdrop-blur-lg bg-white/20 rounded-2xl p-[10px] flex flex-col gap-[15px]">
            <h1 class="line-clamp-1">${photos.title}</h1>
            <a href="${photos.url}" class="inline-block text-[orangered] max-w-[100px] text-center py-[3px] rounded-[4px] bg-white/40 hover:bg-[#B2FBFE]">Photos</a>
        </div>
    `
  });
});