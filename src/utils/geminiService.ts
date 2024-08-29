import axios from 'axios';
import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const decodeBase64Image = async (base64Image: string) => {
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
    await decodeBase64Image(base64Image);

    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY || '');

    // Upload the file and specify a display name.
    const uploadResponse = await fileManager.uploadFile("b64DecodedImage.png", {
      mimeType: "image/png",
      displayName: "Measure Image",
    });

    // View the response.
    // console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);

    // Get the previously uploaded file's metadata.
    const getResponse = await fileManager.getFile(uploadResponse.file.name);

    // View the response.
    // console.log(`Retrieved file ${getResponse.displayName} as ${getResponse.uri}`);

    console.log(uploadResponse.file.uri, 'uploadResponse.file.uri')

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');


    const model = genAI.getGenerativeModel({
      // Choose a Gemini model.
      model: "gemini-1.5-pro",
    });

    // Converts local file information to a GoogleGenerativeAI.Part object.
    // function fileToGenerativePart(mimeType:string) {
    //   return {
    //     inlineData: {
    //       data: Buffer.from(fs.readFileSync('b64DecodedImage.png')).toString("base64"),
    //       mimeType
    //     },
    //   };
    // }

    // // Turn images to Part objects

    // const filePart3 = fileToGenerativePart("image/png")

    // async function run() {
    //   // Choose a Gemini model.
    //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    //   const prompt = "Write what you see on the image";
    
    //   const imageParts = [
    //     filePart3,
    //   ];
    
    //   const generatedContent = await model.generateContent([prompt, ...imageParts]);
      
    //   console.log(generatedContent.response.text());
    // }
    
    // run();


    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri
        }
      },
      { text: "tell me what you see in the image" },
    ]);

    // Output the generated text to the console
    console.log(result.response.text())

  } catch {
    throw new Error('Erro ao processar a imagem.');
  }

}

export const getGeminiMeasuree = async (base64Image: string) => {
  try {




  } catch (error: any) {
    throw new Error('Erro ao processar a imagem.');
  }
};


// import axios from 'axios';
// import fs from 'fs';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GoogleAIFileManager } from "@google/generative-ai/server";

// const decodeBase64Image = async (base64Image: string) => {
//   const buffer = Buffer.from(base64Image, 'base64');

//   fs.writeFile("b64DecodedImage.png", buffer, function (error) {
//     if (error) {
//       throw error;
//     } else {
//       console.log('File created from base64 string');
//     }
//   });
// }

// export const getGeminiMeasure = async (base64Image: string) => {

//   try {
//     await decodeBase64Image(base64Image);

//     const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY || '');

//     const uploadResponse = await fileManager.uploadFile("b64DecodedImage.png", {
//       mimeType: "image/png",
//       displayName: "Measure Image",
//     });

//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');


//     function fileToGenerativePart(mimeType:string) {
//       return {
//         inlineData: {
//           data: Buffer.from(fs.readFileSync('b64DecodedImage.png')).toString("base64"),
//           mimeType
//         },
//       };
//     }

//     const filePart3 = fileToGenerativePart("image/png")

//     async function run() {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
//       const prompt = "Tell me the number of the consumed measure. return just the number without any text or characters.";
    
//       const imageParts = [
//         filePart3,
//       ];
    
//       const generatedContent = await model.generateContent([prompt, ...imageParts]);
      
//       console.log(generatedContent.response.text());
//     }
    
//     run();


//   } catch {
//     throw new Error('Erro ao processar a imagem.');
//   }

// }

// export const getGeminiMeasuree = async (base64Image: string) => {
//   try {




//   } catch (error: any) {
//     throw new Error('Erro ao processar a imagem.');
//   }
// };
