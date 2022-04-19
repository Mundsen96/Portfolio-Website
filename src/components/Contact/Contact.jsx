import React, {useState} from "react";
import { StyledContact } from "./StyledContact";

const Contact = () => {

  const FORM_ENDPOINT = "https://public.herotofu.com/v1/858c10f0-bff3-11ec-abfb-2b5c80ae2a8a";

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <StyledContact>
        <div className="after-submit">Thank you! I'll respond to Your message as soon as possible.</div>
      </StyledContact>
    );
  }

  return(
    <StyledContact 
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h1>Contact me!</h1>
        <div className="wrapper">
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" required/>
        </div>
        <div className="wrapper">
          <label htmlFor="E-mail">E-mail:</label>
          <input type="email" name="E-mail" required/>
        </div>
        <div className="wrapper">
          <label htmlFor="Message">Message:</label>
          <textarea name="Message" />
        </div>
        <div className="submit">
          <button type="submit">
            Send a message
          </button>
        </div>
    </StyledContact>
  );
}

export default Contact;