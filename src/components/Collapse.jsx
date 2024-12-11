import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ label, children }) {
  const [isOpen, setOpen] = useState(false)

  function toggleOpen() {
    isOpen ? setOpen(false) : setOpen(true)
  }

  return (
    <div className={'collapse' + (isOpen ? ' open' : '')}>
      <h2 onClick={toggleOpen}>{label}</h2>
      <div className={'collapsible'}>{children}</div>
    </div>
  )
}

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Collapse
