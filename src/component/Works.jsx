import React from 'react'

export const Works = ({ data }) => {
    const { company, ubication, phases } = data
    return (
        <div >

            <p className='fw-bold mb-1 fs-6 text-decoration-underline '>{company}</p>


            {
                phases.map(({ period, description, position, technologies }) => (

                    <div className='d-flex gap-1 flex-column' key={technologies}>
                        <div className='d-flex justify-content-between '>
                            <strong className='fw-bold '>{position} </strong>
                            <strong className='fw-bold'> {period} </strong>
                        </div>


                        <ul>
                            {description.map((description) => (
                                <li className='   ' key={description} >
                                    {description}
                                </li>
                            ))}
                        </ul>
                        <ul className=' d-flex gap-5 justify-content-center  fw-bold '>
                            {technologies.map((tech) => (
                                <code key={tech}>{tech}</code>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
