import type {Metadata} from "next";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import projectsData from '@/data/projectsData'

export const metadata: Metadata = {
    title: 'Главная',
}

export default function Home() {
    return (
        <>
            <Header className='relative' />
            <MapContent projectsData={projectsData} reverse />
            <Footer/>
        </>

    )
}
