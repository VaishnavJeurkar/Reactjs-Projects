import {CalendarDate, CaretUp} from "react-bootstrap-icons"
import {calenderItems} from '../constants/index'
export default function Calender() {
    return (
      <div className="Calender">
        <div className="header">
          <div className="title">
            <CalendarDate size="18"/>
            <p>Calendar</p>
           
          </div>
          <div className="btns">
            <span>
               <CaretUp size="20"/>
              </span>
          </div>        
        </div>
        <div className="items">
          {
            calenderItems.map(items=>
              <div className="item" key={items}>
                {items}
              </div>
              )
          }
        </div>
      </div>
    )
  }
  