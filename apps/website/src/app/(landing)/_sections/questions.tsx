export const Questions = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-24 lg:px-8 lg:py-40">
      <div className="grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Can’t find the answer you’re looking for? Reach out to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              customer support
            </a>{" "}
            team.
          </p>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">Is there a free version of the Plantify app?</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, we offer a free version of the Plantify app with basic features like plant identification. Upgrading to our premium plans unlocks additional features like watering reminders and detailed care guides.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                What are the different payment options for the premium plans?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We offer flexible payment options for our premium plans, including monthly and annual subscriptions. Choose the option that best suits your needs.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Do I need to create an account to use the app?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                While not required for basic features, creating an account allows you to save your plants, access personalized recommendations, and benefit from our membership program.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Is the app safe for my data?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We take data privacy seriously. Your information is securely stored and never shared with third parties without your consent.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
