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
    { name: 'Francisco', image: FranciscoImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Nuno', image: NunoImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Tiago', image: TiagoImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Daniel Gonçalves', image: DanielGImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Daniel Silva', image: DanielSImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Inês', image: InesImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Margarida', image: MargaridaImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Joao', image: JoaoImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
    { name: 'Leonor', image: LeonorImage, github: 'kiko-g', linkedin: 'kikogoncalves' },
  ]

  return (
    <div className="grid grid-cols-5 gap-6">
      {team.map((member, memberIdx) => (
        <div className="flex flex-col items-center justify-center space-y-4 rounded bg-lightest p-4 dark:bg-sky-900">
          <img alt={member.name} src={`${member.image}`} className="block h-24 w-24 rounded-full shadow" />
          <span className="text-xl capitalize">{member.name}</span>
          <div className="flex items-center justify-center space-x-2">
            <a href={`https://github.com/${member.github}`}>
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href={`https://www.linkedin.com/in/${member.linkedin}`}>
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Team
