import { describe, expect, it } from "vitest";
import { visualOrganizer } from "./visual-organizer";

describe("Visual Organizer supplied metrics", () => {
  it("has the four-star rating supplied by the user", () => {
    expect(visualOrganizer.rating).toBe(4);
  });

  it("has the six installations supplied by the user", () => {
    expect(visualOrganizer.installs).toBe(6);
  });
});