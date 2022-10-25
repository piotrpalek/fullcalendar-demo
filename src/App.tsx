import React, { Suspense, useState } from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';
// import Search from '@material-ui/icons/Search'

// const Search =  React.lazy(() => import('@material-ui/icons/Search'))

const events = [
  {
    id: '1',
    resourceId: 'b',
    start: '2022-10-25T02:00:00',
    end: '2022-10-25T07:00:00',
    title: 'event 1',
  },
  {
    id: '2',
    resourceId: 'c',
    start: '2022-10-25T05:00:00',
    end: '2022-10-25T22:00:00',
    title: 'event 2',
  },
  {
    id: '3',
    resourceId: 'd',
    start: '2022-02-06',
    end: '2022-02-08',
    title: 'event 3',
  },
  {
    id: '4',
    resourceId: 'e',
    start: '2022-10-25T03:00:00',
    end: '2022-10-25T08:00:00',
    title: 'event 4',
  },
  {
    id: '5',
    resourceId: 'f',
    start: '2022-10-25T00:30:00',
    end: '2022-10-25T02:30:00',
    title: 'event 5',
  },
];

const resources = [
  { id: 'a', title: 'Auditorium A' },
  { id: 'b', title: 'Auditorium B', eventColor: 'green' },
  { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
  {
    id: 'd',
    title: 'Auditorium D',
    children: [
      { id: 'd1', title: 'Room D1' },
      { id: 'd2', title: 'Room D2' },
    ],
  },
  { id: 'e', title: 'Auditorium E' },
  { id: 'f', title: 'Auditorium F', eventColor: 'red' },
  { id: 'g', title: 'Auditorium G' },
  { id: 'h', title: 'Auditorium H' },
  { id: 'i', title: 'Auditorium I' },
  { id: 'j', title: 'Auditorium J' },
  { id: 'k', title: 'Auditorium K' },
  { id: 'l', title: 'Auditorium L' },
  { id: 'm', title: 'Auditorium M' },
  { id: 'n', title: 'Auditorium N' },
  { id: 'o', title: 'Auditorium O' },
  { id: 'p', title: 'Auditorium P' },
  { id: 'q', title: 'Auditorium Q' },
  { id: 'r', title: 'Auditorium R' },
  { id: 's', title: 'Auditorium S' },
  { id: 't', title: 'Auditorium T' },
  { id: 'u', title: 'Auditorium U' },
  { id: 'v', title: 'Auditorium V' },
  { id: 'w', title: 'Auditorium W' },
  { id: 'x', title: 'Auditorium X' },
  { id: 'y', title: 'Auditorium Y' },
  { id: 'z', title: 'Auditorium Z' },
];

function App() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        events={events}
        resources={resources}
      />
    </div>
  );
}

export default App;
