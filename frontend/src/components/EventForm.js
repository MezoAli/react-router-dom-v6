import {
  useNavigate,
  Form,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import axios from "axios";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data?.errors && (
        <ul>
          {Object.values(data?.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          required
          id="image"
          type="url"
          name="image"
          defaultValue={event?.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          required
          id="date"
          type="date"
          name="date"
          defaultValue={event?.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          required
          id="description"
          name="description"
          rows="5"
          defaultValue={event?.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function addOrEditEventAction({ request, params }) {
  try {
    const data = await request.formData();
    const eventsData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };
    const method = request?.method.toLowerCase();
    let url = "http://localhost:8080/events";

    if (method === "patch") {
      const id = params?.id;
      url = `http://localhost:8080/events/${id}`;
    }

    const response = await axios[`${method}`](url, eventsData);
    if (response.status === 422) {
      return response;
    }
    return redirect("/events");
  } catch (error) {
    throw json({ message: "Can't Add Event" }, { status: 500 });
  }
}
