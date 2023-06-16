import { useState } from "react"
import Modal from "./Modal";
import {Bell, CalendarDay, Clock,Palette, X } from 'react-bootstrap-icons'
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/date-fns';


export default function AddNewTodo() {
  
  const [showModal, setShowModal] = useState(false);
  const [text , setText] = useState();
  const [day , setDay] = useState(new Date());
  const [time , setTime] = useState(new Date());


  return (
    <div className="AddNewTodo">
      <div className="button">
        <button onClick={()=>setShowModal(true)}>
          + New Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
       <form>

        <div className="text">
          <h3>Add New To Do!</h3>
          <input 
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="To do ..."
          autoFocus
          >
          </input>
        </div>

        <div className="remind">
          <Bell></Bell>
          <p>Remind Me!</p>
        </div>

        <div className="pick-day">
          <div className="title">
            <CalendarDay></CalendarDay>
            <p>Choose a Day</p>
          </div>
          <DatePicker 
          value={day}
          onChange={day=>setDay(day)}>

          </DatePicker>
        </div>

        <div className="pick-time">
          <div className="title">
            <Clock></Clock>
            <p>Choose a Time</p>
          </div>
          <TimePicker 
          value={time}
          onChange={time=>setTime(time)}></TimePicker>
        </div>

        <div className="pick-project">
        <div className="title">
            <Palette></Palette>
            <p>Choose a Time</p>
          </div>
        </div>

        <div className="projects">
          <div className="project active">
              personal
          </div>

          <div className="project">
              work
          </div>
        </div>

        <div className="cancel" onClick={()=> setShowModal(false)}>
          <X size={40}></X>
        </div>

        <div className="confirm">
          <button>+ Add Todo</button>
        </div>

        </form>
        </MuiPickersUtilsProvider>
      </Modal>
    </div>
  )
}
