import React from 'react'
import SimpleAccordion from '../components/SimpleAccordion.tsx'


const data = [
    {
        projectName: "Smart Wind power",
        pricePerUnit: "0.4",
        MarketPrice: "0.5",
        allocationPercentage: "30",
        Vintages: [{ year: "2000", ReservationId: "1234567", balanceAvailable: "20", pricePerUnit: "10" },
        { year: "2001", ReservationId: "1234568", balanceAvailable: "50", pricePerUnit: "20" },
        ]
    },
    {
        projectName: "Telengana Wind power",
        pricePerUnit: "0.5",
        MarketPrice: "0.5",
        allocationPercentage: "50",
        Vintages: [{ year: "2021", ReservationId: "1234567", balanceAvailable: "120", pricePerUnit: "100" },
        { year: "2022", ReservationId: "1234568", balanceAvailable: "200", pricePerUnit: "10" },]
    },
]

function HomePage() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 col-7   '>
                <SimpleAccordion data={data} />
            </div>
        </div>
    )
}

export default HomePage