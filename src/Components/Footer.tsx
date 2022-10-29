import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="flex p-10 items-center justify-between w-[300px]">

        <div className="flex items-center">
        <img className="w-[40px] h-[40px] mr-4" src="/rock.png" alt="logo_rocketseat" />

        <div className="border-r-[2px]  border-[#F7DD43] w-[1px] h-[25px]"></div>

        </div>

        <a href="https://github.com/davihr1" target='_blank'>
          <img src="/github.png" alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/davihr/" target='_blank'>
          <img src="/linkedin.png" alt="github" />
        </a>
      </footer>
    )
  }
}
