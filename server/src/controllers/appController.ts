import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import otpGenerator from 'otp-generator'
import User from '../model/UserSchema'
import { config } from 'dotenv'

config({
  path:'./.env'
})

