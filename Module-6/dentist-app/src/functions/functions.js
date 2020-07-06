import { dataClient } from "../firebase/data-client";

export const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return `${hour}:00u`;
};

export const getRandomName = () => {
  const person = dataClient[Math.floor(Math.random() * 250)];
  return `${person.first_name} ${person.last_name}`;
};

export const getRandomClient = () =>
  dataClient[Math.floor(Math.random() * 250)];

export const getDayOfWeek = () => {
  const date = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const currentDay = weekday[date.getDay()];
  return currentDay;
};
