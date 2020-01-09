#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')
const path =require('path')
const packageJSON = require('./package.json')
console.log(packageJSON)
inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectname',
            message: 'Project Name',
            default: 'project-default'
        },
        {
            type: 'input',
            name: 'versoin',
            message: 'version',
            default: '1.0.0'
        },
        {
            type: 'input',
            name: 'description',
            message: 'description',
            default: 'this is a project'
        },
        {
            type: 'input',
            name: 'author',
            message: 'author',
            default: ''
        },
        {
            type: 'input',
            name: 'license',
            message: 'license',
            default: 'ISC'
        }
    ])
    .then(answers => {
        answers.scripts={
            "test": "echo \"Error: no test specified\" && exit 1"
        }
        fs.writeFile('package.json',JSON.stringify(answers,"","\t"),'utf8', function(err,data){
            if(err) throw err;
            console.log('文件已保存')
        })
    });

    
