import "./App.css";
import Accordion from "./components/Accordion";
import ColorGen from "./components/ColorGen";
import StarRating from "./components/StarRating";
import StarRating2 from "./components/StarRating2";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50 text-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <Accordion />
        <ColorGen></ColorGen>
        {/* <StarRating></StarRating> */}
        <StarRating2></StarRating2>
      </div>
    </div>
  );
}

export default App;
