const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

// ---------------- Itinerary Testing

/* describe('POST /itineraries', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "Test",
                user: "63196500e35473b77803b41c",
                city: "6317ca2d3794efcc538d8f52",
                price: "115",
                // likes: "",
                // tags: "",
                duration: "5"
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
}) */

/* describe('PATCH /itineraries', function () {
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/itineraries/63198cc4251d5c92b7834b14')
            .send({
                name: "Test",
                user: "63196500e35473b77803b41c",
                city: "6317ca2d3794efcc538d8f52",
                price: "150",
                // likes: "",
                // tags: "",
                duration: "5"
            })
            .expect(200, done)
    })
}) */

/* describe('DELETE /itineraries', function () {
    it('Must respond with 200 status code', function (done) {
        request(app)
            .delete('/itineraries/63198cc4251d5c92b7834b14')
            .expect(200, done)
    })

    it('Must respond with 404 status code', function (done) {
        request(app)
            .delete('/itineraries/63198cc4251d5c92b7834b14')
            .expect(404, done)
        // .end(function (err, res) {
        //     if (err) return done(err);
        //     return done();
        // })
    })
}) */