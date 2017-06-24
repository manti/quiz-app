import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

const Disclaimer = () => {
  return (
    <div>
      <h3 className='i-am-center'>da</h3>
      <h6>These tests will help you in honing your skills and quantifies your expertise. The scores from GREOnline.in tests does not guarantee you will get the same range of scores in original GRE General Test</h6>
      <Link className='i-am-center' to={`/testTimingAndBreak`}>
        <Button>Start test</Button>
      </Link>
    </div>
    )
}

export default Disclaimer
