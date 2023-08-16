const baseUrl = "https://jsonplaceholder.typicode.com";
const userId = 10;
const albumsEndpoint = `/users/${userId}/albums`;

fetch(baseUrl + albumsEndpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(albums => {
    console.log(albums);
})
  .catch(error => console.error("Помилка отримання даних:", error));
