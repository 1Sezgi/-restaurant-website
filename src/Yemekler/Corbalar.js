import React from "react";


import yayla from '../img/yayla.webp';
import brokoli from '../img/brokoli.jpg';
import mercimek from '../img/mercimek.jpg';
import { useState, useEffect } from "react";



function Anayemekler(props) {
  
  const [siparisListesi, setSiparisListesi] = useState([]);
  useEffect(() => {
    const siparisler = JSON.parse(sessionStorage.getItem("siparisler"));
    if (siparisler) {
      setSiparisListesi(siparisler);
    }
  }, []);

    const images =  [yayla,brokoli,mercimek];

    const Corbaimages = [
        {
          baslik: "YAYLA",
          img: {yayla},
          aciklama:"Sıcacık bir lezzet",
          fiyat: 30
          
        },
        {
          baslik: "BROKOLİ",
          img: {brokoli},
          aciklama:"Sıcacık bir lezzet" ,
          fiyat: 30
        },
        {
          baslik: "MERCİMEK",
          img: {mercimek},
          aciklama:"Sıcacık bir lezzet",
          fiyat: 30
    
        },
    ];
  

    const SiparisVer = (baslik, fiyat) => {
      const yeniSiparis = {
        baslik,
        fiyat,
      };
      setSiparisListesi([...siparisListesi, yeniSiparis]);
      sessionStorage.setItem("siparisler", JSON.stringify([...siparisListesi, yeniSiparis]));
    };
    const SiparisSil = (index) => {
      const newList = [...siparisListesi];
      newList.splice(index, 1);
      setSiparisListesi(newList);
      sessionStorage.setItem("siparisler", JSON.stringify(newList));
    };

  return (
    <>
       <h1 className="ms-5 text-secondary">ÇORBALAR</h1>
            {Corbaimages.map((item, index) => (
            <div class="card mx-2 ms-5 mt-3" style={{width: "18rem", height:"22rem", float: "left"}} id="detay">
                <div key={item.baslik} className="mx-3 py-2">
                    <img src={images[index]}  className="card-img-top" />
                    <h2 className="mt-2">{item.baslik}</h2>
                    <p>{item.aciklama}</p>
                    <p>{item.fiyat}₺</p>
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary"onClick={() => SiparisVer(item.baslik, item.fiyat)}>Sipariş Ver</button>                    
                    </div>
                </div>
            </div>
            

        ))}

<div class="border border-light d-flex justify-content-start">
       <div style={{ float: "right", width: "40%",padding:"20px",marginRight:"270px" }}>
        <div class="card" style={{width:"18rem"}}>
        <h2 class="card-title"style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>Sipariş Listesi</h2>
        <ul style={{listStyleType:"circle"}}>
          {siparisListesi.map((siparis, index) => (
            <li key={index}>
              {siparis.baslik} - {siparis.fiyat}TL{" "}
              <button style={{backgroundColor:"white", color:"red",  borderColor:"white"}} onClick={() => SiparisSil(index)}>Sil</button>
            </li>
          ))}
        </ul>
        <p><b>Toplam Fiyat:</b> {siparisListesi.reduce((acc, curr) => acc + curr.fiyat, 0)} TL</p>
        </div>
      </div>
      </div>
    </>

  );
}

export default Anayemekler;