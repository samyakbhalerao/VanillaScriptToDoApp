console.log("todo app");
let app;
		 

(function(){
	"use strict"
	//class for todo

	class todo{
		constructor(id,title,description,date,status){
			this.id=id;
			this.title=title;
			this.description=description;
			this.date=date;
			this.status=status;
		}
		save(title,description){
			this.id=this.gethashCode(title);
			this.title=title;
			this.description=description;
			
			return this;
		}
		gethashCode(str){
			return str.split('').reduce((prevHash, currVal) =>((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
		}
		delete(){
			console.log("delete function");
		}

	}
	//class for todo html template
	class todotemplate{
		constructor(id,className,cssProperyObject){
			this.id=id;
			this.className=className;
			this.cssProperyObject=cssProperyObject;
		}
		refreshTodoList(myTodoList){
			let listContainer=document.getElementById('todoList');
			
			let len=document.getElementsByClassName("todoItem");
			
			if(listContainer.firstChild){
			//	listContainer.removeChild(document.getElementsById("todoItem"));
				while (listContainer.firstChild) {
				    listContainer.removeChild(listContainer.firstChild);
				}
			}
			//listContainer.removeChild();
			for (let key of myTodoList.values()){
				
				var itemDiv=document.createElement("Div");
				itemDiv.className="todoItem";
				itemDiv.id="todoItem";
				var titleDiv=document.createElement("Div");
				titleDiv.innerHTML=key.title;
				titleDiv.className ="todoItemHeader"
				var content=document.createElement("Div");
				content.className="todoItemContent";
				
				content.innerHTML=key.description;
				var delBtn=document.createElement("Button");
				delBtn.className="todoItemDelBtn";
				delBtn.innerHTML="Delete";
				itemDiv.appendChild(titleDiv);
				itemDiv.appendChild(content);
				itemDiv.appendChild(delBtn);
				listContainer.appendChild(itemDiv);
			}
			console.log(listContainer);
   				 


		}
		
	}
	//
	let myTodoList=new Set();
	let myTodoListTemplate=new todotemplate();
	
	window.addEventListener('load', function(){
	let myTodo1=new todo().save("test1","test data");
	myTodoList.add(myTodo1);
	myTodoListTemplate.refreshTodoList(myTodoList);	
	document.getElementById("addTodoBtn").addEventListener("click",function(){
		let title=document.getElementById("todoTitle").value;
		let description=document.getElementById("todoDesc").value;
		let myTodo=new todo().save(title,description);
		myTodoList.add(myTodo);
		myTodoListTemplate.refreshTodoList(myTodoList);
		
	});
	}, false );
	
})()