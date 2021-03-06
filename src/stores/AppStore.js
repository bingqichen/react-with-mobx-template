// app全局性状态管理
import { observable, action, runInAction } from 'mobx';
import * as appApis from '../services/app';

export default class AppStore {
  @observable show = true;
  @observable list = [];

  constructor({ list = [] }) {
    this.list = list;
  }

  @action changeShow = () => { this.show = !this.show; }
  @action getData = async (params) => {
    try {
      const res = await appApis.getTopicsList(params);
      runInAction(() => {
        this.list = res.data;
      });
    } catch (e) {
      console.error(e);
    }
  }
}
