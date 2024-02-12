import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import NewSchedule from "./newSchedule";

jest.mock("expo-router");

describe("Screen --> newSchedule", () => {
  describe("should be rendering validation message for when the fields don't filled", () => {
    it("field name", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Preencha o nome.");
        expect(message).toBeTruthy();
      });
    });

    it("field brand", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Preencha a marca.");
        expect(message).toBeTruthy();
      });
    });

    it("field model", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Preencha o modelo.");
        expect(message).toBeTruthy();
      });
    });

    it("field plate", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Preencha a placa.");
        expect(message).toBeTruthy();
      });
    });

    it("field date", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Selecione a data.");
        expect(message).toBeTruthy();
      });
    });

    it("field time", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText("Selecione a hora.");
        expect(message).toBeTruthy();
      });
    });

    it("field type", async () => {
      render(<NewSchedule />);
      const btnButton = screen.getByText("Enviar");
      fireEvent.press(btnButton);

      await waitFor(() => {
        const message = screen.getByText(
          "Preencha o tipo de lavagem como simples ou completa"
        );
        expect(message).toBeTruthy();
      });
    });
  });

  describe("should be not render validation message for when the fields filled", () => {
    it("", async () => {
      const { debug } = render(<NewSchedule />);

      const inputName = screen.getByPlaceholderText("Nome");
      fireEvent.changeText(inputName, "Teste");
      const inputMarca = screen.getByPlaceholderText("Marca");
      fireEvent.changeText(inputMarca, "Teste");
      const inputModelo = screen.getByPlaceholderText("Modelo");
      fireEvent.changeText(inputModelo, "Teste");
      const inputPlate = screen.getByPlaceholderText("Placa");
      fireEvent.changeText(inputPlate, "AAA1B23");
      const inputDate = screen.getByPlaceholderText("Selecione a data");
      fireEvent.changeText(inputDate, "");

      await waitFor(() => {
        const selectedDay = screen.getByText("12");
        expect(selectedDay).toBeTruthy();
      });
      debug();
      // const btnSend = screen.getByText("Enviar");
      // fireEvent.press(btnSend);
    });
  });
});
