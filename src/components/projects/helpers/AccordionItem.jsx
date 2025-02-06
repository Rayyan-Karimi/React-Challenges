import PropTypes from "prop-types";

function AccordionItem({ item, handleItemClick, selectedItems }) {
  return (
    <div key={item.id} className="border p-3 m-2">
      <button
        className="flex justify-between w-full p-1 hover:cursor-pointer hover:bg-indigo-100"
        onClick={() => handleItemClick(item.id)}
      >
        <span>{item.title}</span>
        <div>{selectedItems.includes(item.id) ? `-` : `+`}</div>
      </button>
      <p
        className="mt-5"
        style={{
          display: selectedItems.includes(item.id) ? "block" : "none",
        }}
      >
        {item.content}
      </p>
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  handleItemClick: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AccordionItem;
