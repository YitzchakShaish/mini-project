import React, { useEffect, useState } from 'react'

export default function FullName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(()=>{
        setFullName(firstName+" "+lastName)

    },[firstName,lastName])



    return (
        <><h3>FullName</h3>
            <input type="text" placeholder='enter your first name' onChange={(e) => {
                setFirstName(e.target.value)
            }} />
               <input type="text" placeholder='enter your last name' onChange={(e) => {
                setLasttName(e.target.value)
            }} />

            {firstName&&lastName&&<p>{fullName}</p>}
            </>
    )
}
