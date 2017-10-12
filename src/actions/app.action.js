
export default class AdviserActions {
  // 用户点击按钮时，将触发此方法
  static onTestAdd(num) {
    return { // 这个return,实际上是触发了action,redux会自动去触发reducer中对应的方法
      type: 'TEST::add', // 与reducer中的type对应
      payload: num + 1,
    };
  }
}


//异步action会被redux-thunk中间件拦截，传入dispatch，getState等参数后执行
// export const initNotes = () => (dispatch, getState) => {
// 	console.log('int')
	// $.ajax({
	// 		url : "/init",
	// 		type : "get",
	// 		dataType : "json",
	// 		cache : false,
	// 		success : function(notes){
	// 			/*notes是从数据库读取到的笔记数组*/
	// 			notes=notesSort(notes);
	// 			dispatch({ type : INIT_NOTES, notes : notes });
	// 		}.bind(this),
	// 		error : function(){
	// 			console.log("notes获取失败~");
	// 		}.bind(this)
	// 	})
// }
