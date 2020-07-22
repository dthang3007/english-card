const controller = {};

controller.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

controller.register = (registerInfo) => {
  view.setErrorMessage(
    "error-first-name",
    registerInfo.firstName === "" ? "Please input first name" : ""
  );
  view.setErrorMessage(
    "error-last-name",
    registerInfo.lastName === "" ? "Please input last name" : ""
  );
  if (registerInfo.email === "") {
    view.setErrorMessage("error-email", "Please input email ");
  } else if (controller.validateEmail(registerInfo.email) === false) {
    view.setErrorMessage("error-email", "Please type the right email format");
  } else {
    view.setErrorMessage("error-email", "");
  }
  view.setErrorMessage(
    "error-password",
    registerInfo.password === "" ? "Please input password " : ""
  );
  if (registerInfo.confirmPassword === "") {
    view.setErrorMessage(
      "error-confirm-password",
      "Please input confirm password"
    );
    return;
  } else if (registerInfo.confirmPassword !== registerInfo.password) {
    view.setErrorMessage("error-confirm-password", "Password does not match");
    return;
  } else {
    view.setErrorMessage("error-confirm-password", "");
  }

  if (
    registerInfo.firstName !== "" &&
    registerInfo.lastName !== "" &&
    registerInfo.email !== "" &&
    registerInfo.password !== ""
  ) {
    model.register(
      registerInfo.firstName,
      registerInfo.lastName,
      registerInfo.email,
      registerInfo.password
    );
  }
};

controller.login = (loginInfo) => {
  view.setErrorMessage(
    "error-email",
    loginInfo.email === "" ? "Please input email" : ""
  );
  view.setErrorMessage(
    "error-password",
    loginInfo.password === "" ? "Please input password" : ""
  );
  if (loginInfo.email === "") {
    view.setErrorMessage("error-email", "Please input email ");
  } else if (controller.validateEmail(loginInfo.email) === false) {
    view.setErrorMessage("error-email", "Please type the right email format");
  } else {
    view.setErrorMessage("error-email", "");
  }
  if (loginInfo.email !== "" && loginInfo.password !== "") {
    model.login(loginInfo.email, loginInfo.password);
  }
};
