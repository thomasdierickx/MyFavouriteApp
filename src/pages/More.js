import more from '../components/more.module.css';

// IMPORT ICONS
import { MdReviews, MdWatchLater, MdForum } from 'react-icons/md';
import { HiPhotograph } from 'react-icons/hi';
import { BsFillPatchCheckFill, BsFillCalendarEventFill, BsSuitClubFill, BsLifePreserver } from 'react-icons/bs';
import { GoPulse } from 'react-icons/go';
import { IoIosNotifications, IoIosSettings } from 'react-icons/io';
import { RiMessage2Fill, RiBuilding3Fill } from 'react-icons/ri';

const More = () => {
    return (
        <>
            <header className={more.header}>
                <h2 className={more.h2}>Meer</h2>
            </header>
            <article className={more.outline} style={{ color: "rgb(0, 195, 255)", marginTop: "-1rem" }} >
                <section className={more.outlineItem}>
                    <MdReviews style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg een review toe</p>
                </section>
                <section className={more.outlineItem}>
                    <HiPhotograph style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg een foto of video toe</p>
                </section>
                <section className={more.outlineItem}>
                    <BsFillPatchCheckFill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Check In</p>
                </section>
            </article>
            <article className={more.outline}>
                <section className={more.outlineItem}>
                    <GoPulse style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Activiteit</p>
                </section>
                <section className={more.outlineItem}>
                    <IoIosNotifications style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Meldingen</p>
                </section>
                <section className={more.outlineItem}>
                    <MdWatchLater style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Onlangs bekeken</p>
                </section>
                <section className={more.outlineItem}>
                    <BsFillCalendarEventFill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Evenementen</p>
                </section>
                <section className={more.outlineItem}>
                    <RiMessage2Fill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Berichten</p>
                </section>
                <section className={more.outlineItem}>
                    <BsFillPatchCheckFill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Check-ins van vrienden</p>
                </section>
                <section className={more.outlineItem}>
                    <MdForum style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Forum</p>
                </section>
            </article>
            <article className={more.outlineNoBorder}>
                <section className={more.outlineItem}>
                    <BsSuitClubFill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Yelp Elite Club</p>
                </section>
                <section className={more.outlineItem}>
                    <RiBuilding3Fill style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Voeg bedrijf toe</p>
                </section>
                <section className={more.outlineItem}>
                    <IoIosSettings style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Instellingen</p>
                </section>
                <section className={more.outlineItem}>
                    <BsLifePreserver style={{ height: "1.4rem", width: "1.4rem" }} />
                    <p className={more.outlineItemText}>Ondersteuning</p>
                </section>
            </article>
        </>
    );
}

export default More;