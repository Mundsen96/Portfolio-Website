import React from "react";
import { StyledContact } from "./StyledContact";

const Contact = () => {
  return(
    <StyledContact>
      <form>
        <label htmlFor="Name">Your Name:</label>
        <input type="text" name="Name" />
        <br/>
        <label htmlFor="E-mail">Your Name:</label>
        <input type="text" name="E-mail" />
        <br/>
        <label htmlFor="Message">Your Name:</label>
        <textarea type="text" name="Message" />
        <br/>
      </form>

    </StyledContact>
  );
}

export default Contact;