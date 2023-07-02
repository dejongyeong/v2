// __test__/index.test.tsx

import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading in home component", () => {
    render(<Home />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).not.toBeInTheDocument();
  });
});
