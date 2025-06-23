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
<div className="hidden lg:block relative py-16">
  <div className="relative flex justify-between items-center">

    {experiences.map((exp, idx) => (
      <div
        key={`${exp.company}-${exp.date}`}
        className={`
          relative flex flex-col items-center gap-4}
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
          <div className="border border-white rounded-lg p-4 w-52 text-center min-h-[200px] flex flex-col justify-start bg-black/30 backdrop-blur-sm">
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={48}
              height={48}
              className="mx-auto border rounded-sm border-white mb-2 shadow-lg"
            />
            <p className="font-semibold mt-2 whitespace-nowrap">{exp.company}</p>
            <p className="text-sm opacity-75 mt-1">{exp.date}</p>
            <p className="text-sm mt-3">SWE Intern</p>
            <p className="text-xs text-gray-400">{exp.role.replace("SWE Intern ", "")}</p>
          </div>
        </Tilt>

        {/* connecting line to next card */}
        {idx < experiences.length - 1 && (
          <div className="absolute top-1/2 left-full w-[100%] h-px bg-gray-600 z-[-1]"></div>
        )}
      </div>
    ))}

  </div>
</div>


  {/* MOBILE*/}
  <div className="relative flex flex-col lg:hidden items-center gap-12 pt-8">
    {experiences.map((exp, idx) => (
      <div key={`${exp.company}-${exp.date}`} className="relative flex flex-col items-center gap-4">

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
          <div className="border border-white rounded-lg p-4 w-64 text-left flex flex-col items-start min-h-[160px] bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={32}
                height={32}
                className="border rounded-sm border-white mb-2 shadow-lg"
              />
              <div>
                <p className="font-semibold whitespace-nowrap">{exp.company}</p>
                <p className="text-xs opacity-75 mt-1">{exp.date}</p>
              </div>
            </div>
            <div className="mt-3 w-full flex flex-col items-center text-center">
              <p className="text-sm mt-3">SWE Intern</p>
              <p className="text-xs text-gray-400">{exp.role.replace("SWE Intern ", "")}</p>
            </div>
          </div>
        </Tilt>

        {/* connector line below this card */}
        {idx < experiences.length - 1 && (
          <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-600 z-[-1]" />
        )}
      </div>
    ))}
  </div>

      </div>
  )
}

export default ExperienceCard
