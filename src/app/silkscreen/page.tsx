import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import silkscreenData from "@/data/silkscreenData";


export const metadata: Metadata = {
    title: 'Шелкография',
}

export default function silkscreenPage() {
    return (
        <>
            <MapContent projectsData={silkscreenData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}