import { render,screen } from "@testing-library/react";
import {Welcome} from "./Welcome";
it("test with textincontext", ()=>{
	//checking for text in the container
	const {container} = render(<Welcome/>);
	expect(container).toHaveTextContent("Hello Abdul");
	//checking text is in header
	const heading = screen.getByRole("heading");
	expect(heading).toHaveTextContent("Hello Abdul");
	const listitem = screen.getAllByRole("listitem");
	expect(listitem).toHaveLength(2);
	const altText = screen.getByAltText("testingalt");
	expect(altText).toHaveAttribute("alt", "testingalt");
	const getClss = screen.getByText("Learn React Testing");
	expect(getClss).toHaveClass("highlight");
	screen.debug();
});
