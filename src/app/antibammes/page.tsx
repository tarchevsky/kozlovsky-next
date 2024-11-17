import {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import projectsData from "@/data/projectsData";
import Footer from "@/components/footer/Footer";
import antibammesData from "@/data/antibammesData";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Antibammes - Анатомия',
}

export default function AntibammesPage() {
    return (
        <>
            <MapContent projectsData={antibammesData}/>
            <Link href="#" className="link cont">больше информации тут.</Link>
            <Header />
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}