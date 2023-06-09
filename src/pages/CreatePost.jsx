import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import preview from '../assets/preview.png';
import {getRandomPrompt} from '../utils';
import { FormField,Loader} from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form , setForm]= useState({
    name:'',
    prompt :'',
    photo:'',
  });

  const handleSubmit=()=>{

  }

  const handleChange=(e)=>{

  }
  const handleSurpriseMe=()=>{

  }
  return (
    <section className='max-w-7xl mx-auto' >
    <div>
    <h1 className='font-extrabold text-[#222328] text text-[33px]'>Create</h1>
      <p className='mt-2 text-[#666e75] text-[16px] '>Create imaginative and visually stunning images through DALL-E AI and share them with community</p>
    </div>

    <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>

    <FormField 
    labelName="Your name"
    type="text"
    name ="name"
    placeholder="John doe"
    value={form.name}
    handleChange={handleChange}
    />
    <FormField 
    labelName="Prompt"
    type="text"
    name ="prompt"
    placeholder="A man standing in front of a stargate to another dimension"
    value={form.prompt}
    handleChange={handleChange}
    isSurpriseMe
    handleSurpriseMe={handleSurpriseMe}
    />
    </form>
    </section>
  )
}

export default CreatePost
