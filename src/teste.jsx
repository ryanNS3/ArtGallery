//Add this in node_modules/react-dom/index.js
window.React = require('react');

// Add this in your component file
require('react-dom');
window.React = require('react');
console.log(window.React=== window.React);