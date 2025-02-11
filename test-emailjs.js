const emailjs = require("@emailjs/nodejs");

const formData = {
  name: "Test Name",
  email: "test@gmail.com",
  phone: "0123456789",
  message: "Test Message",
};

emailjs
  .send(
    "service_dtwmqbo", // Your EmailJS service ID
    "template_z1dwlkh", // Your EmailJS template ID
    formData,
    "obWSOrvkulvNI08W0" // Your EmailJS user ID
  )
  .then(
    (response) => {
      console.log("Email sent successfully!", response);
    },
    (error) => {
      console.error("Failed to send email:", error);
    }
  );