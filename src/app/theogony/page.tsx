import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import theogonyData from "@/data/theogonyData";


export const metadata: Metadata = {
    title: 'Теогония - Прометей Милосердный',
}

export default function HoundsPage() {
    return (
        <>
            <MapContent projectsData={theogonyData}/>
            <Link href="#" className="link cont">больше информации тут.</Link>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}