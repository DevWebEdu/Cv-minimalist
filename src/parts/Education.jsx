import React from 'react'

export const Education = ({ data }) => {
    const { study_1, study_2, study_3 } = data

    const estudios = [
        study_1,
        study_2,
        study_3
    ]
    return (
        <div className='d-flex mt-3 border-bottom border-1  border-dark-subtle pb-3  '>
            <div className='title-box fw-bold fs-6'>
                Educación
            </div>
            <div className='content-box fw-lighter px-3 d-flex flex-column  justify-content-around gap-1 w-100 gap-3'>
                {
                    estudios.map(({ institution, phases }) => (
                        <div className='d-flex flex-column ' key={institution}>
                            <p className='fw-bold mb-1 fs-6 text-decoration-underline  mb-2'> {institution} </p>
                            {
                                phases.map(({ degree, period }) => (
                                    <div className='d-flex flex-column' key={period}>
                                        <strong>{degree}</strong>
                                        <strong className=' text-end  fw-bold'>{period}</strong>
                                    </div>

                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
