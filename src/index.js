import React from 'react'
import ReactDom from 'react-dom'

import Input from '~/components/input'
import Box from '~/components/box'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <>
    <Box
      m={4}
      style={{ background: 'darkred', height: '20px', width: '20px' }}
    />
    <Input />
  </>,
  document.getElementById('app')
)
