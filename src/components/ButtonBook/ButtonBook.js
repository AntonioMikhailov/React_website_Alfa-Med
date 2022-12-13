import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonBook({text, link, styles}) {
  return (
    <Link to={link} className={`${styles} btn`}>{text}</Link>
  )
}
