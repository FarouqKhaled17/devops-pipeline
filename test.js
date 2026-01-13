console.log("Hello, World!");
console.log("This is the test.js file.");
console.log("Running tests...");
setTimeout(() => {
    console.log("Tests completed.");
}, 3000).unref();

test('basic arithmetic passes', () => {
    expect(1 + 1).toBe(2);
});