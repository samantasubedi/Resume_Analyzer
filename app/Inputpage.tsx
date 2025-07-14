"use client";
import { useState } from "react";
const Inputpage = () => {
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
    //here we are extracting the data from the file and and sending it to backend , to send it to backend we need a backend api
    const reader = new FileReader(); //This creates a new object from the built-in FileReader class (provided by the browser) and stores it in reader variable

    reader.onload = async () => {
      //“When the file has finished loading (reading), run this function.”
      const filecontent = reader.result; //the result property of reader object contains actual file content that was read
    };
  };
  return (
    <div className="flex justify-center mt-[5%]">
      <div className="flex flex-col gap-10">
        <div className="text-2xl font-semibold text-green-800">
          Drop your Resume here
        </div>
        <input
          onChange={() => handlefilechange}
          className="p-4 rounded-2xl size-[300px] bg-slate-700"
          type="file"
          accept=".pdf,.docx"
        ></input>
        <button onClick={() => handleanalyze} className="btn btn-primary ">
          {" "}
          Analyze
        </button>
      </div>
    </div>
  );
};

export default Inputpage;
