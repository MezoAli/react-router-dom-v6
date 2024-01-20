import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import LoadingSpinner from "../components/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" ||
        (navigation.state === "submitting" && <LoadingSpinner />)}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
