const App = () =>{
  return(
    <>
    <nav class="navbar navbar-expand-sm bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="..." alt="Bootstrap" width="30" height="24"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item me-2">
            <a class="nav-link text-light" href="#">¿Quienes somos?</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-light" href="#">Nuestra escuela</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-light" >Titulación</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-light" >Acuerdos Escolares</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
  )
}
export default App;