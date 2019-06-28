import React, { Component } from 'react';
import '@/style/login.scss';
import TelLogin from '@/components/login/telLogin';
import CodeLogin from '@/components/login/codeLogin';
import Login1 from '@/images/login/login.png';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
  }
  Login (e) {
    if (e.target.className === 'quick') {
      this.setState({
        toggle: !this.state.toggle
      })
    }
  }
  render () {
    return (
      <div className = 'container'>
        <div className = 'content'>
          <div className= 'top'>
            <div className = 'img'><img src = { Login1 } alt = ''/></div>
            {/* <p>KAN ZHUN</p> */}
          </div>
          <div className= 'center' onClick = { 
            this.Login.bind(this)
          }>
            {
              this.state.toggle ? <TelLogin /> : <CodeLogin />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Com;