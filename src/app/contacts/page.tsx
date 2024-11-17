import type {Metadata} from "next";
import projectsData from "@/data/projectsData";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: 'Контакты',
}

export default function ContactsPage() {
    return (
        <>
            <MapContent projectsData={projectsData}/>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}
