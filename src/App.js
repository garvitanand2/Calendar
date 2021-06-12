import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar";
import moment from "moment";

function App() {
  const [value, setValue] = useState(moment());
  return (
   <div>
       <header className="App-header">
         <p style = {{color:'black'}}>Selected Date: {value.format('DD//MMMM/YYYY').toString()}</p>
      <Calendar value={value} setValue={setValue}>
      </Calendar>
      </header>
   </div>
     

  );
}

export default App;
