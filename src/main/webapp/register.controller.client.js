(function() {
  var signupBtn = $("#signupBtn");
  var usernameFld = $("#username");
  var passwordFld = $("#password");
  var password2Fld = $("#password2");

  signupBtn.click(signupHandler);

  function signupHandler() {
    var usernameStr = usernameFld.val();
    var passwordStr = passwordFld.val();
    var password2Str = password2Fld.val();

    var userObj = {
      username: usernameStr,
      password: passwordStr,
      password2: password2Str
    }

    var userObjStr = JSON.stringify(userObj)

    fetch('/register', {
        method: 'POST',
        body: userObjStr,
        headers: {
            'Content-Type': 'application/json'
        }
    })

  }
})()
