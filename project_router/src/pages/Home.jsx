import img from '../Images/1.jpeg';
import img1 from '../Images/2.jpeg';
import img2 from '../Images/3.jpeg';
export default function Home(){
    return<>
    {/* <h1>This is Home Page</h1> */}

    <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={img} height={500} class="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
        <img src={img1} height={500} class="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
        <img src={img2} height={500} class="d-block w-100" alt="..."/>
    </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </>
}