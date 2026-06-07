import React from 'react'
import Skillsdata from '../Data/SkillsData.json'
import SectionTitle from '../Common/SectionTitle'

const Skills = () => {
  return (
    <section className='px-5 md:px-20 py-10' id='skills'>
      <SectionTitle title="My Skills"/>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6'>
        {Skillsdata.map((elem)=> {
          return <div key={elem.id} className='flex flex-col items-center justify-center p-5 rounded shadow hover:scale-105 transition-all duration-300 dark:bg-[#101828]'>
            <img src={elem.image} className='w-[50px]'/>
            <p>{elem.skill}</p>
          </div>
        
        })}
      </div>
    </section>
  )
}

export default Skills