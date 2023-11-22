// Javascript Execution Context
// {} -> global ec , this
/**
 * Global Execution Context
 * Function Execution Context
 * Eval Execution Context
 */

//{} -> code of js it runs in two phase 
//1. Memory Creation Phase - memory allocation
//2.Execution Phase 

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/**
 * 1. global execution -> this
 * 2. memory phase -> 
 * val1 -> undefined
 * val2 -> undefined
 * addnum -> definiton
 * result1 -> undefined
 * result2 -> undefined
 * 
 * 3.execution phase
 * val1 -> 10
 * val2 -> 5
 * addnum -> form new box in 
 *           new variable environment + execution thread
 * memoryphase    
 * val1 -> undefined
 * val2 -> undefined   
 * total -> undefined
 * 
 * execution contex
 * num1 -> 10
 * num2 -> 5
 * total -> 15
 * 
 * now it can be delete
 * 
 * result1 = 15            
 * 
 * 
 */

// callstack
//lifo
// last in first out