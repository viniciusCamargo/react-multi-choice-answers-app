import React from 'react'

export default (props) => (
  <div className="mb4">
    <label htmlFor="choice" className="f6 b db mb2">{ props.choiceId ? 'Edit Choice' : 'New Choice' }</label>
    <input
      type="text"
      id="choice"
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
      onKeyDown={(e) => (e.keyCode === 13) && props.handleClick()}
      className="border-box hover-black w-90 ba b--black-20 pa2 br2 mb2"/>

      <div>
        <a className="f6 link dim br1 ph3 pv2 mh1 dib white bg-dark-green" onClick={(e) => {
          e.preventDefault()

          props.handleClick()
        }} href={ props.choiceId ? 'edit' : 'new' }>{ props.choiceId ? 'edit' : 'new' }</a>
      </div>
  </div>
)