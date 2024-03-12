// middleware/rbacMiddleware.js

const users = [
    { username: 'admin', role: 'admin' },
    { username: 'user', role: 'user' }
  ];
  
  exports.checkRole = (req, res, next) => {
    const { username } = req.query;
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(401).send('User not found');
    }
    req.user = user;
    next();
  };
  