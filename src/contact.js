export function displayContact() {
  document.querySelector("#content").insertAdjacentHTML(
    "beforeend",
    `
      <div class="contact-section">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Feel free to reach out using any of the methods below.</p>

        <div class="contact-info">
            <h3>Address:</h3>
            <p>123 Food Street, Flavor Town</p>

            <h3>Phone:</h3>
            <p>(123) 456-7890</p>

            <h3>Email:</h3>
            <p>contact@restaurant.com</p>
        </div>
      </div>
    `
  );
}
