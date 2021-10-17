import "../css/App.css";
import Footer from "./common/footer/Footer";
import CarouselContainer from "./CarouselContainer";
// import CarouselItem from "./CarouselItem";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>Regarde Website</h1>
      </header>
      <CarouselContainer title= "Descubre más películas">
        
      </CarouselContainer>
      
      <Footer />
    </div>
  );
}

export default App;
