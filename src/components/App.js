import "../css/App.css";
import Footer from "./common/footer/Footer";
import PageHeader from "./common/header/Header";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/Styles";
import theme from "../css/ThemeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader />
        </AppBar>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
