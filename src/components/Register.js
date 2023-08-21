/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="px-6 py-24 isolate sm:py-32 lg:px-8 w-[500px]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Please Fill out the form to Register!</p>
      </div>
      <form action="#" method="POST" className="max-w-xl mx-auto mt-10 sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-left text-gray-900">
              Full Name:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="border border-[#656ED3] block w-full rounded-xl bg-transparent px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-left text-gray-900">
              Username:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="border border-[#656ED3] block w-full rounded-xl bg-transparent px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-left text-gray-900">
              Email:
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="company"
                id="company"
                autoComplete="organization"
                className="border border-[#656ED3] block w-full rounded-xl bg-transparent px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-left text-gray-900">
              Password:
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="email"
                id="email"
                autoComplete="email"
                className="border border-[#656ED3] block w-full rounded-xl bg-transparent px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-left text-gray-900">
              Password confirm:
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="email"
                id="email"
                autoComplete="email"
                className="border border-[#656ED3] block w-full rounded-xl bg-transparent px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            type="submit"
            className="block w-full rounded-md bg-[#656ED3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to="/signup"
          >
            Register
          </Link>
          <div className='flex flex-row justify-center w-full mt-3 font-medium'>Don't &nbsp;have &nbsp;account?&nbsp;          
          <Link
            className="font-bold"
            to="/"
          >
            Login
          </Link></div>
        </div>
      </form>
    </div>
  )
}
