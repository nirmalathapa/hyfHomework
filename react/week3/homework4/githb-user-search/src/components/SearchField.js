import React from "react";

class SearchField extends React.Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);    
    this._handleClick = this._handleClick.bind(this);    
  }

  _handleChange(e){
    this.props.onHandleChange(e.target.value);
  }
  _handleClick(){ 
    this.props.onHandleClick();
  }
  
  render() {
    return (
      <div className="container mt-6">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">
              Search Github Users
            </h1>

            <div className="card bg-light mb-4">
              <div className="card-body text-center">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    placeholder="Search Users"
                    className="form-control"                    
                    value={this.props.searchQuery}
                    onChange={this._handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-sm btn-outline-info "
                      title="All Github"
                      onClick={this._handleClick}
                    >
                      All Github
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchField;
