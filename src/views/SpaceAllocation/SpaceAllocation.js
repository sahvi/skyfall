import React, { Component, lazy, Suspense } from 'react';
import GridLayout from 'react-grid-layout';
import './styles-react-grid-layout.css';
import './styles-react-resizable.css';
import eggs from './products/eggs.jpeg';
import spinach from './products/spinach.jpeg';
import water from './products/water.jpeg';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';

// import {DragDropContext,DropTarget} from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';

// import Widget03 from '../../views/Widgets/Widget03'
const Widget03 = lazy(() => import('../Widgets/Widget03'));
const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const itemStyle = {
  width: '100%',
  height: '100%'
};
const itemImgStyle = {
  width: '25%',
  height: '25%',
  marginLeft: '50%',
  marginTop: '-15%'
};

const spaceAllocation = [
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


class SpaceAllocation extends Component {
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
    var layout = [
      {i: 'a', x: 0, y: 0, w: 4, h: 4, minW: 3, minH: 4},
      {i: 'b', x: 0, y: 0, w: 4, h: 4, minW: 3, minH: 4},
      {i: 'c', x: 4, y: 0, w: 4, h: 4, minW: 3, minH: 4}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a">
          <Card style={itemStyle} className="text-white bg-primary">
            <CardHeader>
              <div className="text-value">
                Eggs
                <ButtonGroup className="float-right">
                  <ButtonDropdown>
                    <i className="fa fa-edit"></i>
                    {/*<DropdownMenu right>*/}
                      {/*<DropdownItem>Edit</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody className="pb-0">

              <div className="text-value">99¢</div>
              <div><img src={eggs} style={itemImgStyle}/></div>
              <br/>
            </CardBody>
          </Card>
        </div>
        <div key="b">
          <Card style={itemStyle} className="text-white bg-warning">
            <CardHeader>
              <div className="text-value">
                Spinach
                <ButtonGroup className="float-right">
                  <ButtonDropdown>
                    <i className="fa fa-edit"></i>
                    {/*<DropdownMenu right>*/}
                    {/*<DropdownItem>Edit</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody className="pb-0">

              <div className="text-value">$3.29</div>
              <div><img src={spinach} style={itemImgStyle}/></div>
              <br/>
            </CardBody>
          </Card>
        </div>
        <div key="c">
          <Card style={itemStyle} className="text-white bg-info">
            <CardHeader>
              <div className="text-value">
                Water
                <ButtonGroup className="float-right">
                  <ButtonDropdown>
                    <i className="fa fa-edit"></i>
                    {/*<DropdownMenu right>*/}
                    {/*<DropdownItem>Edit</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody className="pb-0">

              <div className="text-value">$1.99</div>
              <div><img src={water} style={itemImgStyle}/></div>
              <br/>
            </CardBody>
          </Card>
        </div>
      </GridLayout>
    );
  }
}

export default SpaceAllocation;
