import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Loader from "../components/ui/Loader";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: Home,
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/my-bookings",
				Component: MyBookings,
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/blog",
				Component: Blogs,
			},
		],
	},
]);
