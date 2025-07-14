const Inputpage = () => {
  return (
    <div className="flex justify-center mt-[5%]">
      <div className="flex flex-col gap-10">
        <div className="text-2xl font-semibold text-green-800">
          Drop your Resume here
        </div>
        <input
          className="p-4 rounded-2xl size-[300px] bg-slate-700"
          type="file"
          accept=".pdf,.docx"
        ></input>
        <button className="btn btn-primary "> Analyze</button>
      </div>
    </div>
  );
};

export default Inputpage;
