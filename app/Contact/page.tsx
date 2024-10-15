import { link } from 'fs'
import Link from 'next/link'
import React from 'react'
import style from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Contact</h1>
      <ul>
        <li><Link href="HomePage">Go back to home</Link></li>
        <li><Link href="About">Go to About</Link></li>
        <li><Link href="service">Go to Services</Link></li>
      </ul>
    </div>
  )
}

export default ContactPage
