import React, { Component } from 'react';
import '@/style/user.scss';

class Com extends Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div className = 'container'>
        <div className = 'content'>
          <div className = 'data'>
            <header className = 'top'>
              <div className = 'left'>
                <div className = 'img'></div>
                <div className = 'my'>
                  <p>杨振 (7积分)</p>
                  <p>签到 积分+3</p>
                </div>
              </div>
              <div className = 'right'>编辑资料 ></div>
            </header>
            <div className = 'bottom'>
              <div className = 'left'>
                <p>完善个人资料,解锁更多特权</p>
                <span>添加工作履历,教育信息,感兴趣的行业、职位等</span>
              </div>
              <div className = 'right'>立即完善</div>
            </div>
          </div>
          <div className = 'mycontent'>
            <div className = 'top'>
              <ul>
                <li><div className = 'iconfont icon-bq'></div><p>我的钱包</p></li>
                <li><div className = 'iconfont icon-bq'></div><p>我的求助、认领</p></li>
                <li><div className = 'iconfont icon-bq'></div><p>我的开聊/备聊</p></li>
                <li className = 'te'><div className = 'iconfont icon-bq'></div><p>成为认证老鸟</p></li>
              </ul>
            </div>
            <div className = 'center'></div>
            <div className = 'bottom'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;