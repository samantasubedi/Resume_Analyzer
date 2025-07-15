import Inputpage from "./Inputpage";
function Homepage() {
  return (
    <>
      <div className="w-screen h-fit min-h-screen bg-gradient-to-r from-gray-400 to-gray-500">
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
