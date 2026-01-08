import {useState} from 'react'
import {
    backendSkills,
    coreSkills,
    experienceData,
    personalInfo,
    stateSkills,
    testingSkills,
    toolsSkills
} from '@/app/CV/consts'
import Image from 'next/image'
import {CertModal} from './certModal'

const containerClassName = 'min-h-full bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden relative'
const leftSideContainerClassName = 'flex sm:h-screen flex-col sm:flex-row'
const getLeftSideClassName = (hoveredSlide: number | null) => `flex flex-col justify-center items-center p-8 flex-1 lg:flex-[1.2] transition-all duration-700 ease-out hover:scale-105 hover:bg-blue-900/50 hover:backdrop-blur-md group
${
    hoveredSlide === 0
        ? 'scale-105 bg-blue-900/50 backdrop-blur-md shadow-2xl shadow-blue-500/25 z-10'
        : 'scale-100 shadow-xl shadow-gray-500/20'
}
`
const nameClassName = 'text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500'
const locationClassName = 'text-2xl md:text-3xl mb-3 opacity-90 font-semibold tracking-wide group-hover:text-blue-300 transition-colors duration-300'
const degreeClassName = 'text-xl md:text-2xl opacity-80 italic font-medium max-w-md text-center leading-relaxed group-hover:text-blue-200 transition-colors duration-300'
const imageClassName = 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl mb-8 border-4 border-white/20 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500'
const getRightContainerClassName = (hoveredSlide: number | null) => `
flex flex-col p-8 space-y-12 flex-1 lg:flex-[1.8] transition-all duration-700 ease-out hover:scale-105 hover:bg-indigo-900/50 hover:backdrop-blur-md group ${
    hoveredSlide === 1
        ? 'scale-105 bg-indigo-900/50 backdrop-blur-md shadow-2xl shadow-indigo-500/25 z-10'
        : 'scale-100 shadow-xl shadow-gray-500/20'
}
`
const experienceContainerClassName = 'flex-1 min-h-0 flex flex-col m-0'
const experienceHeaderClassName = 'text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-md group-hover:scale-110 transition-transform duration-500'
const singleExperiencePointClassName = 'flex items-center gap-3 mb-3 pb-2 border-b-2 border-indigo-500/20 group-hover:border-indigo-400/40 transition-all duration-300'
const singleExperiencePointTitleClassName = 'text-sm md:text-base lg:text-lg font-bold opacity-90 group-hover:text-indigo-200'
const getSingleExperiencePointYearsClassName = (yearColor: string) => `px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-${yearColor}-500/20 to-${yearColor}-400/20 border border-${yearColor}-400/30 shadow-sm`
const taskClassName = 'opacity-90 hover:opacity-100 hover:translate-x-2 transition-all duration-300 pl-4 border-l-2 border-indigo-500/20 group-hover:text-indigo-200 group-hover:border-indigo-400/40'
const dividerClassName = 'w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent m-0'
const skillsHeaderClassName = 'text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md group-hover:scale-110 transition-transform duration-500'

const sharedHeaderClassName = 'text-lg md:text-xl lg:text-2xl font-bold mb-3 tracking-wide border-b-2'
const sharedSkillClassName = 'bg-gradient-to-r backdrop-blur-sm transition-all text-center'

const coreHeaderClassName = `${sharedHeaderClassName} text-amber-300 border-amber-400/50 pb-2`
const coreSkillClassName = `${sharedSkillClassName} from-amber-500/20 to-yellow-500/20 px-3 py-2 rounded-md text-xs font-semibold cursor-pointer duration-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30 border border-amber-400/30 leading-tight`
const stateAndTestingHeaderClassName = `${sharedHeaderClassName} text-emerald-300 border-emerald-400/50 pb-2`
const stateAndTestingSkillClassName = `${sharedSkillClassName} from-emerald-500/20 to-teal-500/20  px-2.5 py-1.5 rounded-sm text-xs font-medium cursor-pointer duration-300 hover:scale-105 hover:shadow-md hover:shadow-emerald-500/25 border border-emerald-400/30 leading-none`
const toolsAndBackendClassName = `${sharedHeaderClassName} text-sky-300 border-sky-400/50 pb-2`
const toolsAndBackendSkillClassName = `${sharedSkillClassName} from-sky-500/20 to-blue-500/20 px-2.5 py-1.5 rounded-sm text-xs font-medium cursor-pointer duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-500/25 border border-sky-400/30 leading-none`

