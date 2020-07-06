import React from "react";
import { dataClient } from "../firebase/data-client";
import { getRandomName, getRandomTime } from "../functions/functions";

export const Calendar = () => {
  const days = [];
  const appointments = [];
  const createDayOnCalendar = (numAppointments) => {


    for (let i = 0; i < numAppointments; i++) {
      appointments.push(`
      <div class="appointment">
        <span class="time">${getRandomTime()}</span>
        <span class="patient">${getRandomName()}</span>
      </div>`);
    }
    //return `<div class="day">${appointments.join("")}</div>`;
  };

  const createCalendarView = () => {
    for (let i = 1; i < 28; i++) {
      if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
        continue;
      }
      days.push(createDayOnCalendar(5));
    }

    //document.querySelector(".calendarview .table").innerHTML = days.join("");
  };
  

createCalendarView()

console.log(days)

  return (
    <div class="calendarview">
      {days.join("")}

      <div class="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div class="table">{days.join("")}</div>
    </div>
  );
};
