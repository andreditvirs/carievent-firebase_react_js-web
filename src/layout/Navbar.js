import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top">
        <Link className="navbar-brand" to="/#"><img className="nav-logo ml-5 my-3" src="assets/logo/carievent.png"
            alt="logo carievent" /></Link>
        <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <form className="form-inline w-50 mx-auto">
            <input className="form-control w-100" type="text" placeholder="Cari event disini" aria-label="Search" />
        </form>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active p-3">
            <Link className="nav-link text-center" to="/">Beranda <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item p-3">
            <Link className="nav-link text-center" to="/carakerja">Cara Kerja</Link>
            </li>
            <li className="nav-item p-3">
            <Link className="nav-link text-center" data-toggle="modal" data-target="#masuk">Masuk</Link>
            </li>
            <li className="nav-item daftar">
            <Link className="nav-link text-center" data-toggle="modal" data-target="#daftar">Daftar</Link>
            </li>
        </ul>
        </div>
    </nav>
    )
};

export default Navbar;