import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/stats`, { state: { inputValue } });
    window.location.reload();
  };

  return (
    <div>
      <input
        className="searchTeam px-8 py-3 border rounded-full bg-opacity-50 mr-5 focus:outline-none bg-black text-white"
        placeholder="Enter Team Number"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="searchButton px-6 py-3 text-lg rounded-full border border-white border-opacity-80 bg-opacity-50 text-white z-3"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
