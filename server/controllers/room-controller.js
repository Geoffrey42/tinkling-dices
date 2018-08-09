module.exports = {
    getRooms(req, res) {
        res.send({rooms: 'des rooms'});
    },
    getRoom(req, res) {
        res.send({room: 'une room avec id ' + req.params.id});
    }
}
