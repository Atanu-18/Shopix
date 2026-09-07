const User = require('../model/User');

//register
const registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = User.create({name,email,password:hashedPassword});
        if(user){
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const message = `
            Welcome to Shopix, ${name}!
            Your OTP for Shopix registration is : ${otp};
            `

            await sendEmail(email, 'welcome to Shopix - Your OTP for registration', message);
            res.status(201).json({message: 'User registered successfully. Please check your email for the OTP.'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};