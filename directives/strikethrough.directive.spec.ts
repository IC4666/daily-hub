import { StrikethroughDirective } from './strikethrough.directive';

describe('StrikethroughDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as any;
    const mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle', 'addClass', 'removeClass', 'setProperty']);
    const directive = new StrikethroughDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
