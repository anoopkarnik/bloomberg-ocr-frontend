"use server"
interface Props {
  type: string;
  image: File;
  currency?: string;
  curveNumber?: string;
  currencyPair?: string;
  baseIndex?: string;
}
export const imageToGoogleSheetWorkflow = async ({type,image,currency,curveNumber,currencyPair,baseIndex}:Props) => {
  try {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("image", image);
    if (currency) {
      formData.append("currency", currency);
    }
    if (curveNumber) {
      formData.append("curveNumber", curveNumber);
    }
    if (currencyPair) {
      formData.append("currencyPair", currencyPair);
    }
    if (baseIndex) {
      formData.append("baseIndex", baseIndex);
    }
    let url = process.env.N8N_WEBHOOK_URL2;
    const response = await fetch(url + "webhook/ocr-sheet-workflow", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to process image");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in imageToGoogleSheetWorkflow:", error);
    throw error;
  }
}