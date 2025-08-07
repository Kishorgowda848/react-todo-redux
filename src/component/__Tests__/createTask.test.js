import { fireEvent, render, screen } from "@testing-library/react";
import Create from "../createTask";
import '@testing-library/jest-dom';


test('Should load button in the CreateTask', () => {
  render(<Create/>);

  const button = screen.getByRole("button");
  
  expect(button).toBeInTheDocument();
})

test('Should load input placeholder text in the CreateTask', () => {
  render(<Create/>);

  const placeHolder = screen.getByPlaceholderText("Add Task");
  
  expect(placeHolder).toBeInTheDocument();
})

it("Should submit the correct value",()=>{
    const mockSubmit = jest.fn();
    render(<Create submit={mockSubmit}/>);

    const input = screen.getByPlaceholderText("Add Task");
    const button = screen.getByRole("button");
    fireEvent.change(input,{target:{value:"Learn react"}});
    fireEvent.click(button);
    
    expect(mockSubmit).toHaveBeenCalledWith("Learn react");
    expect(mockSubmit).toHaveBeenCalledTimes(1);
})