# Nsquihsy Message

Provides a standardized message model to be used in NSQ

Module returns an extendable factory

## Schema

The following model properties will be created for each model. The factory containers a `schema` property containing the [Joi](https://github.com/hapijs/joi) schema.

```
{
    id: Joi.string().default(uuid.v1, 'unique id'),
    source: Joi.string().required(),
    timestamp: Joi.date().format('x').default(Date.now, 'timestamp'),
    reference: Joi.string().default(''),
    payload: Joi.any().optional()```
}
```

## Creating a message

```
var Message = require('nsquishy-message');
var message = new Message({
    source: 'build-worker',
    referemce: '9d107c4e-0414-45a1-9cec-99930d980de2',
    payload: 'build successful'
});
```