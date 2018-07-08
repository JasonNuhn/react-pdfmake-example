import React, { Component } from 'react';
// import logo from './logo.svg';
// import pdfMakeTable from './PdfMakeTable';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import image from './image.png';
import Textarea from "react-textarea-autosize";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dateInput: '',
      projName: '',
      projMan: '',
      projManEmail: '',
      projManPhone: '',
      customer: '',
      custEmail: '',
      custPhone: '',
      summary: '',
      arrivalTime: '',
      finishedTime: '',
      taskOneInput: '',
      taskTwoInput: '',
      taskThreeInput: '',
      taskFourInput: '',
      taskOneDone: false,
      taskTwoDone: false,
      taskThreeDone: false,
      taskFourDone: false,
    };

    this.handleChangeDateInput = this.handleChangeDateInput.bind(this);
    this.handleChangeProjName = this.handleChangeProjName.bind(this);
    this.handleChangeProjMan = this.handleChangeProjMan.bind(this);
    this.handleChangeProjManEmail = this.handleChangeProjManEmail.bind(this);
    this.handleChangeProjManPhone = this.handleChangeProjManPhone.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeCustEmail = this.handleChangeCustEmail.bind(this);
    this.handleChangeCustPhone = this.handleChangeCustPhone.bind(this);
    this.handleChangeSummary = this.handleChangeSummary.bind(this);
    this.handleChangeArrivalTime = this.handleChangeArrivalTime.bind(this);
    this.handleChangeFinishedTime = this.handleChangeFinishedTime.bind(this);
    this.handleChangeTaskOneInput = this.handleChangeTaskOneInput.bind(this);
    this.handleChangeTaskTwoInput = this.handleChangeTaskTwoInput.bind(this);
    this.handleChangeTaskThreeInput = this.handleChangeTaskThreeInput.bind(this);
    this.handleChangeTaskFourInput = this.handleChangeTaskFourInput.bind(this);
    this.handleChangeTaskOneDone = this.handleChangeTaskOneDone.bind(this);
    this.handleChangeTaskTwoDone = this.handleChangeTaskTwoDone.bind(this);
    this.handleChangeTaskThreeDone = this.handleChangeTaskThreeDone.bind(this);
    this.handleChangeTaskFourDone = this.handleChangeTaskFourDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDateInput(event) {
    this.setState({dateInput: event.target.value});
  }

  handleChangeProjName(event) {
    this.setState({projName: event.target.value});
  }

  handleChangeProjMan(event) {
    this.setState({projMan: event.target.value});
  }

  handleChangeProjManEmail(event) {
    this.setState({projManEmail: event.target.value});
  }

  handleChangeProjManPhone(event) {
    this.setState({projManPhone: event.target.value});
  }

  handleChangeCustomer(event) {
    this.setState({customer: event.target.value});
  }

  handleChangeCustEmail(event) {
    this.setState({custEmail: event.target.value});
  }

  handleChangeCustPhone(event) {
    this.setState({custPhone: event.target.value});
  }

  handleChangeSummary(event) {
    this.setState({summary: event.target.value});
  }

  handleChangeArrivalTime(event) {
    this.setState({arrivalTime: event.target.value});
  }

  handleChangeFinishedTime(event) {
    this.setState({finishedTime: event.target.value});
  }

  handleChangeTaskOneInput(event) {
    this.setState({taskOneInput: event.target.value});
  }

  handleChangeTaskTwoInput(event) {
    this.setState({taskTwoInput: event.target.value});
  }

  handleChangeTaskThreeInput(event) {
    this.setState({taskThreeInput: event.target.value});
  }

  handleChangeTaskFourInput(event) {
    this.setState({taskFourInput: event.target.value});
  }

  handleChangeTaskOneDone(event) {
    this.setState({taskOneDone: event.target.value});
  }

  handleChangeTaskTwoDone(event) {
    this.setState({taskTwoDone: event.target.value});
  }

  handleChangeTaskThreeDone(event) {
    this.setState({taskThreeDone: event.target.value});
  }

  handleChangeTaskFourDone(event) {
    this.setState({taskFourDone: event.target.value});
  }


  handleSubmit(event) {
    alert('PDF report has been created.  Please click Close');
    // console.log('A name was submitted: ' + this.state.ProjName + this.state.projMan)
    // event.preventDefault();
  }
  _exportPdfTable = () => {

    // change this number to generate more or less rows of data
    // pdfMakeTable(20);
    const {vfs} = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
  
    // const data = fakeData(rows);
    // const formattedData = _format(data);
  
    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [
        // {
        //   image: image,
        //   fit: [100, 100],
        //   // pageBreak: 'after'
        // },
        {text: 'Project Status Update', fontSize: 20, alignment: 'center'},
        {text: 'Updated Project Status As Of: '+this.state.dateInput, fontSize: 15, alignment: 'center'},
        {text: 'Arrival Time: '+this.state.arrivalTime, fontSize: 15, alignment: 'center'},
        {text: 'Finished Time: '+this.state.finishedTime, fontSize: 15, alignment: 'center'},
        '\n',
        {
          style: 'tableExample',
          table: {
            // headerRows: 1,
            dontBreakRows: true,
            widths: [100, 200, 80, 100],
            body: [
              [{text: 'Project Details', colSpan: 4, fontSize: 15, bold: 'true'}, {}, {}, {}],
              [{text: 'Project Name', fontSize: 12, bold: 'true'}, {text: this.state.projName, colSpan:3, fontSize: 12, bold: 'true'}, {}, {}],
              [{text: 'Project Manager', fontSize: 12}, {text: this.state.projMan, fontSize: 12}, {text: 'Contact', fontSize: 12}, {text: this.state.projManEmail+'\n'+this.state.projManPhone, fontSize: 8}],
              [{text: 'Customer', fontSize: 12}, {text: this.state.customer, fontSize: 12}, {text: 'Contact', fontSize: 12}, {text: this.state.custEmail+'\n'+this.state.custPhone, fontSize: 8}],
              // ...formattedData,
            ]
          }
        },
        {text: 'Summary of Progress', fontSize: 20, italics: true, color: 'blue', bold: 'true' },
        {
          // {text: 'Summary of Progress', colSpan: 4, fontSize: 12, width: 'full', italics: true, color: 'blue', bold: 'true'},
          style: 'tableExample',
          table: {
            // headerRows: 1,
            dontBreakRows: true,
            heights: [20, 70],
            widths: [100, '*'],
            body: [
              [{text: 'Overall Progress', fontSize: 15}, {text: this.state.summary, fontSize: 12}],
              // ...formattedData,
            ]
          }
        },
        {text: 'Tasks Completed:', bold: 'true', italics: true, color: 'blue'},
        {
          style: 'tableExample',
          table: {
            // headerRows: 1,
            dontBreakRows: true,
            widths: [100, '*', 100],
            body: [
              [{text: 'TaskID', bold: 'true', fontSize: 12}, {text: 'Outstanding Tasks', fontSize: 12, bold: 'true'}, {text: 'Completed?', fontSize: 12, bold: 'true'}],
              [{text: '1', bold: 'true', fontSize: 12}, {text: this.state.taskOneInput}, {text: this.state.taskOneDone}],
              [{text: '2', bold: 'true', fontSize: 12}, {text: this.state.taskTwoInput}, {text: this.state.taskTwoDone}],
              [{text: '3', bold: 'true', fontSize: 12}, {text: this.state.taskThreeInput}, {text: this.state.taskThreeDone}],
              [{text: '4', bold: 'true', fontSize: 12}, {text: this.state.taskFourInput}, {text: this.state.taskFourDone}],
              // ...formattedData,
            ]
          }
        }
      ],
      styles: {
        // header: {
        // 	fonSize: 18,
        // 	bold: true,
        // 	margin: [0, 0, 0, 10]
        // },
        // subheader: {
        // 	fontSize: 16,
        // 	bold: true,
        // 	margin: [0, 10, 0, 5]
        // },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        // tableHeader: {
        // 	bold: true,
        // 	fontSize: 13,
        // 	color: 'black'
        // }
  
      }
    };
  
    pdfMake.createPdf(documentDefinition).open();
  }

  render() {
    return (
      <div className="App-intro">
      <h2>Project Status Update</h2>
      <form onSubmit={this.handleSubmit}>
       <label>
          Date:
          <br />
          <input type="text" placeholder={'mm-dd-yy'} value={this.state.dateInput} onChange={this.handleChangeDateInput} />
        </label>
        <br />
        <label>
          Project Name:
          <br />
          <input type="text" placeholder={'Enter Project Name'} value={this.state.projName} onChange={this.handleChangeProjName} />
        </label>
        <br />
        <label>
          Project Manager:
          <br />
          <input type="text" placeholder={'Enter Manager Name'} value={this.state.projMan} onChange={this.handleChangeProjMan} />
        </label>
        <br />
        <label>
          Project Manager Email:
          <br />
          <input type="text" placeholder={'Enter Manager Email'} value={this.state.projManEmail} onChange={this.handleChangeProjManEmail} />
        </label>
        <br />
        <label>
          Project Manager Phone:
          <br />
          <input type="text" placeholder={'(555) 555-5555'} value={this.state.projManPhone} onChange={this.handleChangeProjManPhone} />
        </label>
        <br />
        <label>
          Customer:
          <br />
          <input type="text" placeholder={'Enter Customer'} value={this.state.customer} onChange={this.handleChangeCustomer} />
        </label>
        <br />
        <label>
          Customer Phone:
          <br />
          <input type="text" placeholder={'(555) 555-5555'} value={this.state.custEmail} onChange={this.handleChangeCustEmail} />
        </label>
        <br />
        <label>
          Customer Email:
          <br />
          <input type="text" placeholder={'Enter Customer Email'} value={this.state.custPhone} onChange={this.handleChangeCustPhone} />
        </label>
        <br />
        <label>
          Summary:
          <br />
          <Textarea type="text" placeholder={'State the current progress of the project'} value={this.state.summary} onChange={this.handleChangeSummary} />
        </label>
        <br />
        <label>
          Arrival Time:
          <br />
          <input type="text" placeholder={'hh:mm am/pm'} value={this.state.arrivalTime} onChange={this.handleChangeArrivalTime} />
        </label>
        <br />
        <label>
          Finished Time:
          <br />
          <input type="text" placeholder={'hh:mm am/pm'} value={this.state.finishedTime} onChange={this.handleChangeFinishedTime} />
        </label>
        <br />
        <label>
          Outstanding Task #1:
          <br />
          <input type="text" placeholder={'Task #1'} value={this.state.taskOneInput} onChange={this.handleChangeTaskOneInput} />
          Completed?
          <input type="checkbox" checked={this.state.taskOneDone} value={true} onChange={this.handleChangeTaskOneDone} />
        </label>
        <br />
        <label>
          Outstanding Task #2:
          <br />
          <input type="text" placeholder={'Task #2'} value={this.state.taskTwoInput} onChange={this.handleChangeTaskTwoInput} />
          Completed?
          <input type="checkbox" checked={this.state.taskTwoDone} value={true} onChange={this.handleChangeTaskTwoDone} />
        </label>
        <br />
        <label>
          Outstanding Task #3:
          <br />
          <input type="text" placeholder={'Task #3'} value={this.state.taskThreeInput} onChange={this.handleChangeTaskThreeInput} />
          Completed?
          <input type="checkbox" checked={this.state.taskThreeDone} value={true} onChange={this.handleChangeTaskThreeDone} />
        </label>
        <br />
        <label>
          Outstanding Task #4:
          <br />
          <input type="text" placeholder={'Task #4'} value={this.state.taskFourInput} onChange={this.handleChangeTaskFourInput} />
          Completed?
          <input type="checkbox" checked={this.state.taskFourDone} value={true} onChange={this.handleChangeTaskFourDone} />
        </label>
        <br />
        <button className="Button" onClick={this._exportPdfTable}>
            Export PDF
        </button>
      </form>
      </div>
    );
  }
}

export default App;
