import React from 'react';
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from '../components/BackToTop';
import AnimateMouse from '../components/common/AnimateMouse';
import ContextProvider from '../components/context/ContextProvider';
import Home from '../components/Home/Home';
import HomeThree from '../components/HomeThree/HomeThree';
import HomeTwo from '../components/HomeTwo/HomeTwo';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import FAQ from '../components/Pages/FAQ/FAQ';
import Portfolio from '../components/Pages/Portfolio/Portfolio';
import PortfolioDetails from '../components/Pages/PortfolioDetails/PortfolioDetails';
import Price from '../components/Pages/Price/Price';
import Service from '../components/Pages/Service/Service';
import ServiceDetails from '../components/Pages/ServiceDetails/ServiceDetails';
import TeamDetails from '../components/Pages/TeamDetails/TeamDetails';
import TeamPage from '../components/Pages/TeamPage/TeamPage';
import Fittings from '../components/Pages/ServiceDetails/Subpage/Fittings/Fittings';
import ElectroMechanical from '../components/Pages/ServiceDetails/Subpage/ElectroMechanical/ElectroMechanical';
import Safety from '../components/Pages/ServiceDetails/Subpage/Safety/Safety';
import Welding from '../components/Pages/ServiceDetails/Subpage/Welding/Welding';
import Flanges from '../components/Pages/ServiceDetails/Subpage/Flanges/Flanges';
import Valves from '../components/Pages/ServiceDetails/Subpage/Valves/Valves';
import Fasteners from '../components/Pages/ServiceDetails/Subpage/Fasteners/Fasteners';
import Instrumentation from '../components/Pages/ServiceDetails/Subpage/Instrumentation/Instrumentation';
import LiftingTackles from '../components/Pages/ServiceDetails/Subpage/LiftingTackles/LiftingTackles';
import Fender from '../components/Pages/ServiceDetails/Subpage/Fender/Fender';
import Electrical from '../components/Pages/ServiceDetails/Subpage/Electrical/Electrical';
import OtherGeneralItems from '../components/Pages/ServiceDetails/Subpage/OtherGeneralItems/OtherGeneralItems';
import Admin from '../components/admin/admin';
import Adminhome from '../components/admin/adminhome';
import Editfittings from '../components/admin/fittings/editfittings';
import Addfittings from '../components/admin/fittings/addfittings';
import Updatefittings from '../components/admin/fittings/updatefittings';
import Navbr1 from '../components/admin/navbr1';
import FittingsProduct from '../components/Pages/ServiceDetails/Subpage/Fittings/FittingsProduct';
import AddelectroMechanical from '../components/admin/electroMechanical/addelectroMechanical';
import EditelectroMechanical from '../components/admin/electroMechanical/editelectroMechanical';
import UpdateelectroMechanical from '../components/admin/electroMechanical/updateelectroMechanical';
import FavoritePage from '../components/Pages/ServiceDetails/Subpage/FavoritePage';
import Addsafety from '../components/admin/safety/addsafety';
import Editsafety from '../components/admin/safety/editsafety';
import Updatesafety from '../components/admin/safety/updatesafety';
import Addwelding from '../components/admin/welding/addwelding';
import Editwelding from '../components/admin/welding/editwelding';
import Updatewelding from '../components/admin/welding/updatewelding';
import Addflanges from '../components/admin/flanges/addflanges';
import Editflanges from '../components/admin/flanges/editflanges';
import Updateflanges from '../components/admin/flanges/updateflanges';
import Addvalves from '../components/admin/valves/addvalves';
import Editvalves from '../components/admin/valves/editvalves';
import Updatevalves from '../components/admin/valves/updatevalves';
import Addfasteners from '../components/admin/fasteners/addfasteners';
import Editfasteners from '../components/admin/fasteners/editfasteners';
import Updatefasteners from '../components/admin/fasteners/updatefasteners';
import Addinstrumentation from '../components/admin/instrumentation/addinstrumentation';
import Editinstrumentation from '../components/admin/instrumentation/editinstrumentation';
import Updateinstrumentation from '../components/admin/instrumentation/updateinstrumentation';
import AddliftingTackles from '../components/admin/liftingTackles/addliftingTackles';
import EditliftingTackles from '../components/admin/liftingTackles/editliftingTackles';
import UpdateliftingTackles from '../components/admin/liftingTackles/updateliftingTackles';
import Addfender from '../components/admin/fender/addfender';
import Editfender from '../components/admin/fender/editfender';
import Updatefender from '../components/admin/fender/updatefender';
import Addelectrical from '../components/admin/electrical/addelectrical';
import Editelectrical from '../components/admin/electrical/editelectrical';
import Updateelectrical from '../components/admin/electrical/updateelectrical';
import AddotherGeneralItems from '../components/admin/otherGeneralItems/addotherGeneralItems';
import EditotherGeneralItems from '../components/admin/otherGeneralItems/editotherGeneralItems';
import UpdateotherGeneralItems from '../components/admin/otherGeneralItems/updateotherGeneralItems';
import ElectroMechanicalProduct from '../components/Pages/ServiceDetails/Subpage/ElectroMechanical/ElectroMechanicalProduct';
import SafetyProduct from '../components/Pages/ServiceDetails/Subpage/Safety/SafetyProduct';
import WeldingProduct from '../components/Pages/ServiceDetails/Subpage/Welding/WeldingProduct';
import FlangesProduct from '../components/Pages/ServiceDetails/Subpage/Flanges/FlangesProduct';
import ValvesProduct from '../components/Pages/ServiceDetails/Subpage/Valves/ValvesProduct';
import FastenersProduct from '../components/Pages/ServiceDetails/Subpage/Fasteners/FastenersProduct';
import InstrumentationProduct from '../components/Pages/ServiceDetails/Subpage/Instrumentation/InstrumentationProduct';
import LiftingTacklesProduct from '../components/Pages/ServiceDetails/Subpage/LiftingTackles/LiftingTacklesProduct';
import FenderProduct from '../components/Pages/ServiceDetails/Subpage/Fender/FenderProduct';
import ElectricalProduct from '../components/Pages/ServiceDetails/Subpage/Electrical/ElectricalProduct';
import OtherGeneralItemsProduct from '../components/Pages/ServiceDetails/Subpage/OtherGeneralItems/OtherGeneralItemsProduct';



