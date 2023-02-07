import { checkIfToday } from "./checkIfToday";
import { describe, it, expect, test  } from "vitest";

describe("Check if the date is for today", () => {
    it("should return true if the date is today", () => {
        const date = new Date();
        expect(checkIfToday(date.toISOString())).toBe(true);
    });
    
    it("should return false if the date is not today", () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        expect(checkIfToday(date.toISOString())).toBe(false);
    });
});