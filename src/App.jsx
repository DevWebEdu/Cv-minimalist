import React, { useEffect, useRef, useState } from 'react'
import { Me } from './parts/Me'
import data from './data.json'
import { ProfessionalSumary } from './parts/ProfessionalSumary'
import { WorkHistory } from './parts/WorkHistory'
import { Education } from './parts/Education'
import { Skills } from './parts/Skills'

export const App = () => {
    const { me, professional_summary, work_history, education, skills } = data
    return (
        <>
            <div className='container mt-5 mb-5 main'  >
                <Me data={me} />
                <ProfessionalSumary data={professional_summary} />
                <WorkHistory data={work_history} />
                <Education data={education} />
                <Skills data={skills} />
            </div >
        </>

    )
}
