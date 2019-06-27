const { loadConfig } = require('./dbwebb-updater')


describe('Configuration', () => {
  test('Configuration file shoule have property `path`', () => {
    const config = loadConfig()

    expect(config).toHaveProperty('path')
    expect(config).toHaveProperty('courses')
  })

  test('Configuration file shoule have property `courses`', () => {
    const config = loadConfig()

    expect(config).toHaveProperty('courses')
  })

});


describe('Updating', () => {
  test('should ', () => {
    expect(1).toBe(2-1)
  })


})
