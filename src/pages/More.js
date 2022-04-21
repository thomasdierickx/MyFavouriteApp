import more from '../components/more.module.css';
import { GoPulse } from 'react-icons/go';
import { FiCamera, FiMessageSquare, FiSettings, FiLifeBuoy } from 'react-icons/fi';
import { BsPatchCheck, BsStar } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { GiBackwardTime } from 'react-icons/gi';
import { MdOutlineDateRange } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { FaYelp } from 'react-icons/fa';
import { RiBuilding3Line } from 'react-icons/ri';

const More = () => {
    return (
        <>
            <header className={more.header}>
                <h2 className={more.h2}>Meer</h2>
            </header>
            <article className={more.outline} style={{ color: "rgb(0, 195, 255)", marginTop: "-1rem", paddingBottom: "1rem" }} >
                <section className={more.outlineItem}>
                    <BsStar style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg een review toe</p>
                </section>
                <section className={more.outlineItem}>
                    <FiCamera style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg een foto of video toe</p>
                </section>
                <section className={more.outlineItem}>
                    <BsPatchCheck style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Check In</p>
                </section>
            </article>
            <article className={more.outline} style={{ paddingTop: "1rem", paddingTop: "1rem" }} >
                <section className={more.outlineItem}>
                    <GoPulse style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Activiteit</p>
                </section>
                <section className={more.outlineItem}>
                    <AiOutlineBell style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Meldingen</p>
                </section>
                <section className={more.outlineItem}>
                    <GiBackwardTime style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Onlangs bekeken</p>
                </section>
                <section className={more.outlineItem}>
                    <MdOutlineDateRange style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Evenementen</p>
                </section>
                <section className={more.outlineItem}>
                    <FiMessageSquare style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Berichten</p>
                </section>
                <section className={more.outlineItem}>
                    <BsPatchCheck style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Check-ins van vrienden</p>
                </section>
                <section className={more.outlineItem}>
                    <TiMessages style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Forum</p>
                </section>
            </article>
            <article className={more.outlineNoBorder}>
                <section className={more.outlineItem}>
                    <FaYelp style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Yelp Elite Club</p>
                </section>
                <section className={more.outlineItem}>
                    <RiBuilding3Line style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg bedrijf toe</p>
                </section>
                <section className={more.outlineItem}>
                    <FiSettings style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Instellingen</p>
                </section>
                <section className={more.outlineItem}>
                    <FiLifeBuoy style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Ondersteuning</p>
                </section>
            </article>
        </>
    );
}

export default More;