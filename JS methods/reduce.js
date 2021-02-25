const reduce2 = (list, fn, init) => {
  let [first, ...rest] = list
  let acc = init ? fn(init, first) : first;

  for(let i =0; i < rest.length; i++) {
    acc = fn(acc, rest[i])
  }

  return acc
}

// console.log(reduce2([1,2,3], (acc, n) => acc + n))

const reduce2D = (list, fn) => {
  // [0][0] -> [1][0]-> [2][0]
  // [0][1] -> [1][1]-> [2][1]
  let res = []
  // two times => children len
  for(var i = 0; i < list[0].length; i++) {
    let acc = 0
    // tree times => parent len
    for(var j = 0; j < list.length; j++) {
      acc = fn(acc, list[j][i])
      console.log(i,j)
    }
    res.push(acc)
    acc = 0
  }

  return res
}

const result = reduce2D([[1,2],[1,2],[1,2]], (acc, n) => acc + n)
// expect [3,6]
result