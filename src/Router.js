import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Baslangiclar from "./Yemekler/Baslangiclar";
import Sidebar from "./Sidebar";
import Corbalar from "./Yemekler/Corbalar";
import Anayemek from "./Yemekler/Anayemekler";
import Tatlilar from "./Yemekler/Tatlilar";
import Salatalar from "./Yemekler/Salatalar";
import Icecekler from "./Yemekler/Icecekler";




export default function Router() {
   
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route path="Baslangiclar" element= {<Baslangiclar />} />
                <Route path="Salatalar" element= {<Salatalar />} />
                <Route path="Corbalar" element= {<Corbalar />} />
                <Route path="Anayemekler" element= {<Anayemek />} />
                <Route path="Tatlilar" element= {<Tatlilar />} />
                <Route path="Icecekler" element= {<Icecekler />} />
            </Route>
        </Routes>
    </BrowserRouter>);
   
}

