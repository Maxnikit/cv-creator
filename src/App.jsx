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
  const handleGeneralInfoChange = (field, value) => {
    setGeneralData({ ...generalData, [field]: value });
  };
  const fullName = generalData.firstName + " " + generalData.lastName;

  // Education section
  const [educationData, setEducationData] = useState({
    school: "",
    city: "",
    degree: "",
    dateStart: null,
    dateEnd: null,
  });
  const handleEducationInfoChange = (field, value) => {
    setEducationData({ ...educationData, [field]: value });
  };
  const handleEducationDateChange = (field, date) => {
    setEducationData({ ...educationData, [field]: date });
  };
  const getMonthByIndex = (index) => {
    return new Date(2000, index).toLocaleString("en", {
      month: "long",
    });
  };
  // TODO переделать функцию
  // function computeFullDate() {
  //   if (selectedDateStart && selectedDateEnd) {
  //     const startMonth = getMonthByIndex(selectedDateStart.$M);
  //     const endMonth = getMonthByIndex(selectedDateEnd.$M);

  //     setFormData({
  //       ...formData,
  //       fullDate:
  //         startMonth +
  //         " " +
  //         selectedDateStart.$y +
  //         " - " +
  //         endMonth +
  //         " " +
  //         selectedDateEnd.$y,
  //     });
  //     console.log(formData.fullDate);
  //   } else if (selectedDateStart && selectedDateEnd === null) {
  //     const startMonth = getMonthByIndex(selectedDateStart.$M);
  //     setFormData({
  //       ...formData,
  //       fullDate: startMonth + " " + selectedDateStart.$y + " - " + "Present",
  //     });
  //     console.log(formData.fullDate);
  //   }
  // }

  // Experience
  const [experienceData, setExperienceData] = useState([
    {
      id: 0, // Unique identifier for each job
      title: "",
      companyName: "",
      companyLocation: "",
      dateStart: null,
      dateEnd: null,
      description: "",
    },
    {
      id: 1, // Unique identifier for each job
      title: "",
      companyName: "",
      companyLocation: "",
      dateStart: null,
      dateEnd: null,
      description: "",
    },
  ]);
  const handleExperienceInfoChange = (jobId, field, value) => {
    setExperienceData(
      experienceData.map((job) => {
        if (job.id === jobId) {
          return { ...job, [field]: value };
        }
        return job;
      })
    );
  };

  // TODO переделать компонент experience как остальные
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        {fullName}
        <div className="main">
          <General formData={generalData} onChange={handleGeneralInfoChange} />
          <Education
            formData={educationData}
            onChange={handleEducationInfoChange}
          />
          <Experience
            formData={experienceData}
            onChange={handleExperienceInfoChange}
          />
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
