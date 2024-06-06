"use client"

import React from "react"
import { navigation } from "@/config/navigation"
import { CloseIcon, MenuIcon } from "./icon"

export const Header = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="container relative flex items-center justify-between py-6"
        aria-label="global"
      >
        <a href="/" className="p-1.5">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Plantify"
          />
        </a>

        <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <button
            type="button"
            className="flex justify-center items-center rounded-md p-2.5 text-gray-700 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="size-6" aria-hidden="true" />
          </button>

          <a
            href="#download"
            className="hidden text-sm font-semibold leading-6 text-gray-900 lg:block"
          >
            Download <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Menu */}

      {open && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Plantify"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#download"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
