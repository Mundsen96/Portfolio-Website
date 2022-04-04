import React from "react";
import { StyledContact } from "./StyledContact";

const Contact = () => {
  return(
    <StyledContact>
      <div className="form-container">
        <h1>Contact me!</h1>
        <form>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" />
          <br/>
          <label htmlFor="E-mail">E-mail:</label>
          <input type="text" name="E-mail" />
          <br/>
          <label htmlFor="Message">Message:</label>
          <textarea type="text" name="Message" />
          <br/>
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;