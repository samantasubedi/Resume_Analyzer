import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o";

export async function POST(req: NextRequest) {
  //it means Run this function when the client sends a POST request to /api/analyze.
  //req parameter gets the data we previously sent form inputfile.tsx
  try {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });
    const { content } = await req.json(); // object destructuring accesses the content propery from req object and convert it to json format
    //when we send data we cant send directly in json format we send it in plain text so we need to convert it into json.
    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `analyze this resume, write with excellent formatting (you can manupulate the font size and styles as per requrement, whatever it takes make it the best formatted text)
            include the following
             "summary": "Brief overview of resume quality",
  "strengths": ["...", "..."],
  "weaknesses": ["...", "..."],
  "suggestions": ["...", "..."],
  "overall_rating": Excellent / Good / Average / Poor
  also rate the resume out of 100 on how good it is, you can rate other factors too`,
        },
        { role: "user", content },
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName,
    });

    console.log(response);

    const result = response.choices[0].message.content;
    console.log(response.choices[0].message.content);
    return NextResponse.json({ result }); //It creates an HTTP response with a JSON body.
    //The JSON it sends back to the frontend is an object with a result property, whose value is the AI-generated analysis text.
  } catch (err) {
    console.log("errorrr", err);
    return NextResponse.json(
      { error: "Failed to analyze resume" },
      { status: 500 }
    );
  }
}
