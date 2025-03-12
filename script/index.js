const removeActive = () => {
  const activeBtn = document.getElementsByClassName("active");
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
};

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
    .then((data) => {
      removeActive();
      document.getElementById("btn-all").classList.add("active");
      displayVideo(data.videos);
    });
}
//load category video
const loadCategoriesVideo = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`btn-${id}`);
      clickBtn.classList.add("active");
      displayVideo(data.category);
    });
  // console.log(url)
};
//loadVideoDetails
const loadVideoDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  console.log(video);
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
   <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
 
  </div>
</div>
    `;
};

//displayCategories
function displayCategories(categories) {
  //get the container
  const container = document.getElementById("category-container");
  //loop array of object
  for (let cate of categories) {
    //create element
    const cateDiv = document.createElement("div");

    cateDiv.innerHTML = `
          <button id="btn-${cate.category_id}" onclick="loadCategoriesVideo(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
          `;
    // append element
    container.appendChild(cateDiv);
  }
}

//display video
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length === 0) {
    videoContainer.innerHTML = `
      <div class="col-span-full flex flex-col text-center justify-center items-center py-20">
      <img class="w-[120px]" src="./images/Icon.png" alt="" />
      <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
    </div>
    `;
    return;
  }
  videos.forEach((video) => {
    const videoCard = document.createElement("div");

    videoCard.innerHTML = `
  <div class="card bg-base-100 ">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${
            video.thumbnail
          }" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm text-white bg-black px-2 rounded"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 py-5 px-0">
         <div>
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
              <img src="${video.authors[0].profile_picture} " />
            </div>
          </div>
         </div>

          <div>
            <h1 class="text-sm font-semibold">${video.title}</h1>
            <p class="text-sm text-gray-400 flex gap-1 h-5">
          ${video.authors[0].profile_name} 

                        ${
                          video.authors[0].verified == true
                            ? ` <img
                class="w-4 h-4"
                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                alt=""
              />`
                            : ""
                        }
            </p>

            <p class="text-sm text-gray-400">${video.others.views}</p>
          </div>
        </div>
        <button onclick="loadVideoDetails('${
          video.video_id
        }')" class="btn btn-block">Show Details</button>
      </div>
     `;
    videoContainer.appendChild(videoCard);
  });
};
loadCategories();
// loadVideo()
