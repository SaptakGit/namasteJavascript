/*
Event Delegation :It is a technique of handling events in our webpage in a better way. It is based upon event Bubbling.If a webpage have lots of events to fire, so instead of writing lots of events we can write a single event attached to the parent. The parent will keep track which child is triggered and process the event accordingly. This can be achieved by the Event Bubbling Process.
*/

document.querySelector("#category").addEventListener("click",(e) => {
    console.log(e.target.id);
    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id;
    }

})

document.querySelector("#form").addEventListener("keyup",(e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})