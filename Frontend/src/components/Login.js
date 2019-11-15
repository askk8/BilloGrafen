import React, { useState } from "react";
import { Button, FormGroup, FormControl,  } from "react-bootstrap";
import "./Login.css";



export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup style={{marginBottom: 10}} controlId="email" bsSize="large" >
          <span> </span>
          <FormControl
            autoFocus
            type="email"
            placeholder = "Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{marginBottom: 10}} controlId="password" bsSize="large">
          <span> </span>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder = "Lösenord"
          />
        </FormGroup>
        <Button  block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}