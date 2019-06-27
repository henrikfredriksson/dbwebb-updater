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

const { loadConfig, updateCourse } = require('./dbwebb-updater.js')

const { path, courses } = loadConfig()

const spinner = ora('Updating repos...')

clear()

spinner.start()

const promises = courses.map(course => {
  updateCourse(path, course, spinner)
})

Promise.all(promises).then(e => {
  spinner.succeed('Courses succesfully updated')
  spinner.stop(e)
}).catch((error) => {
  spinner.fail(`${chalk.bgRed.black('Error')}: Could not update course : ${chalk.red(error)}`)
})
