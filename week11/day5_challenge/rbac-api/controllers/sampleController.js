// controllers/sampleController.js

exports.publicEndpoint = (req, res) => {
    res.send('Public endpoint');
  };
  
  exports.userProfile = (req, res) => {
    res.send('User profile');
  };
  
  exports.adminPanel = (req, res) => {
    res.send('Admin panel');
  };
  