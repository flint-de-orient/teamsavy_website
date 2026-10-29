// Legal pages, carried over word for word from the previous teamsavy.com
// (privacy-policy.html, terms-of-service.html, data-deletion.html). Their URLs
// are referenced by the Play Store listing and Meta's WhatsApp app review, so
// change the wording only on purpose.
import { COMPANY, SUPPORT_EMAIL } from "./data.js";

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
const PrivacyLink = () => <a href="/privacy-policy.html">Privacy Policy</a>;

export const EFFECTIVE_DATE = "August 16, 2026";

export const docs = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <>
        <p>
          TeamSavy ("TeamSavy", "we", "us") is an HR management platform provided by {COMPANY} This policy explains
          what information we collect through TeamSavy, how we use it, who we share it with, and the choices available
          to you — including our use of the WhatsApp Business Platform to deliver HR notifications on behalf of the
          organizations that use TeamSavy.
        </p>

        <h2>1. Who this policy covers</h2>
        <p>
          TeamSavy is business-to-business software: an organization ("tenant", "customer") subscribes to TeamSavy to
          manage its own employees and candidates. This policy applies to:
        </p>
        <ul>
          <li>
            <b>Tenant administrators and HR users</b> who sign up for and operate a TeamSavy account.
          </li>
          <li>
            <b>Employees and job candidates</b> of a tenant organization, whose data a tenant enters into or generates
            within TeamSavy in the course of HR administration (e.g. offer letters, leave records, attendance).
          </li>
        </ul>
        <p>
          Where a tenant enters or uploads data about its employees or candidates, the tenant organization is the data
          controller for that data, and TeamSavy acts as a data processor on the tenant's behalf. Questions about a
          specific employee's or candidate's data should first be directed to that person's employer.
        </p>

        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <b>Account &amp; company information</b> — organization name, billing/contact details, and login credentials
            for tenant administrators and HR users.
          </li>
          <li>
            <b>Employee &amp; candidate records</b> — name, email address, phone/mobile number, designation, department,
            date of joining, compensation and pay-band details, and appointment/offer letters, entered by a tenant's HR
            team.
          </li>
          <li>
            <b>Leave &amp; attendance records</b> — leave applications, approvals and balances, and, for tenants using the
            Attendance module, punch-in/out timestamps from connected biometric or face-recognition devices, GPS
            coordinates captured at the moment of a mobile check-in, and a one-time enrollment photo used to verify a
            self-service check-in against a live selfie. Enrollment and check-in photos are used only to produce a
            pass/fail match result for that punch — we do not store biometric templates, and the underlying
            face-matching is performed by a third-party verification provider (see Section 4).
          </li>
          <li>
            <b>Uploaded documents</b> — medical certificates, fitness certificates, and similar attachments a tenant's
            employees submit in connection with a leave application.
          </li>
          <li>
            <b>WhatsApp messaging data</b> — where a tenant enables WhatsApp notifications, we send pre-approved message
            templates (e.g. appointment letters, leave status updates, circulars, attendance reminders) to the mobile
            numbers a tenant has on file for its employees, using the WhatsApp Business Platform. We receive delivery
            and read-status callbacks for these messages from Meta.
          </li>
          <li>
            <b>Usage &amp; log data</b> — standard web server logs (IP address, browser type, request timestamps) generated
            by normal operation of the platform.
          </li>
        </ul>

        <h2>3. How we use this information</h2>
        <ul>
          <li>
            To provide the TeamSavy service: creating and issuing appointment letters, tracking employee records,
            processing leave requests, computing attendance, and running approval workflows.
          </li>
          <li>
            To deliver notifications a tenant has configured — by email and, where enabled, by WhatsApp message — such
            as offer letters, leave status updates, circulars, office orders, holiday notices, and attendance or
            document-submission reminders.
          </li>
          <li>
            To verify identity at the moment of a mobile attendance check-in (face match against a stored enrollment
            photo) and to flag, for HR review, a check-in that falls outside an employee's assigned work location.
          </li>
          <li>
            To maintain the security, integrity, and availability of the platform, including detecting and preventing
            abuse.
          </li>
          <li>
            To communicate with tenant administrators about their account, billing, and material changes to the
            service.
          </li>
        </ul>
        <p>We do not sell personal information, and we do not use employee or candidate data to serve advertising.</p>

        <h2>4. WhatsApp Business Platform &amp; other service providers</h2>
        <p>
          When a tenant enables WhatsApp notifications, the recipient's mobile number and the content of the
          pre-approved message template are transmitted to <b>Meta Platforms, Inc.</b> for delivery via the WhatsApp
          Business Platform, and Meta's own privacy policy and WhatsApp Business Messaging Policy govern its handling
          of that transmission. We use other service providers to operate TeamSavy, including:
        </p>
        <ul>
          <li>
            Cloud infrastructure and file storage providers, to host the application and store documents, letters, and
            photos referenced above.
          </li>
          <li>
            A third-party face-verification API, to compare a mobile check-in selfie against an employee's enrollment
            photo and return a match result.
          </li>
          <li>
            Email delivery (SMTP) providers, configured per tenant or by us on a tenant's behalf, to send offer letters,
            invites, and password-reset emails.
          </li>
          <li>
            Biometric/face-recognition device vendors that a tenant chooses to connect for in-office attendance, which
            transmit punch events (not biometric templates) to TeamSavy.
          </li>
        </ul>
        <p>
          These providers are only permitted to use the information we share with them to provide the specific service
          TeamSavy has engaged them for.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain tenant, employee, and candidate data for as long as the relevant tenant's TeamSavy account is
          active, and for a reasonable period afterward to comply with legal, tax, or record-keeping obligations, or as
          otherwise instructed by the tenant. A tenant may request deletion of its data by contacting us at the address
          below, subject to any records we are legally required to retain.
        </p>

        <h2>6. Data security</h2>
        <p>
          We use industry-standard safeguards — including encryption in transit, access controls scoped per tenant, and
          role-based permissions within each tenant's account — to protect the data entrusted to us. No method of
          transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on your relationship to a TeamSavy tenant and applicable law, you may have rights to access,
          correct, or request deletion of your personal information. If you are an employee or candidate of a TeamSavy
          tenant, please direct these requests to your employer in the first instance, as they control the data held
          about you. Tenant administrators may contact us directly using the details below.
        </p>

        <h2>8. Children's privacy</h2>
        <p>
          TeamSavy is a workplace HR tool intended for use by working-age adults and is not directed at children. We do
          not knowingly collect personal information from children.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be reflected by updating the effective
          date above. Continued use of TeamSavy after a change constitutes acceptance of the updated policy.
        </p>

        <h2>10. Contact us</h2>
        <p>
          Questions about this policy or how TeamSavy handles data can be sent to <Mail />.
        </p>
      </>
    ),
  },

  terms: {
    title: "Terms of Service",
    body: (
      <>
        <p>
          These Terms of Service ("Terms") govern access to and use of TeamSavy, provided by <b>{COMPANY}</b>{" "}
          ("TeamSavy", "we", "us"). By creating an account or using TeamSavy, a customer organization ("tenant", "you")
          agrees to these Terms.
        </p>

        <h2>1. The service</h2>
        <p>
          TeamSavy is a multi-tenant HR management platform that lets an organization manage appointment/offer letters,
          employee records, leave, and attendance for its own employees and candidates, and — where enabled — deliver
          related notifications by email and WhatsApp. Each tenant's data is logically separated from every other
          tenant's data.
        </p>

        <h2>2. Accounts &amp; tenant responsibilities</h2>
        <ul>
          <li>
            A tenant is responsible for the accuracy of the employee, candidate, and company data it enters into
            TeamSavy, and for keeping its login credentials confidential.
          </li>
          <li>
            A tenant is solely responsible for having a lawful basis to collect, process, and share its employees' and
            candidates' personal data through TeamSavy — including data sent by email or WhatsApp — under the laws
            applicable to its own workforce.
          </li>
          <li>A tenant is responsible for the actions of the HR administrators and users it grants access to its TeamSavy account.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to use TeamSavy to:</p>
        <ul>
          <li>
            Send unlawful, deceptive, or unsolicited messages, including WhatsApp messages to recipients who have not
            consented to receive them from you as their employer or prospective employer;
          </li>
          <li>Upload or process personal data you are not legally entitled to collect or share;</li>
          <li>Attempt to access another tenant's data, disrupt the service, or circumvent its security controls;</li>
          <li>
            Use the platform for any purpose outside ordinary HR administration of your own organization's employees and
            candidates.
          </li>
        </ul>

        <h2>4. WhatsApp &amp; email messaging</h2>
        <p>
          Where a tenant enables WhatsApp or email notifications, TeamSavy sends messages using pre-approved templates on
          the tenant's behalf, triggered by actions the tenant's HR team takes in the app (e.g. issuing an offer,
          approving leave). A tenant is responsible for ensuring it has the right to contact each recipient through the
          channel and number or address on file. Message delivery depends on third-party platforms (including the
          WhatsApp Business Platform, operated by Meta) that TeamSavy does not control.
        </p>

        <h2>5. Subscription &amp; billing</h2>
        <p>
          Paid plans are billed as described at signup or in your order form. Fees are non-refundable except where
          required by law. We may suspend an account for non-payment after reasonable notice.
        </p>

        <h2>6. Data &amp; privacy</h2>
        <p>
          Our collection and use of personal data in connection with TeamSavy is described in our <PrivacyLink />,
          which forms part of these Terms.
        </p>
        <p>
          As between a tenant and TeamSavy, the tenant remains the controller of the employee and candidate data it
          enters into the platform, and TeamSavy acts as a processor on the tenant's instructions.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          TeamSavy and its underlying software remain the property of {COMPANY} Tenants retain ownership of the data
          they submit to the platform.
        </p>

        <h2>8. Termination</h2>
        <p>
          A tenant may stop using TeamSavy at any time. We may suspend or terminate an account for material breach of
          these Terms, including a violation of the acceptable-use provisions above, after reasonable notice where
          practicable. On termination, we will handle tenant data as described in our <PrivacyLink /> and any
          applicable order form.
        </p>

        <h2>9. Disclaimers &amp; limitation of liability</h2>
        <p>
          TeamSavy is provided "as is" without warranties of any kind beyond those that cannot be excluded by law. To
          the maximum extent permitted by law, {COMPANY} will not be liable for indirect, incidental, or consequential
          damages arising from use of the platform.
        </p>

        <h2>10. Governing law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to conflict-of-law principles, and any dispute
          will be subject to the exclusive jurisdiction of the competent courts in India.
        </p>

        <h2>11. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be reflected by updating the effective date
          above. Continued use of TeamSavy after a change constitutes acceptance of the updated Terms.
        </p>

        <h2>12. Contact us</h2>
        <p>
          Questions about these Terms can be sent to <Mail />.
        </p>
      </>
    ),
  },

  deletion: {
    title: "Data Deletion",
    body: (
      <>
        <p>
          TeamSavy is used by an organization ("tenant") to manage its own employees' and candidates' HR records.
          Because that organization controls the data it enters about you, the right path to request deletion depends
          on who you are.
        </p>

        <h2>If you are an employee or candidate of a TeamSavy tenant</h2>
        <ol className="legal-steps">
          <li>
            <b>Contact your employer or the organization that invited you.</b> They control the records TeamSavy holds
            about you — your name, contact details, offer/appointment letters, leave and attendance history, and any
            documents you submitted — and can request deletion or correction on your behalf.
          </li>
          <li>
            <b>If you're unable to reach them, email us directly.</b> Write to <Mail /> with your name, the organization
            you're associated with, and what you'd like deleted. We will verify the request with the relevant tenant
            before acting on it, since the underlying data belongs to their account.
          </li>
        </ol>

        <h2>If you are a TeamSavy tenant administrator</h2>
        <ol className="legal-steps">
          <li>
            <b>Individual employee or candidate records</b> can be removed directly from your TeamSavy account by an
            authorized HR administrator.
          </li>
          <li>
            <b>To delete your entire organization's account and data</b>, email <Mail /> from an administrator address
            on file. We'll confirm the request and the scope of what will be deleted before proceeding.
          </li>
        </ol>

        <h2>What happens after a deletion request</h2>
        <p>
          We aim to complete verified deletion requests within 30 days. Some information may be retained for a limited
          period afterward where we are legally required to keep it (for example, financial or tax records), as
          described in our <PrivacyLink />.
        </p>

        <h2>Contact us</h2>
        <p>
          For any question about this process, email <Mail />.
        </p>
      </>
    ),
  },
};
