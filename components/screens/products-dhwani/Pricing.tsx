import React from 'react'
import { packs } from '../../../shared/staticData'
import { Button } from '../../layout/Button'
import { CheckSVG, CrossSVG } from '../../SVGs'
import { PricingCard } from './PricingCard'

interface Props {

}

export const Pricing: React.FC<Props> = () => {
    return (
        <div className='mt-50'>
            <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center mt-40 mb-60">
                Pricing
            </h3>
            <div className='flex justify-center items-center lg:flex-col'> 
                {packs.map(pack => (
                    <PricingCard key={pack.id} {...pack} />
                ))}
            </div>
            <div className='flex items-center justify-center mt-40 mb-70'>
            <a href='mailto:hello@dynopii.com'><Button title={'contact sales'} /></a>
            </div>
        </div>
    )
}
