import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  console.log(data);
  const { events } = data;
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return <EventsList events={events} />;
}

export const getAllEventsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data;
  } catch (error) {
    return {
      isError: true,
      message: "Can Not Fetch Events",
      error,
    };
  }
};

export default EventsPage;
