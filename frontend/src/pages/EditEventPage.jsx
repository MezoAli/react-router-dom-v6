import { useRouteLoaderData } from "react-router-dom";
import EventFrom from "../components/EventForm";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  return <EventFrom event={data?.event} method="patch" />;
};

export default EditEventPage;
