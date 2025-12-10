import React, { useState } from "react";

const ContactButton = () => {
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    // Button changes after form submit success (handled in parent)
    setSent(true);
    alert("Email sent successfully!");
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`w-full px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer ${
        sent ? "bg-green-600" : "bg-main hover:bg-[#6d0731]"
      }`}
    >
      {sent ? "Sent!" : "Send!"}
    </button>
  );
};

export default ContactButton;
