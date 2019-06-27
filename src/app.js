#!/usr/bin/env node

/**
 * A small CLI app to update dbwebb-course repos
 * Requires dbwebb-cli
 *
 * @author Henrik Fredriksson
 * @version 1.0.0
 */

'use strict'

const ora = require('ora')
const clear = require('clear')
const chalk = require('chalk')

const os = require('os')
const fs = require('fs')
const util = require('util')
// const exec = util.promisify(require('child_process').exec)
const exec = require('child_process').exec

/**
 * Load configuration file '.dbwebb-update' from home directory
 *
 * @returns {Object}  Configuration data
 * @returns {String} path to dbwebb courses
 * @returns {String[]} courses to be updated
 */
function loadConfig () {
  const file = os.homedir() + '/.dbwebb-update'

  try {
    const config = JSON.parse(fs.readFileSync(file, 'utf8'))

    return {
      path: config.path,
      courses: config.courses
    }
  } catch (error) {
    return {
      path: '',
      courses: ''
    }
  }
}

/**
 * Update a dbwebb course
 *
 * @param {String} path directory to dbwebb courses
 * @param {String} course name of course to be updated
 * @returns {Promise}
 */
function updateCourse (path, course) {
  return new Promise((resolve, reject) => {
    exec(`cd ${path}/${course} && dbwebb update`, (error, stdOut, stdErr) => {
      if (error) {
        reject(course)
      }

      resolve()
    })
  })
}

const { path, courses } = loadConfig()

clear()

const spinner = ora('Updating repos...')

spinner.start()

if (!path) {
  spinner.fail('No valid .dbwebb-update file found')
} else {
  const promises = courses.map(course => updateCourse(path, course))

  Promise.all(promises).then(() => {
    spinner.succeed('Courses succesfully updated')
  }).catch((error) => {
    spinner.fail(`${chalk.bgRed.black('Error')}: Could not update course : ${chalk.red(error)}`)
  })
}

module.exports = {
  loadConfig,
  updateCourse
}
