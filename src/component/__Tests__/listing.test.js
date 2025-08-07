import { fireEvent, render, screen } from "@testing-library/react"
import Listing from "../listing"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../../utils/taskSclice';
import '@testing-library/jest-dom';


it("Should render listing with ", () => {
    render(
        <Provider store={appStore}>
            <Listing />
        </Provider>
    );
});

it("Should call the remove function ", () => {
    const onRemove = jest.fn();
    const preloadedState = {
        list: {
            items: ["Task A", "Task B"]
        }
    };

    const store = configureStore({ reducer: { list: taskReducer }, preloadedState })
    render(
        <Provider store={store}>
            <Listing />
        </Provider>
    );
    // const
    expect(screen.queryByText("Task A")).toBeInTheDocument();

    const removeBtn = screen.getAllByText("remove");
    
    fireEvent.click(removeBtn[0]);

    expect(screen.queryByText("Task A")).not.toBeInTheDocument();

})

