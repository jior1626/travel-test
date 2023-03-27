import Carousel from 'react-bootstrap/Carousel';

function CarouselImg() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cf.bstatic.com/xdata/images/city/600x600/653391.jpg?k=0bc65ed59c5a0672f577c5394e7e31b173fc680205dee2a6a7abdb5ea1a53bee&o=" alt="First slide" />
        <Carousel.Caption >
          <h3>SANTA MARTA <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAbFBMVEX///8AAAAAAAAAAAAAAAD99ZD99Yr99Hv99ID983T98mX98mf98Vn98FH98Er87zz57Ur47EL26UD15znfKjDfJyzSKS/RJiwpSpbQIyjdHyQjR5fNHyQeQ5UgQo8cQZMbPYwQN44ONY0MM4wT/JElAAAABXRSTlMAESIzRJTdRHwAAABsSURBVBgZdcHBDcJAEATBnj4ZPvhD/vmZBGyQED4C2HWVXJALckHSwjxaMXwaRBKLgNgZCGmAxEaQxCJBYgqDLOuzWBdkSCHIMIU3RFIgcuzvYj+QhCJB5FsgMu6NgXN7NbbpPH+Nc8psIRf+NTyCMZ/nTM8AAAAASUVORK5CYII=" alt="" /></h3>
          <p>Playas cercanas: Playa Bello Horizonte •Playa Rodadero •Playa Taganga.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cf.bstatic.com/xdata/images/city/600x600/653338.jpg?k=685e6dfbea743087cddf602f58a8c48b567e82916d0e886dd104fb8348e96676&o=" alt="Second slide" />
        <Carousel.Caption>
          <h3>CARTAGENA DE INDIAS <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAbFBMVEX///8AAAAAAAAAAAAAAAD99ZD99Yr99Hv99ID983T98mX98mf98Vn98FH98Er87zz57Ur47EL26UD15znfKjDfJyzSKS/RJiwpSpbQIyjdHyQjR5fNHyQeQ5UgQo8cQZMbPYwQN44ONY0MM4wT/JElAAAABXRSTlMAESIzRJTdRHwAAABsSURBVBgZdcHBDcJAEATBnj4ZPvhD/vmZBGyQED4C2HWVXJALckHSwjxaMXwaRBKLgNgZCGmAxEaQxCJBYgqDLOuzWBdkSCHIMIU3RFIgcuzvYj+QhCJB5FsgMu6NgXN7NbbpPH+Nc8psIRf+NTyCMZ/nTM8AAAAASUVORK5CYII=" alt="" /></h3>
          <p>Playas cercanas:Playa de Bocagrande •Playa Castillo Grande •Playa de La Boquilla.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://cf.bstatic.com/xdata/images/city/600x600/976271.jpg?k=ebe00d9c88898745bf43492ba19644444460ab9b5943c9436e9fbbd87d219620&o=" alt="Third slide"  />
        <Carousel.Caption >
          <h3>PARQUE NACIONAL TAYRONA <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAbFBMVEX///8AAAAAAAAAAAAAAAD99ZD99Yr99Hv99ID983T98mX98mf98Vn98FH98Er87zz57Ur47EL26UD15znfKjDfJyzSKS/RJiwpSpbQIyjdHyQjR5fNHyQeQ5UgQo8cQZMbPYwQN44ONY0MM4wT/JElAAAABXRSTlMAESIzRJTdRHwAAABsSURBVBgZdcHBDcJAEATBnj4ZPvhD/vmZBGyQED4C2HWVXJALckHSwjxaMXwaRBKLgNgZCGmAxEaQxCJBYgqDLOuzWBdkSCHIMIU3RFIgcuzvYj+QhCJB5FsgMu6NgXN7NbbpPH+Nc8psIRf+NTyCMZ/nTM8AAAAASUVORK5CYII=" alt="" /></h3>
          <p>
            Conoce las mejpres playas de Colombia, historia de nuestros ancestros. Todo para compartir en familia y amigos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselImg;