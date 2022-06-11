import * as React from 'react'
import { GithubIcon, LinkedinIcon } from '../svgs'
import { team } from '../../utils/data'
import '../../styles/utils.css'

const Team = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-headings text-4xl font-semibold">Get in touch with us.</h1>
      <div
        className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-3 xl:gap-6 2xl:grid-cols-5"
      >
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
            <p className="text-center text-base font-semibold capitalize tracking-tight xl:text-xl">{member.name}</p>
            <p className="text-center text-sm font-normal tracking-tight text-gray-400 dark:text-gray-300 xl:text-sm">
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
    </div>
  )
}

export default Team
