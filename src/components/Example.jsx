import { useState } from "react";
import { MonthPicker, MonthInput } from "react-lite-month-picker";
import PropTypes from "prop-types";

function Example({ selectedMonthData, setSelectedMonthData, text }) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div className="date-container">
        {text}
        <MonthInput
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
        {isPickerOpen ? (
          <MonthPicker
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
          />
        ) : null}
      </div>
    </>
  );
}
Example.propTypes = {
  selectedMonthData: PropTypes.object,
  setSelectedMonthData: PropTypes.func,
  text: PropTypes.string,
};
export default Example;
