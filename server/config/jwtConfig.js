module.exports = {
  secret: process.env.JWT_SECRET || 'my_super_secret',
  expiresIn: '2d',
};

