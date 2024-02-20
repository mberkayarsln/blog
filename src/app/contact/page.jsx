import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt="Contact image"
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" required />
          <input type="email" placeholder="Email Address" required />
          <input type="number" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            required
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
