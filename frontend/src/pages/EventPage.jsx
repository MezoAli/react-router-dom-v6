import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data?.events} />;
}

export const getAllEventsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data;
  } catch (error) {
    throw json(
      { message: "Failed to Fetch Events" },
      {
        status: 500,
      }
    );
  }
};

export default EventsPage;
