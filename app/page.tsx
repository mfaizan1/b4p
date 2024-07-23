import Head from "next/head";
import Header from "./components/Header";
import Section from "./components/Section";
import IPPCard from "./components/Ippcard";
import EventCard from "./components/Eventcard";
import Footer from "./components/Footer";
import ipps from "./data/ipps";
import events from "./data/events";

const IPPInfo = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Head>
        <title>#BoycottForPakistan</title>
        <meta
          name="description"
          content="Join the movement to boycott IPP groups in Pakistan. Learn about the predatory practices of these groups and take action to ensure fairness in our energy sector."
        />
        <meta
          name="keywords"
          content="boycott, IPP, Pakistan, energy sector, fairness, protest, IPP groups"
        />
        <meta property="og:title" content="Boycott for Pakistan" />
        <meta
          property="og:description"
          content="Join the movement to boycott IPP groups in Pakistan. Learn about the predatory practices of these groups and take action to ensure fairness in our energy sector."
        />
        <meta property="og:image" content="/path/to/your/og-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:title" content="Boycott for Pakistan" />
        <meta
          name="twitter:description"
          content="Join the movement to boycott IPP groups in Pakistan. Learn about the predatory practices of these groups and take action to ensure fairness in our energy sector."
        />
        <meta name="twitter:image" content="/path/to/your/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <Section id="boycott" title="Boycott IPP Groups">
          <p>
            We call on every citizen to take a firm stand against the predatory
            practices of these IPP groups by boycotting their other business
            ventures. Since direct action against the IPPs is not feasible, we
            must strike where it hurts the most: their diverse business
            interests. By cutting off support to their ancillary businesses, we
            can force them to reconsider their unjust practices and bring about
            real change. This is not just a boycott; it's a movement to reclaim
            our rights and ensure fairness in our energy sector.
          </p>
        </Section>
        <Section id="goal" title="Our Goal">
          <p>
            Our goal is to ensure that IPPs collect payments only for the
            electricity they produce, which is approximately Rs 8 per unit. They
            should not charge for unproduced units, which currently costs around
            Rs 18 per <span className="font-bold">UNPRODUCED</span> unit. This
            practice is unjust and places an undue burden on consumers.
          </p>
        </Section>
        <Section id="disclaimer" title="Beta Website Disclaimer">
          <p>
            This is a beta website, and some information might not be correct.
            We are continually updating our data and appreciate any feedback or
            corrections.
          </p>
        </Section>
        <Section
          id="table"
          title="Independent Power Producers (IPPs) in Pakistan"
        >
          <div>
            {ipps.map((ipp, index) => (
              <IPPCard key={index} ipp={ipp} />
            ))}
          </div>
        </Section>
        <Section id="events" title="Events">
          <div>
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default IPPInfo;
