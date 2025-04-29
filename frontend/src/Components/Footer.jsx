import React from 'react'

export default function Footer() {
  return (
    <div className="container">
    <footer className="bg-dark text-light text-center py-3 mt-auto" style={{ width: "100%", position: "fixed", bottom: 0, left: 0 }}>
    <p>&copy; {new Date().getFullYear()} Hospital Management System. All Rights Reserved.</p>
    <p>
      <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a> | 
      <a href="/terms" className="text-light text-decoration-none"> Terms of Service</a>
    </p>
  </footer>
  </div>
  )
}
