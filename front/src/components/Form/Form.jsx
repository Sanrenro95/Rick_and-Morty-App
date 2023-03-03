import { useState } from "react";
import validation from '../validation'
import styles from './Form.module.css'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSumbmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSumbmit}>
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          onChange={handleInputChange}
          value={userData.username}
          type="text"
          name="username"
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          onChange={handleInputChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button className={styles.btn}>LOGIN</button>
      </form>
    </div>
    
  );
};

export default Form;
