import React from 'react';

const Com = () => (
  <div className = 'tellogin'>
    <form>
      <input type= 'text' name= 'tel' placeholder='手机号'/>
      <input type = 'password' name = 'password' placeholder = '密码'/>
    </form>
    <div className= 'enter'>进入欧克</div>
    <div className = 'foot'>
      <p className = 'forget'>忘记密码</p>
      <p className = 'quick'>快捷登录</p>
    </div>
  </div>
)

export default Com;