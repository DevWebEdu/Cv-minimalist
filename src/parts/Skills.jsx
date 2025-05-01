import React from 'react'

export const Skills = ({ data }) => {
    return (
        <div className='d-flex mt-3 border-bottom border-1  border-dark-subtle pb-3  '>
            <div className='title-box fw-bold fs-6'>
                Skills
            </div>
            <div className='content-box fw-lighter px-3 d-flex gap-4 justify-content-center  fw-bold flex-wrap' >
                {data.map((tech) => (
                    <code key={tech}>{tech}</code>
                ))}
            </div>
        </div>
    )
}
