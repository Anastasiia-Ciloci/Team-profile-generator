const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  describe("init", () => {
    it("should requier the github", () => {
      const engineer = new Engineer("Lorry", 1, "lorry@mail.com", "Lorry Brig");
      expect("github" in engineer).toBe(true);
    });
  });
  describe("getGithub", () => {
    it("should return the github", () => {
      const engineer = new Engineer("Lorry", 5, "lorry@mail.com", "Lorry Brig");
      expect(engineer.getGithub()).toBe("Lorry Brig");
    });
  });
});
