import { useState } from "react";
import Button from "./Button";
import Job from "./Job";

function Experience() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [jobVisible, setJobVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddJob = () => {
    setButtonVisible(false);
    setJobVisible(true);
  };
  return (
    <div className="experience">
      <h2>Experience</h2>
      {jobVisible && <Job />}
      {buttonVisible && <Button text="Add Job" onClick={handleAddJob} />}
    </div>
  );
}

export default Experience;
