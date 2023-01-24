import { EmailValidatorAdapter } from './email-validator-adapter'

describe('Email Validator', () => {
  it('Should return false validator', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('email@')
    expect(isValid).toBe(false)
  })
  it('Should return true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(true)
  })
})
