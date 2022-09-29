class RecipeView {
  #parrentElement = document.querySelector(".recipe");
  #data;
  render(data) {
    this.data = data;
  }
}

export default new RecipeView();
