/*!

=========================================================
* Paper Dashboard PRO React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

function Timeline() {
  return (
    <>
      <div className="content">
        <div className="header text-center">
          <h3 className="title">Timeline</h3>
        </div>
        <Row>
          <Col md="12">
            <Card className="card-timeline card-plain">
              <CardBody>
                <ul className="timeline">
                  {/* <li className="timeline-inverted">
                    <div className="timeline-badge danger">
                      <i className="nc-icon nc-single-copy-04" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="danger" pill>
                          Some Title
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Wifey made the best Father's Day meal ever. So
                          thankful so happy so blessed.
                        </p>
                      </div>
                      <h6>
                        <i className="fa fa-clock-o" />
                        11 hours ago via Twitter
                      </h6>
                    </div>
                  </li> */}

                  <li>
                    <div className="timeline-badge danger">
                      <i className="nc-icon nc-single-copy-04" />
                    </div>
                    <div style={{ width: "85%" }} className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="danger" pill>
                          Some Title
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Wifey made the best Father's Day meal ever. So
                          thankful so happy so blessed.
                        </p>
                      </div>
                      <h6>
                        <i className="fa fa-clock-o" />
                        11 hours ago via Twitter
                      </h6>
                    </div>
                  </li>

                  <li>
                    <div className="timeline-badge success">
                      <i className="nc-icon nc-sun-fog-29" />
                    </div>
                    <div style={{ width: "85%" }} className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="success" pill>
                          Another One
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Thank God for the support of my wife and real friends.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="timeline-inverted">
                    <div className="timeline-badge info">
                      <i className="nc-icon nc-world-2" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="info" pill>
                          Another Title
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Called I Miss the Old Kanye That’s all it was Kanye
                          And I love you like Kanye
                        </p>
                      </div>
                      <div className="timeline-footer">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-round"
                            color="info"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="nc-icon nc-settings-gear-65" />
                          </DropdownToggle>
                          <DropdownMenu persist>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <div className="timeline-badge warning">
                      <i className="nc-icon nc-istanbul" />
                    </div>
                    <div style={{ width: "85%" }} className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="warning" pill>
                          Another One
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Tune into Big Boy's 92.3 I'm about to play the first
                          single from Cruel Winter also to Kim’s
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge info">
                      <i className="nc-icon nc-world-2" />
                    </div>
                    <div style={{ width: "85%" }} className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="info" pill>
                          Another Title
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Called I Miss the Old Kanye That’s all it was Kanye
                          And I love you like Kanye
                        </p>
                      </div>
                      <div className="timeline-footer">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-round"
                            color="info"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="nc-icon nc-settings-gear-65" />
                          </DropdownToggle>
                          <DropdownMenu persist>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Timeline;
