import { fireEvent, render, screen } from "@testing-library/react"
import StringCalculator from "./StringCalculator"
import '@testing-library/jest-dom'; 

test('adds numbers separated by comma. ', () => {
    render (<StringCalculator />)
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "1,2,3"}})
    expect(screen.getByText("sum is 6")).toBeInTheDocument();
})
