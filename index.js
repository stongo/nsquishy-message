var Factory = require('wadofgum');
var Joi = require('joi');
var uuid = require('uuid');

var messageSchema = {
    id: Joi.string().default(uuid.v1, 'unique id'),
    source: Joi.string().required(),
    timestamp: Joi.date().format('x').default(Date.now, 'timestamp'),
    reference: Joi.string().default(''),
    payload: Joi.any().optional()
};

var Message = new Factory({
    type: 'event',
    schema: messageSchema
});

module.exports = Message;