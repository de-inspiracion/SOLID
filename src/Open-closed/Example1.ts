


/* Open-Closed Principle
Open-Closed Principle

Abierto a la extensión, pero cerrado a la modificación

The Open-Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. 
This principle states that software entities should be open for extension, but closed for modification. 
In other words, a class should be open for extension, but closed for modification. 
A class should be open for extension, but closed for modification. 
This principle states that a class should be open for extension, but closed for modification. 
In other words, a class should be open for extension, but closed for modification. 
A class should be open for extension, but closed for modification. 
This principle states that a class should be open for extension, but closed for modification. 
*/

// cerrado a la modificacion y abierto a la extencion
// deberia ser capaz de extender sus funcionalidades si tener que modificar el codigo






// exmple 2

export enum typeReport {
    PDF = "PDF",
    EXCEL = "EXCEL"

}


// Wrong
export class Report {

    constructor(){}

    generateReport(type: typeReport) {

        if (type === typeReport.PDF) {
            console.log('create PDF report');
        }

        if(type === typeReport.EXCEL) {
            console.log('create EXCEL report')
        }

    }

}

export interface ReportInterface {
    generateReport(): void;
}

// good 
export class ReportFIle {
    private report: ReportInterface;
    constructor(report : ReportInterface) {
        this.report = report;
    }

    generateReport() {
        this.report.generateReport();
    }

}

const createReport = new Report()    
createReport.generateReport(typeReport.PDF);




class createReportPDF implements ReportInterface {

    generateReport() {
        console.log('create PDF report OPEN CLOSED PRINCIPLE');
    }

}

const createReportFile = new ReportFIle(new createReportPDF());
createReportFile.generateReport();
