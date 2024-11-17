import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import etchingsData from "@/data/etchingsData";

export const metadata: Metadata = {
    title: 'Офорты - гравюры',
}

export default function EtchingsPage() {
    return (
        <>
            <MapContent projectsData={etchingsData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}