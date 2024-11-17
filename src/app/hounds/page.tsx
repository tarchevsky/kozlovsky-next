import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import houndsData from "@/data/houndsData";
import Link from "next/link";


export const metadata: Metadata = {
    title: 'Гончие псы - офорт - шелкография',
}

export default function HoundsPage() {
    return (
        <>
            <MapContent projectsData={houndsData}/>
            <Link href="#" className="link cont">больше информации тут.</Link>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}