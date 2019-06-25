import React, { Component } from 'react';
import '@/style/msg.scss';

class Com extends Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div className = 'container'>
        <div className = 'content'>
          <header className = 'head'>
            <div className = 'left iconfont icon-tongxunlu'></div>
            <div className = 'center'>消息</div>
            <div className = 'right iconfont icon-jiahaoyou'></div>
          </header>
          <div className = 'search'>
            <div className = 'sear'>
              <div className = 'box'>搜索</div>
            </div>
            <div className = 'things'>
              <div className = 'left'>
                <div className = 'img'></div>
                <div className = 'box'>
                  <div className = 'top'>待处理事项</div>
                  <div className = 'center'>3个请求待处理。</div>
                  <div className = 'bottom'>
                    <ul>
                      <li></li>
                      <li className = 'te'></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className = 'right'>昨天</div>
            </div>
          </div>
          <div className = 'mycont'>
            <ul>
              <li>
                <div className = 'img'></div>
                <div className = 'myinfo'>
                  <div className = 'top'>
                    <p>看准小助手</p>
                    <span>官方</span>
                  </div>
                  <div className = 'bottom'>xxx你好,欢迎来到看准的第二天,我们特意...</div>
                </div>
              </li>
              <li>
                <div className = 'img'></div>
                <div className = 'myinfo'>
                  <div className = 'top'>
                    <p>看准小助手</p>
                    <span>官方</span>
                  </div>
                  <div className = 'bottom'>xxx你好,欢迎来到看准的第二天,我们特意...</div>
                </div>
              </li>
            </ul>
          </div>
          <div className = 'add'>添加好友</div>
        </div>
      </div>
    )
  }
}

export default Com;