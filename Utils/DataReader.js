const ExcelJS = require('exceljs');

async function readExcelData(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("/Users/SudhaPalaniappan/Downloads/TestData.xlsx");

  const data = {
    userDetails: [],
    };

 // Reading UserDetails sheet
 const userDetailsSheet = workbook.getWorksheet('UserDetails');
 data.userDetails = {
   firstName: userDetailsSheet.getRow(2).getCell(1).value,
   lastName: userDetailsSheet.getRow(2).getCell(2).value,
   countryCode: userDetailsSheet.getRow(2).getCell(3).value,
   phoneNumber: userDetailsSheet.getRow(2).getCell(4).value,
   country: userDetailsSheet.getRow(2).getCell(5).value,
   address: userDetailsSheet.getRow(2).getCell(6).value,
   address1: userDetailsSheet.getRow(2).getCell(7).value,
   city: userDetailsSheet.getRow(2).getCell(8).value,
   state: userDetailsSheet.getRow(2).getCell(9).value,
   zipCode: userDetailsSheet.getRow(2).getCell(10).value,
   emailId: userDetailsSheet.getRow(2).getCell(11).value

  };
 
  return data;
}

module.exports = { readExcelData };
