import { useState } from "react";
import styles from "./Form.module.css";
import errorIcon from "../../assets/contact-icons/error.png";
import PopupSuccessSend from "../PopupSuccessSend/PopupSuccessSend";
export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Invalid email format (e.g: example@example.com)";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\ ?[\d| |-]+$/.test(formData.phone.trim())) {
      newErrors.phone =
        "Invalid phone number format (e.g: +9725.. , 054.., 054-..-)";
    }
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSend = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // TODO: Send form data to the server
      console.log("Form submitted successfully!");
      setIsVisiblePopup(true);
    } else {
      setErrors(newErrors);
    }
  }; //TODO
  const handleClosePopup = () => {
    setIsVisiblePopup(false);
  };
  return (
    <>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputItem}>
            <label htmlFor="firstName">First Name *</label>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className={styles.errorMessageAndIcon}>
                <img className={styles.errorIcon} src={errorIcon} alt="error" />
                <p className={styles.errorMessage}>{errors.firstName}</p>
              </div>
            )}
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="lastName">Last Name *</label>
            <input
              className={styles.input}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className={styles.errorMessageAndIcon}>
                <img className={styles.errorIcon} src={errorIcon} alt="error" />
                <p className={styles.errorMessage}>{errors.lastName}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputItem}>
            <label htmlFor="email">Email *</label>
            <input
              className={styles.input}
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className={styles.errorMessageAndIcon}>
                <img className={styles.errorIcon} src={errorIcon} alt="error" />
                <p className={styles.errorMessage}>{errors.email}</p>
              </div>
            )}
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              className={styles.input}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className={styles.errorMessageAndIcon}>
                <img className={styles.errorIcon} src={errorIcon} alt="error" />
                <p className={styles.errorMessage}>{errors.phone}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputItem}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className={styles.row}>
          <button
            className={`${styles.button} ${styles.primary}`}
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </form>
      {isVisiblePopup && (
        <PopupSuccessSend
          headline="Success!"
          content="Your message has been sent successfully!"
          image="../src/assets/contact-icons/checked.png"
          onClick={handleClosePopup}
        />
      )}
    </>
  );
}
