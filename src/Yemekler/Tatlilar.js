import React from "react";


import tiramisu from '../img/tiramisu.jpg';
import magnolia from '../img/magnolia.jpg';
import puding from '../img/puding.jpg';
import { useState, useEffect } from "react";


function Tatlilar(props) {

    const [siparisListesi, setSiparisListesi] = useState([]);
    useEffect(() => {
        const siparisler = JSON.parse(sessionStorage.getItem("siparisler"));
        if (siparisler) {
            setSiparisListesi(siparisler);
        }
    }, []);



    const images = [tiramisu, magnolia, puding];

    const Tatliimages = [
        {
            baslik: "TİRAMİSU",
            img: { tiramisu },
            aciklama: "Ev Yapımı Tatlımızı Denediniz mi?",
            fiyat: 95

        },
        {
            baslik: "MAGNOLİA",
            img: { magnolia },
            aciklama: "Ev Yapımı Tatlımızı Denediniz mi?",
            fiyat: 120
        },
        {
            baslik: "PUDİNG",
            img: { puding },
            aciklama: "Ev Yapımı Tatlımızı Denediniz mi?",
            fiyat: 75

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


            <h1 className="ms-5 text-secondary">TATLILAR</h1>
            {Tatliimages.map((item, index) => (
                <div class="card mx-2 ms-5 mt-3" style={{ width: "18rem", height: "22rem", float: "left" }} id="detay">

                    <div key={item.baslik} className="mx-3 py-2">
                        <img src={images[index]} className="card-img-top" />
                        <h2 className="mt-2">{item.baslik}</h2>
                        <p>{item.aciklama}</p>
                        <p>{item.fiyat}₺</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => SiparisVer(item.baslik, item.fiyat)}>Sipariş Ver</button>
                        </div>
                    </div>
                </div>

            ))}
            <div class="border border-light d-flex justify-content-start">
                <div style={{ float: "right", width: "40%", padding: "20px", marginRight: "270px" }}>
                    <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h2 class="card-title" style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>Sipariş Listesi</h2>
                            <ul style={{listStyleType:"circle"}}>
                                {siparisListesi.map((siparis, index) => (
                                    <li key={index}>
                                        {siparis.baslik} - {siparis.fiyat}TL{" "}
                                        <button style={{ backgroundColor: "white", color: "red", borderColor: "white" }} onClick={() => SiparisSil(index)}>Sil</button>
                                    </li>
                                ))}
                            </ul>
                            <p><b>Toplam Fiyat:</b> {siparisListesi.reduce((acc, curr) => acc + curr.fiyat, 0)} TL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Tatlilar;