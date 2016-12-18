import React from 'react'
import { render } from 'react-dom'

import About from './about/about.js'
import Donate from './donate/donate.js'
import Landing from './landing/landing.js'
import VoteForm from './vote-form/vote-form.js'

import './style.css'

// 1. import a few components
import { BrowserRouter, Match, Miss, Link, NoMatch } from 'react-router'

const Navigation = () => (
  // 2. render a `Router`, it will listen to the url changes
  //    and make the location available to other components
  //    automatically

  <BrowserRouter>
    <div className="navigation">

      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/donate">Affiliate</Link></li>
        <li><Link className="link" to="/vote-form">VoteForm</Link></li>
      </ul>

      <Match exactly pattern="/" component={Landing} />
      <Match pattern="/about" component={About} />
      <Match pattern="/donate" component={Donate} />
      <Match pattern="/vote-form" component={VoteForm} />

      {/* If none of those match, then a sibling `Miss` will render. */}
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
)

export default Navigation
