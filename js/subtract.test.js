const { TestScheduler } = require('jest')
const subtract = require('./subtract')
const sum = require('./subtract')

test('properly subtracts two numbers' , () => {
    expect(subtract(1, 2)
    ).toBe(-1)
})