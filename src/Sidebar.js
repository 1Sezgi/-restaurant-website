import { Link, Outlet } from "react-router-dom";
import { onMenuClick } from "react";
import { FaGlassCheers } from "react-icons/fa";



export default function Sidebar(props) {
  const menuItems = [{ id: 1, title: "Başlangıçlar", link: "/Baslangiclar", }, { id: 2, title: "Salatalar", link: "/Salatalar" }, { id: 3, title: "Ana Yemekler", link: "/Anayemekler" }, { id: 4, title: "Çorbalar", link: "/Corbalar" }, { id: 5, title: "Tatlılar", link: "/Tatlilar" }, { id: 6, title: "İçecekler", link: "/Icecekler" }];


  const handleGarsonCagirClick = () => {
    alert("Garson çağrıldı!");
  };

  const iconStyle = { fontSize: "80px" };


  return (
    <>


      <div class="container-fluid" style={{ float: "left",backgroundColor:"#f7f7f5" }}>
        <div class="row flex-nowrap">
          <div class="col-2 col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: "#e8bc6f" }}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <div class="d-flex align-items-center mt-4 mb-4 text-white text-decoration-none">
                <FaGlassCheers style={iconStyle} /><span class="fs-5 d-none d-sm-inline fa-xl" style={{ textAlign: "center", fontSize: "20px" }}>KodAkıl & Bistro</span>
              </div>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-white align-items-sm-start ms-3"
                id="menu"
              >
                {menuItems.map((props) => (
                  <li key={props.id} className="py-3">
                    <Link className="text-white text-decoration-none" to={props.link}
                    >{props.title}</Link>
                    <hr />
                  </li>

                ))}
              </ul>
            
              <button type="button" class="btn btn-secondary" onClick={handleGarsonCagirClick} >Garson Çağır</button>
              <hr />
            </div>
          </div>
          <div className="col-10 mt-5 " id="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );

}
