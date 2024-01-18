import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main>
        <h1 style={{ textAlign: "center" }}>{error?.message}</h1>
      </main>
    </>
  );
};

export default ErrorPage;
