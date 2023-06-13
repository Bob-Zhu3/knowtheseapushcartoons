const thumbnails = document.querySelectorAll(".thumbnail");
const overlay = document.querySelector(".overlay");
const backButton = document.getElementById("backButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const caption = document.getElementById("caption");
const focusedImage = document.getElementById("focusedImage");

let currentIndex = 0;

function showOverlay(index) {
  currentIndex = index;
  const image = thumbnails[index];
  focusedImage.src = image.src;
  caption.textContent = image.alt;
  overlay.style.display = "block";
}

function hideOverlay() {
  overlay.style.display = "none";
}

function showPreviousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = thumbnails.length - 1;
  }
  const image = thumbnails[currentIndex];
  focusedImage.src = image.src;
  caption.textContent = image.alt;
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= thumbnails.length) {
    currentIndex = 0;
  }
  const image = thumbnails[currentIndex];
  focusedImage.src = image.src;
  caption.textContent = image.alt;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => showOverlay(index));
});

backButton.addEventListener("click", hideOverlay);
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);