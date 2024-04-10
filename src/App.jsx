import "./App.css";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import "@fontsource/roboto/500.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// TODO: переписать компоненты. Логика и стейты должны быть в APP, а компоненты меньше
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        <div className="main">
          <General />
          <Education />
          <Experience />
        </div>
        <div className="preview">
          <Preview />
        </div>
        <Footer />
      </>
    </LocalizationProvider>
  );
}

export default App;
