import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

const Privacy = props => {
  return (
    <div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">Privacy Policy</h1>
        <div style={{ minHeight: "500px" }}>
          <Row>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
              <h5 className="policy-text">
                Fortnite DataHub is committed to providing quality services to
                you and this policy outlines our ongoing obligations to you in
                respect of how we manage your Personal Information. We have
                adopted the Australian Privacy Principles (APPs) contained in
                the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern
                the way in which we collect, use, disclose, store, secure and
                dispose of your Personal Information. A copy of the Australian
                Privacy Principles may be obtained from the website of The
                Office of the Australian Information Commissioner at <strong>www.aoic.gov.au</strong>
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">What is Personal Information and why do we collect it?</h3>
              <h5 className="policy-text">
                Personal Information is information or an opinion that
                identifies an individual. Examples of Personal Information we
                collect include: names, addresses, email addresses, phone and
                facsimile numbers. This Personal Information is obtained in many
                ways including cookies and your email address when using the
                contact form, and from third parties. We don’t guarantee website
                links or policy of authorised third parties.
              </h5>
              <h5 className="policy-text">
                We collect your Personal Information for the primary purpose of
                providing our services to you, providing information to our
                clients and marketing. We may also use your Personal Information
                for secondary purposes closely related to the primary purpose,
                in circumstances where you would reasonably expect such use or
                disclosure.
              </h5>
              <h5 className="policy-text">
                You may unsubscribe from our mailing/marketing lists at any time
                by contacting us in writing. When we collect Personal
                Information we will, where appropriate and where possible,
                explain to you why we are collecting the information and how we
                plan to use it.
              </h5>
            </Col>

            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header"> Sensitive Information</h3>
              <h5 className="policy-text">
                Sensitive information is defined in the Privacy Act to include
                information or opinion about such things as an individual's
                racial or ethnic origin, political opinions, membership of a
                political association, religious or philosophical beliefs,
                membership of a trade union or other professional body, criminal
                record or health information. <br />
                Sensitive information will be used by us only:  <br />
                • For the primary purpose for which it was obtained <br />
                • For a secondary purpose that is directly related to the primary purpose <br />
                • With your consent; or where required or authorised by law.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Third Parties</h3>
              <h5 className="policy-text">
                Where reasonable and practicable to do so, we will collect your
                Personal Information only from you. However, in some
                circumstances we may be provided with information by third
                parties. In such a case we will take reasonable steps to ensure
                that you are made aware of the information provided to us by the
                third party.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Disclosure of Personal Information</h3>
              <h5 className="policy-text">
                Disclosure of Personal Information Your Personal Information may
                be disclosed in a number of circumstances including the
                following: <br />
                • Third parties where you consent to the use or
                disclosure; and  <br />
                • Where required or authorised by law.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Disclosure of Personal Information</h3>
              <h5 className="policy-text">
                Disclosure of Personal Information Your Personal Information may
                be disclosed in a number of circumstances including the
                following: <br />
                • Third parties where you consent to the use or
                disclosure; and <br />
                • Where required or authorised by law.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Security of Personal Information</h3>
              <h5 className="policy-text">
                Security of Personal Information Your Personal Information is
                stored in a manner that reasonably protects it from misuse and
                loss and from unauthorized access, modification or disclosure.
                When your Personal Information is no longer needed for the
                purpose for which it was obtained, we will take reasonable steps
                to destroy or permanently de-identify your Personal Information.
                However, most of the Personal Information is or will be stored
                in client files which will be kept by us for a minimum of 7
                years.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Access to your Personal Information</h3>
              <h5 className="policy-text">
                You may access the Personal Information we hold about you and to
                update and/or correct it, subject to certain exceptions. If you
                wish to access your Personal Information, please contact us in
                writing. Fornite DataHub will not charge any fee for your access
                request, but may charge an administrative fee for providing a
                copy of your Personal Information. In order to protect your
                Personal Information we may require identification from you
                before releasing the requested information.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Maintaining the Quality of your Personal Information</h3>
              <h5 className="policy-text">
                It is an important to us that your Personal Information is up to
                date. We will take reasonable steps to make sure that your
                Personal Information is accurate, complete and up-to-date. If
                you find that the information we have is not up to date or is
                inaccurate, please advise us as soon as practicable so we can
                update our records and ensure we can continue to provide quality
                services to you.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Policy Updates</h3>
              <h5 className="policy-text">
                This Policy may change from time to time and will be available
                on this page.
              </h5>
            </Col>
            <Col className="mb-4" xl="12" md="12" sm="12" xs="12">
            <h3 className="mb-3 policy-header">Privacy Policy Complaints and Enquiries</h3>
              <h5 className="policy-text">
                If you have any queries or complaints about our Privacy Policy
                please contact us at:
              </h5>
              <h3>Andy Sekulovski</h3>
              <h3>andy.sek94@gmail.com</h3>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
