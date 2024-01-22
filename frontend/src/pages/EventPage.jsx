import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center", fontSize: "30px" }}>Loading...</p>
        }
      >
        <Await resolve={events}>
          {(resolvedEvents) => <EventsList events={resolvedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

const getAllEvents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data.events;
  } catch (error) {
    throw json(
      { message: "Failed to Fetch Events" },
      {
        status: 500,
      }
    );
  }
};

export const getAllEventsLoader = () => {
  return defer({
    events: getAllEvents(),
  });
};

export default EventsPage;
