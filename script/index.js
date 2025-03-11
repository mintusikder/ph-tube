function loadCategories() {
  //face
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}



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
loadCategories();
