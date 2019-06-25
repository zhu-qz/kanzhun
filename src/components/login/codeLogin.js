import React from 'react';

const Com = () => (
<div className = 'codelogin'>
  <form>
    <input type= 'text' name= 'tel' placeholder='手机号'/>
    <input type = 'password' name = 'password' placeholder = '验证码'/>
    <span>发送验证码</span>
  </form>
  <div className= 'enter'>进入欧克</div>
  <div className = 'foot'>
    <p className = 'forget'>用户协议及隐私政策</p>
    <p className = 'quick'>密码登录</p>
  </div>
</div>
)

export default Com;