import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/'>Back to Home Page</Link>
    </div>
  )
}