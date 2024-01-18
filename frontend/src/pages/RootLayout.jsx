import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" && (
        <p style={{ textAlign: "center", fontSize: "32px", margin: "10px" }}>
          Loading...
        </p>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
