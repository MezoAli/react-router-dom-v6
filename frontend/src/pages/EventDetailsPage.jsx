import axios from "axios";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailsPage = () => {
  const data = useRouteLoaderData("event-details");
  return <EventItem event={data?.event} />;
};

export default EventDetailsPage;

export async function getEventDetailsLoader({ request, params }) {
  try {
    const response = await axios.get(
      `http://localhost:8080/events/${params.id}`
    );
    return response.data;
  } catch (error) {
    throw json({ message: "Can't Fetch Event with That Id" }, { status: 500 });
  }
}
