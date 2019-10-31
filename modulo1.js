const modulo1 = {
  func1: a => a+1,
  func2: (a, cb) => a + cb(a),
  func3: (b, func) => b + func(b)
}

module.exports = modulo1
