#!/usr/bin/env node
const program = require('commander')
const ui = require("./command/ui")
program
    .command('ui')
    .description('start and open the vue-cli ui')
    .option('-p, --port <port>', 'Port used for the UI server (by default search for available port)')
    .action((options) => {
        ui(options)
    })
program.parse(process.argv)