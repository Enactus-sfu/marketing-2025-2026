import React from 'react'

function iconLabel({ icon, header, body, subheader }) {
    return (
        <div className='p-[48px] bg-primary-gray rounded-[16px] flex flex-col gap-[16px] w-full'>
            {icon}
            {subheader == null ? <h4>{header}</h4> :
                <div className='flex flex-col gap-[8px]'>
                    <h3 className='text-primary-yellow'>{subheader}</h3>
                    <h4>{header}</h4>
                </div>
            }
            <h3 className="opacity-60">{body}</h3>
        </div>
    )
}

export default iconLabel