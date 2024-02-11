import { sortSchedules } from "./sort";

const unorganized = [
  {
    name: "Adel",
    brand: "VW",
    model: "Gol",
    plate: "ADE1L23",
    type: "completa",
    status: "pending",
    dateIni: new Date("2024-02-12T13:00:00.000Z"),
    dateEnd: new Date("2024-02-12T13:45:00.000Z"),
    id: "MqdwbPb",
  },
  {
    name: "Crespo",
    brand: "VW",
    model: "fusca",
    plate: "ACA1C22",
    type: "simples",
    status: "pending",
    dateIni: new Date("2024-02-12T14:30:00.000Z"),
    dateEnd: new Date("2024-02-12T15:00:00.000Z"),
    id: "gydOwSY",
  },
  {
    name: "Alves",
    brand: "VW",
    model: "Kombi",
    plate: "ACA1D22",
    type: "simples",
    status: "pending",
    dateIni: new Date("2024-02-12T10:45:00.000Z"),
    dateEnd: new Date("2024-02-12T11:15:00.000Z"),
    id: "VXQq2Lp",
  },
];
const organized = [
  {
    name: "Alves",
    brand: "VW",
    model: "Kombi",
    plate: "ACA1D22",
    type: "simples",
    status: "pending",
    dateIni: new Date("2024-02-12T10:45:00.000Z"),
    dateEnd: new Date("2024-02-12T11:15:00.000Z"),
    id: "VXQq2Lp",
  },
  {
    name: "Adel",
    brand: "VW",
    model: "Gol",
    plate: "ADE1L23",
    type: "completa",
    status: "pending",
    dateIni: new Date("2024-02-12T13:00:00.000Z"),
    dateEnd: new Date("2024-02-12T13:45:00.000Z"),
    id: "MqdwbPb",
  },
  {
    name: "Crespo",
    brand: "VW",
    model: "fusca",
    plate: "ACA1C22",
    type: "simples",
    status: "pending",
    dateIni: new Date("2024-02-12T14:30:00.000Z"),
    dateEnd: new Date("2024-02-12T15:00:00.000Z"),
    id: "gydOwSY",
  },
];

describe("sort", () => {
  it("should be return array organized", () => {
    const newArray = sortSchedules(unorganized);
    expect(newArray).toEqual(organized);
  });
});
