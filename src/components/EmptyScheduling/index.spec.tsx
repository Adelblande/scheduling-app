import { render, screen } from "@testing-library/react-native";
import { EmptyScheduling } from ".";

describe("Components -> EmptyScheduling", () => {
  it("should be render EmptyScheduling correctly", () => {
    render(<EmptyScheduling />);

    const text = screen.getByText(/Nenhum/i);
    expect(text).toBeTruthy();
  });
});
