import multer from 'multer'
import { env } from '../config/env.js'

export const uploadResume = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: env.mailtrap.maxResumeSizeMb * 1024 * 1024,
  },
}).single('resume')
