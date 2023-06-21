

const { Configuration, OpenAIApi} = require("openai");
async function exampleFunction() {
    const configuration = new Configuration({
        organization:"org-VVjBAys6JPjzwnBEOZLPguUT",
        apiKey: "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"
    })
    const openai = new OpenAIApi(configuration); 
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:[
          {role:"user", content:"Hello World"}
        ]
    });
}
exampleFunction();
console.log("test")