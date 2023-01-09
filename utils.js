// Normal export
 let pi_data = 3.14

 function add(a,b){
      console.log(a+b)
}

// Export together

//export {pi,add}


// Export with alias

export { pi_data as pi, add }


//export with default

export  function minus(a,b){
      console.log(a-b)
}