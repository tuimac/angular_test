#!/usr/bin/env node

var os = require('os')

const nic = os.networkInterfaces()

console.log(nic)
