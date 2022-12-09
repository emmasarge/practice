const form = document.getElementById("reset-pw-form");

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.querySelector("#reset-pw-email");

  const object = {
    email: emailInput,
  };

  let emailSearch = object.email?.value;
  console.log(emailSearch)
 
   
 
  function sendEmail() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://127.0.0.1:8000/public/password_reset?email=${emailSearch}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result, 'results')
        let msg = result;
        let cleanMsg = JSON.parse(msg);

        for (let x in cleanMsg) {
          console.log(cleanMsg[x].toString(), " special");
          let resultAnswer = cleanMsg[x];
          console.log(resultAnswer);
          if (cleanMsg[x].toString() === "Password reset email sent") {
            document.getElementById("reset-pw-response").innerHTML =
              "<p>We will send you an email to reset your password shortly</p>";
          } else {
            document.getElementById("reset-pw-response").innerHTML =
              "<p>We don't recognise your email</p>";
          }
        
        }
      })

      .catch((error) => console.log("error", error));
  }

  sendEmail();

});
