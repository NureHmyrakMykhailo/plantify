import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon
} from "./icon"

export const Footer = () => (
  <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <img
          className="h-7"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
          alt="Plantify"
        />
        <p className="text-sm leading-6 text-gray-600">
          Where plant lovers connect and thrive.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400">
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="size-6" aria-hidden="true" />
          </a>
          <a href="#" className="text-gray-400">
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="size-6" aria-hidden="true" />
          </a>
          <a href="#" className="text-gray-400">
            <span className="sr-only">X</span>
            <TwitterIcon className="size-6" aria-hidden="true" />
          </a>
          <a href="#" className="text-gray-400">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="size-6" aria-hidden="true" />
          </a>
          <a href="#" className="text-gray-400">
            <span className="sr-only">YouTube</span>
            <YouTubeIcon className="size-6" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  API Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Claim
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-xs leading-5 text-gray-500">
        &copy; 2024 Plantify, Inc. All rights reserved.
      </p>
    </div>
  </div>
)
