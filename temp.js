const fn1 = () => {

  return 5
}

console.log(fn1())

const fn2 = () => 5

console.log(fn2())

const add = (a, b) => a + b

console.log(add(4, 3))

const fn3 = (a, b) => {

  return {'a': a, b, 'add': a + b, 'diff': a - b}
}

console.log(fn3(4, 3))

const fn4 = (a, b) => ({'a': a, b, 'add': a + b, 'diff': a - b})

console.log(fn4(4, 3))

const bb = {x: 1, y: 2}

const tt = bb
tt.x = 7

console.log(bb) // bb = { x: 7, y: 2 }

const cc = {x: 1, y: 2}

const kk = {...cc}
kk.x = 7

console.log(cc) // cc = { x: 1, y: 2 }