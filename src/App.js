import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from "./componets/navbar";
// import Scroll from "./componets/carousel";
import ProductSlider from "./componets/slider"
import Footer from "./componets/footer"

export default function App() {
  return (
    <div className="App">
        <Navbarcomp/>
        {/* <Scroll/> */}
      <ProductSlider/><br></br>
      <br></br>
      <Footer/>
    
        
    </div>
  );
}