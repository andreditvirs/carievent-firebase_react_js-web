import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function LandingPage (){

    const[dataTerpopulers, setDataTerpopulers] = useState([]);
    const[dataTerdekats, setDataTerdekats] = useState([]);

    useEffect(() => {
        axios.get('https://andreditvir01.github.io/carievent.json')
            .then(res => {
                setDataTerpopulers(res.data.terpopuler)
                setDataTerdekats(res.data.terdekat)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            <section className="container">
                <div className="card my-5">
                <div className="card-body ml-5">
                    <div className="row">
                    <div className="col-md-6 pl-5 mt-5">
                        <p className="title-hero">Cari Event Apa Minggu ini?</p>
                        <Link className="btn button-hero py-3 px-4" to="#" role="button">Cari Event Online</Link>
                        <p className="tagline mt-4">Rekomendasi bagi kalian yang #dirumahaja</p>
                    </div>
                    <div className="col-md-6">
                        <div className="middle">
                        <img className="image-hero" src="assets/image/events-hero.png" alt="ilustrasi event" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <div className="container mb-5">
                <div className="row justify-content-between">
                <div className="col">
                    <h2>Event Terpopuler</h2>
                </div>
                <div className="col text-right">
                    <p><Link to="#" style={{textDecoration: 'none'}}>lihat semua</Link></p>
                </div>
                </div>
                <div className="row">
                <div className="container-fluid">
                    <div id="carousel-event-terpopuler" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner row w-100 mx-auto py-1">
                        {
                            dataTerpopulers.map((data, index) => (
                                    <div className={index == 0 ? 'carousel-item col-md-3 active' : 'carousel-item col-md-3'}>
                                    <div className="card h-100">
                                    <img src={data.image_url} className="card-img-top embed-responsive-item"
                                    alt="event image" />
                                    <div className="card-img-overlay" style={{color: 'white'}}>
                                    <Link to="#">
                                        <i className="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                                    </Link>
                                    </div>
                                    <div className="card-body" style={{position: 'relative'}}>
                                    <p className="card-text m-1">{data.date}</p>
                                    <Link to="./event.html" target="_blank" style={{textDecoration: 'none'}}>
                                        <h6 className="card-title">{data.title.substr(0, 40)}</h6>
                                    </Link>
                                    <i className="fas fa-map-marker-alt"></i> {data.location.substr(0,30)}
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Link className="carousel-control-prev" to="#carousel-event-terpopuler" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#carousel-event-terpopuler" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link>
                    </div>
                </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row justify-content-between">
                <div className="col">
                    <h2>Dekat Surabaya, Jatim</h2>
                </div>
                <div className="col text-right">
                    <p><Link to="#" style={{textDecoration: 'none'}}>lihat semua</Link></p>
                </div>
                </div>
                <div className="row">
                <div className="container-fluid">
                    <div id="carousel-event-terdekat" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner row w-100 mx-auto py-1">
                    {
                        dataTerdekats.map((data, index) => (
                            <div className={index == 0 ? 'carousel-item col-md-3 active' : 'carousel-item col-md-3'}>
                                <div className="card h-100">
                                <img src={data.image_url} className="card-img-top embed-responsive-item"
                                alt="event image" />
                                <div className="card-img-overlay" style={{color: 'white'}}>
                                <Link to="#">
                                    <i className="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                                </Link>
                                </div>
                                <div className="card-body" style={{position: 'relative'}}>
                                <p className="card-text m-1">{data.date}</p>
                                <Link to="./event.html" target="_blank" style={{textDecoration: 'none'}}>
                                    <h6 className="card-title">{data.title.substr(0, 40)}</h6>
                                </Link>
                                <i className="fas fa-map-marker-alt"></i> {data.location.substr(0,30)}
                                </div>
                            </div>
                            </div>
                        ))
                    }
                    </div>
                        <Link className="carousel-control-prev" to="#carousel-event-terdekat" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </Link>
                        <Link className="carousel-control-next" to="#carousel-event-terdekat" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </Link>
                    </div>
                </div>
                </div>
            </div>


            <section>
                <div className="container mb-5">
                <div className="row justify-content-between mb-3">
                    <div className="col">
                    <h2>Kategori</h2>
                    </div>
                </div>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/petualangan.png" alt="petualangan" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Petualangan</p>
                            <p className="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/teknologi.png" alt="teknologi" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Teknologi</p>
                            <p className="card-counter-kategori">87 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/keluarga.png" alt="keluarga" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Keluarga</p>
                            <p className="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/kesehatan.png" alt="kesehatan" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Kesehatan</p>
                            <p className="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/olahraga.png" alt="olahraga" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Olahraga</p>
                            <p className="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/fotografi.png" alt="fotografi" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Fotografi</p>
                            <p className="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/kuliner.png" alt="kuliner" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Kuliner</p>
                            <p className="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/kesenian.png" alt="kesenian" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Kesenian</p>
                            <p className="card-counter-kategori">87 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Musik</p>
                            <p className="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Musik</p>
                            <p className="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Musik</p>
                            <p className="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col col-lg-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body py-1 px-4">
                        <div className="row">
                            <div className="col-sm-4 p-0">
                            <img className="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div className="col-sm-8 my-auto h-100">
                            <p className="card-title-kategori">Musik</p>
                            <p className="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;