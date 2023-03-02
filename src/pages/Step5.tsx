import thankYou from './../public/icon-thank-you.svg'

export const Step5 = () => (
  <div className="flex w-full flex-col gap-4 rounded-lg bg-white py-20 px-6 text-center text-blue-marine shadow-lg">
    <img src={thankYou} alt="thank you icon" className="h-16" />
    <h1 className="text-2xl font-bold">Thank you!</h1>
    <p className="text-gray-cool">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com
    </p>
  </div>
)
