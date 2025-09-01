import React, { useEffect, useState } from 'react'

export default function Api() {
    const [user, setUser] = useState('');
    const [response, setResponse] = useState({});
    const [reload, setReload] = useState(false);



    useEffect(() => {
        if(user.length>4){

            fetch('http://localhost:8080/user')
                .then(res => res.json())
                .then(json => setResponse(json))
                .catch(err => console.error(err))
        }
    },[reload])



    return (
        <><h5>api</h5>
        <input type="text" onChange={(e) => setUser(e.target.value)} minLength={4} placeholder='enter your user name' />
            <br /><br />
            <button onClick={() => setReload(!reload)}>Reload</button>
            {response&&<p>{response.user}</p>}
        </>
        )
}
