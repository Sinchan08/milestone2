const express = require('express');
const app = express();
const expensesRouter = require('./routes/expenses'); // This imports the expenses route

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the expenses router for routes under "/expenses"
app.use('/expenses', expensesRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
