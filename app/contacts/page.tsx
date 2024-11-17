/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'

import {FaPhoneAlt} from 'react-icons/fa'
import { MdOutlineMail,  MdLocationOn } from "react-icons/md";


function Contacts() {
  return (
    <div  className='container md:px-16 px-5 mx-auto '>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center'>

        <div className='flex flex-col gap-4 lg:order-2 order-none lg:px-2'>
          <div className='flex items-center gap-x-2 leading-none'>
              <div className='w-[44px] h-[44px] bg-primary grid place-content-center text-accent'><FaPhoneAlt size={20}/></div>
              <div className='space-y-2'>
                <small className='text-white/60'>Phone</small>
                <p>(+234) 9134750393</p>
              </div>
          </div>
          <div className='flex items-center gap-x-2 leading-none'>
              <div className='w-[44px] h-[44px] bg-primary grid place-content-center text-accent'><MdOutlineMail size={20}/></div>
              <div className='space-y-2'>
                <small className='text-white/60'>Email</small>
                <p>iotechhub@gmail.com</p>
              </div>
          </div>
          <div className='flex items-center gap-x-2 leading-none'>
              <div className='w-[44px] h-[44px] bg-primary grid place-content-center text-accent'><MdLocationOn size={20}/></div>
              <div className='space-y-2'>
                <small className='text-white/60'>Address</small>
                <p>N0.34 jmj Street Nekede Owerri</p>
              </div>
          </div>
        </div>

        <div className='bg-primary rounded-xl flex flex-col w-full px-8 py-4 gap-6 lg:col-span-2'>
          <h3 className='text-accent text-2xl font-semibold'>Let's Work together</h3>
          <div className='text-white/60 text-sm lg:max-w-[70%]'>Do you have a business idea, or have a website/App you want to build, we are fully open for collaboration, send me a quick message using the form below.</div>
          <form>
            <div className='flex flex-col gap-3'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input type="text" name="" id=""  className='w-full bg-white/60 outline-none focus:outline-accent transition-all ease-in py-2 px-2 rounded-md placeholder-black text-sm' placeholder='First Name'/>
                  <input type="text" name="" id=""  className='w-full bg-white/60 outline-none focus:outline-accent transition-all ease-in py-2 px-2 rounded-md placeholder-black text-sm' placeholder='Last Name'/>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input type="text" name="" id=""  className='w-full bg-white/60 outline-none focus:outline-accent transition-all ease-in py-2 px-2 rounded-md placeholder-black text-sm' placeholder='Email'/>
                <input type="text" name="" id=""  className='w-full bg-white/60 outline-none focus:outline-accent transition-all ease-in py-2 px-2 rounded-md placeholder-black text-sm' placeholder='Phone Number'/>
              </div>
              <select name="" id="" className='w-full bg-white/60 outline-none focus:outline-accent transition-all ease-in py-2 px-2 rounded-md placeholder-black text-sm text-balck' >
                <option className='text-black' value="">Website/WebApps Developemt</option>
                <option className='text-black' value="">Mobile App</option>
                <option className='text-black' value="">UI/UX Design</option>
              </select>

              <textarea name="" id="" cols={10} rows={7} className='px-3 rounded-md bg-white/60 outline-none focus:outline-accent placeholder-black text-sm' placeholder='Type in your message here!'>

              </textarea>
              <button className='px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover transition-all ease-in-out  text-black text-md font-semibold'>Send Message</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contacts