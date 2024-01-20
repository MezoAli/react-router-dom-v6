import axios from "axios";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function addNewEventAction({ request, params }) {
  const data = await request.formData();
  const eventsData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  try {
    await axios.post("http://localhost:8080/events", eventsData);
    return redirect("/events");
  } catch (error) {
    throw json({ message: "Can't Add Event" }, { status: 500 });
  }
}
