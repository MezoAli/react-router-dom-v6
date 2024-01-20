import axios from "axios";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function addNewEventAction({ request, params }) {
  try {
    const data = await request.formData();
    const eventsData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };
    const response = await axios.post(
      "http://localhost:8080/events",
      eventsData
    );
    if (response.status === 422) {
      return response;
    }
    return redirect("/events");
  } catch (error) {
    throw json({ message: "Can't Add Event" }, { status: 500 });
  }
}
