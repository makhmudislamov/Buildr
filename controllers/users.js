const express = require('express')

module.exports = (app) => {

    app.get('/user/:id', async (req, res) => {
        user = await User.findById(req.params.id)

        res.render('user-show', {
            user,
        })
    })
}
