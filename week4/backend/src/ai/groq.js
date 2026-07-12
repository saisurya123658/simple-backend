const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function summarize(text) {
  const prompt = `
Return ONLY valid JSON.

{
  "bullets": [
    "",
    "",
    ""
  ]
}

Summarize the following text into exactly 3 bullet points:

${text}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile", // You can also use "llama-3.1-8b-instant"
    temperature: 0,
    response_format: {
      type: "json_object",
    },
    messages: [
      {
        role: "system",
        content: "You are a JSON API. Respond ONLY with valid JSON.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return {
    text: response.choices[0].message.content,
    usage: response.usage,
  };
}

module.exports = { summarize };
