import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import denimData from "@/data/denimData";


export const metadata: Metadata = {
    title: 'Распятие джинсовка - кастом',
}

export default function DenimPage() {
    return (
        <>
            <MapContent projectsData={denimData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}