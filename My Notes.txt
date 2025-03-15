Namaste Javascript
# CHAPTOR - 4:
    "Execution Context"
        a) Memory Component(variable Environment) => all the variable and functions are stored as key:value pair
        
        b) Code Component(Thred of Execution) => here all the code executed one line at a time
        
    "JavaScript is a synchronous single-threaded language"

    phase 1:
    memory creation phase:
        js allocates memory to variable and functions
        variable = as Undefined
        functions = the whole function code 
            
    phase 2:
    code execution phase:
        variable = set the given value of variable in code
        in case of function call it creates another execution context with only the indise part of the function. and repezt the process of phase 1 and phase 2.
        
        
    all the execution cantext are kept in a call stack.
    the main (global) is at bottom. onec the execution is done it removes from the stack.

    JavaScript Hoist

# CHAPTOR - 5:

    if a JS file is empty(sortest JS function) it still js creates a window(in case of browser).
    window = it a global object along with a global execution context. here we have all the functions that are provided by JS Engine to us for use	

    here the "this" is point to this window
    this === window = True

    JS is a loosly(weekly) type language:
    it does not attach its variable to any particular data type. we can store any type of data in it

# CHAPTOR - 7:

    Scope in JS is directely directly related with Lexical Environment

    Lexical = in heirarchy
    Lexical Environment is the local memory along with the 
    Lexical Environment of its parent

    Scope Chain is the process where we look for a varable or function in its Lexical Environment and Lexical Environment 
    of its parent if it is not found n the local Execution Context menory

# CHAPTOR - 8:

    let and const are hoisted but they are in the Temporal Dead Zone for the Time being

    let and const are also hoisted(allocated memory) but in separate memory space. It can not be accress untill we put some value in it.it will give referance error.

    temporala dead zone: the time between when the let/const variable is hoisted  to the time it is initialised with some value.

    redeclaration/ duplication of let is not possible. it will give a syntax error.

    const can not initialised later.It will give us a syntax error.it has to be initialised at time of declaration.

    re-initialisation of const gives a type error

    Type error
    Syntax error
    Referance Error

# CHAPTOR - 9:

    block:{} is called a block. it is also called Compound Statement. The {} used to group multiple java script statement.

    the block is used where java script expects a single statement.
    
    block scoped: what are all the variable and function we can access inside this block.

    let and const are hoisted inside the block scope if they are defind inside {}. where as var is hoisted in global scope.

    once the work of {} (block) is done the block scope is deleted.so let and const can not be access from outside {}. but var can be access since it is in global scope.

    shadowing
    illigal shadowing

    block scope also follow lexical scope

# CHAPTOR - 10:

    Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its 
    vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it 
    returns but the entire closure and that's where it becomes interesting

# CHAPTOR - 10:

    setTimeout Problem with colsure:
    print 1 to 5 each after 1 sec delay =>

    function y(){
        for(var i=1;i<=5;i++){
            setTimeout(function(){ 
                console.log(i);
            },i*1000);
        }
        console.log("Namaster JS");
    }
    y();
    Res : 6 6 6 6 6 

    Sol 1:
    function y(){
        for(let i=1;i<=5;i++){
            setTimeout(function(){ 
                console.log(i);
            },i*1000);
        }
        console.log("Namaster JS");
    }
    y();
    Sol 2:
    function y(){
        for(let i=1;i<=5;i++){
            function close(j){
                setTimeout(function(){ 
                    console.log(j);
                },j*1000);
            }
            return close(i)
        }
        console.log("Namaster JS");
    }
    y();
    Res: 1 2 3 4 5

