import React from 'react'
import About from '../About/About';
import CommentsSection from '../CommentsSection/CommentsSection';
import Aside from '../Aside/Aside';
import '../Main/Main.scss'

export default function Main() {
  return (
    <section className="main"> 
      <div classNam="main__comments">
        <About />
        <CommentsSection />
      </div>
      <Aside/>
    </section>
  )
}
