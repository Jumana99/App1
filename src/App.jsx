import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";

export default function App(){
  return(
    <>
      <Navbar />
      <div className="container">
      <Products />
      <Footer />
    </div>
    </>
   
  );
}
