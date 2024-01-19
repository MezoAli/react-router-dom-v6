import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EventPage, { getAllEventsLoader } from "./pages/EventPage";
import EventDetailsPage, {
  getEventDetailsLoader,
} from "./pages/EventDetailsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";
import ErrorPage from "./pages/ErrorPage";
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <EventsLayout />,
        children: [
          {
            path: "/events",
            element: <EventPage />,
            loader: getAllEventsLoader,
          },
          {
            path: "/events/:id",
            loader: getEventDetailsLoader,
            id: "event-details",
            children: [
              {
                path: "/events/:id",
                element: <EventDetailsPage />,
              },
              {
                path: "/events/:id/edit",
                element: <EditEventPage />,
              },
            ],
          },

          {
            path: "/events/new",
            element: <NewEventPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
