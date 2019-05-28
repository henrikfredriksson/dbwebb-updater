#!/usr/bin/env node

/**
 * A small CLI app to update dbwebb-course repos
 * Requires dbwebb-cli
 *
 * @author Henrik Fredriksson
 * @version 1.0.0
 */


const { AutoComplete } = require('enquirer')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const dbwebbDirectory = '~/dbwebb-kurser/'

const courses = [
    'databas',
    'design',
    'htmlphp',
    'javascript1',
    'oophp',
    'oopython',
    'python',
    'webapp',
    'all'
]


let options = []

courses.forEach((course, index) => {
    options.push(`${index}: ${course}`)
})

const prompt = new AutoComplete({
    name: 'course',
    message: 'Choose course-repo to update',
    choices: options
})

console.log('\033c')
prompt.run()
    .then(answer => {
        const course = answer.substring(3)

        if (course === 'all') {
            courses.slice(0, -1).forEach(async course =>  {

                await exec(`cd ${dbwebbDirectory}/${course} && dbwebb update`, (error, stdOut, stdErr) => {
                    console.log(`Updating course-repo \x1b[42m\x1b[30m${course}\x1b[0m`);
                    console.error(stdOut)
                })
            })
            return
        }

        console.log(`Updating course-repo \x1b[42m\x1b[30m${course}\x1b[0m`);
        exec(`cd ${dbwebbDirectory}/${course} && dbwebb update`, (error, stdOut, stdErr) => {
                console.error(stdOut)
            })
        })
    .catch(console.error)

