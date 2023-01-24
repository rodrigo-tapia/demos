import { ContractModel, ContractPrime } from '../models/contract-model'

describe('Class ContractModel', () => {
  test('12 months contract', () => {
    const contract = new ContractModel({
      id: '001',
      initDate: new Date(2019),
      expireDate: new Date(2020),
      lenghtInMonths: 12,
      monthlyCost: 500
    })
    expect(contract.getId()).toEqual('001')
    expect(contract.getInitDate()).toEqual(new Date(2019))
    expect(contract.getExpireDate()).toEqual(new Date(2020))
    expect(contract.getLenghtInMonths()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
  })
  test('Prime Discount x 24 months', () => {
    const contractPrime = new ContractPrime({
      id: '001',
      initDate: new Date(2019),
      expireDate: new Date(2020),
      lenghtInMonths: 12,
      monthlyCost: 500
    })
    expect(contractPrime.getMonthlyDiscount()).toBe(50)
  })
})
