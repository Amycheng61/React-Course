import { it,expect } from "vitest";
import { formatMoney } from "./money";

it("formats money correctly", () => {       
    expect(formatMoney(0)).toEqual("0.00");
    expect(formatMoney(1)).toEqual("0.01");
    expect(formatMoney(10)).toEqual("0.10");        
    expect(formatMoney(100)).toEqual("1.00");
    expect(formatMoney(123)).toEqual("1.23");
    expect(formatMoney(1234)).toEqual("12.34");
    expect(formatMoney(12345)).toEqual("123.45");
    expect(formatMoney(123456)).toEqual("1234.56");
    expect(formatMoney(1234567)).toEqual("12345.67");
})