# CHAPTOR - 13:

    Function Statement:
        function a(){
            console.log("a called")
        }
        this way of creating a function is called function statement

    Function Expression:
        var b = function(){
            console.log("b called")
        }
    this way of creating a function is called function Expression

    Diff Statement and Expression:
        The main differance is Hoisting
        if a() and b() are called before declaration. a() will run as it is treated as a function at time of memory creation but b is 
        breated as a variable and assinged as undefined and thus will throws a type error.

    Function Declaration:
        Function Statement are also known as Function Declaration.
        
    Anonymous Function:
        A function without a name is an Anonymous Function.
        function(){
            
        }
        It is used when they are used as values. Like Function Expression. It can not be used as Function Statement. It will throw syntax error.
        
    Named Function Expression:
        IT is same as Function Expression but with a Named Function not an Anonymous Function.
        var b = function xyz(){
            console.log("b called")
        }
        
        Corner Case:
            calling xyz() -> referance error
            it is not a function in the outer scope. but it is created as a local variable. so it can not be access from outside.
            
    Difference between Parameters and Arguments:
        function abc(param1, param2){
        
        }
        param1, param2 ->local variable	
        
        abc(arg1, arg2) -> arguments
        
    First Class Function:
        The ability to use functions as values is named as First Class Function.We can pass Named/Anonymous Function as 
        Arguments into a Function and also return Named/Anonymous functions from a Function.This is called as First Class Function.
        It is also called First Class Citizens.


# CHAPTOR - 14:
	
    What is Callback Function in JavaScript?
        The function which is passed as an argument in a Function and called later is known as Callback Function.It gives us access to Asynchronus Operation.
        
    Blocking the main thread:
        If a piece of code thake too much time to execute, it create a blockage to the main thread/main call stack, 
        sice javascript in a single threaded language. This can be reduce by doing long execution with Asynchronus Operation.
        
    Event Listener:
        Event Listener are Callback Functions that are invoke by an Event.
        
    Garbage Collection & removeEventListeners:
        eventListeners are heavy, it takes memory. They form a closure. So the call stack may be empty but they hold onto their Lexical values.
        
    Web APIs:
        SetTimeout()
        DOM APIs(document.things...)
        fetch()
        local Storage
        console
        location
        
        These are not part of javascript. Browser provide us these to access inside js engine/call stack with the help of the 
        global object 'window'.It raps up all the web api into the global object 'window'.
        
    When a callback function is happen it does not directly to the call stack. It first put into a callback queue. then the Event Loop 
    puts the callback function from Callback Queue to Call Stack.

    Event Loop:
        Its only job is to continuously monitor the Callback Queue and the Call Stack.When ever it see the call stack is empty and a 
        callback function in callback queue it puts the callback function into the call stack.

    Micro task queue:
        It is same as callback queue but with higher priority.
        
    All the callback function which comes through promises will go inside the microtask queue.

    mutation observer 

    Starvation of Callback Queue

