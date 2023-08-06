const User = require("../models/User");
const moment = require("moment-timezone");
const countryTimezone = require("country-timezone");
const sendBirthdayMessageUser = require("../utils/sendToHookbin");
const { DateTime } = require("luxon");
const schedule = require("node-schedule");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      message: "Success find all user",
      code: 200,
      count: user.length,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal error",
      code: 500,
      err: error,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const dataUser = await user.save();
    return res.status(200).json({
      message: "Success create user",
      code: 200,
      data: dataUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal error",
      code: 500,
      err: error,
    });
  }
};

const updateUser = async (req, res) => {
  const cekId = await User.findById(req.params.id);
  if (!cekId)
    return res.status(404).json({ message: "Data not found!", code: 404 });
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    return res.status(200).json({
      message: "Success update user",
      code: 200,
      data: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal error",
      code: 500,
      err: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const cekId = await User.findById(req.params.id);
  if (!cekId)
    return res.status(404).json({ message: "Data not found!", code: 404 });
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Success delete user",
      code: 200,
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal error",
      code: 500,
      err: error,
    });
  }
};

const getUsersBirthdayToday = async () => {
  try {
    const today = new Date();
    const getUser = await User.find({
      $expr: { $eq: [{ $dayOfMonth: "$birthdayDate" }, today.getDate()] },
    }).exec();
    return getUser;
  } catch (error) {
    console.error("Error find user who today is our birthday: ", error);
  }
};

const getTimeZoneByLocationUser = async (location) => {
  try {
    const timezones = countryTimezone.getTimezones(location);
    return timezones[0];
  } catch (error) {
    console.error("Error find timezone for that country :", error);
    return "UTC";
  }
};

//API to sendBirthdayMessage
const sendBirthdayMessage = async (res) => {
  try {
    const users = await getUsersBirthdayToday();

    users.forEach(async (user) => {
      const userTimezone = await getTimeZoneByLocationUser(
        user.countryLocation
      );
      const userTime = moment().tz(userTimezone).hour(9).minute(0).second(0);
      const currentTime = moment();
      if (userTime.isSame(currentTime, "minute")) {
        await sendBirthdayMessageUser(user);
        return;
      }
    });
    console.log(`It's not time to send birthday message `);
    return;
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Error processing birthday message` });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  sendBirthdayMessage,
};
