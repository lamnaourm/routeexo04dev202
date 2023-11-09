import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Acceuil() {

    const [countries, setCountries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getPays = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            return res.data
        }

        getPays().then(countries => setCountries(countries))
    }, [])
    return (
        <div className='list'>

            {countries.map((c, index) => 
                <div key={index} className='pays'>
                    <img src={c.flags.png} alt={c.name.official} onClick={() => navigate('/countries/'+c.name.common)}/>
                    <h4>{c.name.official}</h4>
                </div>
                )}
        </div>
    )
}
