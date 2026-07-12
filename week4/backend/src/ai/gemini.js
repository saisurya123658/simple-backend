const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function summarize(text){

const prompt=`
Return ONLY JSON.

{
"bullets":[
"",
"",
""
]
}

Summarize:

${text}
`;

const response=await ai.models.generateContent({

model:"gemini-2.5-flash",

contents:prompt

});

return{

text:response.text,

usage:response.usageMetadata

};

}

module.exports={summarize};
