
const { connect } = require("@sap/cds");
const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
    this.on('recommendnextsong', function(req) {
    try {
        const song = req.data.ID;
        let dbQuery = ' Call "RECOMMENDNEXTSONG"(ID =>' +`'`+song+`'`+', LT_SONGS => ?)'
        let result = cds.run(dbQuery, { })
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
        return "Error"
    }
    })
})