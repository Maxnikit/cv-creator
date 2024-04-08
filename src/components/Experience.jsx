import { useState } from "react";
import Button from "./Button";
import Job from "./Job";

function Experience() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [jobVisible, setJobVisible] = useState(false);

  let jobs = [];
  const handleAddJob = () => {
    setButtonVisible(false);
    // addJobComponent();
    jobs;
  };
  //TODO Вместо показа уже сделанного JOB нужно создавать новые компоненты
  return (
    <div className="experience">
      <h2>Experience</h2>
      {jobVisible && <Job setButtonVisible={setButtonVisible} />}
      {buttonVisible && (
        <Button type="button" text="Add Job" onClick={handleAddJob} />
      )}
    </div>
  );
}

export default Experience;
