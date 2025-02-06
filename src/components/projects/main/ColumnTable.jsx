import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";

function ColumnTable() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleSelectedButtons = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  const generateGrid = () => (
    <div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="add-row-color mb-4 flex justify-between">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`border p-4 m-2 ${
                selectedButtons.includes(`${rowIndex}-${colIndex}`)
                  ? "bg-indigo-300"
                  : "bg-white"
              } `}
              onClick={() => handleSelectedButtons(`${rowIndex}-${colIndex}`)}
            >
              {colIndex % 2 === 0
                ? rows * colIndex + rowIndex + 1
                : rows * colIndex + rows - rowIndex}
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <ChallengeHeader title="Column Table" />
      <div className="flex flex-col justify-center items-center gap-10 text-center">
        <p>
          Create a grid of numbers where the number of rows and number of
          columns is dynamic. Selecetd grid items change their status on click.
        </p>
        {/* Dimensions setter */}
        <div className="flex gap-4">
          <div>
            <input
              type="range"
              min={2}
              max={6}
              value={rows}
              onChange={() => setRows(Number.parseInt(event.target.value))}
            />
            <p>Your rows: {rows}</p>
          </div>
          <div>
            <input
              type="range"
              min={2}
              max={6}
              value={columns}
              onChange={() => setColumns(Number.parseInt(event.target.value))}
            />
            <p>Your columns: {columns}</p>
          </div>
        </div>
        {/* Generate Grid */}
        <div className="flex justify-center items-center gap-10">
          {generateGrid()}
        </div>
        <button
          className="border-2 p-1 rounded-xl font-bold hover:bg-indigo-700 hover:text-white"
          onClick={() => setSelectedButtons([])}
        >
          Reset
        </button>
        {/* Display of numbers selected */}
        <div>
          {selectedButtons.map((buttonId) => {
            const rowIndex = Number.parseInt(buttonId.split("-")[0]),
              colIndex = Number.parseInt(buttonId.split("-")[1]);
            return (
              <p key={`${rowIndex}-${colIndex}`}>
                {colIndex % 2 === 0
                  ? rows * colIndex + rowIndex + 1
                  : rows * colIndex + rows - rowIndex}{" "}
                has been selected.
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColumnTable;
