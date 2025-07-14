import OpenAI from "openai";
import Inputpage from "./Inputpage";
function Homepage() {
  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.github.ai/inference";
  const modelName = "openai/gpt-4o";

  async function main() {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "Analyze this resume" },
        { role: "user", content: "input file appears here" },
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName,
    });

    console.log(response.choices[0].message.content);
  }

  main().catch((err) => {
    console.error("The sample encountered an error:", err);
  });

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-gray-400 to-gray-500">
        <div className="flex flex-col gap-7 justify-center items-center">
          <div className="font-mono font-bold text-4xl text-center bg-amber-100 p-2 rounded-2xl text-purple-900 ">
            AI RESUME ANALYZER
          </div>
          <div className="font-serif text-2xl flex  w-[55%] bg-amber-50 p-1 rounded-xl text-gray-900">
            Instantly evaluate and optimize your resume with AI. Get actionable
            insights to improve structure, keywords, and relevance for your
            target job.
          </div>
        </div>
        <div className="flex justify-center">
          <Inputpage />
        </div>
      </div>
    </>
  );
}
export default Homepage;