# CHAPTOR - 16:

    Javascript Runtime Environment:
        It has Js Engine, Web APIs, Callback Queue, Microtast Queue, Event Loop.
        Js Engine is the heart of Javascript Runtime Environment
        
    a JS Engine shloud follw ECMAScript language standard.

    Brandan Eick created Javascript and also the first js engine known as spider monkey(now use as js engine in mozila)

    Javascript Engine Architechture:
        Parsing:
            first it break down the js code into tokens
            then the 'Syntax Parser' parse the whole code and converts it into AST (Advanced Syntax Tree).(https://astexplorer.net/)
            
        Compilation:
            Interpretter ->Fast
            Compiler -> Efficient
            JS is besically an Interpretter. But most of the mordern Browser use JIT Compiler
            JIT(Just In Time) Compilation:
                It is Interpretter along with a compiler.
                
                optimizing process:
                    inlining
                    copy eligian
                    inline caching
                
            The Interpretter starts to interpret the AST and convert it into machine level language at the same time the compiler 
            tries to optimize the AST in run time convert it into machine level language which later executed.
                
        Execution:
            Memory Heap:
                IT is the space where all the variable and functions assigned memory.
                
                garbadge Collector: it tries to free up memory space whenever possible. It uses an algorithm call 'Mark & Sweep'
            Call Stack
            
    Fastest Engine V8
        Iterpertter name is 'Ignition'
        Optimizing Compiler is 'Turbo Fan'
        Gabadge Collector is 'Orinoco','Oilpalm'
        
    setTimeout does not always execute after the given time.If the call stack is full and a global execution context is running 
    in the call stack the setTimeout callback will wait in callback queue and wait untill tue call is empty.This is known as 'Concurrency Model' in javascript.

    Functional Programming is not posible with out Higher order Function.
    Higher order Function:
        A function which takes another function as an argument or returns a function from it is known as higher order function.
        
        
    map, filter & reduce are higher order function in javascript.

    Map():It is used to transform an array
        eg:
        const arr = [5,1,3,2,6]
        Double - [10,2,6,4,12]
        Triple - [15,3,9,6,18]
        Binary - ['101','1','11','10','110']
        
        1) function double(x){
            return x * 2
        }
        
            const output = arr.map(double)
            console.log(output)
        
        2) const output = arr.map(function double(x){ return x * 2 })
        console.log(output)
        
        3) const output = arr.map((x) => x * 2)
        console.log(output)

    Filter():It is used to filter the values inside an array
        const arr = [5,1,3,2,6]

        filte odd values
        
        function isOdd(){
            return x % 2
        }
        
        const output = arr.filter(isOdd)
        console.log(output)
        
        // [5,1,3]

    Reduce():It is used in an situation where we have to take all the element of an array and come up with a single value out of them. 
    eg: like to find sum of an array or find the largest value in an array etc.

    Simple Method:
    function findSum(arr){
        let sum = 0
        for(let i = 0;i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;
    }

    console.log(findSum(arr));

    Reduce Method:
    const output = arr.reduce(function(acc, curr){
        acc = acc + curr
        return acc
    },0);

    console.log(output);

    get max value->
    const output = arr.reduce(function(acc, curr){
        if(curr > acc){
            acc = curr;
        }
        return acc;
    },0);
    console.log(output);

    The reduce() function in JavaScript accepts two parameters: a callback function and an optional initial value. 
    The callback function itself can take up to four parameters.

    acc = accumulator:It is used to accumulate the values or accumulate the result which we will get from those values. hare it is sum
    curr = current: it represents the value of the array.here ir is arr[i].
    Current Index: (optional):  This is the index of the current element being processed. 
    Array: (optional): This is the original array that reduce() was called on.

    The second argument of reduce function is 0, it is the initialization of the accumulator like sum = 0.

    map, fileter reduce can be done one after another. this is called Chaining

    Callback Hell:
    When a callback is inside another callback , and it is another callback like a nested callbacks, it is called Callback Hell, it is also called 'Pyramid of Doom'

    Inversion of Control:
    Kalye Jemson=> when we lost control over our codes while we use call backs.Because we pass the function to other function 
    and we have no control over te passed function while it is inside other function.

    Promises: Promises are use to handle Ashync operation in javascript.
    It is like an empty object with some data value. At first it gives us an empty objet and after some time, whatever time it 
    takes to complete it will autometically filled with the data value.
    After that it will attach a callback function to the Promise object with the '.then'.
    Whenever the data is filled in the promise object the .then will autometically call the callback function.
    promiseState: 'Pending' -> 'fullfilled' ; (Rejected) 
    promiseResult: 'Undefined' -> Response

    promise object is immmutable

    What is Promise ?
    A promise is an object representation the eventual completion or failure of an asynchronous operation.

    Promise Chaning:
    It is the solution of callback hell using promise.

# S02 EP 03:
    Creating a Promise, Chaining & Error Handling:

    Creating a promise:
        Const cart = ["Shoes","pants","kurta"]
        
        
        //consumer part
        createOrder(cart)
        .then(function(orderId){
            console.log(orderId);
            return orderId;
        })
        .then(function(orderId){
            return proceedToPayment(orderId);
        })
        .then(function(paymentInfo){
            console.log(paymentInfo);
        })
        .catch(function(err){
            console.log(err.message)
        })
        .then(function(paymentInfo){
            console.log("It will be not handled");
        })
        
        catch will handle all the error above it , it will not handle the error it he .then is below it 

        //producer part
        
        function createOrder(cart){
            const pr = new Promise(function(resolve, reject){
                //validate cart
                //API call to create order
                //orderId
                
                if(!validateCart(cart)){
                    const err = new Error("Cart is not valid");
                    
                    reject(err);
                }
                //logic for createOrder
                const orderId = "12345"
                if(orderId){
                    resolve(orderId);
                    // It can be called only once
                }
            })
            
            return pr
        }
        
        validateCart(cart){
            return True
            //return False
        }
        
        proceedToPayment(orderId){
            return new Promise(function(resolve, reject){
                resolve("Payment Successfull")
            })
        }
	

# Season 02 - Ep 04:
    async await:

    What is async?
        async is a key word to create a async function
        1)this async function always return a promise.
        2) if any value is returned in place of promise it will wrape it in a promise and return it
        
        
    async/await use to handle promises
        
        
    what is await ?
        await is a key word that can only be used inside of a async function.
        
        
        
    Now async works behind the scence ?
        when an async function gets an await promise, it suspend the function execution and move the function out of the call stack. 
        When the promise is resolved it will again appear in the call stack and start execution from where it left.
        In the mean time if multiple promises are resolved it will execute all of them synchronously.
        and if it found another promise which is still not resolved it will suspend the execution again.
        
        
    Examples of using async/await:

        Demo Api = https://api.github.com/
        
        const API_URL = "https://api.github.com/users/SaptakGit"
        async function haldlePromise(){
            const data = await fetch(API_URL);
            
            //fetch() => response.json() => jsonValue
            
            const jsonValue = await data.json();
            
            console.log(jsonValue);
        }
        haldlePromise();
        
        
    Error Handling:

        we will use try/catch to handle error here.
        
        const API_URL = "https://api.github.com/users/SaptakGit"
        async function haldlePromise(){
            try{
                const data = await fetch(API_URL);
            
                //fetch() => response.json() => jsonValue
                
                const jsonValue = await data.json();
                
                console.log(jsonValue);
            }
            catch(err){
                console.log(err);
            }
            
        }
        haldlePromise();


    Interviews:

        recap of this chaptor


    Async await vs Promise/.then/.catch:
        
        Async/Await is syntactical sugar ovar promise/.then/.catch
	
	
