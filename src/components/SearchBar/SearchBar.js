import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {term:'',location:'',sortBy:'best_match'};

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }


  getSortByClass (sortByOptions) {
    if (this.state.sortBy === sortByOptions) {
      return 'active';
    } else {
      return '';
    }
  }


  handleSortByChange (sortByOptions) {
    this.setState({sortBy: sortByOptions})
  }

  handleTermChange(event) {
    this.setState ({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOptions => {
      let sortByOptionsValue = sortByOptions[sortByOptions];
      return <li key = {sortByOptionsValue}
        className={this.getSortByClass(sortByOptionsValue)}
        onClick={this.handleSortByChange}>
        {sortByOptions}
      </li>;
    });
  }
  render() {
    return <div class="SearchBar">
             <div class="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
             </div>
             <div class="SearchBar-fields">
               <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
               <input placeholder="Where?" onChange={this.handleLocationChange}/>
             </div>
             <div class="SearchBar-submit">
               <a onCLick={this.handleSearch}>"Let's Go"</a>
             </div>
           </div>
 }
}

export default SearchBar;
