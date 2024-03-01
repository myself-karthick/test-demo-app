import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
    test("test for userName input element", () => {
        render(<Login />);
        const userNameInputEle = screen.queryByRole("textbox", {
            name: "username",
        });
        console.log(userNameInputEle);
        //expect(userNameInputEle).toBeInTheDocument();
    });
    test("test for password input element", () => {
        render(<Login />);
        const passwordInputEle = screen.queryByTestId("password-input");
        console.log(passwordInputEle);
        expect(passwordInputEle).toBeInTheDocument();
        // expect(() => {
        //     screen.getByTestId("username-input");
        // }).toThrow();
        //   const linkElement = screen.getByText(/learn react/i);
        //   expect(linkElement).toBeInTheDocument();
    });
    test("test for password input element", () => {
        render(<Login />);
        const passwordInputEle = screen.queryAllByRole("textbox");
        console.log(passwordInputEle.length);
        expect(passwordInputEle.length).toEqual(2);
        expect(passwordInputEle[0]).toBeEnabled();
        // expect(() => {
        //     screen.getByTestId("username-input");
        // }).toThrow();
        //   const linkElement = screen.getByText(/learn react/i);
        //   expect(linkElement).toBeInTheDocument();
    });

    test("test for button element", () => {
        render(<Login />);
        const buttonInput = screen.queryByTestId("button-input");
        expect(buttonInput).toBeInTheDocument();
        expect(buttonInput).not.toBeEnabled();
    });

    test("test for fire an element", () => {
        render(<Login />);
        const userTextBox = screen.queryByTestId("username");
        console.log(userTextBox);
        fireEvent.change(userTextBox, { target: { value: "test" } });
        expect(userTextBox.value).toBe("test");
    });

    test("test for Mr.", () => {
        render(<Login />);
        const userTextBox = screen.queryByTestId("username");
        console.log(userTextBox);
        fireEvent.change(userTextBox, { target: { value: "Kalees" } });
        // expect(userTextBox.value).toBe("Kalees")
        const userText = screen.getByText("Mr. Kalees");
        expect(userText).toBeInTheDocument();
    });

    test("test for button disabled", () => {
        render(<Login />);
        const buttonInput = screen.queryByTestId("button-input");
        expect(buttonInput).not.toBeEnabled();
        const userTextBox = screen.queryByTestId("username");
        console.log(userTextBox);
        fireEvent.change(userTextBox, { target: { value: "" } });
        expect(buttonInput).toBeEnabled();
    });

    test.only("test for input validation", () => {
        render(<Login />);
        const userPasswordBox = screen.queryByTestId("password-input");
        let errorComponent = screen.queryByTestId("errorComponent");
        expect(errorComponent).toBeInTheDocument();
        expect(userPasswordBox.value).toBe("");
        fireEvent.change(userPasswordBox, { target: { value: "ajwadjbk" } });
        errorComponent = screen.queryByTestId("errorComponent");
        expect(errorComponent).not.toBeInTheDocument();
        fireEvent.change(userPasswordBox, { target: { value: "ajwk" } });
        errorComponent = screen.queryByTestId("errorComponent");
        expect(errorComponent).toBeInTheDocument();
    });
});
