module.exports = {
    readAll(req, res) {
        res.send({rooms: 'des rooms'});
    },
    read(req, res) {
        res.send({room: 'une room avec id ' + req.params.id});
    },
    create(req, res) {
        const body = req.body;
        console.log(req);
        console.log(JSON.stringify(body));
        console.log(body);
    }
}
