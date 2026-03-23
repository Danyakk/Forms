import './Myform.css';
import React from 'react';

export function Myform() {

  const [user, Setuser] = React.useState({ login: "", pass: "", email: "", phone: "" })
  const [validlog, Setstyle] = React.useState("nonevalid")
  const [validpass, Setstylepass] = React.useState("nonevalid")
  const [validemail, Setstyleemail] = React.useState("nonevalid")
  const [validphone, Setstylephone] = React.useState("nonevalid")


  function handlesubmit() {
    alert(user.login + " " + user.pass + " " + user.email+ " " + user.phone)
  }

  function onChangeLogin(event) {
    Setuser({ login: event.target.value, pass: user.pass, email: user.email, phone: user.phone })
    if (user.login.length >= 3) {
      Setstyle("valid")
    }
    else {
      Setstyle("nonevalid")
    }

  }

  function onChangePassword(event) {
    if (user.pass.length >= 3) {
      Setstylepass("valid")
    }
    else {
      Setstylepass("nonevalid")
    }


    Setuser({ login: user.login, pass: event.target.value, email: user.email, phone: user.phone })

  }

  function onChangeEmail(event) {
    
    if (user.email.length >= 12) {
      Setstyleemail("valid")
    }
    else {
      Setstyleemail("nonevalid")
    }

    Setuser({ login: user.login, pass: user.pass, email: event.target.value, phone: user.phone })

  }

  function onChangePhone(event) {
    
    if (user.phone.length >= 12) {
      Setstylephone("valid")
    }
    else {
      Setstylephone("nonevalid")
    }

    Setuser({ login: user.login, pass: user.pass, email: user.email, phone: event.target.value  })

  }

  return <div className="Myform">
    <form onSubmit={handlesubmit}>
      <div>

        <span>Login</span>
        <input type="text" className={validlog} onChange={onChangeLogin}></input>
      </div>

      <div>
        <span>Password</span>
        <input type="text" className={validpass} onChange={onChangePassword}></input>
      </div>

      <div>
        <span>Email</span>
        <input type="text" className={validemail} onChange={onChangeEmail}></input>
      </div>

      <div>
        <span>Phone</span>
        <input type="text" className={validphone} onChange={onChangePhone}></input>
      </div>

      <input type="submit" value="Ok"></input>
    </form >
  </div>


}
export default Myform;
