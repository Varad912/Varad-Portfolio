import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className= {styles.container} id='about'>
        <h2 className= {styles.title}>About</h2>
        <div className= {styles.content}>
            <img 
            src= {getImageUrl('about/aboutImage.png')}
            alt='Me sitting with a laptop'
            className= {styles.aboutImage}
            />
            <ul className= {styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src= {getImageUrl('about/cursorIcon.png')} alt='cursor icon'/>
                    <div className= {styles.aboutItemText}>
                      <h3>Frontend Developer</h3>
                      <p>In front-end development, I excel in HTML, CSS, and JavaScript, alongside expertise in React.js for building dynamic user interfaces. I also have hands-on experience with popular design frameworks like Tailwind CSS, which enhances my styling capabilities.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src= {getImageUrl('about/serverIcon.png')} alt='server icon'/>
                    <div className= {styles.aboutItemText}>
                      <h3>Backend Developer</h3>
                      <p>--Details not added yet !--</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src= {getImageUrl('about/uiIcon.png')} alt='ui icon'/>
                    <div className= {styles.aboutItemText}>
                      <h3>UI Designer</h3>
                      <p>--Details not added yet !--</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
