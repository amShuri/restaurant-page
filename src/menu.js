import imageA from "./img/menu/imageA.jpg";
import imageB from "./img/menu/imageB.jpg";
import imageC from "./img/menu/imageC.jpg";
import imageD from "./img/menu/imageD.jpg";

export function displayMenu() {
  const homeImages = [
    {
      title: "Japanese Dish",
      src: imageA,
      alt: "Photo of a Japanese Bowl Dish",
      attribution:
        "https://pixabay.com/photos/food-japanese-asian-bowl-dish-eat-715542/",
    },
    {
      title: "Shish Kebab",
      src: imageB,
      alt: "Photo of a meat dish",
      attribution:
        "https://pixabay.com/photos/meat-food-protein-shish-kebab-1155132/",
    },
    {
      title: "Italian Pizza",
      src: imageC,
      alt: "Photo of a Italian Pizza",
      attribution:
        "https://pixabay.com/photos/pizza-slices-italian-cuisine-329523/",
    },
    {
      title: "Rasperry Tart",
      src: imageD,
      alt: "Photo of Rasperry Tart",
      attribution:
        "https://pixabay.com/photos/dessert-food-tart-pie-raspberries-5712284/",
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
