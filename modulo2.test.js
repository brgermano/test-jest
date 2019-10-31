const modulo2 = require('./modulo2')

describe('return the first value of an array', () => {
  it('should return the first value', () => {
    expect(modulo2([200, 300, 500])).toBe(200)
  })
})
