import React from 'react'
import { PricingFeatures } from '../../../shared/types'
import { Button } from '../../layout/Button'
import { CheckSVG, CrossSVG } from '../../SVGs'

interface Props {
id: string,
type: string,
title: string,
price: number,
description: string,
features: PricingFeatures[]
}

export const PricingCard: React.FC<Props> = ({id, type, title, price, description, features}) => {
    return (
        <div className={`mr-2 ${type === 'PREMIUM' ? '-mt-3' : ''}`}>
            {type === 'PREMIUM' && <div className='bg-brand py-1.5 rounded-t-default'>
                <p className='text-body-sm text-light text-white uppercase text-center'>highly recommended</p>
                </div>}
        <div className='py-30 px-40 bg-gray-333 rounded-default'>
                <h6 className='mb-20 text-h6 text-gray-f2f font-normal'>{title}</h6>
                <p className='text-body-sm font-normal text-gray-bdb w-8/12'>{description}</p>
                <h6 className='mt-25 text-h6 font-semibold text-white'>${price}/<span className='text-h6 font-normal'>per mo.</span></h6>
                <div className='my-40'>
                    
                <Button title='Buy Now' uiType={type==='PREMIUM' ? 'primary':'outlined'} />
                </div>
                <div>
                    {features.map((feature: PricingFeatures) => <div className='flex items-start mb-15' key={feature.id}>
                        {
                            feature.provided ? <CheckSVG /> : <CrossSVG />
                        }
                        <p className={`${feature.provided ? 'text-gray-f2f': 'text-gray-bdb'} text-body-sm font-regular ml-25 w-9/12`}>{feature.feature}</p>
                    </div>)}
                </div>
            </div>
            </div>
    )
}