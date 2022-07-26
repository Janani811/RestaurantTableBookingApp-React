const auth = require('./auth');

const profile = require('./profile');

const user = require('./api/user');
const hotel = require('./api/hotel');
// const comments = require('./api/comments');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Reastaurant Table Booking');
  });
  app.use('/auth', auth);

  app.use('/profile', profile);

  app.use('/api/user', user);
  app.use('/api/hotel', hotel);
};
