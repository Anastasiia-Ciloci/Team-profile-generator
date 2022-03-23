const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("init", () => {
    it("should require the school name", () => {
      const intern = new Intern(
        "John",
        2,
        "johnmail.com",
        "University of North Carolina"
      );
      expect("school" in intern).toBe(true);
    });
  });
  describe("getSchool", () => {
    it("should return the school name", () => {
      const intern = new Intern(
        "John",
        4,
        "johnmail.com",
        "University of North Carolina"
      );
      expect(intern.getSchool()).toBe("University of North Carolina");
    });
  });
});
