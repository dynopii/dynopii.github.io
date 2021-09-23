import React from 'react'
import { Button } from '../../layout/Button'
import { CheckSVG, CrossSVG } from '../../SVGs'
import { PricingCard } from './PricingCard'

interface Props {

}

export const Pricing: React.FC<Props> = () => {
    return (
        <div className='xl:px-30'>
            <h3 className="text-h3 md:text-h5 font-semibold text-gray-e0e text-center mt-40 mb-60">
                Pricing
            </h3>
            <div className='flex justify-center'> 
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

const startupFeatures = [
    {
        id: '1',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '2',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '3',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: false
    },
    {
        id: '4',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: false
    },
]

const premiumFeatures = [
    {
        id: '1',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '2',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '3',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '4',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: false
    },
]

const enterpriseFeatures = [
    {
        id: '1',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '2',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '3',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
    {
        id: '4',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
        provided: true
    },
]

const packs = [
    {
        id: '1',
        type: 'STARTUP',
        title: 'Startup Pack',
        price: 25.99,
        description: 'For the startup team who work with ',
        features: startupFeatures
    },
    {
        id: '2',
        type: 'PREMIUM',
        title: 'Premium Pack',
        price: 35.99,
        description: 'For the organisation team who work with ',
        features: premiumFeatures,
    },
    {
        id: '3',
        type: 'ENTERPRISE',
        title: 'Enterprise Pack',
        price: 125.99,
        description: 'For the enterprise team who work with ',
        features: enterpriseFeatures
    },
]