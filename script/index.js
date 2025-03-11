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
  const videoContainer = document.getElementById("video-container")

  videos.forEach(video =>{
    console.log(video)
     const videoCard = document.createElement("div")
     videoCard.innerHTML =`
  <div class="card bg-base-100  shadow-sm">
  <figure>
    <img class ="w-96 h-54"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     
     `
     videoContainer.appendChild(videoCard)
  })
   

};
loadCategories();
loadVideo();
