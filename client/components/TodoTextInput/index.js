
import React, { Component } from 'react'
import classnames from 'classnames'
import { css } from 'aphrodite';
import styles from './style'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    const text = e.target.value.trim()
    if (!this.props.newTodo) {
      this.props.onSave(text)
    }
  }

  render() {
    const classes = classnames({
      [css(styles.edit)]: this.props.editing,
      [css(styles.new)]: this.props.newTodo
    })

    return (
      <input className={classes}
        type="text"
        autoFocus="true"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={::this.handleBlur}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit} />
    )
  }
}

export default TodoTextInput