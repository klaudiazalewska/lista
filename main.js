function createUsersList(users) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const liNames = document.createElement('li');
    liNames.style.listStyle = "none";
    liNames.style.marginBottom = "65px";
    liNames.style.fontSize = "12px";
    liNames.style.fontWeight = "bold";
    liNames.textContent = `${user.name}`;
    document.querySelector('.names ul').appendChild(liNames);
    const liUsernames = document.createElement('li');
    liUsernames.style.listStyle = "none";
    liUsernames.style.marginBottom = "65px";
    liUsernames.style.fontSize = "12px";
    liUsernames.style.fontWeight = "bold";
    liUsernames.textContent = `${user.username}`;
    document.querySelector('.usernames ul').appendChild(liUsernames);
    const liEmails = document.createElement('li');
    liEmails.style.listStyle = "none";
    liEmails.style.marginBottom = "65px";
    liEmails.style.fontSize = "12px";
    liEmails.style.fontWeight = "bold";
    liEmails.textContent = `${user.email}`;
    document.querySelector('.emails ul').appendChild(liEmails);
    const liPhones = document.createElement('li');
    liPhones.style.listStyle = "none";
    liPhones.style.marginBottom = "65px";
    liPhones.style.fontSize = "12px";
    liPhones.style.fontWeight = "bold";
    liPhones.textContent = `${user.phone}`;
    document.querySelector('.phones ul').appendChild(liPhones);
    const liWebsites = document.createElement('li');
    liWebsites.style.listStyle = "none";
    liWebsites.style.marginBottom = "65px";
    liWebsites.dataset.email = user.email;
    liWebsites.style.fontSize = "12px";
    liWebsites.style.fontWeight = "bold";
    liWebsites.textContent = `${user.website}`;
    document.querySelector('.websites ul').appendChild(liWebsites);
  }
}

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(users => {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    usePopupComponent();
    createUsersList(users);
  });
}


