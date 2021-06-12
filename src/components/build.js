export default function buildCalendar(value) {
    const startday = value.clone().startOf("month");
    const endDay = value.clone().endOf("month");
    const day = startday.clone().subtract(1, "day");
    const calendar = [];
    while (day.isBefore(endDay, "day")) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    return calendar;
  }
  