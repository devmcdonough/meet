import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import './App.css';

const App = () => {
  // Sets states for various variables
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlertText, setInfoAlertText] = useState("");
  const [errorAlertText, setErrorAlertText] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  // Calls for the fetchData function to fire when currentCity or currentNOE is changed
  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("This app is offline. Keep using it though.")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  // Retrieves data from API and filters it based on location 
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  // The UI of the site featuring the app and all the components within it
  return (
    <div className="App">
      <div className="hero-image">
        <div className="hero-content">
          <div className='alerts-container'>
            {infoAlertText && <InfoAlert text={infoAlertText} />}
            {errorAlertText && <ErrorAlert text={errorAlertText} />}
            {warningAlert.length && <WarningAlert text={warningAlert} />}
          </div>
          <h1>Find all the cool stuff in your city</h1>
          <CitySearch 
            allLocations={allLocations}
            setCurrentCity={setCurrentCity} 
            setInfoAlertText={setInfoAlertText}
          />
        </div>
      </div>
      <NumberOfEvents 
        setCurrentNOE={setCurrentNOE}  
        setErrorAlertText={setErrorAlertText} 
      />
      <EventList events={events} />
    </div>
  );
}

export default App;
