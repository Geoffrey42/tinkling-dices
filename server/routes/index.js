module.exports = (server) => {
    server.get('/rooms', (req, res) => {
        res.send({rooms: 'des rooms'})
    });
    server.get('/rooms/:id', (req, res) => {
        res.send({room: 'une room avec id ' + req.params.id});
    })
}
