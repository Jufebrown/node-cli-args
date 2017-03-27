#!/usr/bin/env node

let [,, ...args] = process.argv

let sum = args.reduce((a, b) => Number(a) + Number(b), 0);
process.stdout.write(`${sum}\n`)
