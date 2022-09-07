const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

// ---------------- Cities Testing

/* describe('POST /cities', function () {
    it('Must respond with 201 status code & ID', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "TestCity",
                country: "TestCountry",
                photo: "Testurl",
                population: "1500",
                foundation: "1990-01-01",
                description: "TestDescription",
                xdwa: "TestInvalid"
            })
            .expect(201, done)
            .then(response => {
                assert(response.body)
                console.log(response.body.city)
                done()
            })
    })

    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400, done)
        // .end(function (err, res) {
        //     if (err) return done(err);
        //     return done();
        // })
    })
})

describe('GET /cities', function () {
    it('should get all cities', function (done) {
        request(app)
            .get('/cities/')
            .then(response => {
                assert(response.body)
                console.log(response.body)
                done()
            })
    })
});

describe('DELETE /cities', function () {
    it('Must respond with 200 status code & ID', function (done) {
        request(app)
            .delete('/cities/6317d5bc4296603c32b6b39c')
            .expect(200, done)
            // .then(response => {
            //     assert(response.body.id)
            //     done();
            // })
    })

    it('Must respond with 404 status code', function (done) {
        request(app)
            .delete('/cities/6317d5bc4296603c32b6b39c')
            .expect(404, done)
        // .end(function (err, res) {
        //     if (err) return done(err);
        //     return done();
        // })
    })
}) */

// ---------------- Itinerary Testing

/* describe('POST /itineraries', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "Test",
                user: "Test",
                city: "Test",
                price: "111",
                // likes: "",
                // tags: "",
                duration: "222"
            })
            .expect(201, done)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })

    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})

describe('PATCH /itineraries', function () {
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/itineraries/6317caba9ba720ab75fdaeb9')
            .send({
                name: "Test",
                user: "Test",
                city: "Test",
                price: "999",
                // likes: "",
                // tags: "",
                duration: "999"
            })
            .expect(200, done)
    })
})

describe('DELETE /itineraries', function () {
    it('Must respond with 200 status code & ID', function (done) {
        request(app)
            .delete('/itineraries/6317caba9ba720ab75fdaeb9')
            .expect(200, done)
    })

    it('Must respond with 404 status code', function (done) {
        request(app)
            .delete('/itineraries/6317caba9ba720ab75fdaeb9')
            .expect(404, done)
        // .end(function (err, res) {
        //     if (err) return done(err);
        //     return done();
        // })
    })
}) */