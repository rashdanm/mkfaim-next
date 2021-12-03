import { useState } from "react";
import styles from "./Form.module.css";
import Label from "./Label";
import Textarea from "./Textarea";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  //  Form validation
  const [errors, setErrors] = useState({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fname.length <= 2) {
      tempErrors["fname"] = true;
      isValid = false;
    }
    if (lname.length <= 2) {
      tempErrors["lname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (event.length <= 0) {
      tempErrors["event"] = true;
      isValid = false;
    }
    if (venue.length <= 0) {
      tempErrors["venue"] = true;
      isValid = false;
      s;
    }
    if (date.length <= 0) {
      tempErrors["date"] = true;
      isValid = false;
    }
    if (message.length <= 50) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          phone: phone,
          event: event,
          venue: venue,
          date: date,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setEvent("");
        setVenue("");
        setDate("");
        setMessage("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setEvent("");
      setVenue("");
      setDate("");
      setMessage("");
    }
    console.log(fname, lname, email, phone, event, venue, date, message);
  };

  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-heading"]}>Enquiry Form</h2>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <Label
          onChange={(e) => {
            setFname(e.target.value);
          }}
          errorMessage={errors?.fname && "Please enter your first name"}
          className="placeholder"
          placeholder="First name"
          type="text"
          labelFor="fname"
          name="fname"
          value={fname}
        />

        <Label
          onChange={(e) => {
            setLname(e.target.value);
          }}
          errorMessage={errors?.lname && "Please enter your last name"}
          className="placeholder"
          placeholder="Last name"
          type="text"
          labelFor="lname"
          name="lname"
          value={lname}
        />

        <Label
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          errorMessage={errors?.email && "Please enter your email"}
          className="placeholder"
          placeholder="Email"
          type="text"
          labelFor="email"
          name="email"
          value={email}
        />

        <Label
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          errorMessage={errors?.phone && "Please enter your phone number"}
          className="placeholder"
          placeholder="Phone"
          type="tel"
          labelFor="phone"
          name="phone"
          value={phone}
        />

        <Label
          onChange={(e) => {
            setEvent(e.target.value);
          }}
          errorMessage={errors?.event && "Please enter the event type"}
          className="placeholder"
          placeholder="Type of Event"
          type="text"
          labelFor="event"
          name="event"
          value={event}
        />

        <Label
          onChange={(e) => {
            setVenue(e.target.value);
          }}
          errorMessage={errors?.venue && "Please enter your chosen venue"}
          className="placeholder"
          placeholder="Venue"
          type="text"
          labelFor="venue"
          name="venue"
          value={venue}
        />

        <Label
          onChange={(e) => {
            setDate(e.target.value);
          }}
          errorMessage={errors?.date && "Please enter the event date"}
          className="placeholder-date"
          placeholder="Date"
          type="date"
          labelFor="date"
          name="date"
          value={date}
        />

        <Textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          errorMessage={
            errors?.message && "Message requires at least 50 characters"
          }
          labelFor="message"
          name="message"
          value={message}
        />

        <button
          type="submit"
          className={styles["button"]}
          style={{ width: "51%" }}
        >
          {buttonText}
        </button>
        {showSuccessMessage && (
          <p className={styles["message-status"]}>
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className={styles["message-status"]}>
            Something went wrong, please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
