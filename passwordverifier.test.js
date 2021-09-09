
const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
}
    = require("./passwordverifier");


// Utility functions
describe("Utility functions", () => {

    // Password less than 10 characters:
    test("Less than 10 characters", () => {
        expect(hasRightLength("123456789a")).toBe(false);
    });
    test("Less than 10 characters, path 1 happy", () => {
        expect(hasRightLength("123456789")).toBe(true);
    });
    test("Less than 10 characters, path 2 happy", () => {
        expect(hasRightLength("123456")).toBe(true);
    });


    // Password is not null
    test("Password is not null, path 1", () => {
        expect(isNotNull(null)).toBe(false);
    });
    test("Password is not null, path 2 happy", () => {
        expect(isNotNull("a")).toBe(true);
    });

    // Password contains 1 or more lowercase characters
    test("Contains one or more Lowercase, path 1", () => {
        expect(hasLowerCaseCharacter("A")).toBe(false);
    });
    test("Contains one or more Lowercase, path 2 happy", () => {
        expect(hasLowerCaseCharacter("a")).toBe(true);
    });
    test("Contains one or more Lowercase, path 3 happy", () => {
        expect(hasLowerCaseCharacter("Aa")).toBe(true);
    });
    test("Contains one or more Lowercase,digits, path 4", () => {
        expect(hasLowerCaseCharacter("123")).toBe(false);
    });
    test("Contains one or more Lowercase,digits, path 4", () => {
        expect(hasLowerCaseCharacter(null)).toBe(false);
    });

    // Password contains 1 or more uppercase characters

    test("Contains one or more Uppercase, path 1 happy", () => {
        expect(hasUpperCaseCharacter("A")).toBe(true);
    });
    test("Contains one or more Uppercase, path 2", () => {
        expect(hasUpperCaseCharacter("a")).toBe(false);
    });
    test("Contains one or more Uppercase, path 3 happy", () => {
        expect(hasUpperCaseCharacter("Aa1")).toBe(true);
    });
    test("Contains one or more Uppercase, digits, path 4", () => {
        expect(hasUpperCaseCharacter("123")).toBe(false);
    });
    test("Contains one or more Uppercase, null , path 5", () => {
        expect(hasUpperCaseCharacter(null)).toBe(false);
    });

    // // Password contains 1 or more numbers
    test("hasDigit, path 1 happy", () => {
        expect(hasDigit("1")).toBe(true);
    });
    test(", path 2 ", () => {
        expect(hasDigit("aA")).toBe(false);
    });
    test("hasDigit, path 3 happy", () => {
        expect(hasDigit("1aQ2")).toBe(true);
    });
    test("hasDigit, null, path 4", () => {
        expect(hasDigit(null)).toBe(false);
    });
});

// Combine minimum conditions
// 3 of 5 conditions must be true
describe("Miinimum conditions", () => {
    test("minimumConditionsReached, path 1", () => {
        expect(minimumConditionsReached([false, false, false, false, false])).toBe(false);
    });
    test("minimumConditionsReached, 3 are true, path 2 happy", () => {
        expect(minimumConditionsReached([true, true, true, false, false])).toBe(true);
    });
    test("minimumConditionsReached, under 3 true, path 3", () => {
        expect(minimumConditionsReached([true, true, false, false, false])).toBe(false);
    });
    test("minimumConditionsReached, more than 3 are true, path 4 happy", () => {
        expect(minimumConditionsReached([true, true, true, true, false])).toBe(true);
    });

    // 1 or more Lowercase must always be true
    test("Lowercase has to be true", () => {
        expect(hasLowerCaseCharacter("a")).toBe(true);
    });
})

// Verify Password - tests:
describe("Verification of the password", () => {
    test("Verify password, empty, path 1 ", () => {
        expect(verifyPassword("")).toBe(false);
    });
    test("Verify password, only digits, path 2", () => {
        expect(verifyPassword("1234567")).toBe(false);
    });
    test("Verify password, Lower Case, path 3 happy ", () => {
        expect(verifyPassword("abcdefgh")).toBe(true);
    });
    test("Verify password, upper Case only, path 4", () => {
        expect(verifyPassword("ABCDEFGH")).toBe(false);
    });
    test("Verify password, too many lower case only , path 5", () => {
        expect(verifyPassword("ahfgjfkgjf")).toBe(false);
    });
    test("Verify password,  combine, path 6 happy", () => {
        expect(verifyPassword("Aa1")).toBe(true);
    });
    test("Verify password, null, path 7 ", () => {
        expect(verifyPassword(null)).toBe(false)
    });
});