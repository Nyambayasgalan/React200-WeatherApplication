import React from 'react';


export default class SearchHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='col-md-6'>
        <div className="card border-info">
          <div className="card-header" id='header'>Search History</div>
          <div className="card-body">
            <ul className="list-group list-group-flush full-width">
              {history.map(search => (
                <li className="list-group-item" key={search.time}>
                  {search.city}
                  <p className='text-right'>{search.date}<br />{search.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    );
  }
}