# Script which creates ReactJS component 
# according to `index.[js|css]` convention.

# Standart imports
import click
import os
import re

CSS_TEMPLATE = """.NAME {
  margin: auto;
}
"""

CLASS_TEMPLATE = """import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import './index.css'


class NAME extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="NAME">
        // Your code here
      </div>
    )
  }

}

export NAME
"""

FUNCTION_TEMPLATE = """import PropTypes from 'prop-types'
import React     from 'react'

import './index.css'

const NAME = ({ prop }) =>
  <div>
  </div>

NAME.propTypes = {}
NAME.defaultProps = {}

export { NAME }
"""

TEST_TEMPLATE = """import React    from 'react'
import ReactDOM from 'react-dom'

import { NAME } from './index.js'

it('NAME renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NAME />, div)
})
"""

@click.command()
@click.option(
    '-f',
    '--function',
    is_flag=True,
    help='generate function-component'
)
@click.argument('name')
def cli(name, function):
    JS_TEMPLATE = CLASS_TEMPLATE

    if function:
        JS_TEMPLATE = FUNCTION_TEMPLATE
        
    os.mkdir(name)
    inputs = [
        ('/index.css', CSS_TEMPLATE),
        ('/index.js', JS_TEMPLATE),
        ('/test.js', TEST_TEMPLATE)
    ]

    for filename, template in inputs:
        with open(name + filename, 'a') as f:
            f.write(re.sub(r'NAME', name, template))
