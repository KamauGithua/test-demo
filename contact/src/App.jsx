import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";

const App = () => {

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("UI21QUSmAfuF1aiv4"); // Ensure this matches your .env key
  }, []);

  function sendEmail(event) {
    event.preventDefault();

    // Log environment variables for debugging
    console.log("Service ID:", import.meta.env.VITE_EMAIL_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAIL_TEMPLATE_ID);
    console.log("User ID:", import.meta.env.VITE_EMAIL_USER_ID);

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target,
      import.meta.env.VITE_EMAIL_USER_ID // Pass user ID correctly
    )
    .then((result) => {
      console.log("Email sent successfully!", result);
    })
    .catch((error) => {
      console.log("Error sending email:", error);
    });
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <textarea name="message" placeholder="Message" required cols="30" rows="10"></textarea>
        <button type="submit">SUBMIT FORM</button>
      </form>
    </>
  );
}

export default App;
