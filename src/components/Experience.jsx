import { useState } from "react";
import Button from "./Button";
import Job from "./Job";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Experience() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [jobs, setJobs] = useState([]);

  const handleAddJob = () => {
    setButtonVisible(false);
    // addJobComponent();
    setJobs([
      ...jobs,
      <Job key={jobs.length} setButtonVisible={setButtonVisible} />,
    ]);
  };

  //TODO Вместо показа уже сделанного JOB нужно создавать новые компоненты
  return (
    <div className="experience">
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>{job}</div>
      ))}
      {buttonVisible && (
        <Button type="button" text="Add Job" onClick={handleAddJob} />
      )}
    </div>
  );
}

export default Experience;
