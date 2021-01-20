import React, { Component } from 'react';

class CaraKerja extends Component{

    constructor(props){
        super(props)
        this.state = {
            nama: '',
            email: '',
            pesan: '',
            image: '',
            colorButton: '',
            ucapan: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            image: 'carakerja-thanks.png',
            colorButton: '#00BFA6',
            ucapan: 'Terima kasih, ada pertanyaan lain?'
        })
        alert('Terima kasih, ' + this.state.nama + '! Kami akan menghubungimu segera di ' + this.state.email + '.');
    }

    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        this.setState({
            image: 'carakerja-kontak.png',
            colorButton: '#778da9',
            ucapan: 'Kirim',
        })
    }

    render(){
        const {image} = this.state
        const {colorButton} = this.state
        const {ucapan} = this.state
        return (
            <div>
                <section className="container">
                    <div className="card my-5">
                        <div className="card-body ml-5">
                        <div className="row">
                            <div className="col-md-6 pl-5 mt-4">
                            <p className="title-hero" style={{fontSize: '30px'}}>Carievent adalah media informasi dan manajemen event terbaik</p>
                            <p className="tagline">Kembangkan kreativitas kalian di tengah pandemi saat ini</p>
                            <a className="btn button-title-carakerja py-3 px-4" href="#" role="button">Gabung Sekarang</a>
                            </div>
                            <div className="col-md-6">
                            <div className="middle">
                                <img className="image-hero" src="./assets/image/carakerja/title.png" alt="ilustrasi event" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="cointainer carakerja">
                    <div className="row">
                        <div className="col-lg-6 my-4">
                        <div className="card p-5">
                            <img className="image-hero px-5" src="./assets/image/peserta.png" alt="ilustrasi peserta" />
                            <h4 className="mx-auto my-4">Peserta</h4>
                            <div className="row peserta">
                            <div className="col-12 my-1">
                                <i className="fa fa-search text-28 color-3 my-auto mx-auto"></i>
                                <span>Temukan</span>
                            </div>
                            <div className="col-12 d-flex my-1">
                                <span className="my-auto ml-auto">Tandai</span>
                                <i className="fa fa-bookmark text-28 color-3 my-auto mx-2"></i>
                            </div>
                            <div className="col-12 my-1">
                                <i className="fa fa-user-check text-28 color-3 my-auto mx-auto"></i>
                                <span>Hadiri</span>
                            </div>
                            <div className="col-12 my-1 d-flex">
                                <span className="my-auto ml-auto">Bagikan</span>
                                <i className="fa fa-share-alt text-28 color-3 my-auto mx-2"></i>
                            </div>
                            </div>
                        </div>
                        </div>
    
                        <div className="col-lg-6 my-4">
                        <div className="card p-5">
                            <img className="image-hero px-5" src="./assets/image/penyelenggara.png" alt="ilustrasi penyelenggara" />
                            <h4 className="mx-auto my-4">Penyelenggara</h4>
                            <div className="row mb-3">
                            <div className="col-12 my-2">
                                <div className="row">
                                <div className="col-1 mr-1">
                                    <i className="fa fa-calendar-day text-24 color-3 my-auto mx-auto"></i>
                                </div>
                                <div className="col-10">
                                    <span>Selenggarakan event</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div className="row">
                                <div className="col-1 mr-1">
                                    <i className="fa fa-ticket-alt text-24 color-3 my-auto mx-auto"></i>
                                </div>
                                <div className="col-10">
                                    <span>Manajemen tiket dan kelola penjualan</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div className="row">
                                <div className="col-1 mr-1">
                                    <i className="fa fa-file-alt text-28 color-3 my-auto mx-auto"></i>
                                </div>
                                <div className="col-10">
                                    <span>Dapatkan laporan akhir dari event Anda</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
    
                    <section className="container">
                    <div className="card my-5 p-2">
                    <div className="card-body ml-5">
                        <div className="row">
                        <div className="col-md-4">
                            <div className="middle">
                            <img className="image-hero" src={ './assets/image/' + image} alt="ilustrasi kontak" />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5 mt-4">
                            <h3>Masih bingung?</h3>
                            <p>Jangan ragu, langsung aja hubungi kami!</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Nama" name="nama" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="col">
                                    <input type="email" className="form-control" placeholder="Alamat Email" name="email" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-row mt-2">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Pesan" name="pesan" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <input type="submit" style={{ backgroundColor: colorButton, borderRadius: '10px', color: 'white', fontSize: '12px' }} className="w-100 btn py-3 px-4 mt-4" value={ucapan}/>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CaraKerja;