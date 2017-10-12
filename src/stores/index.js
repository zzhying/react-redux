import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';   // 中间件，有了这个就可以支持异步action
import RootReducer from '../reducers'; // 所有的reducer

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它

// 创建store
const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;
