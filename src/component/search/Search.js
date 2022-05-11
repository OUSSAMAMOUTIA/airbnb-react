import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number Of Guests
        <People />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => navigate("/search")}>Search Airbnb</Button>
    </div>
  );
}
export default Search;
