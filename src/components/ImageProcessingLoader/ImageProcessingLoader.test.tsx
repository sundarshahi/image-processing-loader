import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ImageProcessingLoader from "./ImageProcessingLoader";

describe("ImageProcessingLoader", () => {
  it("render ImageProcessingLoader correctly", async () => {
    const { container } = render(<ImageProcessingLoader />);
    expect(container).toMatchSnapshot();
  });
});
