/* eslint-disable no-undef */
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlware/fetchuser');
const authMiddleware= require('../middlware/authMiddleware')

const JWT_SECRET = 'Saurabhknowswh0kno0ws';
// post request to create user
router.post('/createuser',
    [
        body('name', 'Enter the valid name').isLength({ min: 3 }),
        body('email', 'Enter the valid mail id').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

    ]
    , async (req, res) => {
        //if there are errors,return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //check whether the user with same email exist
        try {

            let success = false;
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.status(400).json({ success, error: "Sorry a user with this email already exist" });
            }
            user = await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                isAdmin: req.body.isAdmin
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken })
            // res.json(user);
        } catch (err) {
            res.status(500).send("Internal Server error Occured");
        }
    });
// roter to login
router.post('/login',
    [
        body('email', 'Enter the valid mail id').isEmail(),
        body('password', 'Password cannot be blank').exists()
    ], async (req, res) => {
        //if there are errors,return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            let success = false;
            if (!user)
                return res.status(400).json({ success, error: "Try correct credentials" });

            // const passwordCompare = await bcrypt.compare(password, user.password);

            if (!password || password!== user.password) {
                return res.status(400).json({ success, error: "Try correct credentials" });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const id = user.id;
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authtoken, id});

        } catch (error) {
            console.log(error)
            res.status(500).json("Interal Server Error");
        }
    })


router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).json("Interal Server Error");
    }
})


router.get('/account', authMiddleware, async (req, res) => {
    try {
      // Retrieve the user ID from the authenticated request
      const userId = req.user.id;
  
      res.send(userId)
    //   res.status(200).json({ req.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports = router;