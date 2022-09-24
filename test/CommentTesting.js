const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

// ---------------- Comments Testing

/* describe('POST /comments', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/comments')
            .send({
                comment: "TestComment",
                id: "632e6afd5a93b5c7325dd4ba",
                itineraryId: "63190c818dfd103c3681d9aa"
            })
            .expect(201, done)
    })

    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/comments')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
}) /

/ describe('PATCH /comments', function () {
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/comments/632f1888d7c730c68bd203c6')
            .send({
                comment: "TestCommentPatch",
            })
            .expect(200, done)
    })
}) /

/ describe('GET /comments', function () {
    it('Must get all comments and a 200 status code', function (done) {
        request(app)
            .get('/comments/') // Can get a specific comment with its ID - 632f1888d7c730c68bd203c6
            .expect(200)
            .then(response => {
                assert(response.body)
                console.log(response.body) // Deactivate comment to show comments clg in terminal
                done()
            })
    })
}); */