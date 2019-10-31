const modulo1 = require('./modulo1')

describe('basic feature', () => {
  it('should return the right value', () => {
    expect(modulo1.func1(10)).toBe(11)
  })

  it('func2', () => {
    const cb = jest.fn()
    cb.mockReturnValue(5)
    expect(modulo1.func2(10, cb)).toBe(15)

    expect(cb.mock.calls[0][0]).toBe(10)
    console.log('retorno da função cb', cb.mock.calls)
  })

  it('func3', () => {
    const func = jest.fn()
    func.mockReturnValue(20)
    expect(modulo1.func3(30, func)).toBe(50)
    expect(func.mock.calls[0][0]).toBe(30)

    console.log('retorno da função func', func.mock.calls)
  })
})
