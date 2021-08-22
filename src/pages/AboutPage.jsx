import React, { useState } from "react";
import { Container, Header, Sidebar } from "semantic-ui-react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import SideBarComponent from "../components/SideBarComponent";
const style = {
  p: { fontSize: 18 },
  i: { fontSize: 15 },
};
const AboutPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavMenu visible={visible} setVisible={setVisible} />
      <Sidebar.Pushable>
        <SideBarComponent visible={visible} setVisible={setVisible} />
        <Sidebar.Pusher dimmed={visible}>
          <Container style={{ marginBottom: "4rem", marginTop: "4rem" }}>
            <div className="card">
              <div className="text-center mb-5">
                <Header
                  content="Bluestone Investments Group Inc."
                  textAlign="center"
                  as="h1"
                  style={{ fontSize: "40px" }}
                />
                <div style={{ marginTop: "-20px" }}>
                  Caldwell Junction <br />
                  Duala, Liberia <br /> Phone numbers: 0886-142-890 /
                  0886-546-772/0770-373-464
                  <div
                    className="mx-auto col-10"
                    style={{ border: "1px black solid" }}
                  ></div>
                </div>
              </div>
              <p style={style.p}>
                Bluestone Investments Group is a multidisciplinary local
                business firm serving the business environment, planning,
                environmental, architecture, Information Technology engineering
                and supply of assorted goods and services, by always trying to
                meet the needs of our cherished clients. We have in-house
                capability for the supply of assorted goods and services,
                planning, environmental and design services which allow a fast
                and effective coordination of all technical disciplines under
                one roof.
              </p>
              <p style={style.p}>
                Our firm’s scope of professional services includes the supply of
                assorted goods and assorted general merchandise, etc, etc). Our
                Services ranges from Planning and execution of Architecture and
                Environmental, Instrumentation, Civil, Structural, Engineering
                and Construction Management. Importantly, each service is under
                the direct supervision of a principal specifically trained in
                that field, ensuring the highest degree of professional
                expertise and responsibility for our clients.
              </p>
              <p style={style.p}>
                Our team of professionals headed by Mr. Joseph E. Williamson is
                driving the entity into a direction that is will bring the
                entity on par with other international and national firms. The
                firm through its CEO is leading the way in assisting foreign
                investors to having a comfortable establishment in the country.
                Our Services ranges from the below listed, but not limited to
                the following:
              </p>
              <p style={style.p}>
                Our growth isn’t a function of happenstance—it’s a product of
                the hard work, professionalism and dedication of our partners
                and staff to going beyond client satisfaction to delivering
                extraordinary value. Whether we’re helping clients with
                compliance needs and issues, or finding ways to grow and protect
                their assets,
              </p>
              <p style={style.p}>
                Page’s character, and our passion, is best expressed through our
                mission of...
              </p>
              <p style={style.p}>
                <i>
                  “...being our clients’ most trusted business advisor and
                  consistently exceeding their expectations. We achieve this by
                  combining our experience, expertise and thought leadership
                  with integrity, objectivity, and our ever-expanding resources
                  and capabilities.
                </i>
              </p>
              <p style={style.p}>
                <i>
                  We intend to continually grow and enhance our market
                  leadership position in order to provide a clearly
                  differentiated choice for all of our stakeholders, and to
                  maximize our ability to invest in people, technology,
                  innovation, and infrastructure.”
                </i>
              </p>
              <p style={style.p}>
                <strong>Big Firm Capability. Small Firm Personality. </strong>
              </p>
              <p style={style.p}>
                The Page is comprised of a set of different companies, alliances
                and strategic partnerships that taken as a whole, delivers over
                five different services.
              </p>
              <br />
              <strong style={style.p}>Our Values - Quality</strong>
              <p style={style.p}>
                Quality is king at Page. We aim to make sure that the
                expectations of the client, engineer and all stakeholders are
                fully complied with and that projects are delivered with a high
                standard of workmanship in a timely manner. We always use local
                products and materials that meet or exceed the requirements of
                the contract documents and ensure our staff are adequately
                trained.
              </p>
              <strong style={style.p}>
                <i>Supply of Assorted Goods/General Merchandise</i>
              </strong>
              <p style={style.p}>
                -Supply of assorted and specialized goods and services,
              </p>
              <strong style={style.p}>
                <i>Civil Construction & Architecture Engineering Department</i>
              </strong>
              <p style={style.p}>
                -Bluestone Investments Group is a construction company that has
                built a strong reputation for delivering a quality service, on
                time, and at a competitive price. We pride ourselves on being
                skilled and experienced in all aspects of construction and this,
                combined with our extensive knowledge of Liberia geographic, has
                established us as major players in this industry.{" "}
              </p>
              <p style={style.p}>
                -Our commitment to innovation and excellence invariably results
                in a successfully completed project for both contractor and
                client. We understand and promote the idea of working as a
                partnership with our clients to ensure their goals are met.{" "}
              </p>
              <p style={style.p}>
                -At Page we never rest upon our laurels and are passionate and
                driven to continue the high levels of customer satisfaction we
                have achieved over the years.{" "}
              </p>
              <p style={style.p}>
                -We undertake a variety of projects for a wide range of cliental
                – from small private developments to large Government projects.
                Our unique and flexible project management systems ensure that a
                positive outcome is achieved regardless of size or nature of the
                project.{" "}
              </p>
              <h3>Health and Safety</h3>
              <p style={style.p}>
                The health, safety and welfare of all staff, sub-contractors,
                clients and visitors is significantly important to Page, and it
                is our intention to strive for excellence in the effective
                health and safety management of all construction sites under our
                control.{" "}
              </p>
              <h3>Environmental Sustainability </h3>
              <p style={style.p}>
                At Page we understand that environmental sustainability is
                everyone’s responsibility and as a prominent local company we
                are prepared to lead the way in this regard. We also realize
                that a commitment to the environment is not just socially
                responsible, but also good business practice as we seek to
                increase our constantly growing reputation. For this reason we
                ensure that our environmental policy is implemented throughout
                every facet of our business.{" "}
              </p>
              <p style={style.p}>
                Simply put, our overall objective is to carry out our operations
                in a way which manages and minimizes any adverse environmental
                impact and to prevent any pollution.{" "}
              </p>
              <h3>Design & Engineering</h3>
              <p style={style.p}>
                Our designers and engineers come from a wide range of
                backgrounds in structural, civil and engineering and
                architectural & industrial design. They form the backbone of the
                company and our inventiveness, innovation, engineering
                excellence and they have a comprehensive expertise in the design
                of materials, details, elements and components.{" "}
              </p>
              <h4>
                <i>Civil Construction & Architecture Engineering menu:</i>
              </h4>
              Architecture
              <br />
              -Programming <br /> -Site Development Analysis <br />
              -Design of Facilities for:
              <div style={{ marginLeft: "30px", marginTop: "-15px" }}>
                <br /> *Manufacturing <br />
                *Commercial <br />
                *Government
                <br />
                *Institutional <br />
                *Residential
              </div>
              <h4>
                <i>Land Use Planning</i>
              </h4>
              <br />
              -Site Selection and Location Studies
              <br /> -Master Plans
              <br /> -Zoning Processing <br />
              -Feasibility and Conceptual Design
              <br /> -Studies <br />
              -Civil Engineering -Roads and Bridge Geometric Layout Design{" "}
              <br />
              -Pavement Design <br />
              -Grading and Drainage <br />
              -Water Supply <br />
              -Storm and Sanitary Sewers -Landscaping and Road Development
              Structural Engineering <br />
              -Analysis and Design of:{" "}
              <div style={{ marginLeft: "30px" }}>
                *New or Existing Buildings <br />
                *Support and Service Structures
                <br />
                *Substations & Overhead Line Structures <br />
                *Equipment and Machinery
              </div>
              <h4>
                <i>Support Environmental Engineering</i>
              </h4>{" "}
              -Facilities Siting and Planning <br />
              -Pre-Acquisition Site Evaluations -Environmental Impact Studies{" "}
              <br />
              -Pollution Control Equipment -Compliance Assistance <br />
              -Site Assessments and Remediation <br />
              -Hazardous Waste Facility Operating Manuals <br />
              -Contingency Plans <br />
              -Environmental Audits <br />
              -Solid Waste Management Studies <br />
              -Erosion and Sedimentation Control Plans
              <br /> -Closure Plans Project/Construction Management
              <br /> -Permitting <br />
              -Cost Estimating <br />
              -Management Plan <br />
              -Contract Documents Development/Review
              <br /> -Design Constructability Review <br />
              -Contractor Pre-Qualification <br />
              -Manage Bidding & Contracting Process <br />
              -Construction Contract Administration <br />
              -Claims Management <br />
              -Construction Observation/ Resident Inspection
              <br />
              -Start-up & Operations Services <br />
              -Shop Drawings Review <br />
              -Project Close-Out
              <br />
              <h4>
                <i>
                  These services can be provided successfully to our clients
                  anywhere within Liberia.
                </i>
              </h4>
              <h3>Beneficial innovation</h3>
              <p style={style.p}>
                The technical expertise of Page is backed by a strong
                engineering culture. This results in innovations that deliver
                measurable value to the clients, both in the public and private
                sector.{" "}
              </p>
              <h2>OUR APPROACH</h2>
              <p style={style.p}>
                We at Bluestone Investments Group on an annual basis sign
                independence confirmations. The purpose of the Annual
                Independence confirmation activity is to ensure that all
                partners and practice staff are, and can be seen to be,
                objective in all dealings with all clients, and are independent
                of all applicable and relevant service to be performed and other
                assurance/attest clients, and where applicable, to their related
                entities. Our work is always subjected to review by experts in
                the particular area of service, to ensure that the highest
                quality is maintained in all engagements.{" "}
              </p>
              <h2>OUR COST</h2>
              <p style={style.p}>
                Bluestone Investments Group believe that controlling fees and
                providing an outstanding service are not mutually exclusive
                objectives and that value for money is an important
                consideration for all of its clients. Accordingly, our pricing
                philosophy is simple and pragmatic:- deliver value in excess of
                the cost of our engagement.
              </p>
            </div>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Footer />
    </>
  );
};

export default AboutPage;
