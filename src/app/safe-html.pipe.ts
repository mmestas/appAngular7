import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
