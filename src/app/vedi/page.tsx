import type {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import projectsData from "@/data/projectsData";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import vediData from "@/data/vediData";

export const metadata: Metadata = {
    title: 'Проект Vedi',
    description: 'Проект Vedi описание проекта',
}

export default function
    VediPage() {
    return (
        <>
            <MapContent projectsData={vediData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}
