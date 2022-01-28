

window.onload = function () {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(users => {
    let ul = document.createElement('ul');
    ul.style.justifyContent = "spaceBetween";
    document.body.appendChild(ul);

    for (let i = 0; i < users.length; i++) {
              const user = users[i];
              const li = document.createElement('li');
              li.classList.add("elements");
              li.textContent = ` ${user.name} ${user.email}`;
              document.querySelector('ul').appendChild(li);
          }
  
        });


    // document.getElementsByName(div, names);
    //   for (let i = 0; i < users.length; i++) {
    //       const user = users[i];
    //       const li = document.createElement('li');
    //       li.classList.add("elements");
    //       li.textContent = ` ${user.name} ${user.email}`;
    //       document.querySelector('ul').appendChild(li);
    //   }
    //   document.getElementsByName(div, emails);
    //   for (let i = 0; i < users.length; i++) {
    //       const user = users[i];
    //       const li = document.createElement('li');
    //       li.classList.add("elements");
    //       li.textContent = ` ${user.name} ${user.email}`;
    //       document.querySelector('ul').appendChild(li);
    //   }
    // });
  



// async function fetchUsers(url) {
    // const response = await fetch(url);
    // const json = await response.json();
    // const listOfusernames = json.map(user => user.username);
  
    // console.log(listOfusernames);
//   }
  
//   fetchUsers('https://jsonplaceholder.typicode.com/users');
// 
// const response = document.createElement('ul');
// document.body.appendChild(response);
}
