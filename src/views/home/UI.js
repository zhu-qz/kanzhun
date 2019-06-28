import React, { Component } from 'react';
import '@/style/home.scss';

class Com extends Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div className='box-h'>
        <div>
            <div className = 'swipimg'>
              <p>这是轮播图</p>
            </div>
            
            <div className='search-h'>
                <input></input>
            </div>
            <div className='com-list'>
              <ul>
                <li>
                  <p>看公司</p>
                </li>
                <li>
                  <p>看公司</p>
                </li>
                <li>
                  <p>看公司</p>
                </li>
                <li>
                  <p>看公司</p>
                </li>
              </ul>
            </div>

            <div>
                <div className='introduce'>
                    <div className='intro-top'>
                        <h3>推荐</h3>
                        <a href='#'><span>换一批</span></a>
                    </div>
                    <div className='intro-middle'>
                        <div className='iml'>
                            <h3>广东永声文化传播有限公司</h3>
                            <p>广州·影视/媒体</p>
                            <p><span>点评13 面经11 问答10</span></p>
                        </div>
                        <div className='imr'>
                            <div className='img'>图片 </div>
                        </div>
                    </div>
                    
                    <div className='sk'><span>在影视/媒体行业排名1538</span></div>
                </div>
                <div className='introduce'>
                    <div className='intro-top'>
                        <h3>推荐</h3>
                        <a><span>换一批</span></a>
                    </div>
                    <div className='intro-middle'>
                        <div className='iml'>
                            <h3>广东永声文化传播有限公司</h3>
                            <p>广州·影视/媒体</p>
                            <p><span>点评13 面经11 问答10</span></p>
                        </div>
                        <div className='imr'>
                            <div className='img'>图片 </div>
                        </div>
                    </div>
                    
                    <div className='sk'><span>在影视/媒体行业排名1538</span></div>
                </div>
            </div>
            
            <div className='com-rank'>
                <h3>排行榜</h3>
                <ul>
                    <li>
                      <div className='img'>图片</div>
                      <h3>员工心中最靠谱...</h3>
                      <p>26207查看&nbsp;&nbsp;&nbsp;50家公司</p>
                    </li>
                    <li>
                      <div className='img'>图片</div>
                      <h3>员工心中最靠谱...</h3>
                      <p>26207查看&nbsp;&nbsp;&nbsp;50家公司</p>
                    </li>
                    <li>
                      <div className='img'>图片</div>
                      <h3>员工心中最靠谱...</h3>
                      <p>26207查看&nbsp;&nbsp;&nbsp;50家公司</p>
                    </li>
                    <li>
                      <div className='img'>图片</div>
                      <h3>员工心中最靠谱...</h3>
                      <p>26207查看&nbsp;&nbsp;&nbsp;50家公司</p>
                    </li>
                </ul>

                <div className='all-rank'><a><span>查看全部排行榜</span><i className='iconfont icon-right'></i></a></div>
            </div>
            <div className='cor-special'>
                <div className='cor-top'>
                    <h3>企业专题</h3>
                </div>
                <div className='cor-cont'>
                    <div className='cor-l'>
                        <p>双十一还没到，这些电商公司已经燥起来！</p>
                        <span>14824查看   &nbsp;   15家公司</span>
                    </div>
                    <div className='cor-r'>
                        <div className='img'>图片</div>
                    </div>
                </div>
                <div className='cor-cont'>
                    <div className='cor-l'>
                        <p>双十一还没到，这些电商公司已经燥起来！</p>
                        <span>14824查看   &nbsp;   15家公司</span>
                    </div>
                    <div className='cor-r'>
                        <div className='img'>图片</div>
                    </div>
                </div>
                <div className='cor-cont'>
                    <div className='cor-l'>
                        <p>双十一还没到，这些电商公司已经燥起来！</p>
                        <span>14824查看   &nbsp;   15家公司</span>
                    </div>
                    <div className='cor-r'>
                        <div className='img'>图片</div>
                    </div>
                </div>
            <div className='all-special'><a href='#'><span>查看全部专题</span><i>图标3</i></a></div>
            </div>

        </div>
      </div>

    )
  } 
}

export default Com;