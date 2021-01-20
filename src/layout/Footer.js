import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="cointainer p-5">
                <div className="row w-100">
                    <div className="col-md-4 p-4">
                    <div className="row pb-4">
                        <div className="col-sm-8">
                        <img src="./assets/image/carievent.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p><a href="">Masuk</a></p>
                    <p><a href="">Daftar</a></p>
                    </div>
                    <div className="col-md-4 p-4">
                    <h4 className="pb-2"><b>Temukan</b></h4>
                    <p><a href="">Topik</a></p>
                    <p><a href="">Kota</a></p>
                    <p><a href="">Bantuan</a></p>
                    </div>
                    <div className="col-md-4 p-4">
                    <div className="row pb-4 px-auto">
                        <div className="col-sm-4 px-0">
                        <img src="./assets/image/getinplaystore.png" alt="" width="140px" className="img-fluid" />
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6 px-0">
                        <img src="./assets/image/getinappstore.png" alt="" width="130px" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="pb-2 w-100"><b>Ikuti Kami</b></h4>
                        <div className="row w-100 px-4">
                        <img src="./assets/image/fb.png" alt="" width="10%" className="img-fluid" />
                        <img src="./assets/image/ig.png" alt="" width="10%" className="img-fluid mx-2" />
                        <img src="./assets/image/tw.png" alt="" width="10%" className="img-fluid mx-2" />
                        <img src="./assets/image/yb.png" alt="" width="10%" className="img-fluid mx-2" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            <section>
                <div className="row w-100 small-footer">
                <div className="col-md-6 text-center">
                    <a href=""><b>@2020</b> carievent.id</a>
                </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                    <div className="col-md-3">
                        <a href="">Aturan Pelayanan</a>
                    </div>
                    <div className="col-md-3">
                        <a href="">Kebijakan Privasi</a>
                    </div>
                    <div className="col-md-3">
                        <a href="">Kebijakan Cookie</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;