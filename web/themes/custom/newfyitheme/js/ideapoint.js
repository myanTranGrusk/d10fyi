window.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelectorAll(".field--name-field-idea-point-with-image .field__items")
    .forEach((wrapper) => {
      const items = wrapper.querySelectorAll(":scope > .field__item");
      if (items.length % 2 === 1) {
        items[items.length - 1].classList.add("last-odd");
      }
    });
});
