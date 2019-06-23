import React, { Component } from 'react';
import './older.scss';

class Com extends Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div className = 'content'>
        <div>
          <div className = 'help'>
            <div className = 'top'>
              <div className = 'online'>
                <p>600</p>
                <p>在线老鸟</p>
              </div>
              <div className = 'center'></div>
              <div className = 'today'>
                <p>6622</p>
                <p>今日解决问题</p>
              </div>
            </div>
            <div className = 'bottom'>
              <p>发布求助</p>
            </div>
          </div>
          <div className = 'recommend'>
            <div className = 'header'>
              <div className = 'top'>
                <div className = 'left'>推荐老鸟</div>
                <div className = 'more'>查看更多老鸟 ></div>
              </div>
              <div className = 'bottom'>
                <p>找一个老鸟,改变你的职场生涯</p>
              </div>
            </div>
            <div className = 'cont'>
              <ul>
                <li>
                  <div className = 'img'></div>
                  <p className = 'name'>陈凯</p>
                  <p className = 'info'>上海威士敦合伙人</p>
                </li>
                <li>
                  <div className = 'img'></div>
                  <p className = 'name'>陈凯</p>
                  <p className = 'info'>上海威士敦合伙人</p>
                </li>
                <li>
                  <div className = 'img'></div>
                  <p className = 'name'>陈凯</p>
                  <p className = 'info'>上海威士敦合伙人</p>
                </li>
                <li>
                  <div className = 'img'></div>
                  <p className = 'name'>陈凯</p>
                  <p className = 'info'>上海威士敦合伙人</p>
                </li>
              </ul>
            </div>
        </div>
        <div className = 'question'>
          <div className = 'rank'>
            <ul>
              <li>
                <p className = 'top'>老鸟排行</p>
                <p className = 'cen'>最受欢迎</p>
                <div className = 'img'></div>
              </li>
              <li>
                <p className = 'top'>老鸟排行</p>
                <p className = 'cen'>最受欢迎</p>
                <div className = 'img'></div>
              </li>
              <li>
                <p className = 'top'>老鸟排行</p>
                <p className = 'cen'>最受欢迎</p>
                <div className = 'img'></div>
              </li>
            </ul>
          </div>
          <div className = 'forhelp'>
            <div className = 'head'>
              <div className = 'top'>
                <div className = 'left'>求助问题</div>
                <div className = 'right'>
                  <ul>
                    <li>推荐</li>
                    <li>最新</li>
                    <li>公司相关</li>
                  </ul>
                </div>
              </div>
              <div className = 'bottom'>以下问题正在急切寻求帮助</div>
            </div>
            <div className = 'cont'>
              <div className = 'yes'>
                <div className = 'people'>
                  <div className = 'left'>
                    <div className = 'img'></div>
                    <span>卢金桥</span>
                  </div>
                  <div className = 'right'>创建于昨天</div>
                </div>
                <div className = 'problem'>
                  <div className = 'info'>错过了秋招，是不是春招没有什么好的企业了?</div>
                  <div className = 'tag'>#职业规划</div>
                </div>
              </div>
              <ul>
                <li>
                  <div className = 'no'>
                    <div className = 'people'>
                      <div className = 'head'>
                        <div className = 'left'>11位老鸟认领</div>
                        <div className = 'right'>认领</div>
                      </div>
                      <div className = 'bottom'>
                        <div className = 'left'>
                          <div className = 'img'></div>
                          <span>卢金桥</span>
                        </div>
                        <div className = 'right'>创建于1天前</div>
                      </div>
                    </div>
                    <div className = 'problem'>
                      <div className = 'info'>错过了秋招，是不是春招没有什么好的企业了?</div>
                      <div className = 'tag'>#职业规划</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className = 'no'>
                    <div className = 'people'>
                      <div className = 'head'>
                        <div className = 'left'>11位老鸟认领</div>
                        <div className = 'right'>认领</div>
                      </div>
                      <div className = 'bottom'>
                        <div className = 'left'>
                          <div className = 'img'></div>
                          <span>卢金桥</span>
                        </div>
                        <div className = 'right'>创建于1天前</div>
                      </div>
                    </div>
                    <div className = 'problem'>
                      <div className = 'info'>错过了秋招，是不是春招没有什么好的企业了?</div>
                      <div className = 'tag'>#职业规划</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Com;