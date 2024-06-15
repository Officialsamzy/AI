// const express = require('express');
// const path = require('path');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// app.use(express.json());

// // Initialize GoogleGenerativeAI with API key
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route handler for the root URL
// app.get('/', (req, res) => {
//     // Send the HTML file as a response
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Define a route to handle prompt requests
// app.post('/api/generate-content', async (req, res) => {
//     try {
//         const { prompt } = req.body; // Extract the prompt from the request body
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = response.text();
//         res.json({ text }); // Send the generated text back to the client
//     } catch (error) {
//         console.error('An error occurred:', error);
//         res.status(500).json({ error: 'An error occurred while generating content.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Initialize GoogleGenerativeAI with API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Route handler for the root URL to show the sign-up page first
app.get('/', (req, res) => {
    // Send the sign-up HTML file as a response
    res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

// Route handler for the index page
app.get('/index', (req, res) => {
    // Send the index HTML file as a response
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle prompt requests
app.post('/api/generate-content', async (req, res) => {
    try {
        const { prompt } = req.body; // Extract the prompt from the request body
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ text }); // Send the generated text back to the client
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'An error occurred while generating content.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
