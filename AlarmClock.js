const prompt = require("prompt-sync")();
function acceptUserInput(promptMessage, invalidMessage, maxValue) {
  let result = null;

  while (result === null) {
    let userInput = prompt(promptMessage);
    const userInputAsInt = parseInt(userInput);
    if (
      !Number.isInteger(userInputAsInt) ||
      userInputAsInt < 0 ||
      userInputAsInt > maxValue
    ) {
      console.log(invalidMessage);
    } else {
      result = userInputAsInt;
    }
  }

  return result;
}
function setAlarm(hour, minute) {
  // validate that hour, minute
  const now = new Date();
  console.log(now);

  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);

  const difference = alarmDate - now;
  console.log(now, alarmDate, difference);

  setTimeout(() => {
    console.log("Time is up!! Alarm is ringing!!!");
  }, difference);
}

const hours = acceptUserInput(
  "Please enter hours at which alarm should go off ",
  "Hours should be between 0 and 23",
  23
);
const minutes = acceptUserInput(
  "Please enter minutes at which alarm should go off ",
  "Minutes should be between 0 and 59",
  59
);
setAlarm(hours, minutes);
