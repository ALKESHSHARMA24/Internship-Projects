import { useDispatch } from "react-redux";
import { IMAGE_URLs } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { RESTAURANT_MENU_IMAGE } from "../utils/constants";
const CategoryItems = (props) => {
  const { item, activeIndex } = props;
  console.log(item.card.info);
  const dispatch = useDispatch();
  // console.log(Isopen);
  // console.log(index);

  function handleCard(item) {
    dispatch(addItem(item));
  }
  return (
    <div className="bg-stone-300 w-full justify-between  flex gap-2  flex-row rounded-lg mt-4 p-4 ">
      <div className="flex w-full flex-col flex-wrap gap-2">
        <p>Type :- {item.card.info.name}</p>
        <p> Dish:- {item.card.info.description}</p>
        <p>Item Price:- {item.card.info.price / 100}</p>
        <button
          onClick={() => {
            handleCard(item);
          }}
        >
          Add Item
        </button>
      </div>

      <div className="w-1/3 h-1/2">
        <img
          className="w-full h-full rounded-lg"
          src={`${RESTAURANT_MENU_IMAGE}${item.card.info.imageId}`}
        />
      </div>
    </div>
  );
};

export default CategoryItems;
