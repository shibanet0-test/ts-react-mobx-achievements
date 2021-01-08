import { makeAutoObservable } from "mobx";

interface AchievementItem {
  id: number;
  i18nKey: string;
  current: number;
  max: number;
  isAwardReceived: boolean;
}
export default class Achievement {
  private itemList: AchievementItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateStatus() {
    this.itemList.map((item) => {
      if (item.current !== item.max) {
        item.current += 1;
      }
    });
  }

  get list() {
    return this.itemList;
  }

  markItemPrizeGetted(id: number) {
    const findedItem = this.itemList.find((item) => item.id === id);
    if (!findedItem) {
      return;
    }

    findedItem.isAwardReceived = true;
  }

  setItemlist(list: AchievementItem[]) {
    this.itemList = list;
  }
}
