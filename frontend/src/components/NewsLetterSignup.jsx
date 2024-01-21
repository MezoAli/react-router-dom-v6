import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const [value, setValue] = useState("");
  const { state, data } = fetcher;

  useEffect(() => {
    if (data && data.message) {
      window.alert(data?.message);
      setValue("");
    }
  }, [data]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      {state === "loading" || (state === "submitting" && <LoadingSpinner />)}
      <input
        type="email"
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
