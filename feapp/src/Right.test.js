import { render, screen } from "@testing-library/react";
import { Right } from "./Right";

test("check for the test", ()=>{
	render(<Right/>);
	const heading = screen.getByText("Right, learn PHP");
	expect(heading).toBeInTheDocument();
});
