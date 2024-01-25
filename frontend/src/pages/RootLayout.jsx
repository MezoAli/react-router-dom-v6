import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import LoadingSpinner from "../components/LoadingSpinner";
import { Suspense } from "react";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" ||
        (navigation.state === "submitting" && <LoadingSpinner />)}
      <main>
        {/* <Suspense fallback={<p>Loading...</p>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default RootLayout;
