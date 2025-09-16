import Paragraph from '../Elements/Paragraph'
import Button from '../Elements/Button'
import Header from '../Elements/Header'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = field => {
    setFocused({ ...focused, [field]: true })
  }

  const handleBlur = field => {
    setFocused({ ...focused, [field]: false })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // contoh validasi sederhana
    let newErrors = {}
    if (!form.name.trim()) newErrors.name = "name can't empty"
    if (!form.email.trim()) newErrors.email = "email can't empty"
    if (!form.message.trim()) newErrors.message = "message can't empty"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      e.target.submit() // biar lanjut ke formsubmit.co
    }
  }

  return (
    <form
      action='https://formsubmit.co/delricolie111@gmail.com'
      method='POST'
      onSubmit={handleSubmit}
    >
      <div
        className='mt-36 text-left scroll-mt-16 md:scroll-mt-32'
        id='contact'
      >
        <Header>contact</Header>
        <Paragraph>
          leave a message. or don't. i'll read it… eventually.
        </Paragraph>

        <div className='bg-3 text-white px-4 py-8 mt-8 max-w-[600px] mx-auto'>
          {/* Name */}
          <div className='relative mb-6'>
            <label
              htmlFor='name'
              className={`absolute text-1 duration-150
              ${
                focused.name || form.name
                  ? '-top-[10px] left-2 px-2 py-0 text-sm bg-3'
                  : 'p-2'
              }`}
            >
              input your name...
            </label>
            <input
              autoComplete='off'
              type='text'
              name='name'
              id='name'
              className='text-white block w-full border-b border-1 p-2 rounded-xs focus:border focus:border-2 focus:outline-0'
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-2'>{errors.name}</p>
            )}
          </div>
          {/* Email */}
          <div className='relative mb-6'>
            <label
              htmlFor='email'
              className={`absolute text-1 duration-150
              ${
                focused.email || form.email
                  ? '-top-[10px] left-2 px-2 py-0 text-sm bg-3'
                  : 'p-2'
              }`}
            >
              input your email...
            </label>
            <input
              autoComplete='off'
              type='email'
              name='email'
              id='email'
              className='text-white block w-full border-b border-1 p-2 rounded-xs focus:border focus:border-2 focus:outline-0'
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mb-2'>{errors.email}</p>
            )}
          </div>
          {/* Message */}
          <div className='relative mb-6'>
            <label
              htmlFor='message'
              className={`absolute text-1 duration-150
              ${
                focused.message || form.message
                  ? '-top-[10px] left-2 px-2 py-0 text-sm bg-3'
                  : 'p-2'
              }`}
            >
              input your message...
            </label>
            <textarea
              name='message'
              id='message'
              className='text-white block w-full border-b border-1 p-2 rounded-xs focus:border focus:border-2 focus:outline-0 resize-none'
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className='text-red-500 text-sm mt-2'>{errors.message}</p>
            )}
          </div>
          <Button
            onSubmit='true'
            ri='send-plane'
            classname='hover:bg-1! hover:text-3! mt-12 w-full'
          >
            send
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Contact
