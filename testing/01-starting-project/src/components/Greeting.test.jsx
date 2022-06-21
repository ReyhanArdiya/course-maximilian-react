import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
import Output from "./Output";

describe("Greeting Component", () => {
    beforeEach(() => {
        render(<Greeting />);
    })

    test("renders hello world BEFORE button click", () => {
        // arrange
        // render(<Greeting />);

        // act

        // assert
        const helloWorldElement = screen.getByText(/hello world/i);
        expect(helloWorldElement).toBeInTheDocument();
    });
    test("doesnt render changed BEFORE button click", () => {
        // arrange
        // render(<Greeting />);

        // act

        // assert
        const changed = screen.queryByText(/changed/i);
        expect(changed).not.toBeInTheDocument();
    });
    test("renders changed AFTER button click", () => {
        // arrange
        // render(<Greeting />);

        // act
        expect(screen.queryByText(/changed/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByRole("button"));

        // assert
        expect(screen.queryByText(/changed/i)).toBeInTheDocument();
    })
    test("removes paragraph AFTER button click", () => {
        // arrange
        render(<Greeting />);
        const pEl = screen.queryByText(/it's good to see you!/i);

        // act
        expect(pEl).toBeInTheDocument();

        userEvent.click(screen.getByRole("button"));

        // assert
        expect(pEl).not.toBeInTheDocument();
    })
})

describe("Output component", () => {
    test('children prop works', () => {
        render(<Output />);

        expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();

        render(<Output>hello world</Output>);

        expect(screen.queryByText(/hello world/i)).toBeInTheDocument();
    });
})






