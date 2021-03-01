import React, { useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Coordinator from '../coordinator/coordinator';
import Student from '../student/student';
import Director from '../director/director';
import Guest from '../guest/guest'

function ManageAccount() {
    const [role, setRole] = useState(""); 
    return (
        <BrowserRouter>
        <div>
            <h1>Manage Account</h1>
            <div className="majorbox"> 
                <div className="major-item"><h1><Link to="/Student" onClick={() => setRole("Student")}>Student</Link></h1></div>
                <div className="major-item"><h1><Link to="/Coordinator" onClick={() => setRole("Coordinator")}>Coordinator</Link></h1> </div>
                <div className="major-item"><h1><Link to="/Guest" onClick={() => setRole("Guest")}>Guest</Link></h1></div>
                <div className="major-item"><h1><Link to="/Director" onClick={() => setRole("Director")}>Director</Link></h1></div>
            </div>
            <div><h1>List Account of "{role}":</h1></div>
            <div>
            <Switch>
          
            <Route path="/Student">
              <Student />
            </Route>

            <Route path="/Coordinator">
              <Coordinator />
            </Route>

            <Route path="/Guest"> 
              <Guest />
            </Route>

            <Route path="/Director"> 
              <Director />
            </Route>

            </Switch>
            </div>
        </div>

        </BrowserRouter>
    )
}

export default ManageAccount;