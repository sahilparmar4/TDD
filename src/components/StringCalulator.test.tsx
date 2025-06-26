import { fireEvent, render, screen } from "@testing-library/react"
import StringCalculator from "./StringCalculator"
import '@testing-library/jest-dom'; 

// user can enter the input basic test case
test("use can enter the input", ()=>{
    render (<StringCalculator />)
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "1,2,3"}})
    expect((screen.getByRole("textbox")as HTMLInputElement).value).toBe("1,2,3");
})

// failed one example
test("use can enter only number and comma", ()=>{
    render (<StringCalculator />)
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "1,2,, f, 3"}})
    expect((screen.getByRole("textbox")as HTMLInputElement).value).toBe("1,2,3");
})

// user can enter only number and comma passed one
test("use can enter only number and comma", ()=>{
    render (<StringCalculator />)
    fireEvent.change(screen.getByRole("textbox"), {target: {value: "1,2,3"}})
    expect((screen.getByRole("textbox")as HTMLInputElement).value).toBe("1,2,3");
})

// input numbers for comma separated values for summation
test('add numbers separated by comma. ', () => {
    render (<StringCalculator />)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Sum/i });
    fireEvent.change(input, {target: {value: "1,2,3"}})
    fireEvent.click(button);
    expect(screen.getByText("Sum is 6")).toBeInTheDocument();
})

// input numbers for comma separated values for subtraction
test('subtract numbers separated by comma. ', () => {
    render (<StringCalculator />)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Sub/i });
    fireEvent.change(input, {target: {value: "3,2"}})
    fireEvent.click(button);
    expect(screen.getByText("Sub is 1")).toBeInTheDocument();
})

// input numbers for comma separated values for multiplication
test('multiply numbers separated by comma. ', () => {
    render (<StringCalculator />)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Multiplication/i });
    fireEvent.change(input, {target: {value: "3,2,1"}})
    fireEvent.click(button);
    expect(screen.getByText("Multiplication is 6")).toBeInTheDocument();
})

// input numbers for comma separated values for division
test('divide numbers separated by comma. ', () => {
    render (<StringCalculator />)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Division/i });
    fireEvent.change(input, {target: {value: "20,5"}})
    fireEvent.click(button);
    expect(screen.getByText("Division is 4")).toBeInTheDocument();
})

// input should be clear
test("input should be blank after button click", ()=>{
    render (<StringCalculator />)
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", {name: /Division/i});
    fireEvent.change(input, {target: {value: "2,3,4"}})
    fireEvent.click(button) 
    expect((input as HTMLInputElement).value).toBe("")
})
