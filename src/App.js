import React,{useState} from 'react';
import './App.css';
const App=()=>{
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [state , setState] = useState('');
    const [city , setCity] = useState('');
    const [address , setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password , setPassword] = useState('');
    const handleFirstnameChange =(e)=>{
      setFirstname(e.target.value);
    }
    const handleLastnameChange =(e)=>{
      setLastname(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleCountryChange =(e)=>{
      setCountry(e.target.value);
    }
    const handleStateChange =(e)=>{
      setState(e.target.value);
    }
    const handleCityChange =(e)=>{
      setCity(e.target.value);
    }
    const handleAddressChange =(e)=>{
      setAddress(e.target.value);
    }
    const handlePhonenumberChange =(e)=>{
      setPhonenumber(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
    
        alert('A form was submitted with "FirstName :"' + firstname +'" ,LastName :"'+lastname +'",Email :"' + email +' ",Country :"'+ country +' ",State:"'+ state +' ",City:" '+ city +' ",Address:" '+address+' ",Phonenumber:" '+phonenumber+' ",Password" '+password+''
        );
      e.preventDefault();
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> React Application</h2>
        <label >
          FirstName:
        </label><br/>
        <input type="text" value={firstname} required onChange={(e)=> {handleFirstnameChange(e)}} /><br/> <label >
          LastName:
        </label><br/>
        <input type="text" value={lastname} required onChange={(e)=> {handleLastnameChange(e)}} /><br/><label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/><label>
          Country:
        </label><br/>
        <input type="text" value={country} required onChange={(e)=> {handleCountryChange(e)}} /><br/><label>
          State:
        </label><br/>
        <input type="text" value={state} required onChange={(e)=> {handleStateChange(e)}} /><br/><label>
          City:
        </label><br/>
        <input type="text" value={city} required onChange={(e)=> {handleCityChange(e)}} /><br/><label>
          Address:
        </label><br/>
        <input type="text" value={address} required onChange={(e)=> {handleAddressChange(e)}} /><br/><label>
          Phonenumber:
        </label><br/>
        <input type="num" value={phonenumber} required onChange={(e)=> {handlePhonenumberChange(e)}} /><br/>
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
export default App ;