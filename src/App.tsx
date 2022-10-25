import React, { useRef, useState } from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { resources, events } from './util'
import './App.css';

const generateEvent = () => {
  const randomResource =
    resources[Math.floor(Math.random() * resources.length)];
  const randomHour = Math.floor(Math.random() * 24);
  const randomDay = Math.floor(Math.random() * (29 - 23 + 1) + 23);
  const randomEventTitle = Math.floor(Math.random() * 10000);

  return {
    id: String(Date.now()),
    resourceId: randomResource.id,
    start: `2022-10-${randomDay}T0${randomHour}:00:00`,
    end: `2022-10-${randomDay}T0${randomHour + 1}:00:00`,
    title: `event ${randomEventTitle}`,
  };
};

function App() {
  const calendarRef = useRef<null | FullCalendar>(null);
  const [calendarEvents, setCalendarEvents] = useState([...events]);
  const addEvent = () => {
    const calendarApi = calendarRef?.current!.getApi();
    [...Array(2000).keys()].map(() => {
      const newEvent = generateEvent();
      calendarApi.addEvent(newEvent);
    });
    // console.log({ newEvent });
    // setCalendarEvents([...calendarEvents, newEvent]);
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        events={calendarEvents}
        rerenderDelay={500}
        resources={resources}
      />
      <button onClick={addEvent}>Add event</button>
    </div>
  );
}

export default App;
