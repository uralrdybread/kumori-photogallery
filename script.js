const filterItem = document.querySelector(".items");

const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 

        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }


}
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; 
  let selectedImgCategory = element.getAttribute("data-name"); 
  previewImg.src = selectedPrevImg; 
  categoryName.textContent = selectedImgCategory; 
  previewBox.classList.add("show"); 
  shadow.classList.add("show"); 
  closeIcon.onclick = ()=>{ 
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto"; 
  }
}

twitterBtn = document.querySelector(".twitter");

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${previewBox.querySelector('img').src}`;
    window.open(tweetUrl, "_blank");
})

facebookBtn = document.querySelector('.facebook');

facebookBtn.addEventListener("click", () => {
    let fbshare = `https://www.facebook.com/sharer/sharer.php?u=${previewBox.querySelector('img').src}`;
    window.open(fbshare, "_blank");
})

pinterestBtn = document.querySelector('.pinterest');

pinterestBtn.addEventListener("click", () => {
    let pinshare = `https://www.pinterest.com/pin/create/button/?url=${previewBox.querySelector('img').src}`;
    window.open(pinshare, "_blank");
})