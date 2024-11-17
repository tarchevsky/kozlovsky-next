import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import photoData from "@/data/photoData";


export const metadata: Metadata = {
    title: 'Фото',
}

export default function PhotoPage() {
    return (
        <>
            <MapContent projectsData={photoData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}