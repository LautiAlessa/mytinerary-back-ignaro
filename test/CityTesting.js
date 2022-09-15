const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

// ---------------- Cities Testing

/* describe('POST /cities', function () {
    it('Must respond with 201 status code', function (done) {
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
}) */

/* describe('GET /cities', function () {
    it('should get a city', function (done) {
        request(app)
            .get('/cities/630eaf8812611f841019dba3')
            .then(response => {
                assert(response.body)
                console.log(response.body)
                done()
            })
    })
}); */

/* describe('DELETE /cities', function () {
    
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