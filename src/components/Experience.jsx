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
      <Job
        key={jobs.length}
        setButtonVisible={setButtonVisible}
        removeJob={removeJob}
      />,
    ]);
  };
  const removeJob = (indexToRemove) => {
    setJobs(jobs.filter((_, index) => index !== indexToRemove));
  };
  // TODO Пофиксить кнопку Cancel
  return (
    <div className="experience">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2>Experience</h2>
        </AccordionSummary>

        <AccordionDetails>
          {jobs.map((job, index) => (
            <div key={index}>{job}</div>
          ))}
          {buttonVisible && (
            <Button type="button" text="Add Job" onClick={handleAddJob} />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Experience;
