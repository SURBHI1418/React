import ItemListMenu from "./ItemListMenu";
const RestaurantCategories = ({ data, showItem, setShowIndex, index }) => {
  // //   console.log("🚀 ~ RestaurantCategories ~ data:", data);

  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    //   setShowItem(!showItem);
    if (showItem) {
      setShowIndex(null); // Close the currently open item
    } else {
      setShowIndex(index); // Open the clicked item
    }
  };
  return (
    <div>
      <div className=" w-6/12 bg-gray-70 shadow-lg p-4 mx-auto my-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>{" "}
          {/* Change icon based on open/close */}
        </div>
        {showItem && <ItemListMenu items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategories;
