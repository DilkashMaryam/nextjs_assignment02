import style from "../Services/services.module.css"
import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
  return (
    <div className={style.container}>
      <ul>
        <li><Link href="Services/Graphics">Graphic Designing</Link></li>
        <li><Link href="service/web">Web Development</Link></li>
      </ul>
    </div>
  )
}

export default ServicePage
