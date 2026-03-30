import React from "react";
import "./TaskVakid1.css"


export function UserForm ()
{
      const [state, setState] = React.useState( {name: '', age:  0, nameValid: false, ageValid: false, email:'', emailValid:false, tell:'', tellValid:false});
       
      function validateAge(age){
          return (age>16 && age<90);
      }
      function validateName(name){
          return name.length>2;
      }
      function validateEmail(email){
          return email.length>12;
      }
      function validateTell(tell){
          return tell.length>12;
      }

      function onAgeChange(e) {
          var val = e.target.value;
          var valid = validateAge(val);
          setState({...state, age: val, ageValid: valid});
      }
      function onNameChange(e) {
          var val = e.target.value;
          var valid = validateName(val);
          setState({...state, name: val, nameValid: valid});
      } 
      function onEmailChange(e) {
          var val = e.target.value;
          var valid = validateEmail(val);
          setState({...state, email: val, emailValid: valid});
      } 
      function onTellChange(e) {
          var val = e.target.value;
          var valid = validateTell(val);
          setState({...state, tell: val, tellValid: valid});
      } 

      function handleSubmit(e) 
      {         
          if(state.nameValid === true && state.ageValid===true)
          {
              alert(`Имя: ${state.name} Возраст: ${state.age} Email: ${state.email} Tell: ${state.tell}`);
          }
          else
          {
            e.preventDefault();
          }
      } 
      
      var agevalid = state.ageValid===true? "valid":"invalid";
      var namevalid =  state.nameValid===true? "valid":"invalid";
      var emailvalid =  state.emailValid===true? "valid":"invalid";
      var tellvalid =  state.tellValid===true? "valid":"invalid";
        return (            
              <form onSubmit={handleSubmit}>
                  <p>
                      <label>Имя:</label><br />
                      <input type="text" value={state.name} onChange={onNameChange} />
                      <span className={namevalid}> Больше 3х символов</span>
                  </p>
                  <p>
                      <label>Возраст:</label><br />
                      <input type="number" value={state.age} onChange={onAgeChange}  />
                     <span className={agevalid}> от 16 до 70</span>
                  </p>
                  <p>
                      <label>Email:</label><br />
                      <input type="text" value={state.email} onChange={onEmailChange} />
                      <span className={emailvalid}> Больше 12 символов</span>
                  </p>
                  <p>
                      <label>Tell:</label><br />
                      <input type="text" value={state.tell} onChange={onTellChange} />
                      <span className={tellvalid}> Больше 12 символов</span>
                  </p>
                  <p className = "password-reset">Востановить пароль</p>
                  <input type="submit" value="Отправить" />
                  <div className="icons">
                        <img src="wk.png" alt="VK" className="social-img" />
                        <img src="twitter.png" alt="Twitter" className="social-img" />
                        <img src="facebook.png" alt="Facebook" className="social-img" />
                    </div>
              </form>
          );
}
