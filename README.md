# tinkling-dices
a little rooms booking platform for STATION F

This project is originally a hiring technical test for STATION F.

This Vue.js/Node.js app allows you to book a room at a specific date and hour. Also
you can filter available rooms by capacity or furnitures.

Bookings and rooms are stored in a mongoDB using Mongoose.

## Installation

### Requirements
* Docker
* Docker-compose

```shell
$ git clone https://github.com/Geoffrey42/tinkling-dices.git
$ cd tinkling-dices/
```

## Usage

```shell
$ docker-compose up
```

## Road Map

### Mandatory part

- [x] Node.js/Express.js Backend.
- [x] Vue.js Frontend.
- [] Bookings stored (among other way of storage) in a JSON file.
- [x] For a same date/hour, rooms already booked must not be available for new bookings.
- [x] No login/Authorization management, it's supposed to be handled already by an intranet.
- [x] Ease-to-use and security

### Bonus part

- []  App hosted version
- [x]  Bookings stored in a MongoDB
- [x]  Filtering by capacity or furniture features
- [x]  Animations during booking

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
