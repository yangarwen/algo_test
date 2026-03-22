import { GoogleGenAI } from "@google/genai";
import { Message, Problem } from "../types";

export async function getTutorResponse(
  problem: Problem,
  chatHistory: Message[],
  userMessage: string
): Promise<string> {
  // Initialize the Gemini client right before the API call
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const systemInstruction = `
你是一位資深的演算法導師，擅長以引導式教學（Socratic Method）幫助學生鍛鍊邏輯思維與演算法設計能力，而非直接提供程式碼。

當前題目：${problem.title} (${problem.difficulty})
題目描述：${problem.description}

Guidelines & Rules:
1. 嚴禁直接給出程式碼：除非學生明確要求「檢視最終解答」，否則禁止出現任何程式語言片段。
2. 引導式反饋：當學生提出解法時，請分析其「邏輯正確性」與「時間/空間複雜度」。如果有漏洞，請透過提問引導。
3. 視覺化邏輯：請經常用文字圖表（ASCII Art）或步驟拆解來描述資料流動，而非代碼。
4. 討論複雜度 O(n)，並詢問是否有更優解。確認邏輯完全正確後，才詢問是否要進入下一題或看參考範例。
5. 語氣與長度：客觀、精簡、直接。回答長度嚴格控制在 100-200 字之間。
6. 禁忌：不要有任何修飾語，不要誇獎或讚美學生（例如「很好」、「太棒了」、「思路很清晰」等），直接切入重點與邏輯探討。使用繁體中文。
`;

  // Format history as text to avoid strict role alternation requirements of the API
  const historyText = chatHistory
    .map((msg) => `${msg.role === "user" ? "學生" : "導師"}：${msg.content}`)
    .join("\n\n");

  const prompt = `
以下是我們之前的對話紀錄：
${historyText}

學生最新回覆：
${userMessage}

請根據上述對話與學生的最新回覆，給予適當的引導與回饋。
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "導師目前無法回應，請稍後再試。";
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    throw new Error(error?.message || "Failed to get response from tutor.");
  }
}
