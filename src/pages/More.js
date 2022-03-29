import more from '../components/more.module.css';
import { Box } from '@mui/material';

const More = () => {
    return (
        <>
            <header className={more.header}>
                <h2 className={more.h2}>Meer</h2>
            </header>
            <article className={more.outline} style={{ color: "rgb(0, 195, 255)", marginTop: "-1rem" }} >
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Voeg een review toe</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Voeg een foto of video toe</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Check In</p>
                </section>
            </article>
            <article className={more.outline}>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Activiteit</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Meldingen</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Onlangs bekeken</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Evenementen</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Berichten</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Check-ins van vrienden</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Forum</p>
                </section>
            </article>
            <article className={more.outlineNoBorder}>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Yelp Elite Club</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Voeg bedrijf toe</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Instellingen</p>
                </section>
                <section className={more.outlineItem}>
                    "icon"
                    <p className={more.outlineItemText}>Ondersteuning</p>
                </section>
            </article>
        </>
    );
}

export default More;