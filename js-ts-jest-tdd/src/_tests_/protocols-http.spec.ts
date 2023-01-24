import { InvalidArgument } from '../errors/invalid-argument'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocol HTTPs and Queries', () => {
  it('URL', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toEqual('http://localhost:3000/login')
    expect(parsedUrl.port).toEqual('3000')
  })
  it('Query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectedAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectedAuth)
  })
  it('User', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parsedUrl.href).toEqual('http://localhost:3000/user')
    expect(parsedUrl.port).toEqual('3000')
  })
  it('Query User', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastName=lastName')
    const expectedUser = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastName: 'lastName'
    }
    expect(parsedUrl.query).toEqual(expectedUser)
  })
  it('Invalid URL', () => {
    function errorFunction (): void {
      UrlLogin.parseUrl('')
    }
    expect(errorFunction).toThrowError(new InvalidArgument(''))
  })
})
