import type {Metadata} from "next";
import Portal from "@/components/portal/Portal";

export const metadata: Metadata = {
	title: 'Контакты',
}

export default function ContactsPage() {
	return (
		<Portal>
			<div className='cont'>Контент</div>
		</Portal>
	)
}
