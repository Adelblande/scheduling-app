import { getDateEnd } from "./getDateEnd";

describe("getDateEnd", () => {
  it("should be return date time according type wash simple", () => {
    const datetime = getDateEnd(
      "simples",
      new Date("2024-02-12T13:30:00.000Z")
    );
    expect(datetime).toEqual(new Date("2024-02-12T14:00:00.000Z"));
  });

  it("should be return date time according type wash complete", () => {
    const datetime = getDateEnd(
      "completa",
      new Date("2024-02-12T13:30:00.000Z")
    );
    expect(datetime).toEqual(new Date("2024-02-12T14:15:00.000Z"));
  });
});
