import { IContractModel } from '../../interfaces/IContractModel'

export class ContractModel {
  constructor (public contract: IContractModel) {
    Object.assign(this.contract, contract)
  }

  getId (): string {
    return this.contract.id
  }

  getInitDate (): Date {
    return this.contract.initDate
  }

  getExpireDate (): Date {
    return this.contract.expireDate
  }

  getLenghtInMonths (): number {
    return this.contract.lenghtInMonths
  }

  getMonthlyCost (): number {
    return this.contract.monthlyCost
  }
}

export class ContractPrime extends ContractModel {
  getMonthlyDiscount (): number {
    return this.contract.monthlyCost * 0.1
  }
}
