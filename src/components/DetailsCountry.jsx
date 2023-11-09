import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsCountry() {

    const [country, setCountry] = useState()
    const {name} = useParams()
    useEffect(() => {
        const getPays = async () => {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            return res.data
        }

        getPays().then(country => setCountry(country[0]))
    }, [name])
  return (
    <div>
        { country && <div>
                <h1>{country.name.official}</h1>
                <h5>{country.population}</h5>
                <h5>{country.continents}</h5>
                <h5>{country.capital && country.capital[0]}</h5>
            </div>
        }
    </div>
  )
}
