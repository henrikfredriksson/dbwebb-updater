#!/usr/bin/env node

/**
 * A small CLI app to update dbwebb-course repos
 * Requires dbwebb-cli
 *
 * @author Henrik Fredriksson
 * @version 1.0.0
 */

'use strict';


const util = require('util');
const ora = require('ora');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const clear = require('clear');
const chalk = require('chalk');


const os = require('os');


const file = os.homedir() + '/.dbwebb-update';

var config = JSON.parse(fs.readFileSync(file, 'utf8'));

const dbwebbDirectory = config.path;
const courses = config.courses;


const spinner = ora('Updating repos...');

clear();

spinner.start();


const promises = courses.map(course => {
    return new Promise((resolve, reject) => {
        exec(`cd ${dbwebbDirectory}/${course} && git pull`, (error, stdOut, stdErr) => {
            if (error) { reject(course); }
            spinner.text = course;
            resolve(course);
        });
    });
});


Promise.all(promises).then((e) => {
    spinner.succeed('Courses succesfully updated');
    spinner.stop(e);
}).catch((error) => {
    spinner.fail(`${chalk.bgRed.black('Error')}: Could not update course : ${chalk.green(error)}`);
});


