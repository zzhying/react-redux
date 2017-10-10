import React from 'react'; // react核心
import { Route, Redirect, IndexRedirect } from 'react-router'; // 创建route所需

/* 下面是引入一些我们自己定义的container,作为路由的页面 */
// root这个container很重要 我们稍后配置
import RootContainer from '../containers/root';
import TestContainer from '../containers/home'; // 一个主页的container

export default (
  <Route path="/" component={RootContainer}>
    <IndexRedirect to="/home" />
    <Route path="/home" component={TestContainer} />
    <Redirect from='*' to='/'  />
  </Route>
);


// export default (
//   <Route path="/" component={RootContainer}> // 所有的访问，都跳转到rootContainer
//     <IndexRedirect to="/home" /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
//     <Route path="/home" component={TestContainer} /> // 一个路由地址，访问www.test.com/home,就会跳转到此
//     <Redirect from='*' to='/'  /> // 所有的其他未定义的访问路径，都跳转到根路径，比如访问www.test.com/abc, 但是/abc我们没有定义，就会自动跳转到www.test.com, 而www.test.com又会自动跳转到www.test.com/home
//   </Route>
// );
