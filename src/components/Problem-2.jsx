import React from 'react';
import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Problem2 = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [data, setData] = useState([]);

    

  const handleCloseA = () => {setShowA(false)};
  const handleCloseB = () => {setShowB(false)};
  const handleShowA = () => {fetchData(allcontact);setShowA(true); };
  const handleShowB = () => {fetchData(uscontact);setShowB(true)};
  const gotoA = () => {handleCloseB();handleShowA();}
  const gotoB = () => {handleCloseA();handleShowB();}

  const allcontact = 'https://contact.mediusware.com/api/contacts/'
  const uscontact = 'https://contact.mediusware.com/api/country-contacts/United%20States/'

  async function fetchData(path) {
    try {
      // Fetch data from the API
      const response = await fetch(path);
      const data = await response.json();
        setData(data.results)
      
  
      console.log(data);
    } catch (error) {
      console.error('Error fetching or sorting data:', error);
    }
  }

  
    const buttonStyle = {
      backgroundColor: '#46139F',
      color: '#ffffff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
    const buttonStyle2 = {
        backgroundColor: '#FF7F50',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      };

    
  
    return (

        <div className="container">
            <div className="row justify-content-center mt-5 ">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <Button style={buttonStyle} onClick={handleShowA}>
                All Contacts
                </Button>
                <Button  style={buttonStyle2} onClick={handleShowB}>
                US Contacts
                </Button>
                
                
                </div>
                </div>
                
      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header closeButton>
          <Modal.Title>All Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
            {
                data.map((item, index)=>(
                    
                    <ListGroup.Item key={index}>{item.phone}</ListGroup.Item>
                ))
            }
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
        <Form.Check id="onlyEvenB"/>
            <Form.Label htmlFor="onlyEvenB">Only Even</Form.Label>
          <Button variant="secondary" onClick={handleCloseA}>
            Close
          </Button>
          <Button style={buttonStyle2} onClick={gotoB}>
            US Contracts
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showB} onHide={handleCloseB}>
        <Modal.Header closeButton>
          <Modal.Title>US contact</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>
            {
                data.map((item, index)=>(
                    
                    <ListGroup.Item key={index}>{item.phone}</ListGroup.Item>
                ))
            }
    </ListGroup></Modal.Body>
        <Modal.Footer>
            <Form.Check id="onlyEvenB"/>
            <Form.Label htmlFor="onlyEvenB">Only Even</Form.Label>
          <Button variant="secondary" onClick={handleCloseB}>
            Close
          </Button>
          <Button style={buttonStyle} onClick={gotoA}>
            All Contracts
          </Button>
        </Modal.Footer>
      </Modal>
    

            </div>
        
    );
};

export default Problem2;