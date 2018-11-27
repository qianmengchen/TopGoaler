const express = require('express')
const pool = require('../data/config');
const util = require('util')
const doQuery =  util.promisify(pool.query).bind(pool)

exports.doQuery = doQuery

exports.routeFactory = (...args) => (req, res) => {
    doQuery(...args).then(result => res.send(result))
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