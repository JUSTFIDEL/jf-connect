import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Mail, PhoneCall } from 'lucide-react';
// import {
//   RegisterLink,
//   LoginLink,
// } from '@kinde-oss/kinde-auth-nextjs/components';

export default function Home() {
  // const loggedIn = useState(false);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 '>
      <main className='w-full'>
        <div className='flex flex-col items-center text-center mx-auto mb-10 py-5'>
          <div className='w-full sm:max-w-3xl px-10 py-5 drop'>
            <h1 className='text-3xl/8 font-extrabold text-center sm:text-5xl/15'>
              Comprehensive <span className='text-green-400'>Vehicle</span>{' '}
              Sourcing Service
            </h1>
            <p className='text-[#a6a5ca] text-base py-2'>
              Let us help you get a vehicle for yourself, your friends, or your
              loved ones
            </p>
          </div>

          <div className='flex flex-col w-full items-center gap-4 mt-6 md:flex-col xl:flex-row xl:items-start md:justify-between md:max-w-[1100px]'>
            <div className='flex gap-4 flex-1/2 px-4 mb-6'>
              <Card
                title='Camry'
                desc='2013'
                amount='5,000,000'
                image='/images/car1.jpg'
              />
              <Card
                title='Corolla'
                desc='2014'
                amount='15,000,000'
                image='/images/car2.jpg'
              />
              <Card
                title='Lexus'
                desc='2013'
                amount='25,000,000'
                image='/images/car3.jpg'
              />
            </div>

            <div className='flex flex-col gap-4 w-full md:max-w-[720px] xl:max-w-[450px] bg-[#1d1e30] flex-1/2 p-8 xl:rounded-sm'>
              <h1 className='text-2xl font-bold'>Sign Up for free</h1>
              <div className='flex relative'>
                <input
                  type='email'
                  placeholder='✉︎ Email address'
                  className='w-full gap-2 pl-8 p-2 bg-[#2f3043] outline rounded transparent text-[#8b8bb0] placeholder-gray-300'
                />
              </div>
              <Button
                variant='green'
                size='lg'
                className='p-4 font-bold text-[16px]'
              >
                Sign Up
              </Button>
              <h1 className='text-2xl font-bold mt-4'>or Sign In</h1>
              <div className='flex relative'>
                <input
                  type='email'
                  placeholder='✉︎ Email address'
                  className='w-full gap-2 pl-8 p-2 bg-[#2f3043] outline rounded transparent text-[#8b8bb0] placeholder-gray-300'
                />
              </div>
              <Button
                variant='green'
                size='lg'
                className='p-4 font-bold text-[16px]'
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        <section className='bg-yellow-50 my-10'>
          <div className='mx-10'>Hello</div>
        </section>
      </main>
    </div>
  );
}

// Best cars money can buy.

