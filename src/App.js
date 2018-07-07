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
      projName: '',
      projMan: '',
      projManEmail: '',
      projManPhone: '',
      customer: '',
      custEmail: '',
      custPhone: '',
      summary: '',

    };

    this.handleChangeProjName = this.handleChangeProjName.bind(this);
    this.handleChangeProjMan = this.handleChangeProjMan.bind(this);
    this.handleChangeProjManEmail = this.handleChangeProjManEmail.bind(this);
    this.handleChangeProjManPhone = this.handleChangeProjManPhone.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeCustEmail = this.handleChangeCustEmail.bind(this);
    this.handleChangeCustPhone = this.handleChangeCustPhone.bind(this);
    this.handleChangeSummary = this.handleChangeSummary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    alert('PDF report has been created.  Please click OK');
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
        {
          image: image,
          fit: [100, 100],
          // pageBreak: 'after'
        },
        {text: 'Project Status Update', fontSize: 20, alignment: 'center'},
        {text: 'Updated Project Status As Of: <dd-mm-yy>', fontSize: 15, alignment: 'center'},
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
            body: [
              [{text: 'Overall Progress', fontSize: 15, width: 100}, {text: this.state.summary, colSpan: 3, fontSize: 12, width: 400}, {}, {}],
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
            widths: [50, 250, 80, 100],
            body: [
              [{text: 'TaskID', bold: 'true', fontSize: 12}, {text: 'Task Description', fontSize: 12, bold: 'true'}, {text: 'Completed On', fontSize: 12, bold: 'true'}, {text: 'Completed By', fontSize: 12, bold: 'true'}],
              [{text: '1', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
              [{text: '2', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
              [{text: '3', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
              [{text: '4', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
              [{text: '5', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
              [{text: '6', bold: 'true', fontSize: 12}, {text: ''}, {text: ''}, {text: ''}],
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
      <form onSubmit={this.handleSubmit}>
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
        <button onClick={this._exportPdfTable}>
            Export PDF
        </button>
      </form>
    );
  }
}

export default App;
