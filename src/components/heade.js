import React from "react";
export default function CalendarHeader({ value, setValue }) {
  function currMonthName() {
    return value.format("MMMM");
  }
  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }
  return (
    <div className="header">
      {/* <div  style = {{color:'white'}} className = 'previous' onClick={()=>{
           !thisMonth() &&  setValue(prevMonth())
        }}>{ !thisMonth()?  String.fromCharCode(171): null}</div> */}
      <div className="previous">
        <div>
          <div
            style={{
              background: "#0f6ebe",
              width: "20%",
              borderRadius: "32px",
              paddingLeft: "5%",
              margin: "2%",
            }}
          >
            {"Today"}
          </div>
        </div>
      </div>

      <div className="start" style={{ color: "white" }}>
        {currMonthName()} {currYear()}
      </div>
      <div
        className="next"
        style={{ color: "white" }}
        onClick={() => {
          setValue(nextMonth());
        }}
      >
        {String.fromCharCode(187)}
      </div>
    </div>
  );
}
