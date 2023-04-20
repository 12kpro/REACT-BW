import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import JobCard from "./jobs/JobCard";
import BookmarksCard from "./jobs/BookmarksCard";
import { jobSearchKindUpdate } from "../redux/action/jobs";
const Jobs = () => {
  //  const posts = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobSearchKindUpdate("search"));
  }, []);
  const menuLink = [
    { icon: "bi-bookmark-fill", text: "Le mie offerte di lavoro" },
    { icon: "bi-bell-fill", text: "Avvisi offerte di lavoro" },
    { icon: "bi-journal-check", text: "Valutazioni delle competenze" },
    { icon: "bi-play-btn-fill", text: "Indicazioni per chi cerca" },
    { icon: "bi-gear-fill", text: "Impostazioni candidatura" }
  ];
  const items = [
    {
      _id: "613f8896c1c0b3646447b0bb",
      url: "https://remotive.io/remote-jobs/devops/portfolio-solution-architect-for-devops-automation-883736",
      title: "Portfolio Solution Architect for DevOps & Automation",
      company_name: "Nordcloud Global",
      category: "DevOps / Sysadmin",
      job_type: "full_time",
      publication_date: "2021-09-12T05:54:36.000Z",
      candidate_required_location: "EU only",
      salary: "",
      description:
        '<p>When you join Nordcloud, you become part of a rapidly growing company, where you will set your career on track for outstanding achievement within a company that knows no limits. Our customers are large enterprises seeking to supercharge their digital transformation with the power of cloud and to benefit from the ability to innovate faster than ever.</p>\n<p>We are looking for a <strong>Portfolio Solutioning Architect in our DevOps &amp; Automation</strong> offering area, responsible for growing our business by working closely with Sales and Delivery teams to bring the best Nordcloud has to offer into the hands of our clients. The DevOps &amp; Automation offering is on a mission to let our clients leverage the full potential of the cloud to optimize their time to value and operations.</p>\n<p><strong>Your daily work:</strong></p>\n<ul>\n<li>You lead or contribute to solutioning complex client challenges utilizing your deep knowledge of DevOps &amp; Automation across all hyperscalers.</li>\n<li>You write crisp proposals which explain the value Nordcloud offers in clear language.</li>\n<li>You give inspiring pitches in front of clients and actively listen for their wants &amp; needs.</li>\n<li>You work with our practice &amp; product leaders to identify the right tailoring and extension of their content for market success.</li>\n<li>You proactively support our offering &amp; product leaders in setting roadmap priorities.</li>\n<li>You kick-start and coach our delivery teams in key engagements to follow through on our value promise.</li>\n</ul>\n<p><strong>To be successful in this role, you should have:</strong></p>\n<ul>\n<li>Several years of experience in contributing to complex proposals and presenting to clients, from early stages to closing. You apply a challenger approach to solution sales in order to initiate and lead customer dialogue with business and IT stakeholders.</li>\n<li>Several years of hands-on, cloud-focused experience in one or more of the following areas: \n<ul>\n<li>CI/CD technologies, </li>\n<li>Observability &amp; monitoring technologies, or </li>\n<li>automation technologies.</li>\n</ul>\n</li>\n<li>Expertise in Infrastructure as Code.</li>\n<li>An understanding and passion for increasing and sharing the knowledge of modern cloud-native technologies and how they can empower DevOps teams.</li>\n<li>Be fluent in discussing Agile methods &amp; frameworks like SAFe, Scrum, and Kanban, and how to unlock value through automation.</li>\n<li>Are trusted by your customers to deliver what you promise and provide valuable insight and solutions that have an impact on their business.</li>\n<li>Strong leadership and collaboration skills.</li>\n<li>Be a team player and target-oriented.</li>\n<li>Structured and analytical way of working.</li>\n<li>Excellent communication skills in English and readiness to travel (subject to covid).</li>\n</ul>\n<p><strong>Why Nordcloud as your next career move?</strong></p>\n<ul>\n<li>In this role, you will be in a key position in developing new business and driving productized services for our DevOps &amp; Automation offering </li>\n<li>Lots of opportunities to develop your expertise and for professional growth. You get access to relevant training &amp; knowledge sharing sessions to support the growth and work with a community of leading cloud professionals. We grow together in our learning community! </li>\n<li>We have 200+ certified AWS experts, 100+ certified Azure experts, and 70+ certified Google Cloud experts working from 20 different offices in 10 European countries, friendly colleagues comprising 30+ nationalities.</li>\n<li>We are continuously developing our business – which means we\'re not stuck with the attitude of doing things as they\'ve always been done.</li>\n<li>Flexible working hours and freedom to choose your tools and ways of working.</li>\n<li>Wide range of benefits like private health care, certificates paid, wellness &amp; public transportation benefits, high-end laptop and a smartphone of your choice, etc.</li>\n<li>Events &amp; fun – besides all your interesting work assignments, feel free to enjoy our extra-curricular activities such as clubs, virtual coffees, after work, etc. And of course, we welcome new activities open-heartedly if you have anything in mind!</li>\n</ul>\n<p>To get more insight into the daily life at Nordcloud community, check out our <a href="https://nordcloud.com/community-culture" rel="nofollow">Community &amp; Culture site</a>, <a href="https://www.instagram.com/nordcloudcommunity" rel="nofollow">Instagram profile</a>, <a href="https://www.facebook.com/nordcloud" rel="nofollow">Facebook</a> and<a href="https://www.linkedin.com/company/nordcloud-ltd/" rel="nofollow"> LinkedIn</a>. </p>\n<p>Please read our <a href="https://nordcloud.com/privacy-policy/" rel="nofollow">Data Privacy Policy</a> before applying. All applicants <strong>must have the right to work in the EU.</strong></p>\n<p><strong>About Nordcloud</strong></p>\n<p>Nordcloud is a European leader in cloud implementation, application development, managed services, and training. It\'s a recognized <strong>cloud-native pioneer</strong> with a proven track record helping organizations leverage the public cloud in a way that balances quick wins, immediate savings, and sustainable value. As well as partnering with VMware, Nordcloud is triple-certified across Microsoft Azure, Google Cloud Platform, and Amazon Web Services – and is featured in Gartner\'s Magic Quadrant. Nordcloud has 10 European hubs, over 500 employees and has delivered over 1,000 successful cloud projects for companies ranging from mid-size to large corporates. IBM <a href="https://newsroom.ibm.com/2020-12-21-IBM-to-Acquire-Nordcloud-to-Turbocharge-Its-Hybrid-Cloud-Consulting-Capability" rel="nofollow" target="_blank">announced</a> its acquisition of Nordcloud on December 21, 2020.</p>\n<p>#NordcloudCommunity </p>\n'
    },
    {
      _id: "613f8897c1c0b3646447b283",
      url: "https://remotive.io/remote-jobs/all-others/project-manager-857981",
      title: "Project Manager",
      company_name: "Collabora",
      category: "All others",
      job_type: "full_time",
      publication_date: "2021-08-29T17:53:08.000Z",
      candidate_required_location: "Anywhere",
      salary: "",
      description:
        '<div><span style="font-size: 11pt;">We\'re looking for an enthusiastic Project Manager with a strong technical background to join our distributed and fast-paced Delivery Team, managing multiple technical projects across various different sectors.</span></div>\n<div> </div>\n<div><strong style="font-size: 11pt;">The Role</strong></div>\n<div> </div>\n<div><span style="font-size: 11pt;">Your involvement with the projects will begin early in the life-cycle, when you will be supporting the preparation of technical and commercial proposals, and you will continue with the projects through to their successful delivery to clients, and hopefully follow-up sales.</span></div>\n<div> </div>\n<div><span style="font-size: 11pt;">You will manage the client relationships and be the focal point for all communications. This will require you to both think about the projects at a high level while at the same time understanding the projects at a detailed level.</span></div>\n<p><br><br></p>\n<div className="h3">What\'s in it for you?</div>\n<ul>\n<li>Technically challenging environment, where your opinions and ideas are listened to</li>\n</ul>\n<ul>\n<li>Large degree of autonomy within the role (no micro-management)</li>\n</ul>\n<ul>\n<li>Opportunity to learn from others and pick up new skills. Our Project Managers and Engineers are responsible for feeding back to each other in an effort to improve overall process</li>\n</ul>\n<ul>\n<li>Culturally diverse and inclusive environment</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Key Responsibilities</div>\n<ul>\n<li>Manage a number of Open Source technology projects of various sizes and complexities</li>\n</ul>\n<ul>\n<li>Understand customers needs and what makes them successful – apply these to deliver successful projects and explore future business opportunities</li>\n</ul>\n<ul>\n<li>Manage and motivate project teams to ensure project success. As our clients and project engineers are globally distributed, certain flexibilities in working practices will be required according to customers\' and engineers\' needs.</li>\n</ul>\n<ul>\n<li>Weekly project financial updates and appropriate actions to ensure projects are successful and profitable</li>\n</ul>\n<ul>\n<li>Support the optimization of current processes and define new ones for continuous improvements according to the business needs</li>\n</ul>\n<ul>\n<li>Customer visits and international travel as required</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Technical Requirements</div>\n<ul>\n<li>Account management, including stakeholder and commercial management of the engagement</li>\n</ul>\n<ul>\n<li>Full life-cycle project management, including planning, execution, reporting, and financials</li>\n</ul>\n<ul>\n<li>Able to spot risks and mitigate/workaroundthem before they develop into issues</li>\n</ul>\n<ul>\n<li>Hands-on experience of real-time embedded systems (e.g. in terms of testing, build and integration, release and defect management), ideally in an open source environment</li>\n</ul>\n<ul>\n<li>Agile software development methodologies</li>\n</ul>\n<ul>\n<li>Experience of running highly distributed project teams across multiple time zones would be a great advantage</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Qualifications</div>\n<ul>\n<li>Fluent in English (and French if based in Montreal)</li>\n</ul>\n<ul>\n<li>Good bachelor’s degree in relevant field</li>\n</ul>\n<ul>\n<li>Knowledge or experience working in an ISO 9001 and/or ISO 27001 environment would be an asset</li>\n</ul>\n<ul>\n<li>Professional project management qualification would be an advantage</li>\n</ul>\n'
    },
    {
      _id: "613f8896c1c0b3646447b0d6",
      url: "https://remotive.io/remote-jobs/writing/cv-writer-885602",
      title: "CV Writer",
      company_name: "James Innes Group",
      category: "Writing",
      job_type: "full_time",
      publication_date: "2021-09-11T02:32:43.000Z",
      candidate_required_location: "Europe Only",
      salary: "",
      description:
        '<div className="h3">Company Description</div>\n<p>Founded by James Innes in 1998 - over 20 years ago - our mission statement - \'Changing lives, changing the world\' - to help our clients be the best they can be and achieve the careers they truly deserve.</p>\n<p>We achieve this by providing a whole host of career and personal branding services;</p>\n<ul>\n<li>\n<p>CV/resume call consultations</p>\n</li>\n<li>\n<p>interview coaching</p>\n</li>\n<li>\n<p>professionally rewritten CVs, Resumes, LinkedIn Profiles and cover letters</p>\n</li>\n<li>\n<p>job application support and guidance</p>\n</li>\n<li>\n<p>profile photo and banner design</p>\n</li>\n<li>\n<p>social scrub (public search background check reporting)</p>\n</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Job Description</div>\n<p><strong>We are currently looking for talented, creative writers to join our team - initially in a freelance capacity.</strong></p>\n<p><strong>Initial responsibilities will include;</strong></p>\n<ul>\n<li>\n<p>working with our clients to rewrite their CVs, LinkedIn Profiles and cover letters according to our in-house style and standards</p>\n</li>\n<li>\n<p>speaking with clients over the phone to discuss their requirements and match them up with the correct set of services</p>\n</li>\n<li>\n<p>interacting with the team online in chat and voice messages via our social platform</p>\n</li>\n</ul>\n<p>Remote working but with access to a lively platform for social interaction.</p>\n<p><strong><strong>Here are just a few of the benefits open to our team members as they grow and develop with us:</strong></strong></p>\n<ul>\n<li>Opportunities for career progression, with increased earning potential and benefits</li>\n<li>Progression up the ranks, with potential to join a close-knit, full-time team</li>\n<li>Access to training material and resources developed by bestselling careers author, James Innes</li>\n<li>Ongoing support and mentoring</li>\n<li>Potential to become an expert in a highly specialised field</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Qualifications</div>\n<ul>\n<li>\n<p>Excellent spoken and written English (native level).</p>\n</li>\n<li>\n<p>Expertise in using the latest version of Microsoft Word.</p>\n</li>\n<li>\n<p>Passion for helping people (to build their career prospects).</p>\n</li>\n<li>\n<p>Ability to research &amp; apply knowledge (our clients come from all industries and paths of expertise).</p>\n</li>\n<li>\n<p>Prior experience in either CV writing, career guidance or HR-related roles is desirable.</p>\n</li>\n</ul>\n<p><br><br></p>\n<div className="h3">Additional Information</div>\n<p>Applicants will be invited to an online interview with our management team (conducted via voice call). If successful, we would look to begin working with you immediately in the form of a probation period.</p>\n'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className=" col-3">
          <div className="card">
            <ul className="list-group list-group-flush">
              {console.log(id)}
              {menuLink.map((item, i) => (
                <li key={`jobs-menu-${i}`} className="list-group-item">
                  <Link to="/" className="text-decoration-none d-flex align-items-center">
                    <i className={`fs-4 me-2 bi ${item.icon}`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                  onClick={() => dispatch(jobSearchKindUpdate("search"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("company"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("category"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          {!id ? (
            <>
              {items.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </>
          ) : (
            <JobCard back details job={items[0]} />
          )}
        </div>
        <div className=" col-3">
          <BookmarksCard />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
/*
          <div className="card">
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          */
