import React from 'react';
import Image from 'next/image';
import { LogoPurple } from 'assets';

export default function index() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer_section">
          <Image
            src={LogoPurple}
            alt="Peworld Hire"
            width={70}
            height={70}
            quality={100}
            className="pb-10"
          />
          <div className="footer_content">
            <p className="footer_copyright">
              &copy; 2023 enetworksjobs. All right reserved
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
