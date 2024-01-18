import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data?.events} />;
}

export const getAllEventsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/eventss");
    return response.data;
  } catch (error) {
    throw new Error("Failed To Fetch Events");
  }
};

export default EventsPage;
