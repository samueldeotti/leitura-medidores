import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const getGeminiMeasure = async (base64Image: string) => {
  return 0;
}

export const getGeminiMeasuree = async (base64Image: string) => {
  try {

// Access your API key as an environment variable
    const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');
    const GEMINI_API_URL = 'https://ai.google.dev/gemini-api/vision';
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    
    function fileToGenerativePart(mimeType: string) {
      return {
        inlineData: {
          data: base64Image,
          mimeType
        },
      };
    }
    const teste = fileToGenerativePart('image/jpeg');
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    const prompt = "Write an advertising jingle showing how the product in the first image could solve the problems shown in the second two images.";

  const imageParts = [
    teste,
  ];

    const generatedContent = await model.generateContent([prompt, ...imageParts]);
    
    console.log(generatedContent.response.text());

    // Requisição HTTP para a API do Google Gemini
    //const response = await axios.post(
      //GEMINI_API_URL,
      //{
        //image: base64Image
      //},
      //{
        //headers: {
          //'Authorization': `Bearer ${GEMINI_API_KEY}`,
          //'Content-Type': 'application/json'
        //}
      //}
    //);
    
    //return response.data;

  } catch (error: any) {
    throw new Error('Erro ao processar a imagem.');
  }
};
