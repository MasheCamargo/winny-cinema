import React, { useState, useEffect } from "react";
import RegisterForm from "./components/RegisterForm";
import { UserList } from "./components/UserList";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");

      if (response.status === 200) {
        const usersData = response.data;
        setUsers(usersData);
      } else {
        console.error("Error al obtener la lista de usuarios");
      }
    } catch (error) {
      console.error("Error al obtener la lista de usuarios:", error);
    }
  };

  const handleRegistrationSuccess = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <h3 className="title-one">Winny Cinema</h3>
      <section className="sign-in">
        <RegisterForm onRegistrationSuccess={handleRegistrationSuccess} />
        <UserList users={users} />
      </section>
    </>
  );
}

export default App;
