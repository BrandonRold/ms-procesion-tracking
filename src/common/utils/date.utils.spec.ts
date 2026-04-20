import { diffInHoras, diffInMinutos } from "./date.util";

describe("diffInMinutos", () => {
    it("Calcular la diferencias entre dos Tiempos en minutos " , () => {
        const date_init = "08:30:00";
        const date_end = "10:30:00";
        const result = diffInMinutos(date_init, date_end);
        console.log(result);
        expect(result).toBe(120);
    })
})

describe("diffInHoras", () => {
    it("Calcular la diferencias entre dos tiempos en Horas " , () => {
        const datate_init = "08:30:00";
        const date_end = "10:30:00";
        const result = diffInHoras(datate_init, date_end);
        console.log(result);
        expect(result).toBe(2);
    })
})