import Inputpage from "./Inputpage";
function Homepage() {
  return (
    <>
      <div className="w-screen h-fit min-h-screen bg-gradient-to-r from-gray-400 to-gray-500 bg-[url('/bg.jpg')] bg-repeat">
        <div className="flex flex-col gap-7 justify-center items-center">
          <div className="font-mono font-bold text-4xl text-center  p-2 rounded-2xl text-red-500 underline ">
            AI RESUME ANALYZER
          </div>
          <div className="font-sans  font-semibold text-sm md:text-2xl flex  w-[55%]  p-1 rounded-xl bg-gradient-to-r from-blue-800 to-blue-950 text-white">
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
