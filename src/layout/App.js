import React from 'react';
import Home from '@/views/home';
import Older from '@/views/older';
import Msg from '@/views/msg';
import User from '@/views/user';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

const Com = () => (
  <div className = 'container'>
    <Switch>
      <Route path = '/home' component = { Home }/>
      <Route path = '/older' component = { Older }/>
      <Route path = '/msg' component = { Msg }/>
      <Route path = '/user' component = { User }/>
      <Redirect to = '/home'/>
    </Switch>
    <footer className = 'footer'>
      <ul>
        <NavLink to = '/home'>
          首页
        </NavLink>
        <NavLink to = '/older'>
          老鸟
        </NavLink>
        <NavLink to = '/msg'>
          消息
        </NavLink>
        <NavLink to = '/user'>
          我的
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;