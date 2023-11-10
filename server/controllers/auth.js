import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ message: "User Already Exist." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '1h' });
        res.send(200).json({ result: newUser }, token);
    } catch (error) {
        res.send(500).json({ message: "Something went wrong..." });
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User Don't Exist." });
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '1h' });
        res.send(200).json({ result: newUser }, token);
    } catch (error) {

    }

}