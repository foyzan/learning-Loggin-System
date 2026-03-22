const { v4: uuidv4 } = require('uuid');

const correlationIdMiddleware = (req, res, next) => {
    // Check if the client already sent an ID (useful for microservices)
    // otherwise, generate a new one
    const correlationId = req.headers['x-correlation-id'] || uuidv4();
    
    // Attach it to the request so other middlewares can see it
    req.correlationId = correlationId;
    
    // Also send it back in the response headers (great for debugging!)
    res.setHeader('x-correlation-id', correlationId);
    
    next();
};

module.exports = correlationIdMiddleware;