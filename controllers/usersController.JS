const {
userModel
} = require('../models');

const addUser = (body) => {
    const doc = new userModel(body);
    const query = {_id: doc._id};
    return userModel.findOneAndUpdate(query, doc, {
        upsert: true,
        new: true
    });
};
const updateUser = (body) => {
    const query = {_id: body._id};
    return userModel.findOneAndUpdate(query, body, {
        new: true
    });
};
const dleteUser = (filter) => {
   return userModel.deleteOne(filter);
};
const getAlluser = (filter) => {
    return userModel.find(filter);
}
const getUser = (filter) => {
    return userModel.findOne(filter);
}

module.exports = {
    addUser,
    updateUser
}