import React, { Component } from "react";
import SearchInput from "./searchInput";
import Select from "react-select";
import ArticleClip from "./articleClip";

const SortOptions = [
  { label: "Date", value: "date" },
  { label: "Popularity", value: "popularity" },
  { label: "Relevance", value: "relevance" },
  { label: "None", value: "none" },
];

class News extends Component {
  state = {
    searchQuery: "",
    selectedOption: "",
    newsData: [],
  };

  handleSearch = (query) => {
    if (query === "" || query === null) {
      console.log("query cannot be blank");
      return;
    }

    var searchCriteria = this.state.selectedOption;

    var url = `https://newsapi.org/v2/everything?q=${query}&sortBy=${searchCriteria}&apiKey=27ebcf62fa6d4be99ecd063139ae1195`;
    var req = new Request(url);

    fetch(req)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ newsData: data.articles });
      });
  };

  handleSort = (sortBy) => {
    this.setState({ selectedOption: sortBy });
  };

  handleChange = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery, selectedOption, newsData } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid bg-light shadow-sm">
          <div className="row justify-content-center align-items-center">
            <div className="col-4 col-md-3 offset-md-1 offset-lg-2">
              <SearchInput
                searchValue={searchQuery}
                selectedOption={selectedOption}
                onChange={this.handleChange}
                onClickSearch={this.handleSearch}
              />
            </div>

            <div className="col-4">
              <Select
                options={SortOptions}
                onChange={(e) => this.handleSort(e.value)}
              />
            </div>

            <div className="col">
              <button
                className="btn btn-primary pl-sm-5 pr-sm-5"
                onClick={() => this.handleSearch(searchQuery)}
              >
                <span className="bold">Search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 pt-5 pb-3">
          <div className="row d-flex justify-content-center">
            {newsData.map((dataItem, index) => (
              <ArticleClip
                key={index}
                newsImage={
                  dataItem.urlToImage
                    ? dataItem.urlToImage
                    : `https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-600w-744886198.jpg`
                }
                title={dataItem.title}
                description={dataItem.description}
                externalFull={dataItem.url}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
