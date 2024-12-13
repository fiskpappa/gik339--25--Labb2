const url = "http://localhost:3000/users";

const htmlUl = `<ul></ul>`;
document.body.insertAdjacentHTML("beforeend", htmlUl);

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.style.backgroundColor = user.color;
      listItem.innerHTML = `${user.firstName} ${user.lastName} <br> Username: ${user.username}`;
      document.querySelector("ul").appendChild(listItem);
      const colorClass = `${user.color}`;
      listItem.classList.add(colorClass);
    });
  });
