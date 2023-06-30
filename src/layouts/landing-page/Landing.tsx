import React from 'react'
import { Main } from './sections/main/Main';
import { Advantages } from './sections/advantages/Advantages';
import { Catalogue } from './sections/catalogue/Catalogue';
import { Offers } from './sections/offers/Offers';
import { product } from '../../constants/products';
import { Gallery } from './sections/gallery/Gallery';
import { ContactUs } from '../contact-us/ContactUs';

export const Landing = () => {
  return (
      <>
          <Main />
          <Advantages />
          <Catalogue />
          <Offers products={[product, product, product, product]} />
          <Gallery />
          <ContactUs />
      </>
  );
}
