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
    <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-5">
      {team.map((member, memberIdx) => (
        <div
          key={`team-member-${memberIdx}`}
          className="flex flex-col items-center justify-center space-y-2 rounded bg-lightest px-2 py-4 dark:bg-lightest/5 xl:py-6 xl:px-4"
        >
          <img
            alt={member.name}
            src={`${member.image}`}
            className="h-24 w-24 rounded-full object-cover shadow xl:h-32 xl:w-32"
          />
          <p className="text-sm capitalize tracking-tight xl:text-xl">{member.name}</p>
          <div className="flex items-center justify-center space-x-3">
            <a href={`https://github.com/${member.github}`} className="github">
              <GithubIcon className="h-6 w-6 xl:h-8 xl:w-8" />
            </a>
            <a href={`https://www.linkedin.com/in/${member.linkedin}`} className="linkedin">
              <LinkedinIcon className="h-6 w-6 xl:h-8 xl:w-8" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Team
