module.exports = function (app) {
    app.assets.add("/home/assets", __dirname + "/.tmp")
    app.addTranslations('home', 'sv_SE', {

    })

    app.get("/?*", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html")
    })
    if (app.isDev()) {
        app.devWatch(__dirname + "/app", "**/*")
        app.devWatch(__dirname + "/templates/index.html")
    }
}
