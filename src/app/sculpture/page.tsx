import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import sculptureData from "@/data/sculptureData";


export const metadata: Metadata = {
    title: 'Скульптура',
}

export default function SculpturePage() {
    return (
        <>
            <MapContent projectsData={sculptureData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}