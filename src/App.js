import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";


function App() {


  return (
    <div className="App">

      <Header />
      <div class="flex" style={{ display: "flex" }}>
        <MainBody />
      </div>

      <div style={{display:"flex"}}>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
