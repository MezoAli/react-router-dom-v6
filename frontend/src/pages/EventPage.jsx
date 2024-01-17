import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export const getAllEventsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data.events;
  } catch (error) {
    console.log(error);
  }
};

export default EventsPage;
