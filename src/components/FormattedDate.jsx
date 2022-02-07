export default function FormattedDate({ date }) {
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // if (hours < 0) {
    //  return hours = `0 ${hours}`
  //}
  //if (minutes < 0) {
      //return minutes = `0 ${minutes}`
  //}
 
  return (
      <div>
          {days[day]} 
          {hours < 10 ? `0${hours}` : hours}
          :
          {minutes < 10 ? `0${minutes}` : minutes}
      </div>
  );
}
