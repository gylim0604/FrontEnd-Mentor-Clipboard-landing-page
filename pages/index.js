import Head from 'next/head';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer';
import { Logo } from '../components/Icons';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Clipboard Landing Page</title>
                <meta name='description' content='Landing page for Clipboard' />
                <link rel='icon' href='/images/logo.svg' />
            </Head>
            <CTA
                bg="url('/images/bg-header-mobile.png')"
                icon={<Logo h='48px' w='48px' />}
                heading='A history of everything you copy'
                content='Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.'
            />
            <CTA
                heading='Clipboard for iOS and Mac OS'
                content='Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'
            />
            <Footer />
        </div>
    );
}
