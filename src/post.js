const form = document.getElementById("new-pw-btn");
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const reset_token = params.reset_token;

if (reset_token === undefined) {
  window.addEventListener("load", (e) => {
    e.preventDefault();
    window.location.replace("https://home.sojo.uk/");
  });
} else {
  console.log(reset_token !== null, "checking");
}
form?.addEventListener("click", function (e) {
  e.preventDefault();
  let password = document.querySelector("input[name=password]");
  let confirmPassword = document.querySelector("input[name=confirmPassword]");

  function getEmailToken() {
    if (password?.value.length < 8) {
      document.getElementById("new-pw-response").innerHTML =
        "<p>Your password must be at least 8 characters</p>";
    }
    if (password?.value.search(/[a-z]/i) < 0) {
      document.getElementById("new-pw-response").innerHTML =
        "<p>Must have more characters</p>";
    }
    if (password?.value.search[/A-Z/i] < 1) {
      document.getElementById("new-pw-response").innerHTML =
        "<p>Your password must have at least 1 uppercase character1</p>";
    }
    if (password?.value.search(/[0-9]/) < 0) {
      document.getElementById("new-pw-response").innerHTML =
        "<p>Your password must contain at least one number.</p>";
    }
    if (confirmPassword?.value !== password?.value) {
      confirmPassword.setCustomValidity("");
      document.getElementById("new-pw-response").innerHTML =
        "<p>Your passwords don't match.</p>";
    } else {
      let input = password?.value;
      console.log(input);
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const reset_token = params.reset_token;

      let data = { reset_token: reset_token, new_password: input };
      console.log(reset_token, input, "checking");
      fetch("http://127.0.0.1:8000/public/password_reset", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
      })
        // .then((response) => response.text())
        .then(function (response) {
          console.log(response.status);
          if (response.status !== 200) {
            document.getElementById("new-pw-form").innerHTML =
              "<p>Your token to create new password is expired of invalid.</p>";
          } else {
            console.log(response.status, "status");
            return response.text();
          }
        })
        .then((result) => console.log(result, "result"))
        .catch((error) => console.log("error", error));
      validPwd();
      function validPwd() {
        document.getElementById("new-pw-form").innerHTML =
          "<p>Your password has been reset.</p>";
      }
    }
  }

  getEmailToken();
});
