import * as yup from "yup";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const defaults = {
  email: "",
  password: "",
  strength: 0,
  color: "transparent",
  status: "",
  error: "",
};

function LoginForm() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    strength: 0,
    color: "red",
    status: "",
    error: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.status === "weak") {
      setFormState({ ...formState, error: "please enter stronger password" });
    }
    schema
      .validate({
        email: formState.email,
        password: formState.password,
      })
      .then(() => {
        setFormState({ ...defaults });
        document.title = "Your Games";
        navigate("/games");
      })
      .catch(function (err) {
        alert(err.errors);
      });
  };

  return (
    <form className="form-cont" onSubmit={handleSubmit}>
      <div className="input-cont">
        <label htmlFor="email" className="input-label">
          Your Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="write your email"
          className="input"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="password" className="input-label">
          Your Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="password"
          className="input"
          id="password"
          minLength={1}
          onChange={handleChange}
          value={formState.password}
        />
        {formState.error && <p className="error-p">{formState.error}</p>}

        <div
          className="strength"
          style={{
            width: `${formState.strength}`,
            backgroundColor: `${formState.color}`,
          }}
        >
          <label
            style={{ color: `${formState.color}` }}
            className="strength-label"
          >
            {formState.status}
          </label>
        </div>
        <Button btn="Login" />
      </div>
    </form>
  );
}
export default LoginForm;
