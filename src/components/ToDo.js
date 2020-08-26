import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import ListItem from "./ListItem";

const ToDo = (props) => {
  const [listItem, setListItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setListItem([inputValue, ...listItem]);
    setInputValue('');
  };

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const deleteData = (id) =>{
    setListItem((oldItem)=>{
        return oldItem.filter((value, index)=>{
            return index != id; 
        })
    })
  }
  return (
    <Container>
      <Row className={"mt-5"}>
        <Col lg={5} className="">
          <Card
            style={{}}
            className="mt-5 rounded-0 border-0 shadow bg-info text-light"
          >
            <Card.Body>
              <Card.Title>ToDo List</Card.Title>
              <Card.Text>
                {/* Form */}
                <form onSubmit={submitHandler}>
                  <Row>
                    <Col lg={9} className={"m-0 pr-0"}>
                      <input
                        type={"text"}
                        className={"form-control rounded-0"}
                        onChange={changeHandler}
                        value={inputValue}
                      />
                    </Col>
                    <Col lg={3} className={"m-0 p-0"}>
                      <button
                        type={"submit"}
                        className={"btn btn-light rounded-0"}
                      >
                        Add
                      </button>
                    </Col>
                  </Row>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={5}>
          <ul className="list-group border-0 rounded-0">
            <li className="list-group-item active bg-info text-light">Selected Items</li>
            {
                listItem.length? 
                listItem.map((value, index)=>{
                    return(
                        <ListItem
                            value={value}
                            id={index}
                            selectHandler = {deleteData}
                            key={index}
                        />
                    )
                }):
                <li className="list-group-item " key={'error'}> No Data !!  </li>
            }
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
