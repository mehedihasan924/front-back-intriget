import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      fetch("http://localhost:5000/users")
      .then(res=>res.json())
      .then( data=> setUsers(data))

    },
  [])
  const handleSubmit=(event)=>{
      event.preventDefault();
      const form=event.target;
      const name=form.name.value
      const email=form.email.value;
      const user= {name, email}
      console.log(user);
      
      fetch("http://localhost:5000/users",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
       console.log( data);
       const newUser=[...users, data]
       setUsers(newUser);
       form.reset()
      })
     
  }


  return (
    <>

  
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' id='' /><br />
      <input type="email" name='email' id='' /><br />
      <input type="submit" value="Add Users" id='' />
    </form>


      <h1> All Users Comming to Banend</h1>
      <h1> Users Length: {users.length}</h1>

     {
      users.map(data=><p key={data.id}> {data.id} : {data.name} : {data.email}</p> )
     } 
    </>
  )
}

export default App