//
//  If yes, save yourself the stress, and let us handle it.
// Are You Buying a Car? If Yes, Let Us Handle Everything For You Professionally! Our Expert Services Include:1. Comprehensive Mechanical, Electrical, Etc. Checks.2. Verification and Confirmation of Registration Document, Custom Duty, Owner, Etc.3. OPTIONAL Repairs, Upgrades, and Servicing for a Smooth Ride.4. Assistance with Vehicle Change of Ownership or Registration.5. Negotiation of Price for Real Value for Your Money.
// We Are Committed to Providing You with a Hassle-Free Experience; Get Your Dream Car Through Us And Be Glad You Did. Call/Whatsapp us on 08103884330 or 08121146164 or click here => https://wa.me/2348103884330 to chat immediately with us on Whatsapp.
// There are quite a few reasons people regret buying used vehicles. Some of the reasons are;1. The vehicle has been overhyped by the intending seller, hence they see no reason to even get it inspected before purchase; some may even believe since they are buying it from a close relative, they don't need it.2. As little as the cost of inspection, some people feel they don't need to pay extra by engaging a professional inspector to get it inspected; this we have encountered with numerous customers/clients.3. Yet another reason most people regret buying a used vehicle is that they go with a mechanic instead of a private vehicle inspector having lots of experience and tools, and above all, has a name or brand to protect.
// Nevertheless, trying to buy a car can be cumbersome and risky in the sense that;1. It is so easy to buy a packaged one; put together to look good only to break down in a matter of days.2. Going with your so-called trusted mechanic has no guarantee (your mechanic can strike a deal behind your back to ensure you buy the car so he can get a commission from the seller) plus he will keep fixing the car anyways; so it’s a win-win for the mechanic.3. Car sellers, dealers, or marketers are everywhere; moving from one to another and getting disappointed at what you see (online pictures can be so deceptive) can be tiring and require days to get what you like.4. Stolen or smuggled cars could be sold to you or bought by you without knowing.5. You could be scammed/defrauded or be given exorbitant prices that do not justify the grade or market value of the car.
// What we do1. We source vehicles from Nigeria, USA, Canada, and South Korea based on your preference and budget.2. We run complete diagnostics and checks on the vehicles that fit your specifications.3. We recommend the best one(s) to choose and buy.
// What makes us different1. For us, integrity is key because we believe nothing sells a business better than ‘word of mouth referral’. We strongly believe offering you quality service will bring more business our way when you tell friends and family about getting and enjoying the car.2. We will professionally check and confirm necessary things on all cars sourced before we give you the go-ahead to buy.3. We know about cars and what to look out for.4. We are transparent and won't have to hide anything from you.5. Our business/company Autos and Cartalk (Limited) are duly registered with the Corporate Affairs Commission of the Federal Republic of Nigeria, have from EFCC, and have been offering this service for years.
// What you need to doCall or WhatsApp us on 08050844033 or 07083359999 or click here => https://wa.me/2348050844033 to chat with us on Whatsapp. You can meet us at our head office situated at 71a Shyllon Street. Palmgrove, Lagos. We are also in Abuja at Lugbe FHA Estate, Kubwa Expressway, and Gwarinpa.We are also available in Akure, Port Harcourt, Enugu, and possibly, Benin City.
// Cost of sourcing Foreign used a.k.a tokunbo vehicles from NigeriaN200,000 for SEDANs below 2008 modelN250,000 for SEDANs between 2008-2011 modelsN300,000 for 2012-2015 SEDANsN400,000 for 2016 and above SEDANsN250,000 for SUVs below 2008 modelN300,000 for SUVs between 2008-2011 modelsN350,000 for 2012-2015 SUVsN450,000 for 2016 and above SUVs
// Cost of sourcing Nigerian used vehicles from NigeriaN300,000 for SEDANs below 2008 modelN350,000 for SEDANs between 2008-2011 modelsN400,000 for 2012-2015 SEDANsN500,000 for 2016 and above SEDANsN400,000 for SUVs below 2008 modelN450,000 for SUVs between 2008-2011 modelsN500,000 for 2012-2015 SUVsN600,000 for 2016 and above SUVsThe charges will be higher for high-value, luxury, and German vehicles. You can also call us for other cars/vehicles not included above. Kindly note that our corporate service charge does not cover delivery.You will get feedback within 72 hours, and we will have at least a vehicle ready for you to see and inspect before paying.
// Cost of sourcing vehicles from USA, Canada, and South KoreaKindly call or WhatsApp us on 08050844033 or 07083359999 or click here => https://wa.me/2348050844033 to chat with us on WhatsApp regarding this.
// Terms and conditions for sourcing vehicles from Nigeria
// 1. We source cars/vehicles in Nigeria, put them in good shape, and make them available in a maximum of two(2) weeks. You can take home your car/vehicle as it is, but we advise you to drive it yourself, use your driver, or better still, use the service of any reputable trucking company (we know some of them and we are trying to see how we can officially partner with them).Note that if you hastily take it home without us helping to check, observe, and possibly fix or service some things, you take full responsibility for whatever comes up. Because cars/vehicles are machines that could develop defect(s) or fault(s) in the next minutes, even if they were in perfect condition before, we cannot be responsible for defect(s) or defect(s), even though we always try to make them be in ideal condition before handing over to owners, drivers or trucks. But trust us, we will offer our utmost support and contribution in case anything comes up.
// 2. If you want to pull out for whatever reason, please do so within 48 hours so we can issue you 50% of the corporate charge, while more extended time reduces the percentage. Note that we won't refund any amount if you decide to pull out after seven days. We must have worked for you and possibly presented some cars/vehicles to you.
// 3. We expect you to have the speculated amount of the vehicle available for transfer so that you can pay on time as soon as we certify a particular one for you. We advise payment to be sent to us within one hour or, at most, 24 hours because we won't be responsible if the vehicle is sold due to the delay in sending money. Note that you might need to pay another corporate charge to get your other ones if the ones we previously certified for you got sold because you delayed payment.
