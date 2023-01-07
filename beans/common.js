const {
    usersController,
    adminController,
    clientController
} = require('../controllers');
const signup = async (body) => {
    //apply validation
    if (!body.userName) {
        return Promise.reject({ error: "userName is required" });

    }
    if (!body.userType) {
        return Promise.reject({ error: "password is required" });
    }
    if (!body.password) {
        return Promise.reject({ error: "userType is required" });
    }

    if (!body.data) {   //data represent public info of user
        return Promise.reject({ error: "data is required" });
    }
    try {
        let result = null;

        const userType = body.userType;
        switch (userType) {
            case 'admin':
                result = await adminController.addAdmin(body.data);
                break;
            case 'client':
                result = await clientController.addClient(body.data);
                break;
            default:
                return Promise.reject({ error: "userType is invalid" })

        }
        const userJson = {
            userName: body.userName,
            password: body.password,  //make this password encrypted
            userType: {
                kind: userType,
                item: result._id
            }
        };
        const user = await usersController.addUser(userJson);
        return user;
    }
    catch (exp) {
        return Promise.reject({ error: exp });
    }
};
module.exports = {
    signup
}