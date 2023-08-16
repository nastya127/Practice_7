const baseUrl = "https://jsonplaceholder.typicode.com";
const usersEndpoint = "/users";

fetch(baseUrl + usersEndpoint)
  .then(response => response.json())
  .then(users => {
    console.log(users);
  })
  .catch(error => console.error("Помилка отримання даних:", error));
