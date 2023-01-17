import { useState } from "react";
import styles from "./SignupForm.module.css";
import Button from "../UI/Button";

const SignupForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmationPassword, setEnteredConfirmationPassword] =
    useState("");
  const createUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.length < 4) {
      alert("User names must be atleast four characters long.");
      return;
    }

    if (enteredEmail.length === 0) {
      alert("must provide an email.");
      return;
    }

    if (enteredPassword.length < 4) {
      alert("Password must be atleast four characters long.");
      return;
    }

    if (enteredPassword !== enteredConfirmationPassword) {
      alert(
        "Please double check the entered values of password and confirm password."
      );
      return;
    }

    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      favorites: [],
      posts: [],
    };

    props.onCreate(user);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmationPassword("");
  };

  const updateUsernameHandler = (event) => {
    setEnteredName(event.target.value);
    event.target.value = enteredName;
  };

  const updateEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    event.target.value = enteredEmail;
  };

  const updatePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    event.target.value = enteredPassword;
  };

  const updateConfirmationPasswordHandler = (event) => {
    setEnteredConfirmationPassword(event.target.value);
    event.target.value = enteredConfirmationPassword;
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} id="Form">
        <div>
          <h1>Create Account</h1>
        </div>

        <div className={styles.formSection}>
          <label htmlFor="Username">Username</label>
          <input
            value={enteredName}
            name="Username"
            type="text"
            onChange={updateUsernameHandler}
          ></input>
        </div>
        <div className={styles.formSection}>
          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            type="email"
            value={enteredEmail}
            onChange={updateEmailHandler}
          ></input>
        </div>
        <div className={styles.formSection}>
          <label htmlFor="Password">Password</label>
          <input
            value={enteredPassword}
            name="Password"
            type="password"
            onChange={updatePasswordHandler}
          ></input>
        </div>
        <div className={styles.formSection}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={enteredConfirmationPassword}
            name="confirmPassword"
            type="password"
            onChange={updateConfirmationPasswordHandler}
          ></input>
        </div>
        <footer>
          <Button type="submit" onClick={createUserHandler}>
            Create Account
          </Button>
        </footer>
      </form>
    </div>
  );
};

export default SignupForm;
