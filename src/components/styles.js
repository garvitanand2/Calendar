function isSelected(day, value) {
    return value.isSame(day, "day");
  }
  
  export function beforeToday(day, value) {
    return day.isBefore(new Date(), "day");
  }
  
  function isTodayDate(day, value) {
    return value.isSame(new Date(), "day");
  }
  
  export default function dayStyles(day, value) {
    if (beforeToday(day, value)) return "before";
    if (isSelected(day, value)) return "selected";
    if (isTodayDate(day, value)) return "today";
    return "";
  }
  