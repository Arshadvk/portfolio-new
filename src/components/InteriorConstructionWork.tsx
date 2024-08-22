import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Image
import work1 from "../assets/images/works/work-1.jpg"
import work2 from "../assets/images/works/work-2.jpg"
import work3 from "../assets/images/works/work-3.jpg"
import work4 from "../assets/images/works/work-4.jpg"
import work5 from "../assets/images/works/work-5.jpg"
import work6 from "../assets/images/works/work-6.jpg"

interface PortfolioData {
    image: string; groups: string[]; title: string; category: string; description : string
}

const portfolioData: PortfolioData[] = [
    { image: work1, groups: ['Website'], title: 'Ego.ft', category: 'Design', description  : "ego.ft is a cloth selling platform with enhanced security with Session and cookie"},
    { image: work2, groups: ['UI&UX'], title: 'Think Craft', category: 'Painting', description  : "An educational analysis website for self learners secured using JWT authentication." },
    { image: work3, groups: ['UI&UX'], title: 'Prevents Patterns', category: 'Corporate',description  : "ego.ft is a cloth selling platform with enhanced security with Session and cookie"},
    { image: work4, groups: ['UI&UX', 'Website'], title: 'The Advantageous', category: 'Graphics', description  : "ego.ft is a cloth selling platform with enhanced security with Session and cookie"},
    { image: work5, groups: ['Mobile Apps'], title: 'Automatic recognition', category: 'Architecture Design', description  : "ego.ft is a cloth selling platform with enhanced security with Session and cookie"},
    { image: work6, groups: ['Website', 'Mobile Apps'], title: 'Pre-press workflow', category: 'Development',description  : "ego.ft is a cloth selling platform with enhanced security with Session and cookie" },
];


const InteriorConstructionWork: React.FC = () => {

    const [filter, setFilter] = React.useState('All');

    const handleFilter = (group: any) => {
        setFilter(group);
    };

    const filteredData = filter === 'All' ? portfolioData : portfolioData.filter(item => item.groups.includes(filter));

    return (
        <React.Fragment>
            <section className="section portfolio business-portfolio" id="work">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Recent Project</h2>
                                <p className="heading-title-desc text-muted mt-4 mb-0">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="filters-group-wrap mt-5 pt-3">
                                <div className="filters-group">
                                    <Nav className="filter-options justify-content-center">
                                        <li onClick={() => handleFilter('All')} className={` nav-link list-inline-item mt-2  ${filter === 'All' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            All
                                        </li>
                                        <li onClick={() => handleFilter('Website')} className={`nav-link list-inline-item mt-2 ${filter === 'Architecture' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                        Website
                                        </li>
                                        <li onClick={() => handleFilter('Mobile Apps')} className={`nav-link list-inline-item mt-2 ${filter === 'Builder' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                        Mobile Apps
                                        </li>
                                        <li onClick={() => handleFilter('UI&UX')} className={`nav-link list-inline-item mt-2 ${filter === 'Electric' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                        UI&UX
                                        </li>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <Row id="grid">
                        {(filteredData || [])?.map((item: PortfolioData, key: number) => (
                            <Col lg={4} key={key} className="picture-item" data-groups={JSON.stringify(item.groups)}>
                                <div className="gallary-box m-3 portfolio">
                                    <Link className="lightbox port" to="#" title="">
                                        <img className="gallary-container" src={item.image} alt={item.title} />
                                        <div className="item-effect">
                                            <div className="item-caption text-center bg-primary text-white p-3">
                                                <h5 className="f-14 letter-spacing_2 text-uppercase mb-0">{item.title}</h5>
                                                <p className="f-10 letter-spacing_2 text-uppercase mb-0" style={{fontSize:"8px" ,paddingTop : "5px"}}>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default InteriorConstructionWork