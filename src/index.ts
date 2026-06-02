import StyleDivElement from "./styles/div.js";
import StyleTextElement from "./styles/text.js";

export default class ChaiWindCSS {
  public static parseDOM(rootElement: Element): void {
    try {
      if (!rootElement) return;
      const classList = rootElement.classList;
      if (classList) {
        StyleTextElement.parseDOM(rootElement);
        StyleDivElement.parseDOM(rootElement);
      }

      if (rootElement.hasChildNodes()) {
        const childElements: HTMLCollection = rootElement.children;
        for (const child of childElements) {
          this.parseDOM(child)
        }
      }
    } catch (err) {
      console.log("something went wrong", err);
      throw err;
    }
  }
}
