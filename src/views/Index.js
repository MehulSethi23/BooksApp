import { useState, useEffect } from "react";
import { Card, CardHeader, Table, Container, Row, Col } from "reactstrap";

import Header from "components/Headers/Header.js";
import Axios from "axios";

const Index = (props) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6"
    ).then((response) => {
      //console.log(response.data.clients);

      setData(response.data.clients);
    });
  }, []);
  console.log(Data);
  return (
    <>
      <Header />
      <div>
        <Container className="mt--7 " fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Light Table</h3>
                    </div>
                    <div className="col text-right"></div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">OrderId</th>
                      <th scope="col">invoicePaid</th>
                      <th scope="col">invoicePending</th>
                    </tr>
                  </thead>
                  {Data.map((idx) => {
                    return (
                      <tbody>
                        <tr>
                          <th scope="row">{idx.id}</th>
                          <td>{idx.name}</td>
                          <td>{idx.company}</td>
                          <td>{idx.orderId}</td>
                          <td>{idx.invoicepaid}</td>
                          <td>{idx.invoicePending}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
    </>
  );
};

export default Index;
