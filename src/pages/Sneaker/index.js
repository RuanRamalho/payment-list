import React from 'react';
import Header from '../../components/Header';
import * as S from './style';
import sneakerSS from './images/sneakerSS.png';
import Button from '../../components/Button';

const Store = () => (
  <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <S.SneakerCard>
            <S.SneakerImage src={sneakerSS} alt="Card Image" />
            <S.SneakerDescription>
              <h1>SS Sneaker</h1>
              <div className="row justify-content-around">
                <S.SneakerContent>
                  <label htmlFor="size">Size</label>
                  <select id="size" name="size">
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                  </select>
                </S.SneakerContent>
                <S.SneakerContent>
                  <label htmlFor="quantity">Quantity</label>
                  <select id="quantity" name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </S.SneakerContent>
              </div>
              <h2>$ 100.00</h2>
              <S.SneakerContent>
                <Button url="#">Add to cart</Button>
              </S.SneakerContent>
            </S.SneakerDescription>
          </S.SneakerCard>
        </div>
      </div>
    </div>
  </>
);

export default Store;
