const {getReportData}=require('../services/reportService');
const {generateReport}=require('../services/pdfService');
async function runReport(){
 const data=await getReportData();
 return await generateReport(data);
}
module.exports={runReport};
