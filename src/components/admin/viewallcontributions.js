import React, { useState } from 'react'
import Programming from '../programming'
import GraphicDesign from '../graphicdesign'
import BusinessAdministrator from '../businessadministrator'
import { BrowserRouter, Route, Link } from "react-router-dom";

function ViewAllContributions() {

    const [major, setMajor] = useState(""); 

    return (
        <BrowserRouter>
        <div className="containerContributions">
            <h1>All Contributions</h1>
            <div className="majordeadline">
                <div className="major">
                    <h2>Major: {major} </h2>
                </div>
                <div className="deadlinebox">
                    <div>
                        <h3>Dealine:</h3>
                    </div>
                    <div className="setdeadline">
                        Set Deadline here
                    </div>
                </div>
            </div>
            <div className="majorbox"> 
                <div className="major-item"><h1><Link to="/Programming" onClick={() => setMajor("Programming")}>Programming</Link></h1></div>
                <div className="major-item"><h1><Link to="/GraphicDesign" onClick={() => setMajor("Grapic Design")}>Graphic Design</Link></h1> </div>
                <div className="major-item"><h1><Link to="/BusinessAdministrator" onClick={() => setMajor("Business Administrator")}>Business Administrator</Link></h1></div>
            </div>
            <div className="content-contribu">
            <Route path="/Programming">
              <Programming />
            </Route>

            <Route path="/GraphicDesign">
              <GraphicDesign />
            </Route>

            <Route path="/BusinessAdministrator">
              <BusinessAdministrator />
            </Route>
            
            </div>
        </div>
        </BrowserRouter>
    )
}

export default ViewAllContributions;