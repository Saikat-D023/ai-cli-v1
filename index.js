import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import pkg from "node-banner";

const showBanner = pkg.showBanner || pkg.default || pkg;

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function main() {
    await showBanner('The title', 'Just testing duhh');
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works in short",
    });
    console.log(response.text);
}

main();
