import { formatDate, formatHour } from "./format";

describe("format", () => {
  it("should be return a date in format pt-BR (00/00/0000)", () => {
    const regEx = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/;
    const date = formatDate(new Date("2024-02-12T13:30:00.000Z"));
    expect(date).toMatch(regEx);
  });

  it("should be return a time in format HH:mm", () => {
    const regEx = /\d{2}:\d{2}/;
    const time = formatHour(new Date("2024-02-12T13:30:00.000Z"));
    expect(time).toMatch(regEx);
  });
});
