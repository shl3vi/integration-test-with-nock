const request = require('request-promise');

const userServiceDomain = 'http://fakeUsersService.com';
const getUser = (req, res) => {
    
    const options = {
        uri: userServiceDomain + '/user',
        qs: {
            id: req.params.id // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    request.get(options)
    .then(response => {
        console.log(response);
        res.send(response);
    })
    .catch(err => {
        console.error(err);
        res.status(500).end('failed to get request from user service');
    })
}

module.exports = {
    userServiceDomain: userServiceDomain,
    getUser: getUser
};