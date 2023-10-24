import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar mb-5 navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Restaurant</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item pe-5">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item pe-5">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item pe-5">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}
// export default function Navbar(){
//     return(
//         <>
            
//         </>
//     );
// }

//rfc
// rfce
// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar


