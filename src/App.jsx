import "./App.css";
import Navbar from "./components/Navbar";
import AddBanner from "./components/AddBanner";
import VerticalAddCard from "./components/VerticalAddCard";
import CardsContainer from "./components/CardsContainer";
import HorizontalAdd from "./components/HorizontalAdd";
function App() {
  return (
    <div className="bg-white"> 
      <Navbar/>
      <div className="flex gap-5 justify-center mt-10 flex-wrap">
        <AddBanner/>
        <VerticalAddCard/>
        <CardsContainer/>
        <HorizontalAdd/>
      </div>
    </div>
  );
}

export default App;
