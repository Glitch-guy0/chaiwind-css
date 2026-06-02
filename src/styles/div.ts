type ColorValues = 100 | 200;
type Colors = "red" | "blue";
type PixelValues = {
  1: '2px';
  2: '4px';
  3: '8px';
  4: '16px';
  5: '32px';
  6: '64px';
  7: '128px';
  8: '256px';
  9: '512px';
  10: '1024px';
};


type ColorObject = Record<Colors, Record<ColorValues, string>>;
type BoundryElement = (element: HTMLElement, value: string | number) => void;
type ColorElement = (element: HTMLElement, color: Colors, value: ColorValues) => void;
type StyleClass = {
  bg: ColorElement;
  h: BoundryElement;
  w: BoundryElement;
  p: BoundryElement;
  b: BoundryElement;
  m: BoundryElement;
  round: BoundryElement;
};

export default class StyleDivElement {
  static 
  static styles: StyleClass = {
    bg: (element, color, value): void => {
      element.style.backgroundColor = this.getColor(color, value);
    },
    h: (element, value): void => {
      element.style.height = value;
    },
    w: (element, value) => {},
    p: (element, value) => {},
    b: (element, value) => {},
    m: (element, value) => {},
    round: (element, value) => {},
  };

  private static getColor(color: Colors, value: ColorValues) {
    const valueMap: ColorObject = {
      red: {
        100: '#ffcccc',
        200: '#ff6666',
      },
      blue: {
        100: '#cce5ff',
        200: '#6699ff',
      },
    };
    return valueMap[color][value];
  }

  private static getPixelValue(value: keyof PixelValues): string {
    
    return ""
  }
  public static parseDOM(element: Element) {}
}
