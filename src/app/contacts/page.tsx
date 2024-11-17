import type {Metadata} from "next";
import projectsData from "@/data/projectsData";
import MapContent from "@/components/mapContent/MapContent";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import contactsData from "@/data/contactsData";

export const metadata: Metadata = {
    title: 'Контакты',
}

export default function ContactsPage() {
    return (
        <>
            <MapContent projectsData={contactsData}/>
            <div className='cont flex justify-start gap-4'>
                <Link href="tel:+ 7 903 170 05 86" className="link">+ 7 903 170 05 86</Link>
                <Link href="#" className="link">wa</Link>
                <Link href="#" className="link">tg</Link>
            </div>
            <div className='cont flex flex-col'>
                <Link href="#" className="link">/ INSTAGRAM /</Link>
                <Link href="#" className="link">/ TELEGRAM /</Link>
                <Link href="#" className="link">/ VK/</Link>
            </div>
            <Header/>
            <MapContent projectsData={projectsData} reverse/>
            <Footer/>
        </>
    )
}
