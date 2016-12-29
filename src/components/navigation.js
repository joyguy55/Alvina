import React from 'react'
import { connect } from 'react-redux'

import About from './about/about.js'
import Contribute from './contribute/contribute.js'
import Landing from './landing/landing.js'
import Vote from './vote-form/vote.js'
import RankChart from './rank-chart/rank.js'

import './style.scss'
import { BrowserRouter, Match, Miss, Link, NoMatch } from 'react-router'

const Navigation = (props) => (
  <BrowserRouter>
    <div className="navigation">
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        { props.App.rankList.length === 0 ? null : <li><Link className="link" to="/rank-chart">My Top Pics</Link></li> }
      </ul>
      <Match exactly pattern="/" component={Landing} />
      <Match pattern="/about" component={About} />
      <Match pattern="/Contribute" component={Contribute} />
      <Match pattern="/vote-form/:id" component={Vote} />
      <Match pattern="/rank-chart" component={RankChart} />
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
)

export default connect(
  function mapStateToProps(store){
     return store
  },
  // dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(Navigation)

//<li><Link className="link" to="/vote-form">Vote</Link></li>
