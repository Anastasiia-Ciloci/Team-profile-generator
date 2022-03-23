const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("init", () => {
    it("should requier the name,id and email", () => {
      const employee = new Employee("Albert", 8, "albert@email.com");
      expect("name" in employee).toBe(true);
      expect("id" in employee).toBe(true);
      expect("email" in employee).toBe(true);
    });
  });
  describe("getName", () => {
    it("should return the name", () => {
      const employee = new Employee("Albert", 8, "albert@mail.com");
      expect(employee.getName()).toBe("Albert");
    });
  });
  describe("getId", () => {
    it("should return the Id", () => {
      const employee = new Employee("Albert", 8, "albert@mail.com");
      expect(employee.getId()).toBe(8);
    });
  });
  describe("GetEmail", () => {
    it("should return the email", () => {
      const employee = new Employee("Albert", 8, "albert@mail.com");
      expect(employee.getEmail()).toBe("albert@mail.com");
    });
  });
});
