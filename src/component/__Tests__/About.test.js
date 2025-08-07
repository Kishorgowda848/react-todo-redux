import { act, render, screen, waitFor } from "@testing-library/react";
import About from "../About";
import '@testing-library/jest-dom';
import json from '../../constants/postMock.json'

beforeEach(() => {
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(json);
        }
    })
});
});


it("Should render About component", async () => {
    await act(async () => {
        render(<About />);
    });
});


it("Should render the post",async ()=>{
    const {container} = render(<About />);
     await waitFor(() => {
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });
})