# S.02 Ep.05
    Promise APIs + Interview Questions

    Promise API:
        Promise.all() : 
            parallal API calls.
            it takes an iterable(array) promises as input.
            it return an array of objects with all the results.It will wait for all of them to finish and return together as an array.
            if any of the promises get rejected promise.all() will throw an error.it will not wait for other promises to settele.
            
        promise.allSetteled(): 
            If any of the promises is gets rejected it will wait for all promises to get setteled.After that it will retun as an array 
            of objects along with the error.

        promise.race():
            it takes iterable(array) of promises.
            Whatever promise is settled first it will return that result only.If the first settled promise is rejected it will throw an error.
            It will not wait for other promises to settle.
            
        promise.any():
            it takes iterable(array) of promises. 
            It will wait for first promise to get success/resolved/fullfilled and return the successful result only.
            If all the promise gets failed it will return an Aggregated Error.It will be an array of all errors.


# S.02 Ep.06
    this keyword in JavaScript:
        
        //this in global space
            this keyword in global space will always have the global object.
            global object can be different, depends upon where th javascript is running. in Browser it is window. in Node js it is Global.
            
            
        //this inside a function
            the value of this depends on strict/non-strict mode.
            if it is non-strict mode then value is window object.
            if it is strict mode it is undefined.
            
            
        //this in non-strict mode - (this substitution)
            this key word works differently in strict mode and non-strict mode.
            'this substitution' happens in non-strict mode.
            according to the 'this substitution' if the value of this keyword is 'undefined' or 'null' this keyword will value be 
            replaced with global object if it is used in non-strict mode. 
        
        // this keyword value depends on how the function is called (window)
            in strict mode
            x() => undefined
            window.x() => window object
            
            when it is call without any referance of an object then it will return undefined.
            when it is called with any referance of an object it will return that calling object
                
            
        
        // this inside an object's method
            if a function is part of an object then it is known as a method.
            const obj = {
                a:10
                x:function(){
                    console.log(this); // (1)
                    console.log(this.a); // (2)
                }
            }
            obj.x();
            
            (1) the value of this keyword will be the object itself
            (2) the value of this keyword will be the property a, hence 10
            
            
        // call apply bind methods (sharing methods)
            call():
            it is used when we have to share methods. it can overwrite the value of 'this' of an object when it is called from another object. 

            example-1:
                const student = {
                    name:"abc"
                    printName:function(){
                        console.log(this.name); 
                    }
                }
                student.printName();
                
                const student2 = {
                    name:"xyz"
                }
                
                student.printName.call(student2); // the value of 'this' will become 'xyz'

            example-2:
                let name = {
                    firstname = "Akshay",
                    lastname = "Saini",
                }

                let printFullName = function(hometown, state){ // we can also pass additional arguments to the function also
                    console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state)
                }

                let name2 = {
                    firstname = "Sachin"
                    lastname = "Tendulkar"
                }

                printFullName.call(name,"Dehradun","Uttrakhand")
                printFullName.call(name2,"Mumbai","Maharastra")
            

            apply() : The only differance between call and apply method is the way we pass arguments. In apply we pass the all the extra arguments 
            as a single 2nd argument in array list.

            example-1:
                let name = {
                    firstname = "Akshay",
                    lastname = "Saini",
                }

                let printFullName = function(hometown, state){
                    console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state)
                }

                let name2 = {
                    firstname = "Sachin"
                    lastname = "Tendulkar"
                }

                printFullName.call(name,"Dehradun","Uttrakhand")
                printFullName.apply(name2,["Mumbai","Maharastra"])

            bind():It looks exactly the same as call() method. But the only differance is instead of directly calling this method over here 
            the bind method binds this method printFullName with an object and retunrs us the copy of that method. It will create a copy of 
            printFullName and it will bind tha to name2 object and will return a function. The catch over here is that it dosen't call the method 
            directly like call method rather than it will return us a method which can be call later.So this used to just bind and keep a copy of 
            that method to use it later. The only difference between call() and bind() it that it gives us the copy to use it later rather than directly invoking it.

            example-1:
                let name = {
                    firstname = "Akshay",
                    lastname = "Saini",
                }

                let printFullName = function(hometown, state){
                    console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state)
                }

                let name2 = {
                    firstname = "Sachin"
                    lastname = "Tendulkar"
                }

                let printMyName = printFullName.bind(name2,"Mumbai","Maharastra")
                console.log(printMyName)
                printMyName()


                        // All Example
                let name = {
                    firstname : "Saptak",
                    lastname : "das",
                };
                
                let printFullName = function(hometown,state,calltype){
                    firstname = 'Amit';
                    lastname = 'Biswas'
                    console.log(calltype+': '+this.firstname+' '+this.lastname+' from '+hometown+', '+state);
                };
                
                printFullName('Kolkata','Kolkata','normal');
                printFullName.call(name,'Bolpur','West Bengal','call');
                printFullName.apply(name,['Bolpur','West Bengal','apply']);
                let printName = printFullName.bind(name,'Bolpur','West Bengal','bind');
                printName();
            
            
        // this inside arrow function
            arrow function do not have their own 'this'.
            they take the value of their enclosing lexical environment.
            const obj = {
                a:10
                x:() => {
                    console.log(this); 
                }
            }
            obj.x();
            => window object, since the obj is declared in global space.
            
            
        // this inside nested arrow function
            const obj2 = {
                a:10
                x:function(){
                    const y = () =>{
                        console.log(this); 
                    };
                    y();
                }
            }
            obj2.x();
            => the object obj2,since the arrow function is enclosed in obj2.
            
            
        // this insode DOM
            the value of 'this' is referance to HTML element.
		
