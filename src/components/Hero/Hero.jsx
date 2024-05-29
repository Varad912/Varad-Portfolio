import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className= {styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Varad</h1>
            <p className= {styles.description}>
            I'm Varad Gavhad, currently in my pre-final year at the Indian Institute of Information Technology in Jabalpur. Web development ignites my passion, and I possess strong proficiency in front-end technology
            </p>
            <a href='mailto:varadgavhad9028@gmail.com' className= {styles.contactBtn}>Contact Me</a>
        </div>
        <img 
        src={getImageUrl('hero/vp8.png')}
        alt='Hero image of mine'
        className= {styles.heroImg}
        />
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur} />
    </section>
  )
}
