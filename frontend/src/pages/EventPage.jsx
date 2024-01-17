import { useEffect, useState } from "react";
import axios from "axios";
import EventItem from "../components/EventItem";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/events");
      setEvents(response.data.events);
    })();
  }, []);
  console.log(events);

  return (
    <>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </>
  );
};

export default EventPage;
