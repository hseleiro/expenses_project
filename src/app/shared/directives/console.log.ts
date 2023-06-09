import {Directive} from "@angular/core";

@Directive()
export class ConsoleLogHelper {

  consoleLog(text: string, element: any) {
    return console.log(text, element)
  }

}
