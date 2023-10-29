import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function EditCards({ data, setData, goal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [startDate, setStartDate] = useState(goal.date);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const ButtonClickHandler = () => {
    const newArray =[];
    data.map( card => {
        if(card.key !==  goal.key){
            newArray.push(card)
        }
    });
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    setData([{key: goal.key, title: title, body: body, date: startDate}, ...newArray]);
  }

  const markAsCompleteHandler = () => {
    const newArray =[];
    data.map( card => {
        if(card.key !==  goal.key){
            newArray.push(card)
        }
    });
    setData([...newArray]);
  }

  return (
    <>
      <Button variant="primary m-2" onClick={handleShow}>
        Edit Post
      </Button>
      <Button variant="success m-2" onClick={markAsCompleteHandler}>
        Mark As Complete
      </Button>

      <Offcanvas className="bg-dark text-white" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Goal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-3">
            <p className="lead">Edit Title</p>
            <input ref={titleRef} type='text' className='form-control' defaultValue={goal.title} />
          </div>
          <div className="p-3">
            <p className="lead">Edit Date</p>
            <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} />
          </div>
          <div className="p-3">
            <p className="lead">Edit Description</p>
            <textarea ref={bodyRef} type='text' rows={5} className='form-control' defaultValue={goal.body} />
          </div>
          <div className="p-4">
            <button className="btn btn-primary" onClick={ButtonClickHandler}>Save Changes</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
