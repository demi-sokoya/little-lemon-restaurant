import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Little Lemon app", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>,
	);
	const heading = screen.getByRole("heading", { name: /Little Lemon/i, level: 1 });
	expect(heading).toBeInTheDocument();
});