const certModalButton = 'cursor-pointer px-3 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-500/30 text-indigo-200 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg'

export const CV = () => {
    const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)
    const [isSeniorVueModalOpen, setIsSeniorVueModalOpen] = useState(false)
    const [isMidVueModalOpen, setIsMidVueModalOpen] = useState(false)

    return (
        <div className={containerClassName}>
            <div className={leftSideContainerClassName}>
                {/* Left Side: Personal Info */}
                <div
                    className={getLeftSideClassName(hoveredSlide)}
                    onMouseEnter={() => setHoveredSlide(0)}
                    onMouseLeave={() => setHoveredSlide(null)}
                >
                    <Image
                        src='/KrzysztofW.jpg'
                        width={300}
                        height={300}
                        alt='Krzysztof Witkowski'
                        className={imageClassName}
                    />
                    <h1 className={nameClassName}>
                        {personalInfo.name}
                    </h1>
                    <p className={locationClassName}>
                        {personalInfo.location}
                    </p>
                    <p className={degreeClassName}>
                        {personalInfo.degree}
                    </p>
                    <div className='mt-6 flex gap-2'>
                        <button
                            onClick={() => setIsSeniorVueModalOpen(true)}
                            className={certModalButton}
                        >
                            Senior VueJs Cert
                        </button>
                        <button
                            onClick={() => setIsMidVueModalOpen(true)}
                            className={certModalButton}
                        >
                            Mid VueJs Cert
                        </button>
                    </div>
                </div>

                {/* Right Side: Experience & Skills */}
                <div
                    className={getRightContainerClassName(hoveredSlide)}
                    onMouseEnter={() => setHoveredSlide(1)}
                    onMouseLeave={() => setHoveredSlide(null)}
                >
                    {/* Experience Section */}
                    <div className={experienceContainerClassName}>
                        <h2 className={experienceHeaderClassName}>
                            Experience
                        </h2>
                        <div className='flex-1 overflow-y-auto pr-4'>
                            <div className='space-y-6'>
                                {experienceData.map((exp, expIdx) => (
                                    <div key={expIdx}>
                                        <div
                                            className={singleExperiencePointClassName}
                                        >
                                            <h3 className={singleExperiencePointTitleClassName}>
                                                {exp.title}
                                            </h3>
                                            <span
                                                className={getSingleExperiencePointYearsClassName(exp.yearColor)}
                                            >
                                                {exp.years}
                                            </span>
                                        </div>

                                        <ul className='space-y-1.5 mb-4 text-sm md:text-base lg:text-lg'>
                                            {exp.items.map((item, itemIdx) => (
                                                <li
                                                    key={itemIdx}
                                                    className={taskClassName}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={dividerClassName}/>

                    {/* Skills Section */}
                    <div className='shrink-0 space-y-6 p-4 pl-0'>
                        <h2 className={skillsHeaderClassName}>
                            Skills
                        </h2>

                        <div>
                            <h3 className={coreHeaderClassName}>
                                Core
                            </h3>
                            <div className='grid grid-cols-4 gap-2'>
                                {coreSkills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={coreSkillClassName}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <div>
                                <h3 className={stateAndTestingHeaderClassName}>
                                    State & Testing
                                </h3>
                                <div className='grid grid-cols-2 gap-1.5'>
                                    {[...stateSkills, ...testingSkills].map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={stateAndTestingSkillClassName}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className={toolsAndBackendClassName}>
                                    Tools & Backend
                                </h3>
                                <div className='grid grid-cols-2 gap-1.5'>
                                    {[...toolsSkills, ...backendSkills].map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={toolsAndBackendSkillClassName}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CertModal
                isOpen={isSeniorVueModalOpen}
                onClose={() => setIsSeniorVueModalOpen(false)}
                title='Vue.js Senior Developer Level II'
                image='/CertSeniorVue.png'
                link='https://api.certificates.dev/certificates/a011fceb-6f98-42ff-a184-eb530b22ce58/download?signature=4d505ebe2d61d862972d2e2c4d22faeb753e3435a788a783396dfd65927163da'
            />
            <CertModal
                isOpen={isMidVueModalOpen}
                onClose={() => setIsMidVueModalOpen(false)}
                title='Vue.js Developer Level I'
                image='/CertMidVue.png'
                link='https://api.certificates.dev/certificates/9ef8f25e-bf2e-465b-8373-0eceb88ec938/download?signature=54daf37d7e8c5cb30402580db3ed9ac09b5c621daa1e555e64bacde08a18bd9e'
            />
        </div>
    )
}
