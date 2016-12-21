import React from 'react'
import About from './about/about.js'
import Contribute from './contribute/contribute.js'
import Landing from './landing/landing.js'
import VoteForm from './vote-form/vote-form.js'

import './style.css'
import { BrowserRouter, Match, Miss, Link, NoMatch } from 'react-router'

const Navigation = () => (
  <BrowserRouter>
    <div className="navigation">
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/donate">Affiliate</Link></li>
      </ul>
      <Match exactly pattern="/" component={Landing} />
      <Match pattern="/about" component={About} />
      <Match pattern="/contribute" component={Contribute} />
      <Match pattern="/vote-form/:id" component={VoteForm} />
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
)

export default Navigation

//<li><Link className="link" to="/vote-form">Vote</Link></li>
