import React from 'react'
import {Locate, Mail, Phone} from 'lucide-react'
import SectionTitle from "../Common/SectionTitle";
import Form from './Form'
const Contact = () => {
  return (
    <section id="contact" className='bg-primary-dark text-white px-5 py-5 grid grid-cols-1 gap-4 md:px-20 md: py-10 md:grid md:grid-cols-2 items-center dark:bg-[#14213b] mt-10'>
        <div className='flex flex-col gap-4'>
            <SectionTitle title="Let's Work Together"/>
            <p>Have a project idea or want to collaborate?</p>
            <div className='flex gap-2 text-sm'>
                <Mail />
                <p>Seemaverma210497@gmail.com</p>
            </div>
               <div className='flex gap-2 text-sm'>
                <Phone />
                <p>+91 8368334877</p>
            </div>
               <div className='flex gap-2 text-sm'>
                <Locate />
                <p>New Delhi, India</p>
            </div>
            <div className='grid grid-4'>
            </div>
        </div>
        <div>
            <Form/>
        </div>
    </section>
  )
}

export default Contact