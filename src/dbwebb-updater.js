
const os = require('os')
const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

/**
 * Load configuration file '.dbwebb-update' from home directory
 *
 * @returns {Object}  Configuration data
 * @returns {String} path to dbwebb courses
 * @returns {String[]} courses to be updated
 */
function loadConfig () {
  const file = os.homedir() + '/.dbwebb-update'

  const config = JSON.parse(fs.readFileSync(file, 'utf8'))

  return {
    path: config.path,
    courses: config.courses
  }
}

/**
 * Update a dbwebb course
 *
 * @param {String} path directory to the course
 * @param {String} course name of course to be updated
 * @param {Ora.spinner} spinner ora spinner
 * @returns {Promise}
 */
function updateCourse (path, course, spinner) {
  return new Promise((resolve, reject) => {
    exec(`cd ${path}/${course} && dbwebb update`, (error, stdOut, stdErr) => {
      if (error) { reject(course) }
      spinner.text = course
      resolve(course)
    })
  })
}

module.exports = {
  loadConfig,
  updateCourse
}
