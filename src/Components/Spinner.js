import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
    <div className="d-flex justify-content-center">
  <div className="spinner-border text-danger my-3" role="status">
  </div>
</div>
      </div>
    )
  }
}
