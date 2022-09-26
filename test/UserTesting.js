const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

// ---------------- User SignIn Testing

describe('POST /auth/signin', function () {

    /* it('Must respond with 401 status code, invalid credentials', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                email: "ignaciogiusti94@gmail.com",
                password: "password321",
                from: "form",
            })
            .expect(401, done)
            .then(response => {
                assert(response.body)
                done()
            })
    }) */

    /* it('Must respond with user logged in', function (done) {
        request(app)
            .post('/auth/signin/')
            .send({
                email: "ignaciogiusti94@gmail.com",
                password: "password",
                from: "form",
            })
            .expect(200, done)
            .then(response => {
                assert(response.body)
                done()
            })
    }) */

    /* it('Must respond with 403 status code, user is not verified', function (done) {
        request(app)
            .post('/auth/signin/')
            .send({
                email: "test2@gmail.com",
                password: "PasswordTest",
                from: "form",
            })
            .expect(403, done)
            .then(response => {
                assert(response.body)
                done()
            })
    }) */

});

// ---------------- User SignUp Testing

/* describe('POST /auth/signup', function () {

    it('Must respond with 201 status code, user created', function (done) {
        request(app)
            .post('/auth/signup/')
            .send({
                name: "TestName",
                lastName: "TestLastName",
                photo: "https://us06st2.zoom.us/static/6.2.8460/image/Zoom_Blue_Logo.png",
                country: "TestCountry",
                email: "test@gmail.com",
                password: "PasswordTest",
                from: "form",
                role: "user",
                verified: "false",
                logged: "false",
                code: "410b51f920b1e5358d60113ef9bb5c",
            })
            .expect(201, done)
            .then(response => {
                assert(response.body)
                console.log(response.body)
                done()
            })
    })

    it('Must respond with 400 status code, couldnÂ´t sign up', function () {
        request(app)
            .post('/auth/signup')
            .send({})
            .expect(400)
    })
    
}); */

/* describe('POST /auth/signup', function () {
it('Must respond with 409 status code, user already exists', function (done) {
    request(app)
        .post('/auth/signup/')
        .send({
            name: "TestName",
            lastName: "TestLastName",
            photo: "https://us06st2.zoom.us/static/6.2.8460/image/Zoom_Blue_Logo.png",
            country: "TestCountry",
            email: "test@gmail.com",
            password: "PasswordTest",
            from: "form",
            role: "user",
            verified: "false",
            logged: "false",
            code: "410b51f920b1e5358d60113ef9bb5c",
        })
        .expect(409, done)
        .then(response => {
            assert(response.body)
            console.log(response.body)
            done()
        })
})

}); */

// ---------------- Profile Testing

/* describe('PATCH /auth/profile', function () {
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/auth/profile/632e6afd5a93b5c7325dd4ba')
            .send({
                // name: "Ignacio",
                name: "Nacho",
                // photo: "https://pbs.twimg.com/media/B-eVjUPCYAAtO6M.png",
                photo: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
                
                // lastName: "Giusti",
                // country: "Argentina",
            })
            .expect(200, done)
    })
}) */

/* describe('GET /auth/profile', function () {
    it('Must get a users info and a 200 status code', function (done) {
        request(app)
            .get('/auth/profile/632e6afd5a93b5c7325dd4ba')
            .expect(200)
            .then(response => {
                assert(response.body)
                console.log(response.body)
                done()
            })
    })
}); */