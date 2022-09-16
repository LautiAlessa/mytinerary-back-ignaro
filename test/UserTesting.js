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

    it('Must respond with 400 status code, couldn´t sign up', function () {
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