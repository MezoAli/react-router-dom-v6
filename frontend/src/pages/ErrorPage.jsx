import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  console.log(error);

  if (error.status === 500) {
    title = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <main>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
      </main>
    </>
  );
};

export default ErrorPage;
