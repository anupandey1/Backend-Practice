const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: 'Bonk 🔨',
});

module.exports = rateLimiter;
