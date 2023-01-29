import { Team } from '../demos/domain/models/team-model'

describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['kick hard', 'run fast', 'jump high']
    }
    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalkeeper', 1, ['kick hard', 'run fast', 'jump high']])
  })

  it('socker attack', () => {
    const team = new Team()
    expect(team.attack()).toEqual('attack')
  })
})
