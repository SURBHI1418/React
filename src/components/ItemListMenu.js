import { CDN_URL } from "../utils/constants";
const ItemListMenu = ({ items }) => {
  console.log(items);

  return (
    <div className="bg-gray-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                {/* </span>
            <span> */}
              </span>
              <span className="text-right ml-auto">
                {item.card.info.isVeg == 1 ? " 💚" : " 🔴"}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        

          <div className="w-3/12 p-4 relative">
            <img
              className="w-full h-auto" // Ensure the image is responsive and fills the container
              src={CDN_URL + item.card.info.imageId}
              alt={"Menu-Image"}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="p-2 rounded-lg bg-orange-300 text-white shadow-lg font-bold">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListMenu;
