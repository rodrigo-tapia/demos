import { ISockerAttack, ITeam } from '../../interfaces/ITeam'

export class Team implements ITeam, ISockerAttack {
  position (name: string, tShirt: number, skills: any[]): any {
    return [
      name, tShirt, skills
    ]
  }

  attack (): string {
    return 'attack'
  }
}
