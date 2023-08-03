import React, { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Roughtfil() {
  const [dates, setDates] = useState([{ startDate: '1', endDate: '1' }]);

  const handleAddDate = () => {
    setDates([...dates, { startDate: '', endDate: '' }]);
  };

  const handleDateChange = (index, field, value) => {
    const updatedDates = [...dates];
    updatedDates[index][field] = value;
    setDates(updatedDates);
  };

  const handleDeleteDate = (index) => {
    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
  };

  return (
    <div>
      <h5> Tour Dates</h5> <br />

      {dates.map((date, index) => (
        <div className="row" key={index}>
          <div className="col-md-5">
            <label className="form-label" htmlFor={`startDate-${index}`}>
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id={`startDate-${index}`}
              value={date.startDate}
              onChange={(e) => handleDateChange(index, 'startDate', e.target.value)}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label" htmlFor={`endDate-${index}`}>
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id={`endDate-${index}`}
              value={date.endDate}
              onChange={(e) => handleDateChange(index, 'endDate', e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <br/>            

            {/* "Delete" button to remove the particular date */}
           <i onClick={() => handleDeleteDate(index)} className="loan-search-icon" style={{'cursor':'pointer'}}>
                      <AiOutlineCloseCircle />
                    </i>
          </div>
        </div>
      ))}

      <h6>
        <button onClick={handleAddDate}>+</button>
      </h6>
    </div>
  );
}

export default Roughtfil;
