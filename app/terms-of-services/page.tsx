"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const sections = [
  { id: "intro", label: "Terms of Service" },
  { id: "scope", label: "1. Scope of AvPlat Services" },
  {
    id: "eligibility",
    label: "2. Eligibility, Using the Platform, Member Verification",
  },
  { id: "modification", label: "3. Modification of these Terms" },
  { id: "account", label: "4. Account Registration" },
  { id: "content", label: "5. Content" },
  { id: "fees", label: "6. Service Fees" },
  { id: "providers", label: "7. Terms specific for Service Providers" },
  { id: "customers", label: "8. Terms specific for Customers" },
  {
    id: "cancellations",
    label: "9. Service Revisions, Cancellations and Refunds",
  },
  { id: "reviews", label: "10. Ratings and Reviews" },
  { id: "currency", label: "11. Rounding off, Currency conversion" },
  { id: "taxes", label: "12. Taxes" },
  { id: "prohibited", label: "13. Prohibited Activities" },
  {
    id: "termination",
    label: "14. Term and Termination, Suspension and other Measures",
  },
  { id: "disclaimers", label: "15. Disclaimers" },
  { id: "liability", label: "16. Liability" },
  { id: "indemnification", label: "17. Indemnification" },
  {
    id: "disputes",
    label: "18. Dispute Resolution and Arbitration Agreement",
  },
  { id: "feedback", label: "19. Feedback" },
  { id: "law", label: "20. Applicable Law and Jurisdiction" },
  { id: "general", label: "21. General Provisions" },

  { id: "payments-intro", label: "Payments Terms of Service" },
  { id: "payments-scope", label: "1. Scope and Use of the Payment Services" },
  { id: "payments-definitions", label: "2. Key Definitions" },
  { id: "payments-modification", label: "3. Modification of these Payments Terms" },
  { id: "payments-eligibility", label: "4. Eligibility, Member Verification" },
  { id: "payments-account", label: "5. Account Registration" },
  { id: "payments-methods", label: "6. Payin Methods and Payout Methods" },
  {
    id: "payments-provider-financial",
    label: "7. Financial Terms for Service Providers",
  },
  {
    id: "payments-customer-financial",
    label: "8. Financial Terms for Customers",
  },
  {
    id: "payments-agent",
    label: "9. Appointment of AvPlat Payments as Limited Payment Collection Agent",
  },
  {
    id: "payments-general-financial",
    label: "10. General Financial Terms",
  },
  { id: "payments-taxes", label: "11. Taxes" },
  { id: "payments-conversion", label: "12. Currency Conversion" },
  { id: "payments-prohibited", label: "13. Prohibited Activities" },
  {
    id: "payments-ip",
    label: "14. Intellectual Property Ownership, Rights Notices",
  },
  { id: "payments-feedback", label: "15. Feedback" },
  { id: "payments-disclaimers", label: "16. Disclaimers" },
  { id: "payments-liability", label: "17. Liability" },
  { id: "payments-indemnification", label: "18. Indemnification" },
  {
    id: "payments-termination",
    label: "19. Termination, Suspension, and other Measures",
  },
  { id: "payments-law", label: "20. Applicable Law and Jurisdiction" },
  { id: "payments-general", label: "21. General Provisions" },
  { id: "payments-contact", label: "Contacting AvPlat Payments" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type SectionBlockProps = {
  id: string;
  title: string;
  children: ReactNode;
  primary?: boolean;
};

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const SectionBlock = ({
  id,
  title,
  children,
  primary = false,
}: SectionBlockProps) => {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 space-y-4"
      {...sectionMotion}
    >
      {primary ? (
        <h2 className="text-2xl md:text-3xl font-semibold text-[#213e76]">{title}</h2>
      ) : (
        <h3 className="text-xl md:text-2xl font-semibold text-[#213e76]">{title}</h3>
      )}

      <div className="space-y-4 text-sm md:text-[15px] leading-7 text-charcoal">
        {children}
      </div>
    </motion.section>
  );
};

