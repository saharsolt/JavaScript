import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg"; //parcel v2

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipe found for your request! Please try another one!";
  _message = "";

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();
