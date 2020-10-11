const npmlog = require("npmlog")

npmlog.heading = "HWE"

npmlog.info("Loading", "[█------------------]")

const fs = require("fs")

npmlog.info("Loading", "[-█----------------]")

const http = require("http")

npmlog.info("Loading", "[--█---------------]")

const httpserver = http.createServer((req, res) => {
    
})

npmlog.info("Loading", "Complete!")

npmlog.info("HWE", "Waiting For Requests...")