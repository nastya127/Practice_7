const baseUrl = "https://jsonplaceholder.typicode.com";

const newUser = {
  name: "Name LastName",
  username: "UserName",
  email: "usermail@gmail.com"
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify(newUser)
};

fetch(`${baseUrl}/users`, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(createdUser => {
    console.log(createdUser);
  })
  .catch(error => console.error("Помилка створення користувача:", error));
