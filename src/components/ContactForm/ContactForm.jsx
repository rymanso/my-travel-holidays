import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ display: false, message: "", type: "" });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      await emailjs.send(
        "service_yzwus2e",
        "template_dalihd6",
        { name, email, subject, message },
        "1b8Wjbzf5SKDTYHpH"
      );
      toggleAlert("Thank you — your message is on its way.", "success");
      reset();
    } catch (e) {
      console.error(e);
      toggleAlert("Something went wrong. Please try again.", "danger");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              type="text"
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              placeholder="Your name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "Please enter your name",
                maxLength: { value: 30, message: "Please use 30 characters or less" },
              })}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              type="text"
              className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
              placeholder="What's it about?"
              aria-invalid={errors.subject ? "true" : "false"}
              {...register("subject", {
                required: "Please enter a subject",
                maxLength: { value: 75, message: "Max 75 characters" },
              })}
            />
            {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <span className={styles.error}>Please enter a valid email address</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            rows={4}
            className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            placeholder="Where would you like to go, when, and with whom?"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: true })}
          />
          {errors.message && <span className={styles.error}>Please enter a message</span>}
        </div>

        <button
          className={styles.submit}
          disabled={disabled}
          type="submit"
        >
          {disabled ? "Sending…" : "Send message"}
        </button>
      </form>

      {alertInfo.display && (
        <div
          className={`${styles.alert} ${
            alertInfo.type === "success" ? styles.alertSuccess : styles.alertError
          }`}
          role="status"
        >
          {alertInfo.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
