import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Caption</td>
            <td><a target='_blank' href="https://www.youtube.com/watch?v=4TyJ4EeDacA">https://www.youtube.com/watch?v=4TyJ4EeDacA</a></td>
            <td>9/11/2024, 11:53:43 AM GMT+5:30</td>
            <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
