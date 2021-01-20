import React from 'react';
import {Link} from 'react-router-dom';

const ModalDaftar = () => {
    return (
            <div className="modal fade text-center" id="daftar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header mt-2" style={{border: 'none'}}>
                    <h3 className="modal-title col text-center ml-5 p-0" id="exampleModalLongTitle"
                        style={{fontWeight: '500', color: '#0d1b2a'}}>Daftar</h3>
                    <button type="button" className="close col-sm-2 p-0" data-dismiss="modal" aria-label="Close">
                        <div className="mx-auto" style={{paddingTop: '35%'}}>
                        <i className="fas fa-times fa-1x" style={{color:  '#778da9'}}></i>
                        </div>
                    </button>
                    </div>
                    <div className="modal-body">
                    <form className="mx-5">
                        <div className="form-row">
                        <input type="text" className="form-control" placeholder="Nama Anda" />
                        </div>
                        <div className="form-row mt-2">
                            <input type="email" className="form-control" placeholder="Alamat Email" />
                        </div>
                        <div className="form-row mt-2">
                            <input type="password" className="form-control" placeholder="Kata Sandi" />
                        </div>
                        <div className="form-row mt-2">
                        <i className="fas fa-map-marker-alt mr-1"></i>Surabaya, Jatim
                        <Link to="#">&nbsp;(Ubah)</Link>
                        </div>
                        <div className="form-row text-left mt-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="agreementCheck" />
                            <label className="form-check-label pb-2" for="agreementCheck" style={{fontSize: '14px'}}>Saya setuju dengan syarat dan ketentuan yang berlaku</label>
                        </div>
                        </div>
                        <button type="button" className="btn bg-4 w-100 text-white text-medium">DAFTAR</button>
                    </form>
                    </div>
                    <div className="row px-4 ml-3">
                        <div className="col-5">
                        <hr style={{borderWidth: '1px'}} />
                        </div>
                        <span>Atau</span>
                        <div className="col-5">
                        <hr style={{borderWidth: '1px'}} />
                        </div>
                    </div>
                    <div className="modal-footer px-5 mb-4" style={{border: 'none'}}>
                        <button type="button" className="btn fb-color w-100 text-white text-medium">
                        <img src="assets/logo/facebook.png" style={{width: '6%' }} />
                        Daftar dengan Facebook
                        </button>
                        <button type="button" className="btn btn-outline-dark w-100 text-medium">
                        <img src="assets/logo/google.png" style={{width: '4%'}} className="mx-2" />
                        Daftar dengan Google
                        </button>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ModalDaftar;