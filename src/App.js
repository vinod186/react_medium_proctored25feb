import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';

function App() {
  const[state, setState] = useState([]);
  const[age, setAge] = useState('hide-age');
  const[email, setEmail] = useState('hide-email');
  const[phone, setPhone] = useState('hide-phone');
   useEffect(()=>{
     fetch("https://randomuser.me/api/")
     .then(x=>x.json())
     .then((data=>setState(data.results)))
   },[])

   const ageShow = ()=>{
     setAge("");
     setEmail('hide-email');
     setPhone('hide-phone');
   }
   
   const emailShow = () =>{
     setEmail("");
     setPhone('hide-phone');
     setAge('hide-age');
   }

   const phoneShow = () =>{
     setPhone("");
     setAge('hide-age');
     setEmail('hide-email');
   }
   console.log(state);
  return (
    <div className="App">
      {state.map((x)=>(
        <div key='Math.random()'>
          <img src={x.picture.large}/>
          <h1>{x.name.first} {x.name.last}</h1>
          <h2 className={age}>{x.dob.age}</h2>
          <h2 className={email}>{x.email}</h2>
          <h2 className={phone}>{x.phone}</h2>
        </div>
      ))}
      <button onClick={ageShow}>age</button>
      <button onClick={emailShow}>email</button>
      <button onClick={phoneShow}>phone</button>
    </div>
  );
}

export default App;