const start = () => {
  let mySeconds = seconds.value;
  let myMinutes = minutes.value;
  let myHours = hours.value;
  setTimeout(start, 1000);
  if (myHours == 0 && myMinutes == 0 && mySeconds == 0) {
    mySeconds = "00";
    myMinutes = "00";
    myHours = "00";
  } else if (mySeconds != 0) {
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  } else if (hours.value != 0 && minutes.value == 0) {
    minutes.value = 60;
    hours.value--;
  }
};
const reset = () =>{
    seconds.value ="";
    minutes.value ="";
     hours.value ="";
}