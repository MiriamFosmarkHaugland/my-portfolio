import Link from "next/link";
import Image from "next/image";

export default function SocialMedia() {
    return (
        <div className="flex space-x-10">
            <Link href="https://www.linkedin.com/in/miriam-fosmark-haugland-a3462928a/" target="_blank">
                <Image 
                src="/icons8-linkedin.svg" 
                alt="Miriams LinkedIn profil" 
                width={50} 
                height={50}/>
            </Link>
            <Link href="https://github.com/MiriamFosmarkHaugland" target="_blank">
            <Image 
                src="/icons8-github.svg" 
                alt="Miriams LinkedIn profil" 
                width={50} 
                height={50}/>
            </Link>
        </div>
    );
}