const TermsPage = () => {
  return (
    <>
      <PageHero
                    title="Terms of Service"
                    image="/images/terms-and-conditionss.jpg"
                    overlayOpacity={0.65}
                  />

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <SectionBlock id="intro" title="Terms of Service" primary>
              <p>
                Please read these Terms of Service carefully as they contain important
                information about your legal rights, remedies and obligations. By
                accessing or using the AvPlat Platform, you agree to comply with and
                be bound by these Terms of Service.
              </p>

              <p>Thank you for using AvPlat!</p>

              <p>
                These Terms of Service ("Terms") constitute a legally binding
                agreement ("Agreement") between you and AvPlat (as defined below)
                governing your access to and use of the AvPlat website, including
                any subdomains thereof, and any other websites through which AvPlat
                makes the AvPlat Services available (collectively, "Site"), our
                mobile, tablet and other smart device applications, and
                application program interfaces (collectively, "Application") and
                all associated services (collectively, "AvPlat Services" or
                "Services"). The Site and Application AvPlat Services together are
                hereinafter collectively referred to as the "AvPlat Platform".
              </p>

              <p>
                When these Terms mention "AvPlat", "we", "us" or "our" it refers
                to the AvPlat Singapore Pte Ltd, the company you are contracting
                with and also includes our affiliates or group companies unless
                such reference is repugnant to the context thereof.
              </p>

              <p>
                Our collection and use of personal information in connection with
                your access to and use of the AvPlat Platform is described in our
                Privacy Policy.
              </p>

              <p>
                Any and all payment processing services through or in connection
                with your use of the AvPlat Platform ("Payment Services") are
                provided to you by one or more AvPlat Payments entities
                (individually and collectively, as appropriate, "AvPlat Payments")
                as set out in the Payments Terms of Service ("Payments Terms").
              </p>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h4 className="text-base font-semibold text-[#213e76] mb-3">
                  Table of Contents
                </h4>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-charcoal">
                  <li>Scope of AvPlat Services</li>
                  <li>Eligibility, Using the AvPlat Platform, Member Verification</li>
                  <li>Modification of these Terms</li>
                  <li>Account Registration</li>
                  <li>Content</li>
                  <li>Service Fees</li>
                  <li>Terms specific for Service Providers</li>
                  <li>Terms specific for Customers</li>
                  <li>Service Modifications, Cancellations and Refunds, Resolution Center</li>
                  <li>Ratings and Reviews</li>
                  <li>Rounding off, Currency conversion</li>
                  <li>Taxes</li>
                  <li>Prohibited Activities</li>
                  <li>Term and Termination, Suspension and other Measures</li>
                  <li>Disclaimers</li>
                  <li>Liability</li>
                  <li>Indemnification</li>
                  <li>Dispute Resolution</li>
                  <li>Feedback</li>
                  <li>Applicable Law and Jurisdiction</li>
                  <li>General Provisions</li>
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock id="scope" title="1. Scope of AvPlat Services">
              <p>
                <strong>1.1</strong> AvPlat Platform is a marketplace for aviation
                which enables registered users ("Members") who offer services
                related to the aviation industry (Members who offer services are
                "Service Providers" and the services they offer are "Services") to
                publish such Services on the AvPlat Platform ("Listings") and to
                communicate and transact directly with Members who are seeking to
                avail such Services (Members using Services are "Customers").
              </p>

              <p>
                <strong>1.2</strong> AvPlat does not own, create, sell, resell,
                provide, control, manage, offer, deliver, or supply any Listings
                or Services on its AvPlat Platform. Service Providers alone are
                responsible for their Listings and Services on the AvPlat Platform.
                When Members make or accept any Services, they are entering into a
                contract directly with the concerned Service Provider. AvPlat is
                not and does not become a party to any contractual relationship
                between Members. AvPlat is not acting as an agent in any capacity
                for any Member, except as specified in the Payments Terms.
              </p>

              <p>
                <strong>1.3</strong> While we may facilitate the resolution of
                disputes, AvPlat has no control over and does not guarantee (i) the
                existence, quality, safety, suitability, or legality of any
                Listings or Services, (ii) the truth or accuracy of any Listing
                descriptions, Ratings, Reviews, or other Member Content (as defined
                below), or (iii) the performance or conduct of any Member or third
                party. AvPlat does not endorse any Member, Listing or Services. Any
                references to a Member being "verified" (or similar language) only
                indicate that the Member has completed a relevant verification or
                identification process and nothing else. Any such description is
                not an endorsement, certification or guarantee by AvPlat about any
                Member, including of the Member's identity or background or whether
                the Member is trustworthy, safe or suitable.
              </p>

              <p>
                <strong>1.4</strong> If you choose to use the AvPlat Platform, as a
                Service Provider, your relationship with AvPlat is limited to being
                an independent, third-party contractor, and not an employee,
                agent, joint venturer or partner of AvPlat for any reason, and you
                act exclusively on your own behalf and for your own benefit, and
                not on behalf, or for the benefit, of AvPlat.
              </p>

              <p>
                <strong>1.6</strong> Due to the nature of the Internet, AvPlat
                cannot guarantee the continuous and uninterrupted availability and
                accessibility of the AvPlat Platform. AvPlat may restrict the
                availability of the AvPlat Platform or certain areas or features
                thereof, if this is necessary in view of capacity limits, the
                security or integrity of our servers, or to carry out maintenance
                measures that ensure the proper or improved functioning of the
                AvPlat Platform. AvPlat may improve, enhance and modify the AvPlat
                Platform and introduce new AvPlat Services from time to time.
              </p>
            </SectionBlock>

            <SectionBlock
              id="eligibility"
              title="2. Eligibility, Using the AvPlat Platform, Member Verification"
            >
              <p>
                <strong>2.1</strong> By accessing or using the AvPlat Platform you
                represent and warrant that you have the legal capacity and authority
                to enter into a contract. Given the nature of services provided by
                AvPlat and the Service Providers, the intended beneficiaries of the
                services are companies and such other legal entities and not
                individuals, hence you represent that you are accepting these Terms
                on behalf of such an entity and that you have the authority to bind
                such entity and its affiliates to these Terms. If you do not have
                such authority you must not accept this Agreement and may not use
                the AvPlat Platform.
              </p>

              <p>
                <strong>2.2</strong> You will comply with any applicable export
                control laws in your local jurisdiction. You also represent and
                warrant that (i) neither you nor your Service(s) are located or
                take place in a country that is subject to trade restriction by the
                Singaporean Government.
              </p>

              <p>
                <strong>2.3</strong> AvPlat will make the access to and use of the
                AvPlat Platform, or certain areas or features of the AvPlat
                Platform, subject to certain conditions or requirements, such as
                completing a verification process, meeting specific quality or
                eligibility criteria, meeting Ratings or Reviews thresholds, or
                service and cancellation history.
              </p>
            </SectionBlock>

            <SectionBlock id="modification" title="3. Modification of these Terms">
              <p>
                AvPlat reserves the right to modify these Terms at any time in
                accordance with this provision. If we make changes to these Terms,
                we will post the revised Terms on the AvPlat Platform and update
                the "Last Updated" date at the top of these Terms. We will notify
                you with the updated Terms. If you disagree with the revised Terms,
                you may terminate this Agreement with immediate effect. If you do
                not terminate your Agreement before the date the revised Terms
                become effective, your continued access to or use of the AvPlat
                Platform will constitute acceptance of the revised Terms.
              </p>
            </SectionBlock>

            <SectionBlock id="account" title="4. Account Registration">
              <p>
                <strong>4.1</strong> You must register an account ("AvPlat Account")
                to access and use certain features of the AvPlat Platform, such as
                publishing or selecting a Listing. If you are registering an
                AvPlat Account for a company or other legal entity, you represent
                and warrant that you have the authority to legally bind that
                entity and grant us all permissions and licenses provided in these
                Terms.
              </p>

              <p>
                <strong>4.2</strong> You can register an AvPlat Account using a
                valid email address and creating an appropriate password.
              </p>

              <p>
                <strong>4.3</strong> You must provide accurate, current and
                complete information during the registration process and keep your
                AvPlat Account and AvPlat Account Profile page information
                up-to-date at all times.
              </p>
            </SectionBlock>

            <SectionBlock id="content" title="5. Content">
              <p>
                <strong>5.1</strong> AvPlat may, at its sole discretion, enable
                Members to (i) create, upload, post, send, receive and store
                content, such as text, photos, audio, video, or other materials
                and information on or through the AvPlat Platform ("Member
                Content"); and (ii) access and view Member Content and any content
                that AvPlat itself makes available on or through the AvPlat
                Platform, including proprietary AvPlat content and any content
                licensed or authorized for use by or through AvPlat from a third
                party ("AvPlat Content" and together with Member Content,
                "Collective Content").
              </p>

              <p>
                <strong>5.2</strong> The AvPlat Platform, AvPlat Content, and
                Member Content may in its entirety or in part be protected by
                copyright, trademark, and/or other laws of Singapore and other
                countries. You acknowledge and agree that the AvPlat Platform and
                AvPlat Content, including all associated intellectual property
                rights, are the exclusive property of AvPlat and/or its licensors.
                You will not remove, alter or obscure any copyright, trademark,
                service mark or other proprietary rights notices incorporated in or
                accompanying the AvPlat Platform, AvPlat Content or Member Content.
                All trademarks, service marks, logos, trade names, and any other
                source identifiers of AvPlat used on or in connection with the
                AvPlat Platform and AvPlat Content are trademarks or registered
                trademarks of AvPlat in Singapore and abroad. Trademarks, service
                marks, logos, trade names and any other proprietary designations of
                third parties used on or in connection with the AvPlat Platform,
                AvPlat Content, and/or Collective Content are used for
                identification purposes only and may be the property of their
                respective owners.
              </p>

              <p>
                <strong>5.3</strong> You will not use, copy, adapt, modify, prepare
                derivative works of, distribute, license, sell, transfer, publicly
                display, publicly perform, transmit, broadcast or otherwise exploit
                the AvPlat Platform or Collective Content, except to the extent you
                are the legal owner of certain Member Content or as expressly
                permitted in these Terms. No licenses or rights are granted to you
                by implication or otherwise under any intellectual property rights
                owned or controlled by AvPlat or its licensors, except for the
                licenses and rights expressly granted in these Terms.
              </p>

              <p>
                <strong>5.4</strong> Subject to your compliance with these Terms,
                AvPlat grants you a limited, non-exclusive, non-sublicensable,
                revocable, non-transferable license to (i) download and use the
                Application on your personal device(s); and (ii) access and view
                any Collective Content made available on or through the AvPlat
                Platform and accessible to you, solely for the exclusive use of
                your business.
              </p>

              <p>
                <strong>5.5</strong> By creating, uploading, posting, sending,
                receiving, storing, or otherwise making available any Member
                Content on or through the AvPlat Platform, you grant to AvPlat a
                non-exclusive, worldwide, royalty-free, irrevocable, perpetual (or
                for the term of the protection), sub-licensable and transferable
                license to such Member Content to access, use, store, copy,
                modify, prepare derivative works of, distribute, publish,
                transmit, stream, broadcast, and otherwise exploit in any manner
                such Member Content to provide and/or promote the AvPlat Platform,
                in any media or platform. Unless you provide specific consent,
                AvPlat does not claim any ownership rights in any Member Content
                and nothing in these Terms will be deemed to restrict any rights
                that you may have to use or exploit your Member Content.
              </p>
            </SectionBlock>

            <SectionBlock id="fees" title="6. Service Fees">
              <p>
                <strong>6.1</strong> AvPlat may charge fees to Service Providers
                ("Service Provider Fees") and/or Customers ("Customer Fees")
                (collectively, "Service Fees") in consideration for the use of the
                AvPlat Platform.
              </p>

              <p>
                <strong>6.2</strong> Any applicable Service Fees (including any
                applicable taxes) will be displayed to a Service Provider or
                Customer prior to publishing or selecting and confirming a Service.
                AvPlat reserves the right to change the Service Fees at any time,
                and we will provide Members adequate notice of any fee changes
                before they become effective.
              </p>

              <p>
                <strong>6.3</strong> You are responsible for paying any Service
                Fees that you owe to AvPlat. The applicable Service Fees are due
                and payable and collected by AvPlat Payments pursuant to the
                Payments Terms.
              </p>

              <p>
                <strong>6.4 TRIPS Module:</strong> Until further notice, the
                following Service Fees shall apply:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>For Customers: 5% (five percent) of Listing Fees</li>
                <li>For Service Providers: 3% (three percent) of Listing Fees</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="providers" title="7. Terms specific for Service Providers">
              <p className="font-semibold text-[#213e76]">7.1 Terms applicable to all Listings</p>

              <p>
                <strong>7.1.1</strong> When creating a Listing through the AvPlat
                Platform you must (i) provide complete and accurate information
                about your Service (such as listing description, location, rates,
                calendar availability, etc. and such other information sought in
                the Service Provider's setup process), (ii) disclose any
                restrictions and requirements that apply and (iii) provide any
                other pertinent information requested by AvPlat. You are
                responsible for keeping your Listing information (including
                calendar availability) up-to-date at all times.
              </p>

              <p>
                <strong>7.1.2</strong> You are solely responsible for setting a
                price (including any taxes if applicable) for your Listing
                ("Listing Fee"). Once a Customer confirms a service request for
                your Listing, you may not charge the Customer a higher price than
                in the Listing Fee at the time of service confirmation.
              </p>

              <p>
                <strong>7.1.3</strong> You agree to abide by AvPlat's cancellation
                policy.
              </p>

              <p>
                <strong>7.1.4</strong> Pictures, animations or videos
                (collectively, "Images") used in your Listings must accurately
                reflect the quality and condition of your Services. AvPlat reserves
                the right to require that Listings have a minimum number of Images
                of a certain format, size and resolution.
              </p>

              <p>
                <strong>7.1.5</strong> The placement and ranking of Listings in
                search results on the AvPlat Platform may vary and depend on a
                variety of factors, such as Customer search parameters and
                preferences, price and calendar availability, number and quality
                of Images, customer service history, reviews and ratings, type of
                Service, and/or response speed.
              </p>

              <p>
                <strong>7.1.6</strong> When you accept a service request by a
                Customer, you are entering into a legally binding agreement with
                the Customer and are required to provide your Service(s) to the
                Customer as described in your Listing when the service request was
                confirmed. You also agree to pay the applicable Service Provider
                Fee and any applicable taxes, which will be collected pursuant to
                the Payments Terms.
              </p>

              <p className="font-semibold text-[#213e76]">7.2 Listing Services</p>

              <p>
                <strong>7.2.2</strong> To list a Service, you must create a Listing
                and submit the same to AvPlat. To be considered for publishing on
                the AvPlat Platform, the Service must at all times meet the quality
                standards for Services and meet Customer demand. AvPlat reserves
                the right to decide, in its sole discretion, if a submitted
                Service will be published on the AvPlat Platform.
              </p>

              <p>
                <strong>7.2.6</strong> You must provide the Service in person and
                must not allow any third party to provide the Service on your
                behalf, unless authorized by AvPlat.
              </p>
            </SectionBlock>

            <SectionBlock id="customers" title="8. Terms specific for Customers">
              <p>
                <strong>8.1</strong> Subject to meeting any requirements (such as
                completing any verification processes) set by AvPlat, you can
                select and confirm Services available on the AvPlat Platform by
                following the respective Listing selection and confirmation
                process. All applicable fees, including the Listing Fee, Customer
                Fee and any applicable taxes (collectively, "Total Fees") will be
                presented to you prior to confirming or activating your trip. You
                agree to pay the Total Fees for any service requested in
                connection with your AvPlat Account.
              </p>

              <p>
                <strong>8.2</strong> Upon receipt of a service confirmation from
                AvPlat, a legally binding agreement is formed between you and your
                selected Service Providers, subject to AvPlat's Terms and
                Conditions, including in particular AvPlat's cancellation policy.
                AvPlat Payments will collect and hold the Total Fees in escrow at
                the time of Customer's trip or service confirmation pursuant to the
                Payments Terms.
              </p>
            </SectionBlock>

            <SectionBlock
              id="cancellations"
              title="9. Service Revisions, Cancellations and Refunds, Resolution Center"
            >
              <p>
                <strong>9.1</strong> Customers are responsible for any revisions to
                a transaction and associated services that they make via the
                AvPlat Platform or direct AvPlat customer service to make ("Service
                Revisions"), and agree to pay any additional Listing Fees,
                Customer Fees and/or taxes associated with such Service Revisions.
              </p>

              <p>
                <strong>9.2</strong> Customers or Service Providers can cancel a
                confirmed service at any time subject to AvPlat's cancellation
                policy, and AvPlat Payments will provide any refund to the Customer
                or Service Provider in accordance with such cancellation policy.
                Unless extenuating circumstances exist, any amounts due to the
                Service Provider under the applicable cancellation policy will be
                remitted to the Service Provider by AvPlat Payments pursuant to the
                Payments Terms.
              </p>

              <p>
                <strong>9.3</strong> If a Service Provider cancels a confirmed
                service, the Customer will receive a full refund of the Total Fees
                for such service and AvPlat may publish an automated review on the
                Listing cancelled by the Service Provider indicating that a service
                was cancelled. In addition, AvPlat may impose a cancellation fee,
                unless the Service Provider has a valid reason for cancelling the
                service pursuant to the Terms or has legitimate concerns about the
                Customer's behavior.
              </p>

              <p>
                <strong>9.4</strong> For certain Services, if inclement weather
                creates an unsafe or uncomfortable scenario for Customers or
                Service Providers, Service Providers may revise or cancel a
                Service. If there is a substantial change in the itinerary or the
                Service needs to be cancelled, AvPlat will work with the Service
                Provider to provide Customers an alternative date for the Service,
                an appropriate refund or a reservice.
              </p>

              <p>
                <strong>9.5</strong> In certain circumstances, AvPlat may decide,
                in its sole discretion, that it is necessary to cancel a confirmed
                service and make appropriate refund and payout decisions if AvPlat
                believes in good faith, while taking the legitimate interests of
                both parties into account, this is necessary to avoid significant
                harm to AvPlat, other Members, third parties or property, or for
                any of the reasons set out in these Terms.
              </p>

              <p>
                <strong>9.7</strong> Members may use the AvPlat Resolution Center
                to send or request money for refunds and additional Services,
                Damage Claims. You agree to pay all amounts sent through the
                Resolution Center in connection with your AvPlat Account, and
                AvPlat Payments will handle all such payments pursuant to the
                Payments Terms.
              </p>

              <p className="font-semibold text-[#213e76]">9.8 AvPlat Cancellation Policy</p>
              <p className="font-semibold text-[#213e76]">9.8.1 TRIPS Module</p>

              <p>All Members acknowledge the following:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  NO CANCELLATION FEE Policy on all Listings, with the exception
                  of Overflight Permits and Flight Planning Listing Fees, up till
                  the time of service fulfilment.
                </li>
                <li>
                  Overflight Permits and Flight Planning service fulfilment starts
                  at the time of trip confirmation, and hence these services
                  CANNOT be cancelled. The Listing Fees, along with relevant
                  Service Fees, shall be charged at the time of service
                  confirmation and they are strictly NON-REFUNDABLE.
                </li>
                <li>
                  If a requested service is cancelled either because it is not
                  accepted by the Service Provider or the Customer cancels the
                  service request before it is accepted by the Service Provider,
                  any amounts collected by AvPlat Payments will be released to the
                  Customer. The timing to receive the refund will vary based on
                  the Payment Method and any applicable payment system (e.g.,
                  Visa, MasterCard, etc.) rules.
                </li>
              </ul>
            </SectionBlock>

            <SectionBlock id="reviews" title="10. Ratings and Reviews">
              <p>
                <strong>10.1</strong> Within a certain timeframe after completing a
                service, Customers and Service Providers can leave a public review
                ("Review") and submit a star rating ("Rating") about each other.
                Any Ratings or Reviews reflect the opinion of individual Members
                and do not reflect the opinion of AvPlat. Ratings and Reviews are
                not verified by AvPlat for accuracy and may be incorrect or
                misleading.
              </p>

              <p>
                <strong>10.2</strong> Ratings and Reviews by Customers and Service
                Providers must be fair, truthful and factual and may not contain
                any offensive or defamatory language. Ratings and Reviews must
                comply with AvPlat's Content Policy and Extortion Policy.
              </p>

              <p>
                <strong>10.3</strong> Members are prohibited from manipulating the
                Ratings and Reviews system in any manner, such as instructing a
                third party to write a positive or negative Review about another
                Member.
              </p>
            </SectionBlock>

            <SectionBlock id="currency" title="11. Rounding off, Currency conversion">
              <p>
                <strong>11.1</strong> AvPlat may, in its sole discretion, round up
                or round down USD amounts that are payable from or to Customers or
                Service Providers to the nearest whole number.
              </p>

              <p>
                <strong>11.2</strong> Although the AvPlat Platform may allow
                Customers to view the price of Listings in their desired/local
                currency, the currency available for Customers to make and receive
                payments is limited to the US Dollar, and may not include the
                default currency in any given geographic location. Details
                regarding currency conversion, including any associated fees, are
                detailed in the Payments Terms.
              </p>
            </SectionBlock>

            <SectionBlock id="taxes" title="12. Taxes">
              <p>
                <strong>12.1</strong> As a Service Provider you are solely
                responsible for determining your obligations to report, collect,
                remit or include in your Listing Fees any applicable taxes.
              </p>

              <p>
                <strong>12.2</strong> Tax regulations may require us to collect
                appropriate Tax information from Service Providers, or to withhold
                Taxes from payouts to Service Providers, or both. If a Service
                Provider fails to provide us with documentation that we determine
                to be sufficient to alleviate our obligation (if any) to withhold
                Taxes from payouts to you, we reserve the right to freeze all
                payouts, withhold such amounts as required by law, or to do both,
                until resolution.
              </p>

              <p>
                <strong>12.3</strong> You understand that any appropriate
                governmental agency, department and/or authority ("Tax Authority")
                where your business is located may require Taxes to be collected
                from Customers or Service Providers on Listing Fees, and to be
                remitted to the respective Tax Authority. The laws in jurisdictions
                may vary, but these Taxes may be required to be collected and
                remitted as a percentage of the Listing Fees set by Service
                Providers.
              </p>

              <p>
                <strong>12.4</strong> Customers and Service Providers agree that we
                may seek additional amounts from you in the event that the Taxes
                collected and/or remitted are insufficient to fully discharge your
                obligations to the Tax Authority, and agree that your sole remedy
                for Taxes collected is a refund of Taxes collected by AvPlat from
                the applicable Tax Authority in accordance with applicable
                procedures set by that Tax Authority.
              </p>
            </SectionBlock>

            <SectionBlock id="prohibited" title="13. Prohibited Activities">
              <p>
                <strong>13.1</strong> You are solely responsible for compliance
                with any and all laws, rules, regulations, and Tax obligations
                that may apply to your use of the AvPlat Platform. In connection
                with your use of the AvPlat Platform, you will not assist or enable
                others to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  breach or circumvent any applicable laws or regulations,
                  agreements with third-parties, third-party rights, or our Terms,
                  Privacy Policy or standards;
                </li>
                <li>
                  use the AvPlat Platform or Collective Content for any commercial
                  or other purposes that are not expressly permitted by these Terms
                  or in a manner that falsely implies AvPlat endorsement,
                  partnership or otherwise misleads others as to your affiliation
                  with AvPlat;
                </li>
                <li>
                  copy, store or otherwise access or use any information,
                  including personally identifiable information about any other
                  Member, contained on the AvPlat Platform in any way that is
                  inconsistent with AvPlat's Privacy Policy or these Terms or that
                  otherwise violates the privacy rights of Members or third
                  parties;
                </li>
                <li>
                  use the AvPlat Platform in connection with the distribution of
                  unsolicited commercial messages ("spam");
                </li>
                <li>
                  offer, as a Service Provider, any Service that you do not
                  yourself offer or have permission to offer through the AvPlat
                  Platform;
                </li>
                <li>
                  unless AvPlat explicitly permits otherwise, confirm any Listing
                  if you will not actually be using the Services yourself;
                </li>
                <li>
                  contact another Member for any purpose other than asking a
                  question related to your own service confirmations, Listing, or
                  the Member's use of the AvPlat Platform, including, but not
                  limited to, recruiting or otherwise soliciting any Member to join
                  third-party services, applications or websites, without our prior
                  written approval;
                </li>
                <li>
                  use the AvPlat Platform to request, make or accept service
                  confirmations independent of the AvPlat Platform, to circumvent
                  any Service Fees or for any other reason;
                </li>
                <li>
                  request, accept or make any payment for Listing Fees outside of
                  the AvPlat Platform or AvPlat Payments. If you do so, you
                  acknowledge and agree that you: (i) would be in breach of these
                  Terms; (ii) accept all risks and responsibility for such
                  payment, and (iii) hold AvPlat harmless from any liability for
                  such payment;
                </li>
                <li>
                  discriminate against or harass anyone on the basis of race,
                  national origin, religion, gender, gender identity, physical or
                  mental disability, medical condition, marital status, age or
                  sexual orientation, or otherwise engage in any abusive or
                  disruptive behavior;
                </li>
                <li>
                  use, display, mirror or frame the AvPlat Platform or Collective
                  Content, or any individual element within the AvPlat Platform,
                  AvPlat's name, any AvPlat trademark, logo or other proprietary
                  information, or the layout and design of any page or form
                  contained on a page in the AvPlat Platform, without AvPlat's
                  express written consent;
                </li>
                <li>
                  dilute, tarnish or otherwise harm the AvPlat brand in any way,
                  including through unauthorized use of Collective Content,
                  registering and/or using AvPlat or derivative terms in domain
                  names, trade names, trademarks or other source identifiers, or
                  registering and/or using domain names, trade names, trademarks
                  or other source identifiers that closely imitate or are
                  confusingly similar to AvPlat domains, trademarks, taglines,
                  promotional campaigns or Collective Content;
                </li>
                <li>
                  use any robots, spider, crawler, scraper or other automated means
                  or processes to access, collect data or other content from or
                  otherwise interact with the AvPlat Platform for any purpose;
                </li>
                <li>
                  avoid, bypass, remove, deactivate, impair, descramble, or
                  otherwise attempt to circumvent any technological measure
                  implemented by AvPlat or any of AvPlat's providers or any other
                  third party to protect the AvPlat Platform;
                </li>
                <li>
                  attempt to decipher, decompile, disassemble or reverse engineer
                  any of the software used to provide the AvPlat Platform;
                </li>
                <li>
                  take any action that damages or adversely affects, or could
                  damage or adversely affect the performance or proper functioning
                  of the AvPlat Platform;
                </li>
                <li>
                  export, re-export, import, or transfer the Application except as
                  authorized by Singapore law, the export control laws of your
                  jurisdiction, and any other applicable laws; or
                </li>
                <li>
                  violate or infringe anyone else's rights or otherwise cause harm
                  to anyone.
                </li>
              </ul>

              <p>
                <strong>13.2</strong> You acknowledge that AvPlat has no obligation
                to monitor the access to or use of the AvPlat Platform by any
                Member or to review, disable access to, or edit any Member
                Content, but has the right to do so to (i) operate, secure and
                improve the AvPlat Platform (including without limitation for fraud
                prevention, risk assessment, investigation and customer support
                purposes); (ii) ensure Members' compliance with these Terms; (iii)
                comply with applicable law or the order or requirement of a court,
                law enforcement or other administrative agency or governmental
                body; (iv) respond to Member Content that it determines is harmful
                or objectionable; or (v) as otherwise set forth in these Terms.
                Members agree to cooperate with and assist AvPlat in good faith,
                and to provide AvPlat with such information and take such actions
                as may be reasonably requested by AvPlat with respect to any
                investigation undertaken by AvPlat or a representative of AvPlat
                regarding the use or abuse of the AvPlat Platform.
              </p>
            </SectionBlock>

            <SectionBlock
              id="termination"
              title="14. Term and Termination, Suspension and other Measures"
            >
              <p>
                <strong>14.1</strong> This Agreement shall be effective for a one
                (1) year term, at the end of which it will automatically and
                continuously renew for subsequent one (1) year term until such time
                when you or AvPlat terminate the Agreement in accordance with this
                provision.
              </p>

              <p>
                <strong>14.2</strong> You may terminate this Agreement at any time
                by sending us an email at{" "}
                <a href="mailto:support@avplat.com" className="text-[#213e76] underline">
                  support@avplat.com
                </a>
                . If you cancel your AvPlat Account as a Service Provider, any
                confirmed service(s) will be automatically cancelled and your
                Customers will receive a full refund. If you cancel your AvPlat
                Account as a Customer, any confirmed service(s) will be
                automatically cancelled and any refund will depend upon the terms
                of the AvPlat's cancellation policy.
              </p>

              <p>
                <strong>14.3</strong> Without limiting our rights specified below,
                AvPlat may terminate this Agreement for convenience at any time by
                giving you thirty (30) days' notice via email to your registered
                email address.
              </p>

              <p>
                <strong>14.4</strong> AvPlat may immediately, without notice,
                terminate this Agreement if (i) you have materially breached your
                obligations under these Terms, the Payments Terms, our policies or
                standards, (ii) you have violated applicable laws, regulations or
                third party rights, or (iii) AvPlat believes in good faith that
                such action is reasonably necessary to protect the standards and
                reliability of AvPlat and its Members.
              </p>

              <p>
                <strong>14.5</strong> In addition, AvPlat may take any of the
                following measures if (ii) you have breached these Terms, the
                Payments Terms, our policies or standards, applicable laws,
                regulations; (iii) you have provided inaccurate, fraudulent,
                outdated or incomplete information during the AvPlat Account
                registration, Listing process or thereafter; (iv) you and/or your
                Listings or Services at any time fail to meet any applicable
                quality or eligibility criteria; (v) you have repeatedly received
                poor Ratings or Reviews or AvPlat otherwise becomes aware of or has
                received complaints about your performance or conduct; (vi) you
                have repeatedly cancelled confirmed services or failed to respond
                to service requests without a valid reason; or (vii) AvPlat
                believes in good faith that such action is reasonably necessary to
                protect the standards and reliability of AvPlat and its Members, or
                to prevent fraud or other illegal activity:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>cancel any pending or confirmed services;</li>
                <li>limit your access to or use of the AvPlat Platform;</li>
                <li>
                  temporarily or permanently revoke any special status associated
                  with your AvPlat Account; or
                </li>
                <li>
                  temporarily or in case of severe or repeated offenses permanently
                  suspend your AvPlat Account.
                </li>
              </ul>

              <p>
                In case of non-material breaches and where appropriate, you will be
                given notice of any intended measure by AvPlat and an opportunity
                to resolve the issue to AvPlat's reasonable satisfaction.
              </p>

              <p>
                <strong>14.6</strong> If we take any of the measures described
                above (i) we may refund your Customers in full for any and all
                confirmed services that have been cancelled, irrespective of
                preexisting cancellation policies, and (ii) you will not be
                entitled to any compensation for pending or confirmed services that
                were cancelled.
              </p>

              <p>
                <strong>14.7</strong> When this Agreement has been terminated, you
                are not entitled to a restoration of your AvPlat Account or any of
                your Member Content. If your access to or use of the AvPlat
                Platform has been limited or your AvPlat Account has been suspended
                or this Agreement has been terminated by us, you may not register a
                new AvPlat Account or access and use the AvPlat Platform through an
                AvPlat Account of another Member.
              </p>

              <p>
                <strong>14.8</strong> If you or we terminate this Agreement, the
                clauses of these Terms that reasonably should survive termination
                of the Agreement will remain in effect.
              </p>
            </SectionBlock>

            <SectionBlock id="disclaimers" title="15. Disclaimers">
              <p>
                If you choose to use the AvPlat Platform or Collective Content, you
                do so voluntarily and at your sole risk. The AvPlat Platform and
                Collective Content is provided "as is", without warranty of any
                kind, either express or implied.
              </p>

              <p>
                You agree that you have had whatever opportunity you deem necessary
                to investigate the AvPlat Services, laws, rules, or regulations
                that may be applicable to your Listings and/or Services you are
                receiving and that you are not relying upon any statement of law or
                fact made by AvPlat relating to a Listing.
              </p>

              <p>
                The foregoing disclaimers apply to the maximum extent permitted by
                law. You may have other statutory rights. However, the duration of
                statutorily required warranties, if any, shall be limited to the
                maximum extent permitted by law.
              </p>
            </SectionBlock>

            <SectionBlock id="liability" title="16. Liability">
              <p>
                <strong>16.1</strong> You acknowledge and agree that, to the
                maximum extent permitted by law, the entire risk arising out of
                your access to and use of the AvPlat Platform and Collective
                Content, your publishing or confirmation of any Listing via the
                AvPlat Platform, your use of a Service, or any other interaction
                you have with other Members whether in person or online remains
                with you. Neither AvPlat nor any other party involved in creating,
                producing, or delivering the AvPlat Platform or Collective Content
                will be liable for any incidental, special, exemplary or
                consequential damages, including lost profits, loss of data or loss
                of goodwill, service interruption, computer damage or system
                failure or the cost of substitute products or services, or for any
                damages for personal or bodily injury or emotional distress arising
                out of or in connection with (i) these Terms, (ii) from the use of
                or inability to use the AvPlat Platform or Collective Content,
                (iii) from any communications, interactions or meetings with other
                Members or other persons with whom you communicate, interact or
                meet with as a result of your use of the AvPlat Platform, or (iv)
                from your publishing or confirmation of a Listing, including the
                provision or use of a Listing's Services, whether based on
                warranty, contract, tort (including negligence), product liability
                or any other legal theory, and whether or not AvPlat has been
                informed of the possibility of such damage, even if a limited
                remedy set forth herein is found to have failed of its essential
                purpose. In no event will AvPlat's aggregate liability arising out
                of or in connection with these Terms and your use of the AvPlat
                Platform including, but not limited to, from your publishing or
                confirmation of any Listings via the AvPlat Platform, or from the
                use of or inability to use the AvPlat Platform or Collective
                Content and in connection with any Service, or interactions with
                any other Members, exceed the amounts you have paid or owe for
                services via the AvPlat Platform as a Customer in the twelve (12)
                month period prior to the event giving rise to the liability, or if
                you are a Service Provider, the amounts paid by AvPlat to you in
                the twelve (12) month period prior to the event giving rise to the
                liability, or one hundred U.S. dollars (US$100), if no such
                payments have been made, as applicable. The limitations of damages
                set forth above are fundamental elements of the basis of the
                bargain between AvPlat and you. Some jurisdictions do not allow the
                exclusion or limitation of liability for consequential or
                incidental damages, so the above limitation may not apply to you.
              </p>
            </SectionBlock>

            <SectionBlock id="indemnification" title="17. Indemnification">
              <p>
                You agree to release, defend (at AvPlat's option), indemnify, and
                hold AvPlat and its affiliates and subsidiaries, and their
                officers, directors, employees and agents, harmless from and
                against any claims, liabilities, damages, losses, and expenses,
                including, without limitation, reasonable legal and accounting
                fees, arising out of or in any way connected with (i) your breach
                of these Terms or our Policies or standards, (ii) your improper use
                of the AvPlat Platform or any AvPlat Services, (iii) your
                interaction with any Member, use of any Service, including without
                limitation any injuries, losses or damages (whether compensatory,
                direct, incidental, consequential or otherwise) of any kind
                arising in connection with or as a result of such interaction,
                stay, participation or use, or (iv) your breach of any laws,
                regulations or third party rights.
              </p>
            </SectionBlock>

            <SectionBlock
              id="disputes"
              title="18. Dispute Resolution and Arbitration Agreement"
            >
              <p>
                <strong>18.1 Overview of Dispute Resolution Process.</strong> AvPlat
                is committed to participating in a consumer-friendly dispute
                resolution process. To that end, these Terms provide for a two-part
                process for individuals to whom Section 19.1 applies: (1) an
                informal negotiation directly with AvPlat's customer service team,
                and (2) a binding arbitration in accordance with Clause 18.5.
              </p>

              <p>
                <strong>18.2 Pre-Arbitration Dispute Resolution and Notification.</strong>{" "}
                Prior to initiating an arbitration, you and AvPlat each agree to
                notify the other party of the dispute and attempt to negotiate an
                informal resolution to it first. We will contact you at the email
                address you have provided to us; you can contact AvPlat's customer
                service team by emailing us. If after a good faith effort to
                negotiate one of us feels the dispute has not and cannot be
                resolved informally, the party intending to pursue arbitration
                agrees to notify the other party via email prior to initiating the
                arbitration.
              </p>

              <p>
                <strong>18.3 Agreement to Arbitrate.</strong> You and AvPlat
                mutually agree that any dispute, claim or controversy arising out
                of or relating to these Terms or the breach, termination,
                enforcement or interpretation thereof, or to the use of the AvPlat
                Platform, the Services, or the Collective Content (collectively,
                "Disputes") will be settled by binding arbitration (the
                "Arbitration Agreement"). If there is a dispute about whether this
                Arbitration Agreement can be enforced or applies to our Dispute,
                you and AvPlat agree that the arbitrator will decide that issue.
              </p>

              <p>
                <strong>18.4 Exceptions to Arbitration Agreement.</strong> You and
                AvPlat each agree that the following claims are exceptions to the
                Arbitration Agreement and will be brought in a judicial proceeding
                in a court of competent jurisdiction: (i) Any claim related to
                actual or threatened infringement, misappropriation or violation of
                a party's copyrights, trademarks, trade secrets, patents, or other
                intellectual property rights; (ii) Any claim seeking emergency
                injunctive relief based on exigent circumstances (e.g., imminent
                danger or commission of a crime, hacking, cyber-attack).
              </p>

              <p>
                <strong>18.5 Arbitration Rules and Governing Law.</strong> Any
                dispute arising out of or in connection with these Terms, including
                any question regarding its existence, validity or termination,
                shall be referred to and finally resolved by arbitration in
                Singapore in accordance with the Arbitration Rules of the Singapore
                International Arbitration Centre ("SIAC Rules") for the time being
                in force, which rules are deemed to be incorporated by reference in
                this clause. The tribunal shall consist of 3 members. The language
                of the arbitration shall be English. The venue and seat of the
                arbitration shall be Singapore.
              </p>

              <p>
                <strong>18.6 Arbitrator's Decision.</strong> The arbitrator's
                decision will include the essential findings and conclusions upon
                                    which the arbitrator based the award. Judgment on the arbitration
                award may be entered in any court with proper jurisdiction. The
                arbitrator may award declaratory or injunctive relief only on an
                individual basis and only to the extent necessary to provide
                relief warranted by the claimant's individual claim.
              </p>

              <p>
                <strong>18.7 Jury Trial Waiver.</strong> You and AvPlat
                acknowledge and agree that we are each waiving the right to a
                trial by jury as to all arbitrable Disputes.
              </p>

              <p>
                <strong>18.8 No Class Actions or Representative Proceedings.</strong>{" "}
                You and AvPlat acknowledge and agree that we are each waiving the
                right to participate as a plaintiff or class member in any
                purported class action lawsuit, class-wide arbitration, private
                attorney-general action, or any other representative proceeding as
                to all Disputes. Further, unless you and AvPlat both otherwise
                agree in writing, the arbitrator may not consolidate more than one
                party's claims and may not otherwise preside over any form of any
                class or representative proceeding. If this paragraph is held
                unenforceable with respect to any Dispute, then the entirety of
                the Arbitration Agreement will be deemed void with respect to such
                Dispute.
              </p>

              <p>
                <strong>18.9 Severability.</strong> In the event that any portion
                of this Arbitration Agreement is deemed illegal or unenforceable,
                such provision shall be severed and the remainder of the
                Arbitration Agreement shall be given full force and effect.
              </p>

              <p>
                <strong>18.10 Survival.</strong> This Section 18 will survive any
                termination of these Terms and will continue to apply even if you
                stop using the AvPlat Platform or terminate your AvPlat Account.
              </p>
            </SectionBlock>

            <SectionBlock id="feedback" title="19. Feedback">
              <p>
                We welcome and encourage you to provide feedback, comments and
                suggestions for improvements to the AvPlat Platform ("Feedback").
                You may submit Feedback by visiting{" "}
                <a
                  href="https://support.avplat.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#213e76] underline"
                >
                  support.avplat.com
                </a>{" "}
                or mailing us at{" "}
                <a href="mailto:support@avplat.com" className="text-[#213e76] underline">
                  support@avplat.com
                </a>
                . Any Feedback you submit to us will be considered
                non-confidential and non-proprietary to you. By submitting
                Feedback to us, you grant us a non-exclusive, worldwide,
                royalty-free, irrevocable, sub-licensable, perpetual license to
                use and publish those ideas and materials for any purpose,
                without compensation to you.
              </p>
            </SectionBlock>

            <SectionBlock id="law" title="20. Applicable Law and Jurisdiction">
              <p>
                These Terms will be interpreted in accordance with Singapore law.
                The application of the United Nations Convention on Contracts for
                the International Sale of Goods (CISG) is excluded. You agree to
                submit to the non-exclusive jurisdiction of the Singapore courts.
                Judicial proceedings that you are able to bring against us arising
                from or in connection with these Terms may only be brought in a
                court located in Singapore.
              </p>
            </SectionBlock>

            <SectionBlock id="general" title="21. General Provisions">
              <p>
                <strong>21.1</strong> Except as they may be supplemented by
                additional terms and conditions, policies, guidelines or
                standards, these Terms constitute the entire Agreement between
                AvPlat and you pertaining to the subject matter hereof, and
                supersede any and all prior oral or written understandings or
                agreements between AvPlat and you in relation to the access to and
                use of the AvPlat Platform.
              </p>

              <p>
                <strong>21.2</strong> No joint venture, partnership, employment,
                or agency relationship exists between you and AvPlat as a result
                of this Agreement or your use of the AvPlat Platform.
              </p>

              <p>
                <strong>21.3</strong> These Terms do not and are not intended to
                confer any rights or remedies upon any person other than the
                parties.
              </p>

              <p>
                <strong>21.4</strong> If any provision of these Terms is held to
                be invalid or unenforceable, such provision will be struck and
                will not affect the validity and enforceability of the remaining
                provisions.
              </p>

              <p>
                <strong>21.5</strong> AvPlat's failure to enforce any right or
                provision in these Terms will not constitute a waiver of such
                right or provision unless acknowledged and agreed to by us in
                writing. Except as expressly set forth in these Terms, the
                exercise by either party of any of its remedies under these Terms
                                will be without prejudice to its other remedies under these
                Terms or otherwise permitted under law.
              </p>

              <p>
                <strong>21.6</strong> You may not assign, transfer or delegate
                this Agreement and your rights and obligations hereunder without
                AvPlat's prior written consent. AvPlat may without restriction
                assign, transfer or delegate this Agreement and any rights and
                obligations hereunder, at its sole discretion, with 30 days prior
                notice. Your right to terminate this Agreement at any time
                remains unaffected.
              </p>

              <p>
                <strong>21.7</strong> Unless specified otherwise, any notices or
                other communications to Members permitted or required under this
                Agreement, will be in writing and given by AvPlat via email,
                AvPlat Platform notification.
              </p>

              <p>
                <strong>21.8</strong> If you have any questions about these Terms
                please email us at{" "}
                <a href="mailto:support@avplat.com" className="text-[#213e76] underline">
                  support@avplat.com
                </a>
                .
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-intro"
              title="Payments Terms of Service"
              primary
            >
              <p>
                Please read these Payments Terms of Service carefully as they
                contain important information about your legal rights, remedies
                and obligations. By using the Payment Services, you agree to
                comply with and be bound by these Payments Terms of Service.
              </p>

              <p>
                By accepting these Payments Terms of Service, you agree to be
                bound by this arbitration clause and class action waiver. Please
                read it carefully.
              </p>

              <p>
                These Payments Terms of Service ("Payments Terms") constitute a
                legally binding agreement ("Agreement") between you and AvPlat
                Payments governing the Payment Services (defined below) conducted
                through or in connection with the AvPlat Platform.
              </p>

              <p>
                When these Payments Terms mention "AvPlat Payments," "we," "us,"
                or "our," it refers to the AvPlat Payments company you are
                contracting with for Payment Services, which is AvPlat India
                ("AvPlat (INDIA) Pvt Ltd").
              </p>

              <p>
                The AvPlat Terms of Service ("Terms") separately govern your use
                of the AvPlat Platform. All capitalized terms have the meaning
                set forth in the Terms unless otherwise defined in these Payments
                Terms.
              </p>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h4 className="text-base font-semibold text-[#213e76] mb-3">
                  Table of Contents
                </h4>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-charcoal">
                  <li>Scope and Use of the Payment Services</li>
                  <li>Key Definitions</li>
                  <li>Modification of these Payments Terms</li>
                  <li>Eligibility, Member Verification</li>
                  <li>Account Registration</li>
                  <li>Payment Methods and Payout Methods</li>
                  <li>Financial Terms for Service Providers</li>
                  <li>Financial Terms for Customers</li>
                  <li>Appointment of AvPlat Payments as Limited Payment Collection Agent</li>
                  <li>General Financial Terms</li>
                  <li>Taxes</li>
                  <li>Currency Conversion</li>
                  <li>Prohibited Activities</li>
                  <li>Intellectual Property Ownership, Rights Notices</li>
                  <li>Feedback</li>
                  <li>Disclaimers</li>
                  <li>Liability</li>
                  <li>Indemnification</li>
                  <li>Termination, Suspension, and other Measures</li>
                  <li>Applicable Law and Jurisdiction</li>
                  <li>General Provisions</li>
                  <li>Contacting AvPlat Payments</li>
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock
              id="payments-scope"
              title="1. Scope and Use of the Payment Services"
            >
              <p>
                <strong>1.1</strong> AvPlat Payments provides payments services to
                Members, including payment collection services, payments and
                payouts, in connection with and through the AvPlat Platform
                ("Payment Services").
              </p>

              <p>
                <strong>1.2</strong> AvPlat Payments may restrict the availability
                of the Payment Services, or certain services or features thereof,
                to carry out maintenance measures that ensure the proper or
                improved functioning of the Payment Services. AvPlat Payments may
                improve, enhance and modify the Payment Services and introduce new
                Payment Services from time to time.
              </p>

              <p>
                <strong>1.3</strong> The Payment Services may contain links to
                third-party websites or resources ("Third-Party Services"). Such
                Third-Party Services are subject to different terms and conditions
                and privacy practices and Members should review them
                independently. AvPlat Payments is not responsible or liable for
                the availability or accuracy of such Third-Party Services, or the
                content, products, or services available from such Third-Party
                Services. Links to such Third-Party Services are not an
                endorsement by AvPlat Payments of such Third-Party Services.
              </p>

              <p>
                <strong>1.4</strong> You may not use the Payment Services except
                as authorized by Indian law, the laws of the jurisdiction in
                which you reside, and any other applicable laws. In addition to
                complying with the above, you must also comply with any relevant
                export control laws in your local jurisdiction.
              </p>

              <p>
                <strong>1.5</strong> Your access to or use of certain Payment
                Services may be subject to, or require you to accept, additional
                terms and conditions. If there is a conflict between these
                Payments Terms and terms and conditions applicable for a specific
                Payment Service, the latter terms and conditions will take
                precedence with respect to your use of or access to that Payment
                Service, unless specified otherwise.
              </p>
            </SectionBlock>

            <SectionBlock id="payments-definitions" title="2. Key Definitions">
              <p>
                <strong>"Base Exchange Rate"</strong> means a system-wide rate
                used by AvPlat Payments for conversion between Customer Currency
                and Platform Currency in case of Payins and Platform Currency and
                Listing Currency in case of Payouts. It does not include any fee
                or mark-up by AvPlat Payments. AvPlat Payments establishes the
                Base Exchange Rate using data from one or more third parties such
                as FIXER (
                <a
                  href="https://www.fixer.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#213e76] underline"
                >
                  www.fixer.io
                </a>
                ).
              </p>

              <p>
                <strong>"Customer Currency"</strong> means the currency in which
                a Customer will be able to see the Listings. For example, the
                Customer Currency for a Customer located in France would be the
                Euro, and the Customer Currency for a Customer located in the UAE
                would be the Dirham.
              </p>

              <p>
                <strong>"Listing Currency"</strong> means the default currency
                associated with the country in which the Listing is located. For
                example, the Listing Currency for a Listing located in New York
                would be U.S. dollars, and the Listing Currency for a Listing
                located in Japan would be Japanese Yen.
              </p>

              <p>
                <strong>"Platform Currency"</strong> means the US Dollar, the
                currency in which all transactions in the AvPlat Platform are
                denominated in. In case of Service Providers, all Listings are
                converted from Listing Currency to USD at the time of set up. In
                case of Customers, all Listings will display USD and the
                appropriate Customer Currency.
              </p>

              <p>
                <strong>"Payin"</strong> means a payment received by AvPlat
                Payments from a Member for services (such as Listing Fees) to be
                performed in connection with the AvPlat Platform. All Payins will
                be in USD, converted from Customer Currency to USD at Base
                Exchange Rate as on the date of Payin. If the date of Payin
                happens to be on a bank holiday in India, the Base Exchange Rate
                related to the day before the Payin date shall be applicable.
              </p>

              <p>
                <strong>"Payout"</strong> means a payment initiated by AvPlat
                Payments to a Member for services (such as Listing Fees)
                performed in connection with the AvPlat Platform. All Payouts
                will be in USD, converted from USD to Listing Currency at Base
                Exchange Rate as on the date of Payout. If the date of Payout
                happens to be on a bank holiday in India, the Base Exchange Rate
                related to the day before the Payout date shall be applicable.
              </p>

              <p>
                <strong>"Payin Method"</strong> means a financial instrument that
                you have added to your AvPlat Account, such as a credit card,
                debit card, or bank transfer.
              </p>

              <p>
                <strong>"Payout Method"</strong> means a financial instrument that
                you have added to your AvPlat Account, such as a bank transfer.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-modification"
              title="3. Modification of these Payments Terms"
            >
              <p>
                AvPlat Payments reserves the right to modify these Payments Terms
                at any time in accordance with this provision. If we make changes
                to these Payments Terms, we will post the revised Payments Terms
                on the AvPlat Platform and update the "Last Updated" date at the
                top of these Payments Terms. We will also provide you with notice
                by email of the modification at least thirty (30) days before the
                date they become effective, however, if you disagree with the
                revised Payments Terms, you may terminate this Agreement with
                immediate effect. We will inform you about your right of refusal
                and your right to terminate this Agreement in the notification
                email. If you do not terminate your Agreement before the date the
                revised Terms become effective, your continued use of the Payment
                Services will constitute acceptance of the revised Payments Terms.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-eligibility"
              title="4. Eligibility, Member Verification"
            >
              <p>
                <strong>4.1</strong> You must be a body corporate to be able to
                enter into legally binding contracts to access and use the
                Payment Services. By accessing or using the Payment Services you
                represent and warrant that you are 18 or older and have the legal
                capacity and authority to enter into a contract.
              </p>

              <p>
                <strong>4.2</strong> If you are agreeing to these Payments Terms
                on behalf of a company or other legal entity, you represent and
                warrant that you have the authority to bind that company or other
                legal entity to these Payments Terms and, in such event, "you"
                and "your" will refer and apply to that company or other legal
                entity.
              </p>

              <p>
                <strong>4.3</strong> AvPlat Payments may make access to and use
                of certain areas or features of the Payment Services subject to
                certain conditions or requirements, such as completing a
                verification process or meeting specific eligibility criteria.
              </p>

              <p>
                <strong>4.4</strong> We may make inquiries we consider necessary
                to help verify or check your identity or prevent fraud. In some
                jurisdictions, we have a legal obligation to collect identity
                information to comply with anti-money laundering regulations. This
                may include (i) asking you to provide Company Incorporation and
                Aircraft Registration Documentation, (ii) requiring you to take
                steps to confirm ownership of your email address, Payin Methods
                or Payout Methods, or (iii) attempting to screen your information
                against third-party databases. AvPlat Payments reserves the right
                to close, suspend, or limit access to the Payment Services in the
                event we are unable to obtain or verify any of this information.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-account"
              title="5. Account Registration"
            >
              <p>
                In order to use the Payment Services, you must have an AvPlat
                Account in good standing. If you or AvPlat closes your AvPlat
                Account for any reason, you will no longer be able to use the
                Payment Services.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-methods"
              title="6. Payin Methods and Payout Methods"
            >
              <p>
                <strong>6.1</strong> When you add a Payin Method or Payout Method
                to your AvPlat Account, you will be asked to provide customary
                billing information such as name, billing address, and financial
                instrument information either to AvPlat Payments or its
                third-party payment processor(s). You must provide accurate,
                current, and complete information when adding a Payin Method or
                Payout Method, and it is your obligation to keep your Payin
                Method and Payout Method up-to-date at all times. The information
                required will include:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  for direct deposit, your address, name on the account, account
                  type, routing number, and account number;
                </li>
                <li>
                  for credit cards, your address, email address, and payout
                  currency; and
                </li>
                <li>
                  for prepaid debit cards, your address, and account information.
                </li>
              </ul>

              <p>
                <strong>6.2</strong> When you add or use a new Payin Method,
                AvPlat Payments may verify the Payin Method by authorizing a
                nominal amount, not to exceed one dollar ($1), or a similar sum
                in the Payin Method's local currency (e.g., one euro or one
                British pound). For further verification, we may also (i)
                authorize your Payin Method for one or two additional nominal
                amounts, each not to exceed two dollars ($2) or a similar sum in
                the Payin Method's local currency (e.g., two euros or two British
                pounds), and ask you to confirm these amounts, or (ii) require
                you to upload a billing statement. When you add a Payin Method
                during checkout, we will automatically save that Payin Method to
                your AvPlat Account so it can be used for a future transaction.
              </p>

              <p>
                <strong>6.3</strong> To verify your Payout Method, AvPlat
                Payments may send one or more payments of nominal amounts to your
                Payout Method. We may, and retain the right to, initiate refunds
                of these amounts from your Payout Method.
              </p>

              <p>
                <strong>6.5</strong> You authorize AvPlat Payments to store your
                Payin Method information and charge your Payin Method as outlined
                in these Payments Terms. If your Payin Method's account
                information changes (e.g., account number, routing number,
                expiration date) as a result of re-issuance or otherwise, we may
                acquire that information from our financial services partner or
                your bank and update your Payment Method on file in your AvPlat
                Account.
              </p>

              <p>
                <strong>6.6</strong> You are solely responsible for the accuracy
                and completeness of your Payin Method and Payout Method
                information. AvPlat Payments is not responsible for any loss
                suffered by you as a result of incorrect Payin Method or Payout
                Method information provided by you.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-provider-financial"
              title="7. Financial Terms for Service Providers"
            >
              <p className="font-semibold text-[#213e76]">7.1 Generally</p>

              <p>
                Generally speaking, AvPlat Payments will collect and hold in
                escrow the Total Fees from a Customer at the time of service
                confirmation by the Customer, at which time the funds will
                immediately reflect as a hold balance in your app wallet, and
                invoice the Total Fees on the Customer at the time of service
                fulfilment by the Service Provider, at which time the funds will
                immediately reflect as available balance in your app wallet.
              </p>

              <p className="font-semibold text-[#213e76]">7.2 Payouts</p>

              <p>
                <strong>7.2.1</strong> In order to receive a Payout you must have
                a valid Payout Method linked to your AvPlat Account. AvPlat
                Payments will generally initiate Payouts to your selected Payout
                Method within 4 days of you initiating a payout request. In
                certain jurisdictions or instances, AvPlat Payments may offer you
                a different time or trigger for payment. The time it takes to
                receive Payouts once released by AvPlat Payments may depend upon
                the Payout Method you select. AvPlat Payments may delay or cancel
                any Payout for purposes of preventing unlawful activity or fraud,
                risk assessment, security, or investigation.
              </p>

              <p>
                <strong>7.2.2</strong> Your Payout for a service will be the
                Listing Fee less applicable Service Provider Fees with applicable
                taxes.
              </p>

              <p>
                <strong>7.2.3</strong> AvPlat Payments will remit your Payouts in
                the Platform Currency, which will be converted to the Listing
                Currency at the Base Exchange Rate. Amounts may be rounded up or
                down as described in Section 10.5 ("Rounding Off").
              </p>

              <p>
                <strong>7.2.4</strong> For compliance or operational reasons,
                AvPlat Payments may limit the value of each individual Payout. If
                you are due an amount above that limit, AvPlat may initiate a
                series of Payouts (potentially over multiple days) in order to
                provide your full payout amount.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-customer-financial"
              title="8. Financial Terms for Customers"
            >
              <p>
                <strong>8.1</strong> You authorize AvPlat Payments to charge your
                Payin Method the Total Fees for any service confirmation
                requested in connection with your AvPlat Account. AvPlat Payments
                will collect the Total Fees in the manner agreed between you and
                AvPlat Payments via the AvPlat Platform. AvPlat Payments will
                generally collect and hold in escrow the Total Fees at the time
                of service confirmation and will generally invoice you and pay
                the Total Fees to the Service Provider after the Service Provider
                fulfills your service request. AvPlat Payments may offer
                alternative options for the timing and manner of payment; any
                additional fees for using offered payment options will be
                displayed via the AvPlat Platform and included in the Total Fees,
                and you agree to pay such fees by selecting the payment option.
                If AvPlat Payments is unable to collect the Total Fees as
                scheduled, AvPlat Payments will collect the Total Fees at a later
                point. Once the payment transaction for your requested service is
                successfully completed you will receive a confirmation email.
              </p>

              <p>
                <strong>8.3</strong> If a requested service is cancelled either
                because it is not accepted by the Service Provider or you cancel
                the service request before it is accepted by the Service
                Provider, any amounts collected by AvPlat Payments will be
                released to you. The timing to receive the refund or for the
                pre-authorization to be released will vary based on the Payin
                Method and any applicable payment system (e.g., Visa, MasterCard,
                etc.) rules.
              </p>

              <p>
                <strong>8.4</strong> You authorize AvPlat Payments to perform the
                Payin Method verifications described in Sections 6 and 8, and to
                charge your Payin Method for any services made in connection with
                your AvPlat Account. You hereby authorize AvPlat Payments to
                collect any amounts due by charging the Payin Method provided at
                set up or service confirmation, either directly by AvPlat
                Payments or indirectly, via a third-party online payment
                processor, and/or by one or more of the payin methods available
                on the AvPlat Platform.
              </p>

              <p>
                <strong>8.5</strong> If AvPlat Payments is unable collect any
                amounts due via your selected Payin Method, you authorize AvPlat
                Payments to charge any other Payin Methods on file in your AvPlat
                Account.
              </p>

              <p>
                <strong>8.6</strong> If you use additional services, you
                authorize AvPlat Payments to charge any Payin Method(s) you have
                on file in your AvPlat Account to collect the fees for the
                additional services ("Additional Fees") payable under the Terms.
                In addition, AvPlat Payments may recover any costs and expenses
                it incurs in collecting the Additional Fees by charging any Payin
                Method(s) you have on file in your AvPlat Account.
              </p>

              <p>
                <strong>8.7</strong> AvPlat Payments is not responsible for any
                fees that a Customer's third-party payment service provider may
                impose when AvPlat Payments charges the Customer's Payin Method,
                and AvPlat Payments disclaims all liability in this regard.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-agent"
              title="9. Appointment of AvPlat Payments as Limited Payment Collection Agent"
            >
              <p>
                <strong>9.1</strong> Each Member collecting payment for services
                provided via the AvPlat Platform (such as Services, or
                transactions facilitated through the Resolution Center)
                ("Providing Member") hereby appoints AvPlat Payments as the
                Providing Member's payment collection agent solely for the
                limited purpose of accepting funds from Members purchasing such
                services ("Purchasing Members").
              </p>

              <p>
                <strong>9.2</strong> Each Providing Member agrees that payment
                made by a Purchasing Member through AvPlat Payments, shall be
                considered the same as a payment made directly to the Providing
                Member, and the Providing Member will provide the purchased
                services to the Purchasing Member in the agreed-upon manner as if
                the Providing Member has received the payment directly from the
                Purchasing Member. Each Providing Member agrees that AvPlat
                Payments may refund the Purchasing Member in accordance with the
                Terms. Each Providing Member understands that AvPlat Payments'
                obligation to pay the Providing Member is subject to and
                conditional upon successful receipt of the associated payments
                from Purchasing Members. AvPlat Payments guarantees payments to
                Providing Members only for such amounts that have been
                successfully received by AvPlat Payments from Purchasing Members
                in accordance with these Payments Terms. In accepting appointment
                as the limited payment collection agent of the Providing Member,
                AvPlat Payments assumes no liability for any acts or omissions of
                the Providing Member.
              </p>

              <p>
                <strong>9.3</strong> Each Purchasing Member acknowledges and
                agrees that, notwithstanding the fact that AvPlat Payments is not
                a party to the agreement between you and the Providing Member,
                AvPlat Payments acts as the Providing Member's payment collection
                agent for the limited purpose of accepting payments from you on
                behalf of the Providing Member. Upon your payment of the funds to
                AvPlat Payments, your payment obligation to the Providing Member
                for the agreed upon amount is extinguished, and AvPlat Payments
                is responsible for remitting the funds to the Providing Member in
                the manner described in these Payments Terms, which constitute
                AvPlat Payments' agreement with the Purchasing Member. In the
                event that AvPlat Payments does not remit any such amounts, the
                Providing Member will have recourse only against AvPlat Payments
                and not the Purchasing Member directly.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-general-financial"
              title="10. General Financial Terms"
            >
              <p className="font-semibold text-[#213e76]">10.1 Service Fees and Other Fees</p>

              <p>
                <strong>10.1.1</strong> AvPlat Payments collects the Service Fees
                charged by AvPlat pursuant to the Terms.
              </p>

              <p>
                AvPlat Payments deducts the Service Provider Fees from the Listing
                Fees before remitting the Payout to the Service Provider as
                described in these Payments Terms.
              </p>

              <p>
                Customer Fees are included in the Total Fees collected by AvPlat
                Payments.
              </p>

              <p>
                Where applicable, AvPlat Payments may also collect Taxes in
                respect of the Service Provider Fees and Customer Fees.
              </p>

              <p>
                <strong>10.1.2 TRIPS Module:</strong> Until further notice, the
                following Service Fees shall apply:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>For Customers: 5% (five percent) of Listing Fees</li>
                <li>For Service Providers: 3% (three percent) of Listing Fees</li>
                <li>
                  Credit Card and Payment Gateway Fees: All credit card and
                  payment gateway fees will be borne by AvPlat.
                </li>
              </ul>

              <p>
                <strong>10.2.3</strong> AvPlat Payments may charge additional
                fees for use of certain Payment Services and any applicable fees
                will be disclosed to Members via the AvPlat Platform.
              </p>

              <p className="font-semibold text-[#213e76]">10.2 Cancellations and Refunds</p>

              <p>
                <strong>10.2.1</strong> If a Customer cancels a confirmed
                service, AvPlat Payments will refund the amount of the Total Fees
                due to the Customer pursuant to AvPlat's Cancellation Policy and
                as otherwise in accordance with the Terms. AvPlat Payments will
                also initiate a Payout of any portion of the Total Fees due to
                the Service Provider under the applicable cancellation policy.
              </p>

              <p>
                <strong>10.2.2</strong> If a Service Provider cancels a confirmed
                service, AvPlat Payments will provide the Customer a full refund
                of the Total Fees within a commercially reasonable time of the
                cancellation. In some instances, AvPlat may allow the Customer to
                apply the refund to a new service, in which case AvPlat Payments
                will credit the amount against the Customer's subsequent service
                requests at the Customer's direction.
              </p>

              <p>
                <strong>10.2.3</strong> All refunds may be subject to the Terms.
                If a Customer or AvPlat decides for any reason to cancel a
                confirmed service pursuant to the Terms you agree that AvPlat
                Payments will not have any liability for such cancellations or
                refunds aside from its obligations to remit refunds or Payouts
                pursuant to these Payments Terms.
              </p>

              <p className="font-semibold text-[#213e76]">10.3 Payment Processing Errors</p>

              <p>
                We will take steps to rectify any payment processing errors that
                we become aware of. These steps may include crediting or debiting
                (as appropriate) the same Payout Method or Payin Method used for
                the original Payout to or payment by you, so that you end up
                receiving or paying the correct amount.
              </p>

              <p className="font-semibold text-[#213e76]">10.4 Service Revisions</p>

              <p>
                If, as a Customer, you owe additional amounts to AvPlat due to a
                Service Revision, you agree that AvPlat Payments may collect such
                amounts by charging the Payin Method used to make your service
                confirmations (or, if that Payin Method is not available, through
                any other authorized Payin Method in your AvPlat Account). If, as
                a Service Provider, you owe AvPlat any amounts due to a Service
                Revision, you agree that AvPlat Payments may collect those
                amounts pursuant to Section 7 ("Financial Terms for Service
                Providers") and as otherwise permitted under these Payments
                Terms.
              </p>

              <p className="font-semibold text-[#213e76]">10.5 Collections</p>

              <p>
                If AvPlat Payments is unable to collect any amounts you owe under
                these Payments Terms, AvPlat Payments may engage in collection
                efforts to recover such amounts from you. AvPlat Payments will
                deem any owed amounts overdue when: (a) for authorized charges,
                thirty (30) days have elapsed after AvPlat Payments first
                attempts to charge the Member's Payin Method or the associated
                services have been provided, whichever is later; and (b) for
                withholdings from a Service Provider's future Payouts, ninety
                (90) days have elapsed after the adjustment is made to the
                Service Provider's account or the associated services have been
                provided, whichever is later. Any overdue amounts not collected
                within ninety (90) days after they become overdue will be deemed
                to be in default. You hereby explicitly agree that all
                communication in relation to amounts owed will be made by
                electronic mail or by phone, as provided to AvPlat and/or AvPlat
                Payments by you. Such communication may be made by AvPlat, AvPlat
                Payments, or by anyone on their behalf, including but not limited
                to a third-party collection agent.
              </p>
            </SectionBlock>

            <SectionBlock id="payments-taxes" title="11. Taxes">
              <p>
                <strong>11.1</strong> Customers and Service Providers agree that
                we may seek additional amounts from you in the event that the
                taxes collected and/or remitted are insufficient to fully
                discharge your obligations to the Tax Authority, and agree that
                your sole remedy for Taxes collected is a refund of taxes
                collected by AvPlat from the applicable Tax Authority in
                accordance with applicable procedures set by that Tax Authority.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-conversion"
              title="12. Currency Conversion"
            >
              <p>
                AvPlat Payments will do a currency conversion in the following
                situations:
              </p>

              <p className="font-semibold text-[#213e76]">For Customers:</p>

              <p>
                Customers pay in using their Customer Currency. Customer Currency
                is converted into Platform Currency (USD) using the Base Exchange
                Rate as on the Payin date. Customer Wallet will display in USD
                value, with approximate Customer Currency Value. If the date of
                Payin happens to be on a bank holiday in India, the exchange rate
                related to the day before the Payin date shall be applicable. You
                will be able to view the exchange rate applied to do the currency
                conversion before you complete the pay in.
              </p>

              <p>
                Listings display Platform Currency as well as approximate
                Customer Currency.
              </p>

              <p className="font-semibold text-[#213e76]">For Service Providers:</p>

              <p>
                Service Providers create their Listing with the Listing Currency.
                Listing Currency is converted into Platform Currency (USD) using
                the Base Exchange Rate as on the Listing publishing date. You
                will be able to view the exchange rate applied to do the currency
                conversion before you complete the set up and publish.
              </p>

              <p>
                Payouts are in USD, with the USD amount being converted into
                Listing Currency using the Base Exchange Rate. If the date of
                Payout happens to be on a bank holiday in India, the Base
                exchange rate related to the day before the Payout date shall be
                applicable. You will be able to view the exchange rate applied to
                do the currency conversion.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-prohibited"
              title="13. Prohibited Activities"
            >
              <p>
                You are solely responsible for compliance with any and all laws,
                rules, regulations, and tax obligations that may apply to your
                use of the Payment Services. In connection with your use of the
                Payment Services, you may not and you agree that you will not and
                will not assist or enable others to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  breach or circumvent any applicable laws or regulations,
                  agreements with third parties, third-party rights, or the
                  Terms, policies, or standards;
                </li>
                <li>
                  use the Payment Services for any commercial or other purposes
                  that are not expressly permitted by these Payments Terms;
                </li>
                <li>
                  register or use any Payment Method or Payout Method with your
                  AvPlat Account that is not yours or you do not have
                  authorization to use;
                </li>
                <li>
                  avoid, bypass, remove, deactivate, impair, descramble, or
                  otherwise circumvent any technological measure implemented by
                  AvPlat Payments or any of AvPlat Payments' providers or any
                  other third party to protect the Payment Services;
                </li>
                <li>
                  take any action that damages or adversely affects, or could
                  damage or adversely affect, the performance or proper
                  functioning of the Payment Services;
                </li>
                <li>
                  attempt to decipher, decompile, disassemble, or reverse
                  engineer any of the software used to provide the Payment
                  Services; or
                </li>
                <li>
                  violate or infringe anyone else's rights or otherwise cause
                  harm to anyone.
                </li>
              </ul>
            </SectionBlock>

            <SectionBlock
              id="payments-ip"
              title="14. Intellectual Property Ownership, Rights Notices"
            >
              <p>
                <strong>14.1</strong> The Payment Services are protected by
                copyright, trademark, and other laws of India, Singapore and
                other countries. You acknowledge and agree that the Payment
                Services, including all associated intellectual property rights,
                are the exclusive property of AvPlat, AvPlat Payments and its
                licensors. You will not remove, alter or obscure any copyright,
                trademark, service mark or other proprietary rights notices
                incorporated in or accompanying the Payment Services. All
                trademarks, service marks, logos, trade names, and any other
                proprietary designations of AvPlat or AvPlat Payments used on or
                in connection with the Payment Services are trademarks or
                registered trademarks of AvPlat or AvPlat Payments in various
                jurisdictions. Trademarks, service marks, logos, trade names, and
                any other proprietary designations of third parties used on or in
                connection with Payment Services are used for identification
                purposes only and may be the property of their respective owners.
              </p>

              <p>
                <strong>14.2</strong> You will not use, copy, adapt, modify,
                prepare derivative works based upon, distribute, license, sell,
                transfer, publicly display, publicly perform, transmit,
                broadcast, or otherwise exploit the Payment Services, except as
                expressly permitted in these Payments Terms. No licenses or
                rights are granted to you by implication or otherwise under any
                intellectual property rights owned or controlled by AvPlat,
                AvPlat Payments, or its licensors, except for the licenses and
                rights expressly granted in these Payments Terms.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-feedback"
              title="15. Feedback"
            >
              <p>
                We welcome and encourage you to provide feedback, comments, and
                suggestions for improvements to the Payment Services
                ("Feedback"). You may submit Feedback by emailing us, through the
                "Contact" section of the AvPlat Platform, or pursuant to Section
                22 ("Contacting AvPlat Payments"). Any Feedback you submit to us
                will be considered non-confidential and non-proprietary to you.
                By submitting Feedback to us, you grant us a non-exclusive,
                worldwide, royalty-free, irrevocable, sub-licensable, perpetual
                license to use and publish those ideas and materials for any
                purpose, without compensation to you.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-disclaimers"
              title="16. Disclaimers"
            >
              <p>
                <strong>16.1</strong> If you choose to use the Payment Services,
                you do so voluntarily and at your sole risk. The Payment Services
                are provided "as is", without warranty of any kind, either
                express or implied.
              </p>

              <p>
                <strong>16.2</strong> Notwithstanding AvPlat Payments'
                appointment as the limited payment collection agent of Providing
                Members for the purposes of accepting payments from Purchasing
                Members through the AvPlat Platform, AvPlat Payments explicitly
                disclaims all liability for any act or omission of any Member or
                other third party. AvPlat Payments does not have any duties or
                obligations as agent for each Providing Member except to the
                extent expressly set forth in these Payments Terms, and any
                additional duties or obligations as may be implied by law are
                expressly excluded.
              </p>

              <p>
                <strong>16.3</strong> If we choose to conduct identity
                verification on any Member, to the extent permitted by applicable
                law, we disclaim warranties of any kind, either express or
                implied, that such checks will identify prior misconduct by a
                Member or guarantee that a Member will not engage in misconduct
                in the future.
              </p>

              <p>
                <strong>16.4</strong> The foregoing disclaimers apply to the
                maximum extent permitted by law. You may have other statutory
                rights. However, the duration of statutorily required warranties,
                if any, shall be limited to the maximum extent permitted by law.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-liability"
              title="17. Liability"
            >
              <p>
                <strong>17.1</strong> You acknowledge and agree that, to the
                maximum extent permitted by law, the entire risk arising out of
                your access to and use of the Payment Services remains with you.
                If you permit or authorize another person to use your AvPlat
                Account in any way, you are responsible for the actions taken by
                that person. Neither AvPlat Payments nor any other party involved
                in creating, producing, or delivering the Payment Services will
                be liable for any incidental, special, exemplary, or
                consequential damages, including lost profits, loss of data or
                loss of goodwill, service interruption, computer damage or system
                failure or the cost of substitute products or services, or for
                any damages for personal or bodily injury or emotional distress
                arising out of or in connection with (i) these Payments Terms,
                (ii) from the use of or inability to use the Payment Services, or
                (iii) from any communications, interactions, or meetings with
                other Members or other persons with whom you communicate,
                interact, transact, or meet with as a result of your use of the
                Payment Services, whether based on warranty, contract, tort
                (including negligence), product liability, or any other legal
                theory, and whether or not AvPlat Payments has been informed of
                the possibility of such damage, even if a limited remedy set
                forth herein is found to have failed of its essential purpose.
                Except for our obligations to pay amounts to applicable Providing
                Members pursuant to these Payments Terms or an approved payment
                request under the AvPlat Service Provider Guarantee, in no event
                will AvPlat Payments' aggregate liability arising out of or in
                connection with these Payments Terms and your use of the Payment
                Services including, but not limited to, from your use of or
                inability to use the Payment Services, exceed the amounts you
                have paid or owe for services via the AvPlat Platform as a
                Customer in the twelve (12) month period prior to the event
                giving rise to the liability, or if you are a Service Provider,
                the amounts paid by AvPlat Payments to you in the twelve (12)
                month period prior to the event giving rise to the liability, or
                one hundred U.S. dollars (US$100), if no such payments have been
                made, as applicable. The limitations of damages set forth above
                are fundamental elements of the basis of the bargain between
                AvPlat Payments and you.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-indemnification"
              title="18. Indemnification"
            >
              <p>
                You agree to release, defend (at AvPlat's option), indemnify,
                and hold AvPlat Payments and its affiliates and subsidiaries, and
                their officers, directors, employees, and agents, harmless from
                and against any claims, liabilities, damages, losses, and
                expenses, including, without limitation, reasonable legal and
                accounting fees, arising out of or in any way connected with (i)
                your breach of these Payments Terms; (ii) your improper use of
                the Payment Services; or (iii) your breach of any laws,
                regulations, or third-party rights.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-termination"
              title="19. Termination, Suspension, and other Measures"
            >
              <p>
                <strong>19.1</strong> You may terminate this Agreement at any
                time by sending us an email at{" "}
                <a href="mailto:support@avplat.com" className="text-[#213e76] underline">
                  support@avplat.com
                </a>
                , or by following the termination procedures specified in the
                Terms. Terminating this Agreement will also serve as notice to
                cancel your AvPlat Account pursuant to the Terms. If you cancel
                your AvPlat Account as a Service Provider, AvPlat Payments will
                provide a full refund to any Customers with confirmed service(s).
                If you cancel your AvPlat Account as a Customer, AvPlat Payments
                will initiate a refund for any confirmed service(s) based on
                AvPlat's cancellation policy.
              </p>

              <p>
                <strong>19.2</strong> Without limiting our rights specified
                below, AvPlat Payments may terminate this Agreement for
                convenience at any time by giving you thirty (30) days' notice
                via email to your registered email address.
              </p>

              <p>
                <strong>19.3</strong> AvPlat Payments may immediately, without
                notice terminate this Agreement if (i) you have materially
                breached your obligations under this Agreement; (ii) you have
                provided inaccurate, fraudulent, outdated, or incomplete
                information; (iii) you have violated applicable laws,
                regulations, or third-party rights; or (iv) AvPlat Payments
                believes in good faith that such action is reasonably necessary
                to protect other Members, AvPlat, AvPlat Payments, or third
                parties (for example in the case of fraudulent behavior of a
                Member).
              </p>

              <p>
                <strong>19.4</strong> In addition, AvPlat Payments may limit or
                temporarily or permanently suspend your use of or access to the
                Payment Services (i) to comply with applicable law, or the order
                or request of a court, law enforcement, or other administrative
                agency or governmental body, or if (ii) you have breached these
                Payments Terms, the Terms, applicable laws, regulations or
                third-party rights, (iii) you have provided inaccurate,
                fraudulent, outdated, or incomplete information regarding a
                Payment Method or Payout Method, or (iv) AvPlat Payments
                believes in good faith that such action is reasonably necessary
                to protect the personal safety or property of AvPlat, its
                Members, AvPlat Payments, or third parties, or to prevent fraud
                or other illegal activity.
              </p>

              <p>
                <strong>19.5</strong> In case of non-material breaches and where
                appropriate, you will be given notice of any measure by AvPlat
                Payments and an opportunity to resolve the issue to AvPlat
                Payments' reasonable satisfaction.
              </p>

              <p>
                <strong>19.6</strong> If you are a Service Provider and we take
                any of the measures described in this Section we may refund your
                Customers in full for any and all confirmed services,
                irrespective of preexisting cancellation policies, and you will
                not be entitled to any compensation for pending or confirmed
                services that were cancelled.
              </p>

              <p>
                <strong>19.7</strong> If your access to or use of the Payment
                Services has been limited or this Agreement has been terminated
                by us, you may not register a new AvPlat Account or attempt to
                access and use the Payment Services through another AvPlat
                Account of another Member.
              </p>

              <p>
                <strong>19.8</strong> If you or we terminate this Agreement, the
                clauses of these Payments Terms that reasonably should survive
                termination of these Payments Terms will remain in effect.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-law"
              title="20. Applicable Law and Jurisdiction"
            >
              <p>
                <strong>20.1</strong> These Payments Terms will be interpreted in
                accordance with the laws of India. The application of the United
                Nations Convention on Contracts for the International Sale of
                Goods (CISG) is excluded. Subject to the Dispute Resolution and
                Arbitration Agreement, you agree to submit to the exclusive
                jurisdiction of courts in New Delhi, India.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-general"
              title="21. General Provisions"
            >
              <p>
                <strong>21.1</strong> Except as they may be supplemented by
                additional terms and conditions, policies, guidelines, or
                standards, these Payments Terms constitute the entire Agreement
                between AvPlat Payments and you regarding the subject matter
                hereof, and supersede any and all prior oral or written
                understandings or agreements between AvPlat Payments and you
                regarding the Payment Services.
              </p>

              <p>
                <strong>21.2</strong> No joint venture, partnership, employment,
                or agency relationship exists between you or AvPlat Payments as a
                result of this Agreement or your use of the Payment Services.
              </p>

              <p>
                <strong>21.3</strong> If any provision of these Payments Terms is
                held to be invalid or unenforceable, such provision will be
                struck and will not affect the validity and enforceability of the
                remaining provisions.
              </p>

              <p>
                <strong>21.4</strong> AvPlat Payments' failure to enforce any
                right or provision in these Payments Terms will not constitute a
                waiver of such right or provision unless acknowledged and agreed
                to by us in writing. Except as expressly set forth in these
                Payments Terms, the exercise by either party of any of its
                remedies under these Payments Terms will be without prejudice to
                its other remedies under these Payments Terms or otherwise
                permitted under law.
              </p>

              <p>
                <strong>21.5</strong> You may not assign, transfer, or delegate
                this Agreement and your rights and obligations hereunder without
                AvPlat Payments' prior written consent. AvPlat Payments may
                without restriction assign, transfer, or delegate this Agreement
                and any rights and obligations, at its sole discretion, with
                thirty (30) days' prior notice. Your right to terminate this
                Agreement at any time remains unaffected.
              </p>

              <p>
                <strong>21.6</strong> This Agreement does not and is not intended
                to confer any rights or remedies upon any person other than the
                parties. Notwithstanding the foregoing, the parties agree that
                the payment card networks are third-party beneficiaries of this
                Agreement for purposes of enforcing provisions related to
                payments, but that their consent or agreement is not necessary
                for any changes or modifications to this Agreement.
              </p>

              <p>
                <strong>21.7</strong> Unless specified otherwise, any notices or
                other communications permitted or required under this Agreement,
                will be in writing and given by AvPlat Payments via email or
                AvPlat Platform notification.
              </p>
            </SectionBlock>

            <SectionBlock
              id="payments-contact"
              title="Contacting AvPlat Payments"
            >
              <p>
                These Payments Terms are available at{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#213e76] underline"
                >
                  Privacy Policy
                </a>
                . AvPlat Payments will provide a copy of these Payments Terms on
                request. If you have any questions about these Payments Terms,
                please email us at{" "}
                <a href="mailto:support@avplat.com" className="text-[#213e76] underline">
                  support@avplat.com
                </a>
                .
              </p>
            </SectionBlock>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-border rounded-2xl p-6 shadow-sm max-h-[80vh] overflow-y-auto">
              <h4 className="text-[#213e76] font-semibold mb-4">Table of Contents</h4>

              <ul className="space-y-2 text-sm">
                {sections.map((s) => {
  const isMainTitle = s.id === "intro" || s.id === "payments-intro";

  return (
    <li key={s.id}>
      <button
        onClick={() => scrollToSection(s.id)}
        className={`text-left w-full transition ${
          isMainTitle
            ? "font-bold text-[#213e76]"
            : "text-muted-foreground hover:text-[#213e76]"
        }`}
      >
        {s.label}
      </button>
    </li>
  );
})}
              </ul>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};

export default TermsPage;
               