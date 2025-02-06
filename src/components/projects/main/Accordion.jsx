import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";
import AccordionItem from "../helpers/AccordionItem";

function Accordion() {
  const [isMultipleAllowed, setIsMultipleAllowed] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuItems] = useState([
    { id: 0, title: "Item 0", content: "Content of item 0" },
    { id: 1, title: "Item 1", content: "Content of item 1" },
    { id: 2, title: "Item 2", content: "Content of item 2" },
    { id: 3, title: "Item 3", content: "Content of item 3" },
    { id: 4, title: "Item 4", content: "Content of item 4" },
  ]);

  const handleItemClick = (theId) => {
    if (isMultipleAllowed) {
      selectedItems.includes(theId)
        ? setSelectedItems(selectedItems.filter((id) => id !== theId))
        : setSelectedItems([...selectedItems, theId]);
    } else {
      selectedItems.includes(theId)
        ? setSelectedItems([])
        : setSelectedItems([theId]);
    }
  };

  const handleMultipleAllowed = (event) => {
    const checked = event.target.checked;
    setIsMultipleAllowed(checked);
    if (!checked) setSelectedItems([]);
  };

  return (
    <div>
      <ChallengeHeader title={"Accordion"} />
      <div className="m-10">
        <label className="w-full flex justify-center gap-5 mb-4 hover:bg-indigo-300">
          <input
            type="checkbox"
            id="checkbox"
            onChange={(e) => handleMultipleAllowed(e)}
          />{" "}
          Is multiple accordion allowed?
        </label>
        <div className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <AccordionItem
              item={item}
              handleItemClick={handleItemClick}
              setSelectedItems={setSelectedItems}
              key={item.id}
              selectedItems={selectedItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
