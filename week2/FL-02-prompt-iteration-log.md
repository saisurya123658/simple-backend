# FL-02 Prompt Iteration Log

## Target Task

Generate a backend API for a Temple Management System using Node.js, Express.js, and MySQL.

---

# Version 0 – Naive Prompt

### Prompt

> Build a backend for a Temple Management System.

### Output (Summary)

The AI generated a basic Express.js server with a few endpoints. The response was generic and lacked database design, validation, and project structure.

### Observation

The response was too broad and not suitable for building a real project.

---

# Version 1 – Technique: Role Assignment

### Prompt

> You are a Senior Backend Engineer. Build a backend for a Temple Management System.

### Output (Summary)

The AI provided a more professional response with better API design and coding practices.

### Observation

Assigning a role improved the quality of technical explanations but the response was still missing project-specific details.

---

# Version 2 – Technique: Context and Motivation

### Prompt

> You are a Senior Backend Engineer helping a Computer Science student build a Temple Management System for a backend engineering internship. Use Node.js, Express.js, and MySQL.

### Output (Summary)

The AI generated APIs that better matched the internship project and suggested a practical database structure.

### Observation

Adding context made the output much more relevant to my real project.

---

# Version 3 – Technique: Few-Shot Example

### Prompt

> Here is an example endpoint:

GET /events
Returns all temple events.

Use the same style to create the remaining APIs for users, bookings, donations, and admin management.

### Output (Summary)

The generated API documentation became consistent across all endpoints.

### Observation

The examples helped the AI maintain a consistent format.

---

# Version 4 – Technique: Output Structure

### Prompt

Organize the response into:

1. Folder Structure
2. Database Schema
3. API Endpoints
4. Express.js Code
5. Testing with Postman

### Output (Summary)

The response became much easier to read and implement.

### Observation

The structure improved readability but did not significantly improve the actual backend logic.

---

# Version 5 – Technique: Step Decomposition

### Prompt

Complete the task in these steps:

1. Design the database.
2. Explain the API endpoints.
3. Write the Express.js routes.
4. Add validation.
5. Add error handling.
6. Explain how to test using Postman.

### Output (Summary)

The AI generated a much more complete backend with better organization and implementation details.

### Observation

Breaking the task into steps produced the highest-quality response.

---

# Claude vs ChatGPT Comparison

## Claude

- Better explanations of design decisions.
- More detailed reasoning.
- Stronger documentation.
- Occasionally longer than necessary.

## ChatGPT

- Better structured code examples.
- Easier to follow.
- More concise.
- Better balance between explanation and implementation.

## Conclusion

For this backend engineering task, Claude provided deeper explanations, while ChatGPT produced cleaner implementation examples. Using both together produced the strongest result.

---

# Final Reusable Prompt

You are a Senior Backend Engineer mentoring a Computer Science student.

Help build a production-style backend for a Temple Management System using Node.js, Express.js, and MySQL.

Complete the work in these steps:

1. Design the project folder structure.
2. Design the database schema.
3. Explain each REST API endpoint.
4. Implement the Express.js routes.
5. Add input validation.
6. Add error handling.
7. Explain how to test the APIs using Postman.

Requirements:

- Use plain JavaScript.
- Follow REST principles.
- Use proper HTTP status codes.
- Keep the code modular.
- Explain important technical decisions.
- Make the solution suitable for a backend engineering internship project.
