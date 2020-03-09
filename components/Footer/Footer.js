import React from 'react';
import Head from 'next/head';

import './footer.css';

export default function Footer(params) {
  return <div>
    <Head>
      <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' rel='stylesheet' type='text/css' />
      <link href='https://cdnjs.cloudflare.com/ajax/libs/fork-awesome/1.1.7/css/fork-awesome.min.css' rel='stylesheet' type='text/css' />
    </Head>
    <footer>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>IIIT Kota</h2>
              <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
              <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li>- <a href="#">Lorem ipsum</a></li>
                <li>- <a href="#">Nam mauris velit</a></li>
                <li>- <a href="#">Etiam vitae mauris</a></li>
                <li>- <a href="#">Fusce scelerisque</a></li>
                <li>- <a href="#">Sed faucibus</a></li>
                <li>- <a href="#">Mauris efficitur nulla</a></li>
                <li>- <a href="#">Lorem ipsum</a></li>
                <li>- <a href="#">Nam mauris velit</a></li>
                <li>- <a href="#">Etiam vitae mauris</a></li>
                <li>- <a href="#">Fusce scelerisque</a></li>
                <li>- <a href="#">Sed faucibus</a></li>
                <li>- <a href="#">Mauris efficitur nulla</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
              <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
}