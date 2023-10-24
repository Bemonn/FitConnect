// Email js config file

// Import the email service library (e.g., EmailJS)
const emailjs = require('emailjs-com');

//Welcome email function
function sendWelcomeEmail(userData) {
  //sent to their email
  const templateParams = {
    from_name: 'Fitconnect',  
    to_name: userData.email,  
  };

  // Use the email service library to send the email
  emailjs
    .send('service_trawbdm', 'template_qp5k9ug', templateParams)
    .then(
      function (response) {
        console.log('Welcome email sent successfully', response);
      },
      function (error) {
        console.error('Welcome email sending failed', error);
      }
    );
}

//Send booking confirmation email

module.exports = {
  sendWelcomeEmail,
};


// sendWelcomeEmail(user)
// await emailService.sendWelcomeEmail(user.email);
// const { sendWelcomeEmail } = require("../utils/emailjsConfig"); 