import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function github() {
    const data = useLoaderData()
    console.log(data);
    
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ruthvikpeteti').then(response => response.json()).then(
    //         data=> {
    //             console.log(data)
    //             setData(data)
    //         }
    //     )
    // })
  return (
    <div className='text-center m-4 bg-blue-500
    p-4 text-3xl'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" /></div>
  )
}

export default github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ruthvikpeteti')
    return response.json()
}