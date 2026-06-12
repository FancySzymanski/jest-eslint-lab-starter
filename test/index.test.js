const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => { 
  //Testing normal case
    it("Capitalizes the first letter of each word in a string", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World")
    });
    // testing empty string
    it("Returns an empty string when given an empty string", () => {
        expect(capitalizeWords("")).toBe("")
    });
     // testing strings with special characters
    it("Capitalizes the first letter of each word in a string with special characters", () => {
        expect(capitalizeWords("hello-world")).toBe("Hello-World")
    });
     // single word strings
    it("capitalizes a single word string", () => {
        expect(capitalizeWords("hello")).toBe("Hello")
    });
});

describe("filterActiveUsers", () => { 
  //Testing mixed active/inactive
    it("Only returns users with an isActive property", () => {
        const users = [
            {username: "Emily", isActive: true},
            {username: "Alex", isActive: false},
            {username: "Fred", isActive: true}
        ];

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([{username: "Emily", isActive: true}, {username: "Fred", isActive: true}])
    });
    // testing all inactive users
     it("returns an empty array when all users are inactive", () => {
        const users = [
            {username: "Emily", isActive: false},
            {username: "Alex", isActive: false},
            {username: "Fred", isActive: false}
        ];

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([])
    });
     // testing an empty array
    it("returns an empty array when given an empty array", () => {
        const users = [];

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([])
    });
});

describe("logAction", () => { 
  //Testing valid inputs
    it("Generates the correct log string for valid inputs", () => {
        expect(logAction("login", "Alice")).toContain("Alice");
        expect(logAction("login", "Alice")).toContain("login");
    });
    // testing when missing an action or username
     it("Correctly handles a missing action or username", () => {
        expect(logAction("login")).not.toContain("undefined")
    });
     // testing empty string as inputs
    it("Does not accept an empty string", () => {
        expect(logAction("", "Alice")).toContain("Error");
        expect(logAction("login", "")).toContain("Error");
    });
});