import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

//componentes
import Navbar from "./Components/header/header";
import SelectUsers from "./Components/user/selectUsers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("http://localhost:8080/api/users")
        .then((res) => res.json())
        .then((res) => setUsers(res));
    };
    getUsers();
  }, []);

  return (
    <Fragment>
      <Navbar brand="Clinic app" />

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Users list</h2>
            <SelectUsers users={users} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Users form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
