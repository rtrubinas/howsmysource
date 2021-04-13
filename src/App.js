import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';


function App() {
  return (
    <div class="primary">
      <Container fluid>
        <Col>
          <Row >

            <Col>
              <h1>How to identify a quality source</h1>
            </Col>

          </Row>
          <Row>
            <Col>
              <h2>1. Is it an academic or primary source?</h2>
            </Col>
          </Row>
          <Row>

            <Col>

              <p><Button variant="info" href="https://www.jstor.org/">JSTOR</Button>, <Button variant="info" href="https://scholar.google.com/">Google Scholar</Button>, and <Button variant="info" href="https://www.ssrn.com/"> SSRN</Button> are excellent resources
        to search for academically accredited papers.
              <Button variant="info" href="https://guides.jstor.org/researchbasics">JSTOR Research Basics</Button> provides an overview of how to use their website, and how to identify and verify sources
              <br />
                <br />
              </p>
            </Col>

          </Row>
          <Row>
            <Col>
              <h2 class="header">2. Is it an independent source?</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>An independent source is a source that has no vested
              interest in a given topic and therefore is
              commonly expected to cover the topic from a disinterested perspective.
              Independent sources have editorial independence (advertisers do not dictate content)
              and no conflicts of interest (there is no potential for personal, financial,
              or political gain to be made from the existence of the publication).
              <br />
                <Button variant="info" href="https://en.wikipedia.org/wiki/Wikipedia:Independent_sources" >Wikipedia</Button> has a robust entry on independent sources </p>
              <br />
              <br />
            </Col>
          </Row>

          <h2>3. Have you researched the author(s) and institution?</h2>

          <p>A search engine may quickly give you an idea of how likely an
          author is to have a conflict of interest. Websites ending
            in <Button variant="info" href="https://net.educause.edu/eligibility.htm">.edu</Button> have institutional accreditation from an institutional accrediting
            body recognized by the U.S. Department of Education. Many other nations also have unique web domains for their educational institutions</p>
        </Col>
      </Container>
    </div>


  );
}

export default App;
