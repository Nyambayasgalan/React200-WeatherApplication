import React from 'react';


export default class SearchHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
        <div className='card border-info'>
          <div className='card-header' id='header'>Search History {history.city}</div>
          <div className='card-body'>
            <ul className='list-group list-group-flush full-width'>
                {history.map((item, index)=> (
                <li className='list-group-item' key= {index}>
                  {item.city}
                  <p className='text-right'>{item.date}<br />{item.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
  }
}