import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1500970-c1ac-49ef-8692-28c22f9e0776");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <form onSubmit={onSubmit} ref={formRef} className="form">
        <h2>Contact Form</h2>
        <div className="inputBox">
          <label>Full Name</label>
          <br />
          <input
            type="text"
            name="name"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="inputBox">
          <label>Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="inputBox">
          <label>Provide your phone number if you would like</label>
          <br />
          <input
            type="tel"
            name="phoneNumber"
            className="field"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="inputBox">
          <label>Please enter your message</label>
          <br />
          <textarea
            className="field"
            name="message"
            placeholder="Write your message"
            rows="5"
            cols="30"
            required
          ></textarea>
        </div>
        <button type="submit" className="subBut">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
