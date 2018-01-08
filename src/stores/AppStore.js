// app全局性状态管理
import { observable, action } from 'mobx';
import * as appApis from '../services/app';

export default class AppStore {
  @observable show = true;

  @action changeShow = () => { this.show = !this.show; appApis.getPage().then((res) => { console.log(res); }); }
}
