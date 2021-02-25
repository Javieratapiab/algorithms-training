// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Note:

// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6


const evalRPN = tokens => {
  const op = {
    '*' : (a, b) => a * b,
    '+' : (a, b) => a + b,
    // invert order of operations
    '/' : (a, b) => Math.trunc(b / a),
    '-' : (a, b) => b - a,
  }

  let stack = [];
  // push 2
  // push 1
  // * in op => true
  // a,b = pop()
  // result = op of a,b
  // push result
  tokens.forEach(n => {
    // console.log(stack)
    if(n in op) {
      let a = stack.pop()
      let b = stack.pop()
      // console.log({a,b, n})
      let result = op[n](a, b)
      stack.push(result)
    } else {
      stack.push(parseInt(n))
    }
  })

  return stack[0]
}

//
const tokens = ["10","6","9","3","+","-11","*","/","*", "17","+","5","+"]
const result = evalRPN(tokens)
result