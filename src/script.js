function fakeFetch() {
    return Promise.resolve([
      { email: "james@gmail.com", token: "1111" },
      { email: "emma@gmail.com", token: "2222" },
      { email: "isaac@gmail.com", token: "3333" }
    ]);
  }
  
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const emailInput = document.querySelector("#email").value;
  
    const object = {
      email: emailInput
    };
  
    fakeFetch()
      .then((users) => {
        // Check each user in users and try to find a match
        for (let user of users) {
          // Destructuring email and password from the current user
          let { email } = user;
  
          // Comparing email and pwd from active user with the ones in object
          if (email === object.email) {
            // Found, do something
            console.log("found!");
            return;
          }
        }
  
        // Not found, do something else
        console.log("Not found...");
      })
      .catch((error) => console.log(error));
  });
  