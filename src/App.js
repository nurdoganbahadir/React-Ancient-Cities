import { useState } from "react";
import CardContainer from "./components/CardContainer";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { data } from "./helpers/data";

function App() {
  const [city, setCity] = useState("")
  return (
    <div className="App">
      <MyNavbar />
      <CardContainer data={data}/>
      <MyFooter />
    </div>
  );
}

export default App;
