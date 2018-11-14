import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
// import { EventCalendar } from 'react-event-calendar';
import {
  // Badge,
  // Button,
  // ButtonDropdown,
  // ButtonGroup,
  // ButtonToolbar,
  Card,
  CardBody,
  // CardFooter,
  CardHeader,
  // CardTitle,
  Col,
  // Dropdown,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  // Progress,
  Row,
  // Table,
} from 'reactstrap';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

// import {DragDropContext,DropTarget} from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';

// import Widget03 from '../../views/Widgets/Widget03'
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const EventCalendar = require('react-event-calendar');

const events = [
  {
    start: '2018-11-19',
    end: '2018-11-24',
    eventClasses: 'optionalEvent',
    title: 'Thanks Giving',
    description: 'Event for thanks giving',
  },
  {
    start: '2018-12-22',
    end: '2018-12-29',
    eventClasses: 'optionalEvent',
    title: 'Christmas',
    description: 'Event for Christmas',
    data: 'Need to check this',
  },
];

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


class Events extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className="text-white bg-info">
              <CardHeader>
                <div className="text-value">
                  Event Management
                  {/*<ButtonGroup className="float-right">*/}
                    {/*<ButtonDropdown id='card0' isOpen={this.state.card0} toggle={() => { this.setState({ card0: !this.state.card0 }); }}>*/}
                      {/*<DropdownToggle caret className="p-0" color="transparent">*/}
                        {/*<i className="icon-settings"></i>*/}
                      {/*</DropdownToggle>*/}
                      {/*<DropdownMenu right>*/}
                        {/*<DropdownItem>Remove from Dashboard</DropdownItem>*/}
                        {/*<DropdownItem>Collapse/Expand</DropdownItem>*/}
                      {/*</DropdownMenu>*/}
                    {/*</ButtonDropdown>*/}
                  {/*</ButtonGroup>*/}
                </div>
              </CardHeader>
              <CardBody>
                <EventCalendar
                  month={7}
                  year={2015}
                  events={events}
                  onEventClick={(target, eventData, day) => console.log(eventData)}
                    />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Events;
