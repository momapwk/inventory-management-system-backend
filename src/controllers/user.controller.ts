import { handleError, isValidObjectId } from "../utils/utils"
import { Request, Response } from "express"
import User from '../models/user.model'
import bcrypt from 'bcrypt'
import { IUser } from "../types/inventory"

//   Create a new user
export const createUser = async ( req: Request, res: Response
): Promise<void> => {
    try{
        const { name, email, role, password } = req.body
        const existingUser = await User.findOne
        ({email}).select('_id').lean()
        if (existingUser) {
            res.status(409).json({message: 'Email already exists' })
            return
        }
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await User.create({ name, email, role, passwordHash })
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        })
    }catch (error) {
        handleError(res, error)
    }
}
export const getUsers = async (_req: Request, res:  Response): Promise<void> => {
try {
    //  Use lean() for better performance when you don't
    //  need full mongoose documents
    const users = await User.find()

    .select('-password').lean()
    res.status(200).json(users)
} catch (error) {handleError(res, error)
}}
//   Update user
export const updateUser = async ( req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        if (!isValidObjectId(id, res)) return
        //  Ensure at least one update field is provided
        if (!name && !email) {
            res.status(400).json({ message: 'No update fields provided'})
            return
        }
        //  Build update object dynnamically
        const updateData: Partial<IUser> = {}
        if (name) updateData.name = name
        if (email) updateData.email = email
        //  If email is being updated, check for duplicates
        if (email) {
        const emailExists = await User.findOne({
            email,
            _id: { $ne: id},
        })
        .select('_id')
        .lean()
        if (emailExists) {
            res.status(400).json({ messaage: 'Email already in use'})
            return
        }}
        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        })
        .select('-password')
        .lean()

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found'})
            return
        }
        res.status(200).json(updatedUser)
    }catch(error) {
        handleError(res, error)
    }
}