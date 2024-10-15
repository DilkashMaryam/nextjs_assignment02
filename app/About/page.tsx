import styles from "./about.module.css";
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.header}>About</h1>
      <p className={styles.para}>I am a passionate web developer with a strong foundation in creating dynamic, user-friendly websites. With expertise in HTML, CSS, and JavaScript, I love building sleek, responsive designs that deliver exceptional user experiences. Over the course of my development journey, I’ve worked on a variety of projects ranging from e-commerce platforms to interactive web applications, each crafted with precision and care.

My focus is on clean code, scalable solutions, and aesthetic design. I enjoy staying up-to-date with the latest web technologies and trends, incorporating tools like React, Next.js, and Node.js to create efficient and modern web applications.

Collaboration and problem-solving are at the heart of my approach, and I strive to bring creativity and innovation to every project I work on. Whether you’re looking for a simple landing page or a complex web solution, my goal is to help turn your ideas into reality.

</p>
      <ul>
        <li><Link href="HomePage">Go back to home</Link></li>
        <li><Link href="Contact">Go to Contact</Link></li>
        <li><Link href="service">Go to Services</Link></li>
      </ul>
    </div>
  )
}

export default AboutPage
