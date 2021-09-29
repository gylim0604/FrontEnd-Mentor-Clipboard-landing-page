import Head from 'next/head';
import CTA from '../components/CTA/CTA';
import Features1 from '../components/Features1';
import Footer from '../components/Footer';
import { Logo } from '../components/Icons';
import Features2 from '../components/Features2';
import Testimonies from '../components/Testimonies';
import { useMediaQuery } from '@chakra-ui/media-query';
export default function Home() {
    const [desktop] = useMediaQuery('(min-width: 700px)');
    return (
        <div>
            <Head>
                <title>Frontend Mentor | Clipboard landing page</title>
                <meta name='description' content='Landing page for Clipboard' />
            </Head>
            <CTA
                bg={
                    desktop
                        ? "url('/images/bg-header-desktop.png')"
                        : "url('/images/bg-header-mobile.png')"
                }
                icon={<Logo my='5rem' h='130px' w='130px' />}
                heading='A history of everything you copy'
                content='Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.'
            />
            <Features1 />
            <Features2 />
            <Testimonies />
            <CTA
                heading='Clipboard for iOS and Mac OS'
                content='Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'
            />
            <Footer />
        </div>
    );
}
