import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header
    <Link to="/dashboard"><button>DashBoard</button></Link>
    <Link to="/form"><button>Form</button></Link>
    </div>
  )
}
