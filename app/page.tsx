import Inputpage from "./Inputpage";
function Homepage() {
  return (
    <>
      <div className="w-screen h-fit min-h-screen bg-gradient-to-r from-gray-400 to-gray-500 bg-[url('/bg.jpg')] bg-repeat">
        <div className="flex flex-col gap-7 justify-center items-center">
          <div className="font-mono font-bold text-4xl text-center  p-2 rounded-2xl text-red-500 underline ">
            AI RESUME ANALYZER
          </div>
          <p className="max-w-3xl text-center text-gray-200 text-lg md:text-xl leading-relaxed font-semibold bg-cyan-950 p-2 rounded-2xl">
            Instantly evaluate and optimize your resume with AI. Get actionable
            insights to improve structure, keywords, and relevance for your
            target job.
          </p>
        </div>
        <div className="flex justify-center">
          <Inputpage />
        </div>
      </div>
    </>
  );
}
export default Homepage;
