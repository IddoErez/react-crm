const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/clientsdata')

router.get('/clients', async (req, res) => {
    let query = `SELECT * FROM client, country, owner, email_type
    WHERE client.country_id = country.id AND client.email_type_id = email_type.id
    AND client.owner_id = owner.id ORDER BY last`;
    let results = await sequelize.query(query)
    console.log(results)
    res.send(results)
})

module.exports=router
