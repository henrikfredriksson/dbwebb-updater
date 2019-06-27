const { loadConfig } = require('./app')

describe('Configuration', () => {
  test('Configuration file shoule have property `path`', () => {
    const config = loadConfig()

    expect(config).toHaveProperty('path')
  })

  test('Configuration file shoule have property `courses`', () => {
    const config = loadConfig()

    expect(config).toHaveProperty('courses')
  })
})

describe('Updating', () => {
  test('should ', () => {
    expect(1).toBe(2 - 1)
  })
})
