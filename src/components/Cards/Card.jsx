import React from 'react'
import Subscribe from '../Buttons/Subscribe'
import BestOffer from '../Buttons/BestOffer'
import { motion } from 'framer-motion';


const Card = ({icon, title, price, offers, type}) => {
  
  const [priceValue, pricePeriod] = price.split(' / ');

  return (
    <section className={`
    border border-[#E7EBFF] rounded-3xl h-full  
    ${type === 'main' ? 'bg-[#A3D7FD]' : ''}
    `}>
      <aside className={`flex flex-col text-start gap-2 rounded-3xl 
          ${type === 'main' ? 'bg-mainCard' : ''}

      `}>
        <div className={` p-8 rounded-3xl flex flex-col gap-[36px] object-cover bg-top
          ${type === 'main' ? 'bg-template' : 'bg-cardBg'}
          ${type === 'main' ? 'shadow-card' : ''}

        `}>
        <div className="flex flex-col gap-[23px] ">
          <div className='flex flex-col gap-[12px]'>
            <img className="w-fit" src={icon} alt="{icon}" />
            <h2 className="flex gap-3 text-white text-4xl">{title}
            {type === 'main' ? <BestOffer/> : ''}
            </h2>
            
            <motion.p className="text-white"
          initial="initial"
          animate="animate"
          key={price} 
          variants={{
            initial: {
              opacity: 0,
              y: 12,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.4,
            delay: 0.1 * 0.05,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
            >
              <span className="text-5xl">{priceValue}</span> / {pricePeriod}</motion.p>

            <hr className='border-1 border-transparent border-dashed border-gradient mt-1'/>
          </div>
          <div className="flex flex-col gap-[9px]">
          {offers.map((offer, index) => (
              <span className="flex text-white items-center gap-3" key={index} dangerouslySetInnerHTML={{ __html: offer }}></span>
            ))}
          </div>
        </div>
        <div>
          <Subscribe type={type == 'main' ? 'best' : ''} />
        </div>
        </div>
      </aside>
    </section>
  )
}

export default Card
