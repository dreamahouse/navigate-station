import { create } from "zustand";
import dataList from "./data/dataList";
const useCardListStore = create((set) => ({
  cardList: dataList["inspirationList"],
  setCardList: (listArr) =>
    set(() => ({
      cardList: listArr,
    })),
}));
export default useCardListStore;
