import React from 'react'
import TelphonImg from '../../assets/img/telephone.png'
import WhatsApp from '../../assets/img/whatsapp.png'
import TelegramImg from '../../assets/img/telegram.png'
import EmailImg from '../../assets/img/email10.png'

const Contactus = () => {
  return (
    <section className="bg-secondary text-light p-md-5 p-4 text-center">
      <div className="container">
        <h1 className="mb-5 pt-md-0 pt-0 text-uppercase">Contact us</h1>
        <div className="container">
          <div className="row mb-md-5 mb-3 gap-3">
            <div className="col-md card-animation" style={{ animationDelay: '0s' }}>
              <div className="mb-3 bg-warning item_contact">
                <img src={TelphonImg} alt="Telephone" className="icon_size" />
                <a className="text_black">+374 33 55 75 65</a>
              </div>
            </div>
            <div className="col-md card-animation" style={{ animationDelay: '0.4s' }}>
              <div className="mb-3 bg-warning item_contact">
                <img src={WhatsApp} alt="WhatsApp" className="icon_size" />
                <a className="text_black">+374 33 55 75 65</a>
              </div>
            </div>
          </div>
          <div className="row gap-3">
            <div className="col-md card-animation" style={{ animationDelay: '0.8s' }}>
              <div className="mb-3 bg-warning item_contact">
                <img src={TelegramImg} alt="Telegram" className="icon_size" />
                <a className="text_black">+374 33 55 75 65</a>
              </div>
            </div>
            <div className="col-md card-animation" style={{ animationDelay: '1.2s' }}>
              <div className="mb-3 bg-warning item_contact">
                <img src={EmailImg} alt="Email" className="icon_size" />
                <a className="text_black">+374 33 55 75 65</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactus
