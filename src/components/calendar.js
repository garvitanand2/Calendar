// Lib Imports
import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import buildCalendar from "./build";
import dayStyles, { beforeToday } from "./styles";
import Header from "./heade";
import Grid from "@material-ui/core/Grid";
const Datepicker = ({ value, setValue }) => {
  const [calendar, setCalendar] = useState([]);
  const weekDays = ["Mo", "Tu"];
  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div style={{ width: "50%" }}>
      <div className="calendar" style={{ background: "black" }}>
        <Header value={value} setValue={setValue}></Header>

        <div className="body">
          {calendar.map((week) => (
            <div>
              {week.map((day, index) => (
                <div
                  style={{ color: "white", background: "black" }}
                  className="day"
                  onClick={() => {
                    !beforeToday(day) && setValue(day);
                  }}
                >
                  <div className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
