import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

export class Constants {
  readonly DATE_FORMAT = "dd/MM/yyyy";
  readonly DATE_TIME_FORMAT = `dd/MM/yyyy HH:mm:ss`;
}

@Pipe({
  name: "dateFormat"
})
export class DateFormatPipe implements PipeTransform {
  public format!: string;
  private readonly datePipe: DatePipe;
  
  constructor() {
    this.datePipe = new DatePipe("pt-Br");
  }

  transform(value: Date, format?: string, timezone?: string): string | null {
    return this.datePipe.transform(value, this.format ?? format, timezone);
  }

  static setFormat(format: keyof Constants): DateFormatPipe {
    return DateFormatPipe.createDateFormat(new Constants()[format]);
  }

  static setFormatCustom(format: string): DateFormatPipe {
    return DateFormatPipe.createDateFormat(format);
  }

  private static createDateFormat(format: string) {
    const dateFormat = new DateFormatPipe();
    dateFormat.format = format;
    return dateFormat;
  }
}
