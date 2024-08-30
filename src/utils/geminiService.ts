import fs from 'fs';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const generateImage = async (base64Image: string) => {
  const buffer = Buffer.from(base64Image, 'base64');

  fs.writeFile("b64DecodedImage.png", buffer, function (error) {
    if (error) {
      throw error;
    } else {
      console.log('File created from base64 string');
    }
  });
}

export const getGeminiMeasure = async (base64Image: string) => {

  try {
    await generateImage(base64Image);

    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY || '');

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');


    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",    
    });

    const uploadResponse = await fileManager.uploadFile("b64DecodedImage.png", {
      mimeType: "image/png",
      displayName: "Measure Image",
    });

    function fileToGenerativePart(mimeType: string) {
      return {
        inlineData: {
          data: Buffer.from(fs.readFileSync('b64DecodedImage.png')).toString("base64"),
          mimeType
        },
      };
    }

    const filePart3 = fileToGenerativePart("image/png")

    const prompt = "Tell me the number of the consumed measure. Return just the number without any text or characters.";

    const result = await model.generateContent([prompt, filePart3]);

    return { measureValue: result.response.text(), imageUrl: uploadResponse.file.uri };

  } catch (error) {
    console.log(error);
    throw new Error('Erro ao processar a imagem.');
  }

}
