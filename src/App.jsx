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
import { useState } from "react";
// TODO: переписать компоненты. Логика и стейты должны быть в APP, а компоненты меньше
function App() {
  // General section
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
  });
  const fullName = generalData.firstName + " " + generalData.lastName;
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralData({ ...generalData, [name]: value });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        {fullName}
        <div className="main">
          <General formData={generalData} onChange={handleGeneralInfoChange} />
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
