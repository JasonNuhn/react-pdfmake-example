import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import image from './image.png';
import fakeData from './FakeData';

// const _format = (data) => {
// 	return data.map(item => {
// 		return ([
// 			{text: item.name},
// 			{text: item.username},
// 			{text: item.email},
// 			{text: item.phone},
// 			{text: item.website},
// 		]);
// 	});
// }

export default (rows) => {
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
						[{text: 'Project Name', fontSize: 12, bold: 'true'}, {text: '<Name of the Project>', colSpan:3, fontSize: 12, bold: 'true'}, {}, {}],
						[{text: 'Project Manager', fontSize: 12}, {text: '<Name of the Project Manager>', fontSize: 12}, {text: 'Contact', fontSize: 12}, {text: 'Email:\nPhone:', fontSize: 8}],
						[{text: 'Customer', fontSize: 12}, {text: '<Name of the Customer', fontSize: 12}, {text: 'Contact', fontSize: 12}, {text: 'Email:\nPhone:', fontSize: 8}],
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
						[{text: 'Overall Progress', fontSize: 15, width: 100}, {text: 'This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', colSpan: 3, fontSize: 12, width: 400}, {}, {}],
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