const AppNavigation = () => {
  return (
    <ContextProvider>
      <AnimateMouse/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<HomeThree />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/fittings" element={<Fittings/>} />
        <Route path="/electro-mechanical" element={<ElectroMechanical/>} />
        <Route path="/safety" element={<Safety/>} />
        <Route path="/welding" element={<Welding/>} />
        <Route path="/flanges" element={<Flanges/>} />
        <Route path="/valves" element={<Valves/>} />
        <Route path="/fasteners" element={<Fasteners/>} />
        <Route path="/instrumentation" element={<Instrumentation/>} />
        <Route path="/lifting-tackles" element={<LiftingTackles/>} />
        <Route path="/fender" element={<Fender/>} />
        <Route path="/electrical" element={<Electrical/>} />
        <Route path="/other-general-items" element={<OtherGeneralItems/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminhome" element={<Adminhome/>} />
        <Route path="/editfittings" element={<Editfittings/>} />
        <Route path="/addfittings" element={<Addfittings/>} />
        <Route path="/updatefittings/:id" element={<Updatefittings/>} />
        <Route path="/navbr1" element={<Navbr1/>} />
        <Route path="/FittingsProduct/:id" element={<FittingsProduct />} />
        <Route path="/addelectroMechanical" element={<AddelectroMechanical/>} />
        <Route path="/editelectroMechanical" element={<EditelectroMechanical/>} />
        <Route path="/updateelectroMechanical/:id" element={<UpdateelectroMechanical/>} />
        <Route path="/favoritePage" element={<FavoritePage/>} />
        <Route path="/addelectroMechanical" element={<AddelectroMechanical/>} />
        <Route path="/addsafety" element={<Addsafety/>} />
        <Route path="/editsafety" element={<Editsafety/>} />
        <Route path="/updatesafety/:id" element={<Updatesafety/>} />
        <Route path="/addwelding" element={<Addwelding/>} />
        <Route path="/editwelding" element={<Editwelding/>} />
        <Route path="/updatewelding/:id" element={<Updatewelding/>} />
        <Route path="/addflanges" element={<Addflanges/>} />
        <Route path="/editflanges" element={<Editflanges/>} />
        <Route path="/updateflanges/:id" element={<Updateflanges/>} />
        <Route path="/addvalves" element={<Addvalves/>} />
        <Route path="/editvalves" element={<Editvalves/>} />
        <Route path="/updatevalves/:id" element={<Updatevalves/>} />
        <Route path="/addfasteners" element={<Addfasteners/>} />
        <Route path="/editfasteners" element={<Editfasteners/>} />
        <Route path="/updatefasteners/:id" element={<Updatefasteners/>} />
        <Route path="/addinstrumentation" element={<Addinstrumentation/>} />
        <Route path="/editinstrumentation" element={<Editinstrumentation/>} />
        <Route path="/updateinstrumentation/:id" element={<Updateinstrumentation/>} />
        <Route path="/addliftingTackles" element={<AddliftingTackles/>} />
        <Route path="/editliftingTackles" element={<EditliftingTackles/>} />
        <Route path="/updateliftingTackles/:id" element={<UpdateliftingTackles/>} />
        <Route path="/addfender" element={<Addfender/>} />
        <Route path="/editfender" element={<Editfender/>} />
        <Route path="/updatefender/:id" element={<Updatefender/>} />
        <Route path="/addelectrical" element={<Addelectrical/>} />
        <Route path="/editelectrical" element={<Editelectrical/>} />
        <Route path="/updateelectrical/:id" element={<Updateelectrical/>} />
        <Route path="/addotherGeneralItems" element={<AddotherGeneralItems/>} />
        <Route path="/editotherGeneralItems" element={<EditotherGeneralItems/>} />
        <Route path="/updateotherGeneralItems/:id" element={<UpdateotherGeneralItems/>} />
        <Route path="/ElectroMechanicalProduct/:id" element={<ElectroMechanicalProduct/>} />
        <Route path="/SafetyProduct/:id" element={<SafetyProduct />} />
        <Route path="/WeldingProduct/:id" element={<WeldingProduct/>} />
        <Route path="/FlangesProduct/:id" element={<FlangesProduct />} />
        <Route path="/ValvesProduct/:id" element={<ValvesProduct />} />
        <Route path="/FastenersProduct/:id" element={<FastenersProduct />} />
        <Route path="/InstrumentationProduct/:id" element={<InstrumentationProduct />} />
        <Route path="/LiftingTacklesProduct/:id" element={<LiftingTacklesProduct />} />
        <Route path="/FenderProduct/:id" element={<FenderProduct />} />
        <Route path="/ElectricalProduct/:id" element={<ElectricalProduct />} />
        <Route path="/OtherGeneralItemsProduct/:id" element={<OtherGeneralItemsProduct />} />



      </Routes>
      <BackToTop/>
    </ContextProvider>
  );
};

export default AppNavigation;