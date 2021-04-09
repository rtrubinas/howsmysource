import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    
    <Container fluid>
    <div class="header">
      <Row>
        <h1>How to identify a quality source</h1>
      </Row>
      <Row>
      <h2>1. Is it an academic or primary source?</h2>
      </Row>
      <div class="paragraph">
        <Row>
        <Col />
        <Col>
        <p>
          <a href="https://www.jstor.org/">JSTOR</a>, <a href="https://scholar.google.com/">Google Scholar</a>, and <a href="https://www.ssrn.com/"> SSRN</a> are excellent resources
         to search for academically accredited papers.  <br/>
        <a href="https://guides.jstor.org/researchbasics">JSTOR Research Basics</a> provides an overview of how to use their website, and how to identify and verify sources</p>
      
      </Col>
      <Col />
      </Row>
      </div>
      <h2>2. Is it an independent source?</h2>
      <div class="paragraph">
        <p>An independent source is a source that has no vested
        interest in a given topic and therefore is
        commonly expected to cover the topic from a disinterested perspective.
        Independent sources have editorial independence (advertisers do not dictate content)
        and no conflicts of interest (there is no potential for personal, financial,
        or political gain to be made from the existence of the publication). <br/><br/>
        <a href="https://en.wikipedia.org/wiki/Wikipedia:Independent_sources" >Wikipedia</a> has a robust entry on independent sources.
        
      </p>
      </div>
      
      <h2>3. Have you researched the author(s)?</h2>
      <div class="paragraph">
        <p>A search engine may quickly give you an idea of how likely an 
            author is to have a conflict of interest.</p>
      </div>

    </div>
    </Container>
     
     
   
  );
}

export default App;
