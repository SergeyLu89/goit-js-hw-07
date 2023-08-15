import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryEl = document.querySelector(".gallery");

const murkup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
);
galeryEl.insertAdjacentHTML("beforeend", murkup.join(""));
galeryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const imageSource = target.dataset.source;
  const imageAlt = target.alt;

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${imageSource}" alt="${imageAlt}">
    </div>
`);

  instance.show();
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && instance.visible()) {
      instance.close();
    }
  });
}
