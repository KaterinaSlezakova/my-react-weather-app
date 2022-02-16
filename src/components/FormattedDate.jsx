export default function FormattedDate({ time }) {
  let days = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = time.getDay();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let month = time.getMonth();
  let date = time.getDate();
  let year = time.getFullYear();

  return (
    <div className="FormattedDate">
      {days[day]} {date} {months[month]} {""} {year} {""}
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}
      {""}
    </div>
  );
}
