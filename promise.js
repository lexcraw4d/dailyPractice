let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

// let is_shop_open = false;
// let order = ( time, work ) => {
//     return new Promise( ( resolve, reject )=>{
  
//       if( is_shop_open ){
//         setTimeout(() =>{
//         resolve( work() 
//         )}, time)
//       }
//       else{
//         reject( console.log("Our shop is closed"))
//       }
  
//     })
//   }
//   // step 1
// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// // step 2
// .then(()=>{
//   return order(0000,()=>console.log('production has started'))
// })

// // step 3
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 4
// .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// // step 5
// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })

// // step 6
// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// // step 7
// .then(()=>{
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// // Step 8
// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })
// .catch(()=>{
//     console.log("Customer left")
//   })


let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}
async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
 // Trigger
 kitchen();