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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Timeline from "./Timeline";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import { Routes, Route, useParams } from "react-router-dom";

// const dataTable = [
//   ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
//   ["Garrett Winters", "Accountant", "Tokyo", "63"],
//   ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
//   ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
//   ["Airi Satou", "Accountant", "Tokyo", "33"],
//   ["Brielle Williamson", "Integration Specialist", "New York", "61"],
//   ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
//   ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
//   ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
//   ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
//   ["Jena Gaines", "Office Manager", "London", "30"],
//   ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
//   ["Charde Marshall", "Regional Director", "San Francisco", "36"],
//   ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
//   ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
//   ["Michael Silva", "Marketing Designer", "London", "66"],
//   ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
//   ["Gloria Little", "Systems Administrator", "New York", "59"],
//   ["Bradley Greer", "Software Engineer", "London", "41"],
//   ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
//   ["Jenette Caldwell", "Development Lead", "New York", "30"],
//   ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
//   ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
//   ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
//   ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
//   ["Gavin Joyce", "Developer", "Edinburgh", "42"],
//   ["Jennifer Chang", "Regional Director", "Singapore", "28"],
//   ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
//   ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
//   ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
//   ["Michelle House", "Integration Specialist", "Sidney", "37"],
//   ["Suki Burks", "Developer", "London", "53"],
//   ["Prescott Bartlett", "Technical Author", "London", "27"],
//   ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
//   ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
//   ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
//   ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
//   ["Hope Fuentes", "Secretary", "San Francisco", "41"],
//   ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
//   ["Timothy Mooney", "Office Manager", "London", "37"],
//   ["Jackson Bradshaw", "Director", "New York", "65"],
//   ["Olivia Liang", "Support Engineer", "Singapore", "64"],
// ];

function UserProfile() {
  // let { id } = useParams();
  // console.log(id);

  // const currentData = dataTable[id]

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/bg/damir-bosnjak.jpg")}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title"> Chet Faker  </h5>
                  </a>
                  <p className="description">@chetfaker</p>
                </div>
                <p className="description text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                        <span className="text-muted">
                          <small>Offline</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Creative Tim <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-danger">
                          <small>Busy</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card> */}
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Melbourne"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="textarea"
                          type="textarea"
                          cols="80"
                          rows="4"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother,
                          reading into it"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "3rem" }}>
          <Col md="4">
            <Card>
              <CardBody>
                <Timeline />
              </CardBody>
            </Card>
          </Col>

          <Col md="8">
            <Card>
              <CardBody>
                <ImageGallery />
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <VideoGallery />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "3rem" }}></Row>
      </div>
    </>
  );
}

export default UserProfile;
