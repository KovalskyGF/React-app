import React from 'react';

class Header extends React.Component {
  render() {
    return (
          <div className="Header">
              <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 class="my-0 mr-md-auto font-weight-normal">ExampleTask</h5>
                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-dark" href="/">Новости</a>
                    <a class="p-2 text-dark" href="/publish">Добавить новость</a>
                </nav>
              </div>
          </div>     
    );
  }
}

export default Header;