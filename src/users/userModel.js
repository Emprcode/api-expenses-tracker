import userSchema from "./userSchema.js"

// CRUD
//create



export const insertUser = (userObj) => {
    return userSchema(userObj).save()
}
//read

export const getUsers = () => {
    return userSchema.find()
}
//update
export const updateUsers = (value, userObj) => {
    return userSchema.find(value, userObj, {new:true})
}
//delete
export const deleteUsers = (value) => {
    return userSchema.findOneAndDelete(value)
};



