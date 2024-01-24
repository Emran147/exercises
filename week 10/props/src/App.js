import './App.css';
import Company from './Components/Company.jsx';
import Wardrobe from './Components/Wardrobe.jsx';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ];

  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" }
  ];

  return (
    <div className="App">
      <Company name={companies[0].name} />
      {wardrobe.map((w, index) => (
        <Wardrobe key={index} wardrobe={w} />
      ))}
    </div>
  );
}

export default App;
