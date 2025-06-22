'use client'

import Image from "next/image"
import Tilt from 'react-parallax-tilt'

type Experience = {
  company: string
  date: string
  role: string
  logo: string
}

type Props = {
  experiences: Experience[]
}

const ExperienceCard = ({ experiences }: Props) => {
  return (
      <div>
        {/* DESKTOP: horizontal alternating */}
        <div className="hidden sm:block relative py-16">
          {/* line across the middle */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-600" />

          <div className="relative flex justify-between items-center">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`
                  flex flex-col items-center gap-4
                  ${idx % 2 === 0 ? 'translate-y-[-2rem]' : 'translate-y-[2rem]'}
                `}
              >
                {/* the card */}
                <Tilt
                  className="w-full max-w-4xl mx-auto"
                  glareEnable
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  transitionSpeed={250}
                >
                <div className="bg-gray-900 border border-white rounded-lg p-4 w-48 text-center">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                  <p className="font-semibold mt-2">{exp.company}</p>
                  <p className="text-sm opacity-75">{exp.date}</p>
                  <p className="mt-1 text-sm">{exp.role}</p>
                </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE: vertical stacked */}
        <div className="flex flex-col sm:hidden gap-8">
           {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-600" />
          {experiences.map((exp) => (
            <div key={exp.company} className="flex items-start gap-4">
              {/* content */}
              <Tilt
                  className="w-full max-w-4xl mx-auto"
                  glareEnable
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  transitionSpeed={250}
                >
              <div className="bg-gray-900 border border-white rounded-lg p-4 flex-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-xs opacity-75">{exp.date}</p>
                    <p className="text-xs">{exp.role}</p>
                  </div>
                </div>
              </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ExperienceCard
