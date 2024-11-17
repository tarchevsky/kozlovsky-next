import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import designData from "@/data/designData";


export const metadata: Metadata = {
    title: 'Дизайн',
}

export default function DesignPage() {
    return (
        <>
            <MapContent projectsData={designData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}