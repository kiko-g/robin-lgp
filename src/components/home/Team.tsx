import * as React from 'react'
import { GithubIcon, LinkedinIcon } from '../svgs'
import {
  FranciscoImage,
  NunoImage,
  TiagoImage,
  DanielGImage,
  DanielSImage,
  InesImage,
  MargaridaImage,
  JoaoImage,
  LeonorImage,
} from '../../images/profile'
import '../../styles/utils.css'

const Team = () => {
  const team = [
    {
      name: 'Francisco Gonçalves',
      role: 'CTO, Scrum Master',
      image: FranciscoImage,
      github: 'kiko-g',
      linkedin: 'kikogoncalves',
    },
    {
      name: 'Margarida Cosme',
      role: 'CEO, Project Owner',
      image: MargaridaImage,
      github: 'margaridacosme',
      linkedin: '',
    },
    { name: 'Tiago Araújo', role: 'Scope Manager', image: TiagoImage, github: 'Guito14', linkedin: '' },
    { name: 'Inês Silva', role: 'Image and Marketing Director', image: InesImage, github: 'reluzita', linkedin: '' },
    {
      name: 'Daniel Gonçalves',
      role: 'Human Resources Director',
      image: DanielGImage,
      github: 'Esdeath-GK',
      linkedin: '',
    },
    { name: 'Nuno Santos', role: 'Test Manager', image: NunoImage, github: 'nunosanto', linkedin: '' },
    { name: 'Daniel Silva', role: 'Quality Manager', image: DanielSImage, github: 'DanielGSilva', linkedin: '' },
    { name: 'João Cardoso', role: 'Risk Manager', image: JoaoImage, github: 'joaoalc', linkedin: '' },
    { name: 'Leonor Gomes', role: 'CFO', image: LeonorImage, github: 'leonormgomes', linkedin: '' },
  ]

  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-5">
      {team.map((member, memberIdx) => (
        <div
          key={`team-member-${memberIdx}`}
          className="flex flex-col items-center justify-center rounded bg-lightest px-2 py-4 dark:bg-lightest/5 xl:py-6 xl:px-4"
        >
          <img
            alt={member.name}
            src={`${member.image}`}
            className="mb-4 h-24 w-24 rounded-full object-cover shadow xl:h-32 xl:w-32"
          />
          <p className="text-base font-semibold capitalize tracking-tight xl:text-xl">{member.name}</p>
          <p className="text-sm font-normal tracking-tight text-gray-400 dark:text-gray-300 xl:text-base">
            {member.role}
          </p>
          <div className="mt-4 flex items-center justify-center space-x-3">
            <a className="github" target="_blank" href={`https://github.com/${member.github}`}>
              <GithubIcon className="h-6 w-6 xl:h-8 xl:w-8" />
            </a>
            <a className="linkedin" target="_blank" href={`https://www.linkedin.com/in/${member.linkedin}`}>
              <LinkedinIcon className="h-6 w-6 xl:h-8 xl:w-8" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Team
