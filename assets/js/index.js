"use strict";

const form = document.querySelector(".contact-form");

form.onsubmit = (e) => {
  e.preventDefault();

  const {
    firstName,
    lastName,
    email,
    phoneHead,
    phoneMiddle,
    phoneEnd,
    messageSubject,
    message,
  } = e.target.elements;

  const phoneNumber = phoneHead.value + phoneMiddle.value + phoneEnd.value;
  const formattedMessage = message.value.trim().replace(/\s{2,}/g, " ");

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phoneNumber,
    messageSubject: messageSubject.value,
    message: formattedMessage,
  };

  console.log("Sending form...");
  console.log("Data:", data);
};
