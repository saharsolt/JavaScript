//import icons from "../img/icons.svg";//parcel v1
import icons from "url:../../img/icons.svg"; //parcel v2

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {object | object[]} data the data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render= false
   * @this {object} View instance
   * @author Sahar
   * @Todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    console.log(this._data);
    const markup = this._generateMarkup();

    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  /**
   *
   * @param {object} data  the data to be updated
   */
  update(data) {
    this._data = data;
    console.log(this._data);
    const markup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(markup);

    const newElements = Array.from(newDOM.querySelectorAll("*"));

    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    console.log(newElements);
    console.log(curElements);
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //console.log(curEl, newEl.isEqualNode(curEl));
      if (
        // Update changed Text
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
        //console.log(newEl.firstChild.nodeValue.trim());
      }
      // Update changed Attribute
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
          // console.log(Array.from(newEl.attributes));
        });
      }
    });
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `<div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> -->`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> -->`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}