import { getByRole, render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
	test("renders fetched posts", async () => {
        window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce(
            {
                async json() {
                    return [
                        { id: "1", title: "Post 1" },
                        { id: "2", title: "Post 2" }
                    ];
                }
            }
        );

        render(<Async />);

        const posts = await screen.findAllByRole("listitem");
        expect(posts[0].textContent).toBe("Post 1");

		expect(posts).not.toHaveLength(0);
	});
});
