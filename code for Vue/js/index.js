//1.hello world!
//{{message}}
//
// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message:"hello world!"
// 	}	
// });
// app.message = "I have changed the vue word!";


//2.conditionals
//<span v-if="seen">Now you've seen me!</sapn >
//
// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		seen:true
// 	}	
// });
// app.seen = false;


//3.loops
//<ol><li v-for="todo in todos">{{todo.text}}</li></ol>
// var app = new Vue({
// 	el: "#app",
// 	data: {
// 		todos: [
// 		{text:'change the tips'},
// 		{text:'learn English'},
// 		{text:'go to the junggle'}
// 		]
// 	}
// });
// app.todos.push({text:'new item'});
// app.todos.pop({text:'change the tip'});//只会去掉3
// app.todos.pop();/只会去掉3


//4.user input
//<p>{{message}}</p>
////<button v-on:click ="rM" >reverse message</button>
// var app = new Vue({
// 	el: "#app",
// 	data: {
// 		message:"hello world!"
// 	},
// 	methods:{
// 		rM: function() {
// 			this.message = this.message.split('').reverse().join('')
// 		}
// 	}
// });


//5.v-model
//<p>{{message}}</p>
//<input v-model="message">
// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message:"hello world!"
// 	}	
// });
//通过v-model 把msg数据绑定到了input文本框,
//修改文本框的值,发现msg数据改变了


//6.component(组件)
//<ol><todo-item></todo-item><todo-item></todo-item></ol>
// Vue.component('todo-item',{
// 	template:'<li>this is a todo</li>'
// });
// var app = new Vue({
// 	el: "#app"
// });


//7.component with prop
//🌟创建了一个名为‘todo-item’的新实例
// <ol>//为每一个todo-item添加一个todo对象，且绑定，且当中的内容是动态的
// <todo-item 
// v-for = "item in groceryList"
// v-bind:todo = "item"
// v-bind:key = "item.id"></todo-item>
// </ol>
// 
// Vue.component('todo-item', {
//   template: '<li>这是个待办项</li>'//🚩（对应项--可以没有本三行）
// })
// Vue.component('todo-item',{//🌟创建了一个名为‘todo-item’的组件
// 	props:['todo'],//🌟本组件接受了一个名为‘todo’的自定义属性
// 	template:'<li>{{todo.text}}</li>'//🚩（对应项）
// })
// var app = new Vue({
// 	el: "#app",
// 	data:{
// 	  groceryList:[
// 		{ id: 0, text: 'Vegetables' },
//         { id: 1, text: 'Cheese' },
//         { id: 3, text: 'Whatever else humans are supposed to eat' }
// 		]
// 	}
// })

//8.创建vue实例
// var obj = {
//   foo: 'bar'
// }
// Object.freeze(obj) 绑定住当前属性
// new Vue({
//   el: '#app',
//   data: obj
// })
 

//创建vue实例
//创建一个数据对象
//  var data = {a:1} 

// //创建一个vue对象
//  var vm = new Vue({
//  	data: data
//  })
// vm.a = data.a


new Vue({
	data:{
		a:1
	
},
created: function() {
	//this 指向vue实例
	console.log('a is'+this.a)
}
})































