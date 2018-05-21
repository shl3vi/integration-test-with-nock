const supertest = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
const nock = require('nock');

const userServiceDomain = require('../userService').userServiceDomain;

describe('sending request to /', () => {
    it.only('should return 200', () => {
        const someUserId = '123';
        
        nock(userServiceDomain)
        .get('/user')
        .reply(200, {
            userId: '123',
            name: 'Dave'
        });

        const promise = supertest(app).get("/");

            return promise.then(res => {
                expect(res.status).to.equal(200);
            });
    })
});
