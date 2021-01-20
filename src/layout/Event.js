import React from 'react';
import {Link} from 'react-router-dom';

const Event = () => {
    return (
        <div className="m-0 mt-5 p-0">
            <section id="title-event">
                <div className="container py-5">
                <div className="row w-100">
                    <div className="d-flex mx-2" style={{paddingTop: '8px'}}>
                    <i className="fas fa-bookmark fa-2x float-right" style={{color: '#e0e1dd'}}></i>
                    </div>
                    <h1>SEO Starter Guide</h1>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-sm-1 p-0">
                    <img src="./assets/image/title-event/gambar.jpg" style={{float: 'right'}} width="50"
                        className="img-fluid border rounded-circle "/>
                    </div>
                    <div className="col-sm-7 my-auto">
                    <p style={{margin:'0', padding:'0',fontSize: '10px'}}>Diselenggarakan oleh</p>
                    <h6 style={{margin:'0', padding:'0',fontWeight: 'bold'}}>Nova Andre Saputra</h6>
                    </div>
                    <div className="col-sm-4 d-flex">
                    <h5 className="my-auto mx-2">Gratis</h5>

                    <div className="my-auto d-flex mx-2">
                        <Link to="#" className="btn bg-3 button-hadir my-2 ml-auto px-4">Hadir</Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="main">
                <div className="row w-100">
                <div className="col-md-8">
                    <section id="event-description" className="mx-5 my-5">
                    <img src="./assets/image/event-poster/event-poster-1.png" alt="event-poster" width="350px " className="mb-3" />
                    <h4>Deskripsi Event</h4>
                    <p>Mesin pencarian Gogle memproses miliaran pernelusuran web setiap hari.</p>
                    <p>Beberapa dari pencarian tersebut mungkin berhubungan dengan bisnis Anda, apa langkah yang bisa Anda lakukan
                        untuk mengoptimalkan situs web acara Anda sehingga mendapat peringkat di mesin pencari populer.</p>
                    <p>Acara ini dikemas sederhana, step by step dan bisa langsung Anda terapkan</p>
                    <p>diri Anda dan bangun reputasi untuk nama domain Anda</p>
                    </section>
                </div>
                <div className="col-md-4">
                    <section id="sidebar-detail-event" className="cointainer my-5">
                    <div className="card mx-2">
                        <div className="card-body px-4 my-4">
                        <h3 className="mb-4">Detail Event</h3>
                        <div className="my-2">
                            <div className="row">
                            <div className="col col-sm-3 mx-1">
                                <div className="d-flex">
                                <i className="fas fa-calendar" style={{color: '#0d1b2a', fontSize: '20px'}}></i>
                                <p className="ml-2" style={{fontSize: '18px', fontWeight: '500'}}>Tanggal</p>
                                </div>
                            </div>
                            <div className="col">
                                <p className="ml-2" style={{fontSize: '18px'}}>Rabu, 27 Oktober 2021</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col col-sm-3 mx-1">
                                <div className="d-flex">
                                <i className="fa fa-clock" style={{color: '#0d1b2a', fontSize: '20px'}}></i>
                                <p className="ml-2" style={{fontSize: '18px', fontWeight: '500'}}>Waktu</p>
                                </div>
                            </div>
                            <div className="col">
                                <p className="ml-2" style={{fontSize: '18px'}}>19.30 - 21.30 WIB</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col col-sm-3 mx-1">
                                <div className="d-flex">
                                <i className="fa fa-map-marker" style={{color: '#0d1b2a', fontSize: '20px'}}></i>
                                <p className="ml-2" style={{fontSize: '18px', fontWeight: '500'}}>Lokasi</p>
                                </div>
                            </div>
                            <div className="col">
                                <p className="ml-2" style={{fontSize: '18px'}}>Surabaya</p>
                            </div>
                            </div>
                        </div>
                        <p className="mb-2" style={{fontSize: '18px'}}>Peserta Event</p>
                        <div className="d-flex w-100 h-100">
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                            <div className="col p-0 mx-1">
                            <img src="./assets/image/title-event/gambar.jpg" width="50" className="img-fluid border rounded-circle " />
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section id="sidebar-komentar" className="cointainer my-5">
                    <div className="card mx-2">
                        <div className="card-body px-4">
                        <h3 className="mb-4">Komentar</h3>
                            <div className="komentar my-2">
                            <div className="row">
                                <div className="col-3 d-flex">
                                <img src="./assets/image/septi.jpg" className="user-image border rounded-circle my-auto" />
                                </div>
                                <div className="col-6 px-2">
                                <h6>Septian</h6>
                                <p className="text-12 mb-0">Install tools apa aja ini ? buat persiapan</p>
                                </div>
                                <div className="col-3 d-flex">
                                <i className="fa fa-reply text-28 color-3 my-auto mx-auto"></i>
                                </div>
                            </div>
                            </div>

                        <div className="d-flex">
                            <div className="reply-komentar my-2 ml-auto">
                            <div className="row">
                                <div className="col-4 d-flex">
                                <img src="./assets/image/nab.jpg" className="user-image border rounded-circle my-auto" />
                                </div>
                                <div className="col-7 px-2">
                                <h6>Nabs</h6>
                                <p className="text-12 mb-0">Pakai vscode aja sep</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <hr />

                        <form className="form-inline mx-auto w-100">
                            <input className="form-control w-100 border-rounded" type="text" placeholder="Tuliskan Komentar Anda"
                            aria-label="Search" />
                        </form>

                        <div className="d-flex">
                            <Link to="#" className="btn bg-3 button-kirim my-2 ml-auto px-4">Kirim</Link>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Event;