const express = require('express')
const pool = require('../data/config');
const util = require('util')
const doQuery =  util.promisify(pool.query).bind(pool)

exports.doQuery = (...args) => {
    console.log(`executing query ${args}`)
    return doQuery(...args)
}

exports.routeFactory = (...args) => (req, res, filter) => {
    console.log(`From routeFactory: executing query ${args}`)
    doQuery(...args).then(result =>
        res.status(201).send(filter ? filter(result) : result))
        .catch(err => res.status(401).send(`Error :${err}`))
}

exports.check = (...args) => {
    return new Promise( (resolve, reject) => {
        doQuery(...args).then(result => {
            if (result.length == 0)
                resolve(false);
            else
                resolve(true);
        });
    })
}