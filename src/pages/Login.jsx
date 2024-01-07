import Styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name === "" || username === "" || password === "") {
          return <p>Enter something in the field</p>
        } else {
        const parts = {
            name,
            username,
            password,
        };
    
        console.log(parts);
        setUsers([...users, parts]);
        localStorage.setItem("users", JSON.stringify([...users, parts]));
    }
  }

    useEffect(() => {
      const getAll = JSON.parse(localStorage.getItem("users"));

      if(getAll === null) {
        console.log("It is empty! No users have logged in to site");
        setUsers([]);
      } else {
        setUsers(getAll);
      }

      if(getAll) {
        setUsers(getAll);
      }
    }, [])

  return (
    <>
     <button 
       style={{ 
        color: "#555843", 
        backgroundColor: "#A2C579",
        fontSize: "1.2rem",
       }}
       onClick={() => navigate("/")} >Back</button>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
     </form>
     {
      name !== "" ?
      (<p>Welcome {name} </p>) :
      null
     }
    </>
  )
}
