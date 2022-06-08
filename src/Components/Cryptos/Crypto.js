import React from 'react'
import StockSearchBar from '../StockSearchBar'
import SpecialChars from '../SpecialChars'
import FetchCrypto from './FetchCrypto'
import HowToCrypto from '../../HowToCrypto'

const crypto = () => {

  return (
      <>
        <div className='crypto'>
        </div>
        <FetchCrypto />
    </>
  )
}

export default crypto