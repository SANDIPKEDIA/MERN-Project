const mongoose = require("mongoose")

/*
*for password hashing
*/
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            },
        }
    ]


})



/**
 * Hasing the Password for security . By hashing no one could know/saw your real password in database
 */

/**
 * beacuse yaha p this keyword arha hein so ye keyword totally opposite work karta hein jab hmlg fat-arrow function lagate hein that's why we using normal funtion here 
 * jab jab save method use hoyega us se pehele ye hasing hoyega password k liye not for all the time 
*/


userSchema.pre('save', async function (next) {

    //isModified is bycrypt function 
    //hmlgogo bass password dikhana hash karna hein that's why we give password inthe parameter


    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);

    }
    next();

})


/**
 * Generate Web Token
 */

userSchema.methods.generateAuthToken = async function () {
    try {
        //generate token
        let NewToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        //add token in userSchema's tokens and save token by this.save()
        this.tokens = this.tokens.concat({ token: NewToken })
        await this.save();
        return NewToken;
    } catch (error) {
        console.log(error);
    }
}





var User = mongoose.model('User', userSchema);
module.exports = User;