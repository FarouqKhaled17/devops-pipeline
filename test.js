console.log("Hello, World!");
console.log("This is the test.js file.");
console.log("Running tests...");
setTimeout(() => {
    console.log("Tests completed.");
}, 3000);

test('basic arithmetic passes', () => {
    expect(1 + 1).toBe(2);
});

test('basic arithmetic fails', () => {
    expect(1 + 1).toBe(3);
});