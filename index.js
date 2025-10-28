import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import pkg from "node-banner";
import readline from "readline"

const showBanner = pkg.showBanner || pkg.default || pkg;

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function main(question) {
    await showBanner('Ask Weather Dept.', 'Your trustworthy weather companion');

    const feedback = await new Promise((resolve) => {
        const prompt = question || 'Whats your question: ';
        rl.question(prompt, (answer) => {
            resolve(answer.trim());
        });
    });

     const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: feedback,
    });
    console.log(response.text);
    rl.close();
}

main();
