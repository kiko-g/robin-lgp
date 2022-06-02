import React from 'react'
import { GithubIcon, LinkedinIcon } from './svgs'
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
} from '../images/profile'

const Team = () => {
  const team = [
    { name: 'Francisco Gonçalves', image: FranciscoImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Margarida Cosme', image: MargaridaImage, github: 'margaridacosme', linkedin: '' },
    { name: 'Tiago Araújo', image: TiagoImage, github: 'Guito14', linkedin: '' },
    { name: 'Inês Silva', image: InesImage, github: 'reluzita', linkedin: '' },
    { name: 'Daniel Gonçalves', image: DanielGImage, github: 'Esdeath-GK', linkedin: '' },
    { name: 'Nuno Santos', image: NunoImage, github: 'nunosanto', linkedin: '' },
    { name: 'Daniel Silva', image: DanielSImage, github: 'DanielGSilva', linkedin: '' },
    { name: 'João Cardoso', image: JoaoImage, github: 'joaoalc', linkedin: '' },
    { name: 'Leonor Gomes', image: LeonorImage, github: 'leonormgomes', linkedin: '' },
  ]

  return (
    <div className="grid grid-cols-2 items-center gap-6 lg:grid-cols-3 xl:grid-cols-5">
      {team.map((member, memberIdx) => (
        <div className="flex flex-col items-center justify-center space-y-2 rounded bg-lightest px-4 py-8 dark:bg-lightest/5">
          <img alt={member.name} src={`${member.image}`} className="h-32 w-32 rounded-full object-cover shadow" />
          <p className="text-xl capitalize tracking-tight">{member.name}</p>
          <div className="flex items-center justify-center space-x-2">
            <a href={`https://github.com/${member.github}`} className="transition hover:opacity-80">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href={`https://www.linkedin.com/in/${member.linkedin}`} className="transition hover:opacity-80">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Team
