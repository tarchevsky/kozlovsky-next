import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import exhibitionsData from "@/data/exhibitionsData";


export const metadata: Metadata = {
    title: 'Выставки',
}

export default function ExhibitionsPage() {
    return (
        <>
            <MapContent projectsData={exhibitionsData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}