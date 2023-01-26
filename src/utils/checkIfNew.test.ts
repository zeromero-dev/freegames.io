import { checkIfNew } from "./checkIfNew";
import { describe, it, expect, test  } from "vitest";

describe("Checks if the published date is within the last 6 days. ", () => {
    it("should return true if the date is within the last 6 days", () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        expect(checkIfNew(date.toISOString())).toBe(true);
    });
    it("should return false if the date is not within the last 6 days", () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        expect(checkIfNew(date.toISOString())).toBe(false);
    });

});