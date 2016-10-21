/**
 * Created by zhu on 16/10/19.
 */
//var greeter = require('./Greeter.js');
//document.getElementById('root').appendChild(greeter());

import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter.js'

import './main.css'

render(<Greeter/>, document.getElementById('root'))