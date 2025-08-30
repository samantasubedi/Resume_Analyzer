"use client";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Inputpage = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [analyzeddata, setanalyzeddata] = useState<string | null>(null);
  const [file, setfile] = useState<File | null>(null); // this is the way to define the type of state variable, enclose the type in <>
  function handlefilechange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedfile = event.target.files?.[0]; // .files?.[0]  means if the file exists get the first file
    if (selectedfile) {
      setfile(selectedfile);
    }
  }
  const handleanalyze = () => {
    if (!file) {
      alert("please select a file first");
      return;
    }
    setloading(true);
    setanalyzeddata(null); //clearing the previous data if any
    //here we are extracting the data from the file and and sending it to backend , to send it to backend we need a backend api
    const reader = new FileReader(); //This creates a new object from the built-in FileReader API (provided by the browser) and stores that filecontent in reader variable

    reader.onload = async () => {
      //“When the file has finished loading (reading), run this function.”
      const filecontent = reader.result as string | null; //the result property of reader object contains actual file content that was read
      if (!filecontent) {
        alert("Failed to read file");
        return;
      }

      console.log(filecontent);
      // try {
      //   const res = await fetch("/analyze", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ content: filecontent }), //general syntax body: JSON.stringify({ key1: value1, key2: value2, ...})
      //     //we're sending the file content in a key called content, and wrapping it in JSON format.
      //   });
      //   if (!res.ok) {
      //     throw new Error(`HTTP error! status: ${res.status}`);
      //   }
      //   const data = await res.json(); //waits for response from the backend and parses it into json format
      //   setanalyzeddata(data.result); //data is an object so we cannot set state variable that is defined as string to be object, so we access the result property of that object
      // } catch (err) {
      //   //err is a parameter that receives actual error object that was thrown inside try block
      //   console.log("An error coccured ", err);
      // }

      try {
        const response: AxiosResponse<{ result: string }> = await axios.post(
          "/api/analyze",
          { content: filecontent }
        );
        console.log(response.data);
        setanalyzeddata(response.data.result);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setloading(false);
      }
    };
    reader.readAsText(file); //Even though reader.readAsText(file) is written after, it is actually the trigger — the starting point of the whole reading and uploading process.
  };
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex justify-center mt-[5%] border-2 border-gray-700 md:w-[1000px] md:mb-10 bg-slate-900 p-5 rounded-2xl shadow-lg shadow-black">
        <div className="flex  flex-col gap-10">
          <div className="text-3xl font-semibold text-green-800">
            Drop your Resume here
          </div>
          <input
            onChange={handlefilechange}
            className="p-4 rounded-2xl size-[350px] bg-slate-700 hover:border-white  border-2 border-transparent cursor-pointer transition-all duration-300"
            type="file"
          ></input>
          <button onClick={handleanalyze} className="btn btn-primary ">
            {" "}
            {loading == true ? "Analyzing" : "Analyze"}
          </button>
        </div>
      </div>
      {analyzeddata && (
        <pre className="bg-cyan-950 w-[80%] md:w-[80%] overflow-x-auto whitespace-pre-wrap p-5 ">
          <ReactMarkdown>{analyzeddata}</ReactMarkdown>
        </pre>
      )}
    </div>
  );
};

export default Inputpage;
