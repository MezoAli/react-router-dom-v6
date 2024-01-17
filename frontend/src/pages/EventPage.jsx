import { useEffect, useState } from "react";
import axios from "axios";
import EventsList from "../components/EventsList";
import EventItem from "../components/EventItem";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "A dummy event 1",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "A dummy event 2",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e3",
    title: "A dummy event 3",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];

const EventPage = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get("/");
  //     setEvents(response.data);
  //   })();
  // }, []);
  // console.log(events);

  return (
    <>
      {DUMMY_EVENTS.map((event) => (
        <EventItem event={event} />
      ))}
    </>
  );
};

export default EventPage;
