const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("init", () => {
    it("should requier the officeNumber", () => {
      const manager = new Manager("Phill", 1, "phillymail.com", 757);
      expect("officeNumber" in manager).toBe(true);
    });
  });
});
