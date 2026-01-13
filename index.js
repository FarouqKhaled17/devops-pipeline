console.log('Hello, World!');
console.log('This is the index.js file.');
console.log('Welcome to the project!');
console.log('Enjoy coding!');

// minimal app used by "npm start"
console.log('App started');
setTimeout(() => {
    console.log('Exiting (short-lived app for CI)');
    process.exit(0);
}, 1000);