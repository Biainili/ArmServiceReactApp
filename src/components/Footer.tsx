import React from 'react'

const Footer = () => {
  return (
    <section className="">

    <footer className="text-center text-white bg-dark">
      <div className="container-lg container-fluid p-4">
        <ul
          className="d-flex flex-column gap-4 gap-lg-0 flex-lg-row justify-content-between"
        >
          <li className="item_footer fs-5"><a href="">Declarations</a></li>
          <li className="item_footer fs-5">
            <a href="">Notarized translations</a>
          </li>
          <li className="item_footer fs-5">
            <a href="">Licenses and permits</a>
          </li>
          <li className="item_footer fs-5"><a href="">Accounting</a></li>
        </ul>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"
          >Mani Digital.com</a>
      </div>
    </footer>
  </section>

  )
}

export default Footer