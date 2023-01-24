import { IEmailValidator } from '../../interfaces/validators/email-validator'
import validator from 'validator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
