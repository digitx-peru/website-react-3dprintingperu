import emailjs from "@emailjs/browser";

//import emailJS values
const emailJS_serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailJS_mailTemplateId = process.env.REACT_APP_EMAILJS_MAIL_TEMPLATE_ID;
const emailJS_userID = process.env.REACT_APP_EMAILJS_USER_ID;

export default function sendEmail(values) {
  const templateParams = {
    // Replace with your EmailJS template parameters
    customerName: values.customerName,
    company: values.companyName,
    message: values.message,
    phone: values.phone,
    email: values.email,
  };

  const serviceID = emailJS_serviceID;
  const mailTemplateID = emailJS_mailTemplateId;
  const userID = emailJS_userID;

  emailjs.send(serviceID, mailTemplateID, templateParams, userID).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}
