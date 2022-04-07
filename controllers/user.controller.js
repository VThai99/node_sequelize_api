const db = require("../models/index");
const User = db.user;
const Op = db.Sequelize.Op;

const create = (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password ||
    !req.body.role
  ) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    avata: req.body.avata ? req.body.avata : null,
    role: req.body.role,
    is_delete: "FALSE"
  };
  User.create(user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something wrong",
      });
    });
};

const showAll = (req, res) => {
  User.findAll()
    .then((data) => {
      {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something wrong",
      });
    });
};

const detail = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      data
        ? res.status(200).send(data)
        : res.status(400).send({ message: `can't find user with id = ${id}` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something wrong",
      });
    });
};
module.exports = {
  create,
  showAll,
  detail,
};
