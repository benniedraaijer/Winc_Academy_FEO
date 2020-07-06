import React from "react";
import {getRandomName, getRandomTime,getDayOfWeek} from "../functions/functions";
import { dataClient } from "../firebase/data-client";

export const Day = () => {
  return (
    <div>
      <h1>{getDayOfWeek()}</h1>
      <ul class="dayview">
        {dataClient.map((client) => (
          <li className="appointment" id={client.id} key={client.id}>
            <div className="time">{getRandomTime()}</div>
            <div className="patient">{getRandomName()}</div>
            <div className="dentist">Dentist: {getRandomName()}</div>
            <div className="assistent">Assistent: {getRandomName()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};