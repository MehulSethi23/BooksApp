import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div
            className="header-body"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div class="col-sm">
              <span>
                <h2 style={{ color: "white" }}>Tables</h2>
              </span>
            </div>
            <div class="col-sm">
              <div
                style={{
                  border: "1px solid white",
                  width: "20%",
                  height: "80%",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  marginRight: "3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  class="ni ni-shop"
                  style={{ color: "blue", marginRight: "3px" }}
                ></i>
                <h3
                  style={{
                    color: "black",
                    marginLeft: "3%",
                    marginRight: "3%",
                    marginTop: "4%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  / Tables
                </h3>
              </div>
            </div>
            <div
              className="header-body"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                class="btn btn-secondary"
                style={{ marginTop: "2%" }}
              >
                New
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                style={{ marginTop: "2%" }}
              >
                Filters
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
