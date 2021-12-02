import styles from "./Form.module.css";
import Label from "./Label";
import Textarea from "./Textarea";

const Form = () => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-heading"]}>Enquiry Form</h2>
      <form className={styles["form"]}>
        <Label
          className="placeholder"
          placeholder="First name"
          type="text"
          labelFor="fname"
          name="fname"
        />
        <Label
          className="placeholder"
          placeholder="Last name"
          type="text"
          labelFor="lname"
          name="lname"
        />
        <Label
          className="placeholder"
          placeholder="Email"
          type="text"
          labelFor="email"
          name="email"
        />
        <Label
          className="placeholder"
          placeholder="Phone"
          type="tel"
          labelFor="phone"
          name="phone"
        />
        <Label
          className="placeholder"
          placeholder="Type of Event"
          type="text"
          labelFor="event"
          name="event"
        />
        <Label
          className="placeholder"
          placeholder="Venue"
          type="text"
          labelFor="venue"
          name="venue"
        />
        <Label
          className="placeholder-date"
          placeholder="Date"
          type="date"
          labelFor="date"
          name="date"
        />
        <Textarea />
        <button
          type="submit"
          children="Submit"
          className={styles["button"]}
          style={{ width: "51%" }}
        />
      </form>
    </div>
  );
};

export default Form;
