import React from "react";
import EventList from "./components/EventList";
import './App.css';
import CitySearch from "./components/CitySearch";
// import NumberOfEvents from "./components/NumberOfEvents";
// import { useEffect, useState } from "react";


const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

// import { extractLocations, getEvents } from "./api";

// import { ErrorAlert, InfoAlert, WarningAlert } from "./components/Alert";
// import CityEventsChart from "./components/CityEventsChart";
// import EventGenresChart from "./components/EventGenresChart";

// useEffect(() => {
//   //check to render warning alert

//   if (navigator.onLine) {
//     setWarningAlert("");
//   } else {
//     setWarningAlert("you are currently in offline mode");
//   }
//   fetchData();
// }, [currentCity, currentNOE]);

// const fetchData = async () => {
//   const allEvents = await getEvents();
//   const filteredEvents =
//     currentCity === "See all cities"
//       ? allEvents
//       : allEvents.filter((event) => event.location === currentCity);
//   setEvents(filteredEvents.slice(0, currentNOE));
//   setAllLocations(extractLocations(allEvents));
// };

// const App = () => {
//   const [allLocations, setAllLocations] = useState([]);
//   const [currentNOE, setCurrentNOE] = useState(32);
//   const [events, setEvents] = useState([]);
//   const [currentCity, setCurrentCity] = useState("See all cities");
//   const [infoAlert, setInfoAlert] = useState("");
//   const [errorAlert, setErrorAlert] = useState("");
//   const [warningAlert, setWarningAlert] = useState("");
//   return (
//     <div className="App">
//       <div className="alerts-container">
//         {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
//         {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
//         {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
//       </div>
//       <div className="title-box">
//         <p className="title">Meet App 📍</p>
//         <p className="subtitle">
//           Search tech events near you using Careerfoundrys calendar!
//         </p>
//       </div>
//       <CitySearch
//         allLocations={allLocations}
//         setCurrentCity={setCurrentCity}
//         setInfoAlert={setInfoAlert}
//       />
//       <NumberOfEvents
//         setCurrentNOE={setCurrentNOE}
//         setErrorAlert={setErrorAlert}
//       />

//       <div className="charts-container">
//         <EventGenresChart events={events} />
//         <CityEventsChart allLocations={allLocations} events={events} />
//       </div>
//       <EventList events={events} />
//     </div>
//   );
// }

export default App;