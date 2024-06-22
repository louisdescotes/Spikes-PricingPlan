import React, { useState } from 'react'
import Offers from './components/Buttons/Offers'
import Card from './components/Cards/Card'
import Abonnement from './components/Buttons/Abonnement'

const App = () => {
  const [active, setActive] = useState('button1')

  const handleButton = (name) => {
    setActive(name)
  }

  const card1 = {
    "icon": "Icon.png",
    "title": "Essentiel",
    price: active === 'button1' ? "$179 / month" : "$159 / year",
    "offers": [
        "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +2500 vues/mois",
        "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +60 clics sur votre site",
        "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +15 appels/mois",
        "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +15 demandes d'itinéraires",
        "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> Plus de visibilité sur Google",
        "Réponse aux avis google inclus"
    ],
    "type": ""
  }
  const card2 = {
    "icon": "2.png",
          "title": "Ultime",
          price: active === 'button1' ? "$439 / month" : "$419 / year",
          "offers": [
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +6500 vues/mois",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +200 clics sur votre site",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +40 appels/mois",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +40 demandes d'itinéraires",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> Plus de visibilité sur Google",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> Réponse aux avis google inclus",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> 1 shooting",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> QR code personnalisé"
          ],
          "type": "main"
  }
  
  const card3 = {
    "icon": "Icon.png",
          "title": "Premium",
          price: active === 'button1' ? "$319 / month" : "$299 / year",
          "offers": [
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +11 000 vues/mois",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +500 clics sur votre site",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +80 appels/mois",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> +80 demandes d'itinéraires",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> Plus de visibilité sur Google",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> Réponse aux avis google inclus",
              "<svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.68457 6.97513C8.91572 13.0493 10.3619 12.76 15.8576 1.76871\" stroke=\"white\" stroke-width=\"1.65283\" stroke-linecap=\"round\"/></svg> 1 shooting",
              "Réponse aux avis google inclus"
          ],
          "type": ""
  }

  return (
    <main className="text-center flex items-center flex-col py-6">
      
    <Offers />
    <div className="py-6">
      <h2 className="text-white text-[55px] leading-[70px]">Des prix en accord avec <br></br>
        <span className="text-transparent bg-linearText bg-clip-text">notre vision</span>
      </h2>
    </div>

    <div className="flex gap-3 pb-10">
      <Abonnement 
      title="Paiement Mensuel"
      active = {active === 'button1'}
      onClick={() => handleButton('button1')}
      />
      <Abonnement 
      title="Paiement Annuel (-20%)"
      active = {active === 'button2'}
      onClick={() => handleButton('button2')}
      />
    </div>

    <div className="flex gap-8">
      <Card {...card1}/>
      <Card {...card2}/>
      <Card {...card3}/>
    </div>
    <div className="fixed bottom-[800px] bg-[#1241C566] blur-[100px] w-32 h-[120%] -rotate-45 rounded-full -z-10"></div>
    <div className="fixed -bottom-[200px] bg-[#1241C566] blur-[100px] w-32 h-[120%] -rotate-45 rounded-full -z-10"></div>
    </main>
  )
}

export default App

