/*
Event Bubbling-Event Capturing/Trickling : Suppose there are a nested div's. When we clicked the inner most div, if the event executes from inner to outer layer its called Event Bubbling and if the event executes from outer to inner layer it is called Event Capturing/Trickling.In the below example, if we put the third argument as "false" it will work as Event Bubbling.and if we pass "true" Event Capturing/Trickling will work. According to W3C First the  Capturing happened then the Bubbling happen. 
All the Events are not Bubbled Up. Events like focus, blur etc..
*/

document.querySelector('#grandparent').addEventListener('click',() => {
	console.log("grandparent clicked");
},false)

document.querySelector('#parent').addEventListener('click',() => {
	console.log("parent clicked");
},false)

document.querySelector('#child').addEventListener('click',() => {
	console.log("child clicked");
},false)


/* 
Stop Propagation : The Event Bubbling-Event Capturing are quite expensive. To handel this we use Stop Propagation. So if we want to stop the whole Bubbling/Capturing cycle to stop at a point we can use the Stop Propagation by below process
*/

document.querySelector('#child').addEventListener('click',(e) => {
	console.log("child clicked");
	e.stopPropagation();
},false)