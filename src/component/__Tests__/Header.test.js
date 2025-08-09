import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import '@testing-library/jest-dom'
import ContactUs from "../Contactus";
import Listing from "../listing";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

describe("All about Header component ", () => {

    it("Should render header component", () => {

        const router = createMemoryRouter(
            [
                { path: "/", element: <Listing /> },
                { path: "/contact", element: <ContactUs /> },
            ],
            {
                initialEntries: ["/"], // start at root
            }
        );

        render(
            <Provider store={appStore}>
                <MemoryRouter router={router}>
                    <ContactUs />
                    <Header />
                    <Listing />
                </MemoryRouter>
            </Provider>
        );
        const homeTitle = screen.queryByText("Contact us");
        expect(homeTitle.textContent).toEqual("Contact us");

        fireEvent.click(homeTitle);
        expect(screen.getByText("This is my contact us page Content")).toBeInTheDocument();

        const home = screen.queryByText("Home");
        expect(home.textContent).toEqual("Home");

        fireEvent.click(home);
        expect(screen.getByText("this is the listing page")).toBeInTheDocument();
    });
});