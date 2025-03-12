function loadCategories() {
  //face
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

//load video
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos));
}

//displayCategories
function displayCategories(categories) {
  //get the container
  const container = document.getElementById("category-container");
  //loop array of object
  for (let cate of categories) {
    //create element
    const cateDiv = document.createElement("div");

    cateDiv.innerHTML = `
          <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
          `;
    // append element
    container.appendChild(cateDiv);
  }
}

//display video
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
  <div class="card bg-base-100 ">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm text-white bg-black px-2 rounded"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 py-5 px-0">
         <div>
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
         </div>

          <div>
            <h1 class="text-sm font-semibold">${video.title}</h1>
            <p class="text-sm text-gray-400 flex gap-1 h-5">Awlad Hossain

              <img class="w-4" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
            </p>

            <p class="text-sm text-gray-400">${video.others.views}</p>
          </div>
        </div>
      </div>
     `;
    videoContainer.appendChild(videoCard);
  });
};
loadCategories();
loadVideo();
