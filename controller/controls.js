const path = require('path')
const User = require('../models/userData')

exports.showForm = (req, resp) => {

  resp.sendFile(path.join(__dirname, '../views/index.html'));
}





exports.showUser = (req, resp) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      resp.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      resp.status(500).json({ message: 'Error fetching users' });
    });
};


exports.postUser = (req, resp) => {
  // const name = req.body.name;
  // resp.sendFile(path.join(__dirname,'../views/done.html'))
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPhoneNumber = req.body.PhoneNumber;

  User.create({
    name: userName,
    email: userEmail,
    PhoneNumber: userPhoneNumber
  })
    .then((result) => {
      console.log(result)

    })
    .catch((err) => {
      console.log(err);
    });
}




exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  User.destroy({
    where: {
      id: userId
    }
  })
    .then((deletedUser) => {
      if (deletedUser) {
        res.send('User deleted successfully');
      } else {
        res.send('User not found');
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};



exports.editUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, PhoneNumber } = req.body;

  User.findOne({ where: { id: userId } })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return user.update({ name, email, PhoneNumber });
    })
    .then(() => {
      res.json({ name, email, PhoneNumber });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
};
