const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

require('../db/conn');

//require schema 
const User = require("../model/User");


router.get('/', (req, res) => {
    res.send("Hello from Backend router js");
})

/*
*Using Promises callback
*/

// router.post('/register',(req,res) =>{
/*validate if user missed anything to be filled*/
// const {name,email,phone,work,cpassword} = req.body;
// if(!name || !email || !phone || !work || !cpassword){
//     return res.status(422).json({error:"fill all filled"});
// }
// console.log(req.body);
/*res.json({message:req.body})*/


/*for validation if user give same registered email again*/
// User.findOne({email})
// .then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"Email Already Exist"}); 
//     }
/*all user form data to be stored in user its actually name:name,email:email but we can write this just name,email beacuse es6 said if key,value same then you dont have to write both*/
//         const user = new User({name,email,phone,work,cpassword});

//         user.save().then(() =>{
//             res.status(201).json({message:"User Registered Successfully"})
//         }).catch((err)=>{res.status(500).json({error:"User Failed to Register"})})
//     }).catch(err =>{console.log(err);});

// });


/*
*Using Asynchronous method
*jab bhi promise ki baat ayegi tab humlog wait karenge with help of await and wo data future k liye kisi variable mein store kardenge either wo promise pura karega nahito nahi ex: const userExit = await User.findOne({email}) 
 */


router.post('/register', async (req, res) => {
    /*validate if user missed anything to be filled*/
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "fill all filled" });
    }

    try {
        //Here we check email already exist or not register time
        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(422).json({ error: "Email Already Exist" });
        }


        const user = new User({ name, email, phone, work, password, cpassword });
        /**
         * we can do this (short-cut)
         */

        user.save();
        res.status(201).json({ message: "User Registered Successfully" })

        /**
         * also we can do this
         */

        //     const userRegister = user.save()

        //     if (userRegister) {
        //         res.status(201).json({ message: "User Registered Successfully" })
        //     }

    } catch (err) {
        console.log(err);
    }
})



/*
*login route
*/

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"successed"})'

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        // here we check the email and password in login if email is valid then login successfull
        //here we check email
        const userLogin = await User.findOne({ email })

        if (userLogin) {
            //user ne jo login form k password mein dalaa wo password or userExist  password k sath compare karega
            //check password is match or not

            const isMatch = await bcrypt.compare(password, userLogin.password)
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Details" })

            } else {
                res.status(200).json({ message: "Login Successfull" })
            }
        }
        else {
            res.status(400).json({ error: "Invalid Details" })
        }

    } catch (error) {
        console.log(error);
    }


})













module.exports = router;