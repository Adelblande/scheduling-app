import { render, screen } from "@testing-library/react-native";
import { Input } from ".";

describe("Components -> Input", () => {
  it("should be render Input correctly", () => {
    render(<Input placeholder="Nome" />);

    const placeholder = screen.getByPlaceholderText("Nome");

    expect(placeholder).toBeTruthy();
  });
});
