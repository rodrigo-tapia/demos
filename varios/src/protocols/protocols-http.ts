// eslint-disable-next-line n/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArgument } from '../errors/invalid-argument'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UrlLogin {
  public static parseUrl (urlToParse: string): UrlWithParsedQuery {
    if (!urlToParse) {
      throw new InvalidArgument(urlToParse)
    }
    return parse(urlToParse, true)
  }
}
