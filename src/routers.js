import React from 'react';
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="coupon">
      <IndexRoute component={Coupon}/>
      <Route path=":id" component={CouponDetail}/>
    </Route>
    <Route path="shop">
      <IndexRoute component={Shop}/>
      <Route path=":id" component={ShopDetail}/>
    </Route>
    <Route path="tour" component={Tour}/>
    <Route path="user" component={User}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
