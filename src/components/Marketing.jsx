import React, { useState } from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { RiHotelLine } from 'react-icons/ri'
import { GiSurferVan } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export default function Marketing() {
    const buttonStyles = { width: 60, height: 60, color: 'white', margin: '33 auto' }
    const marketingIcons = [<GiCommercialAirplane style={buttonStyles} />, <RiHotelLine style={buttonStyles} />, <GiSurferVan style={buttonStyles} />]

    console.log(marketingIcons[0])


    const [marketingInfo, setMarketingInfo] = useState('')

    const marketingUrl = 'http://localhost:8888/.netlify/functions/function2'

    useEffect(() => {
        console.log('used effect')
        fetch(marketingUrl).then(res => res.json()).then(data => {
            console.log(data)
            setMarketingInfo(data)
        }).catch(err => console.log(err))
    }, [])

    if (marketingInfo) {
        return (
            <div className="container fluid marketing w-100 min-vw-100 m-0 greenBG">
                <div className="row text-white">
                    {marketingInfo.map((item, index) => {
                        return (
                            <div className="col-lg-4" key={item.heading}>
                                <div className="icon">
                                    {/* <GiCommercialAirplane style={buttonStyles} /> */}
                                    {marketingIcons[index]}
                                </div>
                                <h2 className="fw-normal m-3">{item.heading}</h2>
                                <p>{item.content}</p>
                                {/* <p>{marketingIcons[index]}</p> */}
                                <p><Link className="btn btn-info shadow text-white" to="#">View details &raquo;</Link></p>
                            </div>

                        )
                    })
                    }
                </div>
                <hr className="featurette-divider" />
            </div>

        )
    }

    return (
        <div className="container fluid marketing w-100 min-vw-100 m-0 greenBG">

            <div className="row text-white">
                <div className="col-lg-4">
                    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                    <div className="icon">
                        <GiCommercialAirplane style={{ width: 60, height: 60, color: 'white', margin: '33 auto' }} />
                    </div>
                    <h2 className="fw-normal m-3">Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    <p><Link className="btn btn-info shadow text-white" to="#">View details &raquo;</Link></p>
                </div>
                <div className="col-lg-4">
                    <div className="icon">
                        <RiHotelLine style={{ width: 60, height: 60, color: 'white', margin: '33 auto' }} />
                    </div>
                    <h2 className="fw-normal m-3">Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    <p><Link className="btn btn-info shadow text-white" to="#">View details &raquo;</Link></p>
                </div>
                <div className="col-lg-4">
                    <div className="icon">
                        <GiSurferVan style={{ width: 60, height: 60, color: 'white', margin: '33 auto' }} />
                    </div>
                    <h2 className="fw-normal m-3">Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                    <p><Link className="btn btn-info shadow text-white" to="#">View details &raquo;</Link></p>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    )
}
