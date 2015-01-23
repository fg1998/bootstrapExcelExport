/*
    bootstrapExportExcel https://github.com/fg1998/bootstrapExcelExport
    Copyright 2015 Fernando Garcia fg1998@gmail.com
    Based on batta tech excel export https://github.com/battatech/battatech_excelexport
*/

var defaults = {
    tableSelector: null,
    fileName: "download.xls",
    worksheetName: "My Worksheet",
    encoding: "utf-8"
};

$.fn.bootstrapExcelExport = function (options) {

    var settings = $.extend({}, defaults, options);

    $(this).on('click', function (e) {

        var htmltable = $('<div>').append($(settings.tableSelector).clone()).html();
        var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
        excelFile += "<head>";
        excelFile += '<meta http-equiv="Content-type" content="text/html;charset="' + settings.encoding + '" />';
        excelFile += "<!--[if gte mso 9]>";
        excelFile += "<xml>";
        excelFile += "<x:ExcelWorkbook>";
        excelFile += "<x:ExcelWorksheets>";
        excelFile += "<x:ExcelWorksheet>";
        excelFile += "<x:Name>";
        excelFile += settings.worksheetName;
        excelFile += "</x:Name>";
        excelFile += "<x:WorksheetOptions>";
        excelFile += "<x:DisplayGridlines/>";
        excelFile += "</x:WorksheetOptions>";
        excelFile += "</x:ExcelWorksheet>";
        excelFile += "</x:ExcelWorksheets>";
        excelFile += "</x:ExcelWorkbook>";
        excelFile += "</xml>";
        excelFile += "<![endif]-->";
        excelFile += "</head>";
        excelFile += "<body>";
        excelFile += htmltable.replace(/"/g, '\'');
        excelFile += "</body>";
        excelFile += "</html>";

        var uri = "data:application/vnd.ms-excel;base64,";
        var result = uri + window.btoa(unescape(excelFile));

        $(this).attr("href", result).attr("download", settings.fileName);
        


    });
};
