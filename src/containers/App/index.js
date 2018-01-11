import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

import Avatar from '~/avatar';

import './style.less';

@inject('appStore')
@withRouter
@observer
export default class App extends Component {
  render() {
    const { show, list, changeShow, getData } = this.props.appStore;

    return (
      <div className="app-wrap">
        {
          show ?
            <Avatar
              src="//camo.githubusercontent.com/7c73f8cfbb808b9a451dac7d9ff5cbc2b4883419/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067"
            /> : null
        }
        hello mobx!
        <br />
        <Button onClick={changeShow}>点击{ show ? '隐藏' : '显示' }图像</Button>
        <Button onClick={() => { getData({}); }}>获取cnode数据</Button>
        <div className="list">
          {
            list.length ? `已完成数据请求，获得了${list.length}条数据。` : '无数据'
          }
        </div>
      </div>
    );
  }
}
