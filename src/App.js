import { useState } from "react";
import CardContainer from "./components/CardContainer";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { data } from "./helpers/data";

function App() {
  const [search, setSearch] = useState("");
  const filteredData = () => {
    data.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="App">
      <MyNavbar onSearch={setSearch} />
      <CardContainer search={search} />
      <MyFooter />
    </div>
  );
}

export default App;
