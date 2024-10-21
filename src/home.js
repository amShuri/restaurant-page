import imageA from "./img/home/imageA.jpg";
import imageB from "./img/home/imageB.jpg";
import imageC from "./img/home/imageC.jpg";

export function displayHome() {
  const homeImages = [
    {
      title: "Dish of the Day",
      src: imageA,
      alt: "Photo of the Dish of the Day",
      attribution:
        "https://pixabay.com/photos/tart-piquant-quiche-yummy-meal-2409958/",
    },
    {
      title: "Chef's Special",
      src: imageB,
      alt: "Photo of a Chef",
      attribution:
        "https://pixabay.com/photos/frog-cook-grill-figure-fun-1708727/",
    },
    {
      title: "Seasonal Menu",
      src: imageC,
      alt: "Photo of a variety of fruits",
      attribution:
        "https://pixabay.com/illustrations/ai-generated-fruits-seasonal-food-8482498/",
    },
  ];

  const content = document.querySelector("#content");

  homeImages.forEach((image) => {
    content.insertAdjacentHTML(
      "beforeend",
      `
        <div>
          <h2>${image.title}</h2>
          <img src="${image.src}" alt="${image.alt}"/>
          <a href="${image.attribution}" target="_blank">Image from Pixabay</a>
          <p>(opens in new window)</p>
        </div>
      `
    );
  });
}
