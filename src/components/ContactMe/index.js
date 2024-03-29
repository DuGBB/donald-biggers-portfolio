import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm({ currentCategory }) {
  //   const { categoryName, description } = currentCategory;
  console.log(currentCategory.name);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      //   console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    // setFormState({ ...formState, [e.target.name]: e.target.value });
    // console.log("errorMessage", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    console.log(formState);
    e.preventDefault();
    let link = `mailto:donald.b.biggers@gmail.com?cc=${email}&subject=${encodeURIComponent(
      "React Portfolio contact me"
    )}&body=${encodeURIComponent(message)}`;
    console.log(formState);
    console.log(link);
    window.location.href = link;
    return false;
  }

  if (currentCategory.name === "Contact Info") {
    return (
      <section>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address: </label>
            <input
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            data-testid="button"
            type="submit"
            // onClick="handleSubmit(); return false"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  return <section></section>;
}

export default ContactForm;
