import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import "@fontsource/roboto/500.css";
import { useReactToPrint } from "react-to-print";

import { useRef, useState } from "react";
import { Button, createTheme, MantineProvider } from "@mantine/core";
const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  //
  // GENERAL SECTION
  //

  const [generalData, setGeneralData] = useState({
    firstName: "Maxim",
    lastName: "Nikitin",
    position: "Frontend Developer",
    email: "max.nikit.03@gmail.com",
    phone: "+ 1 234 567 89 00",
  });
  const handleGeneralInfoChange = (field, value) => {
    setGeneralData({ ...generalData, [field]: value });
  };

  //
  // EDUCATION SECTION
  //

  const [educationData, setEducationData] = useState({
    school: "SEVSU",
    city: "Sevastopol",
    degree: "Robotics Engineer",
    dateStart: new Date("2016-09-01"),
    dateEnd: null,
  });
  const handleEducationInfoChange = (field, value) => {
    setEducationData({ ...educationData, [field]: value });
  };

  //
  // EXPERIENCE SECTION
  //

  const [experienceData, setExperienceData] = useState([
    {
      id: 0,
      title: "Frontend Developer",
      companyName: "Google",
      companyLocation: "Mountain View, CA",
      dateStart: new Date("2020-09-01"),
      dateEnd: new Date("2021-09-01"),
      description: "Coloring buttons",
    },
    {
      id: 1,
      title: "Farmer",
      companyName: "Farmer's Market",
      companyLocation: "Austin, Texas",
      dateStart: new Date("2021-09-01"),
      dateEnd: null,
      description: "Growing potatoes",
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

  //
  // PRINTING
  //

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  //
  // Data reset and preset
  //
  const handleClear = () => {
    setGeneralData({
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      phone: "",
    });
    setEducationData({
      school: "",
      city: "",
      degree: "",
      dateStart: null,
      dateEnd: null,
    });
    setExperienceData([
      {
        id: 0,
        title: "",
        companyName: "",
        companyLocation: "",
        dateStart: null,
        dateEnd: null,
        description: "",
      },
      {
        id: 1,
        title: "",
        companyName: "",
        companyLocation: "",
        dateStart: null,
        dateEnd: null,
        description: "",
      },
    ]);
  };
  const setPreset = () => {
    setGeneralData({
      firstName: "Maxim",
      lastName: "Nikitin",
      position: "Frontend Developer",
      email: "max.nikit.03@gmail.com",
      phone: "+ 1 234 567 89 00",
    });
    setEducationData({
      school: "SEVSU",
      city: "Sevastopol",
      degree: "Robotics Engineer",
      dateStart: new Date("2016-09-01"),
      dateEnd: null,
    });
    setExperienceData([
      {
        id: 0,
        title: "Frontend Developer",
        companyName: "Google",
        companyLocation: "Mountain View, CA",
        dateStart: new Date("2020-09-01"),
        dateEnd: new Date("2021-09-01"),
        description: "Coloring buttons",
      },
      {
        id: 1,
        title: "Farmer",
        companyName: "Farmer's Market",
        companyLocation: "Austin, Texas",
        dateStart: new Date("2021-09-01"),
        dateEnd: null,
        description: "Growing potatoes",
      },
    ]);
  };
  return (
    <MantineProvider theme={theme}>
      <div className="app">
        <Header />

        <div className="main">
          <Button
            onClick={() => {
              handlePrint(null, () => contentToPrint.current);
            }}
          >
            <i className="fa fa-print"></i> Print
          </Button>
          <Button onClick={handleClear}>
            <i className="fa fa-trash"></i> Clear
          </Button>
          <Button onClick={setPreset}>
            <i className="fa fa-user"></i> Set preset
          </Button>
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
          <div className="printContainer" ref={contentToPrint}>
            <Preview
              generalData={generalData}
              educationData={educationData}
              experienceData={experienceData}
            />
          </div>
        </div>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
