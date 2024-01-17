import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>EventDetailsPage</h1>
      <p>{id}</p>
    </>
  );
};

export default EventDetailsPage;
