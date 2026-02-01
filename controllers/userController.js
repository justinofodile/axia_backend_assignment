const userModel = require("../model/userModel");

// Controller to create user
const createUser = async (req, res) => {
  try {
    const { name, email, gender, marital_status } = req.body;
    if (!name || !email || !gender || !marital_status) {
      return res
        .status(201)
        .json({ message: "All fields are required!!! Try again" });
    } else {
      const user = new userModel({ name, email, gender, marital_status });
      await user.save();
      res.status(200).json({ message: user });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all user
const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user)
      return res
        .status(201)
        .json({ message: "Unable to get a user. No user available" });
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a user by id
const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user)
      return res.status(201).json({
        message: `Unable to get a user!!! No user with the id of ${id}`,
      });
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update user by id
const updateUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, gender, marital_status } = req.body;
    const user = await userModel.findByIdAndUpdate(
      id,
      { name, email, gender, marital_status },
      { new: true },
    );
    if (!user)
      return res.status(201).json({
        message: `Unable to update any user!!! No user with the id of ${id}`,
      });
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Controller to delete user by id
const deleteUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    if (!user)
      return res.status(201).json({
        message: `Unable to delete any user!!! No user with the id of ${id}`,
      });
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
};
