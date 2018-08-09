module.exports = (app) => {
    app.get('/posts', (req, res) => {
        res.send(
                [{
                    title: "Hello World!",
                    description: "Hi there! How are you ?"
                }]
                )
    })
    app.listen(process.env.PORT || 8081)